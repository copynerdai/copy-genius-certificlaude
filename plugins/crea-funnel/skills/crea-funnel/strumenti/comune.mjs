// Funzioni comuni agli strumenti di crea-funnel.
//
// Le dipendenze (Playwright con Chromium, sharp, Wrangler) stanno fuori dal plugin, nella cartella
// ~/.crea-funnel (su Windows %USERPROFILE%\.crea-funnel), così un aggiornamento del plugin non le cancella.
// La variabile d'ambiente CREA_FUNNEL_HOME indica una cartella diversa, per esempio per le prove.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

// Versioni provate con gli strumenti. prepara-ambiente.mjs installa esattamente queste.
export const VERSIONI = {
  playwright: '1.63.0',
  sharp: '0.35.4',
  wrangler: '4.133.0',
};

export const NODE_MINIMA = 22;

export const CARTELLA_STRUMENTI = path.dirname(fileURLToPath(import.meta.url));

export function cartellaDipendenze() {
  return path.resolve(process.env.CREA_FUNNEL_HOME || path.join(os.homedir(), '.crea-funnel'));
}

// File delle chiavi. La variabile CREA_FUNNEL_SEGRETI (o l'opzione --segreti degli strumenti) indica un file diverso.
export function percorsoSegreti(cartella) {
  if (cartella) return path.join(cartella, 'segreti.env');
  if (process.env.CREA_FUNNEL_SEGRETI) return path.resolve(process.env.CREA_FUNNEL_SEGRETI);
  return path.join(cartellaDipendenze(), 'segreti.env');
}

// I nomi ottenuti da pagine esterne non possono uscire dalla destinazione né attraversare symlink.
export function percorsoInterno(radice, relativo) {
  const base = path.resolve(radice);
  if (path.isAbsolute(relativo)) throw new Error(`percorso assoluto non ammesso: ${relativo}`);
  const file = path.resolve(base, relativo);
  if (file === base || !file.startsWith(base + path.sep)) throw new Error(`percorso fuori dalla cartella di destinazione: ${relativo}`);
  for (let p = file; ; p = path.dirname(p)) {
    try {
      if (fs.lstatSync(p).isSymbolicLink()) throw new Error(`collegamento simbolico non ammesso nella destinazione: ${p}`);
    } catch (errore) {
      if (errore.code !== 'ENOENT') throw errore;
    }
    if (p === base) break;
  }
  return file;
}

// Le prove usano soltanto server locali e valori fittizi, senza aprire il file delle chiavi.
export function preparaApi(servizio, indirizzo, test = false, fileSegreti) {
  const ufficiale = servizio === 'openai' ? 'https://api.openai.com/v1' : 'https://api.cloudflare.com/client/v4';
  const url = new URL(indirizzo || ufficiale);
  if (url.username || url.password || url.search || url.hash) throw new Error('indirizzo API non valido');
  if (test) {
    if (fileSegreti) throw new Error('--modalita-test non accetta --segreti: usa soltanto credenziali fittizie');
    if (url.protocol !== 'http:' || !['127.0.0.1', '[::1]'].includes(url.hostname)) throw new Error('--modalita-test richiede un server HTTP su 127.0.0.1 o [::1]');
    return { base: url.href.replace(/\/$/, ''), segreti: { file: 'nessuno (modalità test)', esiste: false, valori: { OPENAI_API_KEY: 'crea-funnel-test-openai', CLOUDFLARE_API_TOKEN: 'crea-funnel-test-cloudflare', CLOUDFLARE_ACCOUNT_ID: 'crea-funnel-test-account' } } };
  }
  if (url.href.replace(/\/$/, '') !== ufficiale) throw new Error(`le chiavi reali possono essere inviate solo a ${ufficiale}; per un server locale usa --modalita-test`);
  return { base: ufficiale, segreti: leggiSegreti(fileSegreti || percorsoSegreti()) };
}

// Variabili che tengono browser, cache di npm e registri di Wrangler dentro la cartella delle dipendenze.
export function ambienteDipendenze(cartella = cartellaDipendenze()) {
  return {
    PLAYWRIGHT_BROWSERS_PATH: path.join(cartella, 'browser'),
    npm_config_cache: path.join(cartella, 'cache-npm'),
    npm_config_update_notifier: 'false',
    WRANGLER_SEND_METRICS: 'false',
    WRANGLER_LOG_PATH: path.join(cartella, 'registri-wrangler'),
  };
}

export class DipendenzaMancante extends Error {}

// Carica un pacchetto installato nella cartella delle dipendenze.
export async function carica(nome, cartella = cartellaDipendenze()) {
  Object.assign(process.env, ambienteDipendenze(cartella));
  const richiedi = createRequire(path.join(cartella, 'package.json'));
  let percorso;
  try {
    percorso = richiedi.resolve(nome);
  } catch {
    throw new DipendenzaMancante(
      `Manca «${nome}» in ${cartella}. Prepara l'ambiente con: node "${path.join(CARTELLA_STRUMENTI, 'prepara-ambiente.mjs')}"`,
    );
  }
  const modulo = await import(pathToFileURL(percorso).href);
  return modulo.default ?? modulo;
}

export function versioneInstallata(nome, cartella = cartellaDipendenze()) {
  try {
    const dati = JSON.parse(fs.readFileSync(path.join(cartella, 'node_modules', nome, 'package.json'), 'utf8'));
    return dati.version;
  } catch {
    return null;
  }
}

// Esegue un comando e restituisce codice d'uscita e output. Su Windows npm e npx sono file .cmd
// e partono solo attraverso la shell: in quel caso gli argomenti non devono contenere spazi.
export function esegui(comando, argomenti, { cwd, env, mostra = false, timeout = 0 } = {}) {
  return new Promise((risolvi) => {
    const conShell = process.platform === 'win32' && ['npm', 'npx'].includes(comando);
    const figlio = spawn(comando, argomenti, {
      cwd,
      env: { ...process.env, ...env },
      shell: conShell,
      windowsHide: true,
    });
    let uscita = '';
    let timer = null;
    if (timeout) timer = setTimeout(() => figlio.kill(), timeout);
    const raccogli = (flusso, destinazione) => {
      flusso.on('data', (pezzo) => {
        uscita += pezzo;
        if (mostra) destinazione.write(pezzo);
      });
    };
    raccogli(figlio.stdout, process.stdout);
    raccogli(figlio.stderr, process.stderr);
    figlio.on('error', (errore) => {
      if (timer) clearTimeout(timer);
      risolvi({ codice: -1, uscita: uscita + String(errore.message) });
    });
    figlio.on('close', (codice) => {
      if (timer) clearTimeout(timer);
      risolvi({ codice: codice ?? -1, uscita });
    });
  });
}

// ---------- opzioni della riga di comando ----------

// definizioni: { '--nome': 'flag' | 'testo' | 'numero' | 'lista' }. Restituisce { posizionali, opzioni }.
// --help e -h stampano l'aiuto ed escono con 0; opzioni sconosciute o valori mancanti escono con 2.
export function leggiOpzioni(argv, definizioni, aiuto) {
  const posizionali = [];
  const opzioni = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--help' || a === '-h') {
      console.log(aiuto);
      process.exit(0);
    }
    if (!a.startsWith('--') || a === '--') {
      posizionali.push(a);
      continue;
    }
    const tipo = definizioni[a];
    if (!tipo) erroreUso(`opzione sconosciuta: ${a}`, aiuto);
    const chiave = a.slice(2);
    if (tipo === 'flag') {
      opzioni[chiave] = true;
      continue;
    }
    const valore = argv[++i];
    if (valore === undefined) erroreUso(`${a} richiede un valore`, aiuto);
    if (tipo === 'numero') {
      const n = Number(valore);
      if (!Number.isFinite(n)) erroreUso(`${a} richiede un numero, non «${valore}»`, aiuto);
      opzioni[chiave] = n;
    } else if (tipo === 'lista') {
      (opzioni[chiave] ||= []).push(valore);
    } else {
      opzioni[chiave] = valore;
    }
  }
  return { posizionali, opzioni };
}

export function erroreUso(messaggio, aiuto) {
  console.error(`Errore: ${messaggio}\n\nPer l'aiuto completo usa --help.`);
  if (aiuto) console.error(`\n${aiuto.split('\n\n')[1] || ''}`);
  process.exit(2);
}

// ---------- chiavi ----------

export const NOMI_CHIAVI = ['OPENAI_API_KEY', 'CLOUDFLARE_API_TOKEN', 'CLOUDFLARE_ACCOUNT_ID'];

// Legge segreti.env solo nella memoria di questo processo. Righe NOME=valore; commenti con #;
// «export » iniziale e virgolette intorno al valore sono ammessi. I valori vuoti non contano.
export function leggiSegreti(file = percorsoSegreti()) {
  if (!fs.existsSync(file)) return { file, esiste: false, valori: {} };
  const valori = {};
  for (const grezza of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const riga = grezza.trim().replace(/^export\s+/, '');
    if (!riga || riga.startsWith('#')) continue;
    const uguale = riga.indexOf('=');
    if (uguale < 1) continue;
    const nome = riga.slice(0, uguale).trim();
    let valore = riga.slice(uguale + 1).trim();
    if (/^(['"]).*\1$/.test(valore)) valore = valore.slice(1, -1);
    if (valore) valori[nome] = valore;
  }
  return { file, esiste: true, valori };
}

// Toglie da un testo i valori delle chiavi, le forme tipiche di chiavi e token (anche mascherate,
// come «sk-abc***xyz» nei messaggi di OpenAI) e gli identificativi esadecimali da 32 caratteri.
export function nascondi(testo, valori = []) {
  let s = String(testo ?? '');
  for (const v of valori) {
    if (v && v.length >= 4) s = s.split(v).join('[VALORE NASCOSTO]');
  }
  s = s.replace(/\b(?:sk|cfut|cfat|cfk)[-_][A-Za-z0-9_*.\-]{4,}/g, '[CHIAVE NASCOSTA]');
  s = s.replace(/\bBearer\s+[A-Za-z0-9._\-]{8,}/g, 'Bearer [CHIAVE NASCOSTA]');
  s = s.replace(/\b[0-9a-f]{32}\b/gi, '[ID NASCOSTO]');
  return s;
}

// ---------- rapporti ----------

// Rapporto in Markdown: si stampa e, se richiesto, si salva su file.
export class Rapporto {
  constructor(titolo) {
    this.righe = [`# ${titolo}`, ''];
  }
  sezione(titolo) {
    this.righe.push(`## ${titolo}`, '');
    return this;
  }
  testo(...righe) {
    this.righe.push(...righe, '');
    return this;
  }
  elenco(voci) {
    if (voci.length) this.righe.push(...voci.map((v) => `- ${v}`), '');
    return this;
  }
  tabella(intestazioni, righe) {
    const cella = (c) => String(c ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
    this.righe.push(`| ${intestazioni.map(cella).join(' | ')} |`, `|${intestazioni.map(() => '---').join('|')}|`);
    for (const r of righe) this.righe.push(`| ${r.map(cella).join(' | ')} |`);
    this.righe.push('');
    return this;
  }
  toString() {
    return this.righe.join('\n').replace(/\n+$/, '\n');
  }
  stampa() {
    process.stdout.write(this.toString());
    return this;
  }
  salva(file) {
    if (!file) return this;
    fs.mkdirSync(path.dirname(path.resolve(file)), { recursive: true });
    fs.writeFileSync(file, this.toString());
    console.log(`\nRapporto salvato in ${path.resolve(file)}`);
    return this;
  }
}

// ---------- blocco su file ----------

// Esegue fn mentre tiene un blocco esclusivo (una cartella «<file>.blocco»), così più processi
// in parallelo non scrivono lo stesso file insieme. Un blocco più vecchio di 60 secondi è abbandonato.
export async function conBlocco(file, fn) {
  const blocco = `${file}.blocco`;
  const inizio = Date.now();
  for (;;) {
    try {
      fs.mkdirSync(blocco);
      break;
    } catch (errore) {
      if (errore.code !== 'EEXIST') throw errore;
      try {
        if (Date.now() - fs.statSync(blocco).mtimeMs > 60000) fs.rmdirSync(blocco);
      } catch {}
      if (Date.now() - inizio > 120000) throw new Error(`blocco ${blocco} occupato da più di due minuti`);
      await new Promise((r) => setTimeout(r, 25 + Math.random() * 50));
    }
  }
  try {
    return await fn();
  } finally {
    fs.rmdirSync(blocco);
  }
}

export function formatoByte(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1).replace('.', ',')} KB`;
  return `${(n / 1024 / 1024).toFixed(2).replace('.', ',')} MB`;
}

// ---------- pagine sorgente e pagine assemblate ----------

// Nome del file, nella cartella del funnel, in cui assembla.mjs registra l'ultimo assemblaggio.
export const NOME_MANIFESTO = '.assemblaggio.json';

// Tutti i file di una cartella, ricorsivamente, con percorso assoluto.
export function elencaFile(cartella) {
  const file = [];
  const visita = (c) => {
    for (const v of fs.readdirSync(c, { withFileTypes: true })) {
      const p = path.join(c, v.name);
      if (v.isDirectory()) visita(p);
      else if (v.isFile()) file.push(p);
    }
  };
  visita(cartella);
  return file;
}

// Gli strumenti che ricevono pagine devono lavorare sulle pagine assemblate, non sulla sorgente con i segnaposto.
// Restituisce { errore, avvisi }: errore se fra le pagine ci sono segnaposto <!-- @parte ... --> non sostituiti;
// avviso se la sorgente o le parti sono cambiate dopo l'ultimo assemblaggio registrato in .assemblaggio.json.
export function controllaCartellaPagine(percorso) {
  const assoluto = path.resolve(percorso);
  const avvisi = [];
  if (!fs.existsSync(assoluto)) return { errore: null, avvisi };
  const singolo = fs.statSync(assoluto).isFile();
  const cartella = singolo ? path.dirname(assoluto) : assoluto;
  const pagine = singolo ? [assoluto] : elencaFile(cartella).filter((f) => /\.html?$/i.test(f)).slice(0, 500);
  const conSegnaposto = pagine.filter((f) => /<!--\s*@parte\b/.test(fs.readFileSync(f, 'utf8'))).map((f) => path.relative(cartella, f) || path.basename(f));
  if (conSegnaposto.length) {
    return {
      errore: `«${percorso}» contiene pagine sorgente con segnaposto (${conSegnaposto.slice(0, 5).join(', ')}${conSegnaposto.length > 5 ? ', …' : ''}): assembla prima con assembla.mjs e usa la cartella prodotta (pubblico/)`,
      avvisi,
    };
  }
  const progetto = path.dirname(cartella);
  const fileManifesto = path.join(progetto, NOME_MANIFESTO);
  if (fs.existsSync(fileManifesto)) {
    try {
      const m = JSON.parse(fs.readFileSync(fileManifesto, 'utf8'));
      if (m.uscita === path.basename(cartella)) {
        const creato = Date.parse(m.creato) || 0;
        const cambiati = [];
        for (const nome of [m.sorgente, m.parti]) {
          const c = path.join(progetto, nome || '');
          if (!nome || !fs.existsSync(c)) continue;
          for (const f of elencaFile(c)) if (fs.statSync(f).mtimeMs > creato + 1000) cambiati.push(`${nome}/${path.relative(c, f).split(path.sep).join('/')}`);
        }
        if (cambiati.length) avvisi.push(`file cambiati dopo l'ultimo assemblaggio: ${cambiati.slice(0, 5).join(', ')}${cambiati.length > 5 ? ', …' : ''}. Riassembla con assembla.mjs, altrimenti ${path.basename(cartella)}/ non riflette le modifiche`);
      }
    } catch {}
  }
  return { errore: null, avvisi };
}

#!/usr/bin/env node
// Pubblica pagine statiche su Cloudflare Workers con Wrangler e le controlla online.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawn } from 'node:child_process';
import {
  leggiOpzioni,
  erroreUso,
  leggiSegreti,
  nascondi,
  percorsoSegreti,
  cartellaDipendenze,
  ambienteDipendenze,
  CARTELLA_STRUMENTI,
  Rapporto,
  controllaCartellaPagine,
} from './comune.mjs';
import { gestisciRichiesta, leggiRedirects, leggiHeaders } from './server-anteprima.mjs';

const AIUTO = `Pubblica una cartella di pagine su Cloudflare Workers e controlla il risultato online.

Uso:
  node pubblica-cloudflare.mjs <wrangler.jsonc> --prova        controlla tutto senza caricare nulla
  node pubblica-cloudflare.mjs <wrangler.jsonc>                pubblica, poi controlla online
  node pubblica-cloudflare.mjs <wrangler.jsonc> --solo-verifica <indirizzo>   solo il controllo online

Cosa fa:
  1. legge wrangler.jsonc (modello in riferimenti/wrangler-modello.jsonc) e controlla nome, cartella delle pagine,
     workers_dev e preview_urls disattivati, dominio personalizzato;
  2. copia configurazione e pagine in una cartella di pubblicazione fuori dal progetto,
     ~/.crea-funnel/pubblicazioni/<nome>/ (la copia precedente va in <nome>-precedenti/);
  3. controlla che nella copia non ci siano credenziali (controlla-credenziali.mjs): se ne trova, si ferma;
  4. lancia «wrangler deploy» (con --prova: «wrangler deploy --dry-run») passando CLOUDFLARE_API_TOKEN
     e CLOUDFLARE_ACCOUNT_ID di segreti.env solo al comando, e nasconde gli identificativi nell'output;
  5. dopo la pubblicazione controlla online ogni pagina e ogni file: risposta, reindirizzamenti di _redirects
     e degli indirizzi senza .html, intestazioni di _headers, file uguali a quelli locali, _headers,
     _redirects e wrangler.jsonc non raggiungibili, http che porta a https, nessun cookie.

Opzioni:
  --prova                    nessun caricamento: copia, controlli e wrangler deploy --dry-run
  --solo-verifica <indirizzo> confronta le pagine locali con quelle servite a quell'indirizzo
  --indirizzo <indirizzo>    indirizzo da controllare dopo la pubblicazione (predefinito: https:// + il dominio di routes)
  --segreti <file>           file delle chiavi (predefinito: segreti.env nella cartella delle dipendenze)
  --salva <file.md>          salva anche il rapporto del controllo online

Codice d'uscita: 0 fatto e controlli superati, 1 un controllo o la pubblicazione non riusciti, 2 opzioni non valide.`;

const { posizionali, opzioni: o } = leggiOpzioni(
  process.argv.slice(2),
  { '--prova': 'flag', '--solo-verifica': 'testo', '--indirizzo': 'testo', '--segreti': 'testo', '--salva': 'testo' },
  AIUTO,
);
if (posizionali.length !== 1) erroreUso('indica il file wrangler.jsonc del progetto', AIUTO);
if (o.prova && o['solo-verifica']) erroreUso('usa --prova oppure --solo-verifica, non entrambi', AIUTO);
const fileConfigurazione = path.resolve(posizionali[0]);
if (!fs.existsSync(fileConfigurazione)) erroreUso(`configurazione non trovata: ${fileConfigurazione}`, AIUTO);
const fileSegreti = o.segreti ? path.resolve(o.segreti) : percorsoSegreti();

// ---------- configurazione ----------

// JSON con commenti (// e /* */) e virgole finali, come lo accetta Wrangler.
export function leggiJsonc(testo) {
  let risultato = '';
  let inStringa = false;
  for (let i = 0; i < testo.length; i++) {
    const c = testo[i];
    if (inStringa) {
      risultato += c;
      if (c === '\\') risultato += testo[++i];
      else if (c === '"') inStringa = false;
    } else if (c === '"') {
      inStringa = true;
      risultato += c;
    } else if (c === '/' && testo[i + 1] === '/') {
      while (i < testo.length && testo[i] !== '\n') i++;
      risultato += '\n';
    } else if (c === '/' && testo[i + 1] === '*') {
      i += 2;
      while (i < testo.length && !(testo[i] === '*' && testo[i + 1] === '/')) i++;
      i++;
    } else risultato += c;
  }
  return JSON.parse(risultato.replace(/,(\s*[}\]])/g, '$1'));
}

function controllaConfigurazione() {
  let config;
  try {
    config = leggiJsonc(fs.readFileSync(fileConfigurazione, 'utf8'));
  } catch (errore) {
    throw new Error(`wrangler.jsonc non è leggibile: ${errore.message}`);
  }
  const problemi = [];
  const avvisi = [];
  if (!config.name || !/^[a-z0-9-]+$/.test(config.name) || /^-|-$/.test(config.name)) problemi.push('«name» manca o contiene caratteri diversi da minuscole, numeri e trattini');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(config.compatibility_date || '')) problemi.push('«compatibility_date» manca o non è nella forma AAAA-MM-GG');
  if (config.main) problemi.push('«main» indica un Worker con codice: questo strumento pubblica solo pagine statiche');
  if (config.account_id) problemi.push('«account_id» non va scritto nel file: lo strumento lo prende da segreti.env');
  const cartellaPagine = config.assets?.directory ? path.resolve(path.dirname(fileConfigurazione), config.assets.directory) : null;
  if (!cartellaPagine) problemi.push('manca «assets.directory», la cartella delle pagine');
  else if (!fs.existsSync(cartellaPagine) || !fs.statSync(cartellaPagine).isDirectory()) problemi.push(`la cartella delle pagine non esiste: ${cartellaPagine}`);
  if (config.workers_dev !== false) avvisi.push('«workers_dev» non è false: il sito risponderebbe anche a un indirizzo *.workers.dev');
  if (config.preview_urls !== false) avvisi.push('«preview_urls» non è false: ogni versione avrebbe un indirizzo di anteprima pubblico');
  const domini = (config.routes || []).filter((r) => r && r.custom_domain).map((r) => r.pattern);
  if (!domini.length) avvisi.push('nessun dominio personalizzato in «routes» (custom_domain: true)');
  if (cartellaPagine && fs.existsSync(cartellaPagine)) {
    const controllo = controllaCartellaPagine(cartellaPagine);
    if (controllo.errore) problemi.push(controllo.errore);
    avvisi.push(...controllo.avvisi);
    const redirects = leggiRedirects(cartellaPagine);
    if (!fs.existsSync(path.join(cartellaPagine, 'index.html')) && !redirects.statiche.has('/')) {
      avvisi.push("la radice del dominio (/) risponderà 404: manca index.html e _redirects non ha una regola per /, per esempio «/ /landing 302»");
    }
    const intestazioni = fs.existsSync(path.join(cartellaPagine, '_headers')) ? fs.readFileSync(path.join(cartellaPagine, '_headers'), 'utf8') : '';
    if (!/x-robots-tag\s*:[^\n]*noindex/i.test(intestazioni)) {
      avvisi.push('_headers non contiene «X-Robots-Tag: noindex»: va bene per il dominio definitivo, ma un indirizzo di prova potrebbe finire nei motori di ricerca');
    }
  }
  const html = config.assets?.html_handling ?? 'auto-trailing-slash';
  if (html !== 'auto-trailing-slash') avvisi.push(`«html_handling» è «${html}»: l'anteprima locale e il controllo online seguono solo auto-trailing-slash`);
  return { config, cartellaPagine, domini, problemi, avvisi };
}

// ---------- esecuzione di wrangler con output ripulito ----------

function eseguiWrangler(argomenti, cwd, ambiente, valoriSegreti) {
  const wrangler = path.join(cartellaDipendenze(), 'node_modules', 'wrangler', 'bin', 'wrangler.js');
  if (!fs.existsSync(wrangler)) throw new Error(`Wrangler non è installato: prepara l'ambiente con node "${path.join(CARTELLA_STRUMENTI, 'prepara-ambiente.mjs')}"`);
  return new Promise((risolvi) => {
    const figlio = spawn(process.execPath, [wrangler, ...argomenti], { cwd, env: ambiente, windowsHide: true });
    let resto = '';
    const scrivi = (pezzo) => {
      resto += pezzo;
      const righe = resto.split('\n');
      resto = righe.pop();
      for (const r of righe) process.stdout.write(`  ${nascondi(r, valoriSegreti)}\n`);
    };
    figlio.stdout.on('data', scrivi);
    figlio.stderr.on('data', scrivi);
    figlio.on('close', (codice) => {
      if (resto) process.stdout.write(`  ${nascondi(resto, valoriSegreti)}\n`);
      risolvi(codice ?? 1);
    });
  });
}

function sposta(da, a) {
  fs.mkdirSync(path.dirname(a), { recursive: true });
  try {
    fs.renameSync(da, a);
  } catch (errore) {
    if (errore.code !== 'EXDEV') throw errore;
    fs.cpSync(da, a, { recursive: true });
    fs.rmSync(da, { recursive: true });
  }
}

// ---------- controllo online ----------

function elencaFile(cartella) {
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

async function richiesta(url) {
  const r = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(30000), headers: { 'user-agent': 'crea-funnel controllo' } });
  const corpo = Buffer.from(await r.arrayBuffer());
  return { stato: r.status, intestazioni: Object.fromEntries(r.headers), corpo, cookie: r.headers.getSetCookie?.() || [] };
}

async function controllaOnline(cartellaPagine, base) {
  const rapporto = new Rapporto('Controllo delle pagine pubblicate');
  const problemi = [];
  const righe = [];
  const baseUrl = new URL(base);
  const origine = baseUrl.origin;
  rapporto.testo(`Indirizzo: ${origine}`, `Pagine locali: \`${cartellaPagine}\``, 'Le risposte attese sono calcolate dai file locali con le regole di Cloudflare (le stesse di anteprima.mjs).');

  const confronto = async (percorso, perche) => {
    const atteso = gestisciRichiesta(cartellaPagine, { url: percorso, method: 'GET', headers: {} });
    let reale;
    try {
      reale = await richiesta(origine + percorso);
    } catch (errore) {
      problemi.push([percorso, `non raggiungibile: ${errore.cause?.code || errore.message}`]);
      righe.push([percorso, perche, atteso.stato, 'errore', '']);
      return;
    }
    const diversi = [];
    if (atteso.stato !== reale.stato) diversi.push(`stato ${reale.stato} invece di ${atteso.stato}`);
    const locAttesa = atteso.intestazioni.location;
    if (locAttesa !== undefined) {
      const locReale = reale.intestazioni.location ? new URL(reale.intestazioni.location, origine + percorso) : null;
      const locLocale = new URL(locAttesa, origine + percorso);
      if (!locReale || locReale.href !== locLocale.href) diversi.push(`porta a ${reale.intestazioni.location || 'nessun indirizzo'} invece di ${locAttesa}`);
    }
    for (const r of leggiHeaders(cartellaPagine).regole) {
      if (!r.espressione.test(percorso.split('?')[0])) continue;
      for (const nome of Object.keys(r.imposta)) {
        if (atteso.intestazioni[nome] !== undefined && reale.intestazioni[nome] !== atteso.intestazioni[nome]) {
          diversi.push(`${nome}: «${reale.intestazioni[nome] ?? 'assente'}» invece di «${atteso.intestazioni[nome]}»`);
        }
      }
    }
    if (reale.cookie.length) diversi.push(`imposta ${reale.cookie.length} cookie`);
    let uguale = '';
    if (atteso.corpo && atteso.stato === 200) {
      const h = (b) => crypto.createHash('sha256').update(b).digest('hex');
      uguale = h(atteso.corpo) === h(reale.corpo) ? 'sì' : 'no';
      if (uguale === 'no') diversi.push('contenuto diverso dal file locale');
    }
    if (diversi.length) problemi.push([percorso, diversi.join('; ')]);
    righe.push([percorso, perche, reale.stato, diversi.length ? '**diverso**' : 'come atteso', uguale]);
  };

  // Ogni file pubblicato, con l'indirizzo con cui lo si apre.
  for (const file of elencaFile(cartellaPagine).sort()) {
    const relativo = '/' + path.relative(cartellaPagine, file).split(path.sep).join('/');
    if (relativo === '/_headers' || relativo === '/_redirects') continue;
    let percorso = relativo;
    if (relativo.endsWith('/index.html')) percorso = relativo.slice(0, -10);
    else if (relativo.endsWith('.html')) percorso = relativo.slice(0, -5);
    await confronto(percorso.split('/').map(encodeURIComponent).join('/'), relativo.endsWith('.html') ? 'pagina' : 'file');
  }
  // Indirizzi con .html e regole di _redirects.
  for (const file of elencaFile(cartellaPagine).filter((f) => f.endsWith('.html')).slice(0, 20)) {
    const relativo = '/' + path.relative(cartellaPagine, file).split(path.sep).join('/');
    await confronto(relativo.split('/').map(encodeURIComponent).join('/'), 'indirizzo con .html');
  }
  const redirects = leggiRedirects(cartellaPagine);
  for (const da of redirects.statiche.keys()) await confronto(da, 'regola di _redirects');
  // File che non devono essere raggiungibili.
  for (const nascosto of ['/_headers', '/_redirects', '/wrangler.jsonc', '/.env', '/segreti.env']) await confronto(nascosto, 'non deve essere raggiungibile');

  // http verso https
  if (baseUrl.protocol === 'https:') {
    try {
      const r = await fetch(`http://${baseUrl.host}/`, { redirect: 'manual', signal: AbortSignal.timeout(30000) });
      const loc = r.headers.get('location') || '';
      const ok = r.status >= 300 && r.status < 400 && loc.startsWith('https://');
      righe.push(['http://…/', 'deve portare a https', r.status, ok ? 'come atteso' : '**diverso**', '']);
      if (!ok) problemi.push(['http://…/', `risponde ${r.status} ${loc} invece di portare a https`]);
    } catch (errore) {
      problemi.push(['http://…/', `non raggiungibile: ${errore.cause?.code || errore.message}`]);
    }
  }

  rapporto.tabella(['Indirizzo', 'Cosa si controlla', 'Stato', 'Esito', 'File uguale al locale'], righe);
  // Lo stesso problema su molti indirizzi (per esempio un'intestazione di _headers) si mostra una volta sola.
  const perProblema = new Map();
  for (const [indirizzo, testo] of problemi) {
    for (const parte of testo.split('; ')) {
      if (!perProblema.has(parte)) perProblema.set(parte, []);
      perProblema.get(parte).push(indirizzo);
    }
  }
  if (problemi.length) {
    rapporto.sezione(`Problemi: ${perProblema.size} tipi su ${problemi.length} indirizzi`).tabella(
      ['Problema', 'Indirizzi', 'Quali'],
      [...perProblema.entries()].map(([parte, indirizzi]) => [parte, indirizzi.length, indirizzi.slice(0, 5).join(', ') + (indirizzi.length > 5 ? ` e altri ${indirizzi.length - 5}` : '')]),
    );
  }
  rapporto.testo(problemi.length ? `Esito: **${problemi.length} indirizzi diversi fra online e locale**.` : `Esito: **online tutto come in locale** (${righe.length} controlli).`);
  rapporto.stampa().salva(o.salva);
  return problemi.length === 0;
}

// ---------- esecuzione ----------

let codice = 0;
try {
  const { config, cartellaPagine, domini, problemi, avvisi } = controllaConfigurazione();
  console.log(`Configurazione: ${fileConfigurazione}`);
  for (const a of avvisi) console.log(`  Attenzione: ${a}`);
  if (problemi.length) {
    for (const p of problemi) console.error(`  Problema: ${p}`);
    throw new Error('correggi wrangler.jsonc e riprova (modello in riferimenti/wrangler-modello.jsonc)');
  }

  if (o['solo-verifica']) {
    codice = (await controllaOnline(cartellaPagine, o['solo-verifica'])) ? 0 : 1;
  } else {
    // 1. Copia fuori dal progetto.
    const radice = path.join(cartellaDipendenze(), 'pubblicazioni');
    const cartella = path.join(radice, config.name);
    if (fs.existsSync(cartella)) {
      const data = new Date().toISOString().replace(/[:.]/g, '-');
      sposta(cartella, path.join(radice, `${config.name}-precedenti`, data));
    }
    fs.mkdirSync(cartella, { recursive: true });
    fs.cpSync(cartellaPagine, path.join(cartella, 'pubblico'), { recursive: true });
    const copiaConfig = { ...config, assets: { ...config.assets, directory: './pubblico' } };
    fs.writeFileSync(path.join(cartella, 'wrangler.jsonc'), JSON.stringify(copiaConfig, null, 2) + '\n');
    const numeroFile = elencaFile(path.join(cartella, 'pubblico')).length;
    console.log(`Copiati ${numeroFile} file e la configurazione in ${cartella}`);

    // 2. Credenziali.
    console.log('Controllo delle credenziali nella copia:');
    const controllo = await new Promise((risolvi) => {
      const figlio = spawn(process.execPath, [path.join(CARTELLA_STRUMENTI, 'controlla-credenziali.mjs'), cartella, '--segreti', fileSegreti], { windowsHide: true });
      let uscita = '';
      figlio.stdout.on('data', (d) => (uscita += d));
      figlio.stderr.on('data', (d) => (uscita += d));
      figlio.on('close', (c) => risolvi({ codice: c, uscita }));
    });
    process.stdout.write(controllo.uscita.split('\n').map((r) => `  ${r}`).join('\n') + '\n');
    if (controllo.codice !== 0) throw new Error('trovate credenziali o file sospetti nella copia da pubblicare: pubblicazione fermata, nulla è stato caricato');

    // 3. Wrangler.
    const segreti = leggiSegreti(fileSegreti);
    const valori = Object.values(segreti.valori);
    const ambiente = {
      ...process.env,
      ...ambienteDipendenze(),
      XDG_CONFIG_HOME: path.join(cartellaDipendenze(), 'configurazione-wrangler'),
      WRANGLER_SEND_METRICS: 'false',
    };
    delete ambiente.CLOUDFLARE_API_TOKEN;
    delete ambiente.CLOUDFLARE_ACCOUNT_ID;
    for (const nome of ['CLOUDFLARE_API_TOKEN', 'CLOUDFLARE_ACCOUNT_ID']) if (segreti.valori[nome]) ambiente[nome] = segreti.valori[nome];
    if (!o.prova && (!segreti.valori.CLOUDFLARE_API_TOKEN || !segreti.valori.CLOUDFLARE_ACCOUNT_ID)) {
      throw new Error(`mancano CLOUDFLARE_API_TOKEN o CLOUDFLARE_ACCOUNT_ID in ${fileSegreti}: controlla con accessi.mjs --solo cloudflare --dominio <dominio del piano>`);
    }
    const argomenti = ['deploy', ...(o.prova ? ['--dry-run'] : [])];
    console.log(`Eseguo: wrangler ${argomenti.join(' ')}${o.prova ? ' (nessun caricamento)' : ''}`);
    const esito = await eseguiWrangler(argomenti, cartella, ambiente, valori);
    if (esito !== 0) throw new Error(`wrangler ha risposto con il codice ${esito}`);

    if (o.prova) {
      console.log(`\nProva superata: configurazione valida, nessuna credenziale nella copia, wrangler deploy --dry-run riuscito. Nulla è stato caricato.${domini.length ? ` Dominio previsto: ${domini.join(', ')}.` : ''}`);
    } else {
      const indirizzo = o.indirizzo || (domini[0] ? `https://${domini[0]}` : null);
      if (!indirizzo) {
        console.log('\nPubblicazione riuscita. Nessun dominio personalizzato: indica --indirizzo per il controllo online.');
      } else {
        console.log(`\nPubblicazione riuscita. Attendo 5 secondi e controllo ${indirizzo}`);
        await new Promise((r) => setTimeout(r, 5000));
        codice = (await controllaOnline(path.join(cartella, 'pubblico'), indirizzo)) ? 0 : 1;
      }
    }
  }
} catch (errore) {
  console.error(`\nFermato: ${errore.message}`);
  codice = 1;
}
process.exit(codice);

#!/usr/bin/env node
// Prepara e controlla l'ambiente degli strumenti di crea-funnel.

import fs from 'node:fs';
import path from 'node:path';
import {
  VERSIONI,
  NODE_MINIMA,
  CARTELLA_STRUMENTI,
  cartellaDipendenze,
  percorsoSegreti,
  ambienteDipendenze,
  carica,
  versioneInstallata,
  esegui,
} from './comune.mjs';
import { verificaPermessi, restringiPermessiWindows } from './permessi-segreti.mjs';

const AIUTO = `Prepara l'ambiente degli strumenti di crea-funnel.

Uso:
  node prepara-ambiente.mjs              installa ciò che manca e controlla tutto
  node prepara-ambiente.mjs --controlla  controlla soltanto, senza installare nulla
  node prepara-ambiente.mjs --help       mostra questo aiuto

Opzioni:
  --cartella <percorso>  cartella delle dipendenze (predefinita: ~/.crea-funnel,
                         su Windows %USERPROFILE%\\.crea-funnel; oppure la variabile CREA_FUNNEL_HOME)

Cosa fa:
  1. controlla che Node.js sia la versione ${NODE_MINIMA} o successiva;
  2. crea la cartella delle dipendenze;
  3. installa playwright ${VERSIONI.playwright}, sharp ${VERSIONI.sharp} e wrangler ${VERSIONI.wrangler},
     poi il browser Chromium per Playwright, tutto dentro quella cartella;
  4. prova che Chromium si apra, che sharp converta un'immagine e che «npx wrangler» risponda;
  5. crea segreti.env vuoto, leggibile solo dal tuo utente dove il sistema lo consente.
     Le chiavi si incollano nel file con un editor di testo, mai in chat.

Il file segreti.env esistente non viene mai sovrascritto né letto.

Codice d'uscita: 0 ambiente pronto, 1 qualcosa manca o non funziona, 2 opzioni non valide.`;

const MODELLO_SEGRETI = `# Chiavi di crea-funnel. Resta solo su questo computer.
# Incolla ogni valore subito dopo il segno =, senza spazi e senza virgolette, poi salva.
# Servono solo le chiavi del tuo progetto: la skill ti dice quali.
# Non incollare mai queste chiavi in chat e non copiare questo file in altre cartelle.
OPENAI_API_KEY=
CLOUDFLARE_API_TOKEN=
CLOUDFLARE_ACCOUNT_ID=
`;

function leggiArgomenti(argv) {
  const opzioni = { controlla: false, aiuto: false, cartella: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--controlla') opzioni.controlla = true;
    else if (a === '--help' || a === '-h') opzioni.aiuto = true;
    else if (a === '--cartella' && argv[i + 1]) opzioni.cartella = argv[++i];
    else {
      console.error(`Opzione non valida: ${a}\n\n${AIUTO}`);
      process.exit(2);
    }
  }
  return opzioni;
}

// ---------- controlli ----------

function controllaNode() {
  const versione = process.versions.node;
  const principale = Number(versione.split('.')[0]);
  return principale >= NODE_MINIMA
    ? { ok: true, nome: 'Node.js', dettaglio: `versione ${versione}` }
    : {
        ok: false,
        nome: 'Node.js',
        dettaglio: `versione ${versione}, serve la ${NODE_MINIMA} o successiva. Installa la versione LTS da https://nodejs.org e riapri il terminale.`,
      };
}

async function controllaNpm() {
  const r = await esegui('npm', ['--version'], { timeout: 60000 });
  return r.codice === 0
    ? { ok: true, nome: 'npm', dettaglio: `versione ${r.uscita.trim()}` }
    : { ok: false, nome: 'npm', dettaglio: 'non risponde. Di solito si installa insieme a Node.js da https://nodejs.org.' };
}

function controllaCartella(cartella) {
  if (!fs.existsSync(cartella)) return { ok: false, nome: 'Cartella delle dipendenze', dettaglio: `${cartella} non esiste ancora` };
  return { ok: true, nome: 'Cartella delle dipendenze', dettaglio: cartella };
}

function controllaPacchetto(nome, cartella) {
  const versione = versioneInstallata(nome, cartella);
  if (!versione) return { ok: false, nome, dettaglio: 'non installato' };
  const nota = versione === VERSIONI[nome] ? '' : ` (versione provata: ${VERSIONI[nome]})`;
  return { ok: true, nome, dettaglio: `versione ${versione}${nota}` };
}

async function controllaChromium(cartella) {
  const nome = 'Chromium per Playwright';
  if (!versioneInstallata('playwright', cartella)) return { ok: false, nome, dettaglio: 'serve prima playwright' };
  let browser;
  try {
    const { chromium } = await carica('playwright', cartella);
    if (!fs.existsSync(chromium.executablePath())) {
      return { ok: false, nome, dettaglio: 'browser non scaricato' };
    }
    browser = await chromium.launch({ timeout: 60000 });
    const pagina = await browser.newPage();
    await pagina.setContent('<title>prova crea-funnel</title><p>ok</p>');
    const titolo = await pagina.title();
    if (titolo !== 'prova crea-funnel') throw new Error(`titolo inatteso: ${titolo}`);
    return { ok: true, nome, dettaglio: `si apre e mostra una pagina (versione ${browser.version()})` };
  } catch (errore) {
    let dettaglio = `non si apre: ${primaRiga(errore.message)}`;
    if (process.platform === 'linux') {
      dettaglio += ' Su Linux possono mancare librerie di sistema: vedi «npx playwright install-deps chromium» (richiede i permessi di amministratore).';
    }
    return { ok: false, nome, dettaglio };
  } finally {
    if (browser) await browser.close().catch(() => {});
  }
}

async function controllaSharp(cartella) {
  const nome = 'Conversione immagini (sharp)';
  if (!versioneInstallata('sharp', cartella)) return { ok: false, nome, dettaglio: 'serve prima sharp' };
  try {
    const sharp = await carica('sharp', cartella);
    const webp = await sharp({ create: { width: 8, height: 8, channels: 3, background: '#c08040' } }).webp().toBuffer();
    const info = await sharp(webp).metadata();
    if (info.format !== 'webp' || info.width !== 8) throw new Error(`risultato inatteso: ${info.format} ${info.width}px`);
    return { ok: true, nome, dettaglio: 'crea un file WebP di prova' };
  } catch (errore) {
    return { ok: false, nome, dettaglio: `non funziona: ${primaRiga(errore.message)}` };
  }
}

async function controllaWrangler(cartella) {
  const nome = 'npx wrangler';
  if (!fs.existsSync(cartella)) return { ok: false, nome, dettaglio: 'serve prima la cartella delle dipendenze' };
  // --no-install: usa solo la copia già presente, senza scaricare nulla.
  const r = await esegui('npx', ['--no-install', 'wrangler', '--version'], {
    cwd: cartella,
    env: ambienteDipendenze(cartella),
    timeout: 120000,
  });
  const versione = r.uscita.match(/\b(\d+\.\d+\.\d+)\b/);
  if (r.codice === 0 && versione) return { ok: true, nome, dettaglio: `risponde, versione ${versione[1]}` };
  return { ok: false, nome, dettaglio: `non risponde (codice ${r.codice}): ${primaRiga(r.uscita) || 'nessun messaggio'}` };
}

async function controllaSegreti(cartella) {
  const nome = 'segreti.env';
  const file = percorsoSegreti(cartella);
  if (!fs.existsSync(file)) return { ok: false, nome, dettaglio: 'non esiste ancora' };
  return { nome, ...(await verificaPermessi(file)) };
}

async function controllaTutto(cartella) {
  const node = controllaNode();
  const risultati = [node];
  if (!node.ok) return risultati;
  risultati.push(await controllaNpm());
  risultati.push(controllaCartella(cartella));
  for (const nome of Object.keys(VERSIONI)) risultati.push(controllaPacchetto(nome, cartella));
  risultati.push(await controllaChromium(cartella));
  risultati.push(await controllaSharp(cartella));
  risultati.push(await controllaWrangler(cartella));
  risultati.push(await controllaSegreti(cartella));
  return risultati;
}

// ---------- installazione ----------

function creaCartella(cartella) {
  fs.mkdirSync(cartella, { recursive: true, mode: 0o700 });
  const pacchetto = path.join(cartella, 'package.json');
  if (!fs.existsSync(pacchetto)) {
    const dati = {
      name: 'crea-funnel-dipendenze',
      private: true,
      description: 'Dipendenze degli strumenti della skill crea-funnel, create da prepara-ambiente.mjs.',
    };
    fs.writeFileSync(pacchetto, JSON.stringify(dati, null, 2) + '\n');
  }
}

async function installaPacchetti(cartella) {
  const daInstallare = Object.entries(VERSIONI).filter(([nome, versione]) => versioneInstallata(nome, cartella) !== versione);
  if (daInstallare.length === 0) {
    console.log('Pacchetti già installati nelle versioni provate.');
    return true;
  }
  const elenco = daInstallare.map(([nome, versione]) => `${nome}@${versione}`);
  console.log(`Installo ${elenco.join(', ')} (può richiedere qualche minuto)...`);
  const r = await esegui('npm', ['install', '--save-exact', '--no-audit', '--no-fund', ...elenco], {
    cwd: cartella,
    env: ambienteDipendenze(cartella),
    mostra: true,
  });
  if (r.codice !== 0) console.error(`\nL'installazione dei pacchetti non è riuscita (codice ${r.codice}).`);
  return r.codice === 0;
}

async function installaChromium(cartella) {
  if (!versioneInstallata('playwright', cartella)) return false;
  console.log('Scarico Chromium per Playwright, se manca (può richiedere qualche minuto)...');
  const cli = path.join(cartella, 'node_modules', 'playwright', 'cli.js');
  const r = await esegui(process.execPath, [cli, 'install', 'chromium'], {
    cwd: cartella,
    env: ambienteDipendenze(cartella),
    mostra: true,
  });
  if (r.codice !== 0) console.error(`\nIl download di Chromium non è riuscito (codice ${r.codice}).`);
  return r.codice === 0;
}

async function preparaSegreti(cartella) {
  const file = percorsoSegreti(cartella);
  if (fs.existsSync(file) && fs.lstatSync(file).isSymbolicLink()) throw new Error('segreti.env è un collegamento simbolico: non modifico il file di destinazione');
  if (fs.existsSync(file)) {
    if (process.platform === 'win32') {
      await restringiPermessiWindows(file);
      console.log('segreti.env esiste già: ACL riservata al tuo utente. Contenuto non letto né modificato.');
    } else if ((fs.statSync(file).mode & 0o777) !== 0o600) {
      fs.chmodSync(file, 0o600);
      console.log('segreti.env esiste già: permessi ristretti al tuo utente (600). Il contenuto non è stato toccato.');
    } else {
      console.log('segreti.env esiste già: non lo tocco.');
    }
    return;
  }
  fs.writeFileSync(file, MODELLO_SEGRETI, { mode: 0o600, flag: 'wx' });
  if (process.platform === 'win32') {
    await restringiPermessiWindows(file);
    console.log(`Creato ${file}, permessi Windows ristretti al tuo utente.`);
  } else {
    fs.chmodSync(file, 0o600);
    console.log(`Creato ${file}, leggibile solo dal tuo utente (permessi 600).`);
  }
}

// ---------- uscita ----------

function primaRiga(testo) {
  return String(testo || '')
    .split('\n')
    .map((r) => r.trim())
    .find(Boolean) || '';
}

function stampa(risultati, cartella) {
  console.log(`\nCrea funnel · controllo dell'ambiente`);
  console.log(`Cartella delle dipendenze: ${cartella}\n`);
  for (const r of risultati) console.log(`  [${r.ok ? 'ok' : 'MANCA'}] ${r.nome}: ${r.dettaglio}`);
  const mancanti = risultati.filter((r) => !r.ok);
  console.log('');
  if (mancanti.length === 0) {
    console.log('Ambiente pronto.');
  } else {
    console.log(`Ambiente non pronto: ${mancanti.length} ${mancanti.length === 1 ? 'elemento da sistemare' : 'elementi da sistemare'}.`);
    if (controllaNode().ok) {
      const opzioneCartella = process.env.CREA_FUNNEL_HOME ? ` --cartella "${cartella}"` : '';
      console.log(`Per installare ciò che manca: node "${path.join(CARTELLA_STRUMENTI, 'prepara-ambiente.mjs')}"${opzioneCartella}`);
    }
  }
  return mancanti.length === 0;
}

async function principale() {
  const opzioni = leggiArgomenti(process.argv.slice(2));
  if (opzioni.aiuto) {
    console.log(AIUTO);
    return 0;
  }
  if (opzioni.cartella) process.env.CREA_FUNNEL_HOME = path.resolve(opzioni.cartella);
  const cartella = cartellaDipendenze();

  if (!opzioni.controlla) {
    const node = controllaNode();
    if (!node.ok) {
      stampa([node], cartella);
      return 1;
    }
    creaCartella(cartella);
    const pacchettiOk = await installaPacchetti(cartella);
    if (pacchettiOk) await installaChromium(cartella);
    await preparaSegreti(cartella);
  }

  const pronto = stampa(await controllaTutto(cartella), cartella);
  return pronto ? 0 : 1;
}

principale()
  .then((codice) => process.exit(codice))
  .catch((errore) => {
    console.error(`Errore imprevisto: ${errore.stack || errore.message}`);
    process.exit(1);
  });

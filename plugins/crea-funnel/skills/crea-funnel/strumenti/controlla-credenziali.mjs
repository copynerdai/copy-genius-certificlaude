#!/usr/bin/env node
// Cerca credenziali in una cartella prima di pubblicarla o consegnarla, senza mai stamparne i valori.

import fs from 'node:fs';
import path from 'node:path';
import { leggiOpzioni, erroreUso, leggiSegreti, percorsoSegreti, Rapporto } from './comune.mjs';

const AIUTO = `Cerca credenziali in una cartella prima di pubblicarla o consegnarla.

Uso:
  node controlla-credenziali.mjs <cartella> [--salva rapporto.md] [--segreti file]

Controlli:
  1. nomi di file e cartelle sospetti: .env, .dev.vars, segreti.env, chiavi private, .npmrc,
     .wrangler, node_modules, .git;
  2. forme tipiche di chiavi nei file di testo: chiavi OpenAI (sk-...), token Cloudflare (cfut_, cfat_, cfk_),
     «Bearer ...», chiavi private;
  3. i valori reali delle chiavi di segreti.env, cercati in tutti i file, anche non di testo;
  4. nomi delle variabili (OPENAI_API_KEY, CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID): solo avviso,
     perché possono comparire in istruzioni scritte apposta.

Il rapporto indica file, riga e tipo di problema, mai il testo trovato.
I valori delle chiavi sono letti solo nella memoria di questo processo.

Opzioni:
  --segreti <file>   file delle chiavi (predefinito: segreti.env nella cartella delle dipendenze)
  --salva <file.md>  salva anche il rapporto in Markdown

Codice d'uscita: 0 controllo completo senza problemi, 1 problemi o controllo parziale, 2 opzioni non valide.
Senza un file delle chiavi il rapporto dichiara esplicitamente la sola ricerca delle forme note.`;

const { posizionali, opzioni: o } = leggiOpzioni(process.argv.slice(2), { '--salva': 'testo', '--segreti': 'testo' }, AIUTO);
if (posizionali.length !== 1) erroreUso('indica una sola cartella', AIUTO);
const radice = path.resolve(posizionali[0]);
if (!fs.existsSync(radice) || !fs.statSync(radice).isDirectory()) erroreUso(`cartella non trovata: ${radice}`, AIUTO);

const fileSegreti = o.segreti ? path.resolve(o.segreti) : percorsoSegreti();
if (o.segreti && !fs.existsSync(fileSegreti)) erroreUso('il file indicato con --segreti non esiste: la ricerca dei valori reali non è possibile', AIUTO);
const segreti = leggiSegreti(fileSegreti);
// Valori troppo corti darebbero falsi allarmi a ogni file.
const valori = Object.entries(segreti.valori).filter(([, v]) => v.length >= 8);

const NOMI_SOSPETTI = [
  [/^\.env(\..*)?$/i, 'file di variabili d\'ambiente'],
  [/^\.dev\.vars(\..*)?$/i, 'variabili locali di Wrangler'],
  [/^segreti\.env$/i, 'file delle chiavi di crea-funnel'],
  [/\.(pem|key|p12|pfx)$/i, 'chiave o certificato privato'],
  [/^id_(rsa|dsa|ecdsa|ed25519)(\.pub)?$/i, 'chiave SSH'],
  [/^\.npmrc$/i, 'configurazione npm, può contenere token'],
  [/^(credentials|secrets?)(\..*)?$/i, 'nome da credenziali'],
];
const CARTELLE_SOSPETTE = {
  '.wrangler': 'cartella temporanea di Wrangler',
  node_modules: 'dipendenze di sviluppo',
  '.git': 'storico git, può contenere file cancellati',
};
const FORME = [
  [/\bsk-(?:proj-|svcacct-|admin-)?[A-Za-z0-9_-]{20,}/, 'forma di chiave OpenAI'],
  [/\b(?:cfut|cfat|cfk)_[A-Za-z0-9]{40}/, 'forma di token Cloudflare'],
  [/\bBearer\s+[A-Za-z0-9._~+\/-]{20,}/, 'intestazione «Bearer» con un token'],
  [/-----BEGIN [A-Z ]*PRIVATE KEY-----/, 'chiave privata'],
];
const NOMI_VARIABILI = /\b(OPENAI_API_KEY|CLOUDFLARE_API_TOKEN|CLOUDFLARE_ACCOUNT_ID)\b/;
const MASSIMO_BYTE = 200 * 1024 * 1024;

const problemi = [];
const avvisi = [];
const incompleti = [];
let fileControllati = 0;
const relativo = (f) => path.relative(radice, f) || '.';

function numeroRiga(buffer, posizione) {
  let n = 1;
  for (let i = buffer.indexOf(10); i !== -1 && i < posizione; i = buffer.indexOf(10, i + 1)) n++;
  return n;
}

function controllaFile(file) {
  const dimensione = fs.statSync(file).size;
  if (dimensione > MASSIMO_BYTE) {
    incompleti.push([relativo(file), '', `file di ${Math.round(dimensione / 1048576)} MB non letto: controllo parziale, separalo dalla consegna o usa un controllo adatto a file grandi`]);
    return;
  }
  const contenuto = fs.readFileSync(file);
  fileControllati++;
  const testuale = !contenuto.subarray(0, 8000).includes(0);
  for (const [nome, valore] of valori) {
    const posizione = contenuto.indexOf(valore);
    if (posizione !== -1) {
      problemi.push([relativo(file), testuale ? numeroRiga(contenuto, posizione) : '', `valore reale di ${nome}${testuale ? '' : ' (file non di testo)'}`]);
    }
  }
  if (!testuale) return;
  const righe = contenuto.toString('utf8').split('\n');
  righe.forEach((riga, i) => {
    for (const [forma, descrizione] of FORME) if (forma.test(riga)) problemi.push([relativo(file), i + 1, descrizione]);
    const variabile = riga.match(NOMI_VARIABILI);
    if (variabile) avvisi.push([relativo(file), i + 1, `nome della variabile ${variabile[1]}`]);
  });
}

function visita(cartella) {
  for (const voce of fs.readdirSync(cartella, { withFileTypes: true })) {
    const completo = path.join(cartella, voce.name);
    if (voce.isSymbolicLink()) {
      incompleti.push([relativo(completo), '', 'collegamento simbolico non seguito: sostituiscilo con una copia del file autorizzato prima di consegnare']);
      continue;
    }
    if (voce.isDirectory()) {
      if (CARTELLE_SOSPETTE[voce.name]) {
        problemi.push([relativo(completo) + '/', '', CARTELLE_SOSPETTE[voce.name]]);
      }
      visita(completo);
      continue;
    }
    if (!voce.isFile()) {
      incompleti.push([relativo(completo), '', 'elemento non regolare non letto: controllo incompleto']);
      continue;
    }
    for (const [forma, descrizione] of NOMI_SOSPETTI) {
      if (forma.test(voce.name)) problemi.push([relativo(completo), '', `nome sospetto: ${descrizione}`]);
    }
    controllaFile(completo);
  }
}

visita(radice);

const rapporto = new Rapporto('Controllo delle credenziali');
rapporto.testo(
  `Cartella: \`${radice}\``,
  `File controllati: ${fileControllati}. Valori reali cercati: ${valori.length ? valori.map(([n]) => n).join(', ') : 'nessuno'} ` +
    `(da \`${fileSegreti}\`${segreti.esiste ? '' : ', file non trovato'}).`,
);
if (problemi.length) {
  rapporto.sezione(`Problemi (${problemi.length})`).tabella(['File', 'Riga', 'Problema'], problemi);
  rapporto.testo(
    'Togli questi file o queste righe dalla cartella prima di pubblicare o consegnare. Se è comparso il valore reale di una chiave, ' +
      'considerala esposta: creane una nuova sul servizio, revoca la vecchia e aggiorna segreti.env.',
  );
}
if (avvisi.length) rapporto.sezione(`Avvisi (${avvisi.length})`).tabella(['File', 'Riga', 'Avviso'], avvisi);
if (incompleti.length) rapporto.sezione('File non controllati').tabella(['File', 'Riga', 'Motivo'], incompleti);
if (!valori.length) rapporto.testo('Ambito: nomi di file e forme note di credenziali; nessun valore reale disponibile da cercare.');
rapporto.testo(problemi.length ? 'Esito: **non superato**.' : incompleti.length ? 'Esito: **parziale, non superato**: restano file non controllati.' : `Esito: **superato**, tutti i file controllati${valori.length ? ', inclusi i valori reali disponibili' : ' per nomi e forme note; nessun valore reale disponibile'}.`);
rapporto.stampa().salva(o.salva);
process.exit(problemi.length || incompleti.length ? 1 : 0);

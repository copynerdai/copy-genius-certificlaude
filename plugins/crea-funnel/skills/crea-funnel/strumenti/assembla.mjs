#!/usr/bin/env node
// Assembla le pagine di un funnel: dalle pagine sorgente con i segnaposto e dalla copia unica delle parti comuni
// (header, footer e altre) produce la cartella pubblica, quella su cui lavorano controlli, anteprima, pubblicazione e frammenti.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { leggiOpzioni, erroreUso, Rapporto, formatoByte, cartellaDipendenze, elencaFile, NOME_MANIFESTO } from './comune.mjs';

const AIUTO = `Assembla le pagine di un funnel: inserisce le parti comuni (header, footer e altre) nelle pagine sorgente e produce la cartella pubblica.

Uso:
  node assembla.mjs <cartella del funnel> [--sorgente sorgente] [--parti parti] [--uscita pubblico] [--salva rapporto.md]

Cartelle, relative alla cartella del funnel (pagine-<funnel>/):
  sorgente/   le pagine .html con i segnaposto, più stili, script, _headers, _redirects e risorse/
  parti/      una sola copia di ogni parte comune: header.html, footer.html, altre
  pubblico/   il risultato, rifatto a ogni esecuzione: qui non si modifica nulla a mano

Segnaposto nelle pagine sorgente:
  <!-- @parte header -->                        inserisce parti/header.html
  <!-- @parte header logo="/landing" -->        e sostituisce {{logo}} dentro la parte con /landing
  <!-- @parte header nav="@nav-checkout" -->    un valore che inizia con @ inserisce un'altra parte (parti/nav-checkout.html)
  Una parte può contenere altri segnaposto @parte. Ogni elemento inserito riceve data-parte="<nome>":
  frammenti-editor.mjs lo riconosce come parte comune da incollare una volta sola.

Il comando si ferma senza scrivere nulla se una parte manca, una variabile {{...}} resta senza valore
o un segnaposto non viene sostituito. I file di pubblico/ che non vengono da questo assemblaggio
(per esempio modificati a mano) non si perdono: vengono messi da parte in ~/.crea-funnel/cestino/ e segnalati.

Opzioni:
  --sorgente <cartella>  cartella delle pagine sorgente (predefinita: sorgente)
  --parti <cartella>     cartella delle parti comuni (predefinita: parti)
  --uscita <cartella>    cartella prodotta (predefinita: pubblico)
  --salva <file.md>      salva anche il rapporto

Codice d'uscita: 0 assemblato, 1 fermato per un errore (nulla scritto), 2 opzioni non valide.`;

const { posizionali, opzioni: o } = leggiOpzioni(
  process.argv.slice(2),
  { '--sorgente': 'testo', '--parti': 'testo', '--uscita': 'testo', '--salva': 'testo' },
  AIUTO,
);
if (posizionali.length !== 1) erroreUso('indica la cartella del funnel (pagine-<funnel>/)', AIUTO);
const progetto = path.resolve(posizionali[0]);
if (!fs.existsSync(progetto) || !fs.statSync(progetto).isDirectory()) erroreUso(`cartella non trovata: ${progetto}`, AIUTO);
const sorgente = path.resolve(progetto, o.sorgente || 'sorgente');
const parti = path.resolve(progetto, o.parti || 'parti');
const uscita = path.resolve(progetto, o.uscita || 'pubblico');
if (!fs.existsSync(sorgente) || !fs.statSync(sorgente).isDirectory()) erroreUso(`cartella sorgente non trovata: ${sorgente}`, AIUTO);
for (const [nome, c] of [['sorgente', sorgente], ['parti', parti]]) {
  if (c === uscita || uscita.startsWith(c + path.sep) || c.startsWith(uscita + path.sep)) erroreUso(`la cartella ${nome} e la cartella di uscita non possono coincidere o contenersi`, AIUTO);
}

const PROFONDITA_MASSIMA = 5;
const VUOTI = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
const SEGNAPOSTO = /<!--\s*@parte\s+([\w-]+)((?:\s+[\w-]+="[^"]*")*)\s*-->/g;

class ErroreAssemblaggio extends Error {}

const cacheParti = new Map();
function testoParte(nome) {
  if (!cacheParti.has(nome)) {
    const file = path.join(parti, `${nome}.html`);
    if (!fs.existsSync(file)) {
      throw new ErroreAssemblaggio(
        fs.existsSync(parti) ? `parte «${nome}» non trovata: manca ${file}` : `parte «${nome}» non trovata: la cartella delle parti non esiste (${parti})`,
      );
    }
    cacheParti.set(nome, fs.readFileSync(file, 'utf8').replace(/\s+$/, ''));
  }
  return cacheParti.get(nome);
}

function attributi(testo) {
  const valori = {};
  for (const m of testo.matchAll(/([\w-]+)="([^"]*)"/g)) valori[m[1]] = m[2];
  return valori;
}

// Contenuto di una parte con le variabili sostituite e i segnaposto interni risolti.
function espandiParte(nome, valori, contesto, profondita, usate) {
  if (profondita > PROFONDITA_MASSIMA) throw new ErroreAssemblaggio(`${contesto}: parti annidate oltre ${PROFONDITA_MASSIMA} livelli (forse una parte richiama se stessa)`);
  usate.add(nome);
  let testo = testoParte(nome);
  testo = testo.replace(/\{\{\s*([\w.-]+)\s*\}\}/g, (m, variabile) => {
    if (!(variabile in valori)) throw new ErroreAssemblaggio(`${contesto}: la parte «${nome}» usa {{${variabile}}} ma il segnaposto non dà un valore (scrivi <!-- @parte ${nome} ${variabile}="..." -->)`);
    const valore = valori[variabile];
    return valore.startsWith('@') ? espandiParte(valore.slice(1), {}, `${contesto}, variabile ${variabile}`, profondita + 1, usate) : valore;
  });
  return testo.replace(SEGNAPOSTO, (m, altra, att) => espandiParte(altra, attributi(att), `${contesto}, dentro la parte «${nome}»`, profondita + 1, usate));
}

// Aggiunge data-parte="nome" a ogni elemento di primo livello del frammento, senza toccare il resto.
function marcaElementi(html, nome) {
  let uscitaHtml = '';
  let i = 0;
  let livello = 0;
  const pila = [];
  while (i < html.length) {
    if (html.startsWith('<!--', i)) {
      const fine = html.indexOf('-->', i + 4);
      const j = fine < 0 ? html.length : fine + 3;
      uscitaHtml += html.slice(i, j);
      i = j;
      continue;
    }
    const m = html[i] === '<' ? /^<(\/?)([a-zA-Z][\w:-]*)/.exec(html.slice(i, i + 64)) : null;
    if (!m) {
      uscitaHtml += html[i++];
      continue;
    }
    // Fine del tag, rispettando le virgolette degli attributi.
    let j = i + m[0].length;
    let virgolette = null;
    while (j < html.length) {
      const c = html[j];
      if (virgolette) {
        if (c === virgolette) virgolette = null;
      } else if (c === '"' || c === "'") virgolette = c;
      else if (c === '>') break;
      j++;
    }
    let tag = html.slice(i, j + 1);
    const chiusura = m[1] === '/';
    const nomeTag = m[2].toLowerCase();
    const autoChiuso = /\/\s*>$/.test(tag) || VUOTI.has(nomeTag);
    if (chiusura) {
      if (pila.length && pila[pila.length - 1] === nomeTag) {
        pila.pop();
        livello--;
      }
    } else {
      if (livello === 0 && !/\sdata-parte=/.test(tag)) tag = tag.replace(/\s*(\/?)>$/, ` data-parte="${nome}"$1>`);
      if (!autoChiuso) {
        pila.push(nomeTag);
        livello++;
      }
    }
    uscitaHtml += tag;
    i = j + 1;
    if (!chiusura && !autoChiuso && (nomeTag === 'script' || nomeTag === 'style')) {
      const fine = html.toLowerCase().indexOf(`</${nomeTag}`, i);
      const k = fine < 0 ? html.length : fine;
      uscitaHtml += html.slice(i, k);
      i = k;
    }
  }
  return uscitaHtml;
}

function assemblaPagina(file) {
  const relativo = path.relative(sorgente, file).split(path.sep).join('/');
  const contesto = `sorgente/${relativo}`;
  const usate = new Set();
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(SEGNAPOSTO, (m, nome, att) => marcaElementi(espandiParte(nome, attributi(att), contesto, 1, usate), nome));
  const rimasti = [...html.matchAll(/<!--\s*@parte\b[^>]*-->/g)].map((x) => x[0]);
  if (rimasti.length) throw new ErroreAssemblaggio(`${contesto}: segnaposto scritto male, non sostituito: ${rimasti.join(' ')} (forma attesa: <!-- @parte nome attributo="valore" -->)`);
  const variabili = [...new Set([...html.matchAll(/\{\{\s*[\w.-]+\s*\}\}/g)].map((x) => x[0]))];
  if (variabili.length) throw new ErroreAssemblaggio(`${contesto}: variabili senza valore nella pagina assemblata: ${variabili.join(', ')}`);
  const nota = `<!-- Pagina assemblata da assembla.mjs: le modifiche si fanno in ${contesto} e in ${path.basename(parti)}/, poi si riassembla. -->`;
  html = /<!doctype[^>]*>/i.test(html) ? html.replace(/<!doctype[^>]*>/i, (d) => `${d}\n${nota}`) : `${nota}\n${html}`;
  return { relativo, html, parti: [...usate] };
}

function sha256(dati) {
  return crypto.createHash('sha256').update(dati).digest('hex');
}

// ---------- assemblaggio ----------

const fileSorgente = elencaFile(sorgente);
const pagineSorgente = fileSorgente.filter((f) => /\.html?$/i.test(f)).sort();
if (!pagineSorgente.length) erroreUso(`in ${sorgente} non ci sono pagine .html`, AIUTO);

const prodotti = new Map(); // percorso relativo → { dati: Buffer, parti?: [] , da: file sorgente }
const errori = [];
for (const f of pagineSorgente) {
  try {
    const p = assemblaPagina(f);
    prodotti.set(p.relativo, { dati: Buffer.from(p.html, 'utf8'), parti: p.parti, da: f });
  } catch (errore) {
    if (!(errore instanceof ErroreAssemblaggio)) throw errore;
    errori.push(errore.message);
  }
}
for (const f of fileSorgente.filter((f) => !/\.html?$/i.test(f))) {
  prodotti.set(path.relative(sorgente, f).split(path.sep).join('/'), { dati: fs.readFileSync(f), da: f });
}

if (errori.length) {
  console.error(`Assemblaggio fermato, nulla è stato scritto in ${uscita}:`);
  for (const e of errori) console.error(`  - ${e}`);
  process.exit(1);
}

// File già presenti in pubblico/: quelli che non corrispondono all'assemblaggio precedente vengono messi da parte.
const fileManifesto = path.join(progetto, NOME_MANIFESTO);
let manifesto = null;
if (fs.existsSync(fileManifesto)) {
  try {
    manifesto = JSON.parse(fs.readFileSync(fileManifesto, 'utf8'));
  } catch {
    manifesto = null;
  }
}
const impronteNote = manifesto && manifesto.uscita === path.basename(uscita) ? manifesto.file || {} : {};
const avvisi = [];
const messiDaParte = [];
let cestino = null;
const mettiDaParte = (relativo, motivo) => {
  if (!cestino) cestino = path.join(cartellaDipendenze(), 'cestino', `${path.basename(progetto)}-${path.basename(uscita)}-${new Date().toISOString().replace(/[:.]/g, '-')}`);
  const destinazione = path.join(cestino, relativo);
  fs.mkdirSync(path.dirname(destinazione), { recursive: true });
  const origine = path.join(uscita, relativo);
  try {
    fs.renameSync(origine, destinazione);
  } catch (errore) {
    if (errore.code !== 'EXDEV') throw errore;
    fs.copyFileSync(origine, destinazione);
    fs.rmSync(origine);
  }
  messiDaParte.push(`${relativo} (${motivo})`);
};
if (fs.existsSync(uscita)) {
  for (const f of elencaFile(uscita)) {
    const relativo = path.relative(uscita, f).split(path.sep).join('/');
    const impronta = sha256(fs.readFileSync(f));
    const nuovo = prodotti.get(relativo);
    if (nuovo && sha256(nuovo.dati) === impronta) continue;
    if (impronteNote[relativo] && impronteNote[relativo] !== impronta) mettiDaParte(relativo, 'modificato a mano dopo l\'ultimo assemblaggio');
    else if (!impronteNote[relativo] && !nuovo) mettiDaParte(relativo, 'non viene dalla sorgente');
    else if (!impronteNote[relativo]) mettiDaParte(relativo, 'non prodotto da un assemblaggio precedente');
    else if (!nuovo) mettiDaParte(relativo, 'non esiste più nella sorgente');
    // Altrimenti: file dell'assemblaggio precedente, intatto, che ora cambia: si sovrascrive.
  }
  // Cartelle rimaste vuote.
  const cartelle = [];
  const visita = (c) => {
    for (const v of fs.readdirSync(c, { withFileTypes: true })) if (v.isDirectory()) { visita(path.join(c, v.name)); cartelle.push(path.join(c, v.name)); }
  };
  visita(uscita);
  for (const c of cartelle) if (!fs.readdirSync(c).length) fs.rmdirSync(c);
}

const nuoveImpronte = {};
let byteTotali = 0;
for (const [relativo, p] of prodotti) {
  const destinazione = path.join(uscita, relativo);
  fs.mkdirSync(path.dirname(destinazione), { recursive: true });
  fs.writeFileSync(destinazione, p.dati);
  nuoveImpronte[relativo] = sha256(p.dati);
  byteTotali += p.dati.length;
}
fs.writeFileSync(
  fileManifesto,
  `${JSON.stringify({ creato: new Date().toISOString(), sorgente: path.basename(sorgente), parti: path.basename(parti), uscita: path.basename(uscita), file: nuoveImpronte }, null, 2)}\n`,
);

// Parti presenti ma mai usate: solo un avviso.
if (fs.existsSync(parti)) {
  const usateOvunque = new Set([...prodotti.values()].flatMap((p) => p.parti || []));
  const nonUsate = fs.readdirSync(parti).filter((f) => f.endsWith('.html') && !usateOvunque.has(f.replace(/\.html$/, '')));
  if (nonUsate.length) avvisi.push(`parti presenti in ${path.basename(parti)}/ ma non usate da nessuna pagina: ${nonUsate.join(', ')}`);
}
if (messiDaParte.length) avvisi.push(`file di ${path.basename(uscita)}/ messi da parte in ${cestino}: ${messiDaParte.join('; ')}`);

const rapporto = new Rapporto(`Assemblaggio di ${path.basename(progetto)}`);
rapporto.testo(`Sorgente: \`${sorgente}\`. Parti: \`${parti}\`. Uscita: \`${uscita}\`.`);
rapporto.sezione('Pagine').tabella(
  ['Pagina', 'Parti inserite', 'Peso'],
  [...prodotti].filter(([, p]) => p.parti).map(([relativo, p]) => [relativo, p.parti.length ? p.parti.join(', ') : 'nessuna', formatoByte(p.dati.length)]),
);
const altri = [...prodotti].filter(([, p]) => !p.parti);
rapporto.testo(`Altri file copiati dalla sorgente: ${altri.length}. Totale scritto: ${formatoByte(byteTotali)} in ${prodotti.size} file.`);
if (avvisi.length) rapporto.sezione('Avvisi').elenco(avvisi);
rapporto.testo(`Esito: **assemblato**. Controlli, anteprima, pubblicazione e frammenti lavorano su \`${path.basename(uscita)}/\`; le modifiche si fanno in \`${path.basename(sorgente)}/\` e \`${path.basename(parti)}/\`, poi si riassembla.`);
rapporto.stampa().salva(o.salva);
process.exit(0);

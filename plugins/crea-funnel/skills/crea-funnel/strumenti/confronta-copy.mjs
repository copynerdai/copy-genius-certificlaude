#!/usr/bin/env node
// Confronta parola per parola il testo di una pagina con il copy in Markdown.

import fs from 'node:fs';
import path from 'node:path';
import { leggiOpzioni, erroreUso, Rapporto } from './comune.mjs';
import { apriBrowser, preparaIndirizzo, attendiPagina } from './browser.mjs';

const AIUTO = `Confronta parola per parola il testo di una pagina con il copy in Markdown.

Uso:
  node confronta-copy.mjs <indirizzo | cartella | file.html> <copy.md> [opzioni]

Dal copy vengono tolti:
  - l'intestazione YAML fra --- all'inizio del file;
  - tutto ciò che precede la prima riga che corrisponde a --inizio (predefinito: il primo titolo «## »);
  - le righe di servizio (predefinite: titoli «## SEZIONE ...», righe «**Installa**...», separatori ---);
  - le note fra parentesi quadre su una riga intera, per esempio [DESIGN NOTE: ...] o [H1];
    il testo dei pulsanti indicato come [CTA BUTTON: "TESTO"] invece resta, e dopo un'etichetta
    all'inizio della riga, per esempio «[sotto il bottone] testo», resta il testo;
  - i simboli di formattazione Markdown (#, >, -, elenchi numerati, **, *, ~~, \`, collegamenti, immagini).

Dalla pagina viene preso il testo dentro --contenitore (predefinito main, altrimenti body), esclusi script,
stili, finestre <dialog>, e gli elementi marcati:
  data-fuori-copy   parti che non vengono dal copy (schede, riquadri, segnaposto): elencate a parte;
  data-etichetta    etichette che ripetono parole del copy (nomi, ruoli): ogni loro parola deve esistere nel copy.

Le differenze sono divise in:
  testo           parole diverse, mancanti o in più: da correggere;
  maiuscole       stesse parole con maiuscole diverse;
  tipografia      stesse parole con virgolette, apostrofi, trattini o puntini di tipo diverso.

Opzioni:
  --inizio <espressione>        il copy comincia dalla prima riga che corrisponde (predefinito ^##\\s)
  --dall-inizio                 usa il copy dall'inizio (dopo l'intestazione YAML)
  --righe-servizio <espressione> riga da togliere, ripetibile; sostituisce le righe di servizio predefinite
  --pulsante <espressione>      nota di pulsante da cui tenere il testo (primo gruppo fra parentesi tonde)
  --contenitore <css>           parte della pagina da confrontare (predefinito main)
  --escludi <css>               elementi della pagina da escludere, ripetibile
  --percorso <percorso>         pagina da aprire quando si indica una cartella, per esempio /landing
  --salva <file.md>             salva anche il rapporto

Le espressioni sono espressioni regolari JavaScript, senza distinzione fra maiuscole e minuscole.
Codice d'uscita: 0 nessuna differenza di testo, 1 differenze di testo o etichette con parole nuove, 2 opzioni non valide.`;

const RIGHE_SERVIZIO = ['^#{1,6}\\s*SEZIONE\\b', '^\\*\\*Installa\\*\\*', '^(-{3,}|\\*{3,}|_{3,})$'];
const PULSANTE = '^\\[\\s*(?:CTA|BUTTON|BOTTONE|PULSANTE)[^\\]:]*:\\s*["“«](.+?)["”»]\\s*\\]$';

const { posizionali, opzioni: o } = leggiOpzioni(
  process.argv.slice(2),
  {
    '--inizio': 'testo',
    '--dall-inizio': 'flag',
    '--righe-servizio': 'lista',
    '--pulsante': 'testo',
    '--contenitore': 'testo',
    '--escludi': 'lista',
    '--percorso': 'testo',
    '--salva': 'testo',
  },
  AIUTO,
);
if (posizionali.length !== 2) erroreUso('indica la pagina e il file del copy', AIUTO);
const fileCopy = path.resolve(posizionali[1]);
if (!fs.existsSync(fileCopy)) erroreUso(`copy non trovato: ${fileCopy}`, AIUTO);
const espressione = (e, nome) => {
  try {
    return new RegExp(e, 'i');
  } catch (errore) {
    erroreUso(`${nome} non è un'espressione valida: ${errore.message}`, AIUTO);
  }
};
const inizio = o['dall-inizio'] ? null : espressione(o.inizio || '^##\\s', '--inizio');
const righeServizio = (o['righe-servizio'] || RIGHE_SERVIZIO).map((e) => espressione(e, '--righe-servizio'));
const pulsante = espressione(o.pulsante || PULSANTE, '--pulsante');

// ---------- testo del copy ----------

function testoCopy(markdown) {
  let righe = markdown.replace(/\r\n/g, '\n').split('\n');
  if (righe[0]?.trim() === '---') {
    const fine = righe.findIndex((r, i) => i > 0 && r.trim() === '---');
    if (fine > 0) righe = righe.slice(fine + 1);
  }
  if (inizio) {
    const primo = righe.findIndex((r) => inizio.test(r.trim()));
    if (primo === -1) throw new Error(`nel copy nessuna riga corrisponde a --inizio (${inizio.source}): usa --inizio o --dall-inizio`);
    righe = righe.slice(primo);
  }
  const pezzi = [];
  for (const grezza of righe) {
    let t = grezza.trim();
    if (!t || righeServizio.some((r) => r.test(t))) continue;
    const p = t.match(pulsante);
    if (p) {
      pezzi.push(p[1]);
      continue;
    }
    if (/^\[[^\]]*\]$/.test(t)) continue;
    // Una nota iniziale non è un link Markdown: conserva il testo di [etichetta](indirizzo).
    t = t.replace(/^\[[^\]]*\](?!\()\s*/, '');
    t = t.replace(/^#+\s*/, '').replace(/^>\s?/, '').replace(/^[-+]\s+/, '').replace(/^\d+[.)]\s+/, '');
    t = t.replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
    t = t.replaceAll('**', '').replaceAll('__', '').replaceAll('~~', '').replaceAll('`', '');
    t = t.replace(/(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])/g, '$1');
    t = t.replace(/(?<![\w_])_(?!\s)(.+?)(?<!\s)_(?![\w_])/g, '$1');
    pezzi.push(t);
  }
  return pezzi.join(' ');
}

const parole = (t) => t.replace(/\u2060|\u00ad/g, '').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);

// ---------- differenze (algoritmo di Myers sulle parole) ----------

function differenze(a, b) {
  let inizioComune = 0;
  while (inizioComune < a.length && inizioComune < b.length && a[inizioComune] === b[inizioComune]) inizioComune++;
  let fineComune = 0;
  while (fineComune < a.length - inizioComune && fineComune < b.length - inizioComune && a[a.length - 1 - fineComune] === b[b.length - 1 - fineComune]) fineComune++;
  const A = a.slice(inizioComune, a.length - fineComune);
  const B = b.slice(inizioComune, b.length - fineComune);
  const n = A.length;
  const m = B.length;
  const massimo = n + m;
  const zero = massimo + 1; // posizione di k = 0 nell'array
  const v = new Int32Array(2 * massimo + 3);
  const tracce = [];
  let trovato = n === 0 && m === 0;
  for (let d = 0; d <= massimo && !trovato; d++) {
    if (d > 4000) throw new Error('testi troppo diversi per un confronto utile: controlla di aver indicato la pagina e il copy giusti');
    // Stato prima del passo d, per k da -(d+1) a d+1.
    tracce.push(v.slice(zero - d - 1, zero + d + 2));
    for (let k = -d; k <= d; k += 2) {
      let x = k === -d || (k !== d && v[zero + k - 1] < v[zero + k + 1]) ? v[zero + k + 1] : v[zero + k - 1] + 1;
      let y = x - k;
      while (x < n && y < m && A[x] === B[y]) {
        x++;
        y++;
      }
      v[zero + k] = x;
      if (x >= n && y >= m) {
        trovato = true;
        break;
      }
    }
  }
  // Ricostruzione all'indietro: ogni passo è un'uguaglianza, una cancellazione (solo nel copy) o un inserimento (solo nella pagina).
  const passi = [];
  let x = n;
  let y = m;
  for (let d = tracce.length - 1; d > 0; d--) {
    const traccia = tracce[d];
    const val = (k) => traccia[k + d + 1];
    const k = x - y;
    const precedente = k === -d || (k !== d && val(k - 1) < val(k + 1)) ? k + 1 : k - 1;
    const px = val(precedente);
    const py = px - precedente;
    while (x > px && y > py) passi.push(['=', --x + inizioComune, --y + inizioComune]);
    if (x === px) passi.push(['+', null, --y + inizioComune]);
    else passi.push(['-', --x + inizioComune, null]);
  }
  while (x > 0 && y > 0) passi.push(['=', --x + inizioComune, --y + inizioComune]);
  passi.reverse();
  // Blocchi di differenze consecutive.
  const blocchi = [];
  let blocco = null;
  for (const [tipo, i, j] of passi) {
    if (tipo === '=') {
      blocco = null;
      continue;
    }
    if (!blocco) {
      blocco = { copy: [], pagina: [], dopo: tipo === '-' ? i : null, primaPagina: j };
      blocchi.push(blocco);
    }
    if (tipo === '-') {
      blocco.copy.push(a[i]);
      if (blocco.dopo === null) blocco.dopo = i;
    } else blocco.pagina.push(b[j]);
  }
  return { blocchi, passi };
}

const tipografica = (s) =>
  s
    .replace(/[‘’‚‛′`´]/g, "'")
    .replace(/[“”„‟«»″]/g, '"')
    .replace(/[\u2010-\u2015\u2212]/g, '-')
    .replace(/…/g, '...');

// ---------- esecuzione ----------

let destinazione;
try {
  destinazione = await preparaIndirizzo(posizionali[0], o.percorso);
} catch (errore) {
  erroreUso(errore.message, AIUTO);
}

let codice = 0;
let browser;
try {
  const copy = parole(testoCopy(fs.readFileSync(fileCopy, 'utf8')));
  browser = await apriBrowser();
  const pagina = await browser.newPage();
  const risposta = await pagina.goto(destinazione.indirizzo, { waitUntil: 'load', timeout: 60000 });
  if (!risposta || risposta.status() >= 400) throw new Error(`${destinazione.indirizzo} ha risposto ${risposta ? risposta.status() : 'senza risposta'}`);
  await attendiPagina(pagina);
  const estratto = await pagina.evaluate(
    ({ contenitore, escludi }) => {
      const BLOCCHI = new Set(['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'BLOCKQUOTE', 'DIV', 'SECTION', 'ARTICLE', 'FIGURE', 'FIGCAPTION', 'UL', 'OL', 'DL', 'DT', 'DD', 'A', 'BR', 'ASIDE', 'HEADER', 'FOOTER', 'NAV', 'TABLE', 'TR', 'TD', 'TH', 'BUTTON', 'LABEL']);
      const radice = document.querySelector(contenitore) || document.body;
      const esclusi = new Set(escludi.flatMap((s) => [...document.querySelectorAll(s)]));
      const fuori = [];
      const etichette = [];
      const pulito = (s) => s.replace(/\u00a0/g, ' ').replace(/\u2060/g, '').replace(/\s+/g, ' ').trim();
      function testo(nodo) {
        if (nodo.nodeType === 3) return nodo.nodeValue;
        if (nodo.nodeType !== 1) return '';
        if (['SCRIPT', 'STYLE', 'DIALOG', 'TEMPLATE', 'NOSCRIPT'].includes(nodo.tagName) || esclusi.has(nodo)) return ' ';
        if (nodo.hasAttribute('data-etichetta')) {
          etichette.push(pulito(nodo.innerText || nodo.textContent));
          return ' ';
        }
        if (nodo.hasAttribute('data-fuori-copy')) {
          const descrizione = `<${nodo.tagName.toLowerCase()}${nodo.className ? ` class="${nodo.className}"` : ''}>`;
          fuori.push((nodo.getAttribute('data-segnaposto') ? `[segnaposto] ${nodo.getAttribute('data-segnaposto')}` : pulito(nodo.innerText || nodo.textContent) || `${descrizione} senza testo`).slice(0, 160));
          return ' ';
        }
        let s = '';
        for (const figlio of nodo.childNodes) s += testo(figlio);
        return BLOCCHI.has(nodo.tagName) ? ` ${s} ` : s;
      }
      return { testo: testo(radice).replace(/\u00a0/g, ' '), fuori, etichette, contenitore: radice === document.body ? 'body' : contenitore };
    },
    { contenitore: o.contenitore || 'main', escludi: o.escludi || [] },
  );
  const inPagina = parole(estratto.testo);

  const { blocchi } = differenze(copy, inPagina);
  const testoDiverso = [];
  const maiuscole = [];
  const tipografia = [];
  for (const b of blocchi) {
    const nelCopy = b.copy.join(' ');
    const nellaPagina = b.pagina.join(' ');
    const posizione = b.dopo ?? null;
    const contesto = posizione !== null ? copy.slice(Math.max(0, posizione - 6), posizione).join(' ') : inPagina.slice(Math.max(0, b.primaPagina - 6), b.primaPagina).join(' ');
    const voce = `dopo «…${contesto}»: copy «${nelCopy || '(niente)'}» → pagina «${nellaPagina || '(niente)'}»`;
    if (nelCopy.toLowerCase() === nellaPagina.toLowerCase()) maiuscole.push(voce);
    else if (tipografica(nelCopy).toLowerCase() === tipografica(nellaPagina).toLowerCase()) tipografia.push(voce);
    else testoDiverso.push(voce);
  }

  const normalizza = (w) => tipografica(w).toLowerCase().replace(/[^\p{L}\p{N}®%]/gu, '');
  const paroleCopy = new Set(copy.map(normalizza));
  const etichetteNuove = estratto.etichette
    .map((e) => ({ e, nuove: parole(e).filter((w) => normalizza(w) && !paroleCopy.has(normalizza(w))) }));

  const rapporto = new Rapporto('Confronto fra pagina e copy');
  rapporto.testo(
    `Pagina: ${destinazione.indirizzo} (contenitore \`${estratto.contenitore}\`)`,
    `Copy: \`${fileCopy}\``,
    `Parole nella pagina, escluse le parti fuori copy: ${inPagina.length}. Parole nel copy: ${copy.length}.`,
  );
  rapporto.sezione(`Differenze di testo: ${testoDiverso.length}`);
  testoDiverso.length ? rapporto.elenco(testoDiverso) : rapporto.testo('Nessuna.');
  rapporto.sezione(`Differenze di sole maiuscole: ${maiuscole.length}`);
  maiuscole.length ? rapporto.elenco(maiuscole) : rapporto.testo('Nessuna.');
  rapporto.sezione(`Differenze di sola tipografia (virgolette, apostrofi, trattini): ${tipografia.length}`);
  tipografia.length ? rapporto.elenco(tipografia) : rapporto.testo('Nessuna.');
  rapporto.sezione(`Etichette che ripetono parole del copy: ${estratto.etichette.length}`);
  rapporto.elenco(etichetteNuove.map(({ e, nuove }) => `«${e}»: ${nuove.length ? `**parole non presenti nel copy: ${nuove.join(', ')}**` : 'tutte le parole sono nel copy'}`));
  rapporto.sezione(`Parti della pagina fuori dal copy, escluse dal confronto: ${estratto.fuori.length}`);
  rapporto.elenco(estratto.fuori);
  const problemi = testoDiverso.length + etichetteNuove.filter((x) => x.nuove.length).length;
  rapporto.testo(problemi ? `Esito: **${problemi} differenze da controllare**.` : 'Esito: **il testo della pagina corrisponde al copy**.');
  rapporto.stampa().salva(o.salva);
  codice = problemi ? 1 : 0;
} catch (errore) {
  console.error(`Confronto non riuscito: ${errore.message}`);
  codice = 1;
} finally {
  if (browser) await browser.close();
  await destinazione.chiudi();
}
process.exit(codice);

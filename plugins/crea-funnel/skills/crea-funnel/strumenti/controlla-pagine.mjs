#!/usr/bin/env node
// Controlli automatici su una o più pagine, oppure su tutte quelle raggiungibili da una pagina di partenza.

import fs from 'node:fs';
import path from 'node:path';
import { leggiOpzioni, erroreUso, Rapporto, formatoByte, controllaCartellaPagine, elencaFile } from './comune.mjs';
import { DISPOSITIVI, apriBrowser, preparaIndirizzo, scorriTutta, attendiPagina } from './browser.mjs';

const AIUTO = `Controlla una o più pagine e scrive un rapporto con problemi, avvisi e mappa dei pulsanti.

Uso:
  node controlla-pagine.mjs <indirizzo | cartella | file.html> [altri indirizzi] [opzioni]
  node controlla-pagine.mjs <cartella> --segui          tutte le pagine raggiungibili dalla radice

Controlli per ogni pagina:
  - risposta HTTP (con i reindirizzamenti) e collegamenti interni rotti, anche verso #sezioni inesistenti;
  - immagini: caricate, con attributo alt, con width e height;
  - console del browser e richieste fallite;
  - richieste verso altri domini (ammessi solo quelli in --domini-ammessi);
  - scorrimento orizzontale su telefono (390 px);
  - contrasto dei testi su computer e telefono (WCAG: 4,5 per il testo normale, 3 per il testo grande);
  - peso scaricato su computer e su telefono ad alta densità;
  - meta robots e intestazione X-Robots-Tag;
  - segnaposto visibili rimasti (elementi data-segnaposto, testi come SEGNAPOSTO, [DA INSERIRE ...], lorem ipsum);
  - mappa di dove porta ogni collegamento e pulsante.

Opzioni:
  --segui                  segue i collegamenti interni e controlla anche le pagine trovate
  --tutte                  controlla ogni file HTML delle cartelle indicate, anche senza collegamenti
  --attesa <percorso>      pagina del piano che deve essere controllata, ripetibile (anche per siti online)
  --massimo-pagine <n>     limite di pagine con --segui (predefinito 30)
  --percorso <percorso>    pagina di partenza quando si indica una cartella (predefinita /)
  --domini-ammessi <elenco> domini esterni permessi, separati da virgole (per esempio checkout.piattaforma.com)
  --controlla-esterni      apre anche i collegamenti verso altri siti per vedere se rispondono
  --noindex                le pagine devono essere escluse dai motori di ricerca (meta robots e X-Robots-Tag)
  --finale                 i segnaposto rimasti sono problemi, non avvisi (da usare prima di pubblicare o consegnare)
  --salva <file.md>        salva anche il rapporto

Codice d'uscita: 0 nessun problema (anche con avvisi), 1 almeno un problema, 2 opzioni non valide.`;

const { posizionali, opzioni: o } = leggiOpzioni(
  process.argv.slice(2),
  {
    '--segui': 'flag',
    '--tutte': 'flag',
    '--attesa': 'lista',
    '--massimo-pagine': 'numero',
    '--percorso': 'testo',
    '--domini-ammessi': 'lista',
    '--controlla-esterni': 'flag',
    '--noindex': 'flag',
    '--finale': 'flag',
    '--salva': 'testo',
  },
  AIUTO,
);
if (!posizionali.length) erroreUso('indica almeno una pagina', AIUTO);
const massimoPagine = o['massimo-pagine'] ?? 30;
if (!Number.isInteger(massimoPagine) || massimoPagine < 1) erroreUso('--massimo-pagine deve essere un intero positivo', AIUTO);
if (o.tutte && posizionali.some((p) => /^https?:\/\//i.test(p) || !fs.existsSync(p) || !fs.statSync(p).isDirectory())) erroreUso('--tutte richiede cartelle locali; per un sito online elenca gli indirizzi o usa --attesa', AIUTO);
const dominiAmmessi = (o['domini-ammessi'] || []).flatMap((d) => d.split(',')).map((d) => d.trim().toLowerCase()).filter(Boolean);
const ammesso = (host) => dominiAmmessi.some((d) => host === d || host.endsWith(`.${d}`));

const problemi = [];
const avvisi = [];
const riepilogo = [];
const mappa = [];
const breve = (u) => {
  try {
    const x = new URL(u);
    return x.origin === origineCorrente ? `${x.pathname}${x.search}${x.hash}` : u;
  } catch {
    return u;
  }
};
let origineCorrente = '';

// ---------- funzioni eseguite nella pagina ----------

function analisiPagina() {
  const visibile = (e) => e.checkVisibility({ opacityProperty: true, visibilityProperty: true });
  const immagini = [...document.images].map((i) => ({
    src: i.currentSrc || i.getAttribute('src') || '',
    visibile: visibile(i),
    caricata: i.complete && i.naturalWidth > 0,
    alt: i.hasAttribute('alt'),
    misure: i.hasAttribute('width') && i.hasAttribute('height'),
  }));
  const ids = new Set([...document.querySelectorAll('[id]')].map((e) => e.id));
  for (const a of document.querySelectorAll('a[name]')) ids.add(a.getAttribute('name'));
  const collegamenti = [...document.querySelectorAll('a[href], area[href]')].map((a) => ({
    testo: (a.innerText || a.getAttribute('aria-label') || a.querySelector('img')?.alt || '').replace(/\s+/g, ' ').trim().slice(0, 80),
    scritto: a.getAttribute('href'),
    assoluto: a.href,
    visibile: visibile(a),
    segnaposto: a.hasAttribute('data-segnaposto') || /^#segnaposto/i.test(a.getAttribute('href') || ''),
  }));
  const pulsanti = [...document.querySelectorAll('button')]
    .filter((b) => visibile(b) && !b.closest('dialog'))
    .map((b) => ({ testo: (b.innerText || b.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim().slice(0, 80), modulo: Boolean(b.form), tipo: b.type }));
  const segnaposto = [];
  for (const e of document.querySelectorAll('[data-segnaposto]')) segnaposto.push(`elemento data-segnaposto: ${e.getAttribute('data-segnaposto') || e.innerText.slice(0, 80)}`);
  const forme = /\bSEGNAPOSTO\b|\[\s*DA\s+(INSERIRE|COMPLETARE|COMPILARE|SCRIVERE)[^\]]*\]|lorem ipsum|\{\{[^}]*\}\}|\bTODO\b|\bXXX\b/i;
  const scorri = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n = scorri.nextNode(); n; n = scorri.nextNode()) {
    const p = n.parentElement;
    if (!p || ['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE'].includes(p.tagName) || p.closest('[data-segnaposto]')) continue;
    const m = n.nodeValue.match(forme);
    if (m) segnaposto.push(`testo «${n.nodeValue.replace(/\s+/g, ' ').trim().slice(0, 80)}»`);
  }
  for (const a of document.querySelectorAll('a[href]')) {
    if (!a.closest('[data-segnaposto]') && /segnaposto/i.test(a.getAttribute('href'))) segnaposto.push(`collegamento «${a.innerText.trim().slice(0, 80)}» verso ${a.getAttribute('href')}`);
  }
  return {
    titolo: document.title,
    robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') ?? null,
    immagini,
    ids: [...ids],
    collegamenti,
    pulsanti,
    segnaposto: [...new Set(segnaposto)],
  };
}

function analisiScorrimento() {
  const larghezza = document.documentElement.clientWidth;
  const tagliato = (e) => {
    for (let x = e.parentElement; x && x !== document.documentElement; x = x.parentElement) {
      const cs = getComputedStyle(x);
      if (['hidden', 'clip', 'auto', 'scroll'].includes(cs.overflowX)) {
        const r = x.getBoundingClientRect();
        if (r.right <= larghezza + 0.5 && r.left >= -0.5) return true;
      }
    }
    return false;
  };
  const fuori = [];
  for (const e of document.querySelectorAll('body *')) {
    const r = e.getBoundingClientRect();
    if (!r.width || !e.checkVisibility()) continue;
    if (e.closest('dialog:not([open])')) continue;
    if ((r.right > larghezza + 0.5 || r.left < -0.5) && !tagliato(e)) {
      const nome = `${e.tagName.toLowerCase()}${e.id ? '#' + e.id : ''}${[...e.classList].map((c) => '.' + c).join('')}`;
      fuori.push(`${nome} (da ${Math.round(r.left)} a ${Math.round(r.right)} px)`);
    }
  }
  return { documento: document.documentElement.scrollWidth, finestra: larghezza, fuori: fuori.slice(0, 10), totaleFuori: fuori.length };
}

function analisiContrasto() {
  const tela = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
  const colore = (css) => {
    tela.clearRect(0, 0, 1, 1);
    tela.fillStyle = 'rgba(0,0,0,0)';
    tela.fillStyle = css;
    tela.fillRect(0, 0, 1, 1);
    const d = tela.getImageData(0, 0, 1, 1).data;
    return { r: d[0], g: d[1], b: d[2], a: d[3] / 255 };
  };
  const lum = ({ r, g, b }) =>
    [r, g, b].map((v) => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)).reduce((s, v, i) => s + v * [0.2126, 0.7152, 0.0722][i], 0);
  const mescola = (sopra, sotto) => ({
    r: sopra.r * sopra.a + sotto.r * (1 - sopra.a),
    g: sopra.g * sopra.a + sotto.g * (1 - sopra.a),
    b: sopra.b * sopra.a + sotto.b * (1 - sopra.a),
    a: 1,
  });
  const fondo = (e) => {
    const strati = [];
    for (let x = e; x; x = x.parentElement) {
      const cs = getComputedStyle(x);
      if (cs.backgroundImage !== 'none' && !cs.backgroundImage.startsWith('linear-gradient')) return null;
      const f = colore(cs.backgroundColor);
      if (f.a > 0) {
        strati.push(f);
        if (f.a === 1) break;
      }
    }
    let risultato = { r: 255, g: 255, b: 255, a: 1 };
    for (const s of strati.reverse()) risultato = mescola(s, risultato);
    return risultato;
  };
  const gruppi = new Map();
  for (const e of document.querySelectorAll('body *')) {
    if (!e.checkVisibility({ opacityProperty: true, visibilityProperty: true })) continue;
    if (e.closest('dialog:not([open]), svg, [aria-hidden="true"]')) continue;
    const testo = [...e.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join('').trim();
    if (!testo) continue;
    const r = e.getBoundingClientRect();
    if (r.width <= 1 || r.height <= 1) continue;
    const cs = getComputedStyle(e);
    const f = fondo(e);
    if (!f) continue;
    const c = mescola(colore(cs.color), f);
    const [l1, l2] = [lum(c), lum(f)].sort((a, b) => b - a);
    const rapporto = (l1 + 0.05) / (l2 + 0.05);
    const px = parseFloat(cs.fontSize);
    const grassetto = parseInt(cs.fontWeight, 10) >= 700;
    const soglia = px >= 24 || (grassetto && px >= 18.66) ? 3 : 4.5;
    const chiave = `testo ${cs.color} su fondo rgb(${Math.round(f.r)}, ${Math.round(f.g)}, ${Math.round(f.b)}), ${px}px${grassetto ? ' grassetto' : ''}`;
    const g = gruppi.get(chiave) || { chiave, rapporto, soglia, elementi: 0, esempio: testo.replace(/\s+/g, ' ').slice(0, 50) };
    g.elementi++;
    gruppi.set(chiave, g);
  }
  return [...gruppi.values()].sort((a, b) => a.rapporto - b.rapporto);
}

// ---------- controllo di una pagina ----------

async function apriEAnalizza(browser, indirizzo, dispositivo, origine) {
  const contesto = await browser.newContext({ ...DISPOSITIVI[dispositivo], deviceScaleFactor: dispositivo === 'telefono' ? 3 : 1 });
  const pagina = await contesto.newPage();
  const eventi = { console: [], avvisiConsole: [], fallite: [], esterne: new Set(), peso: {}, risposteErrate: [] };
  pagina.on('console', (m) => {
    if (m.type() === 'error') eventi.console.push(m.text().slice(0, 200));
    if (m.type() === 'warning') eventi.avvisiConsole.push(m.text().slice(0, 200));
  });
  pagina.on('pageerror', (e) => eventi.console.push(`errore JavaScript: ${e.message.slice(0, 200)}`));
  pagina.on('request', (r) => {
    const u = new URL(r.url());
    if (u.protocol.startsWith('http') && u.origin !== origine && !ammesso(u.hostname)) eventi.esterne.add(`${u.origin}${u.pathname}`);
  });
  pagina.on('requestfailed', (r) => eventi.fallite.push(`${breve(r.url())} (${r.failure()?.errorText || 'errore'})`));
  pagina.on('response', async (r) => {
    if (r.status() >= 400) eventi.risposteErrate.push(`${breve(r.url())} → ${r.status()}`);
    try {
      const corpo = await r.body();
      const tipo = r.request().resourceType();
      eventi.peso[tipo] = (eventi.peso[tipo] || 0) + corpo.length;
    } catch {}
  });
  const risposta = await pagina.goto(indirizzo, { waitUntil: 'load', timeout: 60000 });
  await attendiPagina(pagina);
  await scorriTutta(pagina);
  const catena = [];
  for (let r = risposta?.request().redirectedFrom(); r; r = r.redirectedFrom()) catena.unshift(breve(r.url()));
  const risultato = {
    stato: risposta ? risposta.status() : 0,
    finale: pagina.url(),
    catena,
    xRobots: risposta ? await risposta.headerValue('x-robots-tag') : null,
    eventi,
  };
  risultato.analisi = await pagina.evaluate(analisiPagina);
  if (dispositivo === 'telefono') risultato.scorrimento = await pagina.evaluate(analisiScorrimento);
  risultato.contrasto = await pagina.evaluate(analisiContrasto);
  await contesto.close();
  return risultato;
}

async function statoCollegamento(richieste, url, cache) {
  if (cache.has(url)) return cache.get(url);
  let esito;
  try {
    const r = await richieste.get(url, { maxRedirects: 10, timeout: 30000, failOnStatusCode: false });
    esito = { stato: r.status(), finale: r.url(), html: /text\/html/i.test(r.headers()['content-type'] || '') };
    await r.dispose();
  } catch (errore) {
    esito = { stato: 0, finale: url, html: false, errore: errore.message.split('\n')[0] };
  }
  cache.set(url, esito);
  return esito;
}

// ---------- esecuzione ----------

const aperti = [];
// Le cartelle e i file devono essere pagine assemblate, non la sorgente con i segnaposto.
for (const p of posizionali) {
  if (/^https?:\/\//i.test(p)) continue;
  const controllo = controllaCartellaPagine(p);
  if (controllo.errore) erroreUso(controllo.errore, AIUTO);
  for (const a of controllo.avvisi) console.error(`Attenzione: ${a}`);
}

let browser;
let codice = 0;
try {
  const partenze = [];
  const attese = new Set();
  for (const p of posizionali) {
    const d = await preparaIndirizzo(p, o.percorso);
    aperti.push(d);
    partenze.push(d.indirizzo);
    for (const percorso of o.attesa || []) {
      const url = new URL(percorso, d.base).href.split('#')[0];
      partenze.push(url);
      attese.add(url);
    }
    if (o.tutte) {
      const pagine = elencaFile(path.resolve(p)).filter((f) => /\.html?$/i.test(f));
      if (!pagine.length) throw new Error(`nessuna pagina HTML in ${p}`);
      for (const file of pagine) {
        let percorso = '/' + path.relative(path.resolve(p), file).split(path.sep).map(encodeURIComponent).join('/');
        if (percorso.endsWith('/index.html')) percorso = percorso.slice(0, -10);
        else if (percorso.endsWith('.html')) percorso = percorso.slice(0, -5);
        const url = new URL(percorso, d.base).href;
        partenze.push(url);
        attese.add(url);
      }
    }
  }
  browser = await apriBrowser();
  const contestoRichieste = await browser.newContext();
  const richieste = contestoRichieste.request;
  const cacheCollegamenti = new Map();
  const coda = [...partenze];
  const viste = new Set();
  let controllate = 0;

  while (coda.length && controllate < massimoPagine) {
    const indirizzo = coda.shift().split('#')[0];
    if (viste.has(indirizzo)) continue;
    viste.add(indirizzo);
    const origine = new URL(indirizzo).origin;
    origineCorrente = origine;
    const nome = breve(indirizzo);
    const problema = (controllo, dettaglio) => problemi.push([nome, controllo, dettaglio]);
    const avviso = (controllo, dettaglio) => avvisi.push([nome, controllo, dettaglio]);

    // La stessa pagina raggiunta con un indirizzo diverso (per esempio / che porta a /landing) si controlla una volta.
    const arrivoIniziale = await statoCollegamento(richieste, indirizzo, cacheCollegamenti);
    const chiaveFinale = arrivoIniziale.finale.split('#')[0];
    if (chiaveFinale !== indirizzo) {
      if (viste.has(chiaveFinale)) continue;
      viste.add(chiaveFinale);
    }
    controllate++;
    const computer = await apriEAnalizza(browser, indirizzo, 'computer', origine);
    const telefono = await apriEAnalizza(browser, indirizzo, 'telefono', origine);
    const a = computer.analisi;

    // Risposta
    if (computer.stato >= 400 || computer.stato === 0) problema('Risposta HTTP', `${computer.stato || 'nessuna risposta'}`);
    const arrivo = computer.catena.length ? `${computer.catena.join(' → ')} → ${breve(computer.finale)}` : breve(computer.finale);

    // Immagini
    const nonCaricate = a.immagini.filter((i) => i.visibile && !i.caricata);
    for (const i of nonCaricate) problema('Immagine non caricata', breve(i.src));
    for (const i of telefono.analisi.immagini.filter((i) => i.visibile && !i.caricata)) problema('Immagine non caricata su telefono', breve(i.src));
    for (const i of a.immagini.filter((x) => !x.alt)) problema('Immagine senza alt', breve(i.src));
    for (const i of a.immagini.filter((x) => !x.misure)) avviso('Immagine senza width e height', `${breve(i.src)}: la pagina può spostarsi mentre si carica`);

    // Console e richieste
    const erroriConsole = [...new Set([...computer.eventi.console, ...telefono.eventi.console])];
    for (const e of erroriConsole) problema('Errore nella console', e);
    for (const e of new Set([...computer.eventi.avvisiConsole, ...telefono.eventi.avvisiConsole])) avviso('Avviso nella console', e);
    const fallite = new Set([...computer.eventi.fallite, ...telefono.eventi.fallite, ...computer.eventi.risposteErrate.filter((r) => !r.startsWith(`${breve(indirizzo)} `)), ...telefono.eventi.risposteErrate.filter((r) => !r.startsWith(`${breve(indirizzo)} `))]);
    for (const f of fallite) problema('Richiesta fallita', f);
    const esterne = new Set([...computer.eventi.esterne, ...telefono.eventi.esterne]);
    for (const e of esterne) problema('Richiesta verso un altro dominio', `${e}${dominiAmmessi.length ? '' : ' (se è voluta, aggiungi il dominio con --domini-ammessi)'}`);

    // Scorrimento orizzontale
    const s = telefono.scorrimento;
    if (s.documento > s.finestra || s.totaleFuori) {
      problema('Scorrimento orizzontale su telefono', `pagina larga ${s.documento} px su ${s.finestra} px${s.fuori.length ? `; elementi che escono: ${s.fuori.join(', ')}${s.totaleFuori > s.fuori.length ? ` e altri ${s.totaleFuori - s.fuori.length}` : ''}` : ''}`);
    }

    // Contrasto
    const bassi = new Map();
    for (const [vista, gruppi] of [['computer', computer.contrasto], ['telefono', telefono.contrasto]]) {
      for (const g of gruppi.filter((x) => x.rapporto < x.soglia)) {
        const voce = bassi.get(g.chiave) || { ...g, viste: [] };
        voce.viste.push(vista);
        bassi.set(g.chiave, voce);
      }
    }
    for (const g of bassi.values()) {
      problema('Contrasto insufficiente', `${g.rapporto.toFixed(2).replace('.', ',')} invece di almeno ${String(g.soglia).replace('.', ',')}: «${g.esempio}» (${g.chiave}; ${g.viste.join(' e ')})`);
    }
    const minimo = [...computer.contrasto, ...telefono.contrasto].sort((x, y) => x.rapporto - y.rapporto)[0];

    // Robots
    const robotsMeta = a.robots || 'assente';
    const robotsHttp = computer.xRobots || 'assente';
    if (o.noindex) {
      if (!/noindex/i.test(a.robots || '')) problema('Meta robots', `atteso noindex, trovato «${robotsMeta}»`);
      if (!/noindex/i.test(computer.xRobots || '')) problema('Intestazione X-Robots-Tag', `atteso noindex, trovato «${robotsHttp}»`);
    }

    // Segnaposto
    for (const sp of a.segnaposto) (o.finale ? problema : avviso)('Segnaposto rimasto', sp);

    // Collegamenti
    for (const b of a.pulsanti) {
      mappa.push([nome, b.testo, `(pulsante${b.modulo ? ' di un modulo' : ''})`, '', 'azione nella pagina, non porta ad altre pagine']);
    }
    for (const c of a.collegamenti) {
      const scritto = (c.scritto || '').trim();
      if (!scritto || scritto === '#' || /^javascript:/i.test(scritto)) {
        (o.finale ? problema : avviso)('Collegamento senza destinazione', `«${c.testo}» (href="${scritto}")`);
        mappa.push([nome, c.testo, scritto || '(vuoto)', '', 'senza destinazione']);
        continue;
      }
      let u;
      try {
        u = new URL(c.assoluto);
      } catch {
        problema('Collegamento non valido', `«${c.testo}» → ${scritto}`);
        continue;
      }
      if (!u.protocol.startsWith('http')) {
        mappa.push([nome, c.testo, scritto, '', `${u.protocol.replace(':', '')}, non controllato`]);
        continue;
      }
      const stessaPagina = u.origin === origine && u.pathname === new URL(computer.finale).pathname && u.search === new URL(computer.finale).search;
      if (c.segnaposto) {
        mappa.push([nome, c.testo, scritto, '', 'segnaposto, da sostituire con il link del cliente']);
        continue;
      }
      if (u.hash && stessaPagina) {
        const id = decodeURIComponent(u.hash.slice(1));
        const esiste = !id || a.ids.includes(id);
        if (!esiste) problema('Collegamento a una sezione inesistente', `«${c.testo}» → ${scritto}`);
        // I collegamenti per saltare al contenuto non sono pulsanti: restano fuori dalla mappa.
        if (c.visibile) mappa.push([nome, c.testo, scritto, '', esiste ? `sezione della stessa pagina` : '**sezione inesistente**']);
        continue;
      }
      const senzaHash = `${u.origin}${u.pathname}${u.search}`;
      if (u.origin !== origine && !o['controlla-esterni']) {
        mappa.push([nome, c.testo, scritto, '', 'altro sito, non controllato']);
        continue;
      }
      const esito = await statoCollegamento(richieste, senzaHash, cacheCollegamenti);
      const arriva = breve(esito.finale) === breve(senzaHash) ? '' : breve(esito.finale);
      const rotto = esito.stato === 0 || esito.stato >= 400;
      mappa.push([nome, c.testo, scritto, arriva, rotto ? `**${esito.stato || esito.errore}**` : String(esito.stato)]);
      if (rotto) problema('Collegamento rotto', `«${c.testo}» → ${scritto} (${esito.stato || esito.errore})`);
      if (o.segui && !rotto && esito.html && new URL(esito.finale).origin === origine) coda.push(esito.finale);
    }

    const peso = (e) => formatoByte(Object.values(e.peso).reduce((t, v) => t + v, 0));
    riepilogo.push([
      nome,
      `${computer.stato}${computer.catena.length ? ` (${arrivo})` : ''}`,
      `meta: ${robotsMeta}; http: ${robotsHttp}`,
      `${a.immagini.length} (${nonCaricate.length} non caricate)`,
      minimo ? `${minimo.rapporto.toFixed(2).replace('.', ',')}` : '-',
      s.documento > s.finestra || s.totaleFuori ? 'sì' : 'no',
      `${peso(computer.eventi)} / ${peso(telefono.eventi)}`,
    ]);
  }
  if (coda.some((u) => !viste.has(u.split('#')[0])) && controllate >= massimoPagine) problemi.push(['', 'Copertura incompleta', `raggiunto il limite di ${massimoPagine} pagine: alcune non sono state controllate (usa --massimo-pagine)`]);
  for (const url of attese) if (!viste.has(url)) problemi.push(['', 'Pagina attesa non controllata', url]);

  const rapporto = new Rapporto('Controllo delle pagine');
  rapporto.testo(
    `Partenza: ${partenze.join(', ')}${o.segui ? ' (seguendo i collegamenti interni)' : ''}.`,
    `Pagine controllate: ${controllate}. Viste: computer 1440×900 e telefono 390×844 a densità 3.`,
    `Pagine attese esplicitamente: ${attese.size}; tutte devono essere incluse nel controllo.`,
  );
  rapporto.sezione('Riepilogo').tabella(['Pagina', 'HTTP', 'Robots', 'Immagini', 'Contrasto minimo', 'Scorrimento orizzontale', 'Peso computer / telefono'], riepilogo);
  rapporto.sezione('Mappa dei collegamenti e dei pulsanti').tabella(['Pagina', 'Testo', 'Destinazione scritta', 'Arriva a (dopo i reindirizzamenti)', 'Risposta'], mappa);
  rapporto.sezione(`Problemi: ${problemi.length}`);
  problemi.length ? rapporto.tabella(['Pagina', 'Controllo', 'Dettaglio'], problemi) : rapporto.testo('Nessuno.');
  rapporto.sezione(`Avvisi: ${avvisi.length}`);
  avvisi.length ? rapporto.tabella(['Pagina', 'Controllo', 'Dettaglio'], avvisi) : rapporto.testo('Nessuno.');
  rapporto.testo(problemi.length ? `Esito: **${problemi.length} problemi da correggere**.` : 'Esito: **nessun problema**.');
  rapporto.stampa().salva(o.salva);
  codice = problemi.length ? 1 : 0;
} catch (errore) {
  console.error(`Controllo non riuscito: ${errore.message}`);
  codice = 1;
} finally {
  if (browser) await browser.close();
  for (const d of aperti) await d.chiudi();
}
process.exit(codice);

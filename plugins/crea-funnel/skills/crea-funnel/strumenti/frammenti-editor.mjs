#!/usr/bin/env node
// Prepara i frammenti HTML da incollare nei widget HTML di un editor (Elementor, OptimizePress, GoHighLevel e simili).

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { leggiOpzioni, erroreUso, Rapporto, formatoByte, controllaCartellaPagine, percorsoInterno } from './comune.mjs';
import { apriBrowser } from './browser.mjs';
import { collaudaConversione } from './collaudo-editor.mjs';

const AIUTO = `Prepara i frammenti HTML da incollare nei widget HTML di un editor come Elementor, OptimizePress o GoHighLevel.

Uso:
  node frammenti-editor.mjs <pagina.html | cartella> --uscita <cartella> --contenitore <selettore> [--per-sezione]
  node frammenti-editor.mjs --applica-mappa <cartella di uscita>

Prima fase, per ogni pagina:
  - prende l'elemento contenitore (per esempio <div class="nome-pagina">) con tutto il contenuto;
  - frammenti/: con un widget per pagina un solo frammento; con --per-sezione un frammento per ogni figlio
    diretto del contenitore, ciascuno racchiuso nello stesso contenitore. Gli stili stanno nel primo frammento.
    Gli script, se ci sono, vanno in un frammento a parte, l'ultimo. Le parti comuni inserite da assembla.mjs
    (elementi con data-parte, per esempio header e footer) diventano sempre frammenti separati «parte-<nome>»,
    uguali in tutte le pagine: si incollano una volta sola o si salvano come elemento riutilizzabile dell'editor;
  - media-da-caricare/: immagini e caratteri usati da HTML e CSS, con nomi senza doppioni;
  - mappa-media.txt: un file per riga, da completare con l'indirizzo che l'editor dà a ogni file caricato;
  - controllo.md: selettori CSS non limitati al contenitore (per esempio body, h1, :root), script,
    collegamenti interni da adattare, risorse esterne, titolo e meta da impostare nell'editor;
  - LEGGIMI.md: istruzioni per chi incolla.

Seconda fase, dopo aver caricato i file e completato mappa-media.txt:
  --applica-mappa <cartella>  crea frammenti-con-indirizzi/ con gli indirizzi dei file caricati;
                              si ferma se nella mappa manca un indirizzo.

Opzioni:
  --uscita <cartella>      dove creare una sottocartella per pagina (obbligatoria nella prima fase)
  --contenitore <classe>    singola classe dell'elemento che racchiude la pagina, per esempio ".nome-pagina" (obbligatorio)
  --per-sezione            un frammento per sezione invece di uno per pagina
  --sezioni <selettore>    con --per-sezione, solo i figli che corrispondono diventano frammenti separati;
                           gli altri restano uniti alla sezione che li precede
  --radice <cartella>      cartella radice del sito per i percorsi che iniziano con / (predefinita: la cartella della pagina)
  --sovrascrivi            rifà i frammenti di una pagina già preparata (la versione precedente resta accanto)

Gli script del cliente conservano tutti gli attributi; gli script locali sono file da ospitare e mappare.

Lavora sulle pagine assemblate (pubblico/), mai sulla sorgente con i segnaposto.

La conversione produce anche anteprima-frammenti.html, conversione.json e screenshot in collaudo/.
--applica-mappa richiede una conversione superata e crea anteprima-con-indirizzi.html.
La cartella comune anteprima-con-indirizzi/ permette anche il controllo dei link fra pagine.
Il collaudo confronta contenuto, ordine e geometria dei blocchi su computer e telefono;
non sostituisce le prove di interazione e il controllo nella piattaforma reale dell'editor.

Codice d'uscita: 0 conversione locale o mappa superata, 1 CSS non verificato, risorse mancanti,
conversione diversa dall'originale, mappa incompleta o errore, 2 opzioni non valide.`;

const { posizionali, opzioni: o } = leggiOpzioni(
  process.argv.slice(2),
  {
    '--uscita': 'testo',
    '--contenitore': 'testo',
    '--per-sezione': 'flag',
    '--sezioni': 'testo',
    '--radice': 'testo',
    '--applica-mappa': 'testo',
    '--sovrascrivi': 'flag',
  },
  AIUTO,
);

const ORIGINE = 'http://pagina.locale';
const nomeSicuro = (s) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'file';

// ---------- seconda fase: applica la mappa ----------

function leggiMappa(file) {
  const mappa = new Map();
  for (const riga of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const t = riga.trim();
    if (!t || t.startsWith('#')) continue;
    const uguale = t.indexOf('=');
    if (uguale < 1) continue;
    mappa.set(t.slice(0, uguale).trim(), t.slice(uguale + 1).trim());
  }
  return mappa;
}

function applicaMappa(cartellaUscita) {
  const pagine = fs.readdirSync(cartellaUscita, { withFileTypes: true }).filter((d) => d.isDirectory() && !/-precedente-/.test(d.name) && fs.existsSync(path.join(cartellaUscita, d.name, 'mappa-media.txt')));
  if (!pagine.length) erroreUso(`in ${cartellaUscita} non trovo cartelle con mappa-media.txt`, AIUTO);
  let tuttoOk = true;
  for (const d of pagine) {
    const base = path.join(cartellaUscita, d.name);
    const fileCollaudo = path.join(base, 'conversione.json');
    if (!fs.existsSync(fileCollaudo) || JSON.parse(fs.readFileSync(fileCollaudo, 'utf8')).completa !== true) {
      tuttoOk = false;
      console.error(`${d.name}: prima completa il collaudo della conversione e rigenera i frammenti; la mappa non è stata applicata.`);
      continue;
    }
    const mappa = leggiMappa(path.join(base, 'mappa-media.txt'));
    const mancanti = [...mappa].filter(([, url]) => !url).map(([nome]) => nome);
    const nonValidi = [...mappa].filter(([, url]) => url && !/^https?:\/\/[^\s"'<>]+$/.test(url)).map(([nome, url]) => `${nome} = ${url}`);
    if (mancanti.length || nonValidi.length) {
      tuttoOk = false;
      console.error(`${d.name}: mappa incompleta, nessun frammento creato.`);
      if (mancanti.length) console.error(`  Indirizzo mancante per: ${mancanti.join(', ')}`);
      if (nonValidi.length) console.error(`  Indirizzo non valido (deve iniziare con https://): ${nonValidi.join('; ')}`);
      continue;
    }
    const origine = path.join(base, 'frammenti');
    const destinazione = path.join(base, 'frammenti-con-indirizzi');
    fs.mkdirSync(destinazione, { recursive: true });
    let sostituzioni = 0;
    const rimasti = [];
    const convertiti = [];
    for (const f of fs.readdirSync(origine).filter((x) => x.endsWith('.html')).sort()) {
      let testo = fs.readFileSync(path.join(origine, f), 'utf8');
      testo = testo.replace(/\.\.\/media-da-caricare\/([a-z0-9._-]+)/g, (m, nome) => {
        if (!mappa.has(nome)) {
          rimasti.push(`${f}: ${nome}`);
          return m;
        }
        sostituzioni++;
        return mappa.get(nome);
      });
      convertiti.push([f, testo]);
    }
    if (rimasti.length) {
      tuttoOk = false;
      console.error(`${d.name}: file usati nei frammenti ma assenti dalla mappa: ${rimasti.join(', ')}`);
      continue;
    }
    for (const [f, testo] of convertiti) fs.writeFileSync(percorsoInterno(destinazione, f), testo);
    const anteprima = `<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Anteprima con indirizzi definitivi</title></head><body>${convertiti.map(([, t]) => t).join('\n')}</body></html>\n`;
    fs.writeFileSync(percorsoInterno(base, 'anteprima-con-indirizzi.html'), anteprima);
    // Il sito comune mantiene /landing, /grazie ecc.: le anteprime singole non risolvono i link fra pagine.
    const sito = percorsoInterno(cartellaUscita, `anteprima-con-indirizzi/${d.name}.html`);
    fs.mkdirSync(path.dirname(sito), { recursive: true });
    fs.writeFileSync(sito, anteprima);
    console.log(`${d.name}: ${sostituzioni} indirizzi sostituiti, frammenti in ${destinazione}`);
  }
  return tuttoOk;
}

if (o['applica-mappa']) {
  const cartella = path.resolve(o['applica-mappa']);
  if (!fs.existsSync(cartella)) erroreUso(`cartella non trovata: ${cartella}`, AIUTO);
  process.exit(applicaMappa(cartella) ? 0 : 1);
}

// ---------- prima fase: prepara i frammenti ----------

if (posizionali.length !== 1) erroreUso('indica una pagina .html o una cartella di pagine', AIUTO);
if (!o.uscita) erroreUso('manca --uscita', AIUTO);
if (!o.contenitore) erroreUso('manca --contenitore, per esempio --contenitore ".nome-pagina"', AIUTO);
if (!/^\.[a-zA-Z_][\w-]*$/.test(o.contenitore)) erroreUso('--contenitore deve essere una singola classe CSS, per esempio .pagina-funnel', AIUTO);
if (o.sezioni && !o['per-sezione']) erroreUso('--sezioni si usa insieme a --per-sezione', AIUTO);
const ingresso = path.resolve(posizionali[0]);
if (!fs.existsSync(ingresso)) erroreUso(`non trovo ${ingresso}`, AIUTO);
const controlloIngresso = controllaCartellaPagine(ingresso);
if (controlloIngresso.errore) erroreUso(controlloIngresso.errore, AIUTO);
for (const a of controlloIngresso.avvisi) console.error(`Attenzione: ${a}`);
const fileHtml = fs.statSync(ingresso).isDirectory()
  ? fs.readdirSync(ingresso).filter((f) => /\.html?$/i.test(f)).sort().map((f) => path.join(ingresso, f))
  : [ingresso];
if (!fileHtml.length) erroreUso(`in ${ingresso} non ci sono pagine .html`, AIUTO);
const radice = path.resolve(o.radice || (fs.statSync(ingresso).isDirectory() ? ingresso : path.dirname(ingresso)));
const uscita = path.resolve(o.uscita);

// Nel browser: legge l'HTML senza eseguirne gli script.
function leggiPagina({ html, contenitore, sezioni, perSezione }) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const cont = doc.querySelector(contenitore);
  if (!cont) return { errore: `nessun elemento corrisponde a «${contenitore}»` };
  const script = [...doc.querySelectorAll('script')].map((s) => ({ src: s.getAttribute('src'), tipo: s.getAttribute('type'), testo: s.textContent, html: s.outerHTML }));
  const copia = cont.cloneNode(true);
  copia.querySelectorAll('script').forEach((s) => s.remove());
  // Gruppi: le parti comuni (data-parte, inserite da assembla.mjs) stanno sempre da sole; il resto forma
  // le sezioni (per-sezione) oppure un unico gruppo «pagina».
  const gruppi = [];
  for (const figlio of copia.children) {
    const parte = figlio.getAttribute('data-parte');
    const ultimo = gruppi[gruppi.length - 1];
    if (parte) {
      if (ultimo && ultimo.parte === parte) ultimo.html.push(figlio.outerHTML);
      else gruppi.push({ nome: `parte-${parte}`, parte, html: [figlio.outerHTML] });
      continue;
    }
    const nome = perSezione ? figlio.id || [...figlio.classList].pop() || figlio.tagName.toLowerCase() : 'pagina';
    const separa = !ultimo || ultimo.parte || (perSezione && (!sezioni || figlio.matches(sezioni)));
    if (separa) gruppi.push({ nome, parte: null, html: [figlio.outerHTML] });
    else ultimo.html.push(figlio.outerHTML);
  }
  const partiFuori = [...doc.querySelectorAll('[data-parte]')].filter((e) => !cont.contains(e)).map((e) => e.getAttribute('data-parte'));
  const vuoto = copia.cloneNode(false);
  const apertura = vuoto.outerHTML.replace(/<\/[^>]+>$/, '');
  const chiusura = `</${cont.tagName.toLowerCase()}>`;
  vuoto.removeAttribute('id');
  const aperturaSenzaId = vuoto.outerHTML.replace(/<\/[^>]+>$/, '');
  const ids = [...copia.querySelectorAll('[id]')].map((e) => e.id);
  return {
    titolo: doc.title,
    meta: [...doc.querySelectorAll('meta[name="robots"], meta[name="description"]')].map((m) => `${m.getAttribute('name')}: ${m.getAttribute('content')}`),
    fogli: [...doc.querySelectorAll('link[rel~="stylesheet"]')].map((l) => l.getAttribute('href')),
    fogliHtml: [...doc.querySelectorAll('link[rel~="stylesheet"]')].map((l) => l.outerHTML),
    stiliInterni: [...doc.querySelectorAll('style')].map((s) => s.textContent),
    script,
    apertura,
    aperturaSenzaId,
    chiusura,
    idContenitore: cont.id || null,
    gruppi: gruppi.map((g) => ({ nome: g.nome, parte: g.parte, html: g.html.join('\n') })),
    partiFuori: [...new Set(partiFuori)],
    collegamenti: [...copia.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')),
    ids,
  };
}

// Nel browser: controlla che ogni selettore sia limitato al contenitore.
function analizzaCss({ css, contenitore }) {
  const importazioni = [];
  const senzaImport = css.replace(/@import[^;]+;/g, (m) => {
    importazioni.push(m);
    return '';
  });
  const foglio = new CSSStyleSheet();
  foglio.replaceSync(senzaImport);
  const esc = contenitore.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const limitato = new RegExp(`^${esc}(?![\\w-])`);
  const confinato = (s) => {
    if (!limitato.test(s) || s[contenitore.length] === '\\') return false;
    let parentesi = 0;
    let quadre = 0;
    let quote = null;
    let discendente = false;
    for (let i = contenitore.length; i < s.length; i++) {
      const c = s[i];
      if (c === '\\') { i++; continue; }
      if (quote) { if (c === quote) quote = null; continue; }
      if (c === '"' || c === "'") { quote = c; continue; }
      if (c === '(') parentesi++;
      if (c === ')') parentesi--;
      if (c === '[') quadre++;
      if (c === ']') quadre--;
      if (parentesi || quadre) continue;
      if ((c === '+' || c === '~') && !discendente) return false;
      if (c === '>') discendente = true;
      if (/\s/.test(c)) {
        const prossimo = s.slice(i).trimStart()[0];
        if (prossimo && !['+', '~', '>'].includes(prossimo)) discendente = true;
      }
    }
    return true;
  };
  const nonLimitati = [];
  const note = [];
  const dividi = (testo) => {
    const parti = [];
    let livello = 0;
    let corrente = '';
    for (const c of testo) {
      if (c === '(' || c === '[') livello++;
      if (c === ')' || c === ']') livello--;
      if (c === ',' && livello === 0) {
        parti.push(corrente.trim());
        corrente = '';
      } else corrente += c;
    }
    parti.push(corrente.trim());
    return parti;
  };
  const visita = (regole, dentro = '') => {
    for (const r of regole) {
      if (r instanceof CSSStyleRule) {
        for (const s of dividi(r.selectorText)) {
          if (!confinato(s)) nonLimitati.push({ selettore: s, dove: dentro, globale: /^(html|body|:root|\*)(?![\w-])/.test(s) });
        }
        if (r.cssRules?.length) nonLimitati.push({ selettore: r.selectorText, dove: 'regole annidate: espandile in selettori completi per verificarne il contenimento', globale: false });
      } else if (r instanceof CSSFontFaceRule) {
        note.push(`@font-face «${r.style.getPropertyValue('font-family')}»: vale per tutto il sito dove si incolla; usa un nome di carattere poco comune`);
      } else if (r instanceof CSSKeyframesRule) {
        note.push(`@keyframes «${r.name}»: il nome vale per tutto il sito; usa un nome poco comune`);
      } else if (r.cssRules) {
        const intestazione = r.cssText.slice(0, r.cssText.indexOf('{')).trim();
        visita(r.cssRules, intestazione);
      }
    }
  };
  visita(foglio.cssRules);
  return { nonLimitati, note: [...new Set(note)], importazioni };
}

function risolviLocale(riferimento, urlBase) {
  const valore = riferimento.replace(/&amp;/g, '&').trim();
  if (!valore || /^(data:|mailto:|tel:|javascript:|#|about:|blob:)/i.test(valore)) return { tipo: 'ignora' };
  let u;
  try {
    u = new URL(valore, urlBase);
  } catch {
    return { tipo: 'ignora' };
  }
  if (u.origin !== ORIGINE) return { tipo: 'esterno', url: u.href };
  const file = percorsoInterno(radice, decodeURIComponent(u.pathname).replace(/^\/+/, ''));
  return fs.existsSync(file) && fs.statSync(file).isFile() ? { tipo: 'locale', file, hash: u.hash } : { tipo: 'mancante', percorso: decodeURIComponent(u.pathname) };
}

async function preparaPagina(browser, fileHtmlPagina) {
  const nomePagina = nomeSicuro(path.basename(fileHtmlPagina).replace(/\.html?$/i, ''));
  const cartella = path.join(uscita, nomePagina);
  percorsoInterno(uscita, `${nomePagina}/controllo.md`);
  if (fs.existsSync(cartella) && !o.sovrascrivi) throw new Error(`${cartella} esiste già: usa --sovrascrivi o un'altra --uscita`);
  // La versione precedente non si cancella: resta accanto, con la data nel nome.
  if (fs.existsSync(cartella)) fs.renameSync(cartella, `${cartella}-precedente-${new Date().toISOString().replace(/[:.]/g, '-')}`);
  const urlPagina = `${ORIGINE}/${path.relative(radice, fileHtmlPagina).split(path.sep).map(encodeURIComponent).join('/')}`;
  const html = fs.readFileSync(fileHtmlPagina, 'utf8');
  const pagina = await browser.newPage();
  await pagina.setContent('<!doctype html><title>analisi</title>');
  const dati = await pagina.evaluate(leggiPagina, { html, contenitore: o.contenitore, sezioni: o.sezioni || null, perSezione: Boolean(o['per-sezione']) });
  if (dati.errore) {
    await pagina.close();
    throw new Error(`${path.basename(fileHtmlPagina)}: ${dati.errore}`);
  }

  const media = new Map(); // file locale → nome
  const nomiUsati = new Set();
  const mancanti = new Set();
  const esterni = new Set();
  const nomeMedia = (file) => {
    if (media.has(file)) return media.get(file);
    const est = path.extname(file).toLowerCase();
    let base = nomeSicuro(path.basename(file, path.extname(file)));
    let nome = `${base}${est}`;
    for (let n = 2; nomiUsati.has(nome); n++) nome = `${base}-${n}${est}`;
    nomiUsati.add(nome);
    media.set(file, nome);
    return nome;
  };
  const converti = (riferimento, urlBase) => {
    const r = risolviLocale(riferimento, urlBase);
    if (r.tipo === 'locale') return `../media-da-caricare/${nomeMedia(r.file)}${r.hash || ''}`;
    if (r.tipo === 'mancante') mancanti.add(r.percorso);
    if (r.tipo === 'esterno') esterni.add(r.url);
    return riferimento;
  };
  const riscriviCss = (css, urlBase) => css.replace(/url\(\s*(["']?)([^"')]+)\1\s*\)/g, (m, q, u) => `url(${q}${converti(u, urlBase)}${q})`);
  const riscriviHtml = (testo) => {
    let t = testo.replace(/(\s(?:src|poster|data-src)\s*=\s*)(["'])(.*?)\2/gi, (m, a, q, u) => `${a}${q}${converti(u, urlPagina)}${q}`);
    t = t.replace(/(\s(?:srcset|data-srcset)\s*=\s*)(["'])(.*?)\2/gi, (m, a, q, lista) =>
      `${a}${q}${lista
        .split(',')
        .map((v) => {
          const [u, ...resto] = v.trim().split(/\s+/);
          return [converti(u, urlPagina), ...resto].join(' ');
        })
        .join(', ')}${q}`,
    );
    return t.replace(/(\sstyle\s*=\s*)(["'])(.*?)\2/gi, (m, a, q, stile) => `${a}${q}${riscriviCss(stile, urlPagina)}${q}`);
  };

  // Stili: fogli collegati nell'ordine della pagina, poi gli stili interni.
  const pezziCss = [];
  const fogliMancanti = [];
  const fogliEsterni = [];
  for (const href of dati.fogli) {
    const r = risolviLocale(href, urlPagina);
    if (r.tipo !== 'locale') {
      // Un foglio esterno resta collegato, ma il suo isolamento non è verificabile da questa conversione.
      if (r.tipo === 'esterno') fogliEsterni.push(dati.fogliHtml[dati.fogli.indexOf(href)]);
      fogliMancanti.push(`${href}${r.tipo === 'esterno' ? ' (preservato, ma CSS non verificato: prepara una copia locale autorizzata per completare il controllo)' : ' (file non trovato)'}`);
      continue;
    }
    const urlFoglio = `${ORIGINE}/${path.relative(radice, r.file).split(path.sep).map(encodeURIComponent).join('/')}`;
    pezziCss.push({ origine: path.relative(radice, r.file), css: fs.readFileSync(r.file, 'utf8'), urlBase: urlFoglio });
  }
  dati.stiliInterni.forEach((css, i) => pezziCss.push({ origine: `<style> interno n. ${i + 1}`, css, urlBase: urlPagina }));
  const analisi = [];
  for (const p of pezziCss) analisi.push({ origine: p.origine, ...(await pagina.evaluate(analizzaCss, { css: p.css, contenitore: o.contenitore })) });
  await pagina.close();
  const css = pezziCss.map((p) => `/* ${p.origine} */\n${riscriviCss(p.css, p.urlBase).trim()}`).join('\n\n');

  // Frammenti.
  fs.mkdirSync(path.join(cartella, 'frammenti'), { recursive: true });
  const frammenti = [];
  const blocco = (apertura, contenuto) => `${apertura}\n${contenuto}\n${dati.chiusura}\n`;
  const stile = fogliEsterni.join('\n') + (css ? `<style>\n${css}\n</style>\n` : '');
  const parti = dati.gruppi.filter((g) => g.parte);
  const improntePartiPagina = {};
  if (!o['per-sezione'] && !parti.length) {
    frammenti.push(['01-pagina-intera.html', `${stile}${blocco(dati.apertura, riscriviHtml(dati.gruppi.map((g) => g.html).join('\n')))}`]);
  } else {
    // L'id del contenitore va nel primo frammento proprio della pagina, mai in una parte comune
    // (che può essere salvata una volta sola e riusata in tutte le pagine).
    const primoProprio = dati.gruppi.findIndex((g) => !g.parte);
    dati.gruppi.forEach((g, i) => {
      const nome = `${String(i + 1).padStart(2, '0')}-${nomeSicuro(g.nome)}${i === 0 ? '-con-stili' : ''}.html`;
      const apertura = i === primoProprio ? dati.apertura : dati.aperturaSenzaId;
      const contenuto = riscriviHtml(g.html);
      if (g.parte) improntePartiPagina[g.parte] = crypto.createHash('sha256').update(contenuto).digest('hex').slice(0, 16);
      frammenti.push([nome, `${i === 0 ? stile : ''}${blocco(apertura, contenuto)}`]);
    });
  }
  const scriptTesto = [];
  for (const s of dati.script) {
    if (s.src) {
      scriptTesto.push(s.html.replace(/(\ssrc\s*=\s*)(["'])(.*?)\2/i, (m, a, q, u) => `${a}${q}${converti(u, urlPagina).replaceAll('&', '&amp;').replaceAll('"', '&quot;')}${q}`));
    } else if (s.testo.trim()) scriptTesto.push(s.html);
  }
  if (scriptTesto.length) frammenti.push([`${String(frammenti.length + 1).padStart(2, '0')}-script.html`, `${scriptTesto.join('\n')}\n`]);
  for (const [nome, testo] of frammenti) fs.writeFileSync(path.join(cartella, 'frammenti', nome), testo);
  // Un'anteprima reale del risultato, con widget separati. Gli indirizzi dei media restano locali.
  const ricomposta = frammenti.map(([, testo]) => testo.replaceAll('../media-da-caricare/', 'media-da-caricare/')).join('\n');
  fs.writeFileSync(path.join(cartella, 'anteprima-frammenti.html'), `<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Anteprima dei frammenti</title></head><body>${ricomposta}</body></html>\n`);

  // Media e mappa.
  fs.mkdirSync(path.join(cartella, 'media-da-caricare'), { recursive: true });
  let pesoMedia = 0;
  for (const [file, nome] of media) {
    fs.copyFileSync(file, path.join(cartella, 'media-da-caricare', nome));
    pesoMedia += fs.statSync(file).size;
  }
  const righeMappa = [
    '# Mappa dei file da caricare nella libreria Media dell\'editor.',
    '# 1. Carica ogni file della cartella media-da-caricare.',
    '# 2. Copia l\'indirizzo che l\'editor ha dato al file e incollalo dopo il segno =, sulla riga con lo stesso nome.',
    '# 3. Avvisa l’agente: applicherà la mappa e controllerà il risultato.',
    ...[...media.values()].sort().map((nome) => `${nome} = `),
  ];
  fs.writeFileSync(path.join(cartella, 'mappa-media.txt'), `${righeMappa.join('\n')}\n`);

  const problemiConversione = await collaudaConversione(browser, radice, fileHtmlPagina, cartella, o.contenitore);

  // Controllo.
  const nonLimitati = analisi.flatMap((a) => a.nonLimitati.map((n) => ({ ...n, origine: a.origine })));
  const collegamentiInterni = [...new Set(dati.collegamenti.filter((h) => !/^(https?:|mailto:|tel:|#)/i.test(h)))];
  const rapporto = new Rapporto(`Controllo dei frammenti: ${path.basename(fileHtmlPagina)}`);
  rapporto.testo(
    `Contenitore: \`${o.contenitore}\`. Modalità: ${o['per-sezione'] ? `un widget per sezione (${dati.gruppi.length} sezioni)` : 'un widget per pagina'}.`,
    `Frammenti: ${frammenti.map(([n]) => `\`${n}\``).join(', ')}. File da caricare: ${media.size} (${formatoByte(pesoMedia)}).`,
  );
  rapporto.sezione(`Selettori CSS non limitati al contenitore: ${nonLimitati.length}`);
  if (nonLimitati.length) {
    rapporto.testo(
      `Queste regole agirebbero anche sul resto del sito dove si incollano i frammenti, e il tema del sito può cambiarle. Riscrivile premettendo \`${o.contenitore}\` (per esempio \`${o.contenitore} h1\`); per body e :root sposta le regole sul contenitore.`,
    );
    rapporto.tabella(['File', 'Selettore', 'Dentro', 'Tipo'], nonLimitati.slice(0, 200).map((n) => [n.origine, n.selettore, n.dove || '', n.globale ? 'regola globale' : 'non limitato']));
    if (nonLimitati.length > 200) rapporto.testo(`… e altri ${nonLimitati.length - 200}.`);
  } else rapporto.testo('Nessuno: tutte le regole sono sotto il contenitore.');
  const note = analisi.flatMap((a) => [...a.note, ...a.importazioni.map((i) => `${a.origine}: ${i} non incluso, va caricato a parte`)]);
  const importazioniNonVerificate = analisi.reduce((s, a) => s + a.importazioni.length, 0);
  if (note.length) rapporto.sezione('Note sugli stili').elenco([...new Set(note)]);
  if (fogliMancanti.length) rapporto.sezione('Fogli di stile non inclusi').elenco(fogliMancanti);
  if (parti.length) {
    rapporto.sezione(`Parti comuni: ${parti.length}`).testo(
      `${parti.map((g) => `\`${g.nome}\``).join(', ')}: sono l'header, il footer o altre parti uguali in tutte le pagine (inserite da assembla.mjs). Nell'editor vanno inserite una volta sola; se l'editor permette di salvare un blocco come elemento riutilizzabile, salvale così, in modo che una modifica valga per tutte le pagine.${parti[0] === dati.gruppi[0] ? ' La prima contiene anche gli stili di tutta la pagina.' : ''}`,
    );
  }
  if (dati.partiFuori.length) {
    rapporto.sezione('Parti comuni fuori dal contenitore').testo(`Elementi con data-parte (${dati.partiFuori.join(', ')}) stanno fuori da \`${o.contenitore}\` e non sono nei frammenti: sposta header e footer dentro il contenitore nelle pagine sorgente, oppure indica un contenitore più ampio.`);
  }
  if (dati.script.length) {
    rapporto.sezione(`Script: ${dati.script.length}`).testo(
      'Gli script mantengono gli attributi originali. Quelli locali vanno ospitati e mappati come gli altri file. Sono nel frammento `-script.html`: inseriscilo una volta sola, come ultimo widget. Se l\'editor lo toglie, spostalo nel codice del footer, senza lasciare una seconda copia. I moduli con importazioni relative richiedono un adattamento e un collaudo dei relativi file.',
    );
  }
  if (collegamentiInterni.length) rapporto.sezione('Collegamenti interni da adattare').testo('Questi indirizzi funzionano sul sito originale; nell\'editor vanno sostituiti con gli indirizzi delle pagine create lì.').elenco(collegamentiInterni);
  if (mancanti.size) rapporto.sezione('File citati ma non trovati').elenco([...mancanti]);
  rapporto.sezione('Collaudo della conversione').testo(problemiConversione.length ? 'Non superato: correggi la sorgente e rigenera i frammenti.' : 'Superato: contenuto, ordine e geometria dei blocchi coincidono su computer e telefono. Guarda anche gli screenshot in collaudo/ e prova le interazioni; il tema dell’editor richiede un ulteriore controllo dopo l’inserimento.').elenco(problemiConversione);
  if (esterni.size) rapporto.sezione('Risorse su altri siti, lasciate così').elenco([...esterni]);
  if (dati.idContenitore || dati.ids.length) rapporto.sezione('Identificativi').testo(`Con più frammenti della stessa pagina nell'editor, controlla che nessun altro elemento del sito usi questi id: ${[dati.idContenitore, ...dati.ids].filter(Boolean).join(', ')}.`);
  rapporto.sezione('Da impostare nell\'editor').elenco([`titolo della pagina: «${dati.titolo}»`, ...dati.meta.map((m) => `meta ${m}`)]);
  fs.writeFileSync(path.join(cartella, 'controllo.md'), rapporto.toString());

  // LEGGIMI per chi incolla.
  const leggimi = [
    `# Frammenti per l'editor: ${path.basename(fileHtmlPagina)}`,
    '',
    'Questa cartella contiene la pagina divisa in pezzi di codice da incollare nei widget HTML di un editor (per esempio il widget «HTML» di Elementor, «Custom HTML» di OptimizePress, «Custom JS/HTML» di GoHighLevel).',
    '',
    '## Cosa c\'è',
    '',
    '| Cartella o file | A cosa serve |',
    '|---|---|',
    '| `media-da-caricare/` | immagini e caratteri da caricare nella libreria Media dell\'editor |',
    '| `mappa-media.txt` | per ogni file, l\'indirizzo che l\'editor gli ha dato |',
    `| \`frammenti/\` | ${o['per-sezione'] ? 'un frammento per sezione, in ordine' : parti.length ? 'la pagina in un frammento, con header e footer a parte' : 'la pagina intera in un solo frammento'}${scriptTesto.length ? ', più gli script nell\'ultimo' : ''}; gli indirizzi delle immagini puntano ancora a questa cartella |`,
    '| `frammenti-con-indirizzi/` | gli stessi frammenti con gli indirizzi della libreria Media: sono quelli da incollare (si creano al passo 3) |',
    '| `controllo.md` | cosa va sistemato prima di incollare |',
    '',
    '## Passi',
    '',
    '1. Leggi `controllo.md` e sistema ciò che segnala, in particolare i selettori non limitati e i collegamenti interni.',
    '2. Carica tutti i file di `media-da-caricare/` nella libreria Media e incolla in `mappa-media.txt`, dopo il segno =, l\'indirizzo di ciascuno. Alcuni editor non accettano nella libreria i caratteri (.woff2) o le immagini vettoriali (.svg, spesso usate per i loghi): in quel caso chiedi a chi gestisce il sito di caricarli, oppure usa un carattere già presente e una versione PNG del logo.',
    '3. Avvisa l\'agente che hai compilato la mappa: sarà lui a creare e controllare `frammenti-con-indirizzi/`.',
    '4. Nell\'editor crea una pagina vuota, con il modello «tela» o «senza header e footer» se vuoi solo questa pagina.',
    o['per-sezione'] || parti.length || scriptTesto.length
      ? `5. Aggiungi un widget HTML per ogni file di \`frammenti-con-indirizzi/\`, nello stesso ordine dei numeri, e incolla in ciascuno il contenuto del file. Il primo contiene anche gli stili: deve restare il primo.${o['per-sezione'] ? ' Così puoi cambiare una sezione senza toccare le altre.' : ''}`
      : '5. Aggiungi un widget HTML e incolla il contenuto di `01-pagina-intera.html` di `frammenti-con-indirizzi/`.',
    ...(parti.length
      ? [
          `   I frammenti ${parti.map((g) => `\`${g.nome}\``).join(' e ')} sono le parti comuni a tutte le pagine (header, footer). Inseriscili una volta sola per pagina, sempre dallo stesso testo. Se l'editor permette di salvare un blocco come elemento riutilizzabile (o modello, o sezione salvata), salva ciascuna parte così e in ogni pagina inserisci l'elemento salvato: quando cambierai l'header o il footer, la modifica varrà per tutte le pagine anche nell'editor.`,
        ]
      : []),
    ...(scriptTesto.length ? ['6. Il frammento `-script.html` è già incluso nel passo 5: deve comparire una sola volta, per ultimo. Se l\'editor non lo esegue, spostalo nel codice del footer della pagina. I file .js si caricano con l\'aiuto di chi gestisce il sito, se la libreria Media non li accetta.'] : []),
    `${scriptTesto.length ? '7' : '6'}. Imposta titolo e meta della pagina dalle impostazioni dell'editor (vedi «Da impostare nell'editor» in \`controllo.md\`) e controlla la pagina su computer e telefono.`,
    '',
    '## Per modificare',
    '',
    'Testi, prezzi e pulsanti stanno nel codice dei frammenti: si cambiano lì, non con gli strumenti di testo dell\'editor. Lascia intatte le classi e gli attributi: gli stili dipendono da quelli.',
    '',
  ];
  fs.writeFileSync(path.join(cartella, 'LEGGIMI.md'), leggimi.join('\n'));
  fs.writeFileSync(path.join(cartella, 'conversione.json'), JSON.stringify({ completa: nonLimitati.length + mancanti.size + fogliMancanti.length + importazioniNonVerificate + problemiConversione.length + dati.partiFuori.length === 0, pagina: fileHtmlPagina, verificata: new Date().toISOString() }, null, 2) + '\n');

  return {
    nomePagina,
    cartella,
    frammenti: frammenti.map(([n]) => n),
    media: media.size,
    pesoMedia,
    nonLimitati: nonLimitati.length,
    script: dati.script.length,
    collegamenti: collegamentiInterni.length,
    mancanti: mancanti.size + fogliMancanti.length + importazioniNonVerificate + problemiConversione.length,
    parti: improntePartiPagina,
    partiFuori: dati.partiFuori,
    contenitore: dati.aperturaSenzaId,
  };
}

let codice = 0;
let browser;
try {
  browser = await apriBrowser();
  const risultati = [];
  for (const f of fileHtml) risultati.push(await preparaPagina(browser, f));
  const rapporto = new Rapporto('Frammenti per l\'editor');
  rapporto.tabella(
    ['Pagina', 'Frammenti', 'File da caricare', 'Selettori non limitati', 'Script', 'Collegamenti da adattare', 'Problemi di risorse o conversione'],
    risultati.map((r) => [r.nomePagina, r.frammenti.join(', '), `${r.media} (${formatoByte(r.pesoMedia)})`, r.nonLimitati, r.script, r.collegamenti, r.mancanti]),
  );
  rapporto.testo(`Cartella: \`${uscita}\`. Per ogni pagina leggi \`controllo.md\` e \`LEGGIMI.md\`.`);
  // Parti comuni: uguali in tutte le pagine? Anche il contenitore che le racchiude deve essere lo stesso.
  const nomiParti = [...new Set(risultati.flatMap((r) => Object.keys(r.parti)))];
  const notePartiComuni = [];
  for (const nome of nomiParti) {
    const con = risultati.filter((r) => r.parti[nome]);
    const impronte = new Set(con.map((r) => r.parti[nome]));
    const senza = risultati.filter((r) => !r.parti[nome]).map((r) => r.nomePagina);
    notePartiComuni.push(
      `\`parte-${nome}\`: ${risultati.length === 1 ? 'presente nell\'unica pagina di questa consegna; con altre pagine si riusa lo stesso frammento' : impronte.size === 1 ? `identica in ${con.length === risultati.length ? 'tutte le pagine' : `${con.length} pagine su ${risultati.length}`}` : `**diversa fra le pagine** (${con.map((r) => r.nomePagina).join(', ')}): incollala per ogni pagina dal suo frammento, non da un elemento salvato`}${senza.length && impronte.size === 1 && con.length !== risultati.length ? `; assente in ${senza.join(', ')}` : ''}.`,
    );
  }
  const contenitori = new Set(risultati.map((r) => r.contenitore));
  if (nomiParti.length && contenitori.size > 1) notePartiComuni.push('Il contenitore ha attributi diversi da pagina a pagina: un elemento salvato una volta porterebbe in tutte le pagine gli attributi della prima. Rendi uguale il contenitore in tutte le pagine sorgente, oppure incolla le parti pagina per pagina.');
  const partiFuori = [...new Set(risultati.flatMap((r) => r.partiFuori))];
  if (partiFuori.length) notePartiComuni.push(`Parti comuni fuori dal contenitore, non incluse nei frammenti: ${partiFuori.join(', ')} (vedi controllo.md).`);
  if (notePartiComuni.length) rapporto.sezione('Parti comuni (header, footer)').elenco(notePartiComuni);
  {
    const leggimiUscita = [
      '# Frammenti per l\'editor',
      '',
      `Pagine: ${risultati.map((r) => `\`${r.nomePagina}/\``).join(', ')}. In ogni cartella trovi \`LEGGIMI.md\` con i passi e \`controllo.md\` con ciò che va sistemato.`,
      '',
      '## Header, footer e altre parti comuni',
      '',
      `I frammenti \`parte-…\` (${nomiParti.map((n) => `\`parte-${n}\``).join(', ')}) sono l'header, il footer e le altre parti comuni inserite da assembla.mjs: di norma uguali in tutte le pagine (l'elenco qui sotto dice per ciascuna se lo sono davvero). Inseriscili una volta sola per pagina, sempre dallo stesso testo. Se l'editor permette di salvare un blocco come elemento riutilizzabile (o modello, o sezione salvata), salva ciascuna parte così e in ogni pagina inserisci l'elemento salvato: una modifica all'header o al footer varrà per tutte le pagine anche nell'editor. Il primo frammento di ogni pagina contiene anche gli stili: se è una parte comune, salvala con gli stili dentro.`,
      '',
      ...notePartiComuni.map((n) => `- ${n}`),
      '',
    ];
    fs.writeFileSync(path.join(uscita, 'LEGGIMI.md'), leggimiUscita.join('\n'));
  }
  const problemi = risultati.reduce((s, r) => s + r.nonLimitati + r.mancanti + r.partiFuori.length, 0);
  rapporto.testo(problemi ? 'Esito: **conversione non superata**: correggi i problemi di CSS, risorse, contenuto o impaginazione descritti nei rapporti.' : 'Esito: **conversione locale superata**; carica i file, completa mappa-media.txt e collauda la pagina nell’editor prima della consegna finale.');
  rapporto.stampa();
  codice = problemi ? 1 : 0;
} catch (errore) {
  console.error(`Frammenti non creati: ${errore.message}`);
  codice = 1;
} finally {
  if (browser) await browser.close();
}
process.exit(codice);

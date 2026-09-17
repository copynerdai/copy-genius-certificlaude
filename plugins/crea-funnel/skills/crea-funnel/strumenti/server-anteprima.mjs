// Server locale che serve una cartella di file statici con le regole principali di Cloudflare Workers:
// _redirects, _headers, indirizzi senza .html («auto-trailing-slash», il comportamento predefinito)
// e risposta 404 per ciò che non esiste. Riprende la logica dell'asset worker di Wrangler 4.
// Documentazione: https://developers.cloudflare.com/workers/static-assets/

import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import crypto from 'node:crypto';

const TIPI = {
  '.html': 'text/html; charset=utf-8',
  '.htm': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.pdf': 'application/pdf',
  '.webmanifest': 'application/manifest+json',
  '.mhtml': 'multipart/related',
};
const CODICI_REDIRECT = new Set([200, 301, 302, 303, 307, 308]);
const FILE_DI_REGOLE = new Set(['/_redirects', '/_headers']);

// ---------- regole ----------

const escape = (s) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

function regolaInEspressione(regola) {
  let r = regola.split('*').map(escape).join('(?<splat>.*)');
  for (const m of [...r.matchAll(/:([A-Za-z]\w*)/g)]) r = r.split(m[0]).join(`(?<${m[1]}>[^/]+)`);
  return new RegExp(`^${r}$`);
}

const sostituisci = (testo, valori) => Object.entries(valori).reduce((s, [k, v]) => s.replaceAll(`:${k}`, v), testo);

export function leggiRedirects(cartella) {
  const file = path.join(cartella, '_redirects');
  const statiche = new Map();
  const dinamiche = [];
  const ignorate = [];
  if (!fs.existsSync(file)) return { statiche, dinamiche, ignorate };
  const visti = new Set();
  let statichePossibili = true;
  fs.readFileSync(file, 'utf8')
    .split('\n')
    .forEach((grezza, i) => {
      const riga = grezza.trim();
      if (!riga || riga.startsWith('#')) return;
      const parti = riga.replace(/\s+#.*$/, '').split(/\s+/);
      if (parti.length < 2 || parti.length > 3) return ignorate.push(`riga ${i + 1}: servono 2 o 3 parti separate da spazi`);
      const [da, verso, codiceTesto = '302'] = parti;
      const codice = Number(codiceTesto);
      if (!da.startsWith('/')) return ignorate.push(`riga ${i + 1}: l'origine deve iniziare con /`);
      if (!CODICI_REDIRECT.has(codice)) return ignorate.push(`riga ${i + 1}: codice ${codiceTesto} non ammesso (200, 301, 302, 303, 307, 308)`);
      if (codice === 200 && /^\w+:\/\//.test(verso)) return ignorate.push(`riga ${i + 1}: con il codice 200 la destinazione deve essere interna`);
      if (visti.has(da)) return ignorate.push(`riga ${i + 1}: origine ${da} già usata in una riga precedente`);
      visti.add(da);
      const dinamica = da.includes('*') || /:[A-Za-z]/.test(da);
      if (statichePossibili && !dinamica) statiche.set(da, { verso, codice, riga: i + 1 });
      else {
        statichePossibili = false;
        dinamiche.push({ espressione: regolaInEspressione(da), verso, codice, riga: i + 1 });
      }
    });
  return { statiche, dinamiche, ignorate };
}

export function leggiHeaders(cartella) {
  const file = path.join(cartella, '_headers');
  // Come in Wrangler le regole sono indicizzate per percorso: una seconda regola con lo stesso percorso sostituisce la prima.
  const perPercorso = new Map();
  const ignorate = [];
  if (!fs.existsSync(file)) return { regole: [], ignorate };
  let regola = null;
  fs.readFileSync(file, 'utf8')
    .split('\n')
    .forEach((grezza, i) => {
      const riga = grezza.trim();
      if (!riga || riga.startsWith('#')) return;
      if (/^([^\s]+:\/\/|\/)/.test(riga)) {
        if ((riga.match(/\*/g) || []).length > 1) {
          ignorate.push(`riga ${i + 1}: un solo * per regola`);
          regola = null;
          return;
        }
        const percorso = riga.replace(/^https?:\/\/[^/]+/, '');
        regola = { espressione: regolaInEspressione(percorso), imposta: {}, togli: [] };
        perPercorso.set(percorso, regola);
        return;
      }
      if (!regola) return ignorate.push(`riga ${i + 1}: manca il percorso prima dell'intestazione`);
      if (riga.startsWith('!')) return regola.togli.push(riga.slice(1).trim().toLowerCase());
      const due = riga.indexOf(':');
      if (due < 1) return ignorate.push(`riga ${i + 1}: serve «nome: valore»`);
      const nome = riga.slice(0, due).trim().toLowerCase();
      const valore = riga.slice(due + 1).trim();
      if (!valore || nome.includes(' ')) return ignorate.push(`riga ${i + 1}: intestazione non valida`);
      regola.imposta[nome] = regola.imposta[nome] ? `${regola.imposta[nome]}, ${valore}` : valore;
    });
  const regole = [...perPercorso.values()].filter((r) => Object.keys(r.imposta).length || r.togli.length);
  return { regole, ignorate };
}

// ---------- file e indirizzi senza .html ----------

function creaEsiste(cartella) {
  const radice = path.resolve(cartella);
  return (percorso) => {
    if (FILE_DI_REGOLE.has(percorso)) return null;
    const file = path.resolve(radice, '.' + percorso);
    if (file !== radice && !file.startsWith(radice + path.sep)) return null;
    try {
      return fs.statSync(file).isFile() ? file : null;
    } catch {
      return null;
    }
  };
}

// Porta di htmlHandlingAutoTrailingSlash e safeRedirect dell'asset worker di Wrangler.
function intento(percorso, esiste, notFound, salta = false) {
  const redirectSicuro = (file, destinazione) => {
    if (salta || !esiste(file) || esiste(destinazione)) return null;
    const i = intento(destinazione, esiste, notFound, true);
    return i?.file && i.file === esiste(file) ? { redirect: destinazione } : null;
  };
  const esatto = esiste(percorso);
  let r;
  if (percorso.endsWith('/index')) {
    if (esatto) return { file: esatto, stato: 200 };
    if ((r = redirectSicuro(`${percorso}.html`, percorso.slice(0, -5)))) return r;
    if ((r = redirectSicuro(`${percorso.slice(0, -6)}.html`, percorso.slice(0, -6)))) return r;
  } else if (percorso.endsWith('/index.html')) {
    if ((r = redirectSicuro(percorso, percorso.slice(0, -10)))) return r;
    if ((r = redirectSicuro(`${percorso.slice(0, -11)}.html`, percorso.slice(0, -11)))) return r;
  } else if (percorso.endsWith('/')) {
    const indice = esiste(`${percorso}index.html`);
    if (indice) return { file: indice, stato: 200 };
    if ((r = redirectSicuro(`${percorso.slice(0, -1)}.html`, percorso.slice(0, -1)))) return r;
  } else if (percorso.endsWith('.html')) {
    if ((r = redirectSicuro(percorso, percorso.slice(0, -5)))) return r;
    if ((r = redirectSicuro(`${percorso.slice(0, -5)}/index.html`, `${percorso.slice(0, -5)}/`))) return r;
  }
  if (esatto) return { file: esatto, stato: 200 };
  const conHtml = esiste(`${percorso}.html`);
  if (conHtml) return { file: conHtml, stato: 200 };
  if ((r = redirectSicuro(`${percorso}/index.html`, `${percorso}/`))) return r;
  return notFound(percorso);
}

function creaNotFound(esiste, modo) {
  return (percorso) => {
    if (modo === 'single-page-application') {
      const indice = esiste('/index.html');
      return indice ? { file: indice, stato: 200 } : null;
    }
    if (modo === '404-page') {
      for (let cartella = percorso; cartella; ) {
        cartella = cartella.slice(0, cartella.lastIndexOf('/'));
        const pagina = esiste(`${cartella}/404.html`);
        if (pagina) return { file: pagina, stato: 404 };
      }
    }
    return null;
  };
}

const decodifica = (p) =>
  p
    .split('/')
    .map((x) => {
      try {
        return decodeURIComponent(x);
      } catch {
        return x;
      }
    })
    .join('/')
    .replace(/\/+/g, '/');
const codifica = (p) => p.split('/').map((x) => encodeURIComponent(x)).join('/');

// ---------- risposta ----------

export function gestisciRichiesta(cartella, richiesta, { notFound = 'none' } = {}) {
  const url = new URL(richiesta.url, 'http://anteprima.locale');
  const esiste = creaEsiste(cartella);
  const intestazioni = {};
  let percorso = url.pathname;

  // 1. _redirects: prima le regole statiche, poi la prima dinamica che corrisponde.
  const { statiche, dinamiche } = leggiRedirects(cartella);
  let corrispondenza = statiche.get(percorso) || null;
  if (!corrispondenza) {
    for (const d of dinamiche) {
      const m = d.espressione.exec(percorso);
      if (m) {
        const verso = sostituisci(d.verso, m.groups || {}).trim();
        corrispondenza = { verso: /^\w+:\/\//.test(verso) ? verso : verso.replace(/\/+/g, '/'), codice: d.codice };
        break;
      }
    }
  }
  let inoltrata = false;
  if (corrispondenza) {
    if (corrispondenza.codice === 200) {
      percorso = new URL(corrispondenza.verso, url).pathname;
      inoltrata = true;
    } else {
      const dest = new URL(corrispondenza.verso, url);
      const location =
        dest.origin === url.origin
          ? `${dest.pathname}${dest.search || url.search}${dest.hash}`
          : `${dest.href.slice(0, dest.href.length - (dest.search.length + dest.hash.length))}${dest.search || url.search}${dest.hash}`;
      return { stato: corrispondenza.codice, intestazioni: applicaHeaders(cartella, url.pathname, { location }), corpo: null, regola: 'redirect' };
    }
  }

  // 2. File e indirizzi senza .html.
  const i = intento(decodifica(percorso), esiste, creaNotFound(esiste, notFound));
  if (!i) return { stato: 404, intestazioni: applicaHeaders(cartella, url.pathname, {}), corpo: Buffer.alloc(0), regola: inoltrata ? 'inoltro senza file' : 'non trovato' };
  if (!['GET', 'HEAD'].includes(richiesta.method)) return { stato: 405, intestazioni: {}, corpo: Buffer.alloc(0), regola: 'metodo' };
  // Come Cloudflare: redirect per gli indirizzi senza .html e per quelli scritti in forma non canonica (per esempio %6C al posto di l).
  const destinazione = codifica(i.redirect ?? decodifica(percorso));
  if (i.redirect || (destinazione !== percorso && !inoltrata)) {
    return { stato: 307, intestazioni: applicaHeaders(cartella, url.pathname, { location: destinazione + url.search }), corpo: null, regola: 'html' };
  }

  const corpo = fs.readFileSync(i.file);
  const etag = `"${crypto.createHash('sha1').update(corpo).digest('hex')}"`;
  intestazioni.etag = etag;
  intestazioni['content-type'] = TIPI[path.extname(i.file).toLowerCase()] || 'application/octet-stream';
  intestazioni['cache-control'] = 'public, max-age=0, must-revalidate';
  const finali = applicaHeaders(cartella, url.pathname, intestazioni);
  if (richiesta.headers?.['if-none-match'] === etag) return { stato: 304, intestazioni: finali, corpo: null, regola: 'file' };
  return { stato: i.stato, intestazioni: finali, corpo, file: i.file, regola: 'file' };
}

function applicaHeaders(cartella, percorso, intestazioni) {
  const risultato = { ...intestazioni };
  const impostate = new Set();
  for (const r of leggiHeaders(cartella).regole) {
    const m = r.espressione.exec(percorso);
    if (!m) continue;
    for (const nome of r.togli) delete risultato[nome];
    for (const [nome, valore] of Object.entries(r.imposta)) {
      const v = sostituisci(valore, m.groups || {});
      risultato[nome] = impostate.has(nome) ? `${risultato[nome]}, ${v}` : v;
      impostate.add(nome);
    }
  }
  return risultato;
}

// ---------- server ----------

export function avviaAnteprima({ cartella, porta = 8788, host = '127.0.0.1', notFound = 'none', registro = null } = {}) {
  const radice = path.resolve(cartella);
  const server = http.createServer((req, res) => {
    let risposta;
    try {
      risposta = gestisciRichiesta(radice, req, { notFound });
    } catch (errore) {
      risposta = { stato: 500, intestazioni: { 'content-type': 'text/plain; charset=utf-8' }, corpo: Buffer.from(`Errore dell'anteprima: ${errore.message}`) };
    }
    if (registro) registro(`${req.method} ${req.url} → ${risposta.stato}${risposta.intestazioni.location ? ` ${risposta.intestazioni.location}` : ''}`);
    res.writeHead(risposta.stato, risposta.intestazioni);
    res.end(req.method === 'HEAD' ? undefined : risposta.corpo || undefined);
  });
  return new Promise((risolvi, rifiuta) => {
    server.once('error', rifiuta);
    server.listen(porta, host, () => {
      const { port } = server.address();
      risolvi({
        server,
        indirizzo: `http://${host}:${port}`,
        chiudi: () => new Promise((fatto) => {
          server.closeAllConnections?.();
          server.close(() => fatto());
        }),
      });
    });
  });
}

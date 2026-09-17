#!/usr/bin/env node
// Anteprima locale di una cartella di pagine, con le regole principali di Cloudflare.

import fs from 'node:fs';
import path from 'node:path';
import { leggiOpzioni, erroreUso, controllaCartellaPagine } from './comune.mjs';
import { avviaAnteprima, leggiRedirects, leggiHeaders } from './server-anteprima.mjs';

const AIUTO = `Anteprima locale di una cartella di pagine, con le regole principali di Cloudflare.

Uso:
  node anteprima.mjs <cartella> [--porta 8788] [--non-trovato none|404-page|single-page-application] [--registro]

Regole applicate, come su Cloudflare Workers con file statici:
  - _redirects: redirect 301, 302, 303, 307, 308, inoltri 200 interni, * e :segnaposto;
  - indirizzi senza .html: /pagina serve pagina.html, /pagina.html porta a /pagina, /cartella/ serve cartella/index.html;
  - _headers: intestazioni aggiunte, unite o tolte (! Nome) per percorso;
  - file inesistente: 404 (con --non-trovato 404-page serve 404.html, con single-page-application index.html).
  I file _redirects e _headers non vengono serviti. Le modifiche ai file valgono subito, senza riavviare.

Opzioni:
  --porta <numero>     porta locale (predefinita 8788; 0 sceglie una porta libera)
  --non-trovato <modo> come Cloudflare «not_found_handling» (predefinito none)
  --registro           stampa ogni richiesta con la risposta

L'anteprima ascolta solo su 127.0.0.1: è visibile solo da questo computer. Ctrl+C per fermarla.
Codice d'uscita: 0 fermata normalmente, 1 avvio non riuscito, 2 opzioni non valide.`;

const { posizionali, opzioni: o } = leggiOpzioni(
  process.argv.slice(2),
  { '--porta': 'numero', '--non-trovato': 'testo', '--registro': 'flag' },
  AIUTO,
);
if (posizionali.length !== 1) erroreUso('indica una sola cartella', AIUTO);
const cartella = path.resolve(posizionali[0]);
if (!fs.existsSync(cartella) || !fs.statSync(cartella).isDirectory()) erroreUso(`cartella non trovata: ${cartella}`, AIUTO);
const controlloPagine = controllaCartellaPagine(cartella);
if (controlloPagine.errore) erroreUso(controlloPagine.errore, AIUTO);
for (const a of controlloPagine.avvisi) console.log(`Attenzione: ${a}`);
const notFound = o['non-trovato'] || 'none';
if (!['none', '404-page', 'single-page-application'].includes(notFound)) erroreUso('--non-trovato accetta none, 404-page, single-page-application', AIUTO);
const porta = o.porta ?? 8788;
if (!Number.isInteger(porta) || porta < 0 || porta > 65535) erroreUso('--porta deve essere un numero fra 0 e 65535', AIUTO);

const redirects = leggiRedirects(cartella);
const headers = leggiHeaders(cartella);
for (const nota of [...redirects.ignorate.map((n) => `_redirects ${n}`), ...headers.ignorate.map((n) => `_headers ${n}`)]) {
  console.log(`Attenzione, regola ignorata come farebbe Cloudflare: ${nota}`);
}

let anteprima;
try {
  anteprima = await avviaAnteprima({ cartella, porta, notFound, registro: o.registro ? (r) => console.log(r) : null });
} catch (errore) {
  console.error(
    errore.code === 'EADDRINUSE'
      ? `La porta ${porta} è già occupata, forse da un'altra anteprima. Scegline un'altra con --porta, per esempio --porta ${porta + 1}.`
      : `Anteprima non avviata: ${errore.message}`,
  );
  process.exit(1);
}

console.log(`Anteprima di ${cartella}`);
console.log(
  `Regole: ${redirects.statiche.size + redirects.dinamiche.length} in _redirects, ${headers.regole.length} in _headers.`,
);
console.log(`Apri ${anteprima.indirizzo}/ nel browser. Ctrl+C per fermare.`);

let inChiusura = false;
async function ferma(segnale) {
  if (inChiusura) return;
  inChiusura = true;
  await anteprima.chiudi();
  console.log(`\nAnteprima fermata (${segnale}).`);
  process.exit(0);
}
process.on('SIGINT', () => ferma('SIGINT'));
process.on('SIGTERM', () => ferma('SIGTERM'));

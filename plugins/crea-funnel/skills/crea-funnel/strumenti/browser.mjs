// Funzioni comuni agli strumenti che aprono le pagine con Chromium (Playwright).

import fs from 'node:fs';
import path from 'node:path';
import { carica, controllaCartellaPagine } from './comune.mjs';
import { avviaAnteprima } from './server-anteprima.mjs';

export const DISPOSITIVI = {
  computer: { viewport: { width: 1440, height: 900 }, isMobile: false, hasTouch: false },
  telefono: {
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  },
};

export async function apriBrowser() {
  const { chromium } = await carica('playwright');
  return chromium.launch();
}

// Accetta un indirizzo web, una cartella di pagine o un file .html. Per cartelle e file avvia un'anteprima
// locale su una porta libera, con le stesse regole di anteprima.mjs. Restituisce { indirizzo, base, chiudi }.
export async function preparaIndirizzo(argomento, percorso = '') {
  if (/^https?:\/\//i.test(argomento)) {
    const indirizzo = percorso ? new URL(percorso, argomento).href : argomento;
    return { indirizzo, base: new URL(argomento).origin, chiudi: async () => {} };
  }
  const assoluto = path.resolve(argomento);
  if (!fs.existsSync(assoluto)) throw new Error(`non trovo «${argomento}»: indica un indirizzo web, una cartella o un file .html`);
  const controllo = controllaCartellaPagine(assoluto);
  if (controllo.errore) throw new Error(controllo.errore);
  for (const a of controllo.avvisi) console.error(`Attenzione: ${a}`);
  let cartella = assoluto;
  let pagina = percorso || '/';
  if (fs.statSync(assoluto).isFile()) {
    cartella = path.dirname(assoluto);
    const nome = path.basename(assoluto).replace(/\.html?$/i, '');
    pagina = percorso || (nome === 'index' ? '/' : `/${encodeURIComponent(nome)}`);
  }
  const anteprima = await avviaAnteprima({ cartella, porta: 0 });
  return { indirizzo: new URL(pagina, anteprima.indirizzo).href, base: anteprima.indirizzo, chiudi: anteprima.chiudi };
}

// Attende rete ferma e caratteri pronti.
export async function attendiPagina(pagina) {
  await pagina.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  await pagina.evaluate(() => document.fonts && document.fonts.ready).catch(() => {});
}

// Scorre tutta la pagina in modo istantaneo, così partono immagini e contenuti caricati allo scorrimento,
// poi torna in cima e aspetta che la pagina sia davvero lì (anche con scroll-behavior: smooth).
export async function scorriTutta(pagina) {
  await pagina.evaluate(async () => {
    const passo = Math.max(200, Math.floor(window.innerHeight * 0.8));
    for (let y = 0; y < document.documentElement.scrollHeight; y += passo) {
      window.scrollTo({ top: y, behavior: 'instant' });
      await new Promise((r) => setTimeout(r, 100));
    }
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' });
    await new Promise((r) => setTimeout(r, 150));
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  await pagina.waitForFunction(() => window.scrollY === 0, null, { timeout: 5000 }).catch(() => {});
  await attendiPagina(pagina);
  await pagina.waitForTimeout(200);
}

export function nomeDaIndirizzo(indirizzo) {
  const p = new URL(indirizzo).pathname.replace(/\/+$/, '').split('/').pop() || 'pagina';
  return decodeURIComponent(p).replace(/\.html?$/i, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'pagina';
}

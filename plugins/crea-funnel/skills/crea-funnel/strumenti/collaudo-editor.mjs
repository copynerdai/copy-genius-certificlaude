// Confronta la pagina assemblata con i widget ricomposti, prima della consegna all'editor.
import fs from 'node:fs';
import path from 'node:path';
import { avviaAnteprima } from './server-anteprima.mjs';
import { DISPOSITIVI, attendiPagina, scorriTutta } from './browser.mjs';

export async function collaudaConversione(browser, radice, filePagina, cartella, contenitore) {
  const originale = await avviaAnteprima({ cartella: radice, porta: 0 });
  const convertita = await avviaAnteprima({ cartella, porta: 0 });
  const problemi = [];
  const percorso = '/' + path.relative(radice, filePagina).split(path.sep).map(encodeURIComponent).join('/');
  const cartellaControlli = path.join(cartella, 'collaudo');
  fs.mkdirSync(cartellaControlli, { recursive: true });
  try {
    for (const dispositivo of Object.keys(DISPOSITIVI)) {
      const risultati = [];
      for (const [nome, indirizzo] of [['originale', originale.indirizzo + percorso], ['frammenti', convertita.indirizzo + '/anteprima-frammenti']]) {
        const contesto = await browser.newContext(DISPOSITIVI[dispositivo]);
        try {
          const pagina = await contesto.newPage();
          const errori = new Set();
          pagina.on('pageerror', (e) => errori.add(e.message));
          pagina.on('requestfailed', (r) => errori.add(`richiesta fallita: ${r.url()}`));
          pagina.on('response', (r) => { if (r.status() >= 400) errori.add(`HTTP ${r.status()}: ${r.url()}`); });
          await pagina.goto(indirizzo, { waitUntil: 'load', timeout: 60000 });
          await attendiPagina(pagina);
          await scorriTutta(pagina);
          const blocchi = await pagina.evaluate((selettore) => [...document.querySelectorAll(selettore)].flatMap((c) => [...c.children]).filter((e) => !['SCRIPT', 'STYLE'].includes(e.tagName)).map((e) => {
            const r = e.getBoundingClientRect();
            return { nome: e.id || e.getAttribute('data-parte') || e.tagName, testo: e.textContent.replace(/\s+/g, ' ').trim(), x: r.x, y: r.y + scrollY, larghezza: r.width, altezza: r.height };
          }), contenitore);
          await pagina.screenshot({ path: path.join(cartellaControlli, `${nome}-${dispositivo}.png`), fullPage: true, animations: 'disabled' });
          risultati.push(blocchi);
          for (const e of errori) problemi.push(`${dispositivo}, ${nome}: ${e}`);
        } finally { await contesto.close(); }
      }
      const [prima, dopo] = risultati;
      if (!prima.length || prima.length !== dopo.length) problemi.push(`${dispositivo}: numero di blocchi diverso (${prima.length} prima, ${dopo.length} dopo)`);
      for (let i = 0; i < Math.min(prima.length, dopo.length); i++) {
        const a = prima[i], b = dopo[i];
        if (a.nome !== b.nome || a.testo !== b.testo) problemi.push(`${dispositivo}: contenuto o ordine cambiato nel blocco ${a.nome}`);
        const misure = ['x', 'y', 'larghezza', 'altezza'].filter((k) => Math.abs(a[k] - b[k]) > 2);
        if (misure.length) problemi.push(`${dispositivo}, ${a.nome}: impaginazione cambiata (${misure.join(', ')}); sposta il layout dal contenitore alle sezioni`);
      }
    }
  } finally {
    await originale.chiudi();
    await convertita.chiudi();
  }
  return [...new Set(problemi)];
}

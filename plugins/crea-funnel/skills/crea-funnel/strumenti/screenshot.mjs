#!/usr/bin/env node
// Screenshot di una pagina come computer e telefono, prima schermata e pagina intera, oppure di una sola sezione.

import fs from 'node:fs';
import path from 'node:path';
import { leggiOpzioni, erroreUso } from './comune.mjs';
import { DISPOSITIVI, apriBrowser, preparaIndirizzo, scorriTutta, attendiPagina, nomeDaIndirizzo } from './browser.mjs';

const AIUTO = `Fotografa una pagina come computer (1440×900) e come telefono (390×844).

Uso:
  node screenshot.mjs <indirizzo | cartella | file.html> --uscita <cartella> [opzioni]
  node screenshot.mjs <...> --uscita <cartella> --selettore "#offerta" [--nome offerta-prima]

Senza --selettore salva, per ogni dispositivo:
  <nome>-computer-prima-schermata.png   <nome>-computer-pagina-intera.png
  <nome>-telefono-prima-schermata.png   <nome>-telefono-pagina-intera.png
Con --selettore salva solo l'elemento indicato: <nome>-computer.png e <nome>-telefono.png,
utile per confrontare una sezione prima e dopo una correzione.

Opzioni:
  --uscita <cartella>     dove salvare le immagini (obbligatoria)
  --nome <base>           inizio dei nomi dei file (predefinito: il nome della pagina, per esempio landing)
  --percorso <percorso>   pagina da aprire quando si indica una cartella, per esempio /landing (predefinito /)
  --solo computer|telefono  un solo dispositivo
  --scala 1|2             densità dei pixel (predefinita 1; 2 per immagini più nitide e più pesanti)
  --selettore <css>       fotografa solo questo elemento, per esempio "#s6" o ".offerta"
  --indice <n>            se il selettore trova più elementi, quale usare (da 0, predefinito 0)
  --margine <px>          spazio in più intorno all'elemento, per ciò che sporge (predefinito 0)
  --formato png|jpg       jpg per pagine molto lunghe (predefinito png)
  --sovrascrivi           sostituisce immagini già presenti

Una cartella o un file .html vengono aperti con l'anteprima locale (stesse regole di anteprima.mjs).
Prima delle foto la pagina viene fatta scorrere fino in fondo, così compaiono le immagini caricate in ritardo.
Codice d'uscita: 0 immagini salvate, 1 pagina non raggiungibile o elemento non trovato, 2 opzioni non valide.`;

const { posizionali, opzioni: o } = leggiOpzioni(
  process.argv.slice(2),
  {
    '--uscita': 'testo',
    '--nome': 'testo',
    '--percorso': 'testo',
    '--solo': 'testo',
    '--scala': 'numero',
    '--selettore': 'testo',
    '--indice': 'numero',
    '--margine': 'numero',
    '--formato': 'testo',
    '--sovrascrivi': 'flag',
  },
  AIUTO,
);
if (posizionali.length !== 1) erroreUso('indica una sola pagina', AIUTO);
if (!o.uscita) erroreUso('manca --uscita', AIUTO);
if (o.solo && !DISPOSITIVI[o.solo]) erroreUso('--solo accetta computer o telefono', AIUTO);
const scala = o.scala ?? 1;
if (![1, 2].includes(scala)) erroreUso('--scala accetta 1 o 2', AIUTO);
const formato = o.formato || 'png';
if (!['png', 'jpg'].includes(formato)) erroreUso('--formato accetta png o jpg', AIUTO);
const indice = o.indice ?? 0;
const margine = o.margine ?? 0;

let destinazione;
try {
  destinazione = await preparaIndirizzo(posizionali[0], o.percorso);
} catch (errore) {
  erroreUso(errore.message, AIUTO);
}
const cartella = path.resolve(o.uscita);
const nome = o.nome || nomeDaIndirizzo(destinazione.indirizzo);
const dispositivi = Object.keys(DISPOSITIVI).filter((d) => !o.solo || o.solo === d);
const file = (suffisso) => path.join(cartella, `${nome}-${suffisso}.${formato}`);
const previsti = dispositivi.flatMap((d) => (o.selettore ? [file(d)] : [file(`${d}-prima-schermata`), file(`${d}-pagina-intera`)]));
const esistenti = previsti.filter((f) => fs.existsSync(f));
if (esistenti.length && !o.sovrascrivi) {
  await destinazione.chiudi();
  erroreUso(`esistono già: ${esistenti.map((f) => path.basename(f)).join(', ')}. Usa un altro --nome o --sovrascrivi`, AIUTO);
}
fs.mkdirSync(cartella, { recursive: true });

const opzioniFoto = { type: formato === 'jpg' ? 'jpeg' : 'png', animations: 'disabled', ...(formato === 'jpg' ? { quality: 85 } : {}) };
let browser;
let codice = 0;
const salvati = [];
try {
  browser = await apriBrowser();
  for (const d of dispositivi) {
    const contesto = await browser.newContext({ ...DISPOSITIVI[d], deviceScaleFactor: scala });
    const pagina = await contesto.newPage();
    const risposta = await pagina.goto(destinazione.indirizzo, { waitUntil: 'load', timeout: 60000 });
    if (!risposta || risposta.status() >= 400) throw new Error(`${destinazione.indirizzo} ha risposto ${risposta ? risposta.status() : 'senza risposta'}`);
    await attendiPagina(pagina);
    if (o.selettore) {
      await scorriTutta(pagina);
      const elementi = pagina.locator(o.selettore);
      const quanti = await elementi.count();
      if (quanti <= indice) throw new Error(`il selettore «${o.selettore}» trova ${quanti} elementi su ${d}: nessun elemento con indice ${indice}`);
      const elemento = elementi.nth(indice);
      await elemento.scrollIntoViewIfNeeded();
      await pagina.waitForTimeout(300);
      if (margine) {
        const r = await elemento.boundingBox();
        if (!r) throw new Error(`l'elemento «${o.selettore}» non è visibile su ${d}`);
        await pagina.screenshot({
          ...opzioniFoto,
          path: file(d),
          fullPage: true,
          clip: { x: Math.max(0, r.x - margine), y: Math.max(0, r.y + (await pagina.evaluate(() => window.scrollY)) - margine), width: r.width + 2 * margine, height: r.height + 2 * margine },
        });
      } else {
        await elemento.screenshot({ ...opzioniFoto, path: file(d) });
      }
      salvati.push(file(d));
    } else {
      await pagina.screenshot({ ...opzioniFoto, path: file(`${d}-prima-schermata`) });
      salvati.push(file(`${d}-prima-schermata`));
      await scorriTutta(pagina);
      await pagina.screenshot({ ...opzioniFoto, path: file(`${d}-pagina-intera`), fullPage: true });
      salvati.push(file(`${d}-pagina-intera`));
    }
    await contesto.close();
  }
  console.log(`Pagina: ${destinazione.indirizzo}`);
  for (const f of salvati) console.log(`Salvato ${f}`);
} catch (errore) {
  console.error(`Screenshot non riuscito: ${errore.message}`);
  codice = 1;
} finally {
  if (browser) await browser.close();
  await destinazione.chiudi();
}
process.exit(codice);

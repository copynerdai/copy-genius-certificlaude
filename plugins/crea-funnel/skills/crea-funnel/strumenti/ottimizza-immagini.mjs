#!/usr/bin/env node
// Crea versioni WebP a più larghezze di un'immagine e stampa il tag <img> pronto per la pagina.

import fs from 'node:fs';
import path from 'node:path';
import { leggiOpzioni, erroreUso, carica, formatoByte, Rapporto } from './comune.mjs';

const AIUTO = `Crea versioni WebP a più larghezze di un'immagine e stampa il tag <img> da mettere nella pagina.

Uso:
  node ottimizza-immagini.mjs <immagine> --uscita <cartella> --alt "descrizione" [opzioni]
  node ottimizza-immagini.mjs <immagine> --uscita <cartella> --decorativa [opzioni]

Obbligatorie:
  <immagine>               copia di lavoro (png, jpg, webp, avif, tiff); non viene modificata
  --uscita <cartella>      dove salvare i file WebP
  --alt <testo>            testo alternativo, oppure --decorativa per un'immagine solo decorativa (alt vuoto)

Facoltative:
  --larghezze <elenco>     larghezze in pixel separate da virgole (predefinite 480,960,1440). L'immagine non
                           si ingrandisce: al posto delle larghezze oltre l'originale si crea la versione a larghezza piena
  --qualita <1-100>        qualità WebP (predefinita 80)
  --nome <base>            nome dei file (predefinito: nome dell'originale in minuscolo con trattini)
  --percorso-web <prefisso> percorso usato nella pagina per i file, per esempio risorse/foto (predefinito: solo il nome)
  --sizes <valore>         attributo sizes (predefinito 100vw), per esempio "(min-width: 900px) 440px, 100vw"
  --caricamento lazy|eager lazy (predefinito) per le immagini sotto la prima schermata, eager per quelle in cima
  --classe <nomi>          attributo class
  --sovrascrivi            sostituisce file WebP già presenti
  --salva <file.md>        salva anche il rapporto in Markdown

I metadati (per esempio la posizione GPS delle foto) non vengono copiati; l'orientamento è applicato.
Codice d'uscita: 0 fatto, 1 errore nella conversione, 2 opzioni non valide.`;

const { posizionali, opzioni: o } = leggiOpzioni(
  process.argv.slice(2),
  {
    '--uscita': 'testo',
    '--alt': 'testo',
    '--decorativa': 'flag',
    '--larghezze': 'testo',
    '--qualita': 'numero',
    '--nome': 'testo',
    '--percorso-web': 'testo',
    '--sizes': 'testo',
    '--caricamento': 'testo',
    '--classe': 'testo',
    '--sovrascrivi': 'flag',
    '--salva': 'testo',
  },
  AIUTO,
);

if (posizionali.length !== 1) erroreUso('indica una sola immagine', AIUTO);
const sorgente = path.resolve(posizionali[0]);
if (!fs.existsSync(sorgente)) erroreUso(`immagine non trovata: ${sorgente}`, AIUTO);
if (!o.uscita) erroreUso('manca --uscita', AIUTO);
if (o.alt === undefined && !o.decorativa) erroreUso('serve --alt "descrizione" oppure --decorativa', AIUTO);
if (o.alt !== undefined && o.decorativa) erroreUso('usa --alt oppure --decorativa, non entrambi', AIUTO);
if (o.decorativa === undefined && !o.alt.trim()) erroreUso('--alt è vuoto: descrivi l\'immagine oppure usa --decorativa', AIUTO);
const larghezze = [...new Set((o.larghezze || '480,960,1440').split(',').map((x) => Number(x.trim())))].sort((a, b) => a - b);
if (larghezze.some((l) => !Number.isInteger(l) || l < 16 || l > 8000)) erroreUso('--larghezze vuole numeri interi fra 16 e 8000, separati da virgole', AIUTO);
const qualita = o.qualita ?? 80;
if (!Number.isInteger(qualita) || qualita < 1 || qualita > 100) erroreUso('--qualita va da 1 a 100', AIUTO);
const caricamento = o.caricamento || 'lazy';
if (!['lazy', 'eager'].includes(caricamento)) erroreUso('--caricamento accetta lazy o eager', AIUTO);

const normalizza = (s) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
const nome = normalizza(o.nome || path.parse(sorgente).name) || 'immagine';
const cartella = path.resolve(o.uscita);
const percentuale = (x) => `${(x * 100 < 1 ? (x * 100).toFixed(1) : Math.round(x * 100)).toString().replace('.', ',')}%`;
const html = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

try {
  const sharp = await carica('sharp');
  const info = await sharp(sorgente).rotate().toBuffer({ resolveWithObject: true }).then((r) => r.info);
  const pesoOriginale = fs.statSync(sorgente).size;

  const valide = larghezze.filter((l) => l <= info.width);
  const scartate = larghezze.filter((l) => l > info.width);
  // Se una larghezza chiesta supera l'originale, si usa l'originale intero come versione più grande.
  if (scartate.length && !valide.includes(info.width)) valide.push(info.width);

  const destinazioni = valide.map((l) => path.join(cartella, `${nome}-${l}.webp`));
  const esistenti = destinazioni.filter((f) => fs.existsSync(f));
  if (esistenti.length && !o.sovrascrivi) {
    erroreUso(`esistono già: ${esistenti.map((f) => path.basename(f)).join(', ')}. Usa --sovrascrivi per sostituirli`, AIUTO);
  }
  fs.mkdirSync(cartella, { recursive: true });

  const versioni = [];
  for (const [i, l] of valide.entries()) {
    const risultato = await sharp(sorgente)
      .rotate()
      .resize({ width: l, withoutEnlargement: true })
      .webp({ quality: qualita, effort: 6 })
      .toFile(destinazioni[i]);
    versioni.push({ file: destinazioni[i], larghezza: risultato.width, altezza: risultato.height, byte: risultato.size });
  }

  const prefisso = o['percorso-web'] ? o['percorso-web'].replace(/\/+$/, '') + '/' : '';
  const indirizzo = (v) => `${prefisso}${path.basename(v.file)}`;
  const grande = versioni[versioni.length - 1];
  const attributi = [
    o.classe ? `class="${html(o.classe)}"` : null,
    `src="${html(indirizzo(grande))}"`,
    versioni.length > 1 ? `srcset="${html(versioni.map((v) => `${indirizzo(v)} ${v.larghezza}w`).join(', '))}"` : null,
    versioni.length > 1 ? `sizes="${html(o.sizes || '100vw')}"` : null,
    `width="${grande.larghezza}"`,
    `height="${grande.altezza}"`,
    `alt="${o.decorativa ? '' : html(o.alt)}"`,
    `loading="${caricamento}"`,
    'decoding="async"',
  ].filter(Boolean);
  const tag = `<img ${attributi.join(' ')}>`;

  const rapporto = new Rapporto(`Immagine ottimizzata: ${path.basename(sorgente)}`);
  rapporto.testo(`Originale: ${info.width}×${info.height} px, ${formatoByte(pesoOriginale)}. Qualità WebP ${qualita}.`);
  rapporto.tabella(
    ['File', 'Misure', 'Peso', 'Rispetto all\'originale'],
    versioni.map((v) => [path.relative(process.cwd(), v.file) || v.file, `${v.larghezza}×${v.altezza}`, formatoByte(v.byte), percentuale(v.byte / pesoOriginale)]),
  );
  if (scartate.length) {
    rapporto.testo(`Larghezze non create perché più grandi dell'originale: ${scartate.join(', ')}. Al loro posto c'è la versione a ${info.width} px, la larghezza dell'originale.`);
  }
  rapporto.sezione('Tag per la pagina').testo('```html', tag, '```');
  rapporto.stampa().salva(o.salva);
} catch (errore) {
  if (errore.constructor?.name === 'DipendenzaMancante') {
    console.error(errore.message);
  } else {
    console.error(`Conversione non riuscita: ${errore.message}`);
  }
  process.exit(1);
}

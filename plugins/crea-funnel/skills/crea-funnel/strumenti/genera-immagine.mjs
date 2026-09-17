#!/usr/bin/env node
// Genera o modifica un'immagine con l'Image API di OpenAI, con registro e tetto di generazioni.
// Parametri verificati sulla guida ufficiale: https://developers.openai.com/api/docs/guides/image-generation

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {
  leggiOpzioni,
  erroreUso,
  nascondi,
  percorsoSegreti,
  conBlocco,
  carica,
  formatoByte,
  preparaApi,
} from './comune.mjs';

const AIUTO = `Genera o modifica un'immagine con l'Image API di OpenAI e la salva su file.

Uso:
  node genera-immagine.mjs --prompt "..." --uscita immagine.png --registro registro.jsonl --tetto 100 [opzioni]
  node genera-immagine.mjs --riferimento a.png [--riferimento b.png] [--maschera m.png] --prompt "..." --uscita nuova.png --registro ... --tetto ...

Obbligatorie:
  --prompt <testo> | --prompt-file <file>  la richiesta, scritta o in un file di testo
  --uscita <file>          file da salvare; il formato viene dall'estensione: .png, .jpg, .jpeg, .webp
  --registro <file.jsonl>  registro del progetto: una riga per chiamata
  --tetto <numero>         generazioni massime del progetto, contate dal registro

Facoltative:
  --riferimento <file>     immagine di riferimento (png, jpg, webp), ripetibile: attiva la modifica
  --maschera <file.png>    PNG con canale alfa: le zone trasparenti sono quelle da rifare. Vale per il primo
                           riferimento e deve avere le sue stesse misure
  --modello <nome>         predefinito gpt-image-2.5-sunburst, il modello che nella guida ufficiale ha la precisione
                           più alta e che in un progetto reale ha dato i risultati migliori (anche per generare da testo)
  --dimensioni <misura>    1024x1024 (predefinita), 1536x1024, 1024x1536, auto, oppure LARGHEZZAxALTEZZA:
                           multipli di 16, lato massimo 3840, proporzioni fra 1:3 e 3:1, fra 655.360 e 8.294.400 pixel
  --qualita <livello>      low, medium, high, xhigh, max (predefinita: la più alta documentata), auto
                           (xhigh e max solo con i modelli 2.5)
  --senza-ripiego          non scendere di qualità se il servizio rifiuta quella richiesta (vedi Regole)
  --sfondo <tipo>          auto, opaque, transparent (trasparente solo con png o webp)
  --compressione <0-100>   solo per jpg e webp
  --moderazione <livello>  auto (predefinito dal servizio) o low
  --nota <testo>           annotazione per il registro, per esempio la sezione della pagina
  --sovrascrivi            permette di sostituire un file esistente
  --timeout <secondi>      attesa massima della risposta (predefinita 300)
  --segreti <file>         file delle chiavi (predefinito: segreti.env nella cartella delle dipendenze)
  --indirizzo-base <url>   indirizzo alternativo dell'API, per le prove (predefinito https://api.openai.com/v1)
  --modalita-test           usa un server HTTP locale con chiave fittizia, senza leggere segreti.env

Indirizzi alternativi: solo HTTP 127.0.0.1 o [::1], insieme a --modalita-test.
Senza modalità test è ammessa solo l'API ufficiale HTTPS. I redirect sono rifiutati.

Regole:
  - La chiave OPENAI_API_KEY viene letta da segreti.env, usata solo nell'intestazione della richiesta,
    mai stampata né scritta nel registro.
  - Ogni chiamata arrivata all'API conta per il tetto, anche se il servizio risponde con un errore.
    Raggiunto il tetto, lo strumento si ferma senza chiamare.
    Le prenotazioni interrotte con esito sconosciuto non scadono: conserva anche il file .in-corso.
  - Un file esistente non viene sostituito senza --sovrascrivi.
  - Se il servizio rifiuta la qualità richiesta (HTTP 400 che riguarda «quality») o risponde con un errore
    del server (HTTP 5xx), lo strumento riprova una sola volta con la qualità di un livello più basso
    (max, xhigh, high, medium, low), lo scrive nell'output e nel registro; entrambe le chiamate contano nel tetto.

Codice d'uscita: 0 immagine salvata, 1 errore del servizio, tetto raggiunto o chiave mancante, 2 opzioni non valide.`;

const QUALITA = ['low', 'medium', 'high', 'xhigh', 'max', 'auto'];
const FORMATI = { '.png': 'png', '.jpg': 'jpeg', '.jpeg': 'jpeg', '.webp': 'webp' };
const TIPI = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp' };

const { opzioni: o } = leggiOpzioni(
  process.argv.slice(2),
  {
    '--prompt': 'testo',
    '--prompt-file': 'testo',
    '--uscita': 'testo',
    '--registro': 'testo',
    '--tetto': 'numero',
    '--riferimento': 'lista',
    '--maschera': 'testo',
    '--modello': 'testo',
    '--dimensioni': 'testo',
    '--qualita': 'testo',
    '--sfondo': 'testo',
    '--compressione': 'numero',
    '--moderazione': 'testo',
    '--nota': 'testo',
    '--sovrascrivi': 'flag',
    '--timeout': 'numero',
    '--segreti': 'testo',
    '--indirizzo-base': 'testo',
    '--senza-ripiego': 'flag',
    '--modalita-test': 'flag',
  },
  AIUTO,
);

// ---------- controllo delle opzioni, prima di qualunque chiamata ----------

if (Boolean(o.prompt) === Boolean(o['prompt-file'])) erroreUso('serve una fra --prompt e --prompt-file', AIUTO);
if (o['prompt-file']) {
  if (!fs.existsSync(o['prompt-file'])) erroreUso(`file del prompt non trovato: ${o['prompt-file']}`, AIUTO);
  o.prompt = fs.readFileSync(o['prompt-file'], 'utf8').trim();
  if (!o.prompt) erroreUso(`il file del prompt è vuoto: ${o['prompt-file']}`, AIUTO);
}
if (!o.uscita) erroreUso('manca --uscita', AIUTO);
if (!o.registro) erroreUso('manca --registro: ogni progetto tiene il suo registro delle generazioni', AIUTO);
if (o.tetto === undefined || !Number.isInteger(o.tetto) || o.tetto < 1) {
  erroreUso('manca --tetto, oppure non è un numero intero maggiore di zero', AIUTO);
}

const uscita = path.resolve(o.uscita);
const estensione = path.extname(uscita).toLowerCase();
const formato = FORMATI[estensione];
if (!formato) erroreUso("l'uscita deve finire in .png, .jpg, .jpeg o .webp", AIUTO);
if (fs.existsSync(uscita) && !o.sovrascrivi) {
  erroreUso(`${uscita} esiste già: scegli un altro nome o aggiungi --sovrascrivi`, AIUTO);
}

const riferimenti = (o.riferimento || []).map((f) => path.resolve(f));
const modifica = riferimenti.length > 0;
for (const f of riferimenti) {
  if (!fs.existsSync(f) || !fs.statSync(f).isFile()) erroreUso(`riferimento non trovato: ${f}`, AIUTO);
  if (!TIPI[path.extname(f).toLowerCase()]) erroreUso(`il riferimento deve essere png, jpg o webp: ${f}`, AIUTO);
}
const maschera = o.maschera ? path.resolve(o.maschera) : null;
if (maschera) {
  if (!modifica) erroreUso('--maschera richiede almeno un --riferimento', AIUTO);
  if (!fs.existsSync(maschera)) erroreUso(`maschera non trovata: ${maschera}`, AIUTO);
  if (path.extname(maschera).toLowerCase() !== '.png') erroreUso('la maschera deve essere un file .png con canale alfa', AIUTO);
}

const MODELLO_PREDEFINITO = 'gpt-image-2.5-sunburst';
const modello = o.modello || MODELLO_PREDEFINITO;
const dimensioni = o.dimensioni || '1024x1024';
// Qualità predefinita: la più alta documentata per il modello (max per i modelli 2.5, high per i precedenti).
const qualitaRichiesta = o.qualita || (modello.startsWith('gpt-image-2.5') ? 'max' : 'high');
let qualita = qualitaRichiesta;
if (!QUALITA.includes(qualita)) erroreUso(`--qualita accetta ${QUALITA.join(', ')}`, AIUTO);
if (['xhigh', 'max'].includes(qualita) && !modello.startsWith('gpt-image-2.5')) {
  erroreUso(`la qualità ${qualita} esiste solo per i modelli gpt-image-2.5`, AIUTO);
}
// Livello più basso di una qualità, per il ripiego: null se non c'è (low e auto).
const SCALA = ['low', 'medium', 'high', 'xhigh', 'max'];
const livelloInferiore = (q) => (SCALA.indexOf(q) > 0 ? SCALA[SCALA.indexOf(q) - 1] : null);
if (dimensioni !== 'auto') {
  const m = dimensioni.match(/^(\d+)x(\d+)$/);
  if (!m) erroreUso('--dimensioni deve essere auto oppure LARGHEZZAxALTEZZA, per esempio 1536x1024', AIUTO);
  const [l, a] = [Number(m[1]), Number(m[2])];
  const problemi = [];
  if (l % 16 || a % 16) problemi.push('larghezza e altezza devono essere multipli di 16');
  if (Math.max(l, a) > 3840) problemi.push('nessun lato può superare 3840 pixel');
  if (Math.max(l, a) / Math.min(l, a) > 3) problemi.push('le proporzioni devono stare fra 1:3 e 3:1');
  if (l * a < 655360 || l * a > 8294400) problemi.push('i pixel totali devono stare fra 655.360 e 8.294.400');
  if (problemi.length) erroreUso(`dimensioni ${dimensioni} non valide: ${problemi.join('; ')}`, AIUTO);
}
if (o.sfondo && !['auto', 'opaque', 'transparent'].includes(o.sfondo)) erroreUso('--sfondo accetta auto, opaque, transparent', AIUTO);
if (o.sfondo === 'transparent' && formato === 'jpeg') erroreUso('lo sfondo trasparente richiede un file .png o .webp', AIUTO);
if (o.compressione !== undefined) {
  if (formato === 'png') erroreUso('--compressione vale solo per .jpg e .webp', AIUTO);
  if (!Number.isInteger(o.compressione) || o.compressione < 0 || o.compressione > 100) erroreUso('--compressione va da 0 a 100', AIUTO);
}
if (o.moderazione && !['auto', 'low'].includes(o.moderazione)) erroreUso('--moderazione accetta auto o low', AIUTO);
const timeoutMs = (o.timeout ?? 300) * 1000;
if (!Number.isInteger(timeoutMs) || timeoutMs <= 0) erroreUso('--timeout deve essere positivo', AIUTO);
let api;
try { api = preparaApi('openai', o['indirizzo-base'], Boolean(o['modalita-test']), o.segreti); }
catch (errore) { erroreUso(errore.message, AIUTO); }
const base = api.base;
const registro = path.resolve(o.registro);
const prenotazioni = `${registro}.in-corso`;

// Misure della maschera, se sharp è installato: un errore qui evita una chiamata a pagamento sprecata.
if (maschera) {
  let sharp = null;
  try {
    sharp = await carica('sharp');
  } catch {}
  if (sharp) {
    const [m, r] = await Promise.all([sharp(maschera).metadata(), sharp(riferimenti[0]).metadata()]);
    if (!m.hasAlpha) erroreUso('la maschera non ha il canale alfa (trasparenza): le zone da rifare devono essere trasparenti', AIUTO);
    if (m.width !== r.width || m.height !== r.height) {
      erroreUso(`la maschera (${m.width}×${m.height}) deve avere le misure del primo riferimento (${r.width}×${r.height})`, AIUTO);
    }
  }
}

// ---------- chiave ----------

const fileSegreti = o.segreti ? path.resolve(o.segreti) : percorsoSegreti();
const segreti = api.segreti;
const chiave = segreti.valori.OPENAI_API_KEY;
if (!chiave) {
  console.error(
    `Manca la chiave OPENAI_API_KEY in ${fileSegreti}${segreti.esiste ? '' : ' (il file non esiste)'}.\n` +
      'Apri il file con un editor di testo, incolla la chiave dopo OPENAI_API_KEY= e salva. Non incollarla in chat.\n' +
      'Nessuna chiamata eseguita.',
  );
  process.exit(1);
}
const pulito = (testo) => nascondi(testo, Object.values(segreti.valori));

// ---------- registro e tetto ----------

function leggiJsonl(file) {
  if (!fs.existsSync(file)) return [];
  return fs
    .readFileSync(file, 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((r) => {
      try {
        return JSON.parse(r);
      } catch {
        throw new Error(`registro non leggibile: ${file}. Nessuna nuova chiamata finché il registro non è recuperato`);
      }
    })
    .filter(Boolean);
}

function stato() {
  const voci = leggiJsonl(registro);
  const contate = voci.filter((v) => v.conteggio).length;
  const concluse = new Set(voci.map((v) => v.id));
  // Una richiesta interrotta può essere stata addebitata: non scade e continua a occupare il tetto.
  const inCorso = new Set(leggiJsonl(prenotazioni).filter((p) => !concluse.has(p.id)).map((p) => p.id)).size;
  return { contate, inCorso };
}

fs.mkdirSync(path.dirname(registro), { recursive: true });
const relativo = (f) => (f ? path.relative(path.dirname(registro), f) || '.' : null);

// Prenota un posto nel tetto; restituisce l'id della chiamata oppure null se il tetto è raggiunto.
async function prenota() {
  const id = crypto.randomUUID();
  const esito = await conBlocco(registro, () => {
    const { contate, inCorso } = stato();
    if (contate + inCorso >= o.tetto) return { ok: false, contate, inCorso };
    fs.appendFileSync(prenotazioni, JSON.stringify({ id, data: new Date().toISOString(), file: uscita }) + '\n');
    return { ok: true };
  });
  if (esito.ok) return id;
  console.error(
    `Tetto di ${o.tetto} generazioni raggiunto: ${esito.contate} nel registro` +
      `${esito.inCorso ? ` e ${esito.inCorso} in corso o con esito sconosciuto` : ''}. Nessuna chiamata eseguita.\n` +
      'Per continuare serve un tetto più alto, deciso con chi segue il progetto.',
  );
  return null;
}

// Una chiamata al servizio con la qualità indicata. Restituisce { voce, dati }.
async function chiama(id, qualitaChiamata, ripiegoDa) {
  const voce = {
    data: new Date().toISOString(),
    id,
    numero: null,
    modalita: modifica ? 'modifica' : 'generazione',
    modello,
    dimensioni,
    qualita: qualitaChiamata,
    formato,
    sfondo: o.sfondo || null,
    compressione: o.compressione ?? null,
    moderazione: o.moderazione || null,
    prompt: o.prompt,
    riferimenti: riferimenti.map(relativo),
    maschera: relativo(maschera),
    uscita: relativo(uscita),
    file_salvato: null,
    nota: o.nota || '',
  };
  if (ripiegoDa) voce.ripiego_da = ripiegoDa;

  const parametri = { model: modello, prompt: o.prompt, size: dimensioni, quality: qualitaChiamata, output_format: formato };
  if (o.sfondo) parametri.background = o.sfondo;
  if (o.compressione !== undefined) parametri.output_compression = o.compressione;
  if (o.moderazione) parametri.moderation = o.moderazione;

  let richiesta;
  if (modifica) {
    const modulo = new FormData();
    for (const [nome, valore] of Object.entries(parametri)) modulo.append(nome, String(valore));
    for (const f of riferimenti) {
      modulo.append('image[]', new Blob([fs.readFileSync(f)], { type: TIPI[path.extname(f).toLowerCase()] }), path.basename(f));
    }
    if (maschera) modulo.append('mask', new Blob([fs.readFileSync(maschera)], { type: 'image/png' }), path.basename(maschera));
    richiesta = { url: `${base}/images/edits`, body: modulo, headers: {} };
  } else {
    richiesta = { url: `${base}/images/generations`, body: JSON.stringify(parametri), headers: { 'Content-Type': 'application/json' } };
  }

  const inizio = Date.now();
  let arrivata = false;
  let dati = null;
  try {
    const risposta = await fetch(richiesta.url, {
      method: 'POST',
      headers: { ...richiesta.headers, Authorization: `Bearer ${chiave}` },
      body: richiesta.body,
      signal: AbortSignal.timeout(timeoutMs),
      redirect: 'error',
    });
    arrivata = true;
    voce.stato_http = risposta.status;
    const idRichiesta = risposta.headers.get('x-request-id');
    if (idRichiesta) voce.id_richiesta = idRichiesta;
    const testo = await risposta.text();
    let corpo = null;
    try {
      corpo = JSON.parse(testo);
    } catch {}
    if (!risposta.ok) {
      voce.esito = 'errore';
      voce.errore = pulito(corpo?.error?.message || testo.slice(0, 500) || `HTTP ${risposta.status}`);
      if (corpo?.error?.code) voce.codice_errore = corpo.error.code;
      if (corpo?.error?.type) voce.tipo_errore = corpo.error.type;
      if (corpo?.error?.param) voce.parametro_errore = corpo.error.param;
    } else {
      const b64 = corpo?.data?.[0]?.b64_json;
      if (!b64) {
        voce.esito = 'errore';
        voce.errore = 'risposta senza immagine (manca data[0].b64_json)';
      } else {
        dati = Buffer.from(b64, 'base64');
        voce.esito = 'ok';
        voce.byte = dati.length;
        if (corpo.usage) voce.uso = corpo.usage;
        const risposte = {};
        for (const campo of ['size', 'quality', 'output_format', 'background']) if (corpo[campo]) risposte[campo] = corpo[campo];
        if (Object.keys(risposte).length) voce.risposta = risposte;
        if (corpo.data[0].revised_prompt) voce.prompt_rivisto = corpo.data[0].revised_prompt;
      }
    }
  } catch (errore) {
    const causa = errore.cause?.code || errore.name;
    voce.esito = 'errore';
    voce.errore = pulito(`${causa}: ${errore.cause?.message || errore.message}`);
    // Se la connessione non si è nemmeno aperta la richiesta non è arrivata; negli altri casi
    // (tempo scaduto, connessione interrotta) potrebbe essere arrivata e si conta, per prudenza.
    arrivata = !['ECONNREFUSED', 'ENOTFOUND', 'EAI_AGAIN', 'EHOSTUNREACH', 'ENETUNREACH'].includes(causa);
  }
  voce.durata_s = Math.round((Date.now() - inizio) / 100) / 10;
  voce.conteggio = arrivata;
  return { voce, dati };
}

// Il servizio ha rifiutato la qualità (HTTP 400 che riguarda «quality») o ha avuto un errore proprio (5xx)?
function ripiegoPossibile(voce) {
  if (!voce.conteggio || voce.esito === 'ok') return false;
  const inferiore = livelloInferiore(voce.qualita);
  if (!inferiore || o['senza-ripiego']) return false;
  if (voce.stato_http >= 500) return true;
  if (voce.stato_http === 400 && voce.codice_errore !== 'moderation_blocked') {
    return voce.parametro_errore === 'quality' || /quality/i.test(voce.errore || '');
  }
  return false;
}

async function registra(voce) {
  await conBlocco(registro, () => {
    if (voce.conteggio) voce.numero = stato().contate + 1;
    voce.tetto = o.tetto;
    fs.appendFileSync(registro, pulito(JSON.stringify(voce)) + '\n');
  });
}

const primoId = await prenota();
if (!primoId) process.exit(1);
let { voce, dati } = await chiama(primoId, qualita, null);
let ripiego = null;
if (ripiegoPossibile(voce)) {
  const inferiore = livelloInferiore(voce.qualita);
  voce.ripiego = `riprovo con qualità ${inferiore}`;
  await registra(voce);
  ripiego = { da: voce.qualita, a: inferiore, motivo: `HTTP ${voce.stato_http}${voce.codice_errore ? `, ${voce.codice_errore}` : ''}: ${voce.errore}`, numero: voce.numero };
  console.error(
    `Attenzione: ${voce.stato_http >= 500 ? `errore del servizio con qualità ${ripiego.da}` : `qualità ${ripiego.da} non accettata dal servizio`} (${ripiego.motivo}). ` +
      `Chiamata contata nel tetto: ${voce.numero} di ${o.tetto}. Riprovo una volta con qualità ${ripiego.a}: ` +
      'annota il cambio fra le scelte prese da sola.',
  );
  const secondoId = await prenota();
  if (!secondoId) process.exit(1);
  qualita = inferiore;
  ({ voce, dati } = await chiama(secondoId, qualita, ripiego.da));
}

// ---------- salvataggio ----------

if (dati) {
  fs.mkdirSync(path.dirname(uscita), { recursive: true });
  try {
    fs.writeFileSync(uscita, dati, { flag: o.sovrascrivi ? 'w' : 'wx' });
    voce.file_salvato = relativo(uscita);
  } catch (errore) {
    if (errore.code !== 'EEXIST') throw errore;
    // Un'altra generazione ha creato lo stesso file nel frattempo: l'immagine pagata non si perde.
    const alternativa = uscita.replace(/(\.[^.]+)$/, `-${voce.id.slice(0, 8)}$1`);
    fs.writeFileSync(alternativa, dati, { flag: 'wx' });
    voce.file_salvato = relativo(alternativa);
    voce.nota_file = `${path.basename(uscita)} esisteva già: salvata con un altro nome`;
  }
}

await registra(voce);

const cartellaRegistro = path.dirname(registro);
const secondi = String(voce.durata_s).replace('.', ',');
if (voce.esito === 'ok') {
  if (voce.nota_file) console.error(`Attenzione: ${voce.nota_file}.`);
  console.log(
    `Salvata ${path.resolve(cartellaRegistro, voce.file_salvato)} (${formatoByte(voce.byte)}) in ${secondi} s · ` +
      `${modello}, ${dimensioni}, qualità ${qualita}${ripiego ? ` (ripiego da ${ripiego.da})` : ''} · generazione ${voce.numero} di ${o.tetto}`,
  );
  console.log("Apri l'immagine e controllala prima di usarla.");
  process.exit(0);
}

const suggerimenti = {
  401: 'La chiave è stata rifiutata: controlla OPENAI_API_KEY in segreti.env.',
  403: 'La chiave non ha accesso a questo modello: controlla i permessi del progetto OpenAI.',
  429: 'Troppe richieste o credito esaurito: aspetta un momento o controlla il credito.',
};
let suggerimento = suggerimenti[voce.stato_http] || '';
if (voce.codice_errore === 'moderation_blocked') suggerimento = 'Richiesta bloccata dai filtri: cambia il prompt o le immagini di riferimento prima di riprovare.';
console.error(
  `Errore dopo ${secondi} s${voce.stato_http ? ` (HTTP ${voce.stato_http}${voce.codice_errore ? `, ${voce.codice_errore}` : ''})` : ''}: ${voce.errore}` +
    `\n${voce.conteggio ? `Chiamata contata nel tetto: ${voce.numero} di ${o.tetto}.` : 'La richiesta non è arrivata al servizio: non conta nel tetto.'}` +
    (ripiego ? `\nAnche il ripiego da ${ripiego.da} a ${ripiego.a} non è riuscito: nessun altro tentativo.` : '') +
    (suggerimento ? `\n${suggerimento}` : ''),
);
process.exit(1);

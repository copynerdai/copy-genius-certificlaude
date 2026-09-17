#!/usr/bin/env node
// Controlla le chiavi di segreti.env e le prova con chiamate gratuite, senza mai mostrarne i valori.

import path from 'node:path';
import { leggiOpzioni, erroreUso, nascondi, percorsoSegreti, Rapporto, CARTELLA_STRUMENTI, preparaApi } from './comune.mjs';

const AIUTO = `Controlla le chiavi di crea-funnel e le prova con chiamate gratuite.

Uso:
  node accessi.mjs [--solo openai|cloudflare] [--senza-prove] [--salva rapporto.md]

Opzioni:
  --solo openai|cloudflare  controlla solo le chiavi di quel servizio (ripetibile)
  --senza-prove             dice solo quali chiavi sono presenti, senza chiamare i servizi
  --salva <file.md>         salva anche il rapporto in Markdown
  --segreti <file>          file delle chiavi (predefinito: segreti.env nella cartella delle dipendenze)
  --modello <nome>          modello immagini richiesto (predefinito gpt-image-2.5-sunburst)
  --dominio <nome>          dominio scelto nel piano (obbligatorio per verificare Cloudflare)
  --modalita-test           server HTTP locale e credenziali fittizie; non legge segreti.env
  --base-openai <indirizzo>     indirizzo alternativo dell'API OpenAI, per le prove (predefinito https://api.openai.com/v1)
  --base-cloudflare <indirizzo> indirizzo alternativo dell'API Cloudflare, per le prove (predefinito https://api.cloudflare.com/client/v4)

Indirizzi alternativi: solo HTTP 127.0.0.1 o [::1], insieme a --modalita-test.
Senza modalità test sono ammesse solo le API ufficiali HTTPS. I redirect sono rifiutati.

Prove eseguite, tutte gratuite:
  OpenAI      elenco dei modelli; dice se i modelli per le immagini sono visibili.
  Cloudflare  verifica del token, nome dell'account, domini (zone) visibili, accesso ai Worker.

Mostra solo i nomi delle chiavi, mai i valori; gli identificativi sono nascosti.
Codice d'uscita: 0 prerequisiti verificati (oppure sola presenza con --senza-prove), 1 controllo non superato, 2 opzioni non valide.
Le chiamate di lettura non certificano credito disponibile o permessi di pubblicazione.`;

const SERVIZI = {
  openai: ['OPENAI_API_KEY'],
  cloudflare: ['CLOUDFLARE_API_TOKEN', 'CLOUDFLARE_ACCOUNT_ID'],
};

const { opzioni } = leggiOpzioni(
  process.argv.slice(2),
  {
    '--solo': 'lista',
    '--senza-prove': 'flag',
    '--salva': 'testo',
    '--segreti': 'testo',
    '--base-openai': 'testo',
    '--base-cloudflare': 'testo',
    '--modello': 'testo',
    '--dominio': 'testo',
    '--modalita-test': 'flag',
  },
  AIUTO,
);

const servizi = opzioni.solo || Object.keys(SERVIZI);
for (const s of servizi) if (!SERVIZI[s]) erroreUso(`--solo accetta openai o cloudflare, non «${s}»`, AIUTO);

const fileSegreti = opzioni.segreti ? path.resolve(opzioni.segreti) : percorsoSegreti();
if (servizi.includes('cloudflare') && !opzioni['senza-prove'] && !opzioni.dominio) erroreUso('per verificare Cloudflare indica --dominio con il nome scelto nel piano', AIUTO);
const dominio = (opzioni.dominio || '').toLowerCase().replace(/\.$/, '');
if (dominio && !/^[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?$/.test(dominio)) erroreUso('--dominio vuole un nome, senza https:// o percorsi', AIUTO);
const modelloRichiesto = opzioni.modello || 'gpt-image-2.5-sunburst';
const api = {};
try {
  for (const s of servizi) api[s] = preparaApi(s, opzioni[`base-${s}`], Boolean(opzioni['modalita-test']), opzioni.segreti);
} catch (errore) { erroreUso(errore.message, AIUTO); }
const segreti = api[servizi[0]].segreti;
const valoriSegreti = Object.values(segreti.valori);
const baseOpenai = api.openai?.base;
const baseCloudflare = api.cloudflare?.base;

const pulito = (testo) => nascondi(testo, valoriSegreti);

// Chiamata GET con la chiave solo nell'intestazione di autorizzazione.
async function chiama(indirizzo, chiave) {
  try {
    const risposta = await fetch(indirizzo, {
      headers: { Authorization: `Bearer ${chiave}` },
      signal: AbortSignal.timeout(30000),
      redirect: 'error',
    });
    let corpo = null;
    try {
      corpo = await risposta.json();
    } catch {}
    return { stato: risposta.status, corpo, richiesta: risposta.headers.get('x-request-id') };
  } catch (errore) {
    const causa = errore.cause?.code || errore.cause?.message || errore.message;
    return { stato: 0, errore: `servizio non raggiungibile (${pulito(causa)}): controlla la connessione a Internet` };
  }
}

async function provaOpenai(chiave) {
  const r = await chiama(`${baseOpenai}/models`, chiave);
  if (r.stato === 0) return { ok: false, esito: r.errore };
  if (r.stato === 200) {
    const modelli = (r.corpo?.data || []).map((m) => m.id).filter(Boolean);
    const immagini = modelli.filter((m) => /^gpt-image/.test(m)).sort();
    return {
      ok: immagini.includes(modelloRichiesto),
      esito: immagini.includes(modelloRichiesto)
        ? `chiave valida, modello ${modelloRichiesto} visibile; credito e generazione non verificati dalle chiamate gratuite`
        : `chiave valida ma modello richiesto ${modelloRichiesto} non visibile; modelli immagini: ${immagini.join(', ') || 'nessuno'}`,
    };
  }
  const codice = r.corpo?.error?.code || r.corpo?.error?.type || '';
  const spiegazioni = {
    401: 'chiave rifiutata: controlla di averla copiata intera, senza spazi, e che non sia stata revocata',
    403: 'chiave senza permesso per questa richiesta: controlla i permessi della chiave e del progetto OpenAI',
    429: 'troppe richieste o credito esaurito: controlla il credito e i limiti dell\'account OpenAI',
  };
  const spiegazione = spiegazioni[r.stato] || `risposta inattesa: ${pulito(r.corpo?.error?.message || '')}`;
  return { ok: false, esito: `${spiegazione} (HTTP ${r.stato}${codice ? `, codice ${codice}` : ''})` };
}

function erroriCloudflare(r) {
  const errori = r.corpo?.errors || [];
  return errori.map((e) => `${e.code} ${pulito(e.message)}`).join('; ') || `HTTP ${r.stato}`;
}

async function provaCloudflare(token, account) {
  const dettagli = [];
  // Token dell'utente o token dell'account: si prova prima il primo, poi il secondo.
  let verifica = await chiama(`${baseCloudflare}/user/tokens/verify`, token);
  let tipo = 'token utente';
  if (verifica.stato !== 0 && !verifica.corpo?.success) {
    const suAccount = await chiama(`${baseCloudflare}/accounts/${encodeURIComponent(account)}/tokens/verify`, token);
    if (suAccount.corpo?.success) {
      verifica = suAccount;
      tipo = 'token dell\'account';
    }
  }
  if (verifica.stato === 0) return { ok: false, esito: verifica.errore, dettagli };
  if (!verifica.corpo?.success) {
    const formato = (verifica.corpo?.errors || []).some((e) => e.code === 6003 || e.code === 6111);
    const spiegazione = formato
      ? 'token rifiutato perché il formato non è valido: copialo di nuovo intero, senza spazi né a capo'
      : 'token rifiutato: controlla di averlo copiato intero e che non sia scaduto o revocato';
    return { ok: false, esito: `${spiegazione} (${erroriCloudflare(verifica)})`, dettagli };
  }
  const stato = verifica.corpo.result?.status;
  if (stato && stato !== 'active') return { ok: false, esito: `token non attivo (stato: ${stato})`, dettagli };
  dettagli.push(`Token valido e attivo (${tipo}).`);

  let ok = true;
  const acc = await chiama(`${baseCloudflare}/accounts/${encodeURIComponent(account)}`, token);
  if (acc.corpo?.success) {
    dettagli.push(`Account raggiungibile: «${pulito(acc.corpo.result?.name || 'senza nome')}».`);
  } else {
    ok = false;
    dettagli.push(`Account non raggiungibile con questo token: controlla CLOUDFLARE_ACCOUNT_ID e i permessi del token (${erroriCloudflare(acc)}).`);
  }

  // Cerca la zona esatta o una sua antenata, senza assumere che sia nella prima pagina dell'account.
  let zonaTrovata = null;
  for (let nome = dominio; nome.includes('.'); nome = nome.slice(nome.indexOf('.') + 1)) {
    const zone = await chiama(`${baseCloudflare}/zones?account.id=${encodeURIComponent(account)}&name=${encodeURIComponent(nome)}`, token);
    if (!zone.corpo?.success) {
      ok = false;
      dettagli.push(`Domini non leggibili con questo token (${erroriCloudflare(zone)}).`);
      break;
    }
    zonaTrovata = (zone.corpo.result || []).find((z) => z.name === nome && z.status === 'active');
    if (zonaTrovata) break;
  }
  if (!zonaTrovata) {
    ok = false;
    dettagli.push(`Nessuna zona attiva accessibile per il dominio ${dominio}.`);
  } else dettagli.push(`Dominio ${dominio}: zona attiva ${zonaTrovata.name}, nell'account indicato.`);

  const worker = await chiama(`${baseCloudflare}/accounts/${encodeURIComponent(account)}/workers/scripts`, token);
  if (worker.corpo?.success) {
    const quanti = (worker.corpo.result || []).length;
    dettagli.push(`Worker: lettura consentita (${quanti === 1 ? '1 già presente' : `${quanti} già presenti`} nell'account). Il permesso di modifica e l'associazione del dominio si verificano solo con la pubblicazione autorizzata.`);
  } else {
    ok = false;
    dettagli.push(`Worker: accesso negato (${erroriCloudflare(worker)}). Per pubblicare il token deve avere il permesso «Workers Scripts: Edit».`);
  }
  return { ok, esito: ok ? 'token valido, account, zona scelta e lettura Worker verificati; pubblicazione ancora da verificare' : 'prerequisiti Cloudflare non soddisfatti', dettagli };
}

const rapporto = new Rapporto('Accessi di crea-funnel');
rapporto.testo(
  opzioni['modalita-test'] ? 'Modalità test: credenziali fittizie, nessun file delle chiavi letto.' : `File delle chiavi: \`${fileSegreti}\` (${segreti.esiste ? 'presente' : 'non trovato'})`,
  opzioni['senza-prove'] ? 'Solo presenza delle chiavi, senza chiamare i servizi.' : 'Prove con chiamate gratuite; valori mai mostrati.',
);

const righe = [];
const dettagliCloudflare = [];
let tuttoOk = true;
for (const servizio of servizi) {
  const nomi = SERVIZI[servizio];
  const mancanti = nomi.filter((n) => !segreti.valori[n]);
  for (const n of nomi) righe.push([servizio, n, segreti.valori[n] ? 'presente' : '**manca**']);
  if (mancanti.length) {
    tuttoOk = false;
    righe.push([servizio, 'prova', `non eseguita: manca ${mancanti.join(' e ')}`]);
    continue;
  }
  if (opzioni['senza-prove']) continue;
  const esito =
    servizio === 'openai'
      ? await provaOpenai(segreti.valori.OPENAI_API_KEY)
      : await provaCloudflare(segreti.valori.CLOUDFLARE_API_TOKEN, segreti.valori.CLOUDFLARE_ACCOUNT_ID);
  if (!esito.ok) tuttoOk = false;
  righe.push([servizio, 'prova', `${esito.ok ? 'ok' : '**non riuscita**'}: ${esito.esito}`]);
  if (esito.dettagli?.length) dettagliCloudflare.push(...esito.dettagli);
}

rapporto.tabella(['Servizio', 'Chiave', 'Esito'], righe);
if (dettagliCloudflare.length) rapporto.sezione('Dettagli Cloudflare').elenco(dettagliCloudflare);
if (righe.some((r) => r[2] === '**manca**')) {
  const preparazione = segreti.esiste
    ? ''
    : ` Il file non esiste ancora: crealo con \`node "${path.join(CARTELLA_STRUMENTI, 'prepara-ambiente.mjs')}"\`.`;
  rapporto.sezione('Cosa fare').testo(
    `Apri \`${fileSegreti}\` con un editor di testo, incolla il valore dopo il segno = della chiave indicata, salva e rilancia questo controllo. Non incollare le chiavi in chat.${preparazione}`,
  );
}
rapporto.testo(tuttoOk ? opzioni['senza-prove'] ? 'Esito: **chiavi presenti, servizi non verificati**.' : 'Esito: **prerequisiti accessi verificati**. Le operazioni a pagamento e di pubblicazione non sono state eseguite.' : 'Esito: **accessi non pronti**.');

// Ultima difesa: nessun valore delle chiavi esce dal processo, nemmeno per errore.
const testoFinale = pulito(rapporto.toString());
rapporto.righe = testoFinale.split('\n');
rapporto.stampa().salva(opzioni.salva);
process.exit(tuttoOk ? 0 : 1);

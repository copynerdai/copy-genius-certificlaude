# Crea funnel

Crea funnel è una **skill** per Claude Code, cioè un insieme di istruzioni e strumenti che Claude segue quando la avvii. Trasforma un copy già scritto, di solito con Copy Genius, in pagine web impaginate, con immagini, collegamenti e controlli, fino alla pubblicazione online su Cloudflare o al codice da incollare in un editor come Elementor, OptimizePress o GoHighLevel.

Lavora in tre tempi:
1. **prima ti fa domande** a giri, con una risposta consigliata per ciascuna, e scrive tutte le decisioni in un piano che confermi tu;
2. **poi lavora da sola**: una piccola prova di stile da approvare, poi pagine, immagini e controlli automatici;
3. **poi provi tu** la prima versione e rispondi come preferisci, anche con un messaggio dettato: la skill riscrive il tuo feedback in punti, chiede dove ha dubbi, corregge e ti dà una nuova versione, fino all'approvazione.

Legge i materiali di Copy Genius ma non li modifica mai. Funziona anche senza Copy Genius: in quel caso ti chiede il copy e i materiali del brand.

Se scegli Elementor o un editor simile, ricevi blocchi di codice HTML: testi e prezzi si cambiano nel codice, oppure chiedendo alla skill di farlo, non con i normali strumenti di testo dell'editor. Puoi scegliere un blocco per sezione per sostituirla più facilmente. Per alcuni font o script può servire l'aiuto di chi gestisce il sito. La consegna distingue il codice preparato dalla pagina effettivamente provata nell'editor.

## Cosa serve

- **Claude Code** installato, con il **modello Claude più potente disponibile nel tuo piano** (si sceglie con il comando `/model`): da lui dipendono la qualità delle domande, del codice e dei controlli.
- **Node.js 22 o successiva** (https://nodejs.org, versione LTS). Al primo avvio la skill controlla se c'è.
- **Logo e kit grafico del brand.** La skill li recupera, ma non li crea.
- Il **copy** definitivo delle pagine.
- Solo se servono al tuo progetto:
  - una **chiave API di OpenAI** (il codice personale che permette di usare OpenAI dai programmi) con credito, per generare le immagini (in alternativa le fai a mano in ChatGPT e la skill le archivia). La skill usa il modello di immagini più capace alla qualità più alta e ti propone un tetto di 100 generazioni per progetto, per evitare spese senza che tu lo sappia;
  - un **account Cloudflare** con il dominio attivo e un **token**, cioè una chiave che permette alla skill di pubblicare al posto tuo.

  La skill ti guida a crearli al momento giusto. Le chiavi non si incollano mai in chat: vanno in un file sul tuo computer.

La prima preparazione dell'ambiente scarica circa 1 GB (il browser usato per i controlli e gli strumenti per immagini e pubblicazione) in una cartella `.crea-funnel` nella tua cartella utente.

## Installazione

La skill si installa come **plugin**, un pacchetto che si aggiunge a Claude Code, dal **marketplace** `copynerd`, l'elenco di plugin da cui si installa anche Copy Genius.

Repository del marketplace: [copynerdai/copy-genius-certificlaude](https://github.com/copynerdai/copy-genius-certificlaude). Crea funnel è un plugin separato: installarlo o aggiornarlo non aggiorna Copy Genius.

Se hai già installato Copy Genius, il marketplace `copynerd` è già aggiunto. In Claude Code scrivi:

```
/plugin marketplace update copynerd
/plugin install crea-funnel@copynerd
```

Se non hai il marketplace, aggiungilo prima:

```
/plugin marketplace add copynerdai/copy-genius-certificlaude
/plugin install crea-funnel@copynerd
```

**Verifica.** Chiudi Claude Code e aprilo di nuovo, così parte una sessione nuova (una nuova conversazione). Scrivi `/crea` e controlla che fra i suggerimenti compaia `crea-funnel`.

## Primo avvio

In una sessione nuova di Claude Code scrivi:

```
/crea-funnel:crea-funnel
```

Puoi aggiungere il brand o il funnel su cui lavorare, per esempio `/crea-funnel:crea-funnel lancio primavera`. Il nome completo distingue il plugin dalle copie locali della skill, che si avviano con `/crea-funnel`.

La skill parte solo quando la scrivi tu: non si avvia da sola mentre lavori con Copy Genius.

Il primo avvio:
1. **Inventario:** cerca Copy Genius sulla Scrivania (se non lo trova ti chiede dove si trova), il brand e il copy, e crea le cartelle del progetto.
2. **Domande a giri:** comincia il lavoro vero.
3. **Ambiente:** dopo che hai confermato il piano, controlla l'ambiente e ti chiede solo gli accessi che servono.

Il lavoro si può interrompere e riprendere in un'altra sessione: la skill rilegge il piano e le revisioni e riparte dal punto in cui eravate.

## Aggiornamenti

Per aggiornare una copia già installata dal marketplace, in Claude Code esegui:

```
/plugin marketplace update copynerd
/plugin update crea-funnel@copynerd
```

Riavvia Claude Code per usare la nuova versione. L'aggiornamento sostituisce solo la skill e i suoi strumenti: i progetti restano nelle cartelle del brand, le dipendenze e le chiavi restano in `.crea-funnel` nella cartella utente.

## Dove finisce il lavoro

Dentro la cartella del brand (o nella cartella di progetto, se lavori senza Copy Genius):

```
asset-grafici/              logo, kit, foto e stile del brand
asset-grafici-<funnel>/     immagini e infografiche del funnel, con gli esempi di stile in riferimenti/
pagine-<funnel>/
├── piano.md                tutte le decisioni, parte grafica compresa, e in fondo le pagine online
├── revisioni.md            scelte prese dalla skill da sola e giri di feedback
├── parti/                  header e footer, una copia sola per tutte le pagine
├── sorgente/               le pagine come le scrive la skill, con i segnaposto per header e footer
├── pubblico/               le pagine pronte, prodotte da sorgente/ e parti/ con un comando
└── controlli/              rapporti e screenshot di ogni versione
```

## Cosa la skill non fa

Non costruisce pagamenti, moduli che raccolgono dati, pixel di tracciamento e testi legali. Inserisce i link e i codici che ti danno le piattaforme del cliente, così come sono; quelli che mancano restano come segnaposto ben visibili e te li elenca alla consegna.

## Licenze

Il metodo delle domande a giri è adattato dalla skill `grilling` di Matt Pocock, con licenza MIT: vedi `LICENZE.md`.

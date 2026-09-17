# Copy Genius: dove trovare i materiali

Questo è l'unico file della skill che conosce la struttura di Copy Genius. Quando Copy Genius cambia versione, si aggiorna solo questo file.

La skill **legge** Copy Genius e **non lo modifica mai**: nessuna scrittura nei file esistenti del brand, nel funnel brief o nei file di sistema. Le sole scritture ammesse dentro la cartella del brand sono le cartelle della skill, descritte in fondo.

## Trovare Copy Genius

1. Cerca il Vault nella posizione di installazione:
   - macOS e Linux: `~/Desktop/copy-genius/`
   - Windows: `%USERPROFILE%\Desktop\copy-genius\`
2. Il Vault è quello giusto se contiene `CLAUDE.md` e la cartella `brands/`.
3. Se in quella posizione non c'è, **chiedi subito** dove si trova il Vault di Copy Genius, oppure se si lavora senza (vedi più sotto). Fermati alla domanda: non elencare il contenuto di altre cartelle e non provare percorsi simili. Guardare cartelle che la persona non ha indicato è invadente, espone file che non riguardano il lavoro e fa perdere tempo.

## Trovare il brand

È la prima cosa che chiedi, prima di leggere qualsiasi materiale.

- Ogni brand è una cartella `brands/<brand>/`, con nome in minuscolo e trattini. `brands/_template/` è il modello vuoto: non è un brand.
- Elenca i brand trovati, numerati, e chiedi: «Con quale brand vuoi lavorare?». Anche con un brand solo, chiedi conferma.
- Se la persona ha avviato la skill indicando un brand o un funnel, cercalo fra le cartelle e confermalo in una riga, senza rifare la domanda.
- Non aprire i file dei brand prima della risposta: leggere tutto per poi scartarlo fa perdere tempo e riempie la chat.

## Trovare il funnel brief

Subito dopo la scelta del brand, guarda `brands/<brand>/funnel-briefs/`.

| Cosa trovi | Cosa fai |
|---|---|
| Un solo brief | Proponilo in una riga e chiedi conferma. |
| Più brief | Elencali con nome e versione e chiedi su quale funnel lavorate. La versione più alta è la più recente. |
| Nessun brief | Fermati e dillo: «Questo brand non ha ancora un funnel brief: prima va preparato». Il brief si scrive con Copy Genius. Riprendi quando c'è. |

Se la persona ti chiede lo stesso di proseguire senza brief, si può: in quel caso le domande della fase successiva devono coprire anche ciò che il brief avrebbe già deciso, cioè pagine, percorso, offerta e destinazione dei pulsanti. Scrivilo in `piano.md`, così resta chiaro da dove vengono quelle decisioni.

## Materiali del brand e cosa servono

| File o cartella | Cosa contiene | Serve per |
|---|---|---|
| `brands/<brand>/brand.md` | identità, storia, posizionamento | tono delle immagini, testi mancanti |
| `brands/<brand>/brand-copy-rules.md` | regole di scrittura del brand | testi mancanti (pulsanti, ringraziamento, footer, avvisi) |
| `brands/<brand>/offers.md` | offerte, pacchetti, prezzi, garanzie | pulsanti delle offerte, parametri come il pacchetto scelto, controllo dei prezzi nelle pagine |
| `brands/<brand>/products.md` | prodotti, ingredienti, caratteristiche | immagini dei prodotti, schede |
| `brands/<brand>/testimonials.md` | testimonianze e recensioni | blocchi di prova; usarle solo come sono scritte |
| `brands/<brand>/avatars/` | profili dei clienti | persone e ambienti delle immagini |
| `brands/<brand>/funnel-briefs/<funnel>-v<N.N>.md` | brief strategico del funnel: architettura, pagine, offerta | pagine, ordine del percorso, destinazione dei pulsanti |
| `brands/<brand>/copy-output/` | copy scritti da Copy Genius, un file Markdown per pezzo (per esempio `<funnel>-landing-page.md`) | testo delle pagine |
| `brands/<brand>/asset-grafici/` | logo, kit grafico, foto del brand (se il brand l'ha già) | stile, logo, foto |

Il funnel brief più recente è quello con la versione più alta. Se il copy di una pagina non è in `copy-output/`, cerca nella cartella del brand un file Markdown con il nome del funnel e chiedi conferma alla persona prima di usarlo.

## Formato dei copy

I copy di Copy Genius sono file Markdown con:
- un'intestazione YAML fra `---` e un titolo e delle note prima della prima sezione;
- sezioni con titoli `## SEZIONE N` seguiti dal nome della sezione, e righe di servizio `**Installa**: ...`;
- note di impaginazione fra parentesi quadre su una riga (`[DESIGN NOTE: ...]`, `[H1]`, `[DIVIDER]`) e testi dei pulsanti come `[CTA BUTTON: "TESTO"]`;
- separatori `---`.

Le note di impaginazione sono informazioni per le domande (sezione «Impaginazione» del piano), non testo da mostrare. Il testo dei pulsanti invece va nella pagina. `confronta-copy.mjs` conosce già questo formato; se un copy ha un formato diverso, usa le opzioni `--inizio` e `--righe-servizio`.

## Cartelle create dalla skill dentro il brand

```
brands/<brand>/
├── asset-grafici/              logo, kit, foto e stile del brand: una sola copia di lavoro, con index.md
├── asset-grafici-<funnel>/     immagini e infografiche di questo funnel, con index.md
│   └── riferimenti/            esempi di stile di questo funnel (pagine salvate, screenshot), con index.md
└── pagine-<funnel>/            piano.md, revisioni.md, pagine, controlli, consegna
```

Cosa va dove:
- `asset-grafici/`: ciò che vale per tutto il brand e per più funnel: logo, kit grafico, foto del prodotto, del fondatore o del team fornite dalla persona;
- `asset-grafici-<funnel>/`: immagini create o scelte solo per questo funnel (generate, infografiche, foto di scena) e gli esempi di stile in `riferimenti/`.

Se il kit grafico è già descritto in un documento del brand (per esempio in `brand.md`), non copiarlo: nell'`index.md` di `asset-grafici/` scrivi dove si trova, così resta una sola copia di lavoro.

Se `asset-grafici/` esiste già, aggiungi solo ciò che manca e completa `index.md` senza cambiare i file presenti.

### Confine di scrittura

Prima di creare o spostare file, risolvi i percorsi reali: le uscite devono restare nelle tre cartelle qui sopra (o nel progetto autorizzato senza Copy Genius). Non seguire collegamenti simbolici che ne escono. I nomi del brand e del funnel devono essere nomi semplici, mai percorsi con `/`, `\` o `..`.

Gli originali del brand sono immutabili, anche se hanno nomi non normalizzati. Copiali nella cartella di lavoro prima di elaborare o rinominare. In `asset-grafici/` puoi aggiungere nuovi file e aggiornare l'indice preservandone le voci; non sostituire gli asset esistenti. Se un nome collide, usa un nuovo nome e registra l'origine. Per riusare `pagine-<funnel>/` o `asset-grafici-<funnel>/` esistenti, verifica prima piano e indici: riprendi solo se appartengono a questo lavoro; altrimenti chiedi un nome diverso. Il consenso a questa skill non autorizza modifiche a brief, copy, regole, offerte o file di sistema.

## Senza Copy Genius

La skill funziona lo stesso:

1. Chiedi dove creare la cartella del progetto; proponi `~/Desktop/crea-funnel/<brand>/` (su Windows `%USERPROFILE%\Desktop\crea-funnel\<brand>\`).
2. Crea le stesse cartelle descritte sopra, più `materiali/` per ciò che la persona fornisce.
3. Chiedi il copy di ogni pagina (file Markdown, documento o testo incollato) e salvalo in `materiali/copy/` con nome normalizzato.
4. Chiedi i materiali del brand che nel Vault staresti leggendo: offerte e prezzi, prodotti, regole di scrittura o esempi di testi del brand, logo e kit grafico. Salvali in `materiali/` o in `asset-grafici/` e registrali negli indici.
5. Da qui il percorso è identico.

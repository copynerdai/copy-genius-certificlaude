# Costruzione delle pagine

Riferimento per la prova di stile (passo 4), la costruzione (passo 5) e ogni nuova versione nei giri di feedback (passo 7). `<skill>` è la cartella della skill indicata in `SKILL.md`.

## Struttura del progetto

```
pagine-<funnel>/
├── piano.md
├── revisioni.md
├── prova-stile/          la prova di stile: index.html e lo stesso CSS che diventerà quello delle pagine
├── parti/                la copia unica delle parti comuni a tutte le pagine
│   ├── header.html
│   ├── footer.html
│   └── index.md          file, cosa contiene, origine, stato
├── sorgente/             le pagine come le scrivi tu, con i segnaposto delle parti comuni
│   ├── <pagina>.html     una per pagina del piano, per esempio landing.html, checkout.html, grazie.html
│   ├── stile.css         un solo foglio di stile, tutto sotto la classe contenitore, parti comuni comprese
│   ├── script.js         solo se serve
│   ├── _headers          solo per Cloudflare (per esempio X-Robots-Tag)
│   ├── _redirects        solo per Cloudflare (per esempio la radice verso la prima pagina)
│   └── risorse/
│       ├── foto/         versioni WebP create da ottimizza-immagini.mjs
│       ├── caratteri/    file dei caratteri con le loro licenze
│       └── logo/
├── pubblico/             prodotto da assembla.mjs: le pagine pronte, così come vanno online. Non si modifica a mano
├── wrangler.jsonc        solo per Cloudflare, preparato prima dei controlli al passo 5 (vedi destinazioni.md)
├── controlli/v<N>/       rapporti e screenshot di ogni versione
└── consegna/             frammenti per l'editor o materiale per chi riceve il lavoro
```

Le copie di lavoro delle immagini stanno in `asset-grafici/` e `asset-grafici-<funnel>/`; in `sorgente/risorse/` ci sono solo versioni ottimizzate, che si rifanno con un comando. `pubblico/` è una copia assemblata di `sorgente/`: si rifà ogni volta con `assembla.mjs` ed è la sola cartella su cui lavorano controlli, anteprima, pubblicazione e frammenti.

## Parti comuni: header, footer e assemblaggio

**Una sola copia.** Header, footer e ogni altro blocco uguale in più pagine (una fascia in alto, le finestre delle policy) stanno in `parti/`, un file per parte: `header.html`, `footer.html`, `fascia.html`. Quando cambi una parte, cambia in tutte le pagine al prossimo assemblaggio. Le regole CSS delle parti stanno in `sorgente/stile.css`, sotto la classe contenitore come tutto il resto.

**Da dove partono.**
- Se il piano dice che il funnel usa lo stile del brand e nel brand esiste `asset-grafici/header-footer/` (creata da un funnel precedente), copia da lì in `parti/` i file `header.html` e `footer.html` e aggiungi a `sorgente/stile.css` le regole del suo file CSS. Non modificare la copia del brand: le modifiche per questo funnel si fanno in `parti/`.
- Altrimenti header e footer nascono con la prova di stile: dopo l'approvazione, sposta il loro codice da `prova-stile/index.html` in `parti/header.html` e `parti/footer.html`.

Registra ogni parte in `parti/index.md` con file, cosa contiene, origine («brand, asset-grafici/header-footer/, copiata il <data>», «prova di stile approvata il <data>», «scritta per questo funnel») e stato.

**Segnaposto nelle pagine sorgente.** Dove va una parte scrivi il segnaposto, dentro il contenitore:

```html
<div class="<contenitore>">
  <!-- @parte header -->
  <section id="apertura">…</section>
  …
  <!-- @parte footer -->
</div>
```

- Una parte può avere variabili, scritte `{{nome}}` nel suo file e valorizzate dal segnaposto: `<!-- @parte header attiva="landing" -->`. Un valore che inizia con `@` inserisce un'altra parte: `<!-- @parte header nav="@nav-checkout" -->` mette `parti/nav-checkout.html` al posto di `{{nav}}`. Una parte può contenere altri segnaposto `@parte`.
- Il contenitore ha la stessa classe e gli stessi attributi in tutte le pagine (al massimo un `id` diverso per pagina): con un editor, header e footer si incollano una volta sola e devono valere per tutte le pagine.

**Assemblaggio.** Dopo ogni modifica a `sorgente/` o a `parti/`:

```bash
node "<skill>/strumenti/assembla.mjs" "pagine-<funnel>"
```

Produce `pubblico/` inserendo le parti e marcando gli elementi inseriti con `data-parte`; si ferma, senza scrivere nulla, se una parte manca, una variabile resta senza valore o un segnaposto è scritto male. Esito atteso: codice 0, «assemblato», nessun avviso. Non modificare mai `pubblico/` a mano: gli strumenti si fermano se ricevono la sorgente con i segnaposto e avvisano se `sorgente/` o `parti/` sono cambiate dopo l'ultimo assemblaggio.

## Prova di stile

1. Se il piano indica esempi di stile da pagine web, salvali: `node "<skill>/strumenti/salva-riferimento.mjs" <indirizzo> "asset-grafici-<funnel>/riferimenti/<nome>"`. Leggi la verifica. Se incompleta, correggi una volta soltanto ciò che è recuperabile senza aggirare accessi o restrizioni. Se il sito dipende da servizi online o contenuti dinamici, conserva la copia incompleta e crea un riferimento solo visivo in una nuova cartella con `--solo-visivo`: registra «parziale», cosa è utilizzabile e cosa manca nell'indice e nel piano. Non alzare la soglia per fingere una copia completa. Se non si vede un elemento necessario allo stile, chiedi uno screenshot alla persona; altrimenti prosegui con gli elementi osservabili, da approvare nella prova.
2. Scrivi `prova-stile/index.html` con gli elementi che poi useranno tutte le pagine: header con logo (quello del brand, se esiste in `asset-grafici/header-footer/`), titolo e sottotitolo, paragrafi, un elenco, pulsante principale e secondario, una scheda come quelle dell'offerta, una sezione con una foto già disponibile, una citazione o testimonianza, footer. Usa testi veri del copy, non testo finto.
3. Il CSS della prova è il primo `stile.css`: stesse regole, stessa classe contenitore.
4. Avvia l'anteprima: `node "<skill>/strumenti/anteprima.mjs" "pagine-<funnel>/prova-stile" --porta 8788` e lasciala accesa.
5. Fotografa: `node "<skill>/strumenti/screenshot.mjs" http://127.0.0.1:8788/ --uscita "pagine-<funnel>/controlli/prova-stile/v<N>" --nome prova-stile`. Incrementa N a ogni giro per conservare i confronti e non sovrascrivere. Guarda le quattro immagini.
6. Manda alla persona l'indirizzo `http://127.0.0.1:8788/` e chiedi di aprirlo su computer e di restringere la finestra o usare la vista telefono del browser. Elenca le scelte di stile che hai fatto.
7. Applica le correzioni e ripeti i punti 5 e 6 finché la persona approva. Scrivi l'approvazione nella parte grafica di `piano.md`.
8. Dopo l'approvazione crea `parti/` come descritto in «Parti comuni»: header e footer dal brand oppure dalla prova appena approvata.

## Regole di codice

- **Classe contenitore.** Ogni pagina ha dentro `<body>` un solo `<div class="<contenitore>">` che racchiude tutto, parti comuni comprese. Ogni regola CSS comincia con quella classe (`.<contenitore> h1`, `.<contenitore> .pulsante`). Niente regole su `html`, `body`, `:root` o `*` da soli: variabili e caratteri di base vanno sul contenitore. Vale anche per Cloudflare: così le pagine si possono sempre portare in un editor.
- **Isolamento e conversione editor.** Il contenitore è una singola classe semplice. Il CSS deve selezionare solo lui o i suoi discendenti: `.<contenitore> + footer` e `.<contenitore> ~ *` non sono isolati, anche se iniziano con la classe. Scrivi selettori completi anche dentro `@media` e `@supports`, senza CSS annidato né `@import` non verificati. Fogli esterni: prepara una copia locale se autorizzata. Header, corpo e footer diventano contenitori separati nei widget: non mettere sul contenitore grid/flex fra sezioni, `gap`, altezze minime di pagina, padding verticali o dipendenze fra fratelli che ne cambierebbero la resa; applica il layout alle singole sezioni. Per gli script non assumere un solo contenitore dopo la conversione. Il collaudo di `frammenti-editor.mjs` verifica il risultato e blocca le differenze rilevate.
- **Figli diretti del contenitore = sezioni.** Ogni sezione del copy è un `<section>` figlio diretto del contenitore, con un `id` leggibile. Per un editor con un widget per sezione, ogni sezione diventa un frammento.
- **Nessun servizio esterno** non previsto dal piano: niente caratteri, script, analytics o pixel da altri domini. I caratteri stanno in `risorse/caratteri/` con la licenza. I soli codici esterni ammessi sono quelli forniti dal cliente e scritti nel piano.
- **Header e footer** hanno una copia sola in `parti/`; nelle pagine c'è solo il segnaposto (vedi «Parti comuni»).
- **Indirizzi interni** come nel piano (per esempio `/checkout?pacchetto=...`), senza `.html`.
- **Immagini** con `alt`, `width`, `height` e `loading` (`eager` in prima schermata, `lazy` sotto). Su fondi scuri usa la versione chiara del logo; se il brand non ce l'ha, chiedila o annota la scelta.
- **Nomi dei file delle pagine**: il nome del file dà l'indirizzo in anteprima (`landing.html` risponde a `/landing`). Con un editor l'indirizzo definitivo lo decide la piattaforma: scrivilo nel piano accanto al nome del file.
- **Esclusione dai motori di ricerca** quando il piano la chiede: `<meta name="robots" content="noindex, nofollow">` in ogni pagina e `X-Robots-Tag: noindex, nofollow` in `_headers`.
- **Accessibilità minima:** contrasto almeno 4,5 per il testo normale e 3 per il testo grande, pulsanti come collegamenti o `<button>` veri, ordine dei titoli senza salti.

## Copy intatto

- Il testo di ogni pagina coincide parola per parola con il copy. Le note fra parentesi quadre non si mostrano; il testo dei pulsanti indicato nel copy sì.
- Marca con `data-fuori-copy` ogni elemento con testo che non viene dal copy: testi mancanti, schede, riquadri riassuntivi, segnaposto, didascalie aggiunte. Il marcatore esclude tutto ciò che contiene: se in un blocco c'è anche testo del copy (per esempio il pulsante del copy dentro una scheda dell'offerta), marca i singoli elementi e non il blocco.
- Marca con `data-etichetta` le etichette che ripetono parole del copy (per esempio nome e dosaggio in una scheda): `confronta-copy.mjs` controlla che non aggiungano parole.
- Scrivere in maiuscolo o minuscolo un testo del copy (per esempio un pulsante scritto tutto in maiuscolo nel copy) è una scelta presa da sola: annotala.

## Testi mancanti

- Se il piano dice che li fornisce la persona, usa il suo testo così com'è e segna «approvato».
- Se li scrivi tu: parti dalle regole di scrittura e dai documenti del brand (dove trovarli: `copy-genius.md`), senza fatti nuovi (niente prezzi, garanzie, tempi o numeri che non siano già scritti), con frasi complete e senza trattini lunghi. Scrivi il testo in `piano.md`, sezione «Testi scritti dall'AI», con la fonte, e segna «scritto, da rivedere».
- Elenca questi testi a ogni versione finché la persona non li approva.

## Segnaposto per link e codici del cliente

Per ogni link o codice del cliente non ancora fornito, usa un segnaposto ben visibile:

```html
<a class="segnaposto" href="#segnaposto-checkout" data-segnaposto="Link del checkout, pacchetto consigliato" data-fuori-copy>[DA INSERIRE: link del checkout]</a>
```

Dagli uno stile evidente con colori propri, scritto in modo che vinca sulle regole dei collegamenti di footer e schede (altrimenti su un fondo scuro il testo sparisce):

```css
.<contenitore> .segnaposto, .<contenitore> a.segnaposto { outline: 2px dashed #b3261e; background: #fff4c2 !important; color: #5b1a14 !important; }
```

Per una foto che manca usa lo stesso schema con un `<div class="segnaposto" data-segnaposto="..." data-fuori-copy>` della misura prevista. Tieni l'elenco nella sezione «Link del cliente» del piano. `controlla-pagine.mjs` li riconosce, li elenca una volta ciascuno e li mostra nella mappa dei pulsanti; con `--finale` diventano problemi. Questi segnaposto restano nelle pagine assemblate: non c'entrano con i segnaposto `@parte`, che `assembla.mjs` sostituisce.

## Immagini

### Generazione con l'API

- Scrivi il prompt in `asset-grafici-<funnel>/prompt/<NN-nome>.txt`: soggetto, ambiente, luce, inquadratura, stile deciso nel piano, cosa evitare (testi, marchi reali, volti noti).
- Modello e qualità: senza opzioni lo strumento usa il modello più capace documentato nella guida ufficiale (oggi `gpt-image-2.5-sunburst`) alla qualità più alta (`max`). L'obiettivo è la qualità, non il risparmio: non scendere di livello per scelta tua. Se il servizio rifiuta la qualità o va in errore, lo strumento riprova una volta con il livello sotto e lo scrive nell'output e nel registro: annota il cambio fra le scelte prese da sola in `revisioni.md` e nell'origine dell'immagine.
- Genera: `node "<skill>/strumenti/genera-immagine.mjs" --prompt-file "asset-grafici-<funnel>/prompt/<NN-nome>.txt" --uscita "asset-grafici-<funnel>/<NN-nome>.png" --registro "asset-grafici-<funnel>/registro-immagini.jsonl" --tetto <tetto del piano> --dimensioni <misura> --nota "<pagina e sezione>"`.
- Per modificare un'immagine o tenere coerenti persone e prodotti: `--riferimento <immagine>` (anche più volte) e, per rifare solo una zona, `--maschera <png con trasparenza>`.
- Il registro conta ogni chiamata arrivata al servizio, anche quelle fallite e quelle del ripiego. Se il tetto è raggiunto, fermati e chiedi alla persona se alzarlo: il tetto serve a evitare che un ciclo di tentativi sbagliati generi immagini a pagamento senza che lei lo sappia.
- Una richiesta interrotta o dall'esito sconosciuto continua a occupare un posto nel tetto, anche dopo il riavvio. Conserva insieme `registro-immagini.jsonl` e `registro-immagini.jsonl.in-corso`; non cancellare prenotazioni per liberare tentativi. Se il registro è danneggiato, recuperalo prima di riprendere. Il tetto è un limite di chiamate, non un preventivo in euro.

### Controllo di ogni immagine

Apri ogni immagine generata e guardala davvero prima di usarla:
- volti, mani, dita, occhi e proporzioni;
- oggetti e prodotti: forma, etichette, numero di pezzi;
- testo e numeri: lettera per lettera, anche quelli piccoli;
- marchi, loghi o volti che ricordano aziende e persone reali;
- coerenza con le altre immagini: stessa persona, stesso prodotto, stessa luce e stesso stile.

Se qualcosa non va, correggi con una modifica o rigenera. La versione scartata va in `asset-grafici-<funnel>/archivio/` con il suffisso `-v1`, `-v2`, e resta citata nell'indice come «scartata». Non cancellare nulla. Se una scelta fra due versioni è dubbia, tienila fra le scelte prese da sola; se cambia il senso della pagina, chiedi.

Registra ogni immagine in `asset-grafici-<funnel>/index.md`: file, cosa mostra, percorso, sezione, origine («generata con <modello>, qualità <qualità>, generazione <numero>», «fornita», «recuperata», «scritta in codice»), stato.

### Riserva: immagini fatte a mano in ChatGPT

Quando manca la chiave o il piano lo prevede:
1. prepara i prompt in `asset-grafici-<funnel>/prompt/` e dalli alla persona, uno per immagine, con il nome che il file dovrà avere;
2. la persona genera le immagini in ChatGPT e le salva in `asset-grafici-<funnel>/da-archiviare/`;
3. guardi ogni immagine come sopra, la rinomini, la sposti in `asset-grafici-<funnel>/` e la registri con origine «generata in ChatGPT dalla persona».

### Versioni per le pagine

`node "<skill>/strumenti/ottimizza-immagini.mjs" "asset-grafici-<funnel>/<NN-nome>.png" --uscita "pagine-<funnel>/sorgente/risorse/foto" --percorso-web /risorse/foto --alt "<descrizione>" --sizes "<misure>" [--caricamento eager]`, poi usa il tag `<img>` stampato nella pagina sorgente. Scegli `--larghezze` secondo la misura in cui l'immagine appare. Le versioni finiscono in `sorgente/risorse/`: l'assemblaggio le copia in `pubblico/`.

## Infografiche

- **In codice** (HTML e CSS): il testo è esatto per costruzione e si adatta al telefono. È la scelta consigliata quando c'è molto testo.
- **Generate**: controlla il testo lettera per lettera con quello deciso nel piano; su telefono il testo più piccolo deve restare leggibile (almeno circa 14 px nello screenshot a 390 px). Metti anche il testo esatto nella pagina, nascosto alla vista ma leggibile dai lettori di schermo, marcato `data-fuori-copy` se non viene dal copy.

## Telefono

Ogni sezione va provata a 390 px di larghezza: nessuno scorrimento orizzontale, testo di almeno 16 px, pulsanti alti almeno 44 px, immagini che non occupano più di una schermata senza motivo, tratti lunghi di solo testo interrotti come deciso nel piano.

## Controlli prima di consegnare una versione

Riassembla, poi esegui tutti i controlli sulla cartella `pubblico/` e salva i rapporti in `pagine-<funnel>/controlli/v<N>/`. Una versione si consegna solo con gli esiti attesi.

Se la destinazione è Cloudflare, prepara ora `wrangler.jsonc` con la sezione «Configurazione» di `destinazioni.md`, prima di eseguire `--prova`: questo non pubblica né cambia DNS. Raccogli i percorsi di tutte le pagine dalla tabella del piano, comprese ringraziamento e pagine non collegate. Passali uno per uno con `--attesa`; `--tutte` aggiunge ogni HTML presente, non sostituisce l'elenco del piano perché non può rilevare un file mai creato. Imposta `--massimo-pagine` almeno al numero di pagine previste; un limite raggiunto non è un controllo superato.

| Controllo | Comando | Esito atteso |
|---|---|---|
| Assemblaggio | `node "<skill>/strumenti/assembla.mjs" "pagine-<funnel>" --salva ".../controlli/v<N>/assemblaggio.md"` | codice 0, «assemblato», nessun avviso |
| Credenziali | `node "<skill>/strumenti/controlla-credenziali.mjs" "pagine-<funnel>/pubblico" --salva ".../controlli/v<N>/credenziali.md"` | codice 0, scansione completa dell'ambito dichiarato; nessun file saltato. Se il piano usa chiavi reali, devono essere incluse nel confronto senza mostrarle. La sola ricerca di forme sospette non ne certifica l'assenza assoluta |
| Copy | per ogni pagina con copy: `node "<skill>/strumenti/confronta-copy.mjs" "pagine-<funnel>/pubblico" <copy.md> --percorso /<pagina> --salva ".../controlli/v<N>/copy-<pagina>.md"` | codice 0, 0 differenze di testo; maiuscole e tipografia fra le scelte prese da sola; ogni parte «fuori copy» è prevista |
| Pagine | `node "<skill>/strumenti/controlla-pagine.mjs" "pagine-<funnel>/pubblico" --percorso /<prima pagina> --tutte --attesa /<prima pagina> --attesa /<altra pagina> [--segui] [--noindex] [--domini-ammessi <domini del cliente>] --salva ".../controlli/v<N>/pagine.md"`. Ripeti `--attesa` per tutte le pagine del piano. Usa `--noindex` solo per Cloudflare quando richiesto: con un editor l'intestazione la gestisce la piattaforma | codice 0, copertura di tutte le pagine attese, nessun problema; avvisi letti; mappa dei pulsanti e segnaposto uguali al piano |
| Screenshot | per ogni pagina: `node "<skill>/strumenti/screenshot.mjs" "pagine-<funnel>/pubblico" --percorso /<pagina> --uscita ".../controlli/v<N>" --nome <pagina>` | prima schermata e pagina intera su computer e telefono aperte e guardate; per le pagine lunghe guarda anche le sezioni con `--selettore`. Cerca in particolare ciò che i controlli automatici non vedono: loghi e immagini con testo su fondi scuri, testi coperti, pulsanti mancanti in una scheda, spazi vuoti |
| Cloudflare (se è la destinazione) | `node "<skill>/strumenti/pubblica-cloudflare.mjs" "pagine-<funnel>/wrangler.jsonc" --prova` | codice 0, «Prova superata» |

Prima e dopo una correzione, fotografa la sezione toccata con `--selettore "#<id>" --nome <id>-prima` e `--nome <id>-dopo` e confronta le due immagini. Una correzione a header o footer si fa una volta sola in `parti/` e si verifica su almeno due pagine assemblate.

Registra i file dei rapporti, gli screenshot esaminati e le osservazioni nella tabella «Verifiche per versione» del piano. Dopo modifiche a CSS, script o parti comuni ripeti i controlli su tutte le pagine interessate, non soltanto quella visibile. Prima della consegna ripeti comunque la copertura completa. Le uscite dei controlli sono evidenze, non un sostituto delle prove dei pulsanti, dei menu e delle altre interazioni.

Se un controllo non dà l'esito atteso, correggi in `sorgente/` o `parti/`, riassembla e ripeti. Se l'esito dipende da una decisione (per esempio un contrasto voluto dal kit grafico), chiedi alla persona e annota la decisione.

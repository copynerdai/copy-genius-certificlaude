# Destinazioni e consegna

Riferimento per la configurazione prima dei controlli al passo 5 e per la consegna al passo 8. `<skill>` è la cartella della skill indicata in `SKILL.md`. La destinazione è decisa nel piano, sezione «Destinazione», ed è una di due: pubblicazione su Cloudflare oppure codice per un editor. Se la persona chiede un altro servizio di pubblicazione, dille in una frase che la skill non lo segue e che la cartella `pubblico/` contiene pagine statiche pronte, che può caricare organizzandosi in autonomia; poi prosegui con i controlli e la consegna della cartella, dichiarando che pubblicazione e integrazione esterne non sono state verificate.

## Cloudflare

È la strada mostrata in aula e provata in un progetto reale.

### Configurazione

1. Prima dei controlli del passo 5, copia `<skill>/riferimenti/wrangler-modello.jsonc` in `pagine-<funnel>/wrangler.jsonc`. Se esiste già, leggilo e riusa la configurazione del progetto senza sovrascriverla alla cieca.
2. Sostituisci `NOME-DEL-PROGETTO` con un nome in minuscolo e trattini, per esempio `<brand>-<funnel>`, e il dominio in `routes` con quello del piano.
3. Per un **indirizzo di prova** usa un sottodominio poco prevedibile del dominio del cliente (per esempio `prova-7k2m.<dominio>`), con `noindex, nofollow` nel meta `robots` delle pagine sorgente e `X-Robots-Tag: noindex, nofollow` in `sorgente/_headers`. Riassembla per copiarli in `pubblico/`. Esclusione dai motori e nome poco prevedibile non rendono la pagina privata: non pubblicarci credenziali o materiali riservati.
4. Il dominio principale deve essere una zona dello stesso account Cloudflare e l'indirizzo scelto non deve avere già un record DNS.

### Pubblicazione

1. Riassembla con `assembla.mjs` ed esegui i controlli di `costruzione.md` sulla versione approvata, con `controlla-pagine.mjs --finale`: i segnaposto rimasti sono problemi. Se la persona vuole mostrare una bozza con segnaposto, chiedi conferma dell'elenco esatto, registrala nel piano e consegna soltanto come «bozza, non pronta al lancio». Conserva l'esito negativo di `--finale`; ripeti il controllo senza quel flag per escludere altri problemi tecnici. Non dichiarare il controllo finale superato.
2. Prova: `node "<skill>/strumenti/pubblica-cloudflare.mjs" "pagine-<funnel>/wrangler.jsonc" --prova`. Esito atteso: codice 0, «Prova superata».
3. Chiedi alla persona la conferma a pubblicare, con l'indirizzo che risponderà.
4. Pubblica: `node "<skill>/strumenti/pubblica-cloudflare.mjs" "pagine-<funnel>/wrangler.jsonc" --salva "pagine-<funnel>/controlli/v<N>/online.md"`. Lo strumento copia pagine e configurazione fuori dal progetto, controlla le credenziali, pubblica e controlla online ogni file. Esito atteso: codice 0, «online tutto come in locale».
5. Se il controllo online trova differenze subito dopo la pubblicazione, aspetta un minuto e ripeti solo il controllo: `node "<skill>/strumenti/pubblica-cloudflare.mjs" "pagine-<funnel>/wrangler.jsonc" --solo-verifica https://<dominio> --salva ...`. Se restano, leggi il rapporto con la persona.
6. Controlla anche tutte le pagine reali: `node "<skill>/strumenti/controlla-pagine.mjs" https://<dominio>/ --segui --attesa /<prima pagina> --attesa /<altra pagina> --finale [--noindex] [--domini-ammessi <domini del cliente>]`. Ripeti `--attesa` per ogni pagina del piano, anche se non collegata; per una bozza autorizzata valgono le eccezioni del punto 1. Verifica anche link e interazioni effettive.

### Pagine online

Compila la sezione «Pagine online» di `piano.md`: indirizzo di ogni pagina, versione pubblicata (le prime cifre della «Version ID» nell'output di Wrangler), data, esito e file del controllo online, segnaposto ancora aperti.

## Codice per un editor

Per Elementor, OptimizePress, GoHighLevel o editor simili: si crea una pagina vuota e si incolla il codice nei widget HTML. Non si ottengono elementi nativi modificabili con i normali strumenti di testo: questa limitazione deve essere stata accettata durante le domande, non scoperta alla consegna.

1. Riassembla con `assembla.mjs` ed esegui i controlli di `costruzione.md` sulla versione approvata. I frammenti si preparano da `pubblico/`, mai dalla sorgente.
2. Prepara i frammenti, **un widget per pagina** o **uno per sezione** come deciso nel piano:
   `node "<skill>/strumenti/frammenti-editor.mjs" "pagine-<funnel>/pubblico" --uscita "pagine-<funnel>/consegna/editor" --contenitore ".<contenitore>" --radice "pagine-<funnel>/pubblico" [--per-sezione]`
   Esito atteso: codice 0 e `conversione.json` con `completa: true` per ogni pagina: CSS isolato e verificato, nessuna risorsa mancante, contenuto, ordine e geometria dei blocchi coerenti su computer e telefono. Guarda le immagini in `collaudo/` confrontando originale e frammenti. Se non passa, correggi in `sorgente/` o `parti/`, riassembla e rigenera in una nuova cartella di versione. Non ritoccare solo il risultato generato. Un widget per sezione permette di sostituire il codice di quella sezione senza toccare le altre, non di modificarla come un blocco nativo.
   In entrambe le modalità header, footer e le altre parti comuni (gli elementi con `data-parte` inseriti da `assembla.mjs`) diventano frammenti a parte, `parte-header` e `parte-footer`, uguali per tutte le pagine. Lo strumento scrive in `consegna/editor/LEGGIMI.md` se lo sono davvero e come inserirli: una volta sola per pagina e, se l'editor permette di salvare un blocco come elemento riutilizzabile, salvati così, in modo che una modifica valga per tutte le pagine anche nell'editor. Con la persona usa sempre la forma «se l'editor lo permette»: non promettere funzioni di un editor specifico che non hai verificato.
3. Leggi `controllo.md` di ogni pagina: collegamenti interni da adattare agli indirizzi delle pagine dell'editor, script, titolo e meta da impostare nell'editor.
4. Consegna alla persona `LEGGIMI.md` di `consegna/editor/` e di ogni pagina e spiega i passi:
   - caricare immagini e file consentiti di `media-da-caricare/` nella libreria Media; per font o script non accettati, chiedere a chi gestisce il sito un caricamento autorizzato e i relativi indirizzi, senza disattivare le protezioni della piattaforma;
   - copiare in `mappa-media.txt` l'indirizzo di ogni file caricato;
   - poi tu esegui `node "<skill>/strumenti/frammenti-editor.mjs" --applica-mappa "pagine-<funnel>/consegna/editor"` (esito atteso: codice 0). Controlli la cartella comune `consegna/editor/anteprima-con-indirizzi/` con `controlla-pagine.mjs`, `--percorso /<prima pagina> --tutte` e `--attesa` per ciascuna pagina, consentendo solo i domini dei media previsti dal piano, e ne guardi gli screenshot. Non controllare i link aprendo l'HTML singolo di ogni pagina: lì le altre pagine non esistono. I link assoluti dell'editor definitivo si verificano sul suo indirizzo effettivo;
   - incollare i file di `frammenti-con-indirizzi/` nei widget HTML, in ordine; i frammenti `parte-…` una volta sola per pagina, o dall'elemento riutilizzabile se l'editor lo permette.
5. Script: lo strumento conserva attributi come `type="module"`, `defer` e `integrity`. L'ultimo frammento si inserisce una sola volta. Se l'editor lo rimuove, chiedi a chi gestisce il sito di spostarlo nel codice del footer, togliendolo dai widget. Moduli con importazioni relative richiedono adattamento e verifica delle dipendenze prima della mappa: non basta caricare il solo file iniziale. Non rimuovere attributi di sicurezza per farlo funzionare.
6. Dopo l'inserimento, per ogni pagina del piano controlla l'indirizzo effettivo dell'editor: `node "<skill>/strumenti/controlla-pagine.mjs" <indirizzo> --finale [--domini-ammessi <domini autorizzati>]` e `node "<skill>/strumenti/screenshot.mjs" <indirizzo> --uscita "pagine-<funnel>/controlli/editor/v<N>" --nome <pagina>`. Confronta gli screenshot con la versione approvata su computer e telefono; prova pulsanti, link, menu e script. Imposta titolo, meta e indirizzi interni nell'editor e ripeti il controllo dopo ogni modifica. Cerca anche margini del tema, font e immagini mancanti. Per segnaposto deliberatamente aperti applica la stessa regola della bozza Cloudflare, senza mascherare l'esito di `--finale`.
7. Consegna l'elenco dei link del cliente e dei segnaposto ancora da inserire.

**Completato quando:** «Consegna editor» nel piano registra per ogni pagina i due collaudi (conversione locale e pagina effettiva), mappa applicata, screenshot confrontati e interazioni provate. Senza un indirizzo accessibile o senza inserimento nell'editor, consegna il codice con stato «integrazione da verificare»: non dichiarare finito il passo 8. Una bozza con eccezioni resta esplicitamente non pronta al lancio.

## Mostrare il lavoro al cliente

Il modo è deciso nel piano. Aiuta la persona a prepararlo:
- **call con la pagina aperta:** anteprima locale accesa (`anteprima.mjs`) o indirizzo di prova; una scaletta di cosa mostrare, nell'ordine del percorso del visitatore, con i segnaposto spiegati;
- **pagina nell'editor del cliente:** la pagina resta in bozza o non pubblicata; la persona condivide il link di anteprima dell'editor;
- **indirizzo di prova:** pubblicazione su Cloudflare su un sottodominio poco prevedibile, esclusa dai motori di ricerca (meta `robots` e `X-Robots-Tag`), da togliere o sostituire con il dominio definitivo dopo l'approvazione del cliente.

In ogni caso ricorda alla persona cosa resta fuori dalla skill e va completato con cliente e tecnici: pagamenti veri, moduli, pixel e testi legali.

## Parti riusabili per i prossimi funnel

Se il funnel usa lo stile del brand e il brand non ha ancora `asset-grafici/header-footer/`, proponi alla persona di salvarci `parti/header.html`, `parti/footer.html` e le loro regole CSS (in un file `stile-parti.css`) con un `index.md` che ne indica l'origine: il prossimo funnel partirà da lì. Fallo solo con il suo consenso e dopo l'approvazione.

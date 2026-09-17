# Strumenti di crea-funnel

Script Node.js (versione 22 o successiva) che funzionano su macOS, Windows e Linux. Ognuno ha `--help` con tutte le opzioni, scrive messaggi in italiano ed esce con un codice diverso da 0 quando un controllo non passa (0 tutto bene, 1 controllo non superato o errore, 2 opzioni non valide).

Le dipendenze stanno fuori dal plugin, in `~/.crea-funnel/` (su Windows `%USERPROFILE%\.crea-funnel\`), e si installano con `prepara-ambiente.mjs`. Le chiavi stanno in `~/.crea-funnel/segreti.env`: gli strumenti le leggono solo nel proprio processo e non stampano mai i valori.

Negli esempi `<skill>` è la cartella della skill e `<funnel>` il nome breve del funnel.

Le pagine hanno una cartella sorgente (`sorgente/`, con i segnaposto di header e footer) e una cartella assemblata (`pubblico/`, prodotta da `assembla.mjs`). Gli strumenti che ricevono pagine lavorano su `pubblico/`: se ricevono la sorgente con i segnaposto si fermano, e avvisano se `sorgente/` o `parti/` sono cambiate dopo l'ultimo assemblaggio.

| Strumento | A cosa serve |
|---|---|
| `prepara-ambiente.mjs` | installa e controlla dipendenze e `segreti.env` |
| `accessi.mjs` | controlla le chiavi con chiamate gratuite |
| `genera-immagine.mjs` | genera o modifica immagini con l'API di OpenAI, con registro e tetto |
| `ottimizza-immagini.mjs` | crea versioni WebP e il tag `<img>` |
| `assembla.mjs` | inserisce header, footer e altre parti comuni nelle pagine sorgente e produce `pubblico/` |
| `anteprima.mjs` | anteprima locale con le regole di Cloudflare |
| `screenshot.mjs` | screenshot di computer e telefono, pagina o sezione |
| `salva-riferimento.mjs` | salva una pagina di esempio e verifica la copia senza rete |
| `confronta-copy.mjs` | confronta il testo della pagina con il copy |
| `controlla-pagine.mjs` | controlli automatici e mappa dei pulsanti |
| `controlla-credenziali.mjs` | cerca credenziali prima di pubblicare o consegnare |
| `pubblica-cloudflare.mjs` | pubblica su Cloudflare e controlla online |
| `frammenti-editor.mjs` | prepara i frammenti per i widget HTML di un editor |

I moduli di supporto sono elencati in fondo e non si lanciano da soli.

## prepara-ambiente.mjs

Controlla Node.js, crea `~/.crea-funnel/`, installa Playwright con Chromium, sharp e Wrangler nelle versioni provate, verifica che funzionino e crea `segreti.env` vuoto con permessi ristretti.

```bash
node "<skill>/strumenti/prepara-ambiente.mjs" --controlla   # solo controllo, non installa nulla
node "<skill>/strumenti/prepara-ambiente.mjs"               # installa ciò che manca e ricontrolla
```

## accessi.mjs

Dice quali chiavi sono presenti (solo i nomi) e le prova senza costi: OpenAI con l'elenco dei modelli, Cloudflare con verifica del token, account, domini visibili e accesso ai Worker.

```bash
node "<skill>/strumenti/accessi.mjs" --solo openai
node "<skill>/strumenti/accessi.mjs" --solo cloudflare --dominio pagine.esempio.it --salva "pagine-<funnel>/controlli/accessi.md"
```

Altre opzioni: `--senza-prove` (solo presenza), `--segreti <file>`, `--modello <nome>`, `--base-openai`, `--base-cloudflare`, `--modalita-test`. Il modello immagini richiesto deve essere visibile e la zona del dominio Cloudflare deve essere attiva e accessibile. Un esito positivo verifica i prerequisiti di lettura, non il credito OpenAI né i permessi di scrittura Cloudflare.

## genera-immagine.mjs

Generazione da testo o modifica da una o più immagini di riferimento, con maschera facoltativa. Senza opzioni usa il modello più capace documentato nella guida ufficiale, `gpt-image-2.5-sunburst`, alla qualità più alta, `max`. Se il servizio rifiuta la qualità o risponde con un errore del server, riprova una sola volta con il livello sotto e lo scrive nell'output e nel registro. `--registro` e `--tetto` sono obbligatori: ogni chiamata arrivata all'API conta, anche se fallisce e anche quella del ripiego; raggiunto il tetto lo strumento non chiama. Non sovrascrive un file senza `--sovrascrivi`.

```bash
node "<skill>/strumenti/genera-immagine.mjs" \
  --prompt-file "asset-grafici-<funnel>/prompt/02-risveglio.txt" \
  --uscita "asset-grafici-<funnel>/02-risveglio.png" \
  --registro "asset-grafici-<funnel>/registro-immagini.jsonl" --tetto 100 \
  --dimensioni 1536x1024 --nota "landing, sezione 2"

node "<skill>/strumenti/genera-immagine.mjs" \
  --riferimento "asset-grafici/foto-prodotto.png" --riferimento "asset-grafici-<funnel>/02-risveglio.png" \
  --prompt "..." --uscita "asset-grafici-<funnel>/03-prodotto-in-cucina.png" \
  --registro "asset-grafici-<funnel>/registro-immagini.jsonl" --tetto 100
```

Altre opzioni: `--prompt`, `--maschera`, `--modello`, `--qualita`, `--senza-ripiego`, `--sfondo`, `--compressione`, `--moderazione`, `--timeout`, `--segreti`, `--indirizzo-base` (per le prove).

## ottimizza-immagini.mjs

Da una copia di lavoro crea versioni WebP a più larghezze, senza ingrandire, e stampa il tag `<img>` con `srcset`, `sizes`, `width`, `height`, `alt`, `loading`.

```bash
node "<skill>/strumenti/ottimizza-immagini.mjs" "asset-grafici-<funnel>/02-risveglio.png" \
  --uscita "pagine-<funnel>/sorgente/risorse/foto" --percorso-web /risorse/foto \
  --larghezze 480,960,1440 --sizes "(min-width: 900px) 440px, 100vw" --alt "Donna appena svegliata"
```

Altre opzioni: `--decorativa` (alt vuoto), `--qualita`, `--nome`, `--caricamento eager`, `--classe`, `--sovrascrivi`, `--salva`.

## assembla.mjs

Dalle pagine di `sorgente/` e dalla copia unica delle parti in `parti/` produce `pubblico/`. Nelle pagine sorgente il segnaposto `<!-- @parte header -->` viene sostituito con `parti/header.html`; `<!-- @parte header attiva="landing" -->` valorizza `{{attiva}}` dentro la parte; un valore che inizia con `@` inserisce un'altra parte. Gli elementi inseriti ricevono `data-parte`, che `frammenti-editor.mjs` usa per separare header e footer. Si ferma senza scrivere nulla se una parte manca, una variabile resta senza valore o un segnaposto è scritto male. I file di `pubblico/` modificati a mano o estranei alla sorgente non si perdono: vanno in `~/.crea-funnel/cestino/` e vengono segnalati.

```bash
node "<skill>/strumenti/assembla.mjs" "pagine-<funnel>"
node "<skill>/strumenti/assembla.mjs" "pagine-<funnel>" --salva "pagine-<funnel>/controlli/v1/assemblaggio.md"
```

Altre opzioni: `--sorgente`, `--parti`, `--uscita` per cartelle con nomi diversi da quelli predefiniti.

## anteprima.mjs

Serve una cartella su `http://127.0.0.1:<porta>/` con `_redirects`, `_headers` e indirizzi senza `.html`, come Cloudflare. Si ferma con Ctrl+C.

```bash
node "<skill>/strumenti/anteprima.mjs" "pagine-<funnel>/pubblico" --porta 8788
```

Altre opzioni: `--non-trovato none|404-page|single-page-application`, `--registro`.

## screenshot.mjs

Computer 1440×900 e telefono 390×844, prima schermata e pagina intera; con `--selettore` una sola sezione, per i confronti prima e dopo. Accetta un indirizzo, una cartella o un file `.html`.

```bash
node "<skill>/strumenti/screenshot.mjs" "pagine-<funnel>/pubblico" --percorso /landing --uscita "pagine-<funnel>/controlli/v1" --nome landing
node "<skill>/strumenti/screenshot.mjs" http://127.0.0.1:8788/landing --uscita "pagine-<funnel>/controlli/v2" --selettore "#offerta" --nome offerta-dopo
```

Altre opzioni: `--solo computer|telefono`, `--scala 2`, `--indice`, `--margine`, `--formato jpg`, `--sovrascrivi`.

## salva-riferimento.mjs

Salva una pagina di esempio (HTML con risorse e percorsi relativi, screenshot, archivio MHTML, elenco delle risorse, intestazioni) e verifica la copia aperta senza rete, con il confronto dei pixel.

```bash
node "<skill>/strumenti/salva-riferimento.mjs" https://esempio.it/pagina "asset-grafici-<funnel>/riferimenti/esempio-giornalistico"
node "<skill>/strumenti/salva-riferimento.mjs" --solo-verifica "asset-grafici-<funnel>/riferimenti/esempio-giornalistico"
```

Altre opzioni: `--soglia <percento>`, `--sovrascrivi`, `--solo-visivo`. Quest'ultima salva quattro screenshot come riferimento esplicitamente parziale, senza certificare una copia offline; usala in una nuova cartella quando il sito non può essere copiato fedelmente. Percorsi delle risorse che escono dalla cartella o attraversano collegamenti simbolici sono rifiutati.

## confronta-copy.mjs

Confronta parola per parola il testo della pagina con il copy in Markdown. Riconosce il formato dei copy di Copy Genius; `data-fuori-copy` e `data-etichetta` nella pagina. Divide le differenze in testo, maiuscole e tipografia.

```bash
node "<skill>/strumenti/confronta-copy.mjs" "pagine-<funnel>/pubblico" copy-landing.md --percorso /landing --salva "pagine-<funnel>/controlli/v1/copy-landing.md"
node "<skill>/strumenti/confronta-copy.mjs" http://127.0.0.1:8788/landing copy.md --inizio '^### Blocco' --righe-servizio '^### Blocco' --righe-servizio '^Nota:'
```

Altre opzioni: `--dall-inizio`, `--pulsante`, `--contenitore`, `--escludi`.

## controlla-pagine.mjs

Su una o più pagine o seguendo i collegamenti interni: risposta HTTP, immagini, console, richieste fallite ed esterne, scorrimento orizzontale a 390 px, contrasto, peso, robots, segnaposto, collegamenti rotti e mappa dei pulsanti.

```bash
node "<skill>/strumenti/controlla-pagine.mjs" "pagine-<funnel>/pubblico" --tutte --attesa /landing --attesa /grazie --noindex --salva "pagine-<funnel>/controlli/v1/pagine.md"
node "<skill>/strumenti/controlla-pagine.mjs" https://pagine.esempio.it/ --segui --attesa /landing --attesa /grazie --finale --domini-ammessi checkout.piattaforma.it
```

Altre opzioni: `--massimo-pagine`, `--percorso`, `--controlla-esterni`. `--tutte` include gli HTML locali senza link in entrata; ripeti `--attesa` per tutte le pagine del piano, anche online. Se manca una pagina attesa o si raggiunge il limite prima di completare il controllo, l'esito è negativo.

## controlla-credenziali.mjs

Cerca nomi di file sospetti, forme di chiavi e i valori reali di `segreti.env` in una cartella, senza stamparli. Da usare prima di ogni pubblicazione e consegna. File oltre 200 MB e collegamenti simbolici rendono il controllo incompleto, quindi negativo. Il rapporto dichiara se include anche valori noti; senza file delle chiavi controlla soltanto forme sospette. Un `--segreti` esplicito inesistente è un errore, non una scansione superata.

```bash
node "<skill>/strumenti/controlla-credenziali.mjs" "pagine-<funnel>/pubblico" --salva "pagine-<funnel>/controlli/v1/credenziali.md"
```

Altre opzioni: `--segreti <file>`.

## pubblica-cloudflare.mjs

Controlla `wrangler.jsonc`, copia pagine e configurazione in `~/.crea-funnel/pubblicazioni/<nome>/`, controlla le credenziali, lancia `wrangler deploy` con le chiavi solo nel comando e nasconde gli identificativi; dopo la pubblicazione controlla online ogni file.

```bash
node "<skill>/strumenti/pubblica-cloudflare.mjs" "pagine-<funnel>/wrangler.jsonc" --prova   # nessun caricamento
node "<skill>/strumenti/pubblica-cloudflare.mjs" "pagine-<funnel>/wrangler.jsonc" --salva "pagine-<funnel>/controlli/v3/online.md"
node "<skill>/strumenti/pubblica-cloudflare.mjs" "pagine-<funnel>/wrangler.jsonc" --solo-verifica https://pagine.esempio.it
```

Altre opzioni: `--indirizzo`, `--segreti`. Modello di configurazione in `<skill>/riferimenti/wrangler-modello.jsonc`.

## frammenti-editor.mjs

Prepara i frammenti per i widget HTML di un editor, uno per pagina o uno per sezione, con i file da caricare nella libreria Media e la mappa da compilare; segnala selettori CSS non limitati, script e collegamenti da adattare. Header, footer e le altre parti comuni inserite da `assembla.mjs` diventano sempre frammenti a parte (`parte-header`, `parte-footer`); il `LEGGIMI.md` della cartella di uscita dice se sono identiche in tutte le pagine e come inserirle una volta sola.

Dopo aver compilato la mappa, `--applica-mappa` mette gli indirizzi nei frammenti solo se il collaudo della conversione è superato. La conversione conserva gli attributi degli script, confronta contenuto e geometria della pagina su computer e telefono, scrive screenshot in `collaudo/` e produce `anteprima-frammenti.html`. CSS esterno non verificato, importazioni, selettori che raggiungono elementi esterni e cambiamenti di layout impediscono il successo. `anteprima-con-indirizzi.html` permette il controllo dopo la mappa. Queste prove non sostituiscono il collaudo finale nella piattaforma dell'editor.

Per verificare anche i link fra pagine dopo la mappa, usa la cartella comune `consegna/editor/anteprima-con-indirizzi/` con `controlla-pagine.mjs --percorso /<prima pagina> --tutte --attesa /<pagina>` per tutti i percorsi del piano. I file singoli `anteprima-con-indirizzi.html` servono alla visualizzazione della sola pagina e non sono un sito completo.

```bash
node "<skill>/strumenti/frammenti-editor.mjs" "pagine-<funnel>/pubblico" --uscita "pagine-<funnel>/consegna/editor" \
  --contenitore ".pagina-<funnel>" --radice "pagine-<funnel>/pubblico" --per-sezione
node "<skill>/strumenti/frammenti-editor.mjs" --applica-mappa "pagine-<funnel>/consegna/editor"
```

Altre opzioni: `--sezioni <selettore>`, `--sovrascrivi`.

## Prove e moduli di supporto

`comune.mjs`, `browser.mjs`, `server-anteprima.mjs`, `permessi-segreti.mjs` e `collaudo-editor.mjs` sono moduli importati dagli altri strumenti, non comandi con `--help`.

Le opzioni API `--indirizzo-base`, `--base-openai` e `--base-cloudflare` accettano indirizzi alternativi solo con `--modalita-test`, su HTTP `127.0.0.1` o `[::1]`. Questa modalità usa chiavi fittizie e non legge `segreti.env`; non combinarla con `--segreti`. Senza modalità test sono ammessi solo gli indirizzi HTTPS ufficiali, senza redirect.

Le prenotazioni delle generazioni interrotte non scadono: contano nel tetto finché l'esito non è registrato. Conserva registro e file `.in-corso`; non svuotarli per aggirare il tetto. I registri danneggiati bloccano nuove chiamate.

Per chi mantiene la skill: prepara le dipendenze con `prepara-ambiente.mjs`, poi esegui `node --test "<skill>/test/regressioni.test.mjs"`. Le prove creano materiali fittizi in una nuova cartella temporanea, la indicano al termine e la conservano; non chiamano API esterne né pubblicano. Per isolare anche dipendenze e uscite di supporto, usa `--cartella <cartella di prova>` nell'installazione e la variabile `CREA_FUNNEL_HOME` con lo stesso percorso durante i test.

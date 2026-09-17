# Domande a giri

Metodo adattato e tradotto dalla skill `grilling` di Matt Pocock (Copyright (c) 2026 Matt Pocock), distribuita con licenza MIT. Il testo della licenza è in `LICENZE.md`, nella radice del plugin.

## Il metodo

Fai domande alla persona finché avete la stessa idea del lavoro. Pensa le decisioni come un **albero**: ogni decisione apre le decisioni che dipendono da lei.

Lavora a **giri**. La **frontiera** è l'insieme delle decisioni le cui premesse sono già decise: le domande che puoi fare adesso senza indovinare risposte che non hai ancora. In ogni giro fai tutta la frontiera in un solo messaggio: numera le domande e dai per ciascuna la tua **risposta consigliata**. La numerazione continua da un giro all'altro (se il primo giro finisce con D3, il secondo comincia da D4), così una risposta come «4. sì» non si confonde con un giro precedente. Poi aspetta le risposte prima del giro successivo.

Ogni giro ha questa forma:

```
**D1 · <titolo della domanda>**
<la domanda, anche in più paragrafi, con le possibili scelte>
Consiglio: <la tua risposta consigliata e il motivo in una frase>

**D2 · <titolo della domanda>**
<...>
Consiglio: <...>
```

Chiudi il messaggio dicendo che la persona può rispondere anche solo con i numeri che vuole cambiare, e che per le altre vale il consiglio.

Le risposte cambiano l'albero: le decisioni prese spostano in avanti la frontiera e sbloccano le domande che dipendevano da loro. Ricalcola la frontiera e fai il giro successivo. Una domanda che dipende da un'altra ancora aperta nello stesso giro va al giro dopo.

**I fatti li cerchi tu, le decisioni le chiedi.** Quando una domanda ha bisogno di un fatto (un prezzo, un link già scritto nel brief, un colore del kit grafico, se esiste un file), cercalo nei materiali: non chiedere mai alla persona ciò che puoi trovare da solo. Scrivi nel giro ciò che hai trovato, così la persona può correggerlo. Le **decisioni** sono della persona: proponi e aspetta.

**Salta ciò che è già deciso.** Se il funnel brief, il copy, le note di impaginazione o `piano.md` rispondono già, non fare la domanda: riporta la risposta trovata nel riassunto.

**Le domande sono decisioni, non moduli.** Ogni domanda porta una scelta che cambia il lavoro. Non chiedere conferme di cose ovvie e non dividere in tre domande una scelta sola.

Mentre il giro è aperto, scrivi in `piano.md` le decisioni appena arrivano, con la parola «confermato» o «consigliato, in attesa».

## Criterio di fine

Il metodo finisce quando la **frontiera è vuota**: ogni ramo dell'albero è stato visitato e nulla è rimasto deciso in silenzio. A quel punto:

1. scrivi un **riassunto** breve di tutte le decisioni, diviso come le sezioni di `piano.md`, con in evidenza ciò che hai trovato da solo nei materiali e le scelte lasciate a te;
2. chiedi alla persona di confermarlo o correggerlo;
3. solo dopo una conferma esplicita segna in cima a `piano.md` «Piano confermato il <data>» e passa agli accessi.

Se una correzione riapre un ramo, fai un nuovo giro solo su quel ramo e ripeti il riassunto.

## Albero delle domande

Argomenti minimi, in ordine di dipendenza: un ramo si apre quando le sue premesse sono decise. Molte risposte stanno già nel brief o nel copy: in quel caso riportale, non chiederle. Le voci segnate *(chiedila sempre)* sono decisioni che nei progetti reali sono arrivate a lavoro avviato, costando rifacimenti: prima del riassunto finale controlla che il piano le contenga.

### Partenza
- Brand.
- Nome breve del funnel, per le cartelle.
- Copy da usare per ogni pagina, e conferma che è definitivo.

### Destinazione
*(dopo: partenza; cambia indirizzi, footer, script e controlli, quindi va chiesta nel primo giro)*
- Pubblicazione su Cloudflare oppure codice per un editor: sono le due sole destinazioni. Se la persona chiede un altro servizio, dille in una frase che la skill non lo segue e che la cartella `pubblico/` si può usare organizzandosi in autonomia.
- Editor: quale (Elementor, OptimizePress, GoHighLevel o altro); un widget per pagina oppure uno per sezione. In entrambi i casi header e footer sono frammenti a parte, da inserire una volta sola per pagina.
- Spiega subito il limite: «Riceverai blocchi di codice, non sezioni modificabili con i normali strumenti di testo dell'editor. Per cambiare testi e prezzi potrai chiedere a me o intervenire nel codice; un blocco per sezione rende più semplice sostituire quella sezione». Chiedi conferma che questa modalità vada bene. Se vuole elementi nativi trascinabili, la conversione non li produce: serve un altro lavoro, da concordare prima della costruzione. Verifica anche chi può caricare font e script e fornire un indirizzo di anteprima per il collaudo finale.
- Pubblicazione: dominio definitivo oppure indirizzo di prova escluso dai motori di ricerca.
- Come si mostrerà al cliente: call con la pagina aperta, pagina nell'editor del cliente con il suo link, indirizzo di prova.

### Pagine e architettura
*(dopo: copy confermato e destinazione; con un editor gli indirizzi e la radice li gestisce la piattaforma del cliente)*
- Quali pagine e in che ordine si percorrono.
- Dove porta ogni pulsante; parametri da passare (per esempio il pacchetto scelto).
- Indirizzi delle pagine (per esempio `/landing`, `/checkout`); cosa mostra la radice del dominio.
- Link del cliente: checkout, moduli, calendari, pagine delle policy. Quali ci sono già e quali restano segnaposto.
- Opzioni di pagamento citate nel copy e reali nel checkout (per esempio le rate): se il copy le cita, ci sono davvero? *(chiedila sempre)*

### Testi mancanti
*(dopo: pagine, pulsanti e destinazione, che decide per esempio se serve un footer)*
- Elenco dei testi che il copy non contiene: pulsanti delle singole offerte, ringraziamento, footer, avvisi, testi dei pop-up.
- Per ciascuno: li fornisce la persona oppure li scrivi tu dai documenti del brand, da rivedere al primo giro di feedback.

### Stile
*(dopo: partenza; non dipende da pagine e destinazione, quindi va chiesta nel primo giro)*
- Stile del brand oppure uno diverso per questo funnel (per esempio uno stile giornalistico per un advertorial).
- Se diverso: esempi (link o pagine salvate in HTML) oppure una descrizione accurata.
- Degli esempi, cosa riprendere e cosa no (caratteri, colori, spazi, immagini, tono).
- Con lo stile del brand: se il brand ha già header e footer riusabili in `asset-grafici/header-footer/`, si parte da quelli. È un fatto: lo controlli tu e lo riporti, non lo chiedi.

### Impaginazione
*(dopo: stile)*
- Note di impaginazione già scritte vicino al copy: confermale o correggile.
- Prima schermata: cosa si vede, c'è un pulsante, c'è una foto.
- Preferenze per sezione e per il telefono.
- Regole generali. Esempi da proporre: al massimo un'immagine per blocco di testo; elementi di terzi (marchi, sigilli, recensioni di piattaforme) solo testuali; quante volte può comparire il fondatore o un'altra persona ricorrente. *(chiedila sempre)*

### Immagini e infografiche
*(dopo: impaginazione)*
- Materiali esistenti da usare (foto del prodotto, del fondatore, del kit).
- Immagini da generare: cosa mostrano, dove vanno; più immagini nelle prime sezioni, dove il testo è più lungo, o solo dove il copy le chiede. *(chiedila sempre)*
- Un'immagine per ogni elemento di un elenco (per esempio ogni ingrediente o ogni beneficio)? *(chiedila sempre)*
- Persone ricorrenti e immagini di riferimento per tenerle coerenti.
- Cosa evitare (marchi reali, volti che ricordano persone vere, testi nelle foto).
- Infografiche: quante, scritte in codice oppure generate come immagini. *(chiedila sempre)*
- Generazione con l'API oppure a mano in ChatGPT. Modello e qualità non sono una domanda: si usa il modello più capace documentato nella guida ufficiale OpenAI alla qualità più alta (oggi `gpt-image-2.5-sunburst`, qualità `max`), e lo scrivi nel piano.
- Tetto di generazioni per il progetto: consiglia **100 generazioni**; la persona può cambiarlo. Spiega che il tetto non serve a risparmiare: serve a evitare che un ciclo di tentativi sbagliati generi immagini a pagamento senza che lei lo sappia. Raggiunto il tetto, la skill si ferma e chiede se alzarlo.

### Delega
*(ultimo ramo)*
- Cosa decidi da solo (per esempio spazi, piccoli ritocchi di impaginazione, scelta fra due versioni simili di un'immagine) e cosa devi chiedere (per esempio cambiare l'ordine delle sezioni, togliere un'immagine prevista, spendere più generazioni del tetto).

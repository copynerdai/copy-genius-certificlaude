# Piano del funnel: <nome del funnel>

> Modello di `pagine-<funnel>/piano.md`. Copialo e togli queste note. Al passo 2 compila le decisioni delle sezioni da 1 a 8 e quali accessi servono nella 9; per testi e immagini basta assegnare origine, posizione e responsabile, non crearli. Stile e caratteri sono proposte fino alla prova. Firma il «Riassunto confermato» solo dopo la risposta esplicita. Scrivi «non serve» soltanto con un motivo. Gli esiti futuri restano «da verificare al passo N»: accessi al 3, approvazione stile al 4, immagini e controlli al 5, feedback al 7, pagine online o consegna editor all'8. Non anticipare approvazioni né prove.

Stato: <in preparazione | piano confermato il AAAA-MM-GG | versione N in revisione | approvato il AAAA-MM-GG | pubblicato il AAAA-MM-GG>

## 1. Partenza

| Voce | Decisione | Stato |
|---|---|---|
| Brand | | |
| Nome breve del funnel | | |
| Cartella del progetto | | |
| Copy Genius | presente in … / non usato | |
| Funnel brief | file e versione / assente, eccezione chiesta dalla persona il … | |

### Copy per pagina

| Pagina | File del copy | Definitivo |
|---|---|---|
| | | |

## 2. Pagine e architettura

### Pagine e percorso

| Ordine | Pagina | File HTML | Indirizzo | Scopo |
|---|---|---|---|---|
| 1 | | | | |

Radice del dominio: <porta a … | pagina a sé>

### Pulsanti e destinazioni

| Pagina | Pulsante (testo) | Porta a | Parametri |
|---|---|---|---|
| | | | |

### Link del cliente

| Cosa | Indirizzo o codice | Stato |
|---|---|---|
| Checkout | | fornito / segnaposto |
| Policy | | |

Opzioni di pagamento reali (per esempio rate): <…>

## 3. Testi mancanti

| Testo | Dove | Chi lo scrive | Stato |
|---|---|---|---|
| | | persona / AI dai documenti del brand | da scrivere / scritto, da rivedere / approvato |

### Testi scritti dall'AI

<Qui il testo di ogni testo mancante scritto dall'AI, con i documenti del brand da cui viene. Restano «da rivedere» fino al primo giro di feedback.>

## 4. Parte grafica

### Stile

- Riferimento: <stile del brand | stile diverso per questo funnel>
- Esempi: <link o file in asset-grafici-<funnel>/riferimenti/, con cosa riprendere e cosa no>
- Descrizione: <caratteri, colori con codici, spazi, forme, tono delle immagini>
- UI UX Pro Max: <usata | non installata>

### Classe contenitore e struttura

- Classe contenitore: `.<nome>` (tutto il CSS sotto questa classe)
- Caratteri: <file e licenze>
- Colori: <nome e codice>

### Prova di stile

- Cartella: `pagine-<funnel>/prova-stile/`
- Approvata il: <data>, con queste correzioni: <…>

### Parti comuni

- Header e footer: da <asset-grafici/header-footer/ del brand | prova di stile | scritti per questo funnel>, copia unica in `pagine-<funnel>/parti/` (elenco e origine in `parti/index.md`)
- Altre parti comuni: <fascia, finestre delle policy | nessuna>

## 5. Impaginazione

### Regole generali

- <per esempio: al massimo un'immagine per blocco di testo>

### Prima schermata e sezioni

| Pagina | Sezione | Impaginazione su computer | Su telefono |
|---|---|---|---|
| | | | |

## 6. Immagini e infografiche

- Generazione: <API OpenAI con genera-immagine.mjs | ChatGPT a mano>
- Modello e qualità: <gpt-image-2.5-sunburst, qualità max (predefiniti dello strumento) | …>
- Tetto di generazioni: <numero; consigliato 100>
- Registro: `asset-grafici-<funnel>/registro-immagini.jsonl`
- Da evitare: <…>

### Immagini previste

| File | Cosa mostra | Pagina e sezione | Origine | Riferimenti per la coerenza | Stato |
|---|---|---|---|---|---|
| | | | esistente / da generare | | previsto / generato / approvato |

### Persone ricorrenti

| Persona | Immagine di riferimento | Dove compare | Limite |
|---|---|---|---|
| | | | |

### Infografiche

| Infografica | Testo esatto | Resa | Sezione |
|---|---|---|---|
| | | codice / generata | |

## 7. Destinazione

- Destinazione: <Cloudflare | editor>
- Cloudflare: dominio <…>, indirizzo definitivo o di prova <…>, esclusione dai motori di ricerca <sì | no>
- Editor: <quale>, <un widget per pagina | un widget per sezione>; header e footer come frammenti a parte, inseriti una volta sola per pagina (elemento riutilizzabile se l'editor lo permette)
- Editor, conferma dei limiti: <la persona accetta che i contenuti si modificano nel codice o chiedendo all'AI; caricamento di font/script e permessi verificati con chi gestisce il sito>
- Come si mostra al cliente: <call | pagina nell'editor del cliente | indirizzo di prova>

## 8. Delega

| L'AI decide da sola | L'AI chiede prima |
|---|---|
| | |

## 9. Accessi

| Accesso | Serve | Verificato |
|---|---|---|
| Chiave OpenAI | | |
| Token e account Cloudflare | | |

Limiti ancora da verificare: <credito e prima generazione autorizzata; permessi di scrittura e collegamento del dominio alla pubblicazione; oppure non serve, con motivo>.

## 10. Regole nate dai feedback

| Data | Giro | Regola | Dove vale |
|---|---|---|---|
| | | | |

## Riassunto confermato

<Il riassunto finale delle domande, così come la persona lo ha confermato, con la data.>

## Pagine online

<Compilare dopo la pubblicazione.>

| Pagina | Indirizzo | Versione | Ultima verifica |
|---|---|---|---|
| | | | |

- Pubblicato il: <data>, con `pubblica-cloudflare.mjs`, versione <…>
- Controllo online: <esito e file del rapporto>
- Segnaposto ancora aperti: <…>

## Verifiche per versione

Compilare al passo 5 e dopo ogni revisione. Una riga per ogni pagina del piano; un file mancante o una prova non eseguita impediscono di completare la versione.

| Versione | Pagina | Assemblaggio e credenziali | Copy | Controllo pagina | Screenshot computer e telefono | Interazioni provate | Esito |
|---|---|---|---|---|---|---|---|
| | | rapporto | rapporto o motivo se senza copy | rapporto | percorsi e osservazioni | cosa e risultato | |

## Consegna editor

Compilare al passo 8, solo per la destinazione editor.

| Pagina | Conversione locale e mappa | Indirizzo nell'editor | Rapporti e screenshot confrontati | Link e interazioni | Esito |
|---|---|---|---|---|---|
| | | | | | da verificare / superato |

- Codice preparato il: <…>
- Integrazione nell'editor verificata il: <data oppure da verificare>
- Link e segnaposto ancora aperti, accettati dalla persona: <elenco>

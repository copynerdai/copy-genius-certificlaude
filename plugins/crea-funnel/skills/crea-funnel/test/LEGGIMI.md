# Collaudo della skill

Ultima esecuzione, 17 settembre 2026: **21 test su 21 superati**, nessun test saltato. Anche il controllo dell'ambiente e la sintassi JavaScript di tutti gli strumenti risultano superati.

Le prove in `regressioni.test.mjs` usano materiali fittizi in una nuova cartella temporanea. I server API sono locali e ricevono soltanto credenziali fittizie. Anche i comandi di preparazione alla pubblicazione usano un file delle chiavi vuoto. Nessuna generazione a pagamento, pubblicazione o modifica di Copy Genius.

## Come ripeterlo

Prepara le dipendenze con `strumenti/prepara-ambiente.mjs`, poi:

```bash
node --test "<skill>/test/regressioni.test.mjs"
```

Per isolare anche dipendenze, cache e file temporanei di Wrangler, installa con `--cartella <cartella di prova>` e imposta `CREA_FUNNEL_HOME` allo stesso percorso durante il test. Non occorre compilare `segreti.env`. Alla fine viene stampata la cartella dei materiali fittizi, che è conservata per leggere i rapporti e gli screenshot.

## Cosa viene verificato

- `--help` di tutti i 13 comandi e presenza nell'aiuto delle opzioni implementate; nomi degli script citati e percorso studenti sulla Scrivania.
- Rifiuto dei percorsi esterni e dei collegamenti simbolici; salvataggio di una pagina con una risorsa dal percorso pericoloso senza alterare l'originale fittizio.
- API ufficiali obbligatorie con chiavi reali; modalità test separata; redirect API rifiutati.
- Verifica del modello OpenAI richiesto e della zona Cloudflare scelta, con risposte simulate positive e negative.
- Generazione simulata, ripiego di qualità, tetto condiviso fra processi, prenotazioni interrotte e registro danneggiato.
- Scansione delle credenziali: valori noti senza esposizione nell'output, file grandi e symlink non dichiarati sicuri.
- Permessi POSIX e logica di valutazione delle ACL Windows, cioè l'elenco di chi può accedere al file.
- Copy Markdown con link e note di impaginazione.
- Controllo delle pagine non collegate, delle pagine attese ma mancanti e del limite di pagine.
- Conversione editor, attributi degli script, CSS isolato, layout, risorse, mappa incompleta e navigazione nell'anteprima comune.
- Ottimizzazione immagini e screenshot della prova di stile in cartelle di versione distinte.
- Riferimento offline completo, mancanza degli originali di confronto e riserva solo visiva.
- Assemblaggio ripetibile e prova di pubblicazione senza caricamento.
- Confronto fra anteprima e runtime locale ufficiale di Wrangler su otto casi: pagine, redirect, percorsi HTML canonici, sottocartelle, riscrittura e 404.

## Verifica indipendente del 17 settembre 2026

È stato provato un funnel fittizio di due pagine, landing e ringraziamento non collegato, con logo, kit e copy forniti, senza Copy Genius e senza generazione immagini. Sono state verificate entrambe le modalità editor, header/footer separati, screenshot e interazioni a 1440 e 390 px, mappa dei media e scansione della consegna. Un problema dei link interni nell'anteprima post-mappa è stato corretto e la stessa prova è stata ripetuta con esito positivo.

Il dubbio iniziale sulle intestazioni dei redirect non è stato confermato: nei casi provati l'anteprima coincide con Wrangler 4.133.0, quindi quel comportamento è stato conservato. Il test segue la modalità di [sviluppo locale documentata da Cloudflare](https://developers.cloudflare.com/workers/local-development/), con risorse remote disabilitate.

## Limiti da non nascondere

Le prove sono state eseguite su macOS, Node 26.4.0, Playwright 1.63.0, Chromium 153.0.8010.12, sharp 0.35.4 e Wrangler 4.133.0. La logica ACL Windows è testata con dati fittizi, ma i comandi PowerShell non sono stati eseguiti su un computer Windows. Non sono stati provati un account OpenAI reale, un deploy Cloudflare reale o un'installazione Elementor reale: credito, permessi remoti, tema e restrizioni dell'editor si verificano nel progetto effettivo.

Il validatore generico di skill Codex non accetta i campi Claude `disable-model-invocation` e `argument-hint`: non sono stati rimossi per far passare un controllo destinato a un altro formato. Il collegamento della skill in Codex supera quel validatore; nome, riferimenti, aiuti, sintassi JavaScript e comportamento degli strumenti sono controllati separatamente.

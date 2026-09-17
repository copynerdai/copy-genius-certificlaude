# Installa o aggiorna Crea funnel

## Per lo studente

Incolla questa richiesta in Claude Code:

> Installa o aggiorna la skill personale Crea funnel seguendo https://raw.githubusercontent.com/copynerdai/copy-genius-certificlaude/main/INSTALLA-CREA-FUNNEL.md. Voglio avviarla con /crea-funnel. Conserva eventuali copie precedenti e non modificare i materiali di Copy Genius.

Claude ti chiederà i normali permessi per scaricare i file e salvarli sul tuo computer. Dopo la conferma dell'installazione, chiudi e riapri Claude Code, poi scrivi:

```text
/crea-funnel
```

Lo stesso messaggio serve per gli aggiornamenti. Non serve un account GitHub, Git o una chiave API per installarla. Serve Node.js 22 o successiva, già richiesto dagli strumenti della skill. L'installazione scarica istruzioni e script; browser e altre dipendenze vengono preparati in seguito, durante il percorso guidato.

Installazione personale significa disponibile nei tuoi progetti di Claude Code su quel computer, non condivisa automaticamente con altri computer, account o sessioni cloud. Gli otto passi, gli strumenti e le destinazioni del lavoro non cambiano. Gli aggiornamenti si richiedono con il messaggio qui sopra, non con `/plugin update`.

## Procedura per Claude Code

Queste istruzioni si eseguono soltanto quando la persona chiede di installare o aggiornare Crea funnel, non quando avvia un funnel.

1. Verifica `node --version`. Se manca Node.js o è precedente alla 22, guida la persona a installare una versione LTS supportata dal sito ufficiale https://nodejs.org e poi riprendi. Non cambiare le altre configurazioni di Claude.
2. Scarica in una cartella temporanea nuova il solo installer da `https://raw.githubusercontent.com/copynerdai/copy-genius-certificlaude/main/plugins/crea-funnel/installa.mjs`. Usa gli strumenti di download disponibili, controlla lo stato HTTP e leggi il file prima di eseguirlo. Non concatenare download ed esecuzione in una pipe. Non scaricarlo dentro Copy Genius o dentro una skill esistente.
3. Esegui `node "<percorso temporaneo>/installa.mjs" --help`, poi `node "<percorso temporaneo>/installa.mjs"`. Su Windows usa il percorso effettivo fra virgolette, senza eseguire sintassi Bash in PowerShell. L'installer usa solo Node.js, senza comandi di shell o dipendenze aggiuntive.
4. Se una copia è manuale o modificata, l'installer si ferma senza sostituirla. Spiega che verrà conservata interamente in backup, ma che le personalizzazioni non saranno riportate nella nuova copia attiva. Chiedi conferma prima di ripetere con `--sostituisci`. Non usare quell'opzione in automatico. Collegamenti simbolici, permessi negati o blocchi di installazione richiedono una verifica dei percorsi; non aggirare il controllo cancellando file.
5. Considera l'installazione riuscita solo con codice di uscita 0 e stato `installata`, `aggiornata` o `gia-aggiornata`. Verifica nella `target` restituita la presenza di `SKILL.md`, `riferimenti/` e `strumenti/`, e l'assenza di `.claude-plugin/`. Il file principale deve mantenere `name: crea-funnel`. Se disponibile, valida la cartella skill con `claude plugin validate "<configurazione Claude>/skills"`; non correggere o cancellare altre skill se il validatore segnala problemi estranei.
6. Comunica il percorso installato e l'eventuale backup. Chiedi di chiudere e riaprire Claude Code e verificare che il menu `/` mostri `/crea-funnel`. Solo dopo questa verifica la disponibilità del comando nell'interfaccia è confermata. La verifica non deve costruire un funnel né fare chiamate API a pagamento.

L'installer risolve `main` in un commit preciso e usa quel commit per tutti i download. Controlla l'elenco completo e l'integrità dei file prima di cambiare la copia attiva. Non usa credenziali GitHub, OpenAI o Cloudflare. In caso di errore HTTP, rete assente o limiti GitHub, riporta il problema e riprova in seguito: non chiedere token per aggirarlo.

## Se è già installata la vecchia versione dal marketplace

Installa prima la skill personale con la procedura qui sopra. Dopo aver verificato `/crea-funnel`, puoi disabilitare il vecchio plugin con:

```text
/plugin disable crea-funnel@copynerd
```

La disabilitazione lascia i file recuperabili e non riguarda il plugin Copy Genius. Non disinstallare Copy Genius, non rimuovere il marketplace e non modificare i materiali sulla Scrivania. Se non è presente il vecchio plugin, non fare nulla. La versione precedente rimane nel catalogo per compatibilità, ma non è la modalità di installazione del corso.

## Copie precedenti e problemi

La destinazione normale è `~/.claude/skills/crea-funnel/` su macOS/Linux, `%USERPROFILE%\.claude\skills\crea-funnel\` su Windows. Se è impostata `CLAUDE_CONFIG_DIR`, si usa la cartella di configurazione indicata da quella variabile. L'installer rifiuta i collegamenti simbolici nei percorsi di installazione.

Ogni copia sostituita viene spostata interamente in `backups/crea-funnel/installazione-<codice>/precedente/` dentro la configurazione Claude, fuori dalle skill attive. Non viene cancellata automaticamente. Per un ripristino, chiudi Claude Code, identifica i due percorsi esatti e chiedi a Claude di conservare anche la copia corrente prima di riportare il backup in `skills/crea-funnel/`.

Un'interruzione può lasciare `.crea-funnel-install.lock` nella configurazione Claude. Contiene il numero del processo: verifica che quell'installazione non sia più in corso prima di intervenire. I materiali incompleti restano nei backup. Nessun problema di installazione autorizza a eliminare un progetto o materiali di Copy Genius.

Il collaudo automatico dell'installer si esegue con `node --test plugins/crea-funnel/test/installazione.test.mjs`. Il 17 settembre 2026 sono passati tutti i 15 test, inclusa la registrazione effettiva del comando breve in Claude Code 2.1.274, senza invocare modelli AI. Sono passati anche i 21 test degli strumenti della skill. Il codice è multipiattaforma; le prove su filesystem e con Claude Code sono state eseguite su macOS, non su un computer Windows.

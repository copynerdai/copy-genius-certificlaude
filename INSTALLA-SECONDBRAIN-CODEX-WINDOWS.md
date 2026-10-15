# Imposta il SecondBrain in Codex su Windows

Il SecondBrain è una cartella di note in Markdown che l'AI scrive, ordina e consulta per te, con il metodo di Andrej Karpathy.
Ogni area ha il suo `index.md`, le fonti grezze stanno in `raw/`, e alla radice un `AGENTS.md` tiene la mappa e le regole.
Questa installazione crea la cartella e insegna a Codex a usarla da ora in poi, in ogni sessione.

## Per la persona

Incolla questo messaggio in Codex:

```text
Scarica con curl.exe -sL -o "$env:TEMP\installa-secondbrain.md" https://raw.githubusercontent.com/copynerdai/copy-genius-certificlaude/main/INSTALLA-SECONDBRAIN-CODEX-WINDOWS.md, leggilo come UTF-8 ed esegui esattamente la «Procedura per Codex». Parla con me in italiano.
```

Codex ti farà un paio di domande e ti chiederà di approvare alcuni comandi: approvali.
Alla fine chiudi e riapri Codex.

Da quel momento puoi dire, per esempio:

- «Archivia questo: …» seguito da un testo, un file o una cartella.
- «Dove avevo messo …?» oppure «Cosa sappiamo su …?».
- «Ripassa la wiki e dimmi cosa non torna», una volta al mese.

Il SecondBrain si trova sulla Scrivania, nella cartella `SecondBrain`. Per navigarlo, apri quella cartella in Obsidian con «Apri cartella come vault».

Per aggiornare le regole, incolla di nuovo lo stesso messaggio. Le tue note non vengono toccate.

## Procedura per Codex

Esegui i passi in ordine. Parla con la persona in italiano.
È tutto pubblico su GitHub: non servono account, token o chiavi.
Non cancellare mai file esistenti, e non spostare i file che la persona ha già in altre cartelle.
Usa PowerShell. Qui sotto `%USERPROFILE%` è la cartella utente, cioè `$env:USERPROFILE`.
Ogni file che scrivi o modifichi va salvato in UTF-8 senza BOM. Non usare `Out-File`, `>` o `Set-Content` di PowerShell, che salvano in altre codifiche: usa il tuo strumento di modifica dei file oppure `[System.IO.File]::WriteAllText(<percorso>, <testo>, (New-Object System.Text.UTF8Encoding $false))`.
Se questa sessione di Codex gira dentro WSL (Linux), fermati subito e dillo alla persona.

### Passo 1 — Prendi i file

I modelli stanno nella cartella `secondbrain\` del repository `copy-genius-certificlaude`.

- Se esiste `%USERPROFILE%\.copynerd\copy-genius-certificlaude`, aggiornala con `git -C "$env:USERPROFILE\.copynerd\copy-genius-certificlaude" pull --ff-only`.
- Se non esiste, scaricala con `git clone https://github.com/copynerdai/copy-genius-certificlaude.git "$env:USERPROFILE\.copynerd\copy-genius-certificlaude"`.
- Se manca Git, installalo con `winget install --id Git.Git -e`, poi di' alla persona di chiudere e riaprire Codex e di incollare di nuovo il messaggio, e fermati.

Da qui in avanti SRC è `%USERPROFILE%\.copynerd\copy-genius-certificlaude\secondbrain`.

### Passo 2 — Due domande alla persona

Controlla se esiste già `%USERPROFILE%\Desktop\SecondBrain\AGENTS.md`.

- **Se esiste già**, il SecondBrain c'è: salta la domanda sulle aree e al Passo 3 aggiungi soltanto i file che mancano.
- **Se non esiste**, fai alla persona le due domande qui sotto in un solo messaggio, ciascuna con il tuo consiglio, e aspetta la risposta.

1. Le aree di partenza sono Marketing, Fiscalità, Finance, Personal e System, più `raw` per le fonti grezze, che c'è sempre. Vuole aggiungerne o toglierne qualcuna? Consiglio: partire da queste e aggiungere le altre quando servono.
2. Vuole che installi Obsidian, il programma per sfogliare le note con i link cliccabili? Consiglio: sì. Se è già installato, salta la domanda.

### Passo 3 — Crea il SecondBrain

Copia lo scheletro senza sovrascrivere niente: `robocopy` con `/XC /XN /XO` copia soltanto i file che non esistono ancora.

```powershell
robocopy "$env:USERPROFILE\.copynerd\copy-genius-certificlaude\secondbrain\vault" "$env:USERPROFILE\Desktop\SecondBrain" /E /XC /XN /XO
```

I codici di uscita di `robocopy` da 0 a 7 sono riusciti; da 8 in su è un errore.
Usa la cartella `%USERPROFILE%\Desktop` anche se la Scrivania visibile della persona sta in OneDrive. In quel caso dille dove trova la cartella.

Se è una prima installazione e la persona ha cambiato le aree:

- **Area tolta:** non copiarla, aggiungendo al comando `/XD "<SRC>\vault\<cartella>"`, e togli la sua riga dalla tabella «Mappa» di `AGENTS.md`.
- **Area aggiunta:** crea la cartella con un nome in minuscolo, con i trattini e senza accenti. Mettici un `index.md` uguale a quelli delle altre aree, con il suo titolo e una riga di riassunto, e aggiungi la sua riga alla tabella «Mappa» di `AGENTS.md`.

Se il SecondBrain esisteva già, non toccare `AGENTS.md` e i suoi `index.md`: le note e la mappa sono della persona.

### Passo 4 — Insegna la regola a Codex

La regola sta in `SRC\regola-globale-codex.md`: è un blocco racchiuso tra `<!-- secondbrain:inizio` e `<!-- secondbrain:fine -->`.
Va nel file delle istruzioni globali di Codex, `%USERPROFILE%\.codex\AGENTS.md`, che Codex legge in ogni sessione.

- Se il file non esiste, crealo con il contenuto del blocco.
- Se esiste e contiene già il blocco, sostituisci soltanto la parte tra i due segni con la versione nuova.
- Se esiste e non contiene il blocco, aggiungilo in fondo, dopo una riga vuota.
- Non cambiare niente del resto del file. Se il file esistente non è in UTF-8, convertilo in UTF-8 senza BOM e mantieni tutto il contenuto.

### Passo 5 — Obsidian

Se la persona l'ha chiesto, installalo con `winget install --id Obsidian.Obsidian -e`.
Spiegale che, alla prima apertura, sceglie «Apri cartella come vault» e indica `%USERPROFILE%\Desktop\SecondBrain`. La cartella `.obsidian` del SecondBrain imposta già i link nello stile usato dalle note.

### Passo 6 — Controlla e riassumi

- Controlla che esistano `AGENTS.md`, `raw\index.md`, `raw\karpathy-llm-knowledge-bases.md` e l'`index.md` di ogni area nella tabella «Mappa».
- Controlla che ogni link della tabella «Mappa» porti a un file che esiste.
- Controlla che `%USERPROFILE%\.codex\AGENTS.md` contenga il blocco una volta sola, e che i suoi primi due byte non siano `255 254` (sarebbe UTF-16, che Codex non legge): `[System.IO.File]::ReadAllBytes(<percorso>)[0..1]`.

Poi di' alla persona in poche righe cosa hai creato, dove, e cosa hai saltato.
Ricordale di chiudere e riaprire Codex.
Spiegale come si usa: «Archivia questo: …», «Dove avevo messo …?» e, una volta al mese, «Ripassa la wiki e dimmi cosa non torna».

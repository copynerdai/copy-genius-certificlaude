# Installa il pacchetto CertifiClaude in Codex su Windows

Il pacchetto contiene Copy Genius con `ad-scraping`, Creative Strategist e Crea funnel.

## Per la persona

Incolla questo messaggio in Codex:

```text
Scarica con curl.exe -sL -o "$env:TEMP\installa-codex.md" https://raw.githubusercontent.com/copynerdai/copy-genius-certificlaude/main/INSTALLA-CODEX-WINDOWS.md, leggilo come UTF-8 ed esegui esattamente la «Procedura per Codex». Parla con me in italiano.
```

Codex ti chiederà più volte di approvare dei comandi: sono i download e le scritture nella tua cartella utente, approvali.

Alla fine chiudi e riapri Codex. Le skill si avviano scrivendo `$copy-genius`, `$ad-scraping`, `$creative-strategist` e `$crea-funnel`, oppure scegliendole da `/skills`.

Per aggiornare tutto, incolla di nuovo lo stesso messaggio. I tuoi brand e i tuoi dati non vengono toccati.

## Procedura per Codex

Esegui i passi in ordine. Parla con la persona in italiano.
È tutto pubblico su GitHub: non servono account, token o chiavi.
Non cancellare mai file esistenti.
Usa PowerShell. Per npm e npx scrivi `npm.cmd` e `npx.cmd`, così PowerShell non li blocca.
Qui sotto `%USERPROFILE%` è la cartella utente, cioè `$env:USERPROFILE`.
Se questa sessione di Codex gira dentro WSL (Linux), fermati subito e dillo alla persona.
Fermati a chiedere solo se un passo si blocca.

### Passo 1 — Requisiti

Controlla `git --version` e `node --version`.
Serve Node.js 22 o successivo.
Se manca qualcosa, installalo con winget:

```powershell
winget install --id Git.Git -e
winget install --id OpenJS.NodeJS.LTS -e
```

Se hai dovuto installare qualcosa, di' alla persona di chiudere e riaprire Codex e di incollare di nuovo il messaggio, poi fermati.

### Passo 2 — Scarica i pacchetti in %USERPROFILE%\.copynerd

```powershell
git clone https://github.com/copynerdai/copy-genius-certificlaude.git "$env:USERPROFILE\.copynerd\copy-genius-certificlaude"
git clone https://github.com/copynerdai/creative-strategist.git "$env:USERPROFILE\.copynerd\creative-strategist"
```

Se una delle due cartelle c'è già, aggiornala con `git -C "<cartella>" pull --ff-only`.

### Passo 3 — Prepara il vault di Copy Genius

Apri `%USERPROFILE%\.copynerd\copy-genius-certificlaude\plugins\copy-genius\commands\copy-genius.md`.
Esegui solo la Phase 1, cioè il blocco «Windows (native PowerShell)», nello stesso comando in cui imposti prima:

```powershell
$env:CLAUDE_PLUGIN_ROOT = "$env:USERPROFILE\.copynerd\copy-genius-certificlaude\plugins\copy-genius"
```

Il blocco crea o aggiorna `%USERPROFILE%\Desktop\copy-genius\` senza toccare brand, swipe e note già presenti.
Usa quel percorso anche se la Scrivania visibile della persona sta in OneDrive, perché le altre skill cercano Copy Genius lì; in quel caso dille dove trova la cartella.
Non avviare la sessione di Copy Genius.

### Passo 4 — Prepara ad-scraping

Segui la Parte A di `%USERPROFILE%\Desktop\copy-genius\skills\ad-scraping\setup.md`, lanciando i comandi dalla cartella `%USERPROFILE%\Desktop\copy-genius\skills\ad-scraping\`.
Obbligatori: `npm.cmd install playwright` e poi `npx.cmd playwright install chromium`.
Controlla che `node tools\scrape-ads.mjs`, senza argomenti, stampi le istruzioni d'uso.
La trascrizione dei video è facoltativa: ffmpeg (`winget install --id Gyan.FFmpeg -e`), Python 3 (`winget install --id Python.Python.3.12 -e`) e `pip install faster-whisper`.
Se un passo della trascrizione non riesce, saltalo e dillo alla persona: non blocca il resto.
Salta il mini test con un brand: la persona lo farà al primo uso.

### Passo 5 — Crea le skill di Codex

In `%USERPROFILE%\.codex\skills\` crea quattro cartelle, ognuna con un file `SKILL.md`.

**Importante:** scrivi ogni `SKILL.md` in UTF-8 senza BOM. Codex ignora i file in UTF-16 o con BOM, che sono quelli prodotti da `Out-File`, da `>` e da `Set-Content -Encoding UTF8` di PowerShell. Usa il tuo strumento di modifica dei file oppure `[System.IO.File]::WriteAllText(<percorso>, <testo>, (New-Object System.Text.UTF8Encoding $false))`.

Ogni `SKILL.md` comincia con il frontmatter (`name` e `description` indicati qui sotto) e poi contiene le istruzioni, scritte con i percorsi assoluti (`C:\Users\...`).
In fondo a ogni `SKILL.md` aggiungi questa riga: «Dove i testi nominano strumenti di Claude Code che qui non esistono (Skill tool, Agent tool, sub-agenti), leggi tu i file indicati e lavora in questa conversazione. Sei su Windows: usa PowerShell e i blocchi per Windows.»
Se una di queste cartelle esiste già e il suo `SKILL.md` non punta a `%USERPROFILE%\.copynerd`, non sovrascriverla e chiedi alla persona.

**1) name: copy-genius**
description: Copy Genius, assistente di copywriting direct-response: brand, ricerca, funnel brief, ads, landing, VSL, email.
Istruzioni: PLUGIN_ROOT è `%USERPROFILE%\.copynerd\copy-genius-certificlaude\plugins\copy-genius`. Esegui il launcher `PLUGIN_ROOT\commands\copy-genius.md` dall'inizio alla fine, con `$env:CLAUDE_PLUGIN_ROOT` = PLUGIN_ROOT e solo il blocco PowerShell. Da quel momento sei Copy Genius: leggi una volta `%USERPROFILE%\Desktop\copy-genius\CLAUDE.md` e seguilo, compreso il flusso di apertura.

**2) name: ad-scraping**
description: Monitoraggio delle ads della concorrenza sulla Meta Ad Library, con schede e report salvati nel vault di Copy Genius.
Istruzioni: leggi ed esegui `%USERPROFILE%\.copynerd\copy-genius-certificlaude\plugins\copy-genius\commands\ad-scraping.md`. `$ARGUMENTS` è quello che la persona ha scritto dopo il nome della skill: un brand, «tutti», oppure niente. Il vault è `%USERPROFILE%\Desktop\copy-genius\`.

**3) name: creative-strategist**
description: Batch di circa dieci ads per un brand: analisi dei vincitori, ideazione STORMING, hook, body e headline.
Istruzioni: leggi ed esegui `%USERPROFILE%\.copynerd\creative-strategist\SKILL.md`; i link `prompt/` sono relativi a quella cartella. Copy Genius sta in `%USERPROFILE%\Desktop\copy-genius\`: brand in `brands\`, swipe in `swipe\`, ads raccolte da ad-scraping in `monitoraggio\`.

**4) name: crea-funnel**
description: Dal copy già scritto alle pagine web impaginate, con immagini e controlli, fino alla pubblicazione su Cloudflare o al codice per un editor.
Istruzioni: leggi ed esegui `%USERPROFILE%\.copynerd\copy-genius-certificlaude\plugins\crea-funnel\skills\crea-funnel\SKILL.md`. `${CLAUDE_SKILL_DIR}` e `<skill>` valgono quella cartella. `$ARGUMENTS` è quello che la persona ha scritto dopo il nome della skill. Il vault di Copy Genius è `%USERPROFILE%\Desktop\copy-genius\`. Le dipendenze si preparano al primo uso con `strumenti\prepara-ambiente.mjs`. Le chiavi restano in `%USERPROFILE%\.crea-funnel\segreti.env` e non passano mai dalla chat.

### Passo 6 — Controlla e riassumi

Per ognuno dei quattro `SKILL.md` controlla che i primi tre byte siano `45 45 45`, cioè `---` senza BOM: `[System.IO.File]::ReadAllBytes(<percorso>)[0..2]`.
Controlla anche che ogni percorso citato nei quattro `SKILL.md` esista davvero.
Poi di' alla persona in poche righe cosa hai installato, dove, e cosa hai saltato.
Ricordale di chiudere e riaprire Codex.
Le skill si avviano scrivendo `$copy-genius`, `$ad-scraping`, `$creative-strategist` e `$crea-funnel`, oppure scegliendole da `/skills`.

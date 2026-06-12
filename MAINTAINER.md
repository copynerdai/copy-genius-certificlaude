# Copy Genius — guida manutentore (solo per te, copynerdai)

Questo file spiega come è fatto il pacchetto e come spedire un aggiornamento agli studenti. **Non è rilevante per gli studenti** — è la tua mappa.

## Struttura della repo

```
copy-genius/                              (repo GitHub: copynerdai/copy-genius)
├── .claude-plugin/
│   └── marketplace.json                  ← elenca il plugin (marketplace name: "copynerd")
├── README.md                             ← istruzioni di installazione per gli studenti
├── MAINTAINER.md                         ← questo file
└── plugins/
    └── copy-genius/
        ├── .claude-plugin/
        │   └── plugin.json               ← manifest del plugin (name + version)
        ├── commands/
        │   └── copy-genius.md            ← il comando /copy-genius (logica install + update)
        └── framework/                    ← IL SISTEMA che viene spedito e aggiornato
            ├── VERSION                   ← la versione (es. 1.0.0)
            ├── CLAUDE.md
            ├── index.md
            ├── core/  skills/  format-specialists/  section-specialists/
            ├── brands/_template/         ← solo il template (nessun brand reale)
            └── swipe/                     ← scaffold vuoto
```

La cartella `framework/` è ciò che finisce sul Desktop dello studente al primo `/copy-genius`. Tutto il resto (manifest, comando, README) serve all'infrastruttura del plugin.

## Il principio chiave: framework vs dati utente

Il comando (`commands/copy-genius.md`) sa distinguere due cose sul computer dello studente:

- **Framework** → si aggiorna a ogni nuova versione.
- **Dati dello studente** → mai toccati.

I dati protetti (definiti nel comando, sezione "Protected user-data"):
`brands/` (tranne `_template/`), `swipe/`, `strategy-notebook.md`, `raw/`, `core/feedback-rules.md`, `core/writing/banned-phrases-user.md`.

⚠️ **Regola d'oro quando modifichi il framework**: non mettere MAI dati che lo studente accumula dentro un file di framework (che si sovrascrive). Se aggiungi un nuovo tipo di "file che lo studente fa crescere", aggiungilo anche alla lista dei protetti dentro `commands/copy-genius.md` E alla tabella esclusioni del rsync di update. Altrimenti un aggiornamento glielo cancella.

## Come spedire un aggiornamento (la procedura)

1. **Modifica il framework** in `plugins/copy-genius/framework/` (aggiungi uno specialista, correggi CLAUDE.md, ecc.).
   - Se l'hai migliorato lavorando nel tuo vault personale `~/Desktop/copy-genius/`, copia il/i file cambiati da lì dentro `framework/` qui. (Il tuo vault personale NON è la fonte: questa repo lo è.)
   - Non spedire mai brand reali, swipe reali, o feedback con nomi di clienti.

2. **Alza la versione** in **due** punti (devono coincidere):
   - `plugins/copy-genius/framework/VERSION` → es. `1.1.0`
   - `plugins/copy-genius/.claude-plugin/plugin.json` → campo `"version": "1.1.0"`
   - (Il confronto che fa scattare l'update sullo studente è sul file `VERSION`. Se non lo alzi, l'update non parte.)

3. **Pubblica su GitHub**:
   ```bash
   cd ~/copy-genius-plugin
   git add -A
   git commit -m "Copy Genius 1.1.0 — <cosa hai cambiato>"
   git push
   ```

4. **Avvisa gli studenti** (es. nel gruppo del corso): «Uscita la 1.1.0. Aggiornate con `/plugin update copy-genius@copynerd` e poi `/copy-genius`.»

Al loro `/copy-genius` successivo, il framework si rinfresca e i loro brand/swipe/note/feedback restano intatti.

## Come provarlo tu prima di pubblicare

Puoi installare il marketplace da locale, senza pubblicare nulla:

```
/plugin marketplace add ~/copy-genius-plugin
/plugin install copy-genius@copynerd
```

Poi `/copy-genius` in una cartella di test. Per simulare un update: alza `VERSION`, e rilancia `/copy-genius` — vedrai la riga "aggiornato".

## Naming (per riferimento)

- Repo GitHub: `copynerdai/copy-genius`
- Marketplace name: `copynerd`
- Plugin name: `copy-genius`
- Comando studente: `/plugin marketplace add copynerdai/copy-genius` → `/plugin install copy-genius@copynerd`

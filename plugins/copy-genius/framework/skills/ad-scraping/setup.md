# Ad Scraping — setup delle dipendenze

> Da fare **una volta sola**, la prima volta che usi `/ad-scraping`. Scraping senza login: **nessun account Meta, nessun token**.
>
> Questo file è pensato perché lo **esegua Claude**: rileva il sistema operativo e lancia i comandi giusti. Tu rispondi a un paio di domande.
>
> Tutti i comandi si lanciano dalla cartella `skills/ad-scraping/` del tuo vault Copy Genius.

---

## Parte A — Installazione

### 0. Prerequisiti di base

| Cosa | Mac | Windows |
|---|---|---|
| **Node.js** (LTS) | `brew install node` — oppure da nodejs.org | `winget install OpenJS.NodeJS.LTS` o da nodejs.org |
| **Python 3** (solo per la trascrizione) | già presente; verifica `python3 --version` | `winget install Python.Python.3.12` o da python.org (spunta "Add to PATH") |

### 1. Scraping (obbligatorio)

```bash
npm install playwright            # la libreria browser
npx playwright install chromium   # scarica Chromium (~150MB)
```

✅ Verifica: `node tools/scrape-ads.mjs` senza argomenti stampa l'uso (nessun errore di modulo mancante).

> Il `node_modules/` creato qui **sopravvive agli aggiornamenti** di Copy Genius: l'update copia i file del framework senza cancellare quello che trova. Non serve reinstallare a ogni versione.

### 2. Trascrizione video (opzionale ma consigliata)

Serve solo per i video parlati. Il trascrittore `tools/transcribe.py` è già incluso e sceglie da solo il motore disponibile: installa **ffmpeg** + **un solo** motore Whisper (Parte B).

```bash
brew install ffmpeg               # Mac
winget install Gyan.FFmpeg        # Windows
```

✅ Verifica: `python3 tools/transcribe.py` (Windows: `python tools\transcribe.py`) senza argomenti stampa l'uso.

**Se la trascrizione non si riesce a installare, non è un problema bloccante**: censimento, schede e report funzionano lo stesso. Cambia solo che i video non vengono trascritti.

### 3. Verifica finale

Un mini test guidato: scegli un brand da osservare, dai nome + sito + una pagina Facebook, lascia che la skill scopra il `page_id` e scriva il `config.json`, poi lancia un censimento ridotto:

```bash
node tools/scrape-ads.mjs <slug> --per-page 10
```

Se il censimento esce, l'installazione è a posto.

---

## Parte B — Quale Whisper?

### Passo 1 — Che computer ho?

**Su Mac**:  → "Informazioni su questo Mac". Leggi il **Chip**: `Apple M1/M2/M3/M4…` = Apple Silicon · `Intel…` = Mac Intel.

**Su Windows**: Impostazioni → Sistema → Informazioni (Processore + RAM installata).

### Passo 2 — Installa il motore giusto

| Computer | Motore | Installazione |
|---|---|---|
| **Mac Apple Silicon** (M1–M4) | `mlx-whisper` (usa la GPU Apple) | `pip3 install mlx-whisper` |
| **Mac Intel** | `faster-whisper` (CPU) | `pip install faster-whisper` |
| **PC Windows** | `faster-whisper` (CPU/CUDA) | `pip install faster-whisper` |

Installane **uno solo**: `transcribe.py` sceglie da sé quello presente.

### Modelli (opzionali — i default vanno bene per le ads)

Si cambiano con variabili d'ambiente, senza toccare i file:

| Variabile | Vale per | Default | Alternative |
|---|---|---|---|
| `BRAND_MONITOR_WHISPER_MLX` | mlx-whisper (Apple Silicon) | `mlx-community/whisper-large-v3-turbo` | `mlx-community/whisper-large-v3-mlx` (max qualità) · `mlx-community/whisper-small-mlx` (macchine deboli) |
| `BRAND_MONITOR_WHISPER` | faster-whisper (Intel/Windows) | `small` | `turbo` / `medium` (macchine forti) · `base` (molto deboli) |

Regola pratica: **Apple Silicon → default e non pensarci**. Macchina vecchia o debole → il default `small` di faster-whisper è già la scelta prudente. La lingua la gestisce la pipeline dal `config.json` del brand (`en`, `it`, `auto`).

---

## Cosa c'è nel pacchetto

| File | A cosa serve |
|---|---|
| [ad-scraping](skills/ad-scraping.md) | l'orchestratore della skill: attivazione, pipeline, guardrail |
| [modello-dati](skills/ad-scraping/modello-dati.md) | il contratto del modello dati: config, ledger, schede, report, campionamento |
| `tools/scrape-ads.mjs` | censimento (prime 100 ads attive per pagina, multi-pagina) + clustering per creatività + ledger + manifest. **Non scarica media** |
| `tools/transcribe-deep.mjs` + `tools/transcribe.py` | trascrizione dei video da scheda profonda (video in tmp, poi cestinato) |
| `tools/run-all.mjs` | "monitora tutti i brand" in un colpo solo |

I **dati** (config dei brand, ledger, schede, report) non stanno qui: vivono in `monitoraggio/` nella radice del vault, che è roba tua e gli aggiornamenti non la toccano mai.

> ⚠️ **Manutenzione**: lo scraping segue la struttura della Ad Library di Meta. Se Meta cambia il layout, lo script va aggiornato — arriverà con un aggiornamento di Copy Genius. Tieni i volumi bassi (settimanale, pochi brand) e lancialo dal tuo computer, mai da un server.

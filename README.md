# Copy Genius

Assistente di copywriting direct-response per Claude Code. Ti porta da brand + pubblico + offerta fino al copy finito (ads, advertorial, landing, VSL, email, upsell, libri), passando per ricerca di mercato e funnel brief.

Si attiva con il comando `/copy-genius` dentro Claude Code.

---

## Installazione (studenti)

Ti servono solo **Claude Code** installato ([download](https://www.anthropic.com/claude-code)) e un account Anthropic attivo. Non ti serve un account GitHub.

Apri Claude Code e digita questi **due comandi**, uno alla volta:

```
/plugin marketplace add copynerdai/copy-genius-certificlaude
```

```
/plugin install copy-genius@copynerd
```

Poi **riavvia Claude Code** (chiudi e riapri) e digita:

```
/copy-genius
```

Al primo avvio, Copy Genius si installa da solo in `~/Desktop/copy-genius/` e ti saluta. Da lì, ti guida nella creazione del tuo primo brand.

Fatto. Nessun file da spostare a mano, nessun percorso da configurare.

> **Obsidian (opzionale)**: per navigare il vault visivamente, apri `~/Desktop/copy-genius/` come vault in [Obsidian](https://obsidian.md) ("Apri cartella come vault"). Parti da `index.md`.

---

## Come si usa

Apri Claude Code, digita `/copy-genius`, e il sistema parte. Da quel momento puoi:

- creare un nuovo brand (ti guida l'orchestratore)
- scrivere copy (landing, email, ad, VSL, libri) per i tuoi brand
- fare ricerca di mercato
- analizzare swipe e distillare note di strategia
- **monitorare le ads della concorrenza** con `/ad-scraping` (vedi sotto)

### Monitoraggio della concorrenza — `/ad-scraping`

Il comando `/ad-scraping` legge la **Meta Ad Library** (l'archivio pubblico di trasparenza di Meta, senza login e senza account) e ti costruisce un archivio di quello che la concorrenza sta davvero girando: una scheda per creatività, un report settimanale con **cosa stanno testando adesso** e i **winner consolidati** (le ads attive da più di 30 giorni).

Puoi lanciarlo su un brand (`/ad-scraping nomebrand`) o su tutti quelli che hai configurato (`/ad-scraping`). Basta che tu gli dia nome, sito e pagina Facebook del brand da osservare: le pagine le indichi tu, non si indovinano.

**Prima volta**: servono Node e Playwright, e per trascrivere i video anche ffmpeg + Whisper. Claude te li installa seguendo `skills/ad-scraping/setup.md`. La trascrizione è facoltativa: se salti quel pezzo, schede e report funzionano lo stesso.

L'archivio finisce in `~/Desktop/copy-genius/monitoraggio/` ed è roba tua: gli aggiornamenti non lo toccano.

> Da un monitoraggio si prendono **angoli, strutture e formati** — mai le frasi. È lo stesso firewall dello swipe file: la struttura attraversa le lingue, il fraseggio no.

Tutto il tuo lavoro — brand, swipe, note, feedback — vive in `~/Desktop/copy-genius/` **sul tuo computer**. Resta privato e locale: non viene mai caricato da nessuna parte.

---

## Aggiornamenti

Quando esce una nuova versione, aggiorni con un comando dentro Claude Code:

```
/plugin update copy-genius@copynerd
```

Al `/copy-genius` successivo, Copy Genius rinfresca il framework e **lascia intatti i tuoi brand, swipe, note e feedback**. Non devi salvare niente da parte: il tuo lavoro è al sicuro per costruzione.

---

## Cosa NON viene mai toccato da un aggiornamento

Il tuo lavoro. In dettaglio, queste cartelle/file dentro `~/Desktop/copy-genius/` sono tuoi e protetti:

| Protetto (tuo) | Aggiornato (framework) |
|---|---|
| `brands/` (i tuoi brand) | `CLAUDE.md`, `core/strategic-frameworks/`, `core/writing/` |
| `swipe/` (il tuo swipe file) | `skills/`, `format-specialists/`, `section-specialists/` |
| `strategy-notebook.md` | `brands/_template/`, `index.md` |
| `core/feedback-rules.md` (regole globali) | |
| `core/writing/banned-phrases-user.md` (frasi bandite) | |

---

## Problemi?

- **`/copy-genius` non compare** dopo l'install → hai riavviato Claude Code? Chiudi e riapri.
- **Errore sul marketplace** → ricontrolla di aver scritto esattamente `copynerdai/copy-genius-certificlaude`.
- **Al primo `/copy-genius` chiede il permesso di scrivere sul Desktop** → è normale (installa il vault in `~/Desktop/copy-genius/`). Dai **Allow / Sì**.
- Altri dubbi → contatta il canale di supporto del corso.

### Windows — piano B (solo se l'auto-installazione non parte)

Se su Windows il primo `/copy-genius` non riesce a creare la cartella da solo, puoi installare il vault a mano in 1 minuto, da Esplora File:

1. Vai su **https://github.com/copynerdai/copy-genius-certificlaude** → pulsante verde **Code** → **Download ZIP**.
2. Estrai lo ZIP (tasto destro → Estrai tutto).
3. Dentro la cartella estratta apri: `plugins\copy-genius\framework\`
4. Seleziona **tutto il contenuto** di quella cartella `framework` (Ctrl+A) e **copialo** (Ctrl+C).
5. Sul **Desktop** crea una cartella chiamata esattamente `copy-genius`, entraci e **incolla** (Ctrl+V).
6. Torna in Claude Code e digita `/copy-genius` → trova il vault già pronto e parte.

Path finale corretto: `C:\Users\<tuo-utente>\Desktop\copy-genius\` con dentro un file `CLAUDE.md`.

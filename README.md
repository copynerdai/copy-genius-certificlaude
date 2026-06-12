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
- Altri dubbi → contatta il canale di supporto del corso.

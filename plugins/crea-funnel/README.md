# Crea funnel

Skill di Copynerd per Claude Code, da avviare con **`/crea-funnel`**. Accompagna un copywriter dal copy già scritto alle pagine web pubblicate su Cloudflare o al codice da incollare in un editor come Elementor.

## Installazione

Incolla questa richiesta in Claude Code:

> Installa o aggiorna la skill personale Crea funnel seguendo https://raw.githubusercontent.com/copynerdai/copy-genius-certificlaude/main/INSTALLA-CREA-FUNNEL.md. Voglio avviarla con /crea-funnel. Conserva eventuali copie precedenti e non modificare i materiali di Copy Genius.

Riavvia Claude Code e avvia:

```
/crea-funnel
```

Per gli aggiornamenti usa lo stesso messaggio, non `/plugin update`. Installazione e aggiornamento non richiedono account GitHub, Git o chiavi API. Gli strumenti richiedono Node.js 22 o successiva.

La [guida all'installazione](../../INSTALLA-CREA-FUNNEL.md) spiega anche il passaggio dalla precedente versione marketplace e il recupero delle copie precedenti. La skill viene copiata integralmente nelle skill personali di Claude Code, senza il manifest del plugin: per questo il comando non ha prefissi o due punti. La funzione resta la stessa, disponibile nei progetti locali di quel computer.

## Documentazione

- [Guida per gli studenti](skills/crea-funnel/LEGGIMI.md): requisiti, primo avvio e destinazioni.
- [Skill completa](skills/crea-funnel/SKILL.md): percorso operativo in otto passi.
- [Strumenti](skills/crea-funnel/strumenti/LEGGIMI.md): comandi e opzioni.
- [Collaudo e limiti](skills/crea-funnel/test/LEGGIMI.md): test ripetibili senza API reali né pubblicazioni.
- [Licenze](LICENZE.md).

Copy Genius viene cercato in `~/Desktop/copy-genius/` su macOS e Linux, o `%USERPROFILE%\Desktop\copy-genius\` su Windows. I materiali originali si leggono, non si modificano. La skill funziona anche senza Copy Genius, usando i materiali forniti dalla persona.

Il codice per editor è HTML da incollare, non una raccolta di blocchi nativi modificabili con i normali strumenti di testo. L'inserimento nella piattaforma reale richiede un collaudo separato. Le chiavi vanno solo in `segreti.env`, fuori dal progetto e dal repository, mai in chat.

## Manutenzione

La sola copia distribuibile vive in `skills/crea-funnel/`. Il percorso storico `plugins/crea-funnel/` e il plugin rimangono per compatibilità con chi ha installato la versione precedente, ma le nuove installazioni del corso usano `installa.mjs`. Non copiare `.claude-plugin/` nelle skill personali: reintrodurrebbe il comando con prefisso.

Dopo una modifica, esegui `node --test plugins/crea-funnel/test/installazione.test.mjs` dalla radice del repository, i test della skill e `claude plugin validate` per skill, plugin e marketplace. Incrementa `version` in `.claude-plugin/plugin.json` per aggiornare anche le copie legacy; non duplicarla nel marketplace. L'installer diretto identifica la versione tramite il commit GitHub e verifica i file del commit, senza dipendere dalla cache del marketplace.

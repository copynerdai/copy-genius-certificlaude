# Crea funnel

Plugin del marketplace `copynerd`. Accompagna un copywriter dal copy già scritto alle pagine web pubblicate su Cloudflare o al codice da incollare in un editor come Elementor.

## Installazione

In Claude Code, se il marketplace non è già presente:

```
/plugin marketplace add copynerdai/copy-genius-certificlaude
```

Poi:

```
/plugin marketplace update copynerd
/plugin install crea-funnel@copynerd
```

Riavvia Claude Code e avvia:

```
/crea-funnel:crea-funnel
```

Per aggiornare una copia già installata, usa `/plugin marketplace update copynerd` e `/plugin update crea-funnel@copynerd`, poi riavvia Claude Code.

## Documentazione

- [Guida per gli studenti](skills/crea-funnel/LEGGIMI.md): requisiti, primo avvio e destinazioni.
- [Skill completa](skills/crea-funnel/SKILL.md): percorso operativo in otto passi.
- [Strumenti](skills/crea-funnel/strumenti/LEGGIMI.md): comandi e opzioni.
- [Collaudo e limiti](skills/crea-funnel/test/LEGGIMI.md): test ripetibili senza API reali né pubblicazioni.
- [Licenze](LICENZE.md).

Copy Genius viene cercato in `~/Desktop/copy-genius/` su macOS e Linux, o `%USERPROFILE%\Desktop\copy-genius\` su Windows. I materiali originali si leggono, non si modificano. La skill funziona anche senza Copy Genius, usando i materiali forniti dalla persona.

Il codice per editor è HTML da incollare, non una raccolta di blocchi nativi modificabili con i normali strumenti di testo. L'inserimento nella piattaforma reale richiede un collaudo separato. Le chiavi vanno solo in `segreti.env`, fuori dal progetto e dal repository, mai in chat.

## Manutenzione

La skill distribuibile vive in `skills/crea-funnel/`. Dopo una modifica, esegui i test e valida il plugin e il marketplace con `claude plugin validate`. Incrementa `version` in `.claude-plugin/plugin.json` a ogni rilascio, altrimenti le copie già installate possono restare nella cache. Non duplicare la versione nella voce del marketplace.

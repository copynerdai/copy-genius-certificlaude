Avvia una sessione di **Copy Genius** (assistente di copywriting direct-response). Parla in italiano.

Procedi così:

1. **Trova PLUGIN_ROOT.** È la cartella `plugins/copy-genius/` della repo clonata
   `copy-genius-certificlaude` — quella che contiene sia `framework/` sia `commands/`.
   Cercala a partire dalla cartella corrente; se non la trovi, cercala in
   `~/Desktop/copy-genius-certificlaude/` (macOS/Linux) o
   `%USERPROFILE%\Desktop\copy-genius-certificlaude\` (Windows).

2. **Esegui il launcher ufficiale** in `PLUGIN_ROOT/commands/copy-genius.md`.
   Fa tre cose, in ordine: (a) installa/aggiorna il vault in `~/Desktop/copy-genius/`
   con una copia a whitelist che NON sovrascrive mai i dati dell'utente; (b) riporta
   l'esito in una riga; (c) avvia la sessione. È già cross-platform: esegui solo il
   blocco adatto al sistema operativo (PowerShell nativo su Windows). **Ovunque compaia
   `${CLAUDE_PLUGIN_ROOT}`, sostituiscila con PLUGIN_ROOT.**

3. Da quel momento **SEI Copy Genius**, operando dal vault `~/Desktop/copy-genius/`.
   Leggi `~/Desktop/copy-genius/CLAUDE.md` una sola volta e seguilo esattamente
   (incluso il flusso di apertura sessione). Tutte le letture/scritture vanno nel vault,
   mai nei file del framework.

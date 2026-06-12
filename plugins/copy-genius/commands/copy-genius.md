---
description: Activate Copy Genius — a direct-response copywriting assistant. Installs/updates the vault on first run, then starts the session.
allowed-tools: [Bash, Read, Write, Edit, Glob, Grep]
---

# Copy Genius — launcher (install · update · run)

You are launching a Copy Genius session. This command is self-installing and self-updating. Run the three phases below **in order**, then hand off to the orchestrator.

## Key locations

- **Framework source (read-only, lives in the plugin)**: `${CLAUDE_PLUGIN_ROOT}/framework/`
- **Working vault (the student's, lives on their machine)**: `~/Desktop/copy-genius/`
  - macOS/Linux: `$HOME/Desktop/copy-genius`
  - Windows: `%USERPROFILE%\Desktop\copy-genius`

The framework is the part you (the author) ship and update. The vault is where the student works — their brands, swipe, notebook, and feedback accumulate there and must **never** be overwritten by an update.

## Protected user-data (NEVER overwritten on update)

When syncing the framework into an existing vault, these paths are the student's and must be preserved exactly:

- `brands/` — **except** `brands/_template/` (the template DOES update; every other brand folder is sacred)
- `swipe/` — the student's swipe library and element files
- `strategy-notebook.md`
- `raw/`
- `core/feedback-rules.md` — global feedback rules
- `core/writing/banned-phrases-user.md` — personal phrase bans

Everything else under the framework (`CLAUDE.md`, `index.md`, `VERSION`, `core/strategic-frameworks/`, `core/writing/writing-principles.md`, `core/writing/emotional-intelligence.md`, `core/conventions.md`, `skills/`, `format-specialists/`, `section-specialists/`, `brands/_template/`) is framework and is refreshed on update.

---

## Phase 1 — Install or update the vault

Run this. It is idempotent: first run installs; later runs update only the framework, protecting all user data. It never deletes anything the student created.

**macOS / Linux** (Bash):

```bash
SRC="${CLAUDE_PLUGIN_ROOT}/framework"
VAULT="$HOME/Desktop/copy-genius"

if [ ! -f "$VAULT/CLAUDE.md" ]; then
  # FIRST RUN — full install (ships the empty scaffolds for swipe / feedback / notebook)
  mkdir -p "$VAULT"
  rsync -a "$SRC/" "$VAULT/"
  echo "COPYGENIUS_RESULT=INSTALLED version=$(cat "$VAULT/VERSION" 2>/dev/null)"
else
  PLUGIN_V="$(cat "$SRC/VERSION" 2>/dev/null)"
  VAULT_V="$(cat "$VAULT/VERSION" 2>/dev/null)"
  if [ "$PLUGIN_V" != "$VAULT_V" ]; then
    # UPDATE — refresh framework only; protect all user data; never delete
    rsync -a \
      --exclude='swipe/' \
      --exclude='strategy-notebook.md' \
      --exclude='raw/' \
      --exclude='core/feedback-rules.md' \
      --exclude='core/writing/banned-phrases-user.md' \
      "$SRC/" "$VAULT/"
    echo "COPYGENIUS_RESULT=UPDATED from=${VAULT_V:-unknown} to=${PLUGIN_V}"
  else
    echo "COPYGENIUS_RESULT=UPTODATE version=${VAULT_V}"
  fi
fi
```

**Windows**: the Bash tool may not be available. Detect the OS first. On Windows, do the equivalent with PowerShell — vault at `$env:USERPROFILE\Desktop\copy-genius`, source at `$env:CLAUDE_PLUGIN_ROOT\framework`. Use `robocopy` (or `Copy-Item -Recurse -Force`) and apply the **exact same protected-paths list**: on a first run copy everything; on an update copy framework but exclude `swipe`, `strategy-notebook.md`, `raw`, `core\feedback-rules.md`, `core\writing\banned-phrases-user.md`, and never delete. Compare `VERSION` files the same way.

If the rsync exclude semantics are ever in doubt, the rule is simple and absolute: **a protected path that already exists in the vault is never written to.** When unsure whether a path is protected, do not overwrite it.

## Phase 2 — Report the result (one line, in the user's language)

Read the `COPYGENIUS_RESULT=` line from Phase 1:

- `INSTALLED` → "Copy Genius installato in `~/Desktop/copy-genius/`. Pronto."
- `UPDATED from=X to=Y` → "Copy Genius aggiornato (X → Y). I tuoi brand, swipe, note e feedback sono intatti."
- `UPTODATE` → say nothing about it; just proceed.

Keep it to one line. Do not dump the file list.

## Phase 3 — Start the session

Now read `~/Desktop/copy-genius/CLAUDE.md` (the vault copy, **not** the plugin copy). It is your operating manual for the entire session — identity, architecture, routing, language, and session behavior all live there. Read it ONCE now, then follow it exactly, including its session-open flow (§11). Do not re-read it later in the session.

From this point on you ARE Copy Genius, operating out of the vault at `~/Desktop/copy-genius/`. All reads and writes during the session target the vault, never the plugin framework source.

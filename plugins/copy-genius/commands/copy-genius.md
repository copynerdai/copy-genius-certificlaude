---
description: Activate Copy Genius — a direct-response copywriting assistant. Installs/updates the vault on first run, then starts the session.
allowed-tools: [Bash, Read, Write, Edit, Glob, Grep]
---

# Copy Genius — launcher (install · update · run)

You are launching a Copy Genius session. This command is self-installing and self-updating, **cross-platform (macOS / Linux / Windows)**. Run the three phases below **in order**, then hand off to the orchestrator.

## Key locations

- **Framework source (read-only, lives in the plugin)**: `${CLAUDE_PLUGIN_ROOT}/framework/`
- **Working vault (the student's, lives on their machine)**: the `copy-genius` folder on their Desktop.
  - macOS/Linux: `$HOME/Desktop/copy-genius`
  - Windows: `%USERPROFILE%\Desktop\copy-genius`

The framework is what the author ships and updates. The vault is where the student works — their brands, swipe, notebook, and feedback accumulate there and must **never** be overwritten by an update.

## The invariant (read this — it governs everything below)

Copy Genius is installed by a **whitelist copy**: the install copies ONLY the known framework paths into the vault. It never copies over — and therefore never touches — the student's data. This is safer than an exclude list: a path that isn't in the framework whitelist is, by definition, left exactly as the student left it.

**FRAMEWORK paths** (copied on install AND refreshed on every update):
`CLAUDE.md`, `index.md`, `VERSION`, `core/conventions.md`, `core/strategic-frameworks/` (all), `core/writing/writing-principles.md`, `core/writing/emotional-intelligence.md`, `skills/` (all), `format-specialists/` (all), `section-specialists/` (all), `brands/_template/` (all).

**USER-DATA paths** (seeded once on first install, then NEVER overwritten):
`brands/` (every brand folder except `_template/`), `swipe/`, `strategy-notebook.md`, `raw/`, `core/feedback-rules.md`, `core/writing/banned-phrases-user.md`.

Two files inside those paths are framework rules that must reach an already-installed vault: `core/writing/banned-phrases-user.md` and `swipe/full-text-rules.md`. They are seeded when MISSING (never overwritten if present) — see the update block below.

---

## Phase 1 — Install or update the vault

**First, detect the operating system.** Then run the matching block below — run ONE block, not both. Both implement the exact same whitelist logic; they differ only in shell. Both are idempotent: first run installs (framework + empty user scaffolds); later runs refresh only the framework and leave all user data untouched; same version = no-op.

### macOS / Linux (and Git Bash on Windows) — POSIX shell

```bash
SRC="${CLAUDE_PLUGIN_ROOT}/framework"
VAULT="$HOME/Desktop/copy-genius"

copy_framework() {
  mkdir -p "$VAULT/core/strategic-frameworks" "$VAULT/core/writing" "$VAULT/skills" \
           "$VAULT/format-specialists" "$VAULT/section-specialists" "$VAULT/brands/_template"
  cp -f  "$SRC/CLAUDE.md" "$SRC/index.md" "$SRC/VERSION" "$VAULT/"
  cp -f  "$SRC/core/conventions.md" "$VAULT/core/"
  cp -Rf "$SRC/core/strategic-frameworks/." "$VAULT/core/strategic-frameworks/"
  cp -f  "$SRC/core/writing/writing-principles.md" "$SRC/core/writing/emotional-intelligence.md" "$VAULT/core/writing/"
  cp -Rf "$SRC/skills/." "$VAULT/skills/"
  cp -Rf "$SRC/format-specialists/." "$VAULT/format-specialists/"
  cp -Rf "$SRC/section-specialists/." "$VAULT/section-specialists/"
  cp -Rf "$SRC/brands/_template/." "$VAULT/brands/_template/"
}
seed_userdata() {   # first install only — never overwrites an existing file
  mkdir -p "$VAULT/raw" "$VAULT/swipe" "$VAULT/core/writing"
  cp -Rf "$SRC/swipe/." "$VAULT/swipe/"
  cp -f  "$SRC/strategy-notebook.md" "$VAULT/"
  cp -Rf "$SRC/raw/." "$VAULT/raw/"
  cp -f  "$SRC/core/feedback-rules.md" "$VAULT/core/"
  cp -f  "$SRC/core/writing/banned-phrases-user.md" "$VAULT/core/writing/"
}

if [ ! -f "$VAULT/CLAUDE.md" ]; then
  mkdir -p "$VAULT"; copy_framework; seed_userdata
  echo "COPYGENIUS_RESULT=INSTALLED version=$(cat "$VAULT/VERSION" 2>/dev/null)"
else
  PLUGIN_V="$(cat "$SRC/VERSION" 2>/dev/null)"; VAULT_V="$(cat "$VAULT/VERSION" 2>/dev/null)"
  # seed any user-data file that is MISSING (older vault) without overwriting existing ones
  [ -f "$VAULT/core/feedback-rules.md" ]            || cp -f "$SRC/core/feedback-rules.md" "$VAULT/core/"
  [ -f "$VAULT/core/writing/banned-phrases-user.md" ] || { mkdir -p "$VAULT/core/writing"; cp -f "$SRC/core/writing/banned-phrases-user.md" "$VAULT/core/writing/"; }
  [ -f "$VAULT/swipe/full-text-rules.md" ]           || { mkdir -p "$VAULT/swipe"; cp -f "$SRC/swipe/full-text-rules.md" "$VAULT/swipe/"; }
  if [ "$PLUGIN_V" != "$VAULT_V" ]; then
    copy_framework
    echo "COPYGENIUS_RESULT=UPDATED from=${VAULT_V:-unknown} to=${PLUGIN_V}"
  else
    echo "COPYGENIUS_RESULT=UPTODATE version=${VAULT_V}"
  fi
fi
```

### Windows (native PowerShell)

```powershell
$SRC   = "$env:CLAUDE_PLUGIN_ROOT\framework"
$VAULT = "$env:USERPROFILE\Desktop\copy-genius"

function Copy-Framework {
  New-Item -ItemType Directory -Force -Path "$VAULT\core\strategic-frameworks","$VAULT\core\writing","$VAULT\skills","$VAULT\format-specialists","$VAULT\section-specialists","$VAULT\brands\_template" | Out-Null
  Copy-Item -Force "$SRC\CLAUDE.md","$SRC\index.md","$SRC\VERSION" "$VAULT\"
  Copy-Item -Force "$SRC\core\conventions.md" "$VAULT\core\"
  Copy-Item -Recurse -Force "$SRC\core\strategic-frameworks\*" "$VAULT\core\strategic-frameworks\"
  Copy-Item -Force "$SRC\core\writing\writing-principles.md","$SRC\core\writing\emotional-intelligence.md" "$VAULT\core\writing\"
  Copy-Item -Recurse -Force "$SRC\skills\*" "$VAULT\skills\"
  Copy-Item -Recurse -Force "$SRC\format-specialists\*" "$VAULT\format-specialists\"
  Copy-Item -Recurse -Force "$SRC\section-specialists\*" "$VAULT\section-specialists\"
  Copy-Item -Recurse -Force "$SRC\brands\_template\*" "$VAULT\brands\_template\"
}
function Seed-Userdata {   # first install only
  New-Item -ItemType Directory -Force -Path "$VAULT\raw","$VAULT\swipe","$VAULT\core\writing" | Out-Null
  Copy-Item -Recurse -Force "$SRC\swipe\*" "$VAULT\swipe\"
  Copy-Item -Force "$SRC\strategy-notebook.md" "$VAULT\"
  Copy-Item -Recurse -Force "$SRC\raw\*" "$VAULT\raw\"
  Copy-Item -Force "$SRC\core\feedback-rules.md" "$VAULT\core\"
  Copy-Item -Force "$SRC\core\writing\banned-phrases-user.md" "$VAULT\core\writing\"
}

if (-not (Test-Path "$VAULT\CLAUDE.md")) {
  New-Item -ItemType Directory -Force -Path $VAULT | Out-Null
  Copy-Framework; Seed-Userdata
  "COPYGENIUS_RESULT=INSTALLED version=$(Get-Content "$VAULT\VERSION")"
} else {
  $PLUGIN_V = Get-Content "$SRC\VERSION" -ErrorAction SilentlyContinue
  $VAULT_V  = Get-Content "$VAULT\VERSION" -ErrorAction SilentlyContinue
  if (-not (Test-Path "$VAULT\core\feedback-rules.md"))            { Copy-Item -Force "$SRC\core\feedback-rules.md" "$VAULT\core\" }
  if (-not (Test-Path "$VAULT\core\writing\banned-phrases-user.md")) { New-Item -ItemType Directory -Force -Path "$VAULT\core\writing" | Out-Null; Copy-Item -Force "$SRC\core\writing\banned-phrases-user.md" "$VAULT\core\writing\" }
  if (-not (Test-Path "$VAULT\swipe\full-text-rules.md"))            { New-Item -ItemType Directory -Force -Path "$VAULT\swipe" | Out-Null; Copy-Item -Force "$SRC\swipe\full-text-rules.md" "$VAULT\swipe\" }
  if ($PLUGIN_V -ne $VAULT_V) { Copy-Framework; "COPYGENIUS_RESULT=UPDATED from=$VAULT_V to=$PLUGIN_V" }
  else { "COPYGENIUS_RESULT=UPTODATE version=$VAULT_V" }
}
```

**If neither block fits the environment** (unknown shell): apply the invariant by hand — copy ONLY the FRAMEWORK paths listed above from `${CLAUDE_PLUGIN_ROOT}/framework/` into the vault; on a first run also copy the USER-DATA scaffolds; on an update never write to a USER-DATA path that already exists. Compare the two `VERSION` files to decide install vs update vs no-op.

## Phase 2 — Report the result (one line, in the user's language)

Read the `COPYGENIUS_RESULT=` line:

- `INSTALLED` → "Copy Genius installato in `~/Desktop/copy-genius/`. Pronto."
- `UPDATED from=X to=Y` → "Copy Genius aggiornato (X → Y). I tuoi brand, swipe, note e feedback sono intatti."
- `UPTODATE` → say nothing about it; just proceed.

Keep it to one line. Do not dump the file list.

## Phase 3 — Start the session

Now read `~/Desktop/copy-genius/CLAUDE.md` (the vault copy, **not** the plugin copy). It is your operating manual for the entire session — identity, architecture, routing, language, and session behavior all live there. Read it ONCE now, then follow it exactly, including its session-open flow (§11). Do not re-read it later in the session.

From this point on you ARE Copy Genius, operating out of the vault at `~/Desktop/copy-genius/`. All reads and writes during the session target the vault, never the plugin framework source.

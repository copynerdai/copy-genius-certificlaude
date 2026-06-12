# Wiki Health Check

> On-demand diagnostic skill. Scans the entire Copy Genius for structural issues and produces a report. Runs only when explicitly invoked. Never asks the user questions during the scan. Never modifies files. Output is a report; any fixes happen in a separate, explicit interaction.

---

## When invoked

Trigger phrases:
- "fai un health check della wiki"
- "wiki health check"
- "controlla l'integrità della wiki"
- "scan the wiki"

The orchestrator ([CLAUDE](../CLAUDE.md)) routes to this skill on these phrases and only on these. No automatic triggers. No background runs. No scheduled execution.

---

## What it checks

### 1. Broken cross-references

Scans every `.md` file for markdown links pointing to other files in the wiki. For each link `[text](path)`, verifies:
- The path resolves to an existing file
- If the path contains a `#section` anchor, the anchor exists in the target file

Output: list of broken links with source file, line number, and broken target.

### 2. Orphan files

Identifies `.md` files in the wiki that are never linked from any other file (excluding the entry points, which are reached directly rather than via links: `CLAUDE.md`, `index.md`, `SETUP.md`, `swipe/index.md`, `swipe/_template-entry.md`, `swipe/full-text/README.md`, `swipe/elements/*.md`, `swipe-file.md` (redirect stub), `strategy-notebook.md`, `raw/README.md`, `brands/*/funnel-briefs/README.md`, `brands/*/research/README.md`).

Output: list of orphan files with their location.

### 3. Specialist registry consistency

The admitted registry states are **`Active | Placeholder`** (CLAUDE.md §3). Cross-checks the Skill Registry table in `CLAUDE.md` §3 against actual files in `skills/`, `format-specialists/`, and `section-specialists/`, plus the other surfaces that mirror skill status. Three checks:

1. **Active without file** — a skill marked Active in §3 whose file does not exist on disk, or is a stub (less than 50 lines — too short to hold a real operational protocol)
2. **Placeholder with file** — a skill marked Placeholder in §3 whose file EXISTS on disk → candidate for promotion to Active
3. **Status drift across surfaces** — the same skill reported with different status/existence between CLAUDE.md §3 (registry), CLAUDE.md §5 (intent table), and `index.md`. Also flags files present on disk but missing from the registry entirely.

Output: list of inconsistencies with recommended status change or surface to realign.

### 4. Brand file completeness

**The canon IS the template folder** (`brands/_template/`) — keep this check in sync with it: whatever files/folders the template contains define what every brand must have. Current canon:

- `brand.md`
- `brand-copy-rules.md`
- `offers.md`
- `products.md`
- `swipe.md`
- `testimonials.md`
- `avatars/` (directory, with at least one `.md` file inside)
- `competitors/` (directory)
- `transcripts/` (directory)
- `funnel-briefs/` (directory, with its `README.md` index)
- `research/` (directory, with its `README.md` index)
- `procedures/` (directory)

Files present but empty (less than 100 bytes — under any plausible populated frontmatter + heading, so effectively contentless) are flagged separately from files missing entirely.

Output: per-brand status with missing or empty files.

### 5. Cross-specialist drift detection (best effort)

Scans for terminology inconsistencies across specialists. **Declared best effort**: grep-driven candidates, not proofs. Concrete patterns to run:

1. **Numbered-framework counts**: `grep -rE '[0-9]+ (point|step|ring|block|movement|level|technique)s? of'` across `core/`, `skills/`, `format-specialists/`, `section-specialists/` — then compare the numbers between files citing the SAME framework (e.g., "6 points of perfect guarantee" in one file vs "7 points" in another)
2. **Concept-name casing/spelling variants**: case-insensitive grep for known canonical concept names (e.g., `grep -ri 'chiusura divina'`) and diff the exact spellings found (e.g., "Chiusura Divina" vs "chiusura divina" vs "Divine Close")
3. **Mandatory/optional contradictions**: `grep -rE '(is (mandatory|optional|required)|never optional)'` and compare claims about the same element across files (exact-phrase matching only — obvious cases)
4. **Count claims vs reality**: where a file claims "N patterns / N types / N openings" about another file's content, count the actual items in the target file and compare

Output: list of suspected drifts with source files. This check is conservative; false positives are possible. Treat output as candidates for review, not definite errors.

### 6. Banned phrases scan (cross-check with writing-principles)

Scans the wiki itself (excluding the writing-principles file where the bans are documented) for any phrase listed in the Banned AI-tell phrases table of `core/writing/writing-principles.md`. If a banned phrase is found inside specialist or core content (where it would leak into delivered copy), it gets flagged.

Note: this check fires on the wiki's INTERNAL content, not on the markdown headers (which use em-dash by convention as documented in `writing-principles.md` §B.1).

Output: list of banned phrases found in wiki content, with file and line.

### 7. Stale markers & removed-file mentions

Scans the wiki for leftovers of past system states that mislead routing or imply files that no longer exist (or never did):

- **Stale status markers outside the CLAUDE.md §3 registry**: `(future)`, `(when built)`, `(placeholder)` — the registry is the only legitimate place for status; anywhere else they contradict it
- **Retired operating-model terminology**: `sub-agent`, `multi-agent` — the system runs as a single orchestrator reading skill files inline
- **Links or mentions of files known to be removed / never created**: `social-specialist`, `vsl-short-specialist`, `vsl-medium-specialist`, `vsl-long-specialist`, `vsl-3-7min-specialist`, `sophistication.md`, `log.md`, `newsjacking-pool.md`. Keep this list in sync as files are removed or renamed.

Exclusions: this check skips lines that legitimately DOCUMENT the markers (e.g., this file's own list, CLAUDE.md §12 update protocol).

Output: list of stale markers and removed-file mentions, with file and line.

### 8. Swipe library integrity

Verifies the swipe library's machine-readable counts and provenance pointers:

1. **Count consistency** — the `pieces:` frontmatter count of `swipe/index.md` matches the actual rows in its Pieces table; the `entries:` frontmatter count of each `swipe/elements/*.md` library matches the actual element rows in the file (and the per-library counts shown in the index's Element libraries table)
2. **Provenance resolution** — every `from: <slug>` in the element libraries resolves to an existing entry `swipe/<slug>.md`; every index row's slug resolves to an entry file (and, where present, to `swipe/full-text/<slug>.md`)

Output: list of count mismatches and dangling `from:` / slug references, with file and line.

---

## What it does NOT check

- Code quality, syntax, typos, grammar within prose
- Stylistic preferences inside specialist files
- The correctness of strategic content (whether a framework is right — that's a content judgment, not a structural one)
- Brand-specific copy quality (that's the writing specialist's job, not health check)
- Whether the writing-principles file itself uses banned phrases in its examples (it does, by design — they're illustrating what to avoid)

---

## What it does NOT do

- Never asks the user questions during execution
- Never modifies any file
- Never suggests rewrites for content (only flags structural issues)
- Never runs automatically — only on explicit user request
- Never sends notifications — output is the chat response only

---

## Output format

```
WIKI HEALTH CHECK REPORT
========================

Scan completed: [timestamp]
Files scanned: [N]

─── Section 1: Broken cross-references ───
[N issues found]
  - [source file]:[line] → [broken target]
  - ...

─── Section 2: Orphan files ───
[N orphans found]
  - [orphan file path]
  - ...

─── Section 3: Specialist registry consistency ───
[N issues found]
  - [issue description]
  - ...

─── Section 4: Brand file completeness ───
[per-brand]
  brands/<brand>/
    Missing files: [list or "none"]
    Empty files:   [list or "none"]

─── Section 5: Cross-specialist drift (candidates for review) ───
[N candidates]
  - [drift description with source files]
  - ...

─── Section 6: Banned phrases in wiki content ───
[N occurrences]
  - [file]:[line]: "[phrase found]"
  - ...

─── Section 7: Stale markers & removed-file mentions ───
[N occurrences]
  - [file]:[line]: "[marker or removed-file mention]"
  - ...

─── Section 8: Swipe library integrity ───
[N issues found]
  - [count mismatch or dangling reference, with file and line]
  - ...

─── Summary ───
Critical issues:    [count of broken links + missing brand files]
Maintenance items:  [count of orphans + drift candidates + stale markers + swipe integrity issues]
Stylistic items:    [count of banned phrases]
```

---

## After the report

The user reads the report and decides what to act on. If the user wants fixes:

- For broken links: user says "fix the broken links" → the orchestrator routes to the appropriate path (this skill does not fix; it only reports)
- For registry inconsistencies: user says "update the registry" → handled by editing CLAUDE.md directly
- For drift candidates: user reviews each one and decides — drifts are often false positives that don't need fixing

This skill never volunteers fixes. Reports only.

---

## Implementation notes for the orchestrator

When this skill is invoked, the orchestrator executes the 8 checks in order using Bash + Grep + Read tools. The work is read-only across the entire wiki tree.

Estimated execution time: 10-30 seconds depending on wiki size. Current wiki (~86 files): under 15 seconds.

The orchestrator should report progress only at the end (the final report), not section-by-section while scanning. Mid-scan progress messages create noise without value.

---

## Cross-references

- [CLAUDE](../CLAUDE.md) — orchestrator; routes to this skill on trigger phrases
- [writing-principles](../core/writing/writing-principles.md) — source for the banned phrases list used in Section 6

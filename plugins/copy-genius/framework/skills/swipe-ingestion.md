# Swipe Ingestion — Skill

> Analyzes a proven piece of copy and turns it into a swipe entry: CARD + segmented SKELETON + element extraction + index row. Pays the distillation cost ONCE at ingestion so writing sessions never re-interpret raw pieces.
>
> **Consumer contract**
> Invoked by: the orchestrator on intent match (see §2). Inputs: a piece (pasted text, file in `/raw/`, or URL) + whatever provenance the copywriter knows.
> Output: one entry in `swipe/<formato>/<slug>.md` + full text in `swipe/<formato>/full-text/<slug>.md` + rows appended to the element libraries + one row in [swipe-index](../swipe/index.md).
> **Copywriter-led: nothing is saved without explicit approval of the draft entry.**

---

## 0. Execution path — read this first

> **Per piece**: §3 pre-analysis → §4 strategic analysis → §5 skeleton → §6 element extraction → §7 draft + approval → §8 save + compile.
> **Batch mode** (multiple pieces in one session): run §3-§7 per piece, collect approvals, then §8 once.
> **Hard rules**: never save without approval · never translate verbatim · never quote `lang: en` phrasing inside a skeleton · emotion is recorded as-used, never as identity.

## 1. What this skill is NOT

- NOT automatic curation — the copywriter's judgment of "proven" is the value; this skill does the analytical labor.
- NOT a style judge — it records why a piece worked, it does not grade it.
- NOT a translator — verbatim elements stay in their original language, always.

## 2. When invoked

Trigger phrases: "aggiungi questo allo swipe", "ingerisci questo pezzo", "analizza questo pezzo per lo swipe", "add this to the swipe file", "build the swipe entry for X", or any piece dropped in `/raw/` that the copywriter routes to the swipe.

**Batch intake — "ingerisci swipe" / "processa la inbox"**: when the copywriter has parked several pieces at once (typically saved web clips dropped in `/raw/`), run §3-§7 on each piece, then §8, then move each processed source out of the parking area. Files are read directly (HTML → strip tags for full verbatim) — never via the lossy URL fetch.

## 3. Pre-analysis (mechanical)

1. Identify: format, language, market/niche, length (word count or duration).
2. Ask the copywriter ONLY for what can't be inferred — typically `evidence` ("why does this count as proven?") and `source`. One question, not an interview.
3. Propose the slug (kebab-case, per CLAUDE.md §14).

## 4. Strategic analysis (the frameworks as grid)

Read the piece against the core frameworks — pre-reads, only the sections needed:

| Question | Framework |
|---|---|
| Which awareness level does it open on, and does it move the reader up? | [awareness-levels](../core/strategic-frameworks/awareness-levels.md) |
| Sophistication stage of the market it addressed | [unique-mechanism](../core/strategic-frameworks/unique-mechanism.md) §2 |

**Classification is BINDING to the framework's operational criteria — not to impressions:**

- **Awareness is set by the OPENING, not by the body's argumentation.** Apply the per-level blueprints of [awareness-levels](../core/strategic-frameworks/awareness-levels.md) (the "headline DOES / DOES NOT" tables and Absolute rules): if the hero/headline names the product, the piece targets Product Aware (or Most Aware when it leads with the deal/price); a body that re-installs lower-level beliefs for colder traffic is a NOTE on the entry, not the classification.
- **Sophistication** per the stage criteria in unique-mechanism §2 (claim escalation, mechanism, identity) — cite which signal drove the call.
- Run this verification BEFORE presenting the draft (§7); state in the draft which framework rule produced each call, so the copywriter can audit it.
| What desire does it channel? | [mass-desire](../core/strategic-frameworks/mass-desire.md) |
| Is there a Big Idea? A named mechanism? | [big-idea](../core/strategic-frameworks/big-idea.md), [unique-mechanism](../core/strategic-frameworks/unique-mechanism.md) |
| Which beliefs does it install, in what order? | [chain-of-beliefs](../core/strategic-frameworks/chain-of-beliefs.md) |
| Dominant persuasion levers | [persuasion-techniques](../core/strategic-frameworks/persuasion-techniques.md) |

Output of this step: the frontmatter fields + the raw material for the CARD ("why it worked" must name the strategic bet, not vibes).

## 5. Skeleton (the asset)

1. Segment the piece on the **canonical section taxonomy**: `[HOOK] [HEADLINE] [LEAD] [THESIS] [PROOF] [BULLETS] [OFFER] [FAQ] [CLOSE]`. Omit sections the piece doesn't have; never invent them. **Segmentation is FUNCTIONAL, not positional** — the first line of a page is NOT automatically a [HOOK]. A hook must have standalone stopping power on a COLD reader (open loop, curiosity gap, emotional jolt that works on someone who doesn't know the product). An offer banner / scarcity line / deal announcement opening a product- or most-aware page is a **pre-headline** → part of [HEADLINE] (pre-head + H1 + sub, per the headline-specialist's block definition). Many offer-led pages legitimately have NO [HOOK] segment. These labels match the section-specialists 1:1 — that is what makes cross-format retrieval and composition work.
2. Within each segment, write the beat map: **one line per beat — function + device + belief it installs.**
3. **Calibration rule: explain only what the example doesn't show by itself.** No essays, no admiration, no per-sentence commentary. A typical skeleton is 30-60 lines total.
4. **Language rule**:
   - `lang` ≠ curator's language (e.g. EN pieces): descriptive paraphrase only — ZERO verbatim phrasing in the skeleton.
   - `lang` = curator's language (e.g. IT pieces): short verbatim excerpts allowed where the phrasing itself is the lesson.
5. Per-segment header carries the searchable tags: type, emotion-as-used, register notes.

## 6. Element extraction (entry = canonical, libraries = compiled)

> **Two-place rule (mandatory).** Extracted elements are written FIRST into the entry's `## Elementi estratti` section (the canonical source, so a human reading the piece sees everything harvested from it), THEN appended to the matching `elements/*.md` libraries with `from: <slug>` (the compiled cross-piece read surface). The libraries' "source of truth = the entry" — never extract to the libraries alone. An entry with zero extracted elements is a red flag: re-scan before finalizing — every proven piece has at least its opening line and 1-2 standout bullets/CTAs worth keeping.

For each hook, headline, standout bullet, CTA/P.S. worth keeping:

```
◦ "<verbatim, original language>"
  TEMPLATE: [component] + [component] + ...
  <type> · emotion-as-used: <X> · awareness: <Y> · lang: <Z> · from: <slug>
```

- The TEMPLATE line is the asset: bracketed components in the curator's language. Example: *"Dimagrisci 5 kg in 7 giorni con la dieta della caffeina"* → `TEMPLATE: [promessa quantificata + tempo] con [meccanismo nominato]`.
- **Emotion is recorded as-used and is swappable by design** — the template must read as emotion-agnostic.
- Verbatim is ALWAYS kept (even for EN pieces — the libraries are the one place verbatim EN lives outside full-text, because a 1-line hook with its template is study material, not register contamination at scale). The cross-language rule still applies at writing time: generate natively from the TEMPLATE.
- **Classify by FUNCTION, using the owning specialist's definition — never by position.** Hooks library admission test: "would this line stop a cold scroller who doesn't know the product?" If it only works on pre-framed traffic, it's a pre-headline → headlines library. When a classification is uncertain, flag it explicitly in the draft (§7) instead of guessing — the copywriter decides.
- Extract selectively: 1-5 elements per piece, not everything. The libraries' power is that they stay readable in full.
- **The library list is extensible.** If an element worth keeping fits no existing library, propose creating a new one — criterion: (a) short enough to read in bulk, (b) recurrent across pieces, (c) has a defined consumer in the system. The copywriter approves the new library before it's created (then: add it to the index table and wire a Swipe line into the consuming specialist).
- **What is NOT an element**: leads, marketing argumentations/thesis, proof sequences, full offer blocks, FAQ — anything long lives as a SKELETON segment ([LEAD] [THESIS] [PROOF] [OFFER] [FAQ]), retrieved via the index, never bulk-read.
- Email subject lines are hooks (hook-specialist taxonomy) → hooks library with `usage: subject-line`.

## 7. Draft + approval (gate — do not skip)

Present to the copywriter in one message: frontmatter + CARD + SKELETON + extracted elements + the index row. Ask for corrections. **Only on explicit approval proceed to §8.** If the copywriter rejects the analysis (wrong awareness call, wrong beat reading), fix and re-present — their reading wins.

### Seam check (used at composition time, documented here)

When a piece plan composes segments from DIFFERENT entries (lead from A, thesis from B, offer from C), verify and surface:
1. **Awareness consistency** — segments built for different awareness levels don't cut together silently.
2. **Emotional arc continuity** — the exit emotion of one segment must be a plausible entry for the next.
3. **Proportion** — segment lengths must fit the target format's structure plan.
Flag mismatches to the copywriter; never auto-resolve.

## 8. Save + compile

1. Write `swipe/<formato>/<slug>.md` — the entry, INCLUDING its `## Elementi estratti` section (canonical, per §6) (format: [_template-entry](../swipe/_template-entry.md)). `<formato>` = the captured channel folder (landing-page / vsl / email / ads / advertorial / upsell / blog / book); create it if missing. Extra formats the piece serves → `also-formats:` frontmatter + index `format` column.
2. Write `swipe/<formato>/full-text/<slug>.md` (original text as-is; 3-line header + link back). Create the `full-text/` subfolder if missing.
3. Compile the entry's elements into the matching `swipe/elements/*.md` libraries (flat, cross-piece): append each `◦` with `from: <slug>`; bump their `entries` count. The entry is the source — never write to a library an element the entry doesn't carry.
4. Add the row to [swipe-index](../swipe/index.md) Pieces table (slug link = `<formato>/<slug>.md`); bump `pieces` count and library counts.
5. Keep the original source file (`.html` for web clips, `.pdf` for PDF/scan sources) wherever you archive heavy originals, under the same `<formato>/<slug>` map — so the renderable page stays openable next to its entry. Optional: skip if you only keep the extracted text.
6. Confirm to the copywriter: slug + what was extracted where.

### 8b. Naming invariant — ONE slug, identical everywhere (mandatory)

The slug chosen in §3 is the single canonical identifier and **must be byte-for-byte identical everywhere it appears**, so the original piece is always retrievable by name:

1. **Entry + full-text**: `swipe/<formato>/<slug>.md` and `swipe/<formato>/full-text/<slug>.md`.
2. **Element library references**: every `from: <slug>` line.
3. **Index row**: the slug in the [swipe-index](../swipe/index.md) Pieces table.
4. **Archived original** (if you keep one): named `<slug>.<ext>` — never the messy original download name (`EugeneScwhartzad87.pdf`).

Rules:
- **One entry per piece, 1:1.** Never leave a stored original under its raw filename; rename it to `<slug>.<ext>` when you file it.
- **Alternate scans / variant captures** of an already-ingested piece (different publisher/scan, no separate entry) do not get their own entry — keep them beside the original, clearly marked as variants.
- **When a slug is renamed or an entry is merged/dropped**, update every place from the list above in the same pass — the slug never drifts between them.
- **Verification** (after a batch or on demand): diff the `<formato>/*.md` slugs against the index rows and the `from:` references in the element libraries — the sets must agree, with no duplicates. Fix any divergence immediately.

## 9. Cross-references

- [swipe-index](../swipe/index.md) — the retrieval surface this skill feeds
- [_template-entry](../swipe/_template-entry.md) — canonical entry format
- [full-text-rules](../swipe/full-text-rules.md) — language firewall rules
- CLAUDE.md §10 Mode 1 — the Structure selection step that consumes the index
- [writing-principles](../core/writing/writing-principles.md) — Fase 4 calque scan (cross-language enforcement)

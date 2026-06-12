---
type: swipe-index
last_updated: 2026-06-11
pieces: 0
---

# Swipe Index — retrieval surface

> **Consumer contract**
> Read by: the orchestrator and format specialists at the **Structure selection** step of Mode 1 (CLAUDE.md §10), and by section specialists hunting cross-format segments.
> This index is the ONLY file you scan in full. From here: shortlist 3-5 slugs → read their CARD (top of each entry) → read the SKELETON of the 1-3 finalists. Never bulk-read entries.
> Element libraries (hooks, headlines, bullets, CTAs) are the exception: they are short-format and designed to be read IN FULL before writing — see [elements](elements/hooks.md).
> Full texts live in `swipe/full-text/` — consult on demand for structural study; **structure crosses languages, phrasing never** (see the README there).

## How a chosen skeleton is adapted (after the copywriter picks)

The brief is the master, the skeleton is the servant. Build the piece plan as a **beat-mapping table**: for each beat of the chosen skeleton (or composition) decide `keep / adapt / replace / drop`, annotating (a) which belief(s) of the brief's chain (§3.8) the beat installs and (b) which proof from the inventory (§3.9) it uses. Two completion rules:

1. **Beats installing beliefs the brief's chain doesn't require → drop** (structure is not sacred).
2. **Beliefs in the chain not covered by any beat → add new beats** (the chain must close even if the swipe didn't need it).

A beat survives as a FUNCTION, not as its original instrument: "borrowed authority via VIP testimonials" becomes "borrowed authority via 50 case studies" if that's what the brand's proof inventory holds. Surface the finished table to the copywriter before drafting starts.

## How to query

- By structure: filter the Pieces table on `awareness` + `format` + `length`.
- By element: go straight to the element libraries (emotion tags are **as-used, swappable** — never filter them out on emotion alone).
- By segment: the `segments` column lists which canonical sections each skeleton contains ([HOOK] [HEADLINE] [LEAD] [THESIS] [PROOF] [BULLETS] [OFFER] [FAQ] [CLOSE]). Composition across pieces is allowed — run the seam check (swipe-ingestion §7) when mixing sources.

## Pieces

| slug | format | lang | market | awareness | soph | length | evidence | segments |
|---|---|---|---|---|---|---|---|---|

## Element libraries

> **This list is EXTENSIBLE, not closed.** A class of elements earns its own library when it meets the criterion: (a) short enough to be read in bulk, (b) recurrent across pieces, (c) has a defined consumer in the system (a specialist + a moment). When swipe-ingestion extracts elements that fit no existing library, it proposes a new one — the copywriter approves. Natural future candidates: guarantee formulas, bonus/mechanism naming patterns, upsell openers.
> **What does NOT become an element library**: anything long (leads, marketing argumentations/thesis, proof sequences, full offer blocks, FAQ) — those live as SKELETON segments ([LEAD] [THESIS] [PROOF] [OFFER] [FAQ]) inside the piece entries, retrieved selectively via the Pieces table. Two channels by design: short = read all; long = retrieve few.

| Library | Entries | Read when |
|---|---|---|
| [hooks](elements/hooks.md) | 0 | Before writing ANY opening (incl. email subject lines — filter `usage:`) — read in full |
| [headlines](elements/headlines.md) | 0 | Before writing headline blocks — read in full |
| [bullets](elements/bullets.md) | 0 | Before writing bullet/fascination blocks — read in full |
| [ctas-and-ps](elements/ctas-and-ps.md) | 0 | Before writing closes, CTAs, P.S. blocks — read in full |

## Cross-references

- [swipe-ingestion](../skills/swipe-ingestion.md) — how pieces get analyzed and added
- [_template-entry](_template-entry.md) — the canonical entry format
- `full-text/` — original pieces, original language (see its README for the language rules)

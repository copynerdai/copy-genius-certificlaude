---
scope: brand
brand: <brand-slug>
last_updated: <YYYY-MM-DD>
---

# COPY RULES — <Brand Name>

> User-accumulated rules from feedback specific to this brand. Read by the orchestrator and writing specialists before writing copy for this brand.
>
> **Brand-specific rules OVERRIDE global rules** (`core/feedback-rules.md`) in case of conflict.
>
> Copy Genius NEVER adds rules autonomously. Only the user can authorize a new rule via commands like:
> - "salva questa regola" / "save this rule"
> - "ricorda questa correzione" / "remember this correction"
> - "salva per questo brand" (forces brand scope)
>
> When Copy Genius is asked to save a rule, it:
> 1. Asks for the scope (brand or global) if not specified
> 2. Checks for similar existing rules → proposes UPDATE instead of duplicating
> 3. Formulates the rule with category + do/don't + why + example
> 4. Shows it for approval → on confirm, appends here + updates the index

---

## Index

> Quick-reference of all rules. Updated whenever a new rule is added.

| # | Category | Summary | Added |
|---|---|---|---|
| 1 | <category> | <one-line summary> | <YYYY-MM-DD> |
| 2 | ... | ... | ... |

---

## Rules

> Suggested categories (free-form — invent new ones if useful): Tone · Vocabulary · CTA · Email · Structure · Formatting · Names · Pacing · Other.

### #1 — <short title>

**Category**: <category>

**Do**: [what to do]
**Don't**: [what to avoid]
**Why**: [context — which feedback originated this rule, or which broader principle it reinforces]
**Example** (optional):
- ❌ Before: "<bad version>"
- ✅ After: "<good version>"
**Added**: <YYYY-MM-DD>

---

### #2 — <short title>

(same structure)

---

## Transcription / Name corrections

> Names or terms that auto-transcription or AI output frequently gets wrong for this brand. Copy Genius silently corrects without asking — these are pure typos to fix, not stylistic choices.

- **<Correct name/term>** — common misspellings: [list]
- **<Correct name/term>** — never write: [list]

---

## Related

- [brand](brand.md) — brand foundation and identity

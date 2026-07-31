---
swipe: <slug>                       # kebab-case, unique
format: <lp | sales-letter | advertorial | vsl-short | vsl-medium | vsl-long | video-ad | static-ad | email | email-sequence | upsell | other>
lang: <it | en | ...>               # language of the ORIGINAL piece
market: <niche / industry>
awareness: <unaware | problem-aware | solution-aware | product-aware | most-aware>
sophistication: <1-5>
length: <word count or duration>
source: <where it ran / author / URL if known>
evidence: "<why it counts as proven — longevity, scale, known results, curator's judgment>"
date_added: <YYYY-MM-DD>
segments: [HOOK, LEAD, THESIS, OFFER]   # which canonical sections the skeleton covers
elements_extracted: <N hooks, N headlines, ...>   # what was sent to the element libraries
---

# <Piece title> — swipe entry

## CARD

> 6-8 lines max. What the piece is, the core persuasive bet, WHY it worked,
> WHEN to reach for this structure — and when not to. This is what gets read
> at shortlist time; make every line earn it.

## SKELETON

> Beat map segmented on the canonical section taxonomy. One line per beat:
> function + device + belief it installs. Calibration rule: **explain only what
> the example doesn't show by itself** — no essays.
> Language rule: descriptive paraphrase in the curator's language. For `lang: en`
> pieces, NO verbatim phrasing here — structure only. For `lang: it` pieces,
> short verbatim excerpts are allowed where the phrasing itself is the lesson.

### [HOOK] — <type> · emotion-as-used: <X> · <one-line note>
1. ...

### [HEADLINE] — <pattern> · <note>
2. ...

### [LEAD] — <strategic lead type> · <length> · <register>
3. ...
4. ...

### [THESIS] — <reveal style> · <mechanism handling>
5. ...

### [PROOF] — <proof mix>
6. ...

### [BULLETS] — <bullet style, if present>
7. ...

### [OFFER] — <offer devices: anchoring, guarantee type, stack, urgency>
8. ...

### [FAQ] — <objection handling, if present>
9. ...

### [CLOSE] — <CTA pattern, P.S. system>
10. ...

## Elementi estratti

> **Fonte canonica degli elementi di questo pezzo.** Da qui si compilano le librerie
> `elements/*.md` (cross-pezzo): ogni `◦` qui sotto va anche appeso alla libreria che lo
> possiede, con `from: <slug>`. Estrazione selettiva 1-5 per tipo (swipe-ingestion §6):
> solo ciò che merita di essere studiato in bulk. Verbatim in lingua originale; il
> TEMPLATE (componenti bracketate, lingua del curatore) è emotion-agnostic. Ometti le
> sezioni vuote.

**Hooks** → [hooks](../elements/hooks.md)
```
◦ "<verbatim>"
  TEMPLATE: [componente] + [componente]
  <hook-type> · usage: <...> · emotion-as-used: <X> · awareness: <Y> · lang: <Z>
```

**Headlines** → [headlines](../elements/headlines.md) · **Bullets** → [bullets](../elements/bullets.md) · **CTA/P.S.** → [ctas-and-ps](../elements/ctas-and-ps.md)
*(stesso formato; ometti i tipi senza elementi)*

## NOTES (optional, 3 lines max)

> Anything load-bearing that doesn't fit a beat: pacing quirks, what you'd
> change, known weaknesses.

## Full text

→ `full-text/<slug>.md` — original language. Structure crosses languages, phrasing never. (Convert to a real link when instantiating the entry.)

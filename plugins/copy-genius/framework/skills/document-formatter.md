---
status: Active
type: skill
applies_to: cross-format
last_updated: 2026-05-24
---

# Document Formatter — Output Formatting Skill

> Applies Copy Genius's formatting standard to any produced copy so the output is paste-ready for a Google Doc (or any external document). Defines a 3-level reading architecture for landing pages, a 2-level architecture for emails, and universal rules for italics, underlines, and clickable-element highlights.

---

## 1. Purpose

Separates **what the copy says** (handled by format specialists + section specialists) from **how the copy is presented on the page** (handled here). When a copywriter asks to export a piece, this skill is invoked to apply the formatting standard before the file lands in Google Docs (or any other deliverable container).

Format specialists produce raw copy in plain Markdown. This skill is the final layer that applies the visual formatting (alignment, centering, font, highlights) on top of it.

---

## 2. When invoked

Invoke this skill when the copywriter says (or equivalent in their language):

- "esporta in google doc" / "metti in documento google" / "create the google doc"
- "esporta questo copy" / "esporta in docx" / "export this"
- "formatta questo" / "applica la formattazione" / "format this"
- "prepara per la consegna" / "ready for delivery"
- After a specialist has produced finished copy and the copywriter wants the deliverable container.

If the copywriter mentions a specific destination (Google Doc, docx, PDF), use that as the target. If unspecified, default to Google Doc.

---

## 3. Universal formatting rules — apply to every format

### Font

- **Family**: Helvetica Neue
- **Body size**: 12pt
- Applied document-wide (single font, single base size; the visual hierarchy comes from style/alignment, not size).

A brand can override any rule in this spec — font, base size, L1 color, highlight color, alignment exceptions — in `brands/<brand>/brand-copy-rules.md`. That file is read at the start of every formatting operation; on conflict, the brand override always wins. **This is the canonical statement of the override rule** — §9 only lists plausible examples.

### Title (always present at the top)

- Plain text indicating what the piece is — e.g., `Email 3 — Workshop SxV+AI` / `Landing page — Workshop SxV+AI` / `Sequence email lancio (5 email) — Workshop SxV+AI`.
- One line, top of the document, before any copy. Not styled as H1 (avoid making it compete with the H2 subheadings in landing pages).

### Italic

- Citations (direct quotes, testimonials, indirect speech).
- Emphasis on a specific word or short phrase (one or two words at a time, not entire sentences).

### Underline

- Used **sparingly** — only for a concept or word the copywriter wants to mark as significant on the page.
- Appears at most a handful of times per piece. If it appears more, downgrade some occurrences to italic or bold.

### Bold

Bold has exactly **two regimes**, one per context. This table is the single source of truth — there is no contradiction between them: the body regime governs prose paragraphs; the bullet regime is the one sanctioned exception, scoped to bullet blocks only.

| Context | Regime |
|---|---|
| **Body prose** | **Whole sentence only, never partial.** Bold a complete sentence (or short standalone phrase) that functions as a subheadline / anchor. Never a partial sentence, never a single word inside a sentence. |
| **Bullets (fascinations)** | **Bold opening claim + non-bold continuation.** The bold covers the entire opening claim phrase of the bullet; the continuation stays regular. This is the only place where bold legitimately covers part of a paragraph. |

Shared guidance:

- Bold-anchor sentences should function as the **argument outline** — reading only the bold sentences should give a clear sense of the discourse's structure. Spread them out so they breathe; don't crowd them together (typically one anchor every 4-6 paragraphs in emails; one L2 every 3-6 paragraphs in landing pages).
- In landing pages: whole-sentence bold + centered = Level 2 mini-subheading (§4).
- In emails (and other left-aligned formats): whole-sentence bold + left-aligned = inline visual anchor — same role as L2 but without centering since emails don't center anything (§5).
- The bold-anchor sentence should typically sit on its own paragraph for visual prominence.
- For partial-word or short-phrase emphasis within a body sentence, use **italic** instead — in body prose, bold is reserved for sentence-level anchors.

### P.S. (post-script)

- Only the literal abbreviation **P.S.** (or **PS**, **P.P.S.**) at the start of the post-script paragraph is **bold**.
- The rest of the post-script sentence is regular body text — never bold.
- The P.S. content itself is plain prose; it does NOT get the "whole-sentence bold" treatment of body anchors.
- Example: **P.S.** La classe è limitata. Se decidi all'ultimo, potresti trovare le porte chiuse.

### Yellow highlight

- **Only** on elements that are clickable, or are placeholders that will become clickable / dynamic in production.
- Examples that get the highlight:
  - The text of a hyperlink (e.g., "scopri qui", "click here", the linked phrase)
  - URLs displayed inline as raw text
  - Personalization placeholders (`{first_name}`, `{first_company}`, `[name]`, `[city]`)
  - Button text if it appears inline (e.g., "Riservami il mio posto")
- **NOT** highlighted:
  - The entire paragraph that contains a CTA
  - Subheadings or section titles (even if the section ends with a CTA)
  - Body sentences leading to a CTA

Rule of thumb: highlight = "the reader's eye should know exactly where to click".

### Paragraph rhythm

> ⚠️ **BLANK LINE BETWEEN EVERY PARAGRAPH — ZERO TOLERANCE, ALL BRANDS, ALL FORMATS.** This is the single most-flagged formatting miss. There must be **one empty paragraph (a blank line) between every paragraph** of the deliverable — email, landing page, advertorial, social post, VSL script, upsell, every format, every brand. Rule of thumb the user states as: *"a blank line every time there's a period / between every block of text."* This is **enforced on the FINAL produced document**, not on the source Markdown/HTML (HTML→Google Doc conversion collapses consecutive `<p>` tags — separate them with an empty paragraph). Verify mechanically before delivery (see §7.5 self-check + the blank-line audit). Enforces global [feedback-rules](core/feedback-rules.md) #3.
>
> **The only sanctioned exceptions** (must be a documented, functional element — never a default): a platform spacer such as the Facebook 4-dots preview-cutoff block (`.` lines kept consecutive), and a section boundary where the next block is a page-break label. Outside those, two adjacent non-blank paragraphs = a defect to fix.

- **Single blank line between every paragraph** (see callout above — zero tolerance).
- No first-line indentation.
- Short paragraphs (1-4 sentences typically).

### Bullet points (fascinations)

Bullets appear in landing pages, advertorials, upsell pages, sales letters, and occasionally in longer emails. Format is the same everywhere.

**Structure**:

- Each bullet sits on its own paragraph, with a single blank line between bullets.
- **No bullet markers** (•, -, *) — the visual rhythm comes from the bold-opening / non-bold-continuation contrast and the blank-line separation.
- Format: `**Bold opening claim:** non-bold continuation that explains, qualifies, or adds detail.`
- Alternative separators between opening and continuation: comma (`**…claim,** continuation`), parens (`**…claim** (continuation)`), or just a space.

**Notes**:

- The **bold opening** is a whole-claim phrase — captures the curiosity hook or the value proposition of the bullet. Per the Bold table above (bullet regime): bold the whole claim phrase, never partial words.
- The **non-bold continuation** explains, qualifies, or adds detail. Can be one sentence or several.
- Bullets typically sit under an L1 (H2 centered) section heading — e.g., "Cosa ricevi iscrivendoti oggi:" / "Tutto ciò che avrai:" / "Il pacchetto completo:".
- Each bullet should be scannable: the reader gets the value just from the bold openings.

**Pattern in practice**:

```
<center>## Cosa ricevi iscrivendoti oggi:</center>

**Accesso alle 5 serate live del workshop in diretta su Zoom** (con date e orari indicati al momento dell'iscrizione).

**Il metodo concreto per acquisire da 3 a 5 clienti ricorrenti da 1.500 a 2.000 euro al mese ciascuno:** in pratica, da 4.500 a 10.000 euro mensili di entrate stabili, senza dover rincorrere ogni mese nuovi lavori spot.

**Il sistema per usare uno strumento AI professionale come motore del tuo lavoro copywriting:** quello che sta sostituendo i tool generici nei team di copywriter che fatturano davvero.

**Il libro cartaceo del workshop spedito direttamente a casa tua:** il complemento del sistema da tenere a portata di mano anche dopo l'evento.
```

---

## 4. Landing page format — 3-level reading

The landing page is structured as a 3-level reading experience. A skimming reader should be able to scan only L1 + L2 and still grasp the argument's skeleton.

| Level | Style | Alignment | Frequency |
|---|---|---|---|
| **L1 — Main subheadings** (skeleton of the argument) | Heading 2 (Google Doc preset H2 — bold by default) | Center | One per macro-section |
| **L2 — Mini-subheadings** (skim anchors between L1 sections) | **Bold** inline text (NOT a heading style) | Center | Every 3-6 paragraphs |
| **L3 — Body text** | Regular body | Left (default) | All other prose |

### Notes

- L1 (H2) is a **narrative phrase**, not a telegraphic title. Full sentence, written in clean prose. Example: *"Il percorso di certificazione che unisce i principi immortali del direct response marketing con la velocità di esecuzione dell'AI."*
- L1 default color: black. A brand can declare an accent color in `brands/<brand>/brand-copy-rules.md` — apply only if declared.
- L2 must be visually distinct from L3 — **bold + centered alignment** is the marker.
- L2 must NEVER be a heading (no H2/H3 — it stays inline body text styled bold and centered). This keeps the document outline clean: only L1 appears in the navigation outline.

### Pattern in practice

```
[L1 — Heading 2 centered]
Il percorso di certificazione che unisce i principi immortali del direct response marketing con la velocità di esecuzione dell'AI.

[L2 — Bold centered]
La storia di Acme Academy inizia più di dieci anni fa, con un piccolo gruppo di persone che si chiamava il "Copy Team"…

[L3 — Body left]
E se stai leggendo questa lettera, è perché [underlined: la stessa strada che hanno percorso loro oggi si apre anche per te].

[L3 — Body left]
All'epoca, il copywriting a risposta diretta in Italia non esisteva.

[L3 — Body left]
[continues…]

[L2 — Bold centered]
Lascia che ti faccia qualche nome, così capisci di chi sto parlando:

[L3 — Body left]
[continues…]
```

---

## 5. Email format — 2-level reading

Emails are conversational. The 3-level reading of landing pages doesn't apply — centered headings break the rhythm of a letter.

| Level | Style | Alignment |
|---|---|---|
| **Body text** | Regular body | Left (default) |
| **Inline emphasis** | **Bold** inline | Left (default) — never centered |

### Notes

- **No H2 in emails.** No centered blocks anywhere.
- Bold is applied to **whole sentences only** (per §3 Bold rule) — functions as a visual anchor inside the email body, like an inline subheadline. Never on partial sentences, never on single words. The bold-anchor sentence should typically sit on its own paragraph.
- **Density**: spread bold anchors out — typically one every 4-6 paragraphs depending on email length. Read together, the bold sentences should form the argument outline of the email. Don't crowd them.
- For word-level emphasis inside a sentence, use *italic*, never bold.
- P.S. format follows §3 P.S. rule — only the "P.S." abbreviation is bold, the rest of the post-script is regular body text.
- Yellow highlights apply per universal rule (§3) — placeholders (`{first_name}`), inline link text, URLs.
- Bullets in emails (rare but possible in longer emails): follow §3 Bullet points (fascinations) rule.

### Pattern in practice

```
Title: Email 3 — Workshop SxV+AI

Subject: Quello che oggi sembra impossibile, domani sarà obbligatorio.

Ciao {first_name},

[Body paragraph…]

**[A whole-sentence bold anchor that functions as an inline subheadline inside the email body.]**

[Inline link example: per i dettagli del workshop, clicca qui.]

[Closing paragraph.]

A presto,
[Nome del frontman]

**P.S.** [Post-script content — only "P.S." is bold; the rest is regular body text.]
```

Yellow highlight applies to `{first_name}` and `clicca qui` (link text). Nothing else.

---

## 6. Other formats — quick rules

| Format | Rule |
|---|---|
| **VSL / video script** | Treat as landing-page text inside the Google Doc — L1/L2/L3 work the same. Add timecode markers if requested. |
| **Advertorial** | Landing page rules (3-level reading). |
| **Blog article** | Landing page rules + H3 for sub-subheadings if the article needs deeper hierarchy. |
| **Static ad copy** | Email rules — no H2. Bold inline for emphasis. |
| **Upsell page** | Landing page rules (3-level reading). |
| **Social post / carousel** | Email rules — no H2. Bold for emphasis only. |
| **Sequence (multiple emails)** | Email rules per piece. Each email starts with its title (`Email N — <piece name>`) on a new page break. |

---

## 7. Output — what this skill produces

When invoked, the skill produces a **paste-ready Markdown document** with the following structure:

1. **Title line** at the top.
2. **Formatted Markdown body** that uses standard Markdown plus explicit inline markers for elements Markdown can't express natively:
   - `<center>...</center>` HTML around L1 and L2 lines (for centering)
   - `<u>...</u>` HTML around underlined elements (Markdown's lack of underline syntax)
   - `<mark>...</mark>` HTML around yellow-highlight elements
   - These HTML tags are preserved when pasted into a Google Doc as "Paste with formatting" or via the Google Docs import-from-HTML path.
3. **Setup checklist** at the bottom — a short numbered list of post-paste verifications.

### Output skeleton — landing page

```
Title: Landing page — Workshop SxV+AI

<center>## Il percorso di certificazione che unisce i principi immortali del direct response marketing con la velocità di esecuzione dell'AI.</center>

<center>**La storia di Acme Academy inizia più di dieci anni fa, con un piccolo gruppo di persone che si chiamava il "Copy Team"…**</center>

E se stai leggendo questa lettera, è perché <u>la stessa strada che hanno percorso loro oggi si apre anche per te</u>.

All'epoca, il copywriting a risposta diretta in Italia non esisteva.

[continues with more body paragraphs…]

<center>**Lascia che ti faccia qualche nome, così capisci di chi sto parlando:**</center>

[continues…]

[Eventually, a CTA:]

<mark>Riservami il mio posto in classe</mark>

---

**Setup checklist for Google Doc**

1. Font: Helvetica Neue, 12pt — applied document-wide
2. H2 lines: verify centered alignment after paste
3. Bold centered paragraphs (L2): verify centered alignment after paste
4. Underlined phrase ("la stessa strada…"): verify underline preserved
5. Yellow highlights: applied to "Riservami il mio posto in classe" only (the clickable link text)
6. Spacing: single blank line between paragraphs
```

### Output skeleton — email

```
Title: Email 3 — Workshop SxV+AI

Subject: Quello che oggi sembra impossibile, domani sarà obbligatorio.

Ciao <mark>{first_name}</mark>,

E se ti dicessi che il copywriting come lo conosciamo oggi sta per diventare un mestiere completamente diverso?

**[A whole-sentence bold anchor that functions as an inline subheadline inside the email body.]**

[Another paragraph.]

Per i dettagli del workshop, <mark>clicca qui</mark>.

A presto,
[Nome del frontman]

**P.S.** La classe è limitata. Se decidi all'ultimo, potresti trovare le porte chiuse.

---

**Setup checklist for Google Doc**

1. Font: Helvetica Neue, 12pt — applied document-wide
2. All text left-aligned (default — no centering anywhere in emails)
3. Bold preserved on whole-sentence anchors (each on its own paragraph)
4. Bold preserved on "P.S." abbreviation only (not the rest of the P.S. sentence)
5. Yellow highlights on {first_name} and "clicca qui"
6. Spacing: single blank line between paragraphs
```

---

## 7.5 Self-check — mandatory before delivering output

Run this binary checklist on the formatted output before handing it over. Any unchecked item → fix before delivery, no exceptions.

- [ ] **No partial-sentence bold in body prose** — every bold in body paragraphs covers a whole sentence / anchor phrase (§3 Bold, body regime)
- [ ] **Bullet bold only on the opening claim** — the continuation of every bullet is non-bold (§3 Bold, bullet regime)
- [ ] **Yellow highlight ONLY on clickable / dynamic elements** — link text, raw URLs, placeholders, inline button text; never paragraphs, headings, or CTA lead-in sentences (§3)
- [ ] **Underline within the limit** — at most a handful of occurrences per piece; excess downgraded to italic or bold (§3)
- [ ] **P.S. bold only on the abbreviation** — "P.S." / "PS" / "P.P.S." bold, the rest of the post-script regular body (§3)
- [ ] **Font and hierarchy conform** — Helvetica Neue 12pt (or brand override per §3) and the correct level architecture for the format per the §6 table (3-level for LP-family, 2-level for email-family)
- [ ] **Blank line between every paragraph — verified on the FINAL document** — a single empty paragraph separates each paragraph (§3 Paragraph rhythm). Zero-tolerance, all formats. Watch HTML→Google Doc conversion: consecutive `<p>` tags collapse together and must be separated by an empty paragraph (`<p>&nbsp;</p>`). Confirm by opening the produced document, not just the source. Enforces global [feedback-rules](core/feedback-rules.md) #3.

---

## 8. Export targets

| Target | Process |
|---|---|
| **Google Doc** | Default. The skill produces the formatted output as above; the actual file creation is the orchestrator's job via the Google Workspace MCP tools available in the session. File creation can proceed without explicit confirmation. Sharing, sending, or deleting a Google document always requires the copywriter's explicit confirmation. Never auto-share. |
| **DOCX** | Defer to the existing `/format-docx` user-level slash command. The spec here is consistent with `/format-docx` (Helvetica Neue, yellow highlights on placeholders, bold/italic/underline preserved) — same look, different output container. |
| **Markdown only** | If the copywriter wants the formatted Markdown without external file creation, output it to chat or save to the brand folder under a descriptive filename. |

---

## 9. Brand-specific overrides

**The canonical override rule lives in §3** (Bold/Font block: `brand-copy-rules.md` read at the start of every formatting operation; brand wins on conflict). This section only lists plausible examples of brand overrides:

- L1 color: an accent color (dark red, navy, brand color)
- Font: a brand-specific serif or sans
- Highlight color: green or orange instead of yellow
- L2 alignment: left instead of centered (rare — kept here for completeness)

---

## 10. Cross-references

- [feedback-rules](core/feedback-rules.md) — global rules that may include formatting-adjacent guidance.
- `brands/<brand>/brand-copy-rules.md` — brand-specific overrides for font, color, layout exceptions.
- [CLAUDE](CLAUDE.md) §10 — Operational Modes (Writing → Specialist → invoke this skill on export).
- `/format-docx` — sibling user-level slash command for DOCX export. Same spec, different target.

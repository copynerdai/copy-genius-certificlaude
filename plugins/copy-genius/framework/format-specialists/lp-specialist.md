# LP Specialist — Format Specialist

> Full-piece format specialist. Writes landing pages, sales pages, and opt-in pages — any single on-page conversion surface where copy + visual structure work together to move the reader from arrival to action.
>
> Invoked by the orchestrator ([CLAUDE](CLAUDE.md)) when intent recognition matches landing / sales / opt-in page writing. Reads the funnel brief, the brand wiki, the universal writing libraries, and the component specialists relevant to each section it writes — never reinvents what's documented elsewhere.
>
> **Self-contained file**: this specialist holds the LP-specific knowledge base (anatomy at the LP level, conventions, compositional patterns) and the operational workflow. For the craft of individual components (lead, mechanism argumentation, offer block, FAQ, bullets, headline, hook), it references the corresponding component specialists — supplying only the LP-specific execution tuning. The structure of each piece comes from the funnel brief; this file teaches *how* to execute that structure as a landing page.

---

## 0. Execution path — read this first

> Always read before writing: funnel brief touchpoint block · brand-copy-rules · feedback-rules (brand overrides global).
> **Structure selection (Mode 1 step 5)**: before planning, the orchestrator queries the [swipe-index](swipe/index.md) for matching structures — if a SKELETON (or composition) was chosen, it is the piece plan's structural spine; adapt it to the brief, never the reverse. If none chosen, plan from this file's own models.
> Tier 1 style bans apply while DRAFTING, not only at QA (writing-principles B.1–B.3): zero em-dash, no "Not X. But Y.", no banned phrases.
> Writing invocation: §3 (verify inputs) → §8 (select LP type + length) → §9 (5-phase protocol — Fase 1 is the single normative pre-writing list) → §10 (output formats) → §12 (revision checklist).
> Reference sections — consult on demand only: §4 (core principles), §5 (anatomy — open the entry for the block being written), §6 (conventions), §7 (story-led pattern — only when the brief calls for it), Appendix A1 (strategist reference catalog — not needed at writing time).

---

## Quick navigation

### Part A — Identity & scope
- §1 [Purpose](#1-purpose)
- §2 [When invoked](#2-when-invoked)
- §3 [Required inputs](#3-required-inputs)

### Part B — Format expertise
- §4 [Core principles](#4-core-principles)
- §5 [Anatomy & components](#5-anatomy--components)
- §6 [Format-specific conventions](#6-format-specific-conventions)
- §7 [Compositional pattern — the story-led long-form structure](#7-compositional-pattern--the-story-led-long-form-structure)

### Part C — Operational workflow
- §8 [Selecting LP type and length](#8-selecting-lp-type-and-length)
- §9 [Application protocol — LP-specific notes](#9-application-protocol--lp-specific-notes)
- §10 [Output formats](#10-output-formats)

### Part D — Quality control & references
- §11 [Common pitfalls](#11-common-pitfalls)
- §12 [Revision checklist](#12-revision-checklist)
- §13 [Cross-references](#13-cross-references)

### Appendix
- §A1 [Swipe library — 7 sales letter formulas](#a1-swipe-library--7-sales-letter-formulas)

---

# PART A — Identity & scope

## 1. Purpose

Produce ready-to-deploy on-page copy for:

- **Landing pages** — single-page destinations for an ad or email, designed to convert (sale, lead, registration, booking)
- **Sales pages** — long-form pages whose only job is to make the sale of a specific offer
- **Opt-in / squeeze pages** — short pages whose only job is to capture an email or contact in exchange for a lead magnet
- **Section copy for any of the above** — when the brief specifies a partial scope (e.g., "rewrite the offer block", "draft the FAQ", "redo the ATF")

Does NOT produce:

- Hooks / leads in isolation — handled by [hook-specialist](section-specialists/hook-specialist.md), unless none is supplied in the brief and the specialist drafts placeholders for the hero
- Headlines in isolation — handled by [headline-specialist](section-specialists/headline-specialist.md), unless none are supplied
- Bullet points (catalog / curiosity / page-reference) — handled by [bullet-point-specialist](section-specialists/bullet-point-specialist.md), unless the brief gives no bullets and CTA bullets are required
- The funnel brief or strategic decisions — handled by [strategist](skills/strategist.md)
- VSL scripts, advertorials, emails, ads, upsells — handled by their respective specialists

The specialist is the **executor**, not the strategist. Strategic decisions (awareness, sophistication, chain of beliefs, Big Idea, offer composition, lead type, CTA placement rules) come from the brief. The specialist translates those decisions into a landing-page surface that respects the format's conventions and exploits its visual layer.

---

## 2. When invoked

The orchestrator routes to lp-specialist when intent recognition (§5 of [CLAUDE](CLAUDE.md)) matches:

- "write the landing page", "scrivi la landing", "draft the sales page"
- "write the opt-in", "scrivi la squeeze", "build the lead magnet page"
- "rewrite the ATF", "rifai la sezione offerta", "redo the FAQ"
- "draft a short LP for [offer]", "long-form sales letter for [product]"

The orchestrator runs the **Brief readiness check** ([CLAUDE §6](CLAUDE.md)) before invoking. If the brief is Draft / In-Review / missing for this touchpoint, the orchestrator surfaces the gap before calling lp-specialist.

---

## 3. Required inputs

The specialist needs these to start. Missing critical inputs are escalated to the orchestrator.

> **This section describes WHAT the page needs — it is not the reading sequence.** The single normative pre-writing list (what to read, in what order, with which gates) is **Fase 1 of §9**. When two lists seem to diverge, Fase 1 governs.

**From the funnel brief** ([funnel-brief](core/strategic-frameworks/funnel-brief.md) of the specific funnel):

- §3.2 Mass Desire — the dominant desire calibration
- §3.3 Awareness Level — primary calibrator for hero/lead/CTA placement
- §3.4 Sophistication — calibrates headline approach (claim-based vs mechanism-based vs identity-based)
- §3.5 Avatar reference — voice anchors, blocking beliefs, lived-experience details
- §3.6 Offer — full 7-component offer (the offer block is the densest section of an LP)
- §3.7 Big Idea — the angle the hero and lead express
- §3.8 Chain of Beliefs — the rings the page installs (typically Rings 3-4 for Problem Aware funnels; full chain for Unaware long-form)
- §3.9 Proof inventory — testimonials, data, authority cites to deploy across the page
- §3.10 Reference pointers — which testimonials, transcripts, swipe rows to pull
- §4.2 / §4.3 Touchpoint block for this LP — section sequence + belief mapping + length target
- §4 (touchpoint) Approved hook + headline block (if already produced upstream by [hook-specialist](section-specialists/hook-specialist.md) / [headline-specialist](section-specialists/headline-specialist.md))

**From the brand wiki**:

- `brands/<brand>/brand-copy-rules.md` — voice (mandatory)
- `brands/<brand>/swipe.md` — brand-specific landing page examples for voice calibration
- `brands/<brand>/offers.md` — the specific offer's full composition (price, bonuses, guarantee, urgency, reason-why)
- `brands/<brand>/testimonials.md` — the proof rows the brief references
- `brands/<brand>/transcripts/` — selected transcripts for vocabulary and founder anecdotes

**From the cross-specialist writing libraries** (read per the Fase 1 sequence in §9):

- [feedback-rules](core/feedback-rules.md) — global user rules. Read together with `brand-copy-rules.md` at Fase 1 step 0 (brand rules override global).
- [writing-principles](core/writing/writing-principles.md) — read SECTION C (Drafting methods) **before drafting** if the piece is long-form. Read SECTION A (principles) + SECTION B (anti-AI patterns) **post-draft** as Fase 3-4 refinement.
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — the strategic levers this page activates (Intensification dominant in Most/Product Aware, Gradualization dominant in Problem Aware, etc.)
- [emotional-intelligence](core/writing/emotional-intelligence.md) — **gated read**, two branches. See the emotional gate in §9 Fase 1 (mandatory when the brief names Emotional anchors; consulted anyway for emotionally-led moments when it doesn't).

**From the component specialists** (read each one when writing its corresponding LP section — see §5):

- [headline-specialist](section-specialists/headline-specialist.md) — for the hero headline (§5.1) unless an approved headline is already supplied
- [lead-specialist](section-specialists/lead-specialist.md) — for the lead section (§5.2)
- [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) — for the mechanism section (§5.4)
- [bullet-point-specialist](section-specialists/bullet-point-specialist.md) — for bullet lists (§5.6)
- [offer-specialist](section-specialists/offer-specialist.md) — for the offer block (§5.7) including product reveal, price, bonus, guarantee, future pacing, close, CTA copy, P.S. system, Crossroad Close
- [faq-specialist](section-specialists/faq-specialist.md) — for the FAQ block (§5.8)
- [hook-specialist](section-specialists/hook-specialist.md) — for hero opening hooks (§5.1) unless an approved hook is already supplied

**From the copywriter (the request)**:

- LP type (landing / sales / opt-in) if not specified in the brief
- Length target (short / medium / long) if not specified in the brief
- Any constraint (specific testimonial to feature, specific design constraint, ATF layout requirement, mobile-first vs desktop-first treatment)
- Any user-provided swipe (takes priority over generic conventions)

---

# PART B — Format expertise

## 4. Core principles

### 4.1 — Vendere la Lettura prima del prodotto

The first job of the page is to make the reader *want to read it*. Not to sell the product — to sell the *next paragraph*, then the next, until the reader is deep enough that the offer lands on an engaged mind.

The reader must finish the page (or finish each section) feeling that even if they don't buy, the reading itself was worth their time. The information learned, the insight gained, the curiosity satisfied — these are the reading-fee the reader pays to stay engaged.

**Diagnostic question for any paragraph**: *"If I deleted this paragraph, would the reader feel less rewarded for reading this far?"* If the answer is "no", the paragraph is filler — cut it or make it earn its place.

### 4.2 — No Copy-Frankenstein

A landing page assembled from disconnected blocks reads as a series of slides, not as a unified argument. The reader feels the seams and disengages.

The remedy: every section transitions into the next with a bridge that has voice and content. The hero block bridges into the lead. The lead bridges into the mechanism. The mechanism bridges into the offer. The offer bridges into the proof. The proof bridges into the CTA. Each bridge is voice-driven, never a generic "And now let me explain..."

The piece reads from start to end as a single conversation, not as 8 separate documents glued together.

### 4.3 — The 8 Pre-Sales Checklist

Every landing page must accomplish, in order, 8 implicit sales *before* the explicit sale of the product. Each one is the prerequisite for the next. Use the checklist as a structural diagnostic — not as a section template.

| # | Pre-Sale | What the reader must feel | Where it's typically installed |
|---|---|---|---|
| 1 | **Attention** | "Something here is worth my eyes" | Hero block (visual + headline) |
| 2 | **Reading** | "I want to read the next line" | Headline → sub-headline → first paragraph chain |
| 3 | **Benefit** | "There's something here for me specifically" | Lead — articulates what the reader gets from reading on |
| 4 | **Credibility** | "I can trust the source of this" | Authority signals (testimonials under headline, press logos, founder bio, third-party proof) |
| 5 | **Value** | "This is worth what they're asking" | Offer block — composition + price justification + value stack |
| 6 | **Safety** | "I won't lose if I act" | Guarantee section + risk reversal |
| 7 | **Now-ness** | "I should act today, not later" | Urgency / scarcity / deadline with reason-why |
| 8 | **Decision** | "I'm committing" | CTA — calibrated to the action (click / lead / call) |

If any of the 8 is missing, the reader stalls at that gate. The diagnostic: read the page and identify which gate the reader would currently fail. Strengthen that section.

### 4.4 — The DHD principle (Deficit of Attention)

Readers are not focused on the page. They are scrolling, distracted, half-reading. By the third section they may have forgotten *why they came*.

The page must continuously re-anchor: re-state the problem in fresh framing, re-state the promise in a new beat, re-state the cost of inaction at a new angle. Not as repetition — as *re-grounding* through new specifics each time.

**Operational rule**: every 2-3 sections, a re-anchor to either the problem (what the reader is escaping) or the promise (what the reader is moving toward). Without re-anchors, the long page loses the reader between sections 3 and 6 — a classic mid-page drop-off.

### 4.5 — The Heat Map Reality (Headline + Price + P.S.)

Eye-tracking and heat-map studies on landing pages produce a consistent pattern: the three most-read elements are the **Headline**, the **Price**, and the **P.S.** — in that order.

Implication for writing: these three points must each carry full persuasive load **independently**. A reader who reads only those three must still receive a coherent reason to convert.

- Headline = the promise + the angle (sometimes plus the offer in a Most Aware context)
- Price = the value justification + the cost framing (never naked — always inside a reason-why for the number)
- P.S. = a re-statement of the offer in a fresh angle, not a summary

This is why landing pages built around weak headlines and naked prices underperform: two of the three high-traffic surfaces are doing no persuasive work.

### 4.6 — The Marketing Thesis as spine

Every landing page argues one single thesis (derived in [strategist](skills/strategist.md) Step 5):

> *The [qualifier] way for [avatar] to achieve [result] is through [Unique Mechanism].*

Every section of the page must trace back to this sentence. If a paragraph doesn't push the reader closer to believing this thesis, it gets cut or rewritten. The thesis is internal (never shown verbatim to the reader) — its job is to keep the page coherent through every voice variation, every transition, every proof.

**Leader-of-category exception**: when no codified UM exists, the thesis shifts to selling the category itself. The page's spine is then *"The [qualifier] way for [avatar] to achieve [result] is through [category]"* — and the differentiation is built on category authority + brand depth rather than mechanism.

---

## 5. Anatomy & components

The functional blocks of a landing page. Not all pages use all blocks — the brief specifies which are present. The order is also brief-driven; this catalog defines *what each block does at the LP level* and *how to tune it for landing-page execution*.

**Architecture note**: for components whose craft applies across many formats (lead, mechanism argumentation, offer block, FAQ, bullets, headline, hook), this specialist delegates the universal craft to the corresponding **component specialist** and supplies only the LP-specific execution tuning. The lp-specialist remains the writer of the whole page — it does not hand off sections, it reads the component specialist files inline and applies the craft within LP context.

### 5.1 — Hero block

The hero is LP-specific composition: it is the visual + textual anchor of the page above-the-fold.

**Pre-headline (optional)** — smaller font, sets context or qualifies the reader. Example: *"Per imprenditori del settore [X] che fatturano oltre [Y]"*. Use when the audience needs an explicit qualifier; skip when the headline alone is enough.

**Headline (H1)** — carries the weight of the promise. Visually dominant. The structure of the headline is decided in the brief (which Strategic Attack Angle / which tactical pattern). Production of headline candidates is the job of [headline-specialist](section-specialists/headline-specialist.md); the lp-specialist uses the approved headline as supplied.

**Sub-headline** — expands the headline, clarifies the angle, opens the door to the body. The reader who has read the pre + H1 + sub must know: who is this for, what is it about, why should I keep reading.

**ATF visual** — image, video, or VSL embed depending on awareness:
- Most / Product Aware → product image, badges, ribbons
- Solution / Problem Aware → image of the *desire fulfilled* (not the product); often a person in the post-transformation state
- Unaware → image supports identification or story (never the product, never the problem named)
- VSL funnels → the embed replaces the static image

**Caption under ATF visual** — mandatory if image is present. Captions are read by every skimmer; treat as a mini-hook that continues the loop opened by the headline.

### 5.2 — Lead

Apply the craft from [lead-specialist](section-specialists/lead-specialist.md).

LP-specific tuning:
- Written prose (not spoken script)
- Length: 200-500 words for long-form Problem/Solution Aware / Unaware; 1-2 paragraphs for short-form Most Aware (or absent — offer block comes directly after hero)
- Can carry a sub-headline at the top
- Mobile-first paragraph rhythm (3-5 lines max)
- Can integrate an image with caption inside (per §6.3)

### 5.3 — Story section (when present)

Long-form pages — especially story-led ones — include a narrative section. This is the founder's discovery, the customer's transformation, or the witnessed event that grounds the rest of the argument. LP-specific because the story-section-as-LP-block uses sub-headlines for skimmer navigation and breaks into multiple paragraphs with visual breathing.

The story is not decoration. It does specific persuasion work:
- Installs the founder's authority through lived experience (B6 ring)
- Discharges blame by reframing the problem mechanism
- Creates emotional projection (the reader sees themselves)
- Bridges naturally into the discovery moment that introduces the UM

For story-led long-form structures, the story is the spine. See §7 for the full compositional pattern.

### 5.4 — Mechanism section

Apply the craft from [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md).

LP-specific tuning:
- Section sits between lead/story and offer block
- Heavy sub-headline use — each mechanism step gets its own H2 for skimmer scan
- Visual aids: diagrams, before/after images, mechanism diagrams with `[DESIGN NOTE:]` directions
- The Marketing Thesis sentence lands explicitly inside this section: after reading, the reader can internally articulate *"The [qualifier] way to get [result] is through [UM]"*
- Mechanism naming follows [naming](core/strategic-frameworks/naming.md)

### 5.5 — Proof section / proof integration

Two options at the LP level:
- **Integrated proof** — testimonials, data, authority cites woven into the flow next to the claim they support. Preferred default — proof beside claim creates micro-credibility per section.
- **Dedicated proof section** — a block aggregating multiple testimonials, often after the mechanism and before the offer. Used when the proof is so heavy (10+ testimonials, a published study, a media feature) that it warrants its own beat.

The default: **integrate proof in the flow**. Use a dedicated section only when the volume of proof would interrupt the rhythm if spread inline. Each testimonial sits *next to the claim it proves*, never in a "testimonial ghetto" at the end.

### 5.6 — Bullet points

Apply the craft from [bullet-point-specialist](section-specialists/bullet-point-specialist.md).

LP-specific tuning:
- Deployed under "What you'll discover in [X]" or "What the [product] includes" framing
- The framing line above is the lp-specialist's job; the bullet content comes from the component specialist
- Bullet count = however many are needed; not a fixed range
- Visually distinct from prose (indented, with bullet markers, white space)
- End with *"E molto altro..."* only if genuinely true

### 5.7 — Offer block

Apply the craft from [offer-specialist](section-specialists/offer-specialist.md). The offer-specialist owns: product reveal, price reveal (with price destruction / value stack / anchor patterns), bonus stack, guarantee, final future pacing, close, CTA copy, 3 P.S. system, Crossroad Close.

LP-specific tuning:
- **Visual identity**: the offer block gets its own sub-headline and visual treatment — sealed background, badge, layout shift. It must read as "the moment the page becomes the offer", not as a continuation of body paragraphs.
- **Design directions**: insert `[DESIGN NOTE:]` for badges, sealed blocks, offer summary box; `[CTA BUTTON: "exact text"]` for each button.
- **CTA placement** (LP-specific rule, not in offer-specialist): apply the canonical CTA placement rule stated in §12 (Offer & CTA) — above fold ONLY for Most/Product Aware; first CTA after the mechanism section otherwise; repeated 2-3x with slightly varied button copy, same destination
- **Mobile-first formatting**: offer block sits at a natural scroll-stop; price reveal must complete its message within a single mobile viewport
- **Image-as-CTA** option (see §6.5) — the offer image can be clickable, opening pop-up form
- **P.S. system**: owned by [offer-specialist](section-specialists/offer-specialist.md) §7.7 (functions of P.S. / P.P.S. / P.P.P.S.). The only LP-specific tuning — a declared local deviation — is the count: **1 P.S. for short pages, 3 for long-form**

### 5.8 — FAQ

Apply the craft from [faq-specialist](section-specialists/faq-specialist.md).

LP-specific tuning:
- Placed before the footer in long-form pages; absent in opt-in / squeeze
- Visual treatment: collapsible Q&A (accordion) for long FAQ blocks, flat list for 3-5 questions
- 3-5 questions typical for long-form LP; fewer for shorter pages
- Each answer ends with a soft re-point to the CTA above

### 5.9 — Footer

Logo, legal text, contact, social proof anchors (press logos, certifications). Minimal copy work — mostly a design responsibility. The footer's only persuasion function is *not breaking trust* — disclaimers, privacy, terms must be present.

---

## 6. Format-specific conventions

These are the conventions that make a landing page *read like a landing page*, not like a long email or a Word document. They live in the visual layer as much as in the copy layer.

### 6.1 — Doppi Livelli di Lettura (the Skimmer Strategy)

A landing page is read by two readers simultaneously: the **deep reader** (who reads every word) and the **skimmer** (who scans and reads only specific surfaces).

The skimmer reads, in this priority order:
1. The headline
2. The price
3. The P.S.
4. The sub-headlines (H2s) throughout the page
5. The bold phrases inside paragraphs
6. The bullet points
7. The captions under images
8. The CTA button text

**Operational rule — the sub-headline test**: read the sub-headlines of the page in sequence, ignoring everything else. If they do not constitute a complete argument that justifies the action, the second level of reading is broken. **Fix the sub-headlines first**, then the body paragraphs. A page where the body is brilliant but the sub-headlines are blind ("La Verità", "La Mia Storia") will underperform.

**Operational rule — the bold test**: read only the bold phrases in sequence. The bolds together must tell a coherent micro-story. If they're scattered for visual variety with no through-line, redistribute them.

### 6.2 — Sub-headline rules

- Every 3-5 paragraphs, a new sub-headline. Non-negotiable in long-form.
- **No blind sub-headlines**. Every H2 must either advance the thesis or deliver a benefit. *"La Verità su X"* and *"La Mia Storia"* are blind — they sell nothing. Replace with sub-headlines that name the specific belief or benefit the section delivers.
- Sub-headline weight by awareness:
  - **Most Aware** → offer-driven sub-headlines (bonuses, price points, urgency restatements)
  - **Product / Solution Aware** → proof-driven and mechanism-driven sub-headlines
  - **Problem Aware** → pain-naming and "missing 1%" sub-headlines
  - **Unaware** → narrative chapter titles that don't describe the product, never problem/desire/solution by name

### 6.3 — Caption rules

If an image is present, a caption sits beneath it. **No image is decorative.** Every image earns its place by being specific to a claim, and its caption either:
- Continues the loop opened by the headline or last sub-headline
- Adds a fresh proof element
- Names what the image shows in a persuasion-loaded way

Skimmers read every caption. A captionless image is wasted attention. A caption that says *"Image of woman with dog"* is wasted attention worse.

### 6.4 — Loop technique (the Zeigarnik Effect)

The reader's brain hates unresolved loops. Exploit this by:

- Closing the hero block with a forward-pointing line: *"Tra un attimo ti mostro [X] — ma prima…"* / *"Continua a leggere per scoprire [Y]"*
- Closing each major section with a sub-headline that opens a *new* loop, not just summarizing the previous one
- Using *"(Continua qui sotto)"* or *"Gira la pagina per vedere [X]"* on print/cartaceo formats — the digital equivalent is the layout flow itself, which the next sub-headline must reward

Loops open in the body must close by the end of the page. Unresolved loops at the CTA frustrate; resolved loops deliver the relief that the action capitalizes on.

### 6.5 — Image-as-CTA

The ATF image is often clicked by readers who never reach the button. Build the ATF image as a *clickable surface that triggers the conversion event* — opens a pop-up email capture, starts a video, launches the checkout.

A common pattern: the ATF image carries a visible play button (suggesting video), but clicks open a pop-up email capture before the video plays. The image is doing double duty as visual hero AND as CTA.

### 6.6 — Eye direction in photos

When a photo contains a face (human or animal), the gaze direction matters. The reader unconsciously follows the gaze. Two rules:

- The gaze should point toward the CTA / important text — guiding the reader's eye to where the conversion happens
- Or the gaze should point at the reader — creating direct connection

A photo where the gaze points off-page (or at an empty corner) wastes its compositional energy. Retouch or replace if necessary.

### 6.7 — Mobile-first formatting

Most landing pages are read on mobile. Format accordingly:

- Paragraphs: 3-5 lines maximum (on mobile, 5 lines often becomes 8-10 visual lines)
- White space between every paragraph (single line break, never double)
- Sub-headlines stand alone with breathing space above and below
- Bullet lists are visual breathers — use them where prose density spikes
- One CTA per screen view (the reader should never scroll past two consecutive CTAs without content between)
- Hero block must complete its message above the mobile fold (roughly the first 600px) — if the sub-headline is below the mobile fold, the message is broken

### 6.8 — Bucket brigades

Phrases used to bridge sections — to pull the reader from the end of one paragraph into the beginning of the next. The voice-led ones work; the generic ones read as filler.

Voice-led examples that work:
- *"E sai cosa fa la differenza?"*
- *"Ti dico una cosa che ho notato in [X] anni di lavoro"*
- *"Aspetta. Prima di continuare, devi vedere questo"*
- *"È qui che le cose diventano interessanti"*

Generic ones to avoid:
- *"Inoltre"* / *"Tuttavia"* / *"Per di più"* — flat and transitional, no voice
- *"È importante capire che..."* — schoolteacher register
- *"E poi c'è una cosa..."* — generic AI rhythm (Anti-pattern 6 in [writing-principles](core/writing/writing-principles.md))

Use bucket brigades sparingly — once or twice per long-form section, at genuine pivots. Overuse turns them into noise.

### 6.9 — Squeeze page model (validated)

A specific opt-in / squeeze page model has been validated through extensive testing (over $100K of split testing on this single template). Structure:

- **Logo top-left** (brand anchor)
- **Authority signals top-right** — press logos, certifications, or "X subscribers" / "Y likes" count
- **Headline** — direct promise of the lead magnet
- **3-5 bullets** — what the reader gets in the lead magnet
- **Capture box** — name (optional) + email + CTA button
- **CTA button text** — direct: *"Send me the report"* / *"Get instant access"*

The model is intentionally simple. No long story, no offer block, no testimonial section. Squeeze pages perform on directness and clarity — not on persuasion density.

Apply this template when the brief calls for a lead magnet capture (free report / free video / free guide). Do not embellish — the testing showed embellishment reduces conversion.

### 6.10 — Format conventions for design directions

Inline design notes are part of the LP-writer's deliverable:

- `[DESIGN NOTE: specific image / visual description]` — describes what the image must show
- `[CTA BUTTON: "exact button copy"]` — the literal button text
- `[H2 SUB-HEADLINE TEXT]` — visual treatment of section break
- `[DIVIDER]` — visual separator between major beats
- `[BADGE: text]` — for guarantee / urgency / offer badges

These bracketed instructions tell the designer how to render the copy. The lp-specialist is responsible for them — the designer should never be left guessing what the writer intended visually.

---

## 7. Compositional pattern — the story-led long-form structure

> **What this is**: an advanced compositional pattern for long-form story-led sales pages. Not a template to apply universally — a reference structure for when the brief specifies a story-driven Problem Aware / Solution Aware long-form treatment, and the copywriter wants this canonical sequence as their drafting backbone.
>
> **When to use it**: the brief calls for a long-form sales letter (typically 2,000-5,000 words on page, or as a long VSL script). The audience is Problem Aware or Solution Aware. The brand has a story to tell (founder discovery, customer transformation, witnessed event). The market is competitive enough that proof-only structures underperform.
>
> **When NOT to use it**: Most Aware retargeting pages (the offer IS the page). Short-form lead generation pages. Unaware story-led pages that follow a different narrative shape (typically narrower in scope). Any piece under ~1,500 words on page.
>
> **Origin**: refined heavily in the US health-supplement market — a domain saturated enough that authority-based persuasion underperforms. Validated across hundreds of pieces. Works *without* the brand having a famous frontman — the structure produces conviction from copy alone.
>
> **Application discipline**: do not apply mechanically. Even the most disciplined practitioners apply ~95% of the structure — adapting, skipping, or reordering the 25 movements based on the specific piece. The structure is a backbone, not a checklist.

### 7.1 — Two entry points (Method #1 vs Method #2)

The piece can open in two ways:

**Method #1 — Grande Promessa + Target + Storia**
1. **Grande Promessa** — bold benefit-loaded promise (the headline often carries it)
2. **Target identification** — explicit naming of who this is for (and acknowledgment of sub-targets)
3. **Skepticism preemption** — address the obvious objection the promise raises (*"Probabilmente starai pensando che è troppo bello per essere vero — ma in queste poche righe ti spiego perché funziona"*)
4. **Bridge to story** — *"E tutto questo è cominciato il giorno in cui..."*

Use Method #1 when storytelling is not the copywriter's strongest tool, or when the audience needs the promise framed clearly before the story can land.

**Method #2 — Storia diretta (skip the promise)**
1. **Direct story opener** — drop the reader into the middle of a scene, often shocking or pattern-interrupting
2. **Frame justification** — justify the unusual opening immediately (the next sentence explains why this matters to the reader)
3. **Bridge into the explicit argument** — *"E ti dico tutto questo perché..."*

Use Method #2 when the story is genuinely strong and the copywriter is confident with narrative voice. Performs better than Method #1 when applied well.

### 7.2 — The body sequence (the 25 movements)

Once past the entry, the body unfolds across approximately 25 narrative movements. Adapt freely — the order is canonical but not rigid; some movements can be merged, some skipped depending on the brief.

| # | Movement | Function |
|---|---|---|
| 1 | Big Idea reveal | The single insight that anchors the piece. Surface it inside the story when possible. |
| 2 | Unique Mechanism (UM) named | One or more mechanisms named with proprietary words. In stage-3+ markets, multiple UMs reinforce each other. |
| 3 | Voice to the prospect's secret pains and frustrations | Articulate the unspoken thoughts the reader has had. Creates the *"Sta parlando di me"* moment. |
| 4 | Reveal the Common Enemy | Attack the competing methods/approaches. Position yourself as someone who tried them and saw they failed. |
| 5 | Vulnerability beat | Show the frontman's doubts, failures, weaknesses. Creates connection through openness. |
| 6 | Re-agitate the problem | Reminder of what's at stake — DHD principle (§4.4) demands this beat. |
| 7 | The crossroads moment | The point in the story where the protagonist faced three possible paths (and the chosen one led to the discovery). |
| 8 | The Mission begins | The research, the experts consulted, the books read, the path taken to find the answer. |
| 9 | Discoveries along the way | The supporting findings — each a small confirmation. |
| 10 | The Big Discovery | The mechanism unique to this product, told as the moment of insight. |
| 11 | Initial results | The first proof — often the protagonist's own transformation. |
| 12 | Multi-scene future pacing | Vivid scenes of the post-transformation reader living the new state. |
| 13 | Told testimonials | Stories of others, not just screenshots — narrative testimonials hit harder. |
| 14 | Re-state the mechanism implication | *"Se non impari [X], non potrai mai [Y]"* — closes the logical loop. |
| 15 | The "yes" capture | Pose a question the reader can't help but answer "yes" — then *"Allora ascolta ancora un attimo..."* |
| 16 | Bullet points | The functional list of what's included / what the reader will learn. |
| 17 | Anticipation of price-justification | Set up the value frame before the price hits. |
| 18 | Price reveal with value stack | High anchor → offer reveal → reason-why. |
| 19 | Urgency / now-ness | Reason-why for acting today. |
| 20 | Guarantee (full standard, often extended) | Minimum 100%, sometimes more. |
| 21 | First CTA | Direct, calibrated to ticket. |
| 22 | Bonus stack | For readers still hesitant. |
| 23 | Re-CTA after bonuses | "Click below to get [bonus + offer]" |
| 24 | Final future pacing + Crossroad Close | The reader sees both futures (with / without the product). Covered in [offer-specialist](section-specialists/offer-specialist.md). |
| 25 | FAQ + final CTA + surprise bonus | Last objections handled. Often a small bonus surprise at the very end. |

In practice, even the strongest applications of this method run at ~95% adherence — skipping or reordering movements based on the specific piece's needs. The 95% adherence point is important: the structure is a backbone, not a checklist.

### 7.3 — When this pattern is invoked

The lp-specialist applies this pattern when:

- The brief specifies long-form (§4.2 length target ≥ 2,000 words on page)
- The awareness is Problem Aware or Solution Aware
- The chain of beliefs in the brief includes B6 (founder discovered through struggle) or strong narrative beliefs
- The brand has a story documented in `brands/<brand>/transcripts/` that can carry the narrative spine
- The copywriter explicitly requests story-led long-form execution

If any of the above are missing, default to another structure (the strategist's brief will have specified an alternative). This pattern is *one* structural option — not the default.

---

# PART C — Operational workflow

## 8. Selecting LP type and length

The brief usually specifies type and length. When ambiguity exists, the lp-specialist makes the selection based on the criteria below — and surfaces the selection to the copywriter for confirmation if the brief was silent.

### 8.1 — By LP type

| Brief signal | LP type |
|---|---|
| Conversion goal is to make a sale of a defined offer | **Sales page** — full body with hero → mechanism → offer → CTA |
| Conversion goal is to capture an email/contact in exchange for a lead magnet | **Opt-in / squeeze page** — short, headline + bullets + capture form |
| Conversion goal is to deliver a specific message + drive to a defined next step (call, demo, application) | **Landing page** — sits between sales and opt-in in length; the depth depends on the next-step commitment |

### 8.2 — By length

| Awareness | Typical length range | Why |
|---|---|---|
| Most Aware | Short (300-800 words on page) | Offer + urgency + CTA. Zero education needed. |
| Product Aware | Medium (800-2,000 words) | Mechanism + differentiation + offer. Some belief work. |
| Solution Aware | Medium to Long (1,500-3,500 words) | Mechanism is the spine; competition destruction + UM education |
| Problem Aware | Long (2,500-5,000 words) | Problem mechanism + UM + full chain + offer |
| Unaware | Very long (4,000-8,000+ words) | Full identification arc → problem emergence → solution → product. Lead is half the page. |

These are guideline ranges, not rules. The brief's specific belief count and proof inventory shift the actual length.

### 8.3 — By compositional pattern

When the brief calls for long-form (Problem/Solution Aware, 2,000+ words), the lp-specialist chooses one of:

- **Standard long-form structure** (hero → lead → mechanism → offer → close) — default for proof-heavy / authority-led brands
- **Story-led long-form pattern** (§7) — for story-led, narrative-heavy briefs in saturated markets
- **Hybrid** — story-led opening and middle, standard close (or vice versa) — when the brief mixes signals

The selection is surfaced to the copywriter as part of the structure proposal (§10).

---

## 9. Application protocol — LP-specific notes

The specialist applies the universal **5-phase protocol** defined in [writing-principles §2](core/writing/writing-principles.md). That protocol is the authoritative workflow — read it there, do not re-state it here.

The notes below specify what is **LP-specific** at each phase. Treat them as supplements to the universal protocol, not replacements.

| Phase | LP-specific notes |
|---|---|
| **Fase 1 — Pre-writing** | **This is the single normative pre-writing list** (§3 describes the expected inputs; this sequence governs). **0.** Read [feedback-rules](core/feedback-rules.md) (global rules) + `brands/<brand>/brand-copy-rules.md` (brand rules — they override global). These apply to every line you write and are re-verified at QA (writing-principles Fase 4d). **1.** Read brief §3-§4 (per §3 of this file), brand `swipe.md` (1-2 LP examples if present), the specific testimonials/transcripts/offers referenced in the brief. **2.** Read [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — identify the dominant lever the brief assigns to this page (Intensification for Most/Product Aware, Gradualization for Problem Aware, etc.). **3.** For long-form (Problem/Solution Aware, 2,000+ words): read [writing-principles SECTION C](core/writing/writing-principles.md) and decide drafting approach (Method of Objections / Method of Assembly / Hybrid / free). **4.** Emotional gate — read [emotional-intelligence](core/writing/emotional-intelligence.md): (a) MANDATORY when the brief's touchpoint block names Emotional anchors — read those entries only; (b) if the brief names no anchors and the piece includes emotionally-led moments (problem dramatization, hook, future pacing), consult the relevant entries anyway (max 3 per piece) and flag the missing anchors to the copywriter as a brief gap. |
| **Fase 2 — Drafting** | **Write the sub-headlines first** — verify the second-level-of-reading test (§6.1) passes before any body paragraph fills in. Then draft body section by section. Then add strategic bold (one key concept per section, never entire sentences). Then add `[DESIGN NOTE:]` and `[CTA BUTTON:]` directions. For long-form: apply the drafting method chosen in Fase 1. For short-form Most Aware / opt-in: draft directly section by section. |
| **Fase 3 — Principles refinement** | Universal pass per [writing-principles SECTION A](core/writing/writing-principles.md). LP-specific watch-points: Principle 1 (One Thing) often slips when the page argues 2 different theses; Principle 2 (Promise→Proof→Implication) often slips when proof is stacked in a testimonial ghetto instead of integrated; Principle 6 (Conversational flow) often slips between major sections — the bucket brigades from §6.8 of this file are the LP-specific application. |
| **Fase 4 — Anti-AI pass** | Universal pass per [writing-principles SECTION B](core/writing/writing-principles.md). LP-specific hotspots: rigid parallel triads tend to cluster in sub-headlines; em-dash overuse tends to cluster in the lead and the offer block; generic transitions tend to cluster between sections when Fase 2 bucket brigades weren't voice-led. |
| **Fase 5 — Readability + Read-aloud + Skimmer test** | Universal Gulpease + read-aloud per [writing-principles §3](core/writing/writing-principles.md). **Then add the LP-specific Skimmer test**: read ONLY the sub-headlines + bold phrases + bullets + image captions + P.S. + CTA button copy, in page order. If this sequence alone does not constitute a complete persuasive argument that would justify conversion, the second level of reading is broken — fix the sub-headlines before delivering. |

---

## 10. Output formats

### Structure proposal (when planning before writing)

```
PROPOSED STRUCTURE — Landing Page for [Offer] in [Funnel]

LP type: [Sales / Landing / Opt-in]
Length target: [Short / Medium / Long / Very long] (~[N] words)
Compositional pattern: [Standard / Story-led long-form / Hybrid / Squeeze model]
Awareness: [level from brief]
Sophistication: [stage from brief]
Headline approach (strategic angle): [from brief]
Headline pattern (tactical): [from headline-specialist output]
CTA above fold: [Yes / No]
Reference swipe (brand or external): [name — what's adapted]

SECOND LEVEL OF READING (sub-headlines + bold scan):
H1: [headline text]
H2 §1: [sub-headline]
H2 §2: [sub-headline]
H2 §3: [sub-headline]
[... full sequence — verify the argument holds reading these alone]

SECTION-BY-SECTION:

Section 1 — HERO BLOCK — Installs belief: #X
  Function: [what it accomplishes]
  CTA above fold: [Yes/No]
  Image: [what it shows]
  Caption: [draft caption — extends loop]

Section 2 — LEAD — Installs beliefs: #X, #Y
  Sub-headline: [text]
  Function: [bridges hero into mechanism / story / argument]
  [2-3 sentences describing function]

Section 3 — [name] — Installs beliefs: #X
  Sub-headline: [text]
  Function: [...]

[... continue for all sections ...]

Section N — OFFER BLOCK
  Sub-headline: [text]
  Components: [list]
  Price treatment: [Pattern 1 / Pattern 2 / Hybrid]
  Bonus stack: [items planned]
  Guarantee: [from brief — duration + type]
  CTA copy: [text on button]

Section N+1 — P.S. SYSTEM
  P.S.: [angle — offer restatement]
  P.P.S.: [angle — squalifica or inverse psychology]
  P.P.P.S.: [angle — final hook]

Belief coverage check: [belief # → section where installed]
Objection coverage check: [objection → section where resolved]
Proof distribution: [testimonial / data → section]
DHD re-anchor points: [sections N, N+M where problem/promise is re-stated]
```

### Writing execution (per section, after structure approved)

```
---
## SECTION [N]: [NAME]
## Installs beliefs: #X, #Y

### [H2 SUB-HEADLINE TEXT]

[Body — paragraphs 3-5 lines max, strategic bold on key phrases, voice-led]

[DESIGN NOTE: specific image / visual description]

[CTA BUTTON: "exact button copy"] (if applicable)
---
```

### Writing sequence within Fase 2

1. Write all sub-headlines first, verify second level of reading
2. Write body paragraphs section by section
3. Add strategic bold — one key concept per section, never entire sentences
4. Add design directions, image suggestions, CTA button text
5. Verify P.S. system is present and each P.S. has a distinct angle
6. Run Fase 3-5 (refinement passes)

---

# PART D — Quality control & references

## 11. Common pitfalls

Distilled from extensive long-form practice. Watch for these.

### 11.1 — Blind sub-headlines

*"La Verità su X"*, *"La Mia Storia"*, *"Un Nuovo Approccio"* — these advance nothing for the skimmer. The skimmer who reads only sub-headlines must reconstruct the argument from them. Blind sub-headlines collapse this surface.

**Fix**: every sub-headline names a specific benefit, mechanism, proof, or belief installed by its section.

### 11.2 — Random bold for visual variety

Bolds scattered to "look interesting" with no scan-coherence. The skimmer reads bold-only and gets confetti, not argument.

**Fix**: read the bolds in sequence. They must form a coherent micro-message. Redistribute or strip.

### 11.3 — CTA above fold on cold pages

A CTA above the fold for Solution / Problem / Unaware kills trust — the reader hasn't yet reached conviction, and the CTA assumes a commitment that doesn't exist.

**Fix**: apply the canonical CTA placement rule (§12, Offer & CTA): above fold only for Most/Product Aware; for everyone else, the first CTA appears after the mechanism section.

### 11.4 — Testimonial ghetto

Ten testimonials stacked in one block, separated from the claims they prove. The reader skips the block as a unit — the proof loses its connective tissue with the argument.

**Fix**: integrate proof inline, beside the claim it supports. Use a dedicated testimonial block only when volume warrants it (and even then, make each testimonial address a specific objection or proof point).

### 11.5 — No bucket brigades between sections

The reader finishes a section, sees the next sub-headline, and feels no pull to continue. The page reads as a series of slides.

**Fix**: each section ends with a forward-pointing sentence (loop or specific tease) that the next sub-headline rewards. Voice-led bridges, never generic "Inoltre" / "Tuttavia".

### 11.6 — Missing non-transferable bond between UM and product

The reader reaches the offer thinking *"This sounds great — but the local clinic does the same thing for less"* because the page didn't establish that the Unique Mechanism is *uniquely* tied to the brand's product.

**Fix**: the UM section must explicitly name the mechanism, attach it to the brand by proprietary language, and close with the Marketing Thesis sentence: *"L'unico modo per ottenere [result] è attraverso il mio [UM]"*. Anything weaker leaves the reader shopping for cheaper alternatives.

### 11.7 — Advertising the competition

For Problem Aware audiences who don't know alternatives, the page that lists alternatives (to destroy them) inadvertently introduces them. The reader thinks: *"Wait, there are alternatives I didn't know about — let me check them."*

**Fix**: when the audience is unaware of competitors, skip competition destruction entirely. Go straight from problem mechanism to UM. Destroy alternatives only when the audience already knows them (Solution Aware and up).

### 11.8 — Decorative images without captions

Stock images with no caption add nothing for the deep reader and waste a skimmer-attention slot.

**Fix**: every image specific to the section it sits in, every image with a caption that does persuasion work (continues loop, adds proof, names what the image shows persuasively).

### 11.9 — Offer block without its own sub-headline

The offer blends into surrounding prose; the reader misses the *"this is the moment of the offer"* signal.

**Fix**: the offer block has its own sub-headline (visually distinct), its own visual treatment (background, badge, layout shift). It reads as the dedicated moment it is.

### 11.10 — Unaware page that mentions product/price/problem in the first half

The Unaware rule is absolute — the headline sells the next line, the lead doesn't sell the product, the first half builds identification before the problem is even named.

**Fix**: re-read the first half with the question *"Is there any mention of product, price, function, problem, or claim before the midpoint?"* If yes, restructure. Move the explicit naming much deeper into the body.

### 11.11 — Wall of text

Paragraphs over 5 lines (which become 8-10 on mobile) = reader skip. The visual signal is intimidation.

**Fix**: paragraphs 3-5 lines maximum. Sentence fragments allowed when they serve readability. White space between every paragraph.

### 11.12 — Generic CTA copy

*"Learn More"*, *"Click Here"*, *"Submit"* — generic CTAs lose against benefit-loaded action verbs.

**Fix**: CTA copy that names the action or the destination — *"Get the report"*, *"Start the protocol"*, *"Reserve my spot"*. Each CTA in the page can have slightly different copy (different benefit framings), pointing to the same destination.

### 11.13 — Inflated bonus values

A bonus claimed at €5,000 when no realistic market price would support that number reads as a stunt. The reader's skepticism rises and the entire value stack collapses.

**Fix**: every bonus value attribution should be defensible — the reader could plausibly acquire that thing for that price on the open market. Inflate gently if at all, with reason-why.

### 11.14 — Guarantee buried in fine print

The guarantee is one of the page's most powerful objection-dismantlers. Hiding it (or weakening it with "subject to terms") sacrifices the leverage.

**Fix**: dedicated section with its own sub-headline, often with visual treatment (badge, sealed block). 100% money-back minimum. Conditions, if any, surfaced transparently in the section itself.

### 11.15 — Missing P.S. or generic P.S. that summarizes

The P.S. is the second-most-read element. A generic P.S. ("In conclusion, X is the best choice for you") wastes one of the page's highest-attention surfaces.

**Fix**: 3 P.S. blocks with distinct functions per [offer-specialist](section-specialists/offer-specialist.md) §7.7 (LP tuning in §5.7 of this file: 1 P.S. for short pages, 3 for long-form). Each one fresh angle, not a summary.

### 11.16 — Mid-page drop (DHD failure)

The reader engages with sections 1-3, then the page loses them between sections 4-6 because the problem and promise haven't been re-anchored.

**Fix**: every 2-3 sections, re-state the problem in fresh framing or the promise in a new beat. Not as repetition — as re-grounding through new specifics.

---

## 12. Revision checklist

Run this before delivering. **LP-specific only** — the universal writing-quality checks (Gulpease, em-dash count, anti-AI patterns, read-aloud) are handled during Fase 3-5 of the protocol per [writing-principles](core/writing/writing-principles.md). This checklist supplements those, it doesn't restate them.

Items marked **BLOCKING** are structural: **do not deliver if these fail** — fix first.

**Structural**
- [ ] **BLOCKING** — Every belief from the brief's Chain of Beliefs is installed somewhere on the page?
- [ ] Every key objection from the brief is addressed somewhere on the page?
- [ ] Marketing Thesis (the brief's UM block §3.4, articulated per [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md)) is the spine — every section traces to it?
- [ ] LP type and length match the brief's specification?

**Second level of reading**
- [ ] Sub-headlines in sequence form a complete argument?
- [ ] No blind sub-headlines (every H2 advances thesis or delivers benefit)?
- [ ] Bold phrases in sequence form a coherent micro-message?
- [ ] Every image has a persuasive caption?

**Hero & lead**
- [ ] **BLOCKING** — Headline block present (approved headline used as supplied) and matches awareness + strategic angle from brief?
- [ ] Sub-headline expands the headline without restating?
- [ ] ATF image obeys the awareness rule (product / desire / identification)?
- [ ] Sub-headline visible above the mobile fold?

**Offer & CTA**
- [ ] **BLOCKING** — Offer block complete (all components from the brief's §3.6 offer) with its own sub-headline + visual treatment?
- [ ] Price is never naked — always inside reason-why or anchor contrast?
- [ ] Guarantee minimum 100%, with reason-why for any condition?
- [ ] CTA calibrated to ticket size (direct button / leave-data / book-call)?
- [ ] **BLOCKING** — **CTA placement rule (canonical home of this rule)**: CTA above fold ONLY for Most/Product Aware; for Solution/Problem/Unaware the first CTA appears AFTER the mechanism section; then repeated 2-3x through the page, slightly varied copy, same destination?

**Proof**
- [ ] Every claim followed by proof (Promise → Proof → Implication rhythm)?
- [ ] Proof integrated in flow (not stacked in testimonial ghetto)?
- [ ] Competition destroyed by mechanism, not by brand name?
- [ ] Bonus values plausible (not inflated)?

**Format conventions**
- [ ] Paragraphs 3-5 lines max with white space?
- [ ] Bucket brigades between sections (voice-led, not generic)?
- [ ] P.S. system present (1 P.S. for short, 3 for long-form — LP deviation declared in §5.7)?
- [ ] Each P.S. has a distinct function per [offer-specialist](section-specialists/offer-specialist.md) §7.7 (not a summary)?
- [ ] Design directions inserted ([DESIGN NOTE:], [CTA BUTTON:])?

**Brand fidelity**
- [ ] Tone and vocabulary match `brands/<brand>/brand-copy-rules.md`?
- [ ] **BLOCKING** — feedback-rules (global + brand) re-scanned on the final draft — no rule violated?
- [ ] No invented facts (everything from brief or brand wiki)?
- [ ] First person consistent (frontman/brand speaks as "I" / "we")?
- [ ] No proprietary external jargon exposed to the reader?

---

## 13. Cross-references

- [CLAUDE](CLAUDE.md) — orchestrator, runs Brief readiness check before invoking this specialist
- [strategist](skills/strategist.md) — produces the funnel brief this specialist consumes
- [funnel-brief](core/strategic-frameworks/funnel-brief.md) — input template
- [writing-principles](core/writing/writing-principles.md) — read SECTION C (drafting methods) pre-writing for long-form; SECTION A + B post-draft; §3 Gulpease + read-aloud in Fase 5
- [feedback-rules](core/feedback-rules.md) — global user rules; read at Fase 1 step 0 with `brand-copy-rules.md` (brand overrides global), re-scanned at QA (writing-principles Fase 4d)
- [emotional-intelligence](core/writing/emotional-intelligence.md) — gated read, two branches (see §9 Fase 1): mandatory when the brief names Emotional anchors; consulted anyway (max 3 entries) for emotionally-led moments when it doesn't
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — strategic levers the page activates
- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — every belief in the brief installs at a specific section
- [offer-construction](core/strategic-frameworks/offer-construction.md) — the offer block sits on the LP; this file defines what an offer is composed of
- [proof-elements](core/strategic-frameworks/proof-elements.md) — typology of proof and where each type lands best
- [naming](core/strategic-frameworks/naming.md) — UM naming conventions
- [funnel-architecture](core/strategic-frameworks/funnel-architecture.md) — the LP as a touchpoint in the funnel
- [hook-specialist](section-specialists/hook-specialist.md) — supplies hooks for the hero opening
- [headline-specialist](section-specialists/headline-specialist.md) — supplies the hero headline block (pre-headline + H1 + sub)
- [lead-specialist](section-specialists/lead-specialist.md) — supplies the lead craft for §5.2
- [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) — supplies the mechanism argumentation craft for §5.4
- [bullet-point-specialist](section-specialists/bullet-point-specialist.md) — supplies bullet lists for §5.6
- [offer-specialist](section-specialists/offer-specialist.md) — supplies the complete offer block craft for §5.7 (product reveal, price, bonus, guarantee, future pacing, close, CTA, P.S. system, Crossroad Close)
- [faq-specialist](section-specialists/faq-specialist.md) — supplies the FAQ craft for §5.8
- [email-specialist](format-specialists/email-specialist.md) — sibling full-piece specialist (reference pattern for self-contained specialist files)
- [advertorial-specialist](format-specialists/advertorial-specialist.md) — upstream touchpoint that often feeds traffic to LPs
- [upsell-specialist](format-specialists/upsell-specialist.md) — downstream from the LP, post-purchase
- `brands/<brand>/brand-copy-rules.md` — voice, primary over generic best practice
- `brands/<brand>/swipe.md` — brand-specific LP examples for voice calibration
- `brands/<brand>/offers.md` — full offer composition (price, bonuses, guarantee, urgency, reason-why)
- `brands/<brand>/testimonials.md` — proof rows
- `brands/<brand>/transcripts/` — source material for founder anecdotes and customer stories

---

# Appendix

## A1. Swipe library — 7 sales letter formulas

> **Strategist reference catalog — NOT needed at writing time.** The lp-specialist does not read this appendix during the §9 protocol; it is consulted by the [strategist](skills/strategist.md) when building a brief, or by the lp-specialist only in the unusual cases described below.
>
> **What this appendix is**: a reference catalog of seven historically validated sales letter structures, distilled from Italian and American direct-response practice. These are **swipe — not templates**. The lp-specialist does not pick one of these and apply it; the structure of the piece comes from the funnel brief produced by the strategist. This catalog exists so that the strategist (and, secondarily, the lp-specialist in unusual cases) has a reference of canonical structural shapes when building or reading a brief.
>
> **How to use it**: when the strategist is building a brief and considering "what shape should this piece take?", these seven structures are options to consider — to be adapted to the specific awareness, sophistication, and chain of beliefs of the funnel. When the lp-specialist is reading a brief and the structure resembles one of these, the formula's annotation can guide execution.
>
> **Origin**: distilled from the historical canon of direct-response sales letter formulas — compiled across decades of US and Italian DR practice. Each formula represents a structural shape that has been validated across many pieces and many markets.

### Formula #1 — The Simplest

**Sequence**: "What I have for you" → "What problem this solves" → "Who I am" → USP → Price + Bonuses + Guarantee + CTA

**Best for**: warm audiences already partially convinced. Mid-ticket, mid-trust contexts. Lead-gen pages where the offer is clear and the friction is mostly about trust transfer.

**Annotation**: the "Chi sono io?" step is non-negotiable even with a warm list. Repetition of credentials does not bore — it primes for the offer.

### Formula #2 — Problem-Agitation-Solution

**Sequence**: Problem identification → Agitate problem → Install desire for solution → Show how/why the product solves → Offer + Guarantee + CTA

**Best for**: Problem Aware audiences. Information products, health, finance, productivity. Pieces where the pain is the lead and the product is positioned as the resolution.

**Annotation**: the problem can be expressed directly ("Soffri di X?") or indirectly ("L'uomo moderno soffre di..."). Indirect is more sophisticated and works in saturated markets where the direct framing is fatigued.

**Desire-pull variation**: identical sequence with the opening flipped — instead of "Soffri di X?", open with the desire ("Se senti dentro di te il bisogno di..."). Used when the audience responds better to desire-pull than problem-push.

### Formula #3 — High-Ticket Attention-Authority

**Sequence**: Capture attention → Create interest → Credibility + Proof + Benefits → Create scarcity → Warning + "Act now" + CTA

**Best for**: high-ticket business products. Audiences with high education-level expectation. Live-event sales letters where the page is consumed in concentrated reading sessions.

**Annotation**: the canonical case used a long headline that *also* sold the product (not just the next line). This violates a standard rule and works only when the context guarantees the page won't be fully read.

### Formula #4 — Classic Four-Step

**Sequence**: Attract attention → Show benefits → Provide proof → Persuade to act on the offer → CTA

**Best for**: classic American direct-response. Mid-length pieces. Simple offers where the persuasion fits within a clean 4-step arc.

**Annotation**: the most general-purpose of the seven. Variations of this structure underpin many modern sales pages.

### Formula #5 — Sensory-Imagery Stack

**Sequence**: Attract attention → Speak benefits → Create verbal imagery → Tell case studies → List characteristics → Value of offer → Guarantee

**Best for**: products that benefit from sensory/imaginative future-pacing. Aspirational categories (seduction, lifestyle, transformation). Mid-ticket products where the value justification needs heavy stacking.

**Annotation**: the verbal imagery step is what differentiates this from Formula #4. Without it, this collapses into the classic four-step.

### Formula #6 — Storytelling Indirect

**Sequence**: Unexpected story opener → Narrative development → Revelation + authority → Product as solution

**Best for**: Unaware and Problem Aware audiences in long-form. Markets where direct claims are fatigued. Health/wellness, life-transformation niches.

**Annotation**: a canonical example opens with an unrelated story about a long-lived person in a remote village — only revealing the connection to the product (intestinal health) deep into the body. The indirection is the engine.

### Formula #7 — Targeted Member-Exclusion

**Sequence**: Attract the right target (explicit pre-headline qualifier) → Consolidate the promise → Identify the problem → Provide the solution → Tell your results → Introduce the product

**Best for**: warm/captive audiences (members, customers, list with high engagement). Upsell or cross-sell pages where the target is narrow and qualified.

**Annotation**: opens by *explicitly excluding* the wrong target through the pre-headline. The exclusion is the qualifying device — it tells the right target "this is for you" by saying who it's not for.

---

### Using these formulas in practice

When the strategist is building a brief and considering structure:

1. Identify the awareness + sophistication + chain of beliefs the brief requires
2. Scan these 7 formulas for the closest structural fit
3. Adapt — do not copy. The formula is the spine; the brand voice, the avatar specifics, the proof inventory all reshape the surface.

When the lp-specialist is executing a brief and the structure in §4.2 / §4.3 resembles one of these formulas, the formula's annotation provides additional execution guidance — what makes it work, what watch-outs apply.

These formulas do not replace the funnel brief. They inform it.

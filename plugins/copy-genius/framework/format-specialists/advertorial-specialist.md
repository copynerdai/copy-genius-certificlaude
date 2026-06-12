# Advertorial Specialist — Format Specialist

> Full-piece format specialist. Writes advertorials — paid pieces that look editorial. Two variants under one roof: **native ads** (online, on Taboola / Outbrain / Yahoo Gemini / Facebook native) and **print advertorials** (offline, on prestigious magazines such as Forbes, Fortune, Millionaire). Same principles, different surfaces.
>
> Invoked by the orchestrator ([CLAUDE](CLAUDE.md)) when intent recognition matches advertorial / native-ad writing. Reads the funnel brief, the brand wiki, the universal writing libraries, and the component specialists relevant to each section it writes — never reinvents what's documented elsewhere.
>
> **Self-contained file**: this specialist holds the advertorial-specific knowledge base (anatomy, the two canonical formulas, image rules, layout conventions, offline-specific tuning) and the operational workflow. For the craft of individual components (hook, headline, lead, mechanism, bullets, offer block, FAQ), it references the corresponding component specialists — supplying only the advertorial-specific execution tuning. The structure of each piece comes from the funnel brief; this file teaches *how* to execute that structure as an advertorial.

---

## 0. Execution path — read this first

> Always read before writing: funnel brief touchpoint block · brand-copy-rules · feedback-rules (brand overrides global).
> **Structure selection (Mode 1 step 5)**: before planning, the orchestrator queries the [swipe-index](swipe/index.md) for matching structures — if a SKELETON (or composition) was chosen, it is the piece plan's structural spine; adapt it to the brief, never the reverse. If none chosen, plan from this file's own models.
> Tier 1 style bans apply while DRAFTING, not only at QA (writing-principles B.1–B.3): zero em-dash, no "Not X. But Y.", no banned phrases.
> Writing invocation: brief → pre-writing reads (§3 inputs + §9 Phase 1; for print also 3-5 real editorial articles from the target magazine) → §8 variant/formula/goal selection → §9 application protocol (the Phase 2 writing sequence in §10 carries its own inline verifications — run them as written) → §10 output formats → §12 revision checklist (QA — the canonical home of the 3-Yes / in-line links / no-offer-reveal checks).
> Reference sections — consult on demand only: Part B taxonomies (§4 principles, §5 anatomy, §6 conventions, §7 formulas — open the entries the piece needs, not the whole catalog) and the appendices (A2 tools, A3 the 40-40-20 rule).

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
- §7 [Compositional patterns — the 2 canonical formulas + print variant](#7-compositional-patterns--the-2-canonical-formulas--print-variant)

### Part C — Operational workflow
- §8 [Selecting variant, formula, and goal](#8-selecting-variant-formula-and-goal)
- §9 [Application protocol — advertorial-specific notes](#9-application-protocol--advertorial-specific-notes)
- §10 [Output formats](#10-output-formats)

### Part D — Quality control & references
- §11 [Common pitfalls](#11-common-pitfalls)
- §12 [Revision checklist](#12-revision-checklist)
- §13 [Cross-references](#13-cross-references)

### Appendix
- §A2 [Resources & tools](#a2-resources--tools)
- §A3 [The 40-40-20 rule](#a3-the-40-40-20-rule)

---

# PART A — Identity & scope

## 1. Purpose

Produce ready-to-deploy advertorial copy for:

- **Native ads (online)** — paid articles placed on third-party content platforms (Taboola, Outbrain, Yahoo Gemini) or on social (Facebook native), that look and read like editorial content native to the host platform
- **Print advertorials (offline)** — paid articles published in prestigious magazines (Forbes, Fortune, Millionaire, Harvard Business Review) that mimic the magazine's editorial style
- **Section copy for any of the above** — when the brief specifies a partial scope (e.g., "rewrite the opening", "draft the body around the bifocal tease", "redo the CTA bridge")

Does NOT produce:

- Hooks / leads in isolation — handled by [hook-specialist](section-specialists/hook-specialist.md), unless none is supplied in the brief and the specialist drafts placeholders for the opening
- Headlines in isolation — handled by [headline-specialist](section-specialists/headline-specialist.md), unless none are supplied
- Bullet points (catalog / curiosity / page-reference) — handled by [bullet-point-specialist](section-specialists/bullet-point-specialist.md), unless the brief gives no bullets
- The funnel brief or strategic decisions — handled by [strategist](skills/strategist.md)
- The landing page that the advertorial links to — handled by [lp-specialist](format-specialists/lp-specialist.md)
- The paid traffic targeting / placement strategy — design and media-buy decisions live outside the writing scope (the specialist surfaces conventions, never decides budgets)
- Image production — the specialist writes `[IMAGE NOTE:]` directions for the designer; it never generates images

The specialist is the **executor**, not the strategist. Strategic decisions (awareness, sophistication, Big Idea, offer composition, chain of beliefs) come from the brief. The specialist translates those decisions into an advertorial that camouflages perfectly as editorial content while still installing every belief the brief specifies.

---

## 2. When invoked

The orchestrator routes to advertorial-specialist when intent recognition (§5 of [CLAUDE](CLAUDE.md)) matches:

- "write the advertorial", "draft the advertorial", "write the article"
- "write the native ad", "draft the native", "build a native ad"
- "write an editorial piece for [magazine]"
- "redo the opening", "rewrite the body"
- "draft an advertorial for [offer]", "build a Forbes-style article", "write a print advertorial"

The orchestrator runs the **Brief readiness check** ([CLAUDE §6](CLAUDE.md)) before invoking. If the brief is Draft / In-Review / missing for this touchpoint, the orchestrator surfaces the gap before calling advertorial-specialist.

---

## 3. Required inputs

The specialist needs these to start. Missing critical inputs are escalated to the orchestrator.

**From the funnel brief** ([funnel-brief](core/strategic-frameworks/funnel-brief.md) of the specific funnel):

- §3.2 Mass Desire — the dominant desire calibration (advertorial often runs on the *promise* side: it teaches something the prospect is eager to discover)
- §3.3 Awareness Level — primary calibrator. Advertorials excel at **generating new demand** in Unaware and Problem Aware segments. Most Aware advertorials are rare — when awareness is high, the advertorial loses its reason to exist (the prospect already wants the product, no need to camouflage).
- §3.4 Sophistication — calibrates which of the 4 content types lands best (common mistakes, lists, case studies, how-to)
- §3.5 Avatar reference — voice anchors, blocking beliefs, lived-experience details, the specific pains to surface in the Personal Struggle section
- §3.6 Offer — full 7-component offer (the advertorial does NOT sell the offer directly; it pre-sells the *next step* — clicking through to the LP or VSL where the offer lives)
- §3.7 Big Idea — the editorial angle. For advertorial, the Big Idea must double as an *editorial hook* — i.e., it must justify the article's existence as content, not just as marketing.
- §3.8 Chain of Beliefs — the rings the advertorial installs (typically Rings 1-2-3 for Problem Aware; full chain for Unaware long-form on prestigious magazines for authority-building)
- §3.9 Proof inventory — testimonials, data, studies, authority cites. Critical for the Ethos-Pathos-Logos requirement (§4.7 of this file).
- §3.10 Reference pointers — which testimonials, transcripts, swipe rows to pull
- §4.2 / §4.3 Touchpoint block for this advertorial — section sequence + belief mapping + length target + variant (native online vs print)

**From the brand wiki**:

- `brands/<brand>/brand-copy-rules.md` — voice (mandatory). For print, voice must also be calibrated to the magazine's editorial register — see §6.14.
- `brands/<brand>/swipe.md` — brand-specific advertorial examples for voice calibration
- `brands/<brand>/offers.md` — the specific offer's full composition (the advertorial alludes to the offer, never reveals it in full)
- `brands/<brand>/testimonials.md` — proof rows for inline credibility
- `brands/<brand>/transcripts/` — founder anecdotes, customer stories, original quotes for the editorial tone

**From the cross-specialist writing libraries** (read once during pre-writing):

- [writing-principles](core/writing/writing-principles.md) — read SECTION C (Drafting methods) **before drafting** if the piece is long-form (typically over 1,500 words). Read SECTION A (principles) + SECTION B (anti-AI patterns) **post-draft** as Phase 3-4 refinement.
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — the strategic levers this piece activates. For advertorial, **Camouflage** is the dominant technique; **Gradualization** carries the body; **Mechanization** carries the solution reveal.
- Read [emotional-intelligence](core/writing/emotional-intelligence.md): (a) MANDATORY when the brief's touchpoint block names Emotional anchors — read those entries only; (b) if the brief names no anchors and the piece includes emotionally-led moments (problem dramatization, hook, future pacing), consult the relevant entries anyway (max 3 per piece) and flag the missing anchors to the copywriter as a brief gap. Note: the Personal Struggle lead (§5.3) is an emotionally-led moment by design — most advertorials qualify under branch (b) even when the brief is silent.

**From the component specialists** (read each one when writing its corresponding advertorial section — see §5):

- [headline-specialist](section-specialists/headline-specialist.md) — for the editorial-style headline (§5.1). Advertorials use one of two patterns: **How-To** or **Case-Study** (the latter is the How-To on steroids — see §5.1).
- [hook-specialist](section-specialists/hook-specialist.md) — for the opening hook (§5.1) — the very first line that pulls the reader into the article voice
- [lead-specialist](section-specialists/lead-specialist.md) — for the Personal Struggle section (§5.3)
- [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) — for the mechanism / solution reveal (§5.5)
- [bullet-point-specialist](section-specialists/bullet-point-specialist.md) — for bullet lists (§5.7)
- [offer-specialist](section-specialists/offer-specialist.md) — for the offer block (§5.8) — note: in advertorial the offer is *alluded to*, not fully revealed. Read for the principles, then dial back to "tease + link to LP".
- [faq-specialist](section-specialists/faq-specialist.md) — rarely used in advertorial; only when piece runs very long (3,000+ words) and explicit objection-handling is needed before the bridge to the LP

**From the copywriter (the request)**:

- Variant: **native online** vs **print advertorial** (if not specified in the brief)
- Formula: **#1** (info-products, software, courses, memberships) vs **#2** (physical products, services, commodities)
- Goal: **lead generation** vs **direct sale** vs **authority building** (the latter is print-specific)
- Placement / host platform (Taboola / Outbrain / Yahoo Gemini / Facebook / specific magazine name)
- Length target (if not specified)
- Any user-provided swipe (takes priority over generic conventions)

---

# PART B — Format expertise

## 4. Core principles

### 4.1 — The Camouflage Principle ("more hidden = better it works")

The advertorial is paid content that **does not look paid**. It mimics the host platform's editorial template — same fonts, same paragraph rhythm, same sidebar layout, same byline conventions. The reader must approach it as content, not as advertising.

This is not a stylistic choice — it is the **core mechanism of persuasion**. The moment the reader recognizes "this is an ad", the defenses go up and the click-through rate collapses.

**Diagnostic question for any layout / paragraph choice**: *"If I were a reader scrolling through this magazine / feed, would this jump out as an ad?"* If yes, the camouflage is broken — fix it before publishing.

### 4.2 — Pre-Suasion (Cialdini) — "the prospect discovers you, not vice versa"

A standard ad interrupts the reader: *"Stop what you were doing, look at my product."* The advertorial inverts this: *the reader, in a state of curiosity, finds an article that happens to be exactly what they were looking for.* The advertorial does not feel inflicted — it feels discovered.

The implication for writing: **never break the editorial illusion with a sales register**. No "buy now", no "limited time offer", no exclamation marks chained three at a time. The reader who feels in control will keep reading. The reader who feels sold-to will bounce.

### 4.3 — Pre-Sell the Next Step (never sell the product — advance the funnel)

The advertorial does NOT sell the product. It sells **the next click**: the click to the landing page, the click to the opt-in pop-up, the click to the VSL. The product is sold elsewhere — on the LP or VSL that the advertorial bridges to.

Why this matters: the reader is in *editorial mode*. They are willing to read, willing to learn, willing to be intrigued. They are NOT yet in *transactional mode*. Trying to close the sale inside the advertorial breaks the camouflage AND wastes the persuasion arc that should culminate on the LP.

**Operational rule**: the advertorial's CTA never reads *"buy now"* — it reads *"continue reading / discover / learn more / click here to see [X]"*. The sale lives downstream. (Canonical verification of the no-offer-reveal rule: §12 checklist, CTA & links block.)

### 4.4 — Information Before Product

The advertorial teaches the reader something useful before any pitch. This is non-negotiable. The reader who finishes the piece must feel they learned something — even if they don't click through.

In practice: explain the problem mechanism, share a case study, list common errors, demonstrate the right method. The reader's *"this was worth reading"* feeling is the reading-fee they pay for staying engaged through the piece.

This principle drives the choice of the 4 content types (§6.1): **common mistakes**, **lists**, **case studies**, **how-to**. Each one of them centers on teaching — delivering something the reader didn't know.

### 4.5 — The 50/50 Rule (content / design)

Half of an advertorial's success is the copy. The other half is the design — the layout, the image, the typographic mimicry of the host platform. A brilliant copy on a layout that screams "ad" will underperform a decent copy on a layout that camouflages perfectly.

The specialist writes copy AND writes the design directions (`[DESIGN NOTE:]`, `[IMAGE NOTE:]`, `[LAYOUT NOTE:]`) so the designer renders the surface correctly. Leaving the visual layer to chance kills half the persuasion power.

### 4.6 — Authority Borrowing (print-specific, long-term ROI)

For print advertorials on prestigious magazines, the **direct ROI is often unprofitable**. An €8,000 investment to appear in Forbes will rarely return €8,000 in direct sales from that single article.

The real ROI is **long-term and indirect**: the logo of Forbes / Fortune / Millionaire becomes a perpetual social-proof asset that the brand re-uses on every landing page, every email, every social ad. The Gary Halbert trick (§6.14.3) — using your own quoted text from the article as if the magazine itself said it — multiplies this asset.

**Operational implication**: for print, the writing goals are not "convert this article" but "produce reusable authority assets". The piece is engineered for downstream re-use.

### 4.7 — Ethos, Pathos, Logos (Aristotle, minimum 2 of 3)

Every advertorial must include at least two of the three persuasion axes:

- **Logos** — logic, reason, proof. Structure of the article (opening / body / closure), references to studies / statistics / case studies, comparisons, analogies, metaphors.
- **Pathos** — emotions, values. Stories, inspirational quotes, vivid impact language.
- **Ethos** — credibility, trust. Personal branding, confidence in the communication, citing credible sources.

If all three are present, the piece is stronger. Two is the floor. One alone underperforms because the reader is missing either the rational case (logos), or the emotional pull (pathos), or the trust anchor (ethos).

### 4.8 — Marketing Thesis as spine

Like every other piece in the Copy Genius system, the advertorial argues one single thesis (articulated by [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) from the brief's UM block):

> *The [qualifier] way for [avatar] to achieve [result] is through [Unique Mechanism].*

The advertorial never states this thesis as a slogan — it lets the reader *arrive* at it through the article's argumentation. Every section pushes the reader closer to internally articulating the thesis. The CTA then bridges the reader to the LP, where the thesis can be stated more openly.

---

## 5. Anatomy & components

The functional blocks of an advertorial. Not all pieces use all blocks — the brief specifies which are present. The order is also brief-driven; this catalog defines *what each block does at the advertorial level* and *how to tune it for editorial-camouflage execution*.

**Architecture note**: for components whose craft applies across many formats (hook, headline, lead, mechanism argumentation, offer block, bullets), this specialist delegates the universal craft to the corresponding **component specialist** and supplies only the advertorial-specific execution tuning. The advertorial-specialist remains the writer of the whole piece — it does not hand off sections, it reads the component specialist files inline and applies the craft within advertorial context.

### 5.1 — Hero block (headline + opening)

The opening is the camouflage gate. If the opening reads as an ad, the rest of the piece is dead.

**Pre-headline (optional)** — small text, sets editorial context. Common patterns:
- *"Warning: do not [verb] before reading this"*
- Author byline emulating the magazine's style (*"by [First Last] — Editor, [Outlet]"*)
- Section tag of the magazine (*"Business / Economy / Health"*)

> **Case-study material** (historical swipe, here and throughout this file): use for structure and psychology — never imitate its register; brand-copy-rules governs the voice.

**Headline (H1)** — editorial-style, not sales-style. Two canonical patterns:

- **How-To pattern** — generic instructional. *"How to write a sales page in 12 simple steps"*. Works in all niches. Risk: overused — a good rule of thumb is **never more than 30% of your output in this pattern**, otherwise pieces look templated.
- **Case-Study pattern** — the How-To on steroids. *"The 12-step formula for writing sales pages that lifted our conversions by 354%"*. Adds a specific case + a measurable result + a number. Always prefer this when you have a real case to anchor to.

Production of headline candidates is the job of [headline-specialist](section-specialists/headline-specialist.md); the advertorial-specialist uses the approved headline as supplied and tunes it for editorial register.

**Sub-headline / opening line** — the first line of the body. Often serves as the **tease to the main problem** — alluding to what the reader will discover by reading on, without revealing it.

**ATF visual** — image, ATF photo, or magazine-page layout (for print):
- Native online → photo respecting the 4 principles (§6.7) and the 7 tested rules
- Print → must mimic the magazine's editorial photo style (cropping, composition, color treatment)

**Commercial-Communication disclosure** — required by regulation. Position it as inconspicuously as possible — top-left corner, small font. Never centered, never bold, never near the headline. The disclosure is unavoidable; its visibility is your choice.

### 5.2 — The 3-Yes Opener (agreement state)

Right after the hero block, the body opens with **three rhetorical questions or statements that the reader will internally answer with "yes"**. This puts the reader in a state of mental agreement and reduces resistance to the rest of the article.

The questions can be:
- **Explicit**: *"Do you want sculpted abs? Do you want to break free from chronic fatigue? Do you want to sleep better?"*
- **Implicit**: paragraphs that describe a state the reader recognizes (*"If you've been following the market lately... you've probably noticed that many cryptocurrencies are exploding..."*). The reader internally agrees: *"yes, I've noticed."*

**Why 3**: Cialdini's commitment principle. Three small "yeses" build a chain — once the reader has agreed three times, they are mentally committed to the article's thesis and more likely to keep saying yes.

This block is not always a literal section — sometimes it's woven into the first 2-3 paragraphs. But the **3 yeses must be present** somewhere in the first 200-300 words. The canonical verification lives in the §12 checklist (Structural block).

### 5.3 — Personal Struggle (lead section)

Apply the craft from [lead-specialist](section-specialists/lead-specialist.md).

Advertorial-specific tuning:

The lead in an advertorial is **always a story** — the protagonist's (or a customer's) struggle. Structure:

1. **The personal story** — *"I was in this condition, with these problems"* (or in 3rd person for case-study format: *"Mariano was in this situation…"*)
2. **The failed solutions** — *"I tried this, this, and this — and nothing worked"*
3. **The Aha moment** — *"Everything changed when I discovered X…"* (or *"He finally found an agency that told him…"*)

The lead does not need to be long. 200-400 words is typical. What matters is the **3-beat structure** — without all three beats, the reader doesn't feel the arc of struggle → discovery and the rest of the piece loses its narrative spine.

For mobile native ads, paragraphs in the lead are 3-5 lines max. For print, paragraphs follow the magazine's editorial column rhythm.

### 5.4 — Bifocal Tease (Formula #1 only)

Specific to **Formula #1** (info-products / software / membership). After the lead, before the body solution, the writer flags two layers of problem:

1. **Surface problem** — what the reader is *consciously* aware of wanting to solve (write a sales page, lose weight, sleep better)
2. **Deep problem** — the deeper problem the reader didn't know they had, that the product also solves

Example: the headline promises a 12-step formula to write a sales page (surface problem). The bifocal tease flags that *"even with the formula, writing a sales page is long and demanding — and I have a solution for that too"* (deep problem: time / energy → hire a copywriter / use a tool).

The bifocal tease is a **strategic loop** — it opens a second curiosity gap that gets resolved later in the piece, after the first one is closed. It doubles the reader's reason to keep reading.

Skip this section entirely for Formula #2 (physical products / services / commodity), where the structural arc is simpler.

### 5.5 — Mechanism / solution body

Apply the craft from [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md).

Advertorial-specific tuning:

This is the **body of the piece** — typically 40-60% of the total word count. Two variants based on formula:

**Formula #1 — body = "Solve the surface problem" + "Solve the deep problem"**
- Step-by-step solution to the conscious problem (Step 1, Step 2, Step 3…)
- Image for each step (`[IMAGE NOTE: ...]` direction) — visual interest signals editorial layout
- Generous content density: *"Give a lot of content. Don't be shy. Astonish them and be useful."* The reader who consumes tangibly useful information starts to trust the source and opens up to the second problem (the deep one).
- Then: explain why the second problem is crucial, present its solution (which conveniently lives in the product / service being advertised)

**Formula #2 — body = "Step-by-step solution" + "The Crucial Step"**
- Step-by-step solution to the main problem (Step 1, 2, 3 with before/after images where applicable)
- Then: **the Crucial Step** — detail why one specific step is the key, and why the competition does NOT do this step properly. Link the product / service as the unique provider of that critical step.

In both formulas: **in-line links** at strategic points (start, middle, end of body) — see §5.9.

The Marketing Thesis lands implicitly in this section: by the time the reader finishes the body, they can internally articulate *"The [qualifier] way to get [result] is through [UM]"*. The advertorial never says this sentence verbatim — it lets the reader arrive at it.

### 5.6 — Proof integration (Ethos / Pathos / Logos)

Two options at the advertorial level:

- **Integrated proof** — testimonials, data points, authority cites woven into the flow next to the claim they support. Preferred default for advertorial — the editorial register suits prose-embedded proof, not stacked testimonial blocks.
- **Dedicated proof block** — rare in advertorial. Used only when the proof volume is so heavy (a published study, a major media feature) that it warrants its own paragraph.

The advertorial pulls proof from three axes (per §4.7):

| Axis | Native online tactic | Print tactic |
|---|---|---|
| **Logos** | Reference to studies, screenshots of data, quoted statistics | Quoted research, numbered case data, comparison table |
| **Pathos** | Customer story, inspirational quote, vivid impact language | Founder narrative, customer testimonial as paragraph |
| **Ethos** | Founder credentials, third-party logos (small, in sidebar) | Citing magazines, awards, years of experience, list of clients |

Minimum 2 of the 3 axes per piece. Three is stronger.

### 5.7 — Bullet points

Apply the craft from [bullet-point-specialist](section-specialists/bullet-point-specialist.md).

Advertorial-specific tuning:

- Deployed under "What you'll discover" framings or as the step-list inside the body solution (Step 1 / Step 2 / Step 3 are technically bullets in disguise)
- Visual treatment: indented list with markers, white space, optionally numbered for step sequences
- End with *"And much more..."* only if genuinely true
- For print, mimic the magazine's bullet style (some magazines use em-dashes instead of dots, some prefer numbered checklists — match the editorial template)

### 5.8 — Offer tease + CTA bridge

Apply the craft from [offer-specialist](section-specialists/offer-specialist.md) — but **dial back significantly**. The advertorial does not reveal the full offer. It does NOT show:
- The price (naked or with reason-why)
- The full bonus stack
- The guarantee
- The urgency / scarcity

What the advertorial DOES include:
- A **summary of what the reader has discovered** in the article (*"In this article you discovered that to [result] you need to [step 1], [step 2], [step 3]"*)
- A **link to the product / service** as the resource that delivers all of this (*"Click here for [next step]"*)
- An optional **request for comments / questions** to seed social proof (*"What do you think? Leave a comment below"*) — works on native online, less so on print

**CTA copy rules**:

- **Direct, never timid**. NO: *"Why not try a free pack of...?"* YES: *"Click here to receive a free bottle"*.
- **Specific, never generic**. NO: *"Click here to learn more"*. YES: *"Click here to discover how [specific benefit]"*.
- **Confident, never apologetic**. NO: *"I hope this might interest you"*. YES: *"Discover this method now"*.

**Bridge function**: the CTA pulls the reader from editorial mode into transactional mode — but the transaction happens on the LP, not here. The CTA's job is to deliver a warmed-up, partially convinced prospect to the next touchpoint.

### 5.9 — In-line links policy

The advertorial must contain **at least 3 in-line links** — at the start of the body, in the middle, and at the end. More is fine. (Canonical verification: §12 checklist, CTA & links block.)

In-line links are sentences (or fragments) that contain a hyperlink to the destination (LP, opt-in, VSL). The link is woven into the prose, not a banner or button: *"This method lets you lose 14 kg. In fact, [a ScienceDaily article] shows that…"*

Why: skimmers who scan the article without reading deeply will see the bolded / linked phrases and click out of curiosity. In-line links also reinforce the editorial illusion — articles online routinely link out, ads typically don't.

**For print**: in-line links don't exist physically. The equivalent is **seeding URLs and brand references** in the prose (*"visit www.[brand].com for…"*, *"the book [title] develops…"*), so motivated readers can find the destination. Don't overdo it: 1-2 references max in a magazine advertorial, or the piece reads as a brochure.

### 5.10 — Sidebar / banner area (native online only)

A native ad article almost always includes a **sidebar offer** — a banner or text box on the right side of the page (or the top, on mobile) that travels with the reader as they scroll. The sidebar usually:

- Displays an opt-in form (email capture in exchange for a lead magnet)
- Or a secondary CTA (*"Download the free guide"*)
- Sometimes both (top + side)

**Operational rule**: the sidebar copy is *not* duplicated body copy — it's a parallel persuasion track that catches readers who skim past the in-line links. Treat it as a mini-ad of its own: short, specific, action-oriented.

For mobile native, the sidebar collapses to the top of the page (header position).

### 5.11 — Pop-ups (native online only)

Three pop-up types, all valid, all combinable:

- **On-load pop-up** — appears as soon as the page opens. Aggressive but high-volume. Often a multi-step opt-in (quiz, custom quote, *"what language do you want to learn?"*).
- **Delay pop-up** — appears after N seconds (typically 20-30 seconds). The reader who stays this long is engaged enough to be worth interrupting.
- **Exit-intent pop-up** — appears when the cursor moves toward the browser-close. Last-chance capture for the reader who is leaving — typically an opt-in with a strong lead magnet.

**Tool**: Optin Monster ([optinmonster.com](https://optinmonster.com/)) for WordPress sites — historical reference data (2019-2021 era), verify before relying on it; any current pop-up builder with the three trigger types works.

Pop-ups should NEVER appear in print (obvious) and should be used sparingly — one or two per article, not three.

### 5.12 — Footer / comments section (native online)

Native ads designed to look like blog articles include a comments section at the bottom. This serves social proof: pre-seed real comments from existing customers to signal engagement and credibility.

If commenting isn't an option (technical or moderation reasons), display a count of shares / likes / views as social-proof anchor.

---

## 6. Format-specific conventions

These are the conventions that make an advertorial *read like editorial*, not like a long sales page or a Facebook ad. They live in the visual layer as much as in the copy layer.

### 6.1 — The 4 Content Types (which model to follow)

The advertorial follows one of 4 tested content templates, selected by niche and goal:

| Template | Phrasing | Best for |
|---|---|---|
| **Common Mistakes** | *"Are you making these mistakes in...?"* | Practically all niches — works as a universal opener |
| **Lists** | *"3 ways to [result]"*, *"7 steps to..."* | Health, fitness, finance, productivity |
| **Case Studies** | *"How Marco earned X in 21 days"* | B2B, make-money, business — proof-heavy contexts |
| **How-To** | *"How to solve [problem] with [unusual element]"* | Generic — works but heavily overused; cap at 30% of your output |

The brief usually flags which template fits the awareness + offer. When ambiguous, **default to Case Studies** if a real case exists in the brand wiki, otherwise **Common Mistakes**.

### 6.2 — Editorial Camouflage (the dominant convention)

The single most important convention. The advertorial must visually and tonally mimic the host platform:

**For native ads online**:
- Layout matches the host (Taboola → looks like a Taboola feed item; Outbrain → looks like Outbrain's content cards)
- Fonts, color palette, sidebar structure match the host's editorial pages, NOT the brand's own design system
- Author byline, publish date, share buttons — all present, all rendered as the host would render them
- The destination article page (after click) ALSO mimics editorial: blog-style header, body column, related-articles sidebar

**For print**:
- Column width matches the magazine's editorial columns (not the magazine's ad widths)
- Headline font is the magazine's editorial font, not a custom sales font
- Paragraph rhythm, paragraph length, sub-headline frequency all match the magazine
- No glossy product photos — use journalistic photography (or none)

The advertorial breaks camouflage the moment any one of these signals goes off — and once camouflage breaks, the reader treats the whole piece as an ad.

### 6.3 — Commercial-Communication disclosure placement

The disclosure is legally required. Its visibility is a writing choice:

- **Position**: top-left corner, never centered, never near the headline
- **Size**: smallest legal font size
- **Color**: muted, never bold, never colored
- **Phrasing**: the regulation typically allows variants — *"Commercial communication"*, *"Sponsored content"*, *"Sponsored"*, *"BrandVoice"* (Forbes Italy's clever euphemism). When the host platform offers a softer phrasing, use it.

Premium native placements (a magazine's branded-content program, e.g. *"BrandVoice"*) can feel so editorial that most readers don't register the sponsorship signal.

### 6.4 — Two Reading Levels (skimmer strategy)

Same as LP — an advertorial is read by both a deep reader and a skimmer. The skimmer reads:

1. Headline
2. Sub-headline
3. Sub-headlines (H2s) throughout
4. Bold phrases
5. Bullet points
6. Image captions
7. CTA copy + in-line links

**Operational rule — the sub-headline test**: read the sub-headlines in sequence. They must constitute a complete editorial argument. Blind sub-headlines (*"The Truth", "The Story"*) collapse this layer — replace with sub-headlines that name what the section delivers.

**Operational rule — the bold test**: bold phrases in sequence must form a coherent micro-message, never confetti.

### 6.5 — Editorial tone discipline

The advertorial's prose **must not slip into sales register**, even at climactic moments. Sales register signs to watch:

- Three or more exclamation marks
- Direct address with imperative verbs in close cadence (*"Buy! Click! Order!"*)
- Phrases like *"limited offer"*, *"exclusive discount"*, *"only for the first X"* in the body (these belong on the LP)
- Capital letters for emphasis (occasional ok, frequent = ad)
- ROI/conversion language exposed to the reader (*"this converted 432% better"*)

When emotional intensity rises, raise it through **vivid imagery and specific detail**, not through sales markers. A well-documented launch pattern illustrates this: a sales letter only average by its own author's admission still produced an outsized result — because the list was pre-qualified (a warm internal audience) and the offer was irresistible (one bonus alone worth several times the product price). The copy was the smallest contributor — list + offer carried the campaign.

The advertorial-specialist writes the best copy possible, while transparently acknowledging the upstream variables that dwarf its contribution.

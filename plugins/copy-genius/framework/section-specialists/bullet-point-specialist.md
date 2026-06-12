# Bullet Point Specialist — Section Specialist

> Section specialist. Writes **bullet points** — curiosity bullets, tease bullets, page-reference bullets, mystery bullets, contrarian bullets, specific-result bullets — for any format that requires them (landing pages, sales letters, advertorials, emails, VSL scripts, ad bodies, value-stack blocks).
>
> A bullet point is a **micro-promise that combines a concrete benefit with withheld curiosity**: the reader knows WHAT they will get but not HOW. The curiosity gap can only be closed by buying. The legacy version of this specialist in the previous Copy Genius system was identified as the best-functioning craft component — this file preserves that craft, rebranded from "fascinations" to "bullet points" and adapted to the new orchestration model.
>
> Invoked by the orchestrator ([CLAUDE](CLAUDE.md)) on direct user request for a standalone bullet block, OR by any full-piece specialist that requires a bullet section during its own writing flow.
>
> **Self-contained file**: this specialist holds the bullet-point craft (the 22 formulas, the 6 advanced structural patterns, the density rules, the awareness mapping, the quality discipline). It does not delegate any sub-component — bullets are atomic units, not composite ones.

---

## 0. Execution path — read this first

> **Inline invocation** (called mid-piece by a format specialist — the COMMON case): take the request parameters (§3 — count, position, bullet types) → apply the 5-step generation process (§9.1) with the awareness × formula mix (§8.1) → deliver the tagged block (§10) → mini-check: "so what?" (§4.1), HOW withheld (§4.2), no two adjacent same-formula bullets (§4.6). Do not run the full §12 checklist.
>
> **Standalone invocation** (direct request, e.g. "scrivi 10 bullet per X"): full protocol — §3 inputs → §8 density and mix selection → §9 application protocol → §10 output → §12 revision checklist.
>
> **Tier 1 bans apply while DRAFTING** (writing-principles B.1–B.3): zero em-dash, no "Not X. But Y.".
>
> **Swipe**: read the [bullets library](swipe/elements/bullets.md) IN FULL before generating variants — templates are emotion-agnostic, re-instantiate with the brief's anchor; verbatim stays in its original language, generate natively in the target language. Cite the template's `from:` slug in variant metadata. If empty, proceed without.
>
> **Reference/appendix sections — consult on demand only**: §A1 formula catalog (during drafting, formula by formula), §A2 structural patterns (only when the block needs block-level architecture), §11 pitfalls (at QA).

---

## Quick navigation

### Part A — Identity & scope
- §1 [Purpose](#1-purpose)
- §2 [When invoked](#2-when-invoked)
- §3 [Required inputs](#3-required-inputs)

### Part B — Component expertise
- §4 [Core principles](#4-core-principles)
- §5 [Anatomy of a bullet point](#5-anatomy-of-a-bullet-point)
- §6 [Format-specific conventions](#6-format-specific-conventions)
- §7 [Compositional patterns — the 22 formulas](#7-compositional-patterns--the-22-formulas)

### Part C — Operational workflow
- §8 [Selecting bullet density and formula mix](#8-selecting-bullet-density-and-formula-mix)
- §9 [Application protocol — bullet-specific notes](#9-application-protocol--bullet-specific-notes)
- §10 [Output formats](#10-output-formats)

### Part D — Quality control & references
- §11 [Common pitfalls](#11-common-pitfalls)
- §12 [Revision checklist](#12-revision-checklist)
- §13 [Cross-references](#13-cross-references)

### Appendix
- §A1 [Bullet formula catalog — the 22 formulas in full](#a1-bullet-formula-catalog--the-22-formulas-in-full)
- §A2 [6 advanced structural patterns (HF1-HF6)](#a2-6-advanced-structural-patterns-hf1-hf6)

---

# PART A — Identity & scope

## 1. Purpose

Produce ready-to-deploy bullet point blocks for:

- **Curiosity bullets** — micro-promises that combine a concrete benefit with withheld curiosity. The reader knows the WHAT, never the HOW.
- **Tease bullets** — bullets whose only job is to make the reader desperate to read on / click / buy
- **Page-reference bullets** — bullets that anchor a curiosity gap to a specific deliverable location (*"On page 37 you'll discover…"*) — tangibilizes the content
- **Mystery bullets** — the most aggressive curiosity device, where the bullet hints at an unnamed thing and the reader can only resolve by acquiring the product
- **Contrarian bullets** — bullets that destroy a conventional belief (*"Why [common practice] is making your problem WORSE"*)
- **Specific-result bullets** — bullets compressed around a verifiable specific number or outcome
- **Benefit-stack bullets** — bullets in the value-stack of an offer block where each bullet is itself a curiosity engine
- **Bonus-title-as-bullet** — bonus titles inside an offer rewritten so each title functions as a bullet rather than as a description

Does NOT produce:

- Full sales letters, landing pages, VSL scripts — handled by the format specialists ([lp-specialist](format-specialists/lp-specialist.md), [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md), [advertorial-specialist](format-specialists/advertorial-specialist.md), etc.)
- The offer block itself — handled by [offer-specialist](section-specialists/offer-specialist.md). The bullet specialist supplies the bullets INSIDE the offer block on request
- Hooks, headlines, leads, mechanism arguments, FAQ — handled by the respective component specialists
- Strategic decisions about which beliefs to install — those come from the brief

The specialist is the **executor**, not the strategist. The number of bullets, their position in the piece, the beliefs they tease, the awareness level they target — all come from the brief or from the requesting format specialist. This specialist translates those decisions into bullets that pass the *"so what?"* test, withhold the HOW, and earn the click.

---

## 2. When invoked

The orchestrator routes to bullet-point-specialist when intent recognition (§5 of [CLAUDE](CLAUDE.md)) matches:

- "write bullets", "scrivi i bullet", "I need curiosity bullets"
- "scrivi le fascination" (legacy term — same specialist; the new vocabulary is "bullet points")
- "give me bullets for the value stack", "draft the bonus titles as bullets"
- "rewrite this bullet block — too weak", "tighten the bullets in this section"

Also invoked **internally** by format specialists when their own writing flow reaches a bullet section:

- [lp-specialist](format-specialists/lp-specialist.md) §5.6 — when the LP body uses bullet lists
- [advertorial-specialist](format-specialists/advertorial-specialist.md) — when the advertorial body uses tease lists
- [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md) — when the script uses spoken bullet sequences (the duration tiers — short, 3-7 min, medium, long — are sections of that single file)
- [email-specialist](format-specialists/email-specialist.md) — when the email body uses 3-5 strongest bullets to generate the click
- [ad-specialist](format-specialists/ad-specialist.md) — when an ad body uses bullets as internal frustration markers or feature tease

The orchestrator runs the **Brief readiness check** ([CLAUDE §6](CLAUDE.md)) before invoking. If the brief is missing the proof inventory or the product content needed to feed the bullets, the gap is surfaced before the specialist is called.

---

## 3. Required inputs

The specialist needs these to start. Missing critical inputs are escalated to the orchestrator.

**From the funnel brief** ([funnel-brief](core/strategic-frameworks/funnel-brief.md) of the specific funnel):

- §3.3 Awareness Level — determines which formula categories dominate (see §8.1)
- §3.4 Sophistication — calibrates the aggressiveness of curiosity claims
- §3.5 Avatar reference — voice anchors + the specific frustrations / aspirations bullets can tease
- §3.6 Offer — full composition including bonuses, modules, chapters (raw material for bullets)
- §3.7 Big Idea — the angle bullets must reinforce
- §3.8 Chain of Beliefs — bullets tease specific rings without fully installing
- §3.9 Proof inventory — proof bullets pull from this
- §3.10 Reference pointers — which testimonials, transcripts, swipe rows to pull
- §4 (touchpoint) — the touchpoint where the bullets land + the format-specific density target

**From the brand wiki**:

- `brands/<brand>/brand-copy-rules.md` — voice (mandatory)
- `brands/<brand>/products.md` — the product's contents (chapters, modules, components, page numbers when info-products) — primary raw material for bullets
- `brands/<brand>/offers.md` — the offer being supported (when bullets serve a value stack)
- `brands/<brand>/swipe.md` — brand-specific bullet examples for voice calibration
- `brands/<brand>/testimonials.md` — for proof-driven bullets and specificity-shock bullets

**From the cross-specialist writing libraries** (read once during pre-writing):

- [writing-principles](core/writing/writing-principles.md) — read SECTION A (principles) + SECTION B (anti-AI patterns) post-draft as Fase 3-4 refinement
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — bullets operate as Intensification micro-units; the specialist applies the Intensification mechanics within each bullet
- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — every bullet teases a specific ring without resolving it
- [emotional-intelligence](core/writing/emotional-intelligence.md) — **conditional**. Open ONLY when the brief specifies emotional anchors for the bullet block. Read ONLY the emotion entries listed.

**From the requesting format specialist** (when invoked internally):

- The format being written (LP / VSL / advertorial / email / ad)
- The position of the bullet block in the piece (after lead / inside offer / before final CTA / mid-section tease)
- The bullet count requested (e.g., 15 bullets for an LP value stack; 3-5 for an email)
- Any pre-existing bullets being modified (vs producing from scratch)
- The specific bullet types requested (curiosity-dominant / page-reference / contrarian / mystery)

**From the copywriter (the request)**:

- Bullet count if not specified in the brief
- Position in the piece if not specified
- Any constraint (must reference a specific testimonial / module / page; must avoid a specific claim; must work without page numbers)
- Any user-provided swipe (takes priority over generic conventions)

---

# PART B — Component expertise

## 4. Core principles

### 4.1 — The *"so what?"* test

Every bullet must survive a single question asked from the reader's chair: *"so what?"*

If the bullet's answer is a shrug — *"so what, everyone says that"* / *"so what, I already know that"* / *"so what, that does not interest me"* — the bullet has failed. Rewrite until the reader's silent answer is *"I need to know that. I need to read on."*

This is the most-applied diagnostic in bullet writing. Run it on every bullet before delivering the block.

### 4.2 — Give enough to DESIRE, never enough to SATISFY

The bullet's job is to create curiosity, not to deliver value. A bullet that resolves itself — that explains the HOW alongside the WHAT — has given away the gap that would drive the click or the purchase.

| | Wrong | Right |
|---|---|---|
| **Tells the WHAT and HOW** | *"Drink lemon water on an empty stomach to alkalize your body"* | *"The morning ritual that alkalizes your body before breakfast — without supplements or special equipment (Page 42)"* |
| **Generic promise** | *"Lose weight quickly"* | *"How to drop your first dress size in 21 days — even if you have failed every diet you have tried"* |
| **Resolves curiosity** | *"Use the 4-7-8 breathing technique to reduce anxiety"* | *"The 4-second breathing pattern that turns off anxiety — even in the middle of a panic attack (Page 18)"* |

The right column tells the reader exactly what they will achieve. The left column tells them how to achieve it — collapsing the curiosity gap that would drive them to act.

**Rule**: every bullet promises a specific outcome and withholds the operational mechanism. The mechanism is the product.

### 4.3 — A bullet point is NOT

For clarity, the catalog of what a bullet is NOT:

- ❌ A **feature list** — *"24 video modules + 4 bonuses + lifetime access"* is a spec sheet, not a bullet
- ❌ A **vague promise** — *"Improve your life dramatically"* is empty
- ❌ A **completed thought that satisfies curiosity** — *"To get better sleep, avoid screens 2 hours before bed"* is advice, not a bullet
- ❌ A **riddle with no benefit** — *"The secret that nobody tells you"* without naming what kind of benefit the secret unlocks is just cryptic
- ❌ A **paraphrase of the headline** — *"Discover the new method to [headline outcome]"* adds nothing

A bullet is a micro-promise with a clean curiosity gap and one concrete benefit. Anything else fails one of these tests.

### 4.4 — Autonomy — every bullet works in isolation

Each bullet must function as a complete persuasive unit on its own. Out of context — printed on a sticky note, read in isolation, pasted into a random thread — it still creates desire.

This rule is non-negotiable: blocks of bullets are consumed by skimmers who do not read in order. If bullet #7 depends on bullet #3 to make sense, the skimmer who lands on #7 first will read nonsense and disengage.

**Diagnostic**: pick any bullet from the block at random. Read it alone, with no surrounding context. Does it still make the reader want the product? If no, rewrite.

### 4.5 — One benefit per bullet — never stack

A single bullet promises a single outcome. Stacking two benefits in one bullet dilutes both and confuses the curiosity gap:

- ❌ *"How to fix your sleep and lose weight at the same time — even if you work shifts"* (two benefits, two gaps, neither sharp)
- ✅ *"How to reset your sleep cycle in 7 nights — even if you work shifts"* (one benefit, one sharp gap)
- ✅ *"The hidden mechanism that drives weight gain in shift workers — and how to interrupt it (Page 28)"* (separate bullet, separate gap)

Stacking is the most common amateur mistake. Train the eye to spot it on every draft.

### 4.6 — Vary the formula — never two in a row

A block of bullets that repeats the same formula structure twice in succession reads as monotonous and lazy. The skimmer's eye expects rhythmic variation; failing to deliver it makes the block feel auto-generated.

**Operational rule**: when drafting a block, after each bullet flag the formula used (e.g., F1, F2, F11). Verify no two adjacent bullets share the same formula tag. Reorder or rewrite when they do.

### 4.7 — Order within a block — strongest first, second strongest last

The architecture of a bullet block follows a specific persuasive shape:

- **Position 1**: the strongest bullet — earns the reader's attention to the block
- **Final position**: the second strongest — earns the conversion (click / scroll-on / purchase)
- **Middle positions**: volume — additional curiosity gaps that build cumulative desire without each having to single-handedly close the deal

This is why the order in which bullets are drafted matters less than the order in which they are presented. Always finalize the block by re-sorting per this rule.

### 4.8 — Alternate positive and negative

Mix bullets that promise *"what you will gain"* with bullets that warn *"what you are doing wrong"*. The alternation creates emotional rhythm — the reader cycles between aspiration (positive) and frustration / self-implication (negative), and each cycle deepens engagement.

A block of only positive bullets feels promotional. A block of only negative bullets feels punishing. Alternated, the block feels like a fully-rounded conversation about the reader's situation.

### 4.9 — Anchor to the product

Whenever the product has tangible reference points — page numbers, module numbers, chapter titles, video timestamps, lesson references — anchor the bullet to them. Page references and module anchors make the content **tangible** to the reader, signaling that the curiosity gap is concrete and resolvable.

- *"The 3-step sequence that…"* → weak (abstract)
- *"The 3-step sequence on Page 47 that…"* → strong (anchored)

For info-products this rule is mandatory on the majority of bullets. For non-info offers (services, supplements, software), the anchoring may not be possible — use it where realistic substitutes exist (*"the procedure inside Module 3"*, *"the protocol on Day 14 of the program"*).

### 4.10 — Parenthetical expansions on the strongest bullets

The 3-5 strongest bullets in a block can carry a parenthetical expansion — a brief extra detail in parentheses that adds proof, micro-story, or a personal aside. This is one of the most effective intensifiers in the bullet writer's toolkit.

- *"A simple at-home treatment for thinning hair, requiring almost no effort and time! (Show this one to your husband — he'll thank you for the rest of his life.)"*
- *"How to drop 17 pounds in 9 weeks. (Real result from Sarah, page 84 — without giving up bread.)"*

Use parentheticals selectively — over-use turns them into noise. The rule: only the 3-5 strongest bullets in any given block earn a parenthetical.

---

## 5. Anatomy of a bullet point

Unlike full-piece formats, a bullet point is **atomic** — it has no sub-components that need delegation to other specialists. The anatomy is internal:

### 5.1 — The two halves: WHAT promised + HOW withheld

Every bullet is structurally composed of two halves that must be present and in tension:

| Half | Role |
|---|---|
| **WHAT promised** | The concrete outcome the reader will achieve. Specific. Measurable when possible. Avatar-relevant. |
| **HOW withheld** | The operational mechanism, technique, sequence, or insight that produces the WHAT. **Never revealed in the bullet.** The HOW is the product. |

If either half is absent, the bullet fails:
- WHAT absent → riddle (no benefit anchored, just curiosity)
- HOW revealed → advice (the curiosity gap is closed; no reason to buy)

The bullet's quality is measured by the **width of the gap between the WHAT and the HOW** — wide gap + specific WHAT = strong bullet.

### 5.2 — The optional third half: the anchor

When applicable, a third component anchors the bullet to a tangible reference point:

- *"…(Page 47)"*
- *"…(Module 3, Lesson 2)"*
- *"…(Day 14 of the protocol)"*
- *"…in the bonus 'Quick-Start Toolkit'"*

The anchor doubles as proof that the content exists (this is not hand-waving — there is a specific page) and as a curiosity intensifier (the reader knows exactly where to go for the resolution, but cannot get there without paying).

Optional — but mandatory for info-products where the anchor is available.

### 5.3 — The optional fourth half: the parenthetical expansion

For the 3-5 strongest bullets in a block, a brief parenthetical expansion can carry:

- **Proof element** — *"(real result from Sarah, page 84)"*
- **Micro-story** — *"(the same trick that made my grandmother famous in her village)"*
- **Personal aside** — *"(show this to your husband — he'll thank you forever)"*
- **Specificity shock** — *"(works even if you have failed 5 previous diets)"*

Parentheticals layer additional curiosity OR additional credibility onto an already strong bullet. They never substitute for a weak primary structure.

### 5.4 — Length calibration

Bullets vary in length but follow density discipline:

| Length | Use |
|---|---|
| **1 line** (~12-20 words) | Quick-fire bullets in dense lists; email teaser bullets; ad body bullets |
| **2 lines** (~20-40 words) | Standard LP and advertorial bullets; majority of bullets in a sales letter |
| **3 lines** (~40-60 words) | Bullets with parenthetical expansion; the 2-3 strongest in any block |
| **4+ lines** | Rare. Usually a sign the bullet is over-explaining or stacking two benefits — review |

The density of the format dictates the average length — VSL spoken bullets stay shorter, long-form sales letters can carry longer bullets for the strongest 2-3. See §6 for format-specific tuning.

---

## 6. Format-specific conventions

Different formats consume bullets differently. The same craft underlies all of them, but the density, position, and visual treatment vary.

### 6.1 — Bullets per format (the density rule)

| Format | Total bullets | Block structure |
|---|---|---|
| **Sales / landing page** | **15-30 across 2-3 blocks** | Block 1: after lead + mechanism (6-10 bullets, value tease). Block 2: in offer / value stack (6-12 bullets, content reveal). Block 3 (optional): before final CTA (3-5 bullets, urgency / FOMO) |
| **Long-form sales letter** | **30-60 across 3-5 blocks** | Same logic, extended across the longer document. Each block 6-15 bullets |
| **Email** | **3-5 (strongest only)** | One block. Function: generate the click. Use only the most-curiosity-loaded bullets — no fillers |
| **Advertorial** | **8-15 across 1-2 blocks** | Block 1 (mandatory): mid-article tease. Block 2 (optional): in the offer block at the end |
| **Ad body** | **1-2 max** | Often the ad IS a single expanded bullet. When using a list, 2-3 max. Never more — the ad becomes a sales sheet |
| **VSL** | **10-15 rapid sequence** | 5-8 seconds per spoken bullet with visual support on screen. Often the bullet block is the highest-tempo segment of the script |
| **Carousel ad** | **1 bullet per card (3-7 cards)** | Each card carries one bullet. The image reinforces the curiosity gap |
| **Offer block (value stack)** | **5-10** | Each component / bonus title is rewritten AS a bullet (per pattern HF5 in §A2) |

**Between blocks**: never place two consecutive bullet blocks of 15+ bullets without an interrupting beat (testimonial, proof element, short narrative, story moment). Two consecutive long blocks produce reader fatigue and the second block gets skipped.

### 6.2 — Position inside the piece

The position of a bullet block dictates its dominant function and therefore its formula mix:

| Position | Dominant function | Recommended formulas |
|---|---|---|
| **After hero / lead** | Open the curiosity gaps that the rest of the piece will tease | F5 (Number+List), F2 (Named Technique), F13 (One Thing) |
| **After mechanism / argument** | Deepen the value perception of the mechanism | F11 (Page Reference), F7 (Exactly+Operational), F8 (Worst-Case Transformation) |
| **Inside offer / value stack** | Make each component / bonus feel essential | HF5 (Free Report Title as Bullet), F11, F2, F7 |
| **Before final CTA** | Last urgency + FOMO + reminder of stakes | F4 (Danger/Warning), F10 (Contrarian), F19 (Why X Kills Y) |
| **In the FAQ** (rare) | Convert remaining objections into curiosity | F18 (Anti-Method), F10 (Contrarian) |

### 6.3 — Visual treatment

| Format | Visual treatment |
|---|---|
| **Web LP / sales letter** | Indented list, bullet markers (• or ✓ or numbered), single line break between bullets, double line break between blocks |
| **Email** | Plain text, line break between bullets, no markers if simulating personal voice. Hyphen markers (-) for newsletter-style (never em/en-dash — writing-principles B.1) |
| **Advertorial** | Native-content style — sometimes no bullet markers, just line breaks, to preserve the editorial feel |
| **VSL on-screen** | One bullet per screen card, large font, accompanied by spoken delivery. Each card timed 5-8 seconds |
| **Print / direct mail** | Numbered list with strong typographic emphasis on the WHAT half (bold the outcome verb / noun) |
| **Carousel ad** | One bullet per slide, paired with image. Bullet text overlay or in the caption |

### 6.4 — Bullets by awareness level

The awareness level of the audience determines which categories of formulas dominate. See §8.1 for the full awareness × formula mapping table.

---

## 7. Compositional patterns — the 22 formulas

> **What this section is**: a reference grid of the 22 bullet formulas, organized by the dominant persuasion mechanic of each. Each formula has a structure and an example. Use as a generation engine: scan the formulas, pick the one whose mechanic matches the bullet you need to produce, apply the structure, iterate.
>
> **Discipline rule** (per §4.6): alternate formulas within a block — never use the same formula twice in a row. The 22 formulas exist precisely to give the writer enough variety to never repeat.
>
> **Full catalog with structure + examples**: see [§A1](#a1-bullet-formula-catalog--the-22-formulas-in-full). The summary below names the formulas and groups them by mechanic — the appendix is the operational reference.

### 7.1 — The 6 formula categories

**Benefit / Promise** — bullets that make a clean outcome promise
- F1 — "How to" + Obstacle Eliminated
- F2 — Named Technique + Unexpected Result
- F5 — Number + List Promise
- F7 — "Exactly" + Operational Specificity
- F13 — "One Thing" / Single Element
- F17 — Speed / Ease Promise

**Curiosity / Intrigue** — bullets that open a pure curiosity loop
- F3 — Secret / Discovery + Borrowed Authority
- F6 — Stealth / Paradox + Double Benefit
- F9 — Mundane-to-Extraordinary
- F11 — Page Reference / Module Anchor
- F20 — "Has Nothing To Do With" / Cause Elimination
- F22 — Mundane Object → Extraordinary Result

**Danger / Contrarian** — bullets that warn or invert conventional wisdom
- F4 — Danger / Warning + Dramatic Consequence
- F10 — Contrarian / Anti-Intuitive
- F19 — "Why X Kills Y" / Good Action → Bad Result

**Emotional / Sensory** — bullets that evoke physical / emotional response
- F12 — Named Mechanism + Vivid Sensory Result
- F15 — Seduction Words / Emotional Trigger

**Transformation / Proof** — bullets that demonstrate transformation or invert the necessary
- F8 — Worst-Case Transformation
- F18 — Anti-Method
- F21 — Situational Scenario

**Structural / Framing** (applied ON TOP of any of the above)
- F14 — Parenthetical Expansion
- F16 — Qualification / Emotional Pact

### 7.2 — How to combine formulas

The 6 categories are not exclusive — a single bullet can deploy a formula from one category and a structural framing from another (F14 or F16). Examples:

- **F1 (How to + Obstacle) + F14 (Parenthetical)**:
  *"How to write subject lines that get opened — even if you hate writing. (Page 37 — works even for people who claim they 'have no voice')"*
- **F2 (Named Technique + Unexpected Result) + F11 (Page Reference) + F14 (Parenthetical)**:
  *"The 'Nuclear Option' subject line — so potent it is almost guaranteed to get opened. (Page 12 — Sarah used it to wake up a dead list with 9.2% open rate.)"*
- **F10 (Contrarian) + F16 (Qualification)**:
  *"Ready to virtually eliminate spam complaints by sending MORE email? But only if you promise to apply this in order — see Module 3."*

The structural formulas (F14, F16) are multipliers — they layer ON TOP of a core formula from the other categories. Use them on the 3-5 strongest bullets in any block to lift them above the volume bullets.

### 7.3 — The 6 advanced structural patterns (HF1-HF6)

In addition to the 22 formulas, six **advanced structural patterns** operate at the level of *whole blocks* rather than individual bullets. They organize the block's argumentative shape.

Full descriptions in [§A2](#a2-6-advanced-structural-patterns-hf1-hf6). The summary:

- **HF1** — Problem Numbered Stack (systematic destruction of the competitive landscape)
- **HF2** — How-To + Parenthetical Kicker (the kicker neutralizes the main objection)
- **HF3** — Why Counter-Intuitive (each bullet destroys one conventional belief)
- **HF4** — Dirty Little Secret (the conspiracy frame — RAGE at insiders + SEEKING the secret)
- **HF5** — Free Report Title as Bullet (bonus titles rewritten as bullets)
- **HF6** — Specificity Shock (replace every vague quantity with hyper-specific data)

Use the advanced patterns when the block needs a specific persuasive job that a flat bullet list cannot perform — e.g., when destroying the competition systematically (HF1), when the value stack needs each bonus to fire its own gap (HF5), when the audience is skeptical and needs concrete numbers (HF6).

---

# PART C — Operational workflow

## 8. Selecting bullet density and formula mix

The brief usually specifies the bullet count and the position. When ambiguity exists, the specialist selects based on the criteria below — and surfaces the selection to the copywriter for confirmation if the brief is silent.

### 8.1 — By awareness level (the formula-mix table)

The awareness level of the audience is the primary calibrator for which formula categories dominate the block.

| Awareness | Focus of bullets | Dominant formulas | Typical pattern |
|---|---|---|---|
| **Most Aware** | Offer composition and purchase conditions. Bullets are rare — the offer itself does the work | Mostly skipped; if used: F11, F7 | *"Get [component] + [bonus] + [guarantee] for [price]"* — flat outcome bullets |
| **Product Aware** | Depth and specificity of content. The bullet answers *"why THIS product over the alternatives?"* | F11 (Page Reference), F7 (Exactly+Operational), F2 (Named Technique) | *"The exact formula on Page 47 for [operational task] that competitors charge $500 for"* |
| **Solution Aware** | Unique approach + credibility. Differentiates the offer's mechanism from the solutions the reader has tried | F2 (Named Technique), F3 (Secret+Authority) | *"The [Named Method] that [result] — unlike [common approach] which [why it fails]"* |
| **Problem Aware** | Errors, hidden causes, *"why nothing else has worked"*. Heavy on negative bullets | F4 (Warning), F10 (Contrarian), F19 (Why X Kills Y) | *"Why [thing everyone does] is making your [problem] WORSE. (Page X)"* |
| **Unaware** | Curious facts, surprising information. Rare — mainly used in ads and lead magnets | F14 (Parenthetical), F6 (Stealth/Paradox) | *"What happens when [everyday thing] meets [unexpected thing] — and how it ended up changing my marriage"* |

### 8.2 — By position in the piece (covered in §6.2)

See the position × formula mapping table in §6.2 — that table is the single source. Do not re-derive it here.

### 8.3 — By format density (covered in §6.1)

See the format × density table in §6.1 — that table is the single source. Do not re-derive it here.

### 8.4 — Proposing a bullet mix when the brief leaves it open

When the brief or the requesting specialist does not specify the formula mix, the bullet-point-specialist proposes a default mix based on (awareness × position) and surfaces it to the copywriter.

Example proposal — for an LP value-stack block, Solution Aware audience, 8 bullets:

```
PROPOSED MIX — 8 bullets for [Offer] value stack — Solution Aware

Position: §5.7 of the LP (after mechanism section, inside offer block)
Block role: tease the content of the modules so each feels essential
Formula distribution:
  3 × F11 (page-reference) — anchor to specific modules
  2 × F2 (named technique + unexpected result) — surface the proprietary mechanism's named tools
  1 × F3 (secret + authority) — borrow an expert cite the brief provides
  1 × F8 (worst-case transformation) — install the "even if you've failed" belief
  1 × F10 (contrarian) — destroy one alternative approach
Structural overlays: F14 (parenthetical) on bullets #1, #4, #8 — the 3 strongest positions
Order: strongest bullet (F2 with named mechanism) at #1; second strongest (F11 page-reference to module 1) at #8 (final)
```

The copywriter can adjust the mix before drafting starts.

---

## 9. Application protocol — bullet-specific notes

The specialist applies the universal **5-phase protocol** defined in [writing-principles §2](core/writing/writing-principles.md), adapted for component-level production (bullets are not whole pieces — some phases compress accordingly).

| Phase | Bullet-specific notes |
|---|---|
| **Fase 1 — Pre-writing** | 0. Read [feedback-rules](core/feedback-rules.md) (global) + `brands/<brand>/brand-copy-rules.md` (brand — overrides global). These apply to every line you write and are re-verified at QA (writing-principles Fase 4d). Then always read: brief §3 (per §3 of this file), brand `swipe.md` (1-2 bullet block examples if present), `products.md` (the raw material — chapters / modules / page numbers / components), the specific testimonials the brief references (raw material for specificity shock and proof bullets). For info-products: extract the table of contents / module list verbatim into a working scratch — this is the raw quarry the formulas will be applied to. **Conditional**: open [emotional-intelligence](core/writing/emotional-intelligence.md) ONLY if the brief specifies emotional anchors for the block. |
| **Fase 2 — Drafting (generation)** | Apply the **5-step generation process** (§9.1 below). Write **2× the bullets needed**, then cut the weakest half. Quality is determined by the weakest bullet in the block — over-generating and pruning is mandatory. Tag each bullet with its formula (F1, F2, etc.) during drafting to make the variation check in Fase 3 mechanical. |
| **Fase 3 — Principles refinement** | Universal pass per [writing-principles SECTION A](core/writing/writing-principles.md). Bullet-specific watch-points: (a) Principle 1 (One Thing) — verify one benefit per bullet, no stacking (§4.5); (b) Apply the *"so what?"* test (§4.1) to every bullet — flag and rewrite any that fails; (c) Apply the *"too much given away"* test (§4.2) to every bullet — flag any that reveals the HOW; (d) Verify formula alternation (§4.6) — no two adjacent bullets share the same formula tag; (e) Verify order — strongest first, second strongest last (§4.7); (f) Verify positive/negative alternation (§4.8). |
| **Fase 4 — Anti-AI pass** | Universal pass per [writing-principles SECTION B](core/writing/writing-principles.md). Bullet-specific hotspots: rigid parallel triads tend to cluster in long bullet blocks (the writer falls into a rhythm — break it); em-dashes tend to appear in bullets with parenthetical expansion — em-dash count in the delivered block = 0 (writing-principles B.1): convert to period or comma; generic transitions ("Plus, …", "Also, …") do not belong in bullet blocks at all — flag and delete. |
| **Fase 5 — Read-aloud + skimmer test** | Universal read-aloud per [writing-principles §3](core/writing/writing-principles.md). Each bullet should sound like something the writer would say to a friend over coffee: *"You have to see page 35 — there's this stealth email trick that looks like content but is actually pure selling. It's insane."* If the bullet sounds rehearsed or copy-flavored, rewrite. Then add the **skimmer test**: read only every third bullet, in sequence. Do the sampled bullets still constitute a complete curiosity stack? If no, the block has weak fillers in between — strengthen or cut. |

### 9.1 — The 5-step generation process

This is the canonical generation sequence for any bullet block:

1. **Extract raw material from the brief** — techniques, chapter / module titles, client results, counterintuitive facts, common mistakes, named mechanisms, authority references, specific numbers from testimonials. Output: a working scratch of 30-50 raw items that could feed bullets.
2. **Match each raw item to a formula** — for each item, pick the formula whose curiosity mechanic best matches that item. (A page reference matches F11. A counterintuitive fact matches F10 or F19. A named methodology matches F2 or F3.)
3. **Write 2× the bullets needed** — if the block requires 8 bullets, write 16. The quality bar is determined by the weakest bullet in the final block — over-producing and pruning is the only way to ensure no weak filler survives.
4. **Cut the weakest half** — apply §4.1 (so what?), §4.2 (HOW withheld?), §4.4 (autonomy), §4.5 (one benefit?) ruthlessly. Cut without mercy.
5. **Order and vary** — strongest first, second strongest last (§4.7); alternate positive and negative (§4.8); no two adjacent same-formula (§4.6); add parenthetical expansion (F14) on the 3-5 strongest (§4.10).

After step 5, the block is delivery-ready. Apply Fase 3-5 of the protocol to refine the prose-level quality.

---

## 10. Output formats

### Bullet block deliverable

```
BULLET BLOCK — [Product / Offer Name] — [Position: e.g., LP §5.7 value stack / Email teaser / VSL Module 3 reveal]

Awareness: [level from brief]
Position in piece: [where the block lands]
Total bullets: [N]
Block role: [function — open curiosity / tease modules / install danger / value-stack]
Formula mix: [list of formula tags + counts, e.g., 3×F11, 2×F2, 1×F3, 1×F8, 1×F10]
Structural overlays: [bullets carrying F14 parenthetical / F16 qualification]
Order rationale: [why bullet #1 and bullet #N are placed there]

1. [bullet text] (F[X])
2. [bullet text] (F[X])
3. [bullet text] (F[X])
...
N. [bullet text] (F[X])

[Notes for the requesting specialist (when invoked internally) — any caveats, swipes used, or follow-ups]
```

The formula tags `(F[X])` next to each bullet are **delivery metadata** — they let the copywriter or the requesting specialist verify the variation discipline and adjust if needed. Strip the tags before publishing the bullets to the final piece.

### Standalone bullet request (no full block — copywriter asks for N bullets on a specific topic)

```
BULLETS — [Topic] — [N requested]

1. [bullet] (F[X])
2. [bullet] (F[X])
...

[1-line note: which formulas were used and why this mix fits the topic]
```

### Bullet refinement request (copywriter provides existing bullets to be tightened)

```
ORIGINAL → REFINED

[Original bullet 1]
→ [Refined bullet 1] (F[X] — what changed and why)

[Original bullet 2]
→ [Refined bullet 2] (F[X] — what changed and why)

...
```

---

# PART D — Quality control & references

## 11. Common pitfalls

Distilled from extensive bullet writing practice. Watch for these.

### 11.1 — Stacking two benefits in one bullet

The most common amateur mistake. The bullet promises two outcomes, which dilutes both and confuses the curiosity gap.

**Fix**: split into two bullets, each with one benefit. If splitting creates two weak bullets, the original was actually a single weak idea wearing two hats — cut it entirely.

### 11.2 — Revealing the HOW

The bullet explains the mechanism, the steps, or the technique alongside the outcome. The curiosity gap collapses; the reader has the answer and no longer needs the product.

**Fix**: rewrite to promise the WHAT and withhold the HOW. Test: read the bullet — does it tell the reader enough to act on their own? If yes, the bullet has given away too much.

### 11.3 — Repeating the same formula

The block falls into a rhythm — three F11 page-reference bullets in a row, or four F1 *"how to"* bullets stacked. The skimmer notices the monotony and skips.

**Fix**: tag each bullet with its formula during drafting. Reorder or rewrite when two adjacent bullets share the same tag.

### 11.4 — Generic "discover" / "learn" / "find out" verbs

*"Discover how to…"*, *"Learn the secret of…"*, *"Find out the truth about…"* are filler verbs that add no curiosity. The bullet should open with the WHAT, not with a vague promise-to-tell.

**Fix**: replace the filler verb with the operational shape of the promise. *"Discover how to lose weight"* → *"How to drop 17 pounds in 9 weeks — without giving up bread"*.

### 11.5 — Bullets that read as feature lists

*"24 video modules + 4 bonuses + lifetime access"* is a spec sheet. The bullet form invites the reader to expect curiosity, and a spec violates the contract.

**Fix**: rewrite each feature as a bullet promising the outcome the feature enables. *"24 video modules"* → *"24 step-by-step video lessons that walk you through the exact protocol — even if you have never done this before"*.

### 11.6 — Bullets that depend on the surrounding context

A bullet that only makes sense if the reader has read the previous bullet, or the section heading, or the LP's hero block. Skimmers who land on this bullet alone read nonsense.

**Fix**: apply §4.4 (autonomy). Every bullet must function in isolation. Rewrite until the bullet stands alone.

### 11.7 — All positive bullets / all negative bullets

A block of only positive bullets feels promotional and uplift-y; a block of only negative bullets feels punishing and depressing. Either way, the reader disengages.

**Fix**: alternate (§4.8). A 50/50 split is rarely needed — even 70/30 positive-to-negative (or the reverse) provides enough rhythmic relief.

### 11.8 — Missing the strongest-first / second-strongest-last order

The block leads with a mid-tier bullet because the writer drafted the strongest one last and never re-sorted. The first bullet fails to earn the block's attention; the last bullet fails to earn the conversion.

**Fix**: always re-sort the block before delivering. Strongest at position 1. Second strongest at position N. Volume bullets in the middle.

### 11.9 — Over-using parenthetical expansion

Every bullet carries a parenthetical. The block becomes noisy; the parenthetical loses its intensifying function.

**Fix**: §4.10 — only the 3-5 strongest bullets carry parentheticals. The rest are clean.

### 11.10 — No anchor for info-products

Info-products almost always have page numbers, module references, lesson timestamps. Missing them means the bullets feel less tangible than they could.

**Fix**: §4.9 — anchor every bullet where the reference exists. For non-info offers where no anchor is available, use substitutes ("inside the protocol", "in the bonus toolkit") sparingly.

### 11.11 — Bullets too long

Bullets that run 4+ lines are usually over-explaining or stacking. The skimmer skips them; the deep reader feels the bullet should have been prose.

**Fix**: compress to 2-3 lines max for the strongest, 1-2 lines for the volume bullets. If a bullet refuses to compress, it is probably a stacked bullet (§11.1) — split it.

### 11.12 — Bullets that paraphrase the headline

The headline says *"Discover the 7 secrets of effortless weight loss"*, and the first bullet says *"You will discover the 7 secrets of effortless weight loss"*. The bullet adds nothing.

**Fix**: bullets advance specific micro-promises beyond the headline, never restate it. The headline is the umbrella; the bullets are distinct lightning bolts under it.

### 11.13 — Inventing specificity

A bullet claims *"Sarah lost 23 pounds in 47 days"* when the testimonial in the brief only says *"Sarah lost about 20 pounds in 6 weeks"*. Specificity is powerful (HF6) — but only when real. Fabricated specifics expose the brand to legal and reputational risk and are easy to detect.

**Fix**: every specific number traces to a source in the brief or the brand wiki. When the source rounds, the bullet rounds. When no specific number exists, do not invent one — use qualitative phrasing instead.

### 11.14 — The "so what?" test never run

The block has 15 bullets and the writer never applied §4.1 to a single one. Several bullets in the middle of the block are filler — the skimmer notices and the block's perceived quality drops.

**Fix**: mandatory in Fase 3. Apply the *"so what?"* test to every bullet. Flag and rewrite any that fails.

### 11.15 — Two consecutive 15+ bullet blocks with no interruption

The piece has back-to-back blocks of 15+ bullets each. Reader fatigue sets in; the second block gets skimmed and skipped.

**Fix**: insert a testimonial, a proof element, or a short narrative beat between blocks. Two consecutive long blocks = guaranteed mid-piece drop.

---

## 12. Revision checklist

Run this before delivering. **Bullet-specific only** — the universal writing-quality checks (Gulpease, em-dash count, anti-AI patterns, read-aloud) are handled during Fase 3-5 of the protocol per [writing-principles](core/writing/writing-principles.md). This checklist supplements those, it does not restate them.

**Per-bullet checks** (apply to every bullet in the block)
- [ ] Passes the "so what?" test (§4.1)?
- [ ] Withholds the HOW while promising the WHAT (§4.2)?
- [ ] One benefit per bullet — no stacking (§4.5)?
- [ ] Functions in isolation — autonomy preserved (§4.4)?
- [ ] Specific where specificity is available — no filler verbs (§11.4)?
- [ ] Anchored to product (page / module / chapter) when reference exists (§4.9)?
- [ ] Source-traceable for any specific number (§11.13)?
- [ ] No paraphrasing of the headline (§11.12)?
- [ ] 1-3 lines long (rarely 4+) (§5.4)?

**Block-level checks** (apply to the entire block)
- [ ] Formula tags assigned to each bullet?
- [ ] No two adjacent bullets share the same formula tag (§4.6)?
- [ ] Strongest bullet at position 1 (§4.7)?
- [ ] Second strongest at position N (final) (§4.7)?
- [ ] Positive and negative bullets alternate (§4.8)?
- [ ] 3-5 strongest bullets carry parenthetical expansion (§4.10)?
- [ ] Block count matches format density rule (§6.1)?
- [ ] Block position matches function rule (§6.2)?
- [ ] If multiple blocks in the piece: interrupted by testimonial / proof / narrative between blocks (§11.15)?
- [ ] Sampling test: reading only every third bullet in sequence still constitutes a complete curiosity stack?

**Brand fidelity**
- [ ] Tone and vocabulary match `brands/<brand>/brand-copy-rules.md`?
- [ ] All raw material from brief / brand wiki — nothing invented?
- [ ] Sounds like something you would say to a friend (read-aloud test)?
- [ ] No proprietary external jargon exposed to the reader?
- [ ] feedback-rules (global + brand) re-scanned — no rule violated

---

## 13. Cross-references

- [CLAUDE](CLAUDE.md) — orchestrator, runs Brief readiness check before invoking this specialist
- [strategist](skills/strategist.md) — produces the funnel brief this specialist consumes
- [funnel-brief](core/strategic-frameworks/funnel-brief.md) — input template
- [writing-principles](core/writing/writing-principles.md) — read SECTION A + B post-draft; §3 read-aloud in Fase 5
- [emotional-intelligence](core/writing/emotional-intelligence.md) — conditional read when brief specifies emotional anchors
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — bullets operate as Intensification micro-units; this file supplies the strategic levers
- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — bullets tease specific rings without fully installing
- [awareness-levels](core/strategic-frameworks/awareness-levels.md) — primary calibrator for formula-mix selection (§8.1)
- [proof-elements](core/strategic-frameworks/proof-elements.md) — bullets that incorporate proof reference this taxonomy
- [naming](core/strategic-frameworks/naming.md) — for bullets that surface a proprietary mechanism name (F2 / F12)
- [lp-specialist](format-specialists/lp-specialist.md) — primary consumer (bullet lists across LP §5.6)
- [advertorial-specialist](format-specialists/advertorial-specialist.md) — consumer (mid-article tease blocks)
- [email-specialist](format-specialists/email-specialist.md) — consumer (3-5 strongest bullets to generate the click)
- [ad-specialist](format-specialists/ad-specialist.md) — consumer (ad body bullets as internal frustration markers, carousel card bullets)
- [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md) — consumer (spoken bullets across every duration tier: short, 3-7 min, medium, long — all sections of that single file)
- [offer-specialist](section-specialists/offer-specialist.md) — sibling section specialist; offer block consumes bullets for the value stack (HF5)
- [hook-specialist](section-specialists/hook-specialist.md) — sibling section specialist
- [headline-specialist](section-specialists/headline-specialist.md) — sibling section specialist
- [lead-specialist](section-specialists/lead-specialist.md) — sibling section specialist
- [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) — sibling section specialist
- [faq-specialist](section-specialists/faq-specialist.md) — sibling section specialist
- `brands/<brand>/brand-copy-rules.md` — voice, primary over generic best practice
- `brands/<brand>/products.md` — chapters / modules / page numbers — primary raw material for bullets
- `brands/<brand>/offers.md` — offer composition when bullets serve a value stack
- `brands/<brand>/swipe.md` — brand-specific bullet block examples for voice calibration
- `brands/<brand>/testimonials.md` — raw material for proof-driven bullets and specificity shock (HF6)

---

# Appendix

## A1. Bullet formula catalog — the 22 formulas in full

> **What this appendix is**: the operational catalog of all 22 bullet formulas, with structure and example. The section above (§7) summarized the formulas by category; this appendix is the working reference the specialist consults during drafting.
>
> **Origin**: distilled from decades of US and Italian direct-response practice. Each formula represents a curiosity mechanic that has been validated across many pieces and many markets.
>
> **Swipe quarantine** — the examples below are historical swipe kept for structure and psychology. Do NOT inherit their punctuation or constructions: Tier 1 bans (writing-principles B.1–B.3 — zero em-dash, no "Not X. But Y.") apply to all delivered copy regardless of what these examples model.

### Benefit / Promise formulas

| # | Formula name | Structure | Example |
|---|---|---|---|
| **F1** | "How to" + Obstacle Eliminated | How to [result] even if / without [objection neutralized] | *"How to knock out profitable emails even if you hate writing. (Page 37)"* |
| **F2** | Named Technique + Unexpected Result | The [evocative name in quotes] [element] that [surprising outcome] | *"The 'nuclear option' subject line — so potent it's almost guaranteed to get opened. (Page 12)"* |
| **F5** | Number + List Promise | [Number] [ways / strategies / mistakes] to [result] | *"13 ways to write subject lines that crawl right into peoples' psychology. (Pages 12-31)"* |
| **F7** | "Exactly" + Operational Specificity | Exactly [what / how / when] to [specific operational action] | *"Exactly how many emails to send before asking for the sale. (Page 74)"* |
| **F13** | "One Thing" / Single Element | The ONE [thing] that [extreme consequence] | *"The most powerful factor of all in working magic — that drives your subconscious irresistibly to secure whatever it is you seek."* |
| **F17** | Speed / Ease Promise | [Extreme result] in [minimal time / effort] | *"Super-Exercises that trim inches off your problem spots quickly! (Some of them take only fifteen seconds a day — and show whistle-provoking results in a week!)"* |

### Curiosity / Intrigue formulas

| # | Formula name | Structure | Example |
|---|---|---|---|
| **F3** | Secret / Discovery + Borrowed Authority | The secret [famous person / institution] strategy that [benefit] | *"The secret Ronald Reagan negotiation strategy that can make almost any email more profitable. (Page 37)"* |
| **F6** | Stealth / Paradox + Double Benefit | A [paradoxical] way to [looks like X] but really [does Y] | *"A 'stealth' way to write emails that look like content but are really pure selling. (Page 35)"* |
| **F9** | Mundane-to-Extraordinary | How [ordinary / mundane thing] can [extraordinary outcome] | *"How to simply 'open your mouth' — and lose your double chin."* |
| **F11** | Page Reference / Module Anchor | [Strong bullet text] (Page X) | *"The one fatal TIMING mistake that makes most people fat (60% of all overweight people do it.) Not what you eat, but how you eat. See page 20."* |
| **F20** | "Has Nothing To Do With" / Cause Elimination | [Problem / situation] — has nothing to do with [expected cause] | *"What it means when he 'can't perform' — has nothing to do with attraction."* |
| **F22** | Mundane Object → Extraordinary Result | How [everyday object / action] can [impossible-sounding result] | *"How to use ordinary sand as an instant-sedative." / "How cold water — yes, cold water — can often work apparent 'miracles' on the shape and firmness of your breasts."* |

### Danger / Contrarian formulas

| # | Formula name | Structure | Example |
|---|---|---|---|
| **F4** | Danger / Warning + Dramatic Consequence | WARNING: [consequence]. / The [number] [things] that [hidden danger] | *"The 3 household items silently damaging your skin's barrier every day."* |
| **F10** | Contrarian / Anti-Intuitive | Why [thing everyone does] is wrong / killing your results | *"How to virtually eliminate spam complaints by sending MORE email."* |
| **F19** | "Why X Kills Y" / Good Action → Bad Result | Why [action everyone thinks is good] is actually [causing the damage] | *"Why giving away valuable free content gets your emails DELETED." / "A kind of bread that may be slowly killing your mind."* |

### Emotional / Sensory formulas

| # | Formula name | Structure | Example |
|---|---|---|---|
| **F12** | Named Mechanism + Vivid Sensory Result | [Named mechanism / technique] — [sensory / physical description of result] | *"The Man Melting Hug — makes his heart open to you like a flower." / "The Anger Deflator Technique — stops fights in their tracks, deflates anger like air from a balloon."* |
| **F15** | Seduction Words / Emotional Trigger | [Named concept] + sequence of vivid emotional / physical responses | *"4 simple 'heart opener' words — just whisper them and watch him become completely vulnerable with you." / "The magic that changes the drab into the lovely, the ordinary into the extraordinary, the inferior into the superior."* |

### Transformation / Proof formulas

| # | Formula name | Structure | Example |
|---|---|---|---|
| **F8** | Worst-Case Transformation | A [discovery] that lets even [hopeless worst case] [achieve result] | *"A neurological discovery that lets even business owners who suck at writing create emails that get bought from. (Page 38)"* |
| **F18** | Anti-Method | How to [result] WITHOUT [tool / method everyone thinks is necessary] | *"How to test emails without tracking software, split testing, or any technology." / "How to develop your natural gift for contacting other minds — without the necessity of words."* |
| **F21** | Situational Scenario | "So You're [in this situation]" — then bullets solving that specific scenario | *"So You Were In An Accident — how to handle the claims adjuster, how to make sure your own doctor does the right things, get double pay for lost time… and a great deal more that you NEED to know."* |

### Structural / Framing formulas (applied ON TOP of other formulas)

| # | Formula name | Structure | Example |
|---|---|---|---|
| **F14** | Parenthetical Expansion | [Bullet]. (Extra proof, micro-story, personal aside) | *"A simple at-home treatment for thinning hair, requiring almost no effort and time! (Show this one to your husband — he'll thank you for the rest of his life.)"* |
| **F16** | Qualification / Emotional Pact | "Ready to [desire]?" or "But only if you PROMISE…" stacking | *"Ready to finally feel what it's like to relax with a man? Ready to give yourself to him without fear he'll leave you? Ready to feel truly safe and wanted and precious to him?"* |

---

## A2. 6 advanced structural patterns (HF1-HF6)

> **What this appendix is**: six advanced structural patterns that operate at the level of **whole blocks** rather than individual bullets. They organize the block's argumentative shape. Apply ON TOP of the 22 formulas — the formulas supply individual bullets, the patterns supply the block-level architecture.
>
> **Swipe quarantine** — the examples below are historical swipe kept for structure and psychology. Do NOT inherit their punctuation or constructions: Tier 1 bans (writing-principles B.1–B.3 — zero em-dash, no "Not X. But Y.") apply to all delivered copy regardless of what these examples model.

### HF1 — Problem Numbered Stack

**Structure**: *PROBLEM #1: [industry flaw] → why it fails → what it should do. PROBLEM #2: [next flaw]… Continue through #4-5.*

**Use**: mechanism section of long-form pieces. Systematic destruction of the competitive landscape. Each PROBLEM builds rage. By #5, the reader is desperate for the alternative.

**Rule**: each PROBLEM must sound like insider knowledge but be simple enough for the avatar to understand. The rage compounds; the alternative arrives as relief.

### HF2 — How-To + Parenthetical Kicker

**Structure**: *How to [benefit]… ([kicker that adds specificity, proof, or neutralizes the main objection]!)*

**Kicker types**:
- **Objection neutralizer**: *"even if you're over 50"*
- **Specificity proof**: *"using only 6 components"*
- **Borrowed authority**: *"this is what Bulgarian Olympic athletes do"*
- **Shock detail**: *"costs 10x more than what 99% of products use"*

**Rule**: the kicker must be SURPRISING. If it just restates the main bullet, delete it. The kicker is what transforms a competent bullet into a remarkable one.

### HF3 — Why Counter-Intuitive

**Structure**: *Why [thing everyone does / believes] is actually [opposite result]… and [what to do instead].*

**Use**: Problem Aware and Solution Aware audiences who have tried existing solutions. Each *"why"* destroys one conventional approach.

**Variations**:
- *"Why [common practice] is making your [problem] WORSE"*
- *"Why [expert consensus] has been dead wrong for [years]"*
- *"Why [thing that sounds good] is the LAST thing you should do"*

The block of HF3 bullets functions as a systematic deprogramming of the audience's existing beliefs — every bullet kills one belief and primes the reader for the alternative.

### HF4 — Dirty Little Secret

**Structure**: *The [adjective] [secret / truth] the [insiders / fat cats / experts] hoped you'd [never discover]…*

**Use**: creates a **conspiracy frame** — RAGE at insiders + SEEKING the secret. Best for Problem Aware (why nothing has worked) and Solution Aware (why existing solutions are inferior).

**Rule**: the enemy is a CATEGORY (industry, trainers, mainstream medicine), never a specific brand. The conspiracy must be plausible — grounded in a real conflict of interest the audience can recognize. Spurious conspiracies destroy trust.

### HF5 — Free Report Title as Bullet

**Structure**: each bonus / chapter / report title in the offer is written AS a bullet, not descriptively.

**Use**: offer / value stack. Every bonus title creates its own curiosity gap. The stack becomes a bullet-generating machine where each component fires a fresh hook.

**Transform**:
- *"Report on Banking Safety"* → *"The Shocking Truth Behind Recent U.S. Banking Scandals You Won't See In The Wall Street Journal!"*
- *"Module 3: Email Templates"* → *"Module 3: The 'Plug-and-Play' Email Library — 17 Ready-to-Send Templates That Have Generated Over $4.2M in Recorded Sales"*

Apply F2 (named technique), F4 (warning), F5 (number+list), F7 (exactly), F10 (contrarian) to transform descriptive titles into curiosity engines.

**Rule**: each transformed title must work in ISOLATION — a reader who only sees the bonus titles, without seeing the surrounding offer copy, must still feel each title is essential.

### HF6 — Specificity Shock

**Structure**: replace EVERY vague quantity with hyper-specific data.

**Use**: ALWAYS. Layer on top of any bullet. Specific numbers bypass skepticism — they are too specific to be fabricated, which makes them feel inherently more credible than rounded numbers.

**Spectrum** (weak → strong):
- *"Lost a lot of weight"* → *"Lost over 50 pounds"* → *"Lost 63 pounds"* → *"Waist went from 46 to 33 inches — down 13 inches"* → *"732 miles on it"* / *"$5,000 in a single day's mail"*

**Rule**: numbers must be REAL. They trace to the brief, the brand wiki, or a verifiable source. Never fabricate specificity — fabricated specifics expose the brand to legal and reputational risk and are easy to detect by skeptical readers.

When the source rounds (*"about 50 pounds"*), the bullet rounds. The specificity discipline applies inside the bounds of truth.

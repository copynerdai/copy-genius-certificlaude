# Offer Specialist — Section Specialist

> Section-level specialist. Produces the **complete offer block** — the closing section of a long-form piece that converts a persuaded reader into a buyer. Covers product reveal, price reveal (with price destruction / anchoring where needed), bonus stack, guarantee, urgency, final future pacing and close, P.S. system, and explicit CTA instructions. **Section specialist** (not a full-piece specialist). Invoked by the orchestrator ([CLAUDE](CLAUDE.md)) on direct user request for standalone offer block production, OR when a full-piece specialist ([lp-specialist](format-specialists/lp-specialist.md), [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md), [advertorial-specialist](format-specialists/advertorial-specialist.md), [upsell-specialist](format-specialists/upsell-specialist.md)) requests this section during its own writing flow.
>
> **Division of labor**: [offer-construction](core/strategic-frameworks/offer-construction.md) defines WHAT an offer IS — components, types, evaluation, strategic audit. This specialist defines HOW to WRITE the offer block in copy — sequencing, language, emotional architecture, persuasion moves.

---

## 0. Execution path — read this first

> **Inline invocation** (called mid-piece by a format specialist — the COMMON case): take the inputs already gathered by the calling piece (§3) → select the sub-components for the format and ticket (§9) → draft one offer block in the canonical sequence (§5 anatomy + §6 Chiusura Divina) → mini-check: sequence Inferno → Purgatorio → Paradiso, price framed not naked, each bonus SOLD, CTA spelled out. Do not run the full §13 checklist.
>
> **Standalone invocation** (direct request, e.g. "scrivi il blocco offerta"): full protocol — §3 inputs → §10 application protocol (Phases 1-5) → §11 output → §13 revision checklist.
>
> **Tier 1 bans apply while DRAFTING** (writing-principles B.1–B.3): zero em-dash, no "Not X. But Y.".
>
> **Swipe**: read the [ctas-and-ps library](swipe/elements/ctas-and-ps.md) IN FULL before writing CTAs and P.S. blocks — templates are emotion-agnostic, re-instantiate with the brief's anchor; verbatim stays in its original language, generate natively in the target language. Cite the template's `from:` slug in variant metadata. If empty, proceed without. For complete offer-block structures, query the [swipe-index](swipe/index.md) for [OFFER] segments.
>
> **Reference sections — consult on demand only**: §7 sub-component deep-dives (open the sub-component in hand), §8 compositional patterns (when the close needs a specific pattern), §12 pitfalls (at QA).

---

## Quick navigation

### Part A — Identity & scope
- §1 [Purpose](#1-purpose)
- §2 [When invoked](#2-when-invoked)
- §3 [Required inputs](#3-required-inputs)

### Part B — Component expertise
- §4 [Core principles](#4-core-principles)
- §5 [Anatomy of the offer block](#5-anatomy-of-the-offer-block)
- §6 [The Chiusura Divina — the 3-phase emotional close](#6-the-chiusura-divina--the-3-phase-emotional-close)
- §7 [Sub-component deep-dives](#7-sub-component-deep-dives)
- §8 [Compositional patterns](#8-compositional-patterns)

### Part C — Operational workflow
- §9 [Selecting offer block type and length](#9-selecting-offer-block-type-and-length)
- §10 [Application protocol](#10-application-protocol)
- §11 [Output formats](#11-output-formats)

### Part D — Quality control & references
- §12 [Common pitfalls](#12-common-pitfalls)
- §13 [Revision checklist](#13-revision-checklist)
- §14 [Cross-references](#14-cross-references)

---

# PART A — Identity & scope

## 1. Purpose

Produce ready-to-deploy offer blocks for:

- **Full offer close** — the complete closing section of a landing page, sales letter, VSL, or advertorial: from the transition out of the marketing argument through CTA + P.S. system
- **Standalone offer block** — a self-contained offer presentation (for product pages, email offers, cart pages)
- **Offer block revision** — rewriting or strengthening a weak existing offer block

Does NOT produce:

- The offer strategy itself (which bonuses to include, what guarantee to offer, what price point to set) — handled by the Strategist using [offer-construction](core/strategic-frameworks/offer-construction.md)
- Full sales letters, landing pages, VSL scripts — handled by format specialists
- Headlines, hooks, leads, body copy — handled by sibling section specialists
- Standalone bullet blocks within the offer — [bullet-point-specialist](section-specialists/bullet-point-specialist.md) is invoked when the offer block requires a dedicated bullet section

The specialist is the **executor**, not the strategist. The offer composition (what's being sold, at what price, with what bonuses and guarantee) comes from the brief or from `brands/<brand>/offers.md`. This specialist translates those decisions into copy that closes the sale.

---

## 2. When invoked

The orchestrator routes to offer-specialist when intent recognition (§5 of [CLAUDE](CLAUDE.md)) matches:

- "write the offer block", "scrivi il blocco offerta", "write the close"
- "scrivi la chiusura", "write the CTA section"
- "write the bonus stack", "present the guarantee"
- "write the price reveal", "scrivi la presentazione del prezzo"
- "rewrite this offer block — conversions are weak", "strengthen the close"

Also invoked **internally** by format specialists when their writing flow reaches the offer/close section:

- [lp-specialist](format-specialists/lp-specialist.md) — when the LP reaches the offer block
- [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md) — when the script reaches the spoken close (across every duration tier)
- [advertorial-specialist](format-specialists/advertorial-specialist.md) — when the advertorial transitions from editorial to offer
- [upsell-specialist](format-specialists/upsell-specialist.md) — when the upsell page needs its offer presentation
- [email-specialist](format-specialists/email-specialist.md) — when an offer email requires a full offer block (rare; emails usually link out to the offer page)

---

## 3. Required inputs

| Input | Source | What the specialist needs from it |
|---|---|---|
| **Funnel brief** | Strategist output | Awareness level, avatar, chain of beliefs (especially #20, #21, #25, #26), Big Idea, UM |
| **Offer composition** | `brands/<brand>/offers.md` or brief | Product, price, terms, bonuses (names + descriptions + values), guarantee (type + name + terms), scarcity/urgency structure |
| **Avatar** | `brands/<brand>/avatars/*.md` | Fear map, desire map, purchase capacity, identity markers, emotional triggers |
| **Proof inventory** | Brief or `brands/<brand>/testimonials.md` | Testimonials, case studies, certifications — for risk inversion and credibility in the close |
| **Brand voice** | `brands/<brand>/brand-copy-rules.md` | Tone, vocabulary, personality constraints |
| **Format context** | Requesting format specialist | Where this block sits in the piece, word budget, spoken vs. written, preceding section summary |

If the offer composition is missing or incomplete, the specialist flags the gap and requests the Strategist to complete [offer-construction](core/strategic-frameworks/offer-construction.md) evaluation before proceeding.

---

# PART B — Component expertise

## 4. Core principles

### 4.1 The Trident hierarchy

Three elements determine campaign success, in this exact priority order:

1. **List** — the right audience
2. **Offer** — an irresistible proposition
3. **Copy** — the persuasion vehicle

The best copy in the world cannot compensate for a weak offer. A strong offer will outperform even mediocre copy. This means: if the offer composition from the brief is structurally weak, the specialist must flag it — writing beautiful copy on top of a broken offer is wasted effort.

### 4.2 The 3 forces that kill conversions

Three forces ("Cavalieri dell'Apocalisse" — the Horsemen of the Apocalypse) work against conversion at the close:

| Force | What it does | What defeats it |
|---|---|---|
| **Diffidence** | The reader doesn't believe the claims | Elements of proof (testimonials, data, demonstrations) — should already be installed by the body copy |
| **Boredom** | The reader has lost interest | The Big Idea — should already be carrying the piece |
| **Inertia** | The reader agrees but won't act | **Urgency** — this is the offer block's primary battlefield |

Inertia is the offer specialist's core opponent. The reader's natural state is to keep doing what they're already doing. Every element of the offer block — bonus, scarcity, future pacing, consequence painting — exists to break inertia.

### 4.3 Headline = opens. Offer = closes.

The headline gets the most creative attention — the 80% heuristic lives in [headline-specialist](section-specialists/headline-specialist.md); the offer block deserves equal rigor in construction. The offer is the element that can double or triple conversion rates independently of everything else in the piece.

### 4.4 Sell results, not products

People do not buy products. They buy results. Every element of the offer block must be described in terms of outcomes, experiences, and emotional states — not features, specifications, or deliverables.

### 4.5 Show, don't tell

The rule of the Paradiso phase (§6.3): don't EXPLAIN the future — PAINT it. Don't tell the reader their life will improve. Teleport them into a vivid scene where they are already living the improved version. Multi-sensory, specific, anchored to their actual desires.

---

## 5. Anatomy of the offer block

The offer block is composed of these sub-components, in canonical sequence. Not every sub-component appears in every piece — length, format, and context determine which are included and at what depth.

| # | Sub-component | Function | Typical word count |
|---|---|---|---|
| 1 | **Chiusura Divina** (the "Divine Close": Inferno → Purgatorio → Paradiso) | The emotional pre-close: consequences of inaction → inadequacy of alternatives → paradise of action | 200-800 words |
| 2 | **Product reveal** | Introduce the product/service as the vehicle to the Paradiso | 50-200 words |
| 3 | **Value stack** | Enumerate what's included, with benefit framing for each element | 100-400 words |
| 4 | **Bonus stack** | Present each bonus as a mini-offer with name, description, benefit, stated value | 100-500 words |
| 5 | **Price reveal** | Present the price using anchoring, destruction, dimensionalization — never naked | 100-300 words |
| 6 | **Guarantee** | Present the risk-inversion with name, full description, and benefit reinforcement | 80-250 words |
| 7 | **Urgency / scarcity** | Create time pressure with stated reason — compra ora vs. compra dopo (buy now vs. buy later) | 50-200 words |
| 8 | **CTA** | Explicit, step-by-step instructions for what to do | 30-100 words |
| 9 | **P.S. system** | 1-3 postscripts that restate, reframe, and hook the deepest reader | 50-200 words |

**Total typical range**: 700-2,500 words for a written offer block. Shorter for emails and ads; longer for high-ticket sales letters and VSLs.

---

## 6. The Chiusura Divina — the 3-phase emotional close

The Chiusura Divina is the emotional architecture that precedes the offer mechanics. Named after Dante's journey, it follows this exact sequence — never inverted.

### 6.1 Inferno — "What happens if you do NOTHING?"

**Question the copy answers**: *"What happens to my life if I don't take action right now?"*

**How to write it**:

- Catapult the reader into a reality where everything they want to avoid is happening
- Paint the post-apocalyptic scenario they would live in if they chose inaction
- Their deepest fears take concrete shape — being ridiculed by those they want to impress, losing what they've built, watching the problem compound
- Use the **Effetto Domino** (domino effect): the core problem spawns secondary problems that make the situation progressively worse
- Be hard on the pain, but never cross into contempt. The tone is urgent, not cruel.

**Amplification technique**: reference a recent, real event that triggered the same fear in the public consciousness. The more recent the event, the stronger the emotional resonance.

**When to abbreviate**: if the body copy has already painted the inferno extensively, the close can summarize rather than repeat. Always show inferno at the end even in abbreviated form — it serves as the final push against inertia.

### 6.2 Purgatorio — "What happens if you buy from someone else?"

**Question the copy answers**: *"What happens if I try to solve this, but with an alternative solution or competitor?"*

**How to write it**:

- The competitor's solution is NOT hell — it's imperfect. Position it as "better than nothing, worse than this."
- **Golden rule**: praise before you attack. Always acknowledge the good in the alternative BEFORE revealing its limitation. "Yes, they do X very well, MA..."
- The "MA" technique: the word "but" is the hinge. Everything before it builds credibility; everything after it dismantles the alternative.
- **Find the weakness inside the apparent strength**. The competitor's biggest selling point has a hidden cost, a time limitation, a side effect, a dependency the reader hasn't considered.

**Why this sequence works — Contrast Theory (3 bowls of water)**:

If you put your left hand in hot water and your right in cold, then plunge both into lukewarm water — the left hand feels cold, the right feels warm. Same water, different perception. By showing purgatorio (imperfect alternatives) BEFORE paradiso (your solution), the paradiso feels even more magnificent by contrast. Invert the order and you lose the contrast effect.

**The exception**: you can attack the competitor immediately ONLY when the reader already hates them. In that case, you're confirming an existing belief, not creating a new one. Assecondare (go along with the reader's existing belief) before trying to change.

**When to abbreviate**: if competitor disqualification already happened in the body (marketing thesis, mechanism section), a brief summary suffices in the close.

### 6.3 Paradiso — "What happens when you buy from me?"

**Question the copy answers**: *"What does my life look like after I've purchased and used this product?"*

**How to write it**:

- This is pure **future pacing**. The reader is teleported into the world where the problem is solved, the desire is fulfilled, the transformation is complete.
- **Show, don't tell**. Not "your life will improve" — instead: *paint the scene*. Morning routine. The conversation with a friend. The look in the mirror. The notification on the phone. The moment they realize it worked.
- The copywriter is a **screenwriter of dreams** — the reader's dreams, not the writer's.
- Address every secondary problem raised during Inferno — each one is now resolved. The Effetto Domino works in reverse.
- Include the **damaging admission**: a small, honest concession that makes the paradise feel real, not fabricated. "After 22 days, nothing had happened yet. Then on day 23..."
- Layer benefits: primary result + secondary emotional benefits (confidence, respect, peace of mind, vindication).

**Calibrating depth**: if the body copy has already painted the paradise extensively, don't repeat it verbatim in the close. Summarize — a compressed, vivid snapshot of the transformed state. But if the paradiso hasn't been painted yet, this is where it goes in full.

### 6.4 Operational rules for the Chiusura Divina

1. **The sequence is mandatory**: Inferno → Purgatorio → Paradiso. Never invert.
2. **Not all three phases must appear in full length**: in long-form pieces where the body has already covered some ground, abbreviate what was already said and expand what wasn't.
3. **The Inferno should always appear in full at the end**: even if abbreviated, the final reminder of consequences is the ultimate push against inertia.
4. **The problem must feel annoso (long-standing), grave, and urgent**: use the Effetto Domino to show that solving THIS problem also resolves many secondary problems — making it the #1 priority on the reader's list.
5. **Amplify every benefit without being repetitive**: same benefit shown through different perspectives and angles. A single benefit can fill pages if explored from multiple facets.

---

## 7. Sub-component deep-dives

### 7.1 Bonus stack

**Golden Rule**: never give as a bonus something you couldn't sell independently. The bonus must have perceived value high enough to function as a standalone product.

**The 5 bonus types**:

| Type | What it is | When to use |
|---|---|---|
| **Complementary** | Solves a related need that makes the main product more effective. "A chi compra questo, cos'altro serve?" (who buys this — what else do they need?) | Default choice — always try complementary first |
| **Information of value** | Educational content that enriches the main product experience (guides, recipes, curated lists, checklists) | When the buyer needs context or implementation help |
| **Complementary problem** | Solves a problem that travels with the main problem. The two problems are siblings. | When the avatar's problem has a natural companion problem |
| **Mystery bonus** | Described through its effects but never revealed. Four rules: (1) say what it's NOT, (2) say what it DOES (benefits), (3) pretend you're about to reveal it, then don't, (4) make the reader swear to keep it secret | When curiosity is a dominant emotional lever for the avatar |
| **Bonus as main product** (Premium Sales) | The bonus is so desirable that people buy the main product primarily to get the bonus | Short-term strategy only — works when the main product needs a conversion boost but is not strong enough alone |

**Bonus presentation rule**: a bonus is not listed — a bonus is SOLD. For each bonus, include:
1. **Name** — a real, evocative name (invoke [naming conventions](core/strategic-frameworks/naming.md))
2. **What it is** — physical or digital format
3. **Why it matters** — how it elevates the experience of the main product
4. **Future benefit** — what the buyer will be able to do/feel/become after consuming it
5. **Stated value** — anchored in market price for comparable deliverables

**Reason-why for the gift**: when you offer a bonus, the reader's first thought is suspicion: "Nobody gives something for nothing — they must be trying to trick me." The copy must provide a credible reason why the bonus is free. Without the reason-why, the bonus triggers distrust instead of desire.

### 7.2 Guarantee

**The core truth**: the number of people NOT buying because no guarantee exists vastly exceeds the number who would request a refund if one were offered. Guarantee always increases net revenue.

**Two guarantee types**:

| Type | Pattern | Conversion effect |
|---|---|---|
| **Standard** | "Try it for 30 days, if you don't like it, full refund" | Better than nothing but no longer differentiated — everyone offers this |
| **Try Before You Buy** | "Try it for 30 days, pay only on day 31 if you like it" | Triples sales with only double the refund rate. Net gain is massive. |

**Duration principle**: longer guarantees produce MORE sales and FEWER refund requests. 30 days creates anxiety and a mental countdown. 12 months lets the buyer relax and forget about refunding. Lifetime is ideal when feasible.

**The 6 points of the perfect guarantee**:

1. **Try Before You Buy format** — "Use it free for [X] days, pay only if [measurable result]"
2. **Measurable result** — guarantee something concrete and verifiable ("lose 2 cm of waistline", "get your first client within 90 days")
3. **Lifetime duration** — when possible, remove time pressure entirely
4. **Keep-the-bonus clause** — even if you return the main product, you keep the bonus. Reduces refund anxiety and adds perceived value.
5. **Guarantee as benefit summary** — use the guarantee copy as a vehicle to restate and intensify the benefits one more time. Take the paradiso scenario and frame it as: "If this doesn't happen, then [refund]."
6. **Named guarantee** — a memorable, benefit-including name. Not "30-day money-back guarantee" but names that embed the promised result.

**Anti-pattern — Effetto Mastrota** (the "Mastrota effect", after the Italian teleshopping pitchman: the perpetually-expiring offer that never actually expires): if you promise a deadline, you MUST respect it. Eternal "expiring tomorrow" offers destroy credibility. Exception: daily-renewed offers in geo-local businesses where the daily reset is transparent and justified (bakery, restaurant, daily special).

### 7.3 Urgency and scarcity — Compra Ora vs. Compra Dopo

The reader can choose to buy now or buy later. The offer block must create two parallel scenarios:

**Compra Ora** — what happens if you act now:
- Discounted price (or: stacked bonus value at current price)
- Exclusive bonus available only during the offer window
- First-mover advantages (priority access, founding-member benefits)

**Compra Dopo** — what happens if you wait:
- Loss of the bonus
- Inevitable price increase
- Loss of any possibility to purchase (product withdrawn from market)

**The loss aversion principle**: the fear of losing something is always a stronger motivator than the desire to gain something. The "compra dopo" scenario leverages this — the reader has been shown the paradiso, and now you're threatening to take it away.

**The inerzia-breaking technique**: give the reader a taste of the result, let them feel it, then show them it's about to disappear. The copy creates the friction that stops the inertia ball from rolling forever.

**The Black Friday model**: the three components of maximum urgency are (1) significant discount, (2) limited time, (3) limited quantity. When all three are present and real, urgency is maximal. When only one is present, calibrate expectations.

### 7.4 Price reveal

**Cardinal rule**: never present a naked price. The price always arrives inside a frame that makes it feel justified, reasonable, or inevitable.

**Sconto vs. Offerta distinction**: a sconto (discount) is imposed by the buyer in negotiation — it destroys positioning. An offerta (offer) is created strategically by the seller — it builds positioning. Never discount. Always create offers.

**Two strategies for perceived discount**:

**Strategy 1 — The hypothetical higher price**: establish a credible higher price first, then reveal the actual lower price. Two techniques to make the higher price credible:

| Technique | How it works |
|---|---|
| **Potere della Realtà Solida** (Solid Reality Power) | Compare the online product to its offline equivalent. A €600 course vs. €5,000 for the same content in-person. The offline version is the anchor. |
| **Potere del Beneficio** (Benefit Power) | Don't sell the product — sell the experience and outcomes. The reader isn't buying a copywriting course; they're buying the ability to sit down and write effortlessly, to never face the blank page again, to earn what they deserve. |
| **La Parte Vale Più del Tutto** (Parts worth more than the whole) | Decompose the product into its components, each with its own value. "House" means nothing — "a sun-drenched living room, a marble-tiled bathroom, two bedrooms with garden view" creates perceived value far exceeding the word "house." |

**Strategy 2 — Competitor-indirect comparison**: if your product costs more than direct competitors, compare to an INDIRECT competitor that costs much more. If your anti-wrinkle cream costs €100 and competitors charge €30, don't compare to the €30 cream — compare to the €5,000 facelift that solves the same problem.

**Alternative: Price destruction (disassemble high → low)**: start from the full stacked value and systematically reduce it. Show what each component is worth, total it, then reveal the actual price as a fraction.

**Rate payments**: for products with objectively high price (not high relative to the category, but high in absolute terms — a house, a car, professional equipment), always offer installments. Present in the copy, or use as downsell.

### 7.5 Reason Why

When the offer is genuinely irresistible, the reader's immediate reaction is: "This is too good to be true." Without a credible reason WHY the offer is so good, the reader defaults to distrust.

The Reason Why provides a credible, specific explanation:

- Proximity to the source reduces logistics costs
- Launch pricing to collect case studies
- Warehouse clearance after unexpected event
- Seasonal turnover requires moving inventory
- Strategic decision to build customer base at lower margin

The Reason Why transforms an unbelievable offer into a logical opportunity. Without it, even a genuinely generous offer reads as a scam.

### 7.6 CTA instructions

**Foundational rule**: if there's any possibility the reader won't understand what to do next, they won't do it. Assume zero initiative. Spell out every step.

The CTA must include:
- Exactly what to click / where to go / what to bring
- What happens after they click (what page loads, what form appears, what email arrives)
- How long the process takes
- What they'll receive and when

Never assume the reader knows what "click here" means in context. "Click the green button below. Fill in your name and email. Choose your preferred payment option. Within 5 minutes, you'll receive an email with your login details."

### 7.7 P.S. system

The P.S. sits after the main close. It catches three types of readers: (1) the skimmer who scrolled to the bottom, (2) the hesitant reader who read everything but hasn't decided, (3) the convinced reader who wants one last push.

**The 3-P.S. structure**:

| P.S. | Function | What it does |
|---|---|---|
| **P.S.** | Offer restatement — fresh angle | Summarize the core offer from a different perspective than the main close. Not a repeat — a reframe. Often the most compelling single-paragraph summary of the entire proposition. |
| **P.P.S.** | Squalifica (disqualification) / inverse psychology | Disqualify the wrong buyer. "This is not for people who..." — creates desire in the right buyer through exclusion. OR: address the final lingering objection head-on. |
| **P.P.P.S.** | Final hook for the deepest reader | A last fascination, a last piece of curiosity, a final emotional beat that pushes the reader over the edge. Often a micro-story, a startling fact, or a question that can only be answered by buying. |

Not every piece needs all three. Short formats (emails, short LPs) may use one P.S. Long-form sales letters and VSLs benefit from the full system.

---

## 8. Compositional patterns

### 8.1 The Crossroad Close (two-path close)

Present two paths explicitly:

**Path A — Inaction**: "You can close this page, go back to [current painful situation], and in 6 months you'll still be [vivid description of unchanged/worsened state]."

**Path B — Action**: "Or you can [specific action], and within [timeframe] you'll [vivid description of transformed state]."

The paths must be asymmetric — Path A must feel unacceptable after the reader has been through Inferno and Purgatorio.

### 8.2 Base + Deluxe offer structure

Offer two versions of the product:

- **Base**: the core deliverable at the standard price
- **Deluxe**: Base + premium additions at a higher price

**The mental shift**: the reader moves from "Do I buy or not?" to "Which one do I buy?" This reframe alone significantly increases conversion.

**The surprise**: a disproportionate number of buyers choose Deluxe. The price gap between Base and Deluxe should be calibrated so Deluxe feels like obvious incremental value.

**8 ways to create a premium version**: (1) lifetime guarantee, (2) early access to new releases, (3) complete package with all possible add-ons, (4) hyper-personalized service, (5) geographic exclusivity, (6) limited edition, (7) direct interaction with the founder, (8) privileged access channel.

### 8.3 Offer formulas that outperform

Two tested patterns:

- **"Buy one, get one free"** outperforms "50% off" by 40% — even though the math is identical. The perception of receiving a gift beats the perception of paying less.
- **"I bought one for you, take it"** outperforms "Take it for free" — because the reader perceives that someone spent money on their behalf, which triggers reciprocity.

### 8.4 The 3 conversion levers

When an offer block underperforms, diagnose against these three levers:

1. **Appeal** — is the core emotion correct? The piece may be built on "revenge" when the target responds more to "envy." Changing the emotional appeal can transform conversion overnight.
2. **Credibility** — are the proof elements sufficient? Three sub-levers: quantity (more proof), quality (replace weak proof with stronger), sequence (reorder proof for logical reinforcement).
3. **Offer sweetness** — is the offer itself sweet enough? Dedicated time to strengthening the offer yields disproportionate conversion gains.

---

# PART C — Operational workflow

## 9. Selecting offer block type and length

### 9.1 By format

| Format | Offer block characteristics |
|---|---|
| **Landing page / sales letter** | Full offer block with all sub-components. Written. Can run 1,000-2,500 words. |
| **VSL (long, 15+ min)** | Full spoken offer close. Same structure as written but adapted for spoken rhythm. 2-5 minutes of the script. |
| **VSL (short, 3-7 min)** | Compressed offer block. Chiusura Divina abbreviated or partially embedded in the body. Focus on price reveal + guarantee + CTA. |
| **Advertorial** | Soft transition from editorial to offer. The offer section should feel like a natural recommendation, not a sudden sales pitch. |
| **Email** | Usually links out to a page. If self-contained: compressed offer block (1-3 paragraphs). Often only CTA + urgency + P.S. |
| **Upsell page** | Offer block for a buyer who just purchased. Skip trust-building (they just bought). Focus on: bonus, complementary value, urgency, easy CTA. |
| **Video ad** | Micro-offer: compressed to 15-30 seconds. Core benefit + CTA only. No full offer block. |

### 9.2 By ticket size

| Ticket | Offer block emphasis |
|---|---|
| **Low (< €50)** | Short, fast. Emphasis on offer sweetness and impulse triggers. Minimal guarantee (standard). |
| **Mid (€50-500)** | Full offer block. All sub-components active. Guarantee carries significant weight. |
| **High (€500-5,000)** | Extended offer block. Price destruction mandatory. Guarantee must be robust and named. Installments recommended. CTA may be "book a call" rather than "buy now." |
| **Ultra-high (> €5,000)** | Application/quiz-gated. The offer block is a qualification conversation, not a direct purchase. Guarantee and trust elements dominate. |

---

## 10. Application protocol

The specialist follows these phases when producing an offer block:

### Phase 1 — Gather and verify

0. Read [feedback-rules](core/feedback-rules.md) (global) + `brands/<brand>/brand-copy-rules.md` (brand — overrides global). These apply to every line you write and are re-verified at QA (writing-principles Fase 4d).
1. Read the brief: awareness level, avatar, chain of beliefs, Big Idea, UM
2. Read the offer composition: `brands/<brand>/offers.md` or brief section
3. Read the format specialist's context: what precedes the offer block, what beliefs are already installed
4. Verify offer completeness: check the 7 components against [offer-construction](core/strategic-frameworks/offer-construction.md). If components are missing or weak, flag before proceeding.

### Phase 2 — Structure

1. Determine which sub-components to include based on format and ticket (§9)
2. Sequence the Chiusura Divina phases: how much of Inferno/Purgatorio/Paradiso is needed vs. already covered in the body
3. Map each bonus to its type (§7.1) and prepare the presentation approach
4. Select the price reveal strategy (§7.4): which anchoring/destruction technique fits this offer
5. Select the guarantee presentation approach (§7.2): standard, TBYB, or creative

### Phase 3 — Draft

Write the offer block following the anatomy (§5) in canonical sequence. For each sub-component:

- Write in the brand voice (from `brands/<brand>/brand-copy-rules.md`)
- Apply show-don't-tell to all future pacing sections
- Apply the emotional architecture: tension (Inferno) → comparison (Purgatorio) → release (Paradiso) → mechanics (product, price, bonus, guarantee) → action (CTA, P.S.)

### Phase 4 — Refine

Apply writing-principles §2, Fase 3-5 (+ the Fase 4d feedback-rules scan) to the offer block per [writing-principles](core/writing/writing-principles.md). Then the offer-specific passes:

- Eliminate every sentence that doesn't move toward the close
- Verify each bonus is SOLD, not listed
- Verify the price is FRAMED, not naked
- Verify the guarantee is DESCRIBED, not stamped
- Verify the CTA is EXPLICIT, not assumed
- Check for Effetto Mastrota risk (promised scarcity is real and will be enforced)

### Phase 5 — Deliver

Output in the format specified by the requesting specialist (§11).

---

## 11. Output formats

### 11.1 For written formats (LP, sales letter, advertorial, email)

Deliver as formatted copy blocks with clear section markers:

```
--- OFFER BLOCK START ---

[Chiusura Divina: Inferno]
...

[Chiusura Divina: Purgatorio]
...

[Chiusura Divina: Paradiso / Future Pacing]
...

[Product Reveal]
...

[Value Stack]
...

[Bonus Stack]
...

[Price Reveal]
...

[Guarantee]
...

[Urgency / Scarcity]
...

[CTA]
...

[P.S. System]
...

--- OFFER BLOCK END ---
```

Section markers are for the copywriter's orientation and are removed in the final deliverable.

### 11.2 For spoken formats (VSL, video ad)

Deliver as script with speaker direction notes:

```
[TONE: shift to direct, personal]
...

[VISUAL: product image / mockup on screen]
...

[TONE: urgency — tempo increases slightly]
...
```

### 11.3 For revision

Deliver the rewritten sections with inline notes explaining what changed and why:

```
[ORIGINAL: "Click here to buy"]
[REVISED: "Click the green button below. You'll be taken to a secure checkout page. Fill in your details, choose 'single payment' or '3 monthly installments,' and confirm. Within 5 minutes, you'll receive an email with your login — check your spam folder if you don't see it within 10 minutes."]
[WHY: CTA was too vague — spelled out every step to eliminate friction]
```

---

# PART D — Quality control & references

## 12. Common pitfalls

| # | Pitfall | What goes wrong | How to avoid |
|---|---|---|---|
| 1 | **Naked price** | Price dropped without anchoring, stacking, or dimensionalization. Reader experiences sticker shock. | Always frame the price: anchor against higher alternative, decompose into per-day/per-use, stack against bonus value |
| 2 | **Listed bonuses** | Bonuses named in a bullet list with no selling language. Reader skips them — zero perceived value added. | Each bonus must be SOLD: name, format, why-it-matters, future-benefit, stated value |
| 3 | **Stamped guarantee** | A badge or one-liner ("30-day money-back"). Reader doesn't believe it. | Describe the guarantee across 100-300 words. Name it. Anchor to a measurable result. |
| 4 | **Phantom scarcity** | Countdown timer with no reason. "Limited spots" with unlimited capacity. Reader sees through it instantly. | Every scarcity claim must have a stated, credible reason. If no real scarcity exists, don't fabricate it — use consequence-based urgency instead. |
| 5 | **Inverted sequence** | Paradiso before Inferno. The contrast effect is lost. | Mandatory order: Inferno → Purgatorio → Paradiso. |
| 6 | **Repetitive Paradiso** | The same benefit restated 5 times in the same words. Reader gets bored. | Same benefit, different perspectives. Explore every facet — but never repeat the same angle. |
| 7 | **Missing Reason Why** | An irresistible offer with no explanation for why it's so good. Reader assumes scam. | Always provide a credible, specific reason for the offer's generosity. |
| 8 | **Vague CTA** | "Click here." Reader doesn't know what happens next, gets anxious, doesn't click. | Spell out every step: what they click, what appears, what they fill in, what they receive, when. |
| 9 | **Effetto Mastrota** | Perpetual "last chance" urgency that's never enforced. Reader learns to ignore all deadlines. | If you set a deadline, enforce it. Period. |
| 10 | **Bonus nobody would buy** | A weak, leftover bonus that's obviously filler. Damages the entire offer's credibility. | Golden Rule: if you couldn't sell it standalone, don't give it as a bonus. |
| 11 | **Attacking competitors without praising first** | Direct attack on alternatives without first acknowledging their merits. Reader feels insulted (they chose those alternatives). | Always: praise first → "MA..." → attack. Only skip the praise if the reader already hates the competitor. |
| 12 | **No Effetto Domino** | The problem is presented as isolated. Reader doesn't feel urgency because the consequences seem contained. | Show how the core problem spawns 3-5 secondary problems. Then in Paradiso, resolve ALL of them. |

---

## 13. Revision checklist

Before delivering the offer block, verify:

- [ ] **Chiusura Divina sequence** is Inferno → Purgatorio → Paradiso (never inverted)
- [ ] **Inferno** appears in full at the close (not just in the body)
- [ ] **Purgatorio** praises alternatives before attacking them
- [ ] **Paradiso** uses show-don't-tell (scenes, not claims)
- [ ] **Product** is introduced as a vehicle to results, not a thing to buy
- [ ] **Each bonus** is sold (name + format + why-it-matters + future-benefit + value)
- [ ] **Golden Rule** passes: every bonus could be sold independently
- [ ] **Mystery bonus** (if used) follows the 4 rules (what it's not / what it does / tease reveal / make them swear)
- [ ] **Price** is framed, not naked (anchored / decomposed / dimensionalized / stacked)
- [ ] **Reason Why** is present if the offer feels too good to be true
- [ ] **Sconto vs. offerta**: the copy never positions the price reduction as a concession to the buyer
- [ ] **Guarantee** is described (100-300 words), not stamped (badge only)
- [ ] **Guarantee** is named with a benefit-embedding name
- [ ] **Guarantee** includes at least one measurable result commitment
- [ ] **Urgency** has a stated, credible reason — no phantom scarcity
- [ ] **Compra ora vs. compra dopo** scenarios are both explicit
- [ ] **Effetto Mastrota** risk is zero (all stated deadlines will be enforced)
- [ ] **CTA** spells out every step (what to click, what happens, what to expect)
- [ ] **P.S.** system is present (at minimum P.S. with offer restatement from fresh angle)
- [ ] **Effetto Domino** is active: core problem → secondary problems → all resolved in Paradiso
- [ ] **Brand voice** is consistent throughout
- [ ] **Copy sells results**, not products — every benefit is experiential or emotional, not feature-based
- [ ] feedback-rules (global + brand) re-scanned — no rule violated

---

## 14. Cross-references

### Knowledge base (core/)
- [offer-construction](core/strategic-frameworks/offer-construction.md) — strategic source for WHAT the offer IS; this specialist handles HOW to PRESENT it in copy
- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — beliefs #20 (now or never), #21 (risk acceptable), #25 (I can afford this), #26 (mechanism guarantee) all map to offer block sub-components
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — Redefinition (price reframing), Intensification (urgency, loss aversion), Contrast Theory (Chiusura Divina sequence)
- [proof-elements](core/strategic-frameworks/proof-elements.md) — risk inversion elements, doing-the-math technique for price destruction
- [naming](core/strategic-frameworks/naming.md) — naming guarantees, bonuses, product tiers
- [awareness-levels](core/strategic-frameworks/awareness-levels.md) — calibrates how direct/indirect the offer block is: Most Aware → lead with offer; Problem Aware → lead with Chiusura Divina
- [writing-principles](core/writing/writing-principles.md) — post-draft refinement protocol

### Orchestration
- [CLAUDE](CLAUDE.md) — orchestrator, routes to this specialist
- [strategist](skills/strategist.md) — produces the brief; evaluates the offer via offer-construction.md

### Format specialists (consumers of this section)
- [lp-specialist](format-specialists/lp-specialist.md) — primary consumer (offer block sits on LP / sales letter)
- [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md) — consumer (spoken offer close across every duration tier)
- [advertorial-specialist](format-specialists/advertorial-specialist.md) — consumer (advertorial close transitions into offer)
- [upsell-specialist](format-specialists/upsell-specialist.md) — consumer (upsell pages are offer-heavy)
- [email-specialist](format-specialists/email-specialist.md) — occasional consumer (offer emails)

### Sibling section specialists
- [hook-specialist](section-specialists/hook-specialist.md) — opens the piece; offer-specialist closes it
- [headline-specialist](section-specialists/headline-specialist.md) — headline opens; offer block fulfills the headline's promise
- [lead-specialist](section-specialists/lead-specialist.md) — lead sells the reading; offer block sells the product
- [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) — mechanism justifies the offer
- [bullet-point-specialist](section-specialists/bullet-point-specialist.md) — provides bullets within the bonus stack and value stack
- [faq-specialist](section-specialists/faq-specialist.md) — FAQ sits after offer to handle final objections

### Brand-level files
- `brands/<brand>/brand-copy-rules.md` — voice and style constraints
- `brands/<brand>/offers.md` — the specific offer composition (price, bonuses, guarantee, urgency, reason-why)
- `brands/<brand>/swipe.md` — offer block examples from the brand's own history

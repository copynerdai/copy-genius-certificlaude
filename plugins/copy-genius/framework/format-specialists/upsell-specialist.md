# Upsell Specialist — Format Specialist

> Full-piece format specialist. Writes upsell pages and upsell VSL scripts — the post-purchase persuasion assets that increase average order value by selling additional or enhanced products to buyers who JUST completed a transaction.
>
> Invoked by the orchestrator ([CLAUDE](CLAUDE.md)) when intent recognition matches upsell writing. Reads the funnel brief, the brand wiki, the universal writing libraries, and the relevant section specialists.
>
> **The upsell is the single most different copywriting format from everything else.** The reader is NOT a prospect. They are a BUYER. They just gave you money. They trust you. They are in a momentum state — a decision has been made, and the psychological barrier to spending more is dramatically lower than the barrier to the first purchase. The job of this specialist: convert that momentum into a second purchase by introducing a NEW reason to buy that feels like a natural extension of what they just decided.

---

## 0. Execution path — read this first

> Always read before writing: funnel brief touchpoint block · brand-copy-rules · feedback-rules (brand overrides global).
> **Structure selection (Mode 1 step 5)**: before planning, the orchestrator queries the [swipe-index](swipe/index.md) for matching structures — if a SKELETON (or composition) was chosen, it is the piece plan's structural spine; adapt it to the brief, never the reverse. If none chosen, plan from this file's own models.
> Tier 1 style bans apply while DRAFTING, not only at QA (writing-principles B.1–B.3): zero em-dash, no "Not X. But Y.", no banned phrases.
> Writing invocation: §4 (Upsell Big Idea Formula) → §7 (universal sequence) → §12 (5-phase protocol — Fase 1 is the single normative pre-writing list) → §13 (output formats) → §16 (revision checklist).
> Reference sections — consult on demand only: §5 (the brief's upsell type entry only), §6 (the brief's value promise entry only), §8 (triggers — at structure time), §9 (pricing craft), §10 (the format in play), §11 (downsell — when planned), §14-§15 (rules + pitfalls at QA).

---

## Quick navigation

### Part A — Identity & scope
- §1 [Purpose](#1-purpose)
- §2 [When invoked](#2-when-invoked)
- §3 [Required inputs](#3-required-inputs)

### Part B — Format expertise
- §4 [Core principles — the Upsell Big Idea Formula](#4-core-principles--the-upsell-big-idea-formula)
- §5 [The 5 types of upsell](#5-the-5-types-of-upsell)
- §6 [The 6 value promises](#6-the-6-value-promises)
- §7 [Structural framework — the universal upsell sequence](#7-structural-framework--the-universal-upsell-sequence)
- §8 [Psychological triggers — 8 mapped to structural moments](#8-psychological-triggers--8-mapped-to-structural-moments)
- §9 [Value justification & pricing](#9-value-justification--pricing)
- §10 [Format-specific execution — video & text](#10-format-specific-execution--video--text)
- §11 [Downsell strategy](#11-downsell-strategy)

### Part C — Operational workflow
- §12 [Application protocol — upsell-specific notes](#12-application-protocol--upsell-specific-notes)
- §13 [Output formats](#13-output-formats)

### Part D — Quality control & references
- §14 [Writing rules specific to upsells](#14-writing-rules-specific-to-upsells)
- §15 [Common pitfalls](#15-common-pitfalls)
- §16 [Revision checklist](#16-revision-checklist)
- §17 [Cross-references](#17-cross-references)

---

# PART A — Identity & scope

## 1. Purpose

Produce ready-to-deploy upsell copy for:

- **Upsell pages** — text-based post-purchase pages (sales-page style, but compressed) with offer + CTA + decline link
- **Upsell VSL scripts** — video upsell scripts presented immediately after purchase (typically 6-16 minutes)
- **Downsell variants** — the reduced-offer page shown after an upsell decline (always paired with each upsell)

Does NOT produce:

- Front-end sales pages, VSLs, ads, advertorials — handled by their respective format specialists
- The funnel brief or strategic decisions (upsell type, value promise, urgency model) — handled by [strategist](skills/strategist.md)
- The pre-purchase persuasion sequence — handled by [lp-specialist](format-specialists/lp-specialist.md) / VSL specialists / [email-specialist](format-specialists/email-specialist.md)

The specialist is the **executor**, not the strategist. Strategic decisions (upsell type, value promise, problem approach, urgency model) come from the brief. The specialist translates those decisions into upsell copy that respects the post-purchase psychology and momentum state.

---

## 2. When invoked

The orchestrator routes to upsell-specialist when intent recognition (§5 of [CLAUDE](CLAUDE.md)) matches:

- "write the upsell", "scrivi l'upsell", "draft the OTO"
- "write the upsell VSL", "scrivi lo script dell'upsell"
- "write the downsell", "scrivi il downsell"
- "first / second / third upsell in the funnel" — each is a separate invocation

The orchestrator runs the **Brief readiness check** ([CLAUDE §6](CLAUDE.md)) before invoking. The upsell brief specifically requires: front-end product details, upsell product details, upsell type, urgency model, position in funnel.

---

## 3. Required inputs

The specialist needs these to start. Missing critical inputs are escalated to the orchestrator.

**From the funnel brief** ([funnel-brief](core/strategic-frameworks/funnel-brief.md)):

- §3.5 Avatar — now in BUYER state (not prospect state), their emotional state post-purchase
- §3.6 Offer — the upsell offer (composition, price, guarantee, urgency)
- §3.9 Proof inventory — testimonials and data relevant to the upsell product
- §4.X Touchpoint block for this upsell — position in funnel (Upsell 1 / 2 / 3+), urgency model, format (video / text)

**Upsell-specific brief fields** (must always be present):

- **Front-end product just purchased** — name + what it does + price
- **Upsell product** — name + what it does + price
- **Upsell type** — Stock-Up / Cross-Sell / Upgrade / DFY-DWY / Service (see §5)
- **Urgency type** — OTO (page disappears) / Timer countdown / Limited quantity / None
- **Position in funnel** — Upsell 1 (first after checkout) / Upsell 2 / Upsell 3+ / Only upsell
- **Value promise** — Better / Faster / Easier / Expanded / Savings / Holism (see §6)
- **Problem approach** — Expansion (A) or New Related Problem (B) (see §4.2)

**From the brand wiki**:

- `brands/<brand>/brand-copy-rules.md` — voice (mandatory)
- `brands/<brand>/offers.md` — full upsell offer composition (price, bonuses, guarantee, urgency, reason-why)
- `brands/<brand>/testimonials.md` — proof rows relevant to the upsell product
- `brands/<brand>/swipe.md` — brand-specific upsell examples (if any) for voice calibration
- `brands/<brand>/transcripts/` — selected transcripts for vocabulary and founder anecdotes

**From the cross-specialist writing libraries** (read per the Fase 1 sequence in §12 — Fase 1 is the single normative pre-writing list):

- [feedback-rules](core/feedback-rules.md) — global user rules. Read together with `brand-copy-rules.md` at Fase 1 step 0 (brand rules override global).
- [writing-principles](core/writing/writing-principles.md) — SECTION A (principles) + SECTION B (anti-AI patterns) post-draft; §3 Gulpease + read-aloud in Fase 5
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — Intensification (urgency, FOMO) + Identification (smart-buyer appeal) are dominant in upsells (read at Fase 1 step 3)
- [emotional-intelligence](core/writing/emotional-intelligence.md) — **gated read, two branches** (see §12 Fase 1 step 4): mandatory when the brief names Emotional anchors; consulted anyway (max 3 entries) for emotionally-led moments when it doesn't

**From the section specialists**:

- [offer-specialist](section-specialists/offer-specialist.md) — **Always read**: value stack, price anchoring, guarantee sections, CTA copy (the upsell's offer section reuses much of the universal offer craft)
- [bullet-point-specialist](section-specialists/bullet-point-specialist.md) — selectively, if the upsell uses bullet lists for value stack components

The upsell does NOT typically need: [lead-specialist](section-specialists/lead-specialist.md) (the lead is replaced by reaffirmation), [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) (the buyer already trusts the brand), [faq-specialist](section-specialists/faq-specialist.md) (no FAQ in upsells), [hook-specialist](section-specialists/hook-specialist.md) (no hook in the front-end sense — the buyer is already engaged). **Headline boundary**: the opening pattern ("Wait!" / "Congratulations!" — see §10) is owned by this file; if the layout calls for a true headline block, apply [headline-specialist](section-specialists/headline-specialist.md) craft in compressed form.

**From the copywriter (the request)**:

- Any specific testimonial to feature
- Any constraint on length (under X minutes for video, under X words for text)
- Any user-provided swipe (takes priority)

---

# PART B — Format expertise

> **Localization note**: the examples throughout this Part (and in §13) are US swipe — currency ($), CTA labels ("Add to Order"), and register follow the source material. At writing time, currency, CTA labels and register follow `brands/<brand>/brand-copy-rules.md` and the brand market's language. Never inherit the swipe's surface.

## 4. Core principles — the Upsell Big Idea Formula

Every upsell follows a three-part formula. This is the backbone of ALL upsell copy, regardless of format, length, or product type.

### 4.1 — Reaffirmation

The upsell opens by VALIDATING the purchase the buyer just made. This is non-negotiable. The buyer must feel smart, not pressured. Before you introduce anything new, you cement the decision they already made.

**What reaffirmation does:**
- Eliminates buyer's remorse before it forms
- Establishes you as an ally, not a salesperson
- Creates the psychological foundation for "and there's more"
- Activates the consistency principle — they made a smart choice, and smart people do smart things

**How to execute:**
- Name the product they just bought (specifically — not "your purchase")
- Acknowledge the specific problem it solves
- Praise the decision ("You just made a smart move" / "Most people never take this step")
- Be SPECIFIC about what they'll experience — not generic congratulations

**Critical rule:** never make the reaffirmation feel like a setup. It must be genuinely warm. The buyer can smell manipulation. If the reaffirmation feels like a windup for a pitch, the entire upsell fails.

### 4.2 — New or Expanded Problem

After reaffirmation, introduce a reason why the purchase alone isn't enough. This is where the upsell earns its existence. Two approaches:

**Approach A — Problem Expansion:**
The SAME problem they just addressed is broader than they realized. The product they bought handles one dimension, but there's another dimension they haven't considered.

> Example: They bought a gut health supplement. You expand: "Your gut health depends on both the bacteria IN your gut AND the lining that holds everything in place. [Product] rebuilds the bacteria. But if the lining is damaged, those bacteria can't do their job..."

**Approach B — New Related Problem:**
A DIFFERENT but related problem exists that the original purchase doesn't address. This problem is adjacent — close enough to feel relevant, distinct enough to justify a separate product.

> Example: They bought an anti-aging serum for their face. You introduce: "But here's what most people miss — the skin around your eyes ages 10x faster than the rest of your face, and it needs a completely different approach..."

**Which approach to use:**
- Problem Expansion → best for "more of the same" and "improved version" upsells
- New Related Problem → best for cross-sell and complementary product upsells

The brief specifies the upsell type — match the approach to the type.

### 4.3 — Irresistible Offer

Present the upsell product as the natural, logical solution to the problem you just introduced. The offer must feel like a COMPLETION of what they started, not a separate purchase.

**Key principle:** the upsell offer is always framed as "completing what you started" or "getting the full result" — never as "buying something else."

---

## 5. The 5 types of upsell

### 5.1 — Stock-Up (More of the Same)

The simplest upsell. The buyer just purchased a product — offer them MORE of it at a discount.

**Copy approach:**
- Lead with savings math ("You're already paying [price] — add [quantity] for just [discounted price] each")
- Future pacing on running out ("In 30 days when your supply runs out, you'll pay full price")
- Convenience framing ("Lock in your supply now so you never have to worry about reordering")
- Smart buyer appeal ("Our best customers always choose the 3-month supply")

**Psychological triggers active:** loss aversion (paying more later), convenience, intelligence appeal, FOMO on savings.

**Length:** short. 1-3 minutes for video, one screen for text. The product is already sold — you're only selling the QUANTITY.

### 5.2 — Cross-Sell (Complementary Product)

A different product that COMPLETES or ENHANCES the one they just bought.

**Copy approach:**
- Problem must be ADJACENT — close enough to feel relevant, different enough to justify existence
- Use Approach B (New Related Problem): introduce a dimension the original product doesn't cover
- Position as "the missing piece" — what they bought handles X, but without Y, the results are incomplete
- Never assume they bought previous upsells in the funnel — each upsell stands alone

**Critical cross-sell rule:** NEVER reference or assume the customer accepted a previous upsell. In a multi-step funnel (Upsell 1 → Upsell 2 → Upsell 3), each upsell must be self-contained. The customer may have declined all previous upsells. Only reference the ORIGINAL front-end purchase — that's the one thing you know they bought.

**Psychological triggers active:** completeness drive (the Zeigarnik effect — incomplete things nag), holistic thinking ("treat the whole problem, not just one symptom"), fear of wasted investment ("don't let your [original purchase] go to waste by ignoring [adjacent issue]").

### 5.3 — Upgrade (Improved Version)

A premium version of what they just bought — more potent, more comprehensive, or higher tier.

**Copy approach:**
- Use Approach A (Problem Expansion): the standard version handles the problem, the premium version handles it BETTER/FASTER/MORE COMPLETELY
- Frame as "the version our most serious customers choose"
- Specific differentiators: higher potency, additional ingredients, faster results, more comprehensive coverage
- The upgrade must be CLEARLY better, not vaguely "premium"

**Psychological triggers active:** intelligence appeal ("you clearly take this seriously"), aspiration, maximization instinct ("if I'm doing this, I should do it right").

### 5.4 — DFY / DWY (Done-For-You or Done-With-You)

A service or guided experience that removes the effort from achieving the result.

**Copy approach:**
- Reframe the challenge from "getting the product" to "implementing the solution"
- Acknowledge that having the RIGHT thing is only half the battle — using it correctly is the other half
- Position the DFY/DWY as the shortcut to guaranteed results
- If call-booking: sell the CALL, not the service. The call is free, low-risk, high-value.

**Psychological triggers active:** effort aversion, certainty ("guarantee your results"), VIP treatment, time savings.

### 5.5 — Service (Call Booking)

A consultation, strategy session, or coaching call that complements the product purchase.

**Copy approach:**
- The product handles the WHAT — the call handles the HOW (personalized to their situation)
- "One-size-fits-all" vs "customized to you" framing
- Free/low-cost call positioning — the barrier is time, not money
- Results from personalized guidance vs self-directed use

**Psychological triggers active:** personalization appeal, expert access, shortcut to results.

---

## 6. The 6 value promises

The product is the vehicle. What the buyer is really purchasing is one of these six value promises. Identify which one applies to your upsell and make it the emotional core of your copy.

### 6.1 — Better Results
"What you just bought works. This makes it work BETTER."
The upgrade path. More potent formula, higher-quality materials, advanced version.

### 6.2 — Faster Results
"Why wait 90 days when you could see changes in 30?"
Speed is the upsell. Same destination, shorter timeline. Accelerator products, intensive protocols.

### 6.3 — Easier Results
"You could do this yourself... or you could let us handle it."
Effort reduction. Done-for-you services, automation, guided implementations.

### 6.4 — Expanded Results
"You solved problem A. But problem B is still there."
Broader coverage. Complementary products that address adjacent issues the original purchase doesn't touch.

### 6.5 — Savings
"Stock up now and save [X]% — the price goes back up tomorrow."
Pure economics. Quantity discounts, bundle pricing, loyalty lock-ins.

### 6.6 — Holism
"Treating one symptom without the others is like plugging one hole in a leaking boat."
The completeness argument. Multi-product protocols, full-system approaches, comprehensive solutions.

---

## 7. Structural framework — the universal upsell sequence

Every upsell — whether 2-minute video or full-page text — follows this sequence. Duration and depth vary, but the ORDER is fixed.

```
1. REAFFIRM THE PURCHASE          (10-15% of total length)
   Validate their decision. Name the product. Praise the action.
   "You just made one of the smartest decisions..."

2. ORIENT THE CUSTOMER            (5-10%)
   Brief context: what happens next with their original purchase.
   "In the next few days, [product] will start [doing its job]..."

3. INTRODUCE THE NEW CHALLENGE    (20-30%)
   The problem expansion or new related problem.
   This is where the upsell EARNS its existence.
   Build the gap between what they have and what they need.

4. PRESENT THE SOLUTION           (15-20%)
   The upsell product as the natural answer to the challenge.
   Mechanism explanation if needed (brief — they already trust you).

5. JUSTIFY THE VALUE              (15-20%)
   Stack the value. Anchor the price against a higher reference.
   Show the math: what it costs vs what they get/save/avoid.

6. CREATE URGENCY + CLOSE         (10-15%)
   One-time offer framing. Timer. Exclusive pricing.
   Clear CTA. Risk reversal (guarantee).
```

### 7.1 — Timing for video upsells

Optimal video upsell length: **6-16 minutes**.

- **Supplements / physical products** — 10-12 minutes is the sweet spot
- **Information products** — 12-16 minutes (more explanation needed for the new problem)
- **Stock-up / quantity upsells** — 2-5 minutes (shortest — product is already sold)
- **Service / call booking** — 5-8 minutes

**Script timing template for supplement upsells (10-12 min):**

```
Introduction + Reaffirmation:      1-2 min
Problem Reminder + Expansion:       2-3 min
Consequence Amplification:          2-3 min
Future Pacing + Offer Presentation: 3-4 min
Close + Urgency:                    1-2 min
```

---

## 8. Psychological triggers — 8 mapped to structural moments

These are the persuasion levers specific to the upsell context. Use them as specified — not randomly, but mapped to structural moments.

### 8.1 — Momentum and Consistency
**Where:** Reaffirmation section.
"You've already taken the first step. The people who get the BEST results are the ones who go all the way."
The buyer made a decision. Consistency pressure makes them want to ACT consistently with that decision.

### 8.2 — Intelligence Appeal
**Where:** Throughout, but especially in the problem expansion.
"Most people stop here. But you're clearly someone who does their research..."
Frame the upsell purchase as what SMART people do. Never frame declining as stupid — frame accepting as exceptional.

### 8.3 — FOMO and Scarcity
**Where:** Close section.
"This offer is only available right now, on this page. Once you leave, it's gone."
One-time offer framing is the most powerful scarcity device in upsells. The page disappears. The price goes up. The bundle breaks apart.

### 8.4 — Fear of Consequences
**Where:** Problem expansion section.
"Without addressing [expanded problem], here's what typically happens..."
Not fear-mongering — HONEST consequence projection. What happens if they solve problem A but ignore problem B?

### 8.5 — Future Pacing
**Where:** Solution presentation.
"Imagine opening your cabinet 30 days from now and knowing you have everything you need..."
Specific, sensory. One scenario. Make them SEE the result of buying.

### 8.6 — Regret Aversion
**Where:** Close section.
"The only people who regret this offer are the ones who didn't take it."
Distinct from FOMO — this is about personal regret, not missing out on a deal.

### 8.7 — Social Proof (Compressed)
**Where:** Solution presentation or close.
"87% of our customers who bought [original product] also chose [upsell]."
In upsells, social proof is compressed to a single data point. No testimonial sections. One stat, one sentence, maximum impact.

### 8.8 — Sunk Cost Reframing
**Where:** Problem expansion.
"You've already invested in [original product]. Without [upsell], you're only getting half the value of that investment."
Reframe the upsell not as additional cost, but as PROTECTING the investment they already made.

---

## 9. Value justification & pricing

The offer-block craft for upsells follows the universal patterns from [offer-specialist](section-specialists/offer-specialist.md) with upsell-specific tuning.

### 9.1 — The Value Stack

Every upsell builds a value stack — a list of everything included, with individual values assigned, that adds up to far more than the asking price.

**How to build the stack:**
1. List every component of the upsell product/service
2. Assign a credible individual value to each (what it would cost separately)
3. Total the stack
4. Present the asking price as a fraction of the total
5. Explain WHY the price is discounted (reason-why)

**Example pattern:**

```
[Component 1] — valued at $X
[Component 2] — valued at $Y
[Component 3] — valued at $Z
Total value: $[X+Y+Z]

But because you're already a [brand] customer,
you won't pay $[total] today.

Not even $[middle anchor].

Your price right now: just $[actual price].
```

### 9.2 — Price Anchoring

Always anchor against THREE reference points:
1. **The retail/separate price** — what each component costs individually
2. **A middle anchor** — a reduced but still higher price ("not even $X")
3. **The actual price** — dramatically lower

### 9.3 — Reason-Why for the Discount

The buyer needs to understand WHY the price is so low. Without a reason, low prices trigger suspicion. Common reasons:
- "Because you're already a customer and we've already covered our acquisition costs"
- "This is a one-time introductory offer for new customers only"
- "We'd rather you experience the full system at a discount than miss out on the best results"

### 9.4 — Daily Cost Breakdown

For subscription or multi-month supplies, break the price into daily cost:
"That's less than $1.50 a day — less than your morning coffee."

---

## 10. Format-specific execution — video & text

### 10.1 — Video upsell script (VSL)

**Opening pattern:**

```
"Congratulations — and please, don't close this page."

"What I'm about to share with you is something we only offer
to customers who've just made the smart decision you just made."

"You just purchased [product name]. And that tells me something
about you — you're serious about [result]."
```

**Tone:** warm, not salesy. Conversational, not pressured. The buyer is a friend who just made a good choice — you're about to help them make it even better.

**Script conventions:**
- Each line = one spoken phrase or sentence
- `[DIRECTION]` for presentation cues
- `[TEXT ON SCREEN: "..."]` for text overlays during video
- `[PRODUCT IMAGE]` when showing the upsell product
- `[TIMER APPEARS]` when urgency elements display
- `[CTA BUTTON VISIBLE: "Add to Order"]` for CTA moments

**Pacing rules:**
- Reaffirmation: warm, slower pace. Let the buyer breathe.
- Problem expansion: building tension. Medium pace, escalating.
- Solution reveal: confident, clear. The answer feels obvious.
- Value stack: rhythmic, staccato. Each component gets its beat.
- Close: urgent but not desperate. Confident.

### 10.2 — Text upsell page

**Layout:**
- Above the fold: headline + reaffirmation + "wait, your order isn't complete" (the opening pattern is owned by this file — see §3; if the layout calls for a true headline block, apply [headline-specialist](section-specialists/headline-specialist.md) craft in compressed form)
- Problem expansion section with subheadline
- Solution + product reveal
- Value stack (visual — boxed or highlighted)
- CTA button (large, contrasting color)
- Guarantee badge
- Timer if applicable
- "No thanks" link (small, below CTA)

**Design directions to include:**
- `[DESIGN NOTE: ...]` for layout instructions
- `[CTA BUTTON: "Yes! Add [Product] to My Order"]` for exact button text
- `[DECLINE LINK: "No thanks, I'll pass on this offer"]` for the decline option
- `[TIMER: 15:00 countdown]` if time-limited

**Text rules:**
- Shorter than a standard sales page — the buyer is in a FLOW, don't interrupt it
- Paragraphs: 2-4 lines max. Even shorter than landing pages.
- One CTA button per screen. Repeat 2-3 times on the page.
- The "no thanks" option must exist — never trap the buyer
- Subheadlines follow the same "second level of reading" principle as landing pages (see [lp-specialist §6.1](format-specialists/lp-specialist.md))

---

## 11. Downsell strategy

When the buyer declines the upsell, they see a downsell. The downsell is NOT a repeat of the upsell at a lower price — it's a strategically reduced offer.

### 11.1 — The Downsell Formula

**Reduce PRICE + reduce FEATURES, maintain CORE VALUE.**

The downsell removes components from the upsell to justify the lower price, but keeps the central product or benefit intact.

**Example:**
- Upsell: 3-month supply + bonus guide + free shipping = $147
- Downsell: 1-month supply only = $47

### 11.2 — Downsell copy approach

**Opening:** acknowledge the decline without judgment.
"I understand — $147 is a significant investment."

**Reframe:** offer the reduced version.
"That's why I want to offer you just the [core product] — a single bottle to try it out."

**Maintain the core argument:** the PROBLEM you introduced in the upsell is still real. The downsell solves it at a lower commitment level.

**Close:** same urgency, reduced price.
"Just $47 for a full 30-day supply. Same product, same quality — just a smaller commitment to start."

### 11.3 — Downsell rules

- Never make the buyer feel BAD for declining the upsell
- Never repeat the upsell pitch word-for-word — the downsell must feel like a NEW, reduced offer
- The core value promise stays identical — only the scope/quantity/extras change
- Keep downsell copy 40-60% shorter than the upsell copy
- One CTA, one price, one decision

---

# PART C — Operational workflow

## 12. Application protocol — upsell-specific notes

The specialist applies the universal **5-phase protocol** defined in [writing-principles §2](core/writing/writing-principles.md). That protocol is the authoritative workflow — read it there, do not re-state it here.

The notes below specify what is **upsell-specific** at each phase.

| Phase | Upsell-specific notes |
|---|---|
| **Fase 1 — Pre-writing** | **This is the single normative pre-writing list** (§3 describes the expected inputs; this sequence governs). **0.** Read [feedback-rules](core/feedback-rules.md) (global rules) + `brands/<brand>/brand-copy-rules.md` (brand rules — they override global). These apply to every line you write and are re-verified at QA (writing-principles Fase 4d). **1.** Read brief sections §3 above, brand `swipe.md` (if upsell examples exist), the specific testimonials referenced in the brief, and `offers.md` for the full upsell offer composition. **2.** Always read [offer-specialist](section-specialists/offer-specialist.md): value stack, price anchoring, guarantee sections (+ CTA copy) — craft consistency with front-end offer execution. **3.** Read [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — Intensification (urgency, FOMO) + Identification (smart-buyer appeal) are the dominant levers for this format. **4.** Emotional gate — read [emotional-intelligence](core/writing/emotional-intelligence.md): (a) MANDATORY when the brief's touchpoint block names Emotional anchors — read those entries only; (b) if the brief names no anchors and the piece includes emotionally-led moments (problem dramatization, hook, future pacing), consult the relevant entries anyway (max 3 per piece) and flag the missing anchors to the copywriter as a brief gap. |
| **Fase 2 — Drafting** | **Write the reaffirmation first** and verify it lands warmly (no setup feel) before writing the rest. Then draft the universal sequence (§7) section by section. For video: write each line as a spoken phrase. For text page: write the subheadlines first, then the body under each. |
| **Fase 3 — Principles refinement** | Universal pass per [writing-principles SECTION A](core/writing/writing-principles.md). Upsell-specific watch-points: **Principle 1 (One Thing)** — the One Thing of an upsell is the value promise (§6). The whole piece must trace to it. **Principle 7 (Reason Why)** — the discount MUST have a reason-why; never naked. **Principle 9 (First person)** — the founder/frontman addresses the buyer directly. |
| **Fase 4 — Anti-AI pass** | Universal pass per [writing-principles SECTION B](core/writing/writing-principles.md). Upsell-specific hotspots: rigid parallel triads in the value stack ("More potent. More effective. More reliable.") — break the pattern; em-dash overuse in the close (rhetorical climax) — count and trim. |
| **Fase 5 — Readability + Read-aloud + Upsell-specific check** | Universal Gulpease + read-aloud per [writing-principles §3](core/writing/writing-principles.md). **Then add the Upsell Connection Test**: if you cannot explain the connection between the original purchase and the upsell in one sentence, the upsell is wrong for this position OR the copy hasn't established the connection clearly enough. Fix the problem-expansion section before delivering. |

---

## 13. Output formats

### Structure proposal (when planning before writing)

```
PROPOSED STRUCTURE — Upsell for [Product]

Front-end product: [name + what it does]
Upsell product: [name + what it does]
Upsell type: [Stock-Up / Cross-Sell / Upgrade / DFY-DWY / Service] (from §5)
Problem approach: [Expansion (A) / New Related Problem (B)] (from §4.2)
Value promise: [Better / Faster / Easier / Expanded / Savings / Holism] (from §6)
Format: [Video script / Text page]
Estimated length: [duration for video / page length for text]
Urgency model: [OTO / Timer / Limited / None]
Position in funnel: [Upsell 1 / 2 / 3+]
Reference swipe: [name or "none — using framework"]

Section 1: Reaffirmation (~[duration/length])
  [What to validate, which product to name, tone notes]

Section 2: Orientation (~[duration/length])
  [What happens next with their purchase, context setting]

Section 3: Problem Introduction (~[duration/length])
  [The expanded or new problem. Specific description of the gap.]

Section 4: Consequence Amplification (~[duration/length])
  [What happens if they DON'T address this gap. Stakes.]

Section 5: Solution Reveal (~[duration/length])
  [The upsell product. How it fills the gap. Brief mechanism if needed.]

Section 6: Value Stack + Price (~[duration/length])
  [Components, individual values, total, anchors, actual price, reason-why]

Section 7: Urgency + Close (~[duration/length])
  [OTO framing, timer, CTA, guarantee, risk reversal]

Triggers deployed: [list §8.X triggers active and where]

Downsell plan:
  [What gets removed from the upsell, new price, adjusted framing]
```

### Writing execution

**For video upsell scripts:**

```
[OPENING SCENE: warm setting, frontman addressing camera]

[FRONTMAN — direct, warm tone]

Congratulations.

[PRODUCT IMAGE — original purchase shown briefly]

You just made one of the smartest decisions you can make for [specific result].

[PAUSE — let it land]

[... continue with the universal sequence — line by line, with stage directions]

[TIMER APPEARS: 15:00]
[CTA BUTTON VISIBLE: "Add to Order"]

[final lines]
```

**For text upsell pages:**

```
---
## [HEADLINE: Wait — your order isn't complete]

[Body — reaffirmation in 2-4 lines]

[DESIGN NOTE: spacer + visual separator]

## [SUBHEADLINE for Problem Introduction]

[Body — problem expansion]

[... continue per universal sequence ...]

[DESIGN NOTE: Value stack as boxed/highlighted block]

## [SUBHEADLINE for Offer Reveal]

[Value stack as visual]

[CTA BUTTON: "Yes! Add [Product] to My Order"]
[Guarantee badge inline]
[DECLINE LINK: "No thanks, I'll pass on this offer"]
---
```

---

# PART D — Quality control & references

## 14. Writing rules specific to upsells

### Tone

- **Warm, not aggressive.** The buyer just trusted you with money. Honor that trust.
- **Excited, not desperate.** You're sharing an opportunity, not begging for a sale.
- **Confident, not pushy.** The offer speaks for itself — your job is to present it clearly.

### Sentence structure

- Max 15 words per sentence in video scripts. Many at 5-10.
- Max 20 words per sentence in text pages. Many at 8-12.
- Rhythm: short-short-medium. Punch-punch-expand. Repeat.

### Never do

- **Never trash the original purchase.** "What you just bought is great, BUT..." makes the buyer doubt their first decision. Instead: "What you just bought is great. AND here's how to make it even better."
- **Never assume previous upsells were accepted.** In a multi-step funnel, only reference the front-end purchase.
- **Never use generic congratulations.** "Congratulations on your purchase!" means nothing. "You just took the first step toward [specific result]" means everything.
- **Never introduce the upsell before reaffirming.** The reaffirmation MUST come first. Jumping to the pitch signals "I don't care about your purchase, I want more money."
- **Never make the upsell feel disconnected.** If the connection between the original purchase and the upsell isn't immediately obvious, the upsell fails.
- **Never use "BUT" after reaffirmation.** "You made a great choice, BUT..." negates the reaffirmation. Use "AND" instead: "You made a great choice. AND there's something that can make it even better."

### Always do

- **Name the original product specifically.** Not "your purchase" — the actual product name.
- **Be specific about the gap.** Vague gaps ("there's something missing") don't persuade. Specific gaps ("the product addresses the bacteria, but not the gut lining") do.
- **Include a reason-why for the discount.** Without it, low prices trigger suspicion.
- **Give the buyer an easy out.** A visible "no thanks" option builds trust and paradoxically increases conversions.
- **Use the word "because."** "Because you just became a [brand] customer..." — giving a reason, any reason, increases compliance.

---

## 15. Common pitfalls

### 15.1 — Trashing the original purchase

Any language that makes the buyer question their first decision kills the upsell. "What you bought is good, BUT it's not enough" = buyer's remorse. "What you bought is excellent. AND there's a way to get even more from it" = momentum.

### 15.2 — Skipping reaffirmation

Jumping straight to "Wait! Before you go..." without validating the purchase. The buyer feels ambushed, not appreciated.

### 15.3 — Vague problem expansion

"There's more to the story" without specifying WHAT. The buyer needs to understand the EXACT gap — why their purchase alone might not deliver the full result.

### 15.4 — Disconnected upsell

The connection between what they bought and what you're offering must be immediate and obvious. If you need more than one sentence to explain the connection, the upsell product is wrong for this position in the funnel.

### 15.5 — No reason-why for pricing

A dramatically lower price without explanation triggers suspicion. "Why is this so cheap? What's wrong with it?" Always explain.

### 15.6 — Referencing declined upsells

In a multi-step funnel: "Since you also got [Upsell 1]..." — the buyer may have declined it. Only reference the front-end purchase.

### 15.7 — Desperation in the close

"Please don't miss this!" / "You'll REGRET not taking this!" — desperation destroys the warm, confident tone that upsells require. The offer should feel like a gift, not a threat.

### 15.8 — Too long for the type

A stock-up upsell doesn't need 12 minutes. A cross-sell of a complex complementary product does. Match length to complexity.

### 15.9 — No downsell planned

Every upsell should have a downsell variant. If you don't plan it in the structure, it gets forgotten.

### 15.10 — Generic social proof

"Thousands of customers love this!" means nothing in an upsell. "87% of customers who bought [original product] also chose [upsell]" is specific and leverages their identity as a buyer.

---

## 16. Revision checklist

Run this before delivering. **Upsell-specific only** — the universal writing-quality checks (Gulpease, em-dash count, anti-AI patterns, read-aloud) are handled during Fase 3-5 per [writing-principles](core/writing/writing-principles.md).

**Structural**
- [ ] Opens with genuine reaffirmation of the original purchase?
- [ ] Original product named specifically (not "your purchase")?
- [ ] "AND" not "BUT" after reaffirmation?
- [ ] Universal sequence followed (Reaffirm → Orient → Problem → Solution → Value → Close)?
- [ ] No references to previously declined upsells?
- [ ] Clear connection between original purchase and upsell (one-sentence test)?

**Problem expansion**
- [ ] Problem expansion/new problem is SPECIFIC, not vague?
- [ ] Stakes / consequence amplification present (what happens without the upsell)?
- [ ] Right approach chosen (Expansion vs New Related Problem) for the upsell type?

**Offer & pricing**
- [ ] Value stack with individual component values?
- [ ] Price anchored against at least 2 higher reference points?
- [ ] Reason-why for the discounted price present?
- [ ] One-time offer framing (OTO / timer / limited) present?

**CTA**
- [ ] CTA is clear and benefit-loaded: "Yes! Add [Product] to My Order"?
- [ ] "No thanks" decline option exists?
- [ ] Guarantee / risk reversal present?

**Tone**
- [ ] Tone is warm and confident, not pushy or desperate?
- [ ] Smart-buyer intelligence appeal threaded throughout?

**Format-specific**
- [ ] For video: total duration within target range for the upsell type?
- [ ] For text: page length appropriate (shorter than a standard sales page)?
- [ ] Stage directions / design notes inserted where needed?

**Downsell**
- [ ] Downsell variant planned (or noted as separate deliverable)?

**Brand fidelity**
- [ ] Tone and vocabulary match `brands/<brand>/brand-copy-rules.md`?
- [ ] feedback-rules (global + brand) re-scanned on the final draft — no rule violated?
- [ ] No invented facts (everything from brief or brand wiki)?
- [ ] First person consistent (frontman/brand speaks as "I" / "we")?
- [ ] Currency, CTA labels and register localized per brand-copy-rules (examples in this file are US swipe)?

---

## 17. Cross-references

- [CLAUDE](CLAUDE.md) — orchestrator, runs Brief readiness check before invoking this specialist
- [strategist](skills/strategist.md) — produces the funnel brief this specialist consumes
- [funnel-brief](core/strategic-frameworks/funnel-brief.md) — input template
- [writing-principles](core/writing/writing-principles.md) — universal style layer (SECTION A + B post-draft; §3 Gulpease + read-aloud in Fase 5)
- [feedback-rules](core/feedback-rules.md) — global user rules; read at Fase 1 step 0 with `brand-copy-rules.md` (brand overrides global), re-scanned at QA (writing-principles Fase 4d)
- [emotional-intelligence](core/writing/emotional-intelligence.md) — gated read, two branches (see §12 Fase 1 step 4): mandatory when the brief names Emotional anchors; consulted anyway (max 3 entries) for emotionally-led moments when it doesn't
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — Intensification + Identification dominant for upsells (Fase 1 step 3)
- [offer-construction](core/strategic-frameworks/offer-construction.md) — the upsell's offer composition follows universal offer principles
- [funnel-architecture](core/strategic-frameworks/funnel-architecture.md) — the upsell as a touchpoint in the funnel (post-purchase position)
- [offer-specialist](section-specialists/offer-specialist.md) — **always read** (Fase 1 step 2): value stack craft, price anchoring, guarantee phrasing, CTA copy
- [headline-specialist](section-specialists/headline-specialist.md) — only when the layout calls for a true headline block (compressed application — the "Wait!" / "Congratulations!" opening pattern is owned by this file, §3 / §10)
- [bullet-point-specialist](section-specialists/bullet-point-specialist.md) — if upsell uses bullet lists for value stack components
- [lp-specialist](format-specialists/lp-specialist.md) — sibling format specialist (text-page format conventions share DNA)
- [email-specialist](format-specialists/email-specialist.md) — sibling (post-purchase email sequences pair with upsells)
- `brands/<brand>/brand-copy-rules.md` — voice
- `brands/<brand>/offers.md` — full upsell offer composition
- `brands/<brand>/testimonials.md` — proof rows for the upsell
- `brands/<brand>/swipe.md` — brand-specific upsell examples (if any)
- `brands/<brand>/transcripts/` — source material for founder anecdotes
- `brands/<brand>/procedures/` — brand-specific operative procedures (if any)

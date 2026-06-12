# Funnel Architecture

> Foundational strategic framework. The funnel architecture is the **physical vehicle** of the chain of beliefs. It defines (1) which touchpoints the funnel has, (2) which strategic function each one carries, (3) how the rings of the chain are distributed across them, and (4) how each touchpoint produces a transition that moves the prospect to the next.
>
> Used by the **Copy Genius Strategist** during Phase 1 (Discovery) of brief building, AFTER `chain-of-beliefs.md` has produced the rings of the chain, and IN COORDINATION WITH the brand's existing funnel data in `brands/<brand>/brand.md`.
>
> Distinct from `chain-of-beliefs.md` §7 (which sketches distribution at the pattern level as part of the chain methodology) — this file is the full operational framework: touchpoint catalog, transition design, distribution algorithm, verification audits, output format.
>
> **Consumer contract**
> Read by: the Strategist — at: Phase 1 (Discovery), funnel-architecture step, AFTER chain-of-beliefs has produced the rings.
> Output: fills funnel-brief blocks §4.1-§4.4 — [funnel-brief](core/strategic-frameworks/funnel-brief.md) owns the canonical block format; this file only explains how to derive the content.
> Load-bearing sections (always read): §2 (anatomy, touchpoint catalog, satellites), §3 (transition principle), §5 (discovery + operating modes), §6 (ring distribution algorithm), §7 (transition design), §8 (the 4 audits), §10 (operational sequence). Reference (on demand): §4 (pattern library), §9 (False Funnel), §11 (brief output pointer), §12 (cross-references).

---

## 1. Core principle

The chain of beliefs is the *what* — which propositions the prospect must internalize. The funnel architecture is the *where* and *in what order* — the physical path the prospect walks while those propositions are installed.

Two operational truths:

1. **A perfectly chosen chain on a misarchitected funnel does not convert.** If the rings have no touchpoint to live in, the prospect arrives at the CTA without holding them — and the chain is wasted.
2. **The funnel is brand-specific, not generic.** "Add an advertorial" is not architecture work; mapping which advertorial, between which two touchpoints, carrying which specific rings, with which exit state — that is architecture work.

### The two failure modes the architecture prevents

**Failure mode A — Orphan rings**: a ring required by the awareness level has no touchpoint that installs it. The prospect reaches the CTA still missing that belief, and the funnel converts under-potential.

**Failure mode B — Dead-weight touchpoints**: a touchpoint exists in the funnel but installs no ring and produces no necessary transition. The prospect spends attention there for no return, and the funnel leaks at that step.

### The single most important question per touchpoint

> *"What state of mind is the prospect in when they ENTER this touchpoint, and what state must they be in to click / scroll / submit at the end of it?"*

If a touchpoint cannot answer that question with two specific states, it is either dead-weight or needs redefinition. Every touchpoint is a micro-conversion engine. No exception.

---

## 2. Anatomy of a funnel

A funnel is a sequence of **touchpoints**. Each touchpoint has a physical form, a strategic function, a ring-capacity, and a transition it produces. Touchpoints are usually sequential but may branch (quiz outputs to different paths; segmentation routes retargeting to different LPs).

### 2.1 The four layers

| Layer | Purpose | Typical touchpoints |
|---|---|---|
| **Top of funnel** | Attention capture + initial qualification of fit | Ad (static, video, carousel), organic content, podcast appearance, partnership placement |
| **Mid of funnel** | Education + belief installation + commitment escalation | Advertorial, blog post, VSL (pre-pitch), quiz, webinar, lead magnet, email sequence |
| **Bottom of funnel** | Conversion event (purchase / application / booking) | Landing page, sales page, checkout, form, application call, sales call |
| **Post-purchase** | Maximize LTV via **satellite sub-funnels** (see §2.5) | OTO, upsell page, downsell page, cross-sell, continuity onboarding, post-purchase email |

### 2.2 Touchpoint catalog

The dictionary of touchpoint types, each with the ring-capacity it can comfortably carry. Capacity is a guideline, not a hard cap — a long-form sales page can carry more, a short ad less.

| Touchpoint | Form | Ring capacity | Typical entry state | Primary function |
|---|---|---|---|---|
| **Static ad** | Image + caption + CTA | 1 ring (partial) | Unaware / Scrolling | Attention + identification |
| **Video ad (short, ≤30s)** | Vertical video + caption | 1 ring (partial) | Unaware / Scrolling | Attention + identification + emotional hook |
| **Video ad (long, 30s-3min)** | Video + caption | 1-2 rings | Unaware / Scrolling | Attention + identification + first belief |
| **Carousel ad** | Multi-slide image + caption | 2 rings | Unaware / Scrolling | Attention + first 2 beliefs (sequential reveal) |
| **Advertorial** | Long-form native article (1,500-3,000 words) | 2-3 rings | Curious | Education + mechanism introduction + identification |
| **Blog post / content piece** | Long-form article | 1-2 rings | Engaged | SEO/organic discovery + early belief installation |
| **Lead magnet (PDF / checklist / mini-course)** | Downloadable asset | 1-2 rings | Identified | Optin + bond + early education |
| **Squeeze page (opt-in LP)** | Short LP, single CTA = email | 1 ring | Curious | Optin (the conversion event is the email, not the sale) |
| **Landing page — short** | 1 scroll-section, single argument | 1-2 rings | Engaged | Quick-conversion (for Most Aware / hot retargeting) |
| **Landing page — medium** | 3-5 scroll-sections | 2-3 rings | Identified | Standard DR conversion |
| **Landing page — long** | 8-15+ scroll-sections, full argument | 4-5 rings | Identified | Cold traffic Problem/Solution Aware conversion |
| **Sales page (advertorial-style long-form)** | 20+ scroll-sections, story-driven | 5-7 rings | Identified | High-ticket cold conversion |
| **VSL — short (≤3 min)** | Video pitch | 2-3 rings | Identified | Direct ask after short setup |
| **VSL — medium (3-15 min)** | Video pitch with mechanism reveal | 3-5 rings | Identified | Standard DR video conversion |
| **VSL — long (15+ min)** | Full video sales letter | 5-8 rings | Identified | Cold traffic conversion via video |
| **Webinar** | 45-90 min live or replay | 6-8 rings | Identified (registered) | Full education + offer reveal at end |
| **Quiz** | 5-15 questions + result page | 1-3 rings | Curious | Qualification + segmentation + soft education |
| **Application form** | Multi-step qualification form | 0-1 ring | Convinced (intellectually) | Qualification + commitment escalation (the form itself is the install of belief #14 "I can do this") |
| **Sales call (1:1)** | Live call with salesperson | All residual rings | Permitted | Final close + objection handling |
| **Single email** | One sent message | 1 ring | Already-engaged (on list) | Reinforcement + single-step transition |
| **Email sequence (5-7 emails)** | Daily/weekly drip | 3-5 rings | Identified (post-optin) | Multi-step nurture / launch |
| **Cart abandonment email** | Triggered post-abandon | Reinforcement of #20, #21 | Action-ready (interrupted) | Push back to checkout |
| **Onboarding email sequence (post-purchase)** | Drip after buy | B5, B6 reinforcement + bonus consumption | Acted | Bond + consumption + setup for next sale |
| **OTO / Upsell page** | Page presented immediately post-checkout | Mini-chain (see §2.5) | Acted (just bought primary) | Satellite conversion |
| **Downsell page** | Presented after OTO rejection | Mini-chain (lower-friction variant) | Acted + just rejected OTO | Recover the slip |
| **Tripwire / low-ticket front-end** | Standalone low-price product | 2-3 rings | Identified | Front-end ladder entry; converts traffic to buyers |
| **Continuity onboarding** | Recurring billing setup + first weeks | Bond + consumption rituals | Acted | LTV via subscription stickiness |

### 2.3 Branching, segmentation, and parallelism

Funnels are not always linear. Three patterns to handle:

- **Branching** — a touchpoint outputs to different next-touchpoints based on prospect signal. Example: quiz routes "beginner" vs "advanced" to different LPs. Each branch becomes its own micro-funnel with its own ring distribution.
- **Segmentation** — different audiences enter the funnel through different top-of-funnel touchpoints but converge mid-funnel. Cold traffic gets the full advertorial; warm retargeting skips it and lands directly on the LP. Each entry segment has its own ring requirement (cold = more rings to install; warm = fewer, because some are already held).
- **Parallel touchpoints** — same prospect receives multiple touchpoints simultaneously (an email + a retargeting ad + an organic post). These reinforce rather than sequence. Used in the days/weeks before a launch CTA.

The Strategist documents branching, segmentation, and parallelism explicitly in the funnel map (§5). Implicit branching is a frequent source of dead-weight ("we made a quiz but it doesn't change anything downstream").

### 2.4 Capacity is not commitment

A touchpoint's ring-capacity is what it *can* carry, not what it *must*. Two operational rules:

1. **Carry less than capacity when transitions need breathing room.** A long LP that crams 5 rings into 5 sections often underperforms the same LP carrying 4 rings across 5 sections (extra space for the dominant ring).
2. **Carry more than capacity only when the touchpoint is unusually well-designed.** A 7-ring webinar is rare and demands a sophisticated frontman + replay structure; most webinars overstate what 90 minutes can install.

### 2.5 Primary funnel vs. Satellite sub-funnels

Once the prospect completes the **primary action** (checkout, application submission, optin to high-value list), the funnel "closes one loop." Anything that happens after that — OTO, upsell, downsell, cross-sell, continuity onboarding — is **NOT a continuation of the primary funnel**. It is a **satellite sub-funnel** with its own chain of beliefs for a new product or commitment.

This distinction is the most common architecture mistake.

#### Why satellite sub-funnels are autonomous

The satellite is selling a different product (or a meaningful upgrade), at a different price point, with a different decision the buyer must accept. The decision logic is fresh; the chain of beliefs must be installed anew — but **a large portion of the chain is already held from the primary funnel**.

**Beliefs carried over from the primary purchase** (already installed — do NOT reinstall):

- **All 6 brand beliefs (B1-B6)** — already validated by the act of paying
- **Belief #19** (brand reflects my values) — validated
- **Identity beliefs #12, #14, #16** — "people like me" / "I can do this" / "I deserve this" — validated by the act of buying
- **Category beliefs #9, #10** — already accepted if the OTO is in a related category
- **Belief #21** (risk acceptable) — already accepted at the primary purchase (the buyer trusts the refund mechanic)

**Beliefs that must be installed by the satellite sub-funnel** (the mini-chain):

- **Belief #1 / #2 / #3** for the *new* problem the OTO solves (if the OTO addresses a different pain than the primary)
- **Belief #5 / #6 / #17 / #18** if the OTO has a different Unique Mechanism than the primary
- **Belief #20** (now-or-never) — re-anchored to the OTO's specific scarcity (typically: this offer disappears off this page)
- **Belief #25** (I can afford this) — re-anchored to the new price point (especially if OTO is higher-ticket than primary)
- **Belief #26** (mechanism guarantee) — if the OTO has its own guarantee

The satellite mini-chain is typically **2-4 rings**, where the primary chain was 4-7 rings. The satellite is shorter, faster-paced, and runs while the prospect is in **post-purchase momentum** — a transient state where action-readiness is unusually high.

#### Satellite sub-funnel structural patterns

| Satellite type | Typical mini-chain | Touchpoint(s) | Notes |
|---|---|---|---|
| **Pure upgrade OTO** | "This bigger version delivers more of what you just bought" (#22 superior + #25 affordable) | Single OTO page | Lowest-friction satellite; mini-chain may be only 2 rings |
| **Adjacent OTO** (different product, related category) | "There's another problem connected to the one you just solved — here's the product for it" (#1-3 new problem + #18 new UM + #20 + #25) | OTO page + optional confirmation step | Standard OTO pattern |
| **Premium tier upgrade** | "Upgrade to the elite version of what you just bought" (#22 + #14 "I qualify for premium" + #25) | OTO page + sometimes sales call follow-up | Used for cohort programs / high-touch services |
| **Continuity offer** | "Keep getting value monthly" (#15 ongoing ROI + #25 monthly affordability) | Onboarding sequence + continuity page | The mini-chain installs slowly across the onboarding |
| **Cross-sell (different audience-fit)** | Full mini-chain because the product is meaningfully different | Email sequence + dedicated LP | Approaches a full sub-funnel — not a pure post-checkout OTO |

#### The post-purchase momentum window

The post-purchase moment is the **highest action-readiness state of the customer's lifecycle**. They've just decided to act, they've just felt good about the decision (the dopamine of completion), and they have not yet experienced any of the friction of using the product.

The OTO captures this window. After 24-48 hours, the window closes; the same satellite offer presented a week later converts a fraction of what it converts on the thank-you page.

**Architecture implication**: the satellite must appear *immediately* post-conversion. Putting an OTO into "an email tomorrow" instead of on the thank-you page loses 80%+ of the OTO's conversion potential.

#### The most common satellite failure mode

**Treating the satellite as an appendix of the primary.** Symptoms:

- A throwaway "would you like to upgrade?" pitch with no real argument (no mini-chain installed)
- An OTO that just repeats the primary's pitch with a higher price
- A satellite at a price point so far above primary that #25 was never re-anchored (the buyer's "I can afford this" doesn't stretch)
- No #20 scarcity (the satellite shows up again in email later — the buyer learns it's not really "this page only")

When this fails, the brand concludes "OTOs don't work for us" and abandons LTV. The actual issue: the satellite was never architected as its own funnel.

---

## 3. The transition principle

Every touchpoint produces a **transition** — a measurable change in the prospect's state. The entry state and exit state are different. If they are the same, the touchpoint is dead-weight.

### 3.1 The state catalog

The cognitive/emotional states a prospect moves through. Not every funnel hits all states; not every state is a single touchpoint.

| # | State | Description | Behavioral signal |
|---|---|---|---|
| 1 | **Unaware / Scrolling** | Not currently thinking about the problem; consuming media | Scrolling speed; ad-blindness |
| 2 | **Attention captured** | Ad has interrupted the scroll | Stops scrolling; lingers on the ad |
| 3 | **Curious** | Wants to know more; opens the next thing | Clicks the ad; opens the email |
| 4 | **Engaged** | Reading/watching, processing content | Scroll-depth >60%, time-on-page > expected |
| 5 | **Identified** | "This is for me / about me" | Continues past identification-moment in the copy |
| 6 | **Mechanism-curious** | Wants to understand the *how* | Continues past the curiosity gap into the mechanism reveal |
| 7 | **Convinced (intellectually)** | "This should work / makes sense" | Continues into the offer section |
| 8 | **Convinced (emotionally)** | "This is *the* solution *for me*" | Engages with offer details; reads bonuses |
| 9 | **Permitted** | Has accepted the price/risk; the last block is gone | Reaches the CTA region without bouncing |
| 10 | **Action-ready** | Hand on the button | Hovers / clicks CTA |
| 11 | **Acted** | Completed the primary action | Purchase / submit / optin |
| 12 | **Consumed** | Has actually used the product | Login / open / use event (post-acquisition) |

### 3.2 Touchpoint → transition mapping (typical)

| Touchpoint | Entry state | Exit state | Lever (what produces the transition) |
|---|---|---|---|
| Ad | 1 Unaware | 3 Curious | Hook + identification + curiosity gap |
| Advertorial | 3 Curious | 5 Identified + 6 Mechanism-curious | Story + insight + UM teaser |
| LP hero | 4 Engaged or 3 Curious (if direct from ad) | 5 Identified | Headline + sub + lead |
| LP body | 5 Identified | 7 Convinced (intellectually) | UM + proof + mechanism explanation |
| LP offer block | 7 Convinced (intellectually) | 8 Convinced (emotionally) + 9 Permitted | Stack + bonuses + guarantee + scarcity |
| LP CTA | 9 Permitted | 10 Action-ready | Future pacing + cost-of-inaction + clear next step |
| Checkout | 10 Action-ready | 11 Acted | Frictionless form + reassurance |
| OTO page | 11 Acted (primary) | 11 Acted (satellite) | Mini-chain + post-purchase momentum |
| Email (mid-sequence) | 5 Identified or 7 Convinced | 7 Convinced (intellectually) or 9 Permitted | Reinforce + add new angle |
| Webinar | 5 Identified (registered) | 9 Permitted | Full education arc + offer reveal |

### 3.3 Two cardinal transition errors

**Error 1 — The over-reach**: the touchpoint asks the prospect to jump too many states in one step. An ad that tries to take a cold Problem Aware prospect from state 1 (Unaware) to state 10 (Action-ready) in a 15-second video — impossible. The prospect drops at the state-gap.

**Error 2 — The flat step**: entry state = exit state. The prospect lands, scrolls, leaves — same mental state they arrived with. The touchpoint is dead-weight even if it looks beautifully designed.

The audit for both errors is in §8.

### 3.4 The success signal — making transitions measurable

Every transition has a behavioral signal that confirms it occurred. Documenting the signal in the brief lets the campaign be debugged later: if conversion is weak, find the touchpoint whose signal is failing.

| Transition target state | Behavioral signal |
|---|---|
| Curious (3) | CTR on the touchpoint above |
| Engaged (4) | Scroll-depth threshold (typically 50-70% of page) |
| Identified (5) | Continued scroll past identification section |
| Convinced intellectually (7) | Time-on-page above benchmark; scroll past mechanism section |
| Permitted (9) | Reaches offer-section scroll position |
| Action-ready (10) | CTA hover / partial form-fill |
| Acted (11) | Purchase confirmation / form submission |

When the campaign launches and conversion is suboptimal, the Strategist (or analytics review) walks the funnel state-by-state and finds the first touchpoint whose signal is below benchmark. That's where the architecture leaks.

---

## 4. Common funnel patterns

The library of validated architectures. Each pattern is a template — adapt to brand and awareness level; don't drop in raw.

For each pattern: touchpoint sequence, total ring capacity, awareness levels it fits, when to use, when not to use.

### Pattern 1 — One-step direct

**Sequence**: Ad → Landing page → Checkout

**Ring capacity**: 1 + (2 to 5) + 0 = 3-6 rings total

**Best for**: Most Aware, Product Aware audiences; retargeting; brand-aware cold traffic in tight categories

**When to use**: low ticket (<€100), simple value prop, audience already aware of category & brand; or all 5 rings can be carried by a long-form LP

**When NOT to use**: cold Problem Aware audiences (the chain doesn't fit; need a bridge touchpoint); high ticket (>€500) without prior trust

---

### Pattern 2 — Two-step lead magnet

**Sequence**: Ad → Opt-in squeeze page → Email sequence (5-7 emails) → Sales LP → Checkout

**Ring capacity**: 1 + 1 + (3-5) + (2-3) + 0 = 7-10 rings total

**Best for**: Solution Aware, Problem Aware cold audiences; high-ticket products requiring multiple exposures

**When to use**: cold cold traffic; complex product; high price; need to build relationship before offer; list-building is also a goal

**When NOT to use**: time-sensitive launches (the email gap costs urgency); audiences that won't tolerate email burden

---

### Pattern 3 — Advertorial bridge

**Sequence**: Ad → Advertorial → Landing page → Checkout

**Ring capacity**: 1 + (2-3) + (2-3) + 0 = 5-7 rings total

**Best for**: Solution Aware, Problem Aware cold audiences; mechanism-driven products where education is the bottleneck

**When to use**: cold traffic where direct-LP would be jarring (too compressed); when the UM needs space to land; when the brand is unknown and trust needs building before the sales page

**When NOT to use**: Most Aware retargeting (advertorial wastes the warm prospect's time); product so simple no education is needed

---

### Pattern 4 — VSL direct

**Sequence**: Ad → VSL (with offer at end) → Form or Checkout

**Ring capacity**: 1 + (3-8) + 0 = 4-9 rings (depending on VSL length)

**Best for**: emotional / story-driven products; older demographics; high-trust niches; offers where the frontman's voice/face is itself the conversion lever

**When to use**: the brand has a strong frontman; the product benefits from spoken narrative; the avatar consumes long-form video; high-margin offers that can afford VSL production

**When NOT to use**: B2B early-stage audiences (won't watch 30 min of video); when the frontman is camera-averse; when the offer is commodity (no story to tell)

---

### Pattern 5 — Webinar funnel

**Sequence**: Ad → Registration page → Webinar (live or replay) → OTO / follow-up email → Sales call (optional)

**Ring capacity**: 1 + 1 + (6-8) + 0 + (all residual) = 8-10+ rings total

**Best for**: high-ticket B2B; coaching/agency; cohort programs

**When to use**: high price (>€1,000) requiring full education; offers tied to a live event or cohort start; when the frontman thrives in webinar format

**When NOT to use**: cold audiences with low patience for video; product simple enough that an LP suffices; commodity offers

---

### Pattern 6 — Quiz funnel

**Sequence**: Ad → Quiz → Result page (segmented) → LP or Email sequence → Checkout

**Ring capacity**: 1 + (1-3) + (2-4) + (1-2) = 5-10 rings

**Best for**: Problem Aware to Solution Aware audiences; products where personalization is part of the value prop; large lists where segmentation downstream pays off

**When to use**: avatar has multiple meaningful sub-segments; the brand can deliver different content per segment; the quiz itself feels valuable to the user (not a sales-disguise)

**When NOT to use**: when the quiz is a thin gate (5 generic questions, then everyone gets the same LP); when the product is single-segment

---

### Pattern 7 — Application / call funnel (high-ticket)

**Sequence**: Ad → Application LP → Application form → Booked call → Sales call → Close

**Ring capacity**: 1 + (3-4) + 0 + 0 + (all residual) + 0 = 4+ rings on LP, residual on call

**Best for**: high-ticket services (€3,000+); coaching, agency, consulting; cohort programs requiring qualification

**When to use**: price too high for online-only close; brand needs qualification (not every applicant is a fit); the sales call itself is part of the brand experience (frontman or senior strategist)

**When NOT to use**: scalable e-commerce; when sales team bandwidth is the bottleneck; when application abandonment will exceed call conversion gain

---

### Pattern 8 — Long content nurture

**Sequence**: Organic content (blog / podcast / YouTube) → Opt-in for lead magnet → Long email sequence (weeks/months) → Launch LP → Checkout

**Ring capacity**: (1-2) + 1 + (variable, often 5+) + (2-3) + 0 = 9+ rings cumulative

**Best for**: thought-leadership brands; markets where trust is the dominant variable; long sales cycles (B2B, premium consumer)

**When to use**: brand has content-production capacity; product is premium and benefits from extended trust-building; SEO/organic is a real channel

**When NOT to use**: short-runway launches; brand without content infrastructure; cold-paid-only strategies

---

### Pattern 9 — Tripwire ladder

**Sequence**: Ad → Tripwire LP (low-ticket front-end product, €7-€47) → Checkout → Upsell sequence → Core offer → (Optional further upsells)

**Ring capacity**: 1 + (2-3) + 0 + [satellite mini-chains] + (3-5) + 0

**Best for**: e-commerce; info products; lead-to-buyer conversion where buyer-status itself unlocks downstream LTV

**When to use**: brand has multiple products at price ladder; converting traffic to buyers (even at break-even on tripwire) is strategically valuable; the brand can execute satellite sub-funnels effectively

**When NOT to use**: single-product brands; when the tripwire would cannibalize the core; when satellite execution is weak

---

### Pattern 10 — Continuity / membership

**Sequence**: Ad → LP (with free trial offer) → Optin / card capture → Onboarding sequence → Recurring billing

**Ring capacity**: 1 + (2-3) + 0 + (B5/B6 reinforcement + #15 ongoing ROI) + 0 = ongoing

**Best for**: software, community, recurring-content products; "puppy" mechanic offers

**When to use**: product delivers value continuously; the brand can sustain customer success at scale; LTV depends on retention not single purchase

**When NOT to use**: products without recurring value; brand without retention infrastructure; one-and-done categories

---

### Hybrid and custom patterns

Real funnels often combine patterns: a webinar funnel may run a quiz upstream for segmentation; a long-content nurture funnel may end in a webinar; an advertorial bridge may feed into a VSL rather than an LP. The Strategist names the dominant pattern and then describes the deviations.

---

## 5. Discovery — mapping the funnel with the copywriter

Before distributing rings, the Strategist must know the funnel — what the prospect actually walks through from first touch to conversion (and beyond). The discovery is a **conversation with the copywriter**, not a desk exercise.

### The first question

Discovery always opens with the same question to the copywriter:

> *"Describe the funnel. What are the exact steps a prospect goes through, from the first touchpoint all the way to the post-purchase flow?"*

The copywriter's answer determines which of two operating modes the Strategist enters.

### 5.0 Two operating modes

**Mode A — Follow** (the copywriter has the funnel clear)

The copywriter describes a funnel with confidence. They know the touchpoints, the sequence, the channels, the post-purchase flow. They may have run the architecture before, inherited it from prior brand work, or already decided strategically. The Strategist's job is **not to re-architect** — it is to document, audit, and distribute rings onto the funnel the copywriter has specified.

In Mode A:

- Document the funnel as described (Step 3 below)
- Read the brand wiki to verify consistency and surface what's reusable (Step 1)
- Flag operational constraints only as observations (Step 4) — not as redesigns
- Identify orphan rings or capacity gaps (Step 5) — propose minor additions, never structural overhauls
- Move forward to §6 ring distribution

The principle is **copywriter-led**. The copywriter chose this funnel for reasons (commercial, operational, strategic, historical) that may not all surface during discovery. Override only if §8 audits surface a **structural blocker** (e.g., an orphan ring with no fix possible inside the current architecture) — and even then, surface the blocker and let the copywriter decide.

**Mode B — Consult** (the copywriter wants help shaping the funnel)

The copywriter is uncertain — they're choosing between architectures, they're new to the brand, they're building a campaign from scratch, they want a second opinion before committing. They ask the Strategist for help.

In Mode B:

- The discovery becomes an **interactive consultation**, not a rigid workflow
- The Strategist **improvises** each conversation — proposes options, asks targeted questions, surfaces tradeoffs, iterates
- Every consultation is unique because the combination of (brand + awareness + audience + offer + operational reality) never repeats cleanly — no template fits
- The 8 discovery questions in Step 2 become **conversation starters, not a script** — pick the ones that matter for this specific copywriter, in this specific moment, in any order
- The Strategist proposes a candidate architecture → presents tradeoffs → the copywriter reacts → the Strategist adjusts → loop until the copywriter has the funnel they want to commit to

The Strategist's posture in Mode B:

- **Propositional, not prescriptive**: every recommendation is presented with rationale + at least one alternative
- **Tradeoff-explicit**: every choice closes some options and opens others — name both sides
- **Patient about iteration**: it may take 3 rounds of back-and-forth to land on the right architecture; that's normal
- **Realism-anchored**: any proposed architecture must respect the operational constraints from §5 Step 4 — no proposing a webinar if the frontman is camera-averse, no proposing an application-call funnel if there's no sales team
- **Copywriter-led on final commitment**: even after consulting, the copywriter chooses; the Strategist documents

**In both modes, the output is the same**: a clear funnel architecture block in the brief (§11 format). The path to that output differs.

| Mode | Path |
|---|---|
| **Mode A (Follow)** | document → audit → distribute rings |
| **Mode B (Consult)** | explore → propose → iterate → commit → audit → distribute rings |

When entering this section, the Strategist **surfaces the mode explicitly** with the copywriter — naming which mode is active aligns expectations:

- Mode A signal: *"You've described the funnel clearly — let me document it, run the audits, and propose where each ring of the chain sits."*
- Mode B signal: *"Let's work this out together. Tell me about the product, the audience temperature, and what the brand can realistically deploy — I'll propose a few architectures and we'll iterate."*

---

### Step 1 — Read the brand wiki for funnel artifacts

Read in order:

1. `brands/<brand>/brand.md` — strategic vision, current campaigns, channels used
2. `brands/<brand>/funnel-briefs/*.md` — previous brief structures
3. `brands/<brand>/procedures/*.md` — operational SOPs that may describe funnel mechanics
4. `brands/<brand>/offers.md` — product / pricing / OTO structure

### Step 2 — Ask the copywriter (the discovery questions)

Even with the wiki populated, surface the questions:

1. **Traffic source**: where does the cold prospect come in from (paid Meta / Google / TikTok / organic / partnership / podcast / list)?
2. **First touchpoint**: what is the ad / post / piece of content the prospect first sees?
3. **Bridge touchpoint**: is there an advertorial / VSL / quiz / lead magnet between ad and LP, or is it direct?
4. **Conversion touchpoint**: where does the primary action happen (LP / sales page / application / call)?
5. **Post-conversion sequence**: is there an OTO? An upsell sequence? A continuity element? An onboarding sequence?
6. **Email sequence**: does the funnel use email at all (pre-conversion nurture, post-conversion bonding, both, neither)?
7. **Retargeting**: is there a retargeting layer on top of the cold funnel? How does it differ?
8. **Segmentation / branching**: does any touchpoint branch the prospect into different paths?

### Step 3 — Document the funnel map

Produce a text-based map of the funnel. Example format:

```
COLD TRAFFIC FUNNEL — Meta paid

  Touchpoint 1: Static ad (Meta feed + Stories)
       ↓ click
  Touchpoint 2: Advertorial article (long-form, native style, 2,000 words)
       ↓ click on CTA
  Touchpoint 3: Long-form landing page (10 sections + offer block)
       ↓ click checkout
  Touchpoint 4: Checkout
       ↓ purchase
  Touchpoint 5: Thank-you OTO page (immediate)
       ↓ accept or decline
  Touchpoint 6: Post-purchase onboarding email sequence (7 emails, 21 days)

RETARGETING LAYER

  Touchpoint R1: Retargeting ad (Meta feed, dynamic by step reached)
       ↓ depending on which step the prospect dropped:
       - dropped after advertorial → re-served the LP directly
       - dropped at LP → re-served a shorter "objections" advertorial
       - dropped at checkout → cart abandonment email + retargeting ad

SATELLITE: OTO mini-funnel (Touchpoint 5 above)
  Mini-chain target: #1 new problem + #18 new UM + #20 (page-only) + #25 affordable
```

### Step 4 — Flag operational constraints

Some funnel choices are blocked by brand reality. The Strategist surfaces these:

- "Brand has no email infrastructure → can't deploy Pattern 2 / 5 / 8 / 9 / 10 as-is"
- "Frontman is camera-averse → VSL and webinar patterns are off the table"
- "No sales team → Pattern 7 (application/call) can't be operationalized"
- "Brand has only one product → tripwire ladder doesn't apply"

The funnel architecture must be the funnel the brand *can deploy*, not the funnel the methodology *prefers*.

### Step 5 — Identify gaps and proposed additions

If discovery reveals a missing touchpoint that the chain requires (e.g., the brand goes direct Ad → LP but the awareness level is Problem Aware requiring 4 rings, and the LP can carry only 3), the Strategist proposes the missing touchpoint — and confirms the brand can produce it.

The output of discovery is the **funnel map + the proposed modifications + the operational reality check**.

---

## 6. Ring distribution — the algorithm

Once the chain is known (from `chain-of-beliefs.md`) and the funnel is mapped (from §5), distribute the rings.

### Step 1 — Inventory the inputs

- **Rings required**: from chain-of-beliefs.md §4 output. Note the awareness level and the specific ring labels.
- **Touchpoints available**: from §5 output. Note each touchpoint's ring-capacity (§2.2) and its position in the sequence.

### Step 2 — Assign rings in narrative order

The rings have a natural order (the chain is sequenced). Assign them to touchpoints respecting that order:

- Ring 1 (typically "understanding/identification") → first content-bearing touchpoint (ad + first LP section, or ad + advertorial opening)
- Mid rings (mechanism, solution, identity) → mid-funnel touchpoints
- Final ring (procrastination / now-or-never) → pre-CTA touchpoint

### Step 3 — Match ring weight to touchpoint capacity

A "heavy" ring (one requiring extensive proof, story, or mechanism explanation) needs a touchpoint with capacity for it. A "light" ring (a single belief reinforced by one device) can sit in a small touchpoint.

Heavy rings (mechanism / category-superiority / new-cause-of-problem) → advertorial / LP body / VSL middle / webinar deep-dive

Light rings (now-or-never / risk acceptable) → LP offer block / email / cart-abandonment

### Step 4 — Resolve over-capacity

If a touchpoint is asked to carry more rings than its capacity:

- **Expand the touchpoint**: short LP becomes medium LP; short ad becomes long ad
- **Add an upstream touchpoint**: insert an advertorial between ad and LP; insert a VSL before the LP
- **Move rings downstream**: rings the prospect can accept later move to email or post-LP touchpoints
- **Reduce ring count**: confirm with the copywriter whether some rings are truly required (the prospect may already hold them at this awareness level)

### Step 5 — Resolve under-capacity (dead-weight risk)

If a touchpoint has more capacity than rings to install:

- **Verify the touchpoint is necessary**: if it carries no ring and produces no transition the chain requires, remove it
- **Use capacity for reinforcement**: brand beliefs (B1-B6), proof distribution, transition content
- **Combine touchpoints**: a long email sequence may not need 7 emails — consolidate to 4

### Step 6 — Apply the no-duplicate rule

The same ring should NOT be installed in two separate touchpoints. Two reasons:

1. **Dilution**: when a prospect sees the same belief argued twice with similar content, the second exposure feels redundant and weakens the first
2. **Wasted capacity**: the second touchpoint could have installed a different ring or produced a different transition

**Exception — brand beliefs**: B1-B6 can be reinforced across touchpoints because the "device" each time is different (founder story in advertorial; testimonials on LP; track record numbers on checkout reassurance). The reinforcement is texture, not repetition.

### Step 7 — Verify with the chain's structural requirements

Cross-check against `chain-of-beliefs.md` §4 (minimum rings per awareness level). Every required ring is now mapped to a touchpoint? If yes, distribution is complete. If a ring is unmapped, return to step 4.

---

## 7. Designing each step's transition

After rings are distributed, design the transition each touchpoint produces. This is what turns "rings on a list" into "a prospect who moves."

### Per-touchpoint design template

This is the design METHOD — the documentation format it feeds is owned by [funnel-brief](core/strategic-frameworks/funnel-brief.md) §4.2 (see §11). For each touchpoint in the funnel, work out:

1. **Entry state**: which state from §3.1 does the prospect arrive in? (Be specific. "Curious" is not the same as "Engaged + Mechanism-curious".)
2. **Required exit state**: which state must the prospect be in for the transition to succeed? (Equally specific.)
3. **Rings installed here**: the rings assigned in §6
4. **Devices used**: from `chain-of-beliefs.md` §5 (UM, proof, testimonial, founder story, offer mechanic)
5. **The dominant lever**: the single most powerful piece of content / argument / image / story that produces the transition. Not "the headline" — the specific headline angle. Not "a testimonial" — which testimonial and why.
6. **Success signal**: from §3.4 — what behavioral signal confirms the transition
7. **Funnel position**: where in the touchpoint does each ring sit (e.g., on a long LP: Ring 1 in hero, Ring 2 in section 3, Ring 3 in section 5, Ring 4 in pre-CTA)

### Transition design example (Problem Aware funnel)

```
TOUCHPOINT 2 — Advertorial (long-form article, ~2,000 words)

  Entry state:    3 Curious (clicked from ad)
  Exit state:     5 Identified + 6 Mechanism-curious

  Rings installed:
    - Ring 1: "The brand understands my problem" (#1, #2, #3, B1)
    - Ring 2: "The real cause of my problem is X" (#5, #6, #8)

  Devices used:
    - Founder story excerpt (B1, #1)
    - UMP (Problem Mechanism) — full 5-step articulation (#5, #6)
    - 1 data point + 1 illustrious authority cite (#8)

  Dominant lever:
    The mechanism-reveal moment in section 3 — naming what nobody else
    in the category names ("the real reason is not [X], it's [Z]"). This
    is the single passage that shifts the reader from "this person gets it"
    to "I need to understand more."

  Success signal:
    Scroll-depth > 70%, click on the embedded CTA mid-article

  Funnel position of each ring:
    Ring 1 — Sections 1-2 (hook + problem reframe + founder anecdote)
    Ring 2 — Sections 3-5 (the mechanism reveal + supporting evidence)
    [No Ring 3 here — Ring 3 lives on the LP, this advertorial sets it up]
```

This level of specificity is what separates a planned funnel from a hopeful one. Every touchpoint has a designed transition, a designed lever, and a designed success signal.

---

## 8. Verification — the 4 audits

Before the funnel architecture is locked into the brief, run four audits. Any failure is either a structural fix-before-ship or a flagged-and-shipped-with-awareness.

### Audit 1 — Orphan-ring check

Walk every required ring from the chain. Does each ring have a touchpoint that installs it? Does that touchpoint have the capacity to install it well (not just nominally)?

- **Pass**: every ring is mapped + the assigned touchpoint has capacity
- **Fail**: a ring is unmapped, or mapped to an undersized touchpoint
- **Fix**: return to §6 distribution; add a touchpoint or expand an existing one

### Audit 2 — Dead-weight touchpoint check

Walk every touchpoint in the funnel. Does each one install at least one ring OR produce a transition the chain requires?

- **Pass**: every touchpoint earns its place
- **Fail**: a touchpoint exists that carries no ring and produces no required transition
- **Fix**: remove the touchpoint, or repurpose it with a real ring + transition

### Audit 3 — Emotional discontinuity check

For each pair of consecutive touchpoints, is the exit state of the first touchpoint a plausible entry state for the second? Or is there a leap so large the prospect will not bridge it?

Examples of discontinuity:

- Ad exits at "Curious" → LP entry expected at "Convinced" (gap of 4 states)
- Advertorial exits at "Engaged" → Sales page entry at "Permitted" (gap of 4 states)
- LP exits at "Action-ready" → 24-hour email → LP entry at "Action-ready" (the state has decayed during the gap)

- **Pass**: each consecutive pair has a continuous state transition (gap ≤ 1 state typically)
- **Fail**: a leap of 2+ states between consecutive touchpoints
- **Fix**: insert a bridge touchpoint, or extend the upstream touchpoint to do more transition work

### Audit 4 — Friction audit

Is the total funnel length justified by the offer value and the awareness level? Two specific failure modes:

- **Too long**: 8+ touchpoints for a €27 tripwire = cumulative friction outweighs conversion gain
- **Too short**: 2 touchpoints for a €5,000 program at cold Problem Aware = rings are compressed sub-installed

The friction audit is a sanity check on the architecture-to-economics fit. The Strategist explicitly states their judgment on this audit; the copywriter decides whether the architecture is shippable.

### Audit output

After the 4 audits, the Strategist produces an audit summary:

```
VERIFICATION RESULTS

  Audit 1 — Orphan rings:        PASS / FAIL → [if fail, list orphaned rings]
  Audit 2 — Dead-weight:          PASS / FAIL → [if fail, list dead-weight touchpoints]
  Audit 3 — Emotional discontinuity: PASS / FAIL → [if fail, list risky jumps]
  Audit 4 — Friction:             PASS / WARNING → [if warning, describe]

  Ship recommendation: [ship-as-is | quick-fix-then-ship | restructure-required]
```

---

## 9. False Funnel — the trap

Like the other traps in the False family (canonical list in [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) §5), a False Funnel has the shape of an architecture without the substance. The prospect walks through but doesn't move.

### Symptoms

- **Dead-weight touchpoints**: a touchpoint exists because "we always have one" — installs no ring, produces no transition
- **Doubled rings**: the same belief argued in two different touchpoints (advertorial AND LP both argue Ring 2 with similar content — second is dilutive)
- **State leaps**: ad → LP asks for too-large a state jump; LP → checkout asks for too-large a jump
- **Missing transition content**: the LP doesn't reference what the ad said; the email doesn't reference what the LP said; the prospect feels they've landed on a stranger's page
- **Phantom branching**: a quiz that splits the prospect into segments who then receive identical content
- **OTO-as-appendix**: satellite sub-funnels treated as throwaway add-ons instead of architected mini-funnels (see §2.5)
- **Length-misfit**: 8+ touchpoints for €27 product; 2 touchpoints for €5K program
- **No success signals**: no touchpoint has a documented behavioral threshold; debugging the funnel post-launch is impossible
- **Ignored operational reality**: architecture demands a webinar, the frontman won't do webinars; demands a sales call, no sales team exists

### Why False Funnels are worse than no funnel at all

The brand spends production budget (creative, copy, ads, landing pages) on a funnel that *looks* sophisticated but converts under-potential. Worse, post-launch analytics will not surface the architecture problem — the data will look like "audience problem" or "creative problem," and the brand will iterate on the wrong variables for months.

### How to avoid

- Run §8 audits on every funnel before launch
- Document every transition with entry state + exit state + success signal (§7)
- Verify operational reality at §5 step 4 (no architecture beyond what the brand can deploy)
- Architect satellite sub-funnels with the same rigor as the primary (§2.5)

### Cross-reference to the False family

The canonical list of the False traps lives in [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) §5 — this file does not re-list it. False Funnel (this section) is the architecture member of that family: shape without movement. All traps in the family share the same failure mode — surface without underlying substance — and the defense in each case is the audit run rigorously and without shortcuts.

---

## 10. Operational sequence (Strategist contract)

The standard flow for a funnel-architecture invocation. Runs in Phase 1 Discovery, AFTER chain-of-beliefs.md has produced the rings. The sequence has 10 steps; Step 2 selects between Mode A (Follow) and Mode B (Consult) per §5.0.

### Step 1 — Gather inputs

- **Awareness level** + chain (from chain-of-beliefs.md output)
- **Brand wiki** — funnel artifacts, channels, operational capacity
- **Existing campaign materials** — what's already built that can be reused
- **Copywriter discovery answers** — the 8 questions in §5 Step 2

### Step 2 — Open with the first question + determine the operating mode

Ask the copywriter:

> *"Describe the funnel — what are the exact steps a prospect goes through, from the first touchpoint to the post-purchase flow?"*

Listen to the answer. Determine the mode (§5.0):

- **Mode A (Follow)** — copywriter has the funnel clear. Surface the mode, then proceed to Step 3 to document what they described.
- **Mode B (Consult)** — copywriter wants help shaping the funnel. Surface the mode, then enter interactive consultation: propose candidate architectures, surface tradeoffs, iterate with the copywriter until they commit to an architecture. The §5 Step 2 discovery questions are conversation starters in this mode, not a script.

The mode is named out loud to align expectations. Mode B may loop several times before settling.

### Step 3 — Map the funnel (the result of Step 2)

Document the funnel as it stands at the end of Step 2 — whether it was described in Mode A or co-shaped in Mode B. Produce the funnel map with all touchpoints + branching + segmentation + post-purchase satellite sub-funnels (§5 Step 3 format).

### Step 4 — Identify operational constraints

§5 Step 4. List what the brand cannot or will not deploy. In Mode B these were surfaced during the consultation; in Mode A they may need a follow-up question.

### Step 5 — Distribute rings to touchpoints

Run §6 algorithm. Resolve over/under capacity. Apply no-duplicate rule.

### Step 6 — Design transitions per touchpoint

Run §7. For each touchpoint: entry state, exit state, rings, devices, dominant lever, success signal, funnel position of each ring.

### Step 7 — Architect satellite sub-funnels

If the funnel has post-purchase touchpoints (OTO / upsell / downsell / continuity), apply §2.5. Each satellite gets its own mini-chain, mini-distribution, mini-transitions.

### Step 8 — Run the 4 audits

Run §8 of this file. Document audit results. Identify structural blockers and warnings.

### Step 9 — Present to the copywriter

Show:

- The funnel map (sequence, branching, satellites)
- Ring distribution per touchpoint
- Transition design (entry → exit, lever, success signal)
- Audit results + ship recommendation

Copywriter-led decision: copywriter confirms, adjusts, overrides, or instructs revisions.

### Step 10 — Document in the brief

Lock the funnel architecture block into the funnel brief (§11).

---

## 11. Output into the funnel brief

The funnel architecture block is **mandatory**. Every funnel ships with an architecture; the brief documents the touchpoints, rings, transitions, and satellites explicitly.

### Format — pointer

Document the architecture in the brief blocks §4.1-§4.4 ([funnel-brief](core/strategic-frameworks/funnel-brief.md) owns the format — this file does not redefine it):

- **§4.1 Funnel map summary** — pattern, sequence, audit results, ship recommendation
- **§4.2 Per-touchpoint specifications** — one block per primary touchpoint
- **§4.3 Satellite sub-funnels** — one block per satellite (per §2.5 of this file)
- **§4.4 Branching / segmentation** — if applicable

Fields this file feeds into those blocks: **form** (§2.2 catalog), **rings installed** (§6 distribution), **entry/exit state** (§3.1 catalog + §7 transition design), **dominant lever** (§7), **success signal** (§3.4), **funnel position of each ring** (§7), satellite type / trigger / carried-over beliefs / mini-chain (§2.5), and the verification results (§8 audits).

Note: the brief's §4.2 block also carries fields this file does NOT produce — Specialist to write this, Big Idea expression, Piece-level persuasion architecture, Emotional anchors, Out-of-scope, Writing notes. Those come from big-idea.md, persuasion-techniques.md, and emotional-intelligence.md outputs; the Strategist assembles them in the brief.

### Worked example (Problem Aware, Advertorial bridge pattern, with 1 OTO satellite)

> Non-normative content illustration. The canonical block format is funnel-brief §4.1-§4.4; this example shows the level of specificity the architecture content must reach, not the format to copy.

```
FUNNEL ARCHITECTURE

  Funnel pattern: Advertorial bridge (Pattern 3) + 1 OTO satellite
  Awareness level: Problem Aware (4 rings required)
  Total rings required: 4 primary + 3 satellite mini-chain
  Operational constraints:
    - Brand has email infrastructure (good)
    - Frontman camera-averse → no VSL/webinar
    - Single core product + 1 premium upgrade product (OTO candidate)

  ─── Primary funnel ───

  TOUCHPOINT 1 — Static ad (Meta feed + Stories)
    Form:                  Static 1080x1080 + 150-char caption + CTA
    Rings installed:        Ring 1 partial — "Brand understands the problem" (#1, B1)
    Entry state:            Unaware / Scrolling
    Exit state required:    Curious
    Dominant lever:         Identity hook — naming the prospect's specific lived
                            experience in the headline. Image shows the prospect
                            (not the brand) experiencing the problem.
    Devices used:           Identity copy + founder-implicit voice
    Success signal:         CTR > 1.2%, link-CTR > 0.5%
    Funnel position:        Headline + caption first 3 lines = full ring 1 partial install

  TOUCHPOINT 2 — Advertorial (long-form article, ~2,000 words)
    Form:                  Native-content style article on owned domain
    Rings installed:        Ring 1 (complete) + Ring 2 — "The real cause is X" (#5, #6, #8)
    Entry state:            Curious
    Exit state required:    Identified + Mechanism-curious
    Dominant lever:         The mechanism-reveal moment in section 3 — naming what
                            nobody else in the category names ("the real reason is
                            not [X], it's [Z]"). Anchored to UMP (problem mechanism).
    Devices used:           Founder story excerpt (B1, #1) + UMP full articulation (#5, #6)
                            + 1 data point + 1 illustrious authority cite (#8)
    Success signal:         Scroll-depth > 70%, CTR on embedded CTA > 4%
    Funnel position:        Sections 1-2 → Ring 1 / Sections 3-5 → Ring 2 / CTA → into LP

  TOUCHPOINT 3 — Long-form landing page (10 sections + offer block)
    Form:                  Long-form sales page, ~3,500 words, with embedded video clips
    Rings installed:        Ring 3 — "There's a product with a Useful Mechanism for that
                            problem" (#9, #10, #17, #18) + Ring 4 — "Procrastinating
                            could harm me" (#3 reinforced, #4, #7, #15) + B2/B3/B4 reinforcement
    Entry state:            Identified + Mechanism-curious
    Exit state required:    Convinced (emotionally) + Permitted + Action-ready
    Dominant lever:         The before/after demonstration in section 5 (#22 superiority +
                            #18 brand's UM) + the offer-stack in the offer block (#21, #25, #26).
                            The lever shifts mid-page from "this works" to "this is for me NOW."
    Devices used:           UMS (full articulation) + UMP/UMS bridge + 1 before/after case
                            + 5 testimonials (2 Illustrious + 3 Regular) + offer block
                            with stack/scarcity/guarantee
    Success signal:         Scroll past offer block > 30% of LP visitors;
                            add-to-cart > 4%
    Funnel position:        Hero (Ring 1 reinforcement) → Sections 1-4 (Ring 3 install) →
                            Sections 5-7 (proof) → Sections 8-9 (Ring 4 + offer setup) →
                            Section 10 (offer block + CTA)

  TOUCHPOINT 4 — Checkout
    Form:                  Single-page checkout with order-bump option
    Rings installed:        None (reinforcement only: B4 trust + #21 risk acceptable)
    Entry state:            Action-ready
    Exit state required:    Acted
    Dominant lever:         Frictionless form + reassurance copy + trust badges
    Success signal:         Purchase completion rate > 70% of add-to-cart
    Funnel position:        All trust-reinforcement copy in the right rail / above-button

  ─── Satellite sub-funnel ───

  SATELLITE 1 — Premium upgrade OTO (immediate, thank-you page)
    Type:                   Pure upgrade OTO
    Trigger:                Post-checkout of primary, before order confirmation page
    Beliefs carried over:   B1-B6 (validated by primary purchase), #14 (I can do this),
                            #16 (I deserve this), #19 (brand reflects my values),
                            #21 (risk acceptable — primary guarantee covers OTO too)
    Mini-chain to install:  #22 (premium is superior to standard) + #25 (I can afford the upgrade)
                            + #20 (this page only — page-specific scarcity)
    Touchpoints:
      OTO 1.1 — Thank-you OTO page:
        Form:               Single-page upgrade pitch + accept/decline buttons (no cart back-out)
        Rings installed:    Mini-chain (#22, #25, #20)
        Entry state:        Acted (primary)
        Exit state:         Acted (OTO) OR Decline → ordered confirmation
        Dominant lever:     The "10x value at 2x price" framing in the headline section,
                            anchored to the just-experienced primary value moment
        Success signal:     OTO accept rate > 15% of primary buyers
    Post-purchase momentum window: yes (presented immediately, before any decay)

  ─── Verification results ───
    Audit 1 — Orphan rings:           PASS — all 4 primary rings + 3 satellite mini-chain rings mapped
    Audit 2 — Dead-weight:             PASS — every touchpoint installs ≥1 ring or produces required transition
    Audit 3 — Emotional discontinuity: PASS — no gap > 1 state between consecutive touchpoints
                                       (Ad: 1→3 / Advertorial: 3→5+6 / LP: 5+6→8+9+10 / Checkout: 10→11 / OTO: 11→11)
    Audit 4 — Friction:                PASS — 4 touchpoints + 1 satellite is appropriate for €497 product
    Ship recommendation:               ship-as-is

  ─── Cross-references ───
    Chain location for each ring:    Ring 1 → Ad + Advertorial sections 1-2 / Ring 2 → Advertorial sections 3-5
                                      / Ring 3 → LP sections 1-7 / Ring 4 → LP sections 8-10
    UM appearances:                   UMP fully in advertorial / UMS fully on LP / Mechanism guarantee in offer block
    Big Idea thread:                  Headline of ad = Big Idea hook / Advertorial open = Big Idea expansion
                                      / LP hero = Big Idea synthesis
    Offer location:                   LP section 10 (offer block) + Order-bump on checkout + OTO satellite
    Proof distribution:               Authority cite + data point on advertorial /
                                      Before/after + 5 testimonials on LP / Trust badges at checkout
```

---

## 12. Cross-references

- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — produces the rings that this file distributes. §4 of chain-of-beliefs sets minimum rings per awareness level; §5 catalogs the installation devices each touchpoint uses; §7 sketches macro distribution patterns at the chain methodology level (this file is the full operational framework that consumes those outputs).
- [awareness-levels](core/strategic-frameworks/awareness-levels.md) — sets the minimum rings, which directly constrains the touchpoint count and capacity required. Higher awareness = fewer rings = simpler funnel; lower awareness = more rings = more touchpoints needed (or fewer touchpoints with higher capacity).
- [mass-desire](core/strategic-frameworks/mass-desire.md) — the dominant desire dimension shapes which touchpoints carry the most weight (urgency-driven desires amplify the procrastination-ring touchpoint; staying-power desires amplify the post-purchase/continuity touchpoints).
- [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) — the UM (or UMP/UMS) is the dominant installation device for mid-funnel touchpoints. UMP usually sits in advertorial or VSL early-mid; UMS sits in LP body or VSL mid-late. The funnel architecture decides which touchpoint hosts which mechanism component.
- [big-idea](core/strategic-frameworks/big-idea.md) — the Big Idea threads through every touchpoint of the primary funnel. Ad hook + LP hero + advertorial opening + VSL lead all express the same Big Idea from different angles. The architecture orchestrates that thread.
- [offer-construction](core/strategic-frameworks/offer-construction.md) — the offer typically lives in the bottom-of-funnel touchpoint (LP offer block / VSL pitch section / sales call). Satellite sub-funnels each have their own offer block. The architecture decides which touchpoint carries the offer reveal and how the price is anchored before it.
- [proof-elements](core/strategic-frameworks/proof-elements.md) — proof devices are distributed across touchpoints. The architecture maps which proof device sits where (testimonials on LP middle; authority cites in advertorial; data points before the offer block).
- [naming](core/strategic-frameworks/naming.md) — invoked if the funnel itself or any touchpoint needs a name (campaign name, launch event name, satellite product name).
- [funnel-brief](core/strategic-frameworks/funnel-brief.md) — the template that documents the funnel architecture decisions
- `brands/<brand>/brand.md` — operational reality (channels, frontman availability, sales team, content production capacity, email infrastructure) that constrains which architectures the brand can actually deploy.
- `brands/<brand>/products.md` + `brands/<brand>/offers.md` — primary product + OTO products + downsell products. Each post-purchase touchpoint in §2.5 maps to a specific product/offer in this file.
- `brands/<brand>/procedures/*.md` — operational SOPs that may describe existing funnel mechanics worth reusing or replacing.
- `brands/<brand>/funnel-briefs/*.md` — previous brief structures + their performance; informs which architectures have worked for this brand historically.

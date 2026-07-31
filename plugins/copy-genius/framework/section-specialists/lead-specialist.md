# Lead Specialist — Section Specialist

> Section-level specialist. Produces the opening of a long-form piece — the bridge between the headline and the marketing argument (350-800 words for written formats; see the format calibration table below for spoken formats). Specifies WHAT a lead does, WHEN it applies, WHICH strategic type to choose, WHICH tactical opening angle to express it through, and HOW to structure it for credibility and urgency. Read by format specialists ([lp-specialist](format-specialists/lp-specialist.md), [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md), [advertorial-specialist](format-specialists/advertorial-specialist.md)) when writing the lead section of their respective pieces.

---

## 0. Execution path — read this first

> **Inline invocation** (called mid-piece by a format specialist — the COMMON case): take the inputs already gathered by the calling piece (Required inputs below) → cross awareness + opening rings against the §3 table to pick the strategic type → pick the tactical angle (§5) → draft one lead at the format's target length (calibration table below) → mini-check: the three-finger rule (§6.2), one opening emotion, hope present. Do not run the full §8-§9 diagnostic.
>
> **Standalone invocation** (direct request, e.g. "dammi 3 lead alternativi"): full protocol — Required inputs → §2 direct vs indirect → §3 mapping → §4 strategic type(s) → §5 angle → §6 universal structure → §7 credibility devices → §8 post-draft diagnostic → §9 sub-checks.
>
> **Tier 1 bans apply while DRAFTING** (writing-principles B.1–B.3): zero em-dash, no "Not X. But Y.".
>
> **Swipe**: query the [swipe-index](swipe/index.md) for [LEAD] segments matching the brief's awareness — read the SKELETON segment of 1-2 matches; structure crosses languages, phrasing never. If composing a lead from a different entry than the piece's main skeleton, run the seam check ([swipe-ingestion](skills/swipe-ingestion.md) §7). If no match, proceed without.
>
> **Reference sections — consult on demand only**: §4 (open only the entry for the chosen strategic type), §5 angle catalog (scan once the type is chosen), §10 pitfalls (at QA).

**Step 0 — before any drafting**: read [feedback-rules](core/feedback-rules.md) (global) + `brands/<brand>/brand-copy-rules.md` (brand — overrides global). These apply to every line you write and are re-verified at QA (writing-principles Fase 4d).

---

## When invoked

The orchestrator ([CLAUDE](CLAUDE.md)) routes to lead-specialist when intent recognition matches:

- "write the lead", "scrivi il lead", "draft the opening narrative"
- "dammi 3 lead alternativi", "give me 3 alternative leads"
- "rewrite the opening of [piece]", "rifai l'apertura della landing"

Also invoked **internally** by format specialists when their writing flow reaches the lead section:

- [lp-specialist](format-specialists/lp-specialist.md) — after the headline block, before the body argument
- [advertorial-specialist](format-specialists/advertorial-specialist.md) — after the editorial title
- [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md) — for the spoken lead that follows the opening hook

**Boundary with hook-specialist**: on LPs and advertorials the first line of the body arrives from [hook-specialist](section-specialists/hook-specialist.md) when both are invoked; this file writes **from line 2 to the bridge** into the body and does not rewrite the hook. When no hook is supplied, this file writes from line 1.

---

## Required inputs

**From the funnel brief** ([funnel-brief](core/strategic-frameworks/funnel-brief.md)):

- §3.3 Awareness Level — constrains which strategic lead types are viable (§3 table)
- §3.7 Big Idea — the Big Idea expression for this touchpoint; the lead expands it (§6.1)
- §3.8 Chain of Beliefs — the opening rings the lead must install (§3 table)
- §4.2 / §4.3 Touchpoint block — format, length budget, emotional anchors (when specified), reference pointers

**From the brand wiki**: `brands/<brand>/brand-copy-rules.md` (voice — mandatory), `brands/<brand>/transcripts/` (avatar vocabulary), `brands/<brand>/testimonials.md` (track-record fragments for §6.6).

**From the requesting party**: format + position, the approved hook (when hook-specialist ran first), number of variants requested.

---

## Format calibration — target lead length

| Format | Target lead length |
|---|---|
| **Sales letter / LP** | 350-800 words |
| **Advertorial** | 350-800 words (same envelope as LP, editorial register) |
| **VSL / video script** | 20-30 seconds of spoken script ≈ 50-80 words (the spoken equivalent of the three-finger rule, §6.2) |
| **Long email** | [DA DEFINIRE — target length for long-email leads] |

---

## Output format

```
LEAD — [piece / touchpoint]
Strategic type: [one of the 7 — §4]
Opening angle: [one of the 24 — §5]
Target length: [N words, per the format calibration table]
Rings opened: [#s from brief §3.8]
Dominant opening emotion: [canonical entry name from emotional-intelligence]

[lead text — from line 2 to the bridge when the hook is supplied upstream; from line 1 otherwise]
```

**Variant rule**: when variants are requested, 3 variants = 3 **different strategic types** (§4) — never three rewordings of the same type. Label each variant with its type and angle.

The dominant emotion is labeled with the canonical entry name from [emotional-intelligence](core/writing/emotional-intelligence.md) (its Quick Index lists the 13 families); the "Default emotional register" column in §3 is a selection shortcut, not a delivery label.

---

## 1. What the lead is and what it does

### 1.1 Definition

The **lead** is the first **350-800 words** after the headline of a long-form written piece (sales letter, landing page, advertorial). For spoken formats the envelope shrinks — a VSL lead is 20-30 seconds of spoken script, roughly 50-80 words (see the format calibration table above). It is the second thing a prospect encounters — the first being the headline / Big Idea expression.

The lead is NOT the headline. The lead is what happens after the prospect has been captured by the headline and decides whether to continue reading.

### 1.2 Function

The lead has four interlocking jobs:

1. **Earn the read.** The headline earned attention; the lead earns the next paragraph, and the next, and the next. Every line of the lead sells the reader on reading the line that follows.
2. **Set the emotional hook.** The headline sparks interest; the lead deepens it. The reader must feel that staying with this piece is worth their time, and that walking away would cost them something they want.
3. **Expand the Big Idea + Unique Mechanism** presented in the headline. Whatever the headline implied or hinted at, the lead unpacks just enough to make the reader hungry for the full unfolding in the body.
4. **Install the first rings of the chain of belief.** The lead is where the chain begins. Typically it opens Ring 1 (and partially Ring 2) by establishing identification, problem reality, the brand's understanding of the problem, or the existence of a previously hidden mechanism — depending on the strategic type chosen.

### 1.3 The four sales the lead serves

The marketing piece performs four sequential sales: **attention → reading → product → CTA**. The headline carries the sale of attention. The lead carries the **sale of the reading**. If the lead fails, the rest of the piece is never read, regardless of how strong the body or close are.

---

## 2. The strategic decision — direct vs indirect

Before choosing a specific lead type, the strategist decides whether the lead is **direct** or **indirect**. This calibrates everything downstream.

### 2.1 Direct lead

The lead names the product, the offer, or the promise quickly. Minimal warmup. The reader is told upfront what is being offered.

**Use DIRECT when**:
- Selling to back-end (warm list, repeat buyers, post-purchase upsell)
- The product is easy to explain (commodity, recognizable category, established brand)
- The promise is strong and accepted without skepticism
- The offer or guarantee is exceptional (heavy discount, no-risk trial, free + shipping)
- The brand has brought a long-awaited innovation
- The audience is **Most Aware** or **Product Aware**

**Rule**: the more conscious and engaged the prospect, the better they respond to direct leads.

### 2.2 Indirect lead

The lead does not name the product. It opens with a story, a paradox, a question, a problem scene, a piece of news, a prediction, or an identification frame. The product appears deeper in the body, after the prospect has been warmed.

**Use INDIRECT when**:
- Selling to front-end (cold traffic, no prior relationship)
- The product needs explanation (mechanism-led, education-heavy)
- The audience is skeptical, fatigued, or has been burned by the category before
- The claims would sound like every other competitor's claims
- The brand has not yet built recognition with this audience
- The product is tied to a current event or emerging trend that needs setup
- The audience is **Problem Aware**, **Solution Aware**, or **Unaware**

**Rule**: the less conscious and more skeptical the prospect, the more indirect the lead must be.

### 2.3 The default

For cold traffic in saturated markets, **default to indirect**. Direct lands when the brand has earned the right to be direct (recognition, offer strength, or product simplicity). Indirect lands when the brand needs to earn the read first.

---

## 3. Mapping the lead to the chain of belief

This is the operational core of the lead. Each strategic lead type maps to specific elements the strategist has already decided in the brief — awareness level, opening rings of the chain, and tactical persuasion technique. The specialist consulting this file should be able to pick the lead type by reading the brief.

| Strategic lead type | Awareness fit | Rings typically opened in the lead | Persuasion technique activated | Default emotional register |
|---|---|---|---|---|
| **Offer** | Most Aware (primary), Product Aware (with strong offer) | #20 (now or never), #21 (risk acceptable), #25 (I can afford), brand-B4 (trustworthy) | Intensification (penalties of waiting) | Determination, Anticipation |
| **Invitation** | Most Aware, Product Aware, Solution Aware (luxury/premium category) | #19 (brand reflects my values), B3 (brand track record), #16 (I deserve this) | Identification (membership / exclusivity role) | Pride, Anticipation |
| **Promise** | Product Aware, Solution Aware | #15 (results worth cost), #11 (different from past failures), partial #14 (fits my life) | Intensification (the promise magnified) | Hope, Desire |
| **Problem / Solution** | Problem Aware (primary), Solution Aware | #1 (problem exists), #2 (problem is priority), B1 (brand understands) | Identification (the lived-experience role) + Gradualization (yes-questions) | Frustration, Validation, then Hope |
| **Secret** | Problem Aware, Solution Aware, sometimes Product Aware (insider angle) | #5 (missing 1% of info), #6 (previous understanding wrong) | Camouflage (third-party authority of "hidden knowledge") | Curiosity, mild Suspicion-of-authority |
| **Prediction** | Problem Aware, Solution Aware, sometimes Unaware (event-driven) | #3 (problem worsening), #4 (won't resolve on its own), #5 (missing 1%) | Mechanization (the prediction reveals the underlying mechanism) | Anxiety (worry), Hope (early) |
| **Story** | Unaware (primary), Problem Aware | B1 (brand understands) + B6 (founder discovery) — OR — #1 (problem exists) + #8 (past failures destined) | Identification (character role) + Camouflage (narrative format borrows non-ad trust) | Identification + the emotion native to the story scene |

**How the specialist uses this table**: at brief-time the strategist has selected (a) the awareness level (§3.3 of the brief) and (b) the opening rings of the chain (§3.8). The specialist crosses these against the table above to identify which 1-3 lead types are candidates, then chooses based on brand voice, brief constraints, and the specific opening angle the Big Idea suggests.

**Two notes**:

- The mapping is **default fit**, not absolute. A skilled writer can adapt a Story lead to Product Aware (founder-discovery story before offer reveal) or an Offer lead to Problem Aware (if the offer itself is the unusual thing — e.g., "Free + shipping" as the surprising entry). The table is a starting heuristic, not a constraint.
- The emotional register is the **opening beat** of the lead. Subsequent beats may shift (e.g., Problem/Solution opens in Frustration, pivots to Hope by the time it transitions into the body).

---

## 4. The 7 strategic lead types

For each type: definition + what it does argumentatively + conditions of fit + structural pattern + example excerpt (anonymized).

> **Swipe quarantine** — the example excerpts below are historical swipe kept for structure and psychology. Do NOT inherit their punctuation or constructions: Tier 1 bans (writing-principles B.1–B.3 — zero em-dash, no "Not X. But Y.") apply to all delivered copy regardless of what these examples model.

---

### 4.1 Offer Lead

**Definition.** The simplest type. Names the offer immediately — often in the headline or first line of the body. Mentions product, price, discount, bonus, guarantee, and other offer elements upfront.

**What it does argumentatively.** Removes friction for a prospect who already wants the product. Compresses the persuasion path from "convince me" to "show me the offer and let me decide."

**Conditions of fit.**
- Back-end campaigns (upsells, OTOs, list promotions to existing buyers)
- Categories where the product explains itself (commodity, recognizable category, well-known brand)
- Strong, generous, or innovation-anchored offers (free + shipping, deep discount, exclusive launch)
- Audience that is Most Aware, or Product Aware with high engagement

**Structural pattern**:
1. State the offer immediately
2. State the headline benefit (the strongest one)
3. Elaborate the offer components (price, bonuses, guarantee)
4. State a credible reason-why for the offer (limited quantity, market test, year-end clearance — never invented scarcity)
5. Clear path to action

**Example excerpt** (anonymized, from a classic life-insurance direct mail):

> *"Are you over 50? Save up to 15% on your car insurance. Get a quote in less than 8 minutes. Just enter your ZIP code below..."*

No buildup. No curiosity gap. The audience already buys car insurance; they want the savings. Lead does its job in three lines.

**Avoid when**: the audience is skeptical or unaware. Direct claims to a cold audience read as advertising and trigger reflexive dismissal.

---

### 4.2 Invitation Lead

**Definition.** A subtler variant of Offer. Frames the message as an invitation — to a club, a service, a membership, a curated experience. The graphic and tonal cues mimic a real invitation rather than an advertisement.

**What it does argumentatively.** Leverages exclusivity and prestige. The reader is positioned as someone special enough to be invited, which reframes the transaction from purchase to acceptance.

**Conditions of fit.**
- Luxury products and premium services
- Memberships, exclusive clubs, paid newsletters in finance / health / business
- Subscriptions where the brand has prestige
- Audiences that respond to status and recognition (Most Aware / Product Aware in luxury verticals)

**Structural pattern**:
1. "You have been invited / chosen / selected..."
2. State what the invitation is for (membership, trial, access)
3. Establish the prestige of the entity inviting
4. Establish the consequence of declining (often: this invitation will not be repeated)
5. Clear acceptance path

**Example excerpt**:

> *"Dear Mr. X, Frankly, the American Express card is not for everyone. And not everyone who applies for the card is approved. However, since we believe you may benefit from cardmembership, I have enclosed a special invitation to apply for the most honored financial instrument available to people who travel..."*

Note the framing: *"not for everyone"*, *"since we believe you may benefit"* — the invitation is positioned as a quiet privilege, not a sales pitch.

**Avoid when**: the brand has no actual prestige to lend the invitation; the frame collapses on inspection.

---

### 4.3 Promise Lead

**Definition.** Opens with a clearly stated promise of a specific result. Less direct than Offer — the offer itself is not surfaced; only the benefit is. The product is implied, not named.

**What it does argumentatively.** Activates desire by making a specific, credible promise. The reader is pulled in by the prospect of the result, not by the offer mechanics.

**Conditions of fit.**
- Product Aware and Solution Aware audiences who are indecisive but interested
- Categories where a specific, measurable result is achievable
- Brands with proof to support the promise (otherwise the promise reads as hype)

**Rule**: *promise something the prospect wants — not something the writer finds clever, original, or honest*. The promise is about the reader, not the writer.

**Two compression techniques for promises that sound too big**:
- Turn it into a question: *"Can you really turn $500 into $8.4 million?"* (reduces the claim's hardness)
- Make it surprisingly small: *"Get rich slowly"* (subverts the cliché — "get rich fast" — and reads as more credible)

**Structural pattern**:
1. State the promise (the strongest specific benefit)
2. Anchor it with a credibility element (testimonial, study, named authority, specific number)
3. Hint at the mechanism that delivers it (without revealing it fully)
4. Open the loop that the body will close

**Example excerpt**:

> *"How to swing a golf club with the explosive speed of a railgun (adding more than half a football field to the range of your shots)... hitting every fairway and green with masterful precision... then this will be the most important message you have ever read."*

The promise is specific (more than half a football field), measurable, and tied to a definable mechanism the body will unfold.

**Avoid when**: the audience is highly skeptical or Unaware. A bare promise to either group will not be believed.

---

### 4.4 Problem / Solution Lead

**Definition.** Opens by validating a problem the prospect knows they have, then opens a window toward the solution. The most versatile of the seven types — has multiple sub-variants.

**What it does argumentatively.** Establishes empathy ("I understand what you're going through") and sets up the entry point for the mechanism that the body will deliver.

**Conditions of fit.**
- Problem Aware audiences (the primary fit)
- Solution Aware audiences who have tried and failed
- Verticals where the problem is felt daily: health, finance, productivity, performance, relationships

**Five sub-variants**:

1. **Classic problem → solution**: *"If you've been doing X, here's what to do instead..."*
2. **Solution → problem (inverted)**: *"Get all the benefits of summer sun while avoiding the discomfort..."* (lead with the benefit, then frame what's been preventing it)
3. **Identification**: *"For wives whose husbands won't save money — from a wife..."* (invite the reader to recognize themselves)
4. **Question**: *"Do you make these mistakes in English?"* / *"Are your hands and feet like blocks of ice?"* — surface the problem as a question the reader silently answers yes
5. **Instruction**: *"The 7-minute guide to choosing a franchise that earns you $10,000 a month..."* — frame the piece as practical instruction, not selling

**Rules**:
- Target a concern of significant emotional weight (chronic problem with real cost) — not a trivial inconvenience
- **Do not dwell on the problem too long** — the prospect's patience runs out. Move from problem to "and here's the way out" within the lead's length
- Always offer hope inside the lead, even if implicit. Fear without hope produces resignation, not action
- For social-platform compliance: avoid direct accusatory questions on ad platforms that prohibit them (Meta, Google) — adapt to assertion form

**Example excerpt** (Identification sub-variant):

> *"You've done it all. Managed the demands of your career while being a loving wife and mother. You've been the family nurse, accountant, chef, and head of social activities. You've lost the same ten pounds ten times. And you've stayed up countless nights worried about everyone around you. No wonder you're exhausted now. Well — I have good news for you..."*

The lead validates the reader's experience in concrete detail, then pivots to hope. The product is not mentioned.

**Avoid when**: the audience has no awareness of the problem. Opening with a problem they don't recognize as theirs feels like reading someone else's mail.

---

### 4.5 Secret Lead

**Definition.** Frames the message as the revelation of hidden, suppressed, or insider information. The reader is positioned as someone about to learn what most people don't know.

**What it does argumentatively.** Triggers the desire for forbidden / privileged / unknown information. When a category is saturated with similar claims, "secret" framing differentiates by introducing the possibility that everyone else has missed something.

**Conditions of fit.**
- Health, finance, performance, and self-improvement verticals where insider knowledge has weight
- Audiences who have tried mainstream solutions and failed (they are primed to believe something has been hidden)
- Markets saturated with conventional claims

**Rules**:
- Be specific. Vague references to "secrets" without concrete hints read as hype. The secret should feel codified and discoverable.
- Introduce the secret in the headline or first line. **Do not reveal it within the lead**. Tease it; reveal it deep in the body. Sometimes reveal it only after the offer commitment.
- The secret must be intriguing AND beneficial — a secret with no payoff for the reader fails.
- Add specificity / numbers / named authorities to defeat the inherent skepticism the word "secret" evokes.

**Structural pattern**:
1. Open with the secret named or hinted (headline + first line of body)
2. Establish why this information has been hidden (incentives, industry, authority gatekeeping)
3. Establish the brand's access to it
4. Tease the payoff without giving it away
5. Promise the unfolding in the body

**Example excerpt**:

> *"Brand-new from the [author] and the [series] collection... How to get free gas every time you fill up. Tired of emptying your wallet to fill your tank? Discover the money-saving secrets the big oil companies don't want you to know. See page 12."*

Note: specific (free gas), source-anchored (a named series), with a concrete payoff location (page 12) — the prospect is being told where the answer lives, but only inside the book.

**Avoid when**: the secret is not actually surprising or specific. Generic secret framing in oversaturated markets ("Do you know the secret that doctors don't want you to know?") triggers eye-rolls instead of curiosity.

---

### 4.6 Prediction Lead

**Definition.** Opens with a bold, credible-sounding prediction of a coming event (positive or negative) that the reader needs to know about. The lead reads more like a news report than an advertisement.

**What it does argumentatively.** Bypasses sales-resistance reflex by framing the piece as journalism / forecasting / current-events analysis. The reader engages out of curiosity about the world, not interest in being sold to.

**Conditions of fit.**
- Finance and investment (the canonical home of prediction leads)
- Health / pharmaceutical / nutrition (an impending discovery, a regulatory change, an emerging study)
- Geopolitical / macro-trend / technology / business-trend categories
- Audiences that are Problem Aware or Solution Aware (sometimes Unaware when the prediction itself creates problem-awareness)

**Rules**:
- The prediction must be **bold, not safe**. "Top 10 investments for next year" is mediocre; "Within five years we'll face a crisis that will make the 1929 Depression look like a picnic" is a prediction.
- **Specificity is regal**. Dates, percentages, named institutions, named events. The more specific, the more credible.
- The benefit (or threat) must be relevant to the reader's life.
- Return to the prediction in the close — reframe the offer and guarantee around it.
- **Predictions are found in research, not invented**. A fabricated prediction collapses under scrutiny.
- Often pairs with a "newsroom" tonality — sub-headlines that read as article subtitles, citations, dates, source labels.

**Sub-variants tactically connected to this type**:
- **Advanced Knowledge** — the prediction is framed as insider foresight ("you'll know before the rest of the market")
- **Newsroom / Scoop** — the piece reads like breaking news

**Structural pattern**:
1. State the prediction (audacious, specific, dated if possible)
2. Anchor with credibility (citation, named authority, historical precedent, study)
3. State the consequence for the reader (loss avoided or opportunity captured)
4. Promise the unfolding in the body
5. Always return to the prediction in the close

**Example excerpt**:

> *"On January 12, an FDA anomaly could trigger the 'God's Key' 35,000%. I've personally invested my own money in 89 of the most promising and important technologies. The God's Key is worth more than ALL OF THEM COMBINED."*

The prediction is dated (January 12), specific (35,000%), backed by named authority (the writer's track record across 89 named investments), and frames a window of opportunity.

**Avoid when**: the prediction is generic or unsupported. Specific predictions that turn out to be wrong damage credibility for the entire brand — choose predictions you can defend.

---

### 4.7 Story Lead

**Definition.** Opens in the middle of a scene — a moment in someone's life. The reader is dropped into the story without setup, without claim, without product mention. The most indirect of all lead types and the most powerful when executed well.

- [story-telling-specialist](section-specialists/story-telling-specialist.md) — lo Story Lead e' narrativo per definizione: leggilo per struttura, arco e voce del racconto.

**What it does argumentatively.** Lowers all sales-resistance defenses. A story is not an advertisement; the reader engages out of the universal pull of narrative. Identification with the protagonist installs Ring B1 (brand understands me) almost automatically, and identification with the journey installs the relevant problem and solution rings as the story unfolds.

**Conditions of fit.**
- Unaware audiences (the canonical fit — story is often the only entry that works)
- Problem Aware audiences with deep emotional attachment to the problem
- Brands with a real founder-discovery arc, a customer-transformation case, or a witnessed event worth retelling
- Categories where the rational sales pitch has been exhausted

**Rules**:
- **Follow the rule of one**. One idea, one character arc, one emotion at the center. Multiple parallel threads dilute the pull.
- **Start in the middle**. Not at the beginning. Not at the explanation. In the middle of a moment that creates immediate tension — explicit or implicit.
- **Use a protagonist the reader can identify with**. Someone whose situation resembles the reader's, or whose journey illuminates the reader's.
- **The narrative arc carries the persuasion**, not the rhetoric. The product enters the story as a discovery moment, not as an interruption.
- **The story must be true** (or be a transparent metaphor — never invented and presented as true).
- Story leads are the **hardest to write**. They require craft beyond the technical rules — they require story sense. Develop this by reading fiction and analyzing successful story-led sales letters.

**Structural pattern**:
1. Drop into a moment of tension or contrast — a scene the reader can picture
2. Establish the character and the stakes within 1-3 paragraphs
3. Build the journey — what the character is trying to do, what's blocking them
4. Reveal the discovery (the brand's product or method enters here, often deep into the body)
5. Show the transformation
6. Bridge to the reader: *"This is the path that's now available to you"*

**Example excerpts**:

(Quiet opening that builds an identification with personal aspiration)
> *"On a fine spring afternoon, twenty-five years ago, two young men graduated from the same college. They were very much alike, these two young men..."*

(Drop into dramatic crisis)
> *"My toilet was clogged. My guests were arriving. And I couldn't find a plumber!"*

(Drop into a quiet, intimate moment)
> *"'Tell me something dirty,' he said to me on our first anniversary. We were in bed, making love, and I felt a wave of panic in my chest. Fear..."*

All three open in the middle of a moment. None mention the product. None describe what is being sold. They sell only the next line.

**Avoid when**: the writer is not yet strong at narrative. A poorly-executed story lead is worse than a competent direct lead. If the story doesn't have a real protagonist, real tension, and a real transformation, choose a different type.

---

## 5. The 24 tactical opening angles

The seven strategic types above are the macro-shape of the lead. Within each type, there are **tactical opening angles** — concrete devices that can express the strategic type in distinctive ways. The catalog below maps the 24 most recurrent angles to their parent strategic type(s), with brief descriptions.

The specialist uses this table once the strategic type is decided: pick the angle that fits brand voice + brief constraints + the specific Big Idea being expressed.

| # | Angle | Fits strategic type(s) | One-line description |
|---|---|---|---|
| 1 | Advanced Knowledge | Prediction | Frame info as insider foresight; pair with dated/quantified prediction |
| 2 | Spokesperson | Promise, Problem/Solution | Open in the voice of a named authority who is the offering |
| 3 | Act Now (Urgency) | Offer, Prediction | Anchor in immediate threat or deadline ("Unless you act now...") |
| 4 | Authority Quotation | Promise, Problem/Solution, Story | Open with a quoted authority figure relevant to the topic |
| 5 | Conspiracy / Hidden Interest | Secret, Prediction | Frame info as suppressed by an interested party (industry, regulator, lobby) |
| 6 | Old Dogma Demolished | Problem/Solution, Prediction | Open by attacking common belief; pivot to the new understanding |
| 7 | No-Frills Direct | Offer | Open with the cleanest possible statement of what is being offered |
| 8 | Banknote / Physical Object | Offer, Invitation | Attach a physical item (banknote, bandage, sample) to the opening |
| 9 | Fascination / Paradox Question | Secret, Problem/Solution | Open with a paradox or question the reader can't ignore |
| 10 | "Forget X" Reframe | Problem/Solution, Prediction | Start by negating what the reader currently believes ("Forget the oil...") |
| 11 | Hero / Celebrity Introduction | Promise, Story | Build the credibility of the figure behind the product before the offer |
| 12 | Identification | Problem/Solution, Story | Mirror the reader's life back to them ("You've done it all...") |
| 13 | If-Then | Offer, Promise | Conditional opening that earns the reader's nod ("If you've ever wanted...") |
| 14 | Insider Secrets | Secret | Promise revelations the reader couldn't get elsewhere |
| 15 | Benefit List | Promise, Offer | Stack the benefits as opening hooks ("Imagine if you could...") |
| 16 | Newsroom / Scoop | Prediction, Secret | Open as if writing a journalistic piece on a breaking topic |
| 17 | Proof First | Promise, Prediction | Lead with the strongest credibility element you have |
| 18 | Reason Why | Problem/Solution, Secret | Open with "There's a reason why..." — surprising/useful information |
| 19 | Simple Truth | Promise, Problem/Solution | Open with a quiet but high-authority axiom ("Energy is life") |
| 20 | Self-Introduction | Story, Promise | The author introduces themselves with intrigue and stake |
| 21 | High-Impact Visual / Drama | Story, Secret | Open with a strong visual or dramatic act (show, don't tell) |
| 22 | Story | Story | The narrative opening itself |
| 23 | "Wrong" / Myth-Buster | Problem/Solution, Prediction | Frame the lead as systematic correction of received wisdom |
| 24 | "You're About to Discover" | Promise, Secret | Direct framing of what the body will deliver to the reader |

**Note**: many angles can fit under more than one strategic type. The choice of strategic type is made first (from §3 and §4); the choice of tactical angle is made second based on brand voice, the specific Big Idea, and what fits the format.

---

## 6. The universal lead structure — what every lead must accomplish

Independent of strategic type and tactical angle, every lead must perform the following work within its 350-800 words. These are non-negotiable structural requirements.

### 6.1 Expand the Big Idea and Unique Mechanism from the headline

The headline expresses the Big Idea in compressed form. The first lines of the lead expand it just enough to make the reader hungry for the rest. The Unique Mechanism (if present in the brief) is hinted at in the lead but not fully revealed — the body does that.

### 6.2 The "three-finger" rule — repeat the main promise

Within roughly three finger-widths of distance from the headline (in printed copy) — or the spoken equivalent within the first 20-30 seconds — **the main promise must be repeated**. If the reader who scanned the headline now starts reading the body, the body must reaffirm the promise that pulled them in. Without this reaffirmation, the reader feels lost and disengages.

In a video script, this means: the opening of the spoken lead repeats and slightly expands the headline's promise.

### 6.3 "It's different"

Implicitly or explicitly, the lead must communicate that what the reader is about to encounter is **different from everything they've seen before**. Otherwise the reader assumes they've already read this and walks away.

This can be:
- Explicit: *"What you're about to discover isn't another diet..."*
- Implicit: an angle, an opening device, a voice that itself feels different

### 6.4 "Why must I read NOW?"

The lead must answer — implicitly or explicitly — why this is urgent enough to read right now and not later. The killer of conversions is the reader who decides "I'll read this later" and never returns. Urgency in the lead is what prevents that.

Sources of urgency:
- Real time-bound scarcity (deadline, limited offer)
- Cost-of-inaction (every day without the solution costs X)
- Topical relevance (a current event makes this timely)
- Identity stakes (the reader risks becoming a worse version of themselves by waiting)

### 6.5 Overcome initial objections

The reader carries silent objections from the headline onward. The lead must connect to these silent objections and address the most pressing one early. Common silent objections at the lead stage:
- "I've heard this before"
- "Is this for someone like me?"
- "Why should I trust this writer / brand?"
- "What's the catch?"

The lead doesn't need to resolve all of them — but it must acknowledge at least one and lower the reader's defensive posture.

### 6.6 Provide track record

The lead must indicate **proof that this works in practice** — through aggregate numbers, specific results, named authorities, citations, or case-study fragments. Without track record, the lead reads as theory. With track record, it reads as report from the field.

This is not the same as the proof section of the body — it is a foretaste, enough to validate that the body will deliver.

### 6.7 Establish credibility

The lead establishes the writer's / brand's / spokesperson's right to be heard on this topic. See §7 for the 12 specific ways.

---

## 7. The 12 ways to establish credibility in the lead

These are the recurring devices for building credibility at the opening of a piece. Each lead deploys 2-4 of these, never all twelve (credibility-stacking past a point reads as overcompensation).

1. **Association** — link the message to recognized publications, public figures, or institutions ("As seen in...", "Featured by...")
2. **Demonstrated results** — concrete numerical outcomes already achieved
3. **Enviable successes** — outcomes the reader would want for themselves, stated specifically
4. **Overcoming adversity** — the writer / brand / protagonist faced and beat a hardship the reader recognizes
5. **Qualifications / credentials** — degrees, certifications, formal recognitions
6. **Experience / track record** — years in the field, number of clients served, longevity
7. **Case studies** — specific named cases (anonymized where needed) with measurable outcomes
8. **Authority endorsement** — a recognized authority figure vouches for the message
9. **Results given upfront** — a tangible win delivered to the reader within the lead itself (a tip, a fact, a piece of value)
10. **Scientific language** — controlled use of technical terms that demonstrate subject-matter mastery (without becoming inaccessible)
11. **Proprietary terminology** — named methods, frameworks, mechanisms that exist only in this brand's vocabulary
12. **Media publication** — appearances in named outlets, columns, broadcasts

**Rule**: pick the 2-4 most powerful for this specific audience and lead them with the strongest one. Stuffing all twelve into a single lead breaks the rhythm.

---

## 8. Post-draft diagnostic — 7 questions for the lead

After the lead is drafted, run these seven Yes/No questions. Each "No" identifies a specific weakness to fix before moving on.

1. **Does it pass the three-finger test?** Is the main promise repeated within three finger-widths of the headline (or 20-30 seconds in a video)?
2. **Does it imply that the reader will get value just by reading?** Even without buying, the reader should feel that staying with the lead is worth their time.
3. **Does it connect to the headline and amplify the desire to keep reading?** The lead is the immediate continuation of the headline's promise — not a fresh start.
4. **Have you told the reader why they must absolutely read this?** Implicit or explicit — there is a reason to stay engaged.
5. **Have you told them why it is critical to read it NOW?** Urgency is present somewhere in the lead.
6. **Is it credible immediately and fully?** Within the lead, credibility has been established through at least 2-3 of the 12 devices above.
7. **Is it clear that the writer is the reader's advocate, emotionally invested in them getting this information?** (Schwartz's principle: the writer is on the reader's side, not the brand's side. The reader's interest, not the writer's, drives the message.)

---

## 9. Sub-checks

After the seven main questions, run two focused sub-checks.

### 9.1 Credibility sub-check

Does the lead build credibility by:
- Avoiding vague, unsubstantiated phrases?
- Avoiding "advertising language" (the register and rhythm of a sales pitch)?
- Going directly to the point without circling?
- Offering a taste of the writer's story or perspective, making the reader feel their time is well spent?
- Giving the reader a reason to trust through testimonials, track record, endorsement, or proof?
- Speaking to the reader as a peer, not as an inferior?
- Respecting the reader's needs honestly?

### 9.2 Urgency sub-check

Does the lead build urgency by:
- Making a large and deep promise?
- Anchoring with credible facts?
- Providing details and specifics that feel real (not generic)?
- Formatting the copy so that the reader is drawn forward to the next paragraph?

---

## 10. Common pitfalls

1. **Opening with the product or the brand name** when the audience is Problem Aware, Solution Aware, or Unaware. Triggers immediate disengagement.
2. **Dwelling on the problem for too long** in Problem/Solution leads. The reader runs out of patience and disengages before the pivot to hope.
3. **Naming the secret in the lead** for Secret leads. Removes the curiosity gap that the lead was supposed to build.
4. **Predictions without specificity**. Vague predictions read as opinion, not as informed forecast.
5. **Stories without a real protagonist** in Story leads. Generic characters fail to install identification.
6. **Skipping the three-finger reaffirmation**. The reader who scanned the headline doesn't see the promise repeated and disengages.
7. **Credibility-stacking** — piling more than 4-5 credibility devices into the lead. Reads as overcompensation.
8. **Borrowed authority that doesn't fit the topic**. Citing a famous figure whose expertise is adjacent to (or distant from) the subject backfires.
9. **Manipulative emotional escalation** in Problem/Solution leads. When the reader senses the writer is trying to make them feel bad rather than empathizing, the lead is lost.
10. **Direct leads to cold front-end audiences**. Direct lands when the audience is warm. To cold traffic, indirect almost always outperforms.

---

## 11. Cross-references

- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — the lead opens the first 1-2 rings of the chain; §3 of this file maps each strategic type to typical opening rings
- [awareness-levels](core/strategic-frameworks/awareness-levels.md) — the awareness level constrains which lead types are viable; the table in §3 is the primary cross-reference
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — each lead type naturally activates specific tactical techniques; §3 of this file maps the default activations
- [emotional-intelligence](core/writing/emotional-intelligence.md) — when the brief's §3.8 specifies an emotional anchor on the opening ring, this file's §3 column "Default emotional register" indicates the natural fit; the specialist confirms with the brief's actual anchor
- [big-idea](core/strategic-frameworks/big-idea.md) — the Big Idea is what the lead expands; the lead's first task is amplifying the idea the headline expressed
- [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) — the UM is hinted at in the lead and revealed in the body; the lead must not give the mechanism away
- [funnel-brief](core/strategic-frameworks/funnel-brief.md) — §3.8 ring entries and §4.2 touchpoint blocks tell the specialist which lead type to choose; this file is the execution manual for that decision
- [writing-principles](core/writing/writing-principles.md) — §2 Fase 3-5 (refinement, anti-AI, Gulpease + read-aloud) + Fase 4d feedback-rules scan apply to the lead post-draft as to any other section
- [CLAUDE](CLAUDE.md) — orchestrator; routes direct lead requests to this specialist and runs the Brief readiness check before invoking
- [feedback-rules](core/feedback-rules.md) — global rules read at Step 0 and re-scanned at QA; brand-copy-rules override them
- Sibling section specialists that interact with the lead: [hook-specialist](section-specialists/hook-specialist.md) (owns the first line of the body on LP / advertorial — this file writes from line 2; see the boundary note in "When invoked"), [headline-specialist](section-specialists/headline-specialist.md) (the block the lead expands), [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) (follows the lead), [offer-specialist](section-specialists/offer-specialist.md) (closes the piece)
- Format specialists that consume the lead: [lp-specialist](format-specialists/lp-specialist.md), [advertorial-specialist](format-specialists/advertorial-specialist.md), [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md)

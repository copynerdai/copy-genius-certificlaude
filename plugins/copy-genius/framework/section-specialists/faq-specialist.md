# FAQ Specialist — Section Specialist

> Section-level specialist. Produces the **FAQ block** — the frequently-asked-questions section that handles remaining objections, surfaces the unspoken practical questions, and gently pushes the reader toward action. Sits at the very end of the piece, after the offer block and the close, as the last objection-clearing pass before the reader either acts or leaves.
>
> **Section specialist** (not a full-piece specialist). Invoked by the orchestrator ([CLAUDE](CLAUDE.md)) on direct user request for standalone FAQ production, OR when a full-piece specialist ([lp-specialist](format-specialists/lp-specialist.md), [advertorial-specialist](format-specialists/advertorial-specialist.md)) requests this section during its own writing flow.
>
> **Division of labor**: this specialist writes the FAQ as a closing-section copy block. It does NOT design the chain of objections at the strategic level — those come from the Strategist's brief (the avatar's objection map, the chain-of-beliefs gaps still open at the close). This specialist takes those objections as input and produces FAQ entries that close them.

---

## 0. Execution path — read this first

> **Inline invocation** (called mid-piece by a format specialist — the COMMON case): take the residual objection list from the calling piece (§3) → select count and sequence per format (§9.1, §8) → write the 4-part entries (§5) with the matching answer pattern (§7) → mini-check: buyer-voice Qs, honest A openings, soft re-points, procedural FAQ last. Do not run the full §13 checklist.
>
> **Standalone invocation** (direct request, e.g. "scrivi le FAQ"): full protocol — §3 inputs → §10 application protocol (Phases 1-6) → §11 output → §13 revision checklist.
>
> **Tier 1 bans apply while DRAFTING** (writing-principles B.1–B.3): zero em-dash, no "Not X. But Y.".
>
> **Swipe**: optionally query the [swipe-index](swipe/index.md) for [FAQ] segments — structure crosses languages, phrasing never. If no match, proceed without.
>
> **Reference sections — consult on demand only**: §7 answer patterns (open the pattern for the objection in hand), §12 pitfalls (at QA).

---

## Quick navigation

### Part A — Identity & scope
- §1 [Purpose](#1-purpose)
- §2 [When invoked](#2-when-invoked)
- §3 [Required inputs](#3-required-inputs)

### Part B — Component expertise
- §4 [Core principles](#4-core-principles)
- §5 [Anatomy of an FAQ entry](#5-anatomy-of-an-faq-entry)
- §6 [Question generation — the Objection Exercise](#6-question-generation--the-objection-exercise)
- §7 [Answer patterns by objection type](#7-answer-patterns-by-objection-type)
- §8 [Compositional patterns — sequencing and density](#8-compositional-patterns--sequencing-and-density)

### Part C — Operational workflow
- §9 [Selecting FAQ count and length](#9-selecting-faq-count-and-length)
- §10 [Application protocol](#10-application-protocol)
- §11 [Output formats](#11-output-formats)

### Part D — Quality control & references
- §12 [Common pitfalls](#12-common-pitfalls)
- §13 [Revision checklist](#13-revision-checklist)
- §14 [Cross-references](#14-cross-references)

---

# PART A — Identity & scope

## 1. Purpose

Produce ready-to-deploy FAQ blocks for:

- **Long-form sales letters and landing pages** — FAQ block at the end, 3-7 entries, addressing the last residual objections
- **Advertorials** — FAQ block before the final CTA, calibrated to the editorial register of the piece
- **Standalone FAQ blocks** — for product pages, cart pages, post-CTA reassurance sections
- **FAQ block revision** — rewriting weak FAQ blocks that read as marketing-speak instead of buyer-voice

Does NOT produce:

- The strategic objection map (which objections to address) — comes from the Strategist's brief and from `brands/<brand>/avatars/*.md` (fear map, objection list)
- The chain of beliefs being installed across the piece — those decisions live in [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md)
- Full sales letters, landing pages, advertorials — handled by format specialists
- Objection-handling that lives in the body copy (mechanism section, proof section, offer block) — those are sibling specialist responsibilities

The specialist is the **executor**, not the strategist. The list of objections still open at the close comes from upstream. This specialist translates those objections into FAQ entries that pass the buyer-voice test, close the curiosity gap honestly, and soft-point back to action.

---

## 2. When invoked

The orchestrator routes to faq-specialist when intent recognition (§5 of [CLAUDE](CLAUDE.md)) matches:

- "write the FAQ", "scrivi le FAQ", "draft the frequently-asked-questions block"
- "write the objection-handling section", "scrivi la gestione obiezioni"
- "rewrite this FAQ — too marketing-speak", "tighten the FAQ block"
- "add an FAQ to this page"

Also invoked **internally** by format specialists when their writing flow reaches the FAQ section:

- [lp-specialist](format-specialists/lp-specialist.md) §5.8 — when the LP includes an FAQ block (long-form pages; absent in opt-in/squeeze)
- [advertorial-specialist](format-specialists/advertorial-specialist.md) — when the advertorial reaches its objection-handling closing section
- [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md) — rarely (spoken FAQ is unusual; if requested, the specialist adapts the structure for spoken delivery)

---

## 3. Required inputs

| Input | Source | What the specialist needs from it |
|---|---|---|
| **Funnel brief** | Strategist output | Awareness level, avatar, chain of beliefs (especially gaps still open at close), residual objections list |
| **Objection map** | `brands/<brand>/avatars/*.md` + brief | The avatar's full fear/objection list, ranked by frequency and weight |
| **Offer composition** | `brands/<brand>/offers.md` | Price, guarantee, bonuses, scarcity — answers to "how much", "what if it fails", "what do I get" come from here |
| **Proof inventory** | Brief or `brands/<brand>/testimonials.md` | Testimonials and proof elements available to anchor answers |
| **Brand voice** | `brands/<brand>/brand-copy-rules.md` | Tone, vocabulary, register — the FAQ must match the rest of the piece, never break voice |
| **Format context** | Requesting format specialist | Position in the piece, word budget, visual treatment expectations (accordion vs flat list), preceding sections summary |
| **Open chain rings** | [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) section of brief | Beliefs not yet fully installed — FAQ handles these last gaps (often #21 risk, #25 affordability, #19 brand-values, B4 trust) |

If the objection map is missing or vague (e.g., "address objections" with no list), the specialist requests the Strategist to enumerate the residual objections before proceeding. Writing FAQ entries without a real objection list produces fabricated marketing-FAQ that the reader sees through.

---

# PART B — Component expertise

## 4. Core principles

### 4.1 FAQ is mandatory, not optional

The single biggest FAQ mistake is omission. The common rationale — *"the piece is already too long, the FAQ will make it heavier"* — is wrong. The FAQ is the last safety net before the reader leaves. A piece that has earned the read through the body and the offer can lose the sale at the close if a residual objection goes unanswered.

The FAQ adds words but reduces objections-per-word. Net effect on conversion is positive in virtually every long-form context. If the format budget allows an offer block, it allows an FAQ.

### 4.2 Buyer voice, not marketing voice

The "Q" in each FAQ must sound like something the buyer would actually say or think. Not what the marketer wishes the buyer would ask. The line *"What sets your product apart from competitors?"* is marketing-voice — no real buyer phrases it that way. The buyer-voice version: *"Why should I pay €497 here when I see similar courses for €97?"*

The Q must use the buyer's vocabulary, the buyer's emotional register, the buyer's specific phrasing. The answer can then re-elevate the language; the question itself must stay in the buyer's mouth.

### 4.3 Write the obvious ones anyway (procedural basics)

The temptation is to skip "obvious" objections — *"of course the reader knows we ship internationally; we said that earlier"*. The rule (single formulation in §6.2): **always include procedural/logistical basics (shipping, access, compatibility) even if touched in the body — never punish the reader**. The reader who reaches the FAQ may have skimmed; may have entered at a deep link; may have forgotten the earlier mention. **Write as if speaking to a ten-year-old**: assume nothing, repeat the basics.

Argumentative objections are different: those already fully closed in the body are cut, or re-angled from a new angle (see §6.2 and §6.4).

The cost of including an obvious procedural FAQ is one extra line. The cost of omitting a needed one is a lost sale.

### 4.4 Every answer ends with a soft re-point to action

The FAQ is not a neutral reference document. Each answer ends with a gentle nudge back toward the CTA — never aggressive, never repeating the close in full, but always reminding the reader that the action is right above. The mechanic: answer honestly first, close with a one-line bridge to action.

### 4.5 Objection-to-question conversion is the craft

The Strategist supplies the residual objections. The specialist's craft is the conversion: *objection → buyer-voice question → honest answer with technique → soft re-point*. A weak FAQ block has good objections but poor question phrasing. A strong FAQ block reads as if the buyer wrote the questions themselves.

### 4.6 Sequence matters

FAQ entries are not interchangeable. The first FAQ handles the biggest residual barrier (usually trust, eligibility, or "does this apply to me"). The middle entries handle practical objections (price, time, format, prerequisites). The last entries handle procedural questions (how to buy, what happens next, post-purchase logistics) and naturally bridge into the CTA.

---

## 5. Anatomy of an FAQ entry

Each FAQ entry has four parts. All four must be present for the entry to do its work.

| # | Part | Function |
|---|---|---|
| 1 | **The Q (question)** | Phrased in buyer voice, using the buyer's vocabulary and emotional register. Specific, not generic. |
| 2 | **The A opening (the honest core)** | Direct answer to the question. No marketing fluff. If the answer is "yes", say yes first, then qualify. If "no", say no first, then explain. |
| 3 | **The A body (the persuasion move)** | The technique appropriate to the objection type — proof, guarantee anchor, price reframe, comparison, biography, etc. See §7. |
| 4 | **The soft re-point** | A one-line bridge that gently points back to action without repeating the close. Examples: *"If that fits what you're looking for, the access link is just above."* / *"You can secure your spot at the button above and decide later — the guarantee covers you for 90 days."* |

**Length calibration**: 50-150 words per entry typically. Shorter if the objection is procedural ("How do I access?"). Longer if the objection is substantive ("Will this work for someone in my specific situation?"). Never longer than 200 words — at that length, the FAQ becomes a mini-section and loses its rhythm.

**Visual treatment**: format determines presentation. See §11 for LP / advertorial / standalone formats.

---

## 6. Question generation — the Objection Exercise

The starting point for any FAQ block is the Objection Exercise: a structured generation of every objection the buyer might have. Run this BEFORE writing the FAQ. The output is a master list from which the final 3-7 FAQ entries are selected.

### 6.1 The exercise

1. **Run the generation as a structured solo pass** (this specialist generates; the copywriter reviews). To avoid the blind spots solo work risks, sweep the objection space from distinct chairs in turn: the skeptical first-time buyer, the burned past customer, the partner who pays, the time-poor reader, the procedural-question asker.
2. **No filtering during generation**. Write every objection, even the ones that seem obvious or already handled in the body. Filter later.
3. **Buyer voice from the start**. Phrase each objection as the buyer would phrase it, not as the marketer interprets it.
4. **Use the 14-question baseline (§6.2) as a prompt list**, then add brand-specific and product-specific objections.
5. **Stop when the list feels exhaustive**. Aim for 20-30 raw objections for a long-form piece; you'll cut down to 5-7 for the final FAQ.

### 6.2 The 14-question baseline

These 14 questions cover the universal objection space across most direct-response offers. Use as a starting prompt for the Objection Exercise — every offer should have an answer to each, even if not every one becomes an FAQ entry.

| # | Universal objection | What it really asks |
|---|---|---|
| 1 | **Why should I care?** | The reader hasn't bought the relevance yet |
| 2 | **Who are you?** | Authority and trust at the entity level |
| 3 | **Why should I trust you?** | Authority and trust at the proof level |
| 4 | **What if it doesn't work?** | The guarantee question |
| 5 | **Who guarantees this?** | The risk-inversion question (different from #4 — this is about the entity standing behind the promise) |
| 6 | **Is it difficult?** | Effort and complexity concern |
| 7 | **How much time does it require?** | Time commitment concern |
| 8 | **How much does it cost?** | Price concern |
| 9 | **What will my [partner/spouse/family] think?** | Social-permission concern |
| 10 | **Who has used it, what results did they get, and why would mine be the same?** | Proof + applicability concern |
| 11 | **What do you know about MY [profession/situation/specifics]?** | Specificity / fit concern |
| 12 | **How fast will I see results?** | Time-to-result concern |
| 13 | **What if I postpone the decision?** | Inertia / loss-aversion lever |
| 14 | **What exactly do I do to buy?** | Procedural CTA question |

**How to use the baseline**:
- For every offer, answer each of the 14 internally first — this is the diagnostic
- Convert the 5-7 most resonant ones for THIS avatar into FAQ entries
- Add brand-specific or product-specific objections that fall outside the 14
- **The single rule on "already handled" objections** (referenced by §4.3, §6.4 and the checklist — this is the only formulation): always include procedural/logistical basics (shipping, access, compatibility) even if touched in the body — never punish the reader. Cut ARGUMENTATIVE objections already fully closed in the body, or re-angle them from a new angle.

### 6.3 Brand-specific and product-specific additions

Beyond the universal 14, every product has specific objections. Common categories:

- **Delivery and logistics**: shipping times, international availability, refund mechanics, what happens if delivery fails
- **Format and access**: digital vs physical, login process, device compatibility, lifetime access vs subscription
- **Prerequisites and fit**: required knowledge, equipment, dependencies, age/health/profession restrictions
- **Post-purchase logistics**: customer support hours, community access mechanics, content release schedule, certification process
- **Edge-case scenarios**: "what if I'm a beginner / advanced / in this specific niche"
- **Comparative**: positioning against named or unnamed competitors the reader is also considering

The Strategist supplies brand-specific objections from `brands/<brand>/avatars/*.md`. The specialist verifies the list is complete by running the universal 14 baseline against the offer.

### 6.4 From master list to final 3-7 FAQ entries

Once the master list is generated:

1. **Apply the §6.2 single rule**: cut ARGUMENTATIVE objections already fully closed in the body, or re-angle them from a new angle (e.g., price destructed in the offer block can return as an installment-availability FAQ). Procedural/logistical basics (shipping, access, compatibility) stay regardless — never punish the reader.
2. **Group similar objections**. "Is it difficult?" and "How much time?" might merge into one entry on effort/time commitment.
3. **Rank by weight**. Which objections, if unanswered, would most likely kill the sale? Those go first.
4. **Verify the procedural question is included**. The last 1-2 FAQs should always handle "what exactly do I do" / "what happens after I click" / "when do I get access".
5. **Cap at 7 for long-form, 3-5 for medium, 2-3 for compressed formats**. More than 7 dilutes — the reader scans them all without reading deeply.

---

## 7. Answer patterns by objection type

Each objection type has a corresponding answer technique. The specialist matches technique to objection.

### 7.1 Trust / authority objections

**Objections**: *Who are you? / Why should I trust you? / What gives you the right to teach this?*

**Technique**: short biography or credibility statement, anchored to a specific, verifiable fact. Avoid vague claims ("years of experience") in favor of specific anchors ("11 years working with [domain]; 200+ cases documented at [URL]; published in [outlet]").

**Pattern**:
> *Q: Why should I trust you on this?*
>
> *A: Fair question. [Specific credibility anchor — years + domain + verifiable proof element]. [Optional: one-line distinguishing factor — why your approach is different/better]. [Soft re-point: you can see the full background and case studies at the [link above / section above].]*

### 7.2 Risk / guarantee objections

**Objections**: *What if it doesn't work? / What if I'm not satisfied? / Who guarantees this?*

**Technique**: re-state the guarantee from the offer block, but from a different angle. Don't repeat the full guarantee copy — summarize and emphasize the risk-removal dimension. Anchor to the specific guarantee name from [offer-specialist](section-specialists/offer-specialist.md).

**Pattern**:
> *Q: What happens if I follow the program and it doesn't work for me?*
>
> *A: [Direct restatement of the guarantee's core promise]. [The specific mechanic — how long, how to invoke, what you keep]. [The "why we can offer this" anchor — confidence in mechanism, track record, or measurable outcome]. [Soft re-point: the access button is above; the guarantee starts the moment you log in.]*

### 7.3 Price objections

**Objections**: *Is it too expensive? / Why does it cost this much? / Why is it more expensive than [competitor]?*

**Technique**: three options, often combined:

| Sub-technique | Pattern |
|---|---|
| **Comparison to higher anchor** | "This kind of result, delivered 1:1 by a consultant, costs €X. Here, you get the same approach for €Y because [reason]." |
| **Indirect competitor comparison** | "If you compare to direct courses on this topic, yes, the price is higher. But the right comparison is what you'd spend on [the alternative path]: that's €X." |
| **Price decomposition** | "€497 over 12 months of use is less than €1.40 a day — less than a coffee." |

Always include a Reason Why for the price level. A high price without a stated reason invites suspicion.

**Pattern**:
> *Q: Why does this cost €497 when I see similar courses for €97?*
>
> *A: [Honest acknowledgment that the price is higher]. [The specific reason: depth of content / 1:1 access / proprietary mechanism / proof-backed results]. [Comparison or decomposition]. [Soft re-point: the installment option is available at the button above if the full amount is the concern.]*

### 7.4 Fit / applicability objections

**Objections**: *Will this work for someone like me? / I'm in [specific situation], does this still apply? / What do you know about MY [profession]?*

**Technique**: testimonial-led answer with a profile match. The strongest answer to "will this work for me" is a case study of someone whose profile resembles the reader's. If multiple testimonials are available, pick the one with closest demographic/situational fit.

If no specific match is available, fall back to: (a) the underlying principle that makes the approach work across cases, (b) the explicit invitation to apply the guarantee if it doesn't fit.

**Pattern**:
> *Q: I'm a [specific situation] — does this really work for someone in my position?*
>
> *A: Yes — here's a case from someone in a similar position. [Brief case summary — name, situation, result]. [Optional: the underlying principle that makes the approach work across situations]. [If still uncertain — the guarantee removes the risk of finding out it's not for you]. [Soft re-point: you can browse more case studies in the section above before deciding.]*

### 7.5 Time / effort objections

**Objections**: *How long does it take? / Is it difficult? / I don't have time, can I still do this?*

**Technique**: honest specification of time/effort + reframe of cost-of-inaction. The reader's real concern is "is the time investment justified" — answer the literal question, then resituate it.

**Pattern**:
> *Q: How much time does this require per week?*
>
> *A: [Specific time commitment — be honest, not optimistic]. [The format/structure that makes it manageable — async, modular, lifetime access]. [Cost of inaction angle — the time NOT invested has its own cost]. [Soft re-point: the modular structure means you can start at your own pace; access is right above.]*

### 7.6 Social-permission objections

**Objections**: *What will my partner/spouse/family think? / This seems unusual, am I being foolish?*

**Technique**: validation of the concern + reframe through proof (others like them have done it) and outcome (the result, when delivered, resolves the social concern).

**Pattern**:
> *Q: My [partner/family] is skeptical about courses like this. How do I justify the investment?*
>
> *A: Completely understandable — and a question many before you have asked. [Brief social proof: scale of community / case mix]. [The reframe: the question isn't whether the investment makes sense to them today, but what the result enables in [timeframe]]. [Soft re-point: the guarantee means you can show them the outcome before the cost becomes permanent.]*

### 7.7 Procedural / logistics objections

**Objections**: *How do I buy? / What happens after I click? / When do I get access? / How is it delivered?*

**Technique**: explicit, step-by-step description. No reframing needed — the reader needs the information. Be radical in clarity: assume zero familiarity with the platform.

**Pattern**:
> *Q: What exactly happens after I click the button?*
>
> *A: [Click → checkout page → fill in details]. [Payment options stated explicitly]. [Confirmation arrives within X minutes — check spam folder if not]. [Access mechanic — login link, immediate access to bonus, cohort start date, etc.]. [Soft re-point: the button is above; the whole process takes about 3 minutes.]*

### 7.8 Inertia / postponement objections

**Objections**: *What happens if I think about it for a few days? / Can I come back later?*

**Technique**: re-state the urgency from the offer block, with consequence painting. This FAQ may not be needed if the urgency in the offer block is already strong — but if the format budget allows, this entry catches the on-the-fence reader.

**Pattern**:
> *Q: Can I come back next week to decide?*
>
> *A: The link will likely still work next week. But [the specific cost of waiting — bonus expires, price increases, cohort closes, etc.]. [The deeper cost: another week is another week of [problem unsolved]]. [Soft re-point: the guarantee means you can commit now and still have time to decide whether it fits — without losing the bonus.]*

---

## 8. Compositional patterns — sequencing and density

### 8.1 Canonical sequence for a 5-FAQ block (long-form LP)

| Position | Type | Purpose |
|---|---|---|
| 1 | Trust / authority | Resolve the biggest residual barrier first |
| 2 | Fit / applicability | "Does this apply to ME?" — converts hesitation into specificity |
| 3 | Risk / guarantee | Reinforce the safety net |
| 4 | Price | Address the most rational objection with the most rational answer |
| 5 | Procedural | Smooth path to action — last entry naturally bridges to CTA |

Adapt based on what's already handled in the body. If trust has been over-installed by 8 testimonials in the body, drop the trust FAQ and substitute another open objection.

### 8.2 The 3-FAQ compressed pattern (medium-length pages)

| Position | Type |
|---|---|
| 1 | The single biggest open objection (often risk OR fit) |
| 2 | Price (almost always present) |
| 3 | Procedural |

### 8.3 The 7-FAQ deep pattern (high-ticket, long-form sales letters)

Adds to the canonical 5:
- Time / effort objection (between Fit and Risk)
- Social-permission objection (after Price, before Procedural)

### 8.4 Sequence anti-patterns

| Anti-pattern | Why it fails |
|---|---|
| Procedural FAQ first | The reader hasn't agreed yet; "how do I buy" before they're convinced is premature |
| Two consecutive trust FAQs | Wastes density; one strong trust FAQ outperforms two thin ones |
| Price FAQ at the very end | Leaves the reader on the price thought instead of the action thought |
| FAQ that contradicts the body | E.g., body says "no experience needed", FAQ qualifies "well, some basics help" — breaks B4 (brand trustworthy) |

---

# PART C — Operational workflow

## 9. Selecting FAQ count and length

### 9.1 By format

| Format | FAQ count | Total word budget |
|---|---|---|
| **Opt-in / squeeze page** | 0 (no FAQ on opt-in) | — |
| **Short LP / short sales letter** | 0-3 | 0-300 words |
| **Long-form LP / long sales letter** | 5-7 | 400-900 words |
| **Long-form advertorial** | 3-5 (editorial register, lighter touch) | 250-500 words |
| **High-ticket sales letter / extended sales page** | 7 | 600-1,200 words |
| **VSL** | 0 (typically; spoken FAQ disrupts rhythm) | — |
| **Email** | 0 (FAQ doesn't live in email; the email links to the page where the FAQ lives) | — |
| **Upsell page** | 1-2 (focused on post-purchase logistics for the upsell) | 100-200 words |

### 9.2 By awareness level

| Awareness level | FAQ emphasis |
|---|---|
| **Most Aware** | Mostly procedural — they know the product, they just need logistics |
| **Product Aware** | Risk + price + procedural — they're comparing, they need reassurance and clarity |
| **Solution Aware** | Fit + risk + price — they're not sure your version is the right one |
| **Problem Aware** | Trust + fit + risk — they're still earning belief in the category itself |
| **Unaware** | Rarely reach the FAQ — but if they do, trust + fit dominate |

### 9.3 By ticket size

| Ticket | FAQ emphasis |
|---|---|
| **Low** | Procedural + price decomposition. 2-3 entries max. |
| **Mid** | Full canonical 5 (trust / fit / risk / price / procedural) |
| **High** | Extended 7. Risk and fit carry more weight; price decomposition becomes installment options + ROI framing |
| **Ultra-high** | Often no public FAQ — the qualification call IS the FAQ |

---

## 10. Application protocol

### Phase 1 — Gather and verify

0. Read [feedback-rules](core/feedback-rules.md) (global) + `brands/<brand>/brand-copy-rules.md` (brand — overrides global). These apply to every line you write and are re-verified at QA (writing-principles Fase 4d).
1. Read the brief: awareness level, avatar, residual objections, open chain rings
2. Read the format context: what the body and offer block already handled
3. Verify objection list completeness: run the universal 14-question baseline (§6.2) against the offer. If gaps exist (an objection has no stateable answer from the offer composition), flag to the Strategist.
4. Pull supporting materials: testimonials matching the fit-objection profile, guarantee name and terms, price decomposition figures

### Phase 2 — Generate the master objection list

Run the Objection Exercise (§6.1):
- Start with the 14-question baseline
- Add brand-specific and product-specific objections from `brands/<brand>/avatars/*.md`
- Cut objections fully handled in the body
- Output: 15-30 raw objections in buyer voice

### Phase 3 — Select the final 3-7

1. Rank by weight (which would most likely kill the sale if unanswered)
2. Pick the canonical sequence (§8.1) or adapt based on what the body already covered
3. Verify a procedural FAQ is in the last position
4. Map each selected objection to its answer technique (§7)

### Phase 4 — Draft

For each FAQ entry, write the four-part structure (§5):
- Buyer-voice Q
- Honest A opening
- Technique-appropriate A body
- Soft re-point

Apply brand voice throughout. The FAQ must read in the same voice as the rest of the piece — never marketing-speak inserted at the end.

### Phase 5 — Refine

Apply [writing-principles](core/writing/writing-principles.md) refinement:

- Q phrasing test: would a real buyer say this, in this vocabulary? If not, rewrite
- A honesty test: does the answer dodge anything? If yes, fix the dodge
- Soft re-point test: does each entry bridge to action without pushing?
- Voice consistency test: read the FAQ block aloud back-to-back with the offer block — same speaker, same register?
- Length test: any entry over 200 words? Trim. Any under 50? Probably under-answered; expand or cut.

### Phase 6 — Deliver

Output in the format specified by the requesting specialist (§11).

---

## 11. Output formats

### 11.1 For LP (default — accordion / collapsible)

For 5+ FAQ entries on a long-form LP, deliver in accordion-compatible format with explicit Q/A markers:

```
--- FAQ BLOCK START ---

[Section heading: Domande Frequenti / Frequently Asked Questions]

Q1: [Question in buyer voice]
A1: [Honest opening sentence.]
    [Technique-appropriate body — 2-4 sentences.]
    [Soft re-point to action.]

Q2: [...]
A2: [...]

[continues for all entries]

--- FAQ BLOCK END ---
```

Accordion behavior is a design/build decision — the copy is delivered linearly; the layer that renders it as collapsible is downstream.

### 11.2 For LP (flat list — 3-5 entries)

For shorter FAQ blocks where accordion would be visual overkill, deliver as a flat sequence with **bold Q** and plain A:

```
**Q: [Question]**

A: [Answer paragraph.]

**Q: [Question]**

A: [Answer paragraph.]
```

### 11.3 For advertorial

Advertorial FAQ must match the editorial register. Q phrasing is often more conversational, A phrasing more journalistic. Deliver with section markers consistent with the advertorial's overall structure.

### 11.4 For revision

When revising an existing FAQ block, deliver the rewritten entries with inline notes on what changed and why:

```
[ORIGINAL Q: "What sets your course apart from the competition?"]
[REVISED Q: "Why should I pay €497 here when I see other copywriting courses for €97?"]
[WHY: Original Q was in marketing voice; revised Q uses the buyer's actual price comparison]

[ORIGINAL A: "Our course offers unique value through..."]
[REVISED A: "Fair question. The €97 courses I've seen cover the same surface frameworks — what you don't get there is [specific differentiator]. Over 9 modules and 47 hours, this goes deeper than the basics. The installment option is at the button above if the full amount is the concern."]
[WHY: Honest acknowledgment + specific differentiation + decomposition option + soft re-point]
```

---

# PART D — Quality control & references

## 12. Common pitfalls

| # | Pitfall | What goes wrong | How to avoid |
|---|---|---|---|
| 1 | **Marketing-voice questions** | "What sets your product apart?" — no buyer says this. The reader sees through it. | Phrase every Q as something a real buyer would say. Test by reading aloud — does it sound like a buyer or like a brochure? |
| 2 | **Skipping FAQ to save length** | "The piece is already long; let's drop the FAQ." Result: residual objections unkilled, conversion drops. | FAQ is mandatory in long-form. The length argument is a false economy. |
| 3 | **Vague answers** | The A dodges the actual question, gives a generic reassurance, doesn't commit to specifics. | Answer the literal question first, then add context. If the honest answer is "no", say "no" before the qualifier. |
| 4 | **Missing soft re-point** | The A ends without bridging to action. The reader is left in passive-information mode. | Every A ends with one line that gently points back to the CTA above. |
| 5 | **Contradiction with body** | Body says X; FAQ says X' (different from X). B4 (brand trustworthy) collapses. | Cross-check every FAQ answer against what the body already established. If there's tension, fix one of the two — never ship both. |
| 6 | **Procedural FAQ first** | Reader hasn't agreed yet; you're explaining the checkout flow to someone not yet convinced. | Procedural FAQs go LAST. Trust/fit/risk FAQs go first. |
| 7 | **FAQ becomes a mini-section** | Each entry runs 300-500 words. The reader stops reading after the second one. | Cap entries at 200 words. If a topic needs more, it doesn't belong in FAQ — it belongs in the body. |
| 8 | **Universal 14 used verbatim** | The FAQ entries match the 14-question baseline word for word. Generic. | The 14 are PROMPTS, not finished questions. Translate each into the avatar's specific vocabulary and situation. |
| 9 | **Too many entries** | 12 FAQs at the end of a long page. Reader scans, doesn't read. | Cap at 7. Each entry must earn its place. |
| 10 | **Honest answer dodged** | The honest answer is "yes, this requires effort" but the FAQ says "it's effortless". When the buyer experiences effort, they refund. | Be honest. The guarantee covers honest expectations being managed; it doesn't cover fabricated ones. |
| 11 | **No procedural FAQ** | Block ends on a philosophical question. Reader is left without the bridge to "how do I act on this now?" | Last FAQ is always procedural — "how exactly do I buy / access / start". |
| 12 | **FAQ duplicates body content verbatim** | The bonus list appears in the offer block and verbatim again in an FAQ. Reader feels patronized. | FAQ references body content from a fresh angle — never repeats word-for-word. |

---

## 13. Revision checklist

Before delivering the FAQ block, verify:

- [ ] **Number of entries** matches format budget (§9.1)
- [ ] **Each Q is in buyer voice** — would a real buyer phrase it this way?
- [ ] **Each Q is specific**, not generic ("Why is this €497 vs. €97 elsewhere?" not "Why does it cost what it costs?")
- [ ] **Each A opens with the honest core** — direct answer first, qualification second
- [ ] **Each A uses the right technique** for its objection type (§7)
- [ ] **Each A ends with a soft re-point** to the CTA above
- [ ] **Sequence is correct**: trust/fit/risk early; procedural last
- [ ] **Procedural FAQ is included** (last position)
- [ ] **No contradiction** with body copy, offer block, or guarantee
- [ ] **Voice consistency** with the rest of the piece
- [ ] **Length per entry** between 50-200 words
- [ ] **Universal 14 baseline** has been run against the offer — gaps flagged
- [ ] **Brand-specific objections** from `brands/<brand>/avatars/*.md` are addressed
- [ ] **Guarantee name** matches the one used in the offer block (no two names for the same guarantee)
- [ ] **No marketing-speak**: read the block aloud; if anything sounds like a brochure, rewrite
- [ ] **§6.2 single rule applied**: procedural/logistical basics included even if touched in the body; argumentative objections fully closed in the body cut or re-angled from a new angle
- [ ] **No vague answers** that dodge the literal question
- [ ] feedback-rules (global + brand) re-scanned — no rule violated
- [ ] **B4 (brand trustworthy) preserved**: every claim in the FAQ is defensible and matches reality

---

## 14. Cross-references

### Knowledge base (core/)
- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — FAQ entries close beliefs still open at the close (typically #19 brand-values, #21 risk, #25 affordability, B4 trustworthy)
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — Concentration (handle one objection at a time per FAQ entry) + Camouflage (the Q&A editorial format borrows non-sales register)
- [proof-elements](core/strategic-frameworks/proof-elements.md) — proof inventory feeds the fit/applicability and trust answers
- [writing-principles](core/writing/writing-principles.md) — post-draft refinement protocol
- [awareness-levels](core/strategic-frameworks/awareness-levels.md) — calibrates FAQ emphasis: Product Aware → risk/price/procedural; Problem Aware → trust/fit/risk

### Orchestration
- [CLAUDE](CLAUDE.md) — orchestrator, routes to this specialist
- [strategist](skills/strategist.md) — produces the brief with the residual objection list

### Format specialists (consumers of this section)
- [lp-specialist](format-specialists/lp-specialist.md) — primary consumer (§5.8 — FAQ before footer in long-form LP)
- [advertorial-specialist](format-specialists/advertorial-specialist.md) — consumer (FAQ before final CTA in editorial register)
- [upsell-specialist](format-specialists/upsell-specialist.md) — occasional consumer (compressed FAQ on upsell pages)

### Sibling section specialists
- [hook-specialist](section-specialists/hook-specialist.md) — opens the piece; faq-specialist handles the last objections at the close
- [headline-specialist](section-specialists/headline-specialist.md) — headlines anchor the promises; FAQ handles the residual doubts around those promises
- [lead-specialist](section-specialists/lead-specialist.md) — sibling component specialist
- [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) — sibling component specialist
- [offer-specialist](section-specialists/offer-specialist.md) — feeds the FAQ with guarantee name, price terms, bonus list, scarcity rationale; FAQ never contradicts the offer block
- [bullet-point-specialist](section-specialists/bullet-point-specialist.md) — sibling component specialist

### Brand-level files
- `brands/<brand>/brand-copy-rules.md` — voice and style constraints — FAQ must match the rest of the piece
- `brands/<brand>/avatars/*.md` — objection map, fear list, social-permission concerns — primary source for brand-specific FAQ entries
- `brands/<brand>/offers.md` — price, guarantee, bonus, scarcity terms — source for risk/price/procedural answers
- `brands/<brand>/testimonials.md` — proof matching fit-objection profiles — feeds applicability answers
- `brands/<brand>/swipe.md` — FAQ examples from the brand's own history

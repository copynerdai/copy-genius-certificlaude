# Marketing Thesis Specialist — Section Specialist

> Section-level specialist. Produces the marketing thesis argumentation — the section of a long-form piece where the Unique Mechanism's two parts (UMP + UMS) are installed in the reader's mind as a coherent logical pair, connected by a logical bridge. Also covers competition destruction by mechanism (see the dedicated section after §9). Sits between the lead and the offer / proof sections. Read by format specialists ([lp-specialist](format-specialists/lp-specialist.md), [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md), [advertorial-specialist](format-specialists/advertorial-specialist.md)) when writing the mechanism / argumentation section of their respective pieces.

---

## 0. Execution path — read this first

> **Inline invocation** (called mid-piece by a format specialist — the COMMON case): take the brief's UM block content (Required inputs below) → cross awareness + route against the §3 table and the §2.1 matrix to pick the reveal style → draft the reveal in the universal structure (§5: UMP → bridge → UMS → Reason Why → exit) → mini-check: UMP and UMS each summarizable in one sentence, bridge present, at least one concrete Reason Why anchor (§6). Do not run the full §7-§8 diagnostic.
>
> **Standalone invocation** (direct request, e.g. "scrivi la sezione meccanismo"): full protocol — Required inputs → §2 style decision → §4 style entry → §5 universal structure → §6 anchors → §7 post-draft diagnostic → §8 sub-checks → §9 transitions.
>
> **Tier 1 bans apply while DRAFTING** (writing-principles B.1–B.3): zero em-dash, no "Not X. But Y.".
>
> **Swipe**: query the [swipe-index](swipe/index.md) for [THESIS] segments matching the brief's awareness — read the SKELETON segment of 1-2 matches; structure crosses languages, phrasing never. If composing from a different entry than the piece's main skeleton, run the seam check ([swipe-ingestion](skills/swipe-ingestion.md) §7). If no match, proceed without.
>
> **Reference sections — consult on demand only**: §4 (open only the entry for the chosen reveal style), §10 pitfalls (at QA).

**Step 0 — before any drafting**: read [feedback-rules](core/feedback-rules.md) (global) + `brands/<brand>/brand-copy-rules.md` (brand — overrides global). These apply to every line you write and are re-verified at QA (writing-principles Fase 4d).

---

## When invoked

The orchestrator ([CLAUDE](CLAUDE.md)) routes to marketing-thesis-specialist when intent recognition matches:

- "write the marketing thesis", "scrivi la tesi di marketing"
- "write the mechanism section", "scrivi la sezione meccanismo", "argue the UM"
- "write the mechanism reveal", "rifai la spiegazione del meccanismo"
- "write the competition destruction section", "scrivi la distruzione della concorrenza"

Also invoked **internally** by format specialists when their writing flow reaches the mechanism / argumentation section:

- [lp-specialist](format-specialists/lp-specialist.md) — the mechanism section between lead and proof/offer
- [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md) — the spoken mechanism arc
- [advertorial-specialist](format-specialists/advertorial-specialist.md) — the article's mechanism reveal

---

## Required inputs

**From the funnel brief** ([funnel-brief](core/strategic-frameworks/funnel-brief.md)):

- §3.4 Sophistication & UM block — the UMP/UMS articulation, Route (A/B), UM type, the **Campaign thesis** sentence, the UM name (from the naming output). This is the content the reveal renders; the reveal does NOT identify the UM.
- §3.8 Chain of Beliefs — the rings the reveal must install (§3 table of this file)
- §3.3 Awareness Level — constrains viable reveal styles (§2.1, §3)
- §3.7 Big Idea — the angle the reveal must stay coherent with
- §3.9 Proof inventory — the anchors available for the Reason Why (§6); the full proof stays in the proof section

**From the brand wiki**: `brands/<brand>/brand-copy-rules.md` (voice — mandatory), `brands/<brand>/competitors/` (raw material for competition destruction — never invent competitor failures).

**From the requesting party**: format + position in the piece, what follows the reveal (proof / competition-destruction / both — drives the §9.2 exit), word or time budget.

If the brief's UM block is missing or carries `[INCOMPLETE]` markers, flag the gap to the orchestrator and request the Strategist complete it — the reveal renders upstream content, it does not invent it.

---

## Output format

```
MARKETING THESIS — [piece / touchpoint]
Reveal style: [one of the 7 — §4]
Route: [A — Original Problem | B — New Better Solution]
Rings installed: [#s from brief §3.8]
Reason Why anchors used: [2-4 from §6]
Exit positions for: [proof | competition-destruction | both]
Dominant emotion: [canonical entry name from emotional-intelligence]

[thesis section text: UMP → bridge → UMS → Reason Why plant → exit transition]

[If requested: competition destruction block — see the dedicated section after §9]
```

**Variant rule**: when variants are requested, each variant uses a **different reveal style** (§4) — never rewordings of the same style.

---

## 1. What the mechanism reveal is and what it does

### 1.1 Definition

The **mechanism reveal** is the section where the prospect first encounters the Unique Mechanism's two parts — the **UMP** (Problem Mechanism) and the **UMS** (Solution Mechanism) — articulated as a logical pair connected by a bridge.

The reveal does NOT identify the UM. The UMP/UMS content is already produced upstream by the strategist (see [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) §7 and §11) and lives inside the funnel brief. The reveal's job is to RENDER that content on the page in a way that installs the conviction.

The reveal is also NOT the proof. The proof comes after. The reveal establishes the new explanation; the proof confirms it.

### 1.2 Function

The reveal has five interlocking jobs:

1. **Install the UMP** — the new cause-and-effect explanation. The reader exits the reveal believing this is why they have the problem.
2. **Bridge UMP to UMS** — the logical handoff. Without the bridge, UMP and UMS read as two separate sections; with it, they form a single conviction.
3. **Install the UMS** — the new only-path-out. The reader exits believing this is how the problem gets resolved.
4. **Plant the Reason Why** — at least one concrete operational detail that could not be faked. This is what defends the UM against the False Mechanism trap.
5. **Position the reader for proof and competition-destruction** — leave them hungry for evidence (so proof lands) and primed to dismiss alternatives (so competition-destruction works).

### 1.3 The sale of the conviction

The marketing piece performs four sequential sales: attention → reading → product → CTA. The headline carries the sale of attention. The lead carries the sale of the reading. The mechanism reveal carries the **sale of the conviction** — the belief that this explanation is true and this approach is the only viable path. If the reveal fails, the offer cannot land, regardless of price, bonus, or guarantee. The proof section can reinforce a working reveal, but it cannot repair a broken one.

---

## 2. The strategic decision — pick the reveal style

The reveal style is chosen at writing-time based on three inputs the brief already specifies:

- **Awareness level** (brief §3.3) — drives which styles are viable
- **Route** (brief Unique Mechanism block — Route A Original Problem vs Route B New Better Solution) — drives which styles are stronger
- **UM Type** (brief Unique Mechanism block — Existing / Hidden / Transubstantiated) — drives credibility burden

Same brief inputs typically support 2-3 candidate styles. The specialist picks based on brand voice, the specific Big Idea the headline expressed, and what fits the format.

### 2.1 The decision matrix

Combine the inputs and read the candidates:

```
Route A (Original Problem) + Problem Aware       → Discovery-Story, Insider, Authority
Route A (Original Problem) + Solution Aware      → Insider, Authority, Comparative
Route B (New Better Solution) + Solution Aware   → Comparative, Expository, Demonstration
Route B (New Better Solution) + Product Aware    → Expository, Demonstration
Any Route + Sophistication Stage 5               → Discovery-Story, Authority (identification + camouflage)
UM Type C (Transubstantiated)                    → Discovery-Story, Authority, Analogy (carrying the name through narrative)
Abstract / biochemical / technical mechanism     → Analogy added regardless of route
```

### 2.2 The default

When in doubt, default to **Discovery-Story for Route A** and **Comparative for Route B**. Both default well to skeptical audiences in saturated markets. Both can be combined with Analogy when the mechanism is abstract.

---

## 3. Mapping reveal styles to chain ring + persuasion technique + emotional anchor

| Reveal style | Awareness fit | Route fit | Rings typically installed | Persuasion technique activated | Default emotional register |
|---|---|---|---|---|---|
| **Expository** | Solution Aware, Product Aware | B primarily | UMP→UMS ring; Reason Why ring | Mechanization | Recognition, intellectual Validation |
| **Discovery-Story** | Problem Aware, Solution Aware, Unaware (with hook) | A primarily, B possible | UMP ring; brand-understanding ring (B1) | Identification + Camouflage | Curiosity, Validation, Hope |
| **Demonstration-Led** | All awareness | B primarily | UMS ring; only-source ring | Mechanization + Camouflage | Awe, Surprise, Confidence |
| **Comparative** | Solution Aware, Product Aware | B primarily | UMS ring; only-mechanism ring | Gradualization + Intensification | Validation, Determination |
| **Insider / Hidden** | Problem Aware, Solution Aware | A primarily | UMP ring; missing-1% ring | Camouflage (suppressed-info authority) | Curiosity, Anger at establishment |
| **Authority** | All awareness | A or B | UMP and/or UMS depending on placement | Camouflage (borrowed authority) | Trust, Validation |
| **Analogy / Metaphor** | All awareness | A or B | UMP→UMS bridge; intuition ring | Gradualization | Recognition, Hope |

**How the specialist uses this table**: the brief specifies awareness (§3.3) and route (UM block). Cross those against the table to identify 1-3 candidate styles. Read §4 entries for the candidates. Pick based on brand voice and the specific Big Idea.

**Two notes**:

- The mapping is **default fit**, not absolute. A skilled writer can deploy Analogy to a Product Aware audience or compress Expository for a Problem Aware audience when the material warrants it. The table is a starting heuristic.
- The emotional register is the **opening beat** of the reveal. Subsequent beats may shift (e.g., Insider opens in Anger, pivots to Hope as the UMS lands).
- **Canonical labeling**: the "Default emotional register" column is a free-vocabulary selection shortcut. When labeling the dominant emotion in the delivered output, use the canonical entry name from [emotional-intelligence](core/writing/emotional-intelligence.md) — its Quick Index lists the 13 families and their entries.

---

## 4. The 7 reveal styles

For each: definition + what it does argumentatively + conditions of fit + structural pattern + opening line patterns + example excerpt (anonymized) + when to avoid.

---

### 4.1 Expository Reveal

**Definition.** Straight didactic teaching. The mechanism is explained in clear, ordered, authoritative prose. No story, no setup — direct exposition of how the problem actually works and how the product addresses it.

**What it does argumentatively.** Treats the reader as intelligent and willing to learn. Builds conviction through clean logical progression rather than emotional setup. The register itself signals "this is serious".

**Conditions of fit.**
- B2B, technical, scientific, professional verticals
- Solution Aware or Product Aware audiences
- Route B (New Better Solution) where the work is comparative superiority
- Audiences accustomed to specification and documentation (engineers, clinicians, financial professionals)

**Structural pattern**:
1. State the problem's actual mechanism (UMP) in 1-2 declarative sentences
2. Expand with the underlying cause (the 1% missing info) — concrete, ordered
3. Bridge: "Given this, the question becomes how to address it"
4. Introduce UMS — name the system, explain the mechanism, explain why it works on the UMP specifically
5. Plant the Reason Why with at least one concrete operational detail
6. Close with a single sentence positioning for proof or competition

**Opening line patterns**:
- *"Here's what's actually happening at the [biological / operational / structural] level..."*
- *"The mechanism is straightforward, but it's almost never explained properly."*
- *"Three things have to be true for [outcome] to occur. Almost every approach addresses one. We address all three."*

**Example excerpt** (anonymized, B2B data infrastructure):

> *"Most CRMs lose data at three predictable failure points: the import (column mismapping), the user (manual entry errors), and the sync (race conditions between mobile and desktop). The first two are user-facing — visible, fixable. The third is silent — invisible until a record disappears. Our pipeline uses event-sourced deduplication: every change is timestamped and reconciled centrally. That's why two reps editing the same lead in the same minute don't lose each other's work. It's not a feature added on top; it's the storage architecture."*

**Avoid when**: the audience came in skeptical or fatigued. Expository to a hostile audience reads as cold and condescending. Need warmer framing first.

---

### 4.2 Discovery-Story Reveal

**Definition.** The mechanism is revealed through a discovery narrative — typically the founder's or a researcher's journey to noticing, investigating, and identifying the UMP and UMS.

**What it does argumentatively.** Borrows non-ad trust from narrative form. The reader follows the discoverer's thinking and arrives at the UMP and UMS as their own conclusion rather than being told.

**Conditions of fit.**
- Health, wellness, fitness, personal-brand verticals
- Problem Aware audiences, especially those burned by mainstream solutions
- Route A (Original Problem) — the discoverer finds the new root cause
- Brands with a credible discoverer figure (founder, researcher, practitioner)

**Structural pattern**:
1. Establish the discoverer's situation (often: tried the standard approaches, failed)
2. The trigger — what made them notice something was off
3. The investigation — what they looked at, who they consulted, what they ruled out
4. The discovery — the UMP they uncovered
5. The solution development — how the UMS emerged
6. The first proof — initial result that confirmed the discovery (sets up the full proof section)

**Opening line patterns**:
- *"Here's what I noticed after [number] [years / clients / cases]..."*
- *"It took me [time period] to figure this out, and I'm not proud it took that long..."*
- *"The first time I saw it, I assumed it was a coincidence. The third time, I started paying attention."*

**Example excerpt** (anonymized, clinical practice):

> *"I'd been treating chronic fatigue with the standard playbook — sleep hygiene, B-vitamins, thyroid panels — for almost a decade. Most patients improved partially. A small percentage didn't improve at all. I assumed I was missing compliance, until one of those non-responders mentioned, almost in passing, that she felt worse after eating spinach. That shouldn't have been possible according to anything I'd learned. So I tracked her food intake for six weeks. What emerged wasn't a sensitivity. It was an oxalate buildup pattern I hadn't been screening for — and once I started looking for it, I found it in roughly one in every five non-responders."*

**Avoid when**: the brand has no credible discoverer figure, or the discovery would feel manufactured. Story-as-frame must rest on a real story; invented discoveries collapse on inspection.

---

### 4.3 Demonstration-Led Reveal

**Definition.** The mechanism is revealed by describing a physical demonstration or visual evidence that the mechanism works, then explaining the underlying logic. Show first, explain second.

**What it does argumentatively.** Visual / empirical evidence bypasses initial skepticism. The reader sees the demonstration (or pictures it vividly), accepts it as observed reality, then accepts the explanation as the reason for what they just observed.

**Conditions of fit.**
- Physical products where the mechanism produces a visible, immediate effect (cleaning, tools, supplements with rapid onset, performance gear)
- Categories where a "watch this" moment is possible
- VSL and video-heavy formats — the demonstration can be filmed and embedded
- Sophistication Stage 3-4 where mechanism naming alone is no longer enough

**Structural pattern**:
1. Set up the demonstration — what the reader is about to see
2. Walk through the demonstration step by step (the action, the visible result)
3. Explicit pivot: *"Here's why that happened"*
4. Explain the UMP (what was actually going on) and the UMS (what the product did about it)
5. Generalize: this is what's happening every day in [the relevant context]

**Opening line patterns**:
- *"Let me show you something."*
- *"Watch what happens when..."*
- *"I want you to picture this..."*

**Example excerpt** (anonymized, household product):

> *"Take a glass of tap water and a clean white cloth. Wipe the inside of any window in your house. Now look at the cloth. The dark grey film isn't dust — it's micro-particulate that ordinary cleaners spread around instead of removing. You can do this test in any house, anywhere, and the cloth will always come back grey. That film is exactly what we built [system] to dissolve. The active surfactant doesn't suspend particulate the way conventional cleaners do; it breaks the electrostatic bond that holds particulate to glass."*

**Avoid when**: the mechanism doesn't produce a visible, immediate effect. Forcing a demonstration where none naturally exists comes off as theatre.

---

### 4.4 Comparative Reveal

**Definition.** The mechanism is revealed by setting it directly against the dominant alternative approach. The UMP is framed as "why the standard approach doesn't fully work" and the UMS as "why this approach addresses what the standard misses".

**What it does argumentatively.** Anchored in the reader's existing understanding of what's available. They know the standard approach exists; the reveal differentiates from it. Fits Route B head-on.

**Conditions of fit.**
- Solution Aware audiences who have tried 1-2 mainstream approaches
- Route B (New Better Solution) — pure superiority frame
- Sophistication Stage 4 where mechanism comparisons are how the market evaluates options
- Categories with a clear "dominant" alternative the reader can name

**Structural pattern**:
1. Name the dominant approach briefly — without dwelling (overdwelling pre-empts the competition-destruction section)
2. State what the dominant approach does and what it misses (this IS the UMP)
3. Bridge: *"Here's what's different about ours"*
4. State the UMS — what your approach does that addresses what the dominant misses
5. Plant the Reason Why with operational detail that defends the difference

**Opening line patterns**:
- *"Most [category] do X. Here's the problem with X."*
- *"The standard approach addresses [symptom]. What it doesn't address is [cause]."*
- *"If you've tried [common approach], you know how it usually goes."*

**Example excerpt** (anonymized, financial planning):

> *"Most retirement planning treats Social Security as a fixed input — you plug in your expected benefit, you build the rest of the plan around it. The problem with that is the benefit isn't fixed. Roughly 30% of retirees take it at 62 and lose between $80,000 and $200,000 in lifetime payout compared to waiting. Our planning tool inverts that order: we model the optimal claiming age first, then build everything else around it. That's why our average client claims at 67.3 and walks away with $147,000 more across the retirement window."*

**Avoid when**: the dominant alternative is so emotionally loaded that naming it triggers premature mental rebuttal. In that case, use Comparative LATER (in the competition-destruction section) and use a different reveal style for the mechanism itself.

---

### 4.5 Insider / Hidden Information Reveal

**Definition.** The mechanism is revealed as something the relevant industry has either suppressed, ignored, or systematically failed to communicate. The reader is positioned as receiving privileged information.

**What it does argumentatively.** Activates the desire for hidden / forbidden / privileged knowledge. Particularly powerful in markets where the reader already suspects the establishment isn't telling them everything.

**Conditions of fit.**
- Health, finance, supplements, alternative-practice verticals
- Problem Aware audiences with low trust in establishment authorities
- Route A (Original Problem) — the suppressed information IS the new root cause
- Categories where there is a credible reason the info has been "hidden" (regulatory capture, industry incentives, paradigm inertia)

**Structural pattern**:
1. Frame the existence of the suppressed / ignored information
2. State who has an incentive NOT to share it and why — this is the credibility step; without a real incentive structure, "hidden" reads as conspiracy theory
3. Reveal the UMP — what the suppressed information actually is
4. Show why the UMP has been overlooked or actively suppressed
5. Introduce the UMS — what addresses the now-visible UMP

**Opening line patterns**:
- *"There's a reason your [doctor / advisor / contractor] hasn't told you about this."*
- *"What I'm about to share isn't a secret — it's a piece of information available to anyone who looks, but no one in the industry talks about it. Here's why."*
- *"I'm going to explain something that runs against what you've been told."*

**Example excerpt** (anonymized, supplement vertical):

> *"Most multivitamins contain folic acid — the synthetic form of folate. Almost no clinician will mention this, because it's been in every prenatal and multivitamin for forty years. But about 40% of the population has a genetic variant that doesn't fully convert folic acid into the form the body actually uses, methylfolate. The synthetic form builds up. Standard blood panels still show 'normal' folate because they don't distinguish the two forms. That's the gap. Our formulation uses methylfolate directly — the form your cells were going to make anyway."*

**Avoid when**: no real reason exists for the information to have been "hidden". Without a credible suppression-incentive, the frame collapses and reads as conspiracy.

---

### 4.6 Authority Reveal

**Definition.** A named credentialed authority — researcher, physician, engineer, practitioner — delivers the mechanism reveal in their voice. The brand and the writer step aside; the authority speaks.

**What it does argumentatively.** Borrowed authority. The reader accepts the mechanism because the named figure has institutional credibility — not because the brand argued well for it.

**Conditions of fit.**
- Verticals where credentials carry weight (health, finance, legal, engineering, science)
- Audiences who screen for authority before accepting claims
- Either Route — the authority can install UMP or UMS depending on their domain
- Brands with a genuinely credentialed figure (founder, advisor, partner)

**Structural pattern**:
1. Establish the authority's credentials briefly (institution, role, years, relevant accomplishment — not a full bio)
2. Hand off the reveal to the authority's voice (first-person quote, attributed video, signed letter format)
3. The authority delivers UMP and UMS in their natural register
4. The brand re-enters to handle the offer

**Opening line patterns**:
- *"[Name], [credential] at [institution], explains:"*
- *"I asked [Name] — who has spent [time] studying [domain] — to walk through this."*
- *"In [Name]'s words:"*

**Example excerpt** (anonymized, cardiovascular health):

> *"Dr. [X], cardiologist at [institution] for the last 22 years: 'The conversation about cholesterol has been dominated by LDL particle count, but that's measuring the wrong thing. What predicts coronary events is LDL particle size — small, dense particles oxidize and penetrate the arterial wall; large fluffy particles largely don't. A patient with total LDL of 130 and predominantly small-dense particles is at higher risk than a patient with LDL of 180 and predominantly large-fluffy. Standard panels don't measure particle size. The protocol we developed at [institution] tests for it directly and addresses the underlying lipid pattern, not the aggregate number.'"*

**Avoid when**: the brand doesn't have a credentialed figure whose expertise directly speaks to the UM. Borrowing distant or adjacent authority backfires — the reader notices the mismatch.

---

### 4.7 Analogy / Metaphor Reveal

**Definition.** The mechanism is revealed through an analogy to a known phenomenon. The reader understands the unfamiliar UMP/UMS by mapping it onto something familiar.

**What it does argumentatively.** Compresses complex or technical mechanisms into intuitive form. The reader feels they "get it" without having to follow technical reasoning. Powerful when paired with another reveal style as a clarifying device.

**Conditions of fit.**
- Categories with abstract, biochemical, or technical mechanisms (cellular processes, financial structures, software infrastructure, regulatory dynamics)
- All awareness levels — analogy is a universal craft device
- All routes — analogy can carry either UMP or UMS
- Audiences who shut down at technical jargon

**Structural pattern**:
1. Introduce the analogy domain (something concrete the reader knows well)
2. State the operating principle of the analogy domain (1-2 sentences)
3. Map: *"Here's the thing — your [actual domain] works the same way"*
4. Explain the UMP in the analogy's terms
5. Explain the UMS in the analogy's terms
6. Drop the analogy and state the literal mechanism in 1-2 sentences for closure

**Opening line patterns**:
- *"Think of [actual domain] like a [analogy domain]..."*
- *"You've seen this before — just not in this context."*
- *"If you've ever [common experience], you already understand how this works."*

**Example excerpt** (anonymized, gut-health):

> *"Think of your gut lining like a chain-link fence. When it's intact, water and nutrients pass through the diamond-shaped openings, but larger particles can't get past. Now imagine someone has been cutting through some of the links — small particles that should have been blocked are now slipping into the yard. That's leaky gut. The standard approach treats the symptoms in the yard. What we're doing is different — we're not chasing what's already through; we're repairing the fence. The compounds in [formula] are the materials that close those cuts."*

**Avoid when**: the analogy doesn't map cleanly to the actual mechanism. A forced analogy creates more confusion than it removes. Test the analogy with someone unfamiliar — if they predict the mapping wrong, the analogy is broken.

---

## 5. The universal reveal structure — what every reveal must accomplish

Independent of style, every mechanism reveal performs the following five jobs. Styles affect HOW these jobs are executed, not WHETHER.

### 5.1 Install the UMP

**Gating rule (applies to §5.1 and §5.3)**: the 5-step and 4-step templates are already instantiated in the brief's UM block; open [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) §7 only if the brief block is incomplete.

The Problem Mechanism gets installed using the 5-step template from [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) §7:

1. State the prospect's current belief about the cause
2. Reveal why that belief is incomplete or wrong
3. Introduce the real mechanism
4. Explain why this mechanism produces the symptom they feel
5. Bridge to UMS

In Route A (Original Problem), this is HEAVY — the new cause is the conviction installed. In Route B (New Better Solution), this is LIGHTER — quick acknowledgment of the existing cause theory before pivoting to UMS.

### 5.2 Bridge UMP → UMS

A single transition sentence — or a short 2-3 sentence paragraph — that makes the logical connection explicit. The bridge is non-optional. Without it, UMP and UMS read as two disconnected sections and the reader doesn't carry conviction from one to the other.

Common bridge patterns:

- *"Now that you understand [UMP], the question becomes how to address it."*
- *"Given this, the response that works is the only one that targets [the actual mechanism]."*
- *"Which brings us to what [brand / product] actually does."*

### 5.3 Install the UMS

The Solution Mechanism gets installed using the 4-step template from [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) §7:

1. Introduce the product / method as the system that addresses the UMP
2. Explain the specific mechanism within the product
3. Show why this mechanism succeeds where alternatives failed
4. Anchor with proof reference (the proof section will deliver the full evidence)

In Route B, this is DOMINANT — the center of gravity. In Route A, this follows naturally from the heavily-installed UMP.

If the audience is Solution Aware AND the brand is NOT leader of category, prefix the UMS with the **category layer** (1-2 sentences establishing why the category itself works — see [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) §7). Skipping the category layer in this configuration skips a load-bearing belief.

### 5.4 Plant the Reason Why

The Reason Why is the substantive answer to "why does this make the product work better for THIS prospect?". Without at least one concrete operational detail that defends the UM, the reveal collapses into a False Mechanism (see [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) §5).

The reveal must plant at least ONE of these:

- A specific operational detail of the UMS that couldn't be faked
- A named ingredient / component / step that does specific work
- A measurable parameter (concentration, duration, ratio, frequency) that defends superiority
- A documented historical precedent
- A specific named study (with source — vague "studies show" doesn't qualify)

The full proof section delivers more. The reveal plants the seed.

### 5.5 Position for proof and competition-destruction

The reveal ends in a state that hands off to the next section.

If proof comes next:

- The reader should be hungry for evidence — "show me this is real"
- Do NOT exhaust the proof inside the reveal — keep the strongest pieces for the proof section

If competition-destruction comes next:

- The UMP should implicitly indict alternatives — "they're solving the wrong problem" or "they're solving the right problem less effectively"
- The competition-destruction section then names names and delivers comparative detail

If proof comes first, then competition-destruction (common pattern in long sales letters):

- Position for both — hungry for evidence, primed to dismiss alternatives

---

## 6. Reason Why anchors — credibility devices for the reveal

These are the specific devices the reveal uses to make the Reason Why feel substantive. Pick 2-4 per reveal; stacking all of them reads as overcompensation.

1. **Operational specificity** — *"the active surfactant breaks the electrostatic bond"* rather than *"uses advanced chemistry"*
2. **Named component with documented role** — name the ingredient / feature / step; state what it specifically does
3. **Measurable parameter** — concentration, duration, ratio, frequency, with a number (*"15 particles per million"* not *"high concentration"*)
4. **Sensory / empirical evidence the reader can self-verify** — *"wipe a clean cloth on any window and see for yourself"*
5. **Specific named study** — author, institution, year, finding — vague *"studies show"* doesn't qualify
6. **Historical precedent** — the principle has been recognized for X years / used by Y community
7. **Named authority endorsement** — a real practitioner / researcher / institution that uses or recommends the approach
8. **Analogy to a known phenomenon** — leveraged as proof when the analogy is mechanistically tight, not just rhetorical
9. **Documented failure pattern of alternatives** — *"the standard approach fails for [reason] in [X%] of cases"*
10. **Production / process detail** — *"GMP-certified facility"*, *"double-blind N=N participants"*, *"12-month aging process"* — operational details that defend the claim

**Rule**: pick the 2-4 most powerful for this specific audience and lead with the strongest. Different audiences accept different anchors — technical audiences accept #1, #3, #5; consumer audiences accept #4, #7, #8.

---

## 7. Post-draft diagnostic — 7 questions for the reveal

After the reveal is drafted, run these seven Yes/No questions. Each "No" identifies a specific weakness to fix.

1. **Can the reader summarize the UMP in one sentence?** If asked *"why do they have this problem according to this piece"*, the reader should give a clean one-sentence answer.
2. **Can the reader summarize the UMS in one sentence?** Same test for the solution side.
3. **Does the bridge sentence work?** Read the UMP's last sentence, then the bridge, then the UMS's first sentence. Does it flow as a single logical argument or as two sections taped together?
4. **Is the Reason Why concrete enough to survive skepticism?** Pick the strongest Reason Why anchor in the reveal. Could a skeptical reader poke a hole? If yes, sharpen it.
5. **Is the reader hungry for proof at the end?** A reveal that fully satisfies leaves no work for the proof section. A reveal that creates a clear *"show me"* reaction sets proof up properly.
6. **Are alternatives implicitly indicted by the UMP?** The competition-destruction section will name names. The reveal should have made that naming feel inevitable.
7. **Does the reveal stay in the right register?** If the audience is colloquial, has the reveal stayed conversational? If technical, has it stayed precise? Drift kills credibility.

---

## 8. Sub-checks

After the seven main questions, run two focused sub-checks.

### 8.1 Coherence sub-check

Does the reveal hold together as a single argument by:

- Avoiding contradictions between UMP and UMS (the UMS should resolve exactly what the UMP introduced)?
- Maintaining one register throughout (not flipping from formal to casual mid-reveal)?
- Using consistent terminology (if a mechanism is named, the name appears consistently — not as *"the system"* in one paragraph and *"the protocol"* in the next)?
- Resolving rhetorical questions it opens (if the reveal asks *"so what's actually happening?"*, the answer must follow within 2-3 sentences)?

### 8.2 Specificity sub-check

Does the reveal earn credibility by:

- Naming specific components / ingredients / steps rather than gesturing at categories?
- Including at least one number, ratio, or measurable parameter?
- Citing at least one source (study, authority, institution) when claims are technical?
- Describing operational details that couldn't be faked or invented?

---

## 9. Transition patterns

### 9.1 Entering the reveal (from the lead)

The transition from lead to reveal must signal that the conviction work is starting. The reader has been warmed; now the explanation begins. The pivot should be ONE sentence. Longer transitions dilute the energy.

Patterns:

- **Cold pivot**: *"Here's what's actually happening."* — direct, no preamble
- **Myth-buster pivot**: *"But the reason this happens isn't what you've been told."*
- **Discovery pivot**: *"When I looked into this, I found something I didn't expect."*
- **Question pivot**: *"So what's really going on?"*
- **Frame-shift pivot**: *"Let me explain this differently than you've probably heard it before."*

### 9.2 Exiting the reveal (to competition-destruction or proof)

The exit signals the next section's work. Match the exit pattern to what follows.

**To competition-destruction**:

- *"Now, you might be wondering — what about [common alternative]? Let's look at why that doesn't address this."*
- *"This is also why approaches that focus on [symptom layer] don't fully work."*
- *"Before going further, it's worth understanding why this isn't what other [category] do."*

**To proof**:

- *"I know that's a lot to take in. Here's what the evidence shows."*
- *"Let me show you what this looks like in practice."*
- *"The studies on this are clear."*

**To both** (long sales letters):

- *"If this is right, two things follow: [setup for competition], and [setup for proof]."*

---

## Competition destruction by mechanism

The companion block this specialist owns alongside the reveal. Compact by design — distilled from §5.5 and §9.2 of this file and from the competition framing of [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) §6.

**When it runs**: POST-REVEAL, never before. The UMP and UMS must already be installed and the Reason Why planted (§5.5); the reveal's job was to make the destruction feel inevitable — alternatives already implicitly indicted. It typically sits after the reveal, before or interleaved with proof, entered through one of the §9.2 exit transitions (*"Now, you might be wondering — what about [common alternative]?"*).

**The pattern — each competitor approach fails BECAUSE it lacks the mechanism's element**:

- **Route A (Original Problem)**: the alternatives solve the wrong problem — they address the superficial symptom while the root cause the UMP installed stays untouched. For each alternative approach: what it does → which symptom it targets → why the UMP's root cause remains (per [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) §6, Route A diagnostic question 2).
- **Route B (New Better Solution)**: the alternatives solve the right problem less effectively. For each: name the specific element of the UMS it lacks → the concrete consequence (slower, less durable, side effect, hidden dependency, higher cost over time) (per [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) §6, Route B diagnostic questions 1 and 4).

**Rules**:

1. **Destroy by mechanism, never by disparagement** — every stated failure must trace to the missing mechanism element, not to generic negativity about the alternative.
2. **Never invent competitor failures** — every limitation must trace to the brief or to `brands/<brand>/competitors/`. If the material is not there, flag the gap to the orchestrator; do not fabricate.
3. **The destruction must feel inevitable** given the installed UMP (§7 diagnostic question 6). If it reads as gratuitous, the reveal was weak — fix the reveal, not the destruction.
4. `[DA DEFINIRE — naming-names policy: when to name specific competitors vs attack the generic approach category]`

---

## 10. Common pitfalls

1. **UM named but Reason Why not defended.** The False Mechanism trap from [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) §5. A name without operational substance is worse than no name — it triggers active rejection on inspection.
2. **UMP and UMS read as disconnected sections.** No bridge or weak bridge. The reader carries no conviction across the handoff.
3. **Going too technical.** Jargon stacks; the reader is alienated. Pick at most one technical term per paragraph; explain it in plain language adjacent to it.
4. **Going too vague.** *"Advanced formulation"*, *"proprietary process"*, *"scientifically backed"* with no specifics. Reads as marketing copy and triggers immediate dismissal.
5. **Treating the reveal as a feature dump.** The reveal is an argument, not a spec sheet. Features belong in the offer section.
6. **Hand-waving the why.** *"Studies show"*, *"research has demonstrated"* without sources. The reader assumes there are no studies.
7. **Naming competitors before establishing UMP.** Premature competition-destruction. The reader hasn't accepted the new cause yet; the comparison feels unjustified.
8. **Putting the reveal too early in the funnel.** Reveal before the lead has done its work (problem reality, identification, hope) lands flat. The reveal needs warmed ground.
9. **Borrowed analogies that don't fit.** Forced or silly analogies create more confusion than they remove. Test the analogy on someone unfamiliar — if they predict the mapping wrong, the analogy is broken.
10. **Wrong register for the audience.** Academic exposition to a colloquial audience, or casual exposition to a professional audience. The reveal is the moment register matters most.
11. **Missing the category layer for Solution Aware non-leader.** The reader has to first believe the category works before they can believe the brand's version within it. Skipping the category layer skips a load-bearing belief.
12. **Exhausting proof inside the reveal.** When the reveal contains the strongest proof, the proof section has nothing left. The reveal plants the seed; the proof delivers the field.

---

## 11. Cross-references

- [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) — the strategic framework that produces the UMP, UMS, bridge, category layer, and Reason Why content; this recipe renders that content on the page
- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — the reveal installs specific rings; §3 of this file maps each style to typical ring activations
- [awareness-levels](core/strategic-frameworks/awareness-levels.md) — the awareness level constrains which reveal styles are viable; the table in §3 is the primary cross-reference
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — each reveal style naturally activates specific tactical techniques; §3 of this file maps the default activations
- [proof-elements](core/strategic-frameworks/proof-elements.md) — the reveal seeds proof; the proof-section recipe delivers the full evidence
- [emotional-intelligence](core/writing/emotional-intelligence.md) — when the brief specifies an emotional anchor on the UMP or UMS ring, the "Default emotional register" column in §3 of this file indicates the natural fit; the specialist confirms with the brief's actual anchor
- [funnel-brief](core/strategic-frameworks/funnel-brief.md) — the brief's Unique Mechanism block tells the specialist the UMP/UMS content; this file is the execution manual for rendering it
- [writing-principles](core/writing/writing-principles.md) — §2 Fase 3-5 + Fase 4d feedback-rules scan apply to the reveal post-draft as to any other section
- [CLAUDE](CLAUDE.md) — orchestrator; routes direct thesis/mechanism requests to this specialist and runs the Brief readiness check before invoking
- [strategist](skills/strategist.md) — produces the funnel brief whose §3.4 UM block this specialist renders
- [feedback-rules](core/feedback-rules.md) — global rules read at Step 0 and re-scanned at QA; brand-copy-rules override them
- Sibling section specialists: [lead-specialist](section-specialists/lead-specialist.md) (precedes the mechanism argumentation), [offer-specialist](section-specialists/offer-specialist.md) (follows). Competition destruction by mechanism is covered inside this specialist (the dedicated section after §9); proof integration is handled inline by the format specialists per their proof distribution rules.

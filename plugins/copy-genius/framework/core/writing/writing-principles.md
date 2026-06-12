# Writing Principles & Anti-AI Patterns

> Single reference for the **stylistic layer** of every writing specialist in the Copy Genius system. Contains two complementary sections:
>
> - **Section A — Writing principles**: 10 outcome-focused qualities good copy has when it's working
> - **Section B — Anti-AI patterns**: 8 patterns that tend to sound AI in copy — calibrated (not banned outright), with diagnostics for when they fail vs. when they work
>
> **Precedence: brand-copy-rules > feedback-rules > this file's defaults.**
>
> **Read this file POST-DRAFT, not pre-writing.** Reading it before writing turns the principles into a paralysis-inducing checklist. The right protocol: write naturally first (with the brand voice + the brief + the chosen pattern), then read this file to identify 2-3 things to refine. Never apply all 10 + 8 mechanically.
>
> Used by every writing specialist — full-piece specialists (`ad-specialist`, `email-specialist`, `vsl-and-video-ad-specialist`, `lp-specialist`, `advertorial-specialist`, `upsell-specialist`, etc.) and component specialists (`hook-specialist`, `headline-specialist`, `lead-specialist`, `marketing-thesis-specialist`, `offer-specialist`, `faq-specialist`, `bullet-point-specialist`).

---

## 1. Core principle

Good copy has identifiable qualities. Bad copy has identifiable patterns. This file catalogs both — but the catalog is **diagnostic**, not prescriptive.

The vital distinction:

| Pre-writing checklist (the failure mode) | Post-draft self-diagnostic (the correct use) |
|---|---|
| Read 50 rules, then try to write while respecting them all | Write naturally, then read the principles to identify what's missing or off |
| Produces paralysis + mechanical sound | Produces natural prose + targeted refinement |
| AI becomes technique-driven | AI stays voice-driven |

If a principle isn't relevant to a specific section, **skip it**. If an anti-AI pattern doesn't appear in the draft, **don't add it as worry**. The file responds to what's actually in the writing.

### The single most powerful tool — read aloud

Before applying any specific principle below, the single highest-leverage practice is: **read the copy aloud (or sub-vocalize at full attention).**

What read-aloud catches that nothing else does:
- Sentences too long (you run out of breath)
- Awkward rhythm (you stumble)
- Schematic presentation in spoken formats (it sounds like a slide list)
- AI rhythms (the parallel triads, the negation-affirmation cadence become audible)
- Unnatural transitions between paragraphs (the silence between feels wrong)
- Words that are technically correct but humans don't say

Read-aloud is the meta-diagnostic. When in doubt about whether a passage works, read it aloud first. Apply specific principles only after that test surfaces specific issues.

---

## 2. Application protocol

When the writing specialist produces copy, the workflow is:

```
FASE 1 — Pre-writing (consultation)
  Read: brand-copy-rules.md (voice) + core/feedback-rules.md (global)
        + funnel brief + this specialist's own knowledge base
        (brand rules override global; both override this file's defaults)
  DO NOT read this file yet — it would speak to nothing

FASE 2 — Drafting
  Write naturally inside the brand voice, applying the structure defined
  in the brief (§3.8 chain ring-by-ring + §4.2 piece-level architecture)
  The principles below are NOT actively checked during this phase

FASE 3 — First refinement pass
  Read Section A (principles)
  Diagnostic question: "Which 2-3 principles is the current draft underserving?"
  Refine ONLY those 2-3 places — not all 10

FASE 4 — Anti-AI pass (MANDATORY)

  Step 4a — TIER 1 ZERO TOLERANCE checks (3 mandatory passes, run in order)

    Check 1 — Em-dash and en-dash count
      Search the draft for the characters em-dash and en-dash
      Target count: 0
      If count > 0: rewrite every occurrence using the replacement table in
                    Section B (B.1). Re-search to confirm 0 before continuing.

    Check 2 — Rigid parallel triads
      Read the draft aloud, listening for verb-verb-verb / noun-noun-noun /
      adj-adj-adj sequences. For any candidate, apply the diagnostic in B.2.
      Target count: 0 (the exception in B.2 must be explicitly invoked
                       and documented in the delivery note)
      If detected: rewrite using the replacement patterns in B.2.

    Check 3 — Negation-affirmation construction
      Search the draft for sentence openers: "Non e", "Non si tratta",
      "Non parl", "Non e la solita", "Dimentica", "Niente". For each match,
      verify whether the following sentence is an affirmation of the opposite.
      Target count: 0 (the exception in B.3 requires written documentation
                       in the delivery note; without doc, ban applies)
      If detected: rewrite using the replacement patterns in B.3.

  Step 4b — TIER 2 calibrated diagnostics

    Read Section B Tier 2 patterns (5 patterns)
    Diagnostic question: "Where in the draft do I sense AI rhythm or AI form?"
    Adjust the specific passages where the patterns surface, not preventively.

  Step 4c — Banned phrases scan

    Search for any phrase in the "Banned AI-tell phrases" table (framework)
    AND every row in core/writing/banned-phrases-user.md (your protected
    personal bans). Both are zero-tolerance.
    If present, rewrite without the phrase. No softening, no paraphrasing
    of the same construction. Drop the move entirely.

  Step 4d — Feedback-rules scan

    Scan the draft against EVERY rule in core/feedback-rules.md (global)
    and brands/<brand>/brand-copy-rules.md. For each rule that carries a
    ❌ example, verify the pattern is absent from the draft.
    Rules marked Phase=QA-scan in the feedback-rules index are mandatory
    checks at this step. Rules marked Phase=draft were already applied
    while writing (Fase 2) — spot-check them anyway.

  Step 4e — Cross-language calque scan

    Applies when reference/swipe material consulted during planning was in
    a different language than the deliverable. Scan the draft for:
      - anglicisms and untranslated marketing jargon
      - source-language syntax carryover (English sentence patterns
        wearing Italian words)
      - translated idioms that don't exist in the target language
      - "Not X. But Y." constructions inherited from US swipe
        (already banned by B.3)
    Fix by re-expressing the idea natively in the target language —
    never by light-touch patching.

  No draft is delivered without all three Step 4a checks at count 0.

FASE 5 — Readability check + Read aloud
  Run the Gulpease readability check (§3): compute the index (per §3.2), target ≥70
  If under 70, identify whether the heaviness is intentional (register choice)
  or accidental (long periods / complex words to simplify), then refine
  Read the full piece aloud (or attentive sub-vocalization)
  Rewrite any place you stumble, lose breath, or sound mechanical
```

This is the canonical sequence. The principles file enters at Fase 3 and 4. Never at Fase 1. The readability check (§3) joins the read-aloud as the final-pass diagnostic — objective measure plus subjective ear.

### FINAL QA — run in order

The consolidated pre-delivery checklist. Every box maps to a step defined above; run them in this order on the polished draft. No draft ships with a box unchecked.

- [ ] 1. **Fase 3 — structure pass**: the 2-3 underserved Section A principles identified and refined
- [ ] 2. **Fase 4a — Tier 1 banned structures ×3 at count 0**: em/en-dash (B.1), rigid parallel triads (B.2), negation-affirmation (B.3)
- [ ] 3. **Fase 4b — Tier 2 calibrated scan**: every passage that "sounds AI" diagnosed against the 5 Tier 2 patterns
- [ ] 4. **Fase 4c — Banned AI-tell phrases scan**: zero matches against the framework table AND `banned-phrases-user.md`
- [ ] 5. **Fase 4d — feedback-rules scan**: global + brand rules, every ❌ pattern verified absent
- [ ] 6. **Fase 4e — cross-language calque scan**: anglicisms, syntax carryover, translated idioms, inherited "Not X. But Y." all absent (only when cross-language sources were consulted)
- [ ] 7. **Gulpease on target for the format**: §3.4 default ≥70, or the format's deroga per §3.5 (e.g., advertorial editorial-style 63-70)
- [ ] 8. **Read-aloud pass**: no stumbles, no breath-outs, no mechanical-sounding passages left
- [ ] 9. **The 3 outcome questions of §5 answered**: real person speaking? every paragraph earns its place? every sentence survives the deletion test?

---

## 3. Readability check — Gulpease (for Italian copy)

The second universal tool of the post-draft workflow. Works alongside the read-aloud test: read-aloud catches rhythm and naturalness (subjective); Gulpease catches syntactic readability (objective). Both serve the same goal — a text easy to read is a text more easily believed.

### 3.1 The scientific foundation — Cognitive Fluency

Cognitive Fluency is the research field that studies how the complexity of expression affects comprehension and credibility. Its core finding, replicated across studies:

> **The simpler a statement is, the more credible it sounds — even when its meaning is identical to a more complex version.**

Our brains evolved to distrust the unfamiliar and the incomprehensible. A complex sentence triggers a (small but real) protective skepticism reflex. A simple sentence slides past that reflex and lands as plausible.

This is why "the simpler your text is to read, the more credible your reader will find it" is not a stylistic preference — it's a structural feature of how persuasion works.

### 3.2 The Gulpease index

The Italian equivalent of the Flesch-Kincaid readability score. Scale 0-100:

- **100** = maximum readability (very short sentences, short words, plain structure)
- **0** = minimum readability (long winding sentences, long words, heavy subordination)

**Formula** (computable directly from any draft):

```
Gulpease = 89 + (300 × N_sentences - 10 × N_letters) / N_words
```

Where:
- `N_sentences` = count of sentences (terminated by `. ! ? ;`)
- `N_letters` = count of alphabetic characters (no spaces, no punctuation)
- `N_words` = count of words

In Claude Code, compute the index with a quick script (bash/python) — do not estimate it. Outside a code-capable environment, declare the number as an estimate (±5 points) and treat it as an order of magnitude.

### 3.3 Reference points

| Type of text | Typical Gulpease range |
|---|---|
| Conversational sentence ("Vieni con me, dai.") | 90-95 |
| Best-seller fiction with dialogue (Steinbeck, McCarthy) | 75-88 |
| **Well-written DR persuasive copy** | **70-80** |
| Standard newspaper articles | 55-70 |
| Academic essay style | 35-50 |
| Legal / technical writing | 20-40 |

### 3.4 The target — 70+ as default

**Target for Copy Genius persuasive copy: Gulpease ≥ 70.**

This is the default across all formats — ad copy, email, advertorial, landing page, VSL script, upsell, bullet points, hooks.

Under 70 = signal that the text is leaning heavy. Either intentionally (register choice — see calibration below) or accidentally (long periods with subordinates / pompous vocabulary / dense syntax that needs simplification).

### 3.5 Calibration — deroghe consapevoli

A Gulpease under 70 can be **intentional and correct** in specific contexts:

- **Advertorial editorial-style** where the format borrows the voice of a newspaper or magazine — periods may be slightly longer, register slightly more formal. Acceptable range: 63-70.
- **VSL story-led pieces** where dialogue and narrative carry the body. Acceptable: 65-75. (Note: dialogues alone often spike the index naturally to 80+, so the average usually still lands well.)
- **Long-form premium / thought-leadership** where the brand voice is intellectual or literary by design. Acceptable: 60-70.
- **B2B technical copy** where some technical vocabulary is mandatory (a "mechanism" requires its terms). Acceptable: 60-70, with techniques to mitigate (analogies, sentence-fragment relief, paragraph breaks).

**The rule**: below 70, the writer must be able to articulate **why** the heaviness is intentional. If the answer is "because I wrote long sentences and didn't simplify," the heaviness is accidental — refactor. If the answer is "because the brand's editorial voice demands this register, and I'm balancing it with short paragraphs and clear transitions," the heaviness is intentional — keep, with awareness.

Below 60: always refactor. No format justifies it.

### 3.6 Techniques to raise Gulpease

These techniques map directly to the index — applying them raises the score, omitting them lowers it.

1. **Active voice over passive**
   - "Gli abbonati hanno guadagnato il 125%" (active) > "Il 125% è stato guadagnato dagli abbonati" (passive)
   - Active voice produces shorter sentences, more direct verbs, easier comprehension

2. **Break long periods with subordinate clauses**
   - Subordinate clauses (joined by "perché", "anche se", "mentre", "che", etc.) compound sentence length and lower the index
   - Split into shorter periods. Use coordination ("e", "ma", "però", "quindi") or fresh sentences instead of subordination

3. **Short common words over long uncommon ones**
   - "Evita parole lunghe" > "Rifuggi vocaboli polisillabici"
   - Long words = more syllables = lower index. Common words = familiar = easier processing

4. **Sentence fragments are allowed**
   - The grade-school rule "every sentence needs a main verb" doesn't apply here
   - Short fragments often read more naturally and raise the index
   - "Bastano poche frasi. Brevi. Senza fronzoli." is valid copy
   - Exception: feedback-rules may restrict this further — global rule #2 (no frasi-graniglia in serie) caps isolated fragments at deliberate, occasional emphasis; the conversational articulated period is the default

5. **Short paragraphs (max 5-6 lines)**
   - Visual readability + index gain. Long paragraphs feel intimidating and slow down processing

6. **Stories and dialogues raise the index naturally**
   - Natural dialogue has Gulpease 75-85
   - Stories use concrete vocabulary, active voice, short sentences inherently
   - When the copy can include a story or a piece of dialogue, the index lifts as a side effect

7. **Limit numbers**
   - Numbers and statistics are valuable as specificity (see Principle 3) but excessive numbers drag the index down
   - Use numbers where they support a key point; don't string multiple statistics consecutively without prose breathing room
   - The reader who feels "I can't follow you anymore" with too many numbers is experiencing the readability collapse this technique prevents

### 3.7 The 23 subordinate-clause triggers (check-tool)

Words that signal a subordinate clause — when one of these appears in a long sentence, that's the likely break-point to spezzare il periodo:

| | | |
|---|---|---|
| A causa di | Dove | Prima che |
| A meno che | Dovunque | Purché |
| Anche se | Finché | Qualora |
| Appena | In modo da | Quando |
| Benché | Invece | Rispetto a |
| Che | Mentre | Se |
| Come | Ogni volta che | Sebbene |
| Cosicché | Perché | Tuttavia |
| Dopo che | Piuttosto che | Visto che |

Operational use: during revision, scan for these. Where they appear inside a long period (15+ words), evaluate whether splitting into two periods raises clarity. Often it does. (Keep "perché" when introducing a real Reason Why — Principle 7 — but consider rewriting the sentence around it.)

### 3.8 What Gulpease does NOT measure

The index is a tool, not a master. It measures **syntactic readability only**. It does NOT measure:

- **Voice / tone** — copy can hit Gulpease 75 and still be off-brand
- **Persuasive force** — simple copy can be weak; complex copy can be powerful (rarely, but possible)
- **AI-isms** — a draft can hit Gulpease 78 and still sound AI (parallel triads, em-dash overuse, generic transitions all measure as "readable" but read as machine)
- **The presence of the 10 principles** — copy can be readable and yet have no One Thing, no Promise-Proof-Implication rhythm, no specificity

Gulpease complements the principles; it doesn't replace them. The final-pass workflow runs the index check AND the principle-by-principle check AND the anti-AI check AND the read-aloud — together they cover what each individually misses.

### 3.9 Position in workflow

Gulpease enters at **Fase 5** of the application protocol (§2), alongside the read-aloud. The sequence within Fase 5:

1. Compute Gulpease for the polished draft (after Fase 3 principles + Fase 4 anti-AI passes)
2. If ≥70: continue to read-aloud
3. If 60-69: identify whether the heaviness is intentional (register) or accidental (refactor); if accidental, apply techniques from §3.6 to lift the index
4. If <60: refactor mandatory, regardless of register
5. After refactoring (if any), read aloud as the final test

The index is computed once per polished draft, not iteratively during writing.

---

## SECTION A — Writing principles (10 outcome-focused qualities)

The qualities good copy has. Each principle below describes an **outcome** (what the reader experiences), not a rule (what to count or check).

---

### Principle 1 — One Thing

**Outcome**: The reader walks away holding one central idea, one core promise, one dominant takeaway. Everything in the piece serves that one thing.

**How it manifests when applied well**:
- The headline implicitly previews the One Thing
- Every section, every example, every proof element reinforces it
- Nothing in the piece feels like a side argument

**Self-diagnostic question**:
> *"If the reader could only remember one sentence from this piece, what would it be? Does every section of the copy push them toward that sentence?"*

**Calibration**: this principle is non-negotiable for short formats (ad, email, single LP section). For long-form (long VSL, long sales page), the One Thing remains the spine, but supporting layers (mechanisms, proof, identity) build around it.

---

### Principle 2 — Promise → Proof → Implication rhythm

**Outcome**: Every strong claim is immediately followed by proof, and the proof is immediately followed by what it means for the reader.

**How it manifests when applied well**:
- The reader never asks "where's the proof?" — it's already there
- The reader never asks "so what?" — the implication is already there
- The flow has natural micro-rhythm that doesn't pile claims or pile proofs in separate blocks

**Self-diagnostic question**:
> *"After each strong claim, is there proof within 1-2 sentences? After each proof, is there a clear 'what this means for you'?"*

**Calibration**: claims without proof are weakness; proof without implication is wasted credibility; implication without claim is unsupported promise. The three move together.

---

### Principle 3 — Specificity over the generic

**Outcome**: Every vague intensifier in the draft has been replaced by something concrete — a number, a scene, a sensory detail, a named entity.

**How it manifests when applied well**:
- "Many people" becomes "1 in 3" or "240 of the 247"
- "Very effective" becomes "97% completion rate" or "78 of 87 trainers"
- "Quickly" becomes "in 14 days" or "within the first session"
- "A common problem" becomes the specific scene where the problem shows up

**Self-diagnostic question**:
> *"Are there words like 'molto / tanto / efficace / rapidamente / spesso / la maggior parte' that I could replace with a specific?"*

**Calibration**: specificity has a ceiling. Hyper-specificity in every sentence reads as gimmicky and tracking-like. The principle: replace the **lazy** generics with specifics. Where a general phrasing is genuinely the right register, keep it.

---

### Principle 4 — Verbs that carry the meaning

**Outcome**: When a verb does the heavy lifting of an idea, that verb is specific and active. "To be / to have / to do / to make" are connective tissue, not load-bearing.

**How it manifests when applied well**:
- "Lui pensa a te" becomes "Lui ti torna in mente"
- "Avere risultati" becomes "vedere risultati / ottenere risultati / accumulare risultati" (with the verb tilting toward the actual meaning)
- "Fare in modo che" becomes the specific action ("portarlo a / spingerlo a / fargli")
- Strong verbs land at turning points (headline, CTA, the sentence that opens a new beat)

**Self-diagnostic question**:
> *"Where am I using 'essere / avere / fare / mettere / cose' as filler? Could a more specific verb carry the meaning?"*

**Calibration**: strong verbs distributed uniformly drain their power. Save them for the moments that need force — headline, CTA, key turns. Standard prose uses standard verbs.

---

### Principle 5 — Read aloud test (the master test)

**Outcome**: Every sentence sounds like something a real person could say. Every transition between sentences flows naturally when spoken.

**How it manifests when applied well**:
- No stumbling when reading at conversational speed
- Sentence length varies naturally (some short, some longer, never monotonous)
- The breath falls in natural places
- Transitions sound like spoken bridges, not written stitches

**Self-diagnostic question**:
> *"When I read this aloud, where do I stumble, run out of breath, or feel I'm sounding mechanical?"*

**Calibration**: this is the universal test. Apply it last, after all other refinements. The places that fail the read-aloud test are the places to rewrite — not via specific rules, but until the spoken version flows.

**Companion tool**: read-aloud catches rhythm and naturalness (subjective ear). The **Gulpease readability check** (§3) catches syntactic readability (objective measure). Both serve the same master rule from Cognitive Fluency: *a text easy to read is a text more easily believed.* Run them together in the final pass.

---

### Principle 6 — Conversational flow between paragraphs

**Outcome**: Every paragraph hooks into the previous one with a natural bridge. The reader feels carried forward, not jumping between slides.

**How it manifests when applied well**:
- Paragraph openings reference (sometimes explicitly, sometimes by echo) what just came
- Connective phrases that have personality and tone, not "anche se", "tuttavia", "inoltre" (correct but flat)
- The reader can read two consecutive paragraphs aloud and feel the connection

**Self-diagnostic question**:
> *"At each paragraph break, does the next paragraph feel like the natural continuation of the previous one — or like a new slide?"*

**Calibration**: in long-form copy, this is critical. In short-form (ad, single section), there may only be 1-2 paragraph transitions, but they still benefit from intentional bridging.

**Anti-anti-pattern**: don't substitute "And here's the thing..." / "E poi c'è una cosa..." as a generic bridge — those are themselves anti-patterns. The bridge has voice and content.

---

### Principle 7 — Reason why

**Outcome**: After every surprising or generous claim, the reader receives an explanation that makes the claim plausible.

**How it manifests when applied well**:
- "Today only €47 (was €497)" is followed by why
- "I'm offering this for free" has a reason behind it
- "90-day guarantee even if you've used the product fully" is anchored to the brand's reasoning
- Bold positioning has the underlying logic explained, not just asserted

**Self-diagnostic question**:
> *"Is there any claim in this copy that the reader might respond to with 'why?' — and if yes, did I answer it?"*

**Calibration**: not every claim needs reason why. Standard claims (the product works, the bonus has value) don't need defense. But anything **surprising**, **generous**, **contrarian**, or **price-related** does.

---

### Principle 8 — Open and close loops deliberately

**Outcome**: Curiosity gaps the copy opens are eventually closed. The reader never finishes the piece carrying unresolved questions that the brand never addressed.

**How it manifests when applied well**:
- Hooks open a specific curiosity, and the body closes it
- New loops don't open faster than old ones close (max 2-3 open simultaneously)
- The structure ends with all loops either closed or intentionally left for a follow-up touchpoint

**Self-diagnostic question**:
> *"Did I open something the reader is still wondering about by the end? Did I open too many curiosities at once, so the reader loses track?"*

**Calibration**: in funnel architecture, some loops are intentionally left open in earlier touchpoints to be closed in later ones (ad → LP). When this is the design, document it explicitly. Otherwise, every loop opened in a piece gets closed in that piece.

---

### Principle 9 — First person default

**Outcome**: The copy speaks in the voice of the frontman / brand, in first person, naturally and consistently. Third person about the brand reads as distancing and corporate.

**How it manifests when applied well**:
- "Ho lavorato con seimila uomini" not "Sol Livio ha lavorato con seimila uomini"
- "Il mio sistema" not "Il sistema di Sol Livio"
- Frontman speaks as themselves; brand speaks as a unified "we" or "I" when no explicit frontman exists

**Self-diagnostic question**:
> *"Is the brand/frontman speaking in first person consistently, or am I slipping into third-person descriptions?"*

**Calibration**: third person is appropriate in specific contexts — testimonial attribution, founder bio sections, third-party authority transfer. Outside those, default to first person.

---

### Principle 10 — No padding

**Outcome**: Every word in the copy earns its place. Qualifiers that soften, adverbs that intensify generically, fillers that buffer — all cut.

**How it manifests when applied well**:
- "Un po'", "tipo", "in qualche modo", "abbastanza", "diciamo" — cut unless they serve voice
- "Molto", "estremamente", "assolutamente", "veramente" — cut or replaced with specificity
- "In realtà", "fondamentalmente", "praticamente", "di fatto" — cut unless adding genuine meaning
- "Ovviamente", "naturalmente" — almost always cut

**Self-diagnostic question**:
> *"If I delete this word/phrase, do I lose anything real? If no, cut."*

**Calibration**: voice-defining padding stays. A frontman who naturally says "diciamo" or "ecco" in their authentic register keeps those. The cut is for **default padding** that comes from generic writing habit, not from voice.

---

## SECTION B — Anti-AI patterns

Section B has **two tiers** of patterns:

- **Tier 1 — ZERO TOLERANCE bans** (3 patterns). No calibration. No "but this one is justified". No "the brand voice allows it". If they appear in the draft, they get removed. Period.
- **Tier 2 — Calibrated diagnostics** (5 patterns). Each can sound AI OR can be a legitimate writing choice. The diagnostic distinguishes the two.

The single underlying principle for Tier 2: **a pattern sounds AI when it's used mechanically or in unnatural density. The same pattern, used with intention and varied, often reads as human craft.**

For Tier 1, the principle is different: **the patterns have been observed to relapse across drafts even when calibrated rules were in place.** The copywriter has flagged these as the most frequent AI-tells in Copy Genius output. They are removed from the calibrated tier and treated as outright bans.

---

## TIER 1 — ZERO TOLERANCE PATTERNS

These three patterns get **zero appearances** in the delivered draft. They are checked explicitly in Fase 4 of the protocol (§2). If even one slips through, the draft is not ready for delivery.

The three patterns:

1. **Em-dash and en-dash** as connectors (`—` `–`) — ZERO usage
2. **Rigid parallel triads** — outright ban (with one narrow exception)
3. **Negation-affirmation construction** ("Non X. È Y.") — outright ban (with one narrow exception)

Detailed treatment of each below in §B.1, §B.2, §B.3. The Tier 2 calibrated patterns continue from §B.4 onwards.

---

### B.1 — Em-dash (—) and en-dash (–) — ZERO TOLERANCE

**The rule**: zero em-dashes and zero en-dashes in any delivered draft. No exceptions for "register", "editorial voice", "natural pause", or "no other punctuation works". Every dash that appears in a draft gets removed before delivery.

**Why zero, not "max 1 or 2"**: previous versions of this file set the limit at 1-2 per piece. Drafts continued to ship with 5, 8, 12 em-dashes. The "max" framing produced negotiation ("just this one is justified") that defeated the rule. Moving to zero removes the negotiation surface entirely.

**The replacements** — every em-dash maps to one of these:

| Original em-dash use | Replacement |
|---|---|
| Parenthetical aside ("...è una pratica antica — usata da maestri taoisti — che...") | Comma pair OR parentheses OR rewrite as two sentences |
| Emphatic reveal ("...e poi accade questo — tutto cambia") | Period + new sentence OR colon |
| Pause for effect ("Lui ti guarda — e lo sa") | Period OR comma OR rewrite to integrate |
| Range/connection ("Vediamo le tecniche — punto per punto") | Colon OR "ovvero" / "cioè" / parenthetical commas |
| Apposition ("Marco — il fondatore — dice che...") | Comma pair OR parentheses |

**Default replacement when in doubt**: period. Two short sentences beat one sentence with an em-dash 95% of the time.

**The Fase 4 check** — explicit step:
1. Search the polished draft for `—` (em-dash) and `–` (en-dash)
2. Count: target is 0
3. If count > 0, rewrite each occurrence using the table above
4. Re-search to confirm zero before delivery

**No exceptions clause**: there is no exception. If a passage feels like it "needs" an em-dash, it means the sentence is structurally weak. Rewriting it without the dash forces stronger structure. The em-dash is hiding sloppy syntax 95% of the time and contributing nothing the other 5%.

**Scope of the rule**: the zero count applies to the COPY DELIVERED to the user (every draft, every revision, every output of a writing specialist). It does NOT apply to internal wiki documentation, markdown headers in `.md` files, system prompts, or any text that is not the deliverable copy itself. The wiki's own files use em-dash as a structural separator in headings ("### B.1 — Em-dash..."); this is internal formatting convention, not delivered copy. The Fase 4 check fires on the copy block, not on the surrounding wiki text.

---

### B.2 — Rigid parallel triads — OUTRIGHT BAN

**What it looks like**: three structurally parallel elements in sequence, often closing a thought with rhythmic emphasis.

> *"Veloce. Affidabile. Conveniente."*
> *"Lui ti guarda. Lui ti tocca. Lui ti desidera."*
> *"Studia. Pratica. Trasforma."*

**The rule**: zero rigid parallel triads in any delivered draft. The pattern has been flagged as a recurring AI-tell that bypasses the calibrated diagnostic ("but this one is asymmetric enough", "but the third element breaks the pattern" — these justifications kept failing).

**Diagnostic for identifying a rigid triad** (any TWO of these = ban):

- [ ] Three elements in sequence
- [ ] Roughly the same length (within 30% word count of each other)
- [ ] Same grammatical structure (verb-verb-verb, noun-noun-noun, adjective-adjective-adjective)
- [ ] Closes a paragraph or section as climax
- [ ] Each element on its own line OR separated by periods/commas as discrete units

If a triad scores two or more boxes, it is rigid. Remove it.

**The narrow exception (one case only)**: genuine enumeration of three items that the avatar would actually list as three, AND the three items are functionally non-parallel in meaning (not just rhetorically asymmetric). Example: *"Ricevi il manuale, l'accesso alla community, e la garanzia di 12 mesi."* — three items because the offer literally has three deliverables, not because the rhythm calls for three.

If you can express the same idea with two elements, or four, or as flowing prose, do that instead. The triad must be FORCED by the content, not chosen for rhythm.

**Replacements** — common rewrites:

| Original rigid triad | Replacement |
|---|---|
| *"Veloce. Affidabile. Conveniente."* | Flowing prose: *"È veloce, affidabile, e costa meno di quanto pensi."* OR two-element: *"Veloce. E affidabile."* OR concrete sentence: *"In 7 giorni, garantito, a meno di un caffè al mese."* |
| *"Lui ti guarda. Lui ti tocca. Lui ti desidera."* | Single integrated sentence: *"Lui ti guarda diversamente da come ti guardano gli altri, e ti tocca con un'intenzione che non avevi mai sentito."* OR break the parallel: *"Lui ti guarda. Ti tocca con un'attenzione che non avevi mai sentito. E quando esce di casa, pensa ancora a te."* |
| *"Studia. Pratica. Trasforma."* | Concrete promise: *"Studia per due settimane, pratica per un mese, e i risultati arrivano da soli."* |

**The Fase 4 check** — explicit step:
1. Read the draft aloud, listening for triadic rhythm
2. For any passage that feels rhythmic-mechanical (verb-verb-verb / noun-noun-noun / adj-adj-adj in sequence), apply the diagnostic above
3. If two boxes are checked, rewrite the passage using the replacement patterns
4. Re-read the rewritten passage aloud to confirm the triad is gone

---

### B.3 — Negation-affirmation construction ("Non X. È Y.") — OUTRIGHT BAN

**What it looks like**: a denial followed immediately by an assertion of the opposite, often as separate short sentences.

> *"Non è una pillola. È un protocollo."*
> *"Non vuoi sentirti più sicura. Vuoi essere quella che lui ricorda."*
> *"Non è un corso. È un percorso."*
> *"Non si tratta di X. Si tratta di Y."*

**The rule**: zero "Non X. È Y." / "Non è X. È Y." / "Non si tratta di X. Si tratta di Y." constructions in any delivered draft. This pattern is one of the most recognizable AI-tells; every reader of contemporary copy has learned to spot it.

**Why it relapses**: it feels like "doing belief work" (denying a misconception, asserting the correct view). In practice, the "Non X" is almost always a strawman the reader didn't actually hold, and the "È Y" is the punchline the writer wanted to land. The construction is rhetorical scaffolding masquerading as argument.

**The narrow exception (one case only)**: the denied "Non X" is a specific belief that the avatar's materials (`brands/<brand>/avatars/*.md`) have documented as currently held by the reader, AND the affirmation directly installs a chain ring from the brief. Even then: use the construction at most ONCE per piece, and embed it inside longer prose, never as isolated short sentences.

If the exception is invoked, document it in the draft delivery note: *"Used Non X / È Y once at line 47 — installs chain belief #6 (previous understanding wrong) against the documented avatar misconception that [X]."* — without this documentation, the exception doesn't apply.

**Replacements** — common rewrites:

| Original Non X / È Y | Replacement |
|---|---|
| *"Non è una pillola. È un protocollo."* | Direct assertion + reason: *"È un protocollo perché agisce sui meccanismi che la pillola ignora."* OR descriptive: *"Si chiama protocollo perché ha sette passaggi e una sequenza precisa."* |
| *"Non vuoi sentirti più sicura. Vuoi essere quella che lui ricorda."* | Direct assertion: *"Quello che cerchi davvero è essere quella che lui ricorda anche quando non sei lì."* |
| *"Non è un corso. È un percorso."* | Just describe what it IS: *"È un percorso di nove mesi con accesso continuo e tre check-in 1:1."* |
| *"Non si tratta di guadagnare di più. Si tratta di lavorare meno."* | Direct: *"Lo scopo è lavorare meno, non guadagnare di più. Anzi: spesso si guadagna di più proprio perché si lavora meno."* |

**Pattern recognition** — variants to watch for:
- *"Non è X..."* / *"È Y..."* (the canonical)
- *"Non si tratta di X..."* / *"Si tratta di Y..."*
- *"Non parliamo di X..."* / *"Parliamo di Y..."*
- *"Non è la solita X..."* / *"È una Y..."*
- *"Dimentica X..."* / *"Pensa Y..."*
- *"Niente X..."* / *"Solo Y..."*

All of the above are negation-affirmation in disguise. Same ban applies.

**The Fase 4 check** — explicit step:
1. Search the draft for "Non è", "Non si tratta", "Non parl", "Non è la solita", "Dimentica", "Niente" as sentence openers or paragraph openers
2. For each match, check whether the following sentence is an affirmation of the opposite
3. If yes, the construction is negation-affirmation — rewrite per the replacement table
4. Re-search after rewrites to confirm zero

---

## TIER 2 — CALIBRATED DIAGNOSTICS (5 patterns)

From here on, the patterns are **calibrated**: each can sound AI OR can be a legitimate writing choice depending on context, density, and intention. Use the diagnostic in each to distinguish.

---

### Tier 2 Pattern 1 — Effect-closer short detached sentences

**What it looks like**: a paragraph closed by a 1-3 word hammered statement.
*"E tutto cambia."*
*"Per sempre."*
*"Definitivamente."*

**When it sounds AI**:
- The closer is generic ("forever", "everything changes", "the rest is history")
- It appears in multiple paragraphs as recurring rhythm
- It substitutes for genuine resolution with rhetorical wash
- The closer doesn't add information — only emotional emphasis

**When it works**:
- The short closer is **specific and concrete** ("E lui ti chiama lunedì.") — adds new information
- Used once or twice in a long piece, at moments that genuinely warrant the cadence
- The voice of the brand naturally drops short emphatic sentences

**Self-check**: does the short closer add specific information, or only rhetorical punch? If only punch, rewrite by extending the sentence with concrete content or by integrating into the previous one.

---

### Tier 2 Pattern 2 — Identical openings in consecutive sentences

**What it looks like**: three or more consecutive sentences opening with the same verb form, the same pronoun, or the same syntactic structure.
*"Lui ti guarda. Lui ti vuole. Lui ti chiama."*
*"Sta scrollando. Sta leggendo. Sta pensando."*

**When it sounds AI**:
- Three or more consecutive sentences begin with the same pattern
- The repetition isn't doing emphasis work — it's rhythm by default
- The reader would naturally substitute conjunctions or different openings

**When it works**:
- Two parallel openings used deliberately for emphasis ("Lui ti guarda. Lui ti capisce.")
- The third sentence breaks the pattern ("Lui ti guarda. Lui ti vuole. E poi prende il telefono.")
- The repetition is recognizably rhetorical, not accidental

**Self-check**: if I caught myself starting 3+ sentences identically, break the third by substituting opening structure ("Lui ti guarda. Ti vuole. E poi prende il telefono." — the second drops the pronoun, the third adds conjunction).

---

### Tier 2 Pattern 3 — Generic transition phrases

**What it looks like**: hollow connectives between paragraphs that exist only to bridge.
*"E poi c'è una cosa che cambia tutto."*
*"Un altro aspetto fondamentale è..."*
*"C'è un punto importante da capire."*
*"E sai qual è la cosa più interessante?"*

**When it sounds AI**:
- The transition is generic and could go between any two paragraphs
- It contains no specific information about what's coming
- It's a placeholder waiting for the real bridge to be written

**When it works**:
- The transition has voice and personality of the speaker ("E sai cosa fa la differenza?", "Ti dico una cosa che ho notato in quindici anni di sessioni")
- The transition references what just came AND previews what's next, specifically
- The transition is rare (1-2 per piece), used to mark genuine pivots

**Self-check**: if I deleted the transition phrase entirely, would the connection between paragraphs still work? If yes, the transition was filler — keep deleted. If the connection feels broken without it, the transition needed to do more work than a generic phrase.

---

### Tier 2 Pattern 4 — Schematic presentation in spoken format

**What it looks like**: slide-bullet-style fragmented prose where a person speaking the same content would phrase fluidly.
*"Due giorni intensivi. Online. In diretta. A giugno."*
*"Veloce. Affidabile. Garanzia."*

**When it sounds AI** (in spoken formats — VSL, ad audio, podcast-style):
- Sentence fragments stacked as if displayed on a slide
- The same content spoken aloud sounds chopped, mechanical
- The format expects flowing speech and the copy delivers list-style

**When it works** (in visual/written formats):
- Landing pages and ads can use list-style for scannable visual rhythm
- Visual hierarchy supports the fragmentation (each fragment on its own line, bolded, with breathing space)
- The reader is scanning, not listening

**Self-check**: if this piece is meant to be spoken (VSL, video ad, audio), would the schematic phrasing sound natural read aloud? If no, rewrite into spoken form ("Sono due giorni intensivi, in diretta online, a giugno. Te lo dico subito perché voglio che tu possa decidere.").

---

### Tier 2 Pattern 5 — Forced poetic combinations (abstract + physical sensation)

**What it looks like**: a forced metaphor that pairs an abstract concept with a physical sensation, used for emotional gravity.
*"Una stanchezza che ti pesa nelle ossa."*
*"Un silenzio che ti graffia dentro."*
*"Un desiderio che ti accende la pelle."*

**When it sounds AI**:
- The pairing is generic ("pesa nelle ossa", "graffia dentro", "accende la pelle") and could apply to many abstract nouns
- The poetic register clashes with the surrounding prose voice
- Used to inject emotional weight when the underlying claim doesn't earn it

**When it works**:
- The pairing is specific to the brand or to the lived experience being described
- The voice of the piece is naturally lyrical (memoir, story-led pieces, certain identity-driven brands)
- The combination is rare enough that it carries weight (1-2 per long piece, not recurring)

**Self-check**: would I actually say this phrasing in a conversation? If it sounds written rather than spoken, and the voice isn't lyrical-by-design, rewrite into concrete prose.

---

### Banned AI-tell phrases and constructions — outright (not calibrated)

This table complements the Tier 1 zero-tolerance patterns (B.1, B.2, B.3 above). The Tier 1 patterns are STRUCTURES (punctuation, syntax). The table below is PHRASES — fixed strings or near-variants. Both share the same enforcement level: zero appearances in the delivered draft. No "depends on the brand voice", no calibration. This list grows as new tells are surfaced by the copywriter; treat it as living.

| Phrase / variant | Why banned |
|---|---|
| "cambia tutto" / "c'è un dettaglio che cambia tutto" / "questo cambia tutto" / "ed è questo che cambia tutto" | Hollow reveal-promise cliché. The phrase IS the AI-tell, regardless of what comes after. Whatever follows almost never delivers a real "tutto" worth signaling, and even when it does, this phrasing weakens it. There's always a more specific way to say what the phrase was trying to say (e.g., "perché si organizza così:" / "ed è qui che la matematica diventa interessante" / "il punto è il modo in cui si organizza") |
| Em-dash and en-dash usage (the character `—` and `–`) | See §B.1 for the full treatment. Cross-referenced here for the Fase 4 scan: this table and the B.1 check both fire on any dash occurrence. |
| Rigid parallel triads | See §B.2 for the full treatment. Cross-referenced here for the Fase 4 scan. |
| Negation-affirmation ("Non X. È Y." and variants listed in B.3) | See §B.3 for the full treatment. Cross-referenced here for the Fase 4 scan. |

**Application**: during Fase 4 of the protocol (Anti-AI pass), scan the polished draft for any phrase in this table. If present, rewrite without it. Full stop. Don't soften, don't paraphrase the same construction, don't keep the rhetorical move "but with different words". Drop the move entirely and find a concrete bridge that names what's actually coming.

**Extending this list**: the table above is the **framework** baseline (shipped with Copy Genius, refreshed on update). When the copywriter flags a NEW phrase as "AI-tell, banned outright", do NOT append it here — that would be lost on the next framework update. Instead append it to the protected [banned-phrases-user](banned-phrases-user.md) file (and register the full rationale in [feedback-rules](../feedback-rules.md) per CLAUDE.md §9). The Fase 4c scan reads both surfaces. Never bury an outright ban inside a Tier 2 diagnostic pattern; outright bans are stricter and deserve their own visibility.

---

## 4. Calibrated extra — imported-flavor patterns

These are patterns that sometimes import a "translated-from-American-DR" flavor into Italian copy. **Calibration**, not ban — the user reminded me explicitly: not everything that resembles American patterns sounds wrong in Italian. The judgment is contextual.

### Patterns to read with awareness (not avoid blindly):

1. **"Quello che [autorità/industria] non vuole che tu sappia"** — works in some niches (financial, health-conspiracy spaces), reads as cheap in others
2. **"Hai un segreto..."** / **"Una verità che pochi sanno"** — saturation-dependent
3. **"Il dottor X rivela..."** as headline opening — depends on the niche's authority culture
4. **ALL CAPS chains** or **multiple exclamation marks** — American DR convention; can read scammy in Italian unless the brand voice naturally uses CAPS for emphasis
5. **Heavy testimonial-frontloading** in cold copy — American convention; in Italian markets, testimonials often work better mid-piece

**Diagnostic question**: does the pattern sound natural in **the specific brand's voice and the specific audience's register**? If the brand authentically operates in a frame where these patterns belong, use them. If the brand voice would never naturally produce them, replace with a native equivalent.

---

## 5. Self-diagnostic protocol — the 3 outcome questions

After applying Sections A and B to the draft, run these three questions:

### Question 1 — *"Does this sound like a real person speaking, or like a structured object?"*

Run a read-aloud test on the full piece. Mark every place you stumble, lose breath, sound mechanical, or sound like reading slides aloud. Rewrite those passages — not by applying specific rules, but until the spoken version flows.

### Question 2 — *"Does every paragraph have a reason to exist?"*

For each paragraph, ask: what does it install, advance, or transition? If a paragraph doesn't install a belief, advance an argument, or transition to the next beat, it's filler. Either give it a function or cut it.

### Question 3 — *"If I delete this sentence, do I lose something real?"*

Sentence by sentence in the polished draft, ask the deletion question. If the answer is "nothing real is lost", cut. If the answer is "yes, I lose [specific information / emotional beat / transition]", keep.

These three questions replace the 30+ checklist questions of the old `writing-rules.md` revision phase. They're outcome-focused, fast, and don't paralyze.

---

## 6. What this file is NOT

To prevent the failure mode of the previous Copy Genius writing system:

- **NOT a pre-writing checklist** — read after drafting, not before
- **NOT a list to apply uniformly** — apply only what the specific draft needs
- **NOT a set of uniform bans** — Tier 2 patterns are calibrated by context; Tier 1 patterns and the Banned AI-tell phrases table are absolute. No calibration applies to those.
- **NOT a substitute for the brand's voice** — voice from `brand-copy-rules.md` is always primary; principles operate inside the voice
- **NOT quantitative** — there are no "max 20 words per sentence" rules; read-aloud is the measure
- **NOT exhaustive** — these are the highest-leverage 10 + 8. Other writing qualities exist; these are the ones with the most return on attention

The single biggest mistake the old system made: treating writing principles as rules to satisfy mechanically. The principles below are **the qualities good copy has** — and the only way to apply them is to **diagnose what the current draft is missing**, then fix that specific gap.

---

## 7. Cross-references

- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — the strategic layer (what to install when). These principles apply to how the technique is expressed.
- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — every ring is installed via copy that follows these principles.
- [funnel-brief](core/strategic-frameworks/funnel-brief.md) — the brief specifies what to write; this file specifies how to write it well.
- [feedback-rules](core/feedback-rules.md) — global user-accumulated rules. Read at Fase 1 and scanned at Fase 4d. They override this file's defaults; brand-copy-rules override them.
- `brands/<brand>/brand-copy-rules.md` — **the dominant layer**. Voice always wins over generic principles. When a principle in this file conflicts with the brand's documented voice, voice wins.
- `brands/<brand>/swipe.md` — the brand's own examples are the calibration reference for the principles applied in this brand's voice.
- `core/writing/section-recipes.md` (planned, not yet created) — tactical recipes for specific sections (guarantee, above-the-fold, etc.). These principles apply inside each recipe.
- `format-specialists/*.md` and `section-specialists/*.md` — every writing specialist (full-piece specialists like email-specialist, vsl-and-video-ad-specialist, lp-specialist, ad-specialist, advertorial-specialist, upsell-specialist; component specialists like hook-specialist, headline-specialist, lead-specialist, marketing-thesis-specialist, offer-specialist, faq-specialist, bullet-point-specialist) is a self-contained file holding both its operational workflow AND its format-specific knowledge base. Each one reads this file as Fase 3-4 of its workflow: these principles apply inside each specialist as the post-draft stylistic layer.

---

## SECTION C — Drafting methods for long-form

> **What this section is**: two structured **drafting processes** for any long-form piece (landing page, sales letter, long VSL script, long advertorial). These are not templates or structural blueprints (those come from the funnel brief). They are **how to organize the act of writing** so the draft emerges efficiently and with full proof coverage.
>
> **When invoked**: optionally during Fase 2 (Drafting) of the application protocol (§2), for any piece long enough that the writer benefits from process scaffolding. Specialists for short-form (email, ad, hook) typically don't need these methods — the piece is small enough to draft directly. Specialists for long-form (lp-specialist, vsl-and-video-ad-specialist, advertorial-specialist) reference this section when the copywriter benefits from a structured approach.
>
> **Origin**: distilled from the Italian DR copywriting tradition. The Method of Objections emerged at high-volume direct-response publishers as a way to scale junior copywriters to senior output. The Method of Assembly was codified after a copywriter noted its dramatic speed advantage on a successful sales letter.
>
> **The choice between methods**: not exclusive. A piece can use one, the other, or a hybrid. Use the diagnostic below to pick.

### C.1 — When to use which method

| Signal | Method to favor |
|---|---|
| Audience is skeptical / saturated / has heard the category claims before | **Method of Objections** — preempting and dismantling objections is the spine of persuasion |
| Brief lists proof elements heavily; the persuasion relies on dense evidence | **Method of Assembly** — proof orchestration is the spine |
| The piece is being written by a junior copywriter or someone less confident with the format | **Method of Objections** — the structure produced compensates for inexperience |
| The piece has a strong narrative/storytelling spine (story-led VSL, founder story sales letter) | **Hybrid** — Method of Assembly for the proof/discovery sections, free drafting for the narrative |
| The product/market is genuinely new and the copywriter is exploring what to say | **Method of Objections** (in brainstorm mode) — surfaces what the prospect actually needs to hear |
| The product is well-known to the team and the strategy is to win on proof | **Method of Assembly** — speeds up the assembly of an already-decided argument |

### C.2 — Method of Objections

**Purpose**: produce a long-form draft where every section answers a real objection the prospect holds. The structure emerges from the objection list, not from a template.

**When it shines**: skeptical audiences, saturated markets, audiences burned by past category failures. The piece reads as if the writer has been inside the prospect's head.

**Process**:

1. **Brainstorm (with 4-5 people, no more)** — gather the team (founders, copywriters, customer-facing staff). Larger groups produce noise, not signal.

2. **List every objection on post-its** — one objection per post-it. No filtering. Include objections that feel obvious ("È troppo costoso", "Non funzionerà per me", "Chi sei tu per dirmelo?") — what feels obvious to the team is often not obvious to the prospect.

3. **Order the objections** — sequence them in the order the prospect would mentally raise them while reading. The first objection on the wall is the first the body must answer.

4. **Transform each objection into a sub-headline** — a sub-headline is not the objection itself ("È troppo costoso!" is NOT a sub-headline). It is the *answer* phrased as a benefit-loaded statement that introduces the section dismantling that objection. Example: *Costa troppo?* → *"Ti svelo perché 47€ è ancora poco per ciò che riceverai"*.

5. **Draft the body section under each sub-headline (alone)** — this is the only solo step. Each section is the answer to one objection, written in the brand voice. The total of the sections is the draft.

**Output discipline**:
- Every section answers ONE objection, not many. If an objection comes back later in the piece, that's a separate section, not the same one re-opened.
- If during drafting a new objection surfaces, add a post-it — don't try to wedge it into an existing section.
- The piece is "complete" when every post-it has its corresponding section, not when a word count is hit.

### C.3 — Method of Assembly (the Mechanic)

**Purpose**: produce a long-form draft where every claim has its proof traceable, the structure emerges from the proof inventory, and the writing phase is fast because all the evidence is pre-organized.

**When it shines**: proof-heavy pieces, niches where the persuasion depends on dense evidence (health, finance, performance), and any situation where the copywriter wants to spend research time once and writing time fast.

**Process**:

1. **List the FATTI (facts) the piece must establish** — these are the claims that need to land for the persuasion to work. Example for a sleep product: *"L'insonnia non è normale dopo i 40"*, *"Il vero cause sono le micro-svegliate non percepite"*, *"Esiste un protocollo che lavora sulla regolazione vagale"*.

2. **For each FATTO, gather 3 proof elements minimum** — testimonials, studies, expert interviews, data. The "3 minimum" rule prevents under-supported claims (1 proof feels accidental, 2 feels matched, 3 feels conclusive). If a FATTO has fewer than 3 available proofs, that's a research gap — go find more before writing.

3. **On a post-it per proof**: write the proof summary + the source page + paragraph reference**. Example: *"Estradiolo basso → cattivo sonno (libro X, p.47, §3)"*. The page/paragraph numbering means you can pull the proof in 10 seconds during writing instead of re-searching.

4. **Order the FATTI in the sequence the reader needs them** — same logic as the objection ordering: the reader's mental flow through the proof.

5. **In the writing phase, the proofs become copy-paste material** — each section is the FATTO + its 3 proofs woven into prose. The writing is fast because the assembly work was done upfront. The mental energy goes into voice, transitions, and rhythm — not into "where was that statistic again?".

**Output discipline**:
- A FATTO without 3 proofs available is either (a) cut from the piece, (b) sent back to research, or (c) marked explicitly to the copywriter for a strategic call. Never write a FATTO with under-strength proof; the reader feels the weakness.
- The post-it numbering system survives across pieces — if the same proof appears in multiple sales letters, the source notation is reusable. Build the brand's research base once.
- The method was originally practiced on paper post-its. Digital tools work equally well (Notion, Obsidian, even a single text file with section headers per FATTO). The principle is *separation between research and writing*, not the medium.

### C.4 — Hybrid use

The two methods are compatible. A typical hybrid for a long-form story-led sales letter:

- **Method of Objections** applied to the close (offer / price / urgency / guarantee) — the close is where the prospect's resistance peaks, and the objection structure delivers airtight dismantling.
- **Method of Assembly** applied to the proof-dense middle (mechanism / discovery / authority / case studies) — the proof orchestration is the spine here.
- **Free drafting** for the narrative parts (hook, story, vulnerability, future pacing) — these are voice-led and resist process scaffolding.

The copywriter calibrates the hybrid based on the brief's content distribution. Both methods serve the same Fase 2 (Drafting) of the application protocol — they are accelerators for producing the first draft, not replacements for the rest of the workflow.

### C.5 — What these methods are NOT

- **Not structural templates** — the structure of the piece comes from the funnel brief (§4.2 / §4.3 of [funnel-brief](core/strategic-frameworks/funnel-brief.md)). These methods organize *how the draft is produced*, not *what shape the piece takes*.
- **Not a substitute for the brief** — both methods presuppose that strategic decisions (awareness, chain of beliefs, Big Idea, UM, route) are already made. The methods translate the brief into a draft efficiently; they don't make strategic choices.
- **Not mandatory** — a confident senior copywriter writing in a familiar format can draft without either method. The methods exist for scaling output, reducing research-while-writing friction, and producing reliable quality from less experienced writers.
- **Not stages of the application protocol** — they are *modes of doing* Fase 2 (Drafting). Fase 1 (Pre-writing consultation), Fase 3 (principles refinement), Fase 4 (Anti-AI pass), Fase 5 (Gulpease + read-aloud) run normally before, after, and around them.

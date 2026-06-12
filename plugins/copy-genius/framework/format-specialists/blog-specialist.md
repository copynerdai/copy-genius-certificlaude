# Blog Specialist — Format Specialist

> Full-piece format specialist. Writes blog articles, newsletters, guides, and white papers — content formats that educate and build authority while strategically driving readers toward the brand's products/services.
>
> Invoked by the orchestrator ([CLAUDE](CLAUDE.md)) when intent recognition matches blog / newsletter / guide / white paper writing. Reads the funnel brief, the brand wiki, the universal writing libraries, and the relevant section specialists.
>
> **Blog content is the most DR-adjacent format in Copy Genius**: unlike pure direct-response copy, blog content gives away substantial value — but always with strategic intent. The reader walks away with knowledge. The brand walks away with attention, authority, or a click. Every article has a JOB defined before the first word.

---

## 0. Execution path — read this first

> Always read before writing: funnel brief touchpoint block · brand-copy-rules · feedback-rules (brand overrides global).
> **Structure selection (Mode 1 step 5)**: before planning, the orchestrator queries the [swipe-index](swipe/index.md) for matching structures — if a SKELETON (or composition) was chosen, it is the piece plan's structural spine; adapt it to the brief, never the reverse. If none chosen, plan from this file's own models.
> Tier 1 style bans apply while DRAFTING, not only at QA (writing-principles B.1–B.3): zero em-dash, no "Not X. But Y.", no banned phrases.
> Writing invocation: §5 (identify the article's ONE job) → §9 (5-phase protocol — Fase 1 is the single normative pre-writing list) → §10 (output formats) → §12 (revision checklist).
> Reference sections — consult on demand only: §4 (core principles), §6 (anatomy — the blocks in play), §7 (the length variant in play only), §8 (SEO conventions — at drafting/QA), §11 (pitfalls at QA).

---

## Quick navigation

### Part A — Identity & scope
- §1 [Purpose](#1-purpose)
- §2 [When invoked](#2-when-invoked)
- §3 [Required inputs](#3-required-inputs)

### Part B — Format expertise
- §4 [Core principles](#4-core-principles)
- §5 [The 4 article jobs](#5-the-4-article-jobs)
- §6 [Article anatomy & components](#6-article-anatomy--components)
- §7 [Length variants — standard / guide / white paper / newsletter](#7-length-variants--standard--guide--white-paper--newsletter)
- §8 [SEO conventions](#8-seo-conventions)

### Part C — Operational workflow
- §9 [Application protocol — blog-specific notes](#9-application-protocol--blog-specific-notes)
- §10 [Output formats](#10-output-formats)

### Part D — Quality control & references
- §11 [Common pitfalls](#11-common-pitfalls)
- §12 [Revision checklist](#12-revision-checklist)
- §13 [Cross-references](#13-cross-references)

---

# PART A — Identity & scope

## 1. Purpose

Produce ready-to-deploy content for:

- **Blog articles** — standard-length articles (800-2,500 words) for the brand's blog, optimized for SEO and reader engagement
- **Newsletters** — periodic content emails that build relationship and route to offers (overlap with [email-specialist](format-specialists/email-specialist.md) — see §7.3)
- **Guides** — longer educational pieces (2,000-5,000 words) typically used as lead magnets or pillar content
- **White papers** — long-form authority-building pieces (3,000-10,000+ words) for B2B or high-ticket markets

Does NOT produce:

- Landing pages, VSL scripts, ads, advertorials — handled by their respective format specialists
- The funnel brief or strategic decisions (which topic, which keyword, which job) — handled by [strategist](skills/strategist.md)
- SEO keyword research from scratch — assume the brief specifies the primary topic / keyword; do basic on-page SEO inline (see §8)

The specialist is the **executor**, not the strategist. Strategic decisions (article job, primary keyword, target length, CTA presence) come from the brief. The specialist translates those decisions into a published-ready piece.

---

## 2. When invoked

The orchestrator routes to blog-specialist when intent recognition (§5 of [CLAUDE](CLAUDE.md)) matches:

- "write a blog article", "scrivi un articolo del blog", "draft a post on [topic]"
- "write the newsletter", "scrivi la newsletter"
- "write the guide", "scrivi la guida", "draft the white paper"
- "write the lead magnet PDF" (when format is a guide / white paper)

The orchestrator runs the **Brief readiness check** ([CLAUDE §6](CLAUDE.md)) before invoking. For blog content, the brief specifically requires: article job (see §5), primary topic/keyword, target length, CTA presence (yes/no + type if yes).

---

## 3. Required inputs

The specialist needs these to start. Missing critical inputs are escalated to the orchestrator.

**From the funnel brief** ([funnel-brief](core/strategic-frameworks/funnel-brief.md)):

- §3.3 Awareness Level — determines how much category-context the article needs to provide
- §3.5 Avatar reference — voice anchors, blocking beliefs, lived-experience details
- §3.6 Offer — full offer details (only if the article has a CTA to a specific offer)
- §3.7 Big Idea — if the article is part of a Big Idea campaign, the article expresses it
- §3.10 Reference pointers — which testimonials, transcripts, swipe rows to pull

**Blog-specific brief fields** (must always be present):

- **Article job** — Educate + soft CTA / Authority building / Competition destruction / Search traffic capture (see §5)
- **Primary topic / keyword** — the search term or core concept the article centers on
- **Target length** — Standard (800-2,500) / Guide (2,000-5,000) / White paper (3,000-10,000+) / Newsletter (variable)
- **CTA presence** — Yes (with destination + type) / No (pure authority/value article)
- **Position in funnel** — Top-of-funnel (cold reader) / Mid-funnel (nurturing) / Bottom-of-funnel (warm reader near conversion)

**From the brand wiki**:

- `brands/<brand>/brand-copy-rules.md` — voice (mandatory)
- `brands/<brand>/swipe.md` — brand-specific blog examples (if any) for voice calibration
- `brands/<brand>/transcripts/` — source material for founder anecdotes and signature opinions
- `brands/<brand>/testimonials.md` — proof rows (use sparingly in blog — one or two carefully placed)

**From the cross-specialist writing libraries** (read per the Fase 1 sequence in §9 — Fase 1 is the single normative pre-writing list):

- [feedback-rules](core/feedback-rules.md) — global user rules. Read together with `brand-copy-rules.md` at Fase 1 step 0 (brand rules override global).
- [writing-principles](core/writing/writing-principles.md) — SECTION A (principles) + SECTION B (anti-AI patterns) post-draft; §3 Gulpease + read-aloud in Fase 5
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — Gradualization + Camouflage are the blog's dominant levers (read at Fase 1 step 2)
- [emotional-intelligence](core/writing/emotional-intelligence.md) — **gated read, two branches** (see §9 Fase 1 step 3): mandatory when the brief names Emotional anchors; consulted anyway (max 3 entries) for emotionally-led moments when it doesn't

**From the section specialists** (read selectively):

- [headline-specialist](section-specialists/headline-specialist.md) — for blog title craft (SEO-friendly + curiosity-driven, dual job)
- [hook-specialist](section-specialists/hook-specialist.md) — for the article opening hook (first 2-3 sentences)
- [bullet-point-specialist](section-specialists/bullet-point-specialist.md) — if the article uses listicle structures, "what you'll discover" bullets, or fascination-style subhead lists

The blog does NOT typically need: lead-specialist (the blog "lead" is a hook + context, much shorter than a DR lead), marketing-thesis-specialist (blog articles rarely argue a full mechanism — when they do, it's brief), offer-specialist (only if the CTA section drives to an offer, and even then it's compressed), faq-specialist (FAQ format is rare in standard articles).

**From the copywriter (the request)**:

- Any specific angle or thesis to argue
- Any constraint on tone (more authoritative / more conversational / more provocative)
- Any user-provided swipe (takes priority)

---

# PART B — Format expertise

## 4. Core principles

### 4.1 — Give the WHY, sell the HOW

Same infotainment principle as email. Teach the concept, the framework, the insight — the product is the implementation tool. The article gives the reader real value (the WHY: why this matters, why current approaches fail, why a new understanding helps). The product enters as the implementation tool (the HOW: the brand's specific way of putting the insight into practice).

If the article tells the reader everything they need to know to implement on their own, the soft CTA fails. The article must leave them informed but not equipped — equipped is what the product delivers.

### 4.2 — Every article has ONE job

Before writing, define the job. Without a defined job, the article meanders and lands nowhere. Four jobs are possible — see §5 for each:

1. Educate + soft CTA — primary acquisition / nurturing job
2. Build authority — brand-positioning job
3. Destroy competitor approaches — competition-positioning job
4. Capture search traffic — SEO acquisition job

A single article serves ONE job dominantly. It can serve a secondary job lightly, but only if doing so doesn't compromise the primary one.

### 4.3 — Frontman voice

Blog articles are written as the brand's frontman sharing expertise — not as generic "content." First person, opinion, personality. The reader feels they're reading a specific person's thinking, not a generic explainer.

If the article could be published under any competitor's brand by swapping the byline, the voice is too generic. Voice comes from `brands/<brand>/brand-copy-rules.md` and the founder's transcripts.

### 4.4 — DR DNA

Even educational content uses direct-response principles:
- **Hook in the title** — the title must work both as SEO and as scroll-stopper
- **Open loops** — questions or claims that pull the reader forward
- **Fascination-style subheads** — every H2 advances the thesis or delivers value
- **Benefit-driven framing** — every section signals what the reader gets

A blog article should read like a long-form DR email — the reader is pulled paragraph to paragraph, never bored, never given a reason to leave.

### 4.5 — Substantial value, no padding

The reader judges the article by what they got out of reading. If the article is 1,500 words but the actual insight could fit in 200, the reader feels cheated.

The opposite trap: padding the article with filler ("In today's fast-paced world..." / "Many people don't realize..." / generic context paragraphs). Every paragraph must teach, persuade, or transition with voice — never fill space.

---

## 5. The 4 article jobs

Each article has one dominant job. The job shapes the structure, the tone, the CTA decision, and the SEO weight.

### 5.1 — Job 1: Educate + soft CTA

The article teaches a concept, framework, or insight relevant to the brand's category. At the end, a soft CTA points to the product as the natural implementation tool.

**Best for:** mid-funnel content. Reader is already in the category, looking to learn more, ready to consider a tool.

**Structural emphasis:** body weighted toward genuine teaching. CTA section is short, soft, integrated.

**Example CTA pattern:** *"If you want to apply this without piecing it together yourself, [product] walks you through the implementation step by step."*

### 5.2 — Job 2: Build authority

The article positions the brand as the authority on a topic. No CTA, or only a relational CTA ("comment below" / "subscribe to the newsletter for more"). The article's job is to leave the reader thinking: *"This brand really gets this."*

**Best for:** brand-building content. Often used on LinkedIn, Medium, industry publications, or as a permanent pillar piece on the brand's blog.

**Structural emphasis:** depth of analysis, original insight, strong personal opinion. Reader walks away with respect for the author/brand.

**No CTA or only a soft engagement CTA.** A direct-sale CTA on an authority piece undermines its credibility.

### 5.3 — Job 3: Destroy competitor approaches

The article dismantles a category-wide approach the competition uses. Not by naming competitors (never by name) — by attacking the MECHANISM their approach relies on.

**Best for:** Solution Aware / Product Aware audiences. Reader has tried the competitor's approach and is open to hearing why it fails.

**Structural emphasis:** mechanism critique (why the standard approach breaks), evidence (data, case studies, logical proof), bridge to the brand's different approach.

**CTA presence:** typically a direct CTA at the end, because the article has earned the right to pitch by destroying the alternative.

### 5.4 — Job 4: Capture search traffic

The article targets a specific search query and answers it directly. SEO comes first; persuasion is secondary (but still present).

**Best for:** top-of-funnel acquisition. Reader is searching for an answer; the article delivers it AND introduces the brand as the source.

**Structural emphasis:** keyword in title + H2s + first paragraph; comprehensive coverage of the search intent; internal links to other brand content.

**CTA presence:** soft, often a lead magnet ("download the full guide") rather than a product pitch. The reader didn't come to buy — they came to learn.

---

## 6. Article anatomy & components

The functional blocks of a blog article. Not all articles use all blocks — the job specifies which are present.

### 6.1 — Title

SEO-friendly but curiosity-driven. The title is the headline. Production uses [headline-specialist](section-specialists/headline-specialist.md) when the brief calls for headline candidates; for simpler articles, the blog-specialist can draft the title directly.

**Dual-job constraint:** the title must work both as a search-result link (concise, keyword-bearing) and as a hook (curiosity-driven, click-worthy). Tension between these jobs is normal — resolve by leading with the keyword phrasing and adding curiosity in the second half, or vice versa.

**Format options:**
- *"How to [result]"* — direct, SEO-strong
- *"Why [common belief] is wrong"* — provocation
- *"[Number] [things] that [result]"* — listicle SEO pattern
- *"The [adjective] guide to [topic]"* — guide / pillar piece pattern
- *"[Counterintuitive claim]: [supporting frame]"* — authority pattern

Length: under 60 characters if possible (SEO display limit), but readability/curiosity can override.

### 6.2 — Hook (first 2-3 sentences)

The first 2-3 sentences after the title. Use [hook-specialist](section-specialists/hook-specialist.md) for tested hook patterns.

**Critical rule — no throat-clearing.** Banned openings:
- *"In today's fast-paced world..."*
- *"Many people struggle with..."*
- *"As we all know..."*
- *"You may have heard that..."*

These signal generic content and lose the reader before the article starts. Open with an open loop, a counterintuitive statement, a specific scene, or a direct claim.

### 6.3 — Context (1-2 paragraphs)

Why this matters NOW. 1-2 paragraphs establishing why the reader should keep reading. Sources for context:
- Data point (a stat, a study, a recent industry shift)
- Trend observation (something the reader has noticed but not articulated)
- Personal observation (the frontman's lived experience with the topic)
- Story fragment (a brief scene that crystallizes the issue)

The context anchors the article in the reader's reality. It bridges the hook into the body.

### 6.4 — Body (the meat)

Organized in H2/H3 sections. Each section = one idea. Mix of: explanation, examples, stories, data, opinion.

**Subheads (H2/H3) must work as standalone fascinations.** A reader skimming only the subheads must be able to follow the article's thesis. Subheads that read like generic section labels ("Introduction" / "The Problem" / "The Solution") are blind — replace with specific, benefit-loaded phrasings.

**Subhead frequency:** every 200-300 words. Long unbroken text loses the skimmer.

**Paragraph length:** 1-4 lines max. The web reader skims; long paragraphs feel intimidating.

**Internal flow:** each H2 section opens with a hook (1-2 sentences setting up the section), delivers the meat (the teaching), and closes with a bridge to the next section.

### 6.5 — Bridge to product (optional)

If the article has a CTA: the product emerges as the logical tool for implementing what the article just taught. Same bridge principle as email — never an abrupt gear-shift.

**Pattern:** the body has just established WHY (the insight, the framework, the principle). The bridge says: *"Putting this into practice on your own is possible. Here's the shortcut: [product] does X, Y, Z."* The product feels like the natural completion of the article's argument.

If no CTA: skip this section. Article ends with §6.6 (summary or actionable takeaway).

### 6.6 — CTA section (optional)

Three CTA calibrations:

| Calibration | When | Pattern |
|---|---|---|
| **No CTA** | Pure authority pieces | Article ends with a summary or actionable takeaway. No sale, no link to product. |
| **Soft CTA** | Educate + soft CTA / Search traffic capture | *"If you want to go deeper, [product] walks you through the implementation step by step."* Single mention, embedded, no sales-page energy. |
| **Direct CTA** | Competition destruction (after destroying the alternative) | *"Get [product] here — [link]."* Direct but brief. The article has earned the right to pitch by destroying the alternative; don't squander it by over-selling. |

For lead magnets: the CTA often points to a free download rather than a paid product. Same principles apply.

### 6.7 — Closing / takeaway

Every article ends with closure. Three patterns:

- **Summary** — recap the key insight in one sharp sentence (good for educate-and-CTA articles)
- **Actionable takeaway** — give the reader one specific thing to do after reading (good for authority pieces)
- **Provocation / forward-pointing** — leave a question or claim the reader carries with them (good for thought-leadership / authority pieces)

---

## 7. Length variants — standard / guide / white paper / newsletter

### 7.1 — Standard blog article

- **Length:** 800-2,500 words (sweet spot: 1,500-2,000 for SEO + reader engagement)
- **Structure:** Title → Hook → Context → Body (3-6 H2 sections) → optional Bridge → optional CTA → Closing
- **Use case:** primary blog content, mid-funnel education, top-of-funnel SEO

### 7.2 — Guide

- **Length:** 2,000-5,000 words
- **Structure:** Title → Hook → Context → Table of contents → Body (5-10 H2 sections, deeper than standard) → Bridge → CTA → Closing
- **Use case:** lead magnets, pillar content, deep-dive topics

A guide adds a TOC (table of contents) at the top and uses more H2/H3 nesting to organize the depth. Examples can be longer; sections can include sub-bullets, sidebars, or "key insight" callouts.

### 7.3 — White paper

- **Length:** 3,000-10,000+ words
- **Structure:** Title → Executive summary → Hook → Context with data/research → Body (often with charts, references, case studies) → Implications → CTA (typically a consultation booking) → References
- **Use case:** B2B authority pieces, high-ticket markets, research-backed positioning

White papers are the most formal end of the spectrum. Tone is authoritative but still voice-driven. Includes external references (studies, reports). Often paired with a consultation CTA rather than a product pitch.

### 7.4 — Newsletter

- **Length:** variable (typically 300-800 words for high-frequency newsletters, longer for monthly deep-dives)
- **Structure:** follows email anatomy (see [email-specialist](format-specialists/email-specialist.md)) — Subject line + 5-block anatomy (Hook → Body → Bridge → CTA → P.S.)
- **Use case:** ongoing relationship-building with the brand's list

Newsletters straddle blog and email. When the brief specifies "newsletter", the blog-specialist follows email anatomy (subject line, 5-block) but may extend the body further than a standard email and include subheadings if length warrants it. **For pure email sequences, defer to [email-specialist](format-specialists/email-specialist.md).**

**Ownership line**: 5-block email anatomy owner: [email-specialist](format-specialists/email-specialist.md) §5 — this file applies only the length extension; on conflict, email-specialist wins.

---

## 8. SEO conventions

These are basic on-page SEO patterns the blog-specialist applies automatically — the copywriter does NOT need to provide keyword research beyond the primary topic/keyword in the brief.

### 8.1 — Title

Include the primary topic keyword naturally. Keep under 60 characters if possible (Google's display limit). Readability and click-worthiness can override the 60-char limit when warranted.

### 8.2 — Meta description

Write 1-2 sentences summarizing the article's value. Include the primary keyword. Under 155 characters (Google's display limit).

### 8.3 — URL slug

Short, keyword-rich, hyphenated. Drop articles ("the", "a", "an") and stopwords. Example: `why-diets-fail` (NOT `the-reason-why-most-diets-fail-and-what-to-do-about-it`).

### 8.4 — H2/H3 subheads

Include related/secondary keywords naturally — never force them. If a keyword breaks the readability of a subhead, rewrite the subhead and leave the keyword unforced.

### 8.5 — First paragraph

Mention the primary topic within the first 100 words. This signals topical relevance to search engines and reassures the reader they've landed on the right content.

### 8.6 — Internal links

If the brand has other content (articles, products, lead magnets), suggest where to link inline. Internal links keep readers on the brand's properties and signal site structure to search engines.

### 8.7 — Length

Minimum 800 words for SEO value (Google's quality signals favor substantial content). 1,500-2,500 is the sweet spot for most articles.

### 8.8 — Critical rule — SEO never overrides readability or persuasion

If a keyword makes a sentence awkward, REWRITE THE SENTENCE — don't force the keyword. SEO is a constraint, not a master. Articles optimized for keywords at the expense of voice read mechanical and lose both readers and rankings (modern search engines penalize keyword-stuffing).

---

# PART C — Operational workflow

## 9. Application protocol — blog-specific notes

The specialist applies the universal **5-phase protocol** defined in [writing-principles §2](core/writing/writing-principles.md). That protocol is the authoritative workflow — read it there, do not re-state it here.

The notes below specify what is **blog-specific** at each phase.

| Phase | Blog-specific notes |
|---|---|
| **Fase 1 — Pre-writing** | **This is the single normative pre-writing list** (§3 describes the expected inputs; this sequence governs). **0.** Read [feedback-rules](core/feedback-rules.md) (global rules) + `brands/<brand>/brand-copy-rules.md` (brand rules — they override global). These apply to every line you write and are re-verified at QA (writing-principles Fase 4d). **1.** Read brief sections §3 above, brand `swipe.md` (if blog examples exist), 1-2 transcripts for founder voice and signature opinions. **2.** Read [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — apply **Gradualization + Camouflage**, the blog's dominant levers: the editorial format borrows non-sales register (Camouflage), and the reader is led to conclude the thesis themselves (Gradualization). **3.** Emotional gate — read [emotional-intelligence](core/writing/emotional-intelligence.md): (a) MANDATORY when the brief's touchpoint block names Emotional anchors — read those entries only; (b) if the brief names no anchors and the piece includes emotionally-led moments (problem dramatization, hook, future pacing), consult the relevant entries anyway (max 3 per piece) and flag the missing anchors to the copywriter as a brief gap. **For Job 4 (Search traffic):** verify the primary keyword is well-defined in the brief; if not, ask the copywriter before proceeding. **For Job 3 (Competition destruction):** ensure the brief provides the specific competitor mechanism to attack (not just "competitors are bad"). |
| **Fase 2 — Drafting** | **Write the title and H2 subheads first** — verify the "subhead skimmer test" passes (the H2s alone tell the story) before drafting body. Then write the hook (no throat-clearing). Then draft body section by section. For Guides / White papers: build the TOC before the body. Bridge + CTA last, never first (the bridge depends on the body's argument). |
| **Fase 3 — Principles refinement** | Universal pass per [writing-principles SECTION A](core/writing/writing-principles.md). Blog-specific watch-points: **Principle 1 (One Thing)** — the article has ONE job (§5); every section traces to it. **Principle 6 (Conversational flow)** — bridges between H2 sections must have voice, never generic ("Now let me explain..."). **Principle 9 (First person)** — frontman speaks throughout; no slipping into "we" or third-person. |
| **Fase 4 — Anti-AI pass** | Universal pass per [writing-principles SECTION B](core/writing/writing-principles.md). Blog-specific hotspots: throat-clearing openings (banned per §6.2); generic transition phrases between H2s; rigid parallel triads in subheads ("Faster. Better. Easier."); generic CTAs ("Click here to learn more"). |
| **Fase 5 — Readability + Read-aloud + Subhead Skimmer Test** | Universal Gulpease + read-aloud per [writing-principles §3](core/writing/writing-principles.md). **Then add the Subhead Skimmer Test (blog-specific)**: read only the title + H2/H3 subheads + bold phrases + CTA text in sequence. Does this convey the article's full thesis to a skimmer? If not, fix the subheads before delivering. The subhead is the article in miniature. |

---

## 10. Output formats

### Structure proposal (when planning before writing)

```
PROPOSED ARTICLE — [Topic] for [Brand]

Article job: [Educate + soft CTA / Authority / Competition destruction / Search traffic capture] (from §5)
Primary keyword: [topic keyword from brief]
Target length: [word count or range]
Format: [Standard blog / Guide / White paper / Newsletter] (from §7)
CTA: [No / Soft / Direct] (from §6.6)
CTA destination: [URL / product / lead magnet / "N/A"]
Position in funnel: [Top / Mid / Bottom]
Reference swipe: [name or "none — using framework"]

OUTLINE:

H1 (Title): [proposed title — leads with keyword + curiosity, under 60 chars if possible]
  - Hook approach: [pattern + 1-line description]

H2: [Subhead 1 — must work as standalone fascination]
  - Key point: [what this section teaches]
  - Evidence / example used: [optional]

H2: [Subhead 2]
  - Key point: [...]

H2: [Subhead 3]
  - Key point: [...]

[Continue for all H2 sections — typically 3-6 for standard, 5-10 for guide, 10+ for white paper]

[BRIDGE section if CTA present:]
H2: [Subhead — bridges into product]
  - Bridge approach: [how the body argument leads naturally to the product]

[CTA section if CTA present:]
H2: [Subhead — CTA framing]
  - CTA copy: [exact text]

Closing pattern: [Summary / Actionable takeaway / Provocation]

SEO METADATA:
Meta description: [text, under 155 chars, includes primary keyword]
Slug: [url-slug, hyphenated]
Internal links suggested: [list of brand content to link to inline]

Subhead skimmer test result: [H1 + all H2s in sequence — does the argument hold?]
```

### Writing execution

```
ARTICLE — [Topic]

# [Title]

[Hook — 2-3 sentences, no throat-clearing]

[Context — 1-2 paragraphs anchoring the reader in reality]

## [H2 Subhead 1]

[Body — paragraphs 1-4 lines, voice-driven, with internal hooks and bridges]

## [H2 Subhead 2]

[Body — ...]

## [H2 Subhead 3]

[Body — ...]

[Continue for all sections]

[If Bridge present:]
## [H2 — Bridge subhead]

[Body — establishes product as logical implementation tool]

[If CTA present:]
## [H2 — CTA subhead]

[CTA copy with link]

[Closing — summary / takeaway / provocation]

---
**Meta description:** [text]
**Slug:** `[url-slug]`
**Internal links suggested:** [list with anchor text suggestions]
```

---

# PART D — Quality control & references

## 11. Common pitfalls

Distilled from extensive blog practice. Watch for these.

### 11.1 — Article with no defined job

The most common pitfall. Writer starts drafting without knowing whether the article is educational, authority-building, competition-destruction, or SEO acquisition. Result: meanders, lands nowhere, the reader closes the tab.

**Fix:** define the job (§5) before the first word. The job dictates the structure, CTA decision, and tone.

### 11.2 — Throat-clearing openings

"In today's fast-paced world..." / "Many people struggle with..." / "As we all know..." These openings signal generic content and lose the reader instantly.

**Fix:** open with a hook (per [hook-specialist](section-specialists/hook-specialist.md) patterns). Open loop, counterintuitive claim, specific scene, direct stat.

### 11.3 — Blind subheads

"Introduction" / "The Problem" / "Conclusion" — subheads that label sections instead of advancing the thesis. The skimmer gets nothing.

**Fix:** every subhead must work as a standalone fascination. The skimmer reading only subheads must follow the article's argument.

### 11.4 — Walls of text

Paragraphs over 4-5 lines = web reader skips. Intimidating visual signal.

**Fix:** paragraphs 1-4 lines max. White space between every paragraph. Use subheads every 200-300 words.

### 11.5 — Padding and filler

Adding generic context paragraphs to hit a word count. Every paragraph should teach, persuade, or transition with voice — never fill space.

**Fix:** apply the deletion test ([writing-principles §5](core/writing/writing-principles.md), Question 3: *"If I delete this sentence, do I lose something real?"*). If a paragraph can be cut without losing anything real, cut it.

### 11.6 — Telling everything (failed soft CTA)

The article teaches the reader so thoroughly that they don't need the product. Soft CTA fails because the reader is equipped to implement on their own.

**Fix:** give the WHY (insight, framework, principle). Sell the HOW (the product as implementation tool). Leave the reader informed but not equipped.

### 11.7 — Generic frontman voice

The article reads like content that could be published under any brand. No opinion, no personality, no signature angle.

**Fix:** load the brand's voice via `brands/<brand>/brand-copy-rules.md` and transcripts. Inject opinion. The frontman has takes on the topic — show them.

### 11.8 — SEO-stuffed, persuasion-starved

The article is optimized for the keyword (mentioned 47 times) but reads mechanical. Voice is sacrificed for keyword density. Modern search engines penalize this, AND readers bounce.

**Fix:** SEO is a constraint, not a master (per §8.8). Mention the keyword naturally in title + first paragraph + a few H2s. Don't force it elsewhere.

### 11.9 — Authority piece with a sales CTA

The article is positioned as authority-building, then ends with "Buy now!" The CTA undermines the authority — the reader feels they were tricked into reading a long sales pitch.

**Fix:** authority pieces have NO CTA or only a soft engagement CTA (newsletter signup / comment prompt). Save direct CTAs for educate-and-CTA or competition-destruction articles.

### 11.10 — Competitor names in destruction articles

Job 3 (competition destruction) attacks by MECHANISM, never by competitor name. Naming competitors invites legal risk and looks insecure.

**Fix:** describe the standard category approach without naming any specific competitor. The mechanism critique stands on its own; readers can infer who you mean.

### 11.11 — Newsletter with no email anatomy

The brief calls for a newsletter, but the specialist writes a standard blog article (no subject line, no P.S., no 5-block structure).

**Fix:** newsletters follow email anatomy (subject line + 5-block: Hook → Body → Bridge → CTA → P.S.). See [email-specialist](format-specialists/email-specialist.md) for the canonical pattern.

### 11.12 — Missing meta description / slug

The article is delivered without on-page SEO metadata. Editor has to invent them, which results in poor SEO performance.

**Fix:** every blog deliverable includes meta description (under 155 chars, keyword present) and URL slug (kebab-case, short).

---

## 12. Revision checklist

Run this before delivering. **Blog-specific only** — the universal writing-quality checks (Gulpease, em-dash count, anti-AI patterns, read-aloud) are handled during Fase 3-5 per [writing-principles](core/writing/writing-principles.md).

**Strategy & job**
- [ ] Article has ONE defined job (§5)?
- [ ] Job is supported by structure (educate / authority / competition destruction / SEO)?
- [ ] CTA decision matches the job?
- [ ] Position in funnel (top / mid / bottom) influences depth and CTA strength?

**Title & hook**
- [ ] Title works as SEO link AND scroll-stopper?
- [ ] Primary keyword naturally in title?
- [ ] Title under 60 chars (or override justified)?
- [ ] Hook is NOT throat-clearing?
- [ ] First 100 words mention primary topic?

**Subheads & second-level reading**
- [ ] All H2 subheads work as standalone fascinations?
- [ ] No blind subheads ("Introduction" / "The Problem")?
- [ ] Subhead frequency every 200-300 words?
- [ ] Subhead Skimmer Test passes (H1 + H2s in sequence convey full thesis)?

**Body**
- [ ] Each H2 section opens with internal hook?
- [ ] Each section delivers ONE idea?
- [ ] Bridges between sections have voice (no generic "moreover" / "furthermore")?
- [ ] Paragraphs 1-4 lines max?
- [ ] White space between paragraphs?
- [ ] No padding / filler — every paragraph earns its place?

**Voice**
- [ ] Frontman voice consistent (first person, opinion, personality)?
- [ ] Voice matches `brands/<brand>/brand-copy-rules.md`?
- [ ] Article would NOT work under a competitor's byline?

**WHY/HOW (for educate + soft CTA)**
- [ ] Article gives the WHY thoroughly (insight, framework, principle)?
- [ ] Article does NOT give the full HOW (product remains the implementation tool)?
- [ ] Soft CTA flows naturally from the body's argument?

**SEO**
- [ ] Meta description present (under 155 chars, keyword included)?
- [ ] URL slug present (kebab-case, short)?
- [ ] Internal links suggested where relevant?
- [ ] Article length ≥ 800 words?
- [ ] No keyword stuffing?

**Format-specific**
- [ ] For Guide / White paper: TOC present, deeper section structure?
- [ ] For Newsletter: email anatomy (subject line + 5-block) followed?
- [ ] For Competition destruction: no competitor names, mechanism critique only?
- [ ] For Authority piece: no direct sales CTA?

**Brand fidelity**
- [ ] feedback-rules (global + brand) re-scanned on the final draft — no rule violated?
- [ ] No invented facts (everything from brief or brand wiki)?
- [ ] Testimonials used sparingly (one or two carefully placed, if any)?
- [ ] No proprietary external jargon exposed to the reader?

---

## 13. Cross-references

- [CLAUDE](CLAUDE.md) — orchestrator, runs Brief readiness check before invoking this specialist
- [strategist](skills/strategist.md) — produces the funnel brief this specialist consumes
- [funnel-brief](core/strategic-frameworks/funnel-brief.md) — input template
- [writing-principles](core/writing/writing-principles.md) — universal style layer (SECTION A + B post-draft; §3 Gulpease + read-aloud in Fase 5)
- [feedback-rules](core/feedback-rules.md) — global user rules; read at Fase 1 step 0 with `brand-copy-rules.md` (brand overrides global), re-scanned at QA (writing-principles Fase 4d)
- [emotional-intelligence](core/writing/emotional-intelligence.md) — gated read, two branches (see §9 Fase 1 step 3): mandatory when the brief names Emotional anchors; consulted anyway (max 3 entries) for emotionally-led moments when it doesn't
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — Gradualization + Camouflage dominant for blog (the editorial format borrows non-sales register) — applied at Fase 1 step 2
- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — blog articles typically install opening rings (problem awareness, missing 1%) and brand beliefs (understands, competence)
- [headline-specialist](section-specialists/headline-specialist.md) — for blog title craft
- [hook-specialist](section-specialists/hook-specialist.md) — for the article opening hook
- [bullet-point-specialist](section-specialists/bullet-point-specialist.md) — for listicle structures or fascination-style subhead lists
- [email-specialist](format-specialists/email-specialist.md) — sibling specialist (newsletters follow email anatomy)
- [lp-specialist](format-specialists/lp-specialist.md) — sibling format specialist (pattern reference for self-contained specialist files)
- [advertorial-specialist](format-specialists/advertorial-specialist.md) — sibling format specialist (advertorials and blog articles share editorial DNA)
- `brands/<brand>/brand-copy-rules.md` — voice (mandatory)
- `brands/<brand>/swipe.md` — brand-specific blog examples (if any)
- `brands/<brand>/transcripts/` — source material for founder anecdotes and signature opinions
- `brands/<brand>/testimonials.md` — proof rows (use sparingly)

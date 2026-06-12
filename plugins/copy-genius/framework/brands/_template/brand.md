---
brand: <brand-slug>
brand_name: "<Display Name>"
language: <it | en | es | ...>
market: <country / region>
business_type: <D2C | coaching | SaaS | training | services | ...>
has_frontman: <true | false>
---

# BRAND — <Brand Name>

> The brand identity file. Read by the orchestrator and writing specialists before any copy task.

---

## Niche & Market Category

> One sentence. What this brand IS, who it serves, where it sits in the market.

[<Brand> is a <category of solution> for <audience> in <market context>.]

---

## Brand Identity

[3-5 lines: what the brand IS, how it's positioned, what perception it wants the customer to hold. Strategic identity, not marketing fluff. Works for both founder-led brands and corporate-identity brands.]

---

## Brand & Founder Story

> The origin and evolution narrative. The "why this brand exists" arc.
>
> **Tip for structuring this section: consider the Hero's Journey framework** — ordinary world → call to adventure → crisis/threshold → mentor or pivotal insight → trials → revelation/discovery → return with the gift (the brand's offer to the world). This framework gives the origin story emotional gravity and provides copy-ready beats for VSLs, advertorials, About pages, founder letters.
>
> For corporate-identity brands without a single founder narrative, apply the same arc to the BRAND as the protagonist (its founding moment, its market struggle, its breakthrough, its mission).

[The narrative. 1-3 paragraphs. Real, not marketing copy. Sensory details welcome.]

---

## Anecdotes & Cultural References

> Recurring anecdotes, scenes, and cultural references that the founder/brand reuses across communications. Raw material for hooks, leads, callbacks, and emotional resonance. NOT the origin story — these are the stories ALREADY part of the brand's verbal repertoire.

### Recurring anecdotes
- **[Scene/anecdote title]** — [3-5 lines: when, where, what happened, the lesson or punchline. Note when and how the brand typically references this.]
- **[Scene/anecdote title]** — [...]
- **[Scene/anecdote title]** — [...]

### Cultural references
> Books, films, historical figures, public events the brand quotes or references regularly. These shape the intellectual texture of the brand's communication.

- [Reference — e.g., book / film / figure / event] — [how the brand uses it]
- [Reference] — [how the brand uses it]

---

## Frontman / Founder (optional)

> Fill this section ONLY if the brand has an active human face (frontman, public founder, or named protagonist who appears in the copy).
> Skip or remove if the brand has a corporate identity with no visible frontman.
> For brands with an iconic past founder (e.g., the founder is no longer active but their legacy still drives the brand), document the legacy here.

**Name:** [name]
**Background:** [1 line — profession / experience / what they did before]
**Role in the brand now:** [active CEO / spokesperson / ambassador / legacy founder / etc.]
**Credentials:**
- [Measurable result — numbers only, no narrative]
- [...]
- [...]

**Voice & persona:** [1-2 lines: how the frontman comes across — energetic, professorial, irreverent, etc. This shapes how copy that's written "in their voice" sounds.]

---

## USP — Unique Selling Proposition

[2-5 lines: how the brand positions itself in the market. What makes it different. The strategic positioning the customer should perceive — NOT the technical mechanism (that's for the copywriter to weave in).]

**We stand FOR:**
- [What the brand champions — 1 line]
- [...]
- [...]

**We stand AGAINST:**
- [What the brand opposes in the industry — 1 line]
- [...]
- [...]

---

## Positioning

**Competes against (by category):**
- [Category 1] — [why those competitors fail, 1 line]
- [Category 2] — [why they fail, 1 line]

**Core differentiation:**
[1-2 lines]

**Implicit enemy in communication:**
[Who or what the brand fights against — the villain in the narrative]

---

## Credibility Assets

> Concrete trust signals built up over time. Numbers, mentions, scale, longevity. NOT testimonials (those live in `testimonials.md`).
>
> Examples of what belongs here:
> - Scale metrics (e.g., "X reviews on a public review platform", "over N users on the platform", "N customers served")
> - Longevity (e.g., "active in the market since YEAR")
> - Press mentions (e.g., "featured on [media outlets]")
> - Certifications, awards, public recognitions
> - Notable partnerships or institutional endorsements

- [Asset — specific number or fact]
- [Asset]
- [Asset]
- [Asset]

**Testimonials**: see [testimonials.md](testimonials.md) for the full collection (illustrious testimonials first, regular testimonials below).

---

## Brand Wording (optional — only if the brand has a distinct verbal identity)

> Brand-specific expressions, ways of speaking, inside jokes. NOT the market language (that lives in `avatars/<segment>.md` files). This is HOW THIS BRAND speaks — its verbal signature.
> Use moderately in copy. Spices, not base.
> Leave empty or delete the section if the brand doesn't have a distinctive verbal identity.

### Recurring expressions / ways of speaking
- "[expression]" — [meaning / when used]
- "[expression]" — [meaning / when used]

### Inside jokes (community language)
- "[term]" — [origin / what it means inside the community]
- "[term]" — [origin / what it means]

### Things the brand NEVER says
- [type of phrase to avoid] — [why]
- [...]

---

## Files in this brand

> Hub navigation. Every brand folder contains these files. Click any link to navigate.
> Rename these links when you create the real segment/competitor files (e.g. `avatars/avatar.md` → `avatars/<segment>.md`).

**Brand foundation**:
- [brand-copy-rules](brand-copy-rules.md) — brand-specific copy rules and voice guidance
- [products](products.md) — product catalog
- [offers](offers.md) — offer configurations
- [swipe](swipe.md) — swipe library (structural skeletons for the brand)
- [testimonials](testimonials.md) — testimonials library

**Audience & competition**:
- [avatar](avatars/avatar.md) — primary avatar profile (extend with more segments as needed)
- [competitor](competitors/competitor.md) — competitor profiles (extend with more competitors)

**Operations**:
- [procedure](procedures/procedure.md) — operational procedures and SOPs
- [transcript](transcripts/transcript.md) — sales call transcripts, interviews, founder talks
- [funnel-briefs](funnel-briefs/README.md) — folder index; contains one file per funnel produced by the Strategist (`<funnel-slug>-v<N.N>.md`)

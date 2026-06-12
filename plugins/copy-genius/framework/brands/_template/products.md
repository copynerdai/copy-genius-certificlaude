---
brand: <brand-slug>
---

# PRODUCTS — <Brand Name>

> All products in the brand catalog. Each product is documented as a "product card" below.
> Offers (bundling, special pricing, urgency, guarantee, bumps, OTOs) live in `offers.md` and reference products by their slug.
> To add a new product: append a new `## PRODUCT — <slug>` section below and add a row to the Index.

---

## Index

| Slug | Product name | Category | Funnel role | Status | Public price |
|---|---|---|---|---|---|
| `<slug>` | <Display Name> | <category> | <front-end / upsell / backend / lead magnet / ...> | <active / archived / coming soon> | <amount> |
| `<slug-2>` | <Display Name 2> | ... | ... | ... | ... |

---

## PRODUCT — `<slug>`

### Snapshot
- **Name**: <Display Name>
- **Category**: [supplement / course / coaching / SaaS / physical product / ebook / lead magnet / event / service / etc.]
- **Delivery**: [shipped / digital download / live training / done-for-you / SaaS / subscription / etc.]
- **Funnel role**: [front-end / upsell 1 / upsell 2 / backend / subscription / lead magnet / tripwire / etc.]
- **Status**: [active / archived / coming soon]

### Pricing
> Every product MUST have both fields filled. `offers.md` can override with bundle pricing, discounts, or OTOs — what's here is the **standard reference**.
>
> Example: a course with stated value €297 sold publicly at €97 → stated value €297, public price €97.
> For free lead magnets: stated value €X, public price "Free" or €0.
> For consultative/custom-priced products: use "On request" in either field if not public.

- **Stated value**: <currency + amount> — what the product is "worth" (used to anchor perceived deal)
- **Public price**: <currency + amount> — the default selling price

### What it is
[1-2 lines: what the customer actually gets — the tangible deliverable]

### Selling proposition
[1-2 lines: the core promise of THIS product — the transformation the buyer experiences]

### Key selling points
> The 3-5 strongest "headline reasons" to buy this product. Copy-ready.

1. [Selling point — 1 line]
2. [Selling point — 1 line]
3. [Selling point — 1 line]
4. [Selling point — 1 line]
5. [Selling point — 1 line]

### Benefits
> What the customer GAINS in their life.

- [Benefit — 1 line]
- [Benefit — 1 line]
- [Benefit — 1 line]
- [Benefit — 1 line]
- [Benefit — 1 line]

### Pain points this product solves
> The specific problems the customer was suffering BEFORE buying.

- [Pain point — 1 line]
- [Pain point — 1 line]
- [Pain point — 1 line]

### Key features / ingredients / differentiators
> What makes this product stand out at the product level — components, ingredients, methodology, technology, format, experts involved.

- [Feature/ingredient — 1 line: what it is + why it matters]
- [...]
- [...]

### Experts / Coaches / Creators (if applicable)
> People featured inside the product — instructors, contributors, named experts.

- **<Name>** — [1 line: credentials + what they teach/contribute]
- **<Name>** — [1 line]

### Notes
> Anything else: regulatory constraints, certifications, awards, best-seller status, seasonal availability, intellectual property, regulatory disclaimers.

[Notes]

---

## PRODUCT — `<slug-2>`

(same structure as above)

---

## Related

- [brand](brand.md) — brand foundation
- [offers](offers.md) — offers built on these products
- [avatar](avatars/avatar.md) — audience these products serve

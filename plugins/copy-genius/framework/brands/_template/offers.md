---
brand: <brand-slug>
---

# OFFERS — <Brand Name>

> All offers — the way products from `products.md` are packaged and sold. Each offer can reference one or more products, add bumps/OTOs/downsells/bonuses, and define pricing, guarantee, and urgency.
>
> **Scope**: this file holds OFFER MECHANICS ONLY. Strategic info (why this offer, who it targets, awareness level, big idea, chain of beliefs, attack angles, objections, proof) lives in `funnel-briefs/<funnel>.md`.
>
> To add a new offer: append a new `## OFFER — <slug>` section below and add a row to the Index.

---

## Index

| Slug | Offer name | Products included | Type | Front-end price | Status |
|---|---|---|---|---|---|
| `<slug>` | <Display Name> | `<product-slug-a, product-slug-b>` | <single / bundle / launch / seasonal / upsell-stack / continuity / ...> | <amount> | <active / archived / scheduled> |
| `<slug-2>` | ... | ... | ... | ... | ... |

---

## OFFER — `<slug>`

### Snapshot
- **Name**: <Display Name>
- **Type**: [single product / bundle / launch / seasonal / upsell-stack / continuity / etc.]
- **Status**: [active / archived / scheduled]
- **Active period** (if time-bound): from <date> to <date> — leave blank if evergreen
- **Compatible avatars** (optional cross-reference): `[avatar-slug-1, avatar-slug-2]`

### Products in this offer
> List products from `products.md` by slug. Order: front-end first, then add-ons.

- `<product-slug>` — [role: front-end / main / add-on / bonus-content]
- `<product-slug>` — [role]

### Pricing
- **Total stated value of products**: <currency + amount> — [sum of stated values from products.md]
- **Front-end offer price**: <currency + amount> — the main price shown in advertising
  - **Payment options** (if applicable): [one-time / installments — specify plan, e.g., "€97 × 3"]
- **Customer savings**: <currency + amount> — [stated value − offer price]

### Bumps (order-page add-ons)
> Optional. One-click add-ons offered on the order page itself. Leave the section empty or remove if none.

**Bump #1**
- Name: <name>
- Price: <amount>
- Quantity / format: <e.g., "1-month supply", "5 sessions", "PDF download">
- Stated value: <amount>
- Savings vs stated value: <amount>
- Reason why (why it's offered alongside the main): [1 line]

**Bump #2**
- (same structure)

### OTOs / Post-purchase upsells
> Optional. Offers shown AFTER purchase confirmation. Leave empty or remove if none.

**OTO #1**
- Name: <name>
- Price: <amount>
- Quantity / format: <details>
- Stated value: <amount>
- Savings: <amount>
- **OTO bump** (optional add-on on the OTO page): <if any>

**OTO #2**
- (same structure)

### Downsell
> Optional. Lower-priced alternative shown if the main offer or OTO is declined. Leave empty or remove if none.

- Name: <name>
- Price: <amount>
- Quantity / format: <details>
- Stated value: <amount>
- Savings: <amount>

### Bonuses
> Optional. Free items included to increase perceived value of the stack. Leave empty or remove if none.

- **<Bonus name>** — Stated value: <amount> — [what it is, 1 line]
- **<Bonus name>** — Stated value: <amount> — [...]

### Total cart value
- **Total perceived value (full stack)**: <currency + amount> — [sum of all stated values: main + bumps + OTOs + downsell + bonuses, if all taken]
- **Maximum cart price (if customer takes everything)**: <currency + amount>

### Guarantee
- **Type**: [satisfaction (money-back) / results-based / full refund / partial refund / conditional / other]
- **Duration**: [e.g., 7 days, 30 days, 60 days, 1 year, lifetime]
- **Branded name** (optional): "<name of the guarantee, e.g., '100% Money-Back Guarantee'>"
- **Conditions / exclusions** (optional): [any specific terms]

> Note: longer guarantee periods often produce FEWER refunds than short ones (the "long horizon" effect). Conditional guarantees ("must complete the program / use the product for X days") can further lower refund rates while raising perceived risk-reversal.

### Urgency / Scarcity
> Reasons must be logical and real. Fake urgency erodes trust over time.

- **Type**: [limited stock / limited seats / deadline / launch window / seasonal / price increase / cohort closing / other]
- **Specific limit**: <e.g., "100 units only", "ends Friday at midnight", "50 seats", "price rises to €X on date Y">
- **Reason why** (logical justification): [1-2 lines — WHY this limit exists, not just that it exists]

### Notes
> Anything else relevant: regulatory considerations, fulfillment timing, payment processor specifics, special conditions, currency notes, geographic restrictions.

[Notes]

---

## OFFER — `<slug-2>`

(same structure as above)

---

## Related

- [brand](brand.md) — brand foundation
- [products](products.md) — products these offers sell
- [testimonials](testimonials.md) — proof of offer outcomes
- [funnel-briefs](funnel-briefs/README.md) — folder containing the funnel briefs that channel these offers

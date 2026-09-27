# React Bits Pattern Selection Playbook

Use this as the operational bridge between the React Bits reference catalog and the repository's original HTML workflow.

## 1. Think in layers

Select patterns in this order:

1. **Page intent** - what must the user understand or do?
2. **Page composition** - which information jobs deserve sections?
3. **Block family** - Hero, Features, Bento, Social Proof, Pricing, FAQ, etc.
4. **Interaction primitive** - text effect, background, gallery, card, cursor, shader, etc.
5. **Motion system** - entrance, scroll, hover, transition.
6. **Application UI** - only when the page is a product/app surface.
7. **Template/recipe reference** - only when the whole-page structure benefits from it.
8. **Harmonization** - make every selected pattern look like one product.

## 2. Section selection matrix

| User need | Primary React Bits reference |
|---|---|
| Explain product immediately | Hero |
| Explain capabilities | Features or Bento |
| Show evidence | Social Proof or Stats |
| Explain process | How It Works |
| Resolve objections | FAQ |
| Compare alternatives/plans | Comparison |
| Monetize | Pricing |
| Capture interest before launch | Waitlist |
| Show work/product | Showcase |
| Explain company | About |
| Introduce people | Profile |
| Convert at the end | CTA |
| Get an enquiry | Contact |
| Download/install | Download |
| Publish content | Blog |
| Sell products | Ecommerce |
| Product interface | App UI families |

## 3. Signature rule

Every original page should have one primary React-Bits-inspired signature:

- typographic;
- spatial;
- atmospheric;
- interactive;
- media-driven;
- data-driven;
- or motion-driven.

Do not choose five signatures. That produces a theme park.

## 4. Animation budget

Prefer:

- 1 primary entrance sequence;
- 1 primary scroll behavior;
- 1-3 meaningful interactive moments;
- subtle hover/focus transitions.

Avoid:

- every word animating;
- every card floating;
- multiple competing marquees;
- constant cursor effects;
- full-page WebGL unless the concept actually depends on it.

## 5. Translation into HTML + Tailwind + Alpine + GSAP

React Bits pattern -> local implementation:

- React component -> semantic HTML component/partial.
- Tailwind variant -> Tailwind utilities in the page.
- React state -> Alpine local state where state is needed.
- Motion/scroll animation -> GSAP timelines/ScrollTrigger.
- WebGL/shader -> only if a lightweight equivalent is not sufficient and performance permits.
- Component props -> CSS variables, data attributes, or small Alpine state.
- React composition -> semantic page sections and reusable HTML patterns.

Do not add React just to imitate a React library.

## 6. Page recipes

Use these as structural hints:

### Agency Homepage
Typical reasoning:
positioning -> selected work -> capability/process -> people/proof -> enquiry.

### Product Launch Page
Typical reasoning:
announcement -> product idea -> hero/product reveal -> capabilities -> proof -> launch mechanics -> waitlist.

### SaaS Homepage
Typical reasoning:
navigation -> positioning -> product proof -> capabilities -> workflow -> evidence -> pricing/objections -> CTA -> footer.

The exact sequence should change when the supplied business objective requires it.

## 7. Design skill selection

Choose by business and content, not by trend:

- Apple Minimal: premium product clarity, hardware, refined SaaS.
- Corporate Trust: enterprise, finance, healthcare, security, procurement-heavy offers.
- Editorial: media, culture, research, agencies, story-led brands.
- Luxury Serif: hospitality, property, fashion, premium services.
- Neobrutalism: expressive products, developer/creative audiences, playful brands.
- Playful Motion: consumer products and energetic experiences.
- Swiss Grid: technical, structured, data-rich, professional products.
- Terminal Dark: developer tools, infrastructure, technical software.

Hybridize only when the hybrid is conceptually coherent.

## 8. Anti-pattern

Do not implement:

Hero block + Bento block + Social Proof block + Pricing block + FAQ block simply because all are available.

Instead:

1. determine the user's decision path;
2. choose the smallest set of sections that advances it;
3. select patterns that share a visual grammar;
4. harmonize them;
5. remove anything that exists only because the catalog contains it.

## 9. Verification

After implementation, explicitly check:

- the visual signature survives without animation;
- animation improves hierarchy;
- no section feels imported from a different product;
- mobile does not become a compressed desktop;
- pointer effects have non-pointer alternatives;
- reduced motion is respected;
- content is accessible without visual effects;
- no React Bits dependency was introduced unnecessarily;
- if real React Bits registry assets were installed, the project has legitimate access and the installed source is tracked normally.

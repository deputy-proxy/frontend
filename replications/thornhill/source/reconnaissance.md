# Thornhill source reconstruction

## Reference
- URL: https://thornhill.framer.website/
- Replication ID: thornhill
- Source viewport: 1920�1080
- Source document: 1920�6759
- Framer publication observed in September 2026.

## Source evidence
The reference HTML and published SSR CSS were inspected before implementation. The source exposes desktop, tablet and mobile variants at approximately 1200px and 810px breakpoints.

### Page structure
1. Fixed navigation
2. Hero
3. Welcome
4. What We Do / practice areas
5. In Numbers
6. Featured insight: Capital in a New Cycle
7. News & Insights
8. Counsel Without Compromise CTA
9. Footer

### Hero
- Background: #080808.
- Height: 100vh on desktop/tablet, 97vh on mobile.
- Hero image: O4w18BnFEvtJnnyGxSS53HqYjE.jpg, 2560�1440.
- Image uses cover, object-position center top, initial source transform scale(1.1).
- Dark overlays: #080808 mix-blend-darken, horizontal gradient and bottom gradient.
- Inner max width: 1600px.
- Desktop horizontal padding: 40px; mobile: 16px.
- Content is bottom aligned.
- Top border: 1px, with 32px top padding.
- Bottom padding: 98px desktop, 20px mobile.
- Title:+�u���\Counsel Without Compromisk�u���].
- Supporting copy: �w^~)�tThornhill is a global law firm with expansive international coverage.��y��y�
- CTA links to /contact.

### Navigation
- Fixed, 1200px desktop container.
- Wordmark width: 90px.
- Links: What We Do, Our Firm, People, Insights, Contact.
- Mobile collapses to a compact menu.
- Source uses separate responsive Framer variants.

### Typography
- Display serif: Sentient, weight 300.
- Body/UI sans: TASA Orbiter.
- Main h3 style: 48px desktop, 40px tablet, 32px mobile; weight 300; -0.04em tracking; 1.2em line height.
- Practice titles: 26px desktop, 24px tablet, 22px mobile; weight 300; -0.03em tracking; 1.3em line height.
- UI/body: TASA Orbiter, 12�w^~)�w14px typical sizes.
- Primary colors: #fafaf9 / #f9f5eb, #080808 / #0d0d0d, #16231b, #e5e4de, #2e5a4b, #8f8b85.

### What We Do
- Light background.
- Four repeated practice cards: Private Capital, Private Wealth, M&A, Disputes.
- Desktop card geometry exposed by CSS: 602�360 with 28px internal padding.
- Tablet uses two columns; mobile stacks.
- Cards use photographic imagery and bottom-aligned serif titles.

### In Numbers
- Light section with �w^~)�tIn Number{�u���] label and a three-value presentation.
- Exact numerical values were not sufficiently exposed as stable semantic source facts, so values in implementation are explicitly treated as inferred.

### Featured insight
- Heading:+�u���\Capital in a New Cyclf��y��y�.
- Editorial text/image two-column composition.
- CTA links to Private Capital.

### News & Insights
- Heading:"��y��y�News & Insight{�u���].
- Lead article: �w^~)�tThe Macroeconomic Backdrop to Private Capital Markets�w^~)�u.
- Other source titles include Rachel Goodman, a new Private Wealth partner, and a technology founders shareholder claim.
- Image-led editorial cards.

### CTA
- Source heading: �w^~)�tCounsel Without Compromise�w^~)�u.
- CTA links to /contact.
- Dark/green treatment.

### Footer
Four menu columns:
- What We Do: Overview, Private Capital, Private Wealth, M&A, Disputes, Case Studies
- Our Firm: About, People, Careers, Insights
- Connect: Contact Us, LinkedIn, YouTube, X
- Legal: Privacy, Terms
Bottom line includes+�u���\Template by Wireframe�w^~)�u and �w^~)�t� Copyright 202;�u���].

## Assets
Locally downloaded source assets include the Thornhill SVG wordmark, hero, practice/news imagery and source fonts. All implementation-critical images and fonts are local.

## Responsive mapping
- Desktop: >=1200px.
- Tablet: 812��y��y�1199.98px.
- Mobile: <=809.98px.
- Main desktop content width: 1200px.
- Tablet wrapper: 810px.
- Mobile wrapper: 390px.
- Major grid layouts collapse on mobile.
- Hero height changes to 97vh on mobile.
- Footer switches from four-column horizontal structure to stacked layout.

## Runtime
Source hero and text elements use Framer appear/transform behavior. Implementation reproduces the observable reveal concept locally with GSAP and uses Alpine.js for the mobile menu. Source-site runtime JavaScript is not reused.

## Evidence confidence
- HIGH: hierarchy, breakpoints, typography families, colors, hero geometry, major assets, headings, navigation, footer.
- MEDIUM: exact section heights outside directly exposed CSS, numerical values in In Numbers.
- LOW: exact Framer animation timing/easing.

## Screenshot independence gate
PASS. Another engineer can reproduce the major structure, styling system, assets, typography and responsive model from this specification without using the source screenshot as a design specification. Low-confidence animation details remain explicitly documented.

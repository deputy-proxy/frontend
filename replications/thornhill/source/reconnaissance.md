# Thornhill source reconnaissance

## Reference

- URL: https://thornhill.framer.website/
- Replication ID: `thornhill`
- Source platform: Framer, confirmed by the published template and live preview.
- Source capture status: **BLOCKED**. The required Screenshot MCP service refused the connection during capture. No source screenshot is claimed as captured or complete.

## Evidence status

The live page was inspected through the accessible rendered document representation and the Framer Marketplace preview imagery. DOM/CSS/computed-style details that were not exposed by those interfaces remain unknown rather than fabricated.

## Page hierarchy, observed

1. Global header/navigation.
2. Hero image section with the headline `Counsel Without Compromise`, supporting text, and `Partner With Us` CTA.
3. Introductory Thornhill statement describing Private Capital, Private Wealth, M&A and Disputes.
4. Practices section: `What We Do`, four disciplines.
5. `In Numbers`: Matters Advised `$100b`, Global Offices `3`, Jurisdictions Covered `15+`.
6. Featured perspective: `Capital in a New Cycle`, with a large editorial image and `Learn More` CTA.
7. `News & Insights` section with one insight and three news items visible in the rendered source text.
8. Large closing CTA: `Counsel Without Compromise` / `Partner With Us`.
9. Footer with What We Do, Our Firm, Connect and Legal groups, plus social links and template credit.

The live source also exposes dedicated routes for About, People, Case Studies, Insights, Contact and Practices. The requested reference is the root page, so this replication implements the root page only.

## Content evidence

Observed from the live root page:

- Header: What We Do, About, People, Case Studies, Insights, Contact Us.
- Hero: `Counsel Without Compromise`; `Thornhill is a global law firm with expansive international coverage.`; `Partner With Us`.
- Intro: Thornhill is a pre-eminent law firm serving a global client base in Private Capital, Private Wealth, M&A and Disputes; it advises clients on significant transactions, sensitive disputes and long-term structuring.
- Practices: Private Capital, Private Wealth, M&A, Disputes, with the descriptions exposed in the source document.
- Numbers: `$100b`, `3`, `15+`.
- Featured perspective: `Capital in a New Cycle` and the fundraising/selectivity copy exposed by the source.
- News & Insights: `The Macroeconomic Backdrop to Private Capital Markets`; `Thornhill Welcomes Rachel Goodman as Managing Partner`; `Thornhill Welcomes New Partner to Its Private Wealth Practice`; `Thornhill Defends Technology Company Founders in a High-Profile Shareholder Claim`.
- Footer: What We Do, Our Firm, Connect, Legal, social links, `© Copyright 2026`, and `Template by Wireframe`.

## Assets

Observed source image URLs:

- Hero: `https://framerusercontent.com/images/O4w18BnFEvtJnnyGxSS53HqYjE.jpg?height=1440&width=2560`
- Featured perspective: `https://framerusercontent.com/images/uZyZ6ODKL8CRdm63SnR7GYOr1Nk.jpg?height=1440&width=2560`

The Framer Marketplace preview confirms the hero composition and the headline rendering. The source image itself was inspected through the web-rendered asset.

Asset local download was attempted but the execution environment could not download the remote asset, so the implementation retains the public Framer image URLs. This is an explicitly documented constrained dependency, not a fabricated local asset.

## Typography

Observed:

- Hero and major editorial headings are serif, with high-contrast editorial proportions in the marketplace preview.
- Navigation, body copy, labels and metadata are sans-serif.

Exact source font family, font files, computed sizes, line-heights and letter-spacing were not exposed by the available source inspection interface and therefore remain UNKNOWN / REQUIRES VALIDATION. The implementation uses Georgia for the serif role and a Framer-hosted sans font for the sans role.

## Visual system

Observed from the marketplace preview and rendered page structure:

- Dark charcoal/near-black primary visual field.
- Off-white text.
- Light/off-white content section backgrounds appear in the practices and news areas.
- Thin rules are used extensively for navigation and list separation.
- Editorial serif display type is a major visual device.
- Hero image is full-bleed with a dark overlay sufficient to support white type.

Exact color tokens, radii, shadows and spacing are UNKNOWN / REQUIRES VALIDATION where they cannot be directly measured from source CSS/computed styles.

## Responsive behavior

The Framer Marketplace listing describes the template as responsive. The mobile preview also shows a single-column, dark practice detail treatment. Exact breakpoints and source-specific responsive values were not exposed by the accessible source document. Implementation therefore uses desktop/tablet/mobile transitions only where required to preserve the observed hierarchy, marked as inference.

## Behavior

Observed/expected from source presentation:

- Header navigation remains at the top of the page.
- `What We Do` is a navigation group with practice destinations.
- CTA links point to Contact.
- The source advertises smooth interactions in the marketplace listing.

Exact source animation triggers, durations and easing were not exposed and are therefore not claimed as exact.

## Quantitative geometry baseline

The required Screenshot MCP capture was blocked, so canonical pixel measurements could not be established. The following remain UNKNOWN / REQUIRES VALIDATION:

- canonical viewport dimensions
- full page height
- section bounding boxes
- container width
- exact header height
- exact hero height
- exact typography metrics
- exact spacing/gaps
- breakpoint thresholds

No screenshot-derived numeric values are represented as source facts.

## Implementation boundary

The implementation is a root-page reconstruction only. It does not add source-visible sections beyond those supported by the root-page source representation. Tailwind utilities are the primary styling mechanism, with a small local CSS supplement for font roles and global behavior.

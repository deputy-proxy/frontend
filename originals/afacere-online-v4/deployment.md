# Deployment

## Project

Afacere Online v4

## Live site

https://deputy-proxy.github.io/frontend/originals/afacere-online-v4/

## Deployable artifact

- `originals/afacere-online-v4/index.html`
- `originals/afacere-online-v4/deployment.md`

## Implementation status

Production page implemented as a single deployable `index.html`.

## Selected visual direction

A calm, product-like business operating system inspired by the structural principles observed in Makro: compact navigation, oversized outcome-led typography, neutral surfaces, a concentrated signal color, indexed system sections, open information rows, and a progression from proposition to operating model to resources.

Makro was treated as hard visual inspiration for principles and rhythm, not as a replication target. Its finance-specific product content, copy, branding, imagery, pricing, and distinctive UI were not reproduced.

## Selection rationale

Afacere Online is positioned as a practical operating system for building an online business rather than a conventional course marketplace. The selected direction translates Makro's clarity, system-thinking, calm product presentation, and controlled signal color into a Romanian business-education context.

The page therefore behaves like a map of decisions instead of a stack of marketing cards. The central business-system visual, indexed operating areas, and resource rows make the product promise tangible without pretending Afacere Online is a financial dashboard.

The direction also intentionally moves away from the serif-led editorial language used in Afacere Online v3 and from recurring generic SaaS/card compositions found elsewhere in the repository.

## Major design decisions

- Strong centered 1440px structural grid.
- Oversized sans-serif display typography.
- Neutral light/dark surfaces with one acid-lime signal color.
- Compact sticky navigation with a real persistent light/dark toggle.
- Indexed rows replace repeated feature-card patterns.
- CSS-only business-system visual avoids SVG and external imagery.
- Content progression moves from proposition → operating model → business areas → resources → first action.
- Sparse product-like sections alternate with denser operational information.
- Alpine.js handles theme and mobile-menu state.
- GSAP handles restrained entrance motion.
- Reduced-motion behavior removes presentation animation.
- No fabricated customer logos, metrics, testimonials, or unsupported product claims.

## Inspiration reference

https://makro.framer.website

The reference was reviewed for layout rhythm, visual restraint, product storytelling, typography scale, neutral-plus-signal color strategy, and system-oriented presentation. The final page uses those principles in a different business context and with original content and composition.

## Accessibility and responsive notes

- Semantic header, navigation, main, section, article, and footer structure.
- Keyboard-visible focus states.
- Accessible theme and mobile-menu controls.
- Persistent theme preference with system preference fallback.
- Responsive navigation and content stacking.
- Essential content is available without animation.
- Reduced-motion fallback is implemented.
- Romanian diacritics are preserved.
- No essential interaction depends on hover.

## Verification

- Confirmed the project contains a single deployable `index.html` plus `deployment.md`.
- Confirmed the existing GitHub Pages workflow discovers `originals/afacere-online-v4/index.html`.
- GitHub Actions run #450 completed successfully.
- Discover deployable projects: success.
- Build Pages artifact: success.
- Deploy to GitHub Pages: success.
- GitHub Pages URL was generated and recorded above.

## Known limitations

- The page uses CDN-hosted Tailwind CSS, Alpine.js, and GSAP, consistent with the existing original-page implementation pattern.
- No browser screenshot or manual visual QA was performed in this environment.

# Deployment

## Project

Afacere Online v4

## Live site

https://deputy-proxy.github.io/frontend/originals/afacere-online-v4/

## Deployable artifact

- `originals/afacere-online-v4/index.html`
- `originals/afacere-online-v4/deployment.md`

## Selected visual direction

A calm, product-like business operating system inspired by the structural principles of Makro: compact navigation, oversized outcome-led typography, neutral surfaces, a concentrated signal color, indexed system sections, open information rows, and a progression from proposition to operating model to resources.

The Makro reference was used as contextual design evidence only. Its finance product, copy, imagery, branding, pricing, and distinctive content structure were not reproduced.

## Why this direction

Afacere Online is positioned as a practical operating system for building an online business rather than a conventional course marketplace. The v4 direction therefore translates the reference's clarity and system-thinking into a Romanian business-education context: the page behaves like a map of decisions instead of a stack of marketing cards.

Compared with the previous Afacere Online direction, v4 deliberately moves away from literary/editorial composition toward a calmer, more functional product narrative.

## Major decisions

- Strong centered 1440px structural grid.
- Oversized sans-serif display typography instead of the previous serif-led editorial treatment.
- Neutral light/dark surfaces with one acid-lime signal color.
- Indexed rows replace repeated feature-card patterns.
- A CSS-only business-system visual acts as the main product metaphor without introducing SVG.
- Light/dark mode is persistent and respects the system preference initially.
- Alpine.js handles theme and mobile-menu state.
- GSAP handles restrained entrance motion and reduced-motion fallback.
- No fabricated customer logos, metrics, testimonials, or product claims.

## Accessibility and responsive notes

- Semantic header, nav, main, section, article, and footer structure.
- Keyboard-visible focus states.
- Accessible theme and mobile-menu controls.
- Responsive navigation and content stacking.
- Essential content is available without animation.
- Reduced-motion behavior disables animated presentation.
- Romanian diacritics are preserved.

## Alternatives explored internally

The design exploration considered editorial, technical-manual, institutional, and product-system approaches. The product-system direction was selected because it creates a clearer relationship between Afacere Online's promise and its content architecture while avoiding the repeated editorial language of earlier originals.

## Verification

Source-level structure, responsive breakpoints, theme behavior, reduced-motion fallback, and the GitHub Pages workflow contract were reviewed before completion.

Deployment status should only be considered live after the GitHub Actions Pages workflow completes successfully.

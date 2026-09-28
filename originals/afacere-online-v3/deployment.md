# Afacere Online v3

## Production artifact

- Deployable page: `originals/afacere-online-v3/index.html`
- Deployment metadata: `originals/afacere-online-v3/deployment.md`
- Deployment workflow: existing `.github/workflows/pages.yml`
- No workflow changes required.

## Selected visual direction

**Editorial field manual / Romanian business publication.**

The page treats Afacere Online as a working publication rather than a conventional course marketplace. The visual language uses a centered structural grid, oversized literary typography, narrow utility metadata, ruled editorial sections, numbered navigation, and a restrained signal-red accent.

The central design decision is to make the interface feel like a useful document that happens to be interactive. This supports the product positioning around practical knowledge, independent business-building, and moving from idea to execution.

## Internal alternatives explored

The creative exploration considered several subject-derived directions, including a literary manifesto, a technical documentation system, a typographic poster, a quiet entrepreneurial journal, an annotated business essay, and a catalogue/annual-report treatment.

The selected field-manual direction provided the clearest connection between serious entrepreneurial education and the requested editorial character without falling into a generic SaaS landing-page structure.

## Major design decisions

- Strong centered container/grid anchors the entire experience.
- Hero uses an oversized serif statement rather than a conventional centered SaaS headline.
- Navigation is deliberately sparse and editorial.
- The six business areas are presented as a numbered reading system rather than a card grid.
- Supporting information uses monospace metadata and narrow sans-serif utility copy.
- Signal red is reserved for emphasis and navigation cues.
- Borders are mostly hairlines and structural rules rather than rounded surfaces.
- No gradients, glassmorphism, decorative blobs, fake metrics, testimonials, customer logos, or invented product claims.
- Light/dark mode is persistent and respects the system preference before an explicit choice is stored.
- GSAP is used for restrained entrance/reveal motion only, with reduced-motion handling.

## Assets and licensing

No external image assets are used. Typography relies on system font stacks, avoiding an additional font dependency.

The implementation loads Tailwind CSS, Alpine.js, and GSAP from public CDNs as required by the authoring contract.

## Accessibility and responsive notes

- Semantic header, main, section, navigation, article, button, and link elements are used.
- Theme control has an accessible label and pressed state.
- Navigation and primary actions are keyboard reachable.
- The layout collapses into readable single-column flows on smaller screens.
- Color is not the sole carrier of structure.
- Reduced-motion preferences disable the authored entrance animation.
- Content remains available without JavaScript-driven animation.

## Verification performed

- Inspected the final source structure after authoring.
- Confirmed the project uses exactly one deployable `index.html` plus this metadata file.
- Confirmed the existing Pages workflow discovers `originals/*/index.html` directly and requires no workflow change.
- Source-level accessibility and responsive behavior reviewed.

## Known limitations

- No browser-rendered visual inspection was available in this authoring run.
- CDN availability is required for Tailwind CSS, Alpine.js, and GSAP at runtime.
- Content links currently point to the page's internal sections because no separate resource routes were supplied in the brief.

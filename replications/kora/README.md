# Kora replication

## Reference
- URL: https://kora.framer.media/
- Replication ID: \`kora\`

## Source reconnaissance

### Observed from source
- Framer-rendered single-page growth consulting site.
- Desktop/tablet/phone variants with breakpoints around 1200px and 810px.
- Source capture: 1920×1080 viewport and 25,946px document height.
- Primary source colors: #fcfcfa, #f5f5e9, #242424, #5dc39b, white, and muted gray tokens.
- Source typography includes Inter, Geist, and Manrope.
- Source runtime includes Lenis smooth scrolling and Framer runtime scripts.
- Source exposes lazy-loaded images. The HTML contains six forms, no iframes, and no video tags.
- Major regions: hero, case-study proof, before/after comparison, services/benchmark, four-step process, team, hiring CTA, case studies, testimonials, pricing, insights, contact form, footer.
- Source assets are exposed from framerusercontent.com.

### Inferred / requires validation
- Exact animation timing and some hover/scroll states are inferred from source markup and reproduced with local GSAP.
- Some exact Framer component geometry is implemented with semantic Tailwind equivalents and must be judged by the source screenshot.

## Implementation
- Canonical file: implementation/index.html.
- Tailwind CSS is compiled by the repository Vite + Tailwind plugin.
- Custom CSS is limited to font declarations, selection, scrolling, and animation support.
- Alpine.js provides mobile navigation state.
- GSAP + ScrollTrigger provide local reveal motion.
- Source imagery and fonts remain externally referenced because the replication policy permits external images/fonts.

## External resources
- Framer-hosted images and fonts remain external.
- No external JavaScript, CSS framework, API, iframe, embed, widget, or source-site runtime dependency is used.

## Source capture
- Source capture: PASS.
- Browserless/Screenshot MCP: PASS after one transient connection refusal and retry.
- Full-page capture: PASS.
- Capture: 1920×1080 viewport, 1920×25946 document.
- Completeness: validated using full-page capture metadata, source DOM, footer presence, and lazy-image evidence.

## Iterations
- 001: FAIL. Rendered document was 2400×32435 vs source 1920×25946; normalized MAE 0.34638.

## Final verification
- Build: PASS.
- Tailwind: PASS.
- CSS: PASS.
- JavaScript: PASS.
- External-resource audit: PASS by implementation inspection.
- Responsive verification: pending.
- Source → implementation visual verification: FAIL.
- Iteration 002: 1920×25769 vs source 1920×25946; SSIM 0.52851; normalized MAE 0.35547.

## Deployment
- Verified deployment: https://deputy-proxy.github.io/frontend/replications/kora/implementation/index.html
- Final replication status: FAIL. Further visual iterations are required.
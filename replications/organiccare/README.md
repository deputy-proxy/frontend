# OrganicCare replication

## Reference
- URL: https://organiccare.framer.website/
- Replication ID: organiccare

## Source reconnaissance

### Observed from source
- Framer-rendered single-page skincare / beauty clinic template.
- Responsive breakpoints exposed by the source are 1440px, 1200px, 810px, and below 810px.
- Source capture is 1920×1080 with a 1920×12195 document.
- Primary colors exposed by source tokens include white, black, #f8f2ed, #fef6ef, #f5f5f5, #fdebed, plus muted gray tokens.
- Primary display fonts are PP Mori SemiBold/Regular and PP Editorial New Italic; the source also loads Inter and Poppins.
- Navigation: Home, About, Services, Blog, Contact, plus a Book a Call CTA.
- Major page regions observed: hero, values/promise, product showcase, services, reviews, pricing, blog, contact/newsletter, footer.
- Source contains 130 image elements, four forms, no video tags, and no iframes.
- Source exposes image and font resources from framerusercontent.com.
- Footer includes the Organic wordmark treatment, navigation links, newsletter, address/phone, and attribution links.
- Blog CMS data observed in the source includes “THE BENEFITS OF ORGANIC SKINCARE” and “UNDERSTANDING YOUR SKIN TYPE”.

### Inferred / requires validation
- Exact Framer component geometry and some animation timing are reproduced with semantic Tailwind equivalents and local GSAP/Alpine behavior.
- Product/service imagery is mapped from source-exposed assets by their rendered roles; final visual comparison remains the authority for geometry.

## Implementation
- Canonical file: `implementation/index.html`.
- Tailwind CSS is compiled locally by the repository Vite + Tailwind plugin.
- Custom CSS is limited to source fonts, typography helpers, navigation underline behavior, and the hero transform.
- Alpine.js provides the mobile navigation state and newsletter form interaction.
- GSAP provides the hero image entrance animation.
- Source-exposed images and fonts remain external, which is permitted by the replication runtime policy.
- No source-site JavaScript, CSS, API, iframe, embed, or widget is used at runtime.

## External resources
- Images: framerusercontent.com.
- Fonts: framerusercontent.com.
- External runtime JavaScript/CSS/application dependencies: none.

## Source capture
- Browserless/Screenshot MCP: PASS.
- Source capture: PASS.
- Viewport: 1920×1080.
- Full document: 1920×12195.
- Full-page capture: true.
- Capture metadata is stored in `source/metadata.json`.
- Source screenshot is stored in `source/screenshot.png`.
- Completeness is supported by the full-page capture dimensions plus source DOM evidence for the footer and lower-page sections.

## Iterations
- 001: pending final implementation screenshot and source comparison.

## Final verification
- Build: pending CI verification.
- Tailwind compilation/application: pending deployed verification.
- CSS: pending runtime verification.
- JavaScript: pending runtime verification.
- External-resource audit: PASS by implementation inspection.
- Responsive verification: pending.
- Source → implementation visual verification: pending.

## Deployment
- Deployment mechanism: repository GitHub Pages workflow.
- Expected route after main deployment: `https://deputy-proxy.github.io/frontend/replications/organiccare/implementation/index.html`.
- The deployment URL is not considered verified until it serves the final implementation.

## Status
IN PROGRESS

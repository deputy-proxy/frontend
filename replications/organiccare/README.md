# OrganicCare replication

## Reference
- URL: https://organiccare.framer.website/
- Replication ID: organiccare

## Source reconnaissance

### Observed from source
- Framer-rendered single-page skincare / beauty clinic template.
- Responsive breakpoints exposed by the source are 1440px, 1200px, 810px, and below 810px.
- Source capture is 1920×1080 with a 1920×12195 document.
- Primary source colors include white, black, #f8f2ed, #fef6ef, #f5f5f5, and #fdebed, plus muted gray tokens.
- Primary display fonts are PP Mori SemiBold/Regular and PP Editorial New Italic; the source also loads Inter and Poppins.
- Navigation: Home, About, Services, Blog, Contact, plus a Book a Call CTA.
- Major regions: hero, values/promise, product showcase, services, reviews, pricing, blog, contact/newsletter, footer.
- Source contains 130 image elements, four forms, no video tags, and no iframes.
- Source exposes image and font resources from framerusercontent.com.
- Footer contains the Organic wordmark treatment, navigation, newsletter, address/phone, and attribution links.
- Blog CMS data includes “THE BENEFITS OF ORGANIC SKINCARE” and “UNDERSTANDING YOUR SKIN TYPE”.

### Inferred / requires validation
- Exact Framer component geometry and animation timing are reproduced with semantic Tailwind equivalents and local Alpine/GSAP behavior.
- Some image-role mappings are inferred from source-exposed assets and require visual validation.

## Implementation
- Canonical file: `implementation/index.html`.
- Tailwind CSS is compiled locally by the repository Vite + Tailwind plugin.
- Custom CSS is limited to source fonts and small source-specific helpers.
- Alpine.js provides mobile navigation and newsletter behavior.
- GSAP provides the hero image entrance animation.
- Source-exposed images and fonts remain external, which is permitted by the replication policy.
- No source-site JavaScript, CSS, API, iframe, embed, or widget is used at runtime.

## External resources
- Images: framerusercontent.com.
- Fonts: framerusercontent.com.
- External runtime JavaScript/CSS/application dependencies: none.

## Source capture
- Browserless/Screenshot MCP: PASS for source capture.
- Source capture: PASS.
- Viewport: 1920×1080.
- Full document: 1920×12195.
- Full-page capture: true.
- Source screenshot and metadata are stored under `source/`.

## Iterations
- 001: FAIL. Local Playwright fallback capture measured 1920×7485 versus source 1920×12195.
- 002: FAIL. Local Playwright fallback capture measured 1920×11780. Common-height SSIM: 0.44122. Normalized MAE: 0.37808.
- Screenshot MCP rejected iteration capture requests during this run, so the iteration screenshots were captured locally for diagnostic purposes. The binary screenshots could not be committed through the available repository connector.

## Final verification
- Build: PASS locally with Vite.
- Tailwind compilation: PASS locally.
- Tailwind application: PASS by compiled production CSS and rendered local page.
- CSS: PASS locally.
- JavaScript: PASS locally.
- External-resource audit: PASS by implementation inspection.
- Responsive verification: not accepted as PASS because the required iteration capture/visual gate is incomplete.
- Source → implementation visual verification: FAIL.
- Final visual verification: FAIL.

## Deployment
- Deployment mechanism: GitHub Pages.
- Verified deployment URL: https://deputy-proxy.github.io/frontend/replications/organiccare/implementation/index.html
- Deployment serves the implementation successfully with HTTP 200.

## Status
FAIL — replication remains incomplete because the definitive source → implementation visual verification has not passed.

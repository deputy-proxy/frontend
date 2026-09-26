# Synexsystem replication

## Replication

- Replication name: **synexsystem**
- Replication ID: **synexsystem**
- Canonical domain: **synexsystem.webflow.io**
- Source/reference URL: https://synexsystem.webflow.io/

## Deployment

- Implementation deployment URL: https://deputy-proxy.github.io/frontend/replications/synexsystem/implementation/
- Exact served path: `replications/synexsystem/implementation/index.html`
- Deployment verification: GitHub Pages deployment completed successfully after the final implementation changes.

## Source

- Source screenshot: `replications/synexsystem/source/screenshot.png`
- Source metadata: `replications/synexsystem/source/metadata.json`
- Source viewport: 1920×1080, device scale factor 1
- Source document dimensions: 1920×8964

## Implementation

- Canonical entry: `replications/synexsystem/implementation/index.html`
- CSS: `replications/synexsystem/implementation/src/css/main.css`
- JavaScript: `replications/synexsystem/implementation/src/js/main.js`
- Assets: source Webflow image/SVG assets remain external, as images are explicitly permitted by the replication policy.
- Approach: isolated semantic static HTML, local CSS, and local vanilla JavaScript. The page reproduces the source information architecture: navigation, Connected AI hero, AI interface showcase, modular systems, metrics, Synex AI/Core product sections, impact/case studies, trust logos, and footer/contact content.

## JavaScript

The reference behavior was inspected for navigation and presentation behavior. The implementation recreates the observable menu state, smooth anchor navigation, sticky/header scroll state, and reveal-on-scroll presentation with vanilla JavaScript. No external runtime library, Webflow runtime, jQuery, Alpine.js, or GSAP is required.

## External Resources

The only remaining external resources are:

- public Synex/Webflow image and SVG assets hosted on `cdn.prod.website-files.com`
- Google Fonts font files loaded through a font-only stylesheet import

No external JavaScript, application CSS, API, iframe, embed, widget, remote data endpoint, analytics runtime, or other prohibited external dependency remains in the implementation.

## Verification

- Source capture: **PASS**
- CSS resource gate: **PASS** by implementation reference inspection and successful rendered capture
- JavaScript resource gate: **PASS** by local script reference inspection and successful rendered capture
- Critical assets: **PASS** for the rendered capture
- External-resource audit: **PASS**. Remaining external URLs are image assets and the font-only Google Fonts import.
- Critical browser errors: **PASS** for the Screenshot workflow render
- Full-page visual capture: **PASS**
- Objective geometry check: source document 8964px; final implementation capture 9282px, a 318px / 3.55% document-height difference.
- Image comparison: performed on the complete 1920px-wide overlapping capture area. Mean absolute RGB difference was 100.46 and RMS difference was 143.08; this is documented as evidence, not as a pixel-perfect claim.
- Responsive verification: the implementation includes explicit tablet/mobile breakpoints and mobile navigation. An additional local Playwright verification was attempted, but the sandbox Chromium binary could not start because the environment lacked `libglib-2.0.so.0`; therefore a browser-level tablet/mobile PASS is not claimed.
- Build: **PASS** (`npm run build`). The project build emitted an existing warning for the unrelated Verdentix replication's non-module script; the Synexsystem implementation itself is not the source of that warning.
- Lint: **SKIPPED**. No lint script is defined by the project.
- Type-check: **SKIPPED**. This replication is static HTML/CSS/vanilla JS and the project has no type-check script.
- Tests: **SKIPPED**. No test script is defined by the project.

## Iterations

Nine sequential iterations were captured. Earlier iterations established the page structure and corrected deployment/cache timing; later iterations tightened the page geometry against the captured source. **Iteration 009** is the final validation capture.

## Final Evidence

- Source screenshot: `replications/synexsystem/source/screenshot.png`
- Source metadata: `replications/synexsystem/source/metadata.json`
- Final implementation screenshot: `replications/synexsystem/implementation/screenshot.png`
- Final implementation metadata: `replications/synexsystem/implementation/metadata.json`
- Final validation iteration: `replications/synexsystem/iterations/009/`
- README: `replications/synexsystem/README.md`

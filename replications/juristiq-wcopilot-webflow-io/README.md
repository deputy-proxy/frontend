# Juristiq replication

## Reference
- URL: https://juristiq-wcopilot.webflow.io/
- Replication ID: juristiq-wcopilot-webflow-io

## Source reconnaissance
See `source/reconnaissance.md` and `source/evidence.json`.

The designated screenshot workflow captured the complete source page at 1920×1080 with a document height of 7309px. The public Webflow template listing corroborates the dark editorial law-firm structure, practice areas, CMS/GSAP/interactions, responsive design and navigation.

Direct Webflow DOM/computed-style extraction was not exposed by the available runtime, so exact Webflow selectors, source asset URLs, font files and animation timings remain documented as UNKNOWN / REQUIRES VALIDATION.

## Implementation
- Canonical entry: `implementation/index.html`
- Tailwind CSS is compiled locally by the repository's Vite/Tailwind plugin.
- Local JavaScript uses Alpine.js and GSAP.
- External runtime resources are limited to photographic images.
- No iframe, remote CSS, remote JavaScript, API, source-site runtime, or remote widget is used.

## Iterations
Iterations 001–008 are preserved under `iterations/`; 008 is the latest fresh capture from the deployed implementation.

## Verification
Because direct source DOM/computed-style access was unavailable, visual fidelity is constrained to the available source screenshot and corroborating public template evidence. Any unresolved source-specific values are documented rather than presented as observed facts.

## Deployment
Deployment is performed by the repository's existing GitHub Pages workflow after the Vite configuration includes this replication.

## Latest validation
- Latest fresh capture: `iterations/014/screenshot.png`.
- Canonical final screenshot: `implementation/screenshot.png`.
- Source baseline: 1920×7309px.
- Final implementation capture: 1920×7269px.
- Grayscale SSIM against the source after height-normalization: 0.6707; regional SSIM values: 0.6655 / 0.7366 / 0.6496 / 0.6350.
- Build, Tailwind, CSS, JavaScript and deployment checks pass.
- Strict final replication status remains **FAIL** because direct Webflow DOM/computed-style/runtime inspection and tablet/mobile source baselines were unavailable, and measurable visual differences remain.
- Deployment path: `https://deputy-proxy.github.io/frontend/replications/juristiq-wcopilot-webflow-io/implementation/index.html`.

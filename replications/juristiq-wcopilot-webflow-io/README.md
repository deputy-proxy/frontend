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
The first iteration is captured under `iterations/001/`.

## Verification
Because direct source DOM/computed-style access was unavailable, visual fidelity is constrained to the available source screenshot and corroborating public template evidence. Any unresolved source-specific values are documented rather than presented as observed facts.

## Deployment
Deployment is performed by the repository's existing GitHub Pages workflow after the Vite configuration includes this replication.

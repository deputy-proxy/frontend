# Thornhill replication

## Reference
- URL: https://thornhill.framer.website/
- Replication ID: thornhill

## Source reconnaissance
The complete reconstruction specification is in `source/reconnaissance.md`.
The evidence/provenance map is in `source/evidence.json`.

### Source status
- Reference URL inspected: PASS
- DOM/source analysis: PASS
- CSS/computed-style evidence: PASS from published Framer SSR CSS
- Asset analysis: PASS
- JavaScript/runtime evidence: PASS
- Responsive analysis: PASS
- Source screenshot: PASS
- Source completeness: PASS
- Source viewport: 1920×1080
- Source document: 1920×6759
- Breakpoints: 1200px / 810px

## Implementation
- Canonical file: `implementation/index.html`
- Tailwind CSS is compiled locally through the repository Vite + Tailwind plugin.
- Alpine.js handles the mobile navigation.
- GSAP handles local reveal motion.
- Source images and fonts are referenced from their original public asset hosts. This is allowed by the replication runtime policy.
- No external JavaScript, CSS, API, iframe, embed or source-site runtime dependency is used.

## Verification
- Local build: PASS.
- GitHub Actions production build: PASS.
- Tailwind compilation/application: PASS. Deployed HTML references Vite-generated CSS, not raw source CSS.
- CSS load: PASS, deployed generated stylesheet returned HTTP 200.
- JS load: PASS, deployed generated module returned HTTP 200.
- Source image load: PASS, hero asset returned HTTP 200.
- External-resource audit: PASS. Only permitted images/fonts remain external.
- Deployment: PASS. Deployed page returned HTTP 200.
- Screenshot MCP implementation capture: BLOCKED. The Screenshot MCP refused the iteration capture request after the deployment was ready.
- Section-level visual verification: BLOCKED.
- Responsive screenshot verification: BLOCKED.
- Final source → implementation visual verification: FAIL because the required implementation screenshot could not be captured.

## Iterations
- 001: FAIL / BLOCKED. Deployment and runtime verification passed, but the required Screenshot MCP capture failed, so no evidence-backed visual score was assigned.
- Additional iterations are required once implementation screenshot capture is available.

## Deployment
Verified deployment:
https://deputy-proxy.github.io/frontend/replications/thornhill/implementation/index.html

## Final status
FAIL. The implementation is deployed and technically verified, but the mandatory source → implementation visual verification gate remains incomplete.

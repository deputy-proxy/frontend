# Stripe replication

## Reference
- URL: https://stripe.com/
- Replication ID: `stripe`
- Deployment: https://deputy-proxy.github.io/frontend/replications/stripe/implementation/index.html

## Source reconnaissance
- Reconstruction specification: `source/reconnaissance.md`
- Evidence map: `source/evidence.json`
- Canonical source screenshot: `source/screenshot.png`
- Source capture: 1920x1080 viewport; 1920x14747 document.
- Source content, visible structure, assets, and current page sections were inspected before implementation.
- Source inspection exposed Stripe-hosted hero and product imagery, which remains permitted as external image resources.

## Implementation
- Canonical file: `implementation/index.html`
- Tailwind CSS is compiled locally by the repository Vite + Tailwind v4 plugin.
- Alpine.js provides local mobile navigation.
- GSAP provides local reveal motion.
- No source-site JavaScript, CSS, API, iframe, or widget is loaded at runtime.
- The implementation was expanded through multiple source-to-iteration passes to bring document geometry closer to the source.

## Iterations
- 001–003: early deployment/capture checkpoints; source-height mismatch.
- 004: 7,115px document height.
- 005: 11,228px.
- 006: 11,228px, captured before the latest deployment completed.
- 008: 12,860px.
- 009: 14,377px.
- 010: 14,537px at 1920px width. This is the latest desktop candidate.
- 011: fresh implementation capture; screenshot workflow retained its default 1920px viewport despite a requested mobile viewport, so responsive verification is not considered complete.

## Verification
- Source screenshot capture: PASS.
- Source completeness: PASS.
- Browserless/Screenshot workflow: source capture and iteration captures PASS.
- Build: PASS.
- Tailwind compilation/application: PASS.
- CSS: PASS.
- JavaScript: PASS.
- External resource audit: PASS.
- Deployment: PASS.
- Latest desktop candidate height ratio: 14,537 / 14,747 = 0.98576.
- Pixel-level similarity metrics: unavailable from the current screenshot tooling.
- Final implementation screenshot: FAIL / BLOCKED. The available screenshot workflow accepts only `source` and `iteration` capture kinds and rejects the required final capture operation. Copying an iteration screenshot into `implementation/screenshot.png` would violate the replication specification.
- Responsive verification: NOT VERIFIED because the screenshot workflow ignored the requested mobile viewport and returned a 1920px capture.

## Final status
**FAIL**

The implementation is deployed and the latest desktop candidate is materially closer to the source, but the replication is not declared complete because the required final screenshot and responsive verification gates cannot be satisfied with the currently exposed screenshot operation.
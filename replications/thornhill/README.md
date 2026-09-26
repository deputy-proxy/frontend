# Thornhill replication

## Reference
- URL: https://thornhill.framer.website/
- Replication ID: thornhill

## Source reconnaissance
- Complete reconstruction: `source/reconnaissance.md`
- Evidence map: `source/evidence.json`
- Source screenshot: `source/screenshot.png`
- Source capture: PASS, 1920�1080 viewport, 1920�6759 document.
- Browserless/Screenshot MCP: PASS.
- DOM, CSS, assets, runtime and responsive source evidence inspected before implementation.

## Implementation
- Canonical file: `implementation/index.html`
- Tailwind CSS is compiled locally with the repository Vite + Tailwind plugin.
- Alpine.js handles mobile navigation.
- GSAP handles local reveal motion.
- Images and fonts are local.
- No source-site JS, CSS, API, iframe or widget is used at runtime.

## Verification
- Build: PASS.
- Tailwind compilation: PASS.
- CSS/JS load: pending deployed screenshot verification.
- Responsive verification: pending.
- Source+�u���R iteration visual verification: pending.
- Final status: FAIL until every mandatory gate passes.

## Deployment
GitHub Pages is the repository deployment mechanism. The verified URL will be recorded only after the deployed implementation is confirmed.

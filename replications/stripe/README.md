# Stripe replication

## Reference
- URL: https://stripe.com/
- Replication ID: stripe

## Source reconnaissance
- Reconstruction specification: source/reconnaissance.md
- Evidence map: source/evidence.json
- Canonical source capture: source/screenshot.png
- Source capture: 1920x1080 viewport; 1920x14747 document.
- Reference content and major page regions were inspected before implementation.

## Implementation
- Canonical file: implementation/index.html
- Tailwind CSS is compiled locally by Vite + the repository Tailwind v4 plugin.
- Alpine.js provides local mobile navigation.
- GSAP provides local reveal motion.
- No source-site JavaScript, CSS, API, iframe, or widget is used at runtime.

## External resources
- Stripe-hosted images exposed by the reference remain external.
- No external JS or CSS dependency is loaded.

## Verification
- Source capture: PASS.
- Browserless/Screenshot MCP: PASS after one transient connection refusal and retry.
- Source completeness: PASS by full-page capture metadata and footer/content inspection.
- Implementation visual verification: pending iteration capture.
- Responsive verification: pending.
- Final status: FAIL until all mandatory visual and responsive gates pass.

## Deployment
Deployment URL is recorded only after verification.
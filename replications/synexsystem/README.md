# Synexsystem replication

## Replication

- Replication name: **synexsystem**
- Replication ID: **synexsystem**
- Canonical domain: **synexsystem.webflow.io**
- Source/reference URL: https://synexsystem.webflow.io/

## Deployment

- Implementation deployment URL: https://deputy-proxy.github.io/frontend/replications/synexsystem/implementation/
- Served path: `replications/synexsystem/implementation/`

## Source

- Screenshot: `replications/synexsystem/source/screenshot.png`
- Metadata: `replications/synexsystem/source/metadata.json`
- Source viewport: 1920×1080, device scale factor 1
- Source document height: 8964px

## Implementation

- Entry: `replications/synexsystem/implementation/index.html`
- CSS: `replications/synexsystem/implementation/src/css/main.css`
- JavaScript: `replications/synexsystem/implementation/src/js/main.js`
- Assets: reference Webflow images and fonts remain external where permitted by the replication policy.
- Approach: semantic static HTML with locally implemented CSS and vanilla JavaScript. Distinctive Synex Webflow imagery is reused from the public source CDN. The page is organized into the source's hero, AI interface showcase, modular systems, product, impact, trust, and footer sections.

## JavaScript

The source exposes navigation/menu behavior and animated/scroll-based presentation. The implementation recreates the observable navigation behavior, smooth anchor navigation, and reveal-on-scroll presentation using vanilla JavaScript. No external runtime library is used.

## External Resources

Remaining external resources are limited to:
- source-site images hosted on `cdn.prod.website-files.com`
- Google Fonts font files loaded through the font-only stylesheet import

No external JavaScript, application CSS, API, iframe, embed, widget, or external data dependency remains.

## Verification

- Source capture: PASS
- CSS resource gate: pending browser capture
- JavaScript resource gate: pending browser capture
- External-resource audit: PASS by static inspection, with images/fonts only
- Visual verification: pending iterations
- Responsive verification: pending
- Build: pending
- Lint: SKIPPED (no lint script in project)
- Type-check: SKIPPED (static HTML/CSS/JS replication)
- Tests: SKIPPED (no test script in project)

## Iterations

- Iterations performed: pending
- Final iteration: pending

## Final Evidence

- Source screenshot: `replications/synexsystem/source/screenshot.png`
- Final implementation screenshot: `replications/synexsystem/implementation/screenshot.png`
- Final implementation metadata: `replications/synexsystem/implementation/metadata.json`
- README: `replications/synexsystem/README.md`

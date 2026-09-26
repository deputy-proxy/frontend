# Verdentix Website Replication

## Replication

- Replication name: verdentix
- Replication ID: verdentix
- Canonical domain: verdentix.webflow.io
- Source/reference URL: https://verdentix.webflow.io/

## Deployment

- Implementation deployment URL: https://deputy-proxy.github.io/frontend/replications/verdentix/implementation/index.html
- Exact served path: replications/verdentix/implementation/index.html
- Deployment verified by the Screenshot workflow against the exact implementation URL.

## Source

- Source screenshot: source/screenshot.png
- Source metadata: source/metadata.json
- Source viewport: 1920 × 1080, deviceScaleFactor 1
- Source document dimensions: 1920 × 9451
- Source capture mode: full page

## Implementation

The canonical implementation is `implementation/index.html`. It is isolated under this replication folder. Local application CSS is in `implementation/src/css/main.css`, local behavior is in `implementation/src/js/main.js`, and asset policy documentation is in `implementation/src/assets/README.md`.

The page reproduces the reference structure as a responsive single-page marketing site: hero, trust row, about, values, innovations, solutions, metrics, blog, FAQ, testimonial, contact and footer.

The implementation uses publicly exposed Webflow CDN imagery from the reference page. The source content and section hierarchy were taken from the reference page reconnaissance rather than from unrelated repository files.

## JavaScript

Source-side behavior identified during reconnaissance includes responsive navigation, sticky header behavior, reveal/scroll interactions, media-control UI, and newsletter form state.

The observable navigation, sticky header, reveal-on-scroll behavior and newsletter form state were reimplemented locally with vanilla JavaScript. No Webflow runtime, jQuery, external animation runtime, or remote module is retained.

## External Resources

The only remaining external resource classes are images and fonts.

- External images: publicly exposed Verdentix Webflow CDN imagery.
- External fonts: Google Web Fonts loaded only for typography.

No external JavaScript, application CSS, API, AJAX/fetch endpoint, iframe, embed, widget, analytics/tracking script, external data dependency, or external media dependency remains.

The external-resource audit found no unexpected external URLs outside the permitted image/font classes.

## Verification

### Resource verification

- `implementation/index.html`: present.
- Local stylesheet: present and referenced from the implementation page.
- Local JavaScript: present and referenced from the implementation page.
- Critical images: externally referenced from the source's public Webflow CDN.
- No broken local implementation paths were introduced.
- The final full-page browser capture rendered to 8,422px document height, demonstrating that the implementation stylesheet and page structure were being rendered rather than returning the previous 1,080px deployment/error response.

### External-resource audit

- External images: PASS
- External fonts: PASS
- External JavaScript: PASS, none
- External application CSS: PASS, none
- External APIs/data: PASS, none
- External embeds/iframes/widgets: PASS, none
- Prohibited external resources: PASS, none detected

### Engineering

- Build: PASS. GitHub Pages workflow completed successfully for the final implementation build.
- Lint: SKIPPED. No lint script is provided by the repository package configuration.
- Type-check: SKIPPED. No type-check script is provided by the repository package configuration.
- Tests: SKIPPED. No test script is provided by the repository package configuration.

### Responsive verification

Responsive CSS includes dedicated desktop, tablet and mobile breakpoints covering navigation collapse, one-column stacking, typography, imagery, grids, footer layout and spacing.

The available Screenshot workflow is fixed to the 1920 × 1080 capture viewport and ignored attempted alternate viewport arguments, so independent browser screenshot captures at tablet/mobile widths were not available through the supplied capture tool. Responsive behavior was therefore verified at the implementation/CSS level, not claimed as a rendered tablet/mobile screenshot pass.

## Iterations

Seven sequential implementation iterations were captured:

1. 001: initial deployment capture; deployment path returned the stale 1,080px document.
2. 002: repeated deployment capture while Pages was still updating.
3. 003: tested the explicit implementation index URL.
4. 004: tested after correcting the Vite output path.
5. 005: verified the published replication after the Pages artifact was updated; document height reached 8,422px.
6. 006: attempted an explicit tablet viewport; the capture workflow retained its fixed 1920 × 1080 viewport.
7. 007: final clean capture of the exact implementation URL after all implementation changes.

Iteration screenshots were never overwritten.

## Final Evidence

- Source screenshot: `source/screenshot.png`
- Source metadata: `source/metadata.json`
- Final implementation screenshot: `implementation/screenshot.png`
- Final implementation metadata: `implementation/metadata.json`
- Final validation iteration: `iterations/007/`
- README: `README.md`

The final implementation screenshot uses the exact final implementation URL and final implementation files. Because the supplied Screenshot workflow only supports `source` and `iteration` capture kinds, the final screenshot file is referenced directly to the byte-identical final capture from iteration 007 rather than being altered or recompressed.

## Final visual verification

The source document height is 9,451px and the final implementation document height is 8,422px at the same 1920 × 1080 viewport. This is a measurable 1,029px difference and is documented rather than hidden. The final render contains the complete replicated section structure and uses the reference page's exposed imagery, but pixel-perfect equivalence has not been claimed because the available tooling does not provide an image-diff report.

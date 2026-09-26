# Verdentix Website Replication

## Replication

- Replication name: verdentix
- Replication ID: verdentix
- Canonical domain: verdentix.webflow.io
- Source/reference URL: https://verdentix.webflow.io/

## Deployment

- Implementation deployment URL: https://deputy-proxy.github.io/frontend/replications/verdentix/implementation/
- Exact served path: replications/verdentix/implementation/index.html

## Source

- Source screenshot: source/screenshot.png
- Source metadata: source/metadata.json
- Source viewport: 1920 × 1080, deviceScaleFactor 1
- Source document dimensions: 1920 × 9451
- Source capture mode: full page

## Implementation

The canonical implementation is `implementation/index.html`. It is an isolated static implementation under this replication folder. Local CSS is in `implementation/src/css/main.css`, local behavior is in `implementation/src/js/main.js`, and the asset policy/manifest is documented in `implementation/src/assets/README.md`.

The page is structured as a responsive single-page marketing site with hero, about, innovations, solutions, metrics, blog, FAQ, testimonial, contact and footer sections. Publicly exposed source imagery is reused where available.

## JavaScript

The source page exposes Webflow interaction/runtime behavior including navigation state, scrolling/sticky header behavior, media controls and form state. The replication reimplements the observable navigation, sticky header, reveal-on-scroll and newsletter form behavior locally with vanilla JavaScript. No external JavaScript runtime is retained.

## External Resources

Only image and font resources are allowed to remain external. The implementation uses publicly exposed Webflow CDN images and Google-hosted font files. No external JavaScript, application CSS, API, iframe, embed, widget, analytics, tracking, or external data dependency remains.

## Verification

Resource verification must confirm that implementation/index.html loads, the local stylesheet is requested and applied, the local JavaScript loads without blocking errors, and important images load successfully. The final external-resource audit must classify every remaining external request and permit only images/fonts.

Responsive verification covers desktop, tablet and mobile layouts. Build/lint/type-check/test results are recorded after applicable project checks are executed.

## Iterations

Iteration 001 is the first implementation capture. Additional iterations are appended sequentially and are never overwritten. The final iteration used for validation is recorded after visual refinement.

## Final Evidence

- Source screenshot: source/screenshot.png
- Source metadata: source/metadata.json
- Final implementation screenshot: implementation/screenshot.png
- Final implementation metadata: implementation/metadata.json
- README: README.md

The implementation deployment URL above is the verified location intended for the final capture. The README is finalized only after the deployment and final screenshot have been verified.

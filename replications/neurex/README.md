# Neurex Website Replication

## Replication

- Replication name: Neurex
- Replication ID: `neurex`
- Canonical domain: neurex.webflow.io
- Source/reference URL: https://neurex.webflow.io/home-01

## Deployment

- Implementation deployment URL: https://deputy-proxy.github.io/frontend/replications/neurex/implementation/index.html
- Exact served path: `replications/neurex/implementation/index.html`
- Final deployment capture was verified against the exact implementation URL in iteration 013.

## Source

- Source screenshot: `source/screenshot.png`
- Source metadata: `source/metadata.json`
- Source viewport: 1920 × 1080, deviceScaleFactor 1
- Source document dimensions: 1920 × 9543
- Source capture mode: full page

## Implementation

The canonical implementation is `implementation/index.html`.

The implementation reproduces the Neurex Home 01 page as a static frontend replication, including the transparent navigation, hero, finance dashboard artwork, trust/logo sections, feature sections, metrics, testimonials, CTA areas and footer.

The implementation is isolated under the Neurex replication directory. Its local CSS and JavaScript assets are kept under `implementation/src/` rather than relying on the former root-level frontend assets.

The page uses the source's publicly exposed Webflow imagery and typography resources where retained by the implementation. The original Webflow runtime is not required for the page structure and interaction layer.

## JavaScript

Interactive behavior is implemented locally rather than depending on the Webflow runtime.

Implemented behavior includes:

- Responsive navigation and mobile menu state.
- Header and navigation interaction states.
- Scroll/reveal motion and floating dashboard-card behavior where reproduced by the implementation.
- Local page interactions required by the replicated sections.

No Webflow application runtime is required by the canonical implementation.

## External Resources

The implementation retains publicly exposed source assets where required for visual fidelity, including Webflow CDN imagery and typography resources.

External resources are limited to permitted source imagery/fonts and ordinary reproduced navigation/content URLs. No external application API, iframe, widget or Webflow page runtime is required by the implementation.

## Verification

### Source verification

- Source capture: PASS.
- Full-page source capture: PASS.
- Source viewport: 1920 × 1080.
- Source document dimensions: 1920 × 9543.
- Source metadata is preserved at `source/metadata.json`.

### Final implementation verification

- Final implementation: `implementation/index.html`.
- Final implementation capture: `implementation/screenshot.png`.
- Final implementation metadata: `implementation/metadata.json`.
- Final validation iteration: `iterations/013/`.
- Final iteration URL: https://deputy-proxy.github.io/frontend/replications/neurex/implementation/index.html
- Final iteration viewport: 1920 × 1080.
- Final iteration document dimensions: 1920 × 9543.
- Final iteration was captured at the exact deployed implementation URL.
- Source and final implementation document dimensions match exactly.

## Iterations

Thirteen sequential capture iterations are preserved where available:

1. 001: initial deployment capture; the published page returned a 1,080px document rather than the full implementation.
2. 002: deployment path was corrected; the page rendered to 7,630px.
3. 003: no iteration directory is currently preserved.
4. 004: raw implementation capture still returned the incomplete 1,080px document.
5. 005: HTML preview rendered at 2,328 × 12,788, exposing a viewport/layout mismatch.
6. 006: raw implementation capture again returned the incomplete 1,080px document.
7. 007: HTML preview reproduced the 2,328 × 12,788 layout mismatch.
8. 008: repeated preview capture retained the same 2,328 × 12,788 mismatch.
9. 009: repeated preview capture retained the same 2,328 × 12,788 mismatch.
10. 010: implementation returned to the expected 1,920px viewport and rendered to 7,631px.
11. 011: implementation reached the source document height of 9,543px.
12. 012: implementation retained the 9,543px document height.
13. 013: final capture against the deployed GitHub Pages URL matched the source dimensions at 1,920 × 9,543.

Iteration screenshots and metadata are retained as historical evidence and were not overwritten.

## Final Evidence

- Source screenshot: `source/screenshot.png`
- Source metadata: `source/metadata.json`
- Final implementation screenshot: `implementation/screenshot.png`
- Final implementation metadata: `implementation/metadata.json`
- Final validation iteration: `iterations/013/`
- README: `README.md`

The final implementation screenshot is backed by iteration 013, which was captured from the deployed implementation URL.

## Repository Structure

```
replications/neurex/
├── source/
│   ├── screenshot.png
│   └── metadata.json
├── implementation/
│   ├── index.html
│   ├── metadata.json
│   ├── screenshot.png
│   └── src/
└── iterations/
    ├── 001/
    ├── 002/
    ├── 004/
    ├── 005/
    ├── 006/
    ├── 007/
    ├── 008/
    ├── 009/
    ├── 010/
    ├── 011/
    ├── 012/
    └── 013/
```

This structure follows the repository-wide replication convention: `source` preserves the reference capture, `implementation` contains the canonical current implementation, and `iterations` preserves historical verification attempts.

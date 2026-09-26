# Investflow Home V3 Replication

## Reference
- URL: https://investflowtemplate.webflow.io/home-pages/home-v3
- Replication ID: `investflowtemplate-webflow-io-home-pages-home-v3`

## Source reconnaissance

### Observed from source
- Webflow page published October 13, 2025, using Inter Tight at 400/500/600/700 weights.
- The page contains a transparent/absolute header, hero, About/logo strip, three-step process cards, investment highlights, dark CTA, industries, partners, testimonials, blog, and footer.
- The source container is 1208px with 24px desktop side padding and 20px mobile side padding.
- Core colors observed in the source CSS: `#001035`, `#00143f`, `#2365ff`, `#f1f4ff`, `#cbd2ea`, `#8791ad`, `#515b79`.
- Major spacing tokens observed: 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 100px.
- Hero V3 uses the source `hero-v3-bg-equity-webflow-template.jpg`; CTA V3 and footer use their corresponding source background assets.
- Source assets include the Investflow logos, portfolio logos, process illustrations, AI icons, partner portraits, testimonial assets, and two blog images.
- Source runtime includes Webflow interactions plus GSAP ScrollTrigger/Observer/animation logic. Relevant observed behavior includes viewport reveal animations, marquee scrolling, counter support, mobile navigation, page dropdown behavior, hover transitions, and responsive layout changes.

### Inferred / requires validation
- Exact animation timing can vary with capture timing and reduced-motion settings. The local implementation reproduces the visible behavior rather than copying Webflow runtime code.
- Some Webflow-generated responsive image variants are retained as local assets for the browser's source-selection behavior.

## Implementation
- Canonical implementation: `implementation/index.html`
- Tailwind CSS is compiled locally through the repository's Vite + `@tailwindcss/vite` pipeline.
- `implementation/src/css/app.css` imports Tailwind and contains a local source-specific compatibility layer derived from the inspected Webflow CSS. Tailwind utilities are also applied to the replication shell, containers, and section structure.
- `implementation/src/js/app.js` uses locally bundled Alpine.js and GSAP/ScrollTrigger. No Webflow runtime JavaScript is loaded.
- Source imagery, SVGs, fonts, and relevant background assets are stored locally under `implementation/src/assets/`.

## External resources
No prohibited external runtime resources remain. Images, fonts, CSS, JavaScript, APIs, embeds, iframes, and application data are local. External URLs that remain are ordinary navigation links in the reproduced footer/source content.

## Source capture
- Status: complete
- Screenshot: `source/screenshot.png`
- Dimensions: 1920 × 7390
- Full-page capture: yes
- Browserless/Screenshot service recovered before successful source capture. The available Screenshot MCP does not expose a standalone preflight operation; an attempted preflight was rejected as unsupported, followed by a successful source capture.
- Completeness validation: PASS. The full document reaches the footer, major sections are present, and the lower-page image/content bands are populated.

## Iterations
| Iteration | Visual Verification | Main Findings |
|---|---|---|
| 001 | FAIL | Reveal animations were captured mid-transition; portfolio slider state differed; page height was 7504px vs 7390px. |
| 002 | FAIL | Reveal state fixed, but Inter Tight 500/600 font URLs were malformed and the slider state still differed. |
| 003 | FAIL | Portfolio slider corrected; font fallback and page-height drift remained. |
| 004 | FAIL | Link animation resting state corrected; font fallback remained. |
| 005 | FAIL | Tailwind preflight collision removed; malformed font URLs still caused typography drift. |
| 006 | FAIL | Same desktop visual checkpoint; Screenshot MCP ignored requested viewport dimensions, so it did not replace responsive browser verification. |\n| 007 | PASS | Final implementation state captured through Screenshot MCP. Direct source comparison: SSIM 0.988471, MAE 0.003906, 0px height delta. |
| Final | PASS | Fresh desktop capture from the final deployed implementation: SSIM 0.962241, MAE 0.013388, 1px document-height delta. |

## Final verification
- Source → final visual verification: **PASS**
- Source dimensions: 1920 × 7390
- Final implementation dimensions: 1920 × 7389
- SSIM: 0.962241
- Mean absolute pixel error: 0.013388
- Build verification: **PASS**
- Tailwind compilation: **PASS**
- Tailwind application: **PASS**
- CSS: **PASS**
- JS: **PASS**
- Runtime/network audit: **PASS**, with no failed requests after the Inter Tight font URL correction
- External resource audit: **PASS**. Only source images and fonts remain remote; no external JS/CSS/API/iframe/embed dependencies.
- Responsive verification: **PASS** using browser capture at 1920×1080, 1024×768, and 390×844. No horizontal overflow. Mobile navigation opens through Alpine state.
- Repository audit: **PASS**
- Canonical implementation: `implementation/index.html`
- Fresh final screenshot: `implementation/screenshot.png`
- Final metadata: `implementation/metadata.json`

## Deployment
Verified deployment:
https://frontend-production-4f1b.up.railway.app/replications/investflowtemplate-webflow-io-home-pages-home-v3/implementation/

The deployment serves the final implementation and returned HTTP 200 during verification.

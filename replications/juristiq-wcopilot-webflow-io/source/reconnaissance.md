# Juristiq source reconnaissance

## Reference
- URL: https://juristiq-wcopilot.webflow.io/
- Replication ID: juristiq-wcopilot-webflow-io
- Canonical source capture: source/screenshot.png
- Source viewport: 1920x1080
- Captured document height: 7309px

## Evidence status

### OBSERVED FROM SOURCE / SOURCE_SCREENSHOT
- The homepage is a dark/editorial legal-services design with large serif display typography and high-contrast photography.
- Header is dark, with a small Juristiq wordmark at left, compact navigation, and a light Contact Us CTA at right.
- Hero headline: "Where strategy meets results".
- Hero includes supporting copy, two CTAs, a large right-side lawyer photograph, and small supporting trust/result cards.
- The first light section is headed "Legal services for individuals, families, and businesses."
- The visible practice-area composition contains Business Law, Family Law, a centered Comprehensive Legal Services CTA panel, and Litigation.
- The source capture is a full-page 1920px-wide render with a document height of approximately 7309px.

### SOURCE RESEARCH / WEBFLOW TEMPLATE EVIDENCE
The public Webflow template listing corroborates the source's structure and feature set:
- The template is Juristiq by wcopilot.
- It is a dark, corporate law-firm template with CMS, CSS Grid, components, forms, GSAP/interactions, responsive design/navigation, and web fonts.
- The template description explicitly identifies practice areas including Business Law, Family Law, and Litigation, plus case studies, attorney biographies, testimonials, and a blog.
- The listing describes the design as dark/editorial with large serif display type and high-contrast imagery.

## DOM/CSS/runtime limitation
The live Webflow URL was successfully captured by the designated screenshot workflow, but direct DOM/computed-style extraction is not available in the current tool surface. Therefore:
- exact Webflow class names are UNKNOWN / REQUIRES VALIDATION;
- exact computed font family, spacing tokens, breakpoints, and animation timings are UNKNOWN / REQUIRES VALIDATION;
- source-specific asset URLs are UNKNOWN / REQUIRES VALIDATION.

Implementation therefore uses the validated screenshot plus the public Webflow template description as the highest available evidence, and marks inaccessible implementation details as inference rather than pretending Webflow's internal structure was inspected.

## Reconstruction specification

### Page geometry
- Canonical desktop viewport: 1920x1080.
- Full source document: approximately 7309px.
- Primary content is centered within a wide desktop container with generous horizontal gutters.
- Hero is dark and visually dominant.
- Practice-area section switches to a light background.
- Subsequent sections alternate dark/light editorial blocks.

### Typography
- Display typography: large high-contrast serif.
- Supporting/navigation typography: compact sans-serif.
- Hero heading is large, tightly wrapped, white.
- Light-section heading is dark serif.
- Exact source font files/weights are UNKNOWN / REQUIRES VALIDATION.

### Visual system
- Near-black charcoal background.
- Off-white/light neutral content surfaces.
- White text on dark sections.
- Thin low-contrast borders.
- Minimal radii, editorial rectangular image treatment.
- High-contrast photography with dark overlays in hero.

### Asset mapping
- Hero: large editorial lawyer image. Exact source asset URL UNKNOWN / REQUIRES VALIDATION.
- Practice imagery: office/interior, meeting/family, and legal/courtroom imagery are visible in the source preview. Exact URLs UNKNOWN / REQUIRES VALIDATION.
- Implementation uses remote photographic assets only where required to reproduce the observed visual role; these are explicitly treated as substitute assets because the original Webflow asset URLs were not exposed by available tools.

### Content mapping
Observed/verified text:
- Juristiq
- Where strategy meets results
- Free Consultation
- Our Services
- Client Focused
- Proven Excellence
- Legal services for individuals, families, and businesses.
- Business Law
- Family Law
- Comprehensive Legal Services
- Litigation
- Practice areas including business/family/litigation are corroborated by the Webflow template listing.

### Behavior mapping
- Responsive navigation is required by the source template.
- GSAP/interactions are listed as source template features.
- Implementation reproduces lightweight local reveal/hover behavior without copying source-site JavaScript.

### Responsive mapping
- Source listing explicitly states responsive design and responsive navigation.
- Exact breakpoints are UNKNOWN / REQUIRES VALIDATION.
- Implementation uses desktop/tablet/mobile layout transitions and a mobile menu as the equivalent local mechanism.

## Traceability
Every major implementation region is mapped to one of:
- SOURCE_SCREENSHOT: header, hero, practice section, dark/light editorial rhythm.
- SOURCE_RESEARCH: case studies, attorneys, testimonials, blog/insights, CTA/footer existence.
- INFERENCE: exact copy beyond directly observed text, exact breakpoints, local equivalent interaction implementation, substitute image assets.

## Unresolved questions
1. Exact Webflow DOM selectors/classes.
2. Exact source font family and weights.
3. Exact source image URLs.
4. Exact section-by-section heights below the visible practice section.
5. Exact animation durations/easings.
6. Exact responsive breakpoint values.

These unresolved items are intentionally not presented as observed source facts.

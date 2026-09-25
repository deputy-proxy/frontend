# Neurex Index-4.0.1 asset sources

Reference: https://neurex.webflow.io/home-01

The reconstruction uses the reference site's exact Webflow CDN assets where the public source exposes them. They remain remote rather than being re-encoded or approximated so the rendered artwork stays identical to the reference source.

## Primary imagery
- Hero dashboard: https://cdn.prod.website-files.com/68d00020514c84ecf2846fef/68e4c7f2159a18730265af5e_Group%202087331345.avif
- Team member: https://cdn.prod.website-files.com/68d00020514c84ecf2846fef/68e4bcf094d35979ebb96819_Rectangle%2034626791.avif
- Client review: https://cdn.prod.website-files.com/68d00020514c84ecf2846fef/68e4bcf0d8ad23eef2a3b96f_Rectangle%2034626790.avif
- Office: https://cdn.prod.website-files.com/68d00020514c84ecf2846fef/68e6253f096261ae58b70853_Rectangle%2034626618.avif
- Testimonial client: https://cdn.prod.website-files.com/68d00020514c84ecf2846fef/68eedc4d2e3c2497a700864b_image.avif
- Testimonial avatar: https://cdn.prod.website-files.com/68d00020514c84ecf2846fef/68e625bc6237b1d14e389a98_Rectangle%2034626634.avif

## Logos
The seven client logos are the exact SVG assets exposed by the reference Webflow page and are reused in the hero marquee and client section.

## Editorial artwork
- Insight 1: https://cdn.prod.website-files.com/68d00020514c84ecf2846fef/68e64f326c0a70fabbd5e45b_Frame.svg
- Insight 2: https://cdn.prod.website-files.com/68d00020514c84ecf2846fef/68e64f3d557c2a08bea2ee41_Frame%20%281%29.svg

## Local-storage decision
Binary Webflow CDN files are not duplicated into the repository because the available repository integration can author text/blob content but cannot reliably transfer the original AVIF/SVG binary files from the external CDN. The exact public source URLs are retained instead of introducing lossy or fabricated substitutes.

# Stripe source reconnaissance

## Reference
- URL: https://stripe.com/
- Replication ID: stripe
- Current source representation redirects to https://stripe.com/en-br.
- Canonical source capture: 1920x1080 viewport, 1920x14747 document height.

## Observed from source
The rendered homepage exposes global navigation for Products, Solutions, Developers, Resources and Pricing, plus Sign in, Start now and Contact sales actions. The main content contains the financial-infrastructure hero, flexible payment and financial product groupings, global-commerce metrics, enterprise/startup/platform material, developer infrastructure, current-news content, a final conversion/pricing section, and a large footer taxonomy.

The accessible source representation exposes the hero headline "Financial infrastructure to grow your revenue." and supporting copy about accepting payments, financial services, and custom revenue models. It also exposes the current homepage metrics: 135+ currencies/payment methods, $1.9T payments volume in 2025, 99.999% historical uptime, and 200M+ active subscriptions managed on Stripe Billing.

Important visible source assets include the Stripe wave hero asset hosted on b.stripecdn.com and product imagery hosted on images.stripeassets.com.

## Behavior
Observable navigation is reproduced locally with Alpine.js. Scroll-triggered reveal motion is implemented locally with GSAP. The source site's internal runtime is not copied.

## Responsive mapping
The implementation uses a large-screen navigation and stacked mobile navigation, with multi-column content collapsing at smaller widths and headline sizes reduced below desktop.

## Evidence provenance
- SOURCE_DOM: rendered source content hierarchy and visible labels.
- SOURCE_NETWORK / SOURCE_ASSET: source-hosted image URLs exposed by the rendered page.
- SOURCE_SCREENSHOT: canonical full-page screenshot captured by the replication screenshot workflow.
- INFERENCE: exact source computed-style values and internal animation timelines not exposed by the accessible source representation.

## Limitations
The accessible inspection does not expose every original DOM node, computed style, or internal runtime state. Those are documented as unknown rather than invented.
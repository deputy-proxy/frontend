# Verdentix Reconstruction Specification

## Source
https://verdentix.webflow.io/

## Evidence status
- Live reference content: OBSERVED
- Prior same-URL source capture: OBSERVED, 1920x1080 viewport, 1920x9451 document
- Fresh Replicator structured capture: UNKNOWN / REQUIRES VALIDATION
- Tablet/mobile geometry: UNKNOWN / REQUIRES VALIDATION

## Page hierarchy
Header/navigation; hero; trust-logo row; About Us; Our Innovations; Our Solutions; metrics; Our Blogs; FAQ; testimonial; Contact Us; footer/newsletter.

## Content
The live reference confirms the hero, About Us statistics and values, three innovation cards, five solution items, four blog cards, five FAQ questions, testimonial, contact CTA, footer links and newsletter.

## Behavior
The local implementation reproduces navigation, sticky header, reveal-on-scroll behavior and newsletter success state without loading Webflow runtime code.

## Responsive
Desktop/intermediate/mobile CSS states exist. Rendered tablet/mobile equivalence is unverified because the current Replicator capture did not return those viewports.

## Gate
Source reconnaissance is partially complete. Final PASS is blocked until fresh structured source and implementation captures succeed.

# Inspiration File Describer

Use this document when creating or documenting a new design direction for `.chatgpt/inspiration/`.

The purpose of an inspiration file is to give the frontend author enough **design reasoning** to produce a distinctive page without copying a specific website. Write about the visual system, composition, interaction model, and trade-offs.

## Required structure

Every inspiration file should contain these sections.

### 1. Name

Give the direction a concise, memorable name.

### 2. Core idea

Explain the central design concept in 2-4 sentences.

Describe what makes the direction recognizable and how it should feel when experienced.

### 3. Visual character

Describe:

- overall mood
- visual density
- level of restraint vs. expression
- geometry
- use of whitespace
- relationship between content and decoration

Avoid vague adjectives without explaining how they become visible in the interface.

### 4. Layout and composition

Describe the structural grammar of the page:

- container behavior
- column strategy
- alignment system
- hero composition
- section widths
- asymmetry or symmetry
- overlap, layering, or full-bleed treatment
- transitions between sections

Explain the composition, not a fixed pixel-perfect template.

### 5. Typography

Describe:

- type personality
- serif/sans/display/monospace roles
- headline scale and density
- body-text treatment
- hierarchy
- casing and tracking
- opportunities for unusual typographic composition

Do not prescribe a single font unless it is essential to the direction. Prefer describing the role the type should play.

### 6. Color strategy

Describe:

- base/background approach
- primary text treatment
- accent strategy
- contrast level
- use of borders or muted surfaces
- whether color should be restrained, tonal, monochrome, saturated, etc.

Avoid locking the author into one exact palette unless the palette is itself the defining characteristic.

### 7. Navigation and header

Describe the preferred navigation behavior:

- conventional vs. unconventional
- compact vs. oversized
- fixed/sticky/static
- utility elements
- menu treatment
- relationship to the hero

### 8. Hero behavior

Describe what the first viewport should communicate and how it should be composed.

Cover:

- headline placement
- supporting copy
- CTA treatment
- imagery or graphics
- visual focal point
- whether the hero should feel editorial, cinematic, technical, dense, quiet, etc.

Do not reduce this to a generic “large headline + image” recipe.

### 9. Content and section rhythm

Describe how information unfolds after the hero:

- section sequencing
- pacing
- alternating or repeated structures
- editorial moments
- data/product sections
- transitions
- opportunities for visual interruption

The direction should not assume every page needs the same sequence of sections.

### 10. Components and surfaces

Describe the treatment of:

- cards
- buttons
- forms
- lists
- metrics
- testimonials
- logos
- borders
- shadows
- dividers
- panels

Explain when these elements should be prominent and when they should disappear into the composition.

### 11. Imagery and graphic language

Describe:

- photography style
- illustration style
- cropping
- aspect ratios
- image framing
- texture
- gradients
- patterns
- diagrams
- iconography
- decorative graphics

If photography is appropriate, describe its art direction rather than naming random stock-photo subjects.

### 12. Motion and interaction

Describe:

- entrance behavior
- hover behavior
- scroll choreography
- transitions
- parallax or pinned elements when appropriate
- micro-interactions
- motion intensity

Motion should reinforce the design concept, not exist merely because GSAP is available.

### 13. Responsive behavior

Explain how the direction should transform on smaller screens.

Mention structural changes such as:

- collapsing navigation
- changing column relationships
- reordering content
- preserving or removing decorative elements
- typography scaling
- changes to image treatment

Do not simply write “make it responsive.”

### 14. Best-fit contexts

List the types of businesses, products, audiences, or content where this direction naturally works.

Also mention contexts where it would be a poor fit.

### 15. Avoid

List the visual patterns that would make this direction generic or collapse it into another direction.

Examples:

- generic SaaS gradients
- repeated three-column card grids
- oversized centered hero with stock photo
- excessive rounded cards
- decorative blobs
- predictable alternating image/text sections

Use direction-specific exclusions.

## Quality rules

### Describe systems, not screenshots

An inspiration file should explain **why the design looks and behaves the way it does**, so the author can adapt it to a new business.

### Do not write implementation code

No HTML, CSS, Tailwind classes, JavaScript, Alpine.js, or GSAP code belongs here.

### Do not copy a specific website

References can inspire a direction, but the file must describe transferable principles rather than reproduce a site's exact layout, copy, assets, or component structure.

### Make directions genuinely distinct

A useful direction should differ from existing directions in several dimensions, such as composition, typography, color, navigation, imagery, surface treatment, and motion.

### Preserve business fit

Distinctiveness is not an excuse for arbitrary design. The direction still needs to support the audience, business objective, content hierarchy, and conversion goal.

### Keep it actionable

Another designer or frontend author should be able to read the file and make concrete design decisions without needing to guess what the description means.

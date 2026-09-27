# React Bits Pro Components

Source: https://pro.reactbits.dev/docs/components

## Catalog

React Bits Pro currently lists 150 production-ready animated React components in five categories.

| Category | Count | Role |
|---|---:|---|
| Text | 11 | Typography and headline treatments |
| Backgrounds | 69 | Atmospheric, procedural, shader-like, or generative visual fields |
| 3D & Shaders | 30 | Spatial scenes, galleries, cards, image and shader interactions |
| Cursor Effects | 14 | Pointer-driven visual behavior |
| UI & Cards | 26 | Interactive presentation, cards, galleries, lists, graphs, modals, and transitions |

## Text (11)

- 3D Letter Swap
- 3D Text Reveal
- ASCII Ripple
- Bending Marquee
- Blur Highlight
- Glitch Text
- Particle Text
- Speeding Text
- Staggered Text
- Text Path
- Text Scatter

**Use for:** hero headlines, section titles, marquees, editorial emphasis, and controlled typographic spectacle. Prefer one signature text treatment over animating every heading.

## Backgrounds (69)

- ASCII Tiles
- Ascii Waves
- Aura Blob
- Aurora Beam
- Aurora Blur
- Black Hole
- Blinking Dots
- Blinking Squares
- Blurred Rays
- Chroma Waves
- Color Loops
- Dither Wave
- Dot Shift
- Eclipse
- Falling Rays
- Flame Paths
- Fog Sphere
- Glass Flow
- Glass Tiles
- Glitter Warp
- Glowing Ridges
- Glowing Wave
- Glue Dots
- Gradient Bars
- Grain Wave
- Halftone Wave
- Landscape
- Light Droplets
- Lightspeed
- Liquid Bars
- Liquid Lines
- Long Exposure
- Metallic Swirl
- Minimal Ripple
- Mosaic
- Mosaic Waves
- Neon Reveal
- Neural Flash
- Neural Float
- Neural Tunnel
- Perspective Grid
- Pixel Rain
- Radial Liquid
- Ravine
- Retro Lines
- Rising Lines
- Rising Particles
- Rolling Blinds
- Rotating Stars
- Rubber Fluid
- Shader Waves
- Shadow Bars
- Silk Waves
- Simple Swirl
- Specter Orb
- Spectral Clouds
- Square Matrix
- Squares Terminal
- Squircle Shift
- Star Swipe
- Swirl Blend
- Synaptic Shift
- Tech Wall
- Thinking Dots
- Twilight Lines
- Vortex
- Warp Twister
- Watercolor
- Wireframe Ball

**Use for:** hero atmosphere, section transitions, controlled depth, technical/creative mood, and visual signatures. Backgrounds should remain subordinate to content.

## 3D & Shaders (30)

- Agentic Ball
- AI Blob
- Bend Gallery
- Circle Stack
- Depth Card
- Depth Image
- Dolly Gallery
- Frame Border
- Glass Reveal
- Globe
- Gradient Blob
- Infinite Gallery
- Inverted Dome
- Lenticular Carousel
- Page Flip
- Parallax Carousel
- Particle Image
- Particle Morph
- Pixel Reveal
- Pixel Sculpt
- Pixelate Hover
- Portal
- Rotating Cards
- Scroll Portal
- Shader Card
- Shader Reveal
- Star Burst
- Tumble Carousel
- Twisting Gallery
- Warped Card

**Use for:** product storytelling, immersive hero scenes, galleries, image showcases, and high-impact interactive focal points. Treat WebGL/3D as a performance budget, not free decoration.

## Cursor Effects (14)

- Ascii Cursor
- Chroma Blinds
- Cursor Wave
- Custom Cursor
- Dither Cursor
- Glass Cursor
- Grid Rise
- Halftone Vortex
- Liquid Ascii
- Parallax Pills
- Pixel Magnet
- Smooth Cursor
- Text Cube
- User Cursor

**Use for:** desktop-only enhancement, creative brands, hero signatures, or focused interaction moments. Never make essential content dependent on pointer effects.

## UI & Cards (26)

- Animated List
- Card Spread
- Center Flow
- Chroma Card
- Circle Gallery
- Circles
- Click Stack
- Comparison Slider
- Credit Card
- Device
- Draggable Grid
- Frame Scrub
- Gradient Carousel
- Hover Preview
- Liquid Swap
- Magic Transform
- Modal Cards
- Parallax Cards
- Preloader
- Reel Gallery
- Scroll Mask
- Scroll Stack
- Simple Graph
- Skewed Carousel
- Tile Reveal
- Tilted Tiles

**Use for:** product previews, comparisons, interactive galleries, cards, media presentation, and data-like micro-visualizations.

## Component selection rules

1. Start with the page's signature interaction, not the component catalog.
2. Use at most a few high-impact animated primitives per viewport.
3. Prefer CSS/HTML equivalents for simple effects when the repository's implementation model makes React unnecessary.
4. Check mobile and reduced-motion behavior before selecting pointer-heavy or 3D effects.
5. Do not stack multiple competing shader/background effects.
6. A component should solve a visual or interaction problem, not exist to prove that a library was consulted.

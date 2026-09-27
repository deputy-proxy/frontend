# React Bits Pro Reference

This folder is the local design/reference index for React Bits Pro, researched from https://pro.reactbits.dev/ on 2026-09-27.

## Purpose

Use this reference to make original frontend pages more deliberate and composable. It is a **pattern library index**, not a license to copy React Bits source, proprietary prose, or complete designs verbatim.

React Bits Pro currently exposes:

- **150 animated components**
- **280 marketing/page blocks across 22 categories**
- **300 Application UI blocks across 38 categories**
- **15 complete landing-page templates**
- **20 Agent Kit assets**: 1 setup skill, 7 design skills, 8 vertical prompts, 3 page recipes, plus the library's Agent Kit index
- a shadcn-compatible registry and MCP workflow

The library emphasizes production-ready TypeScript, responsive UI, animation, theming, and AI-agent composition.

## Local structure

- `README.md` - scope, operating model, and usage rules.
- `components.md` - all 150 animated component names grouped by category.
- `blocks.md` - all 22 marketing block categories, counts, purposes, and variant catalog.
- `app-ui.md` - all 38 Application UI categories, counts, purposes, and product-surface guidance.
- `templates.md` - all 15 landing templates and their structural/design signatures.
- `agent-kit.md` - Agent Kit design skills, vertical prompts, recipes, and composition model.
- `playbook.md` - how the Author agent should select and combine React Bits patterns without turning pages into generic component dumps.

## Source model

React Bits uses two registry namespaces:

- `@reactbits-starter` for components.
- `@reactbits-pro` for marketing blocks, Application UI, and Agent Kit assets.

Components use `-tw` for Tailwind and `-css` for vanilla CSS variants. Marketing and Application UI blocks use category-number slugs such as `hero-1`, `pricing-4`, or `dashboard-3`.

The site also documents a shadcn MCP workflow where an AI agent can search, install, and compose registry items directly.

## Important boundary

The current repository's original-page contract is HTML + Tailwind CSS + Alpine.js + GSAP. React Bits Pro is primarily a React/Next.js/shadcn registry. Therefore:

1. Use this folder primarily as a **design and composition reference** for the current HTML workflow.
2. Do not introduce React merely because a React Bits pattern exists.
3. Translate the pattern into the repository's actual stack.
4. If the repository is already React/Next.js, prefer the real registry item when the project has legitimate access and the dependency is appropriate.
5. Do not copy licensed source code or large proprietary text into this repository. Use names, categories, public descriptions, and observed design principles as references.
6. Prefer a small, coherent subset of patterns over assembling a page from many unrelated blocks.

## Current React Bits model

The strongest conceptual separation is:

**Component -> Block -> Page composition -> Template -> Agent recipe**

A component is a focused visual/interaction primitive. A block is a complete page section. Application UI is product chrome and workflow surface. A template is an end-to-end page. An Agent Kit recipe is an explicit assembly strategy.

The Author agent should reason at all five levels, but implement only the level justified by the task.

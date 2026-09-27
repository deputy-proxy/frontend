# Thornhill replication

## Reference

- URL: https://thornhill.framer.website/
- Replication ID: `thornhill`

## Source reconnaissance

See `source/reconnaissance.md` for the reconstruction specification and `source/evidence.json` for evidence provenance. The live Framer page was inspected before implementation. The required Screenshot MCP source capture was attempted but the service refused the connection, so the source screenshot gate is currently blocked.

## Implementation

- Canonical implementation: `implementation/index.html`
- Tailwind CSS: compiled through the repository's existing `@tailwindcss/vite` integration.
- Local JavaScript: Alpine.js is imported from the repository dependency and initialized locally.
- External assets: two public Framer-hosted images remain because the environment could not download them locally.

## Verification status

- Source reconnaissance: PASS with constrained CSS/computed-style access.
- Source screenshot: FAIL/BLOCKED.
- Visual iteration: NOT ACCEPTED because canonical source screenshot capture is unavailable.
- Final visual verification: NOT RUN / cannot be claimed.
- Responsive verification: implementation rules are present, but canonical source breakpoint measurements remain UNKNOWN.

The replication must not be reported as complete until the Screenshot MCP service is available and the required source-to-implementation comparison has passed.

# React Bits Pro Application UI

Source: https://pro.reactbits.dev/docs/app-ui

React Bits Pro currently lists **300 Application UI blocks across 38 categories**. These are product-interface surfaces rather than marketing sections.

## Category map

### AI & Agents

| Category | Count | Structure / purpose |
|---|---:|---|
| AI Chat | 9 | Conversational agent interfaces, streaming, tool calls, sources, artifacts |
| Prompt Input | 7 | Prompt composers, commands, attachments, context, model controls |
| Agent Activity | 7 | Live run streams, timelines, logs, history |
| Tool Calls | 6 | Tool invocation cards, results, diffs, permissions |
| Agent Approval | 6 | Human-in-the-loop confirmation, permissions, audit |
| Agent Plan | 6 | Task plans, checklists, execution trees |
| AI Usage | 8 | Token spend, quotas, rate limits, per-model costs |

### Navigation

| Category | Count | Structure / purpose |
|---|---:|---|
| App Shell | 9 | Complete application frames combining navigation/header/content |
| App Sidebar | 7 | Sidebars, rails, application navigation, mobile navigation |
| Command Menu | 6 | Command palettes, quick search, actions |
| Navbar | 14 | Application top bars, marketing headers, mega menus, breadcrumbs |
| Mobile | 5 | Bottom tabs, floating docks, expanding actions, bottom sheets, mobile menus |

### Data

| Category | Count | Structure / purpose |
|---|---:|---|
| Cards | 11 | People, plans, activity, files, and card galleries |
| Data Table | 8 | Toolbars, filters, selection, inline editing, detail panels |
| Dashboard | 14 | Metric grids, charts, status boards, usage overviews |
| Analytics | 16 | Charts, metric strips, funnels, cohort matrices, reporting |
| List | 12 | Rows, feeds, queues, leaderboards, trees, selectable collections |
| Filtering | 9 | Faceted filters, query builders, result refinement |
| File Manager | 4 | Drive explorers, file grids, detail panels, upload queues |
| Monitoring | 10 | Live metrics, health, alerts, incidents, uptime, error budgets |
| Empty State | 5 | First-run, no-result, all-caught-up, failure, dropzones |

### Forms

| Category | Count | Structure / purpose |
|---|---:|---|
| Settings Form | 6 | Settings, profile forms, member management, API keys |
| Forms | 12 | Record creation/editing, validation, sections, review states |

### Overlays

| Category | Count | Structure / purpose |
|---|---:|---|
| App Dialog | 7 | Dialogs, drawers, sheets, popovers, menu overlays |
| Notifications | 6 | Notification centers, toast stacks, inboxes, banners, preferences |

### Auth & Onboarding

| Category | Count | Structure / purpose |
|---|---:|---|
| Onboarding | 7 | Profile setup, steppers, checklists, invites, activation |
| Paywall | 7 | Content locks, feature gates, plan pickers, usage caps |
| Authentication | 14 | Sign-in, sign-up, account recovery |

### Workflows

| Category | Count | Structure / purpose |
|---|---:|---|
| Kanban | 6 | Drag/drop boards, swimlanes, grouping, sprint capacity |
| Wizard | 7 | Multi-step flows, review screens, progress runs, modal wizards |
| Comments | 6 | Threads, annotations, review notes, mentions, resolve workflows |
| Scheduling | 7 | Calendars, agendas, availability, time pickers, booking |
| Integrations | 6 | Marketplaces, connection detail, API keys, webhooks, OAuth, sync |
| Editor | 5 | Rich text, markdown split views, code editors, review modes |
| Feedback | 6 | Feedback widgets, surveys, ratings, request boards, triage |
| Support | 5 | Help centers, ticket forms, conversation threads, chat widgets |
| Billing | 8 | Invoice ledgers, plan managers, invoices, dunning, usage meters |
| Chat | 6 | Team channels, DMs, support widgets, group chats, live streams |

## Application UI selection rules

1. Use App UI patterns when the page is a **product surface**, not a marketing section.
2. Identify the dominant workflow first: inspect, create, edit, communicate, approve, monitor, configure, or pay.
3. Build a stable shell before decorating individual panels.
4. Prefer the App Shell + Sidebar/Navbar + content surface model for multi-screen products.
5. Use Data Table, Dashboard, Analytics, List, Filtering, and Cards according to the user's actual data task.
6. Treat dialogs, notifications, empty states, onboarding, paywalls, and authentication as first-class states.
7. For AI products, consider the AI & Agents family as a complete interaction grammar: prompt -> activity -> tool call -> approval -> result/artifact.
8. Preserve keyboard navigation, focus management, responsive behavior, and real state transitions.

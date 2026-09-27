# React Bits Pro Application UI

Source: https://pro.reactbits.dev/docs/app-ui

React Bits Pro currently lists **300 Application UI blocks across 38 categories**. These are product-interface surfaces rather than marketing sections.

## AI & Agents

### AI Chat (9)
Conversational agent interfaces with streaming, tool calls, sources, and artifacts.

- `ai-chat-9` - Composer model picker with provider list, context, cost, and reasoning-effort control.
- `ai-chat-8` - Voice/multimodal composer with waveform capture, live transcript, and attachment previews.
- `ai-chat-7` - Chat with pinned context sources and per-message evidence citations.
- `ai-chat-6` - Multi-agent conversation with per-agent identity, handoffs, and live activity rail.
- `ai-chat-5` - Chat with inline approval requests gating destructive agent actions.
- `ai-chat-4` - Chat with model picker, live context/token meter, and settings popover.
- `ai-chat-3` - Compact embedded assistant with empty state, suggested prompts, and docked composer.
- `ai-chat-2` - Chat with generated-artifact side panel for code/document previews and versions.
- `ai-chat-1` - Full assistant thread with reasoning disclosure, live tool call, streaming answer, sources, and attachments.

### Prompt Input (7)
Prompt composers and prompt bars with commands, attachments, context, and model controls.

- `prompt-input-7` - Ask/agent/edit mode switcher with keyboard hints.
- `prompt-input-6` - @-mention context picker with scoped source pills.
- `prompt-input-5` - Drag/drop file zone with per-attachment upload progress.
- `prompt-input-4` - Prompt template editor with variables and inline validation.
- `prompt-input-3` - Hero prompt launcher with suggestion chips and recent history.
- `prompt-input-2` - Prompt box with model selector, tool toggles, and live token counter.
- `prompt-input-1` - Autosizing composer with slash commands, attachment tray, and send/stop control.

### Agent Activity (7)
Live run streams, timelines, logs, and history for autonomous agent work.

- `agent-activity-7` - Run detail panel with inputs, outputs, retries, and error surface.
- `agent-activity-6` - Parallel agent lanes showing concurrent workers, queue depth, and throughput.
- `agent-activity-5` - Terminal-style log stream with severity filters and autoscroll pin.
- `agent-activity-4` - Agent run history table with status, duration, cost, and rerun actions.
- `agent-activity-3` - Compact agent status rail with current action, progress, and stop control.
- `agent-activity-2` - Collapsible run timeline with nested substeps and duration bars.
- `agent-activity-1` - Live activity stream with per-step status dots, timers, and cancel control.

### Tool Calls (6)
Tool invocation cards, results, diffs, and permission surfaces.

- `tool-calls-6` - Tool permission row with enable/disable and scope disclosure.
- `tool-calls-5` - Code execution card with stdout/stderr tabs and exit code.
- `tool-calls-4` - Web-search result with ranked source cards and relevance metadata.
- `tool-calls-3` - File-edit result rendered as a diff with line counts.
- `tool-calls-2` - Tool call list with pending/success/failure states and retry.
- `tool-calls-1` - Tool call card with collapsible arguments, result, and timing metadata.

### Agent Approval (6)
Human-in-the-loop confirmation, permission, and audit surfaces.

- `agent-approval-6` - Audit list of approved/denied actions with filters.
- `agent-approval-5` - Approval banner for long-running/high-cost operations with estimate breakdown.
- `agent-approval-4` - Permission request card for external tool/API access with itemised scopes.
- `agent-approval-3` - Batch approval queue with selection, risk badges, and bulk decisions.
- `agent-approval-2` - Approval dialog with diff preview and allow-once/always/deny choices.
- `agent-approval-1` - Inline approval prompt for destructive action with plain-language impact.

### Agent Plan (6)
Task plans, checklists, and execution trees for multi-step agent work.

- `agent-plan-6` - Plan summary with estimated steps, required tools, and projected cost.
- `agent-plan-5` - Todo board grouped by queued/running/done.
- `agent-plan-4` - Plan-versus-actual comparison with drift indicators.
- `agent-plan-3` - Plan tree with nested subtasks, dependencies, and blocked states.
- `agent-plan-2` - Editable plan with reorder/add/skip controls.
- `agent-plan-1` - Task checklist with live status and vertical progress rail.

### AI Usage (8)
Token spend, quotas, rate limits, and per-model cost attribution.

- `ai-usage-8` - Compact plan usage widget with sparkline, meters, and upgrade prompt.
- `ai-usage-7` - Request log with tokens, latency, cost, and expandable detail.
- `ai-usage-6` - Overage notice with included-versus-billed split and upgrade picker.
- `ai-usage-5` - Budget settings with monthly cap slider, alerts, and hard stops.
- `ai-usage-4` - Per-seat usage list with team filters, search, and spend caps.
- `ai-usage-3` - Rate-limit panel with utilisation meters and tier switcher.
- `ai-usage-2` - Spend-by-model table with share bars, deltas, and sorting.
- `ai-usage-1` - Token usage overview with input/output bars and range switcher.

## Navigation

### App Shell (9)
Complete application frames pairing navigation and headers with a real content region.

- `app-shell-9` - AI chat frame with model picker, pinned/recent threads, and full-width composer.
- `app-shell-8` - Adaptive frame moving from mobile tab bar to icon rail to full sidebar.
- `app-shell-7` - Scope-switcher frame where organization/project/environment menus drive the screen.
- `app-shell-6` - Document workspace with keyboard-navigable tree, toolbar, and centered editor.
- `app-shell-5` - Master-detail triage frame with icon rail, filterable list, and reading pane.
- `app-shell-4` - Three-column frame with toggleable context panel.
- `app-shell-3` - Global top bar with search/account above collapsible sidebar.
- `app-shell-2` - Icon rail paired with a navigation pane whose contents swap by product area.
- `app-shell-1` - Sidebar with collapsible groups, breadcrumb header, and metric/record overview.

### App Sidebar (7)
Application shells, sidebars, rails, and mobile navigation.

- `app-sidebar-7` - Full app shell with sidebar, header, breadcrumbs, and content.
- `app-sidebar-6` - Mobile drawer with sheet, scrim, and collapsed app header.
- `app-sidebar-5` - Nested tree navigation with inline row actions.
- `app-sidebar-4` - Dual sidebar with icon rail and contextual secondary panel.
- `app-sidebar-3` - Workspace switcher, scoped search, and pinned items.
- `app-sidebar-2` - Icon rail with hover flyout submenus and tooltips.
- `app-sidebar-1` - Collapsible primary sidebar with groups, badges, and user menu.

### Command Menu (6)
Command palettes, quick search, and action menus.

- `command-menu-6` - Compact inline command popover anchored to toolbar.
- `command-menu-5` - Command palette with AI-ask fallback when no result matches.
- `command-menu-4` - Action menu with inline arguments and confirmation.
- `command-menu-3` - Search-first palette with typed filters and previews.
- `command-menu-2` - Nested command pages with back navigation.
- `command-menu-1` - Grouped command palette with keyboard hints and recent commands.

### Navbar (14)
Application top bars, marketing headers, mega menus, breadcrumb toolbars, and mobile navigation.

- `navbar-14` - Article header with reading progress, table of contents, bookmark, and copy link.
- `navbar-13` - Centered-logo navbar with split links and full-screen overlay menu.
- `navbar-12` - Floating translucent navbar with scroll elevation and mobile menu.
- `navbar-11` - Editor toolbar with editable title, save state, presence, and share popover.
- `navbar-10` - Docs header with version selector, command search, theme toggle, mobile nav.
- `navbar-9` - Commerce navbar with category mega panel, mini-cart, mobile drawer.
- `navbar-8` - Segmented tab bar with animated pill, overflow view menu, toolbar actions.
- `navbar-7` - Two-tier dashboard header with primary row, tabs, contextual subnav.
- `navbar-6` - App top bar with expanding search, notification popover, account menu.
- `navbar-5` - Full-width mega-menu header with grouped columns and footer CTA.
- `navbar-4` - Marketing header with animated dropdown panels and accordion mobile sheet.
- `navbar-3` - Workspace switcher bar with organization/project/environment selectors.
- `navbar-2` - Compact breadcrumb toolbar with invite, filter, sort, and overflow actions.
- `navbar-1` - Project header with breadcrumb, tab row, sliding underline, avatar stack.

### Mobile (5)
Bottom tab bars, floating docks, expanding action buttons, bottom sheets, and full-screen mobile menus.

- `mobile-5` - Top app bar with segmented control and full-screen collapsible menu.
- `mobile-4` - Bottom bar with two-snap navigation sheet and shortcut tiles.
- `mobile-3` - Floating dock that morphs into full-width search with result panel.
- `mobile-2` - Expanding action button with labelled quick actions over scrim.
- `mobile-1` - Five-tab bottom bar with spring indicator, unread badge, crossfading panels.

## Data

### Cards (11)
Card galleries and standalone cards for people, plans, activity, and files.

- `card-11` - Invoice card with line items, totals, paid status, PDF download.
- `card-10` - Balance card with headline figure, split, recent activity, money actions.
- `card-9` - Profile card with identity, tags, stats, follow/message actions.
- `card-8` - Selectable file tiles with preview panel and selection toolbar.
- `card-7` - Changelog card with version, excerpt, author, bookmark.
- `card-6` - Account metrics row with segmented date-range control.
- `card-5` - Plan card with price, specifications, includes checklist.
- `card-4` - Agenda card with date panel, attendees, RSVP.
- `card-3` - Numbered onboarding columns with completion count/reset.
- `card-2` - Integration rows with icon, description, connect switch.
- `card-1` - Member cards with presence, stats, and connect toggle.

### Data Table (8)
Tables with toolbars, filters, selection, inline editing, and detail panels.

- `data-table-8` - Wide table with sticky first column and horizontal-scroll affordance.
- `data-table-7` - Table showing empty, loading skeleton, and error states.
- `data-table-6` - Master-detail table with synchronized side panel.
- `data-table-5` - Sticky-header table with grouped rows and density toggle.
- `data-table-4` - Table with expandable in-place row details.
- `data-table-3` - Inline cell editing with optimistic save states.
- `data-table-2` - Row selection with bulk action bar and pagination.
- `data-table-1` - Toolbar with faceted filters and column visibility menu.

### Dashboard (14)
Metric grids, chart panels, status boards, and usage overviews.

- `dashboard-14` - Master-detail service board swapping metrics, chart, and activity.
- `dashboard-13` - Quarterly scorecard with objectives, key results, and burn-up.
- `dashboard-12` - Payout desk with balance, dual-series pace chart, sweep lanes.
- `dashboard-11` - Workforce coverage board with staffing bars, demand chart, action queue.
- `dashboard-10` - Metric explorer with six-measure tab strip driving one area chart.
- `dashboard-9` - Weekly worklog grid with sticky people column and allocations.
- `dashboard-8` - Module board with sparkline metrics and sortable delivery table.
- `dashboard-7` - Dashboard with loading skeletons and first-run empty state.
- `dashboard-6` - Analytics overview with segmented control and comparison mode.
- `dashboard-5` - Usage dashboard with quota meters, burn-down, upgrade CTA.
- `dashboard-4` - Operations dashboard with service status board and incident list.
- `dashboard-3` - Widget grid with per-card menus and mixed spans.
- `dashboard-2` - Primary chart panel with breakdown table and date range.
- `dashboard-1` - Metric card grid with sparklines and period deltas.

### Analytics (16)
Charts, metric strips, funnels, cohort matrices, and reporting surfaces.

- `analytics-16` - Combo chart with bars and trend line on dual axis.
- `analytics-15` - Bullet chart list with targets, deltas, and sortable rows.
- `analytics-14` - Scatter plot with quadrant guides, bubble sizing, hit testing.
- `analytics-13` - Candlestick chart with volume histogram and OHLC tooltip.
- `analytics-12` - Horizontal bar ranking with sortable measures and inline values.
- `analytics-11` - Cohort retention matrix with pinned labels and value shading.
- `analytics-10` - Radial goal gauges with target ticks and attainment sweeps.
- `analytics-9` - Activity heatmap with intensity legend and keyboard cursor.
- `analytics-8` - Conversion funnel with stage drop-off and worst-step highlight.
- `analytics-7` - Sparkline card grid with direction-aware deltas and detail panel.
- `analytics-6` - Ranked source list with composition bar and row sparklines.
- `analytics-5` - Donut chart with legend and hover-following center total.
- `analytics-4` - Stacked area chart with cumulative totals and share mode.
- `analytics-3` - Grouped bar chart with series toggles and value tooltip.
- `analytics-2` - Area chart with crosshair, keyboard cursor, and summary stats.
- `analytics-1` - Metric strip with hover-scrubbable sparklines and range control.

### List (12)
Row lists, feeds, queues, leaderboards, trees, and selectable collections.

- `list-12` - Recursive file tree with indent guides and full keyboard traversal.
- `list-11` - Support leaderboard with switchable measures, periods, rank movement.
- `list-10` - Incident runbook checklist with live progress and faded steps.
- `list-9` - Contact list with alphabet rail and relationship filtering.
- `list-8` - Inbox with archive, snooze, collapsing row, undo.
- `list-7` - Supplier directory with search, category filters, column labels.
- `list-6` - Webhook delivery log with outcome/endpoint filters and payloads.
- `list-5` - Selectable asset library with bulk action and empty state.
- `list-4` - Publishing queue reorderable by pointer/keyboard with live status.
- `list-3` - Security event feed with facet filtering and overflow fade.
- `list-2` - Ranked spend list with period switch, selection, footer action.
- `list-1` - Metric rows that expand to define each figure.

### Filtering (9)
Faceted filtering, query builders, and refinement controls.

- `filtering-9` - Cuisine pills plus rating, price, and dietary filters.
- `filtering-8` - Flight filters for time/duration plus per-airline fares.
- `filtering-7` - Horizontal facet bar over mixed-orientation asset grid.
- `filtering-6` - Candidate search with skill tokens, pay range, seniority.
- `filtering-5` - Property search with bed/bath steppers, price, amenities.
- `filtering-4` - Log explorer with severity toggles, service picker, histogram.
- `filtering-3` - Query builder whose editable chips drive a live table.
- `filtering-2` - Filter drawer with scrolling body and live result count.
- `filtering-1` - Faceted product rail with counts, price range, swatches.

### File Manager (4)
Drive explorers, asset grids, file detail panels, and upload queues.

- `file-manager-4` - Upload manager with dropzone, progress, retries, transfer summary.
- `file-manager-3` - File browser with preview, metadata, sharing, activity.
- `file-manager-2` - Asset grid with breadcrumbs, type filters, folder cards, selection.
- `file-manager-1` - Drive explorer with tree, suggested folders, file table, storage meter.

### Monitoring (10)
Live metric streams, service health, alerts, incidents, uptime, and error budgets.

- `monitoring-10` - SLO view with error-budget burn-down and objective bars.
- `monitoring-9` - Live run queue grouped by state with progress rings and environments.
- `monitoring-8` - Response-time panel with percentile cards, histogram, endpoint table.
- `monitoring-7` - Fleet table with region filters and resource utilisation meters.
- `monitoring-6` - Uptime grid with daily status bars and incident history.
- `monitoring-5` - Live log tail with level filters, follow/pause, JSON context.
- `monitoring-4` - Alert inbox with firing/pending/resolved tabs and runbooks.
- `monitoring-3` - Incident detail with status selector, response timeline, composer.
- `monitoring-2` - Live metric stream with rolling window, pause, threshold, peaks.
- `monitoring-1` - Platform health overview with KPI deltas, throughput chart, incident feed.

### Empty State (5)
First-run screens, no-result states, all-caught-up views, load failures, and dropzones.

- `empty-state-5` - Empty-folder dropzone with drag feedback and supported formats.
- `empty-state-4` - Failed-load state with request details, trace ID, retry.
- `empty-state-3` - All-caught-up view with daily summary and next actions.
- `empty-state-2` - No-search-results state with query, filter chips, suggested searches.
- `empty-state-1` - First-run workspace with future-table preview and three starting paths.

## Forms

### Settings Form (6)
Settings, profile forms, member management, and API key surfaces.

- `settings-form-6` - Danger zone with staged destructive confirmations.
- `settings-form-5` - API keys/integrations with reveal, copy, rotate, revoke.
- `settings-form-4` - Team member management with roles, invite row, pending state.
- `settings-form-3` - Preferences with switches, radio cards, segmented controls.
- `settings-form-2` - Profile form with avatar upload, validation, inline help.
- `settings-form-1` - Settings page with section nav and unsaved-changes save bar.

### Forms (12)
Record creation/editing forms with validation, sections, and review states.

- `forms-12` - Multi-step quote review with editable sections and premium summary.
- `forms-11` - Environment creation dialog with kind picker and slug availability.
- `forms-10` - Guest survey with 0-10 scale, rating matrix, conditional follow-up.
- `forms-9` - Weekly opening hours with overlap validation and live total.
- `forms-8` - Rule builder with type-aware operators and live test run.
- `forms-7` - Application form with dropzone, radio cards, token input, completion meter.
- `forms-6` - Checkout with country-driven regions, card formatting, order summary.
- `forms-5` - Provisioning form with subdomain availability, password strength, success.
- `forms-4` - Inline-edit property panel.
- `forms-3` - Booking form with editable line items and live totals.
- `forms-2` - Two-column submission form with radio cards, validation, checklist.
- `forms-1` - Label-left record form with token field, completion meter, revert.

## Overlays

### App Dialog (7)
Dialogs, drawers, sheets, popovers, and menu overlays.

- `app-dialog-7` - Popover/dropdown set with menus, submenus, separators, shortcuts.
- `app-dialog-6` - Detail sheet with summary, metadata, secondary actions.
- `app-dialog-5` - Side drawer with form and unsaved-changes guard.
- `app-dialog-4` - Multi-step dialog with progress and back/next.
- `app-dialog-3` - Form dialog with validation and sticky footer.
- `app-dialog-2` - Destructive confirmation requiring resource name.
- `app-dialog-1` - Standard dialog with header, scroll body, footer actions.

### Notifications (6)
Notification centers, toast stacks, activity inboxes, banners, and delivery preferences.

- `notifications-6` - Bell popover with unread badge and Escape-to-close.
- `notifications-5` - Inline info/warning/error/success/usage banners.
- `notifications-4` - Activity inbox with filterable list, detail, snooze.
- `notifications-3` - Delivery preference matrix for in-app/email/push with quiet hours.
- `notifications-2` - Toast stack with idle collapse, hover expansion, paused timers.
- `notifications-1` - Notification center grouped by day with unread/read/dismiss.

## Auth & Onboarding

### Onboarding (7)
First-run flows: profile setup, steppers, checklists, invites, activation.

- `onboarding-7` - Horizontal top stepper over workspace form with live URL slug.
- `onboarding-6` - Setup-complete summary with obvious next actions.
- `onboarding-5` - Invite rows with role selects, shareable link, copy action.
- `onboarding-4` - Use-case picker with option tiles and team-size control.
- `onboarding-3` - Getting-started checklist with progress and per-task action.
- `onboarding-2` - Six-step vertical stepper with real form body per step.
- `onboarding-1` - Split profile setup with live teammate-facing directory preview.

### Paywall (7)
Content locks, feature gates, plan pickers, usage caps, upgrade prompts.

- `paywall-7` - Seat-level gate routing upgrade request to workspace admins.
- `paywall-6` - Metered reads counter with email capture and sign-in alternative.
- `paywall-5` - Trial-expired card retaining data with one-click reactivation.
- `paywall-4` - Usage-cap notice with quota meters and top-up/upgrade.
- `paywall-3` - Three-plan comparison with monthly/yearly switch and current plan.
- `paywall-2` - Feature-gate dialog listing upgrade benefits.
- `paywall-1` - Article content lock with fade preview and membership card.

### Authentication (14)
Sign-in, sign-up, and account recovery.

- `authentication-14` - Sign-in approval challenge with request details and recent activity.
- `authentication-13` - Password reset with match validation and ending-device-session summary.
- `authentication-12` - Invitation acceptance split with inviter, projects, member stack.
- `authentication-11` - Workspace picker with search, invitations, empty state, fades.
- `authentication-10` - Account chooser with remembered profiles and session status.
- `authentication-9` - Passkey sign-in with device picker, waiting state, fallbacks.
- `authentication-8` - Enterprise SSO detecting provider from email domain.
- `authentication-7` - Sign-up with strength meter and password requirements.
- `authentication-6` - Six-digit code with paste, auto-verify, resend, recovery mode.
- `authentication-5` - Magic-link confirmation with delivery summary and resend.
- `authentication-4` - Two-step email then password flow.
- `authentication-3` - Split sign-in with rotating customer quote and stat strip.
- `authentication-2` - Provider-first sign-in swapping email for company domain on SSO.
- `authentication-1` - Centered sign-in with password reveal, persistence, provider row.

## Workflows

### Kanban (6)
Drag/drop boards with status columns, swimlanes, grouping, sprint capacity, detail panels.

- `kanban-6` - Compact task board with step controls and small-screen column pager.
- `kanban-5` - Sprint board with points, capacity meters, blocked flags, burn-down.
- `kanban-4` - Board with master-detail side panel and activity thread.
- `kanban-3` - Regroupable board where drop changes status, assignee, or priority.
- `kanban-2` - Swimlane board with collapsible workstreams and cross-lane drag.
- `kanban-1` - Status board with pointer/keyboard drag, WIP limits, inline composer.

### Wizard (7)
Multi-step flows with steppers, review screens, progress runs, and modal wizards.

- `wizard-7` - Compact modal wizard, one question per step, dot pagination.
- `wizard-6` - Running step with overall progress and done/active/pending/warning states.
- `wizard-5` - Review/confirm with per-section edit and confirmation checkbox.
- `wizard-4` - Service selection with tile grid and live summary footer.
- `wizard-3` - Plan selection beside invoice preview and draft status.
- `wizard-2` - Full-screen task wizard with progress bar and grouped forms.
- `wizard-1` - Card wizard with inline step header and two-column details form.

### Comments (6)
Threads, annotations, review notes, mention composers, and resolve workflows.

- `comments-6` - Canvas comment panel with numbered pins and linked side rail.
- `comments-5` - Comment inbox with All/Unresolved/Mentions and resolve actions.
- `comments-4` - Composer with mention autocomplete, attachments, formatting bar.
- `comments-3` - Code review thread with diff, notes, suggested change.
- `comments-2` - Inline document annotation with highlighted ranges and comments rail.
- `comments-1` - Threaded discussion with nested replies, reactions, sorting, composer.

### Scheduling (7)
Calendars, agendas, availability editors, time pickers, and booking.

- `scheduling-7` - Booking page with meeting summary, day strip, time-slot grid.
- `scheduling-6` - Week timeline with hour rail, events, view control.
- `scheduling-5` - Weekly availability editor with per-day switches and intervals.
- `scheduling-4` - Deadline picker with presets, calendar, time-slot column.
- `scheduling-3` - New-schedule form with attendee chips, date, times, attachments, notes.
- `scheduling-2` - Compact time-range card with start/end selects and duration chips.
- `scheduling-1` - Month calendar beside day agenda with event dots and filters.

### Integrations (6)
Integration marketplaces, connection detail, API keys, webhooks, OAuth, sync.

- `integrations-6` - Sync dashboard with source progress, failure detail, pause.
- `integrations-5` - OAuth consent with workspace picker, scopes, success state.
- `integrations-4` - Webhook endpoints beside delivery log, payloads, replay.
- `integrations-3` - API key table with masked secrets and lifecycle actions.
- `integrations-2` - Connection detail with scope switches, activity, disconnect confirmation.
- `integrations-1` - Integration marketplace with categories, search, connect, empty state.

### Editor (5)
Rich text chrome, markdown split views, code editors, review modes, outlines.

- `editor-5` - Long document reader with outline rail and focus mode.
- `editor-4` - Suggestion review with inline highlights and accept/dismiss panel.
- `editor-3` - Code editor with file tabs, gutter, minimap, status bar.
- `editor-2` - Markdown workspace with write/split/preview and live output.
- `editor-1` - Rich text editor with block menu, marks, autosave, word count.

### Feedback (6)
In-app feedback widgets, surveys, ratings, request boards, triage.

- `feedback-6` - Insights view with sentiment split, top themes, response volume.
- `feedback-5` - Triage inbox with source list and taggable detail pane.
- `feedback-4` - Feature request board with votes, status, sorting.
- `feedback-3` - Post-resolution rating with hover stars and reason chips.
- `feedback-2` - Recommendation survey with eleven-point scale and score-aware follow-up.
- `feedback-1` - In-app feedback widget with type switch, screenshot, sent state.

### Support (5)
Help centers, ticket forms, conversation threads, chat widgets, request lists.

- `support-5` - Request list with status pills, filters, reply counts.
- `support-4` - Support chat widget with workspace data and human handoff.
- `support-3` - Ticket conversation with reply composer and timeline.
- `support-2` - Ticket form with article suggestions, response-time priority, attachments.
- `support-1` - Help center home with search, topics, popular articles, contact.

### Billing (8)
Invoice ledgers, plan managers, invoice builders, dunning queues, usage meters.

- `billing-8` - Invoice detail with line items, totals, activity, collection info.
- `billing-7` - Usage/overage view with allowances, limits, estimated total.
- `billing-6` - Payment methods with primary card, billing contacts, tax details.
- `billing-5` - Plan change with tier selection and live proration.
- `billing-4` - Recovery queue with retry metrics and failed-charge log.
- `billing-3` - New invoice wizard with steps, customer details, payment terms.
- `billing-2` - Plan manager with entitlements, unsaved-change bar, toggles.
- `billing-1` - Billing overview with statement, recovery, invoice ledger.

### Chat (6)
Team channels, direct messages, social threads, support widgets, group chats, live streams.

- `chat-6` - Live-stream chat with pinned notice, host/moderator badges, viewer list.
- `chat-5` - Group chat with image/file attachments, reactions, thread counts.
- `chat-4` - Support widget with transcript, quick replies, attachments, rating.
- `chat-3` - Social thread with lead post, nested replies, reactions, composer.
- `chat-2` - Direct-message inbox with conversation list, bubbles, read receipts.
- `chat-1` - Team channel workspace with sidebar, threaded messages, composer.

## Application UI selection rules

1. Use Application UI patterns when the page is a **product surface**, not a marketing section.
2. Identify the dominant workflow first: inspect, create, edit, communicate, approve, monitor, configure, or pay.
3. Build a stable shell before decorating individual panels.
4. Prefer App Shell + Sidebar/Navbar + content surface for multi-screen products.
5. Use Data Table, Dashboard, Analytics, List, Filtering, Cards, and Monitoring according to the actual data task.
6. Treat dialogs, notifications, empty states, onboarding, paywalls, and authentication as first-class states.
7. For AI products, consider the AI & Agents family as a complete grammar: prompt -> activity -> tool call -> approval -> result/artifact.
8. Preserve keyboard navigation, focus management, responsive behavior, and real state transitions.
9. In the current repository's HTML contract, translate these structures into semantic HTML + Alpine.js state rather than introducing React solely for imitation.

# OnGround.ai — Call Centre App · Retail Web Application

A faithful, high-fidelity reconstruction of the **OnGround.ai Call Centre** application, engineered for retail call centre agents. This workspace provides real-time calling plans, missed-call recovery with expected value tracking, SOP review and adherence scoring, interactive calendar scheduling, and Pulse internal channels with AvaniBot assistance.

---

## 1. Project Overview & Purpose

In offline retail environments, over 86% of walk-in shoppers leave with zero structured follow-up. OnGround.ai provides an intelligent workflow platform for store advisors and call centre agents that ensures every lead receives a clear SOP and follow-up deadline.

This project reconstructs the call centre agent application with high visual fidelity, seamless interactive state transitions, accessible keyboard navigation, and responsive desktop/mobile layouts.

---

## 2. Screens Implemented (All 8 Screens)

| # | Screen | Description & Capabilities |
|---|---|---|
| **1** | **Dashboard** | Shared app shell, topbar with OG Score & rank (`76 ⭐#3`), KPI metric cards, daily agent progress, "Who's Waiting" queue with quick planner routing, monthly earnings with slab indicator (`₹5,200`), My Tasks panel with direct workflow shortcuts, and 7-day Calls Handled and CSAT Trend charts powered by Recharts. |
| **2** | **Plan / Calls to make** | Outgoing leads ranked by lead attractiveness score (`96` to `48`), expandable accordion rows showing customer story so far, preferred product, cross-sell recommendation, direct call initiation, and pagination controls. |
| **3** | **Plan / Incoming** | Missed-call queue prioritized by expected value at stake (`₹81,860`), customer timing and qualification context, dynamic summary statistics, and interactive "Call back" action that instantly updates call workflow and daily progress. |
| **4** | **Plan / Recent** | Comprehensive recent call history with call direction (inbound, outbound, missed), timestamps, durations, and outcome tags. Tapping any call opens the **Call SOP Review Modal** detailing adherence percentage (`83%`) and speech transcript evidence. |
| **5** | **Calendar** | Full-featured interactive month grid for October 2026, calendar event indicators, month switching across year boundaries, "Today" shortcut returning to current date, and dynamic event detail cards. |
| **6** | **Pulse Home** | AvaniBot assistant with Daily Brief & quick query actions, Kudos hero card (`3 received this month`), Role Agents (`#callcentre-agent`), Task Agents (`#cross-sell-agent`, `#sop-agent`), and channels directory. |
| **7** | **Pulse Channel** | Channel chat thread (`#callcentre-team`), timestamped message history with user messages aligned right in emerald and others left in neutral, pinned "Needs your input" card with interactive one-click options (`Confirm` / `Reschedule`) or custom reply input, and interactive message composer. |
| **8** | **Leads Modal** | Full-fidelity lead analysis modal opened directly from the dashboard task list (`2 hot leads`). Displays ICP score progress (`87%`), Lead Intent score (`91`), collapsible ICP fit breakdown, chronological customer journey, expandable buying signal buckets, previous/next paging across all 5 leads, and Escape key dismissal. |

---

## 3. Technology Stack & Rationale

- **React 18**: Component-driven architecture with clean functional components, hooks, and Context API for global state synchronization.
- **Vite 6**: Ultra-fast development server with ES module HMR and optimized production bundling.
- **JavaScript (ES6+)**: Clean, standards-compliant JavaScript without unnecessary boilerplate.
- **Vanilla CSS with Design Tokens (`tokens.css`, `layout.css`, `global.css`)**: Exact extraction of OnGround.ai design tokens (typography, color palettes, spacing, shadows, borders) matching the reference mock without heavyweight utility bloat.
- **Lucide React**: Clean, modern iconography matching the application identity.
- **Recharts**: Accessible SVG-based charting for 7-day Calls Handled bar chart and 7-day CSAT trajectory area chart.

---

## 4. Prerequisites

- **Node.js**: `v18.0.0` or higher (`v22.14.0` verified)
- **npm**: `v9.0.0` or higher (`v10.9.2` verified)

---

## 5. Installation & Run Commands

```bash
# 1. Clone repository
git clone https://github.com/SamarthGouda/onground-call-center.git
cd onground-call-center

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

The application will be live at `http://localhost:5173`.

---

## 6. Build Command

```bash
# Compile and optimize for production
npm run build

# Preview production build locally
npm run preview
```

---

## 7. Interaction Walkthrough

1. **Dashboard Workflow**:
   - Inspect the KPI cards and earnings card.
   - Click **Open planner →** in the "Who's Waiting" section to transition directly to the calling planner.
   - Click **2 hot leads** in the "My Tasks" card to open the **Leads Modal** for Mukunda.
   - In the modal, expand **Where We Picked Up Signals**, paginate using `<` / `>` or keyboard arrow keys, and press `Escape` to close.
2. **Calling Workflows**:
   - Navigate to **Plan -> Calls to make**: expand Ritu S. to inspect product requirements, or navigate through pages.
   - Navigate to **Plan -> Incoming**: inspect the ₹81,860 value at stake. Click **Call back** on Faizan A. to observe the call queue update, the value recalculation, and the real-time toast confirmation.
   - Navigate to **Plan -> Recent**: click on Mukunda R. to launch the **Call Review vs SOP** dialog with speech transcripts.
   - Click **Practise a call** in the sidebar to simulate an active call with live AI coaching nudges and timers.
3. **Calendar Workflow**:
   - Switch months using `<` and `>` buttons.
   - Click **Today** to instantly reset to October 10, 2026.
   - Click on October 12 or 15 to view scheduled coaching sessions and reviews.
4. **Pulse Workflow**:
   - Navigate to **Pulse** to inspect AvaniBot and agent channels.
   - Open `# callcentre-team`.
   - Click **Confirm** on the pinned **Needs your input** card to clear the task, update the counter, and log the resolution.
   - Type a custom message in the composer and press Enter or Send to post an outgoing message bubble.

---

## 8. Data Model & Coherent State Architecture

All entities are linked via stable identifiers in `src/context/AppContext.jsx`:

- **Leads (`src/data/leads.js`)**: Linked by `id` (`lead-1` to `lead-5`) with ICP scores, intent scores, buying signals, and journey milestones.
- **Calls (`src/data/calls.js`)**: Linked to leads via `leadId`. Supports `in`, `out`, and `missed` directions with SOP scores and transcripts.
- **Tasks (`src/data/tasks.js`)**: Connected to application actions (`open_incoming`, `open_leads_modal`, `open_recent`).
- **Calendar (`src/data/calendar.js`)**: Date-indexed events coordinated with lead follow-up deadlines.
- **Pulse (`src/data/pulse.js`)**: Channels, role/task agents, and pinned tasks synchronized with user input actions.

State updates are deterministic: executing a callback updates the call entity, updates the task counter, updates agent progress, and notifies the agent via feedback toasts.

---

## 9. Feature Checklist

- [x] Shared desktop app shell with fixed 224px sidebar and sticky topbar
- [x] Responsive layout adaptation for mobile viewports
- [x] Screen 1: Dashboard with KPIs, earnings, progress, queue, tasks, and Recharts
- [x] Screen 2: Plan / Calls to make with score ranking, expansion, and pagination
- [x] Screen 3: Plan / Incoming with expected value ranking and interactive callback
- [x] Screen 4: Plan / Recent with call outcomes and SOP adherence review modal
- [x] Screen 5: Interactive Calendar with month switching, today shortcut, and event details
- [x] Screen 6: Pulse Home with AvaniBot, Kudos, Role Agents, and Task Agents
- [x] Screen 7: Pulse Channel with pinned "Needs your input" card and message composer
- [x] Screen 8: Leads Modal with ICP/Intent scores, collapsible signals, and keyboard navigation
- [x] Bonus: Interactive AI Call Practice simulator with live timers and coaching cues
- [x] Bonus: Keyboard accessibility (`Escape` modal dismissal, pagination shortcuts)
- [x] Bonus: Toast notifications for user actions

---

## 10. Test & Verification Results

- **Build Verification**: `npm run build` completed in `7.18s` with `0 errors`.
- **E2E Browser Verification**: Tested via automated headless browser agent:
  - Verified Dashboard KPI renders and navigation shortcuts.
  - Verified Leads Modal opening from tasks, accordion toggling, and pagination.
  - Verified Incoming call callback execution and dynamic value re-calculation.
  - Verified Recent calls SOP modal and evidence transcripts.
  - Verified Calendar month navigation across year boundaries and Today reset.
  - Verified Pulse channel pinned task answer submission and message posting.
  - Verified Practice call simulation lifecycle (ringing, active timer, end call).
  - Verified console had `0 errors`.

---

## 11. Known Limitations

- Real telephony and carrier voice integration are out of scope (prototype interactions use simulated audio and timer states).
- Messages and tasks persist in React state during the active session (backend database synchronization is omitted per brief requirements).

---

## 12. AI Tools Used & Contribution

- **Google DeepMind Antigravity**: Used as pair programming assistant for inspecting the workspace mock and assignment brief, synthesizing design tokens, modular component decomposition, and running automated browser verification.

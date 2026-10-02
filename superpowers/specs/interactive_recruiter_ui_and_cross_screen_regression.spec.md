# Specification: Cross-Screen Layout Regression Fixes & Interactive Recruiter UX

> **Project:** Shubham Sharma — Techno-Functional Portfolio  
> **Core Objective:** Eliminate all layout clipping, horizontal scroll blowout, and uneven margins across all device sizes; transform static text-dense sections into an elegant, high-engagement, interactive recruiter experience while preserving 100% of the underlying content.  
> **Target Audience:** Recruiters, Staffing Leads, and Engineering Hiring Managers across Buy-Side, Sell-Side, FinTech, and Enterprise SaaS.

---

## 1. Cross-Screen Regression Analysis & Root-Cause Fixes

### A. Root Causes of Overflow & Layout Breakage (From User Screenshot)
1. **Unconstrained Flex Children in Contact Cards:**
   - `.contact-item-card` contains `.contact-item-info` which lacked `min-width: 0`.
   - Long unbroken strings (such as email addresses `shub.tech10@gmail.com` and location/phone `Himachal Pradesh, India · +91-7018049143`) push the card's width beyond its grid column container on small/medium screens.
   - **Fix:** Add `min-width: 0; overflow: hidden;` to `.contact-item-info`, and `word-break: break-word; overflow-wrap: anywhere;` to `.contact-val`.
2. **Dangerous `100vw` Container Sizing:**
   - In CSS, `100vw` includes the width of the vertical desktop scrollbar (~15–17px).
   - `max-width: 100vw` on `html`, `body`, `#root`, and `.app-container` forces content to render 17px wider than the visible viewport, producing a horizontal scrollbar. When scrolled, it shifts the content right and reveals a white canvas bar on the left.
   - **Fix:** Replace `100vw` with `100%` and apply `overflow-x: clip;` / `overflow-x: hidden;` across all root containers.
3. **Fixed `min-width: 860px` on Pipeline Track:**
   - `.pipeline-track` used a hardcoded `min-width: 860px;`.
   - Without strict parent container containment (`max-width: 100%; min-width: 0;`), grid and flex layouts expand to accommodate this minimum content width, blowing out container margins.
   - **Fix:** Set `max-width: 100%; min-width: 0;` on `.ai-progression-pipeline` and use `width: max-content;` with touch swipe-scrolling on `.pipeline-track`.
4. **Desktop Grid Collapse at Intermediate Viewports (1024px – 1180px):**
   - At 1025px, `.contact-grid` was set to `0.9fr 1.1fr; gap: 3rem;`. On narrower laptops (1080p with sidebar, 13-inch MacBooks), the column width drops below 400px while card contents require ~420px.
   - **Fix:** Adjust breakpoint for `.contact-grid` and other 2-column grids to collapse gracefully at `1100px` rather than `1024px`, and reduce intermediate gap sizes.

---

## 2. Interactive Recruiter UX Architecture (Zero Content Loss)

### A. Floating Recruiter Exploration Progress & Quick-Dock
- **Floating Progress Widget:**
  - Displays dynamic exploration status: e.g., *"Portfolio Explored: 45% · 5 of 9 Sections"*.
  - Circular or linear glowing progress indicator that tracks user scrolling via `IntersectionObserver` across all major sections.
  - Floating pill dock with quick-jump dots/icons for sections (Home, About, Journey, Skills, Case Studies, Projects, AI, Engineering, Contact).
  - Collapsible on mobile into a sleek bottom-bar or floating badge so it never obscures content.

### B. "Executive View" vs "Deep Technical View" Interactive Switcher
- **Global / Section-Level View Toggle:**
  - **Executive View (Default for Recruiters):** Highlights business impact, key metrics, high-level architecture pillars, and quick takeaways.
  - **Deep Technical View (For Hiring Managers & Architects):** Expands full Gherkin user stories, data schemas, API payload structures, and technical edge cases.
  - Recruiters can review the full value proposition in 90 seconds, while deep technical evaluators can toggle to inspect engineering rigor without feeling overwhelmed by initial wall-of-text fatigue.

### C. Enhanced Micro-Interactions across Sections
1. **Career Journey:**
   - Interactive timeline selector: clicking any stage animates the milestone details, displaying core responsibility chips, quantifiable outcomes, and verifiable client context.
   - Interactive "Highlights vs Full Scope" tab on each milestone.
2. **Skills & Capabilities:**
   - Interactive category switcher with vibrant accent glows (Gold for BA, Cyan for Tech, Emerald for Capital Markets, Purple for AI).
   - Interactive skill chip hover elevation and active filtering.
3. **Capital Markets Flagship Case Study:**
   - 7-Stage Trade Lifecycle Pipeline: Interactive step-by-step stage sequencer with animated pulse and active stage details.
   - Exception Triage Simulator: Real-time middle-office desk queue with instant resolution badges (`Pending Triage` → `Auto-Resolved`) and confetti/pulse feedback.
4. **Contact Form Recruiter Quick-Presets:**
   - 1-click inquiry chips above the form:
     - `💼 Senior BA / Consulting Role`
     - `📈 Capital Markets Project`
     - `🤖 AI / GenAI Engagement`
     - `☕ Quick Coffee Chat`
   - Clicking any chip instantly pre-fills the subject and personalized message template into the form inputs with zero typing needed.

---

## 3. Implementation Steps & Validation
1. **Regression Fixes:** Apply CSS root containment, remove all `100vw`, add `min-width: 0` to all flex/grid items, ensure unbroken word wrapping on contact items.
2. **Recruiter Progress Component:** Author `src/components/RecruiterDock.jsx` tracking active section and exploration percentage.
3. **Interactive View Modes:** Add Executive vs Technical view toggles in `Skills.jsx`, `FeaturedWork.jsx`, and `CapitalMarketsCaseStudies.jsx`.
4. **Contact Form Quick Presets:** Add 1-click subject buttons to `src/components/Contact.jsx`.
5. **Testing & Verification:** Run `npm test -- --run` to ensure all 22+ tests pass, build production bundle with `npm run build`, and verify across 320px, 375px, 768px, 1024px, and 1440px.

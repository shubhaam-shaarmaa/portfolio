# Specification: Multi-Device Responsive Architecture (Mobile, Tablet, Laptop, Desktop)

> **Project:** Shubham Sharma — Techno-Functional Portfolio  
> **Target Devices:** Small Mobile (320px–375px), Standard Mobile (375px–480px), Portrait Tablet (481px–768px), Landscape Tablet / Small Laptop (769px–1024px), Standard Laptop / Desktop (1025px–1440px), Ultrawide (1440px+)  
> **User Preferences:**
> - Touch-friendly horizontal swipe-scroll with subtle indicators and pill chips for multi-step pipelines and category filters.
> - Frosted glass slide-down navigation drawer with high-contrast links and quick-access Resume CTA.
> - Fluid typography via CSS `clamp()` ensuring zero horizontal scroll even on 320px (iPhone SE).

---

## 1. Breakpoint Architecture & Tokens

| Breakpoint Tier | Media Query Range | Primary Layout Characteristics |
|---|---|---|
| **Mobile Extra-Small (SE)** | `<= 375px` | Single-column, compact cards, `clamp()` fluid headings, full-width buttons, 16px input fonts (iOS zoom prevention). |
| **Mobile Standard** | `376px – 480px` | Single-column, 44px+ touch targets, swipeable horizontal chips, stacked actions. |
| **Tablet Portrait** | `481px – 768px` | 1-to-2 column adaptive grids, collapsible mobile drawer, touch-scrollable pipelines. |
| **Tablet Landscape / Laptop** | `769px – 1024px` | 2-column balanced layouts, compact desktop navigation or hybrid drawer, comfortable side-by-side cards. |
| **Desktop / Laptop** | `1025px – 1440px` | Full multi-column grids (3–4 cols), full desktop sticky navbar, hover micro-interactions. |
| **Large Desktop / Ultrawide** | `> 1440px` | Centered 1240px container (`--max-width`), fluid margins, high-density clarity without stretching. |

---

## 2. Core Responsive Enhancements by Component

### A. Global Layout & Typography
- **Container Sizing:** `padding: 0 clamp(1rem, 3.5vw, 2rem);` across all main content sections.
- **Fluid Typography Tokens:**
  - Hero Headline: `font-size: clamp(1.85rem, 5.5vw + 0.5rem, 3.75rem);`
  - Section Titles: `font-size: clamp(1.6rem, 3.5vw + 0.25rem, 2.5rem);`
  - Subheadings & Role: `font-size: clamp(0.95rem, 2vw + 0.2rem, 1.25rem);`
- **Zero Horizontal Overflow:** Enforce `overflow-x: clip` or `overflow-x: hidden` with `max-width: 100vw` on `html`, `body`, `#root`, and `.app-container`.
- **Form Usability:** All `<input>`, `<textarea>`, and `<select>` elements set to `font-size: 16px` minimum to eliminate iOS Safari auto-zooming.
- **Touch Target Standard:** Minimum 44px height and width on all clickable elements (`min-height: 44px; min-width: 44px;`).

### B. Navbar & Mobile Menu Drawer
- **Header Structure:** Logo + Avatar scaled for small screens so it never overflows or collides with the hamburger button.
- **Frosted Glass Mobile Drawer:**
  - Backdrop blur (`rgba(8, 12, 20, 0.97)`, `backdrop-filter: blur(20px)`).
  - High-contrast touch links with tap indicators.
  - Dedicated mobile "Download Resume" CTA button inside the drawer for immediate recruiter action.
  - Auto-close when clicking any link or backdrop.
  - Full keyboard accessibility with `aria-expanded` and focus handling.

### C. Hero Section
- **Desktop:** 2-column grid (Content 1.2fr, Profile Card 0.8fr).
- **Tablet / Mobile:** Single column stack. Profile card auto-centers with max-width constrained to 100%.
- **Credibility Metric Strip:**
  - Desktop: 4 columns.
  - Tablet (768px): 2 columns.
  - Small Mobile (<= 480px): 2 columns with compact padding, or 1 column if `< 360px`.
- **CTA Actions:** Full-width buttons on mobile with flex-wrap so buttons never truncate.

### D. Professional Identity & Narrative
- Pillars grid switches from 3 columns to 1 column on tablet/mobile.
- "Techno-Functional Intersection" diagram stacks gracefully into clear, readable cards without overlapping pills.
- Metrics cards scale using `repeat(auto-fit, minmax(240px, 1fr))`.

### E. Career Journey Timeline
- **Timeline Navigation Tabs:**
  - On mobile and tablet, use horizontal swipe-scroll with `-webkit-overflow-scrolling: touch` and `scrollbar-width: none`.
  - Pill chips retain `white-space: nowrap` and `flex-shrink: 0`.
- **Journey Milestone Card:**
  - Header with company logo, title, and period stacks cleanly into 1 column.
  - Bullet points have responsive padding and line height.

### F. Skills & Capabilities
- Category tabs switch to smooth horizontal touch-scroll.
- Capability cards scale from 3 columns (desktop) to 2 columns (tablet) to 1 column (mobile).
- Skill tag pills wrap naturally with 6px gap and touch-friendly padding.

### G. Featured Work & BA Spec Modal
- Project cards: buttons stack vertically on mobile screens <= 480px.
- **BA Spec Modal:**
  - Container width: `width: 92vw; max-width: 860px; max-height: 88vh;`
  - Sticky modal header with 44px close button.
  - Modal body uses responsive padding `clamp(1rem, 3vw, 2rem)`.
  - Preformatted code snippets and user story tables use horizontal scrolling without breaking the modal dialog width.

### H. Capital Markets Case Studies & Trade Lifecycle Simulator
- **7-Stage Trade Lifecycle Pipeline:**
  - Horizontal swipeable stage pipeline with smooth touch scrolling and active stage indicator.
  - Active stage details card adapts gracefully to mobile with stacked As-Is vs. To-Be and API schemas.
- **Reconciliation Exception Simulator:**
  - Desk queue items stack exception badge, description, and resolution buttons vertically on small screens.
  - Action buttons expand to full width on mobile for easy tapping.

### I. AI Journey & Roadmap
- "Current Daily Tools" vs. "Building Toward Roadmap" stacks vertically on tablet/mobile with clear visual partitioning.
- 8-Project Roadmap cards adapt from 4 columns to 2 columns to 1 column.
- AI Architecture layered diagram displays cleanly with responsive stacking.

### J. Contact Form & Footer
- Form grid: 2-column input row collapses to 1-column on mobile.
- Direct contact method cards stack cleanly with responsive copy buttons.
- Footer: multi-column layout collapses to centered vertical stack with safe spacing.
- Back to Top button: positioned above mobile bottom sheets (`bottom: 1.5rem; right: 1.25rem;`).

---

## 3. Testing & Verification Plan

1. **Responsive Viewport Testing:**
   - 320px (iPhone SE / small mobile)
   - 375px / 390px (iPhone 12/13/14/15)
   - 768px (iPad portrait)
   - 1024px (iPad landscape / small laptop)
   - 1440px / 1920px (Desktop / Ultrawide)
2. **Horizontal Overflow Audit:**
   - Verify `document.documentElement.scrollWidth === document.documentElement.clientWidth` across all breakpoints.
3. **Automated Unit Tests:**
   - Ensure all 21 regression tests continue to pass.
   - Add/verify test coverage for mobile navigation drawer open/close and responsive elements.
4. **Production Build:**
   - Confirm `npm run build` succeeds with 0 errors.

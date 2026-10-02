# Specification: 5-Section High-Impact Interactive Architecture
Reference: [Ayush Sharma Portfolio (https://ayushsharman.github.io/)](https://ayushsharman.github.io/)

## 1. Objective
Refactor the portfolio from an 11-section scrolling layout into **5 high-impact, consolidated interactive sections**, delivering maximum recruiter engagement and visual punch while preserving **100% of existing content, case studies, user stories, technical specs, and positioning**.

---

## 2. Five Consolidated Sections

### Section 1: Hero & Positioning (`#hero`)
- **Visuals:** High-impact typography with fluid clamp headers, truthful credibility strip (4+ Years, Enterprise Experience, US Investment Mgmt Exposure).
- **Portrait:** Original portrait photo with preserved top-center headroom.
- **CTAs:** View Selected Work (`#work`), Ask Shubham (`#ask`), Download Resume, LinkedIn, GitHub.

### Section 2: `// ask_shubham.exe` — "Skip the bio. Just ask." (`#ask`)
- **Concept:** Direct Ayush-style interactive conversational interface for recruiters and hiring managers.
- **Interactive Question Chips:**
  1. `What roles are you targeting?` -> Answers Senior BA / Techno-Functional Consultant in Capital Markets & AI. Link: `#contact`.
  2. `What's your Capital Markets experience?` -> Answers 4+ years at Infosys, 7-stage trade lifecycle, middle-office triage, T+1 DTCC settlements. Link: `#work`.
  3. `How does your engineering background help as a BA?` -> Answers SQL auditing, API schema mapping, JAD sessions, zero translation loss. Link: `#journey`.
  4. `What are you building in AI & GenAI?` -> Answers production roadmap: RAG pipelines, agentic triage, MCP tools, LLMOps. Link: `#journey`.
  5. `What is your career progression at Infosys?` -> Answers 4 promotions from Trainee (2022) to Senior Associate Consultant (2026). Link: `#journey`.
  6. `Can I see a real work sample / spec?` -> Direct link to inspect Gherkin criteria & SQL scripts. Link: `#work`.
- **Features:** Typing simulation, conversation thread history, chip dismissal on click, restart conversation option.

### Section 3: `// selected_work/` — Flagship Case Studies & Systems (`#work`)
- **Consolidation:** Merges Capital Markets Case Studies + Featured Work into one cohesive, high-impact section.
- **Controls:**
  - Executive Summary vs Deep Technical Specs toggle.
  - Domain Category Filters (`All Focus Areas`, `Capital Markets`, `AI & GenAI`, `Business Analysis`, `Asset Management`).
- **Interactive Deliverables:**
  - 7-Stage End-to-End Trade Lifecycle interactive stage visualizer.
  - Interactive Middle-Office Exception Triage Simulator (3 real trade break scenarios with live resolution count).
  - Project Cards with problem, approach, contribution, business value, tech chips.
  - Inline "Quick Peek" code drawer (SQL / Gherkin).
  - Detailed Spec Artifact Modal (dialog with keyboard Escape dismissal).

### Section 4: `// journey_and_capabilities/` — Professional Evolution & Technical Core (`#journey`)
- **Consolidation:** Merges Career Journey + Skills + Engineering Foundation + Certifications into an interactive multi-view container:
  - **Sub-Tab 1: Career Progression (2022–Present)**: 5 timeline milestones with quick-selector pills and core narrative banner.
  - **Sub-Tab 2: Core Capabilities**: 4 pillars (Business Analysis, Capital Markets, Technology, AI & GenAI Current vs Building).
  - **Sub-Tab 3: Engineering Core & AI Systems**: 4 technical pillars + Progressive AI Target Architecture layers.
  - **Sub-Tab 4: Certifications & Honors**: Infosys Certified Business Consultant, Capital Markets Domain Specialization, Global Agile Developer.

### Section 5: `// contact/` — Direct Message & Connect (`#contact`)
- **Direct Email:** Serverless FormSubmit dispatch to `shub.tech10@gmail.com` with `_replyto` and offline `mailto:` fallback.
- **1-Click Recruiter Presets:** 4 instant chips (`💼 Senior BA Role`, `📈 Capital Markets Project`, `🤖 AI & GenAI Engagement`, `☕ Quick Coffee Chat`).
- **Photo Banner:** Centered face alignment guaranteed across all devices.

---

## 3. Navigation & Floating Exploration Dock
- **Navbar Links:** `Home` (`#hero`), `Ask` (`#ask`), `Work` (`#work`), `Journey` (`#journey`), `Contact` (`#contact`) + `Resume`.
- **RecruiterDock:** Updated to track the 5 consolidated sections with live percentage, jump pills, and minimize toggle.

---

## 4. Quality & Regression Verification
- All Vitest tests updated to reflect consolidated 5-section architecture.
- `npm run build` verified.
- Zero secrets committed.

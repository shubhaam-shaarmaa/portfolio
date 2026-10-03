# Spec: Option 5 — AI-Native Dynamic Canvas & Command Deck Revamp

## 1. Vision & Architectural Goal
Revamp the entire portfolio to embody the **Option 5: AI-Native Dynamic Canvas & Command Deck** paradigm while strictly preserving **100% of all data, text, metrics, case studies, Gherkin stories, schemas, and interactive functionality**.

The design transforms the portfolio from a long multi-section webpage into a cohesive, high-tech command center inspired by modern developer AI environments (Cursor, Vercel AI Playground, Arc Browser, Bloomberg Terminal).

## 2. Core UI/UX Components of Option 5

### A. System Header & Command Deck (`<CommandDeck />`)
- **System Metadata Bar**: Displays terminal prompt `[shubham@portfolio ~]$`, system status (● ACTIVE / LIVE T+1 COMPLIANT), and quick action pills.
- **Compact Hero Summary**:
  - Name: **Shubham Sharma**
  - Headline: **Techno-Functional Business Analyst** (Capital Markets & Asset Management · AI & GenAI)
  - Truthful Metrics: `4+ Years Enterprise Exp`, `US Investment Mgmt Exposure`, `78% Break Reduction`, `99.9% T+1 DTCC Affirmation`.
  - Quick Download Resume button & direct LinkedIn/GitHub/Email links.
- **Interactive Command Prompt Bar**:
  - Clickable command chips:
    - `// trade_lifecycle` (Flagship T+1 Settlement & Exception Resolver)
    - `// technical_initiatives` (All 6 Portfolio Projects & Deliverables)
    - `// career_progression` (5-Stage Trajectory from 2022 to Present)
    - `// core_capabilities` (BA, Capital Markets, Tech, AI Current vs Building)
    - `// ai_roadmap` (8-Project Production AI Roadmap & Architecture)
    - `// ask_terminal` (Ayush Sharma interactive Q&A console)
    - `// contact_shubham` (Direct Email Delivery with Recruiter Presets)
  - Real-time command search filter allowing recruiters to type commands or filter topics instantly.

### B. Dynamic Glowing Canvas Sheet (`<DynamicCanvasSheet />`)
The centerpiece of Option 5: a sleek, glowing glass sheet container with neon cyan/gold/purple trim that projects the active deliverable:
- **Canvas Top Bar**:
  - Active deliverable mono tag (e.g. `// canvas/trade_lifecycle_spec.json`)
  - **Dual Perspective Switcher**: `Executive Summary` vs `Deep Technical Specs` (toggles the view immediately!)
  - Quick Canvas Switcher Navigation (Pill tabs for fast navigation without scrolling)
- **Dynamic Content Canvas**:
  - **Sheet 1: Flagship Trade Lifecycle & Middle-Office Optimization**:
    - *Executive View*: 3 KPI cards, Strategic Problem vs Delivered Solution, 7-Stage Interactive Lifecycle Stepper, Middle-Office Exception Triage Simulator (with real-time break resolution & reset).
    - *Technical View*: 4-Tab Workbench (As-Is vs To-Be & Problem, Requirements & Gherkin User Stories, Data Model & Relational Schemas, UAT Scenarios & Business Impact), plus the DTCC CTM / FIX 4.4 JSON Message Inspector.
  - **Sheet 2: Technical Initiatives & Deliverables (6)**:
    - Status & Focus Area filter pills, Project cards, inline Quick Peek code preview, and Inspect Spec Artifact modal.
  - **Sheet 3: Career Progression & Capabilities**:
    - 5-stage timeline (2022 to Present) + Core Capabilities partitioned into BA, Capital Markets, Technology, and AI (Current vs Building roadmap).
  - **Sheet 4: Engineering Foundation & Credentials**:
    - 4 Engineering Pillars (Frontend UI, Data Auditing, API Contracts, DevSecOps) + Professional Identity centerpiece + 6 Certifications & Honors.
  - **Sheet 5: AI Production Roadmap & Architecture**:
    - 8-project roadmap pipeline (RAG, Agents, MCP, Evals, LLMOps, Fine-Tuning, Security, Model Routing) + layered AI architecture diagram.
  - **Sheet 6: Interactive Terminal & Direct Contact**:
    - The `// ask_shubham.exe` interactive Q&A terminal + Contact Form submitting directly to `shub.tech10@gmail.com` with recruiter preset chips and toast feedback.

## 3. Preservation & Non-Regression Guarantees
- **Zero Data Loss**: Every user story, Gherkin scenario, SQL query, database table schema, interview Q&A, milestone, metric, and contact detail is preserved 100%.
- **Zero Functional Regressions**:
  - 7-stage trade stepper desk inspection works.
  - Exception triage simulator works and tracks resolution count.
  - Filter pills and search in technical initiatives work.
  - Modals open and close with Escape key and backdrop clicks.
  - FormSubmit email forwarder to `shub.tech10@gmail.com` and mailto fallback work.
  - Perspective toggle switches immediately between Executive and Deep Technical views.
  - Hash navigation (`#work`, `#case-studies`, `#projects`, `#journey`, `#skills`, `#contact`) updates the canvas sheet automatically.
- **Tests & Build**:
  - All tests in `components.test.jsx` will be adapted to verify the Option 5 canvas architecture.
  - `npm run build` must compile cleanly without errors or warnings.

## 4. Implementation Steps
1. Create `src/components/CommandDeck.jsx` (System terminal prompt, hero metrics, interactive command chips).
2. Create `src/components/DynamicCanvasSheet.jsx` (Glowing canvas sheet container with perspective switcher, sheet tabs, and dynamic content projector).
3. Update `src/App.jsx` to assemble the Option 5 layout as the primary interface.
4. Refine `src/index.css` with Option 5's AI-native aesthetic (obsidian black, glowing cyan/gold/purple glass borders, monospace terminal accents, responsive layout).
5. Run Vitest regression tests and update assertions.
6. Verify production build with `npm run build`.
7. Update `decisions/decisions.md` and `learnings/learnings.md`.
8. Commit locally on `main` (await user command before deploying).

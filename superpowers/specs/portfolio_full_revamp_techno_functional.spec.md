# Spec: Full Portfolio Revamp — Techno-Functional Business Analyst

> **Candidate:** Shubham Sharma  
> **Primary Identity:** Techno-Functional Business Analyst  
> **Specialization:** Capital Markets & Asset Management  
> **Technical Differentiator:** Frontend Engineering + SQL + APIs + Technology Delivery  
> **Emerging Differentiator:** AI & GenAI (Learning & Applying)  
> **Target Persona:** Senior Recruiters & Hiring Managers at Investment Banks, Asset Managers, FinTechs, Enterprise SaaS, Consulting Firms  

---

## 1. Objectives & Positioning Strategy

1. **Unify the Professional Brand:** Evolve from fragmented "Frontend Developer / Business Analyst / FinTech" into a singular, authoritative identity: **Techno-Functional Business Analyst (Capital Markets & Asset Management | AI & GenAI | Product & Technology)**.
2. **Tell One Cohesive Career Narrative:** Frontend Engineering (2022) → Financial Services (2022–2024) → Capital Markets & Technical Delivery (2024–2025) → Business Analysis & Consulting (2025–2026) → Techno-Functional BA & AI Enablement (2026–Present).
3. **Enforce Strict Credibility Guardrails:**
   - Zero fabricated metrics, budgets, or revenue numbers.
   - Client exposure framed truthfully: *"US-based investment management client"*.
   - Use nuanced contribution verbs: *"Contributed"*, *"Supported"*, *"Collaborated"*, *"Worked with"*, *"Assisted with"*, *"Applied knowledge of"*.
   - All conceptual projects explicitly labeled *"Portfolio Case Study"* or *"Conceptual Case Study"*.
   - AI capabilities strictly partitioned: Current AI-assisted development (Gemini, ChatGPT, Copilot) vs. Building/Planned (RAG, Agents, MCP, Evals, LLMOps). No claims of being an "AI Engineer" or having production LLM deployments.
4. **Build Extensible Data Architecture:** Separate UI from content via structured data models (`portfolioData.js`, `projectsData.js`, `aiRoadmapData.js`, `capitalMarketsData.js`) allowing new projects to be added seamlessly with status tags (`COMPLETED`, `IN PROGRESS`, `PLANNED`).
5. **Modern Enterprise Design System:** High-end institutional palette (deep navy slate, gold/amber domain accents, subtle cyan technical cues), crisp typography (Space Grotesk + Plus Jakarta Sans), responsive layouts, semantic SEO, and full accessibility.

---

## 2. Information Architecture (Homepage 11-Section Flow)

| Section # | Section Name | Key Contents & Purpose |
|---|---|---|
| **01** | **Hero** | Primary headline: *TECHNO-FUNCTIONAL BUSINESS ANALYST*, domain & AI tags, core hook, CTA buttons (View My Work, LinkedIn, GitHub, Resume), profile card. |
| **02** | **Professional Identity** | *"Business × Technology × Capital Markets"* intersection diagram with Techno-Functional Solutions at center and AI & GenAI as 4th emerging capability. |
| **03** | **Career Journey** | Visual 5-stage progressive timeline (2022 Trainee → 2022–24 SE → 2024–25 SSE → 2025–26 AC → 2026–Present SAC) showing natural expansion of responsibilities. |
| **04** | **Core Capabilities** | 4 capability grids: Business Analysis, Capital Markets, Technology, and AI & GenAI (strictly split into Current vs. Building). |
| **05** | **Featured Work** | Extensible project cards with Title, Category, Status badge (`COMPLETED`, `IN PROGRESS`, `PLANNED`), Problem, Approach, Contribution, Tech, Business Value, Links. |
| **06** | **Capital Markets Case Studies** | Flagship interactive *Trade Lifecycle Analysis* (Initiation → Order Mgmt → Execution → Confirmation → Settlement → Reconciliation → Reporting) + deep-dive specs (As-Is, To-Be, User Stories, Acceptance Criteria, Data/API). Explicitly labeled *Portfolio Case Study*. |
| **07** | **AI Journey** | Subtitle: *"From applying AI to building AI-powered solutions"*. Visual 8-project roadmap (RAG → Agents → MCP → Evals → LLMOps → Fine-Tuning → Security → Model Routing) + *AI Architecture — Building Progressively* diagram. |
| **08** | **Engineering Foundation** | React, JS, HTML, CSS, Material UI, REST APIs, SQL, AWS, CI/CD, Docker, Git, Snyk, DevSecOps presented as supporting technical evidence. |
| **09** | **Certifications & Achievements** | Compact, understated credentials section (projects outrank certifications). |
| **10** | **Resume CTA** | *"Want the complete story?"* clean call-to-action with Download Resume and LinkedIn buttons. |
| **11** | **Contact & Footer** | Direct email with copy button, phone, LinkedIn, GitHub, and professional closing statement. |

---

## 3. Data Architecture Design

### Project Schema (`src/data/projectsData.js`)
```javascript
{
  id: string,
  title: string,
  category: string, // 'Business Analysis' | 'Capital Markets' | 'AI & GenAI' | 'Enterprise Technology'
  status: 'COMPLETED' | 'IN PROGRESS' | 'PLANNED',
  featured: boolean,
  summary: string,
  problem: string,
  approach: string,
  contribution: string,
  technologies: string[],
  businessValue: string,
  caseStudyUrl?: string,
  githubUrl?: string,
  liveDemoUrl?: string,
  specPreview?: {
    type: 'gherkin' | 'api' | 'sql' | 'workflow',
    content: string
  }
}
```

### AI Roadmap Schema (`src/data/aiRoadmapData.js`)
```javascript
{
  step: number,
  capability: string, // 'RAG', 'Agents', 'MCP', etc.
  projectTitle: string,
  purpose: string,
  status: 'CURRENTLY BUILDING' | 'PLANNED',
  stack: string[],
  keyDeliverable: string
}
```

---

## 4. Execution Checklist

- [ ] **Phase 1: Content & Data Architecture**
  - [ ] Write `src/data/portfolioData.js` with accurate narrative, credibility guardrails, and career journey.
  - [ ] Write `src/data/projectsData.js` with structured projects and explicit status badges.
  - [ ] Write `src/data/capitalMarketsData.js` with comprehensive Trade Lifecycle analysis and case studies.
  - [ ] Write `src/data/aiRoadmapData.js` with the 8-project progressive roadmap and architecture nodes.
- [ ] **Phase 2: Design System & Styling (`src/index.css`)**
  - [ ] Refine institutional slate/navy theme tokens with gold, cyan, and emerald accents.
  - [ ] Build status pill system (`COMPLETED`, `IN PROGRESS`, `PLANNED`).
  - [ ] Build responsive grid systems for identity intersection, career journey, roadmap, and case studies.
  - [ ] Optimize mobile layouts and prevent horizontal overflow.
- [ ] **Phase 3: Component Implementation**
  - [ ] Overhaul `Navbar.jsx` with updated navigation items.
  - [ ] Overhaul `Hero.jsx` with precise techno-functional messaging.
  - [ ] Create `ProfessionalIdentity.jsx` (Business × Technology × Capital Markets + AI).
  - [ ] Create `CareerJourney.jsx` (5-stage progressive timeline).
  - [ ] Overhaul `Skills.jsx` (Core Capabilities 4-pillar matrix).
  - [ ] Overhaul `CaseStudies.jsx` / `FeaturedWork.jsx` (Structured projects with deliverable modal).
  - [ ] Overhaul `TradeLifecycle.jsx` (7-step Capital Markets deep dive + exception analysis).
  - [ ] Create `AiJourney.jsx` (8-step roadmap + evolving architecture diagram).
  - [ ] Create `EngineeringFoundation.jsx` (Technical depth supporting BA identity).
  - [ ] Overhaul `Experience.jsx` / `Achievements.jsx` (Compact credentials & honors).
  - [ ] Create `ResumeCta.jsx` (Understated resume banner).
  - [ ] Overhaul `Contact.jsx` & `Footer.jsx`.
  - [ ] Integrate all sections into `App.jsx`.
- [ ] **Phase 4: SEO, Verification & Testing**
  - [ ] Update `index.html` with title, meta tags, and structured metadata.
  - [ ] Update Vitest tests in `components.test.jsx`.
  - [ ] Run `npm run build` and ensure 0 compilation errors.
  - [ ] Update `decisions/decisions.md` and `learnings/learnings.md`.
  - [ ] Conduct 20-second recruiter inspection check.

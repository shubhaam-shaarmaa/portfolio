# Spec: Dead Code Elimination & Clean Optimization

## 1. Objective
Thoroughly identify, isolate, and remove all dead, unreferenced, and obsolete code from the portfolio application to optimize repository hygiene, bundle size, and build performance, while keeping the user-facing look, feel, design, and functionality 100% identical.

## 2. Audit Findings & Targets for Removal

### A. Dead Unreferenced Components (7 Files in `src/components/`)
These components were replaced during earlier consolidation refactorings and are never imported or rendered by any part of the active application:
1. `src/components/Achievements.jsx` (2 KB) — Superseded by `Certifications.jsx`.
2. `src/components/CaseStudies.jsx` (10.8 KB) — Superseded by `CapitalMarketsCaseStudies.jsx`.
3. `src/components/DocExplorer.jsx` (28.5 KB) — Superseded by interactive deliverable modals and workbench tabs.
4. `src/components/Experience.jsx` (2.7 KB) — Superseded by `CareerJourney.jsx`.
5. `src/components/ProductThinking.jsx` (5.2 KB) — Legacy unreferenced standalone view.
6. `src/components/Summary.jsx` (6.6 KB) — Legacy unreferenced standalone summary.
7. `src/components/TradeLifecycle.jsx` (6.4 KB) — Legacy standalone component; lifecycle flow is integrated inside `CapitalMarketsCaseStudies.jsx`.

### B. Dead Unreferenced Data Modules (12 Files in `src/data/`)
1. `src/data/explorerData.js` (14.1 KB) — Exclusively used by the legacy `DocExplorer.jsx`.
2. `src/data/caseStudies/index.js` (640 B) — Exclusively used by legacy `CaseStudies.jsx`.
3. `src/data/caseStudies/caseStudy_1.js` through `caseStudy_10.js` (10 files, ~170 KB) — Mock stub datasets generated for the old `CaseStudies.jsx`.

### C. Dead Unused Asset (1 File in `src/assets/`)
1. `src/assets/shubham_contact_full.jpg` (192 KB) — Never imported in any JavaScript, JSX, or CSS file (`Contact.jsx` uses `shubham_contact.jpg`).

### D. Obsolete Root Scripts and Artifacts (3 Files)
1. `gen_studies.cjs` (1.4 KB) — Node generator script for dummy case studies.
2. `gen_studies.js` (1.4 KB) — Duplicate node generator script.
3. `Shubham_Sharma_Resume.pdf` in project root (745 B) — Obsolete placeholder stub from project creation. Genuine resume resides in `src/assets/` and `public/`.

## 3. Preservation & Non-Regression Guarantees
- **Visual Design**: The 5 consolidated sections (`#hero`, `#ask`, `#work`, `#journey`, `#contact`), Navbar, RecruiterDock, BackToTop, and Toast remain 100% unchanged.
- **Functionality**: Both perspective views (Executive Summary vs. Deep Technical Specs), 7-stage trade lifecycle stepper, exception triage simulator, ask_shubham interactive terminal, contact form submission with FormSubmit/mailto fallback, and hash routing remain fully functional.
- **Test Suite**: All 37 tests in `src/components/__tests__/components.test.jsx` will continue to pass with 0 failures.
- **Build**: `npm run build` must continue to succeed without errors or warnings.

## 4. Execution Plan
1. Delete the 7 dead components in `src/components/`.
2. Delete the dead data files (`src/data/explorerData.js` and `src/data/caseStudies/`).
3. Delete the dead asset `src/assets/shubham_contact_full.jpg`.
4. Delete the 3 obsolete root files (`gen_studies.cjs`, `gen_studies.js`, and root `Shubham_Sharma_Resume.pdf`).
5. Run Vitest suite (`npm test -- --run`) to verify all 37 tests pass.
6. Run `npm run build` to verify clean production compilation and measure bundle size reduction.
7. Record decisions in `decisions/decisions.md` and learnings in `learnings/learnings.md`.
8. Commit locally on `main` without pushing or deploying (awaiting user command).

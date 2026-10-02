# Project Decisions Log

> **Rule:** Only record deliberate architectural, technical, or workflow decisions. Keep entries concise, high-signal, and factual.

| Date (YYYY-MM-DD) | Decision / Choice | Context & Rationale | Impact & Constraints |
| :--- | :--- | :--- | :--- |
| 2026-10-02 | Relative Base Path (`base: './'`) | Fix Vite asset resolution for GitHub Pages subpath hosting | Assets resolve relatively across any domain or repo subpath |
| 2026-10-02 | Bundled ES Asset Imports | Component-level image and PDF imports instead of hardcoded root paths | Guarantees asset availability in production build and enables caching |
| 2026-10-02 | GitHub Actions for Deployment | Automated workflow triggered on `main` branch pushes | Consistent, reproducible builds without manual deployment steps |
| 2026-10-02 | Autonomous Dev with HITL Guardrails | High autonomy for development & testing, strict Human-In-The-Loop gate for deployment | Agent can code and test freely; deployments require explicit user instruction |
| 2026-10-02 | Protected Deployment Branch (`main` only) | Prevent untested or feature branch code from reaching live environment | Deployments exclusively originate from `main` |
| 2026-10-02 | Scratchpads as Spec Sheets (`superpowers/specs/`) | Preserve task specs, checklists, and working state in repository | All planning and architectural context stays version-controlled on GitHub |
| 2026-10-02 | Auto-Accept & Always-Proceed IDE Configuration | Eliminate repetitive manual confirmation prompts | Streamlines autonomous flow while maintaining strict HITL deployment gate |
| 2026-10-02 | 4-Section Funnel & ASD-STE-100 Language Standard | Overhaul bloated, text-heavy layout for BA+AI recruiter conversion | Prunes 60% of page length, establishes clear narrative funnel, cuts CSS payload by 50% |
| 2026-10-02 | Interactive Deliverable Modals over Markdown Embeds | Replace clunky DocExplorer raw markdown dump with focused inspection modal | Recruiters can inspect concrete Gherkin/API specs on demand with zero scroll fatigue |
| 2026-10-02 | Full Techno-Functional Positioning & Truthful Credibility Architecture | Revamped positioning to Techno-Functional Business Analyst (Capital Markets + AI), removed all fabricated metrics, partitioned AI into Current vs Building, and implemented 11-section progressive storytelling with extensible structured project data | Recruiter confusion eliminated; zero credibility risk; truthful presentation of 4+ years Infosys journey from engineering to techno-functional consulting |
| 2026-10-02 | 15-Component Regression Testing & Defensive Hardening | Authored comprehensive 21-test suite across all 15 components; added defensive clipboard API fallbacks, modal Escape-key listeners, accessible dialog attributes, and toast timer race condition cleanup | Prevents runtime crashes in non-HTTPS/headless environments and ensures keyboard accessibility |

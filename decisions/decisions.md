# Project Decisions Log

> **Rule:** Only record deliberate architectural, technical, or workflow decisions. Keep entries concise, high-signal, and factual.

| Date (YYYY-MM-DD) | Decision / Choice | Context & Rationale | Impact & Constraints |
| :--- | :--- | :--- | :--- |
| 2026-10-02 | Relative Base Path (`base: './'`) | Fix Vite asset resolution for GitHub Pages subpath hosting | Assets resolve relatively across any domain or repo subpath |
| 2026-10-02 | Bundled ES Asset Imports | Component-level image and PDF imports instead of hardcoded root paths | Guarantees asset availability in production build and enables caching |
| 2026-10-02 | GitHub Actions for Deployment | Automated workflow triggered on `main` branch pushes | Consistent, reproducible builds without manual deployment steps |
| 2026-10-02 | Autonomous Dev with HITL Guardrails | High autonomy for development & testing, strict Human-In-The-Loop gate for deployment | Agent can code and test freely; deployments require explicit user instruction |
| 2026-10-02 | Protected Deployment Branch (`main` only) | Prevent untested or feature branch code from reaching live environment | Deployments exclusively originate from `main` |

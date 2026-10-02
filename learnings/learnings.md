# Project Learnings Log

> **Rule:** Only record genuine technical discoveries, debugging lessons, or project-specific insights. No generic fluff.

| Date (YYYY-MM-DD) | Learning / Insight | Root Cause & Context | Actionable Rule for Future |
| :--- | :--- | :--- | :--- |
| 2026-10-02 | Root-relative URLs (`/image.jpg`) break on GitHub Pages | GitHub Pages hosts under a repository subpath (`/<repo>/`) where `/` points to `<username>.github.io` | Always use relative paths (`./`) or ES module imports (`import img from '../assets/...'`) |
| 2026-10-02 | Windows user PATH changes are not auto-inherited by active child shells | Registry updates to User PATH require terminal restart or explicit session prefixing | Explicitly verify and load `$env:LOCALAPPDATA\Programs\Git\cmd` in script runners |
| 2026-10-02 | Vite deduplicates identical binary assets | Identical files with same SHA256 hashes produce a single hashed asset chunk | Check file hash equality when diagnosing unexpected asset count in `dist/` |
| 2026-10-02 | Token minimization requires progressive context loading | Dumping full files into context wastes tokens and slows iteration | View targeted slices and maintain structured specs in `superpowers/specs/` |
| 2026-10-02 | Cognitive load reduction drives recruiter conversion | 10-tab sprawling portfolios trigger reader fatigue within 8 seconds | Spotlight Top 3 flagship systems, gate deep specs behind progressive disclosure modals |

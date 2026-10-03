# Feature Specification: Dynamic Experience Calculation from June 30, 2022

> **Location:** `superpowers/specs/dynamic_experience_calculation.spec.md`  
> **Rule:** Every non-trivial feature, refactor, or architecture change must have a spec sheet written before coding begins.

---

## 1. Feature Summary & Objectives
- **Goal:** Dynamically compute and display professional experience based on the career start date of June 30, 2022 (`2022-06-30`) instead of hardcoding static strings like "4+ years".
- **Formatting:** Display experience in years rounded to one decimal place (e.g., `4.3 years` / `4.3 Years`).
- **Success Criteria:**
  1. Centralized calculation function `getExperienceYears(startDate = '2022-06-30')` returns the exact elapsed years rounded to 1 decimal place.
  2. All occurrences of hardcoded "4+ years" / "4+ Years" across `portfolioData.js`, `CommandDeck.jsx`, `DynamicCanvasSheet.jsx`, `RecruiterDock.jsx`, and `AskShubham.jsx` dynamically resolve to the calculated value.
  3. All 46 Vitest tests continue to pass with regex-adapted assertions.
  4. Production build (`npm run build`) compiles cleanly without errors.

---

## 2. Clarifications & User Inputs
- **User Instruction:** "I want experience displayed 4+ years that should be dynamic not needed to update regularly count my experience from 30th june 2022 till now and then do the calculation and build logic and display it on the portfolio where ever it it there it should be in years and round off till one digit after decimal example: 4.3 years"
- **Start Date:** June 30, 2022 (`2022-06-30`).
- **Decimal Precision:** 1 digit after decimal (e.g. `4.3 years` or `4.3 Years`).

---

## 3. Architecture & File Impact
- **Files Modified:**
  - `src/data/portfolioData.js`: Define `EXPERIENCE_START_DATE`, `getExperienceYears()`, `DYNAMIC_EXPERIENCE_YEARS`, `DYNAMIC_EXPERIENCE_LABEL`, `DYNAMIC_EXPERIENCE_TEXT`. Update `PERSONAL_INFO.experienceYears`, `PERSONAL_INFO.keyMetrics`, and `ABOUT_NARRATIVE.body2`.
  - `src/components/CommandDeck.jsx`: Use dynamic metric value for Enterprise Experience.
  - `src/components/DynamicCanvasSheet.jsx`: Use dynamic experience string in pane description.
  - `src/components/RecruiterDock.jsx`: Use dynamic experience in the career journey hint.
  - `src/components/AskShubham.jsx`: Use dynamic experience in the middle-office experience Q&A response.
  - `src/components/__tests__/components.test.jsx`: Update assertions to match dynamic experience pattern (`/\d+\.\d+\s*years/i`).
  - `decisions/decisions.md` & `learnings/learnings.md`: Log technical choices and learnings.
- **New Files Created:** None.
- **Dependencies:** None.

---

## 4. Implementation Steps (Execution Plan)
1. **Step 1: Centralized Logic in `src/data/portfolioData.js`**
   - Implement `getExperienceYears()` using timestamp subtraction divided by `365.25 * 24 * 60 * 60 * 1000`.
   - Export helper constants and format strings.
2. **Step 2: Component Integration**
   - Update `CommandDeck.jsx`, `DynamicCanvasSheet.jsx`, `RecruiterDock.jsx`, `AskShubham.jsx`.
3. **Step 3: Test Adaptation & Verification**
   - Update `src/components/__tests__/components.test.jsx` so test expectations verify the dynamic calculation.
   - Run `npm test -- --run` to ensure all 46 tests pass.
4. **Step 4: Build Verification**
   - Run `npm run build` to ensure zero compilation or bundling errors.
5. **Step 5: Documentation & Git Commit**
   - Record in `decisions/decisions.md` and `learnings/learnings.md`.
   - Commit locally on `main` (hold deployment until explicit user command).

---

## 5. Security & Guardrails Checklist
- [x] No hardcoded tokens, passwords, or personal credentials.
- [x] Relative asset paths verified (`./`).
- [x] No changes outside `d:\Porfolio\shubham-portfolio`.
- [x] Deployment held until explicit user command.
- [x] Logged in `decisions/decisions.md` and `learnings/learnings.md` upon completion.

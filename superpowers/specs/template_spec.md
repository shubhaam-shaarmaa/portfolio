# Feature Specification Template

> **Location:** `superpowers/specs/<feature_name>.spec.md`  
> **Rule:** Every non-trivial feature, refactor, or architecture change must have a spec sheet written before coding begins.

---

## 1. Feature Summary & Objectives
- **Goal:** Brief 1-2 sentence description of what is being built and why.
- **Success Criteria:** Measurable indicators that the task is complete.

---

## 2. Clarifications & User Inputs
- **Questions Asked:** Key questions posed to the user before development.
- **User Decisions:** Answers and preferences provided by the user.

---

## 3. Architecture & File Impact
- **Files Modified:** List of existing files to touch.
- **New Files Created:** Any new components, assets, or data structures.
- **Dependencies:** Any new npm packages required (must be vetted for security).

---

## 4. Implementation Steps (Execution Plan)
1. Step 1: Component / structure setup
2. Step 2: Logic and styling integration
3. Step 3: Local build validation (`npm run build`)
4. Step 4: Visual / functional verification

---

## 5. Security & Guardrails Checklist
- [ ] No hardcoded tokens, passwords, or personal credentials.
- [ ] Relative asset paths verified (`./`).
- [ ] No changes outside `d:\Porfolio\shubham-portfolio`.
- [ ] Deployment held until explicit user command.
- [ ] Logged in `decisions/decisions.md` and `learnings/learnings.md` upon completion.

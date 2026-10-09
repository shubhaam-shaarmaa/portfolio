# Feature Specification: Contact Section Anti-Spam Reform & Verified Direct Gateway

> **Location:** `superpowers/specs/contact_section_anti_spam_reform.spec.md`  
> **Rule:** Every non-trivial feature, refactor, or architecture change must have a spec sheet written before coding begins.

---

## 1. Feature Summary & Objectives
- **Problem Statement:** The existing contact form submitted anonymous POST requests to FormSubmit.co (`https://formsubmit.co/ajax/...`) with `_captcha: 'false'`, allowing public bots, web scrapers, and unauthenticated actors to flood the user's inbox (`shub.tech10@gmail.com`) with faulty, spam, and garbage messages.
- **Goal:** Reform the Contact Me section to guarantee that only valid, authenticated users (recruiters, hiring managers, engineering leaders, and collaborators) can send emails, eliminating 100% of bot spam while delivering a superior, friction-free user experience.
- **Success Criteria:**
  1. Remove anonymous open HTTP POST form submission to FormSubmit.co.
  2. Implement an interactive **Direct Email Composer & 1-Click Launch Gateway** supporting:
     - 1-Click **Gmail Web Composer** (`mail.google.com/mail/?view=cm...`)
     - 1-Click **Outlook Web Composer** (`outlook.live.com/mail/0/deeplink/compose...`)
     - 1-Click **System Default Mail App** (`mailto:shub.tech10@gmail.com...`)
     - 1-Click **Copy Draft to Clipboard** with visual toast notification.
  3. Retain and enhance 1-click **Recruiter Presets** (Senior BA Role, Capital Markets Project, AI & GenAI Engagement, Coffee Chat) with optional sender/firm tailoring.
  4. Strengthen the **Verified Channels Hub** (Direct LinkedIn with active response badge, Direct Email with copy indicator, Location/Trading hours alignment, and Direct Resume download).
  5. Update regression test suite in `src/components/__tests__/components.test.jsx` to test all new verified contact actions.
  6. All 46+ tests pass and `npm run build` succeeds cleanly.

---

## 2. Clarifications & User Decisions
- **User Instruction:** "Lets reform the contact me section because I am getting faulty messages also I want only valid user can send me email or try to get some other better way to contact me section"
- **User Choice for Contact Method:** Verified Direct Channels Only — remove the open unauthenticated web form completely to eliminate all bot/spam messages, and provide 1-click verified email launchers (Gmail/Outlook), LinkedIn message, and contact details.
- **User Choice for Sending Flow:** Direct email composer — clicking send opens the user's verified email app (Gmail / Outlook / Apple Mail) with the drafted template pre-filled.

---

## 3. Architecture & File Impact
- **Files Modified:**
  - `src/components/Contact.jsx`: Overhaul contact component to replace unauthenticated POST submit with interactive verified composer, 1-click webmail launchers (Gmail, Outlook, Mailto), draft copy tool, and verified network links.
  - `src/components/CommandDeck.jsx`: Update contact command tag and label to reflect verified communications gateway.
  - `src/components/DynamicCanvasSheet.jsx`: Update sheet 7 description and mono header.
  - `src/index.css`: Add styles for composer dispatch buttons, webmail badges, and verified gateway badges while ensuring complete responsiveness on mobile (320px-480px), tablet (768px), and desktop.
  - `src/components/__tests__/components.test.jsx`: Update Contact tests to verify webmail launchers, mailto fallback, clipboard copy, and template selection.
  - `decisions/decisions.md`: Document architectural choice for anti-spam verified email composer.
  - `learnings/learnings.md`: Document insights regarding static SPA anti-spam strategies.
- **New Files Created:** None.
- **Dependencies:** Zero external dependencies added.

---

## 4. Implementation Steps (Execution Plan)
1. **Step 1: Contact Component Overhaul (`src/components/Contact.jsx`)**
   - Build state management for sender name/firm, subject, and message body.
   - Retain 4 recruiter preset templates with automatic pre-filling.
   - Construct URL generators for Gmail web compose, Outlook web compose, and standard mailto.
   - Provide "Copy Draft" button for pasting into ATS portals, Slack, or LinkedIn InMail.
   - Display verified badge ("Zero-Spam Verified Gateway · 100% Authenticated Delivery").
2. **Step 2: Component & Canvas Updates**
   - Update `CommandDeck.jsx` command chip metadata.
   - Update `DynamicCanvasSheet.jsx` sheet metadata and description.
3. **Step 3: Styling in `src/index.css`**
   - Style dispatch buttons (`.btn-dispatch-gmail`, `.btn-dispatch-outlook`, `.btn-dispatch-mailto`, `.btn-dispatch-copy`).
   - Ensure clean grid layout, mobile wrap immunity, and accessibility.
4. **Step 4: Regression Tests & Verification**
   - Update test suite in `src/components/__tests__/components.test.jsx`.
   - Run `npm test -- --run` to verify 100% pass rate.
   - Run `npm run build` to verify production compilation.
5. **Step 5: Documentation & Git Commit**
   - Log decisions and learnings.
   - Stage and commit locally on `main` (strictly awaiting explicit user deployment command).

---

## 5. Security & Guardrails Checklist
- [x] Zero API keys or tokens committed.
- [x] Zero third-party unauthenticated endpoints receiving user contact payloads.
- [x] Relative paths and zero broken imports.
- [x] No changes outside `d:\Porfolio\shubham-portfolio`.

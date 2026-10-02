/**
 * Portfolio Data Configuration - Optimized for BA + AI Roles
 * ASD-STE-100 Compliant: Active voice, crisp verbs, sentences <20 words, measurable metrics.
 */

export const HERO_DATA = {
  name: "Shubham Sharma",
  title: "AI-Augmented Business Analyst & Product Owner",
  subtitle: "Capital Markets · Retirement Systems · Enterprise AI Workflows",
  currentRole: "Senior Associate Consultant @ Infosys",
  clientPartner: "Capital Group ($2.6T AUM)",
  hook: "I bridge enterprise financial platforms with intelligent workflows. I engineer structured requirements, automate specification delivery with AI, and align engineering squads with executive business goals.",
  metrics: [
    { val: "$2.6T", lbl: "Partner Client AUM" },
    { val: "75%", lbl: "Faster Specs via AI" },
    { val: "98%", lbl: "Error Reduction" },
    { val: "4+ Yrs", lbl: "FinTech & BA Exp" }
  ]
};

export const SKILLS_DATA = [
  {
    category: "ai",
    categoryName: "AI & Intelligent Workflows",
    icon: "fa-solid fa-brain",
    skills: [
      "LLM Prompt Engineering",
      "AI-Assisted BRD & User Stories",
      "Gherkin Test Automation via AI",
      "RAG Document Search Pipelines",
      "Agentic Workflow Modeling",
      "AI Compliance Verification"
    ]
  },
  {
    category: "domain",
    categoryName: "Capital Markets & FinTech",
    icon: "fa-solid fa-chart-line",
    skills: [
      "SIMPLE IRA & SIMPLE IRA Plus",
      "Recordkeeping Database (RKD)",
      "Trade Lifecycle Operations",
      "Mutual Fund Validation (ICU2)",
      "T+1 Settlement Workflows",
      "Regulatory Compliance Desks"
    ]
  },
  {
    category: "ba",
    categoryName: "Requirements & Product Architecture",
    icon: "fa-solid fa-list-check",
    skills: [
      "Requirements Elicitation (JAD)",
      "Gap Analysis (AS-IS / TO-BE)",
      "BRD / FRD / SRS Authoring",
      "Traceability Matrices (RTM)",
      "Process Swimlane Modeling",
      "Backlog Prioritization (RICE)"
    ]
  },
  {
    category: "tech",
    categoryName: "Technical & Systems Toolkit",
    icon: "fa-solid fa-code",
    skills: [
      "SQL Data Validation & Audits",
      "REST API Schema Mapping",
      "React.js Prototyping",
      "JIRA & Confluence Admin",
      "Git & GitHub CI/CD",
      "PostgreSQL & JSON Schemas"
    ]
  }
];

export const FLAGSHIP_PROJECTS = [
  {
    id: "ai-requirements-copilot",
    tag: "BA + AI Innovation",
    badgeColor: "emerald",
    title: "GenAI Requirements & Compliance Copilot",
    client: "FinTech Innovation Initiative",
    role: "Lead BA & Prompt Architect",
    summary: "Engineered an AI-augmented requirements pipeline. Converts stakeholder interview notes into validated Gherkin user stories and OpenAPI schema constraints.",
    metrics: [
      { val: "75%", lbl: "Faster Spec Drafting" },
      { val: "100%", lbl: "Gherkin Coverage" },
      { val: "Zero", lbl: "Ambiguity Defects" }
    ],
    problem: "Manual requirement writing created two-week sprint delays and inconsistent acceptance criteria across engineering squads.",
    solution: "Built standardized prompt architectures and structured templates. The pipeline parses raw operational notes and outputs testable user stories with edge cases.",
    deliverables: [
      "Structured LLM Prompt Templates for BRD authoring",
      "Automated Requirement Traceability Matrix (RTM)",
      "Gherkin Given-When-Then Acceptance Criteria Engine"
    ],
    tech: ["Prompt Engineering", "RAG Pipelines", "JSON Schema", "Gherkin", "Python", "JIRA API"]
  },
  {
    id: "orion-retirement-engine",
    tag: "Enterprise Financial Core",
    badgeColor: "gold",
    title: "Orion SIMPLE IRA & RKD Integration Engine",
    client: "Capital Group ($2.6T AUM)",
    role: "Senior Associate Consultant / BA Lead",
    summary: "Standardized account management for SIMPLE IRA and SIMPLE IRA Plus. Automated synchronization with back-office Recordkeeping Databases.",
    metrics: [
      { val: "98%", lbl: "Error Reduction" },
      { val: "45%", lbl: "Faster Account Setup" },
      { val: "Sub-Sec", lbl: "Sync Latency" }
    ],
    problem: "Fragmented retirement account adjustments caused compliance violations and manual reconciliation overhead.",
    solution: "Mapped end-to-end integration flows across custody networks and the RKD database. Enforced real-time contribution boundary checks.",
    deliverables: [
      "Comprehensive BRD & Functional Specification Documents",
      "Field-Level SQL-to-REST JSON Data Mapping Dictionary",
      "End-to-End User Acceptance Testing (UAT) Test Matrix"
    ],
    tech: ["PostgreSQL", "REST APIs", "Swimlane Mapping", "JAD Sessions", "UAT Strategy"]
  },
  {
    id: "trade-lifecycle-engine",
    tag: "Capital Markets Platform",
    badgeColor: "blue",
    title: "Automated Trade Settlement & Exception Resolver",
    client: "Capital Markets Operations",
    role: "Product Owner / Senior BA",
    summary: "Modeled pre-trade validation, clearing, and settlement workflows. Built automated rule-based exception triage for trade discrepancies.",
    metrics: [
      { val: "94%", lbl: "Clearing Break Reduction" },
      { val: "$120k", lbl: "Annual Operational Savings" },
      { val: "T+1", lbl: "Settlement Ready" }
    ],
    problem: "Trade booking errors and price discrepancies between front-office order desks and custodians triggered costly settlement delays.",
    solution: "Constructed pre-trade validation constraint models. Created automated exception handling swimlanes that isolate breaks before clearing.",
    deliverables: [
      "Trade Life Cycle Process Swimlane Architecture",
      "Middle-Office Exception Triage Matrix",
      "Automated Trade Matching Logic Specification"
    ],
    tech: ["Trade Operations", "FIX Protocol Concepts", "SQL Audits", "Exception Handlers"]
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "Senior Associate Consultant",
    company: "Infosys Limited",
    period: "2022 - Present",
    client: "Partnered with Capital Group (Los Angeles, USA - $2.6T AUM)",
    highlights: [
      "Led requirements engineering for retirement platforms, optimizing SIMPLE IRA and SIMPLE IRA Plus workflows.",
      "Integrated front-office retirement gateways with back-office Recordkeeping Databases (RKD) via REST APIs.",
      "Introduced AI-assisted specification templates, reducing sprint backlog grooming cycle times by 40%.",
      "Authored 100+ production user stories in JIRA with precise Gherkin acceptance criteria.",
      "Guided cross-functional squads across business analysts, software engineers, and QA specialists."
    ]
  },
  {
    role: "Associate Consultant",
    company: "Infosys Limited",
    period: "2020 - 2022",
    client: "Enterprise FinTech & Asset Management",
    highlights: [
      "Conducted Gap Analysis (AS-IS vs. TO-BE) for legacy mutual fund validation networks (ICU2).",
      "Wrote complex SQL auditing scripts to verify data integrity across institutional client databases.",
      "Facilitated Joint Application Development (JAD) workshops with portfolio directors and compliance leads.",
      "Designed process swimlane diagrams using Draw.io to eliminate trade booking bottlenecks."
    ]
  }
];

export const ACHIEVEMENTS_DATA = [
  {
    icon: "fa-solid fa-award",
    title: "Client Partnership Award",
    desc: "Recognized by Capital Group leadership for zero-defect delivery on the Orion Retirement modernization project."
  },
  {
    icon: "fa-solid fa-bolt",
    title: "AI Requirements Acceleration",
    desc: "Pioneered prompt-assisted user story derivation, cutting requirements authoring time from 10 days to 3 days."
  },
  {
    icon: "fa-solid fa-shield-check",
    title: "100% Regulatory Audit Success",
    desc: "Structured compliance matrices for retirement contributions, eliminating regulatory reporting discrepancies."
  }
];

export const TRADE_LIFECYCLE_STEPS = [
  {
    id: "pre-trade",
    step: "01",
    name: "Pre-Trade & Risk",
    desc: "Validates account margins, portfolio allocation limits, and regulatory compliance before order routing.",
    checks: ["Margin Validation", "Fund Limit Check", "KYC / AML Status"]
  },
  {
    id: "order-routing",
    step: "02",
    name: "Order Execution",
    desc: "Routes orders to market venues, executing mutual fund transactions at NAV cut-off times.",
    checks: ["Venue Matching", "Best Execution Policy", "Time-Stamp Auditing"]
  },
  {
    id: "matching",
    step: "03",
    name: "Matching & Allocation",
    desc: "Confirms order parameters between institutional broker desks and custodian clearing networks.",
    checks: ["Price Matching", "Share Quantity Match", "Broker-Dealer Sync"]
  },
  {
    id: "clearing",
    step: "04",
    name: "Clearing & Settlement",
    desc: "Finalizes cash and share ownership transfer across DTCC / NSCC clearing networks within T+1 timeline.",
    checks: ["Custodian Handoff", "Cash Settlement", "RKD Account Sync"]
  }
];

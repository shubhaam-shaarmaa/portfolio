export const SKILLS_DATA = [
  {
    category: "ba",
    categoryName: "Business Analysis",
    icon: "fa-solid fa-list-check",
    skills: ["Requirements Elicitation", "Gap Analysis (AS-IS/TO-BE)", "BRD & FRD Authoring", "Process Swimlane Mapping", "User Story Engineering", "Gherkin Acceptance Criteria", "UAT Strategy"]
  },
  {
    category: "domain",
    categoryName: "Retirement & Asset Management",
    icon: "fa-solid fa-chart-line",
    skills: ["SIMPLE IRA & SIMPLE IRA Plus", "Recordkeeping Database (RKD)", "Mutual Fund Validation (ICU2)", "Portfolio Benchmarks", "Trade Lifecycle Operations"]
  },
  {
    category: "agile",
    categoryName: "Product Ownership",
    icon: "fa-solid fa-arrows-spin",
    skills: ["Backlog Prioritization (RICE/MoSCoW)", "Sprint Refinement Grooming", "Stakeholder Alignment", "Scrum Execution"]
  },
  {
    category: "tech",
    categoryName: "Techno-Functional Toolkit",
    icon: "fa-solid fa-code",
    skills: ["SQL Data Auditing", "REST API Schema Validation", "React UI Prototyping", "AWS Cloud Systems", "CI/CD Deployment Pipelines"]
  },
  {
    category: "tools",
    categoryName: "Systems & Platforms",
    icon: "fa-solid fa-toolbox",
    skills: ["JIRA & Confluence Administration", "draw.io Flow Charts", "PostgreSQL Database Engine", "Power BI Analytics"]
  }
];

export const BA_RESPONSIBILITIES = [
  { icon: "fa-solid fa-comments", text: "Elicited and modeled functional system specifications for Retirement platforms through direct JAD sessions with Product Directors and SMEs.", tag: "Elicitation" },
  { icon: "fa-solid fa-file-pen", text: "Authored comprehensive Business Requirements Documents (BRD) and Functional Specifications (FSD) detailing contribution mapping rules.", tag: "Documentation" },
  { icon: "fa-solid fa-magnifying-glass-chart", text: "Conducted Gap Analysis comparing legacy RKD operations against modernized ICU2 validation networks to minimize failed transactions.", tag: "Gap Analysis" },
  { icon: "fa-solid fa-diagram-project", text: "Mapped end-to-end account execution workflows using draw.io, detailing exception handling and clearinghouse routing logic.", tag: "Process Mapping" },
  { icon: "fa-solid fa-users-gear", text: "Guided offshore engineering squads through sprint grooming, resolving functional design anomalies and refining story backlogs.", tag: "Agile Leadership" },
  { icon: "fa-solid fa-vial-circle-check", text: "Structured regression testing scenarios and coordinated client User Acceptance Testing (UAT), triaging contribution discrepancies.", tag: "UAT Strategy" }
];

export const SYSTEMS_RESPONSIBILITIES = [
  { icon: "fa-solid fa-users", text: "Coordinated requirements across cross-functional squads, aligning portfolio managers, backend services, custodian networks, and testing desks.", tag: "Cross-team Sync" },
  { icon: "fa-solid fa-network-wired", text: "Mapped transaction field structures directly to REST API JSON payloads, preventing data conversion mismatches between upstream and downstream interfaces.", tag: "API Orchestration" },
  { icon: "fa-solid fa-database", text: "Constructed data auditing scripts using SQL to validate fund matching rules, helping QA and database teams verify data integrity.", tag: "Data Validation" },
  { icon: "fa-solid fa-shield-halved", text: "Collaborated with Compliance and Risk management groups to map contribution limits and verify pre-trade constraints.", tag: "Risk & Compliance" }
];

export const CASE_STUDIES_DATA = [
  {
    id: "cs-1",
    title: "Orion SIMPLE IRA Account Manager",
    client: "Capital Group",
    role: "Senior Product Owner / Principal BA",
    domain: "Retirement Account Management & Real Work Experience",
    metrics: [
      { val: "45%", lbl: "Faster Account Setup" },
      { val: "Zero", lbl: "Manual Entry Errors" },
      { val: "5 Clicks", lbl: "Simplified User Journey" }
    ],
    problem: "Retirement plan administrators spent too much time adjusting SIMPLE IRA account data manually, leading to compliance risks and user fatigue.",
    baApproach: [
      "Conducted user interviews with plan administrators, creating empathy maps and journey boards.",
      "Elicited operational parameters for automatic SIMPLE IRA Plus enrollment.",
      "Designed wireframes for a single-screen dashboard to manage contribution limits."
    ],
    systemsApproach: [
      "Partnered with UI designers, backend architects, and QA desks to validate calculation engines.",
      "Conducted walkthrough validation reviews with administrators to align system logic with real desk workflows."
    ],
    impact: "Shortened account setup workflow execution by 45% while eliminating manual data calculation errors."
  },
  {
    id: "cs-2",
    title: "Recordkeeping Database (RKD) Mutual Fund Integration",
    client: "Capital Group",
    role: "Senior Product Owner / Principal BA",
    domain: "RKD MF Database & Real Work Experience",
    metrics: [
      { val: "88%", lbl: "Mismatch Ticket Reduction" },
      { val: "Sub-Sec", lbl: "Data Sync Latency" },
      { val: "Unified", lbl: "RKD Schema" }
    ],
    problem: "Data fragmentation between trading desks and RKD networks caused high transaction mismatch flags during booking cycles.",
    baApproach: [
      "Elicited database requirements and mapped SQL schema layouts directly to REST JSON payloads.",
      "Documented request/response parameters, boundary constraints, and authentication token sequences.",
      "Conducted JAD sessions with integration architects to lock down the downstream payload specifications."
    ],
    systemsApproach: [
      "Aligned backend developers and QA teams on field validation limits and error response formats.",
      "Coordinated end-to-end integration mapping checks to verify RKD database inputs."
    ],
    impact: "Standardized the downstream API integration layer, reducing trade mismatch exceptions by 88%."
  },
  {
    id: "cs-3",
    title: "ICU2 Mutual Fund Validation Engine",
    client: "Capital Group",
    role: "Senior Product Owner / Principal BA",
    domain: "Validation Logic & Real Work Experience",
    metrics: [
      { val: "94%", lbl: "Reduction in Validation Fails" },
      { val: "$120k", lbl: "Annual Operational Savings" },
      { val: "Zero", lbl: "Defect Release Sign-off" }
    ],
    problem: "High failure costs due to manual validation steps and lack of real-time constraint checks during ICU2 Mutual Fund processing.",
    baApproach: [
      "Elicited operational validation parameters through JAD sessions with institutional trading desks.",
      "Mapped AS-IS vs. TO-BE validation routing flows, eliminating three manual checking checkpoints.",
      "Authored 30+ User Stories in JIRA containing testable Gherkin acceptance criteria."
    ],
    systemsApproach: [
      "Collaborated with API integration teams to align validation models with downstream database layouts.",
      "Partnered with QA engineers to outline boundary limits and exception test scenarios for validation rules."
    ],
    impact: "Streamlined validation transactions for major accounts, reducing overnight clearing delay costs by 94%."
  },
  {
    id: "cs-4",
    title: "Portfolio Benchmarks & Performance Reporting",
    client: "Capital Group",
    role: "Senior Product Owner / Principal BA",
    domain: "Fund Performance & Real Work Experience",
    metrics: [
      { val: "30%", lbl: "Decrease in Scope Creep" },
      { val: "100%", lbl: "Sprint Commitment Adherence" },
      { val: "Insta", lbl: "Individual Performance Award" }
    ],
    problem: "Frequent requirements drift between offshore teams and product managers caused significant sprint delays and scope creep.",
    baApproach: [
      "Established a Confluence requirements taxonomy, creating a single source of truth for benchmark specs.",
      "Led sprint refinement and grooming, resolving technical constraints before story sizing.",
      "Engineered a Traceability Matrix mapping business rules to performance integration models."
    ],
    systemsApproach: [
      "Coordinated with architects and QA leads to define clear 'Definition of Ready' criteria across teams.",
      "Structured status reporting channels to align business partners and developers on deliverable progress."
    ],
    impact: "Eliminated offshore-onshore delivery bottlenecks, increasing backlog velocity and securing formal client recognition."
  },
  {
    id: "cs-5",
    title: "Trade Lifecycle & DTCC Clearing",
    client: "Capital Group",
    role: "Senior Product Owner / Principal BA",
    domain: "Conceptual Demonstration / Independent Case Study",
    metrics: [
      { val: "8 Min", lbl: "Mean Time to Resolution" },
      { val: "72%", lbl: "Exception Queue Decrease" },
      { val: "Real-time", lbl: "Status Monitor Tracking" }
    ],
    problem: "Failed custodian settlement notifications (SWIFT MT548 status codes) sat in queues for hours, leading to processing delays.",
    baApproach: [
      "Elicited exception code categories (REJT/CAND) and structured alert routing tables.",
      "Authored the functional specifications for the automated reconciliation match engine.",
      "Mapped process swimlanes for middle-office staff to triage exceptions."
    ],
    systemsApproach: [
      "Coordinated with database engineers and QA teams to verify real-time status code maps.",
      "Collaborated with custodian integration architects to audit SWIFT MT548 processing rules."
    ],
    impact: "Accelerated mean-time-to-resolution from 2 hours to 8 minutes, clearing exception queue lengths by 72%."
  },
  {
    id: "cs-6",
    title: "Pre-Trade Compliance & Portfolio Rebalancing",
    client: "Capital Group",
    role: "Senior Product Owner / Principal BA",
    domain: "Conceptual Demonstration / Independent Case Study",
    metrics: [
      { val: "30%", lbl: "Sprint Scope Creep Reduction" },
      { val: "98%", lbl: "Commitment Velocity Achieved" },
      { val: "Unified", lbl: "Requirements Template" }
    ],
    problem: "Sprint delays and backlog bloat due to poorly written user stories and missing business-rule trace mapping for advanced capital markets topics.",
    baApproach: [
      "Standardized Confluence BRD layouts and JIRA epic workflows across 4 Scrum squads.",
      "Structured requirements mapping dashboards to trace business rules to active test criteria.",
      "Facilitated backlog grooming, aligning engineering scopes with client goals."
    ],
    systemsApproach: [
      "Aligned Dev, QA, and Product leads under standard sprint refinement and estimation standards.",
      "Created status reporting dashboards mapping business requirements directly to test coverage."
    ],
    impact: "Standardized Agile requirements across the unit, reducing scope creep by 30% and increasing sprint velocity."
  }
];

export const TRADE_LIFECYCLE_DATA = [
  {
    id: "stage-1",
    step: "01",
    title: "Order Generation & Origination",
    icon: "fa-solid fa-lightbulb",
    shortDesc: "Portfolio manager decision making, order intent generation & pre-trade compliance checks. (Conceptual)",
    baArtifacts: [
      "BRD / FSD for Order Intent Capture",
      "Pre-trade Compliance Rule Mapping (Limits & Restrictions)",
      "User Journey Diagram for Portfolio Managers"
    ],
    engineeringSpecs: [
      "Frontend: Dynamic Order Ticket with Real-time Validation Checks",
      "Backend: FIX Gateway pre-trade compliance limit check service",
      "QA: Automated boundary value test scripts for credit limits"
    ]
  },
  {
    id: "stage-2",
    step: "02",
    title: "Order Execution & Routing",
    icon: "fa-solid fa-chart-line",
    shortDesc: "Order routing via FIX protocol to execution venues, brokers & dark pools. (Conceptual)",
    baArtifacts: [
      "FIX Protocol Tag Data Mapping Specs",
      "Order Blotter Functional Specifications",
      "Algorithmic Execution Strategy Requirements"
    ],
    engineeringSpecs: [
      "Frontend: Real-time execution status blotter grids (Filled/Pending)",
      "Backend: Routing engine mapping execution venues via FIX protocols",
      "QA: Performance load test parameters matching peak volume stress limits"
    ]
  },
  {
    id: "stage-3",
    step: "03",
    title: "Clearing & Trade Matching",
    icon: "fa-solid fa-network-wired",
    shortDesc: "Trade confirmation, affirmation & clearinghouse (CCP) matching. (Conceptual)",
    baArtifacts: [
      "Central Counterparty (CCP) Trade Matching Rules",
      "Trade Exception & Discrepancy Flow Maps",
      "Counterparty Affirmation Specs"
    ],
    engineeringSpecs: [
      "Frontend: Exception management UI consoles displaying failed matching records",
      "Backend: Event-driven matching validation services checking SWIFT MT548 parameters",
      "QA: Test cases validation mapping custodian check failures (REJT/CAND status)"
    ]
  },
  {
    id: "stage-4",
    step: "04",
    title: "Custody & Settlement",
    icon: "fa-solid fa-vault",
    shortDesc: "Delivery vs Payment (DVP) settlement and custodian SWIFT MT541/543 message exchanges. (Conceptual)",
    baArtifacts: [
      "SWIFT Message (MT541 / MT543 / MT540) Specs",
      "Custodian Integration & DVP Workflow Maps",
      "Settlement Fail Resolution Requirements"
    ],
    engineeringSpecs: [
      "Frontend: Status tracking timelines detailing custodian settlement stages",
      "Backend: Automated SWIFT message generation queues (MT541/MT543 mapping)",
      "QA: Exception scenarios verifying failover protocols and network drops"
    ]
  },
  {
    id: "stage-5",
    step: "05",
    title: "Accounting & Reporting",
    icon: "fa-solid fa-file-invoice-dollar",
    shortDesc: "NAV calculation, P&L attribution, corporate actions & regulatory reporting.",
    baArtifacts: [
      "NAV Calculation & P&L Attribution Specifications",
      "Regulatory Audit Trail Requirement Matrix",
      "End-of-Day Valuation Data Mapping"
    ],
    engineeringSpecs: [
      "Frontend: Analytical reports showing asset values and audit logs",
      "Backend: Valuation services calculating P&L attributes and custodian netting metrics",
      "QA: Regulatory compliance audits verifying record consistency against backups"
    ]
  }
];

export const ACHIEVEMENTS_DATA = [
  {
    title: "Insta Award — Infosys",
    org: "Infosys Ltd.",
    category: "awards",
    icon: "fa-solid fa-trophy",
    desc: "Awarded for exceptional individual contribution, technical ownership, and high client impact on Capital Group projects."
  },
  {
    title: "Platinum Club Member",
    org: "Infosys Ltd.",
    category: "awards",
    icon: "fa-solid fa-award",
    desc: "Recognized as a top-tier performer among delivery teams for consistently exceeding client expectations."
  },
  {
    title: "Certified Global Agile Developer",
    org: "Infosys Learning",
    category: "certifications",
    icon: "fa-solid fa-certificate",
    desc: "Certified in Agile delivery practices, Scrum methodology, sprint planning, and collaborative delivery."
  },
  {
    title: "Certified Business Consultant",
    org: "Infosys Learning",
    category: "certifications",
    icon: "fa-solid fa-user-check",
    desc: "Certified consultant for requirements engineering, business process modeling, and stakeholder management."
  },
  {
    title: "Capital Markets & Asset Classes Specialist",
    org: "Infosys Domain Academy",
    category: "certifications",
    icon: "fa-solid fa-chart-pie",
    desc: "Certified associate in Capital Markets, Equities, Fixed Income, Derivatives, and Trade Life Cycle management."
  },
  {
    title: "Certified SQL for Business Analysts",
    org: "Infosys Learning",
    category: "certifications",
    icon: "fa-solid fa-database",
    desc: "Certified in writing complex SQL queries, data validation, data mapping, and relational database analysis."
  },
  {
    title: "Upskilling in Power BI",
    org: "Self-driven / Continuous Learning",
    category: "certifications",
    icon: "fa-solid fa-chart-bar",
    desc: "Actively mastering Power BI for data analytics, interactive dashboard creation, and data-driven business requirements."
  },
  {
    title: "UDAAN Music Event Winner (2024)",
    org: "Infosys Cultural & Performing Arts",
    category: "extra",
    icon: "fa-solid fa-guitar",
    desc: "Winner of UDAAN Music Event (2024). Featured performance as guest band at Infosys Chandigarh DC (2025) and AFE event."
  },
  {
    title: "Formal Client Appreciation",
    org: "Capital Group",
    category: "extra",
    icon: "fa-solid fa-star",
    desc: "Received formal written client recognition for strong ownership, proactive communication, and zero-defect deliveries."
  }
];

export const EDUCATION_DATA = [
  { degree: "B.Tech in Mechanical Engineering", institution: "J.N.G.E.C. Sundernagar, H.P.T.U.", year: "2019", score: "8.68 CGPA" },
  { degree: "Diploma in Mechanical Engineering", institution: "Govt. Polytechnic Sundernagar, H.P. Tech Board", year: "2016", score: "81.29%" },
  { degree: "Class 12th (Senior Secondary)", institution: "D.A.V. Sr. Sec. School, Una, HP", year: "2014", score: "83.20%" },
  { degree: "Class 10th (Secondary School)", institution: "D.A.V. Sr. Sec. School, Una, HP", year: "2012", score: "93.29%" }
];

export const SQL_QUERIES_DATA = [
  {
    id: "q-1",
    title: "SIMPLE IRA Contribution Audit",
    desc: "Identifies accounts exceeding the SIMPLE IRA contribution limits in the RKD system, using window partitions.",
    query: `WITH Contributions AS (
  SELECT 
    c.account_id,
    a.account_name,
    c.fund_id,
    f.fund_name,
    (c.quantity * f.market_price) AS contribution_value,
    SUM(c.quantity * f.market_price) OVER(PARTITION BY c.account_id) AS total_contribution
  FROM account_contributions c
  JOIN accounts a ON c.account_id = a.account_id
  JOIN funds f ON c.fund_id = f.fund_id
)
SELECT 
  account_name,
  fund_name,
  contribution_value,
  ROUND((contribution_value * 100.0) / total_contribution, 2) AS allocation_pct
FROM Contributions
WHERE total_contribution > 15500
ORDER BY allocation_pct DESC;`,
    headers: ["account_name", "fund_name", "contribution_value", "allocation_pct"],
    results: [
      { account_name: "John Doe SIMPLE IRA", fund_name: "Capital Growth Fund", contribution_value: "$16,500", allocation_pct: "100.00%" },
      { account_name: "Jane Smith SIMPLE IRA", fund_name: "Capital Income Fund", contribution_value: "$18,000", allocation_pct: "100.00%" }
    ]
  },
  {
    id: "q-2",
    title: "SWIFT MT548 Reconciliation Latency Metric (Conceptual)",
    desc: "Calculates the time duration in seconds between trade booking executions and custodian settlement matching (MT548 advice) aggregated by broker.",
    query: `SELECT 
  t.broker_code,
  COUNT(*) AS total_trades,
  AVG(EXTRACT(EPOCH FROM (c.matching_timestamp - t.execution_timestamp))) AS avg_reconciliation_delay_sec,
  COUNT(CASE WHEN c.matching_status = 'FAILED' THEN 1 END) AS reconciliation_fails
FROM trades t
JOIN custodian_reconciliation c ON t.trade_id = c.trade_id
WHERE t.execution_date = '2026-07-23'
GROUP BY t.broker_code
HAVING COUNT(*) > 5
ORDER BY avg_reconciliation_delay_sec DESC;`,
    headers: ["broker_code", "total_trades", "avg_reconciliation_delay_sec", "reconciliation_fails"],
    results: [
      { broker_code: "BARC_LON", total_trades: "420", avg_reconciliation_delay_sec: "142.5", reconciliation_fails: "3" },
      { broker_code: "MS_NY", total_trades: "580", avg_reconciliation_delay_sec: "88.2", reconciliation_fails: "1" },
      { broker_code: "JPMC_LDN", total_trades: "612", avg_reconciliation_delay_sec: "45.1", reconciliation_fails: "0" }
    ]
  },
  {
    id: "q-3",
    title: "Find Pending Validation Exceptions in ICU2",
    desc: "Retrieves fund validation history logs that violated ICU2 guidelines and failed downstream matching for triaging.",
    query: `SELECT 
  t.validation_id,
  t.client_id,
  t.fund_id,
  t.nav_price,
  c.rule_violation_desc,
  c.logged_timestamp
FROM icu2_audit_log c
JOIN validations t ON c.validation_id = t.validation_id
WHERE c.validation_status = 'REJECTED'
ORDER BY c.logged_timestamp DESC;`,
    headers: ["validation_id", "client_id", "fund_id", "nav_price", "rule_violation_desc", "logged_timestamp"],
    results: [
      { validation_id: "V-88912", client_id: "CLI-901", fund_id: "FND-AAPL", nav_price: "$182.50", rule_violation_desc: "Contribution Limit exceeded", logged_timestamp: "2026-07-23 10:14:02" },
      { validation_id: "V-88905", client_id: "CLI-302", fund_id: "FND-US10Y", nav_price: "$98.15", rule_violation_desc: "Restricted fund validation block", logged_timestamp: "2026-07-23 09:44:31" }
    ]
  }
];

export const API_ENDPOINTS_DATA = [
  {
    id: "api-1",
    method: "POST",
    path: "/api/v1/accounts/simple-ira/enroll",
    summary: "SIMPLE IRA Account Enrollment API",
    desc: "Elicited requirements for validation rules and downstream RKD routing. Returns enrollment status.",
    request: `{
  "clientId": "CLI-90123",
  "planId": "PLAN-88901",
  "fundId": "ISIN-US0378331005",
  "contributionType": "EMPLOYER_MATCH",
  "amount": 5000,
  "currency": "USD"
}`,
    response: `{
  "transactionId": "TXN-88712399-A",
  "enrollmentStatus": "COMPLETED",
  "rkdReference": "RKD-99812",
  "allocatedAmount": 5000,
  "timestamp": "2026-07-23T23:22:34Z"
}`
  },
  {
    id: "api-2",
    method: "GET",
    path: "/api/v1/portfolios/PORT-88901/compliance",
    summary: "Pre-Trade Compliance Checks Status (Conceptual)",
    desc: "Triggers the real-time compliance rule engine to validate portfolio constraints before order routing.",
    request: `Request Headers:
Authorization: Bearer <JWT_TOKEN>`,
    response: `{
  "portfolioId": "PORT-88901",
  "checksPassed": true,
  "activeViolations": [],
  "currentConcentration": {
    "Equities": "62.5%",
    "FixedIncome": "27.5%",
    "Cash": "10.0%"
  },
  "complianceAuditId": "AUD-991209-X"
}`
  }
];

export const BRD_SECTIONS_DATA = [
  {
    id: "sec-1",
    title: "1. Document Control & Approvals",
    content: `| Version | Date | Author | Description | Approver |
| :--- | :--- | :--- | :--- | :--- |
| v1.0 | 2026-06-15 | Shubham Sharma (BA) | Initial Elicitation & Process Maps | Lead Product Owner |
| v1.1 | 2026-07-02 | Shubham Sharma (BA) | Added downstream ICU2 validation rules | VP Wealth Tech |

**Sign-off Status**: Approved and Locked for Sprint 12.`
  },
  {
    id: "sec-2",
    title: "2. Business Objectives & Gap Analysis",
    content: `### Objective
Automate the SIMPLE IRA account creation to reduce manual entry errors from 4.2% to <0.5% daily.

### AS-IS Process Gap
Currently, middle-office operations reconcile account tickets manually against RKD reports using spreadsheet macros. This causes enrollment fails and compliance flags.

### TO-BE Process Map
Inject a real-time event-driven validation service utilizing ICU2, triggering automated RKD matches instantly.`
  },
  {
    id: "sec-3",
    title: "3. Functional Requirements (FRs)",
    content: `*   **FR-101 (Validation)**: The system MUST reject enrollments where the contribution size exceeds $15,500 USD unless approved by a Plan Administrator override.
*   **FR-102 (UI Blotter)**: The account grid MUST refresh live enrollment statuses dynamically (sub-second latency) without reloading the page.
*   **FR-103 (API Integration)**: The validation service MUST forward records via ICU2 containing the transaction ID to downstream RKD queues.`
  },
  {
    id: "sec-4",
    title: "4. Data Dictionary & Entity Mapping",
    content: `### Data Entity mapping: Account Creation to RKD Schema
| Business Field | DB Field Name | Data Type | RKD Schema Field |
| :--- | :--- | :--- | :--- |
| Fund Identifier | FUND_CODE | VARCHAR(12) | fund_id |
| Contribution Amount | CONTRIB_AMT | NUMERIC(18,4) | total_contribution |
| Client Name | CLIENT_NM | VARCHAR(100) | account_owner |`
  }
];

export const ROADMAP_DATA = [
  {
    quarter: "In Progress",
    title: "PMI-PBA Certification",
    skills: ["Business Analysis Analytics", "Systems Modeling", "Data Analysis Verification"],
    progress: 75
  },
  {
    quarter: "Q4 2026 Target",
    title: "Certified Scrum Product Owner (CSPO)",
    skills: ["Product Backlog Refinement", "Scrum Execution Frameworks", "Stakeholder Governance"],
    progress: 30
  },
  {
    quarter: "Q1 2027 Target",
    title: "Retirement Plans Professional",
    skills: ["Retirement Account Operations", "SIMPLE IRA Rules", "Post-enrollment Operations"],
    progress: 10
  }
];

export const BLOG_POSTS_DATA = [
  {
    id: "blog-1",
    title: "Beyond the BRD: Dynamic Agile Requirements Documentation",
    date: "July 2026",
    readTime: "5 min read",
    summary: "Why traditional 150-page BRDs fail in modern scrum cycles, and how techno-functional BAs bridge the engineering gap with interactive JSON schemas.",
    content: `Traditional business requirement documentation (BRD) is dying. Agile cycles move too fast for heavy documentation binders. To stay effective, modern Business Analysts must adopt a product thinking approach.

Instead of writing text-only paragraphs describing database storage, the modern Technical BA provides:
1. **Interactive Process Swimlanes**: Visual flows detailing system interactions.
2. **API Request/Response Schemas**: Bridging business attributes to JSON payloads.
3. **Data Field Dictionaries**: Mapping database fields directly to business models.

By shifting requirements towards technical feasibility early in the sprint, you reduce sprint scope creep by up to 30%.`
  },
  {
    id: "blog-2",
    title: "SWIFT MT548 Messages & Post-Trade Reconciliation Logic (Conceptual)",
    date: "June 2026",
    readTime: "8 min read",
    summary: "An in-depth conceptual analysis of how custodian settlement advice status messages coordinate automated clearing checks between custodians and OMS systems.",
    content: `Post-trade settlement fails represent millions in overnight penalty rates for institutional funds. In this conceptual article, we map the exact anatomy of a SWIFT MT548 message (Settlement Status and Processing Advice) and explain how downstream matching algorithms reconcile transaction failures automatically.

Key concepts covered:
- **MT548 Message Blocks**: Header, General Information (Block A), Transaction Details (Block B), and Settlement Status details (Block C).
- **Automating Match Exceptions**: Re-routing failed codes (e.g., REJT/CAND) immediately to the middle-office reconciliation dashboard.
- **Improving Transparency**: Integrating real-time settlement tracking in client-facing portal applications.`
  }
];

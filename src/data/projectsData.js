/**
 * Structured Project Data Architecture
 * Statuses: 'COMPLETED' | 'IN PROGRESS' | 'PLANNED'
 * Truthful, truthful attribution, clear contribution language
 */

export const FEATURED_PROJECTS = [
  {
    id: "trade-lifecycle-case-study",
    title: "Institutional Trade Lifecycle & Exception Resolver",
    category: "Capital Markets & Business Analysis",
    badgeLabel: "Flagship Case Study",
    status: "COMPLETED",
    featured: true,
    summary: "Comprehensive functional analysis of front-to-back trade flows across initiation, order execution, confirmation, clearing, and T+1 settlement.",
    problem: "Operational trade breaks, standard settlement instruction (SSI) discrepancies, and cash mismatches between front-office order desks and custodians create costly settlement delays and manual middle-office reconciliation.",
    approach: "Modeled end-to-end AS-IS and TO-BE trade lifecycles across 7 operational stages. Created automated exception categorization rules and defined pre-clearing constraint validation checkpoints.",
    contribution: "Mapped detailed process swimlanes across Front, Middle, and Back Office desks; drafted user stories with Gherkin acceptance criteria; wrote SQL audit scripts to detect settlement mismatches.",
    technologies: ["Trade Lifecycle", "Process Swimlanes", "SQL Auditing", "Gherkin / JIRA", "REST APIs", "Exception Handling"],
    businessValue: "Structured pre-settlement validation checkpoints, reduced triage turnaround on clearing breaks, and aligned operations desks with software engineering squads.",
    projectType: "Portfolio Case Study",
    caseStudyId: "trade-lifecycle",
    githubUrl: "https://github.com/shubhaam-shaarmaa",
    liveDemoUrl: "#lifecycle",
    specPreview: {
      type: "sql",
      title: "Sample SQL Middle-Office Exception Triage Script",
      code: `-- Middle-Office Trade Exception Triage & Matching Query
SELECT 
    t.trade_id,
    t.portfolio_id,
    t.security_isin,
    t.trade_currency,
    t.trade_amount,
    c.clearing_status,
    CASE 
        WHEN t.trade_amount != c.settlement_amount THEN 'CASH_MISMATCH'
        WHEN t.ssi_code != c.custodian_ssi THEN 'SSI_BREAK'
        WHEN c.settlement_date > t.settlement_deadline THEN 'T1_DEADLINE_BREACH'
        ELSE 'MATCHED_CLEARED'
    END AS exception_code
FROM front_office_orders t
JOIN middle_office_clearing c ON t.trade_id = c.trade_id
WHERE c.clearing_status IN ('UNMATCHED', 'PENDING_TRIAGE')
ORDER BY t.trade_timestamp ASC;`
    }
  },
  {
    id: "retirement-rkd-integration",
    title: "Retirement Platform & Recordkeeping Database (RKD) Integration",
    category: "Financial Services & Systems Analysis",
    badgeLabel: "Enterprise Analysis",
    status: "COMPLETED",
    featured: true,
    summary: "Techno-functional requirements engineering for retirement account servicing (SIMPLE IRA) and asynchronous synchronization with back-office databases.",
    problem: "Disparate front-office account servicing workflows caused contribution limit verification delays and inconsistent field-level schema synchronization with core Recordkeeping Databases (RKD).",
    approach: "Conducted Joint Application Development (JAD) sessions with operations, compliance, and engineering leads. Mapped field-by-field SQL-to-REST JSON schemas and defined real-time statutory contribution boundary validations.",
    contribution: "Collaborated on Business Requirements Documents (BRDs) and Functional Requirements Documents (FRDs); authored 50+ JIRA user stories; mapped JSON payloads; conducted SQL data verification across test database tables.",
    technologies: ["Business Analysis (BRD/FRD)", "REST APIs", "SQL Data Validation", "JAD Workshops", "JSON Schema", "UAT Testing"],
    businessValue: "Eliminated schema mismatch ambiguities between client-facing screens and back-office RKD databases, preventing statutory contribution calculation errors.",
    projectType: "Enterprise Experience / Portfolio Case Study",
    caseStudyId: "retirement-rkd",
    githubUrl: "https://github.com/shubhaam-shaarmaa",
    specPreview: {
      type: "api",
      title: "REST API Payload & Schema Validation Spec",
      code: `POST /api/v1/retirement/simple-ira/contribution-validate
Content-Type: application/json
Authorization: Bearer <JWT_ENTERPRISE_TOKEN>

Request Payload:
{
  "planId": "PLAN-US-89421",
  "participantId": "PART-774019",
  "accountType": "SIMPLE_IRA",
  "contributionAmount": 2500.00,
  "currency": "USD",
  "taxYear": 2026,
  "employerMatchPercentage": 3.0,
  "ytdContributionsTotal": 13500.00
}

Response (200 OK - Approved):
{
  "validationStatus": "APPROVED",
  "statutoryLimit": 16000.00,
  "remainingEligibleAmount": 2500.00,
  "rkdTransactionToken": "RKD-VAL-9921448",
  "syncTimestamp": "2026-10-02T14:22:00Z"
}`
    }
  },
  {
    id: "mutual-fund-validation",
    title: "Mutual Fund Order Validation & Settlement Analysis",
    category: "Capital Markets & Functional Consulting",
    badgeLabel: "Domain Deep Dive",
    status: "COMPLETED",
    featured: true,
    summary: "Functional gap analysis and verification rule modeling for mutual fund order entry against NAV cut-off times and custodial constraints.",
    problem: "Institutional mutual fund purchases routed after cut-off windows or violating account margin limits resulted in trade rejections and manual intervention.",
    approach: "Executed AS-IS vs. TO-BE process mapping. Documented functional rules for pre-trade eligibility checks, fund allocation rules, and custodial handoff timestamps.",
    contribution: "Assisted in structuring functional verification rules; documented edge-case scenarios for late-day NAV recalculations; formulated UAT test cases for clearing scenarios.",
    technologies: ["Gap Analysis", "Process Mapping", "SQL Validation", "UAT Test Matrices", "Mutual Fund Operations"],
    businessValue: "Standardized order validation rules across operational desks and provided engineering squads with deterministic validation logic.",
    projectType: "Portfolio Case Study",
    caseStudyId: "mutual-fund-validation",
    githubUrl: "https://github.com/shubhaam-shaarmaa",
    specPreview: {
      type: "gherkin",
      title: "Gherkin Acceptance Criteria (NAV Cut-off Verification)",
      code: `Feature: Mutual Fund NAV Cut-off & Margin Validation
  As an institutional operations specialist
  I want mutual fund orders validated against market NAV cut-offs
  So that late orders are queued for next-day pricing without trade failure

  Scenario: Order received prior to 4:00 PM EST NAV cut-off
    Given an institutional account "ACC-CORP-401" with available cash of $50,000
    And the current market time is "15:45:00 EST"
    When an order to purchase 1,000 shares of fund "IVV-EQ" is submitted
    Then the system accepts the order for same-day NAV pricing
    And marks clearing eligibility as "T+1_ELIGIBLE"

  Scenario: Order received post NAV cut-off timestamp
    Given an order submitted at "16:05:00 EST"
    When the system evaluates trade timestamp against fund cut-off "16:00:00 EST"
    Then the trade is assigned status "QUEUED_NEXT_DAY_NAV"
    And an audit event is logged with code "POST_CUTOFF_AUTO_ROLL"`
    }
  },
  {
    id: "bfsi-rag-assistant",
    title: "BFSI Document Research Assistant (RAG Pipeline)",
    category: "AI & GenAI",
    badgeLabel: "Active Building",
    status: "IN PROGRESS",
    featured: true,
    summary: "Retrieval-Augmented Generation (RAG) system engineered to index financial disclosures, prospectuses, and policy documents with verified source attribution.",
    problem: "Financial analysts and business analysts spend hours manually searching multi-hundred-page regulatory filings, fund prospectuses, and compliance guidelines.",
    approach: "Architecting a hybrid retrieval pipeline using vector embeddings and semantic search. Incorporates document chunking strategies tailored to financial tables and footnote disclosures.",
    contribution: "Defining system requirements, user query personas, prompt template boundaries, evaluation criteria for hallucination reduction, and REST API integration contracts.",
    technologies: ["FastAPI", "PostgreSQL", "pgvector", "Jina AI", "Groq / LLMs", "Next.js", "Prompt Engineering"],
    businessValue: "Enables rapid query answering with exact document citations, reducing manual document inspection time while maintaining compliance auditability.",
    projectType: "AI Portfolio Project",
    caseStudyId: "ai-rag-assistant",
    githubUrl: "https://github.com/shubhaam-shaarmaa",
    liveDemoUrl: "",
    specPreview: {
      type: "api",
      title: "RAG Query & Citation Response Specification",
      code: `POST /api/v1/rag/query
Content-Type: application/json

Request Payload:
{
  "query": "What are the employer matching requirements under the SIMPLE IRA plan document?",
  "collection": "retirement-compliance-docs-2026",
  "topK": 3,
  "confidenceThreshold": 0.85
}

Response (200 OK):
{
  "answer": "Employers must choose between a dollar-for-dollar match up to 3% of compensation or a 2% non-elective contribution for all eligible employees, regardless of employee deferrals.",
  "citations": [
    {
      "sourceDocument": "IRS_Publication_560_Retirement_Plans.pdf",
      "pageNumber": 14,
      "chunkId": "CHUNK-560-14A",
      "relevanceScore": 0.94
    }
  ],
  "modelUsed": "llama-3.3-70b-versatile-groq",
  "groundednessScore": 0.98
}`
    }
  },
  {
    id: "banking-support-agent",
    title: "Banking & FinTech Stateful Support Agent",
    category: "AI & GenAI",
    badgeLabel: "Roadmap Item",
    status: "PLANNED",
    featured: false,
    summary: "Stateful AI agent to assist operations specialists in processing routine account inquiries, fee reconciliations, and transactional status lookups.",
    problem: "Customer operations teams manage high volumes of multi-step inquiries that require querying multiple disparate banking systems and policy manuals.",
    approach: "Designing an agentic state machine with LangGraph to orchestrate tool selection, policy verification, human-in-the-loop approvals, and secure API execution.",
    contribution: "Designing agent state graph diagrams, defining tool schemas, setting guardrails against unauthorized account modifications, and authoring UAT test scenarios.",
    technologies: ["LangGraph", "FastAPI", "Tool Calling", "REST APIs", "PostgreSQL", "Human-in-the-Loop"],
    businessValue: "Structured, deterministic task execution for banking workflows with complete audit trail logging and safe fallback mechanisms.",
    projectType: "AI Portfolio Project",
    caseStudyId: "ai-support-agent",
    githubUrl: "https://github.com/shubhaam-shaarmaa"
  },
  {
    id: "developer-mcp-server",
    title: "Financial Systems Developer MCP Server",
    category: "AI & GenAI",
    badgeLabel: "Roadmap Item",
    status: "PLANNED",
    featured: false,
    summary: "Model Context Protocol (MCP) server exposing financial data schemas, trade lifecycle verification tools, and Gherkin story generation tools directly to AI assistants.",
    problem: "AI assistants lack standardized, secure access to enterprise financial schemas, trade validation functions, and business requirement repositories.",
    approach: "Implementing the Model Context Protocol standard to safely expose curated read-only schema inspectors, trade calculation utilities, and user story templates.",
    contribution: "Designing tool definitions, argument validation schemas, rate-limiting boundaries, and developer documentation.",
    technologies: ["Model Context Protocol (MCP)", "Node.js / Python", "JSON-RPC", "API Schemas"],
    businessValue: "Enables compliant, standardized integration between enterprise AI tools and domain-specific financial systems.",
    projectType: "AI Portfolio Project",
    caseStudyId: "ai-mcp-server",
    githubUrl: "https://github.com/shubhaam-shaarmaa"
  }
];

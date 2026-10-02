/**
 * Capital Markets Domain Data
 * Flagship Trade Lifecycle Analysis & Case Studies
 * Explicitly labeled as Portfolio Case Studies
 */

export const TRADE_LIFECYCLE_STAGES = [
  {
    step: "01",
    id: "initiation",
    name: "Trade Initiation",
    desk: "Front Office (Portfolio Managers)",
    summary: "Portfolio rebalancing decisions, asset allocation strategy, and order generation.",
    actions: [
      "Portfolio Manager identifies overweight/underweight asset allocations.",
      "Generates proposed order baskets (Equities, Fixed Income, Funds).",
      "Calculates target share quantities or cash values based on portfolio mandates."
    ],
    checks: [
      "Investment Policy Statement (IPS) adherence",
      "Cash buffer & liquidity verification",
      "Sanctions & restricted list screening"
    ],
    systems: ["Portfolio Accounting System", "Bloomberg AIM", "Charles River IMS"]
  },
  {
    step: "02",
    id: "order-mgmt",
    name: "Order Management",
    desk: "Front Office (Trading Desk)",
    summary: "Order validation, pre-trade compliance checks, margin validation, and broker routing.",
    actions: [
      "Trading desk receives rebalance basket from Portfolio Manager.",
      "Splits parent orders into child execution tranches if necessary.",
      "Selects optimal execution venues, dark pools, or broker-dealers."
    ],
    checks: [
      "Pre-trade compliance limits (single-issuer concentration)",
      "Account margin & credit limits",
      "Best execution policy parameters"
    ],
    systems: ["Order Management System (OMS)", "FIX Protocol Engine", "Risk Gateways"]
  },
  {
    step: "03",
    id: "execution",
    name: "Execution",
    desk: "Trading Desk / Broker-Dealers",
    summary: "Order matching on market venues, trade execution fills, and pricing timestamps.",
    actions: [
      "Order routed via FIX 4.2/4.4 protocol to market venues / electronic brokers.",
      "Execution algorithms (VWAP, TWAP, Limit) fill order tranches.",
      "Execution reports (fills and partial fills) returned with precise timestamps."
    ],
    checks: [
      "Execution price within allowable slippage bounds",
      "Accurate execution timestamp logging",
      "Partial fill tracking and average pricing"
    ],
    systems: ["Execution Management System (EMS)", "Exchange Matching Engines", "FIX Protocol"]
  },
  {
    step: "04",
    id: "confirmation",
    name: "Confirmation",
    desk: "Middle Office / Operations",
    summary: "Trade detail matching between institutional buy-side and executing broker-dealers.",
    actions: [
      "Buy-side transmits allocation instructions to executing broker.",
      "Broker returns electronic trade confirmation.",
      "System verifies trade parameters: ISIN, quantity, price, fees, and net cash amount."
    ],
    checks: [
      "Price & quantity matching between buy-side and broker",
      "Standard Settlement Instructions (SSI) validation",
      "Commission & fee breakdown verification"
    ],
    systems: ["DTCC CTM (Central Trade Manager)", "SWIFT MT515 / MT548", "Omgeo OASYS"]
  },
  {
    step: "05",
    id: "settlement",
    name: "Settlement (T+1)",
    desk: "Back Office / Custodians / Clearinghouses",
    summary: "Exchange of securities against cash payment via central clearing networks under T+1.",
    actions: [
      "Matched trade instructions delivered to central depository / clearinghouse.",
      "Buyer transfers funds to seller; seller delivers securities to buyer (DVP / RVP).",
      "Depository records change of legal ownership across custodian accounts."
    ],
    checks: [
      "Delivery Versus Payment (DVP) synchronization",
      "Sufficient cash balance in settlement account",
      "Security inventory availability at custodian"
    ],
    systems: ["DTCC / NSCC", "Fedwire / CHIPS", "Euroclear / Clearstream", "SWIFT MT541/MT543"]
  },
  {
    step: "06",
    id: "reconciliation",
    name: "Reconciliation",
    desk: "Middle Office / Back Office Operations",
    summary: "Post-settlement verification across internal ledgers, custodian statements, and clearing records.",
    actions: [
      "Automated feeds ingest daily custodian cash and stock statements.",
      "Three-way reconciliation executed: Internal OMS vs. Custodian Ledger vs. Depository.",
      "Discrepancies flagged for middle-office exception investigation."
    ],
    checks: [
      "Zero cash balance discrepancy",
      "Zero share position break",
      "Accrued dividend and corporate action alignment"
    ],
    systems: ["SmartStream TLM", "Internal Relational DBs (SQL)", "Custody Portals"]
  },
  {
    step: "07",
    id: "reporting",
    name: "Reporting & Accounting",
    desk: "Compliance & Fund Accounting",
    summary: "Regulatory reporting, transaction audits, NAV calculation, and client accounting.",
    actions: [
      "Settled trades posted to general ledger for daily Net Asset Value (NAV) calculation.",
      "Trade reporting submitted to regulatory repositories (CAT, MiFID II, Trade Repositories).",
      "Performance attribution and client account statements updated."
    ],
    checks: [
      "Regulatory transaction reporting timeliness",
      "Audit trail immutability and archival compliance",
      "Daily fund NAV validation before distribution"
    ],
    systems: ["Fund Accounting Engines", "Regulatory Reporting Desks", "Enterprise Data Warehouses"]
  }
];

export const FLAGSHIP_CASE_STUDY = {
  id: "trade-lifecycle-analysis",
  title: "Trade Lifecycle Analysis & Middle-Office Optimization",
  subtitle: "End-to-End Functional Specification for Trade Settlement & Exception Triage",
  label: "Portfolio Case Study",
  domain: "Capital Markets · Equities & Fixed Income",
  role: "Techno-Functional Business Analyst",
  
  businessProblem: "In institutional asset management, trade settlement under compressed T+1 regulatory mandates leaves zero margin for manual error. When trades fail to match during middle-office confirmation—due to mismatched Standard Settlement Instructions (SSIs), cash rounding variances, or late broker allocations—trades break. These breaks require manual middle-office investigation, risk fail penalties, and tie up firm liquidity.",
  
  stakeholders: [
    { role: "Front Office", interest: "Trading Desk & Portfolio Managers needing real-time fill confirmations and compliance clearance." },
    { role: "Middle Office", interest: "Operations specialists managing trade affirmations, SSI verifications, and exception queues." },
    { role: "Back Office / Custody", interest: "Settlement desks coordinating with DTCC, custodian banks, and depository networks." },
    { role: "Compliance & Risk", interest: "Officers ensuring strict adherence to SEC/FINRA guidelines, mandate limits, and regulatory audits." },
    { role: "Software Engineering", interest: "Squads building microservices, REST APIs, and database sync pipelines requiring unambiguous specifications." }
  ],

  asIsProcess: "Multiple legacy front-office order management systems send batch end-of-day trade files to middle office. SSIs are manually cross-referenced against static spreadsheets or disconnected custodian feeds. Breaks are discovered several hours after trade execution, frequently missing DTCC affirmation deadlines and leading to overnight settlement fails.",

  toBeProcess: "Real-time streaming trade feed validates orders upon execution against a centralized Golden SSI Repository. Automated matching engine executes preliminary two-way reconciliation within minutes of trade execution. Pre-clearing constraint rules automatically categorize and triage discrepancies (Cash Mismatch vs. SSI Break vs. Account Drift), routing only unresolved breaks to specialized desk operators.",

  requirements: [
    "FR-01: The system shall ingest electronic trade execution reports in real-time via FIX / REST endpoints.",
    "FR-02: The system shall perform automated pre-settlement matching against custodian Standard Settlement Instructions (SSIs).",
    "FR-03: The system shall enforce a cash variance tolerance threshold of ±$0.02 for rounding differences before flagging a break.",
    "FR-04: The system shall auto-assign trade breaks to operational queues based on standardized exception codes.",
    "FR-05: The system shall provide an auditable timeline log for every state transition across the trade lifecycle."
  ],

  userStories: [
    {
      id: "US-TL-101",
      title: "Real-Time Trade Matching & SSI Validation",
      story: "As a Middle-Office Operations Specialist, I want trade execution details automatically cross-checked against custodian SSIs within 15 minutes of execution, so that unmatched trades are flagged before DTCC cut-off times.",
      acceptanceCriteria: [
        "Given a confirmed trade execution for US Equity ISIN 'US0378331005'",
        "When the trade allocation message is ingested into the matching engine",
        "Then the system compares counterparty BIC, clearing agent account, and settlement currency",
        "And if all parameters match, the trade status updates to 'AFFIRMED_READY_FOR_CLEARING'",
        "And an affirmation event is published to DTCC CTM."
      ]
    },
    {
      id: "US-TL-102",
      title: "Automated Exception Isolation for Cash Variances",
      story: "As a Settlement Desk Operator, I want minor cash rounding discrepancies under $0.05 automatically isolated and netted against ledger adjustments, so that high-value trades are not held up by penny rounding differences.",
      acceptanceCriteria: [
        "Given an execution report with net settlement cash of $1,450,210.42",
        "And a broker confirmation showing net settlement cash of $1,450,210.40 (difference = $0.02)",
        "When the tolerance validation rule runs",
        "Then the system auto-resolves the break with code 'TOLERANCE_APPROVED'",
        "And routes the trade to clearing without human intervention."
      ]
    }
  ],

  dataRequirements: [
    "Unique Trade Identifier (UTI / USI) conforming to CFTC / SEC standards.",
    "Financial Instrument Global Identifier (FIGI) and ISIN security codes.",
    "Standard Settlement Instructions (SSI) entity model: Custodian BIC, PSET, REAG, RECU.",
    "ISO 4217 Currency Codes and precise decimal trade quantities (up to 6 decimal places)."
  ],

  apiConsiderations: [
    "RESTful webhooks for real-time status updates between OMS and Middle-Office Hub.",
    "Idempotent API endpoints with unique ClientOrderIDs to prevent duplicate trade bookings.",
    "Asynchronous message streaming (Kafka / EventBridge) for high-throughput market open/close volume spikes."
  ],

  uatScenarios: [
    "Scenario 1: Happy path equity trade execution with valid SSIs clearing successfully under T+1.",
    "Scenario 2: Fixed income corporate bond with stale custodian SSI triggering immediate operational alert.",
    "Scenario 3: Multi-leg derivative allocation with partial fills across multiple institutional sub-accounts."
  ],

  businessImpact: [
    "Significant reduction in manual break investigation time through deterministic exception routing.",
    "Mitigation of T+1 settlement fail penalties and custodian overdraft fees.",
    "Crystal-clear functional alignment between business operations desks and engineering development teams."
  ]
};

export const FUTURE_CASE_STUDIES = [
  {
    title: "Equity Trade Processing & Allocation Engine",
    domain: "Equities · Front & Middle Office",
    summary: "Functional requirements for multi-account trade block allocation, average pricing, and institutional commission sharing agreements.",
    status: "Portfolio Case Study"
  },
  {
    title: "Fixed Income Bond Lifecycle & Accrued Interest Calculation",
    domain: "Fixed Income · Operations & Math",
    summary: "Analysis of coupon accrual methodologies (30/360 vs. Actual/Actual), yield-to-maturity logic, and custodian settlement handoffs.",
    status: "Portfolio Case Study"
  },
  {
    title: "Derivatives Workflow & Collateral Management",
    domain: "Derivatives · Risk & Clearing",
    summary: "Process mapping for options and swap trade margin requirements, daily mark-to-market valuations, and collateral movement.",
    status: "Portfolio Case Study"
  },
  {
    title: "Asset Management Operations & Custodian Reconciliation",
    domain: "Asset Management · Back Office",
    summary: "Three-way automated reconciliation framework comparing portfolio accounting ledgers against prime broker and custodian holdings.",
    status: "Portfolio Case Study"
  }
];

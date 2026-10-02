export const caseStudy_2 = {
  id: "2",
  title: "Recordkeeping Database (RKD) Mutual Fund Integration",
  subtitle: "Data Integration and Migration",
  domain: "Retirement Solutions - Real Work Experience",
  role: "Senior Product Owner",
  startDate: "2021-03-01",
  endDate: "2023-06-30",
  technologies: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "AWS S3"],
  summary: "Directed the integration of a new suite of mutual funds into the core Recordkeeping Database (RKD), enabling expanded investment options for retirement plan sponsors.",
  problemStatement: "The existing RKD architecture was tightly coupled to a legacy fund lineup, making the onboarding of new external mutual funds a slow, manual, and error-prone process.",
  solutionOverview: "Developed an API-driven integration layer using Spring Boot and Kafka to standardize the ingestion of daily NAVs, dividend data, and fund metadata from external pricing vendors.",
  businessImpact: "Reduced new fund onboarding time from 3 months to 2 weeks, increased AUM potential by $5B, and eliminated manual data entry errors.",
  technicalArchitecture: "Event-driven microservices architecture connecting external data vendors (e.g., Morningstar) to the internal on-prem RKD via secure AWS API Gateways.",
  keyFeatures: ["Automated daily NAV ingestion", "Automated dividend processing", "Fund metadata mapping engine", "Exception management dashboard"],
  challenges: ["Mapping diverse external data formats to internal RKD schema", "Ensuring zero downtime during daily batch processing windows", "Data quality issues from upstream providers"],
  lessonsLearned: ["Standardization of data contracts is vital", "Build robust error handling and retry mechanisms for vendor APIs", "Automated reconciliation is essential for scale"],
  teamSize: 18,
  methodology: "Agile Kanban",
  userPersonas: ["Fund Analysts", "Operations Team", "Plan Sponsors"],
  metrics: ["Fund onboarding reduced from 90 to 14 days", "100% elimination of manual NAV entry", "99.99% data accuracy"],
  budget: "$3.2M",
  status: "Completed",
  client: "Capital Group",
  stakeholders: ["Investment Management", "Operations", "Enterprise Architecture"],
  integrations: ["Morningstar API", "Internal RKD System", "Clearing House Services"],
  securityMeasures: ["Mutual TLS for vendor APIs", "Data validation at the edge", "Strict IAM policies"],
  performanceImprovements: "Batch processing time reduced by 60%, ensuring SLAs were met well before market open.",
  deploymentStrategy: "Canary releases to validate data integrity before full rollout.",
  testingStrategy: "Extensive integration testing and parallel runs with legacy systems for 30 days.",
  scalability: "Stateless parsing microservices scaled horizontally based on incoming data volume.",
  accessibility: "Internal tools built to WCAG 2.1 AA standards.",
  compliance: "Adherence to SOC 1/2 requirements for financial reporting controls.",
  repositoryUrl: "",
  liveUrl: "",
  designMockups: [],
  architectureDiagrams: [],
  dataModels: [],
  apiEndpoints: [],
  thirdPartyServices: ["Morningstar", "DTCC"],
  versionControl: "Git",
  ciCdPipeline: "GitLab CI with automated deployment to AWS EKS.",
  monitoringTools: ["Prometheus", "Grafana", "PagerDuty"],
  supportProcess: "Dedicated operations support with runbooks for data ingestion failures.",
  trainingMaterials: "Technical documentation and operation runbooks.",
  futureEnhancements: ["Integration with alternative investments and ETFs", "Real-time pricing feeds"],
  relatedProjects: [],
  awards: [],
  publications: [],
  mediaMentions: [],
  interviewQA: [
    {
      question: "What was the primary goal of the RKD Mutual Fund Integration project?",
      answer: "The primary goal was to modernize our recordkeeping database to seamlessly ingest and manage external mutual funds. Previously, our system was optimized only for proprietary funds. This project opened our architecture to allow plan sponsors to offer a diverse open-architecture investment lineup.",
      followUp: "How did opening the architecture impact the business strategy?",
      mistake: "Focusing solely on the technical API integration without mentioning the strategic goal of attracting larger 401(k) plans that demand open architecture."
    },
    {
      question: "How did you manage the daily ingestion of Net Asset Values (NAVs)?",
      answer: "We built a Spring Boot microservice that polled external vendors (like Morningstar) via API immediately after market close. The service validated the data against expected tolerances (e.g., checking for unusual price swings), transformed the data to match our internal RKD schema, and published it to a Kafka topic for downstream consumption by the pricing engine.",
      followUp: "What happens if the NAV file from the vendor is delayed?",
      mistake: "Assuming batch jobs run perfectly and not planning for late pricing, which delays the entire nightly processing cycle."
    },
    {
      question: "Describe your approach to handling data quality issues from external vendors.",
      answer: "We implemented a strict 'contract testing' approach combined with runtime validation. If a vendor sent a NAV that deviated by more than 5% from the previous day, or if critical metadata like the CUSIP was missing, the record was quarantined. An alert was instantly routed to the pricing operations team for manual verification before it could hit the core database.",
      followUp: "How do you distinguish between a valid market movement and a bad data feed?",
      mistake: "Automatically rejecting all large price swings without considering that a stock split or a major market event could be the cause."
    },
    {
      question: "What is the significance of the CUSIP in this integration?",
      answer: "The CUSIP (Committee on Uniform Securities Identification Procedures) is the unique identifier for North American securities. It was the primary key used to map external fund data to our internal master reference data. Accurate CUSIP mapping was critical to ensure we were pricing and trading the correct asset.",
      followUp: "What happens if a fund changes its CUSIP due to a corporate action?",
      mistake: "Failing to account for corporate actions (like mergers or share class changes) that require mapping historical data to a new identifier."
    },
    {
      question: "How did you handle the processing of dividends and capital gains?",
      answer: "Dividend processing required ingesting the ex-date, record date, and payable date along with the rate per share. Our system listened for these events and, on the payable date, automatically calculated the total payout based on the plan's position. We then generated the corresponding reinvestment trades (DRIP) based on the plan sponsor's rules.",
      followUp: "Why is the ex-dividend date critical for recordkeeping?",
      mistake: "Confusing the ex-date with the payable date when determining who is entitled to the dividend."
    },
    {
      question: "What was the biggest technical hurdle in integrating with the legacy RKD?",
      answer: "The legacy RKD was a monolithic relational database with complex stored procedures running the nightly batch. Inserting data directly risked locking tables and delaying the batch. We solved this by using an event-driven architecture, staging the incoming data in a decoupled PostgreSQL database, and writing to the legacy RKD via a controlled API during a specific time window.",
      followUp: "How did you ensure data consistency between the staging database and the legacy RKD?",
      mistake: "Ignoring the complexities of distributed transactions and eventual consistency when interacting with a legacy monolith."
    },
    {
      question: "How did you ensure zero downtime or disruption to existing operations?",
      answer: "We used parallel runs. For 30 days, we ran the new automated API ingestion alongside the legacy manual process. We built a reconciliation tool to compare the outputs daily. We only cut over to the new system once we proved 100% match on NAVs, dividends, and metadata for a full month.",
      followUp: "What did you do when the parallel run revealed a discrepancy?",
      mistake: "Viewing discrepancies as purely technical bugs rather than potential business logic misunderstandings."
    },
    {
      question: "Explain the role of Kafka in this architecture.",
      answer: "Kafka acted as our central nervous system. When the ingestion service successfully parsed and validated a NAV feed, it published an event to a Kafka topic. Multiple downstream services (pricing engine, reporting service, audit log) consumed this topic independently. This decoupled the ingestion logic from the processing logic, allowing us to scale them separately.",
      followUp: "How did you handle message retries or failures in Kafka?",
      mistake: "Treating Kafka like a traditional message queue (like RabbitMQ) without understanding consumer groups and offset management."
    },
    {
      question: "How did you manage the onboarding process for a new fund family?",
      answer: "We built a 'Fund Onboarding Wizard' in our internal portal. An operations analyst would input the fund's ticker or CUSIP. The system would call the Morningstar API, pull in all relevant metadata (prospectus URL, expense ratio, asset class), and populate the staging environment. This reduced a manual 2-week process to minutes.",
      followUp: "How did you handle funds that weren't covered by Morningstar?",
      mistake: "Assuming one data vendor covers 100% of the market and not having a fallback mechanism or manual override."
    },
    {
      question: "What metrics did you track to determine the success of this project?",
      answer: "Our primary KPIs were 'Time to Onboard New Fund' (reduced from 90 to 14 days), 'Number of Manual Pricing Errors' (reduced to zero), and the 'Nightly Batch Processing Time' (reduced by 60%). We also tracked the total AUM of the newly onboarded external funds to measure business value.",
      followUp: "How did the reduction in batch processing time impact the business?",
      mistake: "Focusing only on the technical achievement without linking it to the business ability to publish participant statements earlier."
    },
    {
      question: "How did you handle the mapping of different fund share classes (e.g., A, C, Institutional)?",
      answer: "Share classes are critical because they dictate the expense ratio and 12b-1 fees. We created a hierarchical data model where the 'Fund Portfolio' held common data (manager, strategy), and the 'Share Class' held specific data (CUSIP, NAV, fees). The mapping engine automatically linked new share classes to their parent portfolio based on vendor data.",
      followUp: "Why do retirement plans typically prefer Institutional share classes?",
      mistake: "Not understanding the impact of expense ratios on long-term retirement savings and fiduciary responsibility."
    },
    {
      question: "Describe your experience working with the operations team during this project.",
      answer: "Operations was my key stakeholder. I embedded myself with them for a week to observe their manual processes. We co-created the exception management dashboard. By making them part of the design process, we ensured the final tool solved their actual pain points rather than perceived ones, leading to high adoption.",
      followUp: "Can you give an example of a feature that came directly from observing operations?",
      mistake: "Building a tool in isolation and handing it over without understanding the day-to-day workflow."
    },
    {
      question: "How did you address the security requirements for financial data ingestion?",
      answer: "We enforced Mutual TLS (mTLS) for all API connections with external vendors. Data in transit was encrypted via TLS 1.3, and data at rest in our PostgreSQL database was encrypted using AWS KMS. We also implemented strict IAM roles, ensuring the ingestion service only had write access to specific staging tables.",
      followUp: "How did you manage the lifecycle of the mTLS certificates?",
      mistake: "Implementing security features but neglecting the operational overhead of certificate rotation, leading to unexpected outages."
    },
    {
      question: "What would you consider a major risk in a project like this, and how did you mitigate it?",
      answer: "The biggest risk was pricing a participant's trade with the wrong NAV, which could lead to massive financial liability. We mitigated this through aggressive validation rules (e.g., cross-referencing NAV changes with benchmark indices) and the parallel run strategy to ensure our automated logic matched historical expectations perfectly.",
      followUp: "How is a pricing error financially remediated in a retirement plan?",
      mistake: "Underestimating the complexity of 'as-of' corrections and making participants whole after a pricing error."
    },
    {
      question: "How did you handle the different cut-off times for various fund families?",
      answer: "Not all funds price exactly at 4:00 PM EST. We built a scheduling engine that maintained a metadata registry of expected pricing times for each fund. The engine dynamically adjusted polling intervals and alerted operations if a specific fund missed its expected SLA, preventing the entire batch from holding up for one late fund.",
      followUp: "How do you handle late trading scenarios?",
      mistake: "Failing to distinguish between trade cut-off times (usually 4 PM) and NAV publication times (which can be later)."
    },
    {
      question: "What was the most challenging technical decision you had to make?",
      answer: "Deciding whether to build a custom parser for each vendor or a single, generic mapping engine. We chose the generic engine. While it was harder to build initially, it paid off massively when we added our second and third data vendors, as we only had to configure mapping rules rather than write new code.",
      followUp: "How did you handle vendor API version upgrades?",
      mistake: "Hardcoding vendor-specific logic deeply into the application rather than isolating it in an adapter layer."
    },
    {
      question: "How did you ensure that the project stayed on schedule?",
      answer: "We used Kanban to manage flow and limit Work In Progress (WIP). This exposed bottlenecks quickly (usually around QA testing of the legacy integration). I also ruthlessly prioritized the MVP, focusing strictly on daily NAVs and dividends first, and deferring complex corporate actions to phase 2.",
      followUp: "How did stakeholders react to deferring features to Phase 2?",
      mistake: "Promising everything for the initial launch, leading to burnout and delayed delivery."
    },
    {
      question: "Explain the concept of 'Net Asset Value' (NAV) in the context of recordkeeping.",
      answer: "The NAV is the per-share value of a mutual fund, calculated daily based on the closing market prices of its underlying securities minus liabilities. In recordkeeping, the daily NAV is the multiplier applied to a participant's unit balance to determine their account value, and it's the price at which new trades are executed.",
      followUp: "How does 'forward pricing' work for mutual funds?",
      mistake: "Confusing mutual fund pricing (forward priced at end of day) with ETF pricing (intraday market pricing)."
    },
    {
      question: "What is your approach to handling technical debt accumulated during the project?",
      answer: "We maintained a 'Tech Debt Register' in Jira. During our MVP phase, we made deliberate trade-offs to meet deadlines. Post-launch, I negotiated with stakeholders to dedicate 20% of every sprint to paying down this debt, specifically focusing on refactoring the legacy database adapter.",
      followUp: "How do you quantify the cost of technical debt to business stakeholders?",
      mistake: "Failing to translate technical debt into business terms like 'increased maintenance cost' or 'slower time to market'."
    },
    {
      question: "Looking back, what is one thing you would have done differently on this project?",
      answer: "I would have involved the Enterprise Architecture team earlier in the discovery phase. We initially designed a solution that conflicted with a broader company initiative to move towards a specific cloud provider. Catching this late required rework that could have been avoided with earlier alignment.",
      followUp: "How do you balance team autonomy with enterprise architectural standards?",
      mistake: "Ignoring enterprise standards in the name of speed, creating siloed solutions that are hard to support long-term."
    }
  ]
};

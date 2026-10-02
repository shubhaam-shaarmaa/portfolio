export const caseStudy_1 = {
  id: "1",
  title: "Orion SIMPLE IRA Account Manager",
  subtitle: "Retirement Account Management System",
  domain: "Retirement Solutions - Real Work Experience",
  role: "Senior Product Owner",
  startDate: "2020-01-01",
  endDate: "2022-12-31",
  technologies: ["React", "Node.js", "Oracle DB", "Microservices", "REST APIs"],
  summary: "Spearheaded the development of a comprehensive platform for managing SIMPLE IRA retirement accounts, streamlining onboarding and contributions.",
  problemStatement: "Legacy systems for SIMPLE IRA management were highly manual, error-prone, and resulted in slow account setup and contribution processing delays.",
  solutionOverview: "Delivered a modern web-based platform with automated workflows, real-time validation, and seamless integration with core banking systems.",
  businessImpact: "Reduced onboarding time by 60%, decreased processing errors by 45%, and improved overall customer satisfaction scores by 30%.",
  technicalArchitecture: "Microservices-based backend with a React frontend, deployed on AWS with Kubernetes orchestration.",
  keyFeatures: ["Automated onboarding workflows", "Real-time contribution processing", "Employer portal", "Employee dashboard", "Automated compliance checks"],
  challenges: ["Integrating with legacy mainframe systems", "Navigating complex IRS regulations", "Data migration from disparate sources"],
  lessonsLearned: ["Early engagement with compliance is critical", "Iterative rollouts minimize disruption", "Robust data validation prevents downstream issues"],
  teamSize: 15,
  methodology: "Agile Scrum",
  userPersonas: ["Employers", "Employees", "Financial Advisors", "Operations Staff"],
  metrics: ["60% faster onboarding", "45% reduction in errors", "99.9% system uptime"],
  budget: "$2.5M",
  status: "Completed",
  client: "Capital Group",
  stakeholders: ["Operations", "Compliance", "IT", "Sales"],
  integrations: ["Mainframe core systems", "Identity Management", "CRM"],
  securityMeasures: ["MFA", "Encryption at rest and in transit", "Role-based access control"],
  performanceImprovements: "Optimized database queries resulting in 40% faster page loads.",
  deploymentStrategy: "Blue-Green deployments with feature toggles.",
  testingStrategy: "Test-Driven Development (TDD) with comprehensive automated E2E testing.",
  scalability: "Auto-scaling microservices to handle peak contribution periods (e.g., year-end).",
  accessibility: "WCAG 2.1 AA compliant.",
  compliance: "SEC, FINRA, and IRS regulatory compliance.",
  repositoryUrl: "",
  liveUrl: "",
  designMockups: [],
  architectureDiagrams: [],
  dataModels: [],
  apiEndpoints: [],
  thirdPartyServices: ["Okta", "Twilio"],
  versionControl: "Git",
  ciCdPipeline: "Jenkins pipeline with automated scanning and deployments.",
  monitoringTools: ["Datadog", "Splunk"],
  supportProcess: "Tiered support model with automated ticketing integration.",
  trainingMaterials: "Video tutorials, user guides, and internal wikis.",
  futureEnhancements: ["AI-driven investment recommendations", "Mobile app expansion"],
  relatedProjects: [],
  awards: ["Internal Innovation Award 2021"],
  publications: [],
  mediaMentions: [],
  interviewQA: [
    {
      question: "What is a SIMPLE IRA and how does it differ from a traditional 401(k)?",
      answer: "A SIMPLE (Savings Incentive Match Plan for Employees) IRA is a retirement plan for small businesses with 100 or fewer employees. It differs from a 401(k) primarily in its lower administrative costs, lack of non-discrimination testing, and strict mandatory employer contribution rules (either a 2% non-elective contribution or up to a 3% matching contribution). Contribution limits are also generally lower than 401(k)s.",
      followUp: "How did the Orion platform accommodate the mandatory employer match calculation?",
      mistake: "Confusing SIMPLE IRA rules with SEP IRAs or traditional 401(k) safe harbor rules."
    },
    {
      question: "What role did Orion play in managing these retirement accounts?",
      answer: "Orion acted as the primary technology overlay, providing portfolio accounting, performance reporting, and billing functionalities. By integrating the SIMPLE IRA Account Manager, we enabled automated processing of participant setups and contribution tracking directly against Orion's core accounting engine.",
      followUp: "Can you describe the data flow between Orion and the custodian?",
      mistake: "Failing to distinguish between Orion (the technology provider/portfolio management system) and the actual custodian holding the assets."
    },
    {
      question: "How did you handle the integration of contribution data from payroll providers?",
      answer: "We established standardized API endpoints and flat-file ingestion pipelines (for legacy payroll providers) that mapped employer-level contribution files down to the participant level. We implemented pre-trade validation to ensure total contributions didn't exceed IRS annual limits before routing the cash to the custodian.",
      followUp: "What happens when an employer submits a contribution file with errors?",
      mistake: "Suggesting that invalid data is immediately processed and corrected post-trade, which violates compliance and causes complex trade corrections."
    },
    {
      question: "How did you manage IRS compliance regarding contribution limits?",
      answer: "We built a rules engine that referenced the participant's YTD contributions and the IRS annual limit. If a submitted contribution would push the participant over the limit, the system flagged the transaction in a 'Suspense' queue for operations to review, automatically notifying the employer to correct the payroll deduction.",
      followUp: "How did the system handle catch-up contributions for employees aged 50 and over?",
      mistake: "Forgetting that catch-up limits apply and hardcoding a single maximum contribution limit for all participants."
    },
    {
      question: "Describe the reconciliation process between the Orion platform and the custodian.",
      answer: "We performed daily reconciliation of positions, transactions, and cash balances using automated matching algorithms. Exceptions (breaks) were generated when Orion's ledger didn't match the custodian's data, such as a missed dividend or an unmatched trade, and routed to an exceptions management dashboard for resolution.",
      followUp: "What is the typical SLA for resolving cash versus position breaks?",
      mistake: "Assuming reconciliation is done monthly rather than daily in modern portfolio management systems."
    },
    {
      question: "How did the platform handle RMDs (Required Minimum Distributions) for older participants?",
      answer: "The system automatically identified participants approaching the RMD age, calculated the required distribution amount based on IRS life expectancy tables and their prior year-end balance, and triggered notifications to both the advisor and the participant to execute the distribution before the December 31st deadline.",
      followUp: "What happens if an RMD is not taken on time?",
      mistake: "Not mentioning the steep IRS excise tax penalty historically applied to missed RMDs."
    },
    {
      question: "What were the main challenges in migrating data from legacy systems?",
      answer: "The biggest challenge was data cleansing and mapping. Legacy systems often had inconsistent naming conventions, missing cost basis data, and unstructured historical transaction records. We had to create robust ETL pipelines and run parallel systems for a period to verify accuracy before full cutover.",
      followUp: "How did you handle missing cost basis data during migration?",
      mistake: "Underestimating the regulatory impact of incorrect cost basis data on a participant's tax reporting."
    },
    {
      question: "How was security implemented to protect PII and financial data?",
      answer: "We used a defense-in-depth approach. Data was encrypted at rest using AES-256 and in transit via TLS 1.2+. Access control was governed by Okta using RBAC, ensuring that employers could only see their employees, and advisors could only see their assigned books of business. Regular SOC 2 audits were also conducted.",
      followUp: "Explain how you managed API security between microservices.",
      mistake: "Focusing only on perimeter security and ignoring internal network security and lateral movement risks."
    },
    {
      question: "How did you design the employer portal to improve UX?",
      answer: "We focused on a clean, dashboard-driven interface that highlighted actionable items, such as pending employee enrollments and upcoming contribution deadlines. We reduced the number of clicks required to upload a payroll file from 7 to 2 and provided real-time error validation on upload.",
      followUp: "What feedback did you receive from employers during UAT?",
      mistake: "Designing the portal from an internal operations perspective rather than the end-user's perspective."
    },
    {
      question: "Explain the architecture that supported the real-time processing.",
      answer: "We utilized an event-driven microservices architecture built on Node.js and React. Kafka was used as the message broker to decouple services. When a contribution file was uploaded, an event was published, triggering validation, ledger updates, and custodian API calls asynchronously, ensuring the UI remained responsive.",
      followUp: "Why Kafka instead of a simpler message queue like RabbitMQ?",
      mistake: "Using buzzwords without understanding the specific use case for stream processing versus task queuing."
    },
    {
      question: "How did you handle trade corrections or 'as-of' trades?",
      answer: "We implemented an 'as-of' processing engine that could backdate transactions to their effective date. The system would recalculate balances, reverse and replay subsequent transactions, and automatically generate the necessary accounting adjustments to ensure accurate performance reporting.",
      followUp: "What is the impact of an 'as-of' trade on a daily valued fund's NAV?",
      mistake: "Ignoring the downstream effects of backdated trades on performance calculations and statements."
    },
    {
      question: "How was performance reporting handled for individual accounts?",
      answer: "We leveraged Orion's core performance engine to calculate Time-Weighted Return (TWR) and Internal Rate of Return (IRR) on a daily basis. The UI presented these metrics against customized benchmarks, allowing participants to track their progress toward retirement goals.",
      followUp: "When would you show an investor IRR instead of TWR?",
      mistake: "Confusing TWR (which eliminates the effect of cash flows) with IRR (which measures the impact of the investor's cash flow timing)."
    },
    {
      question: "What steps were taken to ensure system scalability during year-end processing?",
      answer: "Year-end is notoriously heavy due to final contributions, RMDs, and tax reporting. We used Kubernetes to auto-scale our microservices based on CPU and memory utilization. We also pre-scaled our database read replicas and load-tested the environment to handle 5x our peak historical volume.",
      followUp: "How did you monitor system health during these peak periods?",
      mistake: "Relying on manual scaling or not testing the auto-scaling policies under simulated load."
    },
    {
      question: "How did you ensure compliance with FINRA regulations regarding electronic records?",
      answer: "We implemented WORM (Write Once, Read Many) compliant storage for all statements, trade confirmations, and critical communications. Additionally, we maintained immutable audit logs of all user actions and system events, satisfying SEC Rule 17a-4 requirements.",
      followUp: "How did you handle data retention policies and eventual deletion (e.g., CCPA/GDPR)?",
      mistake: "Thinking only about data security and not about data retention and defensible deletion requirements."
    },
    {
      question: "What was the testing strategy for the API integrations?",
      answer: "We employed a comprehensive testing pyramid. Unit tests covered business logic. Integration tests verified database and cache interactions. For external APIs (custodians, market data), we used Postman collections and mock servers to simulate various response scenarios, including timeouts and rate limits.",
      followUp: "How did you handle contract testing for microservices?",
      mistake: "Only testing happy-path scenarios and ignoring error handling for external dependencies."
    },
    {
      question: "How did you manage the product backlog and prioritize features?",
      answer: "I used a combination of the MoSCoW method and cost-of-delay analysis. Regulatory requirements and critical bug fixes were always prioritized. For new features, we evaluated the business value (e.g., operational time saved, new AUM potential) against the development effort (story points).",
      followUp: "How did you balance technical debt against new feature development?",
      mistake: "Allowing the loudest stakeholder to dictate priority rather than using a framework aligned with strategic goals."
    },
    {
      question: "Can you explain the onboarding workflow for a new employee?",
      answer: "The workflow started with an email invitation triggered by the employer. The employee accessed a secure portal, completed a KYC (Know Your Customer) questionnaire, selected their investment elections from the plan's lineup, and set their contribution rate. This data automatically populated Orion and sent an account opening request to the custodian via API.",
      followUp: "How did you handle KYC failures (e.g., mismatch in identity verification)?",
      mistake: "Assuming straight-through processing (STP) works 100% of the time and not designing an exception handling process."
    },
    {
      question: "How did the system handle dividend reinvestment?",
      answer: "The platform listened for corporate action events from the custodian. When a dividend was paid, the system automatically generated a buy order for the same security, based on the participant's DRIP (Dividend Reinvestment Plan) settings, and allocated the shares proportionately.",
      followUp: "What happens when a fractional share is generated from a DRIP?",
      mistake: "Not accounting for fractional share accounting capabilities, which are essential for mutual funds and modern ETF platforms."
    },
    {
      question: "What metric are you most proud of improving on this project?",
      answer: "I'm most proud of reducing onboarding time by 60%. Previously, account setup took over a week due to manual paper processing and wet signatures. By digitizing the workflow with e-signatures and API integrations, we reduced the median setup time to under 48 hours.",
      followUp: "How did you convince compliance to accept e-signatures?",
      mistake: "Focusing solely on the technical implementation without acknowledging the necessary change management and compliance approvals."
    },
    {
      question: "How do you foresee AI impacting retirement account management in the future?",
      answer: "AI will likely transform personalization. We could see AI analyzing a participant's spending habits, life events, and broader economic indicators to proactively suggest adjustments to their savings rate or asset allocation, moving from static target-date funds to dynamic, individualized glide paths.",
      followUp: "What are the regulatory risks of using AI for investment advice?",
      mistake: "Ignoring the fiduciary implications and the SEC's current scrutiny on predictive data analytics and conflicts of interest."
    }
  ]
};

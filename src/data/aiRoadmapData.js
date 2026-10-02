/**
 * AI Journey & Roadmap Data
 * Truthful, structured progression: "One capability -> one real project"
 * Compliant with AI Credibility Guardrails (Learning, Building, Planned)
 */

export const AI_JOURNEY_HEADER = {
  title: "AI Journey",
  subtitle: "From applying AI to building AI-powered solutions.",
  description: "I currently leverage Generative AI tools (Gemini, ChatGPT, GitHub Copilot) daily to accelerate requirement synthesis, edge-case discovery, and frontend development. In parallel, I am methodically building capabilities toward production AI systems through a hands-on, capability-by-capability project roadmap.",
  roadmapTitle: "Building Toward Production AI Systems",
  roadmapSubtitle: "One capability → one real project."
};

export const AI_ROADMAP_PROJECTS = [
  {
    step: 1,
    capability: "RAG",
    projectTitle: "BFSI Research Assistant",
    mapping: "RAG → Research Assistant",
    purpose: "Research financial-services documents, fund filings, and regulatory guidelines with source-grounded answers and exact citations.",
    status: "CURRENTLY BUILDING",
    statusBadge: "building",
    plannedStack: ["FastAPI", "PostgreSQL", "pgvector", "Jina AI", "Groq", "Next.js"],
    keyMilestone: "Multi-document semantic retrieval pipeline with citation verification and hallucination scoring.",
    deliverableType: "Document Question-Answering Engine"
  },
  {
    step: 2,
    capability: "Agents",
    projectTitle: "Banking Support Agent",
    mapping: "Agents → Support Agent",
    purpose: "Handle routine banking and operational workflows using multi-step tool calling, API lookups, and deterministic business rules.",
    status: "PLANNED",
    statusBadge: "planned",
    plannedStack: ["LangGraph", "FastAPI", "LLMs", "REST APIs", "PostgreSQL"],
    keyMilestone: "Stateful agent workflow with human-in-the-loop escalation for sensitive financial actions.",
    deliverableType: "Autonomous Workflow Orchestration"
  },
  {
    step: 3,
    capability: "MCP",
    projectTitle: "Developer MCP Server",
    mapping: "MCP → Developer Server",
    purpose: "Expose curated financial schemas, trade lifecycle verification functions, and story generation tools directly to AI assistants via MCP.",
    status: "PLANNED",
    statusBadge: "planned",
    plannedStack: ["Model Context Protocol (MCP)", "Node.js", "Python", "JSON-RPC"],
    keyMilestone: "Standardized tool & resource interface compliant with Anthropic/OpenAI MCP specifications.",
    deliverableType: "Context Protocol Infrastructure"
  },
  {
    step: 4,
    capability: "Evals",
    projectTitle: "AI Regression Suite",
    mapping: "Evals → Regression Suite",
    purpose: "Systematically benchmark and evaluate model outputs across correctness, relevance, groundedness, consistency, and regression risks.",
    status: "PLANNED",
    statusBadge: "planned",
    plannedStack: ["DeepEval / Ragas", "Python", "Pytest", "Structured Test Datasets"],
    keyMilestone: "Automated CI/CD test gates verifying LLM response quality before deployment.",
    deliverableType: "Evaluation & Quality Assurance"
  },
  {
    step: 5,
    capability: "LLMOps",
    projectTitle: "AI Observability Platform",
    mapping: "LLMOps → Observability",
    purpose: "Monitor production LLM application health including token usage, latency percentiles, error rates, traces, and cost attribution.",
    status: "PLANNED",
    statusBadge: "planned",
    plannedStack: ["Sentry", "Opik", "AWS CloudWatch", "OpenTelemetry"],
    keyMilestone: "End-to-end distributed trace tracking from user prompt to LLM generation and database lookups.",
    deliverableType: "Telemetry & Operational Monitoring"
  },
  {
    step: 6,
    capability: "Fine-Tuning",
    projectTitle: "Domain SLM",
    mapping: "Fine-Tuning → Domain SLM",
    purpose: "Fine-tune a specialized small language model (SLM) for financial terminology, trade classification, and Gherkin formatting.",
    status: "PLANNED",
    statusBadge: "planned",
    plannedStack: ["LoRA / QLoRA", "HuggingFace", "PyTorch", "Open-Weight Models"],
    keyMilestone: "Task-optimized 3B/8B model delivering high accuracy on financial classification at minimal inference latency.",
    deliverableType: "Specialized Model Parameter Tuning"
  },
  {
    step: 7,
    capability: "AI Security",
    projectTitle: "Injection Firewall",
    mapping: "Security → Injection Firewall",
    purpose: "Detect and mitigate prompt injection, jailbreaks, data exfiltration attempts, and unsafe user inputs before reaching core models.",
    status: "PLANNED",
    statusBadge: "planned",
    plannedStack: ["Guardrails AI", "Regex & Semantic Filters", "Input Sanitization"],
    keyMilestone: "Real-time inbound prompt scanning layer enforcing enterprise security boundaries.",
    deliverableType: "Defensive Security Boundary"
  },
  {
    step: 8,
    capability: "Model Routing",
    projectTitle: "AI Gateway",
    mapping: "Model Routing → AI Gateway",
    purpose: "Dynamically route requests across various LLMs based on cost targets, latency constraints, task complexity, and model availability.",
    status: "PLANNED",
    statusBadge: "planned",
    plannedStack: ["LiteLLM", "FastAPI", "Redis Cache", "Cloudflare Gateway"],
    keyMilestone: "Intelligent gateway providing fallback failover, caching, rate-limiting, and cost optimization.",
    deliverableType: "Traffic & Routing Infrastructure"
  }
];

export const AI_ARCHITECTURE_SPEC = {
  title: "AI Architecture — Building Progressively",
  label: "Future Evolving Architecture",
  note: "This target architecture illustrates how each individual capability in the roadmap connects to form a resilient, enterprise-grade AI system. It is currently being built progressively rather than presented as a completed system.",
  layers: [
    {
      name: "Client Layer",
      icon: "fa-solid fa-desktop",
      components: ["User Client", "Next.js / React Frontend", "Authentication & Session"]
    },
    {
      name: "Gateway & Security Layer",
      icon: "fa-solid fa-shield-halved",
      components: ["AI Gateway (Routing & Rate Limits)", "Prompt Injection Firewall", "Semantic Cache (Redis)"]
    },
    {
      name: "Application & Agent Orchestration",
      icon: "fa-solid fa-gears",
      components: ["FastAPI Application Hub", "LangGraph State Machine", "RAG Retrieval Controller"]
    },
    {
      name: "Intelligence & Model Layer",
      icon: "fa-solid fa-microchip",
      components: ["Groq / High-Speed Inference", "Open-Weight Domain SLM", "Commercial Fallback LLMs"]
    },
    {
      name: "Data & Context Infrastructure",
      icon: "fa-solid fa-database",
      components: ["PostgreSQL + pgvector (Embeddings)", "Model Context Protocol (MCP Tools)", "Core Financial Enterprise APIs"]
    },
    {
      name: "Operations & Governance (Cross-Cutting)",
      icon: "fa-solid fa-chart-line",
      components: ["AI Evaluation Suite (DeepEval)", "Observability & Tracing (Opik/Sentry)", "Audit Trail & Compliance Logging"]
    }
  ]
};

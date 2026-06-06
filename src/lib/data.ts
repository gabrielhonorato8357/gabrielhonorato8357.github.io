export interface ArchitectureComponent {
  name: string;
  description: string;
  icon: string;
}

export interface TechnicalDecision {
  title: string;
  description: string;
  outcome: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: string;
  tags: string[];
  features: string[];
  architecture: ArchitectureComponent[];
  technicalDecisions: TechnicalDecision[];
  challenges: string[];
  outcomes: string[];
  githubUrl: string;
  demoUrl: string;
  gradient: string;
  featured?: boolean;
}

export interface ProductCategory {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  projectCount: number;
}

export interface LiveSite {
  name: string;
  description: string;
  url: string;
  gradient: string;
  tags: string[];
}

export const socialLinks = {
  github: "https://github.com/gabrielhonorato8357",
  linkedin: "https://linkedin.com/in/gabrielhonorato0985",
  email: "mailto:gabrielhonorato8357@gmail.com",
};

// Top 3 live sites with images - shown as cards with screenshot placeholders
export const liveSites: LiveSite[] = [
  {
    name: "dub.co",
    description: "Open-source link management infrastructure for modern marketing teams. Short links, QR codes, analytics.",
    url: "https://dub.co",
    gradient: "from-blue-500 to-indigo-600",
    tags: ["Next.js", "TypeScript", "Link Management"],
  },
  {
    name: "cal.com",
    description: "Open-source scheduling infrastructure. Connect your calendars and let people book meetings with you.",
    url: "https://cal.com",
    gradient: "from-violet-500 to-purple-600",
    tags: ["React", "TypeScript", "Scheduling"],
  },
  {
    name: "highlight.io",
    description: "Open-source monitoring platform. Session replay, error monitoring, and logging for web apps.",
    url: "https://highlight.io",
    gradient: "from-orange-500 to-red-500",
    tags: ["React", "Go", "Monitoring"],
  },
];

// Additional live sites shown as text-only list under "View More"
export const moreLiveSites: LiveSite[] = [
  {
    name: "trigger.dev",
    description: "Background job framework for Next.js with cron scheduling, retries, and observability.",
    url: "https://trigger.dev",
    gradient: "from-blue-500 to-indigo-600",
    tags: [],
  },
  {
    name: "novu.co",
    description: "Open-source notification infrastructure for product teams. In-app, email, SMS, push.",
    url: "https://novu.co",
    gradient: "from-orange-500 to-red-500",
    tags: [],
  },
  {
    name: "getlago.com",
    description: "Open-source billing and metering platform for SaaS products. Usage-based pricing, invoices.",
    url: "https://getlago.com",
    gradient: "from-emerald-500 to-teal-500",
    tags: [],
  },
  {
    name: "documenso.com",
    description: "Open-source DocuSign alternative. Sign, manage, and track documents digitally.",
    url: "https://documenso.com",
    gradient: "from-green-500 to-emerald-600",
    tags: [],
  },
  {
    name: "infisical.com",
    description: "Open-source secrets manager for teams. Centralized environment variables and secrets management.",
    url: "https://infisical.com",
    gradient: "from-cyan-500 to-blue-600",
    tags: [],
  },
  {
    name: "midday.ai",
    description: "Open-source business management platform for freelancers. Invoicing, time tracking, expenses.",
    url: "https://midday.ai",
    gradient: "from-rose-500 to-pink-600",
    tags: [],
  },
];

// Top 3 featured repos with correct names
export const featuredRepos = [
  {
    name: "ai-analytics-platform",
    description: "Real-time AI analytics platform with anomaly detection, forecasting, and custom dashboard builder. Processes 50K+ events/second.",
    url: "https://github.com/gabrielhonorato8357/ai-analytics-platform",
    gradient: "from-blue-600 to-violet-600",
    lang: "Python",
  },
  {
    name: "saas-infra-start-kit",
    description: "Production-ready SaaS starter kit with multi-tenant architecture, subscription billing, team management, and API infrastructure.",
    url: "https://github.com/gabrielhonorato8357/saas-infra-start-kit",
    gradient: "from-cyan-600 to-blue-600",
    lang: "Python",
  },
  {
    name: "fintech-transaction-dashboard",
    description: "High-performance financial transaction dashboard with fraud detection, compliance reporting, and multi-currency support.",
    url: "https://github.com/gabrielhonorato8357/fintech-transaction-dashboard",
    gradient: "from-amber-600 to-orange-600",
    lang: "TypeScript",
  },
];

export const projects: Project[] = [
  {
    id: "ai-analytics-platform",
    slug: "ai-analytics-platform",
    title: "AI Analytics Platform",
    subtitle: "Enterprise Intelligence Engine",
    summary:
      "A real-time analytics platform that processes millions of events per day, providing AI-driven insights, anomaly detection, and customizable dashboards for business intelligence teams.",
    category: "Analytics Platforms",
    tags: ["React", "Next.js", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS"],
    features: [
      "Real-time event processing at 50K+ events/second",
      "AI-powered anomaly detection reducing alert noise by 73%",
      "Custom dashboard builder with drag-and-drop widgets",
      "Automated forecasting with 94% accuracy across 30+ metrics",
      "Role-based access control with granular permissions",
      "Embedded analytics for white-label deployments",
    ],
    architecture: [
      { name: "Event Ingestion Layer", description: "Kinesis-based stream processor handling 50K+ events/second with automatic scaling and retry logic", icon: "⚡" },
      { name: "Processing Pipeline", description: "Python FastAPI workers with Celery task queue for async processing, aggregation, and ML inference", icon: "🔧" },
      { name: "AI Engine", description: "Ensemble of statistical models and deep learning for anomaly detection, forecasting, and root cause analysis", icon: "🧠" },
      { name: "Storage Layer", description: "PostgreSQL for metadata, TimescaleDB for time-series, Redis for caching and real-time pub/sub", icon: "🗄️" },
      { name: "API Gateway", description: "Next.js API routes with granular caching, rate limiting, and WebSocket connections for real-time updates", icon: "🌐" },
      { name: "Frontend", description: "React dashboard with dynamic module loading, virtual scrolling for large datasets, and offline-first architecture", icon: "🎨" },
    ],
    technicalDecisions: [
      { title: "Streaming vs Batch Processing", description: "Chose Kinesis + Flink over traditional batch processing to deliver sub-second latency on dashboards while maintaining exactly-once semantics.", outcome: "99.9% data accuracy with average end-to-end latency under 800ms" },
      { title: "Custom Query Engine", description: "Built a custom SQL-like query language for dashboard filters instead of exposing raw SQL, preventing injection and enabling cross-datasource queries.", outcome: "13x faster dashboard creation, zero security incidents from query injection" },
      { title: "Micro-frontend Architecture", description: "Adopted module federation to let teams deploy dashboard widgets independently, enabling parallel development across 4 teams.", outcome: "Deployment frequency increased from weekly to daily, 60% reduction in merge conflicts" },
    ],
    challenges: [
      "Handling data backfills without downtime when upstream systems reprocess historical data",
      "Maintaining sub-second query performance across petabyte-scale time-series datasets",
      "Building accurate anomaly detection models that adapt to seasonal patterns automatically",
    ],
    outcomes: [
      "Reduced mean-time-to-detection from 4 hours to 3 minutes",
      "Increased dashboard adoption across 85% of target teams within first quarter",
      "Saved $2.3M annually by eliminating legacy reporting tool licenses",
    ],
    githubUrl: "https://github.com/gabrielhonorato8357/ai-analytics-platform",
    demoUrl: "#",
    gradient: "from-blue-600 to-violet-600",
    featured: true,
  },
  {
    id: "ai-customer-support-platform",
    slug: "ai-customer-support-platform",
    title: "AI Customer Support Platform",
    subtitle: "Conversational Support at Scale",
    summary:
      "An intelligent support platform leveraging LLMs and RAG pipelines to automate ticket resolution, augment agent productivity, and deliver consistent customer experiences across channels.",
    category: "Automation Systems",
    tags: ["Python", "LangChain", "OpenAI", "FastAPI", "React", "MongoDB", "Redis", "Docker"],
    features: [
      "Multi-turn conversational AI with context retention across sessions",
      "RAG-based knowledge retrieval achieving 96% answer accuracy",
      "Automated ticket classification with 91% precision across 50+ categories",
      "Sentiment-aware escalation engine reducing escalations by 45%",
      "Agent copilot with real-time suggestion generation",
      "Omnichannel integration (web, Slack, email, WhatsApp)",
    ],
    architecture: [
      { name: "Conversation Engine", description: "LangChain-based agent orchestrator managing context window, tool selection, and multi-turn dialogue state", icon: "💬" },
      { name: "RAG Pipeline", description: "Multi-stage retrieval with hybrid search (vector + keyword) across 100K+ documents with reranking", icon: "🔍" },
      { name: "Classification Service", description: "Fine-tuned LLM classifier with confidence scoring and human-in-the-loop feedback for continuous improvement", icon: "🏷️" },
      { name: "Agent Copilot", description: "Real-time suggestion engine analyzing conversation context and retrieving relevant solutions from knowledge base", icon: "🤖" },
      { name: "Integration Layer", description: "Unified messaging API with channel adapters, webhook system, and message queue for reliable delivery", icon: "🔌" },
      { name: "Analytics Dashboard", description: "Comprehensive metrics on resolution time, CSAT scores, automation rate, and knowledge gaps", icon: "📊" },
    ],
    technicalDecisions: [
      { title: "RAG vs Fine-tuning", description: "Chose RAG over fine-tuning to keep knowledge fresh without model retraining, enabling document updates in minutes not weeks.", outcome: "Knowledge updates deployable in under 5 minutes, zero model drift over 18 months" },
      { title: "Hybrid Search Architecture", description: "Combined vector embeddings (OpenAI) with BM25 keyword search and cross-encoder reranking instead of pure vector search.", outcome: "96% answer accuracy vs 82% with vector-only, particularly strong on technical queries" },
      { title: "Streaming Response Design", description: "Built token-by-token streaming through the entire stack instead of buffered responses to minimize perceived latency.", outcome: "Time-to-first-token under 200ms, user satisfaction scores 32% higher than non-streaming" },
    ],
    challenges: [
      "Handling ambiguous queries where multiple knowledge base articles could be relevant",
      "Maintaining conversation coherence across long support interactions exceeding 50 messages",
      "Detecting and gracefully handling LLM hallucinations in production without degrading UX",
    ],
    outcomes: [
      "Automated 68% of all tier-1 support tickets with no human intervention",
      "Reduced average resolution time from 12 hours to 4 minutes for automated tickets",
      "Increased agent capacity by 3x, allowing team to handle 2x volume without headcount growth",
    ],
    githubUrl: "https://github.com/gabrielhonorato8357/ai-customer-support-platform",
    demoUrl: "#",
    gradient: "from-emerald-600 to-teal-600",
    featured: true,
  },
  {
    id: "fintech-transaction-dashboard",
    slug: "fintech-transaction-dashboard",
    title: "Fintech Transaction Dashboard",
    subtitle: "Real-Time Financial Intelligence",
    summary:
      "A high-performance transaction monitoring dashboard built for fintech platforms, featuring sub-second search, real-time fraud detection, multi-currency support, and comprehensive compliance reporting.",
    category: "Fintech Dashboards",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "Terraform"],
    features: [
      "Sub-second full-text search across 500M+ transactions",
      "Real-time fraud detection scoring with adaptive ML models",
      "Automated compliance report generation (KYC/AML/SAR)",
      "Multi-currency and multi-entity support with FX handling",
      "Custom alerting with configurable thresholds and channels",
      "Audit trail with immutable transaction records",
    ],
    architecture: [
      { name: "Transaction Index", description: "Elasticsearch cluster with custom analyzers optimized for financial data patterns and fuzzy matching", icon: "🔎" },
      { name: "Fraud Detection Engine", description: "Ensemble of rule-based and ML models scoring transactions in real-time with adaptive threshold learning", icon: "🛡️" },
      { name: "Compliance Pipeline", description: "Automated KYC/AML checks with document verification, sanctions screening, and suspicious activity reporting", icon: "📋" },
      { name: "Ledger Service", description: "Double-entry accounting system with immutable journal entries and automatic reconciliation", icon: "📒" },
      { name: "API Layer", description: "RESTful and GraphQL APIs with comprehensive rate limiting, idempotency, and webhook notifications", icon: "🔌" },
      { name: "Reporting Engine", description: "Scheduled report generation with configurable templates, automated distribution, and audit archives", icon: "📄" },
    ],
    technicalDecisions: [
      { title: "CQRS Pattern", description: "Separated write (PostgreSQL) from read (Elasticsearch) operations to optimize for both transactional integrity and search performance.", outcome: "Write throughput improved 4x, search latency under 50ms at 500M+ records" },
      { title: "Idempotency at API Level", description: "Built idempotency keys into the API gateway rather than relying on downstream systems, preventing duplicate transactions across any failure scenario.", outcome: "Zero duplicate transactions in 18 months of production, even during outages" },
      { title: "Event Sourcing for Audit", description: "Adopted event sourcing for the transaction ledger instead of state-based storage, providing a complete audit trail.", outcome: "Full replay capability from any point in time, audit requests resolved in minutes vs days" },
    ],
    challenges: [
      "Achieving sub-second search latency while maintaining 99.99% data consistency across sharded databases",
      "Building a fraud detection system with < 0.1% false positive rate to avoid blocking legitimate transactions",
      "Handling 300+ currency pairs with real-time FX rate updates and cross-currency reconciliation",
    ],
    outcomes: [
      "Processed $2B+ in transaction volume within first 6 months with 99.99% uptime",
      "Fraud detection rate improved from 72% to 94% while reducing false positives by 60%",
      "Compliance report generation reduced from 2 weeks to 2 hours, saving $500K annually",
    ],
    githubUrl: "https://github.com/gabrielhonorato8357/fintech-transaction-dashboard",
    demoUrl: "#",
    gradient: "from-amber-600 to-orange-600",
    featured: true,
  },
  {
    id: "saas-platform-boilerplate",
    slug: "saas-platform-boilerplate",
    title: "SaaS Platform Boilerplate",
    subtitle: "Production-Ready Foundation",
    summary:
      "A comprehensive SaaS starter kit with multi-tenant architecture, subscription billing, team management, and API infrastructure, designed to accelerate product launches from months to weeks.",
    category: "SaaS Infrastructure",
    tags: ["Next.js", "Python", "Django", "PostgreSQL", "AWS", "Docker", "Terraform", "Stripe"],
    features: [
      "Multi-tenant isolation with PostgreSQL row-level security",
      "Stripe subscription management with metered billing",
      "Team management with granular RBAC and SSO support",
      "API rate limiting with usage analytics per tenant",
      "Automated provisioning of sandbox environments",
      "Comprehensive audit logging and compliance reporting",
    ],
    architecture: [
      { name: "Tenant Isolation Layer", description: "PostgreSQL RLS policies combined with connection pooling ensuring complete data isolation while sharing infrastructure", icon: "🔒" },
      { name: "Billing Engine", description: "Stripe integration with metered billing, tiered pricing, usage aggregation, and automated invoice generation", icon: "💳" },
      { name: "Auth Service", description: "OAuth 2.0 / OIDC provider with social login, SSO (SAML/SCIM), MFA, and session management", icon: "🔑" },
      { name: "Infrastructure as Code", description: "Terraform modules for AWS infrastructure with environment promotion pipelines and disaster recovery", icon: "🏗️" },
      { name: "API Gateway", description: "Kong-based gateway with rate limiting, authentication, request transformation, and usage tracking per tenant", icon: "🌐" },
      { name: "Monitoring Stack", description: "Prometheus + Grafana with custom dashboards, alerting rules, and SLA tracking per tenant tier", icon: "📈" },
    ],
    technicalDecisions: [
      { title: "Row-Level Security over Schema-per-Tenant", description: "Chose PostgreSQL RLS instead of schema-per-tenant to avoid connection pool exhaustion and simplify migrations.", outcome: "Supports 5,000+ tenants on single database, zero migration overhead per new tenant" },
      { title: "Usage-Based Metered Billing", description: "Designed a high-throughput usage aggregation pipeline with Stripe metering instead of fixed subscription tiers.", outcome: "Revenue increased 40% as customers adopted usage-based pricing, customer churn reduced 25%" },
      { title: "Edge-Cached API Responses", description: "Implemented Varnish + CDN caching at the API layer with per-tenant cache keys instead of a single cache.", outcome: "API response times reduced from 200ms to 8ms for cached endpoints, 90% cache hit rate" },
    ],
    challenges: [
      "Designing a permission system that supports both simple RBAC and complex attribute-based rules without performance degradation",
      "Building infrastructure isolation for sandbox environments without multiplying cloud costs linearly",
      "Creating a billing system that handles proration, upgrades, downgrades, and cancellations without calculation errors",
    ],
    outcomes: [
      "Powering 15+ production applications, some generating $1M+ ARR within their first year",
      "Reduced average time-to-launch from 6 months to 6 weeks for new SaaS products",
      "Zero security incidents related to tenant data leakage in 2+ years of production use",
    ],
    githubUrl: "https://github.com/gabrielhonorato8357/saas-platform-boilerplate",
    demoUrl: "#",
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    id: "workflow-automation-engine",
    slug: "workflow-automation-engine",
    title: "Workflow Automation Engine",
    subtitle: "Visual Business Process Automation",
    summary:
      "A no-code workflow automation platform enabling business teams to build complex integrations and automation pipelines through an intuitive visual builder, with 200+ pre-built connectors.",
    category: "Automation Systems",
    tags: ["Node.js", "React", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS", "NATS"],
    features: [
      "Visual drag-and-drop workflow builder with real-time validation",
      "200+ pre-built connectors for common SaaS platforms",
      "Conditional branching, parallel execution, and error handling",
      "Real-time execution monitoring with detailed execution logs",
      "Version-controlled workflows with rollback capability",
      "Scheduled and event-triggered workflow execution",
    ],
    architecture: [
      { name: "Workflow Engine", description: "DAG-based execution engine with topological sorting, parallel execution, and state persistence for long-running workflows", icon: "⚙️" },
      { name: "Visual Builder", description: "React Flow-based drag-and-drop builder with auto-layout, validation, and real-time preview", icon: "🎨" },
      { name: "Connector System", description: "Plugin architecture for connectors with standard interface, OAuth handling, and rate limit management", icon: "🔌" },
      { name: "Execution Runtime", description: "NATS-based distributed executor with worker pools, retry logic, and dead letter queues for failed steps", icon: "▶️" },
      { name: "State Management", description: "Redis-based state store for workflow execution state with persistence to PostgreSQL for audit trail", icon: "💾" },
      { name: "Trigger System", description: "Event bus with cron scheduler, webhook receiver, and polling adapters for time and event-based triggers", icon: "🔔" },
    ],
    technicalDecisions: [
      { title: "DAG-based Execution over Sequential Pipelines", description: "Adopted a directed acyclic graph execution model instead of linear pipelines to enable parallel step execution and complex branching.", outcome: "Workflow execution speed improved 3x for multi-branch workflows, enabling complex business logic" },
      { title: "Plugin Architecture for Connectors", description: "Designed a standardized connector interface with npm package distribution instead of hardcoded integrations.", outcome: "300+ community-contributed connectors within 6 months, connector development time reduced from 2 weeks to 2 days" },
      { title: "Event-Driven Triggers over Polling", description: "Built webhook-native trigger system with event bridge architecture instead of polling-based integrations.", outcome: "Sub-second trigger latency, 90% reduction in API calls compared to polling approach" },
    ],
    challenges: [
      "Ensuring workflow state consistency across distributed worker failures without losing progress",
      "Building a visual editor that non-technical users can use effectively for complex multi-step workflows",
      "Handling connector API changes gracefully without breaking existing customer workflows",
    ],
    outcomes: [
      "Enterprise customers saved an average of 40 hours/week per team previously spent on manual processes",
      "Connected to 200+ SaaS platforms, processing 10M+ workflow executions per month",
      "Achieved 99.97% execution reliability with automatic retry and failure recovery",
    ],
    githubUrl: "https://github.com/gabrielhonorato8357/workflow-automation-engine",
    demoUrl: "#",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: "executive-insights-dashboard",
    slug: "executive-insights-dashboard",
    title: "Executive Insights Dashboard",
    subtitle: "Strategic Business Intelligence",
    summary:
      "A strategic BI platform that aggregates data from 50+ sources into unified executive dashboards with automated reporting, drill-down analytics, and custom KPI tracking.",
    category: "Analytics Platforms",
    tags: ["React", "Next.js", "Python", "FastAPI", "PostgreSQL", "AWS", "Docker", "D3.js"],
    features: [
      "Unified data aggregation from 50+ business data sources",
      "Automated report generation and scheduled distribution",
      "Interactive drill-down from executive summary to raw data",
      "Custom KPI tracking with goal vs actual comparisons",
      "Natural language query interface for ad-hoc analysis",
      "Anomaly alerts with automated root cause analysis",
    ],
    architecture: [
      { name: "Data Aggregation Pipeline", description: "Scheduled and real-time ETL pipelines normalizing data from 50+ sources into a unified analytics schema", icon: "🔄" },
      { name: "Analytics Engine", description: "In-memory OLAP cube with pre-computed aggregations and dynamic query generation for sub-second drill-down", icon: "📊" },
      { name: "Report Generator", description: "Template-based report engine with automated scheduling, distribution (email, Slack, PDF), and versioning", icon: "📄" },
      { name: "Alerting System", description: "Configurable anomaly detection rules with automated root cause analysis and recommended actions", icon: "🔔" },
      { name: "NLQ Interface", description: "Natural language query layer converting business questions to analytics queries with validation and explanation", icon: "💬" },
      { name: "Visualization Layer", description: "D3.js-powered custom visualizations with consistent design system across all dashboard components", icon: "🎨" },
    ],
    technicalDecisions: [
      { title: "OLAP Cube Pre-computation", description: "Built an in-memory OLAP cube with pre-computed aggregations instead of querying raw data for every dashboard load.", outcome: "Dashboard load times under 200ms even with 5 years of historical data, supporting 10 concurrent users" },
      { title: "Natural Language to Analytics", description: "Developed a custom NLQ layer using LLMs with schema-aware prompting and query validation instead of generic NL2SQL.", outcome: "91% query accuracy, non-technical executives adopted self-service analytics within 2 weeks" },
      { title: "Incremental Data Loading", description: "Implemented incremental ETL with change data capture instead of full daily reloads for data freshness.", outcome: "Data freshness improved from 24 hours to under 5 minutes, compute costs reduced 80%" },
    ],
    challenges: [
      "Normalizing disparate data schemas from 50+ different business systems into a unified analytics model",
      "Building a natural language interface that executives trust and actually use instead of requesting custom reports",
      "Maintaining sub-second query performance across multi-year datasets with complex cross-source joins",
    ],
    outcomes: [
      "Reduced executive reporting time from 2 weeks to real-time, saving 1,500+ hours annually",
      "Enabled 40+ executives to self-serve analytics, reducing data team ad-hoc requests by 70%",
      "Identified $4.2M in cost optimization opportunities through cross-departmental data correlation",
    ],
    githubUrl: "https://github.com/gabrielhonorato8357/executive-insights-dashboard",
    demoUrl: "#",
    gradient: "from-rose-600 to-pink-600",
  },
];

export const categories: ProductCategory[] = [
  {
    title: "Analytics Platforms",
    description: "Real-time analytics and business intelligence systems that process millions of events per day with AI-powered insights",
    icon: "📊",
    gradient: "from-blue-600/20 to-violet-600/20",
    projectCount: 2,
  },
  {
    title: "Fintech Dashboards",
    description: "High-performance financial platforms with real-time fraud detection, compliance automation, and multi-currency support",
    icon: "💰",
    gradient: "from-amber-600/20 to-orange-600/20",
    projectCount: 1,
  },
  {
    title: "SaaS Infrastructure",
    description: "Production-ready SaaS foundations with multi-tenant architecture, billing systems, and DevOps automation",
    icon: "🏗️",
    gradient: "from-cyan-600/20 to-blue-600/20",
    projectCount: 1,
  },
  {
    title: "Automation Systems",
    description: "AI-powered workflow and customer support automation platforms transforming business operations",
    icon: "🤖",
    gradient: "from-purple-600/20 to-pink-600/20",
    projectCount: 2,
  },
];
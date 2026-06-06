export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ExperienceCard {
  title: string;
  description: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "ai-analytics-platform",
    title: "AI Analytics Platform",
    summary:
      "Enterprise-grade analytics platform with AI-driven insights, real-time data processing, and interactive dashboards for business intelligence teams.",
    tags: ["React", "Next.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
    features: [
      "Real-time data streaming and visualization",
      "AI-powered anomaly detection and forecasting",
      "Custom dashboard builder with drag-and-drop",
      "Role-based access control and audit logging",
    ],
    githubUrl: "https://github.com/gabrielhonorator8357/ai-analytics-platform",
    demoUrl: "#",
  },
  {
    id: "ai-customer-support-platform",
    title: "AI Customer Support Platform",
    summary:
      "Intelligent customer support system leveraging LLMs, RAG pipelines, and conversational AI to automate ticket resolution and enhance agent productivity.",
    tags: ["Python", "LangChain", "OpenAI", "FastAPI", "React", "MongoDB"],
    features: [
      "Multi-turn conversational AI with context awareness",
      "RAG-based knowledge base retrieval",
      "Automated ticket classification and routing",
      "Sentiment analysis and escalation engine",
    ],
    githubUrl:
      "https://github.com/gabrielhonorator8357/ai-customer-support-platform",
    demoUrl: "#",
  },
  {
    id: "fintech-transaction-dashboard",
    title: "Fintech Transaction Dashboard",
    summary:
      "High-performance financial transaction monitoring dashboard with real-time fraud detection, compliance reporting, and multi-currency support.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
    features: [
      "Sub-second transaction search and filtering",
      "Real-time fraud scoring and alerting",
      "Compliance report generation (KYC/AML)",
      "Multi-currency and multi-entity support",
    ],
    githubUrl:
      "https://github.com/gabrielhonorator8357/fintech-transaction-dashboard",
    demoUrl: "#",
  },
  {
    id: "saas-platform-boilerplate",
    title: "SaaS Platform Boilerplate",
    summary:
      "Production-ready SaaS starter kit with multi-tenant architecture, subscription billing, team management, and comprehensive API infrastructure.",
    tags: ["Next.js", "Python", "Django", "PostgreSQL", "AWS", "Docker"],
    features: [
      "Multi-tenant isolation with row-level security",
      "Stripe subscription management and billing",
      "Team management with granular permissions",
      "API rate limiting and usage analytics",
    ],
    githubUrl:
      "https://github.com/gabrielhonorator8357/saas-platform-boilerplate",
    demoUrl: "#",
  },
  {
    id: "workflow-automation-engine",
    title: "Workflow Automation Engine",
    summary:
      "Visual workflow automation platform enabling business teams to build complex integrations and automation pipelines without code.",
    tags: [
      "Node.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
    features: [
      "Visual drag-and-drop workflow builder",
      "200+ pre-built integration connectors",
      "Conditional branching and error handling",
      "Real-time execution monitoring and logs",
    ],
    githubUrl:
      "https://github.com/gabrielhonorator8357/workflow-automation-engine",
    demoUrl: "#",
  },
  {
    id: "executive-insights-dashboard",
    title: "Executive Insights Dashboard",
    summary:
      "Strategic business intelligence platform aggregating data from multiple sources into unified executive-level dashboards and automated reporting.",
    tags: ["React", "Next.js", "Python", "FastAPI", "PostgreSQL", "AWS"],
    features: [
      "Unified data aggregation from 50+ sources",
      "Automated scheduled report delivery",
      "Interactive drill-down analytics",
      "Custom KPI tracking and goal monitoring",
    ],
    githubUrl:
      "https://github.com/gabrielhonorator8357/executive-insights-dashboard",
    demoUrl: "#",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "MUI"],
  },
  {
    name: "Backend",
    skills: ["Python", "FastAPI", "Django", "Node.js", "C#", ".NET"],
  },
  {
    name: "AI & ML",
    skills: ["OpenAI", "LangChain", "RAG", "Embeddings", "Prompt Engineering"],
  },
  {
    name: "Data & Storage",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Docker", "GitHub Actions", "CI/CD"],
  },
];

export const experienceCards: ExperienceCard[] = [
  {
    title: "SaaS Platform Engineering",
    description:
      "Designed and built scalable multi-tenant SaaS platforms handling millions of requests per day. Architected microservices, implemented CI/CD pipelines, and optimized cloud infrastructure for cost and performance.",
    icon: "🏗️",
  },
  {
    title: "AI & Automation Systems",
    description:
      "Developed AI-powered solutions including LLM-based customer support, document processing pipelines, and intelligent workflow automation. Integrated RAG architectures and fine-tuned models for domain-specific tasks.",
    icon: "🤖",
  },
  {
    title: "Analytics & Data Visualization",
    description:
      "Built real-time analytics platforms processing streaming data at scale. Created interactive dashboards with drill-down capabilities, automated reporting systems, and data pipeline infrastructure.",
    icon: "📊",
  },
];
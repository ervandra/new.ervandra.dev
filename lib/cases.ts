export type CaseItem = {
  slug: string;
  title: string;
  context: string;
  clientType?: "corporate" | "startup" | "sme" | "individual";
  projectType?: "web-app" | "mobile-app" | "fullstack" | "ai-system" | "enterprise";
  problem?: string;
  intervention?: string;
  highlights?: string[];
  outcome?: string[];
  next?: string;
  stack?: string[];
  timeline?: string;
};

export const cases: CaseItem[] = [
  {
    slug: "corporate-enterprise-dashboard",
    title: "Enterprise Analytics Dashboard for Financial Services",
    context: "Corporate client with multi-branch operations and reporting chaos",
    clientType: "corporate",
    projectType: "web-app",
    problem: "Leadership lacked real-time visibility across 50+ branches. Monthly reports took 2 weeks to compile manually, causing delayed decisions.",
    intervention: "Built unified data warehouse → designed executive dashboard with drill-down capabilities → implemented automated report generation.",
    highlights: [
      "Real-time multi-branch analytics",
      "Automated daily/weekly/monthly reports",
      "Role-based access control",
      "Mobile-responsive executive view",
    ],
    outcome: ["Report time: 2 weeks → 2 minutes", "100% data accuracy", "Adopted by 200+ users"],
    next: "Expand to predictive analytics and forecasting module",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Chart.js", "Tailwind CSS"],
    timeline: "10 weeks",
  },
  {
    slug: "startup-mobile-app",
    title: "Cross-Platform Mobile App for On-Demand Services Startup",
    context: "Seed-stage startup needing to launch MVP fast",
    clientType: "startup",
    projectType: "mobile-app",
    problem: "Founders had a validated concept but no technical team. Needed production-ready app in 8 weeks to secure next funding round.",
    intervention: "Rapid discovery sprint → cross-platform development with shared codebase → integrated payment gateway and real-time tracking.",
    highlights: [
      "iOS & Android from single codebase",
      "Real-time order tracking",
      "Secure payment integration",
      "Push notification system",
    ],
    outcome: ["Launched in 7 weeks", "5,000+ downloads in month 1", "Series A secured"],
    next: "Scale backend infrastructure and add analytics",
    stack: ["React Native", "Node.js", "Firebase", "Stripe", "MapBox"],
    timeline: "7 weeks",
  },
  {
    slug: "integrated-ai-assisted-workflow",
    title: "From scattered ops to an integrated, AI-assisted workflow",
    context: "Scale-up with scattered tools and approval bottlenecks",
    clientType: "startup",
    projectType: "fullstack",
    problem: "Fragmented data across 5+ tools and manual approval queues slowed release cycles. Team spent 40% of time on repetitive data reconciliation instead of building.",
    intervention: "Conducted full audit → created unified data roadmap → built smallest shippable (approval automation) → rolled out incrementally with change-control discipline.",
    highlights: [
      "Unified data layer connecting all tools",
      "AI assistant UI for common queries",
      "Automated approval queue with audit trail",
      "Real-time dashboards for leadership",
    ],
    outcome: ["-30% cycle time", "-60% manual errors", "2 fewer firefighting days/week"],
    next: "Scale assistant coverage and expand automation to finance ops",
    stack: ["Next.js", "Node.js", "PostgreSQL", "OpenAI API", "n8n"],
    timeline: "12 weeks",
  },
  {
    slug: "ai-guardrails-implementation",
    title: "Practical AI with guardrails driving measurable ROI",
    context: "SMB with compliance constraints and limited data maturity",
    clientType: "sme",
    projectType: "ai-system",
    problem: "Leadership wanted AI benefits but worried about compliance risks, data leakage, and unmaintainable 'AI spaghetti' code.",
    intervention: "Started with privacy assessment → identified low-risk high-impact use cases → implemented with human-in-the-loop guardrails → measured ROI continuously.",
    highlights: [
      "Privacy-first AI architecture",
      "Document processing automation",
      "Human-in-the-loop approval flow",
      "Built-in audit logging",
    ],
    outcome: ["+40% processing speed", "Zero compliance incidents", "ROI positive in 6 weeks"],
    next: "Expand to customer service automation with same guardrails",
    stack: ["Python", "FastAPI", "Claude API", "PostgreSQL", "Docker"],
    timeline: "8 weeks",
  },
  {
    slug: "fullstack-internal-tools",
    title: "Internal Tools Suite for Operations Team",
    context: "Growing company with 50+ employees and manual processes",
    clientType: "corporate",
    projectType: "fullstack",
    problem: "Operations team using spreadsheets for everything. No single source of truth, frequent data entry errors, and impossible to track KPIs.",
    intervention: "Mapped all workflows → prioritized critical path tools → built modular internal suite with shared data layer.",
    highlights: [
      "Customer management portal",
      "Inventory tracking system",
      "Employee time tracking",
      "Integrated reporting dashboard",
    ],
    outcome: ["-70% data entry time", "Single source of truth", "Real-time KPI visibility"],
    next: "Add workflow automation and mobile access",
    stack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    timeline: "14 weeks",
  },
  {
    slug: "tailored-critical-path-build",
    title: "Tailored development on the critical path",
    context: "Internal tools modernization with strict change-control",
    clientType: "corporate",
    projectType: "enterprise",
    problem: "Legacy system causing 3-hour daily delays. Multiple failed attempts to modernize had created change aversion in leadership.",
    intervention: "Defined tight scope for critical path only → established freeze windows → delivered in 2-week sprints with demos → minimal disruption rollout.",
    highlights: [
      "Critical path optimization only",
      "Zero-downtime migration",
      "Freeze window discipline",
      "User training included",
    ],
    outcome: ["-3 hours daily delay", "95% user adoption in week 1", "Zero rollback required"],
    next: "Phase 2: secondary workflows modernization",
    stack: ["React", "Node.js", "SQL Server", "Azure"],
    timeline: "6 weeks",
  },
];
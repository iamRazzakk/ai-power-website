export interface ServiceProcessStep {
  id: number;
  title: string;
  content: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  menuTitle: string;
  shortDesc: string;
  heroImage: string;
  videoId: string;
  galleryImages: [string, string, string];
  description: string;
  description2: string;
  outcomes: string[];
  processSteps: ServiceProcessStep[];
  featuredCase?: {
    title: string;
    text: string;
    image: string;
  };
}

export const DEFAULT_SERVICE_SLUG = "web-development";

export const getServiceDetailsLink = (slug: string): string =>
  `/service-details?service=${slug}`;

export const SERVICES: ServiceItem[] = [
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    menuTitle: "UI/UX Design",
    shortDesc: "User-centered experiences that increase engagement and conversion.",
    heroImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=80",
    videoId: "8JjFa2ndC9k",
    galleryImages: [
      "https://images.unsplash.com/photo-1586717799252-5c466d6a24a4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "We design digital experiences that feel intuitive, look polished, and drive measurable business results. From user research and wireframes to high-fidelity prototypes and design systems, our UI/UX team helps you launch products people actually enjoy using.",
    description2:
      "Every screen is shaped by real user behavior — not assumptions. We validate flows early, reduce friction in critical journeys, and align design with your brand so adoption, retention, and conversion improve from day one.",
    outcomes: [
      "Research-led user journeys and information architecture.",
      "High-fidelity UI design with reusable component systems.",
      "Interactive prototypes for stakeholder and user validation.",
      "Accessibility-first layouts (WCAG-aware patterns).",
      "Design handoff ready for React, Next.js, and mobile teams.",
      "Conversion-focused landing pages and product dashboards.",
    ],
    processSteps: [
      {
        id: 1,
        title: "01. Discover & Research",
        content:
          "We map user goals, business objectives, and existing pain points through interviews, analytics review, and competitive audits.",
      },
      {
        id: 2,
        title: "02. Wireframe & Prototype",
        content:
          "Low- and high-fidelity prototypes validate navigation, content hierarchy, and key flows before development begins.",
      },
      {
        id: 3,
        title: "03. Visual Design",
        content:
          "We craft a cohesive visual language — typography, color, spacing, and components — aligned with your brand and product strategy.",
      },
      {
        id: 4,
        title: "04. Test & Handoff",
        content:
          "Usability feedback is folded into final designs, then delivered with specs and assets your engineering team can build from confidently.",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    menuTitle: "Web Development",
    shortDesc: "Fast, scalable, and modern web applications built for performance.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    videoId: "GxmVpca-96k",
    galleryImages: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "We build production-grade web applications with Next.js, TypeScript, and Tailwind CSS — optimized for speed, SEO, and long-term maintainability. Whether you need a marketing site, customer portal, or complex admin dashboard, we deliver clean architecture and reliable deployments.",
    description2:
      "Our full-stack approach covers frontend polish, API integration, authentication, and cloud hosting — so you get one team accountable for the entire web product, not disconnected handoffs.",
    outcomes: [
      "Next.js & React applications with server-side rendering.",
      "Type-safe APIs with Node.js, Express, and Prisma.",
      "Responsive, mobile-first interfaces with Tailwind CSS.",
      "Performance tuning, caching, and Core Web Vitals optimization.",
      "Secure auth, role-based access, and third-party integrations.",
      "CI/CD pipelines for predictable releases.",
    ],
    processSteps: [
      {
        id: 1,
        title: "01. Scope & Architecture",
        content:
          "We define features, tech stack, and system architecture — choosing patterns that scale with your traffic and team.",
      },
      {
        id: 2,
        title: "02. Sprint Development",
        content:
          "Agile sprints deliver working increments with demos, code reviews, and transparent progress tracking.",
      },
      {
        id: 3,
        title: "03. QA & Hardening",
        content:
          "Automated and manual testing, security checks, and performance profiling before go-live.",
      },
      {
        id: 4,
        title: "04. Launch & Support",
        content:
          "We deploy to production, monitor stability, and provide ongoing maintenance and feature iterations.",
      },
    ],
    featuredCase: {
      title: "ScaleStack SaaS Hub",
      text: "A multi-tenant SaaS platform with billing, RBAC, and real-time analytics — built with Next.js and Node.js.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    menuTitle: "Mobile App Development",
    shortDesc: "Cross-platform and native apps for iOS and Android.",
    heroImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
    videoId: "7CjdLh5M_rQ",
    galleryImages: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607252650355-6d5d5f2d7c4d?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "We design and develop mobile applications that perform flawlessly on iOS and Android — from consumer apps to field-service tools and B2B platforms. Native feel, offline support, push notifications, and secure backend sync come standard in our delivery playbook.",
    description2:
      "Choose cross-platform efficiency or native performance based on your product goals. We integrate with your existing APIs and cloud infrastructure so mobile becomes a seamless extension of your digital ecosystem.",
    outcomes: [
      "Cross-platform apps with React Native or native Swift/Kotlin.",
      "App Store & Google Play submission support.",
      "Offline-first data sync and push notification systems.",
      "Biometric login, deep linking, and in-app payments.",
      "Analytics, crash reporting, and performance monitoring.",
      "Backend APIs tailored for mobile consumption.",
    ],
    processSteps: [
      {
        id: 1,
        title: "01. Product Definition",
        content:
          "We define core user flows, platform strategy, and MVP scope aligned with your launch timeline.",
      },
      {
        id: 2,
        title: "02. UI for Mobile",
        content:
          "Touch-optimized interfaces following iOS and Material Design conventions for familiar, frictionless use.",
      },
      {
        id: 3,
        title: "03. Build & Integrate",
        content:
          "Feature development with API integration, authentication, and device-specific capabilities.",
      },
      {
        id: 4,
        title: "04. Test & Publish",
        content:
          "Device testing, beta distribution, store compliance, and post-launch update cycles.",
      },
    ],
  },
  {
    slug: "saas-product-development",
    title: "SaaS Product Development",
    menuTitle: "SaaS Product Development",
    shortDesc: "End-to-end product engineering from strategy through launch.",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    videoId: "Oe421EPjeBE",
    galleryImages: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "We partner with founders and product teams to build multi-tenant SaaS platforms from zero to scale — subscription billing, onboarding, admin dashboards, analytics, and role-based access included. Our stack (Next.js, Node.js, PostgreSQL/MongoDB) is battle-tested for B2B and B2C SaaS.",
    description2:
      "Beyond code, we help you think through pricing tiers, tenant isolation, usage metering, and growth-ready infrastructure so your product can onboard customers confidently from day one.",
    outcomes: [
      "Multi-tenant architecture with secure data isolation.",
      "Stripe billing, subscriptions, and usage-based pricing.",
      "Admin panels, team management, and RBAC.",
      "Real-time analytics and reporting dashboards.",
      "Onboarding flows, email automation, and in-app guides.",
      "Scalable cloud deployment with monitoring and alerts.",
    ],
    processSteps: [
      {
        id: 1,
        title: "01. Product Strategy",
        content:
          "We align on personas, pricing model, MVP features, and success metrics before writing code.",
      },
      {
        id: 2,
        title: "02. Platform Foundation",
        content:
          "Auth, billing, tenant management, and core data models are built as a solid, extensible base.",
      },
      {
        id: 3,
        title: "03. Feature Sprints",
        content:
          "Iterative delivery of user-facing features with weekly demos and continuous deployment.",
      },
      {
        id: 4,
        title: "04. Scale & Iterate",
        content:
          "Performance optimization, customer feedback loops, and roadmap planning for growth.",
      },
    ],
  },
  {
    slug: "erp-solutions",
    title: "ERP Solutions",
    menuTitle: "ERP Solutions",
    shortDesc: "Streamline operations with enterprise resource planning systems.",
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
    videoId: "SqcY0GlETPk",
    galleryImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "We build custom ERP platforms that unify inventory, procurement, HR, finance, and reporting in one dashboard — replacing spreadsheets and disconnected tools with a single source of truth. Built with Next.js, PostgreSQL, and Prisma for type-safe, reliable operations at scale.",
    description2:
      "Every module is tailored to your workflows — not forced into generic templates. We integrate with existing accounting, CRM, and warehouse systems so migration is smooth and teams adopt the platform faster.",
    outcomes: [
      "Unified dashboards for inventory, HR, and finance.",
      "Procurement workflows with approval chains.",
      "Real-time reporting and exportable analytics.",
      "Role-based permissions across departments.",
      "Integration with accounting and third-party tools.",
      "Audit trails and data integrity controls.",
    ],
    processSteps: [
      {
        id: 1,
        title: "01. Process Mapping",
        content:
          "We document current workflows, bottlenecks, and integration points across departments.",
      },
      {
        id: 2,
        title: "02. Module Design",
        content:
          "ERP modules are scoped and designed around your operational hierarchy and reporting needs.",
      },
      {
        id: 3,
        title: "03. Build & Migrate",
        content:
          "Development runs in parallel with data migration planning and staff training materials.",
      },
      {
        id: 4,
        title: "04. Rollout & Training",
        content:
          "Phased deployment, user onboarding, and ongoing support ensure smooth adoption.",
      },
    ],
    featuredCase: {
      title: "NexusFlow ERP Platform",
      text: "Full-stack ERP unifying inventory, procurement, HR, and financial reporting for growing enterprises.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    },
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    menuTitle: "AI Solutions",
    shortDesc: "Intelligent features and automation tailored to business needs.",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    videoId: "aircAruvnKk",
    galleryImages: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535378620166-273708dd44fe?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "We integrate practical AI into your products — chatbots, document analysis, recommendation engines, predictive analytics, and workflow automation — using modern LLM APIs and custom models where they add real value. No hype: we focus on features that save time, reduce cost, or improve decisions.",
    description2:
      "From proof-of-concept to production, we handle prompt engineering, RAG pipelines, data privacy, and monitoring so AI features remain accurate, secure, and maintainable as your business evolves.",
    outcomes: [
      "Custom AI chatbots and virtual assistants.",
      "Document parsing, classification, and search.",
      "Recommendation and personalization engines.",
      "Predictive analytics and forecasting models.",
      "Workflow automation with human-in-the-loop controls.",
      "Secure API integration with OpenAI, Anthropic, and open models.",
    ],
    processSteps: [
      {
        id: 1,
        title: "01. Use Case Discovery",
        content:
          "We identify high-impact AI opportunities aligned with your data, users, and ROI expectations.",
      },
      {
        id: 2,
        title: "02. Prototype & Validate",
        content:
          "Quick prototypes test accuracy, latency, and user experience before full integration.",
      },
      {
        id: 3,
        title: "03. Production Integration",
        content:
          "AI features are embedded into your app with logging, fallbacks, and cost controls.",
      },
      {
        id: 4,
        title: "04. Monitor & Improve",
        content:
          "We track quality metrics, gather feedback, and refine models and prompts over time.",
      },
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    menuTitle: "Custom Software Development",
    shortDesc: "Software built specifically around your workflows.",
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    videoId: "Fk48S-hH6c8",
    galleryImages: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "When off-the-shelf tools don't fit, we build custom software around your exact workflows — internal tools, client portals, automation platforms, and industry-specific applications. You own the codebase, the roadmap, and the competitive advantage.",
    description2:
      "We work as an extension of your team: discovery workshops, transparent sprints, and documentation that make handoff and long-term maintenance straightforward.",
    outcomes: [
      "Bespoke applications tailored to your operations.",
      "Legacy system modernization and API bridges.",
      "Internal tools that eliminate manual work.",
      "Client-facing portals and self-service platforms.",
      "Full documentation and knowledge transfer.",
      "Flexible engagement: fixed scope or dedicated team.",
    ],
    processSteps: [
      {
        id: 1,
        title: "01. Requirements Workshop",
        content:
          "Stakeholder sessions capture goals, constraints, integrations, and success criteria.",
      },
      {
        id: 2,
        title: "02. Solution Design",
        content:
          "Technical specs, wireframes, and project plan with clear milestones and deliverables.",
      },
      {
        id: 3,
        title: "03. Agile Delivery",
        content:
          "Regular demos keep stakeholders aligned; change requests are managed transparently.",
      },
      {
        id: 4,
        title: "04. Deployment & Ownership",
        content:
          "Production launch with training, docs, and optional ongoing support retainer.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    menuTitle: "Cloud & DevOps",
    shortDesc: "Secure deployment and scalable infrastructure.",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    videoId: "ciFvbRqrMrc",
    galleryImages: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "We design and manage cloud infrastructure that keeps your applications fast, secure, and cost-efficient — AWS, Azure, GCP, Docker, Kubernetes, and CI/CD pipelines configured for your team and compliance requirements.",
    description2:
      "From first deployment to auto-scaling under load, we implement monitoring, backups, and disaster recovery so your product stays online and your engineers ship with confidence.",
    outcomes: [
      "Cloud architecture on AWS, Azure, or GCP.",
      "Docker containerization and Kubernetes orchestration.",
      "CI/CD pipelines with automated testing and deploys.",
      "Infrastructure as Code (Terraform, CloudFormation).",
      "Monitoring, alerting, and log aggregation.",
      "Security hardening, SSL, and secrets management.",
    ],
    processSteps: [
      {
        id: 1,
        title: "01. Infrastructure Audit",
        content:
          "We review current hosting, costs, bottlenecks, and security posture.",
      },
      {
        id: 2,
        title: "02. Architecture Plan",
        content:
          "Scalable, cost-aware infrastructure design with staging and production environments.",
      },
      {
        id: 3,
        title: "03. Implement & Automate",
        content:
          "CI/CD, containers, and IaC are set up for repeatable, low-risk deployments.",
      },
      {
        id: 4,
        title: "04. Operate & Optimize",
        content:
          "Ongoing monitoring, cost optimization, and incident response procedures.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string | null): ServiceItem => {
  const found = SERVICES.find((s) => s.slug === slug);
  return found ?? SERVICES.find((s) => s.slug === DEFAULT_SERVICE_SLUG)!;
};

export const FEATURED_SERVICE =
  SERVICES.find((s) => s.slug === "saas-product-development")!;

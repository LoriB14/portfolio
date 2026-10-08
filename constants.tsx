
import sixAssistLogo from './Logos/6ixAssist_logo.png';
import pegasusLogo from './Logos/PegasusCover.png';
import packPalLogo from './Logos/PackPal.png';
import wealthQuestLogo from './Logos/Wealth Quest pixel art logo.png';

import { Project, SkillGroup } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "6IXASSIST",
    category: "AI / GEOLOCATION",
    image: sixAssistLogo,
    tags: ["Gemini API", "OpenStreetMap", "React", "Tailwind CSS", "TypeScript"],
    description: "An AI tool that helps people in Toronto find food banks, shelters, and community services. You type what you need in plain English and it finds what is nearby.",
    detailedDescription: "Won 1st place at ElleHacks in November 2025. I led the development. The app takes plain language input, uses the Gemini API to understand what the person needs, and then finds and maps nearby resources using OpenStreetMap and Leaflet. Built with React and Tailwind. It has an offline cache so it still works on bad connections.",
    features: [
      "Natural Language Search",
      "Real-time Geolocation Routing",
      "Offline-first Architecture",
      "Multi-language Support"
    ],
    role: "Lead Developer",
    status: "Live / Maintained",
    technicalDetails: "React front end + Gemini for intent classification. Mapping via Leaflet/OpenStreetMap with accessible tiles. A small cache layer keeps critical resource data available offline and handles degraded connectivity.",
    demoUrl: "",
    repoUrl: "https://github.com/LoriB14/6ixAssist"
  },
  {
    id: 2,
    title: "WEALTH QUEST",
    category: "GAME DEV / EDUTECH",
    image: wealthQuestLogo,
    tags: ["React", "Next.js", "Phaser", "TypeScript"],
    description: "Wealth Quest is a retro, life-choice game that teaches kids financial literacy through everyday decisions.",
    detailedDescription: "Feb 2026. Created during ElleHacks 2026. Players explore a pixel-art city and make choices around spending, saving, and investing, with simple, kid-friendly feedback that explains real money concepts. The game was built using React + Next.js with Phaser for the top-down world, focusing on clarity, accessibility, and playful learning. Inspired by Wealthsimple's mission to make money education more approachable.",
    features: [
      "Pixel-art City Exploration",
      "Financial Literacy Education",
      "Interactive Decisions",
      "Kid-friendly Feedback"
    ],
    role: "Full Stack Developer",
    status: "Hackathon Project",
    technicalDetails: "Built using React + Next.js for the framework and Phaser for the game engine. Focus on accessibility and educational engagement.",
    demoUrl: "https://ellehacks2026.vercel.app/",
    repoUrl: "https://github.com/LoriB14/wealthquest"
  },
  {
    id: 3,
    title: "PEGASUS",
    category: "E-COMMERCE",
    image: pegasusLogo,
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Stripe", "Supabase", "Vercel"],
    description: "A full e-commerce platform I built completely on my own. Real-time cart, product filters, and Stripe checkout. Live and in production.",
    detailedDescription: "I was the sole developer on this. I designed the database schema, built the auth system, integrated Stripe for payments, and deployed the whole thing on Vercel. Built with Next.js, Supabase, and TypeScript.",
    features: [
      "Modern Responsive UI",
      "Real-time Cart Management",
      "Dynamic Product Filtering",
      "Optimized Performance"
    ],
    role: "Full Stack Developer",
    status: "Live Deployment",
    technicalDetails: "Next.js (App Router) with server-side rendering and incremental static regeneration. Tailwind CSS design system, Lighthouse-friendly performance budgets. Hosted on Vercel for automatic scaling and CDN edge caching.",
    demoUrl: "https://pegasus-zeta.vercel.app/",
    repoUrl: ""
  },
  {
    id: 4,
    title: "PACKPAL 🚧",
    category: "AI / TRAVEL (COMING SOON)",
    image: packPalLogo,
    tags: ["Next.js", "Gemini 2.5", "NextAuth", "TypeScript", "Drizzle ORM", "PostgreSQL", "Tailwind CSS", "Vercel"],
    description: "An AI packing assistant that builds a smart checklist based on your trip, the weather, and what you are planning to do.",
    detailedDescription: "Oct 2025. Developed a Next.js + TypeScript app that uses Gemini 2.5 to generate personalized packing lists based on destination, dates, forecast, and itinerary. Implemented secure authentication with NextAuth and modeled data using Drizzle ORM on PostgreSQL. Added collaborative planning and real-time checklist sync via Next.js Server Actions. Deployed on Vercel with a custom GoDaddy domain for demos (NewHacks 2025).",
    features: [
      "Smart Packing Lists (Gemini 2.5)",
      "Weather Integration",
      "Collaborative Planning",
      "Real-time Sync"
    ],
    role: "Full Stack Developer",
    status: "In Progress",
    technicalDetails: "Next.js + TypeScript. NextAuth for auth, Drizzle ORM + PostgreSQL for persistence. Server Actions for real-time data refresh. Target deployment on Vercel.",
    demoUrl: "",
    repoUrl: "https://github.com/LoriB14/PackPal.fit"
  },
  {
    id: 5,
    title: "YADAG",
    category: "QA / CLIENT PROJECT",
    image: "https://placehold.co/800x450/0f172a/c026d3/png?text=YADAG&font=montserrat",
    tags: ["Manual Testing", "UX/UI Analysis", "AWS Cognito", "Riipen"],
    description: "QA and bug testing for an agri-workforce platform. Wrote test cases, found bugs, and documented issues across multiple features.",
    detailedDescription: "Worked as a QA tester on Yadag's agri-workforce platform through a Riipen work-integrated learning project. Designed and ran manual test cases across onboarding, housing, training, and authentication features. Logged bugs, tracked issues through to resolution, and flagged UX problems to the product team.",
    features: [
      "Manual test case design and execution",
      "Cross-feature regression testing",
      "Bug logging and issue tracking",
      "UX feedback to product team"
    ],
    role: "QA Testing & UX/UI Analyst",
    status: "Completed",
    technicalDetails: "Manual testing across onboarding, housing, training, and workforce modules, plus the AWS Cognito auth migration.",
    demoUrl: "https://yadag.io/",
    repoUrl: ""
  },
  {
    id: 6,
    title: "OWNING MY GROWTH STRATEGY",
    category: "RIIPEN / STRATEGY CONSULTING",
    image: "https://placehold.co/800x450/0f172a/c026d3/png?text=OWNING+MY&font=montserrat",
    tags: ["Riipen", "Project Coordination", "Growth Strategy", "Client Advisory"],
    description: "A growth strategy engagement for Owning My, an AI implementation and advisory company, run through Riipen Labs.",
    detailedDescription: "As Project Lead, coordinated the team, organized deliverables, and helped shape a recommendation to use an AI Risk Audit as a client acquisition funnel. The team analyzed Owning My's target market, current messaging, and growth challenges, then developed a final report outlining a more scalable and repeatable path for lead generation and conversion.",
    features: [
      "Team & deliverable coordination (Project Lead)",
      "Target market & messaging analysis",
      "AI Risk Audit funnel recommendation",
      "Final growth strategy report for the client"
    ],
    role: "Project Lead",
    status: "Completed, Mar to Apr 2026",
    technicalDetails: "Riipen Labs work-integrated learning project. Market and strategy analysis culminating in a client-facing growth recommendation (not software development).",
    demoUrl: "",
    repoUrl: ""
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    description: "Core programming languages",
    icon: "CODE",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "openjdk" },
      { name: "C", icon: "c" }
    ]
  },
  {
    category: "Frontend",
    description: "Interfaces and interaction",
    icon: "LAYOUT",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", desc: "App routing, SSR", icon: "nextdotjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "HTML / CSS", icon: "html5" },
      { name: "Framer Motion", icon: "framer" }
    ]
  },
  {
    category: "Backend",
    description: "Servers and APIs",
    icon: "SERVER",
    items: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Flask", icon: "flask" },
      { name: "REST APIs" },
      { name: "Google APIs", desc: "Maps, Gemini, Places", icon: "google" }
    ]
  },
  {
    category: "Databases",
    description: "Storage and persistence",
    icon: "CHART",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "SQLite", icon: "sqlite" },
      { name: "Supabase", desc: "Auth, DB, Storage", icon: "supabase" }
    ]
  },
  {
    category: "Tools & Infra",
    description: "Deployment and tooling",
    icon: "TERMINAL",
    items: [
      { name: "Linux", icon: "linux" },
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "GCP", icon: "googlecloud" },
      { name: "Jenkins", icon: "jenkins" }
    ]
  },
  {
    category: "Data & QA",
    description: "Analytics and process",
    icon: "CHART",
    items: [
      { name: "SQL", icon: "mysql" },
      { name: "KPI Dashboards" },
      { name: "Data Visualization" },
      { name: "Manual Testing" },
      { name: "UX/UI Analysis", icon: "figma" },
      { name: "IL6S / Lean", desc: "Process improvement" }
    ]
  }
];

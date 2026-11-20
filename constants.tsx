
import sixAssistLogo from './Logos/6ixAssist_logo.png';
import pegasusLogo from './Logos/PegasusCover.png';
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
    title: "THE WELLNESS GROUP",
    category: "FRONTEND / CLIENT PROJECT",
    image: "https://placehold.co/800x450/0f172a/c026d3/png?text=THE+WELLNESS+GROUP&font=montserrat",
    tags: ["React", "TypeScript", "Tailwind CSS", "Gemini API", "Vite", "Railway"],
    description: "A full frontend website built for The Wellness Group Aurora, the wellness clinic I work at — featuring a wellness shop, AI health recommendations, staff profiles, blog, and JaneApp booking.",
    detailedDescription: "Built the entire frontend for The Wellness Group Aurora, a multi-discipline health clinic in Aurora, ON. The site covers 10+ services (physiotherapy, chiropractic, massage, acupuncture, naturopathy, and more), profiles for 20+ practitioners, a blog, and direct billing info. I also built a full embedded wellness shop with product cards, a cart drawer, checkout modal, and order confirmation. Added an AI triage feature powered by the Gemini API that helps patients describe their symptoms and get service recommendations. Deployed on Railway with a custom Express server.",
    features: [
      "Embedded Wellness Shop (cart, checkout, order confirmation)",
      "AI Health Triage powered by Gemini API",
      "20+ Staff Profiles & 10+ Service Pages",
      "Blog, Billing Info & JaneApp Booking Integration"
    ],
    role: "Frontend Developer",
    status: "Live Deployment",
    technicalDetails: "React 19 + TypeScript + Tailwind CSS, bundled with Vite. Gemini API (@google/genai) powers the AI recommendations. Cart and auth state managed via React Context. Deployed on Railway with an Express static server.",
    demoUrl: "https://www.thewellnessgroupaurora.com",
    repoUrl: ""
  },
  {
    id: 5,
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

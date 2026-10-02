export interface CVSection {
  id: string;
  title: string;
  content: string;
  category: "summary" | "experience" | "skills" | "projects" | "education" | "certifications" | "design";
}

export const cvData: CVSection[] = [
  {
    id: "summary",
    title: "Professional Summary",
    content: "Product Designer and AI Automation Developer working across product design, software development, AI development, and workflow automation. Chidozirim's background began in graphic design, expanded into product and UI/UX design, then into development and automation. He also has verified supporting experience in AI data evaluation, Web3 research, crypto and forex market analysis, visual design, and content production.",
    category: "summary",
  },
  {
    id: "project-ace-one-autos",
    title: "Ace One Autos Ltd",
    content: "Ace One Autos Ltd is a Glasgow-based automotive business selling used vehicles to customers across the UK. Chidozirim worked on the project from product and interface design through frontend development, backend development, testing, and production deployment. Role: Product Designer & Full-Stack Developer. Category: Product Design, Full-Stack Development, Deployment. Status: Live. The deployed website supports vehicle stock browsing, part-exchange enquiries, test-drive booking, vehicle sourcing and request-a-vehicle flows, general customer enquiries, business and contact information, WhatsApp contact, and responsive navigation and layouts. The design approach focused on clear navigation, vehicle presentation, simple enquiry journeys, mobile usability, consistent interface patterns, clear calls to action, and easy access to important business information. The project resulted in a fully deployed website that customers can use to browse vehicles and interact with the business online. Live site: https://aceoneautosltd.co.uk. Location: Glasgow, United Kingdom.",
    category: "projects",
  },
  {
    id: "project-epsilon-ai",
    title: "Epsilon AI",
    content: "Epsilon AI is a personal AI and automation system built to coordinate specialised agents for information monitoring, opportunity discovery, communication prioritisation, developer intelligence, trading market monitoring, Web3 opportunity scanning, and recurring workflows. Role: AI Development, Automation Architecture, API Development. Status: In development. Verified technology and architecture includes Python, FastAPI, LangGraph, n8n, APIs, SQLite, scheduled workflows, and approval-based controls. The system uses a manager and specialised agents, connects to tools and APIs, and keeps higher-risk actions approval-gated where human review is important. Epsilon AI is an AI life and opportunity assistant. It is not a trading agent.",
    category: "projects",
  },
  {
    id: "project-promptvault",
    title: "PromptVault",
    content: "PromptVault is a live prompt management application built with React and TypeScript, with Irys Network integration for wallet-based prompt storage. Role: Development. Category: Software Development, Web3. Status: Live. It combines prompt management, blockchain integration, and modern frontend architecture. Live site: https://promptvault-ai.vercel.app. GitHub: https://github.com/Alvinfx/PromptVault.",
    category: "projects",
  },
  {
    id: "project-chainpulse",
    title: "ChainPulse - Multi-chain Portfolio Tracker",
    content: "ChainPulse is a multi-chain crypto portfolio and on-chain activity tracking product designed as an end-to-end Figma product design case study. Role: Product Designer. The process covered market research, competitive analysis of Zerion, Zapper, and DeBank, user segments and problem statements, information architecture, wireframes, high-fidelity UI, and a reusable Night/Day design system with components and Figma variables. Core flows include Dashboard, Wallet Detail, Alerts, and Onboarding.",
    category: "design",
  },
  {
    id: "project-carlink",
    title: "CarLink - Car Marketplace",
    content: "CarLink is a swipe-based car marketplace designed for the Nigerian market. Role: Product Designer. The work covered product brief, market research, competitive analysis of Jiji, Cars45, Autochek, and AutoSwiper, user personas, problem statements, information architecture, wireframes, a complete design system, and high-fidelity UI across 27 screens. The product includes purchase and rental discovery, buyer and seller flows, verification and trust features, a VIN checker, saved cars, seller listing flows, and in-app messaging with WhatsApp fallback.",
    category: "design",
  },
  {
    id: "project-singcity",
    title: "SingCity - Blockchain Karaoke App",
    content: "SingCity is a live karaoke website built on blockchain with wallet integration and interactive audio and music UX. Built with React and TypeScript. Live at https://singcity.vercel.app/.",
    category: "projects",
  },
  {
    id: "project-tokenlogic",
    title: "TokenLogic - Web3 YouTube Channel",
    content: "TokenLogic is a faceless YouTube channel focused on crypto and Web3 education. Chidozirim built the content system including branding, scripts, Canva assets, and CapCut editing workflows.",
    category: "projects",
  },
  {
    id: "project-codexero",
    title: "CodeXero v2 Campaign",
    content: "Video content campaign for Cluster Protocol's CodeXero v2, including the voiceover script and campaign storyboard.",
    category: "projects",
  },
  {
    id: "exp-ai-annotator",
    title: "AI Data Annotator & Evaluator",
    content: "2023 - Present | Remote | Freelance. Evaluate and annotate AI-generated outputs across text, image, code, and audio/video modalities. Conduct prompt evaluation and response quality assessment for large language models as part of RLHF workflows. Perform image and visual task annotation including object detection, segmentation, and scene description. Apply structured evaluation rubrics to rate model outputs and maintain quality standards.",
    category: "experience",
  },
  {
    id: "exp-graphics",
    title: "Brand Designer & Visual Storyteller",
    content: "2020 - Present | Remote | Freelance. Designed brand identity systems and visual assets using Figma and Canva, including logo concepts, color palettes, typography, design guidelines, marketing collateral, and promotional materials. Designed and maintained visual systems across multiple platforms and channels.",
    category: "experience",
  },
  {
    id: "exp-analyst",
    title: "Market Analyst - TradeStellar",
    content: "2019 - 2026 | Remote. Analyze crypto, forex, and NFT markets to support trading strategy and decision-making. Track price action, macro trends, and on-chain signals for market intelligence. Develop and refine multi-market trading strategies.",
    category: "experience",
  },
  {
    id: "exp-bd",
    title: "Business Development Specialist - IRYS Network",
    content: "2025 | Remote | Voluntary. Researched and evaluated Web3 projects for potential datachain integration opportunities. Produced ecosystem research reports and published content highlighting blockchain infrastructure synergies. Engaged with project teams to identify improvement opportunities and integration pathways.",
    category: "experience",
  },
  {
    id: "exp-ux",
    title: "Product Designer (UI/UX) - FlexiSAF Edusoft Ltd",
    content: "2023 | Abuja. Participated in structured product design sprints using Figma, designing interface components and contributing to design system foundations. Conducted user interviews and translated findings into wireframes and high-fidelity mockups to improve onboarding experiences. Collaborated across product, design, and engineering teams.",
    category: "experience",
  },
  {
    id: "exp-ea",
    title: "Executive Assistant - National Assembly of Nigeria",
    content: "2018 - 2019 | Abuja. Provided research, documentation, and administrative support to senior officials. Prepared briefing reports, managed official schedules, and supported cross-departmental communications.",
    category: "experience",
  },
  {
    id: "skills-product-design",
    title: "Product Design",
    content: "Figma, Product Research, User Interviews, Design Sprints, Information Architecture, Wireframing, High-Fidelity UI, Prototyping, Design Systems, Figma Variables, Competitive Analysis, Marketplace UX, responsive interface design.",
    category: "skills",
  },
  {
    id: "skills-development",
    title: "Software Development",
    content: "Python, TypeScript, React, FastAPI, Git, frontend development, backend development, full-stack development, website development, API development. Chidozirim has implemented customer-facing frontend and backend systems and deployed production websites.",
    category: "skills",
  },
  {
    id: "skills-automation",
    title: "Workflow Automation & AI Development",
    content: "n8n, APIs, Webhooks, LangGraph, FastAPI, SQLite, scheduled workflows, AI integrations, specialised agent orchestration, approval workflows, human approval controls, recurring workflows, and automation architecture.",
    category: "skills",
  },
  {
    id: "skills-ai-evaluation",
    title: "AI Evaluation",
    content: "Prompt Evaluation, RLHF, Text and Response Annotation, Image and Visual Annotation, CVAT, Audio and Video Annotation, Data Quality Assessment, LLM Evaluation.",
    category: "skills",
  },
  {
    id: "skills-design",
    title: "Graphic Design & Visual Branding",
    content: "Brand Identity, Canva, Figma, Social Media Graphics, Thumbnail Design, Banner Design, Logo Design, Color Theory, Typography, and visual design systems.",
    category: "skills",
  },
  {
    id: "skills-research",
    title: "Research, Web3 & Market Analysis",
    content: "Market and Technical Analysis, Sentiment Analysis, Web3 Research, Business Analysis, Data Validation, Blockchain Platforms, DeFi, Irys Network, on-chain analysis, crypto and forex markets.",
    category: "skills",
  },
  {
    id: "skills-video",
    title: "Video & Content Creation",
    content: "AI-assisted video editing, CapCut, Script Writing, Storyboarding, Faceless Content, Thumbnail Design, Content Strategy, and YouTube SEO.",
    category: "skills",
  },
  {
    id: "education",
    title: "Education",
    content: "B.Sc. Industrial Chemistry, Imo State University, Nigeria, 2012 - 2016.",
    category: "education",
  },
  {
    id: "certifications",
    title: "Certifications",
    content: "Product Design (UI/UX), DigitallyU Academy, 2023. Web Development (HTML, CSS, JavaScript), DigitallyU Academy, 2023. Project Management, Exford Global, 2019. Customer Service & Relationship Management, Exford Global, 2019. Health, Safety & Environment, Exford Global, 2019.",
    category: "certifications",
  },
  {
    id: "contact",
    title: "Contact & Social",
    content: "Email: chidozirim.ca@gmail.com. Location: Abuja, Nigeria. GitHub: https://github.com/Alvinfx. LinkedIn: https://linkedin.com/in/chidozirim-ahuakagha. X: https://x.com/XpnxvVicinity.",
    category: "summary",
  },
];

export const contactInfo = {
  name: "Chidozirim Ahuakagha",
  title: "Product Designer & AI Automation Developer",
  email: "chidozirim.ca@gmail.com",
  location: "Abuja, Nigeria",
  github: "https://github.com/Alvinfx",
  linkedin: "https://linkedin.com/in/chidozirim-ahuakagha",
  twitter: "https://x.com/XpnxvVicinity",
};

export const coreDomains = [
  { name: "Product Design", description: "Research, UX, interface design, prototyping, and design systems" },
  { name: "Development", description: "Frontend, backend, APIs, and production deployment" },
  { name: "AI & Workflow Automation", description: "AI-assisted systems, orchestration, APIs, and recurring workflows" },
];

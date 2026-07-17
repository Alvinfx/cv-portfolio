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
    content: `Detail-oriented AI data annotator and evaluator with 2+ years of experience annotating text, images, code, and audio/video. Proficient in prompt evaluation, RLHF workflows, and quality assessment for large language models. Background in graphics design, Web3 market research, product/UX design, video content creation, and business analysis provides strong contextual judgment for evaluating AI outputs across all domains. Adept at working independently in remote, high-volume environments while maintaining consistent accuracy and quality standards.`,
    category: "summary",
  },
  {
    id: "exp-ai-annotator",
    title: "AI Data Annotator & Evaluator",
    content: `2023 - Present | Remote | Freelance. Evaluate and annotate AI-generated outputs across text, image, code, and audio/video modalities to improve model accuracy and performance. Conduct prompt evaluation and response quality assessment for large language models (LLMs) as part of RLHF workflows. Perform image and visual task annotation including object detection, segmentation, and scene description for computer vision model training. Apply structured evaluation rubrics to rate model outputs. Maintain consistent quality standards across high-volume annotation tasks in fast-paced remote environments.`,
    category: "experience",
  },
  {
    id: "exp-graphics",
    title: "Graphics Designer",
    content: `2020 - Present | Remote | Freelance. Designed brand identity systems and visual assets for multiple projects using Canva, including logo concepts, color palettes, and design guidelines. Created marketing collateral: thumbnails, banners, social media graphics, and promotional materials for YouTube channels and content campaigns. Designed UI mockups and interface assets in Figma, supporting product design and UX workflow improvements. Maintained design consistency across multiple platforms and channels through structured design systems.`,
    category: "experience",
  },
  {
    id: "exp-analyst",
    title: "Market Analyst - TradeStellar",
    content: `2019 - Present | Remote. Analyze crypto, forex, and NFT markets to support trading strategy and decision-making. Track price action, macro trends, and on-chain signals for market intelligence reports. Develop and refine multi-market trading strategies. 6+ years in Web3/crypto market research.`,
    category: "experience",
  },
  {
    id: "exp-bd",
    title: "Business Development Specialist - IRYS Network",
    content: `2025 | Remote | Voluntary. Researched and evaluated Web3 projects for potential datachain integration opportunities. Produced detailed ecosystem research reports and published content highlighting blockchain infrastructure synergies. Engaged directly with project teams to identify improvement opportunities and integration pathways.`,
    category: "experience",
  },
  {
    id: "exp-ux",
    title: "UI/UX Designer - FlexiSAF Edusoft Ltd",
    content: `2023 | Abuja. Participated in structured product design sprints using Figma, contributing to components and design systems. Conducted user interviews and used results to identify friction points and improve onboarding flows. Collaborated with frontend engineers to ensure interface decisions aligned with product goals and user needs.`,
    category: "experience",
  },
  {
    id: "exp-ea",
    title: "Executive Assistant - National Assembly of Nigeria",
    content: `2018 - 2019 | Abuja. Provided research, documentation, and administrative support to senior officials. Prepared briefing reports, managed official schedules, and cross-departmental communications.`,
    category: "experience",
  },
  {
    id: "project-chainpulse",
    title: "ChainPulse - Web3 Portfolio Tracker (UI/UX Case Study)",
    content: `ChainPulse is a multi-chain crypto portfolio and on-chain activity tracker, designed end-to-end as a Figma product design case study. The process covered: market research, competitive analysis of Zerion, Zapper, and DeBank, defining user segments and problem statements, building a full information architecture, and designing four core flows — Dashboard, Wallet Detail, Alerts, and Onboarding — in a token-based Night/Day design system with reusable components and Figma variables. Skills applied: UX research, information architecture, wireframing, design systems, high-fidelity UI, Figma variables, dark/light theming. A prototype walkthrough video is available on YouTube.`,
    category: "design",
  },
  {
    id: "project-singcity",
    title: "SingCity - Blockchain Karaoke App",
    content: `SingCity is a live karaoke website built on blockchain. It features on-chain singing experiences with wallet integration, combining Web3 infrastructure with interactive audio/music UX. Live at singcity.vercel.app.`,
    category: "projects",
  },
  {
    id: "project-promptvault",
    title: "PromptVault - AI Prompt Manager",
    content: `Live React/TypeScript application with Irys Network blockchain integration for prompt management. Demonstrates full-stack capabilities combining AI, blockchain, and modern frontend architecture. Deployed at promptvault-ai.vercel.app. GitHub: github.com/Alvinfx/PromptVault.`,
    category: "projects",
  },
  {
    id: "project-tokenlogic",
    title: "TokenLogic - Web3 YouTube Channel",
    content: `TokenLogic is a faceless YouTube channel focused on crypto and Web3 education targeting African audiences. Built the complete content system: branding, scripts, Canva asset libraries, CapCut editing workflows. Channel: youtube.com/@tokenlogic500`,
    category: "projects",
  },
  {
    id: "project-codexero",
    title: "CodeXero v2 Campaign",
    content: `Video content campaign for Cluster Protocol's CodeXero v2 — complete voiceover script and storyboard for Web3 developer tooling launch.`,
    category: "projects",
  },
  {
    id: "video-channels",
    title: "YouTube Channels & Video Work",
    content: `Chidozirim runs three YouTube channels: @mindovercomfort5 (AI-assisted video editing, lifestyle and content creation), @raregem-05 (creative video content, AI video editing techniques, original storytelling), and @tokenlogic500 (crypto and Web3 education for African audiences, market analysis, blockchain explainers). Skills: AI video editing, CapCut, script writing, storyboarding, faceless content, thumbnail design, content strategy, YouTube SEO.`,
    category: "projects",
  },
  {
    id: "skills-ai",
    title: "AI & Data Annotation Skills",
    content: `Prompt Evaluation, RLHF, Text & Response Annotation, Image & Visual Annotation, CVAT, Audio/Video Annotation, Data Quality Assessment, LLM Evaluation. Proficient across multiple annotation platforms and evaluation rubrics.`,
    category: "skills",
  },
  {
    id: "skills-design",
    title: "Graphics Design & Visual Branding",
    content: `Brand Identity, Design Systems, Canva, Figma, Social Media Graphics, Thumbnail Design, Banner Design, Logo Design, Color Theory & Typography. Experienced in creating cohesive visual systems across platforms.`,
    category: "skills",
  },
  {
    id: "skills-ux",
    title: "Product & UX Design",
    content: `UI/UX Design (Figma), Product Research, User Interviews, Design Sprints, Onboarding Flow Optimisation, Information Architecture, Wireframing, High-Fidelity UI, Design Systems, Figma Variables, Prototyping, Competitive Analysis.`,
    category: "skills",
  },
  {
    id: "skills-research",
    title: "Research & Analysis",
    content: `Market & Technical Analysis, Sentiment Analysis, Web3 Research, Business Analysis, Data Validation & Reporting. Specialized in crypto/forex markets and blockchain ecosystems.`,
    category: "skills",
  },
  {
    id: "skills-web3",
    title: "Web3 & Blockchain",
    content: `Blockchain Platforms, Smart Contracts, Crypto & Forex Markets, Decentralised Ecosystems, Web3 Tools, Irys Network, on-chain analysis, DeFi. 6+ years of market analysis and technical research in Web3 space.`,
    category: "skills",
  },
  {
    id: "skills-video",
    title: "Video & Content Creation",
    content: `AI Video Editing, CapCut, Script Writing, Storyboarding, Faceless Content, Thumbnail Design, Content Strategy, YouTube SEO. Runs three YouTube channels covering Web3 education, lifestyle, and creative content.`,
    category: "skills",
  },
  {
    id: "skills-tech",
    title: "Technical & Development",
    content: `HTML, CSS, JavaScript, React, TypeScript, web3.js, Next.js, Git. Building proficiency in full-stack development with Web3 integration.`,
    category: "skills",
  },
  {
    id: "education",
    title: "Education",
    content: `B.Sc. Industrial Chemistry, Imo State University, Nigeria (2012-2016).`,
    category: "education",
  },
  {
    id: "certifications",
    title: "Certifications",
    content: `Product Design (UI/UX) - DigitallyU Academy, 2023. Web Development (HTML, CSS, JavaScript) - DigitallyU Academy, 2023. Project Management - Exford Global, 2019. Customer Service & Relationship Management - Exford Global, 2019. Health, Safety & Environment - Exford Global, 2019.`,
    category: "certifications",
  },
  {
    id: "contact",
    title: "Contact & Social",
    content: `Email: chidozirim.ca@gmail.com. Location: Abuja, Nigeria. GitHub: github.com/Alvinfx. LinkedIn: linkedin.com/in/chidozirim-ahuakagha. X/Twitter: @XpnxvVicinity. Telegram: t.me/xvVicinity. Portfolio site: deployed on Vercel.`,
    category: "summary",
  },
];

export const contactInfo = {
  name: "Chidozirim Ahuakagha",
  title: "AI Data Annotator & Evaluator | Web3 Analyst | Graphics & UX Designer",
  email: "chidozirim.ca@gmail.com",
  location: "Abuja, Nigeria",
  github: "https://github.com/Alvinfx",
  linkedin: "https://linkedin.com/in/chidozirim-ahuakagha",
  twitter: "https://x.com/XpnxvVicinity",
  telegram: "https://t.me/xvVicinity",
};

export const coreDomains = [
  { name: "AI Data Annotation", description: "2+ years annotating text, images, code, audio/video for LLM training", icon: "🤖" },
  { name: "Web3 & Crypto", description: "6+ years market analysis, blockchain research, DeFi strategy", icon: "⛓️" },
  { name: "Graphics & UX Design", description: "Brand systems, UI/UX, content design in Figma & Canva", icon: "🎨" },
];

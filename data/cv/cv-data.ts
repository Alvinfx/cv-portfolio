export interface CVSection {
  id: string;
  title: string;
  content: string;
  category: "summary" | "experience" | "skills" | "projects" | "education" | "certifications";
}

export const cvData: CVSection[] = [
  {
    id: "summary",
    title: "Professional Summary",
    content: `Detail-oriented AI data annotator and evaluator with 2+ years of experience annotating text, images, code, and audio/video. Proficient in prompt evaluation, RLHF workflows, and quality assessment for large language models. Background in graphics design, Web3 market research, product management, and business analysis provides strong contextual judgment for evaluating AI outputs across all domains. Adept at working independently in remote, high-volume environments while maintaining consistent accuracy and quality standards.`,
    category: "summary",
  },
  {
    id: "exp-ai-annotator",
    title: "AI Data Annotator & Evaluator",
    content: `2023 - Present | Remote. Evaluate and annotate AI-generated outputs across text, image, code, and audio/video modalities to improve model accuracy and performance. Conduct prompt evaluation and response quality assessment for large language models (LLMs) as part of RLHF workflows. Perform image and visual task annotation including object detection, segmentation, and scene description for computer vision model training. Apply structured evaluation rubrics to rate model outputs. Maintain consistent quality standards across high-volume annotation tasks in fast-paced remote environments. Platforms: Outlier, Stellar AI, Mercor, Toloka.`,
    category: "experience",
  },
  {
    id: "exp-graphics",
    title: "Graphics Designer",
    content: `2020 - Present | Remote. Designed brand identity systems and visual assets for multiple projects using Canva, including logo concepts, color palettes, and design guidelines. Created marketing collateral: thumbnails, banners, social media graphics, and promotional materials for YouTube channels and content campaigns. Designed UI mockups and interface assets in Figma, supporting product design and UX workflow improvements. Maintained design consistency across multiple platforms and channels through structured design systems.`,
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
    title: "Business Development Specialist - IRYS",
    content: `2025 | Remote (Voluntary). Researched and evaluated Web3 projects for potential datachain integration opportunities. Produced detailed ecosystem research reports and published content highlighting blockchain infrastructure synergies. Engaged directly with project teams to identify improvement opportunities and integration pathways.`,
    category: "experience",
  },
  {
    id: "exp-ux",
    title: "UI/UX Intern - FlexiSAF Edusoft Ltd",
    content: `2023 | Abuja. Participated in structured product design sprints using Figma, contributing to components and design systems. Conducted user interviews and used results to identify friction points and improve onboarding flows. Collaborated with frontend engineers to ensure interface decisions aligned with product goals and user needs.`,
    category: "experience",
  },
  {
    id: "exp-ea",
    title: "Executive Assistant - National Assembly of Nigeria",
    content: `2018 - 2019 | Abuja. Provided research, documentation, and administrative support to senior officials. Prepared briefing reports, managed official schedules, and cross-departmental communications. Assisted with operational workflows and ensured timely execution of tasks.`,
    category: "experience",
  },
  {
    id: "exp-qc",
    title: "Quality Control Intern - Nigerian Breweries Plc",
    content: `2015 | Nigeria. Conducted product testing, quality analysis, and systematic data collection across production batches. Supported quality assurance reporting processes and contributed to maintaining compliance standards.`,
    category: "experience",
  },
  {
    id: "skills-ai",
    title: "AI & Data Annotation Skills",
    content: `Prompt Evaluation, RLHF, Text & Response Annotation, Image & Visual Annotation, CVAT, Audio/Video Annotation, Data Quality Assessment. Proficient across multiple annotation platforms and evaluation rubrics.`,
    category: "skills",
  },
  {
    id: "skills-design",
    title: "Graphics Design & Visual Branding",
    content: `Brand Identity, Design Systems, Canva, Figma, Social Media Graphics, Thumbnail Design, Banner Design, Logo Design, Color Theory & Typography. Experienced in creating cohesive visual systems across platforms.`,
    category: "skills",
  },
  {
    id: "skills-research",
    title: "Research & Analysis",
    content: `Market & Technical Analysis, Sentiment Analysis, Web3 Research, Business Analysis, Data Validation & Reporting. Specialized in crypto/forex markets and blockchain ecosystems.`,
    category: "skills",
  },
  {
    id: "skills-product",
    title: "Product & Design",
    content: `UI/UX Design (Figma), Product Research, User Interviews, Design Sprints, Onboarding Flow Optimisation. Experience in translating user needs into functional designs.`,
    category: "skills",
  },
  {
    id: "skills-web3",
    title: "Web3 & Blockchain",
    content: `Blockchain Platforms, Smart Contracts, Crypto & Forex Markets, Decentralised Ecosystems, Web3 Tools. 6+ years of market analysis and technical research in Web3 space.`,
    category: "skills",
  },
  {
    id: "skills-tech",
    title: "Technical & Development",
    content: `HTML, CSS, JavaScript, web3.js, Artificial Intelligence, Software Development. Building proficiency in full-stack development with Web3 integration.`,
    category: "skills",
  },
  {
    id: "project-promptvault",
    title: "PromptVault",
    content: `Live React/TypeScript application with Irys Network blockchain integration for prompt management. Demonstrates full-stack capabilities combining AI, blockchain, and modern frontend architecture. Deployed at promptvault-ai.vercel.app. GitHub: github.com/Alvinfx/PromptVault.`,
    category: "projects",
  },
  {
    id: "project-tokenlogic",
    title: "TokenLogic YouTube Channel",
    content: `Built faceless YouTube channel from scratch focusing on crypto/Web3 education for African audiences. Developed complete content system: branding, scripts, Canva asset libraries, CapCut editing workflows. Demonstrates content creation, design, and Web3 knowledge synthesis.`,
    category: "projects",
  },
  {
    id: "project-verify",
    title: "VerifyIt (Concept)",
    content: `Real-time misinformation checker with crypto/finance focus. Demonstrates product thinking around pressing problems in Web3 space. Shows ability to identify problems and design solutions.`,
    category: "projects",
  },
  {
    id: "education",
    title: "Education",
    content: `B.Sc. Industrial Chemistry, Imo State University, Nigeria (2012-2016).`,
    category: "education",
  },
  {
    id: "cert-design",
    title: "Certifications - Design & Development",
    content: `Product Design (UI/UX) - DigitallyU Academy, 2023. Web Development (HTML, CSS, JavaScript) - DigitallyU Academy, 2023.`,
    category: "certifications",
  },
  {
    id: "cert-mgmt",
    title: "Certifications - Management & Operations",
    content: `Project Management - Exford Global, 2019. Customer Service & Relationship Management - Exford Global, 2019. Health, Safety & Environment - Exford Global, 2019.`,
    category: "certifications",
  },
];

export const contactInfo = {
  name: "Chidozirim Ahuakagha",
  title: "AI Data Annotator & Evaluator | Web3 Analyst | Graphics Designer",
  email: "chidozirim.ca@gmail.com",
  phone: "+234 807 161 3362",
  location: "Abuja, Nigeria",
  github: "https://github.com/Alvinfx",
  linkedin: "https://linkedin.com/in/chidozirim-ahuakagha",
  website: "https://promptvault-ai.vercel.app",
};

export const coreDomains = [
  {
    name: "AI Data Annotation",
    description: "2+ years annotating text, images, code, audio/video for LLM training",
    icon: "🤖",
  },
  {
    name: "Web3 & Crypto",
    description: "6+ years market analysis, blockchain research, DeFi strategy",
    icon: "⛓️",
  },
  {
    name: "Graphics Design",
    description: "Brand systems, UI/UX, content design in Figma & Canva",
    icon: "🎨",
  },
];

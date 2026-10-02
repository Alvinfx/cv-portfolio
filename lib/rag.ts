import { cvData, CVSection } from "@/data/cv/cv-data";

export interface RetrievedContext {
  sections: CVSection[];
  query: string;
  relevanceScore: number;
}

const keywordMap: Record<string, string[]> = {
  // Ace One Autos
  "ace one autos": ["project-ace-one-autos"],
  "aceoneautos": ["project-ace-one-autos"],
  "aceoneautosltd": ["project-ace-one-autos"],
  "automotive website": ["project-ace-one-autos"],
  "automotive": ["project-ace-one-autos"],
  "glasgow": ["project-ace-one-autos"],
  "client work": ["project-ace-one-autos"],
  "full stack": ["project-ace-one-autos", "skills-development"],
  "full-stack": ["project-ace-one-autos", "skills-development"],
  "frontend": ["project-ace-one-autos", "skills-development", "project-promptvault"],
  "backend": ["project-ace-one-autos", "skills-development"],
  "deployment": ["project-ace-one-autos", "skills-development"],
  "website development": ["project-ace-one-autos", "skills-development"],
  "test drive": ["project-ace-one-autos"],
  "part exchange": ["project-ace-one-autos"],
  "vehicle": ["project-ace-one-autos", "project-carlink"],

  // Epsilon AI and automation
  "epsilon": ["project-epsilon-ai"],
  "epsilon ai": ["project-epsilon-ai"],
  "workflow automation": ["project-epsilon-ai", "skills-automation"],
  "automation": ["project-epsilon-ai", "skills-automation"],
  "n8n": ["project-epsilon-ai", "skills-automation"],
  "fastapi": ["project-epsilon-ai", "skills-development", "skills-automation"],
  "langgraph": ["project-epsilon-ai", "skills-automation"],
  "webhook": ["skills-automation"],
  "api development": ["project-epsilon-ai", "skills-development", "skills-automation"],
  "agents": ["project-epsilon-ai", "skills-automation"],
  "agent system": ["project-epsilon-ai", "skills-automation"],
  "approval workflow": ["project-epsilon-ai", "skills-automation"],
  "human approval": ["project-epsilon-ai", "skills-automation"],
  "sqlite": ["project-epsilon-ai", "skills-automation"],
  "ai development": ["project-epsilon-ai", "skills-automation"],
  "ai integration": ["project-epsilon-ai", "skills-automation"],

  // Product design
  "product design": ["skills-product-design", "project-chainpulse", "project-carlink", "project-ace-one-autos", "exp-ux"],
  "ui/ux": ["skills-product-design", "project-chainpulse", "project-carlink", "project-ace-one-autos", "exp-ux"],
  "ux": ["skills-product-design", "project-chainpulse", "project-carlink", "exp-ux"],
  "figma": ["skills-product-design", "project-chainpulse", "project-carlink", "exp-ux"],
  "wireframe": ["skills-product-design", "project-chainpulse", "project-carlink"],
  "design system": ["skills-product-design", "project-chainpulse", "project-carlink"],
  "user research": ["skills-product-design", "project-chainpulse", "project-carlink", "exp-ux"],
  "marketplace": ["project-carlink", "skills-product-design"],

  // PromptVault
  "promptvault": ["project-promptvault"],
  "prompt vault": ["project-promptvault"],
  "irys": ["project-promptvault", "exp-bd", "skills-research"],

  // ChainPulse
  "chainpulse": ["project-chainpulse"],
  "chain pulse": ["project-chainpulse"],
  "portfolio tracker": ["project-chainpulse"],
  "zerion": ["project-chainpulse"],
  "zapper": ["project-chainpulse"],
  "debank": ["project-chainpulse"],

  // CarLink
  "carlink": ["project-carlink"],
  "car link": ["project-carlink"],
  "car marketplace": ["project-carlink"],
  "vin": ["project-carlink"],
  "jiji": ["project-carlink"],
  "cars45": ["project-carlink"],
  "autochek": ["project-carlink"],

  // Historical projects and background
  "singcity": ["project-singcity"],
  "karaoke": ["project-singcity"],
  "tokenlogic": ["project-tokenlogic"],
  "codexero": ["project-codexero"],
  "ai evaluation": ["exp-ai-annotator", "skills-ai-evaluation"],
  "ai evaluator": ["exp-ai-annotator", "skills-ai-evaluation"],
  "annotation": ["exp-ai-annotator", "skills-ai-evaluation"],
  "rlhf": ["exp-ai-annotator", "skills-ai-evaluation"],
  "cvat": ["exp-ai-annotator", "skills-ai-evaluation"],
  "web3": ["exp-analyst", "exp-bd", "skills-research", "project-promptvault", "project-singcity"],
  "crypto": ["exp-analyst", "skills-research", "project-tokenlogic"],
  "forex": ["exp-analyst", "skills-research"],
  "tradestellar": ["exp-analyst"],
  "flexisaf": ["exp-ux"],
  "graphic design": ["exp-graphics", "skills-design"],
  "branding": ["exp-graphics", "skills-design"],
  "video": ["skills-video", "project-tokenlogic"],

  // Development and general portfolio
  "development": ["skills-development", "project-ace-one-autos", "project-epsilon-ai", "project-promptvault"],
  "developer": ["skills-development", "project-ace-one-autos", "project-epsilon-ai", "project-promptvault"],
  "python": ["skills-development", "project-epsilon-ai"],
  "typescript": ["skills-development", "project-promptvault"],
  "react": ["skills-development", "project-promptvault"],
  "what has he built": ["project-ace-one-autos", "project-epsilon-ai", "project-promptvault", "project-chainpulse", "project-carlink"],
  "what are his projects": ["project-ace-one-autos", "project-epsilon-ai", "project-promptvault", "project-chainpulse", "project-carlink"],
  "projects": ["project-ace-one-autos", "project-epsilon-ai", "project-promptvault", "project-chainpulse", "project-carlink"],
  "built": ["project-ace-one-autos", "project-epsilon-ai", "project-promptvault"],
  "skills": ["skills-product-design", "skills-development", "skills-automation", "skills-ai-evaluation", "skills-design", "skills-research"],
  "experience": ["exp-ai-annotator", "exp-graphics", "exp-analyst", "exp-bd", "exp-ux", "project-ace-one-autos"],

  // Contact
  "contact": ["contact"],
  "email": ["contact"],
  "linkedin": ["contact"],
  "github": ["contact"],
  "twitter": ["contact"],
  "location": ["contact"],
  "abuja": ["contact"],

  // Education
  "education": ["education"],
  "university": ["education"],
  "degree": ["education"],
  "certif": ["certifications"],
};

const broadProjectIds = [
  "project-ace-one-autos",
  "project-epsilon-ai",
  "project-promptvault",
  "project-chainpulse",
  "project-carlink",
];

export function retrieveContext(query: string): RetrievedContext {
  const normalizedQuery = query.toLowerCase().trim();

  if (normalizedQuery.includes("sagitarii")) {
    return { sections: [], query, relevanceScore: 0 };
  }

  const relevantSectionIds = new Set<string>();
  let score = 0;

  for (const [keyword, sectionIds] of Object.entries(keywordMap)) {
    if (normalizedQuery.includes(keyword)) {
      sectionIds.forEach((id) => relevantSectionIds.add(id));
      score += 10;
    }
  }

  relevantSectionIds.add("summary");

  if (relevantSectionIds.size <= 1) {
    broadProjectIds.forEach((id) => relevantSectionIds.add(id));
    ["skills-product-design", "skills-development", "skills-automation"].forEach((id) => relevantSectionIds.add(id));
    score = 5;
  }

  const sections = cvData.filter((section) => relevantSectionIds.has(section.id));

  return {
    sections,
    query,
    relevanceScore: Math.min(score, 100),
  };
}

export function formatContextForLLM(context: RetrievedContext): string {
  if (context.sections.length === 0) {
    return "No verified portfolio information matched this question.";
  }

  const formatted = context.sections
    .map((section) => "**" + section.title + "**\n" + section.content)
    .join("\n\n");

  return "Relevant verified information from Chidozirim's portfolio:\n\n" + formatted;
}

export function getSectionsByCategory(category: CVSection["category"]): CVSection[] {
  return cvData.filter((section) => section.category === category);
}

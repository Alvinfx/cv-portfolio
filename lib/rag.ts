import { cvData, CVSection } from "@/data/cv/cv-data";

export interface RetrievedContext {
  sections: CVSection[];
  query: string;
  relevanceScore: number;
}

const keywordMap: Record<string, string[]> = {
  // AI annotation
  "ai annotation": ["exp-ai-annotator", "skills-ai"],
  "annotation": ["exp-ai-annotator", "skills-ai"],
  "prompt evaluation": ["exp-ai-annotator", "skills-ai"],
  "rlhf": ["exp-ai-annotator", "skills-ai"],
  "data annotation": ["exp-ai-annotator", "skills-ai"],
  "llm": ["exp-ai-annotator", "skills-ai"],
  "ai training": ["exp-ai-annotator", "skills-ai"],
  "outlier": ["exp-ai-annotator", "skills-ai"],
  "stellar ai": ["exp-ai-annotator", "skills-ai"],
  "mercor": ["exp-ai-annotator", "skills-ai"],
  "toloka": ["exp-ai-annotator", "skills-ai"],
  "cvat": ["exp-ai-annotator", "skills-ai"],
  "multimodal": ["exp-ai-annotator", "skills-ai"],
  "computer vision": ["exp-ai-annotator", "skills-ai"],

  // Web3 & crypto
  "web3": ["exp-analyst", "exp-bd", "skills-web3", "project-singcity", "project-promptvault"],
  "crypto": ["exp-analyst", "skills-web3", "project-tokenlogic", "video-channels"],
  "blockchain": ["exp-analyst", "exp-bd", "skills-web3", "project-singcity", "project-promptvault"],
  "forex": ["exp-analyst", "skills-web3", "skills-research"],
  "market analysis": ["exp-analyst", "skills-research"],
  "defi": ["exp-analyst", "skills-web3"],
  "nft": ["exp-analyst", "skills-web3"],
  "on-chain": ["exp-analyst", "skills-web3"],
  "tradestellar": ["exp-analyst"],
  "irys": ["exp-bd", "project-promptvault"],

  // Design
  "design": ["exp-graphics", "exp-ux", "skills-design", "skills-ux", "project-chainpulse"],
  "figma": ["exp-graphics", "exp-ux", "skills-ux", "project-chainpulse"],
  "canva": ["exp-graphics", "skills-design"],
  "ui": ["exp-ux", "skills-ux", "project-chainpulse"],
  "ux": ["exp-ux", "skills-ux", "project-chainpulse"],
  "ui/ux": ["exp-ux", "skills-ux", "project-chainpulse"],
  "product design": ["exp-ux", "skills-ux", "project-chainpulse"],
  "brand": ["exp-graphics", "skills-design"],
  "graphic": ["exp-graphics", "skills-design"],
  "branding": ["exp-graphics", "skills-design"],
  "flexisaf": ["exp-ux"],
  "user research": ["exp-ux", "skills-ux"],
  "wireframe": ["skills-ux", "project-chainpulse"],
  "prototype": ["skills-ux", "project-chainpulse"],
  "design system": ["skills-ux", "project-chainpulse"],

  // ChainPulse
  "chainpulse": ["project-chainpulse", "skills-ux"],
  "chain pulse": ["project-chainpulse", "skills-ux"],
  "portfolio tracker": ["project-chainpulse"],
  "zerion": ["project-chainpulse"],
  "zapper": ["project-chainpulse"],
  "debank": ["project-chainpulse"],
  "competitive analysis": ["project-chainpulse", "skills-ux"],
  "information architecture": ["project-chainpulse", "skills-ux"],

  // SingCity
  "singcity": ["project-singcity"],
  "sing city": ["project-singcity"],
  "karaoke": ["project-singcity"],
  "singing": ["project-singcity"],

  // PromptVault
  "promptvault": ["project-promptvault"],
  "prompt vault": ["project-promptvault"],

  // TokenLogic & video
  "tokenlogic": ["project-tokenlogic", "video-channels"],
  "token logic": ["project-tokenlogic", "video-channels"],
  "youtube": ["video-channels", "project-tokenlogic"],
  "video": ["video-channels", "skills-video"],
  "content creation": ["video-channels", "skills-video"],
  "capcut": ["video-channels", "skills-video"],
  "channel": ["video-channels", "project-tokenlogic"],
  "mindovercomfort": ["video-channels"],
  "raregem": ["video-channels"],

  // Projects general
  "project": ["project-chainpulse", "project-singcity", "project-promptvault", "project-tokenlogic"],
  "built": ["project-singcity", "project-promptvault", "project-chainpulse"],
  "live": ["project-singcity", "project-promptvault"],

  // Skills
  "skills": ["skills-ai", "skills-design", "skills-ux", "skills-research", "skills-web3", "skills-video", "skills-tech"],
  "experience": ["exp-ai-annotator", "exp-graphics", "exp-analyst", "exp-bd", "exp-ux"],

  // Contact
  "contact": ["contact"],
  "email": ["contact"],
  "telegram": ["contact"],
  "twitter": ["contact"],
  "linkedin": ["contact"],
  "github": ["contact"],
  "location": ["contact"],
  "abuja": ["contact"],

  // Education
  "education": ["education"],
  "university": ["education"],
  "degree": ["education"],
  "certif": ["certifications"],

  // CarLink keywords
  "carlink": ["project-carlink", "skills-ux"],
  "car link": ["project-carlink", "skills-ux"],
  "car marketplace": ["project-carlink"],
  "vin checker": ["project-carlink"],
  "vin": ["project-carlink"],
  "nigeria car": ["project-carlink"],
  "swipe car": ["project-carlink"],
  "car rental": ["project-carlink"],
  "car app": ["project-carlink"],
  "jiji": ["project-carlink"],
  "cars45": ["project-carlink"],
  "autochek": ["project-carlink"],
};

export function retrieveContext(query: string): RetrievedContext {
  const normalizedQuery = query.toLowerCase();
  const relevantSectionIds = new Set<string>();
  let score = 0;

  for (const [keyword, sectionIds] of Object.entries(keywordMap)) {
    if (normalizedQuery.includes(keyword)) {
      sectionIds.forEach((id) => relevantSectionIds.add(id));
      score += 10;
    }
  }

  // Always include summary for context
  relevantSectionIds.add("summary");

  if (relevantSectionIds.size <= 1) {
    // Fallback: return broad overview
    ["exp-ai-annotator", "project-chainpulse", "project-singcity", "project-promptvault", "skills-ai", "skills-ux", "skills-web3"].forEach(id => relevantSectionIds.add(id));
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
  const formatted = context.sections
    .map((section) => `**${section.title}**\n${section.content}`)
    .join("\n\n");
  return `Relevant information from Chidozirim's portfolio:\n\n${formatted}`;
}

export function getSectionsByCategory(category: CVSection["category"]): CVSection[] {
  return cvData.filter((section) => section.category === category);
}

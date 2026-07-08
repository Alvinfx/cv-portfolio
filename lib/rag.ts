import { cvData, CVSection } from "@/data/cv/cv-data";

/**
 * Simple keyword-based RAG system for CV data
 * In production, this would use sentence-transformers + pgvector in Supabase
 * For now, keyword matching + category filtering works for portfolio use
 */

export interface RetrievedContext {
  sections: CVSection[];
  query: string;
  relevanceScore: number;
}

// Keywords mapped to CV sections for quick lookup
const keywordMap: Record<string, string[]> = {
  "ai annotation": ["exp-ai-annotator", "skills-ai"],
  "prompt evaluation": ["exp-ai-annotator", "skills-ai"],
  rlhf: ["exp-ai-annotator", "skills-ai"],
  "data annotation": ["exp-ai-annotator", "skills-ai"],
  "ai training": ["exp-ai-annotator", "skills-ai"],
  "web3": ["exp-analyst", "exp-bd", "skills-web3", "project-promptvault"],
  crypto: ["exp-analyst", "exp-bd", "skills-web3"],
  blockchain: ["exp-analyst", "exp-bd", "skills-web3", "project-promptvault"],
  design: ["exp-graphics", "exp-ux", "skills-design", "project-tokenlogic"],
  figma: ["exp-graphics", "exp-ux", "skills-design"],
  canva: ["exp-graphics", "skills-design"],
  "ui/ux": ["exp-ux", "skills-product", "skills-design"],
  market: ["exp-analyst", "skills-research"],
  forex: ["exp-analyst", "skills-research", "skills-web3"],
  "graphic design": ["exp-graphics", "skills-design"],
  "brand identity": ["exp-graphics", "skills-design"],
  "product design": ["exp-ux", "skills-product"],
  "user research": ["exp-ux", "skills-product"],
  skills: ["skills-ai", "skills-design", "skills-research", "skills-product", "skills-web3"],
  experience: [
    "exp-ai-annotator",
    "exp-graphics",
    "exp-analyst",
    "exp-bd",
    "exp-ux",
    "exp-ea",
  ],
  project: ["project-promptvault", "project-tokenlogic", "project-verify"],
  promptvault: ["project-promptvault"],
  education: ["education"],
  certifications: ["cert-design", "cert-mgmt"],
  remote: ["exp-ai-annotator", "exp-graphics", "exp-analyst"],
  abuja: ["exp-ux", "contact"],
};

/**
 * Retrieve relevant CV sections based on query
 */
export function retrieveContext(query: string): RetrievedContext {
  const normalizedQuery = query.toLowerCase();
  const relevantSectionIds = new Set<string>();
  let score = 0;

  // Find matching keywords
  for (const [keyword, sectionIds] of Object.entries(keywordMap)) {
    if (normalizedQuery.includes(keyword)) {
      sectionIds.forEach((id) => relevantSectionIds.add(id));
      score += 10; // Boost relevance for keyword match
    }
  }

  // If no keyword matches, return summary + skills
  if (relevantSectionIds.size === 0) {
    relevantSectionIds.add("summary");
    relevantSectionIds.add("skills-ai");
    relevantSectionIds.add("skills-design");
    relevantSectionIds.add("skills-web3");
    score = 5;
  }

  // Retrieve and return sections
  const sections = cvData.filter((section) =>
    relevantSectionIds.has(section.id)
  );

  return {
    sections,
    query,
    relevanceScore: Math.min(score, 100),
  };
}

/**
 * Format CV context for LLM prompt
 */
export function formatContextForLLM(context: RetrievedContext): string {
  const formattedSections = context.sections
    .map((section) => `**${section.title}**\n${section.content}`)
    .join("\n\n");

  return `Here is relevant information from Chidozirim's CV:\n\n${formattedSections}`;
}

/**
 * Get all sections in a category
 */
export function getSectionsByCategory(
  category: CVSection["category"]
): CVSection[] {
  return cvData.filter((section) => section.category === category);
}

/**
 * Search for similar topics (for follow-up questions)
 */
export function findRelatedTopics(
  query: string
): Record<string, CVSection[]> {
  const context = retrieveContext(query);
  const relatedTopics: Record<string, CVSection[]> = {};

  context.sections.forEach((section) => {
    if (!relatedTopics[section.category]) {
      relatedTopics[section.category] = [];
    }
    relatedTopics[section.category].push(section);
  });

  return relatedTopics;
}

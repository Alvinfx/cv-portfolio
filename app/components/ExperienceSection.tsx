"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Freelance",
    role: "AI Data Annotator & Evaluator",
    period: "2023 - Present",
    location: "Remote",
    tags: ["RLHF", "Prompt Evaluation", "CVAT", "LLM Evaluation", "Multimodal Annotation"],
    bullets: [
      "Evaluate AI-generated outputs across text, image, code, and audio/video modalities",
      "Conduct prompt evaluation and response quality assessment as part of RLHF workflows",
      "Perform image annotation: object detection, segmentation, and scene description",
      "Apply structured rubrics to rate LLM outputs across high-volume tasks",
    ],
  },
  {
    company: "TradeStellar",
    role: "Market Analyst",
    period: "2019 - 2026",
    location: "Remote",
    tags: ["Crypto", "Forex", "NFT", "On-Chain Analysis", "Technical Analysis"],
    bullets: [
      "Analyzed crypto, forex, and NFT markets to support trading strategy",
      "Tracked price action, macro trends, and on-chain signals for intelligence reports",
      "Developed and refined multi-market trading strategies over six years",
    ],
  },
  {
    company: "Freelance",
    role: "Graphics Designer",
    period: "2020 - Present",
    location: "Remote",
    tags: ["Canva", "Figma", "Branding", "Social Media"],
    bullets: [
      "Designed brand identity systems including logo concepts, color palettes, and guidelines",
      "Created thumbnails, banners, and social media assets for YouTube campaigns",
      "Built UI mockups and interface assets in Figma for product workflows",
    ],
  },
  {
    company: "IRYS Network",
    role: "Business Development Specialist",
    period: "2025",
    location: "Remote (Voluntary)",
    tags: ["Web3", "Blockchain", "Ecosystem Research"],
    bullets: [
      "Researched Web3 projects for potential datachain integration opportunities",
      "Produced ecosystem research reports on blockchain infrastructure",
      "Engaged project teams to identify improvement and integration pathways",
    ],
  },
  {
    company: "FlexiSAF Edusoft Ltd",
    role: "UI/UX Designer",
    period: "2023",
    location: "Abuja",
    tags: ["Figma", "Design Sprints", "User Research"],
    bullets: [
      "Contributed to product design sprints, components, and design systems in Figma",
      "Conducted user interviews to identify friction in onboarding flows",
      "Worked with frontend engineers to align design decisions with product goals",
    ],
  },
  {
    company: "National Assembly of Nigeria",
    role: "Executive Assistant",
    period: "2018 - 2019",
    location: "Abuja",
    tags: ["Research", "Documentation", "Administration"],
    bullets: [
      "Provided research, documentation, and administrative support to senior officials",
      "Prepared briefing reports and managed cross-departmental communications",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-12">
          <div className="section-label">Experience</div>
          <h2 className="section-title">Work History</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-7 top-0 bottom-0 w-px" style={{ background: "var(--border)" }} />
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="flex gap-6 md:gap-8 pl-6 md:pl-20 relative">
                <div className="absolute left-[-4px] md:left-[24px] top-2 w-2 h-2 rounded-full"
                  style={{ background: "var(--accent)", boxShadow: "0 0 6px var(--accent)" }} />
                <div className="card p-5 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>{exp.role}</h3>
                      <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>{exp.company} · {exp.location}</p>
                    </div>
                    <span className="text-xs whitespace-nowrap" style={{ color: "var(--text-muted)" }}>{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm flex gap-2" style={{ color: "var(--text-muted)" }}>
                        <span style={{ color: "var(--accent)" }} className="mt-0.5 shrink-0">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

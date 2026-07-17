"use client";
import { motion } from "framer-motion";

const experiences = [
  { company: "AI Data Annotation — Freelance", role: "AI Data Annotator & Evaluator", period: "2023 – Present", location: "Remote", tags: ["RLHF", "CVAT", "LLM Evaluation", "Multimodal Annotation", "Prompt Evaluation"], bullets: ["Evaluate and annotate AI-generated outputs across text, image, code, and audio/video modalities", "Conduct prompt evaluation and response quality assessment as part of RLHF workflows", "Perform image/visual annotation: object detection, segmentation, scene description", "Apply structured rubrics to rate LLM outputs at scale in high-volume remote environments"] },
  { company: "TradeStellar", role: "Market Analyst", period: "2019 – Present", location: "Remote", tags: ["Crypto", "Forex", "NFT", "On-Chain", "Technical Analysis"], bullets: ["Analyze crypto, forex, and NFT markets to support trading strategy and decision-making", "Track price action, macro trends, and on-chain signals for market intelligence reports", "Develop and refine multi-market trading strategies over 6+ years"] },
  { company: "Graphics Design — Freelance", role: "Graphics Designer", period: "2020 – Present", location: "Remote", tags: ["Canva", "Figma", "Branding", "Social Media"], bullets: ["Designed brand identity systems including logo concepts, color palettes, design guidelines", "Created marketing collateral: thumbnails, banners, social media graphics for YouTube channels", "Designed UI mockups and interface assets in Figma for product/UX workflows"] },
  { company: "IRYS Network", role: "Business Development Specialist", period: "2025", location: "Remote · Voluntary", tags: ["Web3", "Blockchain", "Ecosystem Research"], bullets: ["Researched Web3 projects for potential datachain integration opportunities", "Produced ecosystem research reports highlighting blockchain infrastructure synergies"] },
  { company: "FlexiSAF Edusoft Ltd", role: "UI/UX Designer", period: "2023", location: "Abuja", tags: ["Figma", "Design Sprints", "User Research"], bullets: ["Participated in structured product design sprints, contributing to components and design systems", "Conducted user interviews to identify friction points and improve onboarding flows", "Collaborated with frontend engineers to align interface decisions with product goals"] },
  { company: "National Assembly of Nigeria", role: "Executive Assistant", period: "2018 – 2019", location: "Abuja", tags: ["Research", "Documentation", "Administration"], bullets: ["Provided research, documentation, and administrative support to senior officials", "Prepared briefing reports and managed cross-departmental communications"] },
];

export function ExperienceSection() {
  return (
    <section id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="section-label">Experience</div>
          <h2 className="section-title">Work History</h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-0 md:left-7 top-0 bottom-0 w-px bg-white/5" />
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="flex gap-6 md:gap-8 pl-6 md:pl-20 relative">
                <div className="absolute left-[-4px] md:left-[24px] top-2 w-2 h-2 rounded-full" style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
                <div className="card p-6 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-white text-lg">{exp.role}</h3>
                      <p className="text-gray-400 text-sm">{exp.company} · {exp.location}</p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-gray-400 text-sm flex gap-2">
                        <span style={{ color: "var(--accent)" }} className="mt-1 shrink-0">›</span>{b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
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

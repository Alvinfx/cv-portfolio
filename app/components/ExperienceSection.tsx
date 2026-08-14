"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";

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
      "Perform image annotation including object detection, segmentation, and scene description",
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
    <section id="experience" className="section-shell section-dark">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <p className="eyebrow text-[var(--color-accent-soft)]">Experience</p>
            <h2 className="section-heading text-[var(--color-canvas)]">Work across AI, markets, design, and operations.</h2>
          </div>
          <p className="max-w-[470px] text-[15px] leading-relaxed text-[rgba(244,240,232,.65)] lg:col-span-5 lg:justify-self-end">
            A chronological view of the roles and freelance work currently represented on this portfolio.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-[9px] top-1 w-px bg-[rgba(255,255,255,.18)] md:left-[145px]" />
          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.role}-${experience.company}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.035 }}
                className="relative grid gap-5 border-b border-[rgba(255,255,255,.14)] pb-9 pt-1 md:grid-cols-[120px_1fr] md:gap-10 md:pb-10 md:pt-0"
              >
                <span className="absolute left-[5px] top-[7px] h-[9px] w-[9px] rounded-full border-2 border-[var(--color-dark)] bg-[var(--color-accent-soft)] md:left-[141px]" />
                <div className="pl-8 md:pl-0">
                  <p className="text-[12px] font-semibold text-[var(--color-accent-soft)]">{experience.period}</p>
                  <p className="mt-1 text-[11px] text-[rgba(244,240,232,.48)]">{experience.location}</p>
                </div>

                <div className="pl-8 md:pl-0">
                  <div className="grid gap-5 lg:grid-cols-[270px_1fr] lg:gap-10">
                    <div>
                      <h3 className="font-[var(--font-display)] text-[26px] font-semibold leading-none text-[var(--color-canvas)]">
                        {experience.role}
                      </h3>
                      <p className="mt-2 text-[13px] font-medium text-[rgba(244,240,232,.64)]">{experience.company}</p>
                    </div>
                    <div>
                      <ul className="space-y-2">
                        {experience.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-[13px] leading-relaxed text-[rgba(244,240,232,.68)]">
                            <Icon name="check" size={14} className="mt-1 shrink-0 text-[var(--color-accent-soft)]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {experience.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex min-h-6 items-center rounded-[3px] border border-[rgba(255,255,255,.16)] px-2 py-1 text-[10px] font-medium text-[rgba(244,240,232,.68)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

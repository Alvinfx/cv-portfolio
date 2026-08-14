"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";

const skillGroups = [
  {
    category: "AI & Data Annotation",
    icon: "spark" as const,
    skills: ["Prompt Evaluation", "RLHF", "Text Annotation", "Image Annotation", "Audio/Video Annotation", "CVAT", "Data Quality Assessment", "LLM Evaluation"],
  },
  {
    category: "Web3 & Blockchain",
    icon: "research" as const,
    skills: ["Crypto Market Analysis", "Forex Trading", "On-Chain Analysis", "NFT Markets", "Smart Contracts", "DeFi", "Web3 Research"],
  },
  {
    category: "Graphics Design",
    icon: "design" as const,
    skills: ["Canva", "Brand Identity", "Color Theory", "Typography", "Social Media Graphics", "Thumbnail Design", "Logo Design"],
  },
  {
    category: "Product / UX Design",
    icon: "design" as const,
    skills: ["Figma", "Design Sprints", "User Interviews", "UX Research", "Onboarding Flows", "Component Systems", "Prototyping", "Information Architecture"],
  },
  {
    category: "Video & Content",
    icon: "video" as const,
    skills: ["CapCut", "AI Video Editing", "Script Writing", "Storyboarding", "YouTube SEO", "Faceless Content", "Content Strategy"],
  },
  {
    category: "Development",
    icon: "code" as const,
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Next.js", "web3.js", "Git"],
  },
];

const education = [
  { name: "Product Design (UI/UX)", org: "DigitallyU Academy", year: "2023" },
  { name: "Web Development", org: "DigitallyU Academy", year: "2023" },
  { name: "Project Management", org: "Exford Global", year: "2019" },
  { name: "Customer Service & Relationship Management", org: "Exford Global", year: "2019" },
  { name: "Health, Safety & Environment", org: "Exford Global", year: "2019" },
  { name: "B.Sc. Industrial Chemistry", org: "Imo State University", year: "2016" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <p className="eyebrow">Skills</p>
            <h2 className="section-heading">Capabilities and tools I use.</h2>
          </div>
          <p className="body-copy max-w-[480px] lg:col-span-5 lg:justify-self-end">
            My work spans AI evaluation, market research, visual and product design, video production, and frontend development.
          </p>
        </motion.div>

        <div className="grid gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.035 }}
              className="bg-[var(--color-surface)] p-6"
            >
              <div className="flex items-center gap-4">
                <div className="icon-box"><Icon name={group.icon} size={18} /></div>
                <h3 className="text-[14px] font-semibold text-[var(--color-ink)]">{group.category}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => <span key={skill} className="tag">{skill}</span>)}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Education</p>
              <h3 className="card-heading">Education and certifications</h3>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {education.map((item) => (
              <div key={`${item.name}-${item.year}`} className="surface-card p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <div>
                    <p className="text-[13px] font-semibold text-[var(--color-ink)]">{item.name}</p>
                    <p className="meta-copy mt-1">{item.org} · {item.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

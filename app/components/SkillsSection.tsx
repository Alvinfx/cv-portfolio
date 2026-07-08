"use client";
import { motion } from "framer-motion";

const skillGroups = [
  { category: "AI & Data Annotation", icon: "🤖", skills: ["Prompt Evaluation", "RLHF", "Text Annotation", "Image Annotation", "Audio/Video Annotation", "CVAT", "Data Quality Assessment", "LLM Evaluation"] },
  { category: "Web3 & Blockchain", icon: "⛓️", skills: ["Crypto Market Analysis", "Forex Trading", "On-Chain Analysis", "NFT Markets", "Smart Contracts", "DeFi", "Web3 Research", "Blockchain Platforms"] },
  { category: "Graphics Design", icon: "🎨", skills: ["Canva", "Brand Identity", "Color Theory", "Typography", "Social Media Graphics", "Thumbnail Design", "Banner Design", "Logo Design"] },
  { category: "Product / UX Design", icon: "📐", skills: ["Figma", "Design Sprints", "User Interviews", "UX Research", "Onboarding Flows", "Component Systems", "Prototyping", "Information Architecture"] },
  { category: "Video & Content", icon: "🎬", skills: ["CapCut", "AI Video Editing", "Script Writing", "Storyboarding", "YouTube SEO", "Faceless Content", "Content Strategy"] },
  { category: "Tech & Development", icon: "💻", skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "web3.js", "Next.js", "Git"] },
];

export function SkillsSection() {
  return (
    <section id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="section-label">Skills</div>
          <h2 className="section-title">Core Competencies</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div key={group.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-semibold text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">{group.skills.map(s => <span key={s} className="tag">{s}</span>)}</div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12">
          <h3 className="text-white font-semibold text-lg mb-6">Education & Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Product Design (UI/UX)", org: "DigitallyU Academy", year: "2023" },
              { name: "Web Development", org: "DigitallyU Academy", year: "2023" },
              { name: "Project Management", org: "Exford Global", year: "2019" },
              { name: "Customer Service & CRM", org: "Exford Global", year: "2019" },
              { name: "Health, Safety & Environment", org: "Exford Global", year: "2019" },
              { name: "B.Sc. Industrial Chemistry", org: "Imo State University", year: "2016" },
            ].map((cert, i) => (
              <div key={i} className="card p-4 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: "var(--accent)" }} />
                <div>
                  <p className="text-white text-sm font-medium">{cert.name}</p>
                  <p className="text-gray-500 text-xs">{cert.org} · {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

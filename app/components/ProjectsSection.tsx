"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SingCity",
    desc: "Karaoke app on blockchain. On-chain singing with wallet integration. Live project combining Web3 infrastructure with audio/music UX.",
    tags: ["Blockchain", "Web3", "React", "Vercel"],
    link: "https://singcity.vercel.app/",
    status: "Live",
  },
  {
    title: "PromptVault",
    desc: "React/TypeScript app with Irys Network blockchain integration for managing AI prompts. Full-stack project combining AI tooling with on-chain storage.",
    tags: ["React", "TypeScript", "Irys Network", "Web3"],
    link: "https://promptvault-ai.vercel.app",
    github: "https://github.com/Alvinfx/PromptVault",
    status: "Live",
  },
  {
    title: "TokenLogic",
    desc: "Faceless YouTube channel covering crypto and Web3 for African audiences. Built the content system from scratch: brand, scripts, Canva assets, editing workflow.",
    tags: ["Content", "Web3 Education", "Branding", "CapCut"],
    link: "https://youtube.com/@tokenlogic500?si=6iv1Kqac4LkbZBAW",
    status: "Active",
  },
  {
    title: "CodeXero v2",
    desc: "Video content for Cluster Protocol's CodeXero v2 launch. Wrote the voiceover script and full storyboard for the campaign.",
    tags: ["Web3", "Script", "Storyboard", "Content"],
    status: "Delivered",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" style={{ background: "var(--bg-card)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-12">
          <div className="section-label">Projects</div>
          <h2 className="section-title">Things I've Built</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="card p-5 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-base" style={{ color: "var(--text-primary)" }}>{p.title}</h3>
                <span className={`tag shrink-0 ml-2 ${p.status === "Live" || p.status === "Active" ? "border-green-500/30 text-green-400" : ""}`}
                  style={p.status === "Live" || p.status === "Active" ? { background: "rgba(74,222,128,0.06)", borderColor: "rgba(74,222,128,0.25)", color: "#4ade80" } : {}}>
                  {p.status}
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-muted)" }}>{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="flex gap-4">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-medium transition-opacity hover:opacity-70"
                    style={{ color: "var(--accent)" }}>
                    View Live →
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "var(--text-muted)" }}>
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

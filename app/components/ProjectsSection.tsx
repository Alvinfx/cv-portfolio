"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "SingCity", desc: "Karaoke website on blockchain — live on-chain singing experience with wallet integration. Combines Web3 infrastructure with interactive audio/music UX.", tags: ["Blockchain", "Web3", "React", "Karaoke", "Vercel"], link: "https://singcity.vercel.app/", status: "Live" },
  { title: "PromptVault", desc: "React/TypeScript app with Irys Network blockchain integration for prompt management. Full-stack combining AI, blockchain, and modern frontend architecture.", tags: ["React", "TypeScript", "Irys Network", "Web3", "Vercel"], link: "https://promptvault-ai.vercel.app", github: "https://github.com/Alvinfx/PromptVault", status: "Live" },
  { title: "TokenLogic", desc: "Faceless YouTube channel for crypto/Web3 education targeting African audiences. Complete content system: branding, scripts, Canva assets, CapCut editing workflows.", tags: ["Content Creation", "Web3 Education", "Branding", "CapCut"], link: "https://youtube.com/@tokenlogic500?si=6iv1Kqac4LkbZBAW", status: "Active" },
  { title: "CodeXero v2 Campaign", desc: "Video content campaign for Cluster Protocol's CodeXero v2 — complete voiceover script and storyboard for Web3 developer tooling launch.", tags: ["Web3", "Video Script", "Storyboard", "Content Strategy"], status: "Delivered" },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="section-label">Projects</div>
          <h2 className="section-title">Things I've Built</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card p-6 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-white text-lg">{p.title}</h3>
                <span className={`tag text-xs shrink-0 ml-2 ${p.status === "Live" || p.status === "Active" ? "border-green-500/30 text-green-400 bg-green-500/10" : ""}`}>{p.status}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              <div className="flex gap-3">
                {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:opacity-80 transition-opacity" style={{ color: "var(--accent-light)" }}>→ View Live</a>}
                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">GitHub</a>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

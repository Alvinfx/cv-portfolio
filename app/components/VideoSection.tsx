"use client";
import { motion } from "framer-motion";

const channels = [
  { name: "@mindovercomfort5", url: "https://youtube.com/@mindovercomfort5?si=JLK4oZ5p1kbxW5Px", desc: "AI-assisted video editing, content creation, and lifestyle content for a growing audience.", icon: "📺", color: "#ff0000" },
  { name: "@raregem-05", url: "https://youtube.com/@raregem-05?si=B-aI2X_FV_WLkfkI", desc: "Creative video content showcasing production skills, AI video editing techniques, and original storytelling.", icon: "💎", color: "#7c6ef7" },
  { name: "@tokenlogic500", url: "https://youtube.com/@tokenlogic500?si=6iv1Kqac4LkbZBAW", desc: "Crypto and Web3 education channel targeting African audiences — market analysis, blockchain explainers, and opportunity spotlights.", icon: "🪙", color: "#f59e0b" },
];

export function VideoSection() {
  return (
    <section id="video" className="bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="section-label">Video Work</div>
          <h2 className="section-title mb-2">YouTube Channels</h2>
          <p className="text-gray-400 max-w-xl">AI-assisted video editing and content creation — from Web3 education to creative storytelling.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {channels.map((ch, i) => (
            <motion.a key={ch.name} href={ch.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card p-6 flex flex-col gap-4 group">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0" style={{ background: `${ch.color}18`, border: `1px solid ${ch.color}30` }}>{ch.icon}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-white group-hover:text-purple-400 transition-colors">{ch.name}</h3>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{ch.desc}</p>
                <span className="text-xs mt-2 inline-block" style={{ color: "var(--accent-light)" }}>→ Watch on YouTube</span>
              </div>
            </motion.a>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card p-6">
          <h3 className="text-white font-semibold mb-4">Video Production Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["AI Video Editing", "CapCut", "Script Writing", "Storyboarding", "Faceless Content", "Thumbnail Design", "Content Strategy", "Web3 Education", "YouTube SEO"].map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

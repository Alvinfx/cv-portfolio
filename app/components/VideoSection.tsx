"use client";
import { motion } from "framer-motion";

const channels = [
  {
    name: "@mindovercomfort5",
    url: "https://youtube.com/@mindovercomfort5?si=JLK4oZ5p1kbxW5Px",
    desc: "Lifestyle and content creation with AI-assisted video editing.",
    color: "#f5cb5c",
  },
  {
    name: "@raregem-05",
    url: "https://youtube.com/@raregem-05?si=B-aI2X_FV_WLkfkI",
    desc: "Creative video work with a focus on storytelling and editing technique.",
    color: "#cfdbd5",
  },
  {
    name: "@tokenlogic500",
    url: "https://youtube.com/@tokenlogic500?si=6iv1Kqac4LkbZBAW",
    desc: "Crypto and Web3 education for African audiences. Market analysis, blockchain explainers.",
    color: "#e8eddf",
  },
];

export function VideoSection() {
  return (
    <section id="video" style={{ background: "var(--bg-card)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-12">
          <div className="section-label">Video Work</div>
          <h2 className="section-title mb-2">YouTube Channels</h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Three channels across lifestyle, creative, and Web3 education content.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {channels.map((ch, i) => (
            <motion.a key={ch.name} href={ch.url} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="card p-5 flex flex-col gap-4 group">
              <div className="w-10 h-10 rounded flex items-center justify-center text-lg font-bold"
                style={{ background: `${ch.color}12`, border: `1px solid ${ch.color}25`, color: ch.color }}>
                YT
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-sm transition-colors group-hover:text-white"
                    style={{ color: "var(--text-primary)" }}>
                    {ch.name}
                  </h3>
                  <svg className="w-3 h-3 opacity-40 group-hover:opacity-70 transition-opacity" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{ch.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="card p-5">
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>
            Production Skills
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["AI Video Editing", "CapCut", "Script Writing", "Storyboarding", "Faceless Content",
              "Thumbnail Design", "Content Strategy", "YouTube SEO"].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

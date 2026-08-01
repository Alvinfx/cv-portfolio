"use client";
import { motion } from "framer-motion";

const domains = [
  { icon: "🤖", title: "AI Data Annotation", years: "2+ yrs", desc: "Prompt evaluation, RLHF, text/image/audio/video annotation across multiple platforms and modalities." },
  { icon: "⛓️", title: "Web3 & Crypto", years: "6+ yrs", desc: "Market and technical analysis, on-chain signals, multi-market strategy research across crypto and forex." },
  { icon: "🎨", title: "Graphics Design", years: "5+ yrs", desc: "Brand identity, social media content, UI mockups. Canva and Figma across multiple channels." },
  { icon: "📐", title: "Product / UX Design", years: "2+ yrs", desc: "Design sprints, user interviews, onboarding flow work at FlexiSAF. Figma-based design systems." },
  { icon: "🎬", title: "Video & Content", years: "Ongoing", desc: "Three YouTube channels: AI-assisted editing, Web3 education, creative content." },
];

export function AboutSection() {
  return (
    <section id="about" style={{ background: "var(--bg-card)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-12">
          <div className="section-label">About</div>
          <h2 className="section-title mb-4">Five domains. One person.</h2>
          <p className="max-w-2xl text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            I started in chemistry, moved into operations, then spent the last several years working across AI annotation, 
            crypto markets, design, and content. The breadth is intentional. Each domain informs the others.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {domains.map((d, i) => (
            <motion.div key={d.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card p-5">
              <div className="text-2xl mb-3">{d.icon}</div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{d.title}</h3>
                <span className="tag">{d.years}</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

const domains = [
  { icon: "🤖", title: "AI Data Annotation", years: "2+ years", desc: "Prompt evaluation, RLHF, text/image/audio/video annotation across Outlier, Stellar AI, Mercor, Toloka." },
  { icon: "⛓️", title: "Web3 & Crypto Analysis", years: "6+ years", desc: "Market & technical analysis, on-chain signals, multi-market strategy. TradeStellar + IRYS ecosystem research." },
  { icon: "🎨", title: "Graphics Design", years: "5+ years", desc: "Brand identity systems, UI mockups, social content, YouTube assets. Canva + Figma." },
  { icon: "📐", title: "Product / UX Design", years: "2+ years", desc: "Design sprints, user interviews, onboarding flow optimization. Built with Figma at FlexiSAF Edusoft." },
  { icon: "🎬", title: "Video Creation & Editing", years: "Ongoing", desc: "Faceless YouTube content, AI-assisted editing, Web3 education. Channels: @mindovercomfort5, @raregem-05." },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <div className="section-label">About</div>
          <h2 className="section-title mb-4">A Multi-Domain Creative</h2>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            Detail-oriented professional combining AI expertise, creative design, and deep Web3 knowledge.
            I bring structured evaluation skills from AI annotation into every domain I work in.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {domains.map((d, i) => (
            <motion.div key={d.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card p-6">
              <div className="text-3xl mb-4">{d.icon}</div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-white">{d.title}</h3>
                <span className="tag text-xs">{d.years}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

const roles = ["AI Data Evaluator", "Web3 Analyst", "Graphics Designer", "Product Designer", "Video Creator"];

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #f5cb5c 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <motion.div className="flex-1" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-label mb-4">Open to Remote Work</div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-5">
              <span style={{ color: "var(--text-primary)" }}>Hi, I'm</span>{" "}
              <span className="gradient-text">Chidozirim</span>
            </h1>

            <div className="flex flex-wrap gap-2 mb-7">
              {roles.map((role, i) => (
                <motion.span key={role} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.08 }} className="tag">
                  {role}
                </motion.span>
              ))}
            </div>

            <p className="text-lg leading-relaxed mb-9 max-w-lg" style={{ color: "var(--text-muted)" }}>
              I work across AI data evaluation, Web3 market research, product design, and content creation.
              Based in Abuja, Nigeria. Working remotely since 2019.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#projects"
                className="px-6 py-3 rounded font-semibold transition-all hover:opacity-90"
                style={{ background: "var(--accent)", color: "#242423" }}>
                View My Work
              </a>
              <a href="#contact"
                className="px-6 py-3 rounded font-semibold transition-all border"
                style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}>
                Get In Touch
              </a>
            </div>

            <div className="flex gap-5 mt-9">
              <a href="https://linkedin.com/in/chidozirim-ahuakagha" target="_blank" rel="noopener noreferrer"
                className="text-sm flex items-center gap-1.5 transition-colors hover:text-white"
                style={{ color: "var(--text-muted)" }}>
                💼 LinkedIn
              </a>
              <a href="https://x.com/XpnxvVicinity" target="_blank" rel="noopener noreferrer"
                className="text-sm flex items-center gap-1.5 transition-colors hover:text-white"
                style={{ color: "var(--text-muted)" }}>
                𝕏 Twitter
              </a>
            </div>
          </motion.div>

          <motion.div className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="relative w-60 h-60 lg:w-72 lg:h-72">
              <div className="absolute inset-0 rounded-full"
                style={{ background: "conic-gradient(from 0deg, var(--accent), transparent 50%, var(--accent))", padding: "2px", borderRadius: "50%", animation: "spin 10s linear infinite" }}>
                <div className="w-full h-full rounded-full" style={{ background: "var(--bg-primary)" }} />
              </div>
              <div className="absolute inset-2 rounded-full overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                <img src="/avatar.jpg" alt="Chidozirim Ahuakagha" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}

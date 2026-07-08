"use client";
import { motion } from "framer-motion";

const roles = ["AI Data Evaluator", "Web3 Analyst", "Graphics Designer", "Product/UX Designer", "Video Creator"];

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,110,247,0.08) 0%, transparent 70%)" }} />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div className="flex-1" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="section-label mb-4">Available for Remote Work</div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Hi, I'm</span>{" "}
              <span className="gradient-text">Chidozirim</span>
            </h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {roles.map((role, i) => (
                <motion.span key={role} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }} className="tag">{role}</motion.span>
              ))}
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
              Building at the intersection of AI training, blockchain infrastructure, and creative systems.
              2+ years in AI annotation · 6+ years in crypto markets · Based in Abuja, Nigeria.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "var(--accent)" }}>View My Work</a>
              <a href="#contact" className="px-6 py-3 rounded-xl font-semibold text-gray-300 border border-white/10 hover:border-white/30 transition-all">
                Get In Touch</a>
            </div>
            <div className="flex gap-5 mt-10">
              <a href="https://linkedin.com/in/chidozirim-ahuakagha" target="_blank" rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-white flex items-center gap-1 transition-colors">
                💼 LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div className="flex-shrink-0" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full animate-spin"
                style={{ background: "conic-gradient(from 0deg, var(--accent), transparent 60%, var(--accent))", animationDuration: "8s", padding: "2px" }}>
                <div className="w-full h-full rounded-full bg-[#0a0a0f]" />
              </div>
              <div className="absolute inset-2 rounded-full overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
                <img src="/avatar.jpg" alt="Chidozirim Ahuakagha" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

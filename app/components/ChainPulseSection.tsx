"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CarouselLightbox } from "./CarouselLightbox";

const screens = [
  { src: "/chainpulse/dashboard.png", caption: "Dashboard — Day and Night themes" },
  { src: "/chainpulse/alerts.png", caption: "Alerts — configurable rule management" },
  { src: "/chainpulse/add-wallet.png", caption: "Add Wallet — 3-step onboarding modal" },
  { src: "/chainpulse/select-chain.png", caption: "Select Chain — multi-chain selector" },
];

const skills = ["UX Research", "Competitive Analysis", "Information Architecture", "Wireframing", "Design Systems", "High-Fidelity UI", "Figma Variables", "Dark/Light Theming"];
const process = ["Market Research", "Competitive Analysis", "User Segments", "Problem Statement", "IA", "Wireframes", "Hi-Fi UI", "Design System"];

export function ChainPulseSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [videoExpanded, setVideoExpanded] = useState(false);
  const lightboxImages = useMemo(() => screens.map(s => ({ src: s.src, caption: s.caption })), []);

  return (
    <section id="chainpulse" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="section-label">UI/UX Case Study</div>
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
            <h2 className="section-title">ChainPulse</h2>
            <span className="text-gray-500 text-sm">Product Design · Figma</span>
          </div>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
            A multi-chain crypto portfolio and on-chain activity tracker designed end-to-end — from market research through hi-fi UI.
            Conducted competitive analysis of Zerion, Zapper, and DeBank; defined user segments and problem statements;
            built a full information architecture; and designed four core flows in a token-based Night/Day design system with reusable components.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap items-center gap-1.5 mb-12">
          {process.map((step, i, arr) => (
            <div key={step} className="flex items-center gap-1.5">
              <span className="text-xs px-2.5 py-1 rounded-full" style={{ background: "rgba(124,110,247,0.12)", color: "var(--accent-light)", border: "1px solid rgba(124,110,247,0.2)" }}>
                {step}
              </span>
              {i < arr.length - 1 && <span className="text-gray-700 text-xs">›</span>}
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Screen grid */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3 card overflow-hidden">
            <div className="p-4 grid grid-cols-2 gap-3" style={{ background: "var(--bg-primary)" }}>
              {screens.map((screen, i) => (
                <motion.div key={screen.src}
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="relative overflow-hidden rounded-xl cursor-zoom-in group"
                  style={{ height: "180px" }}
                  onClick={() => setLightboxIndex(i)}>
                  <img src={screen.src} alt="" className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M15 3h6m0 0v6m0-6L10 14M9 21H3m0 0v-6m0 6l11-11" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="px-4 py-2.5 border-t border-white/5">
              <p className="text-gray-600 text-xs">Click any image · ← → to browse</p>
            </div>
          </motion.div>

          {/* Video + skills */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card overflow-hidden">
              <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <h3 className="text-white text-sm font-medium flex items-center gap-2"><span>🎬</span> Prototype Walkthrough</h3>
                <button onClick={() => setVideoExpanded(true)} className="text-xs flex items-center gap-1 transition-colors hover:text-white" style={{ color: "var(--accent-light)" }}>
                  <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 3h6m0 0v6m0-6L10 14M9 21H3m0 0v-6m0 6l11-11" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Full view
                </button>
              </div>
              <div className="relative cursor-pointer group" style={{ height: "130px" }} onClick={() => setVideoExpanded(true)}>
                <img src="https://img.youtube.com/vi/c6xiNtb6VbM/mqdefault.jpg" alt="ChainPulse walkthrough" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-all flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: "rgba(124,110,247,0.9)" }}>
                    <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="card p-4">
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-3">Skills Applied</p>
              <div className="flex flex-wrap gap-1.5">
                {skills.map(s => <span key={s} className="tag" style={{ fontSize: "11px", padding: "3px 10px" }}>{s}</span>)}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <CarouselLightbox images={lightboxImages} currentIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={setLightboxIndex} />

      <AnimatePresence>
        {videoExpanded && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setVideoExpanded(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
            style={{ background: "rgba(0,0,0,0.97)" }}>
            <motion.div initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.92 }}
              className="w-full max-w-4xl rounded-xl overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe src="https://www.youtube.com/embed/c6xiNtb6VbM?autoplay=1" title="ChainPulse Prototype Walkthrough"
                  className="absolute inset-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen style={{ border: "none" }} />
              </div>
            </motion.div>
            <button onClick={() => setVideoExpanded(false)} className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" /></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

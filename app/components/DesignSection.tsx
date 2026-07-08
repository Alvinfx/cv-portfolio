"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const designWork = [
  { id: 1, title: "Design Work 1", category: "Graphics", src: "/design/design-1.jpg" },
  { id: 2, title: "Design Work 2", category: "Graphics", src: "/design/design-2.jpg" },
  { id: 3, title: "Design Work 3", category: "Graphics", src: "/design/design-3.jpg" },
  { id: 4, title: "Design Work 4", category: "Graphics", src: "/design/design-4.jpg" },
  { id: 5, title: "Design Work 5", category: "Graphics", src: "/design/design-5.jpg" },
  { id: 6, title: "Design Work 6", category: "Graphics", src: "/design/design-6.jpg" },
];

export function DesignSection() {
  const [selected, setSelected] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="design">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
          <div className="section-label">Design Work</div>
          <h2 className="section-title mb-2">Graphics & Visual Design</h2>
          <p className="text-gray-400 max-w-xl mb-10">Brand identity systems, social media assets, and UI mockups built with Canva and Figma.</p>
        </motion.div>

        {/* Product / UX Design */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="card p-6 mb-10 border-l-4" style={{ borderLeftColor: "var(--accent)" }}>
          <div className="flex items-start gap-4">
            <div className="text-3xl">📐</div>
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Product / UX Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-4">
                Hands-on experience running design sprints, conducting user interviews, and translating research into actionable UX decisions.
                Worked inside Figma-based design systems at FlexiSAF Edusoft, collaborating directly with frontend engineers on onboarding flow improvements.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Design Sprints", "User Interviews", "Onboarding Flows", "Component Systems", "Usability Testing"].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Design Grid — smaller, 3 columns, fixed height */}
        <div className="grid grid-cols-3 gap-3">
          {designWork.map((item, i) => (
            <motion.div key={item.id}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              onClick={() => setSelected(item)}
              className="relative overflow-hidden rounded-xl cursor-zoom-in group"
              style={{ height: "160px" }}
            >
              <Image src={item.src} alt={item.title} fill sizes="(max-width: 768px) 33vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-xs mt-4">Click any image to view full size</p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            style={{ background: "rgba(0,0,0,0.92)" }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
              style={{ maxHeight: "85vh" }}
            >
              <img src={selected.src} alt={selected.title} className="w-full h-full object-contain" style={{ maxHeight: "85vh" }} />
              <button onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </motion.div>
            <p className="absolute bottom-4 text-gray-500 text-sm">Click anywhere to close</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

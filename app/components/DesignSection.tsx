"use client";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { CarouselLightbox } from "./CarouselLightbox";

const designWork = [
  { id: 1, title: "Design Work 1", category: "Graphics", src: "/design/design-1.jpg" },
  { id: 2, title: "Design Work 2", category: "Graphics", src: "/design/design-2.jpg" },
  { id: 3, title: "Design Work 3", category: "Graphics", src: "/design/design-3.jpg" },
  { id: 4, title: "Design Work 4", category: "Graphics", src: "/design/design-4.jpg" },
  { id: 5, title: "Design Work 5", category: "Graphics", src: "/design/design-5.jpg" },
  { id: 6, title: "Design Work 6", category: "Graphics", src: "/design/design-6.jpg" },
];

export function DesignSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxImages = useMemo(() => designWork.map(d => ({ src: d.src, caption: d.title })), []);

  return (
    <section id="design">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
          <div className="section-label">Design Work</div>
          <h2 className="section-title mb-2">Graphics & Visual Design</h2>
          <p className="text-gray-400 max-w-xl mb-10">Brand identity systems, social media assets, and UI mockups built with Canva and Figma.</p>
        </motion.div>

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

        <div className="grid grid-cols-3 gap-3">
          {designWork.map((item, i) => (
            <motion.div key={item.id}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              onClick={() => setLightboxIndex(i)}
              className="relative overflow-hidden rounded-xl cursor-zoom-in group"
              style={{ height: "160px" }}>
              <img src={item.src} alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 3h6m0 0v6m0-6L10 14M9 21H3m0 0v-6m0 6l11-11" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-xs mt-4">Click any image · use ← → to browse</p>
      </div>

      <CarouselLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}

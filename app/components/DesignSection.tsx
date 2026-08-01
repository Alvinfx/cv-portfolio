"use client";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { CarouselLightbox } from "./CarouselLightbox";

const designWork = [
  { id: 1, src: "/design/design-1.jpg" },
  { id: 2, src: "/design/design-2.jpg" },
  { id: 3, src: "/design/design-3.jpg" },
  { id: 4, src: "/design/design-4.jpg" },
  { id: 5, src: "/design/design-5.jpg" },
  { id: 6, src: "/design/design-6.jpg" },
];

export function DesignSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxImages = useMemo(() => designWork.map(d => ({ src: d.src })), []);

  return (
    <section id="design">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-8">
          <div className="section-label">Design Work</div>
          <h2 className="section-title mb-2">Graphics & Visual Design</h2>
          <p className="text-sm max-w-xl" style={{ color: "var(--text-muted)" }}>
            Brand identity, social media content, and UI mockups. Canva and Figma.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="card p-5 mb-10 border-l-2"
          style={{ borderLeftColor: "var(--accent)" }}>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📐</span>
            <div>
              <h3 className="font-bold text-base mb-1" style={{ color: "var(--text-primary)" }}>Product / UX Design</h3>
              <p className="text-sm leading-relaxed max-w-2xl mb-4" style={{ color: "var(--text-muted)" }}>
                Design sprints, user interviews, and onboarding flow work at FlexiSAF Edusoft.
                Figma-based design systems built from components. See the ChainPulse and CarLink case studies below.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Figma", "Design Sprints", "User Interviews", "Onboarding Flows", "Component Systems"].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-3">
          {designWork.map((item, i) => (
            <motion.div key={item.id}
              initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              onClick={() => setLightboxIndex(i)}
              className="relative overflow-hidden rounded-lg cursor-zoom-in group"
              style={{ height: "150px" }}>
              <img src={item.src} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108" />
              <div className="absolute inset-0 transition-all bg-black/0 group-hover:bg-black/30 flex items-center justify-center">
                <svg className="opacity-0 group-hover:opacity-100 transition-opacity" width="20" height="20"
                  fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 3h6m0 0v6m0-6L10 14M9 21H3m0 0v-6m0 6l11-11" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-xs mt-3" style={{ color: "#3a3c38" }}>Click any image · use arrow keys to browse</p>
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

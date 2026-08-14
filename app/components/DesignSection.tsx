"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
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
  const lightboxImages = useMemo(() => designWork.map((item) => ({ src: item.src })), []);

  return (
    <section id="design" className="section-shell section-surface">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <p className="eyebrow">Visual design</p>
            <h2 className="section-heading">Graphics and visual work.</h2>
          </div>
          <p className="body-copy max-w-[470px] lg:col-span-5 lg:justify-self-end">
            Brand identity, social media content, and UI mockups created with Canva and Figma.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {designWork.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-[4/3] overflow-hidden border border-[var(--color-line)] bg-[var(--color-paper)]"
              aria-label={`Open visual design piece ${index + 1}`}
            >
              <Image
                src={item.src}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </motion.button>
          ))}
        </div>
        <p className="meta-copy mt-4">Select any image to view the work at full size.</p>
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

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const focusAreas = ["Product Design", "Development", "AI Systems", "Workflow Automation"];

export function AboutSection() {
  return (
    <section id="about" className="section-shell bg-[var(--color-surface)]">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden rounded-[10px] border border-[var(--color-line)] bg-[var(--color-paper)]"
          >
            <Image
              src="/avatar.jpg"
              alt="Chidozirim Ahuakagha"
              fill
              sizes="(max-width: 1024px) 70vw, 320px"
              className="object-cover object-[50%_28%]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="self-center"
          >
            <p className="eyebrow">About</p>
            <h2 className="section-heading max-w-[760px]">From design to development, with a focus on real-world impact.</h2>

            <div className="mt-7 max-w-[760px] space-y-4 text-[15px] leading-[1.75] text-[var(--color-ink-2)]">
              <p>I started my career in graphic design before moving into product design and UI/UX.</p>
              <p>That led me into development, where I began building the products and systems I was designing.</p>
              <p>My work now extends into AI development and workflow automation.</p>
              <p>Today, I work across product design, software development, and automation depending on what the problem requires.</p>
              <p>I am particularly interested in building systems that improve how people interact with products and how businesses handle repetitive or disconnected workflows behind the scenes.</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {focusAreas.map((item) => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

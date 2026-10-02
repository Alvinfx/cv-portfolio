"use client";

import { motion } from "framer-motion";

const steps = [
  ["01", "Understand", "Learn the product, business, users, and existing process."],
  ["02", "Map", "Identify important journeys, workflows, dependencies, and problems."],
  ["03", "Design", "Turn those findings into clear interfaces, flows, and system decisions."],
  ["04", "Build", "Develop the product, integration, or automation."],
  ["05", "Test", "Check the system against real use cases and failure conditions."],
  ["06", "Improve", "Refine the product or workflow based on what is learned."],
];

export function ProcessSection() {
  return (
    <section id="process" className="section-shell bg-[var(--color-surface)]">
      <div className="site-container">
        <div className="mb-10">
          <p className="eyebrow">How I Work</p>
          <h2 className="section-heading">A simple, collaborative process.</h2>
        </div>

        <div className="grid gap-0 border-y border-[var(--color-line)] md:grid-cols-3 xl:grid-cols-6">
          {steps.map(([number, title, text], index) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.035 }}
              className="border-b border-[var(--color-line)] px-4 py-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <p className="text-[10px] font-semibold tracking-[.08em] text-[var(--color-accent)]">{number}</p>
              <h3 className="mt-3 text-[14px] font-semibold">{title}</h3>
              <p className="mt-2 text-[12px] leading-relaxed text-[var(--color-muted)]">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";

const services = [
  {
    title: "Product Design",
    icon: "design" as const,
    text: "I design digital products from early research and structure through wireframes, interface design, prototypes, and reusable design systems.",
  },
  {
    title: "Development",
    icon: "code" as const,
    text: "I build websites and web applications, working across frontend and backend development where the project requires it.",
  },
  {
    title: "Workflow Automation",
    icon: "research" as const,
    text: "I design and build workflows that connect tools, move information between systems, reduce repetitive work, and improve business processes.",
  },
  {
    title: "AI Development",
    icon: "spark" as const,
    text: "I build AI-assisted systems and workflows where AI adds practical value, with controlled and reviewable actions where human approval is important.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-shell">
      <div className="site-container">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="section-heading">What I can help with.</h2>
          </div>
          <p className="max-w-[420px] text-[14px] leading-relaxed text-[var(--color-muted)]">
            Design remains the foundation. Development and automation extend how far I can take a problem.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="surface-card p-6"
            >
              <div className="icon-box"><Icon name={service.icon} size={18} /></div>
              <h3 className="mt-6 text-[18px] font-semibold tracking-[-.02em]">{service.title}</h3>
              <p className="mt-3 text-[13px] leading-[1.65] text-[var(--color-muted)]">{service.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

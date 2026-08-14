"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";

const domains = [
  {
    icon: "spark" as const,
    title: "AI Data Annotation",
    meta: "2+ years",
    desc: "Prompt evaluation, RLHF, text, image, code, and audio/video annotation across multiple modalities.",
  },
  {
    icon: "research" as const,
    title: "Web3 & Crypto",
    meta: "6+ years",
    desc: "Market and technical analysis, on-chain signals, and multi-market research across crypto and forex.",
  },
  {
    icon: "design" as const,
    title: "Graphics Design",
    meta: "5+ years",
    desc: "Brand identity, social content, UI mockups, and visual systems using Canva and Figma.",
  },
  {
    icon: "design" as const,
    title: "Product / UX Design",
    meta: "2+ years",
    desc: "Design sprints, user interviews, onboarding flows, product research, and Figma-based design systems.",
  },
  {
    icon: "video" as const,
    title: "Video & Content",
    meta: "Ongoing",
    desc: "Three YouTube channels covering lifestyle, creative work, and Web3 education content.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell section-surface">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-12 lg:gap-10"
        >
          <div className="min-w-0 lg:col-span-5">
            <p className="eyebrow">About me</p>
            <h2 className="section-heading max-w-[520px] break-words text-[clamp(40px,3.7vw,52px)]">
              A multidisciplinary path, built through practice.
            </h2>
          </div>

          <div className="min-w-0 lg:col-span-4 lg:pt-7">
            <p className="body-copy max-w-[58ch]">
              I started in chemistry, moved into operations, then spent the last several years working across AI annotation, crypto markets, design, and content. The breadth is intentional. Each domain informs the others.
            </p>
          </div>

          <div className="space-y-4 lg:col-span-3 lg:pt-7">
            <div className="flex items-start gap-3">
              <Icon name="location" size={18} className="mt-0.5 text-[var(--color-accent)]" />
              <div>
                <p className="text-xs font-semibold">Based in</p>
                <p className="meta-copy mt-0.5">Abuja, Nigeria</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="briefcase" size={18} className="mt-0.5 text-[var(--color-accent)]" />
              <div>
                <p className="text-xs font-semibold">Work</p>
                <p className="meta-copy mt-0.5">Open to remote work</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="calendar" size={18} className="mt-0.5 text-[var(--color-accent)]" />
              <div>
                <p className="text-xs font-semibold">Remote work</p>
                <p className="meta-copy mt-0.5">Since 2019</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-5">
          {domains.map((domain, index) => (
            <motion.article
              key={domain.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="bg-[var(--color-paper)] p-5"
            >
              <div className="icon-box mb-5">
                <Icon name={domain.icon} size={18} />
              </div>
              <p className="text-[13px] font-semibold text-[var(--color-ink)]">{domain.title}</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[.06em] text-[var(--color-accent)]">{domain.meta}</p>
              <p className="meta-copy mt-3">{domain.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

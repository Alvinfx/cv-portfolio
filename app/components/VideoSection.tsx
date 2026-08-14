"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";

const channels = [
  {
    name: "@mindovercomfort5",
    url: "https://youtube.com/@mindovercomfort5?si=JLK4oZ5p1kbxW5Px",
    desc: "Lifestyle and content creation with AI-assisted video editing.",
  },
  {
    name: "@raregem-05",
    url: "https://youtube.com/@raregem-05?si=B-aI2X_FV_WLkfkI",
    desc: "Creative video work with a focus on storytelling and editing technique.",
  },
  {
    name: "@tokenlogic500",
    url: "https://youtube.com/@tokenlogic500?si=6iv1Kqac4LkbZBAW",
    desc: "Crypto and Web3 education for African audiences, including market analysis and blockchain explainers.",
  },
];

const productionSkills = [
  "AI Video Editing",
  "CapCut",
  "Script Writing",
  "Storyboarding",
  "Faceless Content",
  "Thumbnail Design",
  "Content Strategy",
  "YouTube SEO",
];

export function VideoSection() {
  return (
    <section id="video" className="section-shell section-surface">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <p className="eyebrow">Video work</p>
            <h2 className="section-heading">Three active content channels.</h2>
          </div>
          <p className="body-copy max-w-[460px] lg:col-span-5 lg:justify-self-end">
            The channels cover lifestyle, creative content, and crypto and Web3 education.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {channels.map((channel, index) => (
            <motion.a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="surface-card group flex min-h-[230px] flex-col justify-between p-6 transition-colors hover:border-[#beb7ac]"
            >
              <div className="icon-box"><Icon name="video" size={18} /></div>
              <div className="mt-8">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="card-heading text-[25px]">{channel.name}</h3>
                  <Icon name="external" size={16} className="text-[var(--color-accent)]" />
                </div>
                <p className="meta-copy mt-3 text-[14px]">{channel.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 border-t border-[var(--color-line)] pt-7">
          <p className="text-[11px] font-semibold uppercase tracking-[.08em] text-[var(--color-muted)]">Production skills</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {productionSkills.map((skill) => <span key={skill} className="tag">{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

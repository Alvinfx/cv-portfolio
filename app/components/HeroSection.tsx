"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";

export function HeroSection() {
  return (
    <section id="top" className="overflow-hidden bg-[var(--color-dark)] pt-[72px] text-[var(--color-paper)]">
      <div className="site-container grid min-h-[650px] items-center gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative z-10"
        >
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[.11em] text-[var(--color-accent)]">
            Product Design · Development · Automation
          </p>
          <h1 className="max-w-[650px] text-[clamp(48px,6vw,78px)] font-semibold leading-[.98] tracking-[-.045em]">
            Product Designer &amp;
            <br />
            AI Automation Developer
          </h1>
          <p className="mt-7 max-w-[620px] text-[17px] leading-relaxed text-[rgba(255,255,255,.68)] md:text-[18px]">
            I design digital products, build software, and develop automation systems for real business workflows.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="button-accent">
              View My Work
              <Icon name="arrow-right" size={16} />
            </a>
            <a href="#contact" className="button-ghost-dark">
              Get in Touch
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[12px] text-[rgba(255,255,255,.56)]">
            <span className="flex items-center gap-2">
              <Icon name="location" size={15} />
              Abuja, Nigeria
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              Open to remote product, development, and automation work
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="relative min-h-[430px]"
        >
          <div className="absolute inset-x-0 top-2 overflow-hidden rounded-[12px] border border-[rgba(255,255,255,.14)] bg-[#10191b] shadow-[0_28px_70px_rgba(0,0,0,.28)]">
            <div className="flex h-9 items-center gap-1.5 border-b border-[rgba(255,255,255,.08)] px-4">
              <span className="h-2 w-2 rounded-full bg-[#e6726b]" />
              <span className="h-2 w-2 rounded-full bg-[#e5bf60]" />
              <span className="h-2 w-2 rounded-full bg-[#68b982]" />
              <span className="ml-4 truncate text-[10px] text-[rgba(255,255,255,.42)]">aceoneautosltd.co.uk</span>
            </div>
            <div className="site-preview-frame h-[350px] sm:h-[390px]">
              <iframe
                src="https://aceoneautosltd.co.uk/"
                title="Ace One Autos live website preview"
                loading="eager"
                tabIndex={-1}
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 max-w-[250px] rounded-[10px] border border-[rgba(255,255,255,.14)] bg-[#172326] p-4 shadow-[0_18px_40px_rgba(0,0,0,.26)] sm:-left-5">
            <p className="text-[10px] font-semibold uppercase tracking-[.1em] text-[var(--color-accent)]">Project scope</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-[rgba(255,255,255,.72)]">
              <span>Product design</span>
              <span>Frontend</span>
              <span>Backend</span>
              <span>Deployment</span>
            </div>
          </div>

          <a
            href="https://aceoneautosltd.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-0 flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-2 text-[11px] font-semibold text-[var(--color-dark)] sm:-right-3"
          >
            Ace One Autos · Live
            <Icon name="external" size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

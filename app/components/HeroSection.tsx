"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "./Icon";

const roles = [
  "AI Data Evaluator",
  "Web3 Analyst",
  "Graphics Designer",
  "Product Designer",
  "Video Creator",
];

const proof = [
  { value: "2+", label: "Years in AI evaluation" },
  { value: "6+", label: "Years in Web3 and crypto" },
  { value: "5+", label: "Years in graphics design and product design/management" },
  { value: "2019", label: "Working remotely since" },
];

export function HeroSection() {
  return (
    <section id="top" className="section-no-border pt-28 md:pt-32">
      <div className="site-container pb-16 pt-12 md:pb-20 md:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <p className="eyebrow">Hello, I&apos;m</p>
            <h1 className="display-heading max-w-[720px]">Chidozirim Ahuakagha</h1>

            <div className="mt-7 flex max-w-2xl flex-wrap gap-x-4 gap-y-2 text-[13px] font-medium text-[var(--color-ink-2)]">
              {roles.map((role, index) => (
                <span key={role} className="flex items-center gap-4">
                  {role}
                  {index < roles.length - 1 && (
                    <span className="hidden h-1 w-1 rounded-full bg-[var(--color-taupe)] sm:block" />
                  )}
                </span>
              ))}
            </div>

            <p className="body-lead mt-7">
              I work across AI data evaluation, Web3 market research, product design, and content creation. Based in Abuja, Nigeria. Working remotely since 2019.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="button-primary">
                View my work
                <Icon name="arrow-right" size={16} />
              </a>
              <a href="#contact" className="button-secondary">
                Get in touch
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--color-line)] pt-5">
              <a
                href="https://linkedin.com/in/chidozirim-ahuakagha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                <Icon name="linkedin" size={16} />
                LinkedIn
              </a>
              <a
                href="https://x.com/XpnxvVicinity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                <Icon name="x" size={15} />
                X / Twitter
              </a>
              <span className="flex items-center gap-2 text-[13px] text-[var(--color-muted)]">
                <Icon name="location" size={16} />
                Abuja, Nigeria
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-[500px]">
              <div className="absolute -left-6 top-14 hidden h-28 w-28 bg-[var(--color-taupe-soft)] lg:block" />
              <div className="absolute -bottom-5 -right-5 hidden h-28 w-28 bg-[var(--color-taupe)] lg:block" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[var(--color-surface)]">
                <Image
                  src="/avatar.jpg"
                  alt="Chidozirim Ahuakagha"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 38vw"
                  className="object-cover object-[50%_32%]"
                />
              </div>
              <div className="absolute -bottom-4 left-5 flex items-center gap-3 rounded-[6px] border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-3 shadow-[0_6px_18px_rgba(23,23,21,.06)] sm:left-auto sm:right-5">
                <span className="h-2 w-2 rounded-full bg-[var(--state-success)]" />
                <div>
                  <p className="text-xs font-semibold text-[var(--color-ink)]">Open to remote work</p>
                  <p className="mt-0.5 text-[11px] text-[var(--color-muted)]">AI, Web3, design, and product work</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-[var(--color-olive)] text-[var(--color-canvas)]">
        <div className="site-container grid grid-cols-2 md:grid-cols-4">
          {proof.map((item, index) => (
            <div
              key={item.label}
              className={`px-4 py-7 md:px-7 md:py-8 ${index % 2 !== 0 ? "border-l" : ""} md:border-l ${index === 0 ? "md:border-l-0" : ""}`}
              style={{ borderColor: "rgba(255,255,255,.22)" }}
            >
              <p className="font-[var(--font-display)] text-[34px] font-semibold leading-none md:text-[40px]">{item.value}</p>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-[.08em] text-[rgba(244,240,232,.72)] md:text-[11px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

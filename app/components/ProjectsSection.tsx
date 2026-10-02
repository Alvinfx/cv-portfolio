"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "./Icon";

function LiveSitePreview({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#e9efed]">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        tabIndex={-1}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[200%] w-[200%] origin-top-left scale-50 border-0"
      />
    </div>
  );
}

function EpsilonVisual() {
  return (
    <div className="flex aspect-[16/10] items-center justify-center bg-[#10191b] p-5 text-[var(--color-paper)]">
      <div className="w-full max-w-[540px]">
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 text-center text-[9px] sm:text-[10px]">
          <div className="rounded-[5px] border border-[rgba(255,255,255,.16)] bg-[rgba(255,255,255,.04)] px-2 py-3">User / Input</div>
          <span className="text-[var(--color-accent)]">→</span>
          <div className="rounded-[5px] border border-[var(--color-accent)] bg-[rgba(86,214,207,.08)] px-2 py-3 font-semibold">Manager</div>
          <span className="text-[var(--color-accent)]">→</span>
          <div className="rounded-[5px] border border-[rgba(255,255,255,.16)] bg-[rgba(255,255,255,.04)] px-2 py-3">Agents</div>
        </div>
        <div className="mx-auto my-3 h-5 w-px bg-[rgba(255,255,255,.2)]" />
        <div className="grid grid-cols-3 gap-2 text-center text-[9px] sm:text-[10px]">
          <div className="rounded-[5px] border border-[rgba(255,255,255,.14)] px-2 py-2">n8n Workflows</div>
          <div className="rounded-[5px] border border-[rgba(255,255,255,.14)] px-2 py-2">Tools &amp; APIs</div>
          <div className="rounded-[5px] border border-[rgba(255,255,255,.14)] px-2 py-2">Human Approval</div>
        </div>
      </div>
    </div>
  );
}

const secondaryProjects = [
  {
    title: "PromptVault",
    category: "Software Development · Web3",
    description: "A prompt management application built with React and TypeScript, with Irys Network integration for wallet-based prompt storage.",
    href: "/work/promptvault",
    live: "https://promptvault-ai.vercel.app",
    preview: "https://promptvault-ai.vercel.app",
  },
  {
    title: "ChainPulse",
    category: "Product Design · Design Systems",
    description: "A multi-chain crypto portfolio and on-chain activity tracking product.",
    href: "/work/chainpulse",
    image: "/chainpulse/dashboard.png",
  },
  {
    title: "CarLink",
    category: "Product Design · Marketplace UX",
    description: "A swipe-based car marketplace designed for the Nigerian market.",
    href: "/work/carlink",
    image: "/carlink/home-purchase.png",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="site-container">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="section-heading">Products, software, and automation systems.</h2>
          </div>
          <p className="max-w-[430px] text-[14px] leading-relaxed text-[var(--color-muted)]">
            A focused selection of current work, with older verified projects still available through the portfolio assistant.
          </p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[10px] border border-[var(--color-line)] bg-[var(--color-dark)] text-[var(--color-paper)]"
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col justify-between p-7 md:p-9">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[rgba(86,214,207,.28)] bg-[rgba(86,214,207,.08)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[.08em] text-[var(--color-accent)]">Featured Project</span>
                  <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-[10px] font-semibold text-[var(--color-dark)]">Live</span>
                </div>
                <h3 className="mt-6 text-[34px] font-semibold tracking-[-.035em] md:text-[42px]">Ace One Autos Ltd</h3>
                <p className="mt-2 text-[12px] text-[rgba(255,255,255,.5)]">Product Design · Full-Stack Development · Deployment</p>
                <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-[rgba(255,255,255,.68)]">
                  A complete website redesign and development project for a UK automotive business.
                </p>
                <p className="mt-3 max-w-[580px] text-[13px] leading-relaxed text-[rgba(255,255,255,.52)]">
                  I handled the project from UI/UX design through frontend and backend development, then deployed the finished website to production.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/work/ace-one-autos" className="button-accent">
                  View Case Study
                  <Icon name="arrow-right" size={15} />
                </Link>
                <a href="https://aceoneautosltd.co.uk" target="_blank" rel="noopener noreferrer" className="button-ghost-dark">
                  View Live Site
                  <Icon name="external" size={14} />
                </a>
              </div>
            </div>
            <div className="border-t border-[rgba(255,255,255,.1)] lg:border-l lg:border-t-0">
              <LiveSitePreview src="https://aceoneautosltd.co.uk/" title="Ace One Autos live website" />
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 overflow-hidden rounded-[10px] border border-[var(--color-line)] bg-[var(--color-surface)]"
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-7 md:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="tag">AI Development · Workflow Automation</span>
                <span className="rounded-full border border-[#b9c8c5] px-3 py-1 text-[10px] font-semibold text-[var(--color-ink-2)]">In development</span>
              </div>
              <h3 className="mt-5 text-[30px] font-semibold tracking-[-.03em]">Epsilon AI</h3>
              <p className="mt-4 max-w-[560px] text-[14px] leading-relaxed text-[var(--color-ink-2)]">
                A personal AI and automation system built to coordinate specialised agents for information monitoring, opportunity discovery, communication prioritisation, and recurring workflows.
              </p>
              <p className="mt-4 text-[12px] text-[var(--color-muted)]">AI Development · Automation Architecture · API Development</p>
              <Link href="/work/epsilon-ai" className="link-arrow mt-7">
                View Project
                <Icon name="arrow-right" size={14} />
              </Link>
            </div>
            <div className="border-t border-[var(--color-line)] lg:border-l lg:border-t-0">
              <EpsilonVisual />
            </div>
          </div>
        </motion.article>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {secondaryProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="project-card overflow-hidden rounded-[10px] border border-[var(--color-line)] bg-[var(--color-surface)]"
            >
              {project.preview ? (
                <LiveSitePreview src={project.preview} title={project.title + " live preview"} />
              ) : (
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-paper)]">
                  <Image
                    src={project.image!}
                    alt={project.title + " project preview"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className={project.title === "CarLink" ? "object-contain p-5" : "object-cover object-top"}
                  />
                </div>
              )}
              <div className="p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-[var(--color-accent-deep)]">{project.category}</p>
                <h3 className="mt-2 text-[22px] font-semibold tracking-[-.025em]">{project.title}</h3>
                <p className="mt-3 min-h-[64px] text-[13px] leading-relaxed text-[var(--color-muted)]">{project.description}</p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <Link href={project.href} className="link-arrow">
                    View Project
                    <Icon name="arrow-right" size={14} />
                  </Link>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[12px] font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                      Live site
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 border-t border-[var(--color-line)] pt-6">
          <p className="text-[12px] text-[var(--color-muted)]">
            Additional verified work, including SingCity and content projects, remains available through the Portfolio Assistant.
          </p>
        </div>
      </div>
    </section>
  );
}

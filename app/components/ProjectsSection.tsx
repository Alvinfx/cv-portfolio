"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "./Icon";

const projects = [
  {
    title: "ChainPulse",
    discipline: "Product Design / Figma",
    desc: "Multi-chain crypto portfolio and on-chain activity tracker designed from research through high-fidelity UI and a reusable Night/Day design system.",
    status: "Case study",
    image: "/chainpulse/dashboard.png",
    href: "#chainpulse",
  },
  {
    title: "CarLink",
    discipline: "Mobile Product Design / Figma",
    desc: "Swipe-based car marketplace for Nigeria with purchase and rental discovery, seller tools, and a built-in VIN checker.",
    status: "Case study",
    image: "/carlink/home-purchase.png",
    href: "#carlink",
  },
  {
    title: "SingCity",
    discipline: "Web3 / React",
    desc: "Live karaoke website built on blockchain with wallet integration and interactive audio and music UX.",
    status: "Live",
    href: "https://singcity.vercel.app/",
    tone: "dark",
  },
  {
    title: "PromptVault",
    discipline: "React / TypeScript / Irys",
    desc: "Live prompt management application combining AI tooling, blockchain integration, and modern frontend architecture.",
    status: "Live",
    href: "https://promptvault-ai.vercel.app",
    github: "https://github.com/Alvinfx/PromptVault",
    tone: "olive",
  },
  {
    title: "TokenLogic",
    discipline: "Content / Web3 Education",
    desc: "Faceless YouTube channel for crypto and Web3 education. Built the brand, scripts, Canva assets, and CapCut editing workflow.",
    status: "Active",
    href: "https://youtube.com/@tokenlogic500?si=6iv1Kqac4LkbZBAW",
    tone: "taupe",
  },
  {
    title: "CodeXero v2",
    discipline: "Video / Web3 Campaign",
    desc: "Video content for Cluster Protocol's CodeXero v2 launch, including the voiceover script and full campaign storyboard.",
    status: "Delivered",
    tone: "accent",
  },
];

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  if (project.image) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-paper)]">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`project-image ${project.title === "CarLink" ? "object-contain p-5" : "object-cover object-top"}`}
        />
      </div>
    );
  }

  const toneStyle =
    project.tone === "dark"
      ? { background: "var(--color-dark)", color: "var(--color-canvas)" }
      : project.tone === "olive"
        ? { background: "var(--color-olive-deep)", color: "var(--color-canvas)" }
        : project.tone === "accent"
          ? { background: "var(--color-accent-soft)", color: "var(--color-ink)" }
          : { background: "var(--color-taupe-soft)", color: "var(--color-ink)" };

  return (
    <div className="flex aspect-[4/3] items-end border-b border-[var(--color-line)] p-6" style={toneStyle}>
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[.09em] opacity-70">{project.discipline}</p>
        <p className="mt-3 font-[var(--font-display)] text-[42px] font-bold leading-[.95] tracking-[-.025em] sm:text-[48px]">
          {project.title}
        </p>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-heading">Projects across design, Web3, and content.</h2>
          </div>
          <p className="body-copy max-w-[430px] md:text-right">
            A selection of current portfolio work, from product case studies to live applications and content projects.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="project-card surface-card overflow-hidden"
            >
              <ProjectVisual project={project} />
              <div className="flex min-h-[250px] flex-col p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[.08em] text-[var(--color-accent)]">{project.discipline}</p>
                    <h3 className="card-heading mt-2">{project.title}</h3>
                  </div>
                  <span className="tag shrink-0">{project.status}</span>
                </div>
                <p className="meta-copy mt-4 flex-1 text-[14px]">{project.desc}</p>
                <div className="mt-5 flex flex-wrap items-center gap-5">
                  {project.href && (
                    <a
                      href={project.href}
                      target={project.href.startsWith("http") ? "_blank" : undefined}
                      rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="link-arrow"
                      aria-label={`${project.href.startsWith("http") ? "View" : "Open"} ${project.title}`}
                    >
                      {project.href.startsWith("http") ? "View project" : "View case study"}
                      <Icon name={project.href.startsWith("http") ? "external" : "arrow-right"} size={15} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[13px] font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
                    >
                      <Icon name="github" size={15} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

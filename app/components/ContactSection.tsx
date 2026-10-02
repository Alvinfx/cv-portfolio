"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";

const links = [
  { label: "Email", value: "chidozirim.ca@gmail.com", href: "mailto:chidozirim.ca@gmail.com", icon: "mail" as const },
  { label: "LinkedIn", value: "linkedin.com/in/chidozirim-ahuakagha", href: "https://linkedin.com/in/chidozirim-ahuakagha", icon: "linkedin" as const },
  { label: "GitHub", value: "github.com/Alvinfx", href: "https://github.com/Alvinfx", icon: "github" as const },
  { label: "X", value: "@XpnxvVicinity", href: "https://x.com/XpnxvVicinity", icon: "x" as const },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-shell pb-0">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[12px] bg-[var(--color-dark)] text-[var(--color-paper)]"
        >
          <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[1.2fr_.8fr] lg:p-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.1em] text-[var(--color-accent)]">Let&apos;s build something useful</p>
              <h2 className="mt-4 max-w-[720px] text-[clamp(36px,5vw,58px)] font-semibold leading-[1.02] tracking-[-.04em]">
                Have something you want to build or automate?
              </h2>
              <p className="mt-6 max-w-[680px] text-[14px] leading-[1.75] text-[rgba(255,255,255,.62)]">
                I am currently open to product design, development, and workflow automation projects.
              </p>
              <p className="mt-3 max-w-[720px] text-[14px] leading-[1.75] text-[rgba(255,255,255,.62)]">
                If you have a product that needs to be designed or built, or a business process that involves too much repetitive manual work, feel free to reach out.
              </p>
              <a href="mailto:chidozirim.ca@gmail.com" className="button-accent mt-8">
                Get in Touch
                <Icon name="arrow-right" size={15} />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {links.map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex items-start gap-3 border-b border-[rgba(255,255,255,.1)] pb-4 last:border-0">
                  <Icon name={item.icon} size={17} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[.08em] text-[rgba(255,255,255,.38)]">{item.label}</p>
                    <p className="mt-1 break-all text-[12px] font-medium text-[var(--color-paper)] group-hover:underline">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <footer className="flex flex-col justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-[12px] font-semibold">Chidozirim Ahuakagha</p>
            <p className="mt-1 text-[10px] text-[var(--color-muted)]">Product Designer &amp; AI Automation Developer</p>
          </div>
          <nav className="flex flex-wrap gap-5 text-[11px] text-[var(--color-muted)]" aria-label="Footer navigation">
            <a href="#projects" className="hover:text-[var(--color-ink)]">Work</a>
            <a href="#about" className="hover:text-[var(--color-ink)]">About</a>
            <a href="#services" className="hover:text-[var(--color-ink)]">Services</a>
            <a href="#contact" className="hover:text-[var(--color-ink)]">Contact</a>
          </nav>
        </footer>
      </div>
    </section>
  );
}

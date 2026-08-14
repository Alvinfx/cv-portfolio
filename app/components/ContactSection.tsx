"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";

const contactItems = [
  { label: "Email", value: "chidozirim.ca@gmail.com", href: "mailto:chidozirim.ca@gmail.com", icon: "mail" as const },
  { label: "Telegram", value: "t.me/xvVicinity", href: "https://t.me/xvVicinity", icon: "telegram" as const },
  { label: "Location", value: "Abuja, Nigeria", icon: "location" as const },
];

const socialItems = [
  { label: "LinkedIn", value: "linkedin.com/in/chidozirim-ahuakagha", href: "https://linkedin.com/in/chidozirim-ahuakagha", icon: "linkedin" as const },
  { label: "GitHub", value: "github.com/Alvinfx", href: "https://github.com/Alvinfx", icon: "github" as const },
  { label: "X / Twitter", value: "@XpnxvVicinity", href: "https://x.com/XpnxvVicinity", icon: "x" as const },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-shell">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="overflow-hidden rounded-[6px] bg-[var(--color-dark)] text-[var(--color-canvas)]"
        >
          <div className="grid lg:grid-cols-12">
            <div className="border-b border-[rgba(255,255,255,.14)] p-7 md:p-10 lg:col-span-5 lg:border-b-0 lg:border-r">
              <p className="text-[11px] font-semibold uppercase tracking-[.09em] text-[var(--color-accent-soft)]">Contact</p>
              <h2 className="mt-4 max-w-[450px] font-[var(--font-display)] text-[48px] font-semibold leading-[.95] tracking-[-.025em] md:text-[62px]">
                Let&apos;s work together.
              </h2>
              <p className="mt-6 max-w-[460px] text-[15px] leading-relaxed text-[rgba(244,240,232,.65)]">
                Open to AI annotation projects, Web3 research, design work, and remote roles.
              </p>
              <a href="mailto:chidozirim.ca@gmail.com" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-[4px] bg-[var(--color-canvas)] px-5 text-[13px] font-semibold text-[var(--color-dark)]">
                Send an email
                <Icon name="arrow-right" size={16} />
              </a>
            </div>

            <div className="p-7 md:p-10 lg:col-span-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[.08em] text-[rgba(244,240,232,.45)]">Direct contact</p>
                  <div className="mt-5 space-y-5">
                    {contactItems.map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <Icon name={item.icon} size={18} className="mt-0.5 shrink-0 text-[var(--color-accent-soft)]" />
                        <div>
                          <p className="text-[11px] text-[rgba(244,240,232,.45)]">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-1 block text-[13px] font-medium text-[var(--color-canvas)] hover:underline">
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-1 text-[13px] font-medium text-[var(--color-canvas)]">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[.08em] text-[rgba(244,240,232,.45)]">Connect</p>
                  <div className="mt-5 space-y-5">
                    {socialItems.map((item) => (
                      <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                        <Icon name={item.icon} size={18} className="mt-0.5 shrink-0 text-[var(--color-accent-soft)]" />
                        <div>
                          <p className="text-[11px] text-[rgba(244,240,232,.45)]">{item.label}</p>
                          <p className="mt-1 text-[13px] font-medium text-[var(--color-canvas)] group-hover:underline">{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <footer className="flex flex-col justify-between gap-5 border-t border-[var(--color-line)] pb-1 pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-[var(--color-ink)] font-[var(--font-display)] text-[21px]">CA</span>
            <div>
              <p className="text-[12px] font-semibold">Chidozirim Ahuakagha</p>
              <p className="mt-0.5 text-[10px] text-[var(--color-muted)]">© 2026 Chidozirim Ahuakagha</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 text-[11px] text-[var(--color-muted)]">
            <a href="#projects" className="hover:text-[var(--color-ink)]">Work</a>
            <a href="#about" className="hover:text-[var(--color-ink)]">About</a>
            <a href="#skills" className="hover:text-[var(--color-ink)]">Skills</a>
            <a href="#experience" className="hover:text-[var(--color-ink)]">Experience</a>
          </div>
        </footer>
      </div>
    </section>
  );
}

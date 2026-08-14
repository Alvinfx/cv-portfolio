/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CarouselLightbox } from "./CarouselLightbox";
import { Icon } from "./Icon";

const screens = [
  { src: "/chainpulse/dashboard.png", caption: "Dashboard, Day and Night themes" },
  { src: "/chainpulse/alerts.png", caption: "Alerts, configurable rule management" },
  { src: "/chainpulse/add-wallet.png", caption: "Add Wallet, 3-step onboarding modal" },
  { src: "/chainpulse/select-chain.png", caption: "Select Chain, multi-chain selector" },
];

const skills = [
  "UX Research",
  "Competitive Analysis",
  "Information Architecture",
  "Wireframing",
  "Design Systems",
  "High-Fidelity UI",
  "Figma Variables",
  "Dark/Light Theming",
];

const process = [
  "Market Research",
  "Competitive Analysis",
  "User Segments",
  "Problem Statement",
  "Information Architecture",
  "Wireframes",
  "High-Fidelity UI",
  "Design System",
];

export function ChainPulseSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [videoExpanded, setVideoExpanded] = useState(false);
  const lightboxImages = useMemo(() => screens.map((screen) => ({ src: screen.src, caption: screen.caption })), []);

  return (
    <section id="chainpulse" className="section-shell section-surface">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-12 lg:gap-12"
        >
          <div className="lg:col-span-5">
            <p className="eyebrow">UI/UX case study</p>
            <h2 className="section-heading">ChainPulse</h2>
            <p className="body-copy mt-6">
              A multi-chain crypto portfolio and on-chain activity tracker designed end-to-end, from market research through high-fidelity UI. I conducted competitive analysis of Zerion, Zapper, and DeBank, defined user segments and problem statements, built the information architecture, and designed four core flows in a token-based Night/Day design system.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {screens.map((screen, index) => (
                <button
                  key={screen.src}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="group relative aspect-[4/3] overflow-hidden border border-[var(--color-line)] bg-[var(--color-paper)] text-left"
                  aria-label={`Open ${screen.caption}`}
                >
                  <Image
                    src={screen.src}
                    alt={screen.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover object-top transition-transform duration-200 group-hover:scale-[1.02]"
                  />
                </button>
              ))}
            </div>
            <p className="meta-copy mt-3">Select any screen to view it at full size.</p>
          </div>
        </motion.div>

        <div className="mt-14 border border-[var(--color-line)] bg-[var(--color-paper)]">
          <div className="grid lg:grid-cols-[1fr_320px]">
            <div className="p-6 md:p-8">
              <p className="eyebrow">Process</p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {process.map((step, index) => (
                  <div key={step} className="border-t border-[var(--color-line)] pt-4">
                    <span className="text-[11px] font-semibold text-[var(--color-accent)]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-2 text-[13px] font-semibold leading-snug text-[var(--color-ink)]">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setVideoExpanded(true)}
              className="group relative min-h-[230px] overflow-hidden border-t border-[var(--color-line)] text-left lg:border-l lg:border-t-0"
              aria-label="Open ChainPulse prototype walkthrough"
            >
              <img
                src="https://img.youtube.com/vi/c6xiNtb6VbM/mqdefault.jpg"
                alt="ChainPulse prototype walkthrough"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(26,27,24,.58)]" />
              <div className="relative flex h-full min-h-[230px] flex-col justify-end p-6 text-[var(--color-canvas)]">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,.35)] bg-[rgba(244,240,232,.12)] transition-transform group-hover:scale-105">
                  <Icon name="video" size={18} />
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-[.08em] text-[var(--color-accent-soft)]">Prototype walkthrough</p>
                <p className="mt-2 font-[var(--font-display)] text-[28px] font-semibold leading-none">See the interaction flow</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <CarouselLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />

      <AnimatePresence>
        {videoExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoExpanded(false)}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(26,27,24,.96)] p-4 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label="ChainPulse prototype walkthrough"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="w-full max-w-5xl overflow-hidden rounded-[6px] bg-black"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/c6xiNtb6VbM?autoplay=1"
                  title="ChainPulse Prototype Walkthrough"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
            <button
              type="button"
              onClick={() => setVideoExpanded(false)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-[rgba(255,255,255,.2)] text-[var(--color-canvas)]"
              aria-label="Close video"
            >
              <Icon name="close" size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

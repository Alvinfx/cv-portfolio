"use client";

import Image from "next/image";
import { useMemo, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CarouselLightbox } from "./CarouselLightbox";
import { Icon } from "./Icon";

const screens = [
  { src: "/carlink/splash.png" },
  { src: "/carlink/welcome.png" },
  { src: "/carlink/signup.png" },
  { src: "/carlink/verification.png" },
  { src: "/carlink/preferences.png" },
  { src: "/carlink/home-purchase.png" },
  { src: "/carlink/home-rent.png" },
  { src: "/carlink/filters.png" },
  { src: "/carlink/car-detail.png" },
  { src: "/carlink/contact-seller.png" },
  { src: "/carlink/vin-entry.png" },
  { src: "/carlink/vin-free-result.png" },
  { src: "/carlink/vin-full-report.png" },
  { src: "/carlink/garage.png" },
  { src: "/carlink/messages.png" },
  { src: "/carlink/notifications.png" },
  { src: "/carlink/notification-settings.png" },
  { src: "/carlink/create-listing-details.png" },
  { src: "/carlink/create-listing-photos.png" },
  { src: "/carlink/create-listing-price.png" },
  { src: "/carlink/create-listing-publish.png" },
  { src: "/carlink/my-listings.png" },
  { src: "/carlink/edit-listing.png" },
  { src: "/carlink/settings.png" },
  { src: "/carlink/account-details.png" },
  { src: "/carlink/pro-upgrade.png" },
  { src: "/carlink/help-support.png" },
];

const perPageDesktop = 10;
const perPageMobile = 4;

const processSteps = [
  "Product Brief",
  "Market Research",
  "Competitive Analysis",
  "User Personas",
  "Problem Statement",
  "Information Architecture",
  "Wireframes",
  "Design System",
  "High-Fidelity UI",
  "Prototype",
];

const skills = [
  "UX Research",
  "Competitive Analysis",
  "User Personas",
  "Information Architecture",
  "Wireframing",
  "Design Systems",
  "High-Fidelity UI",
  "Mobile UI",
  "Trust & Safety UX",
  "Figma Prototyping",
];

const features = [
  { icon: "research" as const, label: "Buy & Rent", desc: "Dual discovery modes" },
  { icon: "check" as const, label: "VIN Checker", desc: "Free specs and paid history" },
  { icon: "briefcase" as const, label: "Trust Layer", desc: "Verified seller badges" },
  { icon: "chat" as const, label: "In-App Chat", desc: "With WhatsApp handoff" },
];

export function CarLinkSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const isMobile = useSyncExternalStore(
    (onStoreChange) => {
      const media = window.matchMedia("(max-width: 767px)");
      media.addEventListener("change", onStoreChange);
      return () => media.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(max-width: 767px)").matches,
    () => false,
  );

  const perPage = isMobile ? perPageMobile : perPageDesktop;
  const totalPages = Math.ceil(screens.length / perPage);
  const safePage = Math.min(page, totalPages - 1);
  const visibleScreens = screens.slice(safePage * perPage, safePage * perPage + perPage);
  const lightboxImages = useMemo(() => screens.map((screen) => ({ src: screen.src })), []);

  const openLightbox = (indexInPage: number) => {
    setLightboxIndex(safePage * perPage + indexInPage);
  };

  return (
    <section id="carlink" className="section-shell">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-12 lg:gap-12"
        >
          <div className="lg:col-span-7">
            <p className="eyebrow">UI/UX case study</p>
            <h2 className="section-heading">CarLink</h2>
            <p className="body-copy mt-6 max-w-[68ch]">
              A swipe-based car marketplace for Nigeria covering purchase and rental discovery, seller listing tools, and a built-in VIN checker for trust and fraud prevention. The design process covered competitive analysis of Jiji, Cars45, Autochek, and AutoSwiper, user personas, information architecture, wireframes, and a complete high-fidelity design system.
            </p>
          </div>
          <div className="flex items-end lg:col-span-5 lg:justify-end">
            <a
              href="https://www.figma.com/proto/cQqefR87mbF5OuKWFlKeKm/Car-Link?node-id=22-2&p=f&t=K8bkF06Dk9uHHUdP-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=111%3A343"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              View prototype
              <Icon name="external" size={16} />
            </a>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.label} className="surface-card p-5">
              <div className="icon-box mb-4"><Icon name={feature.icon} size={18} /></div>
              <p className="text-[13px] font-semibold">{feature.label}</p>
              <p className="meta-copy mt-1">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-[6px] bg-[var(--color-dark)] text-[var(--color-canvas)]">
          <div className="border-b border-[rgba(255,255,255,.14)] px-5 py-5 md:px-7">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[.09em] text-[var(--color-accent-soft)]">Interface gallery</p>
                <p className="mt-2 font-[var(--font-display)] text-[32px] font-semibold leading-none">27 designed screens</p>
              </div>
              <p className="text-[12px] text-[rgba(244,240,232,.58)]">Select a screen to open the full view.</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 md:p-6">
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(0, current - 1))}
              disabled={safePage === 0}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(255,255,255,.18)] text-[var(--color-canvas)] transition-opacity disabled:opacity-25"
              aria-label="Previous CarLink screens"
            >
              <Icon name="chevron-left" size={18} />
            </button>

            <div className="grid flex-1 grid-cols-4 gap-2 md:grid-cols-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${safePage}-${perPage}`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.18 }}
                  className="contents"
                >
                  {visibleScreens.map((screen, index) => (
                    <button
                      key={screen.src}
                      type="button"
                      onClick={() => openLightbox(index)}
                      className="group relative aspect-[9/16] overflow-hidden rounded-[4px] bg-white"
                      aria-label={`Open CarLink screen ${safePage * perPage + index + 1}`}
                    >
                      <Image
                        src={screen.src}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 22vw, 14vw"
                        className="object-cover object-top transition-transform duration-200 group-hover:scale-[1.02]"
                      />
                    </button>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={() => setPage((current) => Math.min(totalPages - 1, current + 1))}
              disabled={safePage === totalPages - 1}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(255,255,255,.18)] text-[var(--color-canvas)] transition-opacity disabled:opacity-25"
              aria-label="Next CarLink screens"
            >
              <Icon name="chevron-right" size={18} />
            </button>
          </div>

          <div className="flex items-center justify-between border-t border-[rgba(255,255,255,.14)] px-5 py-4 md:px-7">
            <p className="text-[11px] text-[rgba(244,240,232,.56)]">
              {safePage * perPage + 1} to {Math.min(safePage * perPage + perPage, screens.length)} of {screens.length}
            </p>
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setPage(index)}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: index === safePage ? 18 : 6,
                    background: index === safePage ? "var(--color-accent-soft)" : "rgba(255,255,255,.2)",
                  }}
                  aria-label={`Show CarLink screen page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              label: "Problem",
              text: "Nigeria's used car market is fragmented across Jiji, Cars45, Autochek, Facebook Marketplace, and WhatsApp groups, with no unified low-friction discovery layer and built-in trust signals.",
            },
            {
              label: "Solution",
              text: "Swipe-based discovery combining existing platforms with direct seller uploads, dual Purchase/Rent modes, a VIN checker, and in-app chat with WhatsApp fallback.",
            },
            {
              label: "Market",
              text: "Primary users are Nigerian car buyers who want fast, low-effort discovery. Individual sellers are the secondary group, with dealers and fleet operators deferred to Phase 2.",
            },
          ].map((item) => (
            <div key={item.label} className="surface-card p-6">
              <p className="eyebrow mb-3">{item.label}</p>
              <p className="body-copy text-[14px]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-[11px] font-semibold uppercase tracking-[.08em] text-[var(--color-muted)]">Skills applied</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => <span key={skill} className="tag">{skill}</span>)}
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--color-line)] pt-7">
          <p className="text-[11px] font-semibold uppercase tracking-[.08em] text-[var(--color-muted)]">Design process</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step} className="border-t border-[var(--color-line)] pt-4">
                <span className="text-[11px] font-semibold text-[var(--color-accent)]">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-[13px] font-semibold leading-snug">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CarouselLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}

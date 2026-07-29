"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CarouselLightbox } from "./CarouselLightbox";

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

const PER_PAGE_DESKTOP = 10;
const PER_PAGE_MOBILE = 4;

const processSteps = ["Product Brief", "Market Research", "Competitive Analysis", "User Personas", "Problem Statement", "IA", "Wireframes", "Design System", "Hi-Fi UI", "Prototype"];
const skills = ["UX Research", "Competitive Analysis", "User Personas", "Information Architecture", "Wireframing", "Design Systems", "High-Fidelity UI", "Mobile UI", "Trust & Safety UX", "Figma Prototyping"];

export function CarLinkSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  // Detect mobile via window width — SSR safe with useState
  const [isMobile, setIsMobile] = useState(false);
  if (typeof window !== "undefined") {
    const mobile = window.innerWidth < 768;
    if (mobile !== isMobile) setIsMobile(mobile);
  }

  const perPage = isMobile ? PER_PAGE_MOBILE : PER_PAGE_DESKTOP;
  const totalPages = Math.ceil(screens.length / perPage);
  const visibleScreens = screens.slice(page * perPage, page * perPage + perPage);
  const lightboxImages = useMemo(() => screens.map(s => ({ src: s.src })), []);

  // When opening from grid, offset by current page
  const openLightbox = (indexInPage: number) => {
    setLightboxIndex(page * perPage + indexInPage);
  };

  return (
    <section id="carlink" className="py-20 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="section-label">UI/UX Case Study</div>
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
            <h2 className="section-title">CarLink</h2>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm">Mobile App · Figma</span>
              <a href="https://www.figma.com/proto/cQqefR87mbF5OuKWFlKeKm/Car-Link?node-id=22-2&p=f&t=K8bkF06Dk9uHHUdP-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=111%3A343"
                target="_blank" rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-opacity hover:opacity-80"
                style={{ background: "var(--accent)", color: "#fff" }}>
                <svg width="11" height="11" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                View Prototype
              </a>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
            A swipe-based car marketplace for Nigeria — covering purchase and rental discovery, seller listing tools,
            and a built-in VIN checker for trust and fraud prevention. Designed end-to-end from product brief through
            competitive analysis of Jiji, Cars45, Autochek, and AutoSwiper, user personas, information architecture,
            wireframes, and a complete hi-fi design system.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {[
            { icon: "🚗", label: "Buy & Rent", desc: "Dual discovery modes" },
            { icon: "🔍", label: "VIN Checker", desc: "Free specs + paid history" },
            { icon: "✅", label: "Trust Layer", desc: "Verified seller badges" },
            { icon: "💬", label: "In-App Chat", desc: "Or handoff to WhatsApp" },
          ].map(f => (
            <div key={f.label} className="card p-4">
              <div className="text-xl mb-2">{f.icon}</div>
              <p className="text-white text-xs font-semibold mb-0.5">{f.label}</p>
              <p className="text-gray-500 text-xs">{f.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap items-center gap-1.5 mb-10">
          {processSteps.map((step, i) => (
            <div key={step} className="flex items-center gap-1.5">
              <span className="text-xs px-2.5 py-1 rounded-full"
                style={{ background: "rgba(124,110,247,0.1)", color: "var(--accent-light)", border: "1px solid rgba(124,110,247,0.15)" }}>
                {step}
              </span>
              {i < processSteps.length - 1 && <span className="text-gray-700 text-xs">›</span>}
            </div>
          ))}
        </motion.div>

        {/* Paginated screen grid */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card overflow-hidden mb-8">

          {/* Grid with side arrows */}
          <div className="relative flex items-center gap-2 p-4" style={{ background: "#0a0a0f" }}>

            {/* Prev arrow */}
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all disabled:opacity-20"
              style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}>
              <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Screen thumbnails */}
            <div className="flex-1 grid grid-cols-4 md:grid-cols-5 gap-2">
              <AnimatePresence mode="wait">
                <motion.div key={page}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="contents">
                  {visibleScreens.map((screen, i) => (
                    <div key={screen.src}
                      className="relative overflow-hidden rounded-xl cursor-zoom-in group"
                      style={{ aspectRatio: "9/16", background: "#fff" }}
                      onClick={() => openLightbox(i)}>
                      <img src={screen.src} alt=""
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all" />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next arrow */}
            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all disabled:opacity-20"
              style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}>
              <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Footer */}
          <div className="px-4 py-2.5 border-t border-white/5 flex items-center justify-between">
            <p className="text-gray-600 text-xs">
              {page * perPage + 1}–{Math.min(page * perPage + perPage, screens.length)} of {screens.length} screens · click to expand
            </p>
            {/* Page dots */}
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} onClick={() => setPage(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: i === page ? "16px" : "5px",
                    height: "5px",
                    background: i === page ? "var(--accent-light)" : "rgba(255,255,255,0.15)",
                  }} />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Problem", text: "Nigeria's used car market is fragmented across Jiji, Cars45, Autochek, Facebook Marketplace, and WhatsApp groups — no unified, low-friction discovery layer with built-in trust signals." },
            { label: "Solution", text: "Swipe-based discovery aggregating existing platforms plus direct seller uploads. Dual Purchase/Rent modes. VIN checker as a trust and monetisation layer. In-app chat with WhatsApp fallback." },
            { label: "Market", text: "Primary: Nigerian car buyers wanting fast, low-effort discovery. Secondary: Individual sellers. Dealers and fleet operators deferred to Phase 2." },
          ].map(r => (
            <div key={r.label} className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--accent-light)" }}>{r.label}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap gap-1.5">
          {skills.map(s => <span key={s} className="tag" style={{ fontSize: "11px", padding: "3px 10px" }}>{s}</span>)}
        </motion.div>
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

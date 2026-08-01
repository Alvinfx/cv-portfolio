"use client";
import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: { src: string; caption?: string }[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function CarouselLightbox({ images, currentIndex, onClose, onNavigate }: Props) {
  const isOpen = currentIndex !== null;
  const total = images.length;

  const prev = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate(currentIndex === 0 ? total - 1 : currentIndex - 1);
  }, [currentIndex, total, onNavigate]);

  const next = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate(currentIndex === total - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, total, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, prev, next, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const current = currentIndex !== null ? images[currentIndex] : null;

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: "rgba(36,36,35,0.97)" }}
          onClick={onClose}>

          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 z-10">
            <span className="text-xs" style={{ color: "#3a3c38" }}>{currentIndex! + 1} / {total}</span>
            <button onClick={onClose}
              className="w-8 h-8 rounded flex items-center justify-center transition-all hover:opacity-70"
              style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}>
              <svg width="14" height="14" fill="none" stroke="var(--text-muted)" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {total > 1 && (
            <button onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 md:left-5 z-10 w-10 h-10 rounded flex items-center justify-center transition-all hover:opacity-80"
              style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}>
              <svg width="16" height="16" fill="none" stroke="var(--text-primary)" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          <AnimatePresence mode="wait">
            <motion.div key={currentIndex}
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.16 }}
              className="flex flex-col items-center gap-4 px-16"
              onClick={(e) => e.stopPropagation()}>
              <img src={current.src} alt={current.caption || ""}
                className="rounded-xl object-contain"
                style={{ maxHeight: "78vh", maxWidth: "min(420px, 82vw)" }} />
              {current.caption && (
                <p className="text-sm text-center max-w-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {current.caption}
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {total > 1 && (
            <button onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 md:right-5 z-10 w-10 h-10 rounded flex items-center justify-center transition-all hover:opacity-80"
              style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}>
              <svg width="16" height="16" fill="none" stroke="var(--text-primary)" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {total > 1 && (
            <div className="absolute bottom-6 flex gap-1.5">
              {images.map((_, i) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); onNavigate(i); }}
                  className="rounded-full transition-all"
                  style={{
                    width: i === currentIndex ? "18px" : "5px",
                    height: "5px",
                    background: i === currentIndex ? "var(--accent)" : "rgba(207,219,213,0.2)",
                  }} />
              ))}
            </div>
          )}

          <p className="absolute bottom-14 text-xs hidden md:block" style={{ color: "#3a3c38" }}>
            arrow keys to navigate · Esc to close
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

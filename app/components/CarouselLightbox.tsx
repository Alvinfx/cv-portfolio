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

  // Keyboard navigation
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

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const current = currentIndex !== null ? images[currentIndex] : null;

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: "rgba(0,0,0,0.96)" }}
          onClick={onClose}
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 z-10">
            <span className="text-gray-500 text-sm">
              {currentIndex! + 1} / {total}
            </span>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Prev button */}
          {total > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 md:left-6 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col items-center gap-4 px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.src}
                alt={current.caption || ""}
                className="rounded-2xl object-contain"
                style={{ maxHeight: "78vh", maxWidth: "min(420px, 85vw)" }}
              />
              {current.caption && (
                <p className="text-gray-400 text-sm text-center max-w-sm leading-relaxed">
                  {current.caption}
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Next button */}
          {total > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 md:right-6 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {/* Dot indicators */}
          {total > 1 && (
            <div className="absolute bottom-6 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); onNavigate(i); }}
                  className="rounded-full transition-all"
                  style={{
                    width: i === currentIndex ? "20px" : "6px",
                    height: "6px",
                    background: i === currentIndex ? "var(--accent-light)" : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>
          )}

          {/* Keyboard hint */}
          <p className="absolute bottom-14 text-gray-700 text-xs hidden md:block">
            ← → to navigate · Esc to close
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

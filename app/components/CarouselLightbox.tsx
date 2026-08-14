/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icon";

interface Props {
  images: { src: string; caption?: string }[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function CarouselLightbox({ images, currentIndex, onClose, onNavigate }: Props) {
  const isOpen = currentIndex !== null;
  const total = images.length;

  const previous = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate(currentIndex === 0 ? total - 1 : currentIndex - 1);
  }, [currentIndex, total, onNavigate]);

  const next = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate(currentIndex === total - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, total, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, next, onClose, previous]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const current = currentIndex !== null ? images[currentIndex] : null;

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(26,27,24,.97)] p-5"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-4">
            <span className="text-[11px] text-[rgba(244,240,232,.5)]">{currentIndex! + 1} / {total}</span>
            <button
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center border border-[rgba(255,255,255,.18)] text-[var(--color-canvas)]"
              aria-label="Close image preview"
            >
              <Icon name="close" size={19} />
            </button>
          </div>

          {total > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previous();
              }}
              className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,.18)] bg-[rgba(244,240,232,.06)] text-[var(--color-canvas)] md:left-6"
              aria-label="Previous image"
            >
              <Icon name="chevron-left" size={20} />
            </button>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.16 }}
              className="flex max-h-[82vh] max-w-[86vw] flex-col items-center gap-4 px-8"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={current.src}
                alt={current.caption || ""}
                className="max-h-[75vh] max-w-full rounded-[4px] object-contain"
              />
              {current.caption && (
                <p className="max-w-lg text-center text-[12px] leading-relaxed text-[rgba(244,240,232,.66)]">{current.caption}</p>
              )}
            </motion.div>
          </AnimatePresence>

          {total > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                next();
              }}
              className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,.18)] bg-[rgba(244,240,232,.06)] text-[var(--color-canvas)] md:right-6"
              aria-label="Next image"
            >
              <Icon name="chevron-right" size={20} />
            </button>
          )}

          {total > 1 && (
            <div className="absolute bottom-6 flex gap-1.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onNavigate(index);
                  }}
                  className="h-1.5 rounded-full"
                  style={{
                    width: index === currentIndex ? 18 : 6,
                    background: index === currentIndex ? "var(--color-accent-soft)" : "rgba(255,255,255,.2)",
                  }}
                  aria-label={`Open image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

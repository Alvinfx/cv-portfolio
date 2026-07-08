"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      setVisible(scrolledToBottom);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 right-4 md:right-8 z-40 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80"
          style={{ background: "var(--bg-card)", border: "1px solid rgba(124,110,247,0.4)" }}
          aria-label="Scroll to top"
        >
          <svg width="18" height="18" fill="none" stroke="var(--accent-light)" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

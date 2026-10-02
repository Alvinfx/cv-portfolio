"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icon";

const links = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const darkMode = !scrolled;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b transition-all duration-200"
      style={{
        background: scrolled ? "rgba(247,248,245,.94)" : "rgba(13,22,24,.84)",
        borderColor: scrolled ? "var(--color-line)" : "rgba(255,255,255,.08)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="site-container flex h-[72px] items-center justify-between">
        <a
          href="#top"
          className="text-[13px] font-semibold tracking-[-0.01em]"
          style={{ color: darkMode ? "var(--color-paper)" : "var(--color-ink)" }}
          aria-label="Chidozirim Ahuakagha, home"
        >
          Chidozirim Ahuakagha
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[12px] font-medium transition-opacity hover:opacity-70"
              style={{ color: darkMode ? "rgba(255,255,255,.74)" : "var(--color-ink-2)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden min-h-10 items-center gap-2 rounded-[6px] px-4 text-[12px] font-semibold sm:inline-flex"
            style={{
              background: darkMode ? "var(--color-accent)" : "var(--color-dark)",
              color: darkMode ? "var(--color-dark)" : "var(--color-paper)",
            }}
          >
            Get in touch
            <Icon name="arrow-right" size={14} />
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-[6px] border md:hidden"
            style={{
              borderColor: darkMode ? "rgba(255,255,255,.18)" : "var(--color-line)",
              color: darkMode ? "var(--color-paper)" : "var(--color-ink)",
            }}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={19} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-[var(--color-line)] bg-[var(--color-surface)] md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="site-container flex flex-col py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[var(--color-line)] py-3 text-sm font-medium text-[var(--color-ink)] last:border-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

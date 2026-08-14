"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icon";

const links = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200"
      style={{
        background: scrolled ? "rgba(244,240,232,.96)" : "rgba(244,240,232,.82)",
        borderColor: scrolled ? "var(--color-line)" : "transparent",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="site-container flex h-20 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-3" aria-label="Chidozirim Ahuakagha, home">
          <span
            className="flex h-10 w-10 items-center justify-center border border-[var(--color-ink)] text-[24px] leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            CA
          </span>
          <span className="hidden text-sm font-semibold tracking-[-0.01em] sm:inline">
            Chidozirim Ahuakagha
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[12px] font-medium text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="button-primary hidden sm:inline-flex">
            Get in touch
            <Icon name="arrow-right" size={16} />
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center border border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink)] lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={20} />
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
            className="border-t border-[var(--color-line)] bg-[var(--color-surface)] lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="site-container flex flex-col py-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[var(--color-line)] py-3 text-sm font-medium text-[var(--color-ink-2)] last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} className="button-primary mt-5 sm:hidden">
                Get in touch
                <Icon name="arrow-right" size={16} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

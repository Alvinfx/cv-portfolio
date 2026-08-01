"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Design", href: "#design" },
  { label: "UI/UX", href: "#chainpulse" },
  { label: "Video", href: "#video" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur border-b" : ""
      }`}
      style={scrolled ? { background: "rgba(36,36,35,0.92)", borderColor: "var(--border)" } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-bold text-lg tracking-tight" style={{ color: "var(--text-primary)" }}>
          Chidozirim<span style={{ color: "var(--accent)" }}>.</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm transition-colors hover:text-white"
              style={{ color: "var(--text-muted)" }}>
              {l.label}
            </a>
          ))}
          <a href="#contact"
            className="text-sm px-4 py-2 rounded font-medium transition-all hover:opacity-90"
            style={{ background: "var(--accent)", color: "#242423" }}>
            Hire Me
          </a>
        </nav>
        <button className="md:hidden transition-colors" style={{ color: "var(--text-muted)" }}
          onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-sm transition-colors hover:text-white"
              style={{ color: "var(--text-muted)" }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}

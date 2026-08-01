"use client";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" style={{ background: "var(--bg-card)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-12">
          <div className="section-label">Contact</div>
          <h2 className="section-title mb-3">Let's Work Together</h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            Open to AI annotation projects, Web3 research, design work, and remote roles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} className="space-y-3">
            {[
              { label: "Email", value: "chidozirim.ca@gmail.com", href: "mailto:chidozirim.ca@gmail.com", icon: "✉️" },
              { label: "Telegram", value: "t.me/xvVicinity", href: "https://t.me/xvVicinity", icon: "✈️" },
              { label: "Location", value: "Abuja, Nigeria", href: null, icon: "📍" },
            ].map((c) => (
              <div key={c.label} className="card p-4 flex items-center gap-4">
                <span className="text-xl">{c.icon}</span>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>{c.label}</p>
                  {c.href
                    ? <a href={c.href} target="_blank" rel="noopener noreferrer"
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: "var(--text-primary)" }}>{c.value}</a>
                    : <p className="text-sm" style={{ color: "var(--text-primary)" }}>{c.value}</p>}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} className="space-y-3">
            {[
              { label: "X / Twitter", value: "@XpnxvVicinity", href: "https://x.com/XpnxvVicinity", icon: "𝕏" },
              { label: "GitHub", value: "github.com/Alvinfx", href: "https://github.com/Alvinfx", icon: "🐙" },
              { label: "LinkedIn", value: "linkedin.com/in/chidozirim-ahuakagha", href: "https://linkedin.com/in/chidozirim-ahuakagha", icon: "💼" },
            ].map((c) => (
              <div key={c.label} className="card p-4 flex items-center gap-4">
                <span className="text-xl">{c.icon}</span>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>{c.label}</p>
                  <a href={c.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "var(--text-primary)" }}>{c.value}</a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <p className="text-center text-xs mt-14" style={{ color: "#3a3c38" }}>
          © 2026 Chidozirim Ahuakagha
        </p>
      </div>
    </section>
  );
}

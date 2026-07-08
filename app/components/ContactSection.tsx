"use client";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="section-label">Contact</div>
          <h2 className="section-title mb-4">Let's Work Together</h2>
          <p className="text-gray-400 max-w-lg mx-auto">Open to AI annotation projects, Web3 research roles, design collaborations, and remote opportunities worldwide.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
            {[
              { label: "Email", value: "chidozirim.ca@gmail.com", href: "mailto:chidozirim.ca@gmail.com", icon: "✉️" },
              { label: "Telegram", value: "t.me/xvVicinity", href: "https://t.me/xvVicinity", icon: "✈️" },
              { label: "Location", value: "Abuja, Nigeria", href: null, icon: "📍" },
            ].map((c) => (
              <div key={c.label} className="card p-4 flex items-center gap-4">
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <p className="text-gray-500 text-xs">{c.label}</p>
                  {c.href ? <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-purple-400 transition-colors">{c.value}</a> : <p className="text-white text-sm">{c.value}</p>}
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
            {[
              { label: "X / Twitter", value: "@XpnxvVicinity", href: "https://x.com/XpnxvVicinity", icon: "𝕏" },
              { label: "GitHub", value: "github.com/Alvinfx", href: "https://github.com/Alvinfx", icon: "🐙" },
              { label: "LinkedIn", value: "linkedin.com/in/chidozirim-ahuakagha", href: "https://linkedin.com/in/chidozirim-ahuakagha", icon: "💼" },
            ].map((c) => (
              <div key={c.label} className="card p-4 flex items-center gap-4">
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <p className="text-gray-500 text-xs">{c.label}</p>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-purple-400 transition-colors">{c.value}</a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <p className="text-center text-gray-600 text-sm mt-16">© 2026 Chidozirim Ahuakagha</p>
      </div>
    </section>
  );
}

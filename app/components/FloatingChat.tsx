"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message { id: string; role: "user" | "assistant"; content: string; }

const SUGGESTED = [
  "Tell me about your AI annotation work",
  "What's your Web3 experience?",
  "Show me your design work",
  "Tell me about SingCity or PromptVault",
];

export function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "greeting", role: "assistant", content: "Hey! I'm Chidozirim's AI avatar. Ask me anything about AI annotation, Web3, design work, or projects. 👋" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, open]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { id: `u-${Date.now()}`, role: "user", content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput(""); setLoading(true); setError(null);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].filter(m => m.id !== "greeting").map(m => ({ role: m.role, content: m.content })),
        }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Failed");
      const data = await res.json();
      setMessages(prev => [...prev, { id: `a-${Date.now()}`, role: "assistant", content: data.response }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally { setLoading(false); }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }} transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 md:right-8 z-50 w-[calc(100vw-32px)] max-w-sm flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{ height: "480px", background: "#111118", border: "1px solid rgba(124,110,247,0.25)" }}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5"
              style={{ background: "linear-gradient(90deg, #7c6ef7 0%, #9d92f9 100%)" }}>
              <img src="/avatar.jpg" alt="Chidozirim" className="w-9 h-9 rounded-full object-cover border-2 border-white/30 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-white text-sm font-semibold">Ask Chidozirim</p>
                <p className="text-white/70 text-xs">AI Avatar · Powered by Claude</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m) => (
                <div key={m.id} className={`flex gap-2 ${m.role === "user" ? "justify-end" : "justify-start items-end"}`}>
                  {m.role === "assistant" && (
                    <img src="/avatar.jpg" alt="Chidozirim" className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
                  )}
                  <div className="max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed"
                    style={m.role === "user"
                      ? { background: "var(--accent)", color: "#fff" }
                      : { background: "#1a1a28", color: "#d1d5db", border: "1px solid rgba(255,255,255,0.06)" }}>
                    {m.content}
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="space-y-2 pt-2">
                  {SUGGESTED.map((q, i) => (
                    <motion.button key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                      onClick={() => send(q)} className="w-full text-left text-xs px-3 py-2 rounded-lg border transition-colors"
                      style={{ color: "#9d92f9", borderColor: "rgba(124,110,247,0.2)", background: "rgba(124,110,247,0.05)" }}>
                      → {q}
                    </motion.button>
                  ))}
                </div>
              )}

              {loading && (
                <div className="flex justify-start items-end gap-2">
                  <img src="/avatar.jpg" alt="Chidozirim" className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
                  <div className="px-3 py-2 rounded-xl flex gap-1" style={{ background: "#1a1a28" }}>
                    {[0,1,2].map(i => (
                      <motion.div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }}
                        animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity }} />
                    ))}
                  </div>
                </div>
              )}

              {error && <div className="text-xs text-red-400 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20">{error}</div>}
              <div ref={bottomRef} />
            </div>

            <div className="px-3 py-3 border-t border-white/5">
              <div className="flex gap-2">
                <input value={input} onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && !e.shiftKey && send(input)}
                  placeholder="Ask me anything..." disabled={loading}
                  className="flex-1 text-sm px-3 py-2 rounded-lg outline-none disabled:opacity-50"
                  style={{ background: "#1a1a28", color: "#fff", border: "1px solid rgba(255,255,255,0.08)" }} />
                <button onClick={() => send(input)} disabled={loading || !input.trim()}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-opacity disabled:opacity-40"
                  style={{ background: "var(--accent)" }}>
                  <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating bubble */}
      <motion.button onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-4 md:right-8 z-50 rounded-full overflow-hidden"
        style={{ width: 60, height: 60, border: "2px solid var(--accent)", boxShadow: "0 8px 32px rgba(124,110,247,0.5)" }}
        whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
      >
        <img src="/avatar.jpg" alt="Chidozirim" className="w-full h-full object-cover" />
        {open && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </div>
        )}
        {!open && (
          <motion.div className="absolute inset-0 rounded-full pointer-events-none"
            style={{ border: "2px solid var(--accent)" }}
            animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} />
        )}
      </motion.button>
    </>
  );
}

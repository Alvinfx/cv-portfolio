"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message { id: string; role: "user" | "assistant"; content: string; }

const SUGGESTED = [
  "Tell me about your AI annotation work",
  "What's your Web3 experience?",
  "Walk me through CarLink",
  "What design tools do you use?",
];

export function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "greeting", role: "assistant", content: "Hey — I'm Chidozirim's AI. Ask me about his work, projects, or experience." },
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
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 md:right-8 z-50 w-[calc(100vw-32px)] max-w-sm flex flex-col rounded-xl overflow-hidden shadow-2xl"
            style={{ height: "460px", background: "var(--bg-card)", border: "1px solid var(--border)" }}>

            <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: "var(--border)", background: "var(--bg-primary)" }}>
              <img src="/avatar.jpg" alt="Chidozirim" className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                style={{ border: "1px solid var(--accent)" }} />
              <div className="flex-1">
                <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Ask Chidozirim</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>AI Avatar</p>
              </div>
              <button onClick={() => setOpen(false)} className="transition-opacity hover:opacity-60"
                style={{ color: "var(--text-muted)" }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m) => (
                <div key={m.id} className={`flex gap-2 ${m.role === "user" ? "justify-end" : "justify-start items-end"}`}>
                  {m.role === "assistant" && (
                    <img src="/avatar.jpg" alt="" className="w-5 h-5 rounded-full object-cover flex-shrink-0" />
                  )}
                  <div className="max-w-[82%] px-3 py-2 rounded-lg text-sm leading-relaxed"
                    style={m.role === "user"
                      ? { background: "var(--accent)", color: "#242423" }
                      : { background: "var(--bg-primary)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                    {m.content}
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="space-y-1.5 pt-1">
                  {SUGGESTED.map((q, i) => (
                    <motion.button key={i} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                      onClick={() => send(q)}
                      className="w-full text-left text-xs px-3 py-2 rounded transition-all hover:opacity-80"
                      style={{ color: "var(--text-muted)", border: "1px solid var(--border)", background: "var(--bg-primary)" }}>
                      {q}
                    </motion.button>
                  ))}
                </div>
              )}

              {loading && (
                <div className="flex justify-start items-end gap-2">
                  <img src="/avatar.jpg" alt="" className="w-5 h-5 rounded-full object-cover flex-shrink-0" />
                  <div className="px-3 py-2 rounded-lg flex gap-1.5"
                    style={{ background: "var(--bg-primary)", border: "1px solid var(--border)" }}>
                    {[0,1,2].map(i => (
                      <motion.div key={i} className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--accent)" }}
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 0.7, delay: i * 0.15, repeat: Infinity }} />
                    ))}
                  </div>
                </div>
              )}

              {error && (
                <div className="text-xs px-3 py-2 rounded-lg" style={{ color: "#f87171", background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.15)" }}>
                  {error}
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="px-3 py-3 border-t" style={{ borderColor: "var(--border)" }}>
              <div className="flex gap-2">
                <input value={input} onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && !e.shiftKey && send(input)}
                  placeholder="Ask anything..." disabled={loading}
                  className="flex-1 text-sm px-3 py-2 rounded outline-none disabled:opacity-50"
                  style={{ background: "var(--bg-primary)", color: "var(--text-primary)", border: "1px solid var(--border)" }} />
                <button onClick={() => send(input)} disabled={loading || !input.trim()}
                  className="w-9 h-9 rounded flex items-center justify-center transition-opacity disabled:opacity-30 hover:opacity-80"
                  style={{ background: "var(--accent)" }}>
                  <svg width="14" height="14" fill="none" stroke="#242423" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-4 md:right-8 z-50 rounded-full overflow-hidden"
        style={{ width: 56, height: 56, border: "2px solid var(--accent)", boxShadow: "0 4px 20px rgba(245,203,92,0.25)" }}
        whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}>
        <img src="/avatar.jpg" alt="Chidozirim" className="w-full h-full object-cover" />
        {open && (
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ background: "rgba(36,36,35,0.7)" }}>
            <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </div>
        )}
        {!open && (
          <motion.div className="absolute inset-0 rounded-full pointer-events-none"
            style={{ border: "2px solid var(--accent)" }}
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }} />
        )}
      </motion.button>
    </>
  );
}

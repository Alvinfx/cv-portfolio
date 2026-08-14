"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icon";

interface Source {
  id: string;
  title: string;
  href: string;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
}

const suggested = [
  "Tell me about ChainPulse",
  "Walk me through CarLink",
  "What is his Web3 experience?",
  "What AI evaluation skills does he have?",
];

export function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "greeting",
      role: "assistant",
      content: "Hi, I am the portfolio assistant. Ask about Chidozirim's work, projects, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(0);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, loading]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    messageIdRef.current += 1;
    const userMessage: Message = {
      id: `u-${messageIdRef.current}`,
      role: "user",
      content: trimmed,
    };

    setMessages((previous) => [...previous, userMessage]);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage]
            .filter((message) => message.id !== "greeting")
            .map((message) => ({ role: message.role, content: message.content })),
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "The portfolio assistant is unavailable right now.");

      setMessages((previous) => [
        ...previous,
        {
          id: `a-${messageIdRef.current}`,
          role: "assistant",
          content: data.response,
          sources: data.sources,
        },
      ]);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "The portfolio assistant is unavailable right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="fixed bottom-[126px] right-4 z-[80] flex w-[calc(100vw-32px)] max-w-[368px] flex-col overflow-hidden rounded-[18px] border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[0_18px_48px_rgba(23,23,21,.13)] md:right-6"
            style={{ height: "min(620px, calc(100vh - 108px))" }}
            aria-label="Portfolio Assistant"
          >
            <div className="flex items-center gap-3 bg-[var(--color-dark)] px-4 py-4 text-[var(--color-canvas)]">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[rgba(255,255,255,.24)]">
                <Image src="/avatar.jpg" alt="" fill sizes="36px" className="object-cover object-top" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-semibold">Portfolio Assistant</p>
                <p className="mt-0.5 text-[10px] text-[rgba(244,240,232,.58)]">Answers from portfolio content</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[rgba(244,240,232,.72)] hover:bg-[rgba(255,255,255,.08)] hover:text-[var(--color-canvas)]"
                aria-label="Close portfolio assistant"
              >
                <Icon name="close" size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className="max-w-[88%]">
                      <div
                        className={`rounded-[12px] px-3.5 py-3 text-[13px] leading-relaxed ${
                          message.role === "user"
                            ? "bg-[var(--color-olive-deep)] text-[var(--color-canvas)]"
                            : "border border-[var(--color-line)] bg-[var(--color-paper)] text-[var(--color-ink-2)]"
                        }`}
                      >
                        {message.content}
                      </div>

                      {message.role === "assistant" && message.sources && message.sources.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {message.sources.map((source) => (
                            <a
                              key={source.id}
                              href={source.href}
                              className="rounded-[3px] border border-[var(--color-line)] bg-[var(--color-taupe-soft)] px-2 py-1 text-[10px] font-medium text-[var(--color-ink-2)] hover:border-[#beb7ac]"
                            >
                              {source.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {messages.length === 1 && (
                  <div className="pt-1">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.08em] text-[var(--color-muted)]">Suggested questions</p>
                    <div className="space-y-2">
                      {suggested.map((question) => (
                        <button
                          key={question}
                          type="button"
                          onClick={() => send(question)}
                          className="w-full rounded-[4px] border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-2.5 text-left text-[12px] text-[var(--color-ink-2)] transition-colors hover:bg-[var(--color-paper)]"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {loading && (
                  <div className="flex justify-start">
                    <div className="rounded-[12px] border border-[var(--color-line)] bg-[var(--color-paper)] px-3.5 py-3 text-[12px] text-[var(--color-muted)]">
                      Searching portfolio...
                    </div>
                  </div>
                )}

                {error && (
                  <div className="rounded-[6px] border border-[rgba(166,77,61,.32)] bg-[rgba(166,77,61,.06)] px-3 py-2.5 text-[12px] text-[var(--state-error)]">
                    {error}
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
            </div>

            <div className="border-t border-[var(--color-line)] bg-[var(--color-surface)] p-3">
              <div className="flex gap-2">
                <label className="sr-only" htmlFor="portfolio-question">Ask about the portfolio</label>
                <input
                  id="portfolio-question"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      send(input);
                    }
                  }}
                  placeholder="Ask about projects, skills or experience..."
                  disabled={loading}
                  className="h-11 min-w-0 flex-1 rounded-[4px] border border-[var(--color-line)] bg-[var(--color-paper)] px-3 text-[12px] text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)] disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => send(input)}
                  disabled={loading || !input.trim()}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] bg-[var(--color-dark)] text-[var(--color-canvas)] transition-opacity disabled:opacity-40"
                  aria-label="Send question"
                >
                  <Icon name="send" size={16} />
                </button>
              </div>
              <p className="mt-2 text-center text-[9px] text-[var(--color-muted)]">Answers are based on portfolio content.</p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((value) => !value)}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.25 }}
        className="fixed bottom-4 right-4 z-[80] flex flex-col items-center gap-1.5 bg-transparent p-0 text-[var(--color-ink)] md:bottom-6 md:right-6"
        aria-expanded={open}
        aria-label={open ? "Close Portfolio Assistant" : "Open Portfolio Assistant"}
      >
        <span
          aria-hidden="true"
          className="block h-16 w-16 rounded-full border-2 border-[var(--color-paper)] bg-cover bg-[position:50%_28%] shadow-[0_8px_22px_rgba(23,23,21,.14)]"
          style={{ backgroundImage: 'url("/avatar.jpg")' }}
        />
        <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-2.5 py-1 text-[10px] font-semibold leading-none text-[var(--color-ink)] shadow-[0_4px_12px_rgba(23,23,21,.07)]">
          Portfolio Assistant
        </span>
      </motion.button>
    </>
  );
}

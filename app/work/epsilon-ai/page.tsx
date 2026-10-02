import type { Metadata } from "next";
import { WorkPageShell } from "@/app/components/WorkPageShell";

export const metadata: Metadata = {
  title: "Epsilon AI | Chidozirim Ahuakagha",
  description: "AI development and workflow automation project using Python, FastAPI, LangGraph, n8n, APIs, SQLite, and approval-based controls.",
};

const stack = ["Python", "FastAPI", "LangGraph", "n8n", "APIs", "SQLite", "Scheduled workflows", "Approval-based controls"];

export default function EpsilonAIPage() {
  return (
    <WorkPageShell
      eyebrow="AI Development · Workflow Automation"
      title="Epsilon AI"
      description="A personal AI and automation system built to coordinate specialised agents for information monitoring, opportunity discovery, communication prioritisation, and recurring workflows."
      meta={[
        { label: "Role", value: "AI Development · Automation Architecture · API Development" },
        { label: "Status", value: "In development" },
        { label: "Architecture", value: "Manager + specialised agents" },
        { label: "Control", value: "Approval-based actions" },
      ]}
    >
      <section className="section-shell">
        <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">System Direction</p>
            <h2 className="section-heading">Orchestration around real recurring workflows.</h2>
            <p className="body-copy mt-6">Epsilon AI coordinates specialised agents and workflows across information monitoring, opportunity discovery, communication prioritisation, developer intelligence, market monitoring, and Web3 opportunity scanning.</p>
            <p className="body-copy mt-4">Higher-risk actions remain approval-gated where human review is important.</p>
          </div>

          <div className="rounded-[10px] bg-[var(--color-dark)] p-6 text-[var(--color-paper)] md:p-8">
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 text-center text-[10px] md:text-[12px]">
              <div className="rounded-[6px] border border-[rgba(255,255,255,.14)] p-4">User / Input</div>
              <span className="text-[var(--color-accent)]">→</span>
              <div className="rounded-[6px] border border-[var(--color-accent)] bg-[rgba(86,214,207,.08)] p-4 font-semibold">Manager</div>
              <span className="text-[var(--color-accent)]">→</span>
              <div className="rounded-[6px] border border-[rgba(255,255,255,.14)] p-4">Specialised Agents</div>
            </div>
            <div className="mx-auto my-5 h-8 w-px bg-[rgba(255,255,255,.18)]" />
            <div className="grid gap-3 sm:grid-cols-3">
              {["n8n Workflows", "Tools & APIs", "Human Approval"].map((item) => <div key={item} className="rounded-[6px] border border-[rgba(255,255,255,.14)] p-4 text-center text-[11px]">{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--color-surface)]">
        <div className="site-container">
          <p className="eyebrow">Verified Technology</p>
          <h2 className="section-heading">Tools used in the current system.</h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((item) => <span key={item} className="tag">{item}</span>)}
          </div>
          <div className="mt-10 max-w-[820px] border-l-2 border-[var(--color-accent)] pl-5 text-[14px] leading-[1.75] text-[var(--color-ink-2)]">
            Epsilon AI is an AI life and opportunity assistant. It is not a trading agent, and this public case study does not expose private trading systems or strategies.
          </div>
        </div>
      </section>
    </WorkPageShell>
  );
}

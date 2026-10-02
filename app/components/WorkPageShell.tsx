import Link from "next/link";
import type { ReactNode } from "react";

interface WorkPageShellProps {
  eyebrow: string;
  title: string;
  description: string;
  meta: Array<{ label: string; value: string }>;
  actions?: ReactNode;
  children: ReactNode;
}

export function WorkPageShell({ eyebrow, title, description, meta, actions, children }: WorkPageShellProps) {
  return (
    <div className="min-h-screen bg-[var(--color-canvas)] text-[var(--color-ink)]">
      <header className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="site-container flex h-[72px] items-center justify-between">
          <Link href="/" className="text-[13px] font-semibold">Chidozirim Ahuakagha</Link>
          <Link href="/#projects" className="link-arrow">Back to work</Link>
        </div>
      </header>

      <main>
        <section className="bg-[var(--color-dark)] py-16 text-[var(--color-paper)] md:py-20">
          <div className="site-container">
            <p className="text-[10px] font-semibold uppercase tracking-[.1em] text-[var(--color-accent)]">{eyebrow}</p>
            <h1 className="mt-4 max-w-[920px] text-[clamp(44px,6vw,76px)] font-semibold leading-[.98] tracking-[-.045em]">{title}</h1>
            <p className="mt-6 max-w-[760px] text-[16px] leading-[1.7] text-[rgba(255,255,255,.65)]">{description}</p>
            {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
            <div className="mt-10 grid gap-px overflow-hidden rounded-[8px] border border-[rgba(255,255,255,.12)] bg-[rgba(255,255,255,.12)] sm:grid-cols-2 lg:grid-cols-4">
              {meta.map((item) => (
                <div key={item.label} className="bg-[#111c1f] p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[.08em] text-[rgba(255,255,255,.38)]">{item.label}</p>
                  <p className="mt-2 text-[12px] font-medium text-[var(--color-paper)]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {children}
      </main>
    </div>
  );
}

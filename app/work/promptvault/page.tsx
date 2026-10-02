import type { Metadata } from "next";
import { Icon } from "@/app/components/Icon";
import { WorkPageShell } from "@/app/components/WorkPageShell";

export const metadata: Metadata = {
  title: "PromptVault | Chidozirim Ahuakagha",
  description: "Software development and Web3 project built with React, TypeScript, and Irys Network integration.",
};

export default function PromptVaultPage() {
  return (
    <WorkPageShell
      eyebrow="Software Development · Web3"
      title="PromptVault"
      description="A prompt management application built with React and TypeScript, with Irys Network integration for wallet-based prompt storage."
      meta={[
        { label: "Role", value: "Development" },
        { label: "Status", value: "Live" },
        { label: "Frontend", value: "React · TypeScript" },
        { label: "Integration", value: "Irys Network" },
      ]}
      actions={
        <>
          <a href="https://promptvault-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="button-accent">View Live Site <Icon name="external" size={15} /></a>
          <a href="https://github.com/Alvinfx/PromptVault" target="_blank" rel="noopener noreferrer" className="button-ghost-dark">GitHub <Icon name="github" size={15} /></a>
        </>
      }
    >
      <section className="section-shell">
        <div className="site-container grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Project</p>
            <h2 className="section-heading">Prompt storage with a wallet-based Web3 layer.</h2>
            <p className="body-copy mt-6">PromptVault combines prompt management, blockchain integration, and modern frontend development in a live application.</p>
          </div>
          <div className="overflow-hidden rounded-[10px] border border-[var(--color-line)] bg-[var(--color-paper)]">
            <div className="site-preview-frame h-[440px]">
              <iframe src="https://promptvault-ai.vercel.app" title="PromptVault live application" loading="lazy" tabIndex={-1} />
            </div>
          </div>
        </div>
      </section>
    </WorkPageShell>
  );
}

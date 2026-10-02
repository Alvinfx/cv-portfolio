import type { Metadata } from "next";
import { ChainPulseSection } from "@/app/components/ChainPulseSection";
import { WorkPageShell } from "@/app/components/WorkPageShell";

export const metadata: Metadata = {
  title: "ChainPulse | Chidozirim Ahuakagha",
  description: "Product design and design systems case study for a multi-chain crypto portfolio and on-chain activity tracker.",
};

export default function ChainPulsePage() {
  return (
    <WorkPageShell
      eyebrow="Product Design · Design Systems"
      title="ChainPulse"
      description="A multi-chain crypto portfolio and on-chain activity tracking product."
      meta={[
        { label: "Role", value: "Product Designer" },
        { label: "Focus", value: "Research · IA · UI · Design System" },
        { label: "System", value: "Night / Day themes" },
        { label: "Tool", value: "Figma" },
      ]}
    >
      <ChainPulseSection />
    </WorkPageShell>
  );
}

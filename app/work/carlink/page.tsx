import type { Metadata } from "next";
import { CarLinkSection } from "@/app/components/CarLinkSection";
import { WorkPageShell } from "@/app/components/WorkPageShell";

export const metadata: Metadata = {
  title: "CarLink | Chidozirim Ahuakagha",
  description: "Product design and marketplace UX case study for a swipe-based car marketplace designed for Nigeria.",
};

export default function CarLinkPage() {
  return (
    <WorkPageShell
      eyebrow="Product Design · Marketplace UX"
      title="CarLink"
      description="A swipe-based car marketplace designed for the Nigerian market."
      meta={[
        { label: "Role", value: "Product Designer" },
        { label: "Market", value: "Nigeria" },
        { label: "Screens", value: "27 high-fidelity screens" },
        { label: "Focus", value: "Buyer / seller flows · Trust · Design system" },
      ]}
    >
      <CarLinkSection />
    </WorkPageShell>
  );
}

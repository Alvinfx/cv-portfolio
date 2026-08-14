import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chidozirim Ahuakagha | AI Evaluator, Web3 Analyst, Designer",
  description:
    "Portfolio of Chidozirim Ahuakagha, an AI data annotator and evaluator, Web3 market analyst, graphics designer, and UX designer based in Abuja, Nigeria.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

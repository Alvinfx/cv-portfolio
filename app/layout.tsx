import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chidozirim Ahuakagha — AI Evaluator, Web3 Analyst, Designer",
  description: "Portfolio of Chidozirim Ahuakagha. AI data annotation specialist, Web3 market analyst, and graphics designer based in Abuja, Nigeria.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { FloatingChat } from "./components/FloatingChat";
import { ScrollToTop } from "./components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chidozirim Ahuakagha | Product Designer & AI Automation Developer",
  description:
    "Portfolio of Chidozirim Ahuakagha, a product designer and developer working across digital products, full-stack development, AI systems, and workflow automation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <FloatingChat />
        <ScrollToTop />
      </body>
    </html>
  );
}

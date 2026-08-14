"use client";

import { AboutSection } from "./components/AboutSection";
import { CarLinkSection } from "./components/CarLinkSection";
import { ChainPulseSection } from "./components/ChainPulseSection";
import { ContactSection } from "./components/ContactSection";
import { DesignSection } from "./components/DesignSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { FloatingChat } from "./components/FloatingChat";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { ScrollToTop } from "./components/ScrollToTop";
import { SkillsSection } from "./components/SkillsSection";
import { VideoSection } from "./components/VideoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-canvas)] text-[var(--color-ink)]">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ChainPulseSection />
        <CarLinkSection />
        <DesignSection />
        <SkillsSection />
        <ExperienceSection />
        <VideoSection />
        <ContactSection />
      </main>
      <FloatingChat />
      <ScrollToTop />
    </div>
  );
}

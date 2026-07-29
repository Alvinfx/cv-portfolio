"use client";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { DesignSection } from "./components/DesignSection";
import { ChainPulseSection } from "./components/ChainPulseSection";
import { CarLinkSection } from "./components/CarLinkSection";
import { VideoSection } from "./components/VideoSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { FloatingChat } from "./components/FloatingChat";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <DesignSection />
        <ChainPulseSection />
        <CarLinkSection />
        <VideoSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <FloatingChat />
      <ScrollToTop />
    </div>
  );
}

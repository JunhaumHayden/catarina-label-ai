"use client"

import { I18nProvider } from "@/lib/i18n"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechSection } from "@/components/tech-section"
import { TeamSection } from "@/components/team-section"
import { ImpactSection } from "@/components/impact-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <I18nProvider>
      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <TechSection />
        <TeamSection />
        <ImpactSection />
        <CtaSection />
        <Footer />
      </main>
    </I18nProvider>
  )
}

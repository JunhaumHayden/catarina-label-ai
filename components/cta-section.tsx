"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function CtaSection() {
  const { t } = useI18n()

  return (
    <section id="contato" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center md:p-16">
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,oklch(0.65_0.18_195/0.08),transparent)]" />

          <div className="relative">
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground leading-relaxed">
              {t("cta.subtitle")}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="gap-2">
                <a href="mailto:hudson.silva@ifpa.edu.br">
                  {t("cta.btn1")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-border text-foreground hover:bg-secondary">
                <a
                  href="https://www.linkedin.com/in/hudson-afonso-167b1321"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("cta.btn2")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

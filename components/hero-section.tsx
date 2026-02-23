"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useI18n()

  const stats = [
    { valueKey: "hero.stat1.value", labelKey: "hero.stat1.label" },
    { valueKey: "hero.stat2.value", labelKey: "hero.stat2.label" },
    { valueKey: "hero.stat3.value", labelKey: "hero.stat3.label" },
    { valueKey: "hero.stat4.value", labelKey: "hero.stat4.label" },
  ]

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,oklch(0.65_0.18_195/0.15),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <Badge
          variant="outline"
          className="mb-6 inline-flex items-center gap-2 border-primary/30 bg-primary/10 px-4 py-1.5 text-primary"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>{t("hero.badge")}</span>
        </Badge>

        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          <img
//               src={`${getBasePath()}/logo-48x48.png`}
              src="https://github.com/user-attachments/assets/60d250d7-68db-4a00-80d4-0dc1d6ef78e4"
              alt="Catarina Label AI Logo"
              className="h-full w-full object-cover"
            />
          Catarina Label{" "}
          <span className="text-primary">AI</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          {t("hero.subtitle")}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="gap-2">
            <a href="#sobre">
              {t("hero.cta1")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2 border-border text-foreground hover:bg-secondary">
            <a href="#equipe">{t("hero.cta2")}</a>
          </Button>
        </div>

        {/* Stats row */}
        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.labelKey} className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground md:text-3xl">
                {t(stat.valueKey)}
              </span>
              <span className="mt-1 text-xs text-muted-foreground md:text-sm">
                {t(stat.labelKey)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

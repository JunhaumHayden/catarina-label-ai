"use client"

import { BookOpen, Target, Lightbulb } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const cardKeys = [
  { icon: BookOpen, titleKey: "about.card1.title", descKey: "about.card1.desc" },
  { icon: Lightbulb, titleKey: "about.card2.title", descKey: "about.card2.desc" },
  { icon: Target, titleKey: "about.card3.title", descKey: "about.card3.desc" },
]

export function AboutSection() {
  const { t } = useI18n()

  return (
    <section id="sobre" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">
            {t("about.tag")}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            {t("about.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cardKeys.map((card) => (
            <div
              key={card.titleKey}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:bg-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                {t(card.titleKey)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(card.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

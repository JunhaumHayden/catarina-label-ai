"use client"

import { Bot, Brain, Users, CheckCircle2 } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const techKeys = [
  {
    icon: Bot,
    titleKey: "tech.t1.title",
    descKey: "tech.t1.desc",
    highlights: ["tech.t1.h1", "tech.t1.h2", "tech.t1.h3"],
  },
  {
    icon: Brain,
    titleKey: "tech.t2.title",
    descKey: "tech.t2.desc",
    highlights: ["tech.t2.h1", "tech.t2.h2", "tech.t2.h3"],
  },
  {
    icon: Users,
    titleKey: "tech.t3.title",
    descKey: "tech.t3.desc",
    highlights: ["tech.t3.h1", "tech.t3.h2", "tech.t3.h3"],
  },
]

export function TechSection() {
  const { t } = useI18n()

  return (
    <section id="tecnologias" className="border-t border-border bg-card py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">
            {t("tech.tag")}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            {t("tech.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            {t("tech.subtitle")}
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-8">
          {techKeys.map((tech, i) => (
            <div
              key={tech.titleKey}
              className={`flex flex-col gap-8 rounded-xl border border-border bg-background p-8 md:flex-row md:items-center md:p-10 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <tech.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {t(tech.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(tech.descKey)}
                </p>
              </div>
              <div className="flex flex-1 flex-col gap-3">
                {tech.highlights.map((hKey) => (
                  <div
                    key={hKey}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-card-foreground">{t(hKey)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

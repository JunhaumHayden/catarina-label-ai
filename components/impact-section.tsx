"use client"

import { Scale, Microscope, Building2, GraduationCap } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const audienceKeys = [
  { icon: Scale, titleKey: "impact.a1.title", descKey: "impact.a1.desc" },
  { icon: Microscope, titleKey: "impact.a2.title", descKey: "impact.a2.desc" },
  { icon: Building2, titleKey: "impact.a3.title", descKey: "impact.a3.desc" },
  { icon: GraduationCap, titleKey: "impact.a4.title", descKey: "impact.a4.desc" },
]

const metricKeys = [
  { valueKey: "impact.m1.value", labelKey: "impact.m1.label" },
  { valueKey: "impact.m2.value", labelKey: "impact.m2.label" },
  { valueKey: "impact.m3.value", labelKey: "impact.m3.label" },
  { valueKey: "impact.m4.value", labelKey: "impact.m4.label" },
]

export function ImpactSection() {
  const { t } = useI18n()

  return (
    <section
      id="impacto"
      className="border-t border-border bg-card py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">
            {t("impact.tag")}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            {t("impact.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            {t("impact.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audienceKeys.map((item) => (
            <div
              key={item.titleKey}
              className="rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">
                {t(item.titleKey)}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics from ACATE Tech Report */}
        <div className="mt-20">
          <p className="text-center text-sm font-medium text-muted-foreground">
            {t("impact.metricsLabel")}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {metricKeys.map((metric) => (
              <div
                key={metric.labelKey}
                className="flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center"
              >
                <span className="text-2xl font-bold text-primary md:text-3xl">
                  {t(metric.valueKey)}
                </span>
                <span className="mt-2 text-xs text-muted-foreground">
                  {t(metric.labelKey)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

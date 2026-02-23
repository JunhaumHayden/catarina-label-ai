"use client"

import { useI18n } from "@/lib/i18n"
import { getBasePath } from "@/lib/utils"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary overflow-hidden">
            <img
//               src={`${getBasePath()}/logo-48x48.png`}
              src="https://github.com/user-attachments/assets/60d250d7-68db-4a00-80d4-0dc1d6ef78e4"
              alt="Catarina Label AI Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-sm font-bold text-foreground">
            Catarina<span className="text-primary">Label</span> AI
          </span>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          {t("footer.description")}
        </p>

        <div className="flex gap-6">
          <a
            href="#sobre"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("footer.about")}
          </a>
          <a
            href="#equipe"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("footer.team")}
          </a>
          <a
            href="#contato"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("footer.contact")}
          </a>
        </div>
      </div>
    </footer>
  )
}

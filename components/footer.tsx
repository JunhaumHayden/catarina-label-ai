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
              src="https://private-user-images.githubusercontent.com/79289647/553284684-21bc64b5-2f01-49b4-aae3-446a4e5028bd.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzE4MTAyNjIsIm5iZiI6MTc3MTgwOTk2MiwicGF0aCI6Ii83OTI4OTY0Ny81NTMyODQ2ODQtMjFiYzY0YjUtMmYwMS00OWI0LWFhZTMtNDQ2YTRlNTAyOGJkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAyMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMjIzVDAxMjYwMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVmMDcyODMyNzNlODEzN2E1NmJlM2MzNGE2MzY2NzllYmY5MzY1YjVlZTBlMGY1M2U0ZjQxNTUzNjc0NzZkMGUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.CMiJFG3JxR8VjmOasUKte9eozgg9vs8dibBQmgLVkDg"
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

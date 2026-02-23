"use client"

import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n, type Locale } from "@/lib/i18n"
import { getBasePath } from "@/lib/utils"

const navLinks = [
  { labelKey: "nav.about", href: "#sobre" },
  { labelKey: "nav.technologies", href: "#tecnologias" },
  { labelKey: "nav.team", href: "#equipe" },
  { labelKey: "nav.impact", href: "#impacto" },
  { labelKey: "nav.contact", href: "#contato" },
]

const languages: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "EN" },
  { code: "pt", label: "Portugues", flag: "PT" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { locale, setLocale, t } = useI18n()

  const currentLang = languages.find((l) => l.code === locale)!

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href={getBasePath()} className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary overflow-hidden">
            <img
              src={`${getBasePath()}/logo-48x48.png`}
              alt="Catarina Label AI Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-lg font-bold text-foreground">
            Catarina<span className="text-primary">Label</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(link.labelKey)}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:bg-secondary/80"
              aria-label="Select language"
            >
              <Globe className="h-3.5 w-3.5" />
              <span className="font-medium">{currentLang.flag}</span>
            </button>
            {langOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangOpen(false)}
                />
                <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-lg border border-border bg-card shadow-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLocale(lang.code)
                        setLangOpen(false)
                      }}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-secondary ${
                        locale === lang.code
                          ? "bg-primary/10 text-primary"
                          : "text-card-foreground"
                      }`}
                    >
                      <span className="font-mono text-xs font-bold">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <Button asChild size="sm">
            <a href="#contato">{t("nav.contactUs")}</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Language Switcher */}
          <button
            onClick={() => {
              const next = locale === "en" ? "pt" : "en"
              setLocale(next as Locale)
            }}
            className="flex items-center gap-1 rounded-lg border border-border bg-secondary px-2.5 py-1.5 text-xs font-medium text-secondary-foreground"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            {currentLang.flag}
          </button>

          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {t(link.labelKey)}
              </a>
            ))}
            <Button asChild size="sm" className="w-full">
              <a href="#contato" onClick={() => setMobileOpen(false)}>
                {t("nav.contactUs")}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

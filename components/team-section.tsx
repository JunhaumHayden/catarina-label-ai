"use client"

import { useState } from "react"
import { Linkedin, ExternalLink, Mail } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

interface TeamMember {
  name: string
  shortName: string
  initials: string
  roleKey: string
  levelKey: string
  email: string
  bioKey: string
  lattes: string
  linkedin: string
}

const team: TeamMember[] = [
  {
    name: "Hudson Afonso Batista da Silva",
    shortName: "Hudson Afonso",
    initials: "HA",
    roleKey: "member.hudson.role",
    levelKey: "member.hudson.level",
    email: "hudson.silva@ifpa.edu.br",
    bioKey: "member.hudson.bio",
    lattes: "http://lattes.cnpq.br/7304886482933850",
    linkedin: "https://www.linkedin.com/in/hudson-afonso-167b1321",
  },
  {
    name: "Paulo Marcos de Assis",
    shortName: "Paulo Marcos",
    initials: "PM",
    roleKey: "member.paulo.role",
    levelKey: "member.paulo.level",
    email: "paulo.marcos.de.assis@gmail.com",
    bioKey: "member.paulo.bio",
    lattes: "https://lattes.cnpq.br/5654791012928641",
    linkedin: "https://www.linkedin.com/in/paulo-marcos-02b29b306",
  },
  {
    name: "Pedro Henrique Azevedo",
    shortName: "Pedro Henrique",
    initials: "PH",
    roleKey: "member.pedro.role",
    levelKey: "member.pedro.level",
    email: "pedro.henrique.azevedo@posgrad.ufsc.br",
    bioKey: "member.pedro.bio",
    lattes: "https://lattes.cnpq.br/7950947410325604",
    linkedin: "https://www.linkedin.com/in/pedro-henrique-azevedo-501300145",
  },
  {
    name: "Carlos Benedito Hayden de Albuquerque Junior",
    shortName: "Carlos Hayden Jr.",
    initials: "CH",
    roleKey: "member.carlos.role",
    levelKey: "member.carlos.level",
    email: "hayden.junior@grad.ufsc.br",
    bioKey: "member.carlos.bio",
    lattes: "https://lattes.cnpq.br/6805864277419502",
    linkedin: "https://www.linkedin.com/in/carlos-hayden-junior/",
  },
  {
    name: "Francisco Bortolanza",
    shortName: "Francisco Bortolanza",
    initials: "FB",
    roleKey: "member.francisco.role",
    levelKey: "member.francisco.level",
    email: "bortolanza.francisco@gmail.com",
    bioKey: "member.francisco.bio",
    lattes: "https://lattes.cnpq.br/4785440056879106",
    linkedin: "",
  },
  {
    name: "Eduardo Cacilha",
    shortName: "Eduardo Cacilha",
    initials: "EC",
    roleKey: "member.eduardo.role",
    levelKey: "member.eduardo.level",
    email: "",
    bioKey: "member.eduardo.bio",
    lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do",
    linkedin: "https://www.linkedin.com/in/eduardo-cacilha-196581124/",
  },
]

function TeamCard({
  member,
  onClick,
  t,
}: {
  member: TeamMember
  onClick: () => void
  t: (key: string) => string
}) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/40 hover:bg-primary/5"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary transition-transform group-hover:scale-105">
        {member.initials}
      </div>
      <h3 className="mt-4 text-base font-semibold text-card-foreground">
        {member.shortName}
      </h3>
      <Badge
        variant="secondary"
        className="mt-2 bg-secondary text-secondary-foreground"
      >
        {t(member.levelKey)}
      </Badge>
      <p className="mt-2 text-xs text-muted-foreground">{t(member.roleKey)}</p>
    </button>
  )
}

function TeamModal({
  member,
  open,
  onClose,
  t,
}: {
  member: TeamMember | null
  open: boolean
  onClose: () => void
  t: (key: string) => string
}) {
  if (!member) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-card sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
              {member.initials}
            </div>
            <div className="text-left">
              <DialogTitle className="text-lg text-card-foreground">
                {member.name}
              </DialogTitle>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <Badge className="bg-primary text-primary-foreground">
                  {t(member.levelKey)}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {t(member.roleKey)}
                </span>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t(member.bioKey)}
          </p>

          <div className="flex flex-col gap-2 rounded-lg border border-border bg-background p-4">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {member.email}
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            )}
            {member.lattes && (
              <a
                href={member.lattes}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" />
                {t("team.modal.lattes")}
              </a>
            )}
          </div>

          <div className="flex justify-end">
            <Button variant="outline" size="sm" onClick={onClose} className="text-foreground">
              {t("team.modal.close")}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const { t } = useI18n()

  return (
    <section id="equipe" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">
            {t("team.tag")}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            {t("team.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            {t("team.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamCard
              key={member.name}
              member={member}
              onClick={() => setSelectedMember(member)}
              t={t}
            />
          ))}
        </div>
      </div>

      <TeamModal
        member={selectedMember}
        open={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        t={t}
      />
    </section>
  )
}

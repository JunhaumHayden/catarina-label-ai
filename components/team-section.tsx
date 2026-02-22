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

interface TeamMember {
  name: string
  shortName: string
  initials: string
  role: string
  level: string
  email: string
  bio: string
  lattes: string
  linkedin: string
}

const team: TeamMember[] = [
  {
    name: "Hudson Afonso Batista da Silva",
    shortName: "Hudson Afonso",
    initials: "HA",
    role: "Banco de Dados & Qualidade de Dados",
    level: "Doutorando",
    email: "hudson.silva@ifpa.edu.br",
    bio: "Doutorando em Ciencia da Computacao na UFSC, atuando na linha de pesquisa de Banco de Dados. Integra a equipe do Projeto Ceos, parceria entre a UFSC e o Ministerio Publico de Santa Catarina (MPSC). Possui experiencia em Banco de Dados relacionais e NoSQL, gestao de qualidade de dados em processos de Inteligencia Artificial, com foco em auditoria de dados na deteccao de fraudes aplicadas ao setor publico.",
    lattes: "http://lattes.cnpq.br/7304886482933850",
    linkedin: "https://www.linkedin.com/in/hudson-afonso-167b1321",
  },
  {
    name: "Paulo Marcos de Assis",
    shortName: "Paulo Marcos",
    initials: "PM",
    role: "Machine Learning & IA Computacional",
    level: "Mestrando",
    email: "paulo.marcos.de.assis@gmail.com",
    bio: "Mestrando em Ciencia da Computacao na UFSC, atuando na linha de pesquisa Machine Learning e Inteligencia Computacional. Integra a equipe do Projeto Ceos. Possui experiencia em projetos de aprendizado de maquina, com foco na deteccao de fraudes e no desenvolvimento de ferramentas baseadas em Inteligencia Artificial aplicadas ao setor publico.",
    lattes: "https://lattes.cnpq.br/5654791012928641",
    linkedin: "https://www.linkedin.com/in/paulo-marcos-02b29b306",
  },
  {
    name: "Pedro Henrique Azevedo",
    shortName: "Pedro Henrique",
    initials: "PH",
    role: "NLP & Integracao de Dados",
    level: "Mestrando",
    email: "pedro.henrique.azevedo@posgrad.ufsc.br",
    bio: "Mestrando em Ciencia da Computacao pela UFSC, atua na linha de pesquisa em Banco de Dados. Integra a equipe do Projeto Ceos. Possui experiencia nas areas de processamento de linguagem natural, inteligencia artificial centrada em dados, integracao e qualidade de dados, com foco em extracao de informacao, classificacao e ligacao de entidades.",
    lattes: "https://lattes.cnpq.br/7950947410325604",
    linkedin: "https://www.linkedin.com/in/pedro-henrique-azevedo-501300145",
  },
  {
    name: "Carlos Benedito Hayden de Albuquerque Junior",
    shortName: "Carlos Hayden Jr.",
    initials: "CH",
    role: "IA aplicada a Saude & Dados",
    level: "Graduando",
    email: "hayden.junior@grad.ufsc.br",
    bio: "Graduando em Ciencia da Computacao pela UFSC, atua na linha de pesquisa em Inteligencia Artificial aplicada a Gestao em Saude, com foco na utilizacao de dados do Registro Eletronico de Saude no ambito do Projeto Ceos. Contribui para o desenvolvimento de solucoes voltadas ao apoio a tomada de decisao inteligente em dominios complexos do setor publico.",
    lattes: "https://lattes.cnpq.br/6805864277419502",
    linkedin: "https://www.linkedin.com/in/carlos-hayden-junior/",
  },
  {
    name: "Francisco Bortolanza",
    shortName: "Francisco Bortolanza",
    initials: "FB",
    role: "Extracao de Dados",
    level: "Graduando",
    email: "bortolanza.francisco@gmail.com",
    bio: "Graduando em Ciencia da Computacao pela UFSC, atuando na linha de pesquisa de Extracao de Dados. Integra a equipe do Projeto Ceos. Contribui para o desenvolvimento de solucoes que aprimoram a preparacao e organizacao de dados de documentos juridicos para modelos de IA.",
    lattes: "https://lattes.cnpq.br/4785440056879106",
    linkedin: "",
  },
  {
    name: "Eduardo Cacilha",
    shortName: "Eduardo Cacilha",
    initials: "EC",
    role: "Backend & Automacao",
    level: "Graduando",
    email: "",
    bio: "Graduando em Sistemas de Informacao pela UFSC, com interesse em desenvolvimento backend, automacao e qualidade de software. Possui experiencia em extensao universitaria como voluntario no Projeto Florescer, atuando na gestao de tarefas, marketing e tutoria em aulas de programacao. Participou de eventos como a FERMAT, Feira de Cursos da UFSC e CTC de Portas Abertas.",
    lattes: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do",
    linkedin: "https://www.linkedin.com/in/eduardo-cacilha-196581124/",
  },
]

function TeamCard({
  member,
  onClick,
}: {
  member: TeamMember
  onClick: () => void
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
        {member.level}
      </Badge>
      <p className="mt-2 text-xs text-muted-foreground">{member.role}</p>
    </button>
  )
}

function TeamModal({
  member,
  open,
  onClose,
}: {
  member: TeamMember | null
  open: boolean
  onClose: () => void
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
                  {member.level}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {member.role}
                </span>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {member.bio}
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
                Curriculo Lattes
              </a>
            )}
          </div>

          <div className="flex justify-end">
            <Button variant="outline" size="sm" onClick={onClose} className="text-foreground">
              Fechar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <section id="equipe" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">
            Equipe
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Pesquisadores e Desenvolvedores
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Nossa equipe e composta por pesquisadores da UFSC do Projeto Ceos,
            com competencias em Banco de Dados, Machine Learning, NLP e
            Engenharia de Software.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamCard
              key={member.name}
              member={member}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      <TeamModal
        member={selectedMember}
        open={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  )
}

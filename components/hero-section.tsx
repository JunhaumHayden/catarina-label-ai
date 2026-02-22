import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
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
          <span>Projeto Fundo Catarina</span>
        </Badge>

        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Catarina Label{" "}
          <span className="text-primary">AI</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Framework semi-automatizado de rotulagem de dados que utiliza
          Inteligencia Artificial para acelerar o treinamento de modelos, com
          foco no setor juridico.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="gap-2">
            <a href="#sobre">
              Conhecer o Projeto
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2 border-border text-foreground hover:bg-secondary">
            <a href="#equipe">Conheça a Equipe</a>
          </Button>
        </div>

        {/* Stats row */}
        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: "10k+", label: "Textos rotulados" },
            { value: "521", label: "Palavras por texto" },
            { value: "UFSC", label: "Universidade" },
            { value: "R$5M", label: "Projeto Ceos" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground md:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs text-muted-foreground md:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

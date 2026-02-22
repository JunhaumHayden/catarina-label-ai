import { Scale, Microscope, Building2, GraduationCap } from "lucide-react"

const audiences = [
  {
    icon: Scale,
    title: "Lawtechs & Legaltechs",
    description:
      "Startups de tecnologia juridica que lidam com grandes volumes de documentos textuais como processos, peticoes e jurisprudencias.",
  },
  {
    icon: Microscope,
    title: "Grupos de Pesquisa",
    description:
      "Pesquisadores em Direito e Inteligencia Artificial que necessitam de datasets anotados para treinamento de modelos.",
  },
  {
    icon: Building2,
    title: "Orgaos Publicos",
    description:
      "Departamentos de inovacao de orgaos publicos e escritorios de advocacia que buscam eficiencia com IA.",
  },
  {
    icon: GraduationCap,
    title: "Ecossistema de Inovacao",
    description:
      "Estudantes de pos-graduacao e startups de base tecnologica em areas como Engenharias, Saude e Financas.",
  },
]

const metrics = [
  { value: "22 mil", label: "Empresas de tecnologia em SC" },
  { value: "R$23,6B", label: "Faturamento anual do setor" },
  { value: "35,3%", label: "Ja utilizam IA/ML" },
  { value: "7.700+", label: "Empresas potencialmente beneficiadas" },
]

export function ImpactSection() {
  return (
    <section
      id="impacto"
      className="border-t border-border bg-card py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">
            Impacto & Publico-Alvo
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Para quem construimos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            O Catarina Label AI atende desde pesquisadores academicos ate
            startups e orgaos publicos, oferecendo uma solucao acessivel e
            escalavel.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics from ACATE Tech Report */}
        <div className="mt-20">
          <p className="text-center text-sm font-medium text-muted-foreground">
            Dados do Ecossistema de Tecnologia de Santa Catarina (ACATE Tech
            Report 2023)
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center"
              >
                <span className="text-2xl font-bold text-primary md:text-3xl">
                  {metric.value}
                </span>
                <span className="mt-2 text-xs text-muted-foreground">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

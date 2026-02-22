import { Bot, Brain, Users, CheckCircle2 } from "lucide-react"

const technologies = [
  {
    icon: Bot,
    title: "Pre-Rotulagem com Modelos Fundacionais",
    description:
      "Utilizacao de modelos pre-treinados (LLMs) para gerar automaticamente uma primeira versao dos rotulos, seguindo a abordagem emergente 'LLM as a Judge' que apresenta resultados promissores na literatura internacional.",
    highlights: [
      "Reducao significativa de custo e tempo",
      "Concordancia similar a anotadores humanos",
      "Custo ate 100x menor que anotacao manual",
    ],
  },
  {
    icon: Brain,
    title: "Aprendizagem Ativa (Active Learning)",
    description:
      "O modelo de IA identifica quais dados sao mais dificeis e solicita a anotacao humana apenas para os exemplos mais informativos, otimizando o tempo do especialista.",
    highlights: [
      "Selecao inteligente de amostras",
      "Otimizacao do tempo do especialista",
      "Foco nos exemplos mais informativos",
    ],
  },
  {
    icon: Users,
    title: "Interface Human-in-the-Loop",
    description:
      "Um fluxo de trabalho interativo em que o humano valida, corrige e refina as decisoes da IA, tornando o processo uma colaboracao eficiente entre homem e maquina.",
    highlights: [
      "Validacao humana integrada",
      "Refinamento continuo do modelo",
      "Colaboracao homem-maquina",
    ],
  },
]

export function TechSection() {
  return (
    <section id="tecnologias" className="border-t border-border bg-card py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">
            Tecnologias
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Estado da arte em rotulagem de dados
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Integramos tecnicas avancadas do estado da arte na area de rotulagem
            de dados para IA, fundamentadas por pesquisas recentes.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-8">
          {technologies.map((tech, i) => (
            <div
              key={tech.title}
              className={`flex flex-col gap-8 rounded-xl border border-border bg-background p-8 md:flex-row md:items-center md:p-10 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <tech.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {tech.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {tech.description}
                </p>
              </div>
              <div className="flex flex-1 flex-col gap-3">
                {tech.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-card-foreground">{h}</span>
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

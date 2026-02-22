import { BookOpen, Target, Lightbulb } from "lucide-react"

const cards = [
  {
    icon: BookOpen,
    title: "O Problema",
    description:
      "A rotulagem de dados e um gargalo critico para a inovacao em IA. E uma tarefa manual, repetitiva e massiva que consome centenas de horas de trabalho. Em nosso projeto, rotular 100 textos demandava em media duas horas de trabalho.",
  },
  {
    icon: Lightbulb,
    title: "A Solucao",
    description:
      "Idealizamos o Catarina-Label AI: um framework semi-automatizado que utiliza a propria IA para acelerar o treinamento de modelos, combinando rotulagem automatizada com validacao humana inteligente.",
  },
  {
    icon: Target,
    title: "O Foco",
    description:
      "Com foco principal na area juridica, o projeto visa posicionar a UFSC e Santa Catarina como polo de referencia no desenvolvimento de ferramentas de IA aplicadas ao contexto juridico e ao setor publico.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">
            Sobre o Projeto
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Da academia para a inovacao
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Nascido da experiencia pratica de pesquisadores da UFSC no Projeto
            Ceos, o Catarina Label AI transforma um desafio real em uma solucao
            acessivel para pesquisadores e empreendedores catarinenses.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:bg-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

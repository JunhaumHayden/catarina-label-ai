import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section id="contato" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center md:p-16">
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,oklch(0.65_0.18_195/0.08),transparent)]" />

          <div className="relative">
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Quer saber mais sobre o Catarina Label AI?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground leading-relaxed">
              Estamos na fase de ideacao e validacao. Se voce e pesquisador,
              empreendedor ou representa uma instituicao interessada em
              rotulagem inteligente de dados, entre em contato conosco.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="gap-2">
                <a href="mailto:hudson.silva@ifpa.edu.br">
                  Entrar em Contato
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-border text-foreground hover:bg-secondary">
                <a
                  href="https://www.linkedin.com/in/hudson-afonso-167b1321"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conectar no LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

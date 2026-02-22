export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-xs font-bold text-primary-foreground">CL</span>
          </div>
          <span className="text-sm font-bold text-foreground">
            Catarina<span className="text-primary">Label</span> AI
          </span>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Desenvolvido por pesquisadores da Universidade Federal de Santa
          Catarina (UFSC) &mdash; Projeto Fundo Catarina
        </p>

        <div className="flex gap-6">
          <a
            href="#sobre"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Sobre
          </a>
          <a
            href="#equipe"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Equipe
          </a>
          <a
            href="#contato"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Contato
          </a>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Locale = "en" | "pt"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Navbar
    "nav.about": "About",
    "nav.technologies": "Technologies",
    "nav.team": "Team",
    "nav.impact": "Impact",
    "nav.contact": "Contact",
    "nav.contactUs": "Contact Us",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",

    // Hero
    "hero.badge": "Fundo Catarina Project",
    "hero.subtitle":
      "Semi-automated data labeling framework that uses Artificial Intelligence to accelerate model training, focused on the legal sector.",
    "hero.cta1": "Discover the Project",
    "hero.cta2": "Meet the Team",
    "hero.stat1.value": "10k+",
    "hero.stat1.label": "Labeled texts",
    "hero.stat2.value": "521",
    "hero.stat2.label": "Words per text",
    "hero.stat3.value": "UFSC",
    "hero.stat3.label": "University",
    "hero.stat4.value": "R$5M",
    "hero.stat4.label": "Ceos Project",

    // About
    "about.tag": "About the Project",
    "about.title": "From academia to innovation",
    "about.subtitle":
      "Born from the practical experience of UFSC researchers in the Ceos Project, Catarina Label AI transforms a real challenge into an accessible solution for researchers and entrepreneurs in Santa Catarina.",
    "about.card1.title": "The Problem",
    "about.card1.desc":
      "Data labeling is a critical bottleneck for AI innovation. It is a manual, repetitive, and massive task that consumes hundreds of working hours. In our project, labeling 100 texts took an average of two hours of work.",
    "about.card2.title": "The Solution",
    "about.card2.desc":
      "We conceived Catarina-Label AI: a semi-automated framework that uses AI itself to accelerate model training, combining automated labeling with intelligent human validation.",
    "about.card3.title": "The Focus",
    "about.card3.desc":
      "With a primary focus on the legal area, the project aims to position UFSC and Santa Catarina as a reference hub in the development of AI tools applied to the legal context and the public sector.",

    // Tech
    "tech.tag": "Technologies",
    "tech.title": "State of the art in data labeling",
    "tech.subtitle":
      "We integrate advanced state-of-the-art techniques in data labeling for AI, grounded in recent research.",
    "tech.t1.title": "Pre-Labeling with Foundation Models",
    "tech.t1.desc":
      "Use of pre-trained models (LLMs) to automatically generate a first version of labels, following the emerging 'LLM as a Judge' approach that shows promising results in international literature.",
    "tech.t1.h1": "Significant cost and time reduction",
    "tech.t1.h2": "Agreement similar to human annotators",
    "tech.t1.h3": "Cost up to 100x lower than manual annotation",
    "tech.t2.title": "Active Learning",
    "tech.t2.desc":
      "The AI model identifies which data points are most difficult and requests human annotation only for the most informative examples, optimizing expert time.",
    "tech.t2.h1": "Intelligent sample selection",
    "tech.t2.h2": "Expert time optimization",
    "tech.t2.h3": "Focus on most informative examples",
    "tech.t3.title": "Human-in-the-Loop Interface",
    "tech.t3.desc":
      "An interactive workflow where humans validate, correct, and refine AI decisions, making the process an efficient collaboration between human and machine.",
    "tech.t3.h1": "Integrated human validation",
    "tech.t3.h2": "Continuous model refinement",
    "tech.t3.h3": "Human-machine collaboration",

    // Team
    "team.tag": "Team",
    "team.title": "Researchers & Developers",
    "team.subtitle":
      "Our team is composed of UFSC researchers from the Ceos Project, with expertise in Databases, Machine Learning, NLP, and Software Engineering.",
    "team.modal.close": "Close",
    "team.modal.lattes": "Lattes CV",

    // Team members
    "member.hudson.role": "Databases & Data Quality",
    "member.hudson.level": "PhD Student",
    "member.hudson.bio":
      "PhD student in Computer Science at UFSC, working in the Database research line. Member of the Ceos Project team, a partnership between UFSC and the Public Prosecutor's Office of Santa Catarina (MPSC). Has experience in relational and NoSQL databases, data quality management in AI processes, with focus on data auditing for fraud detection in the public sector.",

    "member.paulo.role": "Machine Learning & Computational AI",
    "member.paulo.level": "Master's Student",
    "member.paulo.bio":
      "Master's student in Computer Science at UFSC, working in the Machine Learning and Computational Intelligence research line. Member of the Ceos Project team. Has experience in machine learning projects, with focus on fraud detection and the development of AI-based tools applied to the public sector.",

    "member.pedro.role": "NLP & Data Integration",
    "member.pedro.level": "Master's Student",
    "member.pedro.bio":
      "Master's student in Computer Science at UFSC, working in the Database research line. Member of the Ceos Project team. Has experience in natural language processing, data-centric artificial intelligence, data integration and quality, with focus on information extraction, classification, and entity linking.",

    "member.carlos.role": "AI Applied to Health & Data",
    "member.carlos.level": "Undergraduate",
    "member.carlos.bio":
      "Undergraduate in Computer Science at UFSC, working in the research line of Artificial Intelligence applied to Health Management, with focus on the use of Electronic Health Record data within the Ceos Project. Contributes to the development of solutions for intelligent decision support in complex public sector domains.",

    "member.francisco.role": "Data Extraction",
    "member.francisco.level": "Undergraduate",
    "member.francisco.bio":
      "Undergraduate in Computer Science at UFSC, working in the Data Extraction research line. Member of the Ceos Project team. Contributes to the development of solutions that improve the preparation and organization of legal document data for AI models.",

    "member.eduardo.role": "Backend & Automation",
    "member.eduardo.level": "Undergraduate",
    "member.eduardo.bio":
      "Undergraduate in Information Systems at UFSC, with interest in backend development, automation, and software quality. Has experience in university extension as a volunteer in the Florescer Project, working in task management, marketing, and programming tutoring. Participated in events such as FERMAT, UFSC Course Fair, and CTC Open Doors.",

    // Impact
    "impact.tag": "Impact & Target Audience",
    "impact.title": "Who we build for",
    "impact.subtitle":
      "Catarina Label AI serves researchers, startups, and public institutions, offering an accessible and scalable solution.",
    "impact.a1.title": "Lawtechs & Legaltechs",
    "impact.a1.desc":
      "Legal technology startups that handle large volumes of textual documents such as lawsuits, petitions, and case law.",
    "impact.a2.title": "Research Groups",
    "impact.a2.desc":
      "Researchers in Law and Artificial Intelligence who need annotated datasets for model training.",
    "impact.a3.title": "Public Institutions",
    "impact.a3.desc":
      "Innovation departments of public agencies and law firms seeking efficiency with AI.",
    "impact.a4.title": "Innovation Ecosystem",
    "impact.a4.desc":
      "Graduate students and technology-based startups in areas such as Engineering, Health, and Finance.",
    "impact.metricsLabel":
      "Data from Santa Catarina's Technology Ecosystem (ACATE Tech Report 2023)",
    "impact.m1.value": "22k",
    "impact.m1.label": "Tech companies in SC",
    "impact.m2.value": "R$23.6B",
    "impact.m2.label": "Annual sector revenue",
    "impact.m3.value": "35.3%",
    "impact.m3.label": "Already use AI/ML",
    "impact.m4.value": "7,700+",
    "impact.m4.label": "Potentially benefited companies",

    // CTA
    "cta.title": "Want to learn more about Catarina Label AI?",
    "cta.subtitle":
      "We are in the ideation and validation phase. If you are a researcher, entrepreneur, or represent an institution interested in intelligent data labeling, get in touch with us.",
    "cta.btn1": "Get in Touch",
    "cta.btn2": "Connect on LinkedIn",

    // Footer
    "footer.description":
      "Developed by researchers from the Federal University of Santa Catarina (UFSC) \u2014 Fundo Catarina Project",
    "footer.about": "About",
    "footer.team": "Team",
    "footer.contact": "Contact",
  },
  pt: {
    // Navbar
    "nav.about": "Sobre",
    "nav.technologies": "Tecnologias",
    "nav.team": "Equipe",
    "nav.impact": "Impacto",
    "nav.contact": "Contato",
    "nav.contactUs": "Fale Conosco",
    "nav.openMenu": "Abrir menu",
    "nav.closeMenu": "Fechar menu",

    // Hero
    "hero.badge": "Projeto Fundo Catarina",
    "hero.subtitle":
      "Framework semi-automatizado de rotulagem de dados que utiliza Inteligência Artificial para acelerar o treinamento de modelos, com foco no setor jurídico.",
    "hero.cta1": "Conhecer o Projeto",
    "hero.cta2": "Conheça a Equipe",
    "hero.stat1.value": "10k+",
    "hero.stat1.label": "Textos rotulados",
    "hero.stat2.value": "521",
    "hero.stat2.label": "Palavras por texto",
    "hero.stat3.value": "UFSC",
    "hero.stat3.label": "Universidade",
    "hero.stat4.value": "R$5M",
    "hero.stat4.label": "Projeto Ceos",

    // About
    "about.tag": "Sobre o Projeto",
    "about.title": "Da academia para a inovação",
    "about.subtitle":
      "Nascido da experiência prática de pesquisadores da UFSC no Projeto Ceos, o Catarina Label AI transforma um desafio real em uma solução acessível para pesquisadores e empreendedores catarinenses.",
    "about.card1.title": "O Problema",
    "about.card1.desc":
      "A rotulagem de dados é um gargalo crítico para a inovação em IA. É uma tarefa manual, repetitiva e massiva que consome centenas de horas de trabalho. Em nosso projeto, rotular 100 textos demandava em média duas horas de trabalho.",
    "about.card2.title": "A Solução",
    "about.card2.desc":
      "Idealizamos o Catarina-Label AI: um framework semi-automatizado que utiliza a própria IA para acelerar o treinamento de modelos, combinando rotulagem automatizada com validação humana inteligente.",
    "about.card3.title": "O Foco",
    "about.card3.desc":
      "Com foco principal na área jurídica, o projeto visa posicionar a UFSC e Santa Catarina como polo de referência no desenvolvimento de ferramentas de IA aplicadas ao contexto jurídico e ao setor público.",

    // Tech
    "tech.tag": "Tecnologias",
    "tech.title": "Estado da arte em rotulagem de dados",
    "tech.subtitle":
      "Integramos técnicas avançadas do estado da arte na área de rotulagem de dados para IA, fundamentadas por pesquisas recentes.",
    "tech.t1.title": "Pré-Rotulagem com Modelos Fundacionais",
    "tech.t1.desc":
      "Utilização de modelos pré-treinados (LLMs) para gerar automaticamente uma primeira versão dos rótulos, seguindo a abordagem emergente 'LLM as a Judge' que apresenta resultados promissores na literatura internacional.",
    "tech.t1.h1": "Redução significativa de custo e tempo",
    "tech.t1.h2": "Concordância similar a anotadores humanos",
    "tech.t1.h3": "Custo até 100x menor que anotação manual",
    "tech.t2.title": "Aprendizagem Ativa (Active Learning)",
    "tech.t2.desc":
      "O modelo de IA identifica quais dados são mais difíceis e solicita a anotação humana apenas para os exemplos mais informativos, otimizando o tempo do especialista.",
    "tech.t2.h1": "Seleção inteligente de amostras",
    "tech.t2.h2": "Otimização do tempo do especialista",
    "tech.t2.h3": "Foco nos exemplos mais informativos",
    "tech.t3.title": "Interface Human-in-the-Loop",
    "tech.t3.desc":
      "Um fluxo de trabalho interativo em que o humano valida, corrige e refina as decisões da IA, tornando o processo uma colaboração eficiente entre homem e máquina.",
    "tech.t3.h1": "Validação humana integrada",
    "tech.t3.h2": "Refinamento contínuo do modelo",
    "tech.t3.h3": "Colaboração homem-máquina",

    // Team
    "team.tag": "Equipe",
    "team.title": "Pesquisadores e Desenvolvedores",
    "team.subtitle":
      "Nossa equipe é composta por pesquisadores da UFSC do Projeto Ceos, com competências em Banco de Dados, Machine Learning, NLP e Engenharia de Software.",
    "team.modal.close": "Fechar",
    "team.modal.lattes": "Currículo Lattes",

    // Team members
    "member.hudson.role": "Banco de Dados & Qualidade de Dados",
    "member.hudson.level": "Doutorando",
    "member.hudson.bio":
      "Doutorando em Ciência da Computação na UFSC, atuando na linha de pesquisa de Banco de Dados. Integra a equipe do Projeto Ceos, parceria entre a UFSC e o Ministério Público de Santa Catarina (MPSC). Possui experiência em Banco de Dados relacionais e NoSQL, gestão de qualidade de dados em processos de Inteligência Artificial, com foco em auditoria de dados na detecção de fraudes aplicadas ao setor público.",

    "member.paulo.role": "Machine Learning & IA Computacional",
    "member.paulo.level": "Mestrando",
    "member.paulo.bio":
      "Mestrando em Ciência da Computação na UFSC, atuando na linha de pesquisa Machine Learning e Inteligência Computacional. Integra a equipe do Projeto Ceos. Possui experiência em projetos de aprendizado de máquina, com foco na detecção de fraudes e no desenvolvimento de ferramentas baseadas em Inteligência Artificial aplicadas ao setor público.",

    "member.pedro.role": "NLP & Integração de Dados",
    "member.pedro.level": "Mestrando",
    "member.pedro.bio":
      "Mestrando em Ciência da Computação pela UFSC, atua na linha de pesquisa em Banco de Dados. Integra a equipe do Projeto Ceos. Possui experiência nas áreas de processamento de linguagem natural, inteligência artificial centrada em dados, integração e qualidade de dados, com foco em extração de informação, classificação e ligação de entidades.",

    "member.carlos.role": "IA aplicada à Saúde & Dados",
    "member.carlos.level": "Graduando",
    "member.carlos.bio":
      "Graduando em Ciência da Computação pela UFSC, atua na linha de pesquisa em Inteligência Artificial aplicada à Gestão em Saúde, com foco na utilização de dados do Registro Eletrônico de Saúde no âmbito do Projeto Ceos. Contribui para o desenvolvimento de soluções voltadas ao apoio à tomada de decisão inteligente em domínios complexos do setor público.",

    "member.francisco.role": "Extração de Dados",
    "member.francisco.level": "Graduando",
    "member.francisco.bio":
      "Graduando em Ciência da Computação pela UFSC, atuando na linha de pesquisa de Extração de Dados. Integra a equipe do Projeto Ceos. Contribui para o desenvolvimento de soluções que aprimoram a preparação e organização de dados de documentos jurídicos para modelos de IA.",

    "member.eduardo.role": "Backend & Automação",
    "member.eduardo.level": "Graduando",
    "member.eduardo.bio":
      "Graduando em Sistemas de Informação pela UFSC, com interesse em desenvolvimento backend, automação e qualidade de software. Possui experiência em extensão universitária como voluntário no Projeto Florescer, atuando na gestão de tarefas, marketing e tutoria em aulas de programação. Participou de eventos como a FERMAT, Feira de Cursos da UFSC e CTC de Portas Abertas.",

    // Impact
    "impact.tag": "Impacto & Público-Alvo",
    "impact.title": "Para quem construímos",
    "impact.subtitle":
      "O Catarina Label AI atende desde pesquisadores acadêmicos até startups e órgãos públicos, oferecendo uma solução acessível e escalável.",
    "impact.a1.title": "Lawtechs & Legaltechs",
    "impact.a1.desc":
      "Startups de tecnologia jurídica que lidam com grandes volumes de documentos textuais como processos, petições e jurisprudências.",
    "impact.a2.title": "Grupos de Pesquisa",
    "impact.a2.desc":
      "Pesquisadores em Direito e Inteligência Artificial que necessitam de datasets anotados para treinamento de modelos.",
    "impact.a3.title": "Órgãos Públicos",
    "impact.a3.desc":
      "Departamentos de inovação de órgãos públicos e escritórios de advocacia que buscam eficiência com IA.",
    "impact.a4.title": "Ecossistema de Inovação",
    "impact.a4.desc":
      "Estudantes de pós-graduação e startups de base tecnológica em áreas como Engenharias, Saúde e Finanças.",
    "impact.metricsLabel":
      "Dados do Ecossistema de Tecnologia de Santa Catarina (ACATE Tech Report 2023)",
    "impact.m1.value": "22 mil",
    "impact.m1.label": "Empresas de tecnologia em SC",
    "impact.m2.value": "R$23,6B",
    "impact.m2.label": "Faturamento anual do setor",
    "impact.m3.value": "35,3%",
    "impact.m3.label": "Já utilizam IA/ML",
    "impact.m4.value": "7.700+",
    "impact.m4.label": "Empresas potencialmente beneficiadas",

    // CTA
    "cta.title": "Quer saber mais sobre o Catarina Label AI?",
    "cta.subtitle":
      "Estamos na fase de ideação e validação. Se você é pesquisador, empreendedor ou representa uma instituição interessada em rotulagem inteligente de dados, entre em contato conosco.",
    "cta.btn1": "Entrar em Contato",
    "cta.btn2": "Conectar no LinkedIn",

    // Footer
    "footer.description":
      "Desenvolvido por pesquisadores da Universidade Federal de Santa Catarina (UFSC) \u2014 Projeto Fundo Catarina",
    "footer.about": "Sobre",
    "footer.team": "Equipe",
    "footer.contact": "Contato",
  },
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt")

  const t = (key: string): string => {
    return translations[locale][key] ?? key
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

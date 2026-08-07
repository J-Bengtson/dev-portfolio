"use client";

import * as React from "react";
import Image from "next/image";
import {
  Home,
  User,
  Briefcase,
  FolderKanban,
  Layers,
  Trophy,
  TerminalSquare,
  Mail,
  Download,
  Github,
  Linkedin,
  Code2,
  Rocket,
  BarChart3,
  MapPin,
  ArrowRight,
  Sparkles,
  Send,
  Bot,
  Quote,
  Award,
  BookOpen,
  Zap,
  Star,
  GitBranch,
  Server,
  Gauge,
  Workflow,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
  HelpCircle,
  CheckCircle2,
  ChevronDown,
  Wrench,
  Globe2,
  GitPullRequest,
  Bookmark,
  CalendarDays,
  Check,
  Search,
  Loader2,
  ExternalLink,
  FileText,
} from "lucide-react";
import { ProjectCarousel, type CarouselProject } from "@/components/ProjectCarousel";
import { Marquee } from "@/components/Marquee";
import { TechIcon } from "@/components/TechIcon";

const STATS = [
  { icon: Code2, value: "6+", label: "Anos desenvolvendo" },
  { icon: Rocket, value: "30+", label: "Projetos entregues" },
  { icon: Layers, value: "15+", label: "Tecnologias" },
];

const JOURNEY = [
  { year: "2019 - 2020", role: "Estagiário", company: "GreenLegis" },
  { year: "2020 - 2024", role: "Dev Júnior", company: "GreenLegis" },
  { year: "2024 - 2026", role: "Dev Pleno", company: "GreenLegis" },
];

const STACK = [
  {
    group: "Backend",
    items: [".NET Core", "Microserviços", "C#", "REST APIs"],
  },
  {
    group: "Frontend",
    items: ["React", "TypeScript", "Redux", "Material UI", "Angular"],
  },
  { group: "Database", items: ["MySQL", "MongoDB", "Elastic Search"] },
  { group: "DevOps & Cloud", items: ["AWS", "Docker", "CI/CD", "Terraform"] },
];

const ACHIEVEMENTS = [
  {
    title: "First Production Deploy",
    desc: "Primeira aplicação em produção",
  },
  { title: "100k+ requisições/dia", desc: "APIs escaláveis e otimizadas" },
  { title: "Dockerizado", desc: "Aplicações containerizadas" },
  { title: "CI/CD implementado", desc: "Pipelines automatizados" },
  { title: "Open Source", desc: "Contribuidor ativo" },
  { title: "Architecture Design", desc: "Soluções escaláveis" },
];

const CONTACT = [
  { icon: Mail, label: "Email", value: "contato@juliobengtson.dev" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/juliobengtson" },
  { icon: Github, label: "GitHub", value: "github.com/J-Bengtson" },
  { icon: MapPin, label: "Localização", value: "Belo Horizonte, MG - Brasil" },
];

const CAROUSEL = [
  {
    title: "Sistema de Gestão Empresarial",
    category: "Full Stack",
    desc: "ERP modular com dashboard em tempo real, controle de estoque e BI integrado.",
    tags: ["React", ".NET Core", "MySQL", "Docker"],
    metric: "↓ 40% tempo operacional",
    url: "#",
  },
  {
    title: "Plataforma SaaS Multi-tenant",
    category: "Arquitetura",
    desc: "Isolamento por tenant, billing recorrente e onboarding self-service.",
    tags: ["React", "MySQL", "AWS", "Microserviços"],
    metric: "1.2k contas ativas",
    url: "#",
  },
  {
    title: "API de Pagamentos",
    category: "Backend",
    desc: "Gateway resiliente com filas, retry idempotente e observabilidade completa.",
    tags: [".NET Core", "Microserviços", "Docker", "AWS"],
    metric: "100k+ req/dia",
    url: "#",
  },
  {
    title: "Design System Interno",
    category: "Frontend",
    desc: "Biblioteca de componentes acessíveis com tokens e documentação viva.",
    tags: ["React", "TypeScript", "Material UI"],
    metric: "38 componentes",
    url: "#",
  },
  {
    title: "Pipeline de Dados",
    category: "DevOps",
    desc: "Ingestão event-driven com processamento incremental e alertas automáticos.",
    tags: ["Docker", "AWS", "MySQL"],
    metric: "99.9% uptime",
    url: "#",
  },
];

const SERVICES = [
  {
    icon: Code2,
    title: "Aplicações Web",
    desc: "SPAs e sites performáticos com React, TypeScript e Material UI.",
  },
  {
    icon: Server,
    title: "APIs & Backend",
    desc: "APIs REST em .NET Core e arquitetura de Microsserviços.",
  },
  {
    icon: Gauge,
    title: "Performance & Banco de Dados",
    desc: "Otimização de consultas MySQL e alta disponibilidade.",
  },
  {
    icon: GitBranch,
    title: "DevOps & Cloud",
    desc: "Containers Docker, implantação na AWS e automação CI/CD.",
  },
];

const TESTIMONIALS = [
  {
    name: "Ana Ribeiro",
    role: "Product Manager",
    text: "Entrega previsível e comunicação clara. Reduziu nosso lead time pela metade.",
  },
  {
    name: "Carlos Menezes",
    role: "CTO",
    text: "Arquitetura sólida e código limpo — a base que usamos até hoje.",
  },
  {
    name: "Juliana Prado",
    role: "Tech Lead",
    text: "Domina front e back com a mesma profundidade. Referência no time.",
  },
  {
    name: "Rafael Souza",
    role: "Founder",
    text: "Transformou um protótipo em produto com usuários pagantes em 3 meses.",
  },
];

const CERTS = [
  { title: "Formação Angular 13 - O início criando 7 projetos", year: "2026", issuer: "Udemy" },
  { title: "Fundamentos do C#", year: "2023", issuer: "desenvolvedor.io" },
  { title: "React + Redux, Material UI, Hooks, Typescript e API's Rest", year: "2022", issuer: "Udemy" },
  { title: "Clean Architecture Essencial - ASP .NET Core com C#", year: "2022", issuer: "Udemy" },
];

const ARTICLES = [
  {
    title: "Clean Architecture no .NET 8 na prática",
    read: "8 min",
    tag: "Backend",
  },
  {
    title: "Server Components: quando realmente valem a pena",
    read: "6 min",
    tag: "React",
  },
  {
    title: "Do Docker ao Kubernetes sem dor de cabeça",
    read: "10 min",
    tag: "DevOps",
  },
];

const WORKFLOW = [
  {
    step: "01",
    title: "Imersão & Discovery",
    desc: "Análise profunda de requisitos, gargalos de arquitetura e objetivos de negócio antes de escrever código.",
  },
  {
    step: "02",
    title: "Desenho de Arquitetura",
    desc: "Modelagem de dados, diagramas de fluxo, definição de stack e estratégia de segurança e resiliência.",
  },
  {
    step: "03",
    title: "Desenvolvimento Ágil",
    desc: "Sprints com código limpo, testes automatizados, CI/CD e entregas parciais validadas com o cliente.",
  },
  {
    step: "04",
    title: "Deploy & Observabilidade",
    desc: "Lançamento automatizado em produção com logs distribuídos, telemetria, dashboards de performance e suporte.",
  },
];

const CASE_STUDIES = [
  {
    client: "Fintech Leader",
    title: "Otimização de API Financeira",
    result: "Redução de 65% na latência e zero downtime na Black Friday",
    highlight: "-65% Latência",
  },
  {
    client: "E-commerce SaaS",
    title: "Migração Monolito -> Microserviços",
    result: "Arquitetura com .NET 8 e Redis processando 150k+ pedidos por dia",
    highlight: "150k+ req/dia",
  },
];

const PHILOSOPHY = [
  {
    title: "Simplicidade Antes de Abstração",
    desc: "Evito complexidade desnecessária. O código mais fácil de manter é aquele que resolve o problema sem inventar rodeios.",
  },
  {
    title: "Testes como Documentação Viva",
    desc: "Suíte de testes automatizados garante refatorações seguras e documenta o comportamento real do sistema.",
  },
  {
    title: "Foco no Impacto de Negócio",
    desc: "Tecnologia é meio, não fim. Toda decisão técnica deve gerar valor claro para o usuário e eficiência operacional.",
  },
];

const MENTORSHIP = [
  {
    title: "Code Review & Arquitetura",
    desc: "Auditoria detalhada do seu projeto com feedbacks práticos de Clean Code e performance.",
  },
  {
    title: "Mentoria 1-on-1 para Devs",
    desc: "Acompanhamento individual para aceleração de carreira, migração de stack (.NET/React) e entrevistas.",
  },
];

const FAQ = [
  {
    q: "Qual é o seu formato de trabalho atual?",
    a: "Atuo tanto como Software Engineer em regime PJ/CLT quanto em consultorias técnicas e projetos pontuais de arquitetura.",
  },
  {
    q: "Quais tecnologias você mais utiliza?",
    a: "Especialista em ecossistema .NET (C#) para backend/APIs resilientes e React / Next.js / TypeScript no frontend moderno.",
  },
  {
    q: "Você realiza consultoria para projetos legados?",
    a: "Sim, realizo diagnóstico de performance, refatoração de código, modernização de stack e implementação de DevOps/CI-CD.",
  },
];

const GLOBAL_METRICS = [
  { label: "Commits no último ano", value: "1,450+" },
  { label: "Linhas de código mantidas", value: "250k+" },
  { label: "Usuários impactados", value: "500k+" },
  { label: "Países de atuação", value: "Global" },
];

const ROADMAP = [
  {
    period: "Q1 2025",
    goal: "Especialização em Rust & WebAssembly",
    status: "Em andamento",
  },
  {
    period: "Q2 2025",
    goal: "Lançamento de biblioteca Open Source para .NET",
    status: "Planejado",
  },
  {
    period: "Q3 2025",
    goal: "Palestra em conferência de Arquitetura de Software",
    status: "Planejado",
  },
];

const DEV_SETUP = [
  { category: "Hardware", items: ["MacBook Pro M2 Max", "Monitor LG UltraFine 34\"", "Teclado Keychron K2"] },
  { category: "Editor & Terminal", items: ["VS Code / Rider", "Warp Terminal", "Zsh + Starship"] },
  { category: "Produtividade", items: ["Raycast", "Notion", "Linear", "Docker Desktop"] },
];

const OPEN_SOURCE = [
  {
    repo: "dotnet-resilience-pack",
    desc: "Políticas configuráveis de retry, circuit-breaker e fallback para .NET 8.",
    stars: "128 stars",
    language: "C#",
  },
  {
    repo: "react-bento-components",
    desc: "Coleção de cards animados e layouts responsivos em Bento Grid.",
    stars: "94 stars",
    language: "TypeScript",
  },
];

const RECOMMENDED_READS = [
  { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", topic: "Arquitetura & Sistemas" },
  { title: "Clean Code / Clean Architecture", author: "Robert C. Martin", topic: "Boas Práticas" },
  { title: "Domain-Driven Design", author: "Eric Evans", topic: "Modelagem" },
];

const TECH_MARQUEE = [
  "React",
  "TypeScript",
  "C#",
  ".NET 8",
  "Next.js",
  "Node.js",
  "Tailwind",
  "PostgreSQL",
  "SQL Server",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "gRPC",
  "CI/CD",
];

function Card({
  className = "",
  children,
  delay = 0,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`animate-reveal rounded-3xl border border-border bg-surface/70 backdrop-blur-sm ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}

function Label({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon?: React.ElementType;
}) {
  return (
    <h2 className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
      {Icon ? (
        <span className="flex size-6 items-center justify-center rounded-lg border border-border bg-surface-bright text-neon">
          <Icon className="size-3.5" strokeWidth={1.75} />
        </span>
      ) : null}
      {children}
    </h2>
  );
}

export function PortfolioPage() {
  const [aiQuestion, setAiQuestion] = React.useState("");
  const [carouselItems, setCarouselItems] = React.useState<CarouselProject[]>(CAROUSEL);
  const [loadingGitHub, setLoadingGitHub] = React.useState(true);
  const [githubError, setGithubError] = React.useState<string | null>(null);

  const [chatHistory, setChatHistory] = React.useState([
    {
      role: "user",
      text: "Você tem experiência com Node.js e C#?",
    },
    {
      role: "bot",
      text: "Sim! Tenho 6+ anos de experiência com Node.js e C#/.NET, desenvolvendo APIs de alta performance, microsserviços e aplicações web completas.",
    },
  ]);

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;

    const q = aiQuestion;
    setAiQuestion("");
    setChatHistory((prev) => [
      ...prev,
      { role: "user", text: q },
      {
        role: "bot",
        text: `Com base no meu currículo: Tenho sólida bagagem em ${q}. Se desejar saber mais sobre projetos específicos ou arquitetura, posso detalhar!`,
      },
    ]);
  };

  React.useEffect(() => {
    async function loadGitHubProjects() {
      try {
        const res = await fetch("/api/github?username=J-Bengtson");
        if (!res.ok) {
          throw new Error("Não foi possível carregar os projetos do GitHub.");
        }

        const data = await res.json();
        if (Array.isArray(data.carouselProjects) && data.carouselProjects.length > 0) {
          setCarouselItems(data.carouselProjects);
        }
      } catch (error) {
        setGithubError(
          error instanceof Error
            ? error.message
            : "Erro desconhecido ao buscar projetos do GitHub."
        );
      } finally {
        setLoadingGitHub(false);
      }
    }

    loadGitHubProjects();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* ambient glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/3 size-[36rem] rounded-full bg-primary/20 blur-[160px]" />
        <div className="absolute -bottom-40 right-0 size-[30rem] rounded-full bg-neon/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] p-4">
        {/* Main Grid */}
        <main className="grid min-w-0 flex-1 grid-cols-1 gap-4 xl:grid-cols-2">
          {/* HERO */}
          <Card id="hero" className="relative overflow-hidden p-8">
            <div className="pointer-events-none absolute right-0 bottom-0 h-full w-1/2 overflow-hidden opacity-60 mix-blend-lighten [mask-image:linear-gradient(to_right,transparent,black_45%)]">
              <img
                src="https://github.com/J-Bengtson.png"
                alt="Foto de perfil de Júlio Bengtson Neves"
                className="h-full w-full object-cover object-top transition-opacity duration-500"
              />
            </div>
            <div className="relative max-w-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-neon">
                <span className="size-1.5 animate-pulse rounded-full bg-neon" />
                Disponível para novas oportunidades
              </div>
              <p className="mt-8 text-lg text-muted-foreground">Olá, eu sou</p>
              <h1 className="bg-gradient-to-r from-neon via-primary to-neon-2 bg-clip-text font-display text-4xl leading-[0.95] tracking-tight text-transparent md:text-5xl">
                Júlio Bengtson Neves
              </h1>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Software Engineer | Full Stack & .NET
              </p>
              <p className="mt-6 text-pretty text-xs leading-relaxed text-muted-foreground md:text-sm">
                Transformo ideias em produtos digitais de alta performance usando React, C# / .NET e boas práticas de arquitetura.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#journey"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
                >
                  Explorar minha carreira
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-bright px-5 py-3 font-mono text-sm transition-colors hover:border-primary/40"
                >
                  Ver projetos &lt;/&gt;
                </a>
              </div>

              {/* ── Resume Banner (Hero) ─────────────────────── */}
              <a
                href="/resume"
                className="group mt-6 flex items-center justify-between gap-3 overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/10 via-surface-bright to-neon/5 px-4 py-3 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex size-9 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/15">
                    <FileText className="size-4 text-primary" strokeWidth={1.75} />
                    <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-background bg-neon animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Currículo completo disponível</p>
                    <p className="font-mono text-[10px] text-muted-foreground">Experiência · Skills · Certificações · PDF</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/15 px-3 py-1.5 font-mono text-[10px] text-primary transition-colors group-hover:bg-primary/25">
                  Ver agora
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>

              <div className="mt-10">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Conecte-se comigo
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: "https://github.com/J-Bengtson" },
                    { icon: Linkedin, href: "https://linkedin.com/in/juliobengtson" },
                    { icon: Mail, href: "mailto:contato@juliobengtson.dev" },
                  ].map(({ icon: Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Rede social"
                      className="flex size-10 items-center justify-center rounded-xl border border-border bg-surface-bright text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      <Icon className="size-4" strokeWidth={1.75} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* STATS + TERMINAL + AI */}
          <div id="stats" className="grid gap-4">
            <Card className="p-6" delay={80}>
              <Label icon={BarChart3}>Meu impacto em números</Label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {STATS.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-border bg-surface-bright/60 p-4 text-center"
                  >
                    <Icon
                      className="mx-auto mb-3 size-5 text-neon"
                      strokeWidth={1.75}
                    />
                    <div className="font-display text-2xl">{value}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase leading-tight text-muted-foreground">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

          </div>

          {/* FEATURED PROJECTS */}
          <Card id="projects" className="p-8 xl:col-span-2" delay={240}>
            <Label icon={FolderKanban}>Projetos em destaque</Label>
            {loadingGitHub ? (
              <p className="mb-4 text-sm text-muted-foreground">
                Carregando projetos do GitHub...
              </p>
            ) : githubError ? (
              <p className="mb-4 text-sm text-destructive">
                {githubError} Exibindo exemplos estáticos.
              </p>
            ) : null}
            <ProjectCarousel items={carouselItems} />
          </Card>

          {/* JOURNEY — full width */}
          <Card id="journey" className="p-8 xl:col-span-2" delay={320}>
            <Label icon={GitBranch}>Minha jornada</Label>
            <div className="relative overflow-x-auto pb-2">
              <div className="flex min-w-[720px] items-start gap-0">
                {JOURNEY.map((step, i) => (
                  <div key={step.year} className="relative flex-1 text-center">
                    <div className="mb-4 font-mono text-[11px] text-muted-foreground">
                      {step.year}
                    </div>
                    <div className="relative flex items-center">
                      <div
                        className={`h-px flex-1 ${i === 0 ? "bg-transparent" : "bg-border"}`}
                      />
                      <div
                        className={`size-2.5 rounded-full ${
                          i === JOURNEY.length - 1
                            ? "bg-neon shadow-[0_0_12px_var(--neon)]"
                            : "bg-primary"
                        }`}
                      />
                      <div
                        className={`h-px flex-1 ${i === JOURNEY.length - 1 ? "bg-transparent" : "bg-border"}`}
                      />
                    </div>
                    <div className="mt-4 px-2">
                      <div className="text-xs font-medium">{step.role}</div>
                      <div className="mt-1 font-mono text-[10px] text-muted-foreground">
                        {step.company}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>


          {/* CERTIFICAÇÕES */}
          <Card id="certs" className="p-8" delay={660}>
            <Label icon={Award}>Certificações</Label>
            <ul className="space-y-3">
              {CERTS.map((c) => (
                <li
                  key={c.title}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-surface-bright/60 p-3"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-neon-2/30 bg-neon-2/10">
                    <Award className="size-4 text-neon-2" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm">{c.title}</div>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {c.year}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          {/* RESUME CTA BANNER */}
          <Card className="group relative overflow-hidden p-0" delay={620}>
            <a
              href="/resume"
              className="flex items-center justify-between gap-4 p-6 transition-all duration-300 hover:bg-primary/5"
            >
              {/* Left glow accent */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-neon via-primary to-neon-2" />

              <div className="flex items-center gap-4 pl-2">
                {/* Animated icon */}
                <div className="relative flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                  <FileText className="size-5 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                  <span className="absolute -right-1 -top-1 flex size-3.5 items-center justify-center rounded-full bg-neon">
                    <span className="size-1.5 animate-ping rounded-full bg-white opacity-75" />
                  </span>
                </div>

                <div>
                  <p className="font-display text-base font-bold text-foreground">
                    Quer conhecer minha trajetória completa?
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Acesse o currículo interativo com experiências, formação, habilidades e download em PDF.
                  </p>
                </div>
              </div>

              {/* Right CTA */}
              <div className="flex shrink-0 flex-col items-end gap-2">
                <span className="flex items-center gap-1.5 rounded-xl border border-primary/40 bg-primary/15 px-4 py-2.5 font-mono text-xs font-medium text-primary transition-colors group-hover:bg-primary/25">
                  Ver Currículo
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">PDF disponível</span>
              </div>
            </a>
          </Card>

          {/* CONTACT */}
          <Card id="contact" className="flex flex-col p-8" delay={640}>
            <Label icon={Mail}>Contato</Label>
            <ul className="flex-1 space-y-4">
              {CONTACT.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl border border-border bg-surface-bright">
                    <Icon
                      className="size-4 text-muted-foreground"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {label}
                    </div>
                    <div className="text-sm">{value}</div>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="mailto:contato@seudominio.dev"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Vamos conversar <Rocket className="size-4" strokeWidth={1.75} />
            </a>
          </Card>
        </main>
      </div>

      <footer className="relative mx-auto mt-4 flex max-w-[1400px] flex-col items-center justify-between gap-3 rounded-3xl border border-border bg-surface/70 p-6 text-center md:flex-row md:text-left">
        <div className="font-mono text-[11px] text-muted-foreground">
          Feito com paixão por tecnologia 💜
        </div>
      </footer>
    </div>
  );
}

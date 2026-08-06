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
} from "lucide-react";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Marquee } from "@/components/Marquee";
import { TechIcon } from "@/components/TechIcon";

const NAV = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: Github, label: "Sync GitHub", href: "#github-sync" },
  { icon: User, label: "Sobre", href: "#stats" },
  { icon: Globe2, label: "Métricas", href: "#global-metrics" },
  { icon: Briefcase, label: "Carreira", href: "#journey" },
  { icon: FolderKanban, label: "Projetos", href: "#projects" },
  { icon: CalendarDays, label: "Roadmap", href: "#roadmap" },
  { icon: Workflow, label: "Processo", href: "#process" },
  { icon: TrendingUp, label: "Casos de Sucesso", href: "#cases" },
  { icon: ShieldCheck, label: "Princípios", href: "#philosophy" },
  { icon: Zap, label: "Serviços", href: "#services" },
  { icon: Wrench, label: "Ferramentas", href: "#setup" },
  { icon: GitPullRequest, label: "Open Source", href: "#opensource" },
  { icon: GraduationCap, label: "Mentoria", href: "#mentorship" },
  { icon: Layers, label: "Skills", href: "#stack" },
  { icon: Quote, label: "Depoimentos", href: "#testimonials" },
  { icon: Award, label: "Certificações", href: "#certs" },
  { icon: BookOpen, label: "Artigos", href: "#articles" },
  { icon: Bookmark, label: "Livros", href: "#reads" },
  { icon: HelpCircle, label: "FAQ", href: "#faq" },
  { icon: Trophy, label: "Conquistas", href: "#achievements" },
  { icon: Mail, label: "Contato", href: "#contact" },
];

const STATS = [
  { icon: Code2, value: "6+", label: "Anos desenvolvendo" },
  { icon: Rocket, value: "30+", label: "Projetos entregues" },
  { icon: Layers, value: "15+", label: "Tecnologias" },
  { icon: BarChart3, value: "99.9%", label: "Uptime" },
];

const JOURNEY = [
  { year: "2020", role: "Estágio", company: "Empresa X" },
  { year: "2021", role: "Dev Júnior", company: "Empresa Y" },
  { year: "2022", role: "Dev Pleno", company: "Empresa Z" },
  { year: "2023", role: "Projeto X", company: "Sistema de Gestão" },
  { year: "2024", role: "Projeto Y", company: "Plataforma SaaS" },
  { year: "2025", role: "Liderança Técnica", company: "Empresa Atual" },
  { year: "Atual", role: "Software Engineer", company: "Empresa Atual" },
];

const STACK = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  { group: "Backend", items: ["C#", ".NET 8", "Node.js", "REST / gRPC"] },
  { group: "Database", items: ["SQL Server", "PostgreSQL", "Redis"] },
  { group: "DevOps", items: ["Docker", "AWS", "CI/CD", "Kubernetes"] },
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
  { icon: Mail, label: "Email", value: "contato@seudominio.dev" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/seuperfil" },
  { icon: Github, label: "GitHub", value: "github.com/seuusuario" },
  { icon: MapPin, label: "Localização", value: "Brasil" },
];

const CAROUSEL = [
  {
    title: "Sistema de Gestão Empresarial",
    category: "Full Stack",
    desc: "ERP modular com dashboard em tempo real, controle de estoque e BI integrado.",
    tags: ["React", ".NET 8", "SQL Server", "Docker"],
    metric: "↓ 40% tempo operacional",
  },
  {
    title: "Plataforma SaaS Multi-tenant",
    category: "Arquitetura",
    desc: "Isolamento por tenant, billing recorrente e onboarding self-service.",
    tags: ["Next.js", "PostgreSQL", "Redis", "AWS"],
    metric: "1.2k contas ativas",
  },
  {
    title: "API de Pagamentos",
    category: "Backend",
    desc: "Gateway resiliente com filas, retry idempotente e observabilidade completa.",
    tags: ["C#", "gRPC", "RabbitMQ", "K8s"],
    metric: "100k+ req/dia",
  },
  {
    title: "Design System Interno",
    category: "Frontend",
    desc: "Biblioteca de componentes acessíveis com tokens e documentação viva.",
    tags: ["React", "TypeScript", "Tailwind", "Storybook"],
    metric: "38 componentes",
  },
  {
    title: "Pipeline de Dados",
    category: "DevOps",
    desc: "Ingestão event-driven com processamento incremental e alertas automáticos.",
    tags: ["Node.js", "Kafka", "Terraform", "AWS"],
    metric: "99.9% uptime",
  },
];

const SERVICES = [
  {
    icon: Code2,
    title: "Aplicações Web",
    desc: "SPAs e sites performáticos com React, Next.js e TypeScript.",
  },
  {
    icon: Server,
    title: "APIs & Backend",
    desc: "APIs REST/gRPC em C# e .NET com foco em escala e segurança.",
  },
  {
    icon: Gauge,
    title: "Performance",
    desc: "Auditoria e otimização de Core Web Vitals e consultas SQL.",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    desc: "Containers, pipelines automatizados e deploy sem downtime.",
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
  { title: "AWS Solutions Architect", year: "2025" },
  { title: "Microsoft Certified: Azure Developer", year: "2024" },
  { title: "Certified Kubernetes Application Developer", year: "2024" },
  { title: "Scrum Foundation Professional", year: "2022" },
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
  const [activeNav, setActiveNav] = React.useState(0);
  const [aiQuestion, setAiQuestion] = React.useState("");
  
  // GitHub Live Sync state
  const [ghUsername, setGhUsername] = React.useState("J-Bengtson");
  const [ghInput, setGhInput] = React.useState("J-Bengtson");
  const [ghLoading, setGhLoading] = React.useState(false);
  const [ghError, setGhError] = React.useState<string | null>(null);
  const [ghData, setGhData] = React.useState<any>(null);

  const fetchGithubData = React.useCallback(async (userToFetch: string) => {
    if (!userToFetch.trim()) return;
    setGhLoading(true);
    setGhError(null);
    try {
      const res = await fetch(`/api/github?username=${encodeURIComponent(userToFetch)}`);
      const data = await res.json();
      if (!res.ok) {
        setGhError(data.error || "Erro ao buscar usuário");
        setGhData(null);
      } else {
        setGhData(data);
        setGhUsername(userToFetch);
      }
    } catch (err) {
      setGhError("Falha na conexão com a API local");
    } finally {
      setGhLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchGithubData("J-Bengtson");
  }, [fetchGithubData]);

  const handleGithubSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchGithubData(ghInput);
  };

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

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* ambient glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/3 size-[36rem] rounded-full bg-primary/20 blur-[160px]" />
        <div className="absolute -bottom-40 right-0 size-[30rem] rounded-full bg-neon/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto flex max-w-[1400px] gap-4 p-4">
        {/* Sidebar Navigation */}
        <nav className="animate-reveal sticky top-4 hidden h-[calc(100vh-2rem)] w-56 shrink-0 flex-col rounded-3xl border border-border bg-surface/70 p-4 backdrop-blur-sm lg:flex">
          <div className="mb-8 flex items-center gap-2 px-2 pt-2">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary font-mono text-xs text-primary-foreground">
              &lt;/&gt;
            </div>
            <span className="font-display text-lg tracking-tight">
              DEV PORTFOLIO
            </span>
          </div>
          <ul className="flex-1 space-y-1 overflow-y-auto">
            {NAV.map(({ icon: Icon, label, href }, i) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setActiveNav(i)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                    i === activeNav
                      ? "border border-primary/30 bg-primary/15 text-foreground"
                      : "text-muted-foreground hover:bg-surface-bright hover:text-foreground"
                  }`}
                >
                  <Icon className="size-4" strokeWidth={1.75} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-4 flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-3 py-3 text-sm text-foreground transition-colors hover:bg-primary/20"
          >
            <Download className="size-4 text-primary" strokeWidth={1.75} />
            <span>
              Download CV
              <span className="block font-mono text-[10px] text-muted-foreground">
                PDF
              </span>
            </span>
          </a>
        </nav>

        {/* Main Grid */}
        <main className="grid min-w-0 flex-1 grid-cols-1 gap-4 xl:grid-cols-2">
          {/* GITHUB SYNC CARD */}
          <Card id="github-sync" className="p-8 xl:col-span-2" delay={40}>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <Label icon={Github}>GitHub Sync & Dados Dinâmicos</Label>
                <p className="text-xs text-muted-foreground">
                  Digite qualquer nome de usuário do GitHub para importar instantaneamente a foto, bio, estatísticas e projetos em tempo real.
                </p>
              </div>
              <form onSubmit={handleGithubSearch} className="flex gap-2">
                <div className="relative flex-1 md:w-64">
                  <input
                    type="text"
                    value={ghInput}
                    onChange={(e) => setGhInput(e.target.value)}
                    placeholder="Username (ex: J-Bengtson)"
                    className="w-full rounded-xl border border-border bg-surface-bright/80 py-2.5 pl-9 pr-3 font-mono text-xs focus:border-primary focus:outline-none"
                  />
                  <Search className="absolute left-3 top-3 size-3.5 text-muted-foreground" />
                </div>
                <button
                  type="submit"
                  disabled={ghLoading}
                  className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {ghLoading ? (
                    <Loader2 className="size-3.5 animate-spin" />
                  ) : (
                    <Github className="size-3.5" />
                  )}
                  Sincronizar
                </button>
              </form>
            </div>

            {ghError && (
              <div className="mt-4 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive">
                {ghError}
              </div>
            )}

            {ghData && ghData.profile && (
              <div className="mt-6 grid gap-6 border-t border-border pt-6 md:grid-cols-3">
                {/* Perfil Obtido */}
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface-bright/60 p-4">
                  {ghData.profile.avatar && (
                    <img
                      src={ghData.profile.avatar}
                      alt={ghData.profile.name}
                      className="size-14 rounded-full border border-primary/40 object-cover"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold">
                      {ghData.profile.name}
                    </div>
                    <div className="font-mono text-xs text-neon">
                      @{ghData.profile.login}
                    </div>
                    <p className="mt-1 line-clamp-2 text-[11px] text-muted-foreground">
                      {ghData.profile.bio}
                    </p>
                  </div>
                </div>

                {/* Métricas do Perfil */}
                <div className="grid grid-cols-3 gap-2 rounded-2xl border border-border bg-surface-bright/60 p-4 text-center">
                  <div>
                    <div className="font-display text-lg text-neon">
                      {ghData.profile.publicRepos}
                    </div>
                    <div className="font-mono text-[9px] uppercase text-muted-foreground">
                      Repos
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-lg text-neon">
                      {ghData.profile.followers}
                    </div>
                    <div className="font-mono text-[9px] uppercase text-muted-foreground">
                      Seguidores
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-lg text-neon">
                      {ghData.profile.following}
                    </div>
                    <div className="font-mono text-[9px] uppercase text-muted-foreground">
                      Seguindo
                    </div>
                  </div>
                </div>

                {/* Stacks Detectadas */}
                <div className="rounded-2xl border border-border bg-surface-bright/60 p-4">
                  <div className="font-mono text-[10px] uppercase text-muted-foreground">
                    Stacks Principais (GitHub)
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {ghData.topLanguages.length > 0 ? (
                      ghData.topLanguages.slice(0, 6).map((lang: any) => {
                        const name = typeof lang === "string" ? lang : lang.name;
                        return (
                          <span
                            key={name}
                            className="rounded-lg border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-xs text-neon"
                          >
                            {name}
                          </span>
                        );
                      })
                    ) : (
                      <span className="text-xs text-muted-foreground">
                        Nenhuma linguagem detectada
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Repositórios Recentes Obtidos Dinamicamente */}
            {ghData && ghData.repos && ghData.repos.length > 0 && (
              <div className="mt-6">
                <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Projetos Recentes Carregados do GitHub ({ghData.repos.length})
                </div>
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {ghData.repos.slice(0, 6).map((repo: any) => (
                    <a
                      key={repo.id}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-2xl border border-border bg-surface-bright/60 p-4 transition-all hover:border-primary/50"
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate font-mono text-xs font-semibold text-foreground group-hover:text-primary">
                          {repo.name}
                        </span>
                        <ExternalLink className="size-3 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                        {repo.description}
                      </p>
                      <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                        <span className="text-neon">{repo.language}</span>
                        <span>★ {repo.stars}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </Card>

          {/* HERO */}
          <Card id="hero" className="relative overflow-hidden p-8">
            <div className="pointer-events-none absolute right-0 bottom-0 h-full w-1/2 overflow-hidden opacity-60 mix-blend-lighten [mask-image:linear-gradient(to_right,transparent,black_45%)]">
              <img
                src={ghData?.profile?.avatar || "/assets/portrait.jpg"}
                alt="Retrato do desenvolvedor com iluminação neon"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="relative max-w-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-neon">
                <span className="size-1.5 animate-pulse rounded-full bg-neon" />
                Disponível para novas oportunidades
              </div>
              <p className="mt-8 text-lg text-muted-foreground">Olá, eu sou</p>
              <h1 className="bg-gradient-to-r from-neon via-primary to-neon-2 bg-clip-text font-display text-4xl leading-[0.95] tracking-tight text-transparent md:text-5xl">
                {ghData?.profile?.name || "SEU NOME"}
              </h1>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
                {ghData?.profile?.company || "Software Engineer"}
              </p>
              <p className="mt-6 text-pretty text-xs leading-relaxed text-muted-foreground md:text-sm">
                {ghData?.profile?.bio || "Transformo ideias em produtos digitais de alta performance usando React, C# / .NET e boas práticas de arquitetura."}
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
              <div className="mt-10">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Conecte-se comigo
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: ghData?.profile?.githubUrl || "https://github.com" },
                    { icon: Linkedin, href: "https://linkedin.com" },
                    { icon: Mail, href: `mailto:${ghData?.profile?.email || "contato@seudominio.dev"}` },
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

            <Card className="overflow-hidden" delay={160}>
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-3 rounded-full bg-destructive/80" />
                <span className="size-3 rounded-full bg-chart-4/80" />
                <span className="size-3 rounded-full bg-neon/80" />
                <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                  terminal.sh
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-muted-foreground">
                <span className="text-neon">$ whoami</span>
                {"\n"}&gt; Software Engineer{"\n\n"}
                <span className="text-neon">$ skills</span>
                {"\n"}&gt; Node.js &nbsp;&gt; TypeScript &nbsp;&gt; C# &nbsp;&gt;
                .NET{"\n"}&gt; React &nbsp;&nbsp;&gt; Docker &nbsp;&nbsp;&nbsp;&gt;
                MySQL &nbsp;&gt; AWS{"\n\n"}
                <span className="text-neon">$ projects</span>
                {"\n"}&gt; project-01 &nbsp;&gt; project-02 &nbsp;&gt; project-03
                {"\n\n"}
                <span className="text-neon">$ contact</span>
                {"\n"}&gt; digite: email | github | linkedin{"\n"}
                <span className="animate-pulse text-foreground">$ _</span>
              </pre>
            </Card>

            <Card className="p-6" delay={240}>
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Pergunte ao meu currículo
                </h2>
                <span className="inline-flex items-center gap-1 rounded-full border border-neon-2/30 bg-neon-2/10 px-2 py-0.5 font-mono text-[10px] text-neon-2">
                  <Sparkles className="size-3" /> IA
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-bright">
                  <Bot className="size-4 text-neon" strokeWidth={1.75} />
                </div>
                <div className="max-h-40 flex-1 space-y-2 overflow-y-auto pr-1">
                  {chatHistory.map((item, index) => (
                    <div
                      key={index}
                      className={
                        item.role === "user"
                          ? "ml-auto w-fit rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-xs text-primary-foreground"
                          : "rounded-2xl rounded-bl-sm border border-border bg-surface-bright px-3 py-2 text-xs text-muted-foreground"
                      }
                    >
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
              <form className="mt-5 flex gap-2" onSubmit={handleAiSubmit}>
                <input
                  aria-label="Pergunte sobre minha experiência"
                  placeholder="Pergunte sobre minha experiência, projetos, habilidades..."
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
                  className="min-w-0 flex-1 rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs outline-none placeholder:text-muted-foreground focus:border-primary/50"
                />
                <button
                  type="submit"
                  aria-label="Enviar pergunta"
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Send className="size-4" strokeWidth={1.75} />
                </button>
              </form>
            </Card>
          </div>

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

          {/* STACK */}
          <Card id="stack" className="p-8" delay={400}>
            <Label icon={Layers}>Stack principal</Label>
            <div className="grid grid-cols-2 gap-4">
              {STACK.map((block) => (
                <div
                  key={block.group}
                  className="rounded-2xl border border-border bg-surface-bright/60 p-4"
                >
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-neon">
                    {block.group}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {block.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/50 px-2 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                      >
                        <TechIcon name={item} className="size-3.5 text-neon" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* FEATURED PROJECT */}
          <Card className="overflow-hidden p-8" delay={480}>
            <Label icon={Rocket}>Projeto em destaque</Label>
            <div className="grid gap-6 sm:grid-cols-2">
              <img
                src="/assets/dashboard-preview.jpg"
                alt="Dashboard do sistema de gestão empresarial"
                className="h-40 w-full rounded-2xl border border-border object-cover"
              />
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg leading-tight">
                    Sistema de Gestão Empresarial
                  </h3>
                  <span className="shrink-0 rounded-full border border-neon-2/30 bg-neon-2/10 px-2 py-0.5 font-mono text-[9px] uppercase text-neon-2">
                    Destaque
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Plataforma completa para gestão empresarial com dashboard
                  inteligente e relatórios em tempo real.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["React", ".NET", "SQL Server", "Docker", "AWS"].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-bright px-2 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      <TechIcon name={t} className="size-3 text-neon" />
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#projects"
                  className="group mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary"
                >
                  Ver case completo
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Card>

          {/* ACHIEVEMENTS */}
          <Card id="achievements" className="p-8" delay={560}>
            <Label icon={Trophy}>Conquistas</Label>
            <ul className="space-y-3">
              {ACHIEVEMENTS.map((a) => (
                <li key={a.title} className="flex items-start gap-3">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-bright">
                    <Trophy className="size-3.5 text-neon" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{a.title}</div>
                    <div className="font-mono text-[10px] text-muted-foreground">
                      {a.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          {/* CARROSSEL DINÂMICO — full width */}
          <Card id="projects" className="overflow-hidden p-8 xl:col-span-2" delay={600}>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <h2 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="flex size-6 items-center justify-center rounded-lg border border-border bg-surface-bright text-neon">
                  <FolderKanban className="size-3.5" strokeWidth={1.75} />
                </span>
                Portfólio em movimento {ghData ? "(Sincronizado com GitHub)" : ""}
              </h2>
              <span className="font-mono text-[10px] text-muted-foreground">
                arraste · setas · auto-play
              </span>
            </div>
            <ProjectCarousel items={ghData?.carouselProjects && ghData.carouselProjects.length > 0 ? ghData.carouselProjects : CAROUSEL} />
          </Card>

          {/* TECH MARQUEE — full width */}
          <Card className="overflow-hidden py-6 xl:col-span-2" delay={620}>
            <Marquee>
              {TECH_MARQUEE.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-bright/60 px-4 py-2 font-mono text-xs text-muted-foreground"
                >
                  <TechIcon name={t} className="size-4 text-neon" />
                  {t}
                </span>
              ))}
            </Marquee>
            <div className="mt-3">
              <Marquee reverse duration={42}>
                {[...TECH_MARQUEE].reverse().map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-4 py-2 font-mono text-xs text-neon"
                  >
                    <TechIcon name={t} className="size-4" />
                    {t}
                  </span>
                ))}
              </Marquee>
            </div>
          </Card>

          {/* ESTATÍSTICAS E MÉTRICAS GLOBAIS DINÂMICAS */}
          <Card id="global-metrics" className="p-8 xl:col-span-2" delay={645}>
            <Label icon={Globe2}>Métricas Globais & Escala (GitHub Real-time)</Label>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Repositórios Públicos", value: ghData?.profile?.publicRepos ?? "30+" },
                { label: "Total de Estrelas", value: ghData?.profile?.totalStars ?? "150+" },
                { label: "Forks Recebidos", value: ghData?.profile?.totalForks ?? "45+" },
                { label: "Seguidores no GitHub", value: ghData?.profile?.followers ?? "100+" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-border bg-surface-bright/60 p-4 text-center"
                >
                  <div className="font-display text-2xl text-neon">{m.value}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase text-muted-foreground">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* SERVIÇOS */}
          <Card id="services" className="p-8" delay={640}>
            <Label icon={Sparkles}>Como posso ajudar</Label>
            <div className="grid gap-3 sm:grid-cols-2">
              {SERVICES.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-border bg-surface-bright/60 p-4 transition-colors hover:border-primary/40"
                >
                  <Icon
                    className="mb-3 size-5 text-neon transition-transform group-hover:scale-110"
                    strokeWidth={1.75}
                  />
                  <div className="text-sm font-medium">{title}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* NOVO 7: ROADMAP E METAS FUTURAS */}
          <Card id="roadmap" className="p-8" delay={648}>
            <Label icon={CalendarDays}>Roadmap & Visão Futura</Label>
            <div className="space-y-3">
              {ROADMAP.map((r) => (
                <div
                  key={r.period}
                  className="flex items-center justify-between rounded-2xl border border-border bg-surface-bright/60 p-3"
                >
                  <div>
                    <div className="font-mono text-[10px] uppercase text-neon">
                      {r.period}
                    </div>
                    <div className="text-sm font-medium">{r.goal}</div>
                  </div>
                  <span className="rounded-full bg-surface-bright px-2 py-1 font-mono text-[10px] text-muted-foreground">
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* NOVO 1: PROCESSO DE TRABALHO */}
          <Card id="process" className="p-8 xl:col-span-2" delay={650}>
            <Label icon={Workflow}>Processo & Metodologia</Label>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WORKFLOW.map((w) => (
                <div
                  key={w.step}
                  className="relative rounded-2xl border border-border bg-surface-bright/60 p-4 transition-all hover:border-primary/40"
                >
                  <span className="font-mono text-2xl font-bold text-neon/40">
                    {w.step}
                  </span>
                  <div className="mt-2 text-sm font-semibold">{w.title}</div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* NOVO 8: MEU SETUP & FERRAMENTAS */}
          <Card id="setup" className="p-8" delay={652}>
            <Label icon={Wrench}>Meu Setup & Workflow</Label>
            <div className="space-y-4">
              {DEV_SETUP.map((s) => (
                <div key={s.category}>
                  <div className="font-mono text-[10px] uppercase text-muted-foreground">
                    {s.category}
                  </div>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {s.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-border bg-surface-bright/60 px-2 py-1 font-mono text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* NOVO 2: CASOS DE SUCESSO */}
          <Card id="cases" className="p-8" delay={655}>
            <Label icon={TrendingUp}>Casos de Sucesso</Label>
            <div className="space-y-4">
              {CASE_STUDIES.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-border bg-surface-bright/60 p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase text-muted-foreground">
                      {c.client}
                    </span>
                    <span className="rounded-full bg-primary/20 px-2 py-0.5 font-mono text-[10px] text-neon">
                      {c.highlight}
                    </span>
                  </div>
                  <div className="mt-1 text-sm font-medium">{c.title}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{c.result}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* PROJETOS OPEN SOURCE DINÂMICOS */}
          <Card id="opensource" className="p-8 xl:col-span-2" delay={658}>
            <Label icon={GitPullRequest}>
              Contribuições Open Source {ghData ? "(Repositórios Reais do GitHub)" : ""}
            </Label>
            <div className="grid gap-4 sm:grid-cols-2">
              {(ghData?.openSourceRepos && ghData.openSourceRepos.length > 0
                ? ghData.openSourceRepos
                : OPEN_SOURCE
              ).map((o: any) => (
                <a
                  key={o.repo}
                  href={o.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-border bg-surface-bright/60 p-4 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-semibold text-neon group-hover:underline">
                      {o.repo}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      ★ {o.stars}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{o.desc}</p>
                </a>
              ))}
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

          {/* NOVO 3: FILOSOFIA & PRINCÍPIOS DE CÓDIGO */}
          <Card id="philosophy" className="p-8 xl:col-span-2" delay={665}>
            <Label icon={ShieldCheck}>Filosofia & Princípios</Label>
            <div className="grid gap-4 sm:grid-cols-3">
              {PHILOSOPHY.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-surface-bright/60 p-4"
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-neon">
                    <CheckCircle2 className="size-4 shrink-0" />
                    {p.title}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* NOVO 4: MENTORIA & CONSULTORIA */}
          <Card id="mentorship" className="p-8" delay={670}>
            <Label icon={GraduationCap}>Mentoria & Consultoria</Label>
            <div className="space-y-3">
              {MENTORSHIP.map((m) => (
                <div
                  key={m.title}
                  className="rounded-2xl border border-border bg-surface-bright/60 p-4"
                >
                  <div className="text-sm font-medium">{m.title}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{m.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* DEPOIMENTOS — full width marquee */}
          <Card id="testimonials" className="overflow-hidden p-8 xl:col-span-2" delay={680}>
            <Label icon={Quote}>O que dizem sobre meu trabalho</Label>
            <Marquee duration={38}>
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="w-[20rem] rounded-2xl border border-border bg-surface-bright/60 p-5"
                >
                  <Quote className="size-4 text-neon" strokeWidth={1.75} />
                  <blockquote className="mt-3 text-sm text-muted-foreground">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium">{t.name}</div>
                      <div className="font-mono text-[10px] text-muted-foreground">
                        {t.role}
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-3 fill-current text-neon-2"
                        />
                      ))}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </Marquee>
          </Card>

          {/* ARTIGOS */}
          <Card id="articles" className="p-8" delay={700}>
            <Label icon={BookOpen}>Escrevo sobre código</Label>
            <ul className="space-y-3">
              {ARTICLES.map((a) => (
                <li key={a.title}>
                  <a
                    href="#contact"
                    className="group flex items-start gap-3 rounded-2xl border border-border bg-surface-bright/60 p-4 transition-colors hover:border-primary/40"
                  >
                    <BookOpen
                      className="mt-0.5 size-4 shrink-0 text-neon"
                      strokeWidth={1.75}
                    />
                    <div className="min-w-0">
                      <div className="text-sm font-medium">{a.title}</div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {a.tag} · {a.read} de leitura
                      </div>
                    </div>
                    <ArrowRight className="ml-auto mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          </Card>

          {/* NOVO 10: LIVROS & RECOMENDAÇÕES */}
          <Card id="reads" className="p-8" delay={710}>
            <Label icon={Bookmark}>Livros & Recomendações</Label>
            <ul className="space-y-3">
              {RECOMMENDED_READS.map((b) => (
                <li
                  key={b.title}
                  className="rounded-2xl border border-border bg-surface-bright/60 p-3"
                >
                  <div className="font-mono text-[10px] uppercase text-neon">
                    {b.topic}
                  </div>
                  <div className="text-sm font-medium">{b.title}</div>
                  <div className="text-xs text-muted-foreground">{b.author}</div>
                </li>
              ))}
            </ul>
          </Card>

          {/* NOVO 5: PERGUNTAS FREQUENTES (FAQ) */}
          <Card id="faq" className="p-8 xl:col-span-2" delay={720}>
            <Label icon={HelpCircle}>Perguntas Frequentes (FAQ)</Label>
            <div className="grid gap-3 sm:grid-cols-3">
              {FAQ.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-border bg-surface-bright/60 p-4"
                >
                  <div className="text-sm font-medium text-neon">{item.q}</div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
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
        <div className="flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
          <span className="text-primary">&lt;/&gt;</span>
          “Código é como humor. Quando você tem que explicar, é ruim.” — Cory House
        </div>
        <div className="font-mono text-[11px] text-muted-foreground">
          Feito com paixão por tecnologia 💜
        </div>
      </footer>
    </div>
  );
}

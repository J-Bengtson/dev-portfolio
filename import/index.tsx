import { createFileRoute } from "@tanstack/react-router";
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
} from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import portrait from "@/assets/portrait.jpg";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Marquee } from "@/components/Marquee";
import { TechIcon } from "@/components/TechIcon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dev Full Stack | React, C# e .NET" },
      {
        name: "description",
        content:
          "Currículo interativo de desenvolvedor full stack: React, TypeScript, C#/.NET, Docker e AWS. Experiência, projetos e conquistas em um só lugar.",
      },
      { property: "og:title", content: "Dev Full Stack | React, C# e .NET" },
      {
        property: "og:description",
        content:
          "Currículo interativo de desenvolvedor full stack: React, TypeScript, C#/.NET, Docker e AWS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { icon: Home, label: "Home" },
  { icon: User, label: "Sobre" },
  { icon: Briefcase, label: "Carreira" },
  { icon: FolderKanban, label: "Projetos" },
  { icon: Zap, label: "Serviços" },
  { icon: Layers, label: "Skills" },
  { icon: Quote, label: "Depoimentos" },
  { icon: Award, label: "Certificações" },
  { icon: BookOpen, label: "Artigos" },
  { icon: Trophy, label: "Conquistas" },
  { icon: TerminalSquare, label: "Terminal" },
  { icon: Mail, label: "Contato" },
];

const STATS = [
  { icon: Code2, value: "6+", label: "Anos desenvolvendo" },
  { icon: Rocket, value: "30+", label: "Projetos entregues" },
  { icon: Layers, value: "15+", label: "Tecnologias" },
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
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <section
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
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* ambient glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/3 size-[36rem] rounded-full bg-primary/20 blur-[160px]" />
        <div className="absolute -bottom-40 right-0 size-[30rem] rounded-full bg-neon/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto flex max-w-[1400px] gap-4 p-4">
        {/* Sidebar */}
        <nav className="animate-reveal sticky top-4 hidden h-[calc(100vh-2rem)] w-56 shrink-0 flex-col rounded-3xl border border-border bg-surface/70 p-4 backdrop-blur-sm lg:flex">
          <div className="mb-8 flex items-center gap-2 px-2 pt-2">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary font-mono text-xs text-primary-foreground">
              &lt;/&gt;
            </div>
            <span className="font-display text-lg tracking-tight">
              SEUNOME
            </span>
          </div>
          <ul className="flex-1 space-y-1">
            {NAV.map(({ icon: Icon, label }, i) => (
              <li key={label}>
                <a
                  href="#"
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                    i === 0
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
            href="#"
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

        {/* Main grid */}
        <main className="grid min-w-0 flex-1 grid-cols-1 gap-4 xl:grid-cols-2">
          {/* HERO */}
          <Card className="relative overflow-hidden p-8">
            <img
              src={portrait}
              alt="Retrato do desenvolvedor com iluminação neon"
              width={1024}
              height={1024}
              className="pointer-events-none absolute right-0 bottom-0 h-full w-1/2 object-cover object-top opacity-60 mix-blend-lighten [mask-image:linear-gradient(to_right,transparent,black_45%)]"
            />
            <div className="relative max-w-sm">

              <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-neon">
                <span className="size-1.5 animate-pulse rounded-full bg-neon" />
                Disponível para novas oportunidades
              </div>
              <p className="mt-8 text-lg text-muted-foreground">Olá, eu sou</p>
              <h1 className="bg-gradient-to-r from-neon via-primary to-neon-2 bg-clip-text font-display text-5xl leading-[0.95] tracking-tight text-transparent md:text-6xl">
                SEU NOME
              </h1>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Software Engineer
              </p>
              <p className="mt-6 text-pretty text-muted-foreground">
                Transformo ideias em produtos digitais de alta performance
                usando <span className="text-foreground">React</span>,{" "}
                <span className="text-foreground">C# / .NET</span> e boas
                práticas de arquitetura.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
                >
                  Explorar minha carreira
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#"
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
                  {[Github, Linkedin, Mail].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
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
          <div className="grid gap-4">
            <Card className="p-6" delay={80}>
              <Label icon={BarChart3}>Estatísticas</Label>
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
                <div className="space-y-2">
                  <div className="ml-auto w-fit rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-xs text-primary-foreground">
                    Você tem experiência com Node.js?
                  </div>
                  <div className="rounded-2xl rounded-bl-sm border border-border bg-surface-bright px-3 py-2 text-xs text-muted-foreground">
                    Sim! Tenho 5+ anos de experiência com Node.js, atuando em 12
                    projetos com Express, TypeScript e arquitetura de
                    microsserviços.
                  </div>
                </div>
              </div>
              <form
                className="mt-5 flex gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  aria-label="Pergunte sobre minha experiência"
                  placeholder="Pergunte sobre minha experiência, projetos, habilidades..."
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
          <Card className="p-8 xl:col-span-2" delay={320}>
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
          <Card className="p-8" delay={400}>
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

          {/* ACHIEVEMENTS */}
          <Card className="p-8" delay={560}>
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
          <Card className="overflow-hidden p-8 xl:col-span-2" delay={600}>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <h2 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="flex size-6 items-center justify-center rounded-lg border border-border bg-surface-bright text-neon">
                  <FolderKanban className="size-3.5" strokeWidth={1.75} />
                </span>
                Portfólio em movimento
              </h2>
              <span className="font-mono text-[10px] text-muted-foreground">
                arraste · setas · auto-play
              </span>
            </div>
            <ProjectCarousel items={CAROUSEL} />
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

          {/* SERVIÇOS */}
          <Card className="p-8" delay={640}>
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

          {/* CERTIFICAÇÕES */}
          <Card className="p-8" delay={660}>
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

          {/* DEPOIMENTOS — full width marquee */}
          <Card className="overflow-hidden p-8 xl:col-span-2" delay={680}>
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
          <Card className="p-8" delay={700}>
            <Label icon={BookOpen}>Escrevo sobre código</Label>
            <ul className="space-y-3">
              {ARTICLES.map((a) => (
                <li key={a.title}>
                  <a
                    href="#"
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

          {/* CONTACT */}
          <Card className="flex flex-col p-8" delay={640}>
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

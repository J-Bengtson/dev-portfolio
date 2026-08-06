"use client";

import * as React from "react";
import {
  Briefcase,
  GraduationCap,
  Globe2,
  Code2,
  MapPin,
  Mail,
  Linkedin,
  Github,
  Download,
  FileText,
  ChevronLeft,
  Calendar,
  Building2,
  Star,
  Zap,
  Server,
  Layers,
  CheckCircle2,
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────
// Edit these arrays with your real information

const RESUME_HEADER = {
  name: "Seu Nome Completo",
  title: "Software Engineer Full Stack",
  location: "Brasil",
  email: "contato@seudominio.dev",
  linkedin: "linkedin.com/in/seuperfil",
  github: "github.com/seuusuario",
  summary:
    "Desenvolvedor Full Stack com 6+ anos de experiência criando aplicações escaláveis, APIs de alta performance e interfaces modernas. Especialista em React/Next.js e C#/.NET 8, com domínio em arquitetura de microsserviços, DevOps e cloud AWS.",
};

const EXPERIENCE = [
  {
    company: "Empresa Atual",
    role: "Software Engineer Sênior",
    period: "Jan 2025 – Presente",
    location: "Remoto",
    type: "CLT/PJ",
    description:
      "Liderança técnica de squad de 4 devs, responsável pela arquitetura de plataforma SaaS multi-tenant com Next.js e .NET 8.",
    highlights: [
      "Reduziu latência da API principal em 65% via cache Redis e otimização de queries",
      "Implementou pipeline CI/CD com GitHub Actions, reduzindo deploy de 2h para 8min",
      "Liderou migração de monolito para microsserviços com zero downtime",
      "Arquitetou design system com 38 componentes usados em 3 produtos",
    ],
    tags: ["Next.js", "C#", ".NET 8", "Redis", "Docker", "AWS"],
  },
  {
    company: "Empresa Anterior",
    role: "Dev Full Stack Pleno",
    period: "Mar 2022 – Dez 2024",
    location: "São Paulo, SP",
    type: "CLT",
    description:
      "Desenvolvimento de ERP modular com dashboard em tempo real, controle de estoque e módulos de BI integrado.",
    highlights: [
      "Entregou módulo de relatórios que reduziu trabalho manual da equipe de ops em 40%",
      "Desenvolveu API de pagamentos processando 100k+ requisições/dia com 99.9% de uptime",
      "Implementou testes automatizados (xUnit + React Testing Library) cobrindo 85% do código",
    ],
    tags: ["React", "TypeScript", "C#", "SQL Server", "Docker"],
  },
  {
    company: "Startup XYZ",
    role: "Desenvolvedor Júnior",
    period: "Jun 2020 – Fev 2022",
    location: "Remoto",
    type: "PJ",
    description:
      "Atuação em produto de gestão financeira para pequenas empresas, do frontend ao banco de dados.",
    highlights: [
      "Construiu módulo de importação de extratos bancários (OFX/CSV)",
      "Desenvolveu dashboard com Chart.js e dados em tempo real via WebSocket",
      "Participou ativamente de code reviews e implementação de padrões de Clean Code",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Chart.js"],
  },
  {
    company: "Agência Digital",
    role: "Estagiário de Desenvolvimento",
    period: "Jan 2019 – Mai 2020",
    location: "São Paulo, SP",
    type: "Estágio",
    description:
      "Desenvolvimento de sites institucionais e e-commerces, primeiro contato com desenvolvimento profissional.",
    highlights: [
      "Desenvolveu 12+ sites institucionais em WordPress e React",
      "Aprendeu fundamentos de DevOps e deploy em VPS Linux",
    ],
    tags: ["React", "WordPress", "PHP", "MySQL"],
  },
];

const EDUCATION = [
  {
    institution: "Universidade de São Paulo (USP)",
    course: "Bacharelado em Ciência da Computação",
    period: "2017 – 2021",
    location: "São Paulo, SP",
    description:
      "Ênfase em Engenharia de Software e Sistemas Distribuídos. TCC sobre arquitetura de microsserviços e resiliência em ambientes cloud.",
    highlights: [
      "Medalha de honra ao mérito acadêmico (2021)",
      "Monitor de Algoritmos e Estruturas de Dados (2019-2020)",
      "Participação em maratona de programação ICPC",
    ],
  },
  {
    institution: "AWS Training & Certification",
    course: "AWS Solutions Architect Associate",
    period: "2025",
    location: "Online",
    description:
      "Certificação oficial Amazon Web Services para arquitetura de soluções em nuvem.",
    highlights: [],
  },
  {
    institution: "Microsoft Learn",
    course: "Microsoft Certified: Azure Developer Associate",
    period: "2024",
    location: "Online",
    description: "Certificação oficial Microsoft para desenvolvimento em Azure.",
    highlights: [],
  },
  {
    institution: "Linux Foundation",
    course: "Certified Kubernetes Application Developer (CKAD)",
    period: "2024",
    location: "Online",
    description: "Certificação prática de Kubernetes para desenvolvedores de aplicações.",
    highlights: [],
  },
];

const SKILLS = [
  // Frontend
  { name: "React / Next.js", level: 95, group: "Frontend", icon: "⚛️" },
  { name: "TypeScript", level: 92, group: "Frontend", icon: "🔷" },
  { name: "CSS / Tailwind", level: 88, group: "Frontend", icon: "🎨" },
  // Backend
  { name: "C# / .NET 8", level: 93, group: "Backend", icon: "💜" },
  { name: "Node.js", level: 85, group: "Backend", icon: "🟢" },
  { name: "REST / gRPC APIs", level: 90, group: "Backend", icon: "🔌" },
  // Database
  { name: "SQL Server / PostgreSQL", level: 88, group: "Database", icon: "🗄️" },
  { name: "Redis", level: 82, group: "Database", icon: "🔴" },
  // DevOps
  { name: "Docker / Kubernetes", level: 85, group: "DevOps", icon: "🐳" },
  { name: "AWS", level: 80, group: "DevOps", icon: "☁️" },
  { name: "CI/CD Pipelines", level: 87, group: "DevOps", icon: "⚙️" },
  // Soft Skills
  { name: "Liderança Técnica", level: 88, group: "Soft Skills", icon: "🎯" },
  { name: "Arquitetura de Software", level: 90, group: "Soft Skills", icon: "📐" },
  { name: "Comunicação", level: 92, group: "Soft Skills", icon: "💬" },
];

const LANGUAGES = [
  { lang: "Português", level: "Nativo", flag: "🇧🇷", percent: 100 },
  { lang: "Inglês", level: "Avançado (C1)", flag: "🇺🇸", percent: 85 },
  { lang: "Espanhol", level: "Básico (A2)", flag: "🇪🇸", percent: 40 },
];

const SKILL_GROUPS = ["Frontend", "Backend", "Database", "DevOps", "Soft Skills"];

// ─── SKILL BAR ────────────────────────────────────────────────────────────────
function SkillBar({ name, level, icon, delay = 0 }: { name: string; level: number; icon: string; delay?: number }) {
  const [width, setWidth] = React.useState(0);
  const barRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={barRef} className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs font-medium text-foreground">
          <span>{icon}</span>
          {name}
        </span>
        <span className="font-mono text-xs text-primary">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-surface-bright">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-neon transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

// ─── TIMELINE NODE ────────────────────────────────────────────────────────────
function TimelineNode({ color = "primary" }: { color?: "primary" | "neon" | "neon-2" }) {
  const colors = {
    primary: "bg-primary border-primary/40 shadow-primary/30",
    neon: "bg-neon border-neon/40 shadow-neon/30",
    "neon-2": "bg-neon-2 border-neon-2/40 shadow-neon-2/30",
  };
  return (
    <div className="relative z-10 flex shrink-0 items-center justify-center">
      <div className={`size-4 rounded-full border-4 shadow-lg ${colors[color]}`} />
    </div>
  );
}

// ─── EXPERIENCE CARD ──────────────────────────────────────────────────────────
function ExperienceCard({
  item,
  index,
  expanded,
}: {
  item: (typeof EXPERIENCE)[0];
  index: number;
  expanded: boolean;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className="animate-reveal group rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Header */}
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-sm font-bold text-foreground">{item.role}</h3>
          <div className="mt-0.5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Building2 className="size-3" />
              {item.company}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="size-3" />
              {item.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="size-3" />
              {item.location}
            </span>
          </div>
        </div>
        <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] text-primary">
          {item.type}
        </span>
      </div>

      <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{item.description}</p>

      {/* Highlights */}
      {(expanded || open) && (
        <ul className="mb-3 space-y-1.5">
          {item.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-foreground/80">
              <CheckCircle2 className="mt-0.5 size-3 shrink-0 text-neon" />
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Footer */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-border bg-surface-bright px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        {!expanded && item.highlights.length > 0 && (
          <button
            onClick={() => setOpen(!open)}
            className="font-mono text-[10px] text-primary hover:underline"
          >
            {open ? "Ver menos" : `Ver ${item.highlights.length} destaques →`}
          </button>
        )}
      </div>
    </div>
  );
}

// ─── EDUCATION CARD ───────────────────────────────────────────────────────────
function EducationCard({ item, index }: { item: (typeof EDUCATION)[0]; index: number }) {
  return (
    <div
      className="animate-reveal group rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-neon/40 hover:shadow-lg hover:shadow-neon/5"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-sm font-bold text-foreground">{item.course}</h3>
          <div className="mt-0.5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Building2 className="size-3" />
              {item.institution}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="size-3" />
              {item.period}
            </span>
          </div>
        </div>
        <span className="rounded-full border border-neon/30 bg-neon/10 px-2.5 py-0.5 font-mono text-[10px] text-neon">
          {item.location}
        </span>
      </div>
      <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
      {item.highlights.length > 0 && (
        <ul className="space-y-1">
          {item.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-foreground/80">
              <Star className="mt-0.5 size-3 shrink-0 text-neon-2" />
              {h}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── SECTION HEADER ───────────────────────────────────────────────────────────
function SectionTitle({
  icon: Icon,
  title,
  count,
}: {
  icon: React.ElementType;
  title: string;
  count?: number;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface-bright">
        <Icon className="size-5 text-primary" strokeWidth={1.75} />
      </div>
      <div>
        <h2 className="font-display text-xl font-bold text-foreground">{title}</h2>
        {count !== undefined && (
          <p className="font-mono text-xs text-muted-foreground">{count} registros</p>
        )}
      </div>
    </div>
  );
}

// ─── TIMELINE SECTION ─────────────────────────────────────────────────────────
function TimelineSection({ children, nodeColor = "primary" }: { children: React.ReactNode; nodeColor?: "primary" | "neon" | "neon-2" }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <TimelineNode color={nodeColor} />
        <div className="mt-2 flex-1 w-px bg-gradient-to-b from-border to-transparent" />
      </div>
      <div className="mb-4 min-w-0 flex-1">{children}</div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export function ResumePage() {
  const [mode, setMode] = React.useState<"summary" | "full">("summary");
  const expanded = mode === "full";

  const visibleExperience = expanded ? EXPERIENCE : EXPERIENCE.slice(0, 2);
  const visibleEducation = expanded ? EDUCATION : EDUCATION.slice(0, 1);
  const visibleSkills = expanded ? SKILLS : SKILLS.slice(0, 8);

  const handlePrint = () => {
    window.print();
  };

  const skillsByGroup = SKILL_GROUPS.map((group) => ({
    group,
    skills: visibleSkills.filter((s) => s.group === group),
  })).filter((g) => g.skills.length > 0);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 print:bg-white print:text-black">
      {/* Ambient glows — hidden on print */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden print:hidden">
        <div className="absolute -top-40 left-1/4 size-[36rem] rounded-full bg-primary/15 blur-[160px]" />
        <div className="absolute bottom-0 right-0 size-[28rem] rounded-full bg-neon/8 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-10 print:px-0 print:py-0">
        {/* ── Top Action Bar ─────────────────────────────────────────── */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <a
            href="/"
            className="flex items-center gap-2 rounded-xl border border-border bg-surface/70 px-4 py-2.5 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
          >
            <ChevronLeft className="size-4" />
            Voltar ao Portfólio
          </a>

          <div className="flex items-center gap-2">
            {/* Toggle */}
            <div className="flex overflow-hidden rounded-xl border border-border bg-surface/70">
              <button
                onClick={() => setMode("summary")}
                className={`px-4 py-2.5 text-xs font-medium transition-colors ${
                  mode === "summary"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Resumido
              </button>
              <button
                onClick={() => setMode("full")}
                className={`px-4 py-2.5 text-xs font-medium transition-colors ${
                  mode === "full"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Completo
              </button>
            </div>

            {/* Download PDF */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/15 px-4 py-2.5 text-xs font-medium text-primary transition-colors hover:bg-primary/25"
            >
              <Download className="size-3.5" />
              Download PDF
            </button>
          </div>
        </div>

        {/* ── Header / Identity ──────────────────────────────────────── */}
        <div className="animate-reveal mb-8 overflow-hidden rounded-3xl border border-border bg-surface/70 p-8 backdrop-blur-sm print:rounded-none print:border-none print:bg-transparent">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex-1">
              {/* Overline */}
              <div className="mb-3 flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-lg bg-primary font-mono text-[10px] text-primary-foreground">
                  {"</>"}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Currículo Profissional
                </span>
              </div>

              <h1 className="font-display mb-1 text-4xl font-extrabold tracking-tight text-foreground print:text-3xl">
                {RESUME_HEADER.name}
              </h1>
              <p className="mb-4 text-lg text-primary">{RESUME_HEADER.title}</p>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                {RESUME_HEADER.summary}
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex shrink-0 flex-col gap-2">
              <a
                href={`mailto:${RESUME_HEADER.email}`}
                className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-3.5 text-primary" />
                {RESUME_HEADER.email}
              </a>
              <a
                href={`https://${RESUME_HEADER.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="size-3.5 text-primary" />
                {RESUME_HEADER.linkedin}
              </a>
              <a
                href={`https://${RESUME_HEADER.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-3.5 text-primary" />
                {RESUME_HEADER.github}
              </a>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="size-3.5 text-primary" />
                {RESUME_HEADER.location}
              </div>
            </div>
          </div>
        </div>

        {/* ── Two-column layout ──────────────────────────────────────── */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main column — Experience + Education */}
          <div className="space-y-8 lg:col-span-2">
            {/* ─ EXPERIENCE ──────────────────────────────────── */}
            <section id="resume-experience">
              <SectionTitle icon={Briefcase} title="Experiência Profissional" count={visibleExperience.length} />
              <div className="space-y-1">
                {visibleExperience.map((item, i) => (
                  <TimelineSection key={item.company + item.period} nodeColor="primary">
                    <ExperienceCard item={item} index={i} expanded={expanded} />
                  </TimelineSection>
                ))}
              </div>
              {!expanded && EXPERIENCE.length > 2 && (
                <button
                  onClick={() => setMode("full")}
                  className="mt-2 ml-8 flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  <Zap className="size-3" />
                  Ver mais {EXPERIENCE.length - 2} experiências anteriores
                </button>
              )}
            </section>

            {/* ─ EDUCATION ───────────────────────────────────── */}
            <section id="resume-education">
              <SectionTitle icon={GraduationCap} title="Formação & Certificações" count={visibleEducation.length} />
              <div className="space-y-1">
                {visibleEducation.map((item, i) => (
                  <TimelineSection key={item.institution + item.period} nodeColor="neon">
                    <EducationCard item={item} index={i} />
                  </TimelineSection>
                ))}
              </div>
              {!expanded && EDUCATION.length > 1 && (
                <button
                  onClick={() => setMode("full")}
                  className="mt-2 ml-8 flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  <Zap className="size-3" />
                  Ver mais {EDUCATION.length - 1} certificações
                </button>
              )}
            </section>
          </div>

          {/* Sidebar column — Skills + Languages */}
          <div className="space-y-6">
            {/* ─ SKILLS ──────────────────────────────────────── */}
            <section
              id="resume-skills"
              className="animate-reveal rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur-sm"
            >
              <SectionTitle icon={Code2} title="Habilidades" />
              <div className="space-y-6">
                {skillsByGroup.map(({ group, skills }) => (
                  <div key={group}>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {group}
                      </span>
                      <div className="flex-1 border-t border-border" />
                    </div>
                    <div className="space-y-3">
                      {skills.map((s, i) => (
                        <SkillBar key={s.name} name={s.name} level={s.level} icon={s.icon} delay={i * 100} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {!expanded && SKILLS.length > 8 && (
                <button
                  onClick={() => setMode("full")}
                  className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-border py-2 font-mono text-[10px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Layers className="size-3" />
                  Ver todas as {SKILLS.length} habilidades
                </button>
              )}
            </section>

            {/* ─ LANGUAGES ───────────────────────────────────── */}
            <section
              id="resume-languages"
              className="animate-reveal rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur-sm"
              style={{ animationDelay: "120ms" }}
            >
              <SectionTitle icon={Globe2} title="Idiomas" />
              <div className="space-y-4">
                {LANGUAGES.map((l) => (
                  <div key={l.lang}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-xs font-medium text-foreground">
                        <span className="text-base">{l.flag}</span>
                        {l.lang}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">{l.level}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-surface-bright">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-neon-2 to-neon"
                        style={{ width: `${l.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ─ MODE INDICATOR ──────────────────────────────── */}
            <div className="animate-reveal rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur-sm print:hidden" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-3">
                <div className={`size-2 rounded-full ${expanded ? "bg-neon animate-pulse" : "bg-primary"}`} />
                <div>
                  <p className="text-xs font-medium text-foreground">
                    Modo {expanded ? "Completo" : "Resumido"}
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground">
                    {expanded
                      ? `Exibindo ${EXPERIENCE.length} exp. + ${EDUCATION.length} form.`
                      : `Exibindo ${visibleExperience.length} de ${EXPERIENCE.length} exp.`}
                  </p>
                </div>
              </div>
              {!expanded && (
                <button
                  onClick={() => setMode("full")}
                  className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-primary/30 bg-primary/10 py-2.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  <FileText className="size-3.5" />
                  Ver currículo completo
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── Footer ─────────────────────────────────────────────────── */}
        <div className="mt-12 border-t border-border pt-6 print:hidden">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-xs text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="/"
                className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <Server className="size-3.5" />
                Ver portfólio completo
              </a>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs text-primary transition-colors hover:bg-primary/20"
              >
                <Download className="size-3.5" />
                PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

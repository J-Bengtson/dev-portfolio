"use client";

import * as React from "react";
import {
  Briefcase,
  GraduationCap,
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
  Rocket,
  Trophy,
  Users,
  GitBranch,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Coffee,
  Clock,
  Award,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  BarChart3,
} from "lucide-react";

import { TechIcon } from "@/components/TechIcon";

// ─── DATA ─────────────────────────────────────────────────────────────────────
// Edit these arrays with your real information

const RESUME_HEADER = {
  name: "Júlio Bengtson Neves",
  title: "Desenvolvedor Full Stack / Software Engineer",
  location: "Belo Horizonte, MG - Brasil",
  email: "contato@juliobengtson.dev",
  linkedin: "linkedin.com/in/juliobengtson",
  github: "github.com/J-Bengtson",
  summary:
    "Desenvolvedor Full Stack com sólida trajetória na GreenLegis (de Estagiário a Desenvolvedor Pleno). Especialista em ecossistema .NET Core, arquitetura de microsserviços, React, AWS, Docker e MySQL, focado no desenvolvimento e entrega de sistemas resilientes e de alta performance.",
};

const EXPERIENCE = [
  {
    company: "GreenLegis",
    role: "Desenvolvedor Pleno",
    period: "2024 – 2026",
    location: "Belo Horizonte, MG",
    type: "PJ",
    description:
      "Atuação no desenvolvimento e arquitetura de soluções corporativas escaláveis com stack em .NET Core, microsserviços, React, AWS, Docker e MySQL.",
    highlights: [
      "Desenvolvimento e sustentação de microsserviços resilientes e APIs REST em .NET Core",
      "Criação e otimização de interfaces dinâmicas e responsivas em React com TypeScript",
      "Deploy e gerenciamento de aplicações containerizadas com Docker em infraestrutura AWS",
      "Modelagem e otimização de consultas em bancos de dados MySQL para alto volume de dados",
    ],
    tags: [".NET Core", "Microserviços", "React", "AWS", "Docker", "MySQL"],
  },
  {
    company: "GreenLegis",
    role: "Desenvolvedor Júnior",
    period: "2020 – 2024",
    location: "Belo Horizonte, MG",
    type: "CLT",
    description:
      "Desenvolvimento de funcionalidades end-to-end, integração de sistemas e suporte contínuo às aplicações do ecossistema GreenLegis.",
    highlights: [
      "Construção de componentes reutilizáveis em React e melhorias em serviços REST em .NET Core",
      "Manutenção e refatoração de código com foco em boas práticas e Clean Architecture",
      "Manipulação e queries complexas em MySQL para relatórios e integrações de dados",
    ],
    tags: [".NET Core", "React", "Docker", "MySQL", "AWS"],
  },
  {
    company: "GreenLegis",

    role: "Estagiário de Desenvolvimento",
    period: "2019 – 2020",
    location: "Belo Horizonte, MG",
    type: "Estágio",
    description:
      "Suporte ao time de engenharia de software no desenvolvimento de aplicações web, correção de bugs e rotinas de banco de dados.",
    highlights: [
      "Auxílio no desenvolvimento de módulos backend com .NET Core e interfaces React",
      "Acompanhamento de rotinas e scripts de banco de dados MySQL",
    ],
    tags: [".NET Core", "React", "MySQL"],
  },
];

const EDUCATION = [
  {
    institution: "PUC Minas",
    course: "Engenharia de Software",
    period: "",
    location: "Belo Horizonte, MG",
    description:
      "Formação acadêmica focada em Engenharia de Software, arquitetura de sistemas, engenharia de requisitos e boas práticas de desenvolvimento.",
    highlights: [],
  },
  {
    institution: "Udemy",
    course: "Formação Angular 13",
    period: "Agosto/2019",
    location: "Online",
    description:
      "Certificado UC-999f8699-eae9-41ac-bed7-1bc83ab9b13f.",
    highlights: [],
  },
  {
    institution: "desenvolvedor.io",
    course: "Fundamentos do C#",
    period: "Março/2023",
    location: "Online",
    description:
      "Instrutor: Rafael Almeida / Microsoft MVP. Conclusão: 17/03/2023.",
    highlights: [],
  },
  {
    institution: "Udemy",
    course: "React + Redux, Material UI, Hooks, Typescript e API's Rest",
    period: "Maio/2022",
    location: "Online",
    description:

      "Certificado UC-230dd2c4-8d18-4c4c-b715-190466d683e8.",
    highlights: [],
  },
  {
    institution: "Udemy",
    course: "Clean Architecture Essencial - ASP .NET Core com C#",
    period: "Maio/2022",
    location: "Online",
    description:
      "Certificado UC-68476447-ba63-4172-bdb0-1e22852c54ef.",
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

const STACKS = [
  {
    group: "Backend",
    items: [".NET Core", "C#", "Microserviços", "REST APIs"],
  },
  {
    group: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Angular"],
  },
  {
    group: "Database",
    items: ["MySQL", "PostgreSQL", "Redis", "MongoDB"],
  },
  {
    group: "DevOps & Cloud",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
];

const QUICK_STATS = [
  { icon: Briefcase, value: 6, suffix: "+", label: "Anos de exp.", color: "text-primary", bg: "bg-primary/10 border-primary/25" },
  { icon: Rocket,    value: 30, suffix: "+", label: "Projetos entregues", color: "text-neon",   bg: "bg-neon/10 border-neon/25" },
  { icon: Users,     value: 500, suffix: "k+", label: "Usuários impactados", color: "text-neon-2", bg: "bg-neon-2/10 border-neon-2/25" },
  { icon: Trophy,    value: 4,   suffix: "",   label: "Certificações", color: "text-primary", bg: "bg-primary/10 border-primary/25" },
  { icon: GitBranch, value: 1450, suffix: "+", label: "Commits/ano", color: "text-neon",   bg: "bg-neon/10 border-neon/25" },
  { icon: Cpu,       value: 15,   suffix: "+", label: "Tecnologias", color: "text-neon-2", bg: "bg-neon-2/10 border-neon-2/25" },
];

// ─── ANIMATED COUNTER ─────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1400;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + increment, target);
          setCount(Math.round(current));
          if (current >= target) clearInterval(timer);
        }, duration / steps);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR")}{suffix}
    </span>
  );
}

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
}: {
  item: (typeof EXPERIENCE)[0];
  index: number;
}) {
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
      {item.highlights.length > 0 && (
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
              className="flex items-center gap-1.5 rounded-lg border border-border bg-surface-bright px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              <TechIcon name={tag} className="size-3 text-primary" />
              {tag}
            </span>
          ))}
        </div>
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
            {item.period ? (
              <span className="flex items-center gap-1">
                <Calendar className="size-3" />
                {item.period}
              </span>
            ) : null}
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
  const handlePrint = () => {
    window.print();
  };

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

        {/* ── Header / Identity ──────────────────────────────────────── */}

        {/* ── Two-column layout ──────────────────────────────────────── */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main column — Experience + Education */}
          <div className="space-y-8 lg:col-span-2">
            {/* ─ EXPERIENCE ──────────────────────────────────── */}
            <section id="resume-experience">
              <SectionTitle icon={Briefcase} title="Experiência Profissional" count={EXPERIENCE.length} />
              <div className="space-y-1">
                {EXPERIENCE.map((item, i) => (
                  <TimelineSection key={item.company + item.period} nodeColor="primary">
                    <ExperienceCard item={item} index={i} />
                  </TimelineSection>
                ))}
              </div>
            </section>

            {/* ─ EDUCATION ───────────────────────────────────── */}
            <section id="resume-education">
              <SectionTitle icon={GraduationCap} title="Formação & Certificações" count={EDUCATION.length} />
              <div className="space-y-1">
                {EDUCATION.map((item, i) => (
                  <TimelineSection key={item.institution + item.period} nodeColor="neon">
                    <EducationCard item={item} index={i} />
                  </TimelineSection>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar column — Stacks */}
          <div className="space-y-6">
            <section
              id="resume-stacks"
              className="animate-reveal rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur-sm"
              style={{ animationDelay: "120ms" }}
            >
              <SectionTitle icon={Layers} title="Stacks" />
              <div className="space-y-4">
                {STACKS.map((group) => (
                  <div key={group.group}>
                    <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {group.group}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="flex items-center gap-1.5 rounded-full border border-border bg-surface-bright px-2.5 py-1 text-[11px] text-foreground/80"
                        >
                          <TechIcon name={item} className="size-3.5 text-primary" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
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

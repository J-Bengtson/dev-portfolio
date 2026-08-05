import * as React from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Pause, Play } from "lucide-react";
import { TechIcon } from "@/components/TechIcon";

export type CarouselProject = {
  title: string;
  category: string;
  desc: string;
  tags: string[];
  metric: string;
};

export function ProjectCarousel({ items }: { items: CarouselProject[] }) {
  const [active, setActive] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);
  const dragRef = React.useRef<{ x: number; moved: boolean } | null>(null);
  const len = items.length;

  const go = React.useCallback(
    (dir: number) => setActive((p) => (p + dir + len) % len),
    [len],
  );

  React.useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => go(1), 4200);
    return () => window.clearInterval(id);
  }, [playing, go]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <div
      className="select-none"
      onPointerDown={(e) => {
        dragRef.current = { x: e.clientX, moved: false };
      }}
      onPointerMove={(e) => {
        const d = dragRef.current;
        if (!d || d.moved) return;
        if (Math.abs(e.clientX - d.x) > 48) {
          d.moved = true;
          go(e.clientX < d.x ? 1 : -1);
        }
      }}
      onPointerUp={() => {
        dragRef.current = null;
      }}
      onPointerLeave={() => {
        dragRef.current = null;
      }}
    >
      <div
        className="relative h-[300px] [perspective:1400px]"
        onMouseEnter={() => setPlaying(false)}
        onMouseLeave={() => setPlaying(true)}
      >
        {items.map((p, i) => {
          let offset = i - active;
          if (offset > len / 2) offset -= len;
          if (offset < -len / 2) offset += len;
          const abs = Math.abs(offset);
          const hidden = abs > 2;
          return (
            <article
              key={p.title}
              aria-hidden={offset !== 0}
              className="absolute inset-x-0 top-0 mx-auto w-[min(100%,26rem)] rounded-3xl border border-border bg-surface/90 p-6 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `translateX(${offset * 46}%) translateZ(${-abs * 180}px) rotateY(${offset * -22}deg) scale(${1 - abs * 0.06})`,
                opacity: hidden ? 0 : 1 - abs * 0.35,
                zIndex: 10 - abs,
                pointerEvents: offset === 0 ? "auto" : "none",
                boxShadow:
                  offset === 0
                    ? "0 30px 80px -30px color-mix(in oklab, var(--primary) 70%, transparent)"
                    : "none",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-neon/30 bg-neon/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-neon">
                  {p.category}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}/{String(len).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl leading-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-bright px-2 py-1 font-mono text-[10px] text-muted-foreground"
                  >
                    <TechIcon name={t} className="size-3 text-neon" />
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neon-2">
                  {p.metric}
                </span>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary"
                >
                  Ver case
                  <ExternalLink className="size-3 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Projeto anterior"
          onClick={() => go(-1)}
          className="flex size-9 items-center justify-center rounded-xl border border-border bg-surface-bright text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
        >
          <ArrowLeft className="size-4" strokeWidth={1.75} />
        </button>
        <div className="flex items-center gap-1.5">
          {items.map((p, i) => (
            <button
              key={p.title}
              type="button"
              aria-label={`Ir para ${p.title}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active
                  ? "w-6 bg-neon shadow-[0_0_10px_var(--neon)]"
                  : "w-1.5 bg-border hover:bg-primary"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label={playing ? "Pausar carrossel" : "Reproduzir carrossel"}
          onClick={() => setPlaying((p) => !p)}
          className="flex size-9 items-center justify-center rounded-xl border border-border bg-surface-bright text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
        >
          {playing ? (
            <Pause className="size-3.5" strokeWidth={1.75} />
          ) : (
            <Play className="size-3.5" strokeWidth={1.75} />
          )}
        </button>
        <button
          type="button"
          aria-label="Próximo projeto"
          onClick={() => go(1)}
          className="flex size-9 items-center justify-center rounded-xl border border-border bg-surface-bright text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
        >
          <ArrowRight className="size-4" strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}

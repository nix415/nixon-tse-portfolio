import type { CSSProperties } from "react";
import {
  ArrowUpRight,
  FileText,
  Layers,
  Send,
  User,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "../data/site";
import LetterRise from "./LetterRise";
import MagneticCTA from "./MagneticCTA";
import { useParallax } from "../hooks/useParallax";

const ICONS: Record<string, LucideIcon> = {
  User,
  FileText,
  Layers,
  Send,
};

export default function Hero() {
  const portrait = useParallax<HTMLDivElement>(14);

  return (
    <section
      id="top"
      className="relative px-6 pt-24 pb-16 sm:pt-28 md:pt-28 md:pb-20"
    >
      <div className="mx-auto max-w-6xl">
        <h1 className="display leading-[0.95] tracking-[-0.02em] text-[clamp(2.75rem,10vw,7.5rem)]">
          <span className="block">
            <LetterRise text={SITE.firstName} baseDelay={120} />
          </span>
        </h1>

        <div
          className="hero-rise mt-5 mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]"
          style={{ ["--hero-delay" as never]: "500ms" } as CSSProperties}
        >
          {SITE.tagline}
        </div>

        <div
          className="hero-rise mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]"
          style={{ ["--hero-delay" as never]: "580ms" } as CSSProperties}
        >
          {SITE.quickFacts.map((fact, i) => (
            <span key={fact} className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className={`h-1 w-1 rounded-full ${i === 0 ? "bg-[color:var(--color-accent-strong,#b45047)] animate-pulse" : "bg-[color:var(--color-line)]"}`}
              />
              <span>{fact}</span>
            </span>
          ))}
        </div>

        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div
            className="md:col-span-7 hero-rise"
            style={{ ["--hero-delay" as never]: "650ms" } as CSSProperties}
          >
            <p className="display text-[16px] sm:text-[18px] leading-[1.55] text-[color:var(--color-ink)] max-w-[52ch]">
              {SITE.hero.bio}
            </p>

            <div className="mt-6">
              <div
                ref={portrait.ref}
                className="h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden border border-[color:var(--color-line)] bg-[color:var(--color-surface)]"
                style={{ transform: `translateY(${portrait.offset}px)` }}
              >
                <img
                  src="/headshot.jpg"
                  alt="Nixon Tse portrait"
                  className="h-full w-full object-cover scale-[1.7]"
                  style={{ objectPosition: "50% 18%", transformOrigin: "center 24%" }}
                  loading="eager"
                />
              </div>
            </div>
          </div>

          <div
            className="md:col-span-5 hero-rise"
            style={{ ["--hero-delay" as never]: "800ms" } as CSSProperties}
          >
            <div className="mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              Where you can start
            </div>
            <ul className="mt-5 space-y-1">
              {SITE.startHere.map((item, i) => {
                const Icon = ICONS[item.icon] ?? ArrowUpRight;
                return (
                  <li key={i}>
                    <MagneticCTA
                      href={item.target}
                      className="group block w-full"
                      innerClassName="w-full"
                      ariaLabel={item.label}
                    >
                      <span className="flex w-full items-center gap-4 py-1.5">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-line)] text-[color:var(--color-ink)] transition-colors group-hover:bg-[color:var(--color-ink)] group-hover:text-[color:var(--color-bg)]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="flex-1 display text-[15px] text-[color:var(--color-ink)]">
                          {item.label}
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-[color:var(--color-muted)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--color-ink)]" />
                      </span>
                    </MagneticCTA>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

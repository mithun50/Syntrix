import Link from "next/link";
import { ArrowUpRight, Brain, Megaphone, Code2, Minus } from "lucide-react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

const iconMap: Record<string, React.ElementType> = { Brain, Megaphone, Code2 };
const accentMap: Record<string, string> = {
  cyan: "text-accent",
  purple: "text-accent2",
  magenta: "text-accent3",
};
const borderAccentMap: Record<string, string> = {
  cyan: "group-hover:border-accent/30",
  purple: "group-hover:border-accent2/30",
  magenta: "group-hover:border-accent3/30",
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-accent2/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="max-w-4xl">
            <span className="inline-block font-mono text-[11px] text-accent tracking-[0.2em] uppercase animate-fade-up">
              AI-Powered Agency
            </span>

            <h1 className="mt-6 text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold font-[var(--font-heading)] leading-[1.02] tracking-tight animate-fade-up delay-1">
              We build{" "}
              <span className="gradient-text">intelligent</span>
              <br />
              solutions that
              <br />
              <span className="text-muted">drive growth</span>
            </h1>

            <p className="mt-8 text-base md:text-lg text-muted max-w-xl leading-relaxed animate-fade-up delay-2">
              Syntrix is your partner for AI development, digital marketing,
              and custom software. We transform ideas into scalable products.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up delay-3">
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-7 py-3 text-sm font-semibold bg-accent text-background rounded-full hover:bg-accent/90 transition-all duration-300"
              >
                Start Your Project
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/portfolio"
                className="group flex items-center gap-2 px-7 py-3 text-sm font-medium border border-border rounded-full text-muted hover:text-foreground hover:border-foreground/20 transition-all duration-300"
              >
                View Our Work
                <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 line-pattern opacity-40 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="flex items-start gap-6 mb-14">
            <span className="font-mono text-[11px] text-muted tracking-widest mt-2">
              01
            </span>
            <div>
              <span className="font-mono text-[11px] text-accent tracking-widest uppercase">
                Services
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold font-[var(--font-heading)] tracking-tight">
                What we do
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Brain;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`group relative p-7 rounded-2xl border border-border bg-card card-glow overflow-hidden animate-fade-up delay-${i + 1}`}
                >
                  {/* Accent line top */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${
                      service.color === "cyan"
                        ? "via-accent"
                        : service.color === "purple"
                        ? "via-accent2"
                        : "via-accent3"
                    } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className={`w-10 h-10 rounded-xl border border-border flex items-center justify-center mb-5 ${borderAccentMap[service.color]} transition-colors duration-300`}>
                    <Icon className={`w-[18px] h-[18px] ${accentMap[service.color]}`} />
                  </div>

                  <h3 className="text-lg font-bold font-[var(--font-heading)] tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-1.5 mt-6 font-mono text-[11px] text-accent tracking-wider">
                    <Minus size={12} />
                    Learn more
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Featured Projects ─── */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-start justify-between mb-14">
            <div className="flex items-start gap-6">
              <span className="font-mono text-[11px] text-muted tracking-widest mt-2">
                02
              </span>
              <div>
                <span className="font-mono text-[11px] text-accent tracking-widest uppercase">
                  Portfolio
                </span>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold font-[var(--font-heading)] tracking-tight">
                  Featured work
                </h2>
              </div>
            </div>
            <Link
              href="/portfolio"
              className="group hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-accent tracking-wider hover:underline underline-offset-4"
            >
              View all
              <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.map((project, i) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className={`group relative p-7 rounded-2xl border border-border bg-card card-glow overflow-hidden animate-fade-up delay-${i + 1}`}
              >
                <div className="flex items-center gap-3 text-[11px] mb-4">
                  <span className="font-mono text-accent tracking-wider">
                    {project.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-muted/50" />
                  <span className="font-mono text-muted tracking-wider">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-[var(--font-heading)] tracking-tight group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-border text-muted tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-7 right-7 opacity-0 translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={18} className="text-accent" />
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile view all */}
          <div className="sm:hidden mt-8 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-accent tracking-wider"
            >
              View all projects <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 md:py-32 border-t border-border relative">
        <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 text-center relative">
          <span className="font-mono text-[11px] text-muted tracking-widest">
            03
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold font-[var(--font-heading)] tracking-tight">
            Ready to build
            <br />
            <span className="text-muted">something?</span>
          </h2>
          <p className="mt-5 text-base text-muted max-w-md mx-auto leading-relaxed">
            Whether it&apos;s AI, marketing, or software — let&apos;s talk about
            your next project.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 mt-8 px-8 py-3.5 text-sm font-semibold bg-accent text-background rounded-full hover:bg-accent/90 transition-all duration-300"
          >
            Get in Touch
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}

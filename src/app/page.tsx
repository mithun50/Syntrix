import Link from "next/link";
import { ArrowRight, Brain, Megaphone, Code2 } from "lucide-react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

const iconMap: Record<string, React.ElementType> = { Brain, Megaphone, Code2 };
const colorMap: Record<string, string> = {
  cyan: "text-accent",
  purple: "text-accent2",
  magenta: "text-accent3",
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-3xl">
            <span className="text-xs font-medium text-accent tracking-wider uppercase">
              AI-Powered Agency
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold font-[var(--font-heading)] leading-[1.1]">
              We build{" "}
              <span className="gradient-text">intelligent solutions</span>
              {" "}that drive growth
            </h1>
            <p className="mt-5 text-lg text-muted max-w-xl leading-relaxed">
              Syntrix is your partner for AI development, digital marketing, and custom software.
              We transform ideas into scalable products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-6 py-2.5 text-sm font-medium bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-2.5 text-sm font-medium border border-border rounded-lg text-muted hover:text-foreground hover:border-foreground/20 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <span className="text-xs font-medium text-accent tracking-wider uppercase">Services</span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold font-[var(--font-heading)]">What we do</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Brain;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group p-6 rounded-xl border border-border bg-card hover:border-accent/20 transition-colors"
                >
                  <Icon className={`w-5 h-5 ${colorMap[service.color]} mb-3`} />
                  <h3 className="font-semibold font-[var(--font-heading)]">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{service.description}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-xs text-accent font-medium">
                    Learn more <ArrowRight size={12} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-medium text-accent tracking-wider uppercase">Portfolio</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold font-[var(--font-heading)]">Featured work</h2>
            </div>
            <Link href="/portfolio" className="text-sm text-accent hover:underline hidden sm:block">
              View all &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group p-6 rounded-xl border border-border bg-card hover:border-accent/20 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs text-muted mb-3">
                  <span className="text-accent font-medium">{project.category}</span>
                  <span>&middot;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-semibold font-[var(--font-heading)] group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)]">
            Ready to build something?
          </h2>
          <p className="mt-3 text-muted max-w-md mx-auto">
            Whether it&apos;s AI, marketing, or software — let&apos;s talk about your next project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 text-sm font-medium bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
          >
            Get in Touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}

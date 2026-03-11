import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Megaphone, Code2, ArrowUpRight, Minus } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Syntrix services — AI Agency, Digital Marketing, and Custom Software Tools.",
};

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
const bgAccentMap: Record<string, string> = {
  cyan: "bg-accent",
  purple: "bg-accent2",
  magenta: "bg-accent3",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="Services"
        title="End-to-end solutions for modern businesses"
        description="AI-powered automation, growth marketing, and custom software — all under one roof."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Brain;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`group relative p-8 rounded-2xl border border-border bg-card card-glow overflow-hidden animate-fade-up delay-${i + 1}`}
                >
                  {/* Top accent line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${
                      service.color === "cyan"
                        ? "via-accent"
                        : service.color === "purple"
                        ? "via-accent2"
                        : "via-accent3"
                    } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className={`w-11 h-11 rounded-xl border border-border flex items-center justify-center mb-6 ${borderAccentMap[service.color]} transition-colors duration-300`}>
                    <Icon className={`w-5 h-5 ${accentMap[service.color]}`} />
                  </div>

                  <h3 className="text-xl font-bold font-[var(--font-heading)] tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="mt-6 space-y-2.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-[13px] text-muted">
                        <span className={`w-1 h-1 rounded-full ${bgAccentMap[service.color]} flex-shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-1.5 mt-8 font-mono text-[11px] text-accent tracking-wider">
                    <Minus size={12} />
                    Explore service
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

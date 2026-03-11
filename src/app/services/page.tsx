import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Megaphone, Code2, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Syntrix services — AI Agency, Digital Marketing, and Custom Software Tools.",
};

const iconMap: Record<string, React.ElementType> = { Brain, Megaphone, Code2 };
const colorMap: Record<string, string> = { cyan: "text-accent", purple: "text-accent2", magenta: "text-accent3" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="Services"
        title="End-to-end solutions for modern businesses"
        description="AI-powered automation, growth marketing, and custom software — all under one roof."
      />
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Brain;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-6 rounded-xl border border-border bg-card hover:border-accent/20 transition-colors"
              >
                <Icon className={`w-5 h-5 ${colorMap[service.color]} mb-3`} />
                <h3 className="text-lg font-semibold font-[var(--font-heading)]">{service.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{service.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {service.features.map((f) => (
                    <li key={f} className="text-xs text-muted flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 mt-5 text-xs text-accent font-medium">
                  Learn more <ArrowRight size={12} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

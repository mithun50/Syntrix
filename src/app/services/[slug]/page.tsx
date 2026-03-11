import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Brain, MessageSquare, TrendingUp, Eye, FileText, Plug, Share2, Search, Target, Mail, Palette, BarChart, Globe, Cloud, Terminal, Smartphone, Server, Code2, Megaphone, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Brain, MessageSquare, TrendingUp, Eye, FileText, Plug, Share2, Search,
  Target, Mail, Palette, BarChart, Globe, Cloud, Terminal, Smartphone,
  Server, Code2, Megaphone,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.description };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHeader badge={service.title} title={service.title} description={service.description} />

      {/* Features */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2.5 p-3 rounded-lg border border-border bg-card text-sm">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-xl font-bold font-[var(--font-heading)] mb-8">What we deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.subServices.map((sub) => {
              const Icon = iconMap[sub.icon] || Brain;
              return (
                <div key={sub.title} className="p-5 rounded-xl border border-border bg-card">
                  <Icon className="w-4 h-4 text-accent mb-2.5" />
                  <h3 className="font-semibold font-[var(--font-heading)] text-sm">{sub.title}</h3>
                  <p className="text-xs text-muted mt-1 leading-relaxed">{sub.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-xl font-bold font-[var(--font-heading)] mb-8">Our process</h2>
          <div className="max-w-2xl space-y-5">
            {service.process.map((step) => (
              <div key={step.step} className="flex gap-4 items-start">
                <span className="w-7 h-7 rounded-full bg-accent/10 text-accent text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                  {step.step}
                </span>
                <div className="pb-5 border-b border-border flex-1">
                  <h3 className="font-semibold font-[var(--font-heading)] text-sm">{step.title}</h3>
                  <p className="text-xs text-muted mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-xl font-bold font-[var(--font-heading)]">Ready to get started?</h2>
          <p className="mt-2 text-sm text-muted">
            Let&apos;s discuss how our {service.title.toLowerCase()} services can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-5 px-5 py-2 text-sm font-medium bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
          >
            Start a conversation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}

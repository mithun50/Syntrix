import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain, MessageSquare, TrendingUp, Eye, FileText, Plug, Share2, Search,
  Target, Mail, Palette, BarChart, Globe, Cloud, Terminal, Smartphone,
  Server, Code2, Megaphone, ArrowUpRight, CheckCircle2,
} from "lucide-react";
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
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-start gap-6 mb-10">
            <span className="font-mono text-[11px] text-muted tracking-widest mt-1">01</span>
            <h2 className="text-xl font-bold font-[var(--font-heading)] tracking-tight">Key capabilities</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl ml-0 md:ml-12">
            {service.features.map((feature, i) => (
              <div
                key={feature}
                className={`flex items-center gap-3 p-4 rounded-xl border border-border bg-card text-sm animate-fade-up delay-${(i % 3) + 1}`}
              >
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="py-20 border-t border-border relative">
        <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="flex items-start gap-6 mb-12">
            <span className="font-mono text-[11px] text-muted tracking-widest mt-1">02</span>
            <h2 className="text-xl font-bold font-[var(--font-heading)] tracking-tight">What we deliver</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ml-0 md:ml-12">
            {service.subServices.map((sub, i) => {
              const Icon = iconMap[sub.icon] || Brain;
              return (
                <div
                  key={sub.title}
                  className={`group p-6 rounded-2xl border border-border bg-card card-glow animate-fade-up delay-${(i % 3) + 1}`}
                >
                  <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center mb-4 group-hover:border-accent/30 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="font-semibold font-[var(--font-heading)] text-sm tracking-tight">{sub.title}</h3>
                  <p className="text-xs text-muted mt-2 leading-relaxed">{sub.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-start gap-6 mb-12">
            <span className="font-mono text-[11px] text-muted tracking-widest mt-1">03</span>
            <h2 className="text-xl font-bold font-[var(--font-heading)] tracking-tight">Our process</h2>
          </div>

          <div className="max-w-2xl ml-0 md:ml-12 space-y-0">
            {service.process.map((step, i) => (
              <div key={step.step} className={`flex gap-5 items-start animate-fade-up delay-${i + 1}`}>
                <span className="w-10 h-10 rounded-xl bg-accent/10 text-accent font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {String(step.step).padStart(2, "0")}
                </span>
                <div className="pb-7 border-l border-border pl-6 flex-1 relative">
                  <span className="absolute left-0 top-3 w-1.5 h-1.5 rounded-full bg-accent -translate-x-[3.5px]" />
                  <h3 className="font-semibold font-[var(--font-heading)] tracking-tight">{step.title}</h3>
                  <p className="text-sm text-muted mt-1.5 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border relative">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 text-center relative">
          <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)] tracking-tight">
            Ready to get started?
          </h2>
          <p className="mt-3 text-sm text-muted max-w-md mx-auto leading-relaxed">
            Let&apos;s discuss how our {service.title.toLowerCase()} services can help your business grow.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 mt-7 px-7 py-3 text-sm font-semibold bg-accent text-background rounded-full hover:bg-accent/90 transition-all duration-300"
          >
            Start a conversation
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <PageHeader badge={project.category} title={project.title} description={project.description} />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            {/* Meta cards */}
            <div className="grid grid-cols-3 gap-4 mb-12 animate-fade-up delay-1">
              {[
                { label: "Client", value: project.client },
                { label: "Category", value: project.category },
                { label: "Year", value: project.year },
              ].map((meta) => (
                <div key={meta.label} className="p-5 rounded-xl border border-border bg-card">
                  <p className="font-mono text-[10px] text-muted uppercase tracking-widest">{meta.label}</p>
                  <p className="text-sm font-semibold mt-1.5 font-[var(--font-heading)] tracking-tight">{meta.value}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12 animate-fade-up delay-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-muted tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-10 mb-12">
              <div className="animate-fade-up delay-3">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[11px] text-muted tracking-widest">01</span>
                  <h3 className="text-sm font-semibold font-[var(--font-heading)] text-accent tracking-tight">
                    The Challenge
                  </h3>
                </div>
                <p className="text-sm text-muted leading-relaxed ml-9">{project.challenge}</p>
              </div>
              <div className="animate-fade-up delay-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[11px] text-muted tracking-widest">02</span>
                  <h3 className="text-sm font-semibold font-[var(--font-heading)] text-accent2 tracking-tight">
                    Our Solution
                  </h3>
                </div>
                <p className="text-sm text-muted leading-relaxed ml-9">{project.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div className="p-7 rounded-2xl border border-border bg-card mb-12 animate-fade-up delay-5">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] text-muted tracking-widest">03</span>
                <h3 className="text-sm font-semibold font-[var(--font-heading)] tracking-tight">Results</h3>
              </div>
              <div className="space-y-3 ml-9">
                {project.results.map((result) => (
                  <div key={result} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent2 flex-shrink-0" />
                    {result}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-300"
              >
                <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
                Back to portfolio
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 font-mono text-[11px] text-accent tracking-wider"
              >
                Start similar project
                <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

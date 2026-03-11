import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
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

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-5 max-w-3xl">
          {/* Meta */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="p-4 rounded-lg border border-border bg-card">
              <p className="text-[10px] text-muted uppercase tracking-wider">Client</p>
              <p className="text-sm font-medium mt-0.5">{project.client}</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card">
              <p className="text-[10px] text-muted uppercase tracking-wider">Category</p>
              <p className="text-sm font-medium mt-0.5">{project.category}</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card">
              <p className="text-[10px] text-muted uppercase tracking-wider">Year</p>
              <p className="text-sm font-medium mt-0.5">{project.year}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-10">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-lg border border-border text-muted">{tag}</span>
            ))}
          </div>

          {/* Challenge & Solution */}
          <div className="space-y-8 mb-10">
            <div>
              <h3 className="text-sm font-semibold font-[var(--font-heading)] text-accent mb-2">The Challenge</h3>
              <p className="text-sm text-muted leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold font-[var(--font-heading)] text-accent2 mb-2">Our Solution</h3>
              <p className="text-sm text-muted leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div className="p-6 rounded-xl border border-border bg-card mb-10">
            <h3 className="text-sm font-semibold font-[var(--font-heading)] mb-4">Results</h3>
            <div className="space-y-2.5">
              {project.results.map((result) => (
                <div key={result} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {result}
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} /> Back to portfolio
          </Link>
        </div>
      </section>
    </>
  );
}

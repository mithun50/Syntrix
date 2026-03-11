"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const categories = ["All", "AI Agency", "Marketing", "Software Tools"];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        badge="Portfolio"
        title="Our work speaks for itself"
        description="Projects across AI, marketing, and software development."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-300",
                  active === cat
                    ? "bg-accent text-background"
                    : "border border-border text-muted hover:text-foreground hover:border-foreground/20"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className={`group relative p-7 rounded-2xl border border-border bg-card card-glow overflow-hidden animate-scale-in delay-${(i % 3) + 1}`}
              >
                <div className="flex items-center gap-3 text-[11px] mb-4">
                  <span className="font-mono text-accent tracking-wider">{project.category}</span>
                  <span className="w-1 h-1 rounded-full bg-muted/50" />
                  <span className="font-mono text-muted tracking-wider">{project.year}</span>
                </div>

                <h3 className="font-bold font-[var(--font-heading)] tracking-tight group-hover:text-accent transition-colors duration-300">
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
                  <ArrowUpRight size={16} className="text-accent" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

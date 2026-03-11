"use client";

import { useState } from "react";
import Link from "next/link";
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
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors",
                  active === cat
                    ? "bg-accent text-background"
                    : "border border-border text-muted hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group p-5 rounded-xl border border-border bg-card hover:border-accent/20 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs text-muted mb-2.5">
                  <span className="text-accent font-medium">{project.category}</span>
                  <span>&middot;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-semibold font-[var(--font-heading)] text-sm group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-muted">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

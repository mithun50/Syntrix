"use client";

import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <Section>
      <SectionHeading
        badge="Our Work"
        title="Featured Projects"
        description="Real results for real clients. Explore our latest work across AI, marketing, and software."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button href="/portfolio" variant="outline">
          View All Projects <ArrowRight size={16} />
        </Button>
      </div>
    </Section>
  );
}

"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const technologies = [
  "Next.js", "React", "TypeScript", "Python", "TensorFlow", "PyTorch",
  "Node.js", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes",
  "OpenAI", "LangChain", "Tailwind CSS", "GraphQL", "Prisma", "Vercel",
];

export function TechStack() {
  return (
    <Section className="overflow-hidden">
      <SectionHeading
        badge="Tech Stack"
        title="Technologies We Use"
        description="We leverage cutting-edge technologies to deliver world-class solutions."
      />
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee gap-6">
          {[...technologies, ...technologies].map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex-shrink-0 px-6 py-3 rounded-full glass text-sm font-medium text-foreground/70 whitespace-nowrap"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

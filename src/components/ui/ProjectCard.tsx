"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/portfolio/${project.slug}`} className="group block">
        <div className="rounded-2xl glass overflow-hidden border border-transparent hover:border-cyan/20 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-cyan/5">
          <div className="aspect-video bg-gradient-to-br from-cyan/10 via-purple/10 to-magenta/10 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-muted/50">
              <span className="text-sm">{project.title}</span>
            </div>
            <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-4 py-2 rounded-full glass text-sm font-medium flex items-center gap-1">
                View Project <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-cyan font-medium">{project.category}</span>
              <span className="text-xs text-muted">{project.year}</span>
            </div>
            <h3 className="font-semibold font-[var(--font-heading)] mb-1">{project.title}</h3>
            <p className="text-sm text-muted line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Brain, Megaphone, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  color: "cyan" | "purple" | "magenta";
  href: string;
  index?: number;
}

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Megaphone,
  Code2,
};

const colorMap = {
  cyan: {
    border: "hover:border-cyan/30",
    bg: "group-hover:bg-cyan/10",
    text: "text-cyan",
    glow: "group-hover:shadow-cyan/10",
  },
  purple: {
    border: "hover:border-purple/30",
    bg: "group-hover:bg-purple/10",
    text: "text-purple",
    glow: "group-hover:shadow-purple/10",
  },
  magenta: {
    border: "hover:border-magenta/30",
    bg: "group-hover:bg-magenta/10",
    text: "text-magenta",
    glow: "group-hover:shadow-magenta/10",
  },
};

export function ServiceCard({ title, description, icon, color, href, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[icon] || Brain;
  const colors = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} className="group block">
        <div
          className={cn(
            "p-6 md:p-8 rounded-2xl glass border border-transparent transition-all duration-500",
            colors.border,
            colors.glow,
            "group-hover:shadow-lg"
          )}
        >
          <div
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white/5 transition-colors",
              colors.bg
            )}
          >
            <Icon className={cn("w-6 h-6", colors.text)} />
          </div>
          <h3 className="text-xl font-semibold font-[var(--font-heading)] mb-2">{title}</h3>
          <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
          <span className={cn("inline-flex items-center gap-1 text-sm font-medium", colors.text)}>
            Learn More <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

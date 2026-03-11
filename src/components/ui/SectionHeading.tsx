"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn className={cn("mb-12 md:mb-16", align === "center" && "text-center", className)}>
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-medium text-cyan border border-cyan/30 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-muted text-lg",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}

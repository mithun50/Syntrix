"use client";

import { cn } from "@/lib/utils";

interface NeonGlowProps {
  color?: "cyan" | "purple" | "magenta";
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "w-32 h-32",
  md: "w-64 h-64",
  lg: "w-96 h-96",
};

const colorMap = {
  cyan: "bg-cyan/20",
  purple: "bg-purple/20",
  magenta: "bg-magenta/20",
};

export function NeonGlow({ color = "cyan", className, size = "md" }: NeonGlowProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-[128px] pointer-events-none",
        sizeMap[size],
        colorMap[color],
        className
      )}
    />
  );
}

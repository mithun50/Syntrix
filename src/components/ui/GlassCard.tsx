import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddings = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function GlassCard({ children, className, hover = true, padding = "md" }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl glass",
        hover && "glass-hover transition-all duration-300",
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

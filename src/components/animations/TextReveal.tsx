"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function TextReveal({ children, className, as: Tag = "h2" }: TextRevealProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const words = children.split(" ");

  return (
    <Tag ref={ref} className={cn("flex flex-wrap gap-x-2", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}

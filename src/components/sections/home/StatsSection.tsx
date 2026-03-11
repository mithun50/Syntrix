"use client";

import { Section } from "@/components/layout/Section";
import { CountUp } from "@/components/animations/CountUp";
import { stats } from "@/data/stats";

export function StatsSection() {
  return (
    <Section className="py-16 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] gradient-text">
              <CountUp end={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-sm text-muted mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

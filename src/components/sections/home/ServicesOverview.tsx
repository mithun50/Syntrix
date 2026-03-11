"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export function ServicesOverview() {
  return (
    <Section>
      <SectionHeading
        badge="What We Do"
        title="Services Built for the Future"
        description="From AI to marketing to custom software, we deliver end-to-end solutions that drive real results."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            description={service.description}
            icon={service.icon}
            color={service.color}
            href={`/services/${service.slug}`}
            index={i}
          />
        ))}
      </div>
    </Section>
  );
}

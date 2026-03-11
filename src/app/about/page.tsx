import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { team } from "@/data/team";
import { Target, Eye, Zap, Heart, Shield, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Syntrix — our story, mission, values, and team.",
};

const values = [
  { icon: Zap, title: "Innovation First", description: "We push boundaries with emerging technologies." },
  { icon: Heart, title: "Client Obsessed", description: "Your success is our success." },
  { icon: Shield, title: "Quality & Trust", description: "Crafted with precision and integrity." },
  { icon: Lightbulb, title: "Continuous Learning", description: "Always evolving, always improving." },
];

const timeline = [
  { year: "2021", title: "Founded", description: "Syntrix was born to merge AI, marketing, and software." },
  { year: "2022", title: "First Major Client", description: "Delivered our first enterprise AI solution." },
  { year: "2023", title: "Team Growth", description: "Expanded the team across multiple verticals." },
  { year: "2024", title: "150+ Projects", description: "Reached a milestone of 150+ successful projects." },
  { year: "2025", title: "Global Reach", description: "Serving clients across 10+ countries." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="About"
        title="Building the future, one solution at a time"
        description="A team of creators, engineers, and strategists who believe in the power of technology."
      />

      {/* Timeline */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-xl font-bold font-[var(--font-heading)] mb-8">Our Journey</h2>
          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-6 items-start">
                <span className="text-sm font-mono text-accent font-medium w-12 flex-shrink-0 pt-0.5">{item.year}</span>
                <div className="pb-6 border-b border-border flex-1">
                  <h3 className="font-semibold font-[var(--font-heading)]">{item.title}</h3>
                  <p className="text-sm text-muted mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-6xl px-5 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl border border-border bg-card">
            <Target className="w-5 h-5 text-accent mb-3" />
            <h3 className="text-lg font-bold font-[var(--font-heading)] mb-2">Mission</h3>
            <p className="text-sm text-muted leading-relaxed">
              To empower businesses with intelligent, scalable solutions that combine AI innovation,
              strategic marketing, and robust software engineering.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card">
            <Eye className="w-5 h-5 text-accent2 mb-3" />
            <h3 className="text-lg font-bold font-[var(--font-heading)] mb-2">Vision</h3>
            <p className="text-sm text-muted leading-relaxed">
              To be the most trusted partner for AI-driven growth — where every business
              can leverage cutting-edge technology to compete and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-xl font-bold font-[var(--font-heading)] mb-8">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="p-5 rounded-xl border border-border bg-card">
                <v.icon className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-semibold font-[var(--font-heading)] text-sm">{v.title}</h3>
                <p className="text-xs text-muted mt-1">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-xl font-bold font-[var(--font-heading)] mb-8">Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-lg gap-5">
            {team.map((member) => (
              <div key={member.name} className="p-5 rounded-xl border border-border bg-card">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-background text-sm font-bold mb-3">
                  {member.name[0]}
                </div>
                <h3 className="font-semibold font-[var(--font-heading)] text-sm">{member.name}</h3>
                <p className="text-xs text-accent mt-0.5">{member.role}</p>
                <p className="text-xs text-muted mt-2 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

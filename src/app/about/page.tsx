import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { team } from "@/data/team";
import { Target, Eye, Zap, Heart, Shield, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Syntrix — our story, mission, values, and team.",
};

const values = [
  { icon: Zap, title: "Innovation First", description: "We push boundaries with emerging technologies.", accent: "text-accent" },
  { icon: Heart, title: "Client Obsessed", description: "Your success is our success.", accent: "text-accent3" },
  { icon: Shield, title: "Quality & Trust", description: "Crafted with precision and integrity.", accent: "text-accent2" },
  { icon: Lightbulb, title: "Continuous Learning", description: "Always evolving, always improving.", accent: "text-accent" },
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
      <section className="py-20 relative">
        <div className="absolute inset-0 line-pattern opacity-30 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="flex items-start gap-6 mb-12">
            <span className="font-mono text-[11px] text-muted tracking-widest mt-1">01</span>
            <h2 className="text-2xl font-bold font-[var(--font-heading)] tracking-tight">Our Journey</h2>
          </div>

          <div className="max-w-2xl ml-0 md:ml-12">
            {timeline.map((item, i) => (
              <div key={item.year} className={`flex gap-6 items-start animate-fade-up delay-${i + 1}`}>
                <div className="flex flex-col items-center">
                  <span className="font-mono text-[13px] text-accent font-semibold w-14 flex-shrink-0 pt-0.5 tracking-wide">
                    {item.year}
                  </span>
                </div>
                <div className="pb-8 border-l border-border pl-6 relative">
                  {/* Timeline dot */}
                  <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-accent -translate-x-1" />
                  <h3 className="font-semibold font-[var(--font-heading)] tracking-tight">{item.title}</h3>
                  <p className="text-sm text-muted mt-1 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-start gap-6 mb-12">
            <span className="font-mono text-[11px] text-muted tracking-widest mt-1">02</span>
            <h2 className="text-2xl font-bold font-[var(--font-heading)] tracking-tight">Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl ml-0 md:ml-12">
            <div className="group p-7 rounded-2xl border border-border bg-card card-glow">
              <div className="w-10 h-10 rounded-xl border border-border flex items-center justify-center mb-5 group-hover:border-accent/30 transition-colors duration-300">
                <Target className="w-[18px] h-[18px] text-accent" />
              </div>
              <h3 className="text-lg font-bold font-[var(--font-heading)] tracking-tight mb-3">Mission</h3>
              <p className="text-sm text-muted leading-relaxed">
                To empower businesses with intelligent, scalable solutions that combine AI innovation,
                strategic marketing, and robust software engineering.
              </p>
            </div>
            <div className="group p-7 rounded-2xl border border-border bg-card card-glow">
              <div className="w-10 h-10 rounded-xl border border-border flex items-center justify-center mb-5 group-hover:border-accent2/30 transition-colors duration-300">
                <Eye className="w-[18px] h-[18px] text-accent2" />
              </div>
              <h3 className="text-lg font-bold font-[var(--font-heading)] tracking-tight mb-3">Vision</h3>
              <p className="text-sm text-muted leading-relaxed">
                To be the most trusted partner for AI-driven growth — where every business
                can leverage cutting-edge technology to compete and thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-t border-border relative">
        <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="flex items-start gap-6 mb-12">
            <span className="font-mono text-[11px] text-muted tracking-widest mt-1">03</span>
            <h2 className="text-2xl font-bold font-[var(--font-heading)] tracking-tight">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ml-0 md:ml-12">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`group p-6 rounded-2xl border border-border bg-card card-glow animate-fade-up delay-${i + 1}`}
              >
                <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center mb-4 group-hover:border-accent/30 transition-colors duration-300">
                  <v.icon className={`w-4 h-4 ${v.accent}`} />
                </div>
                <h3 className="font-semibold font-[var(--font-heading)] text-sm tracking-tight">{v.title}</h3>
                <p className="text-xs text-muted mt-2 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-start gap-6 mb-12">
            <span className="font-mono text-[11px] text-muted tracking-widest mt-1">04</span>
            <h2 className="text-2xl font-bold font-[var(--font-heading)] tracking-tight">Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-xl ml-0 md:ml-12 gap-5">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`group p-7 rounded-2xl border border-border bg-card card-glow animate-fade-up delay-${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent3/20 border border-border flex items-center justify-center text-accent text-sm font-bold font-[var(--font-heading)] mb-4">
                  {member.name[0]}
                </div>
                <h3 className="font-bold font-[var(--font-heading)] tracking-tight">{member.name}</h3>
                <p className="font-mono text-[11px] text-accent tracking-wider mt-1">{member.role}</p>
                <p className="text-sm text-muted mt-3 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

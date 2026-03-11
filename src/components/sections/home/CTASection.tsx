"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { Section } from "@/components/layout/Section";

export function CTASection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl glass p-12 md:p-16 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-purple/5 to-magenta/5" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] mb-4">
            Ready to Build the{" "}
            <span className="gradient-text">Future</span>?
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-8">
            Let&apos;s discuss your next project. Whether it&apos;s AI, marketing, or software — we&apos;re here to help you grow.
          </p>
          <MagneticButton>
            <Button href="/contact" size="lg">
              Get in Touch <ArrowRight size={18} />
            </Button>
          </MagneticButton>
        </div>
      </motion.div>
    </Section>
  );
}

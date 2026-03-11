"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TypeWriter } from "@/components/animations/TypeWriter";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { ParticleGrid } from "@/components/backgrounds/ParticleGrid";
import { GradientOrbs } from "@/components/backgrounds/GradientOrbs";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleGrid />
      <GradientOrbs />

      <Container className="relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-cyan mb-6"
          >
            <Sparkles size={14} />
            <span>AI-Powered Agency</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-heading)] leading-[1.1] mb-6">
            We Build{" "}
            <span className="gradient-text">
              <TypeWriter
                words={["AI Solutions", "Marketing Strategies", "Software Tools", "Digital Experiences"]}
              />
            </span>
            <br />
            That Drive Growth
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-2xl mb-8">
            Syntrix is your all-in-one partner for AI development, digital marketing, and custom software.
            We transform ideas into intelligent, scalable solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <MagneticButton>
              <Button href="/contact" size="lg">
                Start Your Project <ArrowRight size={18} />
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href="/portfolio" variant="secondary" size="lg">
                View Our Work
              </Button>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted/30 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-cyan" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

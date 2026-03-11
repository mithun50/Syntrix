"use client";

import { motion } from "motion/react";
import type { TeamMember } from "@/types";

interface TeamMemberCardProps {
  member: TeamMember;
  index?: number;
}

export function TeamMemberCard({ member, index = 0 }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="rounded-2xl glass p-6 text-center hover:border-cyan/20 border border-transparent transition-all duration-300">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-cyan to-purple flex items-center justify-center text-white text-2xl font-bold mb-4">
          {member.name[0]}
        </div>
        <h3 className="font-semibold font-[var(--font-heading)]">{member.name}</h3>
        <p className="text-sm text-cyan mt-1">{member.role}</p>
        <p className="text-sm text-muted mt-2 line-clamp-2">{member.bio}</p>
      </div>
    </motion.div>
  );
}

"use client";
import { motion } from "framer-motion";
import { SkillCards } from "@/components/ui/skill-cards";
import { SplitText } from "@/components/ui/split-text";
import { Sparkles } from "lucide-react";

export const SkillsSection = () => (
  <section id="skills" className="py-32 px-4 relative z-20 overflow-hidden">
    {/* Background Glows */}
    <div className="absolute pointer-events-none top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[150px]" />
    <div className="absolute pointer-events-none bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[120px]" />

    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-16 md:mb-20 flex items-center gap-6"
      >
        <div className="glass-card p-3 rounded-2xl flex-shrink-0">
          <Sparkles className="w-8 h-8 text-blue-400" />
        </div>
        <div className="flex-1">
          <SplitText
            text="Technical Arsenal"
            className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-2"
            by="char"
          />
          <div className="h-[1px] w-full max-w-sm bg-gradient-to-r from-blue-500/50 to-transparent" />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className="text-muted-foreground text-lg max-w-2xl mb-14"
      >
        The tools, frameworks, and languages I use to architect clean systems
        and craft pixel-perfect interfaces.
      </motion.p>

      <SkillCards />
    </div>
  </section>
);

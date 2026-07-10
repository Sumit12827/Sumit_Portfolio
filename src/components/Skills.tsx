"use client";
import { motion } from "framer-motion";
import { ExpertiseMatrix } from "@/components/ui/expertise-matrix";
import { SplitText } from "@/components/ui/split-text";

export const SkillsSection = () => (
  <section id="skills" className="py-32 px-4 relative z-20 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-20 text-center"
      >
        <SplitText text="Technical Arsenal" className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4" by="char" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A constellation of tools, frameworks, and languages I use to bring ideas to life.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut', type: "spring", stiffness: 100 }}
      >
        <ExpertiseMatrix />
      </motion.div>
    </div>
  </section>
);

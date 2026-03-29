"use client";
import { Logos3 } from "@/components/ui/logos3";
import { motion } from "framer-motion";

export const SkillsSection = () => (
  <section id="skills" className="py-24 relative z-20">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Logos3 />
      <Logos3 direction="backward" showHeading={false} />
    </motion.div>
  </section>
);

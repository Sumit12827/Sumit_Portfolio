"use client";
import { SocialConnect } from "@/components/ui/connect-with-us";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export const ContactSection = () => (
  <section id="contact" className="py-24 flex flex-col items-center gap-12 text-center text-foreground relative z-20 px-4 md:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
      <p className="text-muted-foreground text-lg mb-8">
        Open to collaborations, internships, and interesting ideas.
      </p>

      <a href="https://drive.google.com/uc?export=download&id=19D_2tSZCINeyP-jJftIwbhid17Y2YnIO" className="inline-block mb-12" target="_blank" rel="noopener noreferrer">
        <LiquidButton size="xl" className="gap-3 text-base px-10">
          Download Resume
          <Download className="w-5 h-5" />
        </LiquidButton>
      </a>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      className="w-full max-w-2xl"
    >
      <SocialConnect />
    </motion.div>
  </section>
);

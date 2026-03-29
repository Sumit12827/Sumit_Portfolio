'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 lg:px-16 text-foreground relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">About Me</h2>
          <div className="h-[1px] w-full bg-foreground/10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              I&apos;m Sumit, a Computer Science student passionate about building things that live at the intersection of design and engineering.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light mt-6">
              I develop for both web and iOS, and I love creating experiences that are clean, fast, and purposeful. Currently working on AR, AI-powered tools, and productivity apps for focus-driven users.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-4xl font-bold mb-2">4+</h3>
              <p className="text-muted-foreground">Major Projects Developed</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-4xl font-bold mb-2">2</h3>
              <p className="text-muted-foreground">Platforms — Web & iOS</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-4xl font-bold mb-2">100%</h3>
              <p className="text-muted-foreground">Open Source Contributor</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

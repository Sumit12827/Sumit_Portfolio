"use client";

import { motion } from 'framer-motion';
import HoverRevealCards, { CardItem } from '@/components/ui/cards';

const projects: CardItem[] = [
  {
    id: 1,
    title: 'QuickMathAR',
    subtitle: 'Swift · ARKit · SwiftUI',
    imageUrl: '/projects/quickmathar.png',
    github: 'https://github.com/Sumit12827/QuickMathAR.git',
  },
  {
    id: 2,
    title: 'RepoLens',
    subtitle: 'React · TypeScript · Vite',
    imageUrl: '/projects/repolens.png',
    github: 'https://github.com/Sumit12827/quickcode-lens.git',
  },
  {
    id: 3,
    title: 'MegaBlog',
    subtitle: 'React · Redux · Appwrite',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/Sumit12827/MegaBlog.git',
  },
  {
    id: 4,
    title: 'Avello',
    subtitle: 'Swift · iOS · SwiftUI',
    imageUrl: '/projects/avello.png',
    github: 'https://github.com/jyotiraditya-chauhan/Avello.git',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-4 md:px-8 lg:px-16 text-foreground relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Selected Work</h2>
          <div className="h-[1px] w-full bg-foreground/10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <HoverRevealCards
            items={projects}
            className="max-w-7xl md:grid-cols-4 gap-5"
            cardClassName="h-96 rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

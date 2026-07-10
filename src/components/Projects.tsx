"use client";

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { Github, Smartphone, ExternalLink } from 'lucide-react';
import { SplitText } from '@/components/ui/split-text';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'QuickMathAR',
    subtitle: 'Swift · ARKit · SwiftUI',
    description: 'An immersive augmented reality experience to solve math problems interactively using computer vision.',
    imageUrl: '/projects/quickmathar_new.png',
    github: 'https://github.com/Sumit12827/QuickMathAR.git',
    appStore: 'https://apps.apple.com/in/app/quickmathar/id6780768001',
    colSpan: 'md:col-span-8',
    height: 'h-[400px]',
  },
  {
    id: 2,
    title: 'RepoLens',
    subtitle: 'React · TypeScript · Vite',
    description: 'A lightning-fast repository analysis tool for developers to understand codebases instantly.',
    imageUrl: '/projects/repolens.png',
    github: 'https://github.com/Sumit12827/quickcode-lens.git',
    liveUrl: 'https://repo-lens-khaki.vercel.app/',
    colSpan: 'md:col-span-4',
    height: 'h-[400px]',
  },
  {
    id: 3,
    title: 'Avello',
    subtitle: 'Swift · iOS · SwiftUI',
    description: 'A native iOS application showcasing fluid animations and clean architecture.',
    imageUrl: '/projects/avello_new.jpg',
    github: 'https://github.com/jyotiraditya-chauhan/Avello.git',
    colSpan: 'md:col-span-4',
    height: 'h-[400px]',
  },
  {
    id: 4,
    title: 'MegaBlog',
    subtitle: 'React · Redux · Appwrite',
    description: 'A full-stack blogging platform with real-time updates and secure authentication.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/Sumit12827/MegaBlog.git',
    colSpan: 'md:col-span-8',
    height: 'h-[400px]',
  },
];

type ProjectType = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  github: string;
  appStore?: string;
  liveUrl?: string;
  colSpan: string;
  height: string;
};

const BentoCard = ({ project, index }: { project: ProjectType; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.1), transparent 80%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100, damping: 20 }}
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] shadow-2xl ${project.colSpan} ${project.height}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{ background }}
      />
      
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-10">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-blue-400 font-medium mb-2 tracking-wide uppercase text-xs md:text-sm">{project.subtitle}</p>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">{project.title}</h3>
          <p className="text-white/60 mb-6 max-w-md line-clamp-2">{project.description}</p>
          
          <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex-wrap">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <LiquidButton size="default" className="gap-2 px-6">
                <Github className="w-4 h-4" />
                <span>Source</span>
              </LiquidButton>
            </a>
            {project.appStore && (
              <a href={project.appStore} target="_blank" rel="noopener noreferrer">
                <LiquidButton size="default" className="gap-2 px-6 bg-white/10 hover:bg-white/20">
                  <Smartphone className="w-4 h-4" />
                  <span>App Store</span>
                </LiquidButton>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <LiquidButton size="default" className="gap-2 px-6 bg-white/10 hover:bg-white/20">
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </LiquidButton>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-4 md:px-8 lg:px-16 text-foreground relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-20 flex flex-col md:flex-row items-baseline gap-6"
        >
          <SplitText text="Selected Work" className="text-5xl md:text-7xl font-serif font-bold tracking-tighter" by="word" />
          <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/50 to-transparent mt-4 md:mt-0 hidden md:block" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <BentoCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

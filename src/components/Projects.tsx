"use client";
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'QuickMathAR',
    description: 'An AR-powered math learning app built for the Apple Swift Student Challenge. Visualizes math concepts in augmented reality using your device\'s camera.',
    stack: ['Swift', 'SwiftUI', 'ARKit', 'Foundational Model'],
    github: 'https://github.com/Sumit12827/QuickMathAR.git',
    status: 'Completed',
    image: '/projects/quickmathar.png',
  },
  {
    title: 'RepoLens',
    description: 'An AI automation tool that analyses GitHub repositories, surfaces key insights, and helps developers understand codebases faster.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/Sumit12827/quickcode-lens.git',
    status: 'Completed',
    image: '/projects/repolens.png',
  },
  {
    title: 'MegaBlog',
    description: 'A full-stack blog platform with complete user authentication, rich text editing, and cloud storage — built with a modern React stack.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Redux Toolkit', 'Appwrite'],
    github: 'https://github.com/Sumit12827/MegaBlog.git',
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Avello',
    description: 'An iOS productivity app designed for students and young professionals with ADHD. Helps manage focus, tasks, and daily routines with a calm, distraction-free UI.',
    stack: ['Swift', 'iOS', 'SwiftUI'],
    github: 'https://github.com/jyotiraditya-chauhan/Avello.git',
    status: 'In Progress',
    image: '/projects/avello.png',
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-60"
                />
                <div className="absolute inset-0 bg-background/60 transition-opacity duration-500 group-hover:opacity-40" />
                
                {project.status === 'In Progress' && (
                  <div className="absolute top-4 left-4 z-20 bg-primary/20 text-primary border border-primary/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                    IN PROGRESS
                  </div>
                )}
              </div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background/95 via-background/40 to-transparent">
                <div className="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4 group-hover:line-clamp-none transition-all duration-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map(tech => (
                        <span key={tech} className="text-xs bg-foreground/10 text-foreground px-2 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
                    >
                      View Code <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

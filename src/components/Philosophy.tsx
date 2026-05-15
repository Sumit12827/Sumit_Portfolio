'use client';

import { motion } from 'framer-motion';
import { Workflow, ShieldCheck, Zap, MousePointerClick, Sparkles } from 'lucide-react';

const principles = [
  {
    title: "Deep Modules, Simple APIs",
    description: "I aim for high functionality-to-interface ratios. A deep module hides significant complexity behind a few self-evident methods, reducing the cognitive load on the rest of the system.",
    icon: Workflow,
    color: "text-blue-400",
    accent: "via-blue-500/50",
    bg: "bg-blue-500/10",
  },
  {
    title: "Defensive Craftsmanship",
    description: "I write code as if the person maintaining it is a violent psychopath who knows where I live. This means strict error boundaries, exhaustive type safety, and zero magic numbers.",
    icon: ShieldCheck,
    color: "text-green-400",
    accent: "via-green-500/50",
    bg: "bg-green-500/10",
  },
  {
    title: "Strategic Over Tactical",
    description: "I invest 20% more upfront to get the design right. Tactical shortcuts are 'unknown unknowns' waiting to happen. I optimize for the reader, because code is read 10x more than it's written.",
    icon: Zap,
    color: "text-yellow-400",
    accent: "via-yellow-500/50",
    bg: "bg-yellow-500/10",
  },
  {
    title: "The Trunk Test UX",
    description: "Interfaces should pass the 'Trunk Test': if a user is dropped on any page, they should instantly know where they are and what they can do, without a single 'Huh?' moment.",
    icon: MousePointerClick,
    color: "text-purple-400",
    accent: "via-purple-500/50",
    bg: "bg-purple-500/10",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-4 md:px-8 lg:px-16 text-foreground relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-16 md:mb-24 flex items-center gap-6"
        >
          <div className="glass-card p-3 rounded-2xl flex-shrink-0">
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Engineering Philosophy</h2>
            <div className="h-[1px] w-full max-w-sm bg-gradient-to-r from-purple-500/50 to-transparent" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {principles.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Decorative background glow */}
              <div className={`absolute -right-8 -top-8 w-32 h-32 ${p.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className={`${p.bg} ${p.color} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <p.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">
                  {p.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-light text-lg">
                  {p.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent ${p.accent} to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground/60 text-sm font-medium uppercase tracking-[0.3em]">
            Built for Quality · Designed for Impact
          </p>
        </motion.div>
      </div>
    </section>
  );
}

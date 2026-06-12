'use client';

import { motion, Variants } from 'framer-motion';
import {
  Briefcase,
  BrainCircuit,
  GitBranch,
  Users,
  GraduationCap,
  MapPin,
  CalendarDays,
  Sparkles,
} from 'lucide-react';

interface Achievement {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bg: string;
}

const achievements: Achievement[] = [
  {
    icon: Users,
    title: 'Agile & Scrum',
    description:
      'Collaborated in a cross-functional Agile team to design and develop a Loan Management System (LMS) iOS app, participating in sprint planning, daily stand-ups, and retrospectives throughout the 4-week engagement.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Risk Engine',
    description:
      'Engineered an AI-powered borrower risk analysis feature that classifies applicants as Low, Medium, or High risk based on their profile and loan application data, enabling faster and more objective lending decisions.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: GitBranch,
    title: 'Jira & Git Discipline',
    description:
      'Managed tasks, bugs, and sprint deliverables on a Jira board, moving tickets across To Do → In Progress → Done; practiced version control discipline with Git throughout the project.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: GraduationCap,
    title: 'Enterprise L&D',
    description:
      'Attended multiple Infosys L&D sessions focused on corporate communication, workplace discipline, psychological thinking, and professional conduct — building soft skills essential for enterprise environments.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-4 md:px-8 lg:px-16 text-foreground relative z-20 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute pointer-events-none top-0 right-0 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-[140px]" />
      <div className="absolute pointer-events-none bottom-0 left-0 w-96 h-96 bg-blue-500/8 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
              Experience
            </h2>
            <div className="h-[1px] w-full max-w-sm bg-gradient-to-r from-purple-500/50 to-transparent" />
          </div>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glass-card rounded-[2rem] border border-white/5 bg-white/[0.02] overflow-hidden mb-12"
        >
          {/* Card Header */}
          <div className="relative p-8 md:p-10 border-b border-white/5 bg-gradient-to-r from-purple-500/10 via-blue-500/5 to-transparent">
            <div className="absolute top-0 right-0 bottom-0 w-64 bg-gradient-to-l from-purple-500/5 to-transparent" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
              {/* Company logo placeholder */}
              <div className="glass-card p-4 rounded-2xl bg-white/[0.04] flex-shrink-0 border border-white/10 w-fit">
                <Briefcase className="w-10 h-10 text-purple-400" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                    iOS Developer Intern
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/15 text-purple-300 border border-purple-500/20">
                    Full-time
                  </span>
                </div>
                <p className="text-xl text-blue-400 font-semibold mb-4">
                  Infosys
                </p>
                <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-400/70" />
                    Mysuru, Karnataka
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-blue-400/70" />
                    May 11, 2025 – Jun 5, 2025
                  </span>
                </div>
              </div>

              {/* Duration badge */}
              <div className="glass-card px-5 py-3 rounded-2xl border border-white/10 text-center flex-shrink-0">
                <p className="text-3xl font-bold text-foreground">4</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                  Weeks
                </p>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="p-8 md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground/60 mb-8">
              Key Contributions
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {achievements.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="group relative glass-card p-6 rounded-[1.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div
                    className={`absolute -right-6 -top-6 w-24 h-24 ${item.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  />

                  <div className="relative z-10 flex gap-4">
                    <div
                      className={`${item.bg} ${item.color} p-3 rounded-xl flex-shrink-0 h-fit group-hover:scale-110 transition-transform duration-500`}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent ${item.bg.replace('bg-', 'via-').replace('/10', '/60')} to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Footer tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground/50 text-sm font-medium uppercase tracking-[0.3em]">
            Enterprise Experience · Real-World Impact
          </p>
        </motion.div>
      </div>
    </section>
  );
}

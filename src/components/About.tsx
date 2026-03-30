'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Trophy, Code2, Layers, Cpu, Sparkles } from 'lucide-react';

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-24 px-4 md:px-8 lg:px-16 text-foreground relative z-20 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute pointer-events-none top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute pointer-events-none bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-16 md:mb-24 flex items-center gap-6"
        >
          <div className="glass-card p-3 rounded-2xl flex-shrink-0">
            <Sparkles className="w-8 h-8 text-blue-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Behind the Code</h2>
            <div className="h-[1px] w-full max-w-sm bg-gradient-to-r from-blue-500/50 to-transparent" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Visual Profile Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-12 xl:col-span-5 flex flex-col items-center justify-start"
          >
            <div className="glass-card rounded-[2.5rem] p-4 w-full max-w-[280px] relative overflow-hidden group hover:border-white/10 transition-colors duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div 
                  className="w-full aspect-[4/5] relative mb-4 rounded-[1.8rem] overflow-hidden border border-white/5 bg-slate-900/50 flex items-center justify-center"
                  whileHover={{ scale: 1.02, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                  <Image
                    src="/avatar.png"
                    alt="Sumit - Apple Swift Student Challenge Winner"
                    fill
                    sizes="(max-width: 768px) 280px, 280px"
                    className="w-full h-full object-contain filter brightness-110 contrast-105"
                  />
                </motion.div>
                
                <h3 className="text-xl font-bold tracking-tight mb-0.5">Sumit</h3>
                <p className="text-lg text-blue-400 font-medium mb-8">iOS Developer & CS Student</p>
                
                {/* Stats / Badges */}
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="glass-card p-5 rounded-2xl flex flex-col items-center text-center bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1">
                    <div className="bg-yellow-500/10 p-3 rounded-full mb-3">
                      <Trophy className="w-6 h-6 text-yellow-500" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">Apple WWDC</span>
                    <span className="text-sm font-semibold text-foreground">Swift Challenge Winner</span>
                  </div>
                  
                  <div className="glass-card p-5 rounded-2xl flex flex-col items-center text-center bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1">
                    <div className="bg-blue-500/10 p-3 rounded-full mb-3">
                      <Layers className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">Expertise</span>
                    <span className="text-sm font-semibold text-foreground">Clean Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 flex flex-col justify-center space-y-8"
          >
            <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-foreground/90 leading-snug font-medium tracking-tight">
              I&apos;m a Computer Science student and iOS developer focused on building meaningful, production-grade applications that solve real problems.
            </motion.p>
            
            <div className="flex flex-col space-y-6 text-lg max-w-2xl">
              <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed font-light">
                My journey into development hasn&apos;t been about just learning technologies — it&apos;s been about pushing boundaries, refining ideas, and turning concepts into polished digital experiences. From late-night debugging sessions to designing user-centric features, I&apos;ve consistently challenged myself to grow beyond the basics.
              </motion.p>
              
              <motion.div variants={itemVariants} className="glass-card p-6 md:p-8 rounded-[1.5rem] border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-500/10 to-transparent relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Code2 className="w-16 h-16 text-blue-300" />
                </div>
                <p className="text-foreground leading-relaxed font-medium relative z-10">
                  I specialize in Swift and modern iOS development, with a strong emphasis on clean architecture, performance, and user experience. <span className="text-blue-200">I believe great products are not just built — they are carefully crafted with attention to detail at every level.</span>
                </p>
              </motion.div>

              <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed font-light">
                Winning the Apple Swift Student Challenge has been a defining milestone in my journey, reinforcing my belief in building impactful solutions and thinking at a global level.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed font-light">
                Currently, I&apos;m focused on creating applications that combine technology with education and real-world usability — aiming to deliver products that are not only functional, but genuinely valuable.
              </motion.p>
              
              <motion.div variants={itemVariants} className="pt-4">
                <p className="text-xl md:text-2xl text-foreground font-semibold inline-flex items-center gap-3">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">I&apos;m always looking to learn, improve, and build things that matter.</span>
                  <Cpu className="w-6 h-6 text-purple-400" />
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

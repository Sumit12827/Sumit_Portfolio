"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  SiSwift, SiXcode, SiCplusplus, SiPython,
  SiReact, SiTypescript, SiJavascript, SiVite, SiTailwindcss, SiHtml5, SiCss, SiBootstrap,
  SiFirebase, SiAppwrite, SiNodedotjs,
  SiGit, SiGithub, SiVercel, SiJira, SiFigma
} from "react-icons/si";
import { Smartphone, Globe, Cloud, Wrench } from "lucide-react";

type Skill = {
  name: string;
  icon: React.ElementType;
  color: string;
};

type SkillCategory = {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  accentColor: string;
  accentGlow: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "iOS Development",
    subtitle: "Native Apple Ecosystem",
    icon: Smartphone,
    accentColor: "#007AFF",
    accentGlow: "rgba(0, 122, 255, 0.15)",
    skills: [
      { name: "Swift", icon: SiSwift, color: "#F05138" },
      { name: "SwiftUI", icon: SiSwift, color: "#007AFF" },
      { name: "Xcode", icon: SiXcode, color: "#157EFB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    title: "Web Development",
    subtitle: "Modern Frontend Stack",
    icon: Globe,
    accentColor: "#61DAFB",
    accentGlow: "rgba(97, 218, 251, 0.15)",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Backend & Cloud",
    subtitle: "Services & Infrastructure",
    icon: Cloud,
    accentColor: "#FFCA28",
    accentGlow: "rgba(255, 202, 40, 0.15)",
    skills: [
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Appwrite", icon: SiAppwrite, color: "#FD366E" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    ],
  },
  {
    title: "Tools & Workflow",
    subtitle: "Dev Environment & Process",
    icon: Wrench,
    accentColor: "#A78BFA",
    accentGlow: "rgba(167, 139, 250, 0.15)",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#E6EDF3" },
      { name: "Vercel", icon: SiVercel, color: "#E6EDF3" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const skillPillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const CategoryCard = ({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const CategoryIcon = category.icon;

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: index * 0.12 }}
      className="group relative rounded-[1.75rem] overflow-hidden"
      style={{
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${category.accentGlow}, transparent 70%)`,
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-[1px] opacity-40 group-hover:opacity-80 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${category.accentColor}, transparent)`,
        }}
      />

      <div className="relative z-10 p-7 md:p-9">
        {/* Category Header */}
        <div className="flex items-center gap-4 mb-7">
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
            style={{
              background: `linear-gradient(135deg, ${category.accentColor}20, ${category.accentColor}08)`,
              border: `1px solid ${category.accentColor}25`,
            }}
          >
            <CategoryIcon
              className="w-5 h-5"
              style={{ color: category.accentColor }}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground leading-tight">
              {category.title}
            </h3>
            <p className="text-xs text-muted-foreground font-medium tracking-wide mt-0.5">
              {category.subtitle}
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.06, delayChildren: index * 0.12 + 0.3 }}
        >
          {category.skills.map((skill) => (
            <SkillPill key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillPill = ({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      variants={skillPillVariants}
      whileHover={{
        scale: 1.08,
        y: -3,
        transition: { type: "spring", stiffness: 400, damping: 15 },
      }}
      whileTap={{ scale: 0.96 }}
      className="group/pill relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl cursor-default select-none transition-colors duration-300"
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.background = `${skill.color}10`;
        el.style.borderColor = `${skill.color}30`;
        el.style.boxShadow = `0 4px 20px ${skill.color}15, 0 0 0 1px ${skill.color}10`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.background = "rgba(255, 255, 255, 0.03)";
        el.style.borderColor = "rgba(255, 255, 255, 0.06)";
        el.style.boxShadow = "none";
      }}
    >
      <Icon
        className="w-4 h-4 md:w-[18px] md:h-[18px] flex-shrink-0 transition-transform duration-300 group-hover/pill:scale-110"
        style={{ color: skill.color }}
      />
      <span className="text-sm font-medium text-white/80 group-hover/pill:text-white transition-colors duration-300 whitespace-nowrap">
        {skill.name}
      </span>
    </motion.div>
  );
};

export const SkillCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full max-w-5xl mx-auto">
      {skillCategories.map((category, index) => (
        <CategoryCard key={category.title} category={category} index={index} />
      ))}
    </div>
  );
};

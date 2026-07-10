"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  SiCplusplus, SiSwift, SiPython, SiJavascript, SiTypescript,
  SiReact, SiVite, SiTailwindcss, SiHtml5, SiCss, SiBootstrap,
  SiAppwrite, SiFirebase, SiNodedotjs, 
  SiGit, SiGithub, SiXcode, SiVercel, SiJira
} from "react-icons/si";

type Expertise = {
  name: string;
  value: number; // 0 to 3
  color: string;
  icon: React.ElementType;
};

const expertiseData: Expertise[] = [
  { name: "Swift", value: 3.0, color: "#F05138", icon: SiSwift },
  { name: "SwiftUI", value: 3.0, color: "#007AFF", icon: SiSwift },
  { name: "C++", value: 2.5, color: "#00599C", icon: SiCplusplus },
  { name: "Python", value: 2.5, color: "#3776AB", icon: SiPython },
  { name: "JavaScript", value: 2.8, color: "#F7DF1E", icon: SiJavascript },
  { name: "TypeScript", value: 2.8, color: "#3178C6", icon: SiTypescript },
  { name: "React", value: 3.0, color: "#61DAFB", icon: SiReact },
  { name: "Vite", value: 2.5, color: "#646CFF", icon: SiVite },
  { name: "Tailwind", value: 3.0, color: "#06B6D4", icon: SiTailwindcss },
  { name: "HTML", value: 3.0, color: "#E34F26", icon: SiHtml5 },
  { name: "CSS", value: 2.8, color: "#1572B6", icon: SiCss },
  { name: "Bootstrap", value: 2.5, color: "#7952B3", icon: SiBootstrap },
  { name: "Appwrite", value: 2.5, color: "#FD366E", icon: SiAppwrite },
  { name: "Firebase", value: 2.8, color: "#FFCA28", icon: SiFirebase },
  { name: "Node.js", value: 2.5, color: "#339933", icon: SiNodedotjs },
  { name: "Git", value: 3.0, color: "#F05032", icon: SiGit },
  { name: "GitHub", value: 3.0, color: "#FFFFFF", icon: SiGithub },
  { name: "Xcode", value: 3.0, color: "#157EFB", icon: SiXcode },
  { name: "Vercel", value: 2.8, color: "#FFFFFF", icon: SiVercel },
  { name: "Jira", value: 2.5, color: "#0052CC", icon: SiJira },
];

const levels = ["Beginner", "Intermediate", "Advanced", "Expert"];

export const ExpertiseMatrix = () => {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/5 p-6 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[200px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="mb-10 flex items-center gap-3">
        <span className="text-blue-500 font-mono text-sm tracking-wider font-semibold">
          {"// EXPERTISE MATRIX"}
        </span>
      </div>

      {/* Grid Container */}
      <div className="flex flex-col">
        {/* Table Header */}
        <div className="grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] items-center gap-4 mb-8">
          <div /> {/* Empty top-left cell */}
          <div className="flex justify-between items-center w-full px-1">
            {levels.map((level) => (
              <span key={level} className="text-white/60 text-[10px] md:text-sm font-medium w-16 md:w-20 text-center">
                {level}
              </span>
            ))}
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-6 md:gap-7">
          {expertiseData.map((item, index) => (
            <TrackRow key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TrackRow = ({ item, index }: { item: Expertise; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Calculate percentage along the track (value is 0 to 3)
  const percentage = (item.value / 3) * 100;

  return (
    <div className="grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] items-center gap-4 group">
      {/* Icon instead of Name */}
      <div className="flex justify-center relative" title={item.name}>
        <item.icon 
          className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" 
          style={{ color: item.color }}
        />
        {/* Optional Tooltip on Hover */}
        <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
          <span className="bg-[#1a1a1a] text-white text-xs px-2 py-1 rounded border border-white/10 whitespace-nowrap">
            {item.name}
          </span>
        </div>
      </div>

      {/* Track */}
      <div ref={ref} className="relative w-full flex items-center h-4">
        {/* Background line */}
        <div className="absolute left-0 right-0 h-[2px] bg-white/5 rounded-full" />
        
        {/* Nodes */}
        <div className="absolute left-0 right-0 flex justify-between px-[2px]">
          {[0, 1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-white/10 z-0 transition-colors duration-500"
              style={{
                // Light up nodes that are behind or at the current value
                borderColor: item.value >= i ? item.color : "rgba(255,255,255,0.1)",
                backgroundColor: item.value >= i ? `${item.color}20` : "#1a1a1a",
                boxShadow: item.value >= i ? `0 0 10px ${item.color}40` : "none"
              }}
            />
          ))}
        </div>

        {/* Active Gradient Line */}
        <motion.div
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${percentage}%` } : { width: "0%" }}
          transition={{ duration: 1.2, delay: (index % 10) * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 h-[2px] rounded-full z-10"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${item.color} 100%)`
          }}
        />

        {/* Glowing Indicator Dot */}
        <motion.div
          initial={{ left: "0%", opacity: 0, scale: 0.5 }}
          animate={isInView ? { left: `${percentage}%`, opacity: 1, scale: 1 } : { left: "0%", opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.2, delay: (index % 10) * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute w-4 h-4 rounded-full z-20 -translate-x-1/2 flex items-center justify-center"
          style={{
            backgroundColor: item.color,
            boxShadow: `0 0 20px ${item.color}, 0 0 40px ${item.color}80`
          }}
        >
          {/* Inner core for extra brightness */}
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
        </motion.div>
      </div>
    </div>
  );
};

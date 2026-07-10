"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { skillsData, Skill } from "@/lib/skills-data";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const RADIUS_DESKTOP = 340;
const RADIUS_MOBILE = 180;

export const SkillOrbit = () => {
  const [selectedSkillId, setSelectedSkillId] = useState<string>(skillsData[0].id);
  const [isHovered, setIsHovered] = useState(false);
  const [radius, setRadius] = useState(RADIUS_DESKTOP);
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive radius
  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? RADIUS_MOBILE : RADIUS_DESKTOP);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Base rotation angle
  const baseAngle = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    if (!isHovered) {
      // Adjust speed of rotation here
      baseAngle.set(baseAngle.get() + delta * 0.015);
    }
  });

  // 3D Tilt Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const selectedSkill = skillsData.find(s => s.id === selectedSkillId) || skillsData[0];
  const orbitingSkills = skillsData.filter(s => s.id !== selectedSkillId);
  const totalOrbiting = orbitingSkills.length;

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[16/10] flex items-center justify-center perspective-[1000px] overflow-hidden md:overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Background Orbit Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div 
            className="rounded-full border border-white/5 opacity-50"
            style={{ width: radius * 2, height: radius * 2 }}
          />
          <div 
            className="absolute rounded-full border border-white/10 border-dashed opacity-30"
            style={{ width: radius * 2.5, height: radius * 2.5 }}
          />
        </div>

        {/* Orbiting Icons */}
        {orbitingSkills.map((skill, index) => {
          return (
            <OrbitItem 
              key={skill.id}
              skill={skill}
              index={index}
              total={totalOrbiting}
              baseAngle={baseAngle}
              radius={radius}
              onSelect={() => setSelectedSkillId(skill.id)}
            />
          );
        })}

        {/* Center Info Card */}
        <div className="absolute z-10 w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={selectedSkill.id}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)", y: -20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-full h-full p-6 md:p-8 flex flex-col items-center justify-center text-center relative"
            >
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ 
                  background: `radial-gradient(circle at center, ${selectedSkill.brandColor}, transparent 70%)` 
                }}
              />
              
              <div 
                className="w-12 h-12 md:w-14 md:h-14 rounded-2xl mb-2 flex items-center justify-center shadow-2xl relative z-10 shrink-0"
                style={{ backgroundColor: `${selectedSkill.brandColor}15`, border: `1px solid ${selectedSkill.brandColor}50` }}
              >
                <selectedSkill.icon 
                  className="w-6 h-6 md:w-7 md:h-7" 
                  style={{ color: selectedSkill.brandColor }} 
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-lg md:text-xl font-serif font-bold text-white mb-1 relative z-10">{selectedSkill.name}</h3>
              
              <div className="flex items-center justify-center gap-2 mb-2 relative z-10 w-full">
                <span 
                  className="px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider border whitespace-nowrap"
                  style={{ 
                    borderColor: `${selectedSkill.brandColor}40`,
                    color: selectedSkill.brandColor,
                    backgroundColor: `${selectedSkill.brandColor}10`
                  }}
                >
                  {selectedSkill.level}
                </span>
              </div>

              <p className="text-[11px] md:text-xs text-white/70 leading-relaxed mb-4 relative z-10 line-clamp-2 md:line-clamp-3 px-4">
                {selectedSkill.description}
              </p>

              <div className="mt-auto mb-2 relative z-10">
                <LiquidButton size="default" className="text-[10px] h-8 px-4 rounded-full">
                  View Projects
                </LiquidButton>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

// Extracted OrbitItem component
const OrbitItem = ({ 
  skill, 
  index, 
  total, 
  baseAngle, 
  radius, 
  onSelect 
}: { 
  skill: Skill; 
  index: number; 
  total: number; 
  baseAngle: import("framer-motion").MotionValue<number>; 
  radius: number; 
  onSelect: () => void;
}) => {
  const angleOffset = (index / total) * 360;
  
  // Convert angle to radians and calculate x/y positions
  const x = useTransform(baseAngle, (v) => radius * Math.cos((v + angleOffset) * (Math.PI / 180)));
  const y = useTransform(baseAngle, (v) => radius * Math.sin((v + angleOffset) * (Math.PI / 180)));

  return (
    <motion.div
      style={{ x, y }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
    >
      <motion.button
        layoutId={`orbit-icon-${skill.id}`}
        onClick={onSelect}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.9 }}
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/10 shadow-lg cursor-pointer transition-colors hover:border-white/30"
      >
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md"
          style={{ backgroundColor: skill.brandColor }}
        />
        <skill.icon 
          className="w-6 h-6 md:w-8 md:h-8 relative z-10 transition-colors group-hover:text-white"
          style={{ color: skill.brandColor }}
          strokeWidth={1.5}
        />
        
        {/* Tooltip */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-xs text-white whitespace-nowrap">
            {skill.name}
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
};

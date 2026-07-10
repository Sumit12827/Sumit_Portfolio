"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useMotionTemplate, HTMLMotionProps } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const liquidbuttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium outline-none transition-all duration-500 disabled:pointer-events-none disabled:opacity-50 overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-white/5 text-foreground border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl hover:bg-white/10 hover:border-white/20 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]",
      },
      size: {
        default: "h-10 px-5 py-2 text-sm",
        xl: "h-12 px-8 text-base",
        xxl: "h-14 px-10 text-lg rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xxl",
    },
  }
)

export function LiquidButton({
  className,
  variant,
  size,
  children,
  ...props
}: HTMLMotionProps<"button"> & VariantProps<typeof liquidbuttonVariants> & { children?: React.ReactNode }) {
  const ref = React.useRef<HTMLButtonElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  // Spotlight effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    
    // Magnetic pull calculation
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    
    x.set(distanceX * 0.2) // 20% pull towards cursor
    y.set(distanceY * 0.2)

    // Spotlight calculation
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const background = useMotionTemplate`radial-gradient(120px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.15), transparent 80%)`

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(liquidbuttonVariants({ variant, size, className }))}
      {...props}
    >
      {/* Animated Spotlight that follows cursor on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{ background }}
      />
      
      {/* Premium Glass Inner Highlights */}
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_1px_rgba(255,255,255,0.05)] pointer-events-none z-0" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-[inherit] pointer-events-none">
        {children}
      </span>
    </motion.button>
  )
}

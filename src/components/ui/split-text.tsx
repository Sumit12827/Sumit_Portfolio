'use client';

import { useAnimation, motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  by?: 'word' | 'char';
}

export const SplitText = ({ text, className = '', delay = 0, duration = 0.5, by = 'word' }: SplitTextProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const segments = by === 'word' ? text.split(' ') : text.split('');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration * 0.1, delayChildren: delay * i },
    }),
  };

  const childVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      ref={containerRef}
      style={{ display: 'inline-block', overflow: 'hidden' }}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {segments.map((segment, index) => (
        <motion.span
          variants={childVariants}
          key={index}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {segment}
          {by === 'word' && index < segments.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </motion.span>
  );
};

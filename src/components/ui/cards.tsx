"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { LiquidButton } from './liquid-glass-button';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

export interface CardItem {
  id: string | number;
  title: string;
  subtitle: string;
  imageUrl: string;
  github?: string;
  demoUrl?: string;
}

export interface HoverRevealCardsProps {
  items: CardItem[];
  className?: string;
  cardClassName?: string;
}

const HoverRevealCards: React.FC<HoverRevealCardsProps> = ({
  items,
  className,
  cardClassName,
}) => {
  return (
    <div
      role="list"
      className={cn(
        'grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4',
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.id}
          role="listitem"
          aria-label={`${item.title}, ${item.subtitle}`}
          className={cn(
            'group relative cursor-pointer overflow-hidden rounded-xl bg-cover bg-center shadow-lg transition-all duration-700 ease-out',
            'hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-2',
            cardClassName
          )}
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        >
          {/* Default Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/95 via-[#09090b]/50 to-transparent transition-all duration-500 group-hover:bg-[#09090b]/70" />

          {/* Glow effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-[80px]" />
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-[80px]" />
          </div>
          
          {/* Glass border */}
          <div className="absolute inset-0 rounded-[inherit] border border-white/5 group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />

          {/* Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="transform transition-all duration-500 group-hover:-translate-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-300/80 mb-3 drop-shadow-md">
                {item.subtitle}
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-xl">{item.title}</h3>
            </div>

            {/* Buttons reveal on hover */}
            <div className="absolute bottom-8 left-8 right-8 flex gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
              {item.github && (
                <a href={item.github} target="_blank" rel="noopener noreferrer" className="flex-1" onClick={(e) => e.stopPropagation()}>
                  <LiquidButton className="w-full text-white/90 bg-white/5 hover:bg-white/10" size="xl">
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </LiquidButton>
                </a>
              )}
              {item.demoUrl ? (
                <a href={item.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1" onClick={(e) => e.stopPropagation()}>
                  <LiquidButton className="w-full text-white/90 bg-white/5 hover:bg-white/10" size="xl">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live
                  </LiquidButton>
                </a>
              ) : (
                <a href={item.github} target="_blank" rel="noopener noreferrer" className="flex-1" onClick={(e) => e.stopPropagation()}>
                  <LiquidButton className="w-full text-white/90 bg-white/5 hover:bg-white/10" size="xl">
                    <ArrowUpRight className="w-5 h-5 mr-2" />
                    View Details
                  </LiquidButton>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverRevealCards;

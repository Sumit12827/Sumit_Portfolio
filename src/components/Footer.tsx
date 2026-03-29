'use client';

import { Github, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="border-t border-foreground/10 text-foreground mt-24 py-12 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 text-center md:text-left">

          {/* Left: Name + tagline */}
          <div>
            <p className="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity duration-200 cursor-default">
              Sumit
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Building impactful digital experiences
            </p>
          </div>

          {/* Center: Nav links */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={link === "Home" ? "#" : `#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-foreground transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right: Social icons */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <a
              href="https://github.com/Sumit12827"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-foreground/20 hover:border-foreground hover:scale-110 hover:text-foreground text-muted-foreground transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-foreground/20 hover:border-foreground hover:scale-110 hover:text-foreground text-muted-foreground transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left flex-1">
            © 2026 Sumit. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-foreground/20 hover:border-foreground hover:scale-110 text-muted-foreground hover:text-foreground transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.footer>
  );
};

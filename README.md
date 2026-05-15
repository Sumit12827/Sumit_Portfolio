Sumit | 3D Portfolio Engineering

  A high-performance, scroll-driven portfolio experience built with a focus on Deep Modules, Clean Architecture, and 120Hz-ready
  interactions. This project serves as a showcase of technical rigor in both the iOS and Web ecosystems.

  !Next.js (https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
  !TypeScript (https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  !Three.js (https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js)
  !Framer Motion (https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer-motion&logoColor=bc44ad)

  🏗 Engineering Philosophy

  This codebase is governed by the principles of Defensive Craftsmanship and Strategic Programming:
   - O(1) Clarity: Optimizing for the reader. Code is designed to be self-evident and maintainable.
   - Complexity Budgeting: Hiding significant technical density behind simple, declarative APIs.
   - The Trunk Test: Ensuring intuitive navigation and orientation through strict UX heuristics.

  🚀 Technical Highlights

  1. Scroll-Driven Canvas Architecture
  The core experience is powered by a custom ScrollyCanvas component that orchestrates a 75-frame sequence of high-fidelity
  renders.
   - Performance: Leverages requestAnimationFrame and framer-motion's useTransform for sub-pixel smooth interpolation.
   - Optimization: Strategic preloading and canvas scaling to hide watermarks while maintaining 60+ FPS on mobile.

  2. Custom GLSL Shaders
  The AnoAI component features a production-grade animated background powered by Three.js and raw GLSL.
   - Simplex Noise & FBM: Implements Fractional Brownian Motion for an organic, aurora-like aesthetic.
   - Zero Main-Thread Block: GPU-accelerated rendering ensures UI interactions remain fluid (16ms frame budget).

  3. Modern Tech Stack
   - Framework: Next.js 14 (App Router)
   - Styling: Tailwind CSS with custom Glassmorphism design tokens.
   - Components: Radix UI Primitives for accessible, headless functionality.
   - Motion: Framer Motion for parallax, physics-based springs, and view-triggered animations.

  🛠 Setup & Development

  Prerequisites
   - Node.js 18.x or higher
   - npm / yarn / pnpm

  Installation

   1 git clone https://github.com/Sumit12827/portfolio3d.git
   2 cd portfolio3d
   3 npm install

  Development
   1 npm run dev

  Build for Production
   1 npm run build

  📜 Recognition
   - Apple Swift Student Challenge Winner: Recognition for technical density and user-centric design in the Swift ecosystem.

  🤝 Connect
   - GitHub: @Sumit12827 (https://github.com/Sumit12827)
   - LinkedIn: Connect with me (https://www.linkedin.com/in/sumit-375534294/)

  ---
  Built for Quality · Designed for Impact

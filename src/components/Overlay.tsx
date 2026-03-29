'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Opacities for different sections
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);

  // Y transforms for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 flex flex-col justify-center items-center">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center p-8"
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
            Sumit
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Computer Science Student | Web & iOS Developer
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start p-8 md:p-24"
      >
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
            I build clean, user-focused <br />
            <span className="text-gray-400">digital experiences.</span>
          </h2>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end p-8 md:p-24"
      >
        <div className="max-w-xl text-right">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
            Bridging design <br />
            <span className="text-gray-400">and engineering.</span>
          </h2>
        </div>
      </motion.div>
    </div>
  );
}

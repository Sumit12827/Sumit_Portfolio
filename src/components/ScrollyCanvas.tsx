'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const FRAME_COUNT = 75;

const getImagePath = (index: number) => {
  const paddedIndex = index.toString().padStart(2, '0');
  return `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
};

export default function ScrollyCanvas({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1], {
    clamp: true,
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getImagePath(i);
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Update canvas on scroll and resize
  useEffect(() => {
    let animationFrameId: number;

    const renderCanvas = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx || images.length === 0) return;

      const currentIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.round(frameIndex.get()))
      );

      const img = images[currentIndex];
      if (!img || !img.complete) return;

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      // Scale up by 25% to completely hide the large VEO watermark
      const scale = 1.25;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width * scale;
        drawHeight = (canvas.width / imgRatio) * scale;
      } else {
        drawHeight = canvas.height * scale;
        drawWidth = (canvas.height * imgRatio) * scale;
      }

      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = (canvas.height - drawHeight) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const handleResize = () => {
      if (canvasRef.current) {
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        // Ensure logical size matches inner width so canvas isn't huge on screen
        canvasRef.current.style.width = `${window.innerWidth}px`;
        canvasRef.current.style.height = `${window.innerHeight}px`;
        renderCanvas();
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const unsubscribe = frameIndex.on('change', () => {
      animationFrameId = requestAnimationFrame(renderCanvas);
    });

    if (images.length > 0 && images[0].complete) {
      renderCanvas();
    } else if (images.length > 0) {
      images[0].addEventListener('load', renderCanvas);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      unsubscribe();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (images.length > 0) images[0].removeEventListener('load', renderCanvas);
    };
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 block"
        />
        {children}
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const FRAME_COUNT = 75;

const getImagePath = (index: number) => {
  const paddedIndex = index.toString().padStart(2, '0');
  return `/sequence-webp/frame_${paddedIndex}.webp`;
};

// Canvas resolution cap — 2560×1440 allows crisp rendering on Retina/4K displays
// (Source frames are 1280×720, so 2x DPR maps every pixel cleanly)
const MAX_CANVAS_WIDTH = 2560;
const MAX_CANVAS_HEIGHT = 1440;

export default function ScrollyCanvas({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(ImageBitmap | null)[]>(new Array(FRAME_COUNT).fill(null));
  const lastFrameRef = useRef<number>(-1);
  const rafIdRef = useRef<number>(0);

  const [loadProgress, setLoadProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1], {
    clamp: true,
  });

  // Render a specific frame to canvas
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const currentIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(index)));

    // Skip if same frame as last render
    if (currentIndex === lastFrameRef.current) return;

    const bitmap = imagesRef.current[currentIndex];
    if (!bitmap) return;

    lastFrameRef.current = currentIndex;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = bitmap.width / bitmap.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    // Scale up by 25% to hide VEO watermark
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

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bitmap, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Size the canvas with a capped resolution
  const sizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const logicalWidth = window.innerWidth;
    const logicalHeight = window.innerHeight;

    // Cap the actual pixel dimensions to prevent GPU overload
    const pixelWidth = Math.min(logicalWidth * dpr, MAX_CANVAS_WIDTH);
    const pixelHeight = Math.min(logicalHeight * dpr, MAX_CANVAS_HEIGHT);

    canvas.width = pixelWidth;
    canvas.height = pixelHeight;
    canvas.style.width = `${logicalWidth}px`;
    canvas.style.height = `${logicalHeight}px`;
  }, []);

  // Load images using createImageBitmap for GPU-accelerated decoding
  useEffect(() => {
    let cancelled = false;
    let loaded = 0;

    async function loadAllFrames() {
      // Load first frame immediately for instant visual
      try {
        const firstResponse = await fetch(getImagePath(0));
        const firstBlob = await firstResponse.blob();
        const firstBitmap = await createImageBitmap(firstBlob);
        if (!cancelled) {
          imagesRef.current[0] = firstBitmap;
          loaded = 1;
          setLoadProgress(1);

          // Render first frame immediately
          sizeCanvas();
          renderFrame(0);
        }
      } catch {
        // First frame failed, continue with batch
      }

      // Load remaining frames in parallel batches of 10
      const BATCH_SIZE = 10;
      for (let batch = 0; batch < FRAME_COUNT; batch += BATCH_SIZE) {
        if (cancelled) break;

        const promises = [];
        for (let i = batch; i < Math.min(batch + BATCH_SIZE, FRAME_COUNT); i++) {
          if (imagesRef.current[i]) {
            loaded++;
            continue; // Skip already loaded (e.g., frame 0)
          }

          promises.push(
            fetch(getImagePath(i))
              .then((res) => res.blob())
              .then((blob) => createImageBitmap(blob))
              .then((bitmap) => {
                if (!cancelled) {
                  imagesRef.current[i] = bitmap;
                  loaded++;
                  setLoadProgress(loaded);
                }
              })
              .catch(() => {
                loaded++;
                setLoadProgress(loaded);
              })
          );
        }

        await Promise.all(promises);
      }

      if (!cancelled) {
        setIsReady(true);
      }
    }

    loadAllFrames();

    return () => {
      cancelled = true;
      // Clean up ImageBitmaps
      imagesRef.current.forEach((bmp) => bmp?.close());
      imagesRef.current = new Array(FRAME_COUNT).fill(null);
    };
  }, [sizeCanvas, renderFrame]);

  // Handle scroll-driven rendering and resize
  useEffect(() => {
    sizeCanvas();

    const handleResize = () => {
      sizeCanvas();
      lastFrameRef.current = -1; // Force re-render
      renderFrame(frameIndex.get());
    };

    window.addEventListener('resize', handleResize);

    // Subscribe to scroll changes — coalesce via rAF
    const unsubscribe = frameIndex.on('change', (value) => {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => renderFrame(value));
    });

    // Initial render
    renderFrame(frameIndex.get());

    return () => {
      window.removeEventListener('resize', handleResize);
      unsubscribe();
      cancelAnimationFrame(rafIdRef.current);
    };
  }, [frameIndex, renderFrame, sizeCanvas]);

  const progressPercent = Math.round((loadProgress / FRAME_COUNT) * 100);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 block"
        />

        {/* Loading indicator — only shows until all frames are loaded */}
        {!isReady && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#121212]/80 backdrop-blur-sm transition-opacity duration-500">
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-1 w-48 overflow-hidden rounded-full bg-white/10">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-xs font-medium tracking-widest text-white/40 uppercase">
                {progressPercent}%
              </p>
            </div>
          </div>
        )}

        {children}
      </div>
    </div>
  );
}

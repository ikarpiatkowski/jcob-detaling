"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Dane produktów autodetailingu
type ImageType = string | StaticImageData;

// Domyślnie importuj webp, ale docelowo przekazuj jako props
const defaultImages: ImageType[] = [
  "/hero1.webp",
  "/w1.webp",
  "/z1.webp",
  "/hero2.webp",
  "/w2.webp",
  "/w3.webp",
  "/w5.webp",
  "/n1.webp",
  "/n2.webp",
  "/n4.webp",
  "/n5.webp",
  "/n6.webp",
  "/n7.webp",
  "/n8.webp",
  "/z2.webp",
  "/n9.webp",
];

interface ProductShowcaseProps {
  images?: ImageType[];
}

export default function ProductShowcase({
  images = defaultImages,
}: ProductShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Reset timer on manual navigation
  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPaused(false); // na wypadek kliknięcia po hoverze
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetTimer();
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    resetTimer();
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    resetTimer();
  };

  // Swipe support (mobile + desktop)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null &&
      Math.abs(touchStartX.current - touchEndX.current) > 40
    ) {
      if (touchStartX.current > touchEndX.current) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };
  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
  };
  const handleMouseUp = (e: React.MouseEvent) => {
    if (
      touchStartX.current !== null &&
      Math.abs(touchStartX.current - e.clientX) > 40
    ) {
      if (touchStartX.current > e.clientX) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  // Auto-advance carousel (pause on hover/focus, reset on manual nav)
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isPaused, images.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="relative h-[500px] md:h-[600px] w-full rounded-xl overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStartCapture={() => setIsPaused(true)}
        onTouchEndCapture={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 overflow-hidden rounded-xl flex items-center justify-center"
          >
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={
                typeof images[currentIndex] === "string"
                  ? images[currentIndex]
                  : `product ${currentIndex + 1}`
              }
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Dots Indicator + Navigation Buttons at the bottom */}
      <div className="flex items-center justify-center mt-6 gap-4">
        <Button
          variant="outline"
          size="icon"
          className="bg-white/40 hover:bg-white/60 dark:bg-neutral-800/60 dark:hover:bg-neutral-800/80 border-none rounded-full h-8 w-8 z-10"
          onClick={handlePrev}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-primary w-6"
                  : "bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-2000"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="bg-white/40 hover:bg-white/60 dark:bg-neutral-800/60 dark:hover:bg-neutral-800/80 border-none rounded-full h-8 w-8 z-10"
          onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}

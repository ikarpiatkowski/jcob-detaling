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
import z1 from "@/public/z1.webp";
import z2 from "@/public/z2.webp";
import z3 from "@/public/z3.webp";
import z4 from "@/public/z4.webp";
import z5 from "@/public/z5.webp";
import hero1 from "@/public/hero1.webp";
import hero2 from "@/public/hero2.webp";
import w1 from "@/public/w1.webp";
import w2 from "@/public/w2.webp";
import w3 from "@/public/w3.webp";
import w4 from "@/public/w4.webp";

const defaultImages: ImageType[] = [
  z1,
  z2,
  z3,
  z4,
  z5,
  hero1,
  hero2,
  w1,
  w2,
  w3,
  w4,
];

interface ProductShowcaseProps {
  images?: ImageType[];
}

export default function ProductShowcase({
  images = defaultImages,
}: ProductShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
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

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
            className="absolute inset-0"
          >
            <div className="relative h-full w-full">
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={
                  typeof images[currentIndex] === "string"
                    ? images[currentIndex]
                    : `product ${currentIndex + 1}`
                }
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white/60 dark:bg-neutral-800/60 dark:hover:bg-neutral-800/80  border-none rounded-full h-8 w-8 z-10"
        onClick={handlePrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white/60 dark:bg-neutral-800/60 dark:hover:bg-neutral-800/80 border-none rounded-full h-8 w-8 z-10"
        onClick={handleNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
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
    </div>
  );
}

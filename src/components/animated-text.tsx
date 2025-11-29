"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlightClassName?: string;
}

export default function AnimatedText({
  text,
  className,
  delay = 0.1,
  highlightClassName = "",
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Rozdziel tekst na słowa i znajdź indeksy do podświetlenia
  const words = text.split(" ");
  // Zbuduj fragmenty: [gradientowane dwa słowa, reszta]
  const highlightCount = 9;
  const highlightWords = words.slice(0, highlightCount).join(" ");
  const restWords = words.slice(highlightCount);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      variants={container}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Gradient na oba słowa naraz */}
      <motion.span
        className={cn(
          "inline-block mr-4 align-baseline leading-[1.15]",
          highlightClassName
        )}
        variants={child}
      >
        {highlightWords}
      </motion.span>
      {/* Pozostałe słowa */}
      {restWords.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-4 text-white"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

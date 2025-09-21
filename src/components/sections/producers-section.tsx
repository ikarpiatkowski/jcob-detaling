"use client";
import Image from "next/image";
import { motion } from "motion/react";

import fxprotect from "@/public/fxprotect.webp";
import kiurlab from "@/public/kiurlab.webp";
import swag from "@/public/swag.webp";
import work from "@/public/work.webp";
import adbl from "@/public/adbl.webp";
import zvizzer from "@/public/zvizzer.webp";
import soft99 from "@/public/soft99.svg";
import mrrag from "@/public/mrrag.webp";
import autoglym from "@/public/autoglym.webp";
import autograph from "@/public/autograph.svg";
import fireball from "@/public/fireball.webp";

const producerImages = [
  fxprotect,
  kiurlab,
  swag,
  work,
  adbl,
  zvizzer,
  soft99,
  mrrag,
  autoglym,
  autograph,
  fireball,
];

export default function ProducersSection() {
  // Duplikujemy tylko raz dla seamless loop
  const duplicatedImages = [...producerImages, ...producerImages];

  // Szerokość jednego zestawu logo
  const itemWidth = 128 + 48; // w-32 + gap-12
  const setWidth = producerImages.length * itemWidth;

  return (
    <section className="py-16 bg-stripes">
      <div className="container mx-auto overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{
            x: [0, -setWidth],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {duplicatedImages.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="w-32 h-32 flex items-center justify-center flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Logo producenta ${(idx % producerImages.length) + 1}`}
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

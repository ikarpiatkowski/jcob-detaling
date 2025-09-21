"use client";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/animated-text";
import AnimatedHeroImage from "@/components/animated-hero-image";
import { motion } from "motion/react";

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

const heroImages = [z1, z2, z3, z4, z5, hero1, hero2, w1, w2, w3, w4];

export default function HeroSection() {
  // Smooth scroll for chevron (jak w navbarze)
  const handleChevronClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-[90vh] pt-16 flex items-center overflow-hidden"
    >
      <AnimatedHeroImage images={heroImages} alt="Elegant lacquered front" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <AnimatedText
            text="Jacob Detailing – Auto Detailing Toruń"
            className="text-4xl md:text-6xl font-bold mb-4"
            highlightClassName="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600 underline decoration-dashed"
          />
          <p className="text-xl text-white/90 mb-8 max-w-3xl">
            Dbamy o Twoje auto z dbałością o najmniejszy detal. Lśniący lakier,
            idealnie czyste wnętrze. Stawiamy na jakość, nie na pośpiech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector("#pricetable");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Sprawdź nasze usługi <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              asChild
            >
              <a href="tel:+48515125692">Zadzwoń</a>
            </Button>
          </div>
        </div>
      </div>
      <motion.a
        href="#features"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group focus:outline-none"
        onClick={handleChevronClick}
        initial={{ y: 0 }}
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <ChevronRight className="h-8 w-8 text-white rotate-90 transition-transform group-hover:scale-110" />
        <span className="sr-only">Przewiń do cennika</span>
      </motion.a>
    </section>
  );
}

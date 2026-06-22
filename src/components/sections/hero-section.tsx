"use client";
import { ChevronRight } from "lucide-react";
import AnimatedText from "@/components/animated-text";
import AnimatedHeroImage from "@/components/animated-hero-image";
import { motion } from "motion/react";

const heroImages = [
  "/w2.webp",
  "/w1.webp",
  "/hero1.webp",
  "/n5.webp",
  "/hero2.webp",
  "/w3.webp",
  "/w5.webp",
];

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
      className="relative h-[100vh] pt-16 flex items-center overflow-hidden"
    >
      <AnimatedHeroImage images={heroImages} alt="Elegant lacquered front" />
      <div className="container relative z-10 mx-auto">
        <AnimatedText
          text={"Auto Detailing Toruń\n Jacob Detailing"}
          className="text-4xl md:text-8xl font-bold mb-4 whitespace-pre-line text-white"
          highlightClassName=""
        />
        <p className="text-xl text-white/90 mb-8 max-w-4xl">
          Jesteśmy akredytowanym studiem autodetailingu w Toruniu firmy <strong>Titan Coatings</strong>.
        </p>
        {/* <div className="flex flex-col gap-2 mx-auto w-fit">
          <Button
            size="lg"
            onClick={(e) => {
              e.preventDefault();
              const section = document.querySelector("#pricetable");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Sprawdź nasze usługi <ArrowDown />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            asChild
          >
            <a href="tel:+48515125692">Zadzwoń <Phone /></a>
          </Button>
        </div> */}
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

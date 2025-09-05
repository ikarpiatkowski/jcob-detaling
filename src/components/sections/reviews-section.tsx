"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Arek Wiśniewski",
    stars: 5,
    text: "Polecam tę firmę! Zostawiłem dwa samochody do przygotowania lakieru, kół i opon, aby jak najlepiej wyglądały do reklamy wideo. Oba samochody utrzymywały czystość przez długi czas, co świadczy o dobrej chemii i technice detailingu. Ogromny plus za przyjęcie nas w weekend i szybką realizację.",
  },
  {
    name: "Sebastian Chrzanowski",
    stars: 5,
    text: "Dzisiaj oddałem auto I jestem bardzo zadowolony z usługi. Auto wyglądało jak nowe! Polecam!!",
  },
  {
    name: "Piotr Mikuszewski",
    stars: 5,
    text: "Korzystałem z usług tej firmy po raz pierwszy i jestem bardzo pozytywnie zaskoczony. Samochód został nie tylko dokładnie wysprzątany, ale też świetnie zakonserwowany – lakier odzyskał blask, a wnętrze wygląda jak nowe. Profesjonalne podejście, terminowość i dbałość o detale zasługują na najwyższą ocenę. Zdecydowanie polecam!",
  },
  {
    name: "Dawid Wodzyński",
    stars: 5,
    text: "Z całego serca polecam tę firmę! Skorzystałem z usługi detailingu i efekt przeszedł moje oczekiwania – samochód wygląda jak prosto z salonu. Lakier nabrał głębi, wnętrze zostało dokładnie wyczyszczone, a każdy detal dopieszczony. Profesjonalne podejście, świetny kontakt i terminowość. Widać, że robią to z pasją i znają się na rzeczy. Na pewno wrócę!",
  },
  {
    name: "Tomasz Niezgoda",
    stars: 5,
    text: "Jestem bardzo zadowolony z usługi i umowie się na dodatkowe pranie wnętrza. Obsługa kontaktowa, miła i elastyczna względem terminów. Aż przyjemnie być klientem 😀",
  },
];

const AUTOPLAY_INTERVAL = 5000;

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  // Efektywne i czyste zarządzanie timerem do automatycznego przewijania
  useEffect(() => {
    const timer = setInterval(() => {
      // Użycie funkcji w setSate, aby mieć dostęp do najnowszej wartości state
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, AUTOPLAY_INTERVAL);

    // Zwrócenie funkcji czyszczącej, która zatrzymuje timer.
    // Działa to przy każdym re-renderze (zmianie currentIndex) i przy odmontowaniu komponentu.
    return () => clearInterval(timer);
  }, [currentIndex]); // Zależność od currentIndex, aby resetować timer przy każdej zmianie opinii

  return (
    <section
      id="reviews"
      className="py-20 bg-stripes-light relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Opinie klientów ✨
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Sprawdź, co mówią o nas nasi klienci!
          </p>
        </div>
        <div className="relative flex items-center justify-center h-[320px]">
          <AnimatePresence initial={false}>
            {reviews.map((review, index) => {
              const isPrev =
                index === (currentIndex - 1 + reviews.length) % reviews.length;
              const isNext = index === (currentIndex + 1) % reviews.length;
              const isCurrent = index === currentIndex;

              if (isPrev || isNext || isCurrent) {
                return (
                  <motion.div
                    key={index}
                    className="absolute w-full max-w-md"
                    initial={{
                      x: isPrev ? "-100%" : isNext ? "100%" : "0%",
                      opacity: isCurrent ? 1 : 0.4,
                      scale: isCurrent ? 1 : 0.85,
                    }}
                    animate={{
                      x: isPrev ? "-100%" : isNext ? "100%" : "0%",
                      opacity: isCurrent ? 1 : 0.4,
                      scale: isCurrent ? 1 : 0.85,
                      zIndex: isCurrent ? 10 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <ReviewCard {...review} />
                  </motion.div>
                );
              }
              return null;
            })}
          </AnimatePresence>
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200 z-20 group"
            aria-label="Poprzednia opinia"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200 z-20 group"
            aria-label="Następna opinia"
          >
            <ChevronRight className="w-5 h-5 text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  name,
  stars,
  text,
}: {
  name: string;
  stars: number;
  text: string;
}) {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-xl ${
              i < stars
                ? "text-yellow-400"
                : "text-neutral-300 dark:text-neutral-700"
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-base leading-relaxed mb-6 italic text-neutral-700 dark:text-neutral-200 flex-grow">
        &quot;{text}&quot;
      </p>
      <div className="text-sm text-neutral-500 dark:text-neutral-400 font-semibold border-t border-neutral-200 dark:border-neutral-700 pt-4 w-full">
        {name}
      </div>
    </div>
  );
}

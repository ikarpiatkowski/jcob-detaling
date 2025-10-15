"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Arek W.",
    stars: 5,
    text: "Polecam tę firmę! Zostawiłem dwa samochody do przygotowania lakieru, kół i opon, aby jak najlepiej wyglądały do reklamy wideo. Oba samochody utrzymywały czystość przez długi czas, co świadczy o dobrej chemii i technice detailingu. Ogromny plus za przyjęcie nas w weekend i szybką realizację.",
  },
  {
    name: "Sebastian Ch.",
    stars: 5,
    text: "Dzisiaj oddałem auto I jestem bardzo zadowolony z usługi. Auto wyglądało jak nowe! Polecam!!",
  },
  {
    name: "Piotr M.",
    stars: 5,
    text: "Korzystałem z usług tej firmy po raz pierwszy i jestem bardzo pozytywnie zaskoczony. Samochód został nie tylko dokładnie wysprzątany, ale też świetnie zakonserwowany – lakier odzyskał blask, a wnętrze wygląda jak nowe. Profesjonalne podejście, terminowość i dbałość o detale zasługują na najwyższą ocenę. Zdecydowanie polecam!",
  },
  {
    name: "Dawid Wodzyński",
    stars: 5,
    text: "Z całego serca polecam tę firmę! Skorzystałem z usługi detailingu i efekt przeszedł moje oczekiwania – samochód wygląda jak prosto z salonu. Lakier nabrał głębi, wnętrze zostało dokładnie wyczyszczone, a każdy detal dopieszczony. Profesjonalne podejście, świetny kontakt i terminowość. Widać, że robią to z pasją i znają się na rzeczy. Na pewno wrócę!",
  },
  {
    name: "Tomasz N.",
    stars: 5,
    text: "Jestem bardzo zadowolony z usługi i umowie się na dodatkowe pranie wnętrza. Obsługa kontaktowa, miła i elastyczna względem terminów. Aż przyjemnie być klientem 😀",
  },
  {
    name: "Anka M.",
    stars: 5,
    text: "Bardzo profesjonalnie wykonana usługa i bardzo miły Pan. Polecam! Warto dodać, ze lifting i czyszczenie w przyzwoitej i niewygórowanej cenie!",
  },
  {
    name: "Dawid W.",
    stars: 5,
    text: "Z całego serca polecam tę firmę! Skorzystałem z usługi detailingu i efekt przeszedł moje oczekiwania – samochód wygląda jak prosto z salonu. Lakier nabrał głębi, wnętrze zostało dokładnie wyczyszczone, a każdy detal dopieszczony. Profesjonalne podejście, świetny kontakt i terminowość. Widać, że robią to z pasją i znają się na rzeczy. Na pewno wrócę!",
  },
  {
    name: "Ziomo Ziomal",
    stars: 5,
    text: "Świetnie wykonana praca! Serdecznie dziękuję za perfekcyjne czyszczenie auta na długi słoneczny weekend! Polecam z całego serca!",
  },
  {
    name: "Unknown command:",
    stars: 5,
    text: "Miałem przyjemność zostawić auto u tego młodego chłopaka. Autko było zajechane, plamy na siedzeniach itp a naprawdę gdy je odebrałem to byłem miło zaskoczony. Cena tez jak najbardziej zadowala. Polecam",
  },
  {
    name: "k k",
    stars: 5,
    text: "Bardzo dokładna i perfekcyjna robota. Auto po odebraniu wyglądało jak by wyjechało prosto z salonu. Bardzo polecam!!!",
  },
  {
    name: "Wioletta W.",
    stars: 5,
    text: "Pan Bardzo profesjonalnie podchodzi do powierzonego mu zadania , jestem bardzo zadowolona z czystym sumieniem polecam jego usługi",
  },
  {
    name: "Marcin W.",
    stars: 5,
    text: "Bardzo polecam . Samochód zajechany użytkowaniem. Efekt końcowy bardzo mie zachwicił dziękuję .polecam",
  },
  {
    name: "No Hejka Skąd To Zwątpienie ?",
    stars: 5,
    text: "Usługa wykonana rewelacyjnie, napewno wrócę nie raz! Polecam gorąco👌🏼",
  },
  {
    name: "Maggie P-wska",
    stars: 5,
    text: "Fachowa obsługa, wszystko dopięte na ostatni guzik 👌🏼 gorąco polecam! 🔥",
  },
  {
    name: "Michał L.",
    stars: 5,
    text: "Zdecydowanie polecam z całego serca, usługi na najwyższym poziomie!",
  },
  {
    name: "Kacper G.",
    stars: 5,
    text: "Wszystko elegancko i na bardzo dobrym poziomie. Polecam",
  },
  {
    name: "Sebastian K.",
    stars: 5,
    text: "Profesjonalnie wykonane mycie i sprzątanie. Polecam",
  },
  {
    name: "Czerni",
    stars: 5,
    text: "Profesjonalna obsługa. Polecam serdecznie",
  },
];

const AUTOPLAY_INTERVAL = 5000;

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Reset timer (for hover/touch on current review)
  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    // Do NOT set isPaused here, just clear timer so it restarts after hover ends
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    resetTimer();
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    resetTimer();
  };

  // Auto-advance with pause on hover/touch
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, AUTOPLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  // Swipe support (desktop + mobile)
  // Touch/mouse swipe support (desktop + mobile)
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
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
        nextReview();
      } else {
        prevReview();
      }
    }
    touchStartX.current = null;
  };

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
        <div
          className="relative flex items-center justify-center h-[320px] select-none"
          onTouchMove={handleTouchMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <AnimatePresence initial={false}>
            {reviews.map((review, index) => {
              const isPrev =
                index === (currentIndex - 1 + reviews.length) % reviews.length;
              const isNext = index === (currentIndex + 1) % reviews.length;
              const isCurrent = index === currentIndex;

              if (isPrev || isNext || isCurrent) {
                // Add timer reset on hover/touch for current review
                const reviewCardProps = isCurrent
                  ? {
                      onMouseEnter: () => {
                        setIsPaused(true);
                        resetTimer();
                      },
                      onMouseLeave: () => setIsPaused(false),
                      onTouchStart: () => {
                        setIsPaused(true);
                        resetTimer();
                      },
                      onTouchEnd: () => setIsPaused(false),
                    }
                  : {};
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
                    <div {...reviewCardProps}>
                      <ReviewCard {...review} />
                    </div>
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

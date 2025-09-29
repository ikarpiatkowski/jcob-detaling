import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "1. Co to jest powłoka ochronna i kiedy warto ją zastosować?",
    answer: [
      "Powłoka ochronna (np. ceramiczna, kwarcowa lub grafenowa) to specjalna warstwa nakładana na lakier, która zabezpiecza go przed zarysowaniami, promieniowaniem UV, chemią drogową czy osadzaniem się brudu. Dzięki niej auto dłużej zachowuje połysk, łatwiej się myje i jest lepiej chronione przed czynnikami zewnętrznymi. Warto ją stosować szczególnie w nowych autach lub po korekcie lakieru, aby utrwalić efekt.",
    ],
  },
  {
    question: "2. Ile trwa aplikacja powłoki ochronnej?",
    answer: [
      "Proces aplikacji trwa zazwyczaj od 2 do 3 dni. W tym czasie dokładnie przygotowujemy samochód, wykonujemy oczyszczenie i odtłuszczenie lakieru, a następnie aplikujemy powłokę i dajemy jej czas na pełne związanie z powierzchnią.",
    ],
  },
  {
    question:
      "3. Na czym polega korekta lakieru i czym różni się od zwykłej polerki?",
    answer: [
      "Polerka to szybkie odświeżenie lakieru, które maskuje część zarysowań. Korekta lakieru to proces wieloetapowy, w którym przy pomocy specjalistycznych past i maszyn usuwa się mikrorysy, hologramy i oksydację. Efekt jest znacznie trwalszy – lakier odzyskuje głębię koloru i fabryczny wygląd.",
    ],
  },
  {
    question:
      "4. Czy detailing wnętrza obejmuje również czyszczenie podsufitki?",
    answer: [
      "Tak – podczas detailingu wnętrza czyścimy wszystkie elementy kabiny, w tym także podsufitkę. Wykorzystujemy do tego bezpieczne środki i techniki, które pozwalają usunąć zabrudzenia, a jednocześnie nie uszkadzają materiału.",
    ],
  },
  {
    question: "5. Jakie rodzaje powłok ochronnych oferujecie?",
    answer: [
      "Oferujemy m.in. powłoki ceramiczne, kwarcowe, hydrofobowe oraz grafenowe. ceramiczne – długotrwała ochrona i wysoki połysk,kwarcowe – twarde, chronią przed zarysowaniami i czynnikami atmosferycznymi,hydrofobowe – odpychają wodę, ułatwiają mycie auta,grafenowe – najnowsza technologia, łączą trwałość ceramiki z wyjątkową głębią koloru, odpornością na zarysowania i jeszcze lepszym efektem hydrofobowym.",
    ],
  },
  {
    question: "6. Ile wytrzymują powłoki ochronne?",
    answer: [
      "Trwałość powłoki zależy od jej rodzaju i sposobu pielęgnacji auta. Zwykle: powłoki hydrofobowe działają od kilku miesięcy do roku, powłoki ceramiczne i kwarcowe – od 2 do 5 lat, powłoki grafenowe – nawet do 5 lat przy odpowiedniej pielęgnacji.",
    ],
  },
  {
    question: "7. Dlaczego warto skorzystać z profesjonalnego autodetailingu?",
    answer: [
      "detailing to coś więcej niż zwykłe mycie. To proces, który odnawia, zabezpiecza i pielęgnuje każdy element auta – zarówno lakier, jak i wnętrze. Dzięki detailingowi samochód wygląda jak nowy, jest lepiej chroniony przed czynnikami zewnętrznymi, łatwiej utrzymać go w czystości, a przy odsprzedaży zyskuje na wartości.",
    ],
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-stripes-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Najczęściej zadawane pytania
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mx-auto">
            Masz pytania? Sprawdź odpowiedzi na najczęściej zadawane przez
            klientów!
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-0"
          >
            {faqData.map((item, idx) => (
              <AccordionItem
                key={item.question}
                value={`item-${idx}`}
                className="rounded-lg mb-4 bg-white/80 dark:bg-neutral-900/80 shadow-sm overflow-hidden "
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-left text-neutral-800 dark:text-neutral-100">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300 text-base">
                  {item.answer.map((ans, i) => (
                    <p key={i} className="mb-2 last:mb-0">
                      {ans}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

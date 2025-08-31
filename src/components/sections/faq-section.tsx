import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Jak długo trwa usługa detailingu?",
    answer: [
      "Czas realizacji zależy od zakresu usługi. Pełny detailing to zazwyczaj 1-2 dni, szybkie pakiety nawet kilka godzin.",
    ],
  },
  {
    question: "Czy detailing jest bezpieczny dla lakieru?",
    answer: [
      "Tak! Używamy wyłącznie sprawdzonych, bezpiecznych kosmetyków i technik, które nie uszkadzają lakieru.",
    ],
  },
  {
    question: "Jak przygotować auto do usługi?",
    answer: [
      "Wystarczy opróżnić wnętrze z rzeczy osobistych. My zajmiemy się resztą!",
    ],
  },
  {
    question: "Czy można umówić się na konkretną godzinę?",
    answer: [
      "Tak, zachęcamy do wcześniejszego kontaktu telefonicznego lub przez formularz.",
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
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Masz pytania? Sprawdź odpowiedzi na najczęściej zadawane przez
            klientów!
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
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
                className="border border-neutral-200 dark:border-neutral-700 rounded-lg mb-4 bg-white/80 dark:bg-neutral-900/80 shadow-sm overflow-hidden"
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

import { cn } from "@/lib/utils";

const priceSections = [
  {
    icon: "🪑",
    title: "Detailing wnętrza",
    headers: ["Usługa", "Małe auto", "Średnie auto", "Duże auto"],
    rows: [
      ["Kompletne czyszczenie wnętrza", "od 120 zł", "od 140 zł", "od 160 zł"],
      [
        "Pranie tapicerki materiałowej (za fotel)",
        "od 70 zł",
        "od 80 zł",
        "od 100 zł",
      ],
      [
        "Czyszczenie i impregnacja skóry (za fotel)",
        "od 60 zł",
        "od 80 zł",
        "od 100 zł",
      ],
    ],
  },
  {
    icon: "🚗",
    title: "Detailing zewnętrzny",
    headers: ["Usługa", "Małe auto", "Średnie auto", "Duże auto"],
    rows: [
      ["Kompletne mycie zewnętrzne", "od 120 zł", "od 140 zł", "od 160 zł"],
      ["Woskowanie twardym woskiem", "od 250 zł", "od 300 zł", "od 400 zł"],
      [
        "Konserwacja powłoki ceramicznej (raz w roku)",
        "300 zł",
        "300 zł",
        "300 zł",
      ],
    ],
  },
  {
    icon: "🎯",
    title: "Pakiety kompleksowe",
    headers: ["Usługa", "Małe auto", "Średnie auto", "Duże auto"],
    rows: [
      [
        "Kompletny pakiet wnętrze + zewnątrz + płynny wosk (4–6 tygodni)",
        "od 220 zł",
        "od 250 zł",
        "od 300 zł",
      ],
      [
        "Jednoetapowa korekta lakieru + twardy wosk (12-miesięczny)",
        "od 950 zł",
        "od 1050 zł",
        "od 1200 zł",
      ],
    ],
  },
  {
    icon: "✨",
    title: "Powłoki ceramiczne",
    headers: ["Usługa", "Małe auto", "Średnie auto", "Duże auto"],
    rows: [
      [
        "Jednoetapowa korekta lakieru + powłoka ceramiczna (1 rok)",
        "1000 zł",
        "1110 zł",
        "1200 zł",
      ],
      [
        "Jednoetapowa korekta lakieru + powłoka ceramiczna (2 lata)",
        "1400 zł",
        "1500 zł",
        "1600 zł",
      ],
      [
        "Korekta lakieru + powłoka ceramiczna (4 lata) + detailing wnętrza",
        "1900 zł",
        "2100 zł",
        "2300 zł",
      ],
      [
        "Korekta lakieru + powłoka ceramiczna + detailing wnętrza (5 lat)",
        "2500 zł",
        "2700 zł",
        "3000 zł",
      ],
    ],
  },
  {
    icon: "🔧",
    title: "Korekty lakieru",
    headers: ["Usługa", "Małe auto", "Średnie auto", "Duże auto"],
    rows: [
      ["1-etapowa korekta lakieru", "650 zł", "750 zł", "850 zł"],
      ["2-etapowa korekta lakieru", "1000 zł", "1110 zł", "1200 zł"],
      ["3-etapowa korekta lakieru", "1400 zł", "1500 zł", "1700 zł"],
    ],
  },
];

const extraServices = [
  ["Niewidzialna wycieraczka (przednia szyba, trwałość 6 mies.)", "od 150 zł"],
];

export default function PriceSection() {
  return (
    <section
      id="cennik"
      className="py-20 bg-stripes border-y border-neutral-100 dark:border-neutral-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center gap-2">
            <span role="img" aria-label="cennik">
              📋
            </span>{" "}
            Cennik – Studio Auto Detailingu
          </h2>
        </div>
        <div className="space-y-12">
          {priceSections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl shadow-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 overflow-hidden"
            >
              <div className="px-6 py-4 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center gap-2 text-lg font-semibold">
                <span className="text-2xl">{section.icon}</span>
                {section.title}
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700 text-sm md:text-base">
                  <thead>
                    <tr>
                      {section.headers.map((header) => (
                        <th
                          key={header}
                          className="px-4 py-3 font-bold text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900/60 text-left"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, i) => (
                      <tr
                        key={i}
                        className={
                          cn(
                            i % 2 === 0
                              ? "bg-white dark:bg-neutral-900/40"
                              : "bg-neutral-50 dark:bg-neutral-800/40"
                          ) +
                          " transition-colors hover:bg-primary/10 dark:hover:bg-primary/20"
                        }
                      >
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className="px-4 py-3 whitespace-nowrap text-neutral-700 dark:text-neutral-200"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          <div className="rounded-2xl shadow-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center gap-2 text-lg font-semibold">
              <span className="text-2xl">🛠️</span> Usługi dodatkowe
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700 text-sm md:text-base">
                <thead>
                  <tr>
                    <th className="px-4 py-3 font-bold text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900/60 text-left">
                      Usługa
                    </th>
                    <th className="px-4 py-3 font-bold text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900/60 text-left">
                      Cena
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {extraServices.map((row, i) => (
                    <tr
                      key={i}
                      className={
                        cn(
                          i % 2 === 0
                            ? "bg-white dark:bg-neutral-900/40"
                            : "bg-neutral-50 dark:bg-neutral-800/40"
                        ) +
                        " transition-colors hover:bg-primary/10 dark:hover:bg-primary/20"
                      }
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className="px-4 py-3 whitespace-nowrap text-neutral-700 dark:text-neutral-200"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

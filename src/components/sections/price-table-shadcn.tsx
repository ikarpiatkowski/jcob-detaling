import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Bubbles,
  Car,
  Target,
  Sparkles,
  Wrench,
  BrushCleaning,
} from "lucide-react";

const sections = [
  {
    id: "detailing-wnetrza",
    icon: <Bubbles />,
    colorClass: "text-cyan-500",
    title: "Detailing wnętrza",
    titleGradient: "from-cyan-600 to-cyan-400",
    headers: ["Usługa", "Małe auto", "Średnie auto", "Duże auto"],
    rows: [
      ["Kompletne czyszczenie wnętrza", "120 zł", "140 zł", "160 zł"],
      ["Pranie tapicerki materiałowej (za fotel)", "70 zł", "80 zł", "100 zł"],
      [
        "Czyszczenie i impregnacja skóry (za fotel)",
        "60 zł",
        "80 zł",
        "100 zł",
      ],
    ],
  },
  {
    id: "detailing-zewnetrzny",
    icon: <Car />,
    colorClass: "text-blue-500",
    title: "Detailing zewnętrzny",
    titleGradient: "from-blue-600 to-blue-400",
    headers: ["Usługa", "Małe auto", "Średnie auto", "Duże auto"],
    rows: [
      ["Kompletne mycie zewnętrzne", "120 zł", "140 zł", "160 zł"],
      ["Woskowanie twardym woskiem", "250 zł", "300 zł", "400 zł"],
      [
        "Konserwacja powłoki ceramicznej (raz w roku)",
        "300 zł",
        "300 zł",
        "300 zł",
      ],
    ],
  },
  {
    id: "pakiety-kompleksowe",
    icon: <Target />,
    colorClass: "text-amber-500",
    title: "Pakiety kompleksowe",
    titleGradient: "from-amber-600 to-orange-400",
    headers: ["Usługa", "Małe auto", "Średnie auto", "Duże auto"],
    rows: [
      [
        "Kompletny pakiet wnętrze + zewnątrz + płynny wosk (4–6 tygodni)",
        "220 zł",
        "250 zł",
        "300 zł",
      ],
      [
        "Jednoetapowa korekta lakieru + twardy wosk (12-miesięczny)",
        "950 zł",
        "1050 zł",
        "1200 zł",
      ],
    ],
  },
  {
    id: "powloki-ceramiczne",
    icon: <Sparkles />,
    colorClass: "text-green-500",
    title: "Powłoki ceramiczne",
    titleGradient: "from-teal-600 to-teal-400",
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
      ["Powłoka ceramiczna na szyby (3 lata)", "250 zł", "300 zł", "350 zł"],
    ],
  },
  {
    id: "korekta-lakieru",
    icon: <BrushCleaning />,
    colorClass: "text-fuchsia-500",
    title: "Korekty lakieru",
    titleGradient: "from-fuchsia-600 to-pink-400",
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
  ["Renowacja reflektorów (2 sztuki)", "200 zł"],
];

export default function PriceTableShadcn() {
  return (
    <section id="pricetable" className="mx-auto py-16 px-2">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Cennik usług
      </h1>
      <div className="space-y-12 max-w-3xl mx-auto">
        {sections.map((section) => (
          <div key={section.title} id={section.id} className="overflow-x-auto">
            <div className="min-w-[700px] md:min-w-0">
              <Table className="rounded-lg overflow-hidden w-full table-fixed">
                <TableHeader>
                  <TableRow>
                    {section.headers.map((header, j) => (
                      <TableHead
                        key={header}
                        className={
                          j === 0
                            ? `border-b border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 ${section.colorClass} font-semibold w-3/4`
                            : "border-b border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 w-1/6"
                        }
                      >
                        {j === 0 ? (
                          <div className="flex items-center gap-2">
                            {React.cloneElement(section.icon, {
                              className: `text-xl ${section.colorClass}`,
                            })}
                            <span
                              className={`bg-gradient-to-r bg-clip-text text-transparent ${section.titleGradient}`}
                            >
                              {section.title}
                            </span>
                          </div>
                        ) : (
                          header
                        )}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {section.rows.map((row, i) => (
                    <TableRow
                      key={i}
                      className="hover:bg-primary/10 dark:hover:bg-primary/20 border-b bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700"
                    >
                      {row.map((cell, j) => (
                        <TableCell
                          key={j}
                          className="border-r border-neutral-200 dark:border-neutral-700 last:border-r-0 bg-neutral-50 dark:bg-neutral-900"
                        >
                          {cell}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        ))}
        <div className="overflow-x-auto" id="uslugi-dodatkowe">
          <div className="min-w-[700px] md:min-w-0">
            <Table className="rounded-lg overflow-hidden w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="border-b border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800">
                    <div className="flex items-center gap-2 font-semibold">
                      <Wrench className="text-rose-500" />
                      <span className="bg-gradient-to-r bg-clip-text text-transparent from-rose-600 to-red-400">
                        Usługi dodatkowe
                      </span>
                    </div>
                  </TableHead>
                  <TableHead className="border-b border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 text-right">
                    Cena
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {extraServices.map((row, i) => (
                  <TableRow
                    key={i}
                    className="hover:bg-primary/10 dark:hover:bg-primary/20 border-b bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700"
                  >
                    <TableCell className="border-r border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
                      {row[0]}
                    </TableCell>
                    <TableCell className="border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-right">
                      {row[1]}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}

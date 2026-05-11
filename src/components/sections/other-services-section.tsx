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
  Target,
  Sparkles,
  Wrench,
  Bubbles,
  Car,
  BrushCleaning,
} from "lucide-react";

const tableSections = [
  {
    id: "pakiety-kompleksowe",
    icon: <Target />,
    colorClass: "text-amber-500",
    title: "Pakiety kompleksowe",
    titleGradient: "from-amber-600 to-orange-400",
    headers: ["Usługa", "Małe / Średnie", "Duże"],
    rows: [
      [
        "Full detailing (detailing wnętrza + zewnątrz + płynny wosk + zabezpieczenie opon żelem grafenowym)",
        "300 zł",
        "400 zł",
      ],
    ],
  },
  {
    id: "detailing-wnetrza",
    icon: <Bubbles />,
    colorClass: "text-cyan-500",
    title: "Detailing wnętrza",
    titleGradient: "from-cyan-600 to-cyan-400",
    headers: ["Usługa", "Małe / Średnie", "Duże"],
    rows: [
      ["Kompletne czyszczenie wnętrza", "150 zł", "200 zł"],
      ["Pranie tapicerki materiałowej (za fotel)", "80 zł", "100 zł"],
      ["Czyszczenie i impregnacja skóry (za fotel)", "80 zł", "100 zł"],
    ],
  },
  {
    id: "detailing-zewnetrzny",
    icon: <Car />,
    colorClass: "text-blue-500",
    title: "Detailing zewnętrzny",
    titleGradient: "from-blue-600 to-blue-400",
    headers: ["Usługa", "Małe / Średnie", "Duże"],
    rows: [
      ["Kompletne mycie zewnętrzne", "125 zł", "175 zł"],
      ["Woskowanie twardym woskiem", "250 zł", "400 zł"],
      ["Konserwacja powłoki ceramicznej (raz w roku)", "300 zł", "400 zł"],
    ],
  },
  {
    id: "powloki-ceramiczne",
    icon: <Sparkles />,
    colorClass: "text-green-500",
    title: "Powłoki ceramiczne",
    titleGradient: "from-teal-600 to-teal-400",
    headers: ["Usługa", "Małe / Średnie", "Duże"],
    rows: [
      ["Powłoka ceramiczna (1 rok)", "500 zł", "600 zł"],
      ["Powłoka ceramiczna (2 letnia)", "900 zł", "1200 zł"],
      ["Powłoka ceramiczna (3 letnia)", "1200 zł", "1400 zł"],
      ["Powłoka ceramiczna (4 letnia)", "1600 zł", "1900 zł"],
      ["Powłoka ceramiczna (5 letnia)", "2100 zł", "2400 zł"],
      ["Powłoka ceramiczna na szyby (2 letnia)", "250 zł", "350 zł"],
      ["Powłoka ceramiczna na szyby (3 letnia)", "300 zł", "400 zł"],
    ],
  },
  {
    id: "korekta-lakieru",
    icon: <BrushCleaning />,
    colorClass: "text-fuchsia-500",
    title: "Korekty lakieru",
    titleGradient: "from-fuchsia-600 to-pink-400",
    headers: ["Usługa", "Małe / Średnie", "Duże"],
    rows: [
      ["Jednoetapowa korekta lakieru", "650 zł", "850 zł"],
      ["Dwuetapowa korekta lakieru", "1000 zł", "1200 zł"],
      ["Trójetapowa korekta lakieru", "1400 zł", "1700 zł"],
    ],
  },
];

const extraServices = [
  ["Niewidzialna wycieraczka", "70 zł"],
  ["Renowacja reflektorów (2 sztuki)", "250 zł"],
];
const PRICE_COL_WIDTH = "w-24 md:w-[120px]";

export default function OtherServicesSection() {
  return (
    <section className="mx-auto py-10">
      <div className="space-y-8 container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8 pb-4">
          Cennik
        </h2>

        {tableSections.map((section) => (
          <div key={section.title} id={section.id} className="overflow-x-auto">
            <Table className="rounded-lg overflow-hidden w-full table-fixed text-lg">
              <TableHeader>
                <TableRow>
                  {section.headers.map((header, j) => (
                    <TableHead
                      key={header}
                      className={`
                          border-b border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800
                          ${j === 0
                          ? `${section.colorClass} font-semibold text-left align-top`
                          : `text-center ${PRICE_COL_WIDTH}`
                        }
                        `}
                    >
                      {j === 0 ? (
                        <div className="flex items-center gap-2 whitespace-normal min-h-[2.5rem]">
                          <span className="block md:hidden">
                            {React.cloneElement(section.icon, {
                              className: `text-xl ${section.colorClass}`,
                            })}
                          </span>
                          <span className="hidden md:block">
                            {React.cloneElement(section.icon, {
                              className: `text-xl ${section.colorClass}`,
                            })}
                          </span>
                          <span
                            className={`bg-gradient-to-r bg-clip-text text-transparent ${section.titleGradient}`}
                          >
                            {section.title}
                          </span>
                        </div>
                      ) : (
                        <div className="text-center font-bold">{header}</div>
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
                        className={`
                            border-r border-neutral-200 dark:border-neutral-700 last:border-r-0
                            bg-neutral-50 dark:bg-neutral-900
                            ${j === 0
                            ? "whitespace-normal text-left"
                            : `whitespace-nowrap text-center ${PRICE_COL_WIDTH}`
                          }
                          `}
                      >
                        {cell}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}

        {/* Usługi dodatkowe */}
        <div className="overflow-x-auto" id="uslugi-dodatkowe">
          <div>
            <Table className="rounded-lg overflow-hidden w-full text-lg">
              <TableHeader>
                <TableRow>
                  <TableHead className="border-b border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800">
                    <div className="flex items-center gap-2 font-semibold whitespace-normal">
                      <Wrench className="text-rose-500" />
                      <span className="bg-gradient-to-r bg-clip-text text-transparent from-rose-600 to-red-400">
                        Usługi dodatkowe
                      </span>
                    </div>
                  </TableHead>
                  <TableHead className="border-b border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 text-center whitespace-nowrap">
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
                    <TableCell className="border-r border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 whitespace-normal">
                      {row[0]}
                    </TableCell>
                    <TableCell className="border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-center whitespace-nowrap w-24 md:w-[120px]">
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

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
  Check,
  Medal,
  Gem,
  Bubbles,
  Car,
  BrushCleaning,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- DANE ---
const sections = [
  {
    id: "detailing-wnetrza",
    icon: <Sparkles />,
    colorClass: "text-gray-400", // Silver styling
    borderColor: "border-gray-200 dark:border-gray-700",
    bgGradient: "from-gray-100 to-gray-100 dark:from-gray-800 dark:to-gray-900",
    title: "Pakiet Silver",
    price: "1200 zł",
    priceOld: "1500 zł",
    description:
      "Jednoetapowa korekta lakieru, Zabezpieczenie całego lakieru twardym woskiem (12 miesięcy), Niewidzialna wycieraczka (6-miesięczna), Detailing wnętrza, Zabezpieczenie plastików dressingiem",
  },
  {
    id: "detailing-zewnetrzny",
    icon: <Medal />,
    colorClass: "text-yellow-500", // Gold styling
    borderColor: "border-yellow-400 dark:border-yellow-600",
    bgGradient:
      "from-yellow-100 to-amber-100 dark:from-yellow-800 dark:to-amber-800",
    title: "Pakiet Gold",
    price: "1600 zł",
    priceOld: "2000 zł",
    isPopular: true, // Opcja wyróżnienia
    description:
      "Jednoetapowa korekta lakieru, Zabezpieczenie lakieru powłoką ceramiczno-grafenową (3 letnią), Niewidzialna wycieraczka (6 miesięczna), Detailing wnętrza, Zabezpieczenie plastików dressingiem",
  },
  {
    id: "korekta-lakieru",
    icon: <Gem />,
    colorClass: "text-blue-400", // Platinum styling
    borderColor: "border-blue-300 dark:border-blue-700",
    bgGradient: "from-blue-100 to-sky-100 dark:from-blue-900 dark:to-sky-900",
    title: "Pakiet Platinum",
    priceOld: "3500 zł",
    price: "3000 zł",
    description:
      "Dwuetapowa korekta lakieru, Zabezpieczenie lakieru lamp oraz felg powłoką ceramiczno-grafenową (5 letnią), Powłoka ceramiczna na szyby (2 letnia), Detailing wnętrza, Zabezpieczenie opon żelem grafenowym, Zabezpieczenie plastików dressingiem",
  },
];

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
        "Full Detailing (detailing wnętrza + zewnątrz + zabezpieczenie lakieru + zabezpiecznie opon żelem grafenowym)",
        "250 zł",
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
      ["Powłoka ceramiczna na felgi (1 rok)", "180 zł", "220 zł"],
      ["Powłoka ceramiczna na felgi (2 letnia)", "250 zł", "300 zł"],
      ["Powłoka ceramiczna na szyby (1 rok)", "200 zł", "250 zł"],
      ["Powłoka ceramiczna na szyby (2 letnia)", "250 zł", "300 zł"],
      ["Powłoka ceramiczna na szyby (3 letnia)", "300 zł", "400 zł"],
      ["Powłoka ceramiczna (1 rok)", "450 zł", "600 zł"],
      ["Powłoka ceramiczna (2 letnia)", "900 zł", "1200 zł"],
      ["Powłoka ceramiczna (3 letnia)", "1200 zł", "1400 zł"],
      ["Powłoka ceramiczna (4 letnia)", "1650 zł", "1900 zł"],
      ["Powłoka ceramiczna (5 letnia)", "2100 zł", "2400 zł"],
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

const extraServices = [["Niewidzialna wycieraczka", "80 zł"]];
const PRICE_COL_WIDTH = "w-24 md:w-[120px]";

export default function PriceTableModern() {
  return (
    <section id="pricetable" className="mx-auto py-16 px-4 max-w-7xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Cennik usług</h1>
        <p className="text-muted-foreground text-lg">
          Wybierz pakiet idealnie dopasowany do Twojego samochodu
        </p>
      </div>

      {/* --- CZĘŚĆ 1: KARTY (Silver, Gold, Platinum) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative">
        {sections.map((pkg) => (
          <Card
            key={pkg.id}
            className={`flex flex-col mx-24 my-4 md:mx-0 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 
              ${pkg.borderColor} border-2 
              bg-gradient-to-br ${pkg.bgGradient}
              ${
                pkg.isPopular ? "shadow-lg scale-105 z-10 md:-mt-4 md:mb-4" : ""
              }
            `}
          >
            {pkg.isPopular && (
              <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POLECANY
              </div>
            )}

            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                {React.cloneElement(pkg.icon, {
                  className: `w-6 h-6 ${pkg.colorClass}`,
                })}
                <CardTitle
                  className={`text-2xl items-center font-bold ${pkg.colorClass}`}
                >
                  {pkg.title}
                </CardTitle>
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold tracking-tight">
                  {pkg.price}{" "}
                  <span className="line-through text-red-500 font-normal text-2xl">
                    {pkg.priceOld}
                  </span>
                </span>
              </div>
            </CardHeader>

            <CardContent className="flex-1">
              <ul className="space-y-3 items-center">
                {/* Rozdzielamy opis po przecinkach, aby zrobić listę */}
                {pkg.description.split(",").map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm md:text-base"
                  >
                    <div className="mt-1 min-w-[1.25rem]">
                      <Check className={`w-5 h-5 ${pkg.colorClass}`} />
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-200 leading-tight">
                      {feature.trim()}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button
                className={`w-full font-semibold text-white 
                  ${
                    pkg.title === "Pakiet Gold"
                      ? "bg-yellow-600 hover:bg-yellow-700"
                      : pkg.title === "Pakiet Silver"
                      ? "bg-gray-600 hover:bg-gray-700"
                      : "bg-blue-600 hover:bg-sky-700"
                  }
                `}
              >
                <a href="tel:+48515125692">Zadzwoń teraz!</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* --- CZĘŚĆ 2: TABELE (Reszta) --- */}
      <div className="space-y-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 border-b pb-4">
          Pozostałe usługi
        </h2>

        {tableSections.map((section) => (
          <div key={section.title} id={section.id} className="overflow-x-auto">
            <Table className="rounded-lg overflow-hidden w-full table-fixed">
              <TableHeader>
                <TableRow>
                  {section.headers.map((header, j) => (
                    <TableHead
                      key={header}
                      className={`
                          border-b border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800
                          ${
                            j === 0
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
                            ${
                              j === 0
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
            <Table className="rounded-lg overflow-hidden w-full">
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
                    {/* ZMIANA: Użycie stałej szerokości i no-wrap */}
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

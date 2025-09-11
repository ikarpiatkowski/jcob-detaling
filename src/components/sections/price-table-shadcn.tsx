import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Bubbles, Car, Target, Sparkles, Wrench, Hammer } from "lucide-react";

const sections = [
  {
    icon: <Bubbles className="text-cyan-500" />,
    title: "Detailing wnętrza",
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
    icon: <Car className="text-blue-500" />,
    title: "Detailing zewnętrzny",
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
    icon: <Target className="text-fuchsia-500" />,
    title: "Pakiety kompleksowe",
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
    icon: <Sparkles className="text-yellow-500" />,
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
      ["Powłoka ceramiczna na szyby (3 lata)", "250 zł", "300 zł", "350 zł"],
    ],
  },
  {
    icon: <Wrench className="text-rose-500" />,
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
  ["Renowacja reflektorów (2 sztuki)", "200 zł"],
];

export default function PriceTableShadcn() {
  return (
    <div className="mx-auto py-16 px-2">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Cennik usług
      </h1>
      <div className="space-y-12 max-w-3xl mx-auto">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-2 mb-2 text-xl font-semibold">
              <span className="text-2xl">{section.icon}</span>
              {section.title}
            </div>
            <Table className="rounded-lg overflow-hidden">
              <TableHeader>
                <TableRow>
                  {section.headers.map((header) => (
                    <TableHead
                      key={header}
                      className="border-b border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800/60"
                    >
                      {header}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {section.rows.map((row, i) => (
                  <TableRow
                    key={i}
                    className="hover:bg-primary/10 dark:hover:bg-primary/20 border-b border-neutral-200 dark:border-neutral-700"
                  >
                    {row.map((cell, j) => (
                      <TableCell
                        key={j}
                        className="border-r border-neutral-200 dark:border-neutral-700 last:border-r-0"
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
        <div>
          <div className="flex items-center gap-2 mb-2 text-xl font-semibold">
            <Wrench className="text-rose-500 w-6 h-6" /> Usługi dodatkowe
          </div>
          <Table className="rounded-lg overflow-hidden">
            <TableHeader>
              <TableRow>
                <TableHead className="border-b border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800/60">
                  Usługa
                </TableHead>
                <TableHead className="border-b border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800/60">
                  Cena
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {extraServices.map((row, i) => (
                <TableRow
                  key={i}
                  className="border-l border-r border-rhover:bg-primary/10 dark:hover:bg-primary/20 border-b border-neutral-200 dark:border-neutral-700"
                >
                  {row.map((cell, j) => (
                    <TableCell
                      key={j}
                      className="border-l border-r border-b border-neutral-200 dark:border-neutral-700"
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
    </div>
  );
}

import React from "react";
import {
  Sparkles,
  Check,
  Medal,
  Gem,
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



export default function PriceTableModern() {
  return (
    <section id="pricetable" className="mx-auto py-10 bg-stripes">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cennik usług</h1>
          <p className="text-muted-foreground text-lg">
            Wybierz pakiet idealnie dopasowany do Twojego samochodu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4 relative">
          {sections.map((pkg) => (
            <Card
              key={pkg.id}
              className={`flex flex-col mx-24 my-4 md:mx-0 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 
              ${pkg.borderColor} border-2 
              bg-gradient-to-br ${pkg.bgGradient}
              ${pkg.isPopular ? "shadow-lg scale-105 z-10 md:-mt-4 md:mb-4" : ""
                }
            `}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POLECANE! 20% TANIEJ
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
                  ${pkg.title === "Pakiet Gold"
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
      </div>
    </section>
  );
}

"use client";
import FeatureCard from "@/components/feature-card";
import React from "react";

export default function FeaturesSection() {
  // Map feature index to price table section id
  // Synchronize features with price table content
  const features = [
    {
      id: "detailing-wnetrza",
      title: "Detailing wnętrza",
      description:
        "Kompleksowe czyszczenie wnętrza, pranie tapicerki i pielęgnacja skóry. Idealne odświeżenie środka auta.",
      icon: "Bubbles",
      titleGradient: "from-cyan-600 to-cyan-400",
      iconColor: "text-cyan-500",
    },
    {
      id: "detailing-wnetrzny",
      title: "Detailing zewnętrzny",
      description:
        "Dokładne mycie karoserii, woskowanie i konserwacja powłoki ceramicznej dla trwałej ochrony lakieru.",
      icon: "Car",
      titleGradient: "from-blue-600 to-blue-400",
      iconColor: "text-blue-500",
    },
    {
      id: "pranie-tapicerki",
      title: "Pranie tapicerki",
      description:
        "Dogłębne pranie tapicerki materiałowej lub skórzanej. Usuwa zabrudzenia i odświeża wnętrze pojazdu.",
      icon: "Handshake",
      titleGradient: "from-amber-600 to-orange-400",
      iconColor: "text-amber-500",
    },
    {
      id: "woskowanie",
      title: "Woskowanie",
      description:
        "Woskowanie twardym woskiem – szybka ochrona i połysk lakieru nawet do kilku miesięcy.",
      icon: "Leaf",
      titleGradient: "from-green-600 to-emerald-400",
      iconColor: "text-green-500",
    },
    {
      id: "pakiety-kompleksowe",
      title: "Pakiety kompleksowe",
      description:
        "Pakiet wnętrze + zewnątrz + wosk lub korekta lakieru z powłoką ceramiczną. Pełna metamorfoza auta.",
      icon: "Target",
      titleGradient: "from-fuchsia-600 to-pink-400",
      iconColor: "text-fuchsia-500",
    },
    {
      id: "korekta-lakieru",
      title: "Korekta lakieru",
      description:
        "Jedno-, dwu- lub trzyetapowa korekta lakieru. Usuwanie rys, matów i przywracanie głębi koloru.",
      icon: "Wrench",
      titleGradient: "from-rose-600 to-red-400",
      iconColor: "text-rose-500",
    },
  ];

  const handleFeatureClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="features" className="py-20 bg-stripes">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dlaczego warto wybrać nasze usługi
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Poznaj profesjonalny detailing samochodowy, który połączy doskonałą
            jakość z oszałamiającą estetyką, aby całkowicie odmienić wygląd
            Twojego auta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={handleFeatureClick(feature.id)}
              className="text-left focus:outline-none h-full flex"
            >
              <div className="w-full h-full flex">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  titleGradient={feature.titleGradient}
                  iconColor={feature.iconColor}
                  className="flex flex-col h-full"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

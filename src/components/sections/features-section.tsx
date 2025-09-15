"use client";
import FeatureCard from "@/components/feature-card";
import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      id: "detailing-wnetrza",
      targetId: "detailing-wnetrza",
      title: "Detailing wnętrza",
      description:
        "Kompleksowe czyszczenie wnętrza, pranie tapicerki i pielęgnacja skóry. Idealne odświeżenie środka auta.",
      icon: "Bubbles",
      titleGradient: "from-cyan-600 to-cyan-400",
      iconColor: "text-cyan-500",
    },
    {
      id: "detailing-zewnetrzny",
      targetId: "detailing-zewnetrzny",
      title: "Detailing zewnętrzny",
      description:
        "Dokładne mycie karoserii, woskowanie i konserwacja powłoki ceramicznej dla trwałej ochrony lakieru.",
      icon: "Car",
      titleGradient: "from-blue-600 to-blue-400",
      iconColor: "text-blue-500",
    },
    {
      id: "pakiety-kompleksowe",
      targetId: "pakiety-kompleksowe",
      title: "Pakiety kompleksowe",
      description:
        "Pakiet wnętrze + zewnątrz + wosk lub korekta lakieru z powłoką ceramiczną. Pełna metamorfoza auta.",
      icon: "Target",
      titleGradient: "from-amber-600 to-orange-400",
      iconColor: "text-amber-500",
    },
    {
      id: "powloki-ceramiczne",
      targetId: "powloki-ceramiczne",
      title: "Powłoki ceramiczne",
      description:
        "Trwała ochrona lakieru dzięki powłoce ceramicznej. Odporniejsza na zarysowania i łatwiejsza w pielęgnacji.",
      icon: "Sparkles",
      titleGradient: "from-teal-600 to-teal-400",
      iconColor: "text-green-500",
    },
    {
      id: "korekta-lakieru",
      targetId: "korekta-lakieru",
      title: "Korekta lakieru",
      description:
        "Jedno-, dwu- lub trzyetapowa korekta lakieru. Usuwanie rys, matów i przywracanie głębi koloru.",
      icon: "BrushCleaning",
      titleGradient: "from-fuchsia-600 to-pink-400",
      iconColor: "text-fuchsia-500",
    },
    {
      id: "uslugi-dodatkowe",
      targetId: "uslugi-dodatkowe",
      title: "Usługi dodatkowe",
      description:
        "Dodatkowe usługi, takie jak pranie dywaników, czyszczenie felg czy konserwacja plastików.",
      icon: "Wrench",
      titleGradient: "from-rose-600 to-red-400",
      iconColor: "text-rose-500",
    },
  ];

  const NAVBAR_OFFSET = 80;
  const handleFeatureClick = (targetId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      const y =
        section.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    const ids = [
      "detailing-wnetrza",
      "detailing-zewnetrzny",
      "pakiety-kompleksowe",
      "powloki-ceramiczne",
      "korekta-lakieru",
      "uslugi-dodatkowe",
    ];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        (el as HTMLElement).style.scrollMarginTop = NAVBAR_OFFSET + "px";
      }
    });
  }, []);

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
              onClick={handleFeatureClick(feature.targetId)}
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

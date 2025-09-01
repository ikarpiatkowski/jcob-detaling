import FeatureCard from "@/components/feature-card";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-stripes">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dlaczego warto wybrać nasze uszługi
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Poznaj profesjonalny detailing samochodowy, który połączy doskonałą
            jakość z oszałamiającą estetyką, aby całkowicie odmienić wygląd
            Twojego auta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Perfekcja bez kompromisów"
            description="Nasze fronty są wykonane przy użyciu najwyższej jakości materiałów i zaawansowanych technik lakierowania."
            icon="Sparkles"
            titleGradient="from-blue-600 to-blue-400"
            iconColor="text-blue-500"
          />
          <FeatureCard
            title="Renowacja lamp"
            description="Wybierz z naszej szerokiej palety kolorów lub poproś o niestandardowy kolor pasujący do twojego projektu."
            icon="Shield"
            titleGradient="from-purple-600 to-pink-400"
            iconColor="text-purple-500"
          />
          <FeatureCard
            title="Pranie tapicerki"
            description="Fronty odporne na zarysowania, wilgoć i promienie UV, zapewniające długotrwałe piękno."
            icon="Handshake"
            titleGradient="from-amber-600 to-orange-400"
            iconColor="text-amber-500"
          />
          <FeatureCard
            title="Woskowanie"
            description="Do produkcji używamy materiałów i procesów przyjaznych dla środowiska."
            icon="Leaf"
            titleGradient="from-green-600 to-emerald-400"
            iconColor="text-green-500"
          />
          <FeatureCard
            title="Full Detailing "
            description="Każdy front jest starannie wykonany przez naszych wykwalifikowanych rzemieślników z wieloletnim doświadczeniem."
            icon="Hammer"
            titleGradient="from-red-600 to-rose-400"
            iconColor="text-red-500"
          />
          <FeatureCard
            title="Szybka produkcja"
            description="Szybki czas realizacji bez uszczerbku dla jakości i dbałości o szczegóły."
            icon="Zap"
            titleGradient="from-indigo-600 to-violet-400"
            iconColor="text-indigo-500"
          />
        </div>
      </div>
    </section>
  );
}

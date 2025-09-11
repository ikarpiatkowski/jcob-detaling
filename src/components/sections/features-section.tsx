import FeatureCard from "@/components/feature-card";

export default function FeaturesSection() {
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
          <FeatureCard
            title="Perfekcja bez kompromisów"
            description="Odkryj najwyższą jakość, która sprawi, że Twój samochód będzie lśnił jak nigdy dotąd."
            icon="Sparkles"
            titleGradient="from-blue-600 to-blue-400"
            iconColor="text-blue-500"
          />
          <FeatureCard
            title="Renowacja lamp"
            description="Przywróć lampom fabryczny blask i popraw widoczność na drodze."
            icon="Bubbles"
            titleGradient="from-purple-600 to-pink-400"
            iconColor="text-purple-500"
          />
          <FeatureCard
            title="Pranie tapicerki"
            description="Głębokie czyszczenie, które usunie plamy i odświeży wnętrze Twojego auta."
            icon="Handshake"
            titleGradient="from-amber-600 to-orange-400"
            iconColor="text-amber-500"
          />
          <FeatureCard
            title="Woskowanie"
            description="Ochrona i głęboki połysk, który zabezpieczy lakier na wiele miesięcy."
            icon="Leaf"
            titleGradient="from-green-600 to-emerald-400"
            iconColor="text-green-500"
          />
          <FeatureCard
            title="Full Detailing"
            description="Kompleksowa rewolucja, która odmieni każdy detal Twojego samochodu."
            icon="Hammer"
            titleGradient="from-red-600 to-rose-400"
            iconColor="text-red-500"
          />
          <FeatureCard
            title="Korekta lakieru"
            description="Usuń zarysowania i hologramy, aby uzyskać idealną gładkość i głębię koloru."
            icon="Zap"
            titleGradient="from-indigo-600 to-violet-400"
            iconColor="text-indigo-500"
          />
        </div>
      </div>
    </section>
  );
}

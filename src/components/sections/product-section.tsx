import { Suspense } from "react";
import ProductShowcase from "@/components/product-showcase";

export default function ProductSection() {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galeria</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mx-auto">
            Odkryj naszą ofertę kompleksowego auto detailingu, który wydobywa
            piękno z każdego pojazdu.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="h-96 flex items-center justify-center">
              Ładowanie produktów...
            </div>
          }
        >
          <ProductShowcase />
        </Suspense>
      </div>
    </section>
  );
}

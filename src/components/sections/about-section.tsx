import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-stripes">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O naszej firmie
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Dzięki ponad 15-letniemu doświadczeniu w branży detailingu,
              staliśmy się liderem w dziedzinie kompleksowej pielęgnacji
              pojazdów.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Nasze zaangażowanie w perfekcyjną jakość, innowacyjne techniki i
              zadowolenie klientów przyniosło nam zaufanie właścicieli aut w
              całym kraju.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              Łączymy tradycyjne rzemiosło z najnowszą technologią, aby Twoje
              auto nie tylko wyglądało pięknie, ale było także trwale chronione.
            </p>
            <Button size="lg" asChild>
              <Link href="#contact">Dowiedz się o nas więcej</Link>
            </Button>
          </div>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src="/jd.png"
              alt="Our workshop"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

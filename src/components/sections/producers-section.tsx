import Image from "next/image";

const producerImages = [
  "/fxprotect.png",
  "/kiurlab.png",
  "/swag.png",
  "/work.png",
  "/adbl.png",
  "/zvizzer.png",
  "/soft99.svg",
  "/mrrag.png",
];

export default function ProducersSection() {
  return (
    <section className="py-16 bg-stripes">
      <div className=" mx-auto px-4 flex items-center justify-center gap-6 flex-wrap space-x-4">
        {producerImages.map((src, idx) => (
          <div key={idx} className="w-30 h-30 flex items-center justify-center">
            <Image
              src={src}
              alt={`Logo producenta ${idx + 1}`}
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

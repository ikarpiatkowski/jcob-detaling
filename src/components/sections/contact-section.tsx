import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/contact-form";
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-stripes">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Napisz do nas</h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Masz pytania lub chcesz złożyć zamówienie? Skontaktuj się z naszym
            zespołem.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Znajdź nas na mapie</h3>
            <ContactForm />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Dane kontaktowe</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-bold">Telefon</h4>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    +48 515 125 692
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    jacobdetailing02@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-bold">Adres</h4>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    ul. Generała Józefa Hallera 58
                    <br />
                    87-100 Toruń, Polska
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-bold mb-4">Godziny otwarcia</h4>
                <div className="grid grid-cols-2 gap-2 text-neutral-600 dark:text-neutral-300">
                  <div>Poniedziałek - Piątek</div>
                  <div>7:00 - 16:00</div>
                  <div>Sobota - Niedziela</div>
                  <div>Zamknięte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

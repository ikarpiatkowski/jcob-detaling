import { Phone, Mail, MapPin } from "lucide-react";
// Funkcja sprawdzająca czy firma jest otwarta
function isOpenNow() {
  const now = new Date();
  const day = now.getDay(); // 0 = niedziela, 1 = poniedziałek, ...
  const hour = now.getHours();
  const minute = now.getMinutes();
  // Poniedziałek (1) - Czwartek (4): 8:00 - 20:00
  if (day >= 1 && day <= 4) {
    if (hour > 8 && hour < 20) return true;
    if (hour === 8 && minute >= 0) return true;
    if (hour === 20 && minute === 0) return true;
    return false;
  }
  // Piątek (5) - Niedziela (0): 8:00 - 22:00
  if (day === 5 || day === 6 || day === 0) {
    if (hour > 8 && hour < 22) return true;
    if (hour === 8 && minute >= 0) return true;
    if (hour === 22 && minute === 0) return true;
    return false;
  }
  return false;
}
import ContactForm from "@/components/contact-form";
export default function ContactSection() {
  return (
    <section id="contact" className="py-10 bg-stripes">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
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
                    <a href="tel:+48515125692">+48 515 125 692</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    <a href="mailto:jacobdetailing02@gmail.com">
                      jacobdetailing02@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-bold">Adres</h4>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=ul.+Lipnowska+25/29,+87-100+Toruń,+Polska"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ul. Lipnowska 25/29
                      <br />
                      87-100 Toruń, Polska
                    </a>
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-bold mb-4 flex items-center gap-4">
                  Godziny otwarcia
                  {isOpenNow() ? (
                    <span className="inline-block px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold animate-pulse">
                      Otwarte teraz
                    </span>
                  ) : (
                    <span className="inline-block px-3 py-1 rounded-full bg-red-500 text-white text-xs font-semibold">
                      Zamknięte
                    </span>
                  )}
                </h4>
                <div className="grid grid-cols-2 gap-2 text-neutral-600 dark:text-neutral-300">
                  <div>Poniedziałek - Piątek</div>
                  <div>8:00 - 22:00</div>
                  <div>Sobota - Niedziela</div>
                  <div>8:00 - 20:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

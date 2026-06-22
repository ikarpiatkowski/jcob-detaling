"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  // Honeypot field to block spam bots
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
          website, // honeypot
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Wiadomość została wysłana pomyślnie!");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setWebsite("");
      } else {
        toast.error(data.error || "Wystąpił błąd podczas wysyłania wiadomości.");
      }
    } catch {
      toast.error("Wystąpił błąd połączenia. Spróbuj ponownie później.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col space-y-4", className)}>
      {/* Honeypot field (hidden from screen reader and visual users) */}
      <div style={{ position: "absolute", left: "-9999px", top: "-9999px", opacity: 0, zIndex: -1 }} aria-hidden="true">
        <label htmlFor="website">Nie wypełniaj tego pola</label>
        <input
          id="website"
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-1">
          Imię i nazwisko
        </label>
        <Input
          id="name"
          type="text"
          placeholder="Imie i nazwisko"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            E-mail
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Twój e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-1">
            Telefon
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="Twój numer telefonu"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col min-h-[120px]">
        <label htmlFor="message" className="block text-sm font-semibold mb-1">
          Wiadomość
        </label>
        <Textarea
          id="message"
          placeholder="Napisz swoją wiadomość..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full flex-1 resize-none min-h-[100px]"
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full mt-2">
        {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
      </Button>
    </form>
  );
}

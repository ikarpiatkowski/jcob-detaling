import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, website } = body;

    // Honeypot check: if website is filled, we treat it as a bot submission.
    // We return a fake success response so bots think it was sent successfully.
    if (website && website.trim() !== "") {
      console.warn("Bot detected via honeypot field. Suppressing email transmission.");
      return NextResponse.json({ success: true, message: "Message sent successfully (honeypot)." }, { status: 200 });
    }

    // Basic validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Wszystkie pola (imię, e-mail, telefon, wiadomość) są wymagane." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY in environment variables.");
      return NextResponse.json({ error: "Błąd konfiguracji serwera po stronie e-mail." }, { status: 500 });
    }

    const senderEmail = process.env.SENDER_EMAIL || "onboarding@resend.dev";
    const recipientEmail = "jacobdetailing02@gmail.com";

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: `Formularz Kontaktowy <${senderEmail}>`,
        to: recipientEmail,
        subject: `Nowa wiadomość od ${name} - Jacob Detailing`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #333; border-bottom: 2px solid #eaeaea; padding-bottom: 10px;">Nowa wiadomość z formularza kontaktowego</h2>
            <p style="font-size: 16px; margin: 15px 0;"><strong>Imię i nazwisko:</strong> ${name}</p>
            <p style="font-size: 16px; margin: 15px 0;"><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="font-size: 16px; margin: 15px 0;"><strong>Telefon:</strong> <a href="tel:${phone}">${phone}</a></p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px; font-size: 16px; line-height: 1.5;">
              <strong style="display: block; margin-bottom: 10px;">Treść wiadomości:</strong>
              <p style="white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
            <p style="font-size: 12px; color: #999; text-align: center;">Wiadomość wygenerowana automatycznie przez formularz na stronie Jacob Detailing.</p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API Error:", data);
      return NextResponse.json({ error: data.message || "Błąd wysyłania wiadomości przez zewnętrzny serwis." }, { status: response.status });
    }

    return NextResponse.json({ success: true, message: "Wiadomość została wysłana pomyślnie!" }, { status: 200 });
  } catch (error) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json({ error: "Wystąpił wewnętrzny błąd serwera." }, { status: 500 });
  }
}

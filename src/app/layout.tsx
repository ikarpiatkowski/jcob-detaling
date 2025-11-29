import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jacobdetailing.pl"),
  title: "Auto Detailing Toruń | Car Detailing | Jacob Detailing",
  description:
    "Auto Car Detailing Toruń. Korekta lakieru, powłoka ceramiczna, myjnia samochodowa, czyszczenie samochodu, renowacja lakieru, detailing wnętrza / zewnętrzny. Sprawdź Cennik lub Zadzwoń!",
  icons: {
    icon: "/jd.png",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "https://www.jacobdetailing.pl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

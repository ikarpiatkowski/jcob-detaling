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
  metadataBase: new URL("https://jacobdetailing.pl"),
  title: "Auto detailing Toruń | Car detailing | Jacob Detailing",
  description:
    "Auto Car detailing Toruń. Korekta lakieru, powłoka ceramiczna, myjnia samochodowa, czyszczenie samochodu, renowacja lakieru, detailing wnętrza / zewnętrzny. Sprawdź Cennik lub Zadzwoń!",
  icons: {
    icon: "/jd.png",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "https://jacobdetailing.pl",
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

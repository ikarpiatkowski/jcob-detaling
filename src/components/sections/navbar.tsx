"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
// import { useTheme } from "next-themes";
import Image from "next/image";
import { PL, US } from "country-flag-icons/react/3x2"; // Import flag icons

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Usługi", href: "#features" },
  { label: "Galeria", href: "#gallery" },
  { label: "Cennik", href: "#pricetable" },
  { label: "O nas", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#contact" },
];

// New component for the language flag toggle
const FlagToggle = ({ isTransparent }: { isTransparent: boolean }) => {
  const [language, setLanguage] = useState("pl");

  const toggleLanguage = () => {
    setLanguage(language === "pl" ? "us" : "pl");
  };

  const commonClasses = "h-6 w-6 cursor-pointer transition-colors";
  const colorClasses = isTransparent
    ? "text-white/80 hover:text-white"
    : "text-foreground/80 hover:text-foreground";

  return (
    <button
      onClick={toggleLanguage}
      className={cn(commonClasses, colorClasses)}
    >
      {language === "pl" ? (
        <US className="rounded-sm" />
      ) : (
        <PL className="rounded-sm" />
      )}
    </button>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  // const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const isDarkMode = theme === "dark";
  // const isHeroSection = !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            onClick={() => scrollToSection("#home")}
            className="flex items-center"
          >
            <div className="relative">
              <div className="flex items-center">
                <Image
                  src="/jd.png"
                  alt="Jacob Detaling"
                  width={48}
                  height={48}
                  className={cn(
                    "object-contain mr-2 dark:bg-inherit bg-neutral-200/80 rounded-full",
                    !scrolled && "bg-inherit"
                  )}
                />
                <span
                  className={cn("font-bold text-lg", !scrolled && "text-white")}
                >
                  Jacob Detaling
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  !scrolled
                    ? "text-white/80 hover:text-white" // When not scrolled (transparent bg)
                    : "text-foreground/80 hover:text-foreground" // When scrolled
                )}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className={cn(
                      "absolute -bottom-1 left-0 right-0 h-0.5",
                      !scrolled ? "bg-white" : "bg-primary"
                    )}
                  />
                )}
              </Link>
            ))}
            <FlagToggle isTransparent={!scrolled} />
            <ThemeToggle isTransparent={!scrolled} />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <FlagToggle isTransparent={!scrolled} />
            <ThemeToggle isTransparent={!scrolled} />
            <button
              className="focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background dark:bg-neutral-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={cn(
                      "py-2 text-sm font-medium transition-colors",
                      activeSection === item.href.substring(1) &&
                        "text-primary font-semibold"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

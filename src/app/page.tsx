import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import ProductSection from "@/components/sections/product-section";
import ProducersSection from "@/components/sections/producers-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";
import FAQSection from "@/components/sections/faq-section";
import ReviewsSection from "@/components/sections/reviews-section";
import PriceTableShadcn from "@/components/sections/price-table-shadcn";
import OtherServicesSection from "@/components/sections/other-services-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProducersSection />
      <PriceTableShadcn />
      <ProductSection />
      <ReviewsSection />
      <OtherServicesSection />
      {/* <AboutSection /> */}
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

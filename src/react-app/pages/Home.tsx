import Navigation from "@/react-app/components/Navigation";
import HeroSection from "@/react-app/components/HeroSection";
import AboutSection from "@/react-app/components/AboutSection";
import ServicesSection from "@/react-app/components/ServicesSection";
import PortfolioSection from "@/react-app/components/PortfolioSection";
import TestimonialsSection from "@/react-app/components/TestimonialsSection";
import WhyChooseSection from "@/react-app/components/WhyChooseSection";
import PaymentMethodsSection from "@/react-app/components/PaymentMethodsSection";
import QuoteFormSection from "@/react-app/components/QuoteFormSection";
import FAQSection from "@/react-app/components/FAQSection";
import FinalCTASection from "@/react-app/components/FinalCTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <WhyChooseSection />
        <PaymentMethodsSection />
        <QuoteFormSection />
        <FAQSection />
        <FinalCTASection />
      </main>
    </div>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent/30">
      <Header />
      <Hero />
      <Features />

      {/* Keeping these for now, but they will need style updates */}
      <PortfolioSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

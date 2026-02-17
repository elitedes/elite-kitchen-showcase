import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LighthouseStats from "@/components/LighthouseStats";
import Features from "@/components/Features";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import TechStackSection from "@/components/TechStackSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent/30">
      <Header />
      <Hero />
      <LighthouseStats />
      <Features />
      <PortfolioSection />
      <ProcessSection />
      <PricingSection />
      <ContactSection />
      <TechStackSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;

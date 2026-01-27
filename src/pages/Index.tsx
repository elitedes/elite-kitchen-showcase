import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import KitchenCategoriesSection from '@/components/home/KitchenCategoriesSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <KitchenCategoriesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;

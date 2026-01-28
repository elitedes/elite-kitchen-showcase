import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import KitchenCategoriesSection from '@/components/home/KitchenCategoriesSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import ContactSection from '@/components/home/ContactSection';
import GoogleReviewsSection from '@/components/home/GoogleReviewsSection'; // New import

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <KitchenCategoriesSection />
      <BenefitsSection />
      <WhyUsSection />
      <GoogleReviewsSection /> {/* New component */}
      <ContactSection />
    </Layout>
  );
};

export default Index;

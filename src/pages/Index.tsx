import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import KitchenCategoriesSection from '@/components/home/KitchenCategoriesSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import ContactSection from '@/components/home/ContactSection';
import GoogleReviewsSection from '@/components/home/GoogleReviewsSection';
import ImageComparisonSlider from '@/components/home/ImageComparisonSlider';
import InteractiveFitting from '@/components/home/InteractiveFitting';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <KitchenCategoriesSection />
      <BenefitsSection />
      <ImageComparisonSlider />
      <InteractiveFitting />
      <WhyUsSection />
      <GoogleReviewsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;

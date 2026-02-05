import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import KitchenCategoriesSection from '@/components/home/KitchenCategoriesSection';
import ContactSection from '@/components/home/ContactSection';
import GoogleReviewsSection from '@/components/home/GoogleReviewsSection';
import ImageComparisonSlider from '@/components/home/ImageComparisonSlider';
import InteractiveFitting from '@/components/home/InteractiveFitting';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <KitchenCategoriesSection />
      <ImageComparisonSlider />
      <InteractiveFitting />
      <GoogleReviewsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;

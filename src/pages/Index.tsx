import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import QuickNavSection from '@/components/home/QuickNavSection';
import KitchenCategoriesSection from '@/components/home/KitchenCategoriesSection';
import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection';
import ContactSection from '@/components/home/ContactSection';
import GoogleReviewsSection from '@/components/home/GoogleReviewsSection';
import ImageComparisonSlider from '@/components/home/ImageComparisonSlider';
import InteractiveFitting from '@/components/home/InteractiveFitting';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <QuickNavSection />
      <KitchenCategoriesSection />
      <FeaturedProjectsSection />
      <ImageComparisonSlider />
      <InteractiveFitting />
      <GoogleReviewsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;

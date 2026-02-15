import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
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
      <SEO
        title="Elite Design | מטבחים, ארונות ונגרות בהתאמה אישית - 20 שנות ניסיון"
        description="נגריית Elite Design מתמחה בייצור מטבחים ורהיטים מעל 20 שנה. ארונות, חדרי רחצה ופתרונות נגרות לכל הבית במחירים נוחים ובאיכות מעולה."
        canonical="/"
      />
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

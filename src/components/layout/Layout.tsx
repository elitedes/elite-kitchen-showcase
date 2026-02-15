import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';
import WhatsAppButton from './WhatsAppButton';
import ScrollTopButton from './ScrollTopButton';
import StructuredData from '@/components/StructuredData';
import { useLanguage } from '@/contexts/LanguageContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { dir, language } = useLanguage();

  useEffect(() => {
    // Update html lang and dir attributes
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden" dir={dir}>
      <StructuredData />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <FloatingCTA />
      <WhatsAppButton />
      <ScrollTopButton />
      <Footer />
    </div>
  );
};

export default Layout;

import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';
import ScrollTopButton from './ScrollTopButton';
import { useLanguage } from '@/contexts/LanguageContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { dir, t, language } = useLanguage();

  useEffect(() => {
    // Update Title
    const pageTitle = t('seo.title');
    if (pageTitle) {
      document.title = pageTitle;
    }

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t('seo.description'));
    }

    // Update OG tags if they exist
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t('seo.title'));

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t('seo.description'));

    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language, t]);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden" dir={dir}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <FloatingCTA />
      <ScrollTopButton />
      <Footer />
    </div>
  );
};

export default Layout;

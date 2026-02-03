import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';
import WhatsAppButton from './WhatsAppButton';
import ScrollTopButton from './ScrollTopButton';
import { useLanguage } from '@/contexts/LanguageContext';

interface LayoutProps {
  children: ReactNode;
}

// Structured Data for SEO (LocalBusiness)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Elite Design",
  "description": "נגריית Elite Design מתמחה בייצור מטבחים ורהיטים מעל 20 שנה",
  "url": "https://elitedesign.co.il",
  "telephone": "+972-8-671-1767",
  "email": "isramebel@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "צה״ל 8",
    "addressLocality": "אשקלון",
    "addressCountry": "IL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "31.6688",
    "longitude": "34.5743"
  },
  "openingHours": "Su-Th 09:00-18:00",
  "priceRange": "₪₪",
  "image": "https://elitedesign.co.il/logo.png",
  "sameAs": []
};

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

    // Update html lang and dir attributes
    document.documentElement.lang = language;
    document.documentElement.dir = dir;

    // Add structured data script if not exists
    const existingScript = document.getElementById('structured-data');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [language, t, dir]);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden" dir={dir}>
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

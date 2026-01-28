import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';
import { useLanguage } from '@/contexts/LanguageContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { dir } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col overflow-hidden" dir={dir}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default Layout;

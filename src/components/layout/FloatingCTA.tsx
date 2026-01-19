import { Phone, Calendar, Headphones } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingCTA = () => {
  const { t } = useLanguage();

  return (
    <div className="floating-cta hidden md:flex">
      <a href="#" className="floating-cta-btn">
        <Headphones className="w-5 h-5" />
        <span className="max-w-16 text-center leading-tight">{t('floating.customer')}</span>
      </a>
      <a href="#contact" className="floating-cta-btn">
        <Calendar className="w-5 h-5" />
        <span className="max-w-16 text-center leading-tight">{t('floating.appointment')}</span>
      </a>
      <a href="tel:08-671-1767" className="floating-cta-btn">
        <Phone className="w-5 h-5" />
        <span>08-671-1767</span>
      </a>
    </div>
  );
};

export default FloatingCTA;

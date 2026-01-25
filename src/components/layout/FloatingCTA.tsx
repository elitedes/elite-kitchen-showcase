import { Phone, Calendar, Headphones, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingCTA = () => {
  const { t } = useLanguage();

  return (
    <div className="floating-cta hidden md:flex">
      <a
        href="https://wa.me/972086711767"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-cta-btn bg-green-500 hover:bg-green-600"
      >
        <MessageCircle className="w-5 h-5" />
        <span>WhatsApp</span>
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

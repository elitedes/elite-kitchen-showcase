import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logoFull from '@/assets/logo-footer.jpg';

const Footer = () => {
  const { t, language, setLanguage, dir } = useLanguage();

  const quickLinks = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.about', path: '/about' },
    { key: 'nav.closets', path: '/closets' },
    { key: 'nav.kitchens', path: '/kitchens' },
    { key: 'nav.projects', path: '/projects' },
    { key: 'nav.calculator', path: '/calculator' },
    { key: 'nav.contact', path: '/contact' },
  ];

  const kitchenLinks = [
    { key: 'nav.kitchens.modern', path: '/kitchens/modern' },
    { key: 'nav.kitchens.country', path: '/kitchens/country' },
    { key: 'nav.kitchens.formica', path: '/kitchens/formica' },
    { key: 'nav.kitchens.wood', path: '/kitchens/wood' },
    { key: 'nav.kitchens.nano', path: '/kitchens/nano' },
  ];

  return (
    <footer className="bg-charcoal text-cream" dir={dir}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="mb-6">
              <Link to="/">
                <img src={logoFull} alt="Elite Design" className="h-16 w-auto object-contain" />
              </Link>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              {t('about.description').substring(0, 150)}...
            </p>
            <div className="flex gap-4" aria-label="Social media">
              <a href="https://www.facebook.com/elitedesignkitchens" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/elitedesignkitchens/" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@elitedesignkitchens" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-accent transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://share.google/2T8SzlQhkHRVIAI6X" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-accent transition-colors" aria-label="Google Business">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png" alt="" role="presentation" className="h-4 w-auto grayscale contrast-200 brightness-200" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h4 className="text-lg font-bold mb-6">{t('nav.home')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-cream/70 hover:text-accent transition-colors text-sm"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kitchen Categories */}
          <nav aria-label="Kitchen categories">
            <h4 className="text-lg font-bold mb-6">{t('nav.kitchens')}</h4>
            <ul className="space-y-3">
              {kitchenLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-cream/70 hover:text-accent transition-colors text-sm"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('nav.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-cream/70 text-sm">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="tel:08-671-1767"
                  className="text-cream/70 hover:text-accent transition-colors text-sm"
                >
                  {t('contact.phone.number')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="mailto:isramebel@gmail.com"
                  className="text-cream/70 hover:text-accent transition-colors text-sm"
                >
                  isramebel@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/50 text-sm">
              © {new Date().getFullYear()} Elite Design kitchens & more. {t('footer.rights')}.
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setLanguage('he')}
                className={`transition-colors text-sm ${language === 'he' ? 'text-cream font-bold' : 'text-cream/50 hover:text-cream'}`}
              >
                עברית
              </button>
              <span className="text-cream/30">|</span>
              <button
                onClick={() => setLanguage('ru')}
                className={`transition-colors text-sm ${language === 'ru' ? 'text-cream font-bold' : 'text-cream/50 hover:text-cream'}`}
              >
                Русский
              </button>
              <span className="text-cream/30">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors text-sm ${language === 'en' ? 'text-cream font-bold' : 'text-cream/50 hover:text-cream'}`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;

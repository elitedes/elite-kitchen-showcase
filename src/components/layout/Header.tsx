import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
  const { language, setLanguage, t, dir } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [kitchensDropdownOpen, setKitchensDropdownOpen] = useState(false);
  const location = useLocation();

  const kitchenCategories = [
    { key: 'modern', path: '/kitchens/modern' },
    { key: 'country', path: '/kitchens/country' },
    { key: 'formica', path: '/kitchens/formica' },
    { key: 'wood', path: '/kitchens/wood' },
    { key: 'nano', path: '/kitchens/nano' },
  ];

  const navItems = [
    { key: 'nav.about', path: '/about' },
    { key: 'nav.closets', path: '/closets' },
    { key: 'nav.kitchens', path: '/kitchens', hasDropdown: true },
    { key: 'nav.projects', path: '/projects' },
    { key: 'nav.promotions', path: '/promotions' },
    { key: 'nav.installation', path: '/installation' },
    { key: 'nav.calculator', path: '/calculator' },
    { key: 'nav.contact', path: '/contact' },
  ];

  return (
    <header className="bg-header sticky top-0 z-50 shadow-lg" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-20">
          {/* Mobile Burger Button */}
          <button
            className="lg:hidden text-header-foreground p-2 relative z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex flex-col items-center text-header-foreground z-0">
            <span className="text-xl lg:text-3xl font-bold tracking-wide whitespace-nowrap">Elite Design</span>
            <span className="text-[10px] lg:text-sm font-light whitespace-nowrap">kitchens & more</span>
          </Link>

          {/* Mobile Language Switcher (Opposite Side) */}
          <div className="lg:hidden relative z-10">
            <LanguageSwitcher variant="mobile-header" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setKitchensDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setKitchensDropdownOpen(false)}
              >
                <Link
                  to={item.path}
                  className={`nav-link flex items-center gap-1 ${location.pathname === item.path ? 'text-accent' : ''
                    }`}
                >
                  {t(item.key)}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown for Kitchens */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {kitchensDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full start-0 bg-background shadow-xl rounded-md py-2 min-w-48 z-50"
                      >
                        {kitchenCategories.map((cat) => (
                          <Link
                            key={cat.key}
                            to={cat.path}
                            className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors"
                          >
                            {t(`nav.kitchens.${cat.key}`)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Language Switcher & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher variant="desktop" />
            <a
              href="tel:08-671-1767"
              className="flex items-center gap-2 text-header-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">08-671-1767</span>
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-header border-t border-header-foreground/20"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.key}>
                  <Link
                    to={item.path}
                    className="block py-2 text-header-foreground hover:text-accent transition-colors"
                    onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ps-4 flex flex-col gap-1">
                      {kitchenCategories.map((cat) => (
                        <Link
                          key={cat.key}
                          to={cat.path}
                          className="block py-1 text-header-foreground/80 hover:text-accent transition-colors text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t(`nav.kitchens.${cat.key}`)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}



              <a
                href="tel:08-671-1767"
                className="flex items-center gap-2 text-header-foreground py-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">08-671-1767</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

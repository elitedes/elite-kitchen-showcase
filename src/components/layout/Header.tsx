import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useScrollDirection } from '@/hooks/useScrollDirection';

const Header = () => {
  const { language, setLanguage, t, dir } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileKitchensOpen, setMobileKitchensOpen] = useState(false);
  const [kitchensDropdownOpen, setKitchensDropdownOpen] = useState(false);
  const location = useLocation();

  // Scroll Logic
  const { scrollDirection, scrollPosition } = useScrollDirection();
  const isScrolled = scrollPosition > 120; // Compression threshold
  const isTransparent = scrollPosition < 96; // Top transparency threshold
  const isVisible = scrollDirection !== 'down' || scrollPosition < 100; // Hide/Show logic

  const kitchenCategories = [
    { key: 'modern', path: '/kitchens/modern' },
    { key: 'formica', path: '/kitchens/formica' },
    { key: 'wood', path: '/kitchens/wood' },
    { key: 'country', path: '/kitchens/country' },
    { key: 'nano', path: '/kitchens/nano' },
    { key: 'acrylic', path: '/kitchens/acrylic' },
  ];

  const navItems = [
    { key: 'nav.about', path: '/about' },
    { key: 'nav.closets', path: '/closets' },
    { key: 'nav.kitchens', path: '/kitchens', hasDropdown: true },
    { key: 'nav.projects', path: '/projects' },
    { key: 'nav.promotions', path: '/promotions' },
    { key: 'nav.magazine', path: '/blog' },
    { key: 'nav.installation', path: '/installation' },
    { key: 'nav.calculator', path: '/calculator' },
    { key: 'nav.contact', path: '/contact' },
  ];

  // Dynamic classes based on state
  const headerHeight = isScrolled ? '72px' : '96px';
  const headerBg = isTransparent && !mobileMenuOpen
    ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)'
    : 'rgba(10, 10, 10, 0.85)';
  const headerBlur = 'blur(5px)';
  const headerShadow = isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none';
  const textColor = 'text-white';
  const logoScale = isScrolled ? 0.9 : 1;

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? 0 : '-100%',
          height: headerHeight,
          backgroundColor: headerBg,
          backdropFilter: headerBlur,
          boxShadow: headerShadow,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-colors duration-300 ${textColor}`}

        dir={dir}
      >
        <div className="container mx-auto px-4 w-full">
          <div className="flex items-center justify-between h-full">

            {/* Mobile Burger Button */}
            <button
              className="lg:hidden p-2 relative z-50"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                if (mobileMenuOpen) setMobileKitchensOpen(false);
              }}
            >
              {mobileMenuOpen
                ? <X className="w-6 h-6 text-white" />
                : <Menu className="w-6 h-6 text-white" />
              }
            </button>

            {/* Logo */}
            <Link to="/" className="flex flex-col items-center z-50 group">
              <motion.div
                animate={{ scale: logoScale }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <span className={`text-xl lg:text-3xl font-bold tracking-wide whitespace-nowrap lg:ml-0 translate-x-[-15%] lg:translate-x-0`}>
                  Elite Design
                </span>
                <span className="text-[10px] lg:text-sm font-light whitespace-nowrap tracking-widest text-center opacity-80 translate-x-[-15%] lg:translate-x-0">
                  kitchens & more
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <div
                  key={item.key}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => item.hasDropdown && setKitchensDropdownOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setKitchensDropdownOpen(false)}
                >
                  <Link
                    to={item.path}
                    className={`text-[15px] font-medium tracking-wide transition-opacity hover:opacity-100 flex items-center gap-1 py-4 relative group-hover:text-accent/80`}
                    style={{ opacity: 0.9 }}
                  >
                    {t(item.key)}
                    {item.hasDropdown && <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${kitchensDropdownOpen ? 'rotate-180' : ''}`} />}
                    {/* Animated Underline */}
                    <span className="absolute bottom-2 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full opacity-50" />
                  </Link>

                  {/* Dropdown for Kitchens */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {kitchensDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, clipPath: "inset(0% 0% 100% 0%)" }}
                          animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
                          exit={{ opacity: 0, y: 10, clipPath: "inset(0% 0% 100% 0%)" }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full start-0 bg-black/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] rounded-xl py-3 min-w-[220px] border border-white/10"
                        >
                          {kitchenCategories.map((cat) => (
                            <Link
                              key={cat.key}
                              to={cat.path}
                              className="block px-6 py-2.5 text-white/90 hover:bg-white/10 hover:text-accent transition-colors text-[15px] font-medium"
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

            {/* Right Side: Phone & Lang */}
            <div className="hidden lg:flex items-center gap-6">
              <LanguageSwitcher variant="desktop" />
              <a
                href={`tel:${t('contact.phone.number')}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 text-white transition-all duration-300 group"
              >
                <Phone className="w-4 h-4 opacity-80 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm whitespace-nowrap" dir="ltr">{t('contact.phone.number')}</span>
              </a>
            </div>

            {/* Mobile Language Switcher */}
            <div className="lg:hidden z-50">
              <LanguageSwitcher variant="mobile-header" />
            </div>

          </div>
        </div>

        {/* Bottom Border on Scroll */}
        <motion.div
          animate={{ opacity: isScrolled ? 1 : 0 }}
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#EAEAEA]"
        />
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col pt-24 pb-8 px-6 lg:hidden"
            dir={dir}
          >
            <nav className="flex flex-col gap-1 overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <div className="border-b border-white/5 last:border-0">
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.path}
                        className="block py-4 text-2xl font-medium text-white active:text-accent w-full"
                        onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                      >
                        {t(item.key)}
                      </Link>
                      {item.hasDropdown && (
                        <button
                          className="p-4 text-white"
                          onClick={() => setMobileKitchensOpen(!mobileKitchensOpen)}
                        >
                          <ChevronDown className={`w-6 h-6 transition-transform ${mobileKitchensOpen ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>

                    {/* Mobile Submenu */}
                    {item.hasDropdown && (
                      <AnimatePresence>
                        {mobileKitchensOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-white/5 rounded-xl mb-4"
                          >
                            {kitchenCategories.map((cat) => (
                              <Link
                                key={cat.key}
                                to={cat.path}
                                className="block px-6 py-3 text-white/80 text-lg border-b border-white/5 last:border-0"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileKitchensOpen(false);
                                }}
                              >
                                {t(`nav.kitchens.${cat.key}`)}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Mobile Phone Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <a
                  href={`tel:${t('contact.phone.number')}`}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-white/10 text-white text-lg font-medium active:bg-white/5"
                >
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">{t('contact.phone.number')}</span>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

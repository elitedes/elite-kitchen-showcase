import { useState, useRef } from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'he', name: 'עברית', flag: '🇮🇱' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
] as const;

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile' | 'mobile-header';
}

const LanguageSwitcher = ({ variant = 'desktop' }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === language);

  if (variant === 'mobile') {
    return (
      <div className="flex items-center gap-2 w-full">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-3 border transition-all duration-200 ${language === lang.code
              ? 'bg-accent/10 border-accent/30 text-accent font-bold ring-1 ring-accent/20'
              : 'bg-header-foreground/5 border-transparent text-header-foreground/60 hover:bg-header-foreground/10'
              }`}
          >
            <span className="text-sm uppercase tracking-wide">{lang.name}</span>
          </button>
        ))}
      </div>
    );
  }

  // Mobile header: backdrop approach with ref-based click detection
  if (variant === 'mobile-header') {
    return (
      <div className="relative">
        <button
          className="flex items-center justify-center min-w-[44px] min-h-[44px] -m-2 text-current relative z-[101]"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setMobileOpen(!mobileOpen);
          }}
          aria-label="Switch language"
          aria-expanded={mobileOpen}
          type="button"
        >
          <Globe className="w-6 h-6" />
        </button>

        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Backdrop: only closes if click is OUTSIDE dropdown */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-transparent"
                onClick={(e) => {
                  // Only close if click was NOT inside the dropdown
                  if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                    setMobileOpen(false);
                  }
                }}
              />

              <motion.div
                ref={dropdownRef}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full end-0 mt-3 min-w-[160px] rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl p-1.5 text-white shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-[102] overflow-hidden"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setLanguage(lang.code);
                      setMobileOpen(false);
                    }}
                    className={`flex items-center justify-between py-3 px-4 w-full rounded-xl text-sm transition-all active:scale-95 ${language === lang.code
                        ? 'bg-white/10 text-accent font-semibold'
                        : 'text-white/80 hover:bg-white/5 active:bg-white/10'
                      }`}
                  >
                    <span>{lang.name}</span>
                    {language === lang.code && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Desktop: keep Radix DropdownMenu
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-2 transition-all duration-200 px-3 py-2 rounded-full hover:bg-black/5 border border-current/20 hover:border-current/40 group"
        >
          <Globe className="w-4 h-4 opacity-80 group-hover:opacity-100" />
          <span className="text-sm font-medium">{currentLang?.name}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px] z-[60]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="flex items-center justify-between cursor-pointer py-2.5"
          >
            <span className="flex items-center gap-2 text-sm">
              <span>{lang.name}</span>
            </span>
            {language === lang.code && <Check className="w-4 h-4 text-accent" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;

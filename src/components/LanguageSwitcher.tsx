import { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
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
  const panelRef = useRef<HTMLDivElement>(null);
  const justOpenedRef = useRef(false);

  const currentLang = languages.find(l => l.code === language);

  // Close panel when tapping outside — delayed registration to avoid catching the same tap
  useEffect(() => {
    if (!mobileOpen) return;

    const handleOutside = (e: Event) => {
      // Skip if we just opened — prevents same-tap closure
      if (justOpenedRef.current) {
        justOpenedRef.current = false;
        return;
      }
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };

    // Delay listener registration by one frame to prevent same-event closure
    const raf = requestAnimationFrame(() => {
      document.addEventListener('pointerdown', handleOutside, true);
    });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('pointerdown', handleOutside, true);
    };
  }, [mobileOpen]);

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

  // Mobile header: custom toggle panel — no Radix dropdown to avoid double-tap on touch
  if (variant === 'mobile-header') {
    return (
      <div className="relative" ref={panelRef}>
        <button
          className="flex items-center justify-center p-2 text-current relative z-10"
          onPointerDown={(e) => {
            e.stopPropagation();
            justOpenedRef.current = !mobileOpen;
            setMobileOpen(prev => !prev);
          }}
          aria-label="Switch language"
          aria-expanded={mobileOpen}
          type="button"
        >
          <Globe className="w-6 h-6" />
        </button>

        {mobileOpen && (
          <div
            className="absolute top-full end-0 mt-2 min-w-[160px] rounded-md border bg-popover p-1 text-popover-foreground shadow-md z-[60]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onPointerDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setLanguage(lang.code);
                  setMobileOpen(false);
                }}
                className="flex items-center justify-between py-2.5 px-2 w-full rounded-sm text-sm transition-colors hover:bg-accent hover:text-accent-foreground active:bg-accent/80"
              >
                <span className="flex items-center gap-2 text-sm">
                  <span>{lang.name}</span>
                </span>
                {language === lang.code && <Check className="w-4 h-4 text-accent" />}
              </button>
            ))}
          </div>
        )}
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

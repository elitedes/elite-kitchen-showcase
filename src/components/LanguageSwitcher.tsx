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
] as const;

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile' | 'mobile-header';
}

const LanguageSwitcher = ({ variant = 'desktop' }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();

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
            <span className="text-xl leading-none">{lang.flag}</span>
            <span className="text-sm uppercase tracking-wide">{lang.name}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={
            variant === 'mobile-header'
              ? "flex items-center justify-center p-2 text-header-foreground relative z-10"
              : "flex items-center gap-2 transition-all duration-200 px-3 py-2 rounded-full bg-header-foreground/10 hover:bg-header-foreground/20 text-header-foreground border border-header-foreground/20 hover:border-header-foreground/40"
          }
        >
          <Globe className={variant === 'mobile-header' ? "w-6 h-6" : "w-4 h-4"} />
          {variant !== 'mobile-header' && (
            <span className="text-sm font-medium">{currentLang?.flag} {currentLang?.name}</span>
          )}
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
              <span>{lang.flag}</span>
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

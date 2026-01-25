import { Globe, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'he', name: 'עברית', flag: '🇮🇱' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
] as const;

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile';
}

const LanguageSwitcher = ({ variant = 'desktop' }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();
  
  const currentLang = languages.find(l => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`
            flex items-center gap-2 transition-all duration-200
            ${variant === 'desktop' 
              ? 'px-3 py-2 rounded-full bg-header-foreground/10 hover:bg-header-foreground/20 text-header-foreground border border-header-foreground/20 hover:border-header-foreground/40' 
              : 'px-3 py-2 rounded-lg bg-header-foreground/10 text-header-foreground w-full justify-center'
            }
          `}
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{currentLang?.flag} {currentLang?.name}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span className="flex items-center gap-2">
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

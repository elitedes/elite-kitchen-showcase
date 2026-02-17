import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Language } from "@/lib/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const langLabels: Record<Language, string> = { he: "HE", ru: "RU", en: "EN" };

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const navLinks = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.features, href: "#features" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md bg-background/60 supports-[backdrop-filter]:bg-background/20"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="font-display text-xl font-bold tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
            <div className="w-4 h-4 bg-primary rounded-sm shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
          </div>
          <span className="text-foreground">Elite</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-shadow-sm transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors outline-none"
              >
                <Globe className="w-3.5 h-3.5" />
                {langLabels[lang]}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background/80 backdrop-blur-xl border-white/10">
              <DropdownMenuItem onClick={() => setLang("he")}>עברית (HE)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang("ru")}>Русский (RU)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang("en")}>English (EN)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary-foreground text-sm font-medium hover:bg-primary/20 hover:border-primary/40 transition-all shadow-[0_0_20px_-5px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_-5px_rgba(124,58,237,0.5)]"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2 hover:bg-white/5 rounded-lg transition-colors"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl"
        >
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors outline-none"
                  >
                    <Globe className="w-5 h-5" />
                    {langLabels[lang]}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-background/95 backdrop-blur-xl border-white/10">
                  <DropdownMenuItem onClick={() => setLang("he")}>עברית (HE)</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLang("ru")}>Русский (RU)</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLang("en")}>English (EN)</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-lg shadow-primary/25"
              >
                {t.nav.cta}
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;

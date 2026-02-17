import { useLanguage } from "@/hooks/useLanguage";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-background border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <a href="#" className="font-display text-2xl font-bold tracking-tight mb-6 inline-block">
              <span className="text-white">Elite</span> <span className="text-muted-foreground">Web Design</span>
            </a>
            <p className="text-muted-foreground max-w-sm text-lg leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">{t.footer.services}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">{t.footer.links.dev}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">{t.footer.links.uiux}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">{t.footer.links.opt}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">{t.footer.links.seo}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">{t.footer.company}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">{t.footer.links.about}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">{t.footer.links.careers}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">{t.footer.links.blog}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">{t.footer.links.contact}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Elite Web Design. {t.footer.rights}
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">{t.footer.links.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.links.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

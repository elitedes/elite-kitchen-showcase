import { useLanguage } from "@/hooks/useLanguage";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { InteractiveGrid } from "@/components/ui/interactive-grid";
import { FloatingCode } from "@/components/ui/floating-code";

const Hero = () => {
    const { t } = useLanguage();

    return (
        <div className="relative">
            {/* Interactive grid background */}
            <InteractiveGrid className="z-0" />

            {/* Floating code snippets */}
            <FloatingCode count={5} />

            <HeroGeometric
                badge={t.hero.badge}
                title1={t.hero.title1}
                title2={t.hero.title2}
                description={t.hero.description}
            >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <a href="#contact" className="px-8 py-4 bg-primary text-white text-lg font-medium rounded-2xl hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)]">
                        {t.hero.ctaPrimary}
                    </a>
                    <a href="#portfolio" className="px-8 py-4 bg-white/5 text-white text-lg font-medium rounded-2xl hover:bg-white/10 border border-white/10 transition-all backdrop-blur-sm">
                        {t.hero.ctaSecondary}
                    </a>
                </div>
            </HeroGeometric>
        </div>
    );
};

export default Hero;

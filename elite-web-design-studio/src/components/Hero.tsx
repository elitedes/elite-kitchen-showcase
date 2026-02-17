import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const { t } = useLanguage();

    // Parallax effects
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background "Nebula" Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />

            {/* Floating Orb / Planet Effect */}
            <motion.div
                style={{ y: y2 }}
                className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-accent/30 to-transparent blur-3xl"
            />

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-white/70">
                        {t.hero.badge}
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8"
                >
                    {t.hero.title1} <br className="md:hidden" />
                    <span className="text-gradient animate-shimmer bg-[length:200%_100%]">{t.hero.title2}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed"
                >
                    {t.hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#contact" className="px-8 py-4 bg-primary text-white text-lg font-medium rounded-2xl hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)]">
                        {t.hero.ctaPrimary}
                    </a>
                    <a href="#portfolio" className="px-8 py-4 bg-white/5 text-white text-lg font-medium rounded-2xl hover:bg-white/10 border border-white/10 transition-all backdrop-blur-sm">
                        {t.hero.ctaSecondary}
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-white/50 rounded-full"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;

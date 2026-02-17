import { motion } from "framer-motion";
import { Palette, Zap, Globe, Shield, Smartphone, Code } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const Features = () => {
    const { t } = useLanguage();

    const icons = [
        <Palette className="w-8 h-8 text-accent" />,
        <Zap className="w-8 h-8 text-yellow-400" />,
        <Globe className="w-8 h-8 text-blue-400" />,
        <Code className="w-8 h-8 text-green-400" />,
        <Smartphone className="w-8 h-8 text-pink-400" />,
        <Shield className="w-8 h-8 text-indigo-400" />,
    ];

    const gridClasses = [
        "md:col-span-2",
        "",
        "",
        "md:col-span-2",
        "",
        "",
    ];

    return (
        <section id="features" className="py-24 px-4 bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />

            <div className="container max-w-6xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-accent font-medium tracking-wider uppercase text-sm mb-4 block">
                            {t.features.label}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {t.features.title1} <br />
                            <span className="text-gradient">{t.features.title2}</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {t.features.subtitle}
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {t.features.items.map((feature, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className={`shimmer-card p-8 rounded-3xl glass-card hover:bg-white/10 transition-colors group relative overflow-hidden h-full ${gridClasses[i]}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit border border-white/10 group-hover:border-accent/30 transition-colors">
                                        {icons[i]}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

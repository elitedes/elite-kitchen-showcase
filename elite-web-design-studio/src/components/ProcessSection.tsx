import { Search, Palette, Code2, Rocket, Monitor, Gauge, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const stepIcons = [Search, Palette, Code2, Rocket];
const statIcons = [Monitor, BadgeCheck, Gauge];

const ProcessSection = () => {
    const { t } = useLanguage();

    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">{t.process.label}</p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold">
                            {t.process.title1} <span className="gradient-text">{t.process.title2}</span>
                        </h2>
                    </div>
                </ScrollReveal>

                {/* ── Horizontal Timeline ── */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Connector line */}
                    <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
                        {t.process.steps.map((step, i) => {
                            const Icon = stepIcons[i];
                            return (
                                <ScrollReveal key={i} delay={i * 0.15}>
                                    <div className="flex flex-col items-center text-center group">
                                        {/* Step circle */}
                                        <div className="relative mb-6">
                                            {/* Glow ring */}
                                            <div className="absolute inset-0 rounded-full bg-primary/20 blur-md scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            {/* Circle */}
                                            <div className="relative w-20 h-20 rounded-full border border-primary/30 bg-[#0c0c14] flex items-center justify-center group-hover:border-primary/60 transition-colors duration-300">
                                                <Icon className="w-8 h-8 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                                            </div>
                                            {/* Step number */}
                                            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary/90 flex items-center justify-center text-[10px] font-bold text-white">
                                                {i + 1}
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <h3 className="font-display text-lg font-semibold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                                            {step.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                                            {step.description}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>

                {/* ── Stats Bar ── */}
                <ScrollReveal delay={0.3}>
                    <div className="mt-20 max-w-4xl mx-auto">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 sm:divide-x divide-white/[0.08] py-6 px-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
                            {t.process.stats.map((stat, i) => {
                                const StatIcon = statIcons[i];
                                return (
                                    <div key={i} className="flex items-center gap-2.5 sm:px-8 first:sm:pl-0 last:sm:pr-0">
                                        <StatIcon className="w-4.5 h-4.5 text-primary flex-shrink-0" />
                                        <span className="text-sm font-medium text-white/70 tracking-wide">{stat}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default ProcessSection;

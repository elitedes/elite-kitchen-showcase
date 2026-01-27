import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Palette, Layers, Award, Home } from 'lucide-react';

const BenefitsSection = () => {
    const { t } = useLanguage();

    const benefits = [
        {
            icon: <Palette className="w-8 h-8" />,
            titleKey: 'benefits.custom.title',
            descKey: 'benefits.custom.desc',
        },
        {
            icon: <Layers className="w-8 h-8" />,
            titleKey: 'benefits.styles.title',
            descKey: 'benefits.styles.desc',
        },
        {
            icon: <Award className="w-8 h-8" />,
            titleKey: 'benefits.quality.title',
            descKey: 'benefits.quality.desc',
        },
        {
            icon: <Home className="w-8 h-8" />,
            titleKey: 'benefits.local.title',
            descKey: 'benefits.local.desc',
        },
    ];

    return (
        <section className="py-24 bg-secondary/30 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title mb-4">{t('benefits.title')}</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 bg-background rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-charcoal">
                                {t(benefit.titleKey)}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {t(benefit.descKey)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;

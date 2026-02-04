import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const materials = [
    {
        id: 'white',
        nameKey: 'fitting.btn.white',
        image: '/interactive-fitting/white-nano.jpg',
        titleKey: 'fitting.white.title',
        descKey: 'fitting.white.desc',
        color: '#FFFFFF'
    },
    {
        id: 'graphite',
        nameKey: 'fitting.btn.graphite',
        image: '/interactive-fitting/graphite.jpg',
        titleKey: 'fitting.graphite.title',
        descKey: 'fitting.graphite.desc',
        color: '#4B4B4B'
    },
    {
        id: 'oak',
        nameKey: 'fitting.btn.oak',
        image: '/interactive-fitting/oak.jpg',
        titleKey: 'fitting.oak.title',
        descKey: 'fitting.oak.desc',
        color: '#D4B996'
    },
    {
        id: 'concrete',
        nameKey: 'fitting.btn.concrete',
        image: '/interactive-fitting/concrete.jpg',
        titleKey: 'fitting.concrete.title',
        descKey: 'fitting.concrete.desc',
        color: '#7F7F7F'
    },
    {
        id: 'beige',
        nameKey: 'fitting.btn.beige',
        image: '/interactive-fitting/beige.jpg',
        titleKey: 'fitting.beige.title',
        descKey: 'fitting.beige.desc',
        color: '#E3DAC9'
    }
];

const InteractiveFitting = () => {
    const { t, dir } = useLanguage();
    const [selected, setSelected] = useState(materials[0]);

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title mb-4">{t('fitting.title')}</h2>
                    <p className="decorative-text uppercase tracking-widest text-sm opacity-50">
                        {t('fitting.subtitle')}
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left: Buttons & Text */}
                    <div className="lg:w-1/3 order-2 lg:order-1">
                        <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                            {materials.map((mat) => (
                                <button
                                    key={mat.id}
                                    onClick={() => setSelected(mat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selected.id === mat.id
                                        ? 'bg-primary text-white border-primary shadow-lg scale-105'
                                        : 'bg-white/10 backdrop-blur-md border-white/20 text-charcoal/70 hover:bg-white/20'
                                        }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <span
                                            className="w-3 h-3 rounded-full border border-gray-200"
                                            style={{ backgroundColor: mat.color }}
                                        />
                                        {t(mat.nameKey)}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="min-h-[150px] bg-secondary/20 p-8 rounded-3xl border border-primary/10 backdrop-blur-sm relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selected.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h3 className="text-2xl font-bold font-playfair mb-4 text-charcoal leading-tight">
                                        {t(selected.titleKey)}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                        {t(selected.descKey)}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="lg:w-2/3 order-1 lg:order-2 w-full">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={selected.id}
                                    src={selected.image}
                                    alt={t(selected.nameKey)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveFitting;

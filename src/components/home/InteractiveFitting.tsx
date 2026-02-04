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
    const { t } = useLanguage();
    const [selectedId, setSelectedId] = useState(materials[0].id);
    const [isFlashing, setIsFlashing] = useState(false);

    const selected = materials.find(m => m.id === selectedId) || materials[0];

    const handleSelect = (id: string) => {
        if (id === selectedId) return;
        setIsFlashing(true);
        setSelectedId(id);
        setTimeout(() => setIsFlashing(false), 150);
    };

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
                                    onClick={() => handleSelect(mat.id)}
                                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 border backdrop-blur-md ${selectedId === mat.id
                                        ? 'bg-primary/80 text-white border-white/40 shadow-xl scale-105'
                                        : 'bg-white/5 border-white/10 text-charcoal/70 hover:bg-white/20'
                                        }`}
                                    style={{
                                        boxShadow: selectedId === mat.id ? `0 0 20px ${mat.color}44` : 'none'
                                    }}
                                >
                                    <span className="flex items-center gap-2">
                                        <span
                                            className="w-3 h-3 rounded-full border border-white/30"
                                            style={{ backgroundColor: mat.color }}
                                        />
                                        {t(mat.nameKey)}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="min-h-[160px] bg-secondary/10 p-8 rounded-3xl border border-white/20 backdrop-blur-xl shadow-inner relative overflow-hidden group">
                            {/* Instant text update with a small subtle pop */}
                            <div className={`transition-all duration-150 ${isFlashing ? 'opacity-50 translate-y-1 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
                                <h3 className="text-2xl font-bold font-playfair mb-4 text-charcoal leading-tight">
                                    {t(selected.titleKey)}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {t(selected.descKey)}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Stacked Images (Preloaded) */}
                    <div className="lg:w-2/3 order-1 lg:order-2 w-full">
                        <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-150 ${isFlashing ? 'brightness-[1.5] scale-[1.01]' : 'brightness-100'}`}>
                            {materials.map((mat) => (
                                <img
                                    key={mat.id}
                                    src={mat.image}
                                    alt={t(mat.nameKey)}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${selectedId === mat.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                    loading="eager"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveFitting;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Info } from 'lucide-react';

const InstallationDiagram = () => {
    const { t } = useLanguage();
    const [activePoint, setActivePoint] = useState<number | null>(null);

    const points = [
        {
            id: 1,
            x: '15%',
            y: '30%',
            label: t('install.point.hood'),
            desc: t('install.point.hood.desc')
        },
        {
            id: 2,
            x: '50%',
            y: '45%',
            label: t('install.point.counter'),
            desc: t('install.point.counter.desc')
        },
        {
            id: 3,
            x: '85%',
            y: '70%',
            label: t('install.point.dishwasher'),
            desc: t('install.point.dishwasher.desc')
        },
        {
            id: 4,
            x: '25%',
            y: '70%',
            label: t('install.point.oven'),
            desc: t('install.point.oven.desc')
        },
        {
            id: 5,
            x: '90%',
            y: '20%',
            label: t('install.point.fridge'),
            desc: t('install.point.fridge.desc')
        }
    ];

    return (
        <div className="relative w-full max-w-4xl mx-auto bg-card rounded-2xl shadow-xl border border-border/50">
            <div className="aspect-[16/9] relative bg-slate-50 dark:bg-slate-900/50 rounded-t-2xl">
                {/* SVG Drawing of Kitchen Wall */}
                <svg
                    viewBox="0 0 1000 562"
                    className="w-full h-full stroke-slate-300 dark:stroke-slate-700 pointer-events-none"
                    strokeWidth="2"
                    fill="none"
                >
                    {/* Floor Line */}
                    <line x1="0" y1="500" x2="1000" y2="500" strokeWidth="4" />

                    {/* Base Cabinets Outline */}
                    <rect x="50" y="300" width="900" height="200" />
                    <line x1="300" y1="300" x2="300" y2="500" />
                    <line x1="600" y1="300" x2="600" y2="500" />

                    {/* Upper Cabinets Outline */}
                    <rect x="50" y="50" width="900" height="150" />
                    <line x1="350" y1="50" x2="350" y2="200" />
                    <line x1="650" y1="50" x2="650" y2="200" />

                    {/* Countertop */}
                    <rect x="40" y="280" width="920" height="20" fill="currentColor" className="text-slate-200 dark:text-slate-800" />

                    {/* Fridge Zone */}
                    <rect x="850" y="50" width="120" height="450" strokeDasharray="5,5" />

                    {/* Dimensions Lines */}
                    <line x1="0" y1="540" x2="1000" y2="540" strokeDasharray="4,4" className="stroke-accent/50" />
                </svg>

                {/* Interactive Points */}
                {points.map((point) => (
                    <div
                        key={point.id}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ left: point.x, top: point.y }}
                        onMouseEnter={() => setActivePoint(point.id)}
                        onMouseLeave={() => setActivePoint(null)}
                    >
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-colors ${activePoint === point.id
                                ? 'bg-accent text-white ring-4 ring-accent/20'
                                : 'bg-white text-accent border border-accent/20'
                                }`}
                        >
                            <Info className="w-5 h-5" />
                        </motion.button>
                        <div className={`absolute inset-0 rounded-full animate-ping opacity-20 bg-accent ${activePoint === point.id ? 'hidden' : 'block'}`} />

                        {/* Tooltip */}
                        <AnimatePresence>
                            {activePoint === point.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                    className={`absolute bottom-full mb-4 w-64 bg-charcoal text-white p-4 rounded-xl shadow-2xl z-50 pointer-events-none 
                                        ${parseInt(point.x) > 50 ? 'right-0 mr-[-20px]' : 'left-1/2 -translate-x-1/2'}`}
                                >
                                    <h4 className="font-bold text-accent mb-1">{point.label}</h4>
                                    <p className="text-sm text-gray-300 leading-snug">{point.desc}</p>

                                    {/* Arrow */}
                                    <div className={`absolute top-full border-8 border-transparent border-t-charcoal 
                                        ${parseInt(point.x) > 50 ? 'right-4' : 'left-1/2 -translate-x-1/2'}`}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            <div className="p-4 bg-muted/30 border-t border-border/50 text-center text-sm text-muted-foreground">
                {t('install.diagram.footer')}
            </div>
        </div>
    );
};

export default InstallationDiagram;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FAQItem {
    question: { he: string; ru: string; en: string };
    answer: { he: string; ru: string; en: string };
}

interface FAQProps {
    items: FAQItem[];
}

const FAQ = ({ items }: FAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { language, dir } = useLanguage();

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    // Build FAQPage JSON-LD — always use Hebrew for the primary schema since the site targets Israel
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question.he,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer.he,
            },
        })),
    };

    return (
        <section className="py-20 bg-[#FAF8F5]" dir={dir}>
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            <div className="container mx-auto px-4 max-w-4xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <div className="inline-block p-1 bg-accent/20 rounded-full mb-4">
                        <div className="bg-accent h-1.5 w-12 rounded-full" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
                        {language === 'he'
                            ? 'שאלות נפוצות'
                            : language === 'ru'
                                ? 'Часто задаваемые вопросы'
                                : 'Frequently Asked Questions'}
                    </h2>
                    <p className="font-playfair italic text-lg text-charcoal/60">
                        FAQ
                    </p>
                </motion.div>

                {/* Accordion */}
                <dl className="space-y-3">
                    {items.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: i * 0.06 }}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                                        ? 'bg-white shadow-lg border-accent/30'
                                        : 'bg-white/60 shadow-sm border-transparent hover:border-accent/15 hover:shadow-md'
                                    }`}
                            >
                                <dt>
                                    <button
                                        type="button"
                                        onClick={() => toggle(i)}
                                        aria-expanded={isOpen}
                                        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start cursor-pointer group"
                                    >
                                        <span
                                            className={`text-base md:text-lg font-semibold transition-colors duration-200 ${isOpen ? 'text-charcoal' : 'text-charcoal/80 group-hover:text-charcoal'
                                                }`}
                                        >
                                            {item.question[language]}
                                        </span>
                                        <motion.span
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.25 }}
                                            className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${isOpen ? 'bg-accent text-white' : 'bg-accent/10 text-accent'
                                                }`}
                                        >
                                            <ChevronDown className="w-4 h-4" />
                                        </motion.span>
                                    </button>
                                </dt>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <dd>
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 pt-0">
                                                    <div className="h-px bg-accent/10 mb-4" />
                                                    <p className="text-charcoal/70 leading-relaxed text-sm md:text-base">
                                                        {item.answer[language]}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </dd>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </dl>
            </div>
        </section>
    );
};

export default FAQ;

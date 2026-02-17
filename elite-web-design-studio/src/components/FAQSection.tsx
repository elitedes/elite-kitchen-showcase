import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const FAQSection = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="py-28 relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
                            {t.faq.label}
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold">
                            {t.faq.heading}
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="max-w-3xl mx-auto space-y-3">
                    {t.faq.items.map((item: { q: string; a: string }, i: number) => {
                        const isOpen = openIndex === i;

                        return (
                            <ScrollReveal key={i} delay={i * 0.06}>
                                <div
                                    className={`
                    rounded-xl border transition-all duration-300
                    ${isOpen
                                            ? "border-primary/30 bg-slate-900/60 shadow-[0_0_25px_rgba(168,85,247,0.08)]"
                                            : "border-white/[0.06] bg-slate-900/30 hover:border-white/10 hover:bg-slate-900/50"
                                        }
                  `}
                                >
                                    {/* Question bar */}
                                    <button
                                        onClick={() => toggle(i)}
                                        className="w-full flex items-center gap-4 px-6 py-5 cursor-pointer text-start"
                                        dir={t.dir}
                                    >
                                        {/* Plus/Minus indicator */}
                                        <motion.div
                                            animate={{ rotate: isOpen ? 45 : 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className={`
                        flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center
                        transition-colors duration-300
                        ${isOpen
                                                    ? "bg-primary/20 text-primary shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                                                    : "bg-white/[0.05] text-white/30"
                                                }
                      `}
                                        >
                                            <Plus className="w-4 h-4" />
                                        </motion.div>

                                        <span
                                            className={`
                        flex-1 font-medium text-[15px] transition-colors duration-300
                        ${isOpen ? "text-white" : "text-white/70"}
                      `}
                                        >
                                            {item.q}
                                        </span>
                                    </button>

                                    {/* Answer panel */}
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-5" dir={t.dir}>
                                                    {/* Offset to align with text above (icon width + gap) */}
                                                    <div className={t.dir === "rtl" ? "pr-11" : "pl-11"}>
                                                        <p className="text-sm leading-relaxed text-white/50">
                                                            {item.a}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;

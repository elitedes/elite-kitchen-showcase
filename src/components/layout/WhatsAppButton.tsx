import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppButton = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setIsVisible(scrollPercentage > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isVisible && showTooltip) {
            const timer = setTimeout(() => {
                setShowTooltip(false);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, showTooltip]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 md:bottom-5 md:right-5 z-[9999] flex flex-col items-end gap-2">
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 20 }}
                        className="relative bg-white/80 backdrop-blur-md text-charcoal px-3 py-1.5 md:px-4 md:py-2 rounded-xl shadow-lg border border-white/30 text-xs md:text-sm font-medium mb-1 mr-2"
                    >
                        <button
                            onClick={() => setShowTooltip(false)}
                            className="absolute -top-2 -left-2 bg-white/90 backdrop-blur-sm rounded-full p-0.5 shadow-sm hover:bg-white transition-colors border border-gray-100"
                        >
                            <X className="w-3 h-3" />
                        </button>
                        {t('whatsapp.tooltip')}
                        {/* Tooltip triangle */}
                        <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white/80 backdrop-blur-md"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            <a
                href="https://wa.me/972086711767"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#25D366]/70 backdrop-blur-md text-white rounded-full shadow-2xl transition-transform hover:scale-110 hover:bg-[#25D366]/90 active:scale-95 animate-pulse-scale border border-white/20"
            >
                <div className="animate-sway">
                    <MessageCircle className="w-6 h-6 md:w-10 md:h-10 fill-current" />
                </div>
            </a>
        </div>
    );
};

export default WhatsAppButton;

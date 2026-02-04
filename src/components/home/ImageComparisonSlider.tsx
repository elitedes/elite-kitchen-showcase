
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight, ChevronsRight, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImageComparisonSlider = () => {
    const { t, dir } = useLanguage();
    const [isResizing, setIsResizing] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const animationPlayed = useRef(false);

    // Intersection Observer for one-time animation
    useEffect(() => {
        const hasPlayed = sessionStorage.getItem('comparison_animation_played');
        if (hasPlayed) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !animationPlayed.current) {
                    animationPlayed.current = true;
                    sessionStorage.setItem('comparison_animation_played', 'true');

                    // Smooth move to 30% and back to 50%
                    // We'll use a simple interval or rely on CSS transitions for this "automatic" part
                    // but since we want it "smooth and pliant", let's use a small timeout sequence
                    // that updates the state, or we could use framer-motion's animate function.

                    setTimeout(() => setSliderPosition(30), 500);
                    setTimeout(() => setSliderPosition(50), 1200);
                }
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleMouseDown = () => setIsResizing(true);
    const handleMouseUp = () => setIsResizing(false);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const width = rect.width;

        // Constrain between 0% and 100%
        const percentage = Math.max(0, Math.min(100, (x / width) * 100));
        setSliderPosition(percentage);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isResizing) handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    // Global event listener for mouse and touch to stop dragging even if leaves container
    useEffect(() => {
        const handleGlobalUp = () => setIsResizing(false);
        const handleGlobalMove = (e: MouseEvent | TouchEvent) => {
            if (!isResizing) return;

            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            handleMove(clientX);
        };

        window.addEventListener('mouseup', handleGlobalUp);
        window.addEventListener('mousemove', handleGlobalMove);
        window.addEventListener('touchend', handleGlobalUp);
        window.addEventListener('touchmove', handleGlobalMove, { passive: false });

        return () => {
            window.removeEventListener('mouseup', handleGlobalUp);
            window.removeEventListener('mousemove', handleGlobalMove);
            window.removeEventListener('touchend', handleGlobalUp);
            window.removeEventListener('touchmove', handleGlobalMove);
        };
    }, [isResizing]);

    return (
        <section className="py-20 bg-background overflow-hidden select-none">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title mb-2">
                        {t('comparison.title')}
                    </h2>
                    <p className="decorative-text">
                        Interior transformation in one click
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {/* Slider Container - FORCED LTR to keep math simple and consistent across languages */}
                    <div
                        ref={containerRef}
                        dir="ltr"
                        className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl cursor-col-resize touch-none"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        onMouseMove={handleMouseMove}
                        role="slider"
                        aria-valuenow={sliderPosition}
                    >
                        {/* After Image (Right Side / Background) */}
                        <div className="absolute inset-0">
                            <img
                                src="/comparison/after.jpg"
                                alt="After"
                                className="w-full h-full object-cover select-none pointer-events-none"
                                draggable="false"
                            />
                            {/* In LTR, left-8 is left, right-8 is right. Force consistent labels. */}
                            <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full font-bold z-10 pointer-events-none">
                                {t('comparison.label.after')}
                            </div>
                        </div>

                        {/* Before Image (Left Side / Clipped) */}
                        <div
                            className="absolute inset-0 overflow-hidden transition-[width] duration-700 ease-out lg:duration-1000"
                            style={{
                                width: `${sliderPosition}%`,
                                transition: isResizing || isHovering ? 'none' : undefined
                            }}
                        >
                            <img
                                src="/comparison/before.png"
                                alt="Before"
                                className="absolute inset-0 w-full h-full object-cover max-w-none select-none pointer-events-none"
                                style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}
                                draggable="false"
                            />
                            <div className="absolute top-8 left-8 bg-white/80 backdrop-blur-md text-black px-4 py-2 rounded-full font-bold z-10 pointer-events-none">
                                {t('comparison.label.before')}
                            </div>
                        </div>

                        {/* Slider Handle */}
                        <div
                            className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-[left] duration-700 ease-out lg:duration-1000"
                            style={{
                                left: `${sliderPosition}%`,
                                transition: isResizing || isHovering ? 'none' : undefined
                            }}
                            onMouseDown={handleMouseDown}
                            onTouchStart={() => setIsResizing(true)}
                        >
                            {/* Custom Handle Circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg border-4 border-white transition-transform hover:scale-110 active:scale-95">
                                <div className="flex text-white">
                                    <ChevronLeft className="w-4 h-4" />
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-12 text-center">
                        <Link
                            to="/calculator"
                            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white text-lg md:text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
                        >
                            <span>{t('comparison.btn.calc')}</span>
                            <Calculator className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageComparisonSlider;

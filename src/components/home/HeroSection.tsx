import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage1 from '@/assets/hero-kitchen-1.jpg';
import heroImage2 from '@/assets/hero-kitchen-2.jpg';

const heroSlides = [
  { image: heroImage1 },
  { image: heroImage2 },
];

const HeroSection = () => {
  const { t, dir } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[currentSlide].image}
            alt="Elite Design Kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center" dir={dir}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center text-primary-foreground"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-2">
              {t('hero.subtitle')}
            </p>
            <p className="font-playfair italic text-xl md:text-2xl text-primary-foreground/80 mb-8">
              {t('hero.tagline')}
            </p>
            
            {/* Promo Banner */}
            <div className="inline-block bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 rounded-lg p-6 mb-8">
              <p className="text-xl md:text-2xl font-semibold mb-2">
                {t('hero.promo')}
              </p>
              <p className="text-3xl md:text-4xl font-bold text-accent">
                {t('hero.discount')}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="btn-hero">
                {t('hero.cta.appointment')}
              </a>
              <a href="#contact" className="btn-outline-hero">
                {t('hero.cta.details')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute start-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 hover:bg-primary-foreground/40 backdrop-blur-sm text-primary-foreground p-3 rounded-full transition-all"
      >
        {dir === 'rtl' ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
      </button>
      <button
        onClick={nextSlide}
        className="absolute end-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 hover:bg-primary-foreground/40 backdrop-blur-sm text-primary-foreground p-3 rounded-full transition-all"
      >
        {dir === 'rtl' ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-primary-foreground scale-125'
                : 'bg-primary-foreground/50 hover:bg-primary-foreground/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

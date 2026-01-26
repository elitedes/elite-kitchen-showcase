import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage1 from '@/assets/hero-new-1.jpg';
import heroImage2 from '@/assets/hero-new-2.jpg';
import heroImage3 from '@/assets/hero-new-3.jpg';
import heroImage4 from '@/assets/hero-new-4.jpg';

const heroSlides = [
  { image: heroImage1 },
  { image: heroImage2 },
  { image: heroImage3 },
  { image: heroImage4 },
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
      {/* Image Slideshow Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`image-${currentSlide}`}
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
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-2xl md:text-3xl font-light mb-2 drop-shadow-md"
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="font-playfair italic text-xl md:text-2xl text-primary-foreground/80 mb-8 drop-shadow-md"
            >
              {t('hero.tagline')}
            </motion.p>

            {/* Promo Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="inline-block bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/30 rounded-xl p-6 mb-8 shadow-2xl"
            >
              <p className="text-xl md:text-2xl font-semibold mb-2">
                {t('hero.promo')}
              </p>
              <p className="text-3xl md:text-4xl font-bold text-accent drop-shadow-lg">
                {t('hero.discount')}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="#contact" className="btn-hero">
                {t('hero.cta.appointment')}
              </a>
              <a href="#contact" className="btn-outline-hero">
                {t('hero.cta.details')}
              </a>
            </motion.div>
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
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
              ? 'bg-primary-foreground scale-125'
              : 'bg-primary-foreground/50 hover:bg-primary-foreground/70'
              }`}
            title={`Image ${index + 1}`}
          />
        ))}
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-primary-foreground/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

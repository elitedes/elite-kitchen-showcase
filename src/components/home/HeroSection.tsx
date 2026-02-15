import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import CalculatorModal from '@/components/calculator/CalculatorModal';

const HeroSection = () => {
  const { t, dir } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden flex items-center justify-center" aria-label="Hero">
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay={typeof navigator !== 'undefined' && 'connection' in navigator && (navigator as any).connection?.saveData ? false : true}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero-poster.png"
        >
          <source src="/elite_design_kitchens.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20" dir={dir}>
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
            className="font-playfair italic text-xl md:text-2xl text-primary-foreground/80 mb-10 drop-shadow-md"
          >
            {t('hero.tagline')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ backgroundColor: "rgba(44, 21, 51, 0.8)", boxShadow: "0 15px 30px rgba(0,0,0,0.4)", y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="text-white px-8 py-4 rounded-[14px] font-playfair font-semibold text-lg md:text-xl transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.3)] min-w-[200px] backdrop-blur-md border border-white/10"
              style={{
                backgroundColor: "rgba(62, 31, 71, 0.7)",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {t('hero.cta.main')}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <CalculatorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
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

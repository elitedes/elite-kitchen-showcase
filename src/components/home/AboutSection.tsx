import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="decorative-text mb-8">{t('about.decorative')}</p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion } from 'framer-motion';
import { Diamond, Layers, PenTool, UserCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const WhyUsSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Diamond,
      titleKey: 'whyus.experience.title',
      descKey: 'whyus.experience.desc',
    },
    {
      icon: PenTool,
      titleKey: 'whyus.designer.title',
      descKey: 'whyus.designer.desc',
    },
    {
      icon: Layers,
      titleKey: 'whyus.products.title',
      descKey: 'whyus.products.desc',
    },
    {
      icon: UserCheck,
      titleKey: 'whyus.personal.title',
      descKey: 'whyus.personal.desc',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted via-background to-muted opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">{t('whyus.title')}</h2>
          <p className="decorative-text">{t('whyus.decorative')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {t(feature.titleKey)}
              </h3>
              <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(feature.descKey)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            ✦ {t('whyus.cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;

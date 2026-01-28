import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, Shield, Settings, Heart } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      titleKey: 'about.benefits.1.title',
      descKey: 'about.benefits.1.desc',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      titleKey: 'about.benefits.2.title',
      descKey: 'about.benefits.2.desc',
    },
    {
      icon: <Settings className="w-6 h-6" />,
      titleKey: 'about.benefits.3.title',
      descKey: 'about.benefits.3.desc',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      titleKey: 'about.benefits.4.title',
      descKey: 'about.benefits.4.desc',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Main Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="section-title mb-2 text-start">{t('about.title')}</h2>
            <p className="decorative-text mb-8">{t('about.decorative')}</p>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {t('about.description')}
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 bg-secondary/20 p-8 lg:p-12 rounded-3xl border border-primary/10 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-8 text-charcoal flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              {t('about.benefits.title')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-charcoal">
                    {t(benefit.titleKey)}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(benefit.descKey)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import step1Img from '@/assets/process-step-1.png';
import step2Img from '@/assets/process-step-2.png';
import step3Img from '@/assets/process-step-3.jpg';
import step4Img from '@/assets/process-step-4.png';

const WhyUsSection = () => {
  const { t, dir } = useLanguage();

  const steps = [
    {
      image: step3Img,
      titleKey: 'process.step1.title',
      descKey: 'process.step1.desc',
      number: 1
    },
    {
      image: step1Img,
      titleKey: 'process.step2.title',
      descKey: 'process.step2.desc',
      number: 2
    },
    {
      image: step2Img,
      titleKey: 'process.step3.title',
      descKey: 'process.step3.desc',
      number: 3
    },
    {
      image: step4Img,
      titleKey: 'process.step4.title',
      descKey: 'process.step4.desc',
      number: 4
    },
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-video rounded-lg overflow-hidden mb-6 shadow-md">
                <img
                  src={step.image}
                  alt={t(step.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Step Badge */}
                <div className="absolute top-0 end-0 bg-charcoal/80 backdrop-blur-sm text-white px-4 py-2 flex flex-col items-center">
                  <span className="text-xl font-bold leading-none">{step.number}</span>
                  <span className="text-[10px] uppercase tracking-wider">{t('process.step.label')}</span>
                </div>
              </div>

              {/* Content */}
              <div className="px-1">
                <h3 className="text-lg font-bold mb-3 uppercase tracking-tight text-primary">
                  {t(step.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t(step.descKey)}
                </p>
                <div className="mt-auto">
                  <ArrowRight className={`w-4 h-4 text-muted-foreground/40 transition-transform ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

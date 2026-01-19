import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';

const Installation = () => {
  const { t, language } = useLanguage();

  const steps = language === 'he' ? [
    'פינוי המטבח הישן והסרת כל הציוד',
    'וידוא חיבורי מים, חשמל וגז תקינים',
    'הכנת הקירות והרצפה',
    'וידוא גישה נוחה לצוות ההתקנה',
    'הכנת מקום אחסון זמני לציוד',
  ] : [
    'Освобождение старой кухни и удаление всего оборудования',
    'Проверка подключений воды, электричества и газа',
    'Подготовка стен и пола',
    'Обеспечение удобного доступа для команды установки',
    'Подготовка места для временного хранения оборудования',
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-header py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-header-foreground mb-4">
              {t('page.installation.title')}
            </h1>
            <p className="font-playfair italic text-xl text-header-foreground/80">
              Installation Preparation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-8 text-center">
                  {language === 'he' ? 'רשימת הכנות לפני התקנת המטבח' : 'Список подготовки перед установкой кухни'}
                </h2>
                
                <ul className="space-y-6">
                  {steps.map((step, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-lg">{step}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-10 text-center">
                  <a href="/contact" className="btn-primary">
                    {t('hero.cta.appointment')}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Installation;

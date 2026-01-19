import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSection from '@/components/home/ContactSection';

const Promotions = () => {
  const { t, language } = useLanguage();

  const promotions = [
    {
      title: language === 'he' ? '20% הנחה על כל המטבחים' : 'Скидка 20% на все кухни',
      desc: language === 'he' ? 'מבצע מיוחד לחודש זה בלבד' : 'Специальное предложение только в этом месяце',
    },
    {
      title: language === 'he' ? 'משלוח והתקנה חינם' : 'Бесплатная доставка и установка',
      desc: language === 'he' ? 'על הזמנות מעל ₪50,000' : 'На заказы от ₪50,000',
    },
    {
      title: language === 'he' ? 'ייעוץ עיצוב חינם' : 'Бесплатная консультация дизайнера',
      desc: language === 'he' ? 'מעצב/ת עד הבית בחינם' : 'Дизайнер к вам домой бесплатно',
    },
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
              {t('page.promotions.title')}
            </h1>
            <p className="font-playfair italic text-xl text-header-foreground/80">
              Special Offers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-primary">%</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{promo.title}</h3>
                <p className="text-muted-foreground">{promo.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default Promotions;

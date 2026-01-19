import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSection from '@/components/home/ContactSection';
import heroKitchen from '@/assets/hero-kitchen-2.jpg';

const Showroom = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={heroKitchen}
          alt="Showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              {t('page.showroom.title')}
            </h1>
            <p className="font-playfair italic text-xl text-primary-foreground/80">
              Showroom
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t('page.showroom.desc')}
              </p>
              
              <div className="bg-card p-8 shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Elite Design kitchens & more</h3>
                <p className="text-muted-foreground mb-2">{t('contact.address')}</p>
                <p className="text-muted-foreground mb-6">{t('contact.phone.number')}</p>
                <a href="#contact" className="btn-primary">
                  {t('hero.cta.appointment')}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default Showroom;

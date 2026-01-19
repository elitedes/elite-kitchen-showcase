import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSection from '@/components/home/ContactSection';

const About = () => {
  const { t } = useLanguage();

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
              {t('page.about.title')}
            </h1>
            <p className="font-playfair italic text-xl text-header-foreground/80">
              {t('about.decorative')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg mx-auto text-center"
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t('page.about.content')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default About;

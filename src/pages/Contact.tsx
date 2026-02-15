import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSection from '@/components/home/ContactSection';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEO
        title="צור קשר | Elite Design - ייעוץ חינם לעיצוב מטבחים וארונות"
        description="צרו קשר עם Elite Design לייעוץ חינם בנושא מטבחים, ארונות ונגרות בהתאמה אישית. טלפון, וואטסאפ או השאירו פרטים ונחזור אליכם."
        canonical="/contact"
      />
      {/* Hero Banner */}
      <section className="bg-header pt-32 md:pt-40 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-header-foreground mb-4">
              {t('contact.title')}
            </h1>
            <p className="font-playfair italic text-xl text-header-foreground/80">
              {t('nav.contact')}
            </p>
          </motion.div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: t('nav.contact'), path: '/contact', isCurrent: true }]} />

      <ContactSection />
    </Layout>
  );
};

export default Contact;

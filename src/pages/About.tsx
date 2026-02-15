import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSection from '@/components/home/ContactSection';
import StatCounter from '@/components/common/StatCounter';
import { Award, CheckCircle2, Users, Briefcase, History, Quote, MousePointer2, Hammer, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhyUsSection from '@/components/home/WhyUsSection';

const About = () => {
  const { t, dir } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Layout>
      <SEO
        title="אודות Elite Design | נגרייה עם 20+ שנות ניסיון"
        description="נגריית Elite Design - מעל 20 שנות ניסיון בייצור מטבחים, ארונות ורהיטים בהתאמה אישית. מעל 1,000 פרויקטים מוצלחים ברחבי הארץ."
        canonical="/about"
      />
      {/* Hero Banner - Elite Style */}
      <section className="relative bg-header text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heebo mb-6 tracking-tight">
              {t('page.about.title')}
            </h1>
            <p className="font-playfair italic text-lg md:text-xl text-header-foreground/80 max-w-3xl mx-auto">
              {t('about.decorative')}
            </p>
          </motion.div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: t('nav.about'), path: '/about', isCurrent: true }]} />

      {/* Block 1: Philosophy (Quote) */}
      <section className="py-24 bg-background relative z-20 -mt-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto glass-card-light p-12 md:p-20 text-center relative overflow-hidden"
          >
            <Quote className="w-16 h-16 text-muted-gold/20 absolute top-8 left-8" />
            <h2 className="text-2xl md:text-4xl font-playfair italic text-charcoal leading-snug mb-0 relative z-10">
              {t('about.philosophy')}
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Block 2: About (SEO) & Stats Bento */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* SEO Content Card */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-12 glass-card p-10 md:p-16 mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="status-heading text-muted-gold text-lg mb-4">Elite Design</h3>
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 leading-tight">
                    {t('about.title')}
                  </h2>
                </div>
                <div className="text-content text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
                  {t('page.about.content')}
                </div>
              </div>
            </motion.div>

            {/* Stats Items */}
            <motion.div
              className="lg:col-span-4 bg-muted-gold text-white rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center shadow-gold transition-transform hover:scale-[1.02]"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <History className="w-12 h-12 mb-6 opacity-80" />
              <div className="text-7xl font-black mb-2 flex items-center tracking-tighter">
                <StatCounter end={20} suffix={t('about.years.suffix')} />
              </div>
              <p className="text-xl font-bold uppercase tracking-widest opacity-90">
                {t('about.benefits.1.title')}
              </p>
            </motion.div>

            <motion.div
              className="lg:col-span-4 rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px]"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src="/interactive-fitting/oak.jpg" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" alt="Excellence" loading="lazy" decoding="async" />
            </motion.div>

            <motion.div
              className="lg:col-span-4 bg-charcoal text-white rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center group"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Briefcase className="w-12 h-12 mb-6 text-muted-gold opacity-80" />
              <div className="text-7xl font-black mb-2 group-hover:text-muted-gold transition-colors tracking-tighter">
                <StatCounter end={1000} suffix="+" />
              </div>
              <p className="text-xl font-bold uppercase tracking-widest opacity-60 mb-6">
                {t('nav.projects')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" className="rounded-full border-white/20 hover:bg-white/10 text-white">
                  <Link to="/projects">{t('nav.projects')}</Link>
                </Button>
                <Button asChild className="rounded-full bg-gold hover:bg-gold/90 text-charcoal font-bold">
                  <Link to="/kitchens">{t('nav.kitchens')}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Block 3: Why Choose Us (List) */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 px-4">
            <h2 className="section-title text-charcoal mb-6 tracking-tight">
              {t('benefits.title')}
            </h2>
            <div className="w-24 h-2 bg-muted-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <MousePointer2 />, title: 'about.benefits.1.title', desc: 'about.benefits.1.desc' },
              { icon: <Zap />, title: 'about.benefits.2.title', desc: 'about.benefits.2.desc' },
              { icon: <Hammer />, title: 'about.benefits.3.title', desc: 'about.benefits.3.desc' },
              { icon: <Award />, title: 'about.benefits.4.title', desc: 'about.benefits.4.desc' }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card-light hover:glass-card p-10 flex flex-col items-start transition-all"
              >
                <div className="w-14 h-14 bg-muted-gold/10 rounded-2xl flex items-center justify-center text-muted-gold mb-8 shadow-sm">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-charcoal leading-tight">
                  {t(value.title)}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {t(value.desc)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyUsSection />


      <ContactSection />
    </Layout>
  );
};

export default About;

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSection from '@/components/home/ContactSection';
import StatCounter from '@/components/common/StatCounter';
import { Award, Briefcase, History, Quote, MousePointer2, Hammer, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhyUsSection from '@/components/home/WhyUsSection';

const About = () => {
  const { t, dir } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <Layout>
      <SEO
        title="אודות Elite Design | נגרייה עם 20+ שנות ניסיון"
        description="נגריית Elite Design - מעל 20 שנות ניסיון בייצור מטבחים, ארונות ורהיטים בהתאמה אישית. מעל 1,000 פרויקטים מוצלחים ברחבי הארץ."
        canonical="/about"
      />

      {/* Hero Banner */}
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

      {/* Philosophy Quote — floating glass card */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/5 relative z-20 -mt-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative"
          >
            <div
              className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden border border-white/30"
              style={{
                background: 'rgba(255, 255, 255, 0.55)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
              }}
            >
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-muted-gold/30 mx-auto mb-6" />
              <h2 className="text-xl md:text-3xl font-playfair italic text-charcoal/90 leading-relaxed max-w-3xl mx-auto">
                {t('about.philosophy')}
              </h2>
              <div className="w-16 h-0.5 bg-muted-gold/40 mx-auto mt-8 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Content — clean two-column layout */}
      <section className="py-20 bg-secondary/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              {/* Title side */}
              <div className="lg:col-span-2">
                <span className="text-sm font-bold uppercase tracking-[0.15em] text-muted-gold mb-4 block">Elite Design</span>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-6">
                  {t('about.title')}
                </h2>
                <div className="w-12 h-1 bg-muted-gold/50 rounded-full" />
              </div>
              {/* Content side */}
              <div className="lg:col-span-3 text-base md:text-lg text-muted-foreground whitespace-pre-line leading-[1.85]">
                {t('page.about.content')}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats — frosted glass cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {/* 20+ Years */}
            <motion.div
              variants={fadeIn}
              className="rounded-3xl p-10 flex flex-col items-center justify-center text-center border border-muted-gold/20 group transition-all duration-500 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.02) 100%)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <History className="w-10 h-10 mb-5 text-muted-gold/60 group-hover:text-muted-gold transition-colors" />
              <div className="text-5xl md:text-6xl font-black text-charcoal mb-2 tracking-tighter">
                <StatCounter end={20} suffix={t('about.years.suffix')} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/60">
                {t('about.benefits.1.title')}
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={fadeIn}
              className="rounded-3xl overflow-hidden h-[320px] md:h-auto border border-white/10 shadow-lg"
            >
              <img
                src="/interactive-fitting/oak.jpg"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                alt="Excellence"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            {/* 1000+ Projects */}
            <motion.div
              variants={fadeIn}
              className="rounded-3xl p-10 flex flex-col items-center justify-center text-center border border-charcoal/10 group transition-all duration-500 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 30, 40, 0.04) 0%, rgba(30, 30, 40, 0.01) 100%)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Briefcase className="w-10 h-10 mb-5 text-muted-gold/60 group-hover:text-muted-gold transition-colors" />
              <div className="text-5xl md:text-6xl font-black text-charcoal mb-2 tracking-tighter">
                <StatCounter end={1000} suffix="+" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/60 mb-6">
                {t('nav.projects')}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild variant="outline" className="rounded-full border-charcoal/15 hover:bg-charcoal/5 text-charcoal text-sm px-5 h-9">
                  <Link to="/projects">{t('nav.projects')}</Link>
                </Button>
                <Button asChild className="rounded-full bg-muted-gold hover:bg-muted-gold/90 text-white text-sm px-5 h-9 shadow-sm">
                  <Link to="/kitchens">{t('nav.kitchens')}</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits — minimal glass cards */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 tracking-tight">
              {t('benefits.title')}
            </h2>
            <div className="w-16 h-0.5 bg-muted-gold/40 mx-auto rounded-full" />
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto"
          >
            {[
              { icon: <MousePointer2 />, title: 'about.benefits.1.title', desc: 'about.benefits.1.desc' },
              { icon: <Zap />, title: 'about.benefits.2.title', desc: 'about.benefits.2.desc' },
              { icon: <Hammer />, title: 'about.benefits.3.title', desc: 'about.benefits.3.desc' },
              { icon: <Award />, title: 'about.benefits.4.title', desc: 'about.benefits.4.desc' }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="rounded-2xl p-8 flex flex-col items-start border border-white/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg group"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-muted-gold mb-6 border border-muted-gold/15 bg-muted-gold/5 group-hover:bg-muted-gold/10 transition-colors">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold mb-3 text-charcoal leading-tight">
                  {t(value.title)}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t(value.desc)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <WhyUsSection />
      <ContactSection />
    </Layout>
  );
};

export default About;

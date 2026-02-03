import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSection from '@/components/home/ContactSection';
import InstallationDiagram from './InstallationDiagram';
import InstallationChecklist from './InstallationChecklist';
import {
  Trash2,
  Plug,
  PaintBucket,
  DoorOpen,
  Package,
  Wrench,
  Download,
  MessageSquare,
  ChevronRight
} from 'lucide-react';

const Installation = () => {
  const { t, language, dir } = useLanguage();

  const steps = [
    {
      icon: Trash2,
      title: 'install.check.clear',
      color: 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400',
      link: '/blog/kitchen-demolition-guide'
    },
    {
      icon: Plug,
      title: 'install.check.plumbing',
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
      link: '/blog/kitchen-plumbing-prep'
    },
    {
      icon: Wrench,
      title: 'install.check.electric',
      color: 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400',
      link: '/blog/kitchen-electrical-plan'
    },
    {
      icon: PaintBucket,
      title: 'install.check.walls',
      color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400',
      link: '/blog/kitchen-walls-prep'
    },
    {
      icon: DoorOpen,
      title: 'install.check.floor',
      color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
      link: '/blog/kitchen-flooring-guide'
    },
    {
      icon: Package,
      title: 'install.check.access',
      color: 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400',
      link: '/blog/kitchen-installation-access'
    },
  ];

  return (
    <Layout>
      {/* Hero Banner - Elite Style */}
      <section className="relative bg-[#1a1a1a] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#1a1a1a]" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6 tracking-tight">
              {t('page.installation.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto font-playfair italic">
              {t('install.checklist.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro & Steps Grid */}
      <section className="py-24 bg-white dark:bg-[#1a1a1a] dark:text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4 text-charcoal dark:text-white">
              {t('install.steps.title')}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <Link to={step.link} className="block p-8 rounded-2xl border border-gray-100 dark:border-white/10 hover:border-accent/50 hover:shadow-xl transition-all duration-300 bg-white dark:bg-white/5 h-full">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl ${step.color} transition-transform group-hover:scale-110`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t(step.title)}</h3>
                  <div className="flex items-center text-accent font-medium text-sm group-hover:translate-x-2 transition-transform rtl:group-hover:-translate-x-2 absolute bottom-8">
                    <span>{t('whyus.cta')}</span>
                    <ChevronRight className={`w-4 h-4 ${language === 'he' ? 'rotate-180 mr-1' : 'ml-1'}`} />
                  </div>
                  <div className="h-6"></div> {/* Spacer for absolute positioned link */}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Diagram Section */}
      <section className="py-24 bg-muted/30 dark:bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">

            {/* Diagram */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-playfair mb-8">
                {t('install.check.electric')} & {t('install.check.plumbing')}
              </h2>
              <InstallationDiagram />
            </motion.div>

            {/* Checklist Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24"
            >
              <InstallationChecklist />

              {/* Action Buttons */}
              <div className="mt-8 space-y-4">
                <button className="w-full flex items-center justify-center gap-2 bg-charcoal text-white py-4 rounded-xl hover:bg-black transition-colors shadow-lg group">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="font-medium">{t('install.download.pdf')}</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-white border-2 border-charcoal text-charcoal py-4 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                  <MessageSquare className="w-5 h-5" />
                  <span>{t('install.ask.expert')}</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default Installation;

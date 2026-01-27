import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSection from '@/components/home/ContactSection';
import {
  Trash2,
  Plug,
  PaintBucket,
  DoorOpen,
  Package,
  Wrench,
  ShieldCheck,
  Clock,
  CheckCircle2
} from 'lucide-react';

const Installation = () => {
  const { t, language } = useLanguage();

  const steps = language === 'he' ? [
    {
      icon: Trash2,
      title: 'פינוי המטבח הישן',
      description: 'הסירו את כל הארונות, המכשירים והציוד מהמטבח הקיים',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Plug,
      title: 'בדיקת תשתיות',
      description: 'וודאו שחיבורי מים, חשמל וגז תקינים ומוכנים לחיבור',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: PaintBucket,
      title: 'הכנת משטחים',
      description: 'הכינו את הקירות והרצפה - צביעה, ריצוף וטיח במידת הצורך',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: DoorOpen,
      title: 'גישה נוחה',
      description: 'הבטיחו מעבר חופשי לצוות ההתקנה וכניסה רחבה לציוד',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Package,
      title: 'מקום אחסון',
      description: 'הכינו מקום זמני לאחסון ציוד וכלים במהלך ההתקנה',
      color: 'from-purple-500 to-violet-500'
    },
  ] : language === 'ru' ? [
    {
      icon: Trash2,
      title: 'Освобождение кухни',
      description: 'Удалите все шкафы, технику и оборудование из существующей кухни',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Plug,
      title: 'Проверка коммуникаций',
      description: 'Убедитесь, что подключения воды, электричества и газа исправны',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: PaintBucket,
      title: 'Подготовка поверхностей',
      description: 'Подготовьте стены и пол - покраска, плитка и штукатурка при необходимости',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: DoorOpen,
      title: 'Удобный доступ',
      description: 'Обеспечьте свободный проход для команды и широкий вход для оборудования',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Package,
      title: 'Место хранения',
      description: 'Подготовьте временное место для хранения оборудования во время установки',
      color: 'from-purple-500 to-violet-500'
    },
  ] : [
    {
      icon: Trash2,
      title: 'Clear the Old Kitchen',
      description: 'Remove all cabinets, appliances, and equipment from the existing kitchen',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Plug,
      title: 'Check Infrastructure',
      description: 'Ensure water, electricity, and gas connections are proper and ready for connection',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: PaintBucket,
      title: 'Surface Preparation',
      description: 'Prepare walls and floor - painting, tiling, and plastering if necessary',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: DoorOpen,
      title: 'Clear Access',
      description: 'Ensure free passage for the installation team and wide entrance for equipment',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Package,
      title: 'Storage Space',
      description: 'Prepare temporary space for storing equipment and tools during installation',
      color: 'from-purple-500 to-violet-500'
    },
  ];

  const tips = language === 'he' ? [
    { icon: Wrench, text: 'התקנה מקצועית על ידי צוות מומחים' },
    { icon: ShieldCheck, text: 'אחריות מלאה על כל העבודות' },
    { icon: Clock, text: 'זמני התקנה מהירים ומדויקים' },
  ] : language === 'ru' ? [
    { icon: Wrench, text: 'Профессиональная установка командой экспертов' },
    { icon: ShieldCheck, text: 'Полная гарантия на все работы' },
    { icon: Clock, text: 'Быстрые и точные сроки установки' },
  ] : [
    { icon: Wrench, text: 'Professional installation by experts' },
    { icon: ShieldCheck, text: 'Full warranty on all works' },
    { icon: Clock, text: 'Fast and precise installation times' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative bg-header py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6"
            >
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-header-foreground mb-4">
              {t('page.installation.title')}
            </h1>
            <p className="font-playfair italic text-xl text-header-foreground/80">
              Installation Preparation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'he' ? 'רשימת הכנות לפני התקנה' : language === 'ru' ? 'Список подготовки к установке' : 'Installation Checklist'}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {language === 'he'
                ? 'עקבו אחר השלבים הבאים להכנה מושלמת לפני הגעת צוות ההתקנה'
                : language === 'ru'
                  ? 'Следуйте этим шагам для идеальной подготовки к приезду команды установки'
                  : 'Follow these steps for perfect preparation before the installation team arrives'}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group relative"
              >
                <div className="relative bg-card rounded-2xl p-6 shadow-lg border border-border/50 overflow-hidden h-full transition-shadow duration-300 hover:shadow-2xl">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Step number */}
                  <div className="absolute top-4 end-4 text-6xl font-bold text-muted/10 group-hover:text-primary/10 transition-colors">
                    {index + 1}
                  </div>

                  {/* Icon container with animation */}
                  <motion.div
                    className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom decoration line */}
                  <div className={`absolute bottom-0 start-0 h-1 bg-gradient-to-r ${step.color} w-0 group-hover:w-full transition-all duration-500`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 bg-background rounded-xl p-5 shadow-md"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <tip.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{tip.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'he' ? 'מוכנים להתחיל?' : language === 'ru' ? 'Готовы начать?' : 'Ready to start?'}
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {language === 'he'
                ? 'צרו איתנו קשר לתיאום פגישת ייעוץ והתקנה'
                : language === 'ru'
                  ? 'Свяжитесь с нами для консультации и установки'
                  : 'Contact us to schedule a consultation and installation'}
            </p>
            <motion.a
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.cta.appointment')}
            </motion.a>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default Installation;

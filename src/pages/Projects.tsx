import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSection from '@/components/home/ContactSection';

import kitchenModern from '@/assets/kitchen-modern.jpg';
import kitchenWood from '@/assets/kitchen-wood.jpg';
import kitchenNano from '@/assets/kitchen-nano.jpg';
import kitchenFormica from '@/assets/kitchen-formica.jpg';
import kitchenCountry from '@/assets/kitchen-country.jpg';
import heroKitchen from '@/assets/hero-kitchen-1.jpg';

const projects = [
  { id: 1, image: kitchenModern, location: 'אשדוד', locationRu: 'Ашдод' },
  { id: 2, image: kitchenWood, location: 'תל אביב', locationRu: 'Тель-Авив' },
  { id: 3, image: kitchenNano, location: 'ירושלים', locationRu: 'Иерусалим' },
  { id: 4, image: kitchenFormica, location: 'באר שבע', locationRu: 'Беэр-Шева' },
  { id: 5, image: heroKitchen, location: 'אשקלון', locationRu: 'Ашкелон' },
  { id: 6, image: kitchenCountry, location: 'חיפה', locationRu: 'Хайфа' },
];

const Projects = () => {
  const { t, language } = useLanguage();

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
              {t('page.projects.title')}
            </h1>
            <p className="font-playfair italic text-xl text-header-foreground/80">
              Our Projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="kitchen-card h-80"
              >
                <img
                  src={project.image}
                  alt={`Project ${project.id}`}
                  className="kitchen-card-image"
                />
                <div className="kitchen-card-overlay" />
                <div className="kitchen-card-title">
                  <h3 className="text-xl font-bold text-primary-foreground">
                    {language === 'he' ? project.location : project.locationRu}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default Projects;

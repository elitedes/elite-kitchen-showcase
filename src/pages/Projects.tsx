import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSection from '@/components/home/ContactSection';

// Original projects (keep or merge)
import kitchenModern from '@/assets/kitchen-modern.jpg';
import kitchenWood from '@/assets/kitchen-wood.jpg';
import kitchenNano from '@/assets/kitchen-nano.jpg';
import kitchenFormica from '@/assets/kitchen-formica.jpg';
import kitchenCountry from '@/assets/kitchen-country.jpg';
import heroKitchen from '@/assets/hero-kitchen-1.jpg';

// New Gallery Projects
import project1 from '@/assets/gallery-projects/project-1.jpg';
import project2 from '@/assets/gallery-projects/project-2.jpg';
import project3 from '@/assets/gallery-projects/project-3.jpg';
import project4 from '@/assets/gallery-projects/project-4.jpg';
import project5 from '@/assets/gallery-projects/project-5.jpg';

const projects = [
  // Existing ones
  { id: 1, image: kitchenModern, location: 'אשדוד', locationRu: 'Ашдод' },
  { id: 2, image: kitchenWood, location: 'תל אביב', locationRu: 'Тель-Авив' },
  { id: 3, image: kitchenNano, location: 'ירושלים', locationRu: 'Иерусалим' },
  { id: 4, image: kitchenFormica, location: 'באר שבע', locationRu: 'Беэр-Шева' },
  { id: 5, image: heroKitchen, location: 'אשקלון', locationRu: 'Ашкелон' },
  { id: 6, image: kitchenCountry, location: 'חיפה', locationRu: 'Хайфа' },
  // New ones
  { id: 7, image: project1, location: 'ראשון לציון', locationRu: 'Ришон ле-Цион' },
  { id: 8, image: project2, location: 'בת ים', locationRu: 'Бат-Ям' },
  { id: 9, image: project3, location: 'פתח תקווה', locationRu: 'Петах-Тиква' },
  { id: 10, image: project4, location: 'נתניה', locationRu: 'Нетания' },
  { id: 11, image: project5, location: 'הרצליה', locationRu: 'Герцлия' },
];

const Projects = () => {
  const { t, language, dir } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % projects.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + projects.length) % projects.length);
    }
  };

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
                className="kitchen-card h-80 cursor-pointer group"
                onClick={() => openLightbox(index)}
                layoutId={`project-${project.id}`}
              >
                <img
                  src={project.image}
                  alt={`Project ${project.id}`}
                  className="kitchen-card-image transition-transform duration-500 group-hover:scale-110"
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

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 p-2 rounded-full transition-colors z-50"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.div
              layoutId={`project-${projects[selectedImageIndex].id}`}
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projects[selectedImageIndex].image}
                alt="Gallery view"
                className="max-w-full max-h-full object-contain rounded-sm"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center text-white/80 bg-black/50 py-2 rounded-b-sm">
                <p className="text-lg font-semibold">
                  {language === 'he'
                    ? projects[selectedImageIndex].location
                    : projects[selectedImageIndex].locationRu}
                </p>
              </div>
            </motion.div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 p-2 rounded-full transition-colors z-50"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactSection />
    </Layout>
  );
};

export default Projects;

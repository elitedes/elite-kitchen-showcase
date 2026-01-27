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
import project6 from '@/assets/gallery-projects/project-6.jpg';
import project7 from '@/assets/gallery-projects/project-7.jpg';
import project8 from '@/assets/gallery-projects/project-8.jpg';
import project9 from '@/assets/gallery-projects/project-9.jpg';
import project10 from '@/assets/gallery-projects/project-10.jpg';
import project11 from '@/assets/gallery-projects/project-11.jpg';
import project12 from '@/assets/gallery-projects/project-12.jpg';
import project13 from '@/assets/gallery-projects/project-13.jpg';
import project14 from '@/assets/gallery-projects/project-14.jpg';
import project15 from '@/assets/gallery-projects/project-15.jpg';
import project16 from '@/assets/gallery-projects/project-16.jpg';
import project17 from '@/assets/gallery-projects/project-17.jpg';
import project18 from '@/assets/gallery-projects/project-18.jpg';
import project19 from '@/assets/gallery-projects/project-19.jpg';
import project20 from '@/assets/gallery-projects/project-20.jpg';
import project21 from '@/assets/gallery-projects/project-21.jpg';
import project22 from '@/assets/gallery-projects/project-22.jpg';
import project23 from '@/assets/gallery-projects/project-23.jpg';
import project24 from '@/assets/gallery-projects/project-24.jpg';
import project25 from '@/assets/gallery-projects/project-25.jpg';
import project26 from '@/assets/gallery-projects/project-26.jpg';
import project27 from '@/assets/gallery-projects/project-27.jpg';
import project28 from '@/assets/gallery-projects/project-28.jpg';
import project29 from '@/assets/gallery-projects/project-29.jpg';
import project30 from '@/assets/gallery-projects/project-30.jpg';
import project31 from '@/assets/gallery-projects/project-31.jpg';
import project32 from '@/assets/gallery-projects/project-32.jpg';
import project33 from '@/assets/gallery-projects/project-33.jpg';
import project34 from '@/assets/gallery-projects/project-34.jpg';
import project35 from '@/assets/gallery-projects/project-35.jpg';
import project36 from '@/assets/gallery-projects/project-36.jpg';
import project37 from '@/assets/gallery-projects/project-37.jpg';
import project38 from '@/assets/gallery-projects/project-38.jpg';
import project39 from '@/assets/gallery-projects/project-39.jpg';
import project40 from '@/assets/gallery-projects/project-40.jpg';

const projects = [
  // Existing ones
  { id: 1, image: kitchenModern, location: 'אשדוד', locationRu: 'Ашдод', locationEn: 'Ashdod' },
  { id: 2, image: kitchenWood, location: 'תל אביב', locationRu: 'Тель-Авив', locationEn: 'Tel Aviv' },
  { id: 3, image: kitchenNano, location: 'ירושלים', locationRu: 'Иерусалим', locationEn: 'Jerusalem' },
  { id: 4, image: kitchenFormica, location: 'באר שבע', locationRu: 'Беэр-Шева', locationEn: 'Beer Sheva' },
  { id: 5, image: heroKitchen, location: 'אשקלון', locationRu: 'Ашкелон', locationEn: 'Ashkelon' },
  { id: 6, image: kitchenCountry, location: 'חיפה', locationRu: 'Хайфа', locationEn: 'Haifa' },
  // Gallery 1 (New)
  { id: 7, image: project1, location: 'ראשון לציון', locationRu: 'Ришон ле-Цион', locationEn: 'Rishon LeZion' },
  { id: 8, image: project2, location: 'בת ים', locationRu: 'Бат-Ям', locationEn: 'Bat Yam' },
  { id: 9, image: project3, location: 'פתח תקווה', locationRu: 'Петах-Тиква', locationEn: 'Petah Tikva' },
  { id: 10, image: project4, location: 'נתניה', locationRu: 'Нетания', locationEn: 'Netanya' },
  { id: 11, image: project5, location: 'הרצליה', locationRu: 'Герцлия', locationEn: 'Herzliya' },
  // Gallery 2 (Newer)
  { id: 12, image: project6, location: 'רעננה', locationRu: 'Раанана', locationEn: "Ra'anana" },
  { id: 13, image: project7, location: 'כפר סבא', locationRu: 'Кфар-Саба', locationEn: 'Kfar Saba' },
  { id: 14, image: project8, location: 'הוד השרון', locationRu: 'Ход-ха-Шарон', locationEn: 'Hod HaSharon' },
  { id: 15, image: project9, location: 'רמת גן', locationRu: 'Рамат-Ган', locationEn: 'Ramat Gan' },
  { id: 16, image: project10, location: 'גבעתיים', locationRu: 'Гиватаим', locationEn: 'Givatayim' },
  // Gallery 3 (Newest)
  { id: 17, image: project11, location: 'חולון', locationRu: 'Холон', locationEn: 'Holon' },
  { id: 18, image: project12, location: 'רחובות', locationRu: 'Реховот', locationEn: 'Rehovot' },
  { id: 19, image: project13, location: 'ראש העין', locationRu: 'Рош-ха-Аин', locationEn: 'Rosh HaAyin' },
  { id: 20, image: project14, location: 'כפר יונה', locationRu: 'Кфар-Йона', locationEn: 'Kfar Yona' },
  { id: 21, image: project15, location: 'רמת השרון', locationRu: 'Рамат-ха-Шарон', locationEn: 'Ramat HaSharon' },
  // Gallery 4 (Latest)
  { id: 22, image: project16, location: 'נתיבות', locationRu: 'Нетивот', locationEn: 'Netivot' },
  { id: 23, image: project17, location: 'אופקים', locationRu: 'Офаким', locationEn: 'Ofakim' },
  { id: 24, image: project18, location: 'שדרות', locationRu: 'Сдерот', locationEn: 'Sderot' },
  { id: 25, image: project19, location: 'קריית גת', locationRu: 'Кирьят-Гат', locationEn: 'Kiryat Gat' },
  { id: 26, image: project20, location: 'מודיעין', locationRu: 'Модиин', locationEn: "Modi'in" },
  // Gallery 5 (Freshly Addded)
  { id: 27, image: project21, location: 'יבנה', locationRu: 'Явне', locationEn: 'Yavne' },
  { id: 28, image: project22, location: 'לוד', locationRu: 'Лод', locationEn: 'Lod' },
  { id: 29, image: project23, location: 'רמלה', locationRu: 'Рамла', locationEn: 'Ramla' },
  { id: 30, image: project24, location: 'גבעת שמואל', locationRu: 'Гиват-Шмуэль', locationEn: 'Givat Shmuel' },
  { id: 31, image: project25, location: 'אור יהודה', locationRu: 'Ор-Йехуда', locationEn: 'Or Yehuda' },
  // Gallery 6 (Latest Batch)
  { id: 32, image: project26, location: 'נס ציונה', locationRu: 'Нес-Циона', locationEn: 'Ness Ziona' },
  { id: 33, image: project27, location: 'קרית אונו', locationRu: 'Кирьят-Оно', locationEn: 'Kiryat Ono' },
  { id: 34, image: project28, location: 'יהוד', locationRu: 'Йехуд', locationEn: 'Yehud' },
  { id: 35, image: project29, location: 'אלעד', locationRu: 'Эльад', locationEn: "El'ad" },
  { id: 36, image: project30, location: 'שהם', locationRu: 'Шохам', locationEn: 'Shoham' },
  // Gallery 7 (Latest Batch)
  { id: 37, image: project31, location: 'גן יבנה', locationRu: 'Ган-Явне', locationEn: 'Gan Yavne' },
  { id: 38, image: project32, location: 'מזכרת בתיה', locationRu: 'Мазкерет-Батья', locationEn: 'Mazkeret Batya' },
  { id: 39, image: project33, location: 'גדרה', locationRu: 'Гедера', locationEn: 'Gedera' },
  { id: 40, image: project34, location: 'קריית מלאכי', locationRu: 'Кирьят-Малахи', locationEn: 'Kiryat Malakhi' },
  { id: 41, image: project35, location: 'קריית עקרון', locationRu: 'Кирьят-Экрон', locationEn: 'Kiryat Ekron' },
  // Gallery 8 (Latest Batch)
  { id: 42, image: project36, location: 'בני ברק', locationRu: 'Бней-Брак', locationEn: 'Bnei Brak' },
  { id: 43, image: project37, location: 'קריית ביאליק', locationRu: 'Кирьят-Бялик', locationEn: 'Kiryat Bialik' },
  { id: 44, image: project38, location: 'קריית מוצקין', locationRu: 'Кирьят-Моцкин', locationEn: 'Kiryat Motzkin' },
  { id: 45, image: project39, location: 'קריית ים', locationRu: 'Кирьят-Ям', locationEn: 'Kiryat Yam' },
  { id: 46, image: project40, location: 'קריית אתא', locationRu: 'Кирьят-Ата', locationEn: 'Kiryat Ata' },
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
                    {language === 'he' ? project.location : language === 'ru' ? project.locationRu : project.locationEn}
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
                    : language === 'ru'
                      ? projects[selectedImageIndex].locationRu
                      : projects[selectedImageIndex].locationEn}
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

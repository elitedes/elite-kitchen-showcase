import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSection from '@/components/home/ContactSection';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Breadcrumbs from '@/components/common/Breadcrumbs';

// Main category images
import kitchenModern from '@/assets/gallery/kitchen-modern.jpg';
import kitchenCountry from '@/assets/gallery/country-1.jpg';
import kitchenFormica from '@/assets/gallery/kitchen-formica.jpg';
import kitchenWood from '@/assets/gallery/kitchen-wood.jpg';
import kitchenNano from '@/assets/gallery/kitchen-nano.jpg';
import kitchenAcrylic from '@/assets/gallery/acrylic-1.jpg';

// Gallery images - Modern
import modern1 from '@/assets/gallery/modern-1.jpg';
import modern2 from '@/assets/gallery/modern-2.jpg';
import modern3 from '@/assets/gallery/modern-3.jpg';
import modern4 from '@/assets/gallery/modern-4.jpg';
import modern5 from '@/assets/gallery/modern-5.jpg';
import modern6 from '@/assets/gallery/modern-6.jpg';

// Gallery images - Country
import country1 from '@/assets/gallery/country-1.jpg';
import country2 from '@/assets/gallery/country-2.jpg';
import country3 from '@/assets/gallery/country-3.jpg';
import country4 from '@/assets/gallery/country-4.jpg';

// Gallery images - Formica
import formica1 from '@/assets/gallery/formica-1.jpg';
import formica2 from '@/assets/gallery/formica-2.jpg';
import formica3 from '@/assets/gallery/formica-3.jpg';
import formica4 from '@/assets/gallery/formica-4.jpg';
import formica5 from '@/assets/gallery/formica-5.jpg';

// Gallery images - Wood
import wood1 from '@/assets/gallery/wood-1.jpg';
import wood2 from '@/assets/gallery/wood-2.jpg';
import wood3 from '@/assets/gallery/wood-3.jpg';
import wood4 from '@/assets/gallery/wood-4.jpg';

// Gallery images - Nano
import nano1 from '@/assets/gallery/nano-1.jpg';
import nano2 from '@/assets/gallery/nano-2.jpg';
import nano3 from '@/assets/gallery/nano-3.jpg';
import nano4 from '@/assets/gallery/nano-4.jpg';
import nano5 from '@/assets/gallery/nano-5.jpg';

// Gallery images - Acrylic
import acrylic1 from '@/assets/gallery/acrylic-1.jpg';
import acrylic2 from '@/assets/gallery/acrylic-2.jpg';
import acrylic3 from '@/assets/gallery/acrylic-3.jpg';

const categoryData: Record<string, { image: string; gallery: string[] }> = {
  modern: {
    image: kitchenModern,
    gallery: [modern1, modern2, modern3, modern4, modern5, modern6]
  },
  country: {
    image: kitchenCountry,
    gallery: [country1, country2, country3, country4]
  },
  formica: {
    image: kitchenFormica,
    gallery: [formica1, formica2, formica3, formica4, formica5]
  },
  wood: {
    image: kitchenWood,
    gallery: [wood1, wood2, wood3, wood4]
  },
  nano: {
    image: kitchenNano,
    gallery: [nano1, nano2, nano3, nano4, nano5]
  },
  acrylic: {
    image: kitchenAcrylic,
    gallery: [acrylic1, acrylic2, acrylic3]
  }
};

const KitchenCategory = () => {
  const { category } = useParams<{ category: string }>();
  const { t, language } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const data = categoryData[category || 'modern'] || categoryData.modern;

  const allCategories = ['modern', 'country', 'formica', 'wood', 'nano', 'acrylic'];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? data.gallery.length - 1 : selectedImageIndex - 1);
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === data.gallery.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  return (
    <Layout>
      <SEO
        title={`${t(`kitchens.${category}`)} | Elite Design - מטבחים בהתאמה אישית`}
        description={`${t(`kitchens.${category}`)} מ-Elite Design. גלריית תמונות ועיצובים של מטבחי ${t(`kitchens.${category}`)} בהתאמה אישית. איכות פרימיום עם 20+ שנות ניסיון.`}
        canonical={`/kitchens/${category}`}
      />
      <Breadcrumbs items={[
        { label: t('nav.kitchens'), path: '/kitchens' },
        { label: t(`nav.kitchens.${category}`), path: `/kitchens/${category}`, isCurrent: true }
      ]} />
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={data.image}
          alt={t(`kitchens.${category}`)}
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
              {t(`kitchens.${category}`)}
            </h1>
            {language !== 'en' && (
              <p className="font-playfair italic text-xl text-primary-foreground/80">
                {t(`kitchens.${category}.en`)}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {allCategories.map((cat) => (
              <Link
                key={cat}
                to={`/kitchens/${cat}`}
                className={`px-6 py-2 font-medium transition-all ${cat === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-foreground hover:bg-primary/10'
                  }`}
              >
                {t(`kitchens.${cat}`)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="kitchen-card h-72 cursor-pointer group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`${t(`kitchens.${category}`)} ${index + 1}`}
                  className="kitchen-card-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/90 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-primary font-medium text-sm">{t('gallery.view')}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a href="#contact" className="btn-primary">
              {t('hero.cta.appointment')}
            </a>
          </motion.div>
        </div>
      </section>

      <ContactSection />

      {/* Lightbox */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={(open) => !open && setSelectedImageIndex(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full md:h-auto md:aspect-video p-0 bg-black/95 border-none">
          <DialogTitle className="sr-only">
            {t(`kitchens.${category}`)} Image {selectedImageIndex !== null ? selectedImageIndex + 1 : ''}
          </DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 text-white/70 hover:text-white hover:bg-white/10 z-50 rounded-full"
              onClick={() => setSelectedImageIndex(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 z-50 rounded-full h-12 w-12 hidden md:flex"
              onClick={handlePrevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 z-50 rounded-full h-12 w-12 hidden md:flex"
              onClick={handleNextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {selectedImageIndex !== null && (
              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 100) handlePrevImage(new MouseEvent('click') as any);
                  else if (info.offset.x < -100) handleNextImage(new MouseEvent('click') as any);
                }}
                transition={{ duration: 0.2 }}
                src={data.gallery[selectedImageIndex]}
                alt={`${t(`kitchens.${category}`)} view`}
                className="max-w-full max-h-full object-contain cursor-grab active:cursor-grabbing"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default KitchenCategory;

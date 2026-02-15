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

// Gallery images mapping
const categoryData: Record<string, { image: string; gallery: string[] }> = {
  modern: {
    image: kitchenModern,
    gallery: [
      '/assets/gallery/modern-1.jpg',
      '/assets/gallery/modern-2.jpg',
      '/assets/gallery/modern-3.jpg',
      '/assets/gallery/modern-4.jpg',
      '/assets/gallery/modern-5.jpg',
      '/assets/gallery/modern-6.jpg',
    ]
  },
  country: {
    image: kitchenCountry,
    gallery: [
      '/assets/gallery/country-1.jpg',
      '/assets/gallery/country-2.jpg',
      '/assets/gallery/country-3.jpg',
      '/assets/gallery/country-4.jpg',
    ]
  },
  formica: {
    image: kitchenFormica,
    gallery: [
      '/assets/gallery/formica-1.jpg',
      '/assets/gallery/formica-2.jpg',
      '/assets/gallery/formica-3.jpg',
      '/assets/gallery/formica-4.jpg',
      '/assets/gallery/formica-5.jpg',
    ]
  },
  wood: {
    image: kitchenWood,
    gallery: [
      '/assets/gallery/wood-1.jpg',
      '/assets/gallery/wood-2.jpg',
      '/assets/gallery/wood-3.jpg',
      '/assets/gallery/wood-4.jpg',
    ]
  },
  nano: {
    image: kitchenNano,
    gallery: [
      '/assets/gallery/nano-1.jpg',
      '/assets/gallery/nano-2.jpg',
      '/assets/gallery/nano-3.jpg',
      '/assets/gallery/nano-4.jpg',
      '/assets/gallery/nano-5.jpg',
    ]
  },
  acrylic: {
    image: kitchenAcrylic,
    gallery: [
      '/assets/gallery/acrylic-1.jpg',
      '/assets/gallery/acrylic-2.jpg',
      '/assets/gallery/acrylic-3.jpg',
    ]
  }
};

const KitchenCategory = () => {
  const { category: categoryId } = useParams();
  const { t, language, dir } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const data = categoryData[categoryId || 'modern'];
  if (!data) return <Link to="/kitchens">Back to Kitchens</Link>;

  return (
    <Layout>
      <SEO
        title={`${t(`kitchens.${categoryId}`)} | Elite Design`}
        description={`${t(`kitchens.${categoryId}`)} מ-Elite Design. גלריית תמונות ועיצובים של מטבחי ${t(`kitchens.${categoryId}`)} בהתאמה אישית.`}
        canonical={`/kitchens/${categoryId}`}
      />

      {/* Hero Banner */}
      <section className="relative bg-[#1a1a1a] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${data.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6 capitalize">
              {t(`kitchens.${categoryId}`)}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light italic">
              Elite Custom Kitchen Design
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-8">
        <Breadcrumbs items={[
          { label: t('nav.kitchens'), path: '/kitchens' },
          { label: t(`kitchens.${categoryId}`), path: `/kitchens/${categoryId}`, isCurrent: true }
        ]} />
      </div>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                onClick={() => setSelectedImage(idx)}
              >
                <img src={img} alt={`${categoryId} ${idx}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-black/90">
          <DialogTitle className="sr-only">Image Gallery</DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {selectedImage !== null && (
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={data.gallery[selectedImage]}
                className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              />
            )}

            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(prev => prev! > 0 ? prev! - 1 : data.gallery.length - 1); }}
              className="absolute left-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(prev => prev! < data.gallery.length - 1 ? prev! + 1 : 0); }}
              className="absolute right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <ContactSection />
    </Layout>
  );
};

export default KitchenCategory;

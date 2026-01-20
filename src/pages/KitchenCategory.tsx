import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSection from '@/components/home/ContactSection';

// Main category images
import kitchenModern from '@/assets/kitchen-modern.jpg';
import kitchenCountry from '@/assets/kitchen-country.jpg';
import kitchenFormica from '@/assets/kitchen-formica.jpg';
import kitchenWood from '@/assets/kitchen-wood.jpg';
import kitchenNano from '@/assets/kitchen-nano.jpg';

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
};

const KitchenCategory = () => {
  const { category } = useParams<{ category: string }>();
  const { t } = useLanguage();

  const data = categoryData[category || 'modern'] || categoryData.modern;

  const allCategories = ['modern', 'country', 'formica', 'wood', 'nano'];

  return (
    <Layout>
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
            <p className="font-playfair italic text-xl text-primary-foreground/80">
              {t(`kitchens.${category}.en`)}
            </p>
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
                className={`px-6 py-2 font-medium transition-all ${
                  cat === category
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
                className="kitchen-card h-72"
              >
                <img
                  src={image}
                  alt={`${t(`kitchens.${category}`)} ${index + 1}`}
                  className="kitchen-card-image"
                />
                <div className="kitchen-card-overlay" />
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
    </Layout>
  );
};

export default KitchenCategory;

import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSection from '@/components/home/ContactSection';

import kitchenModern from '@/assets/kitchen-modern.jpg';
import kitchenCountry from '@/assets/kitchen-country.jpg';
import kitchenFormica from '@/assets/kitchen-formica.jpg';
import kitchenWood from '@/assets/kitchen-wood.jpg';
import kitchenNano from '@/assets/kitchen-nano.jpg';

const categoryData: Record<string, { image: string; galleryCount: number }> = {
  modern: { image: kitchenModern, galleryCount: 6 },
  country: { image: kitchenCountry, galleryCount: 4 },
  formica: { image: kitchenFormica, galleryCount: 5 },
  wood: { image: kitchenWood, galleryCount: 4 },
  nano: { image: kitchenNano, galleryCount: 5 },
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
            {Array.from({ length: data.galleryCount }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="kitchen-card h-72"
              >
                <img
                  src={data.image}
                  alt={`${t(`kitchens.${category}`)} ${index + 1}`}
                  className="kitchen-card-image"
                />
                <div className="kitchen-card-overlay opacity-0 group-hover:opacity-60" />
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

import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

import kitchenModern from '@/assets/kitchen-modern.jpg';
import kitchenCountry from '@/assets/kitchen-country.jpg';
import kitchenFormica from '@/assets/kitchen-formica.jpg';
import kitchenWood from '@/assets/kitchen-wood.jpg';
import kitchenNano from '@/assets/kitchen-nano.jpg';

const categories = [
  { key: 'modern', image: kitchenModern },
  { key: 'country', image: kitchenCountry },
  { key: 'formica', image: kitchenFormica },
  { key: 'wood', image: kitchenWood },
  { key: 'nano', image: kitchenNano },
];

const Kitchens = () => {
  const { t } = useLanguage();

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
              {t('nav.kitchens')}
            </h1>
            <p className="font-playfair italic text-xl text-header-foreground/80">
              Where Design Meets Quality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/kitchens/${category.key}`}
                  className="kitchen-card block h-80"
                >
                  <img
                    src={category.image}
                    alt={t(`kitchens.${category.key}`)}
                    className="kitchen-card-image"
                  />
                  <div className="kitchen-card-overlay" />
                  <div className="kitchen-card-title">
                    <h3 className="text-2xl font-bold text-primary-foreground mb-1">
                      {t(`kitchens.${category.key}`)}
                    </h3>
                    <p className="font-playfair italic text-primary-foreground/70">
                      {t(`kitchens.${category.key}.en`)}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kitchens;

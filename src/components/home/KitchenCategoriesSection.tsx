import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

import kitchenModern from '@/assets/kitchen-modern.jpg';
import kitchenCountry from '@/assets/kitchen-country.jpg';
import kitchenFormica from '@/assets/kitchen-formica.jpg';
import kitchenWood from '@/assets/kitchen-wood.jpg';
import kitchenNano from '@/assets/kitchen-nano.jpg';

const categories = [
  { key: 'modern', image: kitchenModern, path: '/kitchens/modern' },
  { key: 'formica', image: kitchenFormica, path: '/kitchens/formica' },
  { key: 'wood', image: kitchenWood, path: '/kitchens/wood' },
  { key: 'country', image: kitchenCountry, path: '/kitchens/country' },
  { key: 'nano', image: kitchenNano, path: '/kitchens/nano' },
];

const KitchenCategoriesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">{t('kitchens.title')}</h2>
          <p className="decorative-text">house of design and creation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.slice(0, 2).map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={category.path} className="kitchen-card block h-80">
                <img
                  src={category.image}
                  alt={t(`kitchens.${category.key}`)}
                  className="kitchen-card-image"
                />
                <div className="kitchen-card-overlay" />
                <div className="kitchen-card-title">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {categories.slice(2).map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
            >
              <Link to={category.path} className="kitchen-card block h-72">
                <img
                  src={category.image}
                  alt={t(`kitchens.${category.key}`)}
                  className="kitchen-card-image"
                />
                <div className="kitchen-card-overlay" />
                <div className="kitchen-card-title">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-1">
                    {t(`kitchens.${category.key}`)}
                  </h3>
                  <p className="font-playfair italic text-primary-foreground/70 text-sm">
                    {t(`kitchens.${category.key}.en`)}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitchenCategoriesSection;

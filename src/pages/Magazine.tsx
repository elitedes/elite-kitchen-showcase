import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

import kitchenModern from '@/assets/kitchen-modern.jpg';
import kitchenNano from '@/assets/kitchen-nano.jpg';
import kitchenWood from '@/assets/kitchen-wood.jpg';

const Magazine = () => {
  const { t, language } = useLanguage();

  const articles = language === 'he' ? [
    {
      image: kitchenModern,
      title: 'טרנדים בעיצוב מטבחים 2024',
      excerpt: 'כל מה שצריך לדעת על הטרנדים החמים ביותר בעיצוב מטבחים השנה',
    },
    {
      image: kitchenNano,
      title: 'יתרונות ציפוי נאנו למטבח',
      excerpt: 'למה כדאי לבחור במטבח עם ציפוי נאנו ומה היתרונות המרכזיים',
    },
    {
      image: kitchenWood,
      title: 'מטבח עץ מלא - מדריך מלא',
      excerpt: 'כל מה שצריך לדעת לפני רכישת מטבח עץ מלא',
    },
  ] : language === 'ru' ? [
    {
      image: kitchenModern,
      title: 'Тренды дизайна кухонь 2024',
      excerpt: 'Все, что нужно знать о самых горячих трендах в дизайне кухонь этого года',
    },
    {
      image: kitchenNano,
      title: 'Преимущества нано-покрытия для кухни',
      excerpt: 'Почему стоит выбрать кухню с нано-покрытием и каковы основные преимущества',
    },
    {
      image: kitchenWood,
      title: 'Кухня из массива дерева - полное руководство',
      excerpt: 'Все, что нужно знать перед покупкой кухни из массива дерева',
    },
  ] : [
    {
      image: kitchenModern,
      title: 'Kitchen Design Trends 2024',
      excerpt: 'Everything you need to know about the hottest kitchen design trends this year',
    },
    {
      image: kitchenNano,
      title: 'Benefits of Nano Coating for Kitchens',
      excerpt: 'Why you should choose a kitchen with nano coating and what the key benefits are',
    },
    {
      image: kitchenWood,
      title: 'Solid Wood Kitchens - Full Guide',
      excerpt: 'Everything you need to know before purchasing a solid wood kitchen',
    },
  ];

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
              {t('magazine.title')}
            </h1>
            <p className="font-playfair italic text-xl text-header-foreground/80">
              {t('magazine.decorative')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card shadow-lg overflow-hidden group cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {article.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Magazine;

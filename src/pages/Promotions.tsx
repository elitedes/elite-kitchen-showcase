import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSection from '@/components/home/ContactSection';

// Import kitchen images for promotions
import kitchenModern from '@/assets/kitchen-modern.jpg';
import kitchenFormica from '@/assets/kitchen-formica.jpg';
import kitchenCountry from '@/assets/kitchen-country.jpg';
import kitchenNano from '@/assets/kitchen-nano.jpg';

interface Promotion {
  id: number;
  image: string;
  title: string;
  price: string;
  priceNote: string;
  specs: {
    doors: string;
    length: string;
    drawers: string;
    design: string;
    delivery: string;
  };
  ctaText: string;
}

const Promotions = () => {
  const { t, language, dir } = useLanguage();

  const promotions: Promotion[] = language === 'he' ? [
    {
      id: 1,
      image: kitchenModern,
      title: 'מבצע מטבח דלתות אקריל + במה',
      price: '₪25,000',
      priceNote: 'המחיר כולל מע״מ ואינו כולל הובלה',
      specs: {
        doors: 'דלתות אקריל',
        length: '10 מטר מטבח',
        drawers: '10 מגירות',
        design: 'עיצוב תכנון והדמיה ממוחשבת',
        delivery: 'מדידה והתקנה',
      },
      ctaText: 'לפרטי המבצע',
    },
    {
      id: 2,
      image: kitchenFormica,
      title: 'מבצע מטבח דלתות פורמייקה',
      price: '₪20,000',
      priceNote: 'המחיר כולל מע״מ ואינו כולל הובלה',
      specs: {
        doors: 'דלתות פורמייקה',
        length: '10 מטר מטבח',
        drawers: '10 מגירות',
        design: 'עיצוב תכנון והדמיה ממוחשבת',
        delivery: 'מדידה',
      },
      ctaText: 'לפרטי המבצע',
    },
    {
      id: 3,
      image: kitchenCountry,
      title: 'מבצע מטבח דלתות פורמייקה עם פרופיל ללא ידיות',
      price: '₪22,000',
      priceNote: 'המחיר כולל מע״מ ואינו כולל הובלה',
      specs: {
        doors: 'פורמייקה + פרופיל ללא ידיות',
        length: '10 מטר מטבח',
        drawers: '10 מגירות',
        design: 'עיצוב תכנון והדמיה ממוחשבת',
        delivery: 'כולל מדידה והתקנה',
      },
      ctaText: 'לפרטי המבצע',
    },
    {
      id: 4,
      image: kitchenNano,
      title: 'מבצע מטבח פולימר כפרי',
      price: '₪27,500',
      priceNote: 'המחיר כולל מע״מ ואינו כולל הובלה',
      specs: {
        doors: 'פולימר כפרי',
        length: '10 מטר מטבח',
        drawers: '10 מגירות',
        design: 'עיצוב תכנון והדמיה ממוחשבת',
        delivery: 'כולל מדידה והתקנה',
      },
      ctaText: 'לפרטי המבצע',
    },
  ] : language === 'ru' ? [
    {
      id: 1,
      image: kitchenModern,
      title: 'Акция: Кухня с акриловыми дверями + остров',
      price: '₪25,000',
      priceNote: 'Цена включает НДС и не включает доставку',
      specs: {
        doors: 'Акриловые двери',
        length: '10 м кухни',
        drawers: '10 ящиков',
        design: 'Компьютерный дизайн и визуализация',
        delivery: 'Замер и установка включены',
      },
      ctaText: 'Подробнее об акции',
    },
    {
      id: 2,
      image: kitchenFormica,
      title: 'Акция: Кухня с дверями из формайки',
      price: '₪20,000',
      priceNote: 'Цена включает НДС и не включает доставку',
      specs: {
        doors: 'Двери из формайки',
        length: '10 м кухни',
        drawers: '10 ящиков',
        design: 'Компьютерный дизайн и визуализация',
        delivery: 'Замер включен',
      },
      ctaText: 'Подробнее об акции',
    },
    {
      id: 3,
      image: kitchenCountry,
      title: 'Акция: Кухня из формайки с профилем без ручек',
      price: '₪22,000',
      priceNote: 'Цена включает НДС и не включает доставку',
      specs: {
        doors: 'Формайка + профиль без ручек',
        length: '10 м кухни',
        drawers: '10 ящиков',
        design: 'Компьютерный дизайн и визуализация',
        delivery: 'Замер и установка включены',
      },
      ctaText: 'Подробнее об акции',
    },
    {
      id: 4,
      image: kitchenNano,
      title: 'Акция: Кухня в стиле кантри полимер',
      price: '₪27,500',
      priceNote: 'Цена включает НДС и не включает доставку',
      specs: {
        doors: 'Полимер (кантри)',
        length: '10 м кухни',
        drawers: '10 ящиков',
        design: 'Компьютерный дизайн и визуализация',
        delivery: 'Замер и установка включены',
      },
      ctaText: 'Подробнее об акции',
    },
  ] : [
    {
      id: 1,
      image: kitchenModern,
      title: 'Promo: Acrylic Door Kitchen + Island',
      price: '₪25,000',
      priceNote: 'Price includes VAT and does not include delivery',
      specs: {
        doors: 'Acrylic doors',
        length: '10 m kitchen',
        drawers: '10 drawers',
        design: 'Computerized design & visualization',
        delivery: 'Measurement & installation included',
      },
      ctaText: 'Promotion Details',
    },
    {
      id: 2,
      image: kitchenFormica,
      title: 'Promo: Formica Door Kitchen',
      price: '₪20,000',
      priceNote: 'Price includes VAT and does not include delivery',
      specs: {
        doors: 'Formica doors',
        length: '10 m kitchen',
        drawers: '10 drawers',
        design: 'Computerized design & visualization',
        delivery: 'Measurement included',
      },
      ctaText: 'Promotion Details',
    },
    {
      id: 3,
      image: kitchenCountry,
      title: 'Promo: Formica Kitchen with handleless profile',
      price: '₪22,000',
      priceNote: 'Price includes VAT and does not include delivery',
      specs: {
        doors: 'Formica + handleless profile',
        length: '10 m kitchen',
        drawers: '10 drawers',
        design: 'Computerized design & visualization',
        delivery: 'Measurement & installation included',
      },
      ctaText: 'Promotion Details',
    },
    {
      id: 4,
      image: kitchenNano,
      title: 'Promo: Country Style Polymer Kitchen',
      price: '₪27,500',
      priceNote: 'Price includes VAT and does not include delivery',
      specs: {
        doors: 'Country polymer',
        length: '10 m kitchen',
        drawers: '10 drawers',
        design: 'Computerized design & visualization',
        delivery: 'Measurement & installation included',
      },
      ctaText: 'Promotion Details',
    },
  ];

  const specLabels = language === 'he' ? {
    doors: 'דלתות:',
    length: 'אורך מטבח:',
    drawers: 'מספר מגירות:',
    design: 'תכנון ועיצוב:',
    delivery: 'מדידה והתקנה:',
  } : language === 'ru' ? {
    doors: 'Двери:',
    length: 'Длина кухни:',
    drawers: 'Кол-во ящиков:',
    design: 'Дизайн:',
    delivery: 'Замер и установка:',
  } : {
    doors: 'Doors:',
    length: 'Kitchen Length:',
    drawers: 'Number of Drawers:',
    design: 'Design:',
    delivery: 'Measurement & Installation:',
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
              {t('page.promotions.title')}
            </h1>
            <p className="font-playfair italic text-xl text-header-foreground/80">
              Special Offers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promotions.map((promo, index) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image with Sale Badge */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 start-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wide">
                    SALE
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center border-t-4 border-primary/20">
                  <h3 className="text-xl font-bold text-foreground mb-2">{promo.title}</h3>
                  <p className="text-4xl font-extrabold text-primary mb-1">{promo.price}</p>
                  <p className="text-sm text-muted-foreground mb-6">{promo.priceNote}</p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 text-sm border-t border-border pt-4">
                    <div className="flex justify-between py-1 border-b border-border/50">
                      <span className="text-muted-foreground">{specLabels.doors}</span>
                      <span className="font-medium">{promo.specs.doors}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border/50">
                      <span className="text-muted-foreground">{specLabels.length}</span>
                      <span className="font-medium">{promo.specs.length}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border/50">
                      <span className="text-muted-foreground">{specLabels.drawers}</span>
                      <span className="font-medium">{promo.specs.drawers}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border/50">
                      <span className="text-muted-foreground">{specLabels.design}</span>
                      <span className="font-medium">{promo.specs.design}</span>
                    </div>
                    <div className="col-span-2 flex justify-between py-1">
                      <span className="text-muted-foreground">{specLabels.delivery}</span>
                      <span className="font-medium">{promo.specs.delivery}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className="inline-block mt-6 text-primary font-semibold hover:text-primary/80 transition-colors underline underline-offset-4"
                  >
                    {promo.ctaText} →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex justify-center py-8">
        <svg viewBox="0 0 100 10" className="w-32 h-4 text-muted-foreground/30">
          <path d="M0 5 L10 0 L20 5 L30 0 L40 5 L50 0 L60 5 L70 0 L80 5 L90 0 L100 5" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <ContactSection />
    </Layout>
  );
};

export default Promotions;

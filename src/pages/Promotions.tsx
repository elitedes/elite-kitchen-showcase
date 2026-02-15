// Triggering update to ensure dev server picks up changes
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSection from '@/components/home/ContactSection';

// Import kitchen images for promotions
import kitchenModern from '@/assets/kitchen-modern.jpg';
import kitchenFormica from '@/assets/kitchen-formica.jpg';
import kitchenCountry from '@/assets/kitchen-country.jpg';
import kitchenNano from '@/assets/kitchen-nano.jpg';
import formaykaBama from '@/assets/formayka_bama.jpg';
import polymerImg from '@/assets/polymer.jpg';
import prevCountryImg from '@/assets/kitchen-country-promo.jpg';

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
    body: string;
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
      image: formaykaBama,
      title: 'מבצע מטבח חזיתות אקריל עם פרופיל ללא ידיות',
      price: '₪25,000',
      priceNote: 'המחיר כולל מע״מ ואינו כולל הובלה',
      specs: {
        doors: 'חזיתות אקריל + פרופיל ללא ידיות',
        length: '10 מטר מטבח',
        drawers: '10 מגירות עם טריקה שקטה',
        body: "סנדוויץ'",
        design: 'עיצוב תכנון והדמיה ממוחשבת',
        delivery: 'מדידה',
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
        drawers: '10 מגירות עם טריקה שקטה',
        body: "סנדוויץ'",
        design: 'עיצוב תכנון והדמיה ממוחשבת',
        delivery: 'מדידה',
      },
      ctaText: 'לפרטי המבצע',
    },
    {
      id: 3,
      image: prevCountryImg,
      title: 'מבצע מטבח דלתות פורמייקה עם פרופיל ללא ידיות',
      price: '₪22,000',
      priceNote: 'המחיר כולל מע״מ ואינו כולל הובלה',
      specs: {
        doors: 'פורמייקה + פרופיל ללא ידיות',
        length: '10 מטר מטבח',
        drawers: '10 מגירות עם טריקה שקטה',
        body: "סנדוויץ'",
        design: 'עיצוב תכנון והדמיה ממוחשבת',
        delivery: 'כולל מדידה והתקנה',
      },
      ctaText: 'לפרטי המבצע',
    },
    {
      id: 4,
      image: polymerImg,
      title: 'מבצע מטבח פולימר כפרי',
      price: '₪27,500',
      priceNote: 'המחיר כולל מע״מ ואינו כולל הובלה',
      specs: {
        doors: 'פולימר כפרי',
        length: '10 מטר מטבח',
        drawers: '10 מגירות עם טריקה שקטה',
        body: "סנדוויץ'",
        design: 'עיצוב תכנון והדמיה ממוחשבת',
        delivery: 'כולל מדידה והתקנה',
      },
      ctaText: 'לפרטי המבצע',
    },
  ] : language === 'ru' ? [
    {
      id: 1,
      image: formaykaBama,
      title: 'Акция: Кухня с фасадами акрил с профилем без ручек',
      price: '₪25,000',
      priceNote: 'Цена включает НДС и не включает доставку',
      specs: {
        doors: 'Акриловые фасады + профиль',
        length: '10 м кухни',
        drawers: '10 ящиков с тихим закрытием',
        body: 'Сендвич',
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
        drawers: '10 ящиков с тихим закрытием',
        body: 'Сендвич',
        design: 'Компьютерный дизайн и визуализация',
        delivery: 'Замер включен',
      },
      ctaText: 'Подробнее об акции',
    },
    {
      id: 3,
      image: prevCountryImg,
      title: 'Акция: Кухня из формайки с профилем без ручек',
      price: '₪22,000',
      priceNote: 'Цена включает НДС и не включает доставку',
      specs: {
        doors: 'Формайка + профиль без ручек',
        length: '10 м кухни',
        drawers: '10 ящиков с тихим закрытием',
        body: 'Сендвич',
        design: 'Компьютерный дизайн и визуализация',
        delivery: 'Замер и установка включены',
      },
      ctaText: 'Подробнее об акции',
    },
    {
      id: 4,
      image: polymerImg,
      title: 'Акция: Кухня в стиле кантри полимер',
      price: '₪27,500',
      priceNote: 'Цена включает НДС и не включает доставку',
      specs: {
        doors: 'Полимер (кантри)',
        length: '10 м кухни',
        drawers: '10 ящиков с тихим закрытием',
        body: 'Сендвич',
        design: 'Компьютерный дизайн и визуализация',
        delivery: 'Замер и установка включены',
      },
      ctaText: 'Подробнее об акции',
    },
  ] : [
    {
      id: 1,
      image: formaykaBama,
      title: 'Promo: Acrylic Facades with handleless profile',
      price: '₪25,000',
      priceNote: 'Price includes VAT and does not include delivery',
      specs: {
        doors: 'Acrylic facades + profile',
        length: '10 m kitchen',
        drawers: '10 drawers with soft close',
        body: 'Sandwich',
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
        drawers: '10 drawers with soft close',
        body: 'Sandwich',
        design: 'Computerized design & visualization',
        delivery: 'Measurement included',
      },
      ctaText: 'Promotion Details',
    },
    {
      id: 3,
      image: prevCountryImg,
      title: 'Promo: Formica Kitchen with handleless profile',
      price: '₪22,000',
      priceNote: 'Price includes VAT and does not include delivery',
      specs: {
        doors: 'Formica + handleless profile',
        length: '10 m kitchen',
        drawers: '10 drawers with soft close',
        body: 'Sandwich',
        design: 'Computerized design & visualization',
        delivery: 'Measurement & installation included',
      },
      ctaText: 'Promotion Details',
    },
    {
      id: 4,
      image: polymerImg,
      title: 'Promo: Country Style Polymer Kitchen',
      price: '₪27,500',
      priceNote: 'Price includes VAT and does not include delivery',
      specs: {
        doors: 'Country polymer',
        length: '10 m kitchen',
        drawers: '10 drawers with soft close',
        body: 'Sandwich',
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
    body: 'גוף המטבח:',
    design: 'תכנון ועיצוב:',
    delivery: 'מדידה והתקנה:',
  } : language === 'ru' ? {
    doors: 'Двери:',
    length: 'Длина кухни:',
    drawers: 'Кол-во ящиков:',
    body: 'Корпус кухни:',
    design: 'Дизайн:',
    delivery: 'Замер и установка:',
  } : {
    doors: 'Doors:',
    length: 'Kitchen Length:',
    drawers: 'Number of Drawers:',
    body: 'Kitchen Body:',
    design: 'Design:',
    delivery: 'Measurement & Installation:',
  };

  return (
    <Layout>
      <SEO
        title="מבצעים והטבות | Elite Design - מטבחים במחירים מיוחדים"
        description="מבצעי מטבחים מיוחדים של Elite Design. מטבחי אקריל, פורמייקה ועץ במחירים משתלמים עם הובלה והתקנה מקצועית."
        canonical="/promotions"
      />
      <Breadcrumbs items={[{ label: t('nav.promotions'), path: '/promotions', isCurrent: true }]} />
      {/* Hero Banner */}
      <section className="bg-header pt-32 md:pt-40 pb-20">
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
            <p className="font-playfair italic text-lg text-header-foreground/90 mt-2">
              {language === 'he' ? 'עד סוף החודש' : language === 'ru' ? 'до конца месяца' : 'until the end of the month'}
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
                <div
                  className="relative h-full flex flex-col"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px'
                  }}
                >
                  {/* Technical Markers (Corners) */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-black/20" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-black/20" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-black/20" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-black/20" />

                  {/* Coordinates/Technical text decorations */}
                  <div className="absolute top-1 left-2 text-[8px] font-mono text-black/30 tracking-widest hidden md:block">
                    {`X:${100 + index * 45} Y:${240 + index * 12}`}
                  </div>

                  {/* Image with Sale Badge */}
                  <div className="relative h-56 md:h-64 overflow-hidden m-2 border border-black/5">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 uppercase tracking-wide">
                      SALE
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col relative z-10 px-6 pb-6 pt-2">
                    {/* Glassmorphism background for Content Area */}
                    <div className="absolute inset-x-4 inset-y-2 bg-white/40 backdrop-blur-sm -z-10 rounded-sm border border-white/50" />

                    <h3 className="text-lg font-bold text-foreground mb-1 mt-2 sm:line-clamp-1 min-h-[30px]" style={{ lineHeight: '1.2' }}>{promo.title}</h3>
                    <div className="flex items-baseline justify-center gap-2" style={{ minHeight: '60px' }}>
                      <p className="text-3xl font-extrabold text-primary">{promo.price}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4 text-center min-h-[30px] flex items-center justify-center" style={{ lineHeight: '1.4' }}>{promo.priceNote}</p>

                    {/* Specs Grid - Flexible on mobile, strict on desktop */}
                    <div className="text-sm">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-black/5 py-1.5 sm:py-0" style={{ minHeight: '30px' }}>
                        <span className="text-muted-foreground font-mono text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-0">{specLabels.doors}</span>
                        <span className="font-medium text-foreground text-left sm:text-right">{promo.specs.doors}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-black/5 py-1.5 sm:py-0" style={{ minHeight: '30px' }}>
                        <span className="text-muted-foreground font-mono text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-0">{specLabels.length}</span>
                        <span className="font-medium text-foreground text-left sm:text-right">{promo.specs.length}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-black/5 py-1.5 sm:py-0" style={{ minHeight: '30px' }}>
                        <span className="text-muted-foreground font-mono text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-0">{specLabels.drawers}</span>
                        <span className="font-medium text-foreground text-left sm:text-right">{promo.specs.drawers}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-black/5 py-1.5 sm:py-0" style={{ minHeight: '30px' }}>
                        <span className="text-muted-foreground font-mono text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-0">{specLabels.body}</span>
                        <span className="font-medium text-foreground text-left sm:text-right">{promo.specs.body}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-black/5 py-1.5 sm:py-0" style={{ minHeight: '30px' }}>
                        <span className="text-muted-foreground font-mono text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-0">{specLabels.design}</span>
                        <span className="font-medium text-foreground text-left sm:text-right">{promo.specs.design}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-black/5 py-1.5 sm:py-0" style={{ minHeight: '30px' }}>
                        <span className="text-muted-foreground font-mono text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-0">{specLabels.delivery}</span>
                        <span className="font-medium text-foreground text-left sm:text-right">{promo.specs.delivery}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto pt-4 flex justify-center w-full">
                      <a
                        href="#contact"
                        className="inline-block px-8 py-1 border border-primary text-primary text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all bg-white/80 backdrop-blur-sm shadow-sm"
                        style={{ height: '30px', lineHeight: '22px' }}
                      >
                        {promo.ctaText}
                      </a>
                    </div>
                  </div>
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

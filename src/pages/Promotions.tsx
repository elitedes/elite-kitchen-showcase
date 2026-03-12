import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
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
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const termsText = {
    he: {
      btn: "תנאי המבצע",
      disclaimer: "*המחיר תקף בתנאים מסוימים. לפרטים נוספים:",
      title: "תנאי המבצע",
      content: `המחירים המצוינים בקטגוריית המבצעים תקפים בכפוף לתנאים הבאים:

הכללת דגמים: המבצע חל אך ורק על דגמי מטבחים, חומרים, מידות וצבעים המשתתפים במבצע.

המחשה בלבד: התמונות המופיעות באתר נועדו להמחשה בלבד ואינן בהכרח משקפות את המפרט המדויק של המטבח המוצע במסגרת המבצע.

משלוח: המחירים המצוינים אינם כוללים דמי משלוח.

תנאי תשלום: המחיר תקף לתשלום בהעברה בנקאית או בהמחאה בנקאית. בהתאם לתנאי חברת האשראי ומספר התשלומים, עשויה לחול תוספת מחיר בגין עמלות סליקה במקרה של תשלום בכרטיס אשראי או פריסה לתשלומים.

מפרט כלול: מחיר המבצע כולל ארונות מטבח תחתונים ועליונים באורך הכולל המצוין בתיאור המבצע.

מרכיבים שאינם כלולים:
• שיש / משטח עבודה.
• כיור.
• ברז.
• מוצרי חשמל.
• אביזרים נלווים ואלמנטים נוספים.
• פירוק ופינוי מטבח ישן, וכן עבודות בנייה או הכנה נוספות.

זמן אספקה: זמן האספקה הינו עד 45 ימי עבודה, אלא אם סוכם אחרת מראש וצוין בהסכם.

קביעת מחיר סופי: העלות הסופית של הפרויקט תיקבע רק לאחר ביצוע מדידה של החלל ואישור סופי של עיצוב המטבח.

שינויים ועדכונים: החברה שומרת לעצמה את הזכות המלאה לשנות, לעדכן או לבטל את תנאי המבצע בכל עת וללא הודעה מוקדמת.

תוקף המבצע: המבצע בתוקף עד סוף החודש הקרוב או עד גמר המלאי (המוקדם מביניהם).`
    },
    ru: {
      btn: "Условия акции",
      disclaimer: "*Цена действует при определённых условиях. Подробности:",
      title: "Условия акции",
      content: `Цены, указанные в разделе акций, действуют при соблюдении следующих условий:

Акция распространяется только на определённые модели кухонь, материалы, размеры и цвета, участвующие в акции.

Фотографии на сайте представлены исключительно в иллюстративных целях и могут не соответствовать точной комплектации кухни, предлагаемой в рамках акции.

Указанные цены не включают стоимость доставки.

Цена действительна при оплате банковским переводом или банковским чеком.

При оплате кредитной картой или в рассрочку стоимость может увеличиваться в соответствии с условиями платежной системы и количеством платежей.

Цена акции включает нижние и верхние кухонные шкафы общей длиной, указанной в описании предложения.

В стоимость не входит столешница (шайш / countertop).

В стоимость также не входят:
• мойка
• смеситель
• бытовая техника
• электротовары
• аксессуары и дополнительные элементы

Цена не включает демонтаж и вывоз старой кухни, а также дополнительные строительные или подготовительные работы.

Срок поставки составляет до 45 рабочих дней, если иное не согласовано заранее и не указано в договоре.

Окончательная стоимость проекта определяется после замера помещения и утверждения дизайна кухни.

Компания оставляет за собой право изменять условия акции или прекращать её действие без предварительного уведомления.

Акция действует до окончания текущего месяца или до окончания складских запасов.`
    },
    en: {
      btn: "Terms and Conditions",
      disclaimer: "*Price is valid under certain conditions. Details:",
      title: "Terms and Conditions",
      content: `The prices indicated in the promotions section are valid subject to the following conditions:

The promotion applies only to specific kitchen models, materials, sizes, and colors participating in the promotion.

Photos on the website are for illustrative purposes only and may not match the exact specifications of the kitchen offered in the promotion.

The indicated prices do not include delivery costs.

The price is valid for payment by bank transfer or bank check.

When paying by credit card or in installments, the cost may increase in accordance with the terms of the payment system and the number of payments.

The promotion price includes lower and upper kitchen cabinets for the total length specified in the offer description.

The price does not include the worktop (countertop).

The price also does not include:
• sink
• faucet
• household appliances
• electrical goods
• accessories and additional elements

The price does not include dismantling and removal of the old kitchen, as well as additional construction or preparatory work.

Delivery time is up to 45 working days, unless otherwise agreed in advance and specified in the contract.

The final cost of the project is determined after measuring the room and approving the kitchen design.

The company reserves the right to change the terms of the promotion or terminate it without prior notice.

The promotion is valid until the end of the current month or until out of stock.`
    }
  };

  const currentTerms = termsText[language as keyof typeof termsText] || termsText.en;

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
      {/* Hero Banner */}
      <section className="bg-header text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heebo mb-2">
              {language === 'ru' ? 'Специальные акции' : language === 'he' ? 'מבצעים מיוחדים' : 'Special Promotions'}
            </h1>
            <p className="text-2xl font-playfair italic text-white/90 mb-2">
              Special Offers
            </p>
            <p className="text-xl font-playfair italic text-white/80">
              {language === 'ru' ? 'до конца месяца' : language === 'he' ? 'עד סוף החודש' : 'until the end of the month'}
            </p>
          </motion.div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: t('nav.promotions'), path: '/promotions', isCurrent: true }]} />

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
                    <div className="flex flex-col items-center justify-center mb-4 min-h-[50px] gap-1">
                      <p className="text-xs text-muted-foreground text-center" style={{ lineHeight: '1.4' }}>{promo.priceNote}</p>
                      <p className="text-[10px] text-muted-foreground/80 text-center flex items-center justify-center flex-wrap gap-1">
                        <span>{currentTerms.disclaimer}</span>
                        <button 
                          onClick={() => setIsTermsOpen(true)} 
                          className="text-primary hover:underline font-bold bg-transparent border-none p-0 cursor-pointer inline"
                        >
                          {currentTerms.btn}
                        </button>
                      </p>
                    </div>

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

      {/* Terms and Conditions Modal */}
      <AnimatePresence>
        {isTermsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsTermsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden"
              dir={dir}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                <h3 className="text-2xl font-bold text-foreground">{currentTerms.title}</h3>
                <button
                  onClick={() => setIsTermsOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto custom-scrollbar">
                <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-wrap leading-relaxed">
                  {currentTerms.content}
                </div>
              </div>
              <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex justify-end">
                 <button
                   onClick={() => setIsTermsOpen(false)}
                   className="px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
                 >
                   {language === 'he' ? 'סגור' : language === 'ru' ? 'Закрыть' : 'Close'}
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Promotions;

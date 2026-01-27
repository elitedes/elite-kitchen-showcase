import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

import customerAsnat from '@/assets/testimonials/customer-1.jpg';
import customerMeir from '@/assets/testimonials/customer-2.jpg';
import customerYaniv from '@/assets/testimonials/customer-3.jpg';
import customer4 from '@/assets/testimonials/customer-4.jpg';
import customer5 from '@/assets/testimonials/customer-5.jpg';
import customer6 from '@/assets/testimonials/customer-6.jpg';

const testimonials = [
  {
    name: 'אסנת א. מיתר',
    nameRu: 'Аснат А., Мейтар',
    nameEn: 'Asnat A., Meitar',
    text: '"מכל הבחינות הם באמת מדהימים, הכול היה בסדר, עמידה בזמנים כמו שהבטיחו ואפילו מעבר למה שהבטיחו, באמת, רק מילים טובות"',
    textRu: '"Во всех отношениях они действительно потрясающие, всё было в порядке, соблюдение сроков как обещали и даже больше"',
    textEn: '"In all respects they are truly amazing, everything was fine, meeting deadlines as promised and even beyond what was promised, truly, only good words"',
    rating: 5,
    image: customerAsnat,
  },
  {
    name: 'מאיר זכות',
    nameRu: 'Меир Захут',
    nameEn: 'Meir Zahut',
    text: '"הגעתי בהמלצת חבר, שירות אדיב ומקצועי, יחס מקסים במיוחד של יניב המקסימה משירות הלקוחות. ממליצים בחום!"',
    textRu: '"Пришёл по рекомендации друга, вежливое и профессиональное обслуживание, особенно приятное отношение. Очень рекомендую!"',
    textEn: '"I came on the recommendation of a friend, kind and professional service, especially charming attitude from Yaniv in customer service. Highly recommend!"',
    rating: 5,
    image: customerMeir,
  },
  {
    name: 'יניב לוב',
    nameRu: 'Янив Лов',
    nameEn: 'Yaniv Lov',
    text: '"שותפים מלאים מרגע התכנון שבוצע במקצועיות נדירה ועד למימוש המושלם, תודה לקמילה על הגשמת חלום!"',
    textRu: '"Полные партнёры с момента профессионального планирования до идеальной реализации, спасибо за воплощение мечты!"',
    textEn: '"Full partners from the moment of planning carried out with rare professionalism to the perfect realization, thanks to Camila for fulfilling a dream!"',
    rating: 5,
    image: customerYaniv,
  },
  {
    name: 'רחל כהן',
    nameRu: 'Рахель Коэн',
    nameEn: 'Rachel Cohen',
    text: '"המטבח שלנו הפך לחלל הכי יפה בבית. העיצוב המודרני והאיכות המעולה עלו על כל הציפיות. תודה רבה לצוות המקצועי!"',
    textRu: '"Наша кухня стала самым красивым пространством в доме. Современный дизайн и отличное качество превзошли все ожидания!"',
    textEn: '"Our kitchen has become the most beautiful space in the house. The modern design and excellent quality exceeded all expectations. Many thanks to the professional team!"',
    rating: 5,
    image: customer4,
  },
  {
    name: 'שירה לוי',
    nameRu: 'Шира Леви',
    nameEn: 'Shira Levi',
    text: '"מהתכנון ועד ההתקנה - הכול היה מושלם. הצוות המקצועי הקשיב לכל הבקשות שלי והתוצאה פשוט מדהימה!"',
    textRu: '"От планирования до установки - всё было идеально. Профессиональная команда выслушала все мои пожелания!"',
    textEn: '"From planning to installation - everything was perfect. The professional team listened to all my requests and the result is just amazing!"',
    rating: 5,
    image: customer5,
  },
  {
    name: 'דוד אברהם',
    nameRu: 'Давид Авраам',
    nameEn: 'David Avraham',
    text: '"חיפשנו מטבח איכותי במחיר הוגן וממצאנו הרבה יותר מזה. השירות, האיכות והמקצועיות פשוט יוצאי דופן!"',
    textRu: '"Искали качественную кухню по справедливой цене и нашли намного больше. Сервис, качество и профессионализм просто исключительные!"',
    textEn: '"We were looking for a high-quality kitchen at a fair price and found much more than that. The service, quality, and professionalism are simply outstanding!"',
    rating: 5,
    image: customer6,
  },
];

const ITEMS_PER_PAGE = 3;

const TestimonialsSection = () => {
  const { t, language, dir } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  const currentTestimonials = testimonials.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-muted">
      {/* Decorative kitchen images background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 start-0 w-1/4 h-full bg-gradient-to-e from-muted to-transparent" />
        <div className="absolute top-0 end-0 w-1/4 h-full bg-gradient-to-s from-muted to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="decorative-text">{t('testimonials.decorative')}</p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            className="absolute start-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-card shadow-lg hover:bg-muted p-3 rounded-full transition-all z-10"
          >
            {dir === 'rtl' ? <ChevronRight className="w-5 h-5 text-foreground" /> : <ChevronLeft className="w-5 h-5 text-foreground" />}
          </button>
          <button
            onClick={nextPage}
            className="absolute end-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-card shadow-lg hover:bg-muted p-3 rounded-full transition-all z-10"
          >
            {dir === 'rtl' ? <ChevronLeft className="w-5 h-5 text-foreground" /> : <ChevronRight className="w-5 h-5 text-foreground" />}
          </button>

          {/* Testimonials Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {currentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${currentPage}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-8 shadow-lg rounded-lg"
                >
                  {/* Customer Photo */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={language === 'he' ? testimonial.name : language === 'ru' ? testimonial.nameRu : testimonial.nameEn}
                      className="w-20 h-20 rounded-full object-cover border-4 border-accent shadow-md"
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                    {language === 'he' ? testimonial.text : language === 'ru' ? testimonial.textRu : testimonial.textEn}
                  </p>

                  {/* Name */}
                  <p className="text-center font-semibold text-foreground">
                    {language === 'he' ? testimonial.name : language === 'ru' ? testimonial.nameRu : testimonial.nameEn}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, dot) => (
              <button
                key={dot}
                onClick={() => setCurrentPage(dot)}
                className={`w-3 h-3 rounded-full transition-all ${dot === currentPage
                  ? 'bg-accent scale-125'
                  : 'bg-foreground/30 hover:bg-foreground/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

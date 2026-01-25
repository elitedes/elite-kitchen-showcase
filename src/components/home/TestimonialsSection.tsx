import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  {
    name: 'אסנת א. מיתר',
    nameRu: 'Аснат А., Мейтар',
    text: '"מכל הבחינות הם באמת מדהימים, הכול היה בסדר, עמידה בזמנים כמו שהבטיחו ואפילו מעבר למה שהבטיחו, באמת, רק מילים טובות"',
    textRu: '"Во всех отношениях они действительно потрясающие, всё было в порядке, соблюдение сроков как обещали и даже больше"',
    rating: 5,
  },
  {
    name: 'מאיר זכות',
    nameRu: 'Меир Захут',
    text: '"הגעתי בהמלצת חבר, שירות אדיב ומקצועי, יחס מקסים במיוחד של יניב המקסימה משירות הלקוחות. ממליצים בחום!"',
    textRu: '"Пришёл по рекомендации друга, вежливое и профессиональное обслуживание, особенно приятное отношение. Очень рекомендую!"',
    rating: 5,
  },
  {
    name: 'יניב לוב',
    nameRu: 'Янив Лов',
    text: '"שותפים מלאים מרגע התכנון שבוצע במקצועיות נדירה ועד למימוש המושלם, תודה לקמילה על הגשמת חלום!"',
    textRu: '"Полные партнёры с момента профессионального планирования до идеальной реализации, спасибо за воплощение мечты!"',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { t, language, dir } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
            onClick={prevTestimonial}
            className="absolute start-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-card shadow-lg hover:bg-muted p-3 rounded-full transition-all z-10"
          >
            {dir === 'rtl' ? <ChevronRight className="w-5 h-5 text-foreground" /> : <ChevronLeft className="w-5 h-5 text-foreground" />}
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute end-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-card shadow-lg hover:bg-muted p-3 rounded-full transition-all z-10"
          >
            {dir === 'rtl' ? <ChevronLeft className="w-5 h-5 text-foreground" /> : <ChevronRight className="w-5 h-5 text-foreground" />}
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 shadow-lg"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {language === 'he' ? testimonial.text : testimonial.textRu}
                </p>

                {/* Name */}
                <p className="text-center font-semibold text-foreground">
                  {language === 'he' ? testimonial.name : testimonial.nameRu}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2, 3, 4].map((dot) => (
              <button
                key={dot}
                className={`w-2 h-2 rounded-full transition-all ${
                  dot === 0 ? 'bg-foreground' : 'bg-foreground/30'
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

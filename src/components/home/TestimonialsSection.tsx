import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

import customer1 from '@/assets/testimonials/customer-1.jpg';
import customer2 from '@/assets/testimonials/customer-2.jpg';
import customer3 from '@/assets/testimonials/customer-3.jpg';

const testimonials = [
  {
    name: 'אסנת א. מיתר',
    nameRu: 'Аснат А., Мейтар',
    text: '"מכל הבחינות הם באמת מדהימים, הכול היה בסדר, עמידה בזמנים כמו שהבטיחו ואפילו מעבר למה שהבטיחו, באמת, רק מילים טובות"',
    textRu: '"Во всех отношениях они действительно потрясающие, всё было в порядке, соблюдение сроков как обещали и даже больше"',
    rating: 5,
    image: customer1,
  },
  {
    name: 'מאיר זכות',
    nameRu: 'Меир Захут',
    text: '"הגעתי בהמלצת חבר, שירות אדיב ומקצועי, יחס מקסים במיוחד של יניב המקסימה משירות הלקוחות. ממליצים בחום!"',
    textRu: '"Пришёл по рекомендации друга, вежливое и профессиональное обслуживание, особенно приятное отношение. Очень рекомендую!"',
    rating: 5,
    image: customer2,
  },
  {
    name: 'יניב לוב',
    nameRu: 'Янив Лов',
    text: '"שותפים מלאים מרגע התכנון שבוצע במקצועיות נדירה ועד למימוש המושלם, תודה לקמילה על הגשמת חלום!"',
    textRu: '"Полные партнёры с момента профессионального планирования до идеальной реализации, спасибо за воплощение мечты!"',
    rating: 5,
    image: customer3,
  },
];

const TestimonialsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden bg-muted">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 start-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 end-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="decorative-text">{t('testimonials.decorative')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute -top-4 start-8">
                  <div className="bg-gold p-3 rounded-full shadow-lg">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Customer Photo */}
                <div className="flex justify-center mb-6 pt-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-gold/20 shadow-xl">
                      <img
                        src={testimonial.image}
                        alt={language === 'he' ? testimonial.name : testimonial.nameRu}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 start-1/2 -translate-x-1/2 bg-gold px-3 py-1 rounded-full">
                      <div className="flex gap-0.5">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-white text-white" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Quote Text */}
                <p className="text-muted-foreground text-center mb-6 leading-relaxed flex-grow text-sm md:text-base">
                  {language === 'he' ? testimonial.text : testimonial.textRu}
                </p>

                {/* Customer Name */}
                <div className="text-center pt-4 border-t border-border">
                  <p className="font-semibold text-foreground text-lg">
                    {language === 'he' ? testimonial.name : testimonial.nameRu}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-2 mt-12"
        >
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gold"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { motion } from "framer-motion";
import { Star, MessageSquareQuote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const GoogleReviewsSection = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      id: 1,
      author: "Dina Sh.",
      rating: 5,
      comment: "Заказали кухню, после того, как подруга получила свою. Сразу подкупило качество, оперативность и пунктуальность компании. Роман был терпелив и вежлив на всем протяжении процесса. Кухней наслаждаемся каждый день!",
      className: "md:col-span-2"
    },
    {
      id: 2,
      author: "Leonid Valentina",
      rating: 5,
      comment: "אני מרגיש צורך מיוחד להביע את תודתי לצוות Elite Design kitchens, בראשותו של רומן. אני מעריך אתכם כאנשי מקצוע מיומנים ביותר. אתם לא רק מוכרים את המוצר שלכם - מטבחים - אתם פותרים את הבעיה של הלקוח שלכם בגישה יצירתית. זה בהחלט היה המקרה איתנו. המטבח שלכם עמד במבחן הזמן, הוכיח את איכותו הגבוהה ונוחותו. וכל העצות שלכם הוכיחו את עצמן כבעלות ערך. ומה שחשוב מאין כמוהו הוא שתשמרו על קשר עם הלקוחות שלכם. אני מנצל הזדמנות זו כדי להמליץ на החברה שלכם לכל מי שבונה מטבח. מוניטין אפשר לצבור, אבל צריך לשמור עליו מדי יום. וזה בדיוק מה שאתם עושים. אני מאחל ל-Elite Design kitchens המשך שגשוג.",
      className: "md:col-span-3",
      isFeatured: true,
    },
    {
      id: 3,
      author: "Sasha Gohlerner",
      rating: 5,
      comment: "נגר מצויין ברמה הגבוהה ביותר, עשה הכל באופן מושלם ועמד בזמנים, מומלץ ביותר!!!!",
      className: "md:col-span-3"
    },
    {
      id: 4,
      author: "Yevgenia Nabutovskaya",
      rating: 5,
      comment: "The kitchen furniture was delivered and installed in time. Service is excellent, manager is punctual and professional. I recommend Elite Design Kitchens to everybody.",
      className: "md:col-span-2"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
              {t('testimonials.header')}
            </h2>
            <p className="decorative-text mb-6">
              {t('testimonials.decorative')}
            </p>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm border border-green-200">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                {t('testimonials.verified')}
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.a
            href="https://www.google.com/search?rlz=1C1KNTJ_enIL1065IL1180&sca_esv=3d16839f334d68f5&cs=1&sxsrf=ANbL-n5XvZF9c4iypi0e6t6WgNbDYvnUug:1769615050272&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qORqilvmwHq9cJfbubSTp2DwBtW8gnELCUIhLNLxshEwdTWdDactlEoLKtEBZHZubTl5Cn5H4suZA-5ROSxg5vWEVqbTOjyxj2PRP-2SlYHhP-U8fSTJk1-8fxGE5SUymqsJaKnQ%3D&q=Elite+Design+kitchens+%26+more+%D0%9E%D1%82%D0%B7%D1%8B%D0%B2%D1%8B&sa=X&ved=2ahUKEwifsNfjya6SAxXL2wIHHWxlAJ0Q0bkNegQIIBAH&biw=1920&bih=963&dpr=1&aic=0&sei=OoWEad6YEeKhi-gPwOLPgA4"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 group"
          >
            <div className="text-right hidden sm:block">
              <div className="text-2xl font-bold text-charcoal">5.0</div>
              <div className="text-sm text-muted-foreground group-hover:text-gold transition-colors">5 on Google Maps</div>
            </div>
            <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-100 group-hover:border-gold/30 transition-all group-hover:scale-110">
              <img src="/placeholder.svg" className="w-8 h-8 opacity-20" alt="G" />
              <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-blue-500">G</div>
            </div>
          </motion.a>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,_auto)]"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`
                relative p-8 rounded-[24px] overflow-hidden
                backdrop-blur-[15px] bg-white/70 border border-white/40
                shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
                flex flex-col justify-between
                ${review.className || ''}
              `}
            >
              <MessageSquareQuote className="absolute -top-4 -right-4 w-32 h-32 text-gold/5 pointer-events-none" />

              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className={`text-charcoal leading-relaxed mb-8 italic ${review.isFeatured ? 'text-lg' : 'text-base'}`}>
                  "{review.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-charcoal/5 rounded-full flex items-center justify-center text-gold font-bold text-xl uppercase shadow-inner">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-charcoal text-lg">{review.author}</h4>
                  <p className="text-sm text-muted-foreground">Google Local Guide</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.google.com/search?rlz=1C1KNTJ_enIL1065IL1180&sca_esv=3d16839f334d68f5&cs=1&sxsrf=ANbL-n5XvZF9c4iypi0e6t6WgNbDYvnUug:1769615050272&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qORqilvmwHq9cJfbubSTp2DwBtW8gnELCUIhLNLxshEwdTWdDactlEoLKtEBZHZubTl5Cn5H4suZA-5ROSxg5vWEVqbTOjyxj2PRP-2SlYHhP-U8fSTJk1-8fxGE5SUymqsJaKnQ%3D&q=Elite+Design+kitchens+%26+more+%D0%9E%D1%82%D0%B7%D1%8B%D0%B2%D1%8B&sa=X&ved=2ahUKEwifsNfjya6SAxXL2wIHHWxlAJ0Q0bkNegQIIBAH&biw=1920&bih=963&dpr=1&aic=0&sei=OoWEad6YEeKhi-gPwOLPgA4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal/60 hover:text-gold transition-colors font-medium underline underline-offset-8 decoration-gold/30 hover:decoration-gold"
          >
            Read more reviews on Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ShieldCheck, Waves, X, Thermometer, VolumeX, Magnet, PaintBucket, Wrench, CircleCheckBig, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSection from '@/components/home/ContactSection';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

const PolymerDoors = () => {
  const { t, language, dir } = useLanguage();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const galleryImages = [
    { src: '/assets/doors/polymer_2panel.webp', delay: 0 },
    { src: '/assets/doors/polymer_3pasim.webp', delay: 0.1 },
    { src: '/assets/doors/polymer_iks.webp', delay: 0.2 },
    { src: '/assets/doors/polymer_lift.webp', delay: 0.3 },
    { src: '/assets/doors/polymer_pasim.webp', delay: 0.4 },
    { src: '/assets/doors/polymer_vitrina.webp', delay: 0.5 },
    { src: '/assets/doors/polymer_wave.webp', delay: 0.6 },
  ];

  const openImage = (idx: number) => setSelectedIdx(idx);
  const closeModal = () => setSelectedIdx(null);
  const goNext = () => setSelectedIdx(prev => prev !== null ? (prev + 1) % galleryImages.length : null);
  const goPrev = () => setSelectedIdx(prev => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);

  // Keyboard navigation: Escape / ArrowLeft / ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const features = [
    {
      icon: <Waves className="w-8 h-8" />,
      title: language === 'he' ? 'עמידות מלאה למים' : language === 'ru' ? 'Полная водонепроницаемость' : '100% Waterproof',
      desc: language === 'he' ? 'מתאימה במיוחד לחדר אמבטיה, שירותים וחדרים רטובים' : language === 'ru' ? 'Идеально подходит для ванных комнат и влажных помещений' : 'Ideal for bathrooms and wet rooms'
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: language === 'he' ? 'עמידות בפני מזיקים' : language === 'ru' ? 'Защита от вредителей' : 'Pest Resistant',
      desc: language === 'he' ? 'חומר פולימרי סינתטי שאינו נפגע מטרמיטים ומזיקים' : language === 'ru' ? 'Синтетический полимерный материал, не подверженный воздействию насекомых' : 'Synthetic polymer material immune to termites and pests'
    },
    {
      icon: <VolumeX className="w-8 h-8" />,
      title: language === 'he' ? 'בידוד רעשים משופר' : language === 'ru' ? 'Улучшенная звукоизоляция' : 'Improved Sound Insulation',
      desc: language === 'he' ? 'גומי אטימה איכותי מסביב למשקוף' : language === 'ru' ? 'Качественный резиновый уплотнитель вокруг коробки' : 'High-quality rubber seal around the frame'
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: language === 'he' ? 'בידוד תרמי' : language === 'ru' ? 'Теплоизоляция' : 'Thermal Insulation',
      desc: language === 'he' ? 'שמירה על טמפרטורה נוחה בין חללי הבית' : language === 'ru' ? 'Поддержание комфортной температуры между помещениями' : 'Maintains comfortable temperatures between rooms'
    },
    {
      icon: <Magnet className="w-8 h-8" />,
      title: language === 'he' ? 'טריקה שקטה' : language === 'ru' ? 'Тихое закрытие' : 'Silent Closing',
      desc: language === 'he' ? 'מנעול מגנטי איכותי לנוחות שימוש מירבית' : language === 'ru' ? 'Качественный магнитный замок для максимального комфорта' : 'High-quality magnetic lock for maximum comfort'
    },
    {
      icon: <PaintBucket className="w-8 h-8" />,
      title: language === 'he' ? 'תחזוקה קלה במיוחד' : language === 'ru' ? 'Очень простой уход' : 'Extremely Easy Maintenance',
      desc: language === 'he' ? 'ניקוי פשוט ומהיר, צבע שלייפלאק איכותי בתנור' : language === 'ru' ? 'Легкая и быстрая очистка, качественная покраска' : 'Quick and simple cleaning, high-quality oven paint'
    }
  ];

  // Split gallery into rows: 4 + 3
  const row1 = [galleryImages[0], galleryImages[1], galleryImages[2], galleryImages[3]];
  const row2 = [galleryImages[4], galleryImages[5], galleryImages[6]];

  return (
    <Layout>
      <SEO
        title={t('seo.polymer_doors.title')}
        description={t('seo.polymer_doors.desc')}
        canonical="/polymer-doors"
      />
      <div className="bg-[#FAF8F5] min-h-screen font-sans selection:bg-accent selection:text-white" dir={dir}>
        <WhatsAppButton />

        {/* ========== 1. Hero Section ========== */}
        <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/doors/polymer_door_hero.png"
              alt="Premium Polymer Interior Door"
              className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
              style={{ transformOrigin: "center center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/60 via-[#030303]/30 to-[#FAF8F5] backdrop-blur-[1px]" />
          </div>

          <div className="relative z-20 container mx-auto px-4 pt-20 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-5xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-white filter drop-shadow-lg">
                  {language === 'he' ? 'דלתות פנים' : language === 'ru' ? 'Межкомнатные двери' : 'Interior Doors'}
                </span>
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFF1CC] to-[#D4AF37] filter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  {language === 'he' ? 'פולימר מלא 100%' : language === 'ru' ? 'из 100% полимера' : '100% Solid Polymer'}
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="text-xl md:text-2xl font-light text-white/90 mb-0 max-w-2xl mx-auto drop-shadow-md">
                {language === 'he' ? 'דלת עמידה למים לחדר רחצה ולכל הבית, בסטנדרט הגבוה ביותר.' : language === 'ru' ? 'Водонепроницаемые двери для ванной и всего дома высочайшего стандарта.' : 'Waterproof doors for bathrooms and the entire house, at the highest standard.'}
              </p>
            </motion.div>
          </div>
        </section>

        <Breadcrumbs items={[{ label: t('nav.polymer_doors'), path: '/polymer-doors', isCurrent: true }]} />

        {/* ========== 2. Gallery Section (Models Collection) ========== */}
        <section className="py-24 bg-[#E5E0D8]/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6">
                {language === 'he' ? 'קולקציית דגמים' : language === 'ru' ? 'Коллекция моделей' : 'Models Collection'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {language === 'he' ? 'מגוון רחב של דגמים ועיצובים – החל מחלקים מודרניים, דרך חריטות מיוחדות, ועד שילובים עם זכוכית וויטרינות.' : language === 'ru' ? 'Широкий выбор моделей – от гладких современных до уникальных фрезеровок и вариантов со стеклом.' : 'A wide variety of models – from sleek modern finishes to special engravings and glass combinations.'}
              </p>
            </div>

            {/* Row 1: 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {row1.map((img) => (
                <motion.div
                  key={galleryImages.indexOf(img)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: img.delay, duration: 0.6 }}
                  onClick={() => openImage(galleryImages.indexOf(img))}
                  className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden cursor-pointer bg-white shadow-md hover:shadow-2xl transition-all duration-500"
                >
                  <img src={img.src} alt={`Door model ${galleryImages.indexOf(img) + 1}`} className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:from-black/30 transition-colors duration-500" />
                </motion.div>
              ))}
            </div>

            {/* Row 2: 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8">
              {row2.map((img) => (
                <motion.div
                  key={galleryImages.indexOf(img)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: img.delay, duration: 0.6 }}
                  onClick={() => openImage(galleryImages.indexOf(img))}
                  className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden cursor-pointer bg-white shadow-md hover:shadow-2xl transition-all duration-500"
                >
                  <img src={img.src} alt={`Door model ${galleryImages.indexOf(img) + 1}`} className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:from-black/30 transition-colors duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 3. Features Grid (Преимущества) ========== */}
        <section className="py-24 bg-[#FAF8F5]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6">
                {language === 'he' ? 'יתרונות דלתות פנים פולימר' : language === 'ru' ? 'Преимущества полимерных дверей' : 'Advantages of Polymer Doors'}
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5E0D8] group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#FAF8F5] flex items-center justify-center text-accent mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 4. Warranty Banner (Гарантия) ========== */}
        <section className="bg-charcoal text-white py-12 border-y-8 border-accent">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-4"
            >
              <Shield className="w-16 h-16 text-accent" />
              <h3 className="text-3xl md:text-5xl font-black tracking-tight">
                {language === 'he' ? '8 שנות אחריות מלאה' : language === 'ru' ? '8 лет полной гарантии' : '8 Years Full Warranty'}
              </h3>
              <p className="text-xl text-white/80 max-w-2xl mt-2">
                {language === 'he' ? 'אחריות מפני נזקי מים ולחות, מה שמבטיח שקט נפשי ואמינות לאורך שנים יחד עם עמידות מרהיבה בתנאי היומיום.' : language === 'ru' ? 'Гарантия от повреждений водой и влагой, обеспечивающая душевное спокойствие и надежность на долгие годы.' : 'Warranty against water and moisture damage, ensuring peace of mind and reliability for years.'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ========== 5. Intro Section ========== */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-lg border border-[#E5E0D8] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-charcoal/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 space-y-8"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                  {language === 'he' ? 'הבחירה המובילה בישראל' : language === 'ru' ? 'Ведущий выбор в Израиле' : 'The Leading Choice in Israel'}
                </h2>
                <div className="prose prose-lg prose-gray max-w-none text-muted-foreground leading-relaxed">
                  <p>
                    {language === 'he' 
                      ? 'דלתות פנים פולימר מלא הן הבחירה למי שמחפש דלת פנים עמידה למים, חזקה ואיכותית לאורך שנים. הדלת מיוצרת מיציקת פולימר מלא 100% מקשה אחת, טכנולוגיה מתקדמת המעניקה עמידות גבוהה במיוחד בפני מים, לחות, מזיקים ושחיקה יומיומית.'
                      : language === 'ru' 
                      ? 'Межкомнатные цельнополимерные двери – это выбор тех, кто ищет водонепроницаемую, прочную и качественную дверь на долгие годы. Дверь изготовлена из 100% цельного литого полимера по передовой технологии, обеспечивающей исключительно высокую устойчивость к воде, влаге, вредителям и повседневному износу.'
                      : 'Solid polymer interior doors are the choice for those looking for a waterproof, strong, and high-quality door that lasts for years. The door is manufactured from a single piece of 100% solid cast polymer, an advanced technology providing exceptionally high resistance to water, moisture, pests, and daily wear.'}
                  </p>
                  <p>
                    {language === 'he'
                      ? 'דלתות פולימר מתאימות במיוחד לחדרי רחצה, שירותים וחדרים רטובים, מכיוון שהן אינן מתנפחות, אינן מתעוותות ואינן ניזוקות ממגע עם מים. מדובר בפתרון אידיאלי גם לכל שאר חדרי הבית, כגון חדרי שינה, סלון או משרדים, המעניק מראה מודרני ואחיד לכל הדירה.'
                      : language === 'ru'
                      ? 'Полимерные двери особенно подходят для ванных комнат, туалетов и влажных помещений, поскольку они не разбухают, не деформируются и не повреждаются при контакте с водой. Это также идеальное решение для всех остальных комнат в доме, таких как спальни, гостиные или офисы, обеспечивающее современный и единообразный вид всей квартире.'
                      : 'Polymer doors are particularly suitable for bathrooms, toilets, and wet rooms, as they do not swell, warp, or suffer damage from water contact. It is also an ideal solution for all other rooms in the home, such as bedrooms, living rooms, or offices, providing a modern and uniform look to the entire apartment.'}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4 bg-[#FAF8F5] p-6 rounded-2xl border border-[#E5E0D8]">
                  <Wrench className="w-10 h-10 text-accent shrink-0" />
                  <p className="font-medium text-charcoal">
                    {language === 'he'
                      ? 'הדלת מגיעה עם משקוף פולימר יצוק 100% מסוג WPC, המספק הגנה מלאה מפני חדירת מים ומונע נזקי רטיבות לאורך זמן.'
                      : language === 'ru'
                      ? 'Дверь поставляется с коробкой из 100% литого полимера WPC, обеспечивающей полную защиту от проникновения воды и предотвращающей повреждения от влаги с течением времени.'
                      : 'The door comes with a 100% cast WPC polymer frame, providing full protection against water penetration and preventing moisture damage over time.'}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========== 6. Specs Details Section ========== */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <motion.div
                initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">1</span>
                    {language === 'he' ? 'גימור יוקרתי' : language === 'ru' ? 'Роскошная отделка' : 'Luxury Finish'}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === 'he' 
                      ? 'דלתות הפולימר מצופות בחמש שכבות צבע בתנור בגימור שלייפלאק יוקרתי, במדמנה לקבלת מראה חלק ומודרני ועמידות גבוהה לאורך זמן. הצביעה מתבצעת ברמה אחידה גם על העלה וגם על המשקוף.' 
                      : language === 'ru' 
                      ? 'Полимерные двери покрыты пятью слоями печной краски с роскошной отделкой шляйфлак для получения гладкого и современного вида и высокой прочности. Окраска равномерно наносится как на полотно, так и на коробку.' 
                      : 'Polymer doors are coated with five layers of oven-baked paint with a luxury schleiflack finish, for a smooth and modern look and high durability over time. The painting is performed evenly on both the door and the frame.'}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">2</span>
                    {language === 'he' ? 'משקוף WPC מתקדם' : language === 'ru' ? 'Передовая коробка WPC' : 'Advanced WPC Frame'}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      language === 'he' ? 'משקוף פולימר יצוק 100% מסוג WPC' : language === 'ru' ? 'Коробка из 100% литого полимера WPC' : '100% Cast WPC polymer frame',
                      language === 'he' ? 'הלבשות רחבות בקו 0 למראה נקי' : language === 'ru' ? 'Широкие наличники в одной плоскости со стеной' : 'Wide flush architraves for a clean look',
                      language === 'he' ? 'בידוד תרמי ואקוסטי מהמעלה הראשונה' : language === 'ru' ? 'Первоклассная тепло- и звукоизоляция' : 'First-class thermal and acoustic insulation'
                    ].map((item, id) => (
                      <li key={id} className="flex items-start gap-3">
                        <CircleCheckBig className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">3</span>
                    {language === 'he' ? 'פרזול מלא במתנה' : language === 'ru' ? 'Полный комплект фурнитуры в подарок' : 'Full Hardware Set Included'}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === 'he' 
                      ? 'הזמנת הדלת כוללת מנעול מגנטי איכותי לטריקה שקטה במיוחד, ידיות לבחירה, וצירי פרימיום נסתרים או גלויים לפי עיצוב. הכל מותאם בגוון ובסגנון לקבלת תוצאה מושלמת ואלגנטית.' 
                      : language === 'ru' 
                      ? 'При заказе двери включены: качественный магнитный замок для бесшумного закрывания, ручки на выбор и петли премиум-класса. Всё подобрано по цвету и стилю для идеального результата.' 
                      : 'Ordering the door includes a high-quality magnetic lock for silent closing, a choice of handles, and premium hinges. Everything is matched in color and style for a perfect result.'}
                  </p>
                </div>
              </motion.div>

              {/* Decorative side image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl"
              >
                <img 
                  src="/assets/doors/polymer_quality_detail.png" 
                  alt="Quality details" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex items-end p-10">
                  <div className="text-white">
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <Shield className="w-6 h-6" />
                      <span className="font-bold tracking-wider uppercase text-sm">Premium Quality</span>
                    </div>
                    <h4 className="text-2xl font-bold">100% Solid Polymer</h4>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fullscreen Image Modal with Navigation */}
        <AnimatePresence>
          {selectedIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            >
              {/* Close button */}
              <button
                onClick={(e) => { e.stopPropagation(); closeModal(); }}
                className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-2 rounded-full backdrop-blur-md transition-all z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Previous button */}
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 p-3 rounded-full backdrop-blur-md transition-all z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Next button */}
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 p-3 rounded-full backdrop-blur-md transition-all z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image */}
              <motion.img
                key={selectedIdx}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={galleryImages[selectedIdx].src}
                alt={`Door model ${selectedIdx + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-default"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
                {selectedIdx + 1} / {galleryImages.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </Layout>
  );
};

export default PolymerDoors;

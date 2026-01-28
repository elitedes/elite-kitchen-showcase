import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'he' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations: Record<Language, Record<string, string>> = {
  he: {
    // Navigation
    'nav.home': 'עמוד הבית',
    'nav.about': 'אודות',
    'nav.kitchens': 'המטבחים שלנו',
    'nav.kitchens.modern': 'מטבחים מודרניים',
    'nav.kitchens.country': 'מטבחים כפריים',
    'nav.kitchens.formica': 'מטבחי פורמייקה',
    'nav.kitchens.wood': 'מטבחי עץ מלא',
    'nav.kitchens.nano': 'מטבחי נאנו',
    'nav.projects': 'פרויקטים',
    'nav.promotions': 'מבצעים',
    'nav.installation': 'הכנה להתקנת מטבח',
    'nav.magazine': 'מגזין',
    'nav.showroom': 'אולם תצוגה',
    'nav.contact': 'צרו קשר',

    // Hero
    'hero.title': 'Elite Design',
    'hero.subtitle': 'kitchens & more',
    'hero.tagline': 'Where Design Meets Quality',
    'hero.promo': 'הנחה מיוחדת על כל המטבחים',
    'hero.discount': '20% הנחה',
    'hero.cta.appointment': 'לתיאום פגישה',
    'hero.cta.details': 'השאירו פרטים',

    // About Section
    'about.title': 'מטבחים מעוצבים ונגרות בהתאמה אישית',
    'about.decorative': 'Where Design Meets Quality',
    'about.description': 'חברת Elite Design היא עסק עם וותק של מעל 20 שנה בתחום הנגרות. לאורך השנים בנינו אלפי מטבחים ורהיטים עבור לקוחות בכל רחבי הארץ. הסוד שלנו פשוט: אנחנו אוהבים את העבודה שלנו. הניסיון שצברנו בשני עשורים מאפשר לנו לתת לכם פתרון לכל תקציב ולכל צורך. אנחנו לא מאמינים ב"שיטת הסרט הנע" – אצלנו כל לקוח מקבל יחס אישי, תכנון מדויק וליווי מלא עד שהרהיט מותקן בבית.',
    'about.benefits.title': '',
    'about.benefits.1.title': '20 שנות ניסיון',
    'about.benefits.1.desc': 'ראינו הכל, עשינו הכל – אין פרויקט שגדול עלינו.',
    'about.benefits.2.title': 'איכות ללא פשרות',
    'about.benefits.2.desc': 'משתמשים בחומרים הכי טובים כדי שהרהיטים שלכם ישמרו לשנים.',
    'about.benefits.3.title': 'התאמה אישית',
    'about.benefits.3.desc': 'אתם בוחרים את הצבע, החומר והעיצוב – אנחנו מבצעים.',
    'about.benefits.4.title': 'שירות מכל הלב',
    'about.benefits.4.desc': 'אנחנו כאן בשבילכם גם אחרי שההתקנה מסתיימת.',

    'benefits.title': 'למה לבחור במטבחים של עלית דיזיין?',
    'whyus.title': 'שלבי העבודה שלנו',
    'benefits.custom.title': 'עיצוב מטבחים מותאם אישית',
    'benefits.custom.desc': 'כל פרויקט הוא יצירת אמנות ייחודית המותאמת לצרכים ולאופי שלכם.',
    'benefits.styles.title': 'מגוון סגנונות',
    'benefits.styles.desc': 'מטבחים מודרניים, מטבחים כפריים, מטבחי פולימר ומטבחי נאנו בטכנולוגיה מתקדמת.',
    'benefits.quality.title': 'איכות ללא פשרות',
    'benefits.quality.desc': 'שימוש בפרזול המתקדם בעולם וחומרי גלם עמידים לשנים רבות.',
    'benefits.local.title': 'ייצור מקומי',
    'benefits.local.desc': 'נגרות עילית כחול-לבן עם בקרה קפדנית על כל פרט ופרט.',
    'whyus.decorative': 'working process',
    'process.step1.title': 'סקיצה והערכת מחיר',
    'process.step1.desc': 'אנו נבנה סקיצה ראשונית ונחשב את עלות המטבח עבורכם',
    'process.step2.title': 'מדידה',
    'process.step2.desc': 'המודד המקצועי שלנו יגיע אליכם בזמן שנוח לכם',
    'process.step3.title': 'ייצור',
    'process.step3.desc': 'אנו מייצרים את המטבח במפעל שלנו עם הטכנולוגיה המתקדמת ביותר',
    'process.step4.title': 'הובלה והרכבה',
    'process.step4.desc': 'נוביל את המטבח ונתקין אותו בביתכם בצורה מקצועית',
    'process.step.label': 'שלב',
    'whyus.cta': 'לפרטים נוספים לחץ כאן',

    // Kitchen Categories
    'kitchens.title': 'קטגוריות מטבחים',
    'kitchens.modern': 'מטבחים מודרניים',
    'kitchens.modern.en': 'Modern kitchens',
    'kitchens.modern.desc': 'מטבחים מודרניים: קווים נקיים, מראה מינימליסטי ופתרונות אחסון חכמים.',
    'kitchens.country': 'מטבחים כפריים',
    'kitchens.country.en': 'Country kitchens',
    'kitchens.country.desc': 'מטבחים כפריים: חמימות של עץ טבעי, עיצוב קלאסי ותחושת בית אמיתית.',
    'kitchens.formica': 'מטבחי פורמייקה',
    'kitchens.formica.en': 'Formica kitchens',
    'kitchens.wood': 'מטבחי עץ מלא',
    'kitchens.wood.en': 'Wood kitchens',
    'kitchens.nano': 'מטבחי נאנו',
    'kitchens.nano.en': 'Nano kitchens',
    'kitchens.nano.desc': 'מטבחי נאנו: המילה האחרונה בעיצוב המטבח – עמידות בפני שריטות וטביעות אצבע במראה מט יוקרתי.',

    // Testimonials
    'testimonials.title': 'לקוחות ממליצים',
    'testimonials.decorative': 'Testimonials',

    // Magazine
    'magazine.title': 'מגזין מטבחי Elite Design',
    'magazine.decorative': 'Magazine',

    // Contact
    'contact.title': 'צרו קשר',
    'contact.name': 'שם מלא',
    'contact.phone': 'טלפון',
    'contact.email': 'אימייל',
    'contact.message': 'הודעה',
    'contact.send': 'שליחה',
    'contact.address': 'צה״ל 8, אשקלון',
    'contact.phone.number': '08-671-1767',

    // Footer
    'footer.rights': 'כל הזכויות שמורות',
    'footer.address': 'צה״ל 8, אשקלון',

    // Floating CTA
    'floating.customer': 'שירות ללקוח קיים',
    'floating.appointment': 'לקביעת פגישה',

    // Pages
    'page.about.title': 'אודות Elite Design',
    'page.about.content': 'Elite Design מטבחים הוקמה מתוך אהבה לעיצוב ומחויבות למצוינות. אנו מאמינים שכל מטבח הוא יצירה ייחודית שמשקפת את האישיות והצרכים של בעליו.',
    'page.showroom.title': 'אולם התצוגה שלנו',
    'page.showroom.desc': 'הזמנו אתכם לבקר באולם התצוגה שלנו ולחוות את המטבחים שלנו מקרוב',
    'page.projects.title': 'הפרויקטים שלנו',
    'page.installation.title': 'הכנה להתקנת מטבח',
    'page.promotions.title': 'מבצעים מיוחדים',
    'contact.success': 'ההודעה נשלחה בהצלחה!',
    'contact.error': 'לא ניתן לשלוח את ההודעה. אנא צור קשר ישירות.',
    'page.notfound.title': '404 - דף לא נמצא',
    'page.notfound.desc': 'אופס! הדף שחיפשת לא קיים.',
    'page.notfound.back': 'חזרה לדף הבית',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.kitchens': 'Наши кухни',
    'nav.kitchens.modern': 'Современные кухни',
    'nav.kitchens.country': 'Кухни в стиле кантри',
    'nav.kitchens.formica': 'Кухни из формайки',
    'nav.kitchens.wood': 'Кухни из массива',
    'nav.kitchens.nano': 'Нано кухни',
    'nav.projects': 'Проекты',
    'nav.promotions': 'Акции',
    'nav.installation': 'Подготовка к установке',
    'nav.magazine': 'Журнал',
    'nav.showroom': 'Шоурум',
    'nav.contact': 'Контакты',

    // Hero
    'hero.title': 'Elite Design',
    'hero.subtitle': 'kitchens & more',
    'hero.tagline': 'Where Design Meets Quality',
    'hero.promo': 'Специальная скидка на все кухни',
    'hero.discount': 'Скидка 20%',
    'hero.cta.appointment': 'Записаться на встречу',
    'hero.cta.details': 'Оставить заявку',

    // About Section
    'about.title': 'Дизайнерские кухни и столярные изделия по индивидуальному заказу',
    'about.decorative': 'Where Design Meets Quality',
    'about.description': 'Elite Design — это компания с более чем 20-летним опытом работы в сфере столярного дела. За эти годы мы построили тысячи кухонь и мебели для клиентов по всей стране. Наш секрет прост: мы любим свою работу. Опыт, накопленный нами за два десятилетия, позволяет нам предложить вам решение для любого бюджета и любых потребностей. Мы не верим в метод "конвейера" — у нас каждый клиент получает индивидуальный подход, точное планирование и полную поддержку до момента установки в доме.',
    'about.benefits.title': '',
    'about.benefits.1.title': '20 лет опыта',
    'about.benefits.1.desc': 'Мы видели всё, мы делали всё — нет проекта, который был бы для нас слишком велик.',
    'about.benefits.2.title': 'Бескомпромиссное качество',
    'about.benefits.2.desc': 'Используем лучшие материалы, чтобы ваша мебель служила долгие годы.',
    'about.benefits.3.title': 'Индивидуальный заказ',
    'about.benefits.3.desc': 'Вы выбираете цвет, материал и дизайн — мы воплощаем это в жизнь.',
    'about.benefits.4.title': 'Сервис от души',
    'about.benefits.4.desc': 'Мы здесь для вас и после завершения установки.',

    'benefits.title': 'Почему стоит выбрать кухни Elite Design?',
    'whyus.title': 'Этапы нашей работы',
    'benefits.custom.title': 'Индивидуальный дизайн кухни',
    'benefits.custom.desc': 'Каждый проект — это уникальное произведение искусства, адаптированное к вашим потребностям и характеру.',
    'benefits.styles.title': 'Разнообразие стилей',
    'benefits.styles.desc': 'Современные кухни, кухни в стиле кантри, полимерные кухни и нано-кухни с использованием передовых технологий.',
    'benefits.quality.title': 'Бескомпромиссное качество',
    'benefits.quality.desc': 'Использование самой передовой фурнитуры в мире и долговечного сырья на долгие годы.',
    'benefits.local.title': 'Местное производство',
    'benefits.local.desc': 'Элитные столярные изделия израильского производства с строгим контролем каждой детали.',
    'whyus.decorative': 'working process',
    'process.step1.title': 'ЭСКИЗ И СТОИМОСТЬ',
    'process.step1.desc': 'Мы создадим эскиз и рассчитаем стоимость вашего проекта',
    'process.step2.title': 'ЗАМЕР',
    'process.step2.desc': 'Замерщик приедет в удобное для вас время',
    'process.step3.title': 'ИЗГОТОВЛЕНИЕ',
    'process.step3.desc': 'Изготовим ваш заказ на собственной фабрике',
    'process.step4.title': 'ДОСТАВКА И СБОРКА',
    'process.step4.desc': 'Доставим и соберём в вашей квартире',
    'process.step.label': 'шаг',
    'whyus.cta': 'Подробнее нажмите здесь',

    // Kitchen Categories
    'kitchens.title': 'Категории кухонь',
    'kitchens.modern': 'Современные кухни',
    'kitchens.modern.en': 'Modern kitchens',
    'kitchens.modern.desc': 'Современные кухни: чистые линии, минималистичный вид и умные решения для хранения.',
    'kitchens.country': 'Кухни в стиле кантри',
    'kitchens.country.en': 'Country kitchens',
    'kitchens.country.desc': 'Кухни в стиле кантри: тепло натурального дерева, классический дизайн и ощущение настоящего дома.',
    'kitchens.formica': 'Кухни из формайки',
    'kitchens.formica.en': 'Formica kitchens',
    'kitchens.wood': 'Кухни из массива',
    'kitchens.wood.en': 'Wood kitchens',
    'kitchens.nano': 'Нано кухни',
    'kitchens.nano.en': 'Nano kitchens',
    'kitchens.nano.desc': 'Нано кухни: последнее слово в дизайне кухни – устойчивость к царапинам и отпечаткам пальцев с роскошным матовым видом.',

    // Testimonials
    'testimonials.title': 'Отзывы клиентов',
    'testimonials.decorative': 'Testimonials',

    // Magazine
    'magazine.title': 'Журнал Elite Design Кухни',
    'magazine.decorative': 'Magazine',

    // Contact
    'contact.title': 'Свяжитесь с нами',
    'contact.name': 'Полное имя',
    'contact.phone': 'Телефон',
    'contact.email': 'Email',
    'contact.message': 'Сообщение',
    'contact.send': 'Отправить',
    'contact.address': 'Цахаль 8, Ашкелон',
    'contact.phone.number': '08-671-1767',

    // Footer
    'footer.rights': 'Все права защищены',
    'footer.address': 'Цахаль 8, Ашкелон',

    // Floating CTA
    'floating.customer': 'Обслуживание клиентов',
    'floating.appointment': 'Записаться',

    // Pages
    'page.about.title': 'О Elite Design',
    'page.about.content': 'Elite Design Кухни была основана из любви к дизайну и стремления к совершенству. Мы верим, что каждая кухня — это уникальное творение, отражающее личность и потребности владельца.',
    'page.showroom.title': 'Наш шоурум',
    'page.showroom.desc': 'Приглашаем вас посетить наш шоурум и лично оценить качество наших кухонь',
    'page.projects.title': 'Наши проекты',
    'page.installation.title': 'Подготовка к установке кухни',
    'page.promotions.title': 'Специальные акции',
    'contact.success': 'Сообщение успешно отправлено!',
    'contact.error': 'Не удалось отправить сообщение. Пожалуйста, свяжитесь с нами напрямую.',
    'page.notfound.title': '404 - Страница не найдена',
    'page.notfound.desc': 'Ой! Страница, которую вы ищете, не существует.',
    'page.notfound.back': 'Вернуться на главную',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.kitchens': 'Our Kitchens',
    'nav.kitchens.modern': 'Modern Kitchens',
    'nav.kitchens.country': 'Country Kitchens',
    'nav.kitchens.formica': 'Formica Kitchens',
    'nav.kitchens.wood': 'Solid Wood Kitchens',
    'nav.kitchens.nano': 'Nano Kitchens',
    'nav.projects': 'Projects',
    'nav.promotions': 'Promotions',
    'nav.installation': 'Preparation for Installation',
    'nav.magazine': 'Magazine',
    'nav.showroom': 'Showroom',
    'nav.contact': 'Contact Us',

    // Hero
    'hero.title': 'Elite Design',
    'hero.subtitle': 'kitchens & more',
    'hero.tagline': 'Where Design Meets Quality',
    'hero.promo': 'Special discount on all kitchens',
    'hero.discount': '20% OFF',
    'hero.cta.appointment': 'Book an Appointment',
    'hero.cta.details': 'Leave Details',

    // About Section
    'about.title': 'Designer Kitchens & Custom Cabinetry',
    'about.decorative': 'Where Design Meets Quality',
    'about.description': 'Elite Design is a company with over 20 years of experience in the carpentry field. Over the years, we have built thousands of kitchens and furniture for customers all over the country. Our secret is simple: we love our work. The experience we have gained over two decades allows us to provide you with a solution for every budget and every need. We do not believe in the "conveyor belt system" – with us, every customer receives personal attention, precise planning, and full support until the furniture is installed in the home.',
    'about.benefits.title': '',
    'about.benefits.1.title': '20 Years of Experience',
    'about.benefits.1.desc': 'We have seen it all, we have done it all – no project is too big for us.',
    'about.benefits.2.title': 'Uncompromising Quality',
    'about.benefits.2.desc': 'Using the best materials so that your furniture lasts for years.',
    'about.benefits.3.title': 'Customization',
    'about.benefits.3.desc': 'You choose the color, material, and design – we perform.',
    'about.benefits.4.title': 'Service from the Heart',
    'about.benefits.4.desc': 'We are here for you even after the installation is complete.',

    'benefits.title': 'Why Choose Elite Design Kitchens?',
    'whyus.title': 'Stages of our work',
    'benefits.custom.title': 'Custom Kitchen Design',
    'benefits.custom.desc': 'Every project is a unique work of art tailored to your needs and personality.',
    'benefits.styles.title': 'Variety of Styles',
    'benefits.styles.desc': 'Modern kitchens, country kitchens, polymer kitchens, and nano-kitchens using advanced technology.',
    'benefits.quality.title': 'Uncompromising Quality',
    'benefits.quality.desc': "Using the world's most advanced hardware and durable materials for years to come.",
    'benefits.local.title': 'Local Production',
    'benefits.local.desc': 'Elite "Blue and White" cabinetry with strict control over every single detail.',
    'whyus.decorative': 'working process',
    'process.step1.title': 'SKETCH & ESTIMATE',
    'process.step1.desc': 'We will create a preliminary sketch and calculate the cost for you',
    'process.step2.title': 'MEASUREMENT',
    'process.step2.desc': 'Our professional measurer will visit at your convenience',
    'process.step3.title': 'PRODUCTION',
    'process.step3.desc': 'We manufacture your kitchen in our own factory with cutting-edge technology',
    'process.step4.title': 'DELIVERY & ASSEMBLY',
    'process.step4.desc': 'We transport and professionally install the kitchen in your home',
    'process.step.label': 'step',
    'whyus.cta': 'Click here for more details',

    // Kitchen Categories
    'kitchens.title': 'Kitchen Categories',
    'kitchens.modern': 'Modern Kitchens',
    'kitchens.modern.en': 'Modern Kitchens',
    'kitchens.modern.desc': 'Modern Kitchens: Clean lines, minimalist look, and smart storage solutions.',
    'kitchens.country': 'Country Kitchens',
    'kitchens.country.en': 'Country Kitchens',
    'kitchens.country.desc': 'Country Kitchens: Warmth of natural wood, classic design, and a true feeling of home.',
    'kitchens.formica': 'Formica Kitchens',
    'kitchens.formica.en': 'Formica Kitchens',
    'kitchens.wood': 'Solid Wood Kitchens',
    'kitchens.wood.en': 'Solid Wood Kitchens',
    'kitchens.nano': 'Nano Kitchens',
    'kitchens.nano.en': 'Nano Kitchens',
    'kitchens.nano.desc': 'Nano Kitchens: The last word in kitchen design – resistance to scratches and fingerprints with a luxury matte look.',

    // Testimonials
    'testimonials.title': 'Client Testimonials',
    'testimonials.decorative': 'Testimonials',

    // Magazine
    'magazine.title': 'Elite Design Kitchens Magazine',
    'magazine.decorative': 'Magazine',

    // Contact
    'contact.title': 'Contact Us',
    'contact.name': 'Full Name',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.address': '8 Zahal St, Ashkelon',
    'contact.phone.number': '08-671-1767',

    // Footer
    'footer.rights': 'All rights reserved',
    'footer.address': '8 Zahal St, Ashkelon',

    // Floating CTA
    'floating.customer': 'Customer Service',
    'floating.appointment': 'Book Appointment',

    // Pages
    'page.about.title': 'About Elite Design',
    'page.about.content': 'Elite Design Kitchens was established out of a love for design and a commitment to excellence. We believe that every kitchen is a unique creation that reflects the personality and needs of its owner.',
    'page.showroom.title': 'Our Showroom',
    'page.showroom.desc': 'We invite you to visit our showroom and experience our kitchens up close',
    'page.projects.title': 'Our Projects',
    'page.installation.title': 'Preparation for Kitchen Installation',
    'page.promotions.title': 'Special Promotions',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Could not send message. Please contact us directly.',
    'page.notfound.title': '404 - Page Not Found',
    'page.notfound.desc': "Oops! The page you are looking for doesn't exist.",
    'page.notfound.back': 'Return Home',
  },
};

const FALLBACK_LANGUAGE: Language = 'he';
const SUPPORTED_LANGUAGES: Language[] = ['he', 'ru', 'en'];

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return FALLBACK_LANGUAGE;

  // 1. Check localStorage
  try {
    const saved = localStorage.getItem('language') as Language;
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }
  } catch (e) {
    console.error('Error reading from localStorage', e);
  }

  // 2. Check browser language
  try {
    const browserLang = navigator.language.split('-')[0] as Language;
    if (SUPPORTED_LANGUAGES.includes(browserLang)) {
      return browserLang;
    }
  } catch (e) {
    console.error('Error detecting browser language', e);
  }

  return FALLBACK_LANGUAGE;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const dir = language === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('language', lang);
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  };

  const t = (key: string): string => {
    const translation = translations[language][key];
    return translation !== undefined ? translation : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

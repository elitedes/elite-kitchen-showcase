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
    'hero.tagline': 'Design. Quality. Individuality.',
    'hero.promo': 'הנחה מיוחדת על כל המטבחים',
    'hero.discount': '20% הנחה',
    'hero.cta.appointment': 'לתיאום פגישה',
    'hero.cta.details': 'השאירו פרטים',

    // About Section
    'about.title': 'Elite Design מטבחים',
    'about.decorative': 'Design. Quality. Individuality.',
    'about.description': 'אנו ב-Elite Design מתמחים בעיצוב ויצור מטבחים יוקרתיים המשלבים פונקציונליות מושלמת עם אסתטיקה עכשווית. עם שנים של ניסיון בתחום, אנו מציעים פתרונות מטבח המותאמים אישית לכל לקוח.',

    'whyus.title': 'תהליך העבודה שלנו',
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
    'kitchens.country': 'מטבחים כפריים',
    'kitchens.country.en': 'Country kitchens',
    'kitchens.formica': 'מטבחי פורמייקה',
    'kitchens.formica.en': 'Formica kitchens',
    'kitchens.wood': 'מטבחי עץ מלא',
    'kitchens.wood.en': 'Wood kitchens',
    'kitchens.nano': 'מטבחי נאנו',
    'kitchens.nano.en': 'Nano kitchens',

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
    'nav.kitchens.formica': 'Кухни из формики',
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
    'hero.tagline': 'Design. Quality. Individuality.',
    'hero.promo': 'Специальная скидка на все кухни',
    'hero.discount': 'Скидка 20%',
    'hero.cta.appointment': 'Записаться на встречу',
    'hero.cta.details': 'Оставить заявку',

    // About Section
    'about.title': 'Elite Design Кухни',
    'about.decorative': 'Design. Quality. Individuality.',
    'about.description': 'Мы в Elite Design специализируемся на дизайне и производстве элитных кухонь, сочетающих идеальную функциональность с современной эстетикой. С многолетним опытом мы предлагаем индивидуальные кухонные решения.',

    'whyus.title': 'Этапы нашей работы',
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
    'kitchens.country': 'Кухни в стиле кантри',
    'kitchens.country.en': 'Country kitchens',
    'kitchens.formica': 'Кухни из формики',
    'kitchens.formica.en': 'Formica kitchens',
    'kitchens.wood': 'Кухни из массива',
    'kitchens.wood.en': 'Wood kitchens',
    'kitchens.nano': 'Нано кухни',
    'kitchens.nano.en': 'Nano kitchens',

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
    'hero.tagline': 'Design. Quality. Individuality.',
    'hero.promo': 'Special discount on all kitchens',
    'hero.discount': '20% OFF',
    'hero.cta.appointment': 'Book an Appointment',
    'hero.cta.details': 'Leave Details',

    // About Section
    'about.title': 'Elite Design Kitchens',
    'about.decorative': 'Design. Quality. Individuality.',
    'about.description': 'At Elite Design, we specialize in designing and manufacturing luxury kitchens that combine perfect functionality with contemporary aesthetics. With years of experience, we offer personalized kitchen solutions for every client.',

    'whyus.title': 'Our Working Process',
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
    'kitchens.country': 'Country Kitchens',
    'kitchens.country.en': 'Country Kitchens',
    'kitchens.formica': 'Formica Kitchens',
    'kitchens.formica.en': 'Formica Kitchens',
    'kitchens.wood': 'Solid Wood Kitchens',
    'kitchens.wood.en': 'Solid Wood Kitchens',
    'kitchens.nano': 'Nano Kitchens',
    'kitchens.nano.en': 'Nano Kitchens',

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
    return translations[language][key] || key;
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

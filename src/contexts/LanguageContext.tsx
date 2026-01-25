import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'he' | 'ru';

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

    // Why Us Section
    'whyus.title': 'למה Elite Design מטבחים',
    'whyus.decorative': 'a reputation that you can built on',
    'whyus.experience.title': 'מוניטין וניסיון',
    'whyus.experience.desc': 'עשרות שנים של מצוינות בתחום המטבחים הנתמכים באלפי לקוחות מרוצים',
    'whyus.designer.title': 'מעצב/ת עד הבית',
    'whyus.designer.desc': 'פגישה אישית אצלכם בבית עם מעצב/ת הבית שלנו לייעוץ ותכנון מטבח מושלם',
    'whyus.products.title': 'מוצרים משלימים',
    'whyus.products.desc': 'אנו ב-Elite Design דואגים להתאים באופן מיטבי גם את המוצרים המשלימים למטבח שלכם',
    'whyus.personal.title': 'התאמה אישית',
    'whyus.personal.desc': 'כל מטבח מתוכנן ומבוצע בהתאמה לדרישותיו הייחודיות של כל לקוח',
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

    // Why Us Section
    'whyus.title': 'Почему Elite Design Кухни',
    'whyus.decorative': 'a reputation that you can built on',
    'whyus.experience.title': 'Репутация и опыт',
    'whyus.experience.desc': 'Десятилетия превосходства в сфере кухонь, подтвержденные тысячами довольных клиентов',
    'whyus.designer.title': 'Дизайнер к вам домой',
    'whyus.designer.desc': 'Личная встреча у вас дома с нашим дизайнером для консультации и планирования идеальной кухни',
    'whyus.products.title': 'Сопутствующие товары',
    'whyus.products.desc': 'Мы в Elite Design заботимся об оптимальном подборе сопутствующих товаров для вашей кухни',
    'whyus.personal.title': 'Индивидуальный подход',
    'whyus.personal.desc': 'Каждая кухня спланирована и выполнена в соответствии с уникальными требованиями клиента',
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
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('he');

  const dir = language === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

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

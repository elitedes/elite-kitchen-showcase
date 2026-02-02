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
    'seo.title': 'Elite Design | מטבחים, ארונות ונגרות בהתאמה אישית - 20 שנות ניסיון',
    'seo.description': 'נגריית Elite Design מתמחה בייצור מטבחים ורהיטים מעל 20 שנה. ארונות, חדרי רחצה ופתרונות נגרות לכל הבית במחירים נוחים ובאיכות מעולה. פנו לייעוץ!',
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
    'hero.cta.calculator': 'חישוב עלות מטבח',

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
    'nav.closets': 'ארונות',
    'page.closets.title': 'ארונות בהתאמה אישית',
    'page.closets.decorative': 'Custom Closets & Wardrobes',
    'page.closets.hero.desc': 'אנו מייצרים ארונות בהתאמה אישית — ארונות הזזה, ארונות ציר ומערכות אחסון מובנות. אנו מעצבים רהיטים תוך התחשבות במבנה החדר, סגנון העיצוב והצרכים האישיים שלכם, ליצירת פתרונות פונקציונליים ואסתטיים לבית.',
    'closets.sliding.title': 'ארונות הזזה: מאפיינים, יתרונות וחסרונות',
    'closets.sliding.desc': 'ארון הזזה הוא ארון עצמאי או מובנה עם דלתות הנעות על מסילות. מבנה זה מאפשר ניצול יעיל של החלל ומתאים במיוחד לחדרים עם שטח מוגבל.',
    'closets.sliding.pros.title': 'יתרונות ארונות הזזה',
    'closets.sliding.pros.1': 'חיסכון במקום בזכות דלתות הזזה',
    'closets.sliding.pros.2': 'נוחות בשימוש יומיומי',
    'closets.sliding.pros.3': 'קיבולת גבוהה ואפשרות לאחסון חפצים גדולים',
    'closets.sliding.pros.4': 'מתאים למסדרונות, חדרי שינה וחדרים קטנים',
    'closets.sliding.cons.title': 'חסרונות ארונות הזזה',
    'closets.sliding.cons.1': 'התקנה מורכבת יותר בהשוואה לארונות ציר',
    'closets.sliding.cons.2': 'חלק מהנפח הפנימי נתפס על ידי מנגנון ההזזה',
    'closets.sliding.cons.3': 'ניתן לראות רק חלק אחד מהתכולה בכל פעם',
    'closets.hinged.title': 'ארונות ציר: יתרונות וחסרונות',
    'closets.hinged.desc': 'ארונות ציר (פתיחה רגילה) הם הפתרון הקלאסי עם דלתות על צירים. הם מתאפיינים בפשטות מבנית ומתאים לעיצובים שבהם חשובים חזיתות ישרות ועומק אחסון מקסימלי.',
    'closets.hinged.pros.title': 'יתרונות ארונות ציר',
    'closets.hinged.pros.1': 'פתיחה שקטה וחלקה',
    'closets.hinged.pros.2': 'נפח אחסון פנימי מקסימלי',
    'closets.hinged.pros.3': 'החזיתות נמצאות במישור אחד',
    'closets.hinged.pros.4': 'מתאים לעיצובים מודרניים ומינימליסטיים',
    'closets.hinged.cons.title': 'חסרונות ארונות ציר',
    'closets.hinged.cons.1': 'נדרש שטח פנוי לפני הארון לפתיחת הדלתות',
    'closets.hinged.cons.2': 'אורך החיים תלוי באיכות הפרזול',
    'closets.care.title': 'תחזוקה ושימוש בארונות',
    'closets.care.desc': 'לעבודה תקינה של ארונות הזזה, מומלץ לנקות את המסילות מאבק מדי פעם. בארונות ציר חשוב לעקוב אחר מצב הצירים ולכוון אותם בעת הצורך. בטיפול נכון, שתי האפשרויות שומרות על פונקציונליות ומראה לאורך שנים רבות.',
    'closets.rooms.title': 'איך לבחור ארון לחדרים שונים',
    'closets.rooms.hallway.title': 'ארון למסדרון',
    'closets.rooms.hallway.desc': 'למסדרונות או כניסות קטנות, ארון הזזה הוא הפתרון האופטימלי החוסך מקום. בחללים רחבים יותר ניתן להתקין ארון ציר או ארון מובנה.',
    'closets.rooms.bedroom.title': 'ארון לחדר שינה',
    'closets.rooms.bedroom.desc': 'בחדרי שינה עם שטח מספיק, לרוב בוחרים בארונות ציר בזכות העומק שלהם. לחדרים קומפקטיים יתאימו ארונות הזזה בשילוב מערכות אחסון משלימות.',
    'closets.rooms.kids.title': 'ארון לחדר ילדים',
    'closets.rooms.kids.desc': 'ארונות ציר נוחים לילדים בזכות פתיחה פשוטה ומבט מלא על תכולת הארון.',
    'closets.rooms.living.title': 'ארון לסלון',
    'closets.rooms.living.desc': 'ליצירת מערכות אחסון "בלתי נראות", משתמשים בארונות ציר ללא ידיות עם חזיתות בצבע הקירות. ניתן לשלב גם פתרונות עם ארונות הזזה.',
    'closets.custom.title': 'ייצור ארונות בהתאמה אישית',
    'closets.custom.desc': 'אנו מתכננים ומייצרים:',
    'closets.custom.list.1': 'ארונות הזזה בהתאמה אישית',
    'closets.custom.list.2': 'ארונות ציר',
    'closets.custom.list.3': 'ארונות מובנים',
    'closets.custom.list.4': 'מערכות אחסון אישיות',
    'closets.custom.footer': 'כל פרויקט נוצר לפי מידות אישיות עם בחירת חומרים, פרזול וחלוקה פנימית.',
    'closets.cta.title': 'צריכים ארון שמתאים בדיוק לעיצוב שלכם?',
    'closets.cta.desc': 'השאירו פרטים לייעוץ — אנו נעזור לכם לבחור את סוג הארון המתאים ביותר ונפתח פתרון שישתלב בצורה מושלמת בחלל שלכם.',
    'closets.seo.title': 'ארונות בהתאמה אישית, ארון הזזה, ארון ציר, ארון מובנה, רהיטים בהתאמה אישית, ארון למסדרון, ארון לחדר שינה, ארון לסלון.',

    'contact.error': 'לא ניתן לשלוח את ההודעה. אנא צור קשר ישירות.',
    'page.notfound.title': '404 - דף לא נמצא',
    'page.notfound.desc': 'אופס! הדף שחיפשת לא קיים.',
    'calc.title': 'חשב את עלות המטבח ב-5 צעדים',
    'calc.desc': 'הכניסו את הנתונים לחישוב ראשוני של עלות המטבח שלכם',
    'calc.type.label': 'סוג המטבח',
    'calc.type.straight': 'ישר',
    'calc.type.lshape': 'פינתי (ריש)',
    'calc.type.ushape': 'פינתי (ח)',
    'calc.type.island': 'מטבח עם אי',
    'calc.front.label': 'סוג החזית',
    'calc.front.formica': 'פורמייקה',
    'calc.front.polymer': 'פולימר',
    'calc.front.paint': 'צבע בתנור (שלייפלק)',
    'calc.front.acrylic': 'אקריל',
    'calc.front.wood': 'עץ מלא',
    'calc.counter.label': 'סוג שיש',
    'calc.counter.caes20': 'שיש קיסר 20 מ"מ',
    'calc.counter.caes40': 'שיש קיסר 40 מ"מ',
    'calc.counter.porcelain': 'גרניט פורצלן',
    'calc.counter.wood': 'עץ',
    'calc.hardware.label': 'סוג פרזול',
    'calc.hardware.standard': 'סטנדרטי',
    'calc.hardware.premium': 'פרומיום',
    'calc.hardware.super': 'סופר פרומיום',
    'calc.dimensions.label': 'מידות (ס"מ)',
    'calc.dimensions.len1': 'אורך 1',
    'calc.dimensions.len2': 'אורך 2',
    'calc.dimensions.len3': 'אורך 3',
    'calc.name': 'שם מלא',
    'calc.phone': 'טלפון',
    'calc.submit': 'קבל הצעת מחיר',
    'calc.success': 'הנתונים הוכנסו בהצלחה! ניצור איתך קשר בהקדם עם הצעת מחיר מדויקת.',
    'nav.calculator': 'חישוב עלות',
    'page.notfound.back': 'חזרה לדף הבית',
  },
  ru: {
    'seo.title': 'Elite Design | Кухни, шкафы и столярные изделия на заказ - 20 лет опыта',
    'seo.description': 'Столярная мастерская Elite Design специализируется на производстве кухонь и мебели более 20 лет. Шкафы, ванные комнаты и столярные решения для всего дома по доступным ценам и в отличном качестве. Обращайтесь за консультацией!',
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
    'hero.cta.calculator': 'Калькулятор стоимости',

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
    'nav.closets': 'Шкафы',
    'page.closets.title': 'Шкафы на заказ',
    'page.closets.decorative': 'Custom Closets & Wardrobes',
    'page.closets.hero.desc': 'Мы изготавливаем шкафы на заказ — шкафы-купе, распашные и встроенные системы хранения. Проектируем мебель с учётом планировки, стиля интерьера и индивидуальных потребностей, создавая функциональные и эстетичные решения для дома.',
    'closets.sliding.title': 'Шкафы-купе: особенности, преимущества и недостатки',
    'closets.sliding.desc': 'Шкаф-купе — это отдельно стоящий или встроенный шкаф с раздвижными дверями, которые движутся по направляющим. Такая конструкция позволяет эффективно использовать пространство и подходит для помещений с ограниченной площадью.',
    'closets.sliding.pros.title': 'Преимущества шкафов-купе',
    'closets.sliding.pros.1': 'экономия пространства за счёт раздвижных дверей',
    'closets.sliding.pros.2': 'удобство ежедневного использования',
    'closets.sliding.pros.3': 'высокая вместительность и возможность хранения габаритных вещей',
    'closets.sliding.pros.4': 'подходит для прихожих, спален и небольших комнат',
    'closets.sliding.cons.title': 'Недостатки шкафов-купе',
    'closets.sliding.cons.1': 'более сложный монтаж по сравнению с распашными моделями',
    'closets.sliding.cons.2': 'часть внутреннего объёма занимает раздвижной механизм',
    'closets.sliding.cons.3': 'одновременно видна только одна часть содержимого',
    'closets.hinged.title': 'Распашные шкафы: плюсы и минусы',
    'closets.hinged.desc': 'Распашные шкафы — классическое решение с дверцами на петлях. Они отличаются простотой конструкции и подходят для интерьеров, где важны ровные фасады и максимальная глубина хранения.',
    'closets.hinged.pros.title': 'Преимущества распашных шкафов',
    'closets.hinged.pros.1': 'бесшумное и плавное открывание',
    'closets.hinged.pros.2': 'максимальный полезный внутренний объём',
    'closets.hinged.pros.3': 'фасады находятся в одной плоскости',
    'closets.hinged.pros.4': 'подходят для современных и минималистичных интерьеров',
    'closets.hinged.cons.title': 'Недостатки распашных шкафов',
    'closets.hinged.cons.1': 'требуется свободное пространство перед шкафом',
    'closets.hinged.cons.2': 'срок службы зависит от качества фурнитуры',
    'closets.care.title': 'Уход и эксплуатация шкафов',
    'closets.care.desc': 'Для корректной работы шкафов-купе рекомендуется периодически очищать направляющие от пыли. В распашных шкафах важно следить за состоянием петель и при необходимости регулировать их. При правильном уходе оба варианта сохраняют функциональность и внешний вид на протяжении многих лет.',
    'closets.rooms.title': 'Как выбрать шкаф для разных помещений',
    'closets.rooms.hallway.title': 'Шкаф в прихожую',
    'closets.rooms.hallway.desc': 'Для небольших прихожих оптимальным решением станет шкаф-купе, который позволяет экономить пространство. В просторных помещениях можно установить распашной или встроенный шкаф.',
    'closets.rooms.bedroom.title': 'Шкаф в спальню',
    'closets.rooms.bedroom.desc': 'В спальнях с достаточной площадью часто выбирают распашные шкафы за счёт их глубины. Для компактных комнат подойдут шкафы-купе, дополненные альтернативными системами хранения.',
    'closets.rooms.kids.title': 'Шкаф в детскую',
    'closets.rooms.kids.desc': 'Распашные шкафы удобны для детей благодаря простому открыванию и полному обзору содержимого.',
    'closets.rooms.living.title': 'Шкаф в гостиную',
    'closets.rooms.living.desc': 'Для создания визуально «незаметных» систем хранения используются распашные шкафы без ручек с фасадами в цвет стен. Возможны и трансформируемые решения со шкафами-купе.',
    'closets.custom.title': 'Изготовление шкафов на заказ',
    'closets.custom.desc': 'Мы разрабатываем и изготавливаем:',
    'closets.custom.list.1': 'шкафы-купе на заказ',
    'closets.custom.list.2': 'распашные шкафы',
    'closets.custom.list.3': 'встроенные шкафы',
    'closets.custom.list.4': 'индивидуальные системы хранения',
    'closets.custom.footer': 'Каждый проект создаётся по индивидуальным размерам с подбором материалов, фурнитуры и внутреннего наполнения.',
    'closets.cta.title': 'Нужен шкаф под ваш интерьер?',
    'closets.cta.desc': 'Оставьте заявку на консультацию — мы поможем подобрать оптимальный тип шкафа и разработаем решение, которое идеально впишется в ваше пространство.',
    'closets.seo.title': 'Шкафы на заказ, шкаф-купе, распашной шкаф, встроенный шкаф, мебель на заказ, шкаф в прихожую, шкаф в спальню, шкаф в гостиную.',

    'contact.error': 'Не удалось отправить сообщение. Пожалуйста, свяжитесь с нами напрямую.',
    'page.notfound.title': '404 - Страница не найдена',
    'page.notfound.desc': 'Ой! Страница, которую вы ищете, не существует.',
    'calc.title': 'Рассчитайте стоимость кухни за 5 шагов',
    'calc.desc': 'Введите данные для предварительного расчета стоимости вашей кухни',
    'calc.type.label': 'Тип кухни',
    'calc.type.straight': 'Прямая',
    'calc.type.lshape': 'Угловая (L)',
    'calc.type.ushape': 'П-образная',
    'calc.type.island': 'Кухня с островом',
    'calc.front.label': 'Тип фасада',
    'calc.front.formica': 'Формайка',
    'calc.front.polymer': 'Полимер',
    'calc.front.paint': 'Покраска (Lacquered)',
    'calc.front.acrylic': 'Акрил',
    'calc.front.wood': 'Массив дерева',
    'calc.counter.label': 'Тип столешницы',
    'calc.counter.caes20': 'Caesarstone 20мм',
    'calc.counter.caes40': 'Caesarstone 40мм',
    'calc.counter.porcelain': 'Керамогранит',
    'calc.counter.wood': 'Дерево',
    'calc.hardware.label': 'Тип фурнитуры',
    'calc.hardware.standard': 'Стандарт',
    'calc.hardware.premium': 'Премиум',
    'calc.hardware.super': 'Супер Премиум',
    'calc.dimensions.label': 'Размеры (см)',
    'calc.dimensions.len1': 'Длина 1',
    'calc.dimensions.len2': 'Длина 2',
    'calc.dimensions.len3': 'Длина 3',
    'calc.name': 'Имя',
    'calc.phone': 'Телефон',
    'calc.submit': 'Получить расчет',
    'calc.success': 'Данные успешно отправлены! Мы свяжемся с вами в ближайшее время с точным расчетом.',
    'nav.calculator': 'Калькулятор',
    'page.notfound.back': 'Вернуться на главную',
  },
  en: {
    'seo.title': 'Elite Design | Custom Kitchens, Closets & Woodworking - 20 Years Experience',
    'seo.description': 'Elite Design Carpentry specializes in manufacturing kitchens and furniture for over 20 years. Closets, bathrooms, and woodworking solutions for the whole home at affordable prices and excellent quality. Contact us for a consultation!',
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
    'hero.cta.calculator': 'Cost Calculator',

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
    'nav.closets': 'Closets',
    'page.closets.title': 'Custom Closets',
    'page.closets.decorative': 'Custom Closets & Wardrobes',
    'page.closets.hero.desc': 'We manufacture custom wardrobes — sliding, hinged, and built-in storage systems. We design furniture taking into account the layout, interior style, and individual needs, creating functional and aesthetic solutions for the home.',
    'closets.sliding.title': 'Sliding Closets: Features, Advantages, and Disadvantages',
    'closets.sliding.desc': 'A sliding wardrobe is a free-standing or built-in closet with sliding doors that move along tracks. This design allows for efficient use of space and is suitable for rooms with limited area.',
    'closets.sliding.pros.title': 'Advantages of Sliding Closets',
    'closets.sliding.pros.1': 'space saving due to sliding doors',
    'closets.sliding.pros.2': 'convenience of daily use',
    'closets.sliding.pros.3': 'high capacity and possibility of storing bulky items',
    'closets.sliding.pros.4': 'suitable for hallways, bedrooms, and small rooms',
    'closets.sliding.cons.title': 'Disadvantages of Sliding Closets',
    'closets.sliding.cons.1': 'more complex installation compared to hinged models',
    'closets.sliding.cons.2': 'part of the internal volume is occupied by the sliding mechanism',
    'closets.sliding.cons.3': 'only one part of the contents is visible at a time',
    'closets.hinged.title': 'Hinged Closets: Pros and Cons',
    'closets.hinged.desc': 'Hinged wardrobes are a classic solution with doors on hinges. They are characterized by simplicity of design and are suitable for interiors where smooth facades and maximum storage depth are important.',
    'closets.hinged.pros.title': 'Advantages of Hinged Closets',
    'closets.hinged.pros.1': 'quiet and smooth opening',
    'closets.hinged.pros.2': 'maximum useful internal volume',
    'closets.hinged.pros.3': 'facades are in the same plane',
    'closets.hinged.pros.4': 'suitable for modern and minimalist interiors',
    'closets.hinged.cons.title': 'Disadvantages of Hinged Closets',
    'closets.hinged.cons.1': 'free space is required in front of the closet',
    'closets.hinged.cons.2': 'service life depends on the quality of the hardware',
    'closets.care.title': 'Maintenance and Operation',
    'closets.care.desc': 'For correct operation of sliding wardrobes, it is recommended to periodically clean the tracks from dust. In hinged wardrobes, it is important to monitor the state of the hinges and adjust them if necessary. With proper care, both options maintain functionality and appearance for many years.',
    'closets.rooms.title': 'How to Choose a Closet for Different Rooms',
    'closets.rooms.hallway.title': 'Hallway Closet',
    'closets.rooms.hallway.desc': 'For small hallways, a sliding wardrobe is the optimal solution, saving space. In spacious rooms, a hinged or built-in closet can be installed.',
    'closets.rooms.bedroom.title': 'Bedroom Closet',
    'closets.rooms.bedroom.desc': 'In bedrooms with sufficient area, hinged wardrobes are often chosen due to their depth. For compact rooms, sliding wardrobes supplemented with alternative storage systems are suitable.',
    'closets.rooms.kids.title': 'Kids Room Closet',
    'closets.rooms.kids.desc': 'Hinged wardrobes are convenient for children due to easy opening and a full view of the contents.',
    'closets.rooms.living.title': 'Living Room Closet',
    'closets.rooms.living.desc': 'To create visually "invisible" storage systems, handleless hinged wardrobes with facades matching the wall color are used. Transformable solutions with sliding wardrobes are also possible.',
    'closets.custom.title': 'Custom Closet Production',
    'closets.custom.desc': 'We develop and manufacture:',
    'closets.custom.list.1': 'custom sliding wardrobes',
    'closets.custom.list.2': 'hinged wardrobes',
    'closets.custom.list.3': 'built-in wardrobes',
    'closets.custom.list.4': 'individual storage systems',
    'closets.custom.footer': 'Each project is created according to individual dimensions with the selection of materials, hardware, and internal filling.',
    'closets.cta.title': 'Need a closet for your interior?',
    'closets.cta.desc': 'Leave a request for a consultation — we will help you choose the optimal type of closet and develop a solution that fits perfectly into your space.',
    'closets.seo.title': 'Custom closets, sliding wardrobe, hinged closet, built-in closet, custom furniture, hallway closet, bedroom closet, living room closet.',

    'contact.error': 'Could not send message. Please contact us directly.',
    'page.notfound.title': '404 - Page Not Found',
    'page.notfound.desc': "Oops! The page you are looking for doesn't exist.",
    'calc.title': 'Calculate Kitchen Cost in 5 Steps',
    'calc.desc': 'Enter the data for an initial calculation of your kitchen cost',
    'calc.type.label': 'Kitchen Type',
    'calc.type.straight': 'Straight',
    'calc.type.lshape': 'L-Shape',
    'calc.type.ushape': 'U-Shape',
    'calc.type.island': 'With Island',
    'calc.front.label': 'Front Material',
    'calc.front.formica': 'Formica',
    'calc.front.polymer': 'Polymer',
    'calc.front.paint': 'Painted (Lacquered)',
    'calc.front.acrylic': 'Acrylic',
    'calc.front.wood': 'Solid Wood',
    'calc.counter.label': 'Countertop Type',
    'calc.counter.caes20': 'Caesarstone 20mm',
    'calc.counter.caes40': 'Caesarstone 40mm',
    'calc.counter.porcelain': 'Porcelain',
    'calc.counter.wood': 'Wood',
    'calc.hardware.label': 'Hardware Type',
    'calc.hardware.standard': 'Standard',
    'calc.hardware.premium': 'Premium',
    'calc.hardware.super': 'Super Premium',
    'calc.dimensions.label': 'Dimensions (cm)',
    'calc.dimensions.len1': 'Length 1',
    'calc.dimensions.len2': 'Length 2',
    'calc.dimensions.len3': 'Length 3',
    'calc.name': 'Full Name',
    'calc.phone': 'Phone Number',
    'calc.submit': 'Get Quote',
    'calc.success': 'Data submitted successfully! We will contact you shortly with an accurate quote.',
    'nav.calculator': 'Cost Calculator',
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

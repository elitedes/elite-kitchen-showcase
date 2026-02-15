import { lazy, Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';

// Above-fold: eagerly loaded for instant display
import HeroSection from '@/components/home/HeroSection';
import QuickNavSection from '@/components/home/QuickNavSection';
import KitchenCategoriesSection from '@/components/home/KitchenCategoriesSection';

// Below-fold: lazy loaded for faster initial paint
const FeaturedProjectsSection = lazy(() => import('@/components/home/FeaturedProjectsSection'));
const ImageComparisonSlider = lazy(() => import('@/components/home/ImageComparisonSlider'));
const InteractiveFitting = lazy(() => import('@/components/home/InteractiveFitting'));
const GoogleReviewsSection = lazy(() => import('@/components/home/GoogleReviewsSection'));
const ContactSection = lazy(() => import('@/components/home/ContactSection'));
const FAQ = lazy(() => import('@/components/FAQ'));

const faqItems = [
  {
    question: {
      he: 'כמה זמן לוקח לייצר ולהתקין מטבח בהתאמה אישית?',
      ru: 'Сколько времени занимает изготовление и установка кухни на заказ?',
      en: 'How long does it take to build and install a custom kitchen?',
    },
    answer: {
      he: 'תהליך הייצור וההתקנה אורך בממוצע 30-45 ימי עבודה, תלוי במורכבות הפרויקט. התהליך כולל מדידה במקום, תכנון ממוחשב, ייצור במפעל והתקנה מקצועית בבית הלקוח.',
      ru: 'Процесс изготовления и установки занимает в среднем 30-45 рабочих дней, в зависимости от сложности проекта. Процесс включает замер на месте, компьютерное проектирование, производство на фабрике и профессиональную установку у клиента.',
      en: 'The manufacturing and installation process takes an average of 30-45 working days, depending on project complexity. This includes on-site measurement, computer-aided design, factory production, and professional installation at the client\'s home.',
    },
  },
  {
    question: {
      he: 'האם אפשר והאם משתלם לשדרג ארונות מטבח ישנים?',
      ru: 'Можно ли и выгодно ли обновлять старые кухонные шкафы?',
      en: 'Is it possible and worth it to upgrade old kitchen cabinets?',
    },
    answer: {
      he: 'בהחלט ניתן לשדרג ארונות מטבח קיימים באמצעות החלפת דלתות וחזיתות למגירות, הוספת מגירות במקום דלתות, וכן ביצוע התאמות ושיפורים בהתאם למבנה המטבח – כולל הוספת ארונות עליונים ואפילו אי למטבח.\nמדובר בפתרון חסכוני ויעיל לשדרוג המראה והנוחות, כל עוד מצב המטבח מאפשר זאת ומצדיק את ההשקעה.',
      ru: 'Безусловно, можно обновить существующие кухонные шкафы, заменив дверцы и фасады ящиков, добавив ящики вместо дверей, а также внеся корректировки и улучшения в соответствии с планировкой кухни – включая добавление верхних шкафов и даже кухонного острова.\nЭто экономичное и эффективное решение для обновления внешнего вида и комфорта, при условии, что состояние кухни это позволяет и оправдывает вложения.',
      en: 'It is certainly possible to upgrade existing kitchen cabinets by replacing doors and drawer fronts, adding drawers instead of doors, and making adjustments and improvements following the kitchen layout – including adding upper cabinets and even a kitchen island.\nThis is a cost-effective and efficient solution for upgrading the look and comfort, provided that the condition of the kitchen allows it and justifies the investment.',
    },
  },
  {
    question: {
      he: 'מה ההבדל בין מטבח נאנו למטבח אקריל?',
      ru: 'В чём разница между кухней с нано-покрытием и акриловой кухней?',
      en: 'What is the difference between a nano and acrylic kitchen?',
    },
    answer: {
      he: 'ציפוי נאנו הוא ציפוי דק במיוחד עמיד לשריטות ולחום, עם מראה מט אלגנטי וקל מאוד לניקוי. אקריל מציע מראה מבריק ויוקרתי עם עמידות גבוהה לשריטות. שני החומרים איכותיים — הבחירה תלויה בסגנון העיצובי המועדף.',
      ru: 'Нано-покрытие — это ультратонкое покрытие, устойчивое к царапинам и нагреву, с элегантным матовым видом и лёгкое в уходе. Акрил предлагает глянцевый, роскошный вид с высокой устойчивостью к царапинам. Оба материала высококачественные — выбор зависит от предпочитаемого стиля.',
      en: 'Nano coating is an ultra-thin coating resistant to scratches and heat, with an elegant matte look and very easy to clean. Acrylic offers a glossy, luxurious appearance with high scratch resistance. Both are high-quality materials — the choice depends on your preferred design style.',
    },
  },
  {
    question: {
      he: 'האם אתם עובדים גם עם שיפוצניקים וקבלנים?',
      ru: 'Вы работаете с подрядчиками и ремонтными бригадами?',
      en: 'Do you work with contractors and renovation teams?',
    },
    answer: {
      he: 'בהחלט! אנחנו עובדים בשיתוף פעולה מלא עם שיפוצניקים וקבלנים. אנו מתאמים את לוחות הזמנים, מספקים תוכניות מדידה מדויקות לאינסטלטור ולחשמלאי, ומבצעים התקנה מקצועית שמתואמת עם שאר עבודות השיפוץ.',
      ru: 'Конечно! Мы полностью сотрудничаем с подрядчиками и ремонтными бригадами. Координируем графики, предоставляем точные чертежи для сантехников и электриков, а также выполняем профессиональную установку, согласованную с остальными ремонтными работами.',
      en: 'Absolutely! We work in full cooperation with contractors and renovation teams. We coordinate schedules, provide precise measurement plans for plumbers and electricians, and perform professional installation aligned with other renovation work.',
    },
  },
  {
    question: {
      he: 'מה כוללת אחריות על המטבח?',
      ru: 'Что включает гарантия на кухню?',
      en: 'What does the kitchen warranty cover?',
    },
    answer: {
      he: 'אנו מעניקים אחריות מלאה על כל חלקי המטבח כולל הגוף, החזיתות, הפרזול והצירים. האחריות כוללת תיקון או החלפה של כל רכיב עם פגם בייצור. בנוסף, אנו מציעים שירות תחזוקה וכוונון לאחר ההתקנה.',
      ru: 'Мы предоставляем полную гарантию на все части кухни, включая корпус, фасады, фурнитуру и петли. Гарантия покрывает ремонт или замену любого компонента с производственным дефектом. Также мы предлагаем сервисное обслуживание и регулировку после установки.',
      en: 'We provide a full warranty on all kitchen parts including the body, fronts, hardware, and hinges. The warranty covers repair or replacement of any component with a manufacturing defect. We also offer maintenance and adjustment service after installation.',
    },
  },
  {
    question: {
      he: 'מה צריך להכין בבית לפני התקנת המטבח?',
      ru: 'Что нужно подготовить дома перед установкой кухни?',
      en: 'What should I prepare at home before kitchen installation?',
    },
    answer: {
      he: 'לפני ההתקנה יש לוודא שהקירות ישרים ומטויחים, הריצוף מושלם, נקודות חשמל ומים במקום הנכון, ויש גישה חופשית לחדר. יש לנו מדריך הכנה מפורט עם צ\'קליסט מלא בדף ההתקנה באתר.',
      ru: 'Перед установкой необходимо убедиться, что стены выровнены и оштукатурены, пол уложен, электрические и водяные точки расположены правильно, и есть свободный доступ в помещение. У нас есть подробное руководство с контрольным списком на странице установки сайта.',
      en: 'Before installation, make sure walls are straight and plastered, flooring is complete, electrical and water points are in the correct positions, and there is free access to the room. We have a detailed preparation guide with a full checklist on our installation page.',
    },
  },
  {
    question: {
      he: 'באילו אזורים בארץ אתם עובדים?',
      ru: 'В каких районах страны вы работаете?',
      en: 'Which areas in Israel do you serve?',
    },
    answer: {
      he: 'אנו מייצרים ומתקינים מטבחים ממרכז הארץ ועד הדרום. המפעל שלנו ממוקם באשקלון, ויש לנו פרויקטים בתל אביב, ירושלים, באר שבע, חיפה, ראשון לציון ועוד עשרות ערים.',
      ru: 'Мы производим и устанавливаем от центра страны до юга. Наша фабрика расположена в Ашкелоне, и у нас есть проекты в Тель-Авиве, Иерусалиме, Беэр-Шеве, Хайфе, Ришон ле-Ционе и десятках других городов.',
      en: 'We manufacture and install kitchens from the center of the country to the south. Our factory is located in Ashkelon, and we have projects in Tel Aviv, Jerusalem, Beer Sheva, Haifa, Rishon LeZion, and dozens of other cities.',
    },
  },
  {
    question: {
      he: 'האם אפשר לראות דוגמאות של מטבחים שהתקנתם?',
      ru: 'Можно увидеть примеры установленных вами кухонь?',
      en: 'Can I see examples of kitchens you have installed?',
    },
    answer: {
      he: 'כמובן! באתר שלנו יש גלריית פרויקטים עם מעל 40 מטבחים שעיצבנו והתקנו ברחבי הארץ. בנוסף, ניתן לראות סרטונים ותמונות נוספות בעמודי הפייסבוק, האינסטגרם והיוטיוב שלנו. אתם גם מוזמנים לתאם ביקור במפעל שלנו באשקלון.',
      ru: 'Конечно! На нашем сайте есть галерея проектов с более чем 40 кухнями, которые мы спроектировали и установили по всей стране. Дополнительно можно увидеть видео и фото на наших страницах в Facebook, Instagram и YouTube. Также приглашаем посетить нашу фабрику в Ашкелоне.',
      en: 'Of course! Our website has a project gallery with over 40 kitchens we\'ve designed and installed across the country. You can also see videos and photos on our Facebook, Instagram, and YouTube pages. You\'re also welcome to schedule a visit to our factory in Ashkelon.',
    },
  },
];

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Elite Design | מטבחים, ארונות ונגרות בהתאמה אישית - 20 שנות ניסיון"
        description="נגריית Elite Design מתמחה בייצור מטבחים ורהיטים מעל 20 שנה. ארונות, חדרי רחצה ופתרונות נגרות לכל הבית במחירים נוחים ובאיכות מעולה."
        canonical="/"
      />
      <HeroSection />
      <QuickNavSection />
      <KitchenCategoriesSection />
      <Suspense fallback={null}>
        <FeaturedProjectsSection />
        <ImageComparisonSlider />
        <InteractiveFitting />
        <FAQ items={faqItems} />
        <GoogleReviewsSection />
        <ContactSection />
      </Suspense>
    </Layout>
  );
};

export default Index;

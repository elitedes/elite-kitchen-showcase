import React from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';

const Accessibility = () => {
    const { language, dir } = useLanguage();

    const content = {
        he: {
            title: 'הצהרת נגישות',
            text: `חברת Elite Design שואפת להבטיח את הנגישות האתר שלנו לכל המשתמשים, כולל אנשים עם מוגבלויות, בהתאם לעקרונות של שוויון זכויות ותקני נגישות בינלאומיים. האתר שלנו מותאם חלקית באמצעות שירות הנגישות enable.co.il, אשר מסייע בשיפור חוויית המשתמש עבור מגוון רחב של משתמשים.

עמידה בתקנים
אנו פועלים כדי להבטיח שהאתר שלנו יעמוד בהנחיות נגישות לתכני אינטרנט (WCAG) ברמת AA, שנקבעו על ידי קונסורציום הרשת העולמית (W3C), וכן בחוק שוויון זכויות לאנשים עם מוגבלות (ישראל) ובתקנות הרלוונטיות בנושא נגישות משאבי אינטרנט.

מה שכבר יושם
כדי לשפר את הנגישות באתר, עומדות לרשותכם התכונות הבאות:
• תפריט נגישות המסופק דרך שירות enable.co.il, עם אפשרות להפעלת התאמות שונות.
• ניווט באמצעות מקלדת.
• תאימות לתוכנות קורא מסך וטכנולוגיות מסייעות (כגון NVDA, JAWS).
• אפשרות לשינוי גודל גופן, ניגודיות צבעים והגדרות נוספות לנוחות הקריאה וההבנה.

מגבלות
למרות מאמצינו, ייתכן שחלקים מסוימים באתר, לרבות שירותים של צד שלישי או חומרים מסוימים, לא יעמדו במלואם בכל הקריטריונים לנגישות. אנו עובדים באופן מתמיד על שיפור הנגישות ושדרוג הפונקציונליות של האתר.

הצעות ובקשות
אם נתקלתם בקושי בגישה לתוכן האתר, או אם יש לכם הצעות לשיפור הנגישות, נשמח אם תיצורו עמנו קשר:
דוא"ל: isramebel@gmail.com
טלפון: 086711767

אנו מעריכים את המשוב שלכם ונעשה כל שביכולתנו לפתור כל מכשול ולשפר את חוויית השימוש באתר עבור כלל המשתמשים.

עדכונים
החברה שומרת לעצמה את הזכות לעדכן הצהרת נגישות זו. כל השינויים יפורסמו בדף זה בצירוף תאריך העדכון.`,
        },
        ru: {
            title: 'Доступность сайта',
            text: `Компания Elite Design стремится обеспечить доступность нашего веб-сайта для всех пользователей, включая людей с ограниченными возможностями, в соответствии с принципами равного доступа и международными стандартами доступности. Наш сайт частично адаптирован с использованием сервиса доступности enable.co.il, что помогает улучшить взаимодействие с сайтом для широкого круга пользователей.

Соответствие стандартам
Мы работаем над тем, чтобы наш сайт соответствовал рекомендациям Руководства по обеспечению доступности веб‑контента (WCAG) на уровне AA, установленным Консорциумом Всемирной Паутины (W3C), а также Закону Израиля о равных правах для людей с инвалидностью (Equal Rights for Persons with Disabilities Law) и соответствующим нормативам о доступности интернет‑ресурсов.

Что уже реализовано
Для улучшения доступности на сайте доступны следующие функции:
• Меню доступности, предоставляемое через сервис enable.co.il, с возможностью включения различных адаптаций.
• Навигация с помощью клавиатуры.
• Совместимость с программами чтения экрана и вспомогательными технологиями (например NVDA, JAWS).
• Возможность изменения размера шрифта, цветового контраста и других параметров для удобства чтения и восприятия.

Ограничения
Несмотря на наши усилия, некоторые части сайта, в том числе сторонние сервисы или материалы, могут не полностью соответствовать всем критериям доступности. Мы постоянно работаем над улучшением доступности и обновлением функциональности сайта.

Ваши предложения и запросы
Если у вас возникли трудности с доступом к содержимому сайта или есть предложения по улучшению доступности, пожалуйста, свяжитесь с нами:
Email: isramebel@gmail.com
Телефон: 086711767

Мы ценим ваш отзыв и сделаем всё возможное, чтобы устранить выявленные препятствия и улучшить опыт использования сайта для всех пользователей.

Обновления
Компания оставляет за собой право обновлять этот текст доступности. Все изменения будут опубликованы на этой странице с указанием даты обновления.`,
        },
        en: {
            title: 'Accessibility Statement',
            text: `Elite Design is committed to making our website accessible to all users, including people with disabilities, in accordance with the principles of equal access and international accessibility standards. Our site is partially adapted using the enable.co.il accessibility service, which helps improve site interaction for a wide range of users.

Compliance with Standards
We are working to ensure our site meets the Web Content Accessibility Guidelines (WCAG) at the AA level, set by the World Wide Web Consortium (W3C), as well as the Israel Equal Rights for Persons with Disabilities Law and relevant regulations on the accessibility of internet resources.

What Has Already Been Implemented
To improve accessibility, the following features are available on the site:
• An accessibility menu provided through the enable.co.il service, with the ability to enable various adaptations.
• Keyboard navigation.
• Compatibility with screen readers and assistive technologies (e.g., NVDA, JAWS).
• The ability to change font size, color contrast, and other parameters for ease of reading and perception.

Limitations
Despite our efforts, some parts of the site, including third-party services or materials, may not fully meet all accessibility criteria. We are constantly working to improve accessibility and update site functionality.

Your Suggestions and Requests
If you have difficulty accessing the site's content or have suggestions for improving accessibility, please contact us:
Email: isramebel@gmail.com
Phone: 086711767

We appreciate your feedback and will do our best to address any identifying obstacles and improve the site experience for all users.

Updates
The company reserves the right to update this accessibility statement. All changes will be posted on this page with the update date indicated.`,
        }
    };

    const currentContent = content[language as keyof typeof content];

    return (
        <Layout>
            <SEO 
                title={`${currentContent.title} | Elite Design`} 
                description={currentContent.title}
                canonical="/accessibility"
            />
            <div className="bg-[#FAF8F5] min-h-screen pt-32 pb-24" dir={dir}>
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-8 text-center">{currentContent.title}</h1>
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E5E0D8] prose prose-lg max-w-none text-muted-foreground whitespace-pre-wrap">
                        {currentContent.text}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Accessibility;

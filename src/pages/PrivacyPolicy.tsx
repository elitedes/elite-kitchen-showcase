import React from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
    const { language, dir } = useLanguage();

    const content = {
        he: {
            title: 'מדיניות פרטיות',
            text: `אנו ב-Elite Design מכבדים את פרטיותך ומחויבים להגן על הנתונים האישיים שאתה מספק בעת השימוש באתר שלנו. מדיניות פרטיות זו מסבירה אילו נתונים אנו אוספים, כיצד אנו משתמשים בהם ומהן זכויותיך.

1. איסוף מידע
אנו עשויים לאסוף את סוגי המידע הבאים:
• נתונים אישיים שאתה מספק בעת הרשמה, ביצוע הזמנה או הרשמה לחדשות (כגון שם, כתובת דוא"ל, טלפון).
• מידע על השימוש שלך באתר (כגון דפים שבוקרו, זמן ביקור, כתובת IP, סוג מכשיר ודפדפן).
• קובצי Cookie וטכנולוגיות דומות לשיפור ביצועי האתר והתאמה אישית של תוכן.

2. שימוש במידע
הנתונים שנאספו משמשים ל:
• עיבוד ההזמנות והבקשות שלך.
• מתן תמיכה ותקשורת איתך.
• התאמה אישית של תוכן ושיפור פונקציונליות האתר.
• שליחת הודעות מידע ושיווק, אם נתת את הסכמתך לכך.

3. גילוי מידע לצדדים שלישיים
איננו מוכרים או מעבירים את הנתונים האישיים שלך לצדדים שלישיים ללא הסכמתך, למעט במקרים הבאים:
• הצורך בביצוע הזמנה (לדוגמה, לשירותי שליחויות או למערכות תשלום).
• ציות לחקיקה, להחלטות בית משפט או לבקשות של רשויות אכיפת החוק.
• הגנה על זכויותינו, רכושנו וביטחון המשתמשים שלנו.

4. אחסון נתונים
נתונים אישיים נשמרים רק כל עוד יש צורך בהגשמת המטרות המפורטות במדיניות זו, או בהתאם לדרישות החוק.

5. הגנת נתונים
אנו משתמשים באמצעים טכניים וארגוניים כדי להגן על נתונים אישיים מפני גישה, שינוי, גילוי או השמדה בלתי מורשים.

6. זכויות משתמשים
יש לך את הזכות:
• לבקש גישה לנתונים האישיים שלך.
• לדרוש תיקון או מחיקה של נתונים.
• לבטל או למשוך את ההסכמה לעיבוד נתונים בכל עת.
• להגביל את עיבוד הנתונים שלך או להתנגד לו.

7. קובצי Cookie
האתר שלנו משתמש בקובצי Cookie כדי לשפר את חוויית המשתמש, לנתח תעבורה ולהתאים אישית תוכן. באפשרותך לשלוט בהגדרות קובצי ה-Cookie בדפדפן שלך.

8. שינויים במדיניות
אנו שומרים לעצמנו את הזכות לעדכן מדיניות פרטיות זו. שינויים יפורסמו בדף זה בצירוף תאריך העדכון.

9. צור קשר
אם יש לך שאלות לגבי מדיניות הפרטיות שלנו או עיבוד הנתונים האישיים שלך, אנא צור איתנו קשר:
דוא"ל: isramebel@gmail.com
טלפון: 086711767`,
        },
        ru: {
            title: 'Политика конфиденциальности',
            text: `Мы в Elite Design уважаем вашу конфиденциальность и обязуемся защищать персональные данные, которые вы предоставляете при использовании нашего сайта. Настоящая Политика конфиденциальности объясняет, какие данные мы собираем, как их используем и какие у вас есть права.

1. Сбор информации
Мы можем собирать следующие типы информации:
• Личные данные, которые вы предоставляете при регистрации, оформлении заказа или подписке на новости (например, имя, адрес электронной почты, телефон).
• Информацию о вашем использовании сайта (например, посещаемые страницы, время посещения, IP-адрес, тип устройства и браузера).
• Файлы cookie и аналогичные технологии для улучшения работы сайта и персонализации контента.

2. Использование информации
Собранные данные используются для:
• Обработки ваших заказов и запросов.
• Предоставления поддержки и коммуникации с вами.
• Персонализации контента и улучшения функциональности сайта.
• Отправки информационных и маркетинговых сообщений, если вы дали согласие на это.

3. Раскрытие информации третьим лицам
Мы не продаем и не передаем ваши личные данные третьим лицам без вашего согласия, кроме случаев:
• Необходимости выполнения заказа (например, курьерским службам или платежным системам).
• Соблюдения законодательства, судебных решений или запросов правоохранительных органов.
• Защиты наших прав, собственности и безопасности пользователей.

4. Хранение данных
Персональные данные хранятся только столько, сколько необходимо для выполнения целей, указанных в этой Политике, или в соответствии с требованиями законодательства.

5. Защита данных
Мы используем технические и организационные меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.

6. Права пользователей
Вы имеете право:
• Запрашивать доступ к своим персональным данным.
• Требовать исправления или удаления данных.
• Отозвать согласие на обработку данных в любой момент.
• Ограничить обработку ваших данных или возражать против нее.

7. Файлы cookie
Наш сайт использует файлы cookie для улучшения работы сайта, анализа трафика и персонализации контента. Вы можете управлять настройками cookie в своем браузере.

8. Изменения политики
Мы оставляем за собой право обновлять настоящую Политику конфиденциальности. Изменения будут опубликованы на этой странице с указанием даты обновления.

9. Контакты
Если у вас есть вопросы о нашей Политике конфиденциальности или обработке персональных данных, свяжитесь с нами:
Email: isramebel@gmail.com
Телефон: 086711767`,
        },
        en: {
            title: 'Privacy Policy',
            text: `At Elite Design, we respect your privacy and are committed to protecting the personal data you provide when using our site. This Privacy Policy explains what data we collect, how we use it, and what your rights are.

1. Information Collection
We may collect the following types of information:
• Personal data that you provide during registration, placing an order, or subscribing to news (e.g., name, email address, phone).
• Information about your use of the site (e.g., pages visited, visit time, IP address, device type, and browser).
• Cookies and similar technologies to improve site performance and personalize content.

2. Use of Information
The collected data is used for:
• Processing your orders and requests.
• Providing support and communicating with you.
• Personalizing content and improving site functionality.
• Sending informational and marketing messages if you have consented to this.

3. Disclosure of Information to Third Parties
We do not sell or transfer your personal data to third parties without your consent, except in cases of:
• The need to fulfill an order (e.g., courier services or payment systems).
• Compliance with legislation, court decisions, or requests from law enforcement agencies.
• Protecting our rights, property, and user safety.

4. Data Storage
Personal data is stored only as long as necessary to fulfill the purposes specified in this Policy, or in accordance with legal requirements.

5. Data Protection
We use technical and organizational measures to protect personal data from unauthorized access, alteration, disclosure, or destruction.

6. User Rights
You have the right to:
• Request access to your personal data.
• Request correction or deletion of data.
• Withdraw consent to data processing at any time.
• Restrict or object to the processing of your data.

7. Cookies
Our site uses cookies to improve the site's performance, analyze traffic, and personalize content. You can manage cookie settings in your browser.

8. Policy Changes
We reserve the right to update this Privacy Policy. Changes will be posted on this page with the update date indicated.

9. Contacts
If you have questions about our Privacy Policy or personal data processing, please contact us:
Email: isramebel@gmail.com
Phone: 086711767`,
        }
    };

    const currentContent = content[language as keyof typeof content];

    return (
        <Layout>
            <SEO 
                title={`${currentContent.title} | Elite Design`} 
                description={currentContent.title}
                canonical="/privacy"
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

export default PrivacyPolicy;

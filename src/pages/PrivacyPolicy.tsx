import React from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
    const { language, dir } = useLanguage();

    const content = {
        he: {
            title: 'מדיניות פרטיות',
            text: `עלית דיזיין מכבדת את פרטיות המשתמשים. מידע הנאסף באתר משמש אך ורק לצורך יצירת קשר ומתן שירות. אנו לא מעבירים מידע לצדדים שלישיים ללא הסכמה מפורשת.
            
            האתר עשוי להשתמש בעוגיות (Cookies) כדי לשפר את חוויית המשתמש. באפשרותך לשנות את הגדרות הדפדפן שלך כדי לסרב להן.
            
            לכל שאלה בנושא פרטיות, אנא צור קשר.`,
        },
        ru: {
            title: 'Политика конфиденциальности',
            text: `Elite Design уважает конфиденциальность пользователей. Информация, собранная на сайте, используется исключительно для связи и предоставления услуг. Мы не передаем информацию третьим лицам без явного согласия.
            
            Сайт может использовать файлы cookie для улучшения пользовательского опыта. Вы можете изменить настройки своего браузера, чтобы отказаться от них.
            
            По любым вопросам конфиденциальности, пожалуйста, свяжитесь с нами.`,
        },
        en: {
            title: 'Privacy Policy',
            text: `Elite Design respects user privacy. Information collected on the site is used solely for the purpose of contacting and providing service. We do not pass information to third parties without explicit consent.
            
            The site may use cookies to improve the user experience. You can change your browser settings to refuse them.
            
            For any privacy questions, please contact us.`,
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

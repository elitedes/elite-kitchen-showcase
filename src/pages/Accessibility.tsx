import React from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';

const Accessibility = () => {
    const { language, dir } = useLanguage();

    const content = {
        he: {
            title: 'הצהרת נגישות',
            text: `עלית דיזיין פועלת רבות על מנת להנגיש את האתר לאנשים עם מוגבלויות, על מנת לקדם שוויון זכויות. 
            
            האתר הותאם לדרישות התקנות לשוויון זכויות לאנשים עם מוגבלויות (התאמות נגישות לשירות). 
            
            אם נתקלתם בבעיית נגישות באתר, נשמח אם תפנו אלינו כדי שנוכל לתקן את ההפרעה ולשפר את האתר.`,
        },
        ru: {
            title: 'Заявление о доступности',
            text: `Elite Design прилагает много усилий, чтобы сделать сайт доступным для людей с ограниченными возможностями, в целях поощрения равных прав. 
            
            Сайт адаптирован к требованиям правил обеспечения равных прав для людей с ограниченными возможностями. 
            
            Если вы столкнулись с проблемой доступности на сайте, мы будем рады, если вы свяжетесь с нами, чтобы мы могли исправить сбой и улучшить сайт.`,
        },
        en: {
            title: 'Accessibility Statement',
            text: `Elite Design works hard to make the site accessible to people with disabilities, in order to promote equal rights. 
            
            The site has been adapted to the requirements of the equal rights regulations for people with disabilities. 
            
            If you encounter an accessibility problem on the site, we would appreciate it if you contact us so we can fix the disruption and improve the site.`,
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

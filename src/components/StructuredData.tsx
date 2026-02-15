import { Helmet } from 'react-helmet-async';

const DOMAIN = 'https://elitedesign.co.il';

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${DOMAIN}/#organization`,
    name: 'Elite Design kitchens & more',
    url: DOMAIN,
    logo: {
        '@type': 'ImageObject',
        url: `${DOMAIN}/logo.png`,
        width: 512,
        height: 512,
    },
    image: `${DOMAIN}/logo.png`,
    description:
        'Elite Design — מעל 20 שנות ניסיון בתכנון וייצור מטבחים בהתאמה אישית בישראל. אנו מאמינים שהמטבח הוא לא רק רהיט, אלא לב הבית, שבו כל פרט קטן חשוב. אנו מתמחים בפתרונות יצירתיים: ממטבחי יוקרה בעיצוב מודרני עם ציפוי נאנו ועד לנגרות בהתאמה אישית וארונות מעוצבים.',
    telephone: '+972-52-621-6655',
    email: 'isramebel@gmail.com',
    contactPoint: [
        {
            '@type': 'ContactPoint',
            telephone: '+972-52-621-6655',
            contactType: 'customer service',
            availableLanguage: ['Hebrew', 'Russian', 'English'],
            areaServed: 'IL',
        },
    ],
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'צה"ל 8',
        addressLocality: 'אשקלון',
        addressRegion: 'דרום',
        addressCountry: 'IL',
    },
    sameAs: [
        'https://www.facebook.com/elitedesignkitchens',
        'https://www.instagram.com/elitedesignkitchens/',
        'https://www.youtube.com/@elitedesignkitchens',
        'https://share.google/2T8SzlQhkHRVIAI6X',
    ],
};

const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${DOMAIN}/#website`,
    name: 'Elite Design kitchens & more',
    url: DOMAIN,
    publisher: { '@id': `${DOMAIN}/#organization` },
    inLanguage: ['he', 'ru', 'en'],
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    '@id': `${DOMAIN}/#localbusiness`,
    name: 'Elite Design kitchens & more',
    url: DOMAIN,
    image: `${DOMAIN}/logo.png`,
    telephone: '+972-52-621-6655',
    email: 'isramebel@gmail.com',
    priceRange: '₪₪-₪₪₪',
    description:
        'Elite Design — מעל 20 שנות ניסיון בתכנון וייצור מטבחים בהתאמה אישית בישראל.',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'צה"ל 8',
        addressLocality: 'אשקלון',
        addressRegion: 'דרום',
        addressCountry: 'IL',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 31.6688,
        longitude: 34.5743,
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: '09:00',
            closes: '18:00',
        },
    ],
    sameAs: [
        'https://www.facebook.com/elitedesignkitchens',
        'https://www.instagram.com/elitedesignkitchens/',
        'https://www.youtube.com/@elitedesignkitchens',
    ],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'שירותי עיצוב ונגרות',
        itemListElement: [
            {
                '@type': 'OfferCatalog',
                name: 'מטבחים בהתאמה אישית',
                itemListElement: [
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'מטבח מודרני',
                            description: 'עיצוב וייצור מטבחים מודרניים עם ציפוי נאנו, אקריל ופורמייקה',
                        },
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'מטבח כפרי',
                            description: 'מטבחים כפריים מעץ מלא בסגנון קלאסי ונצחי',
                        },
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'מטבח עץ מלא',
                            description: 'מטבחים מעץ מלא איכותי בעבודת נגרות מקצועית',
                        },
                    },
                ],
            },
            {
                '@type': 'OfferCatalog',
                name: 'ארונות בהתאמה אישית',
                itemListElement: [
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'ארונות הזזה',
                            description: 'ארונות הזזה מעוצבים עם מערכת מגירות ותאורת LED',
                        },
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'ארונות פתיחה',
                            description: 'ארונות פתיחה בהתאמה אישית עם טריקה שקטה',
                        },
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'חדרי ארונות',
                            description: 'תכנון וייצור חדרי ארונות (walk-in closets) בהתאמה אישית',
                        },
                    },
                ],
            },
        ],
    },
};

const StructuredData = () => (
    <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
    </Helmet>
);

export default StructuredData;

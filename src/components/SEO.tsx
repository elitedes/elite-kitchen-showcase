import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const DOMAIN = 'https://elitedesign.co.il';
const SITE_NAME = 'Elite Design kitchens & more מטבחים וארונות בהתאמה אישית';
const DEFAULT_IMAGE = `${DOMAIN}/og-image.png`;
const DEFAULT_TYPE = 'website';

interface SEOProps {
    title: string;
    description: string;
    canonical: string;
    image?: string;
    type?: string;
}

const SEO = ({
    title,
    description,
    canonical,
    image = DEFAULT_IMAGE,
    type = DEFAULT_TYPE,
}: SEOProps) => {
    const { language, getLocalizedPath } = useLanguage();

    // Ensure canonical is relative for processing
    const relativePath = canonical.replace(DOMAIN, '').replace(/^\/(ru|en)(\/|$)/, '/');
    const fullCanonical = `${DOMAIN}${getLocalizedPath(relativePath)}`;
    const fullImage = image.startsWith('http') ? image : `${DOMAIN}${image}`;

    // Hreflang URLs
    const heUrl = `${DOMAIN}${relativePath === '/' ? '' : relativePath}`;
    const ruUrl = `${DOMAIN}/ru${relativePath === '/' ? '' : relativePath}`;
    const enUrl = `${DOMAIN}/en${relativePath === '/' ? '' : relativePath}`;

    return (
        <Helmet>
            <html lang={language} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonical} />

            {/* hreflang tags */}
            <link rel="alternate" hrefLang="he" href={heUrl} />
            <link rel="alternate" hrefLang="ru" href={ruUrl} />
            <link rel="alternate" hrefLang="en" href={enUrl} />
            <link rel="alternate" hrefLang="x-default" href={heUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:type" content={type} />
            <meta property="og:locale" content={language === 'he' ? 'he_IL' : language === 'ru' ? 'ru_RU' : 'en_US'} />
            <meta property="og:site_name" content={SITE_NAME} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />
        </Helmet>
    );
};

export default SEO;

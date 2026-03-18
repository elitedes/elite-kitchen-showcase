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

    // Strip any existing language prefix to get the base path, then re-apply current language
    const basePath = canonical.replace(DOMAIN, '').replace(/^\/(ru|en)(\/|$)/, '/');
    // Ensure trailing slash for all paths (matches Vercel trailingSlash: true)
    const normalizedPath = basePath.endsWith('/') ? basePath : `${basePath}/`;
    const localizedPath = getLocalizedPath(basePath);
    const fullCanonical = `${DOMAIN}${localizedPath.endsWith('/') ? localizedPath : `${localizedPath}/`}`;
    const fullImage = image.startsWith('http') ? image : `${DOMAIN}${image}`;

    // Hreflang URLs — all with trailing slash
    const heUrl = `${DOMAIN}${normalizedPath}`;
    const ruUrl = `${DOMAIN}/ru${normalizedPath}`;
    const enUrl = `${DOMAIN}/en${normalizedPath}`;

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

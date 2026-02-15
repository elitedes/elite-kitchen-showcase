import { Helmet } from 'react-helmet-async';

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
    const fullCanonical = canonical.startsWith('http') ? canonical : `${DOMAIN}${canonical}`;
    const fullImage = image.startsWith('http') ? image : `${DOMAIN}${image}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:type" content={type} />
            <meta property="og:locale" content="he_IL" />
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

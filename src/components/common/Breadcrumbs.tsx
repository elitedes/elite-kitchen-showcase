import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
    label: string;
    path: string;
    isCurrent?: boolean;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    const { dir, t } = useLanguage();

    // Generate JSON-LD for BreadcrumbList
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": t('nav.home'),
                "item": window.location.origin
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label,
                "item": `${window.location.origin}${item.path}`
            }))
        ]
    };

    return (
        <nav aria-label="Breadcrumb" className="py-4 px-4 bg-muted/30 border-b border-border/50" dir={dir}>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <div className="container mx-auto">
                <ol className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
                    <li className="flex items-center">
                        <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            <span className="sr-only">{t('nav.home')}</span>
                        </Link>
                    </li>
                    {items.map((item, index) => (
                        <li key={item.path} className="flex items-center">
                            <ChevronRight className={`w-4 h-4 mx-1 opacity-40 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                            {item.isCurrent ? (
                                <span className="font-medium text-charcoal" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <Link to={item.path} className="hover:text-gold transition-colors">
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs;

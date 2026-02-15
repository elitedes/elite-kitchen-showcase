import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

const NotFound = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SEO
        title="404 - הדף לא נמצא | Elite Design"
        description="הדף שחיפשת לא נמצא. חזרו לדף הבית של Elite Design."
        canonical={location.pathname}
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t('page.notfound.title')}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t('page.notfound.desc')}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {t('page.notfound.back')}
        </a>
      </div>
    </div>
  );
};

export default NotFound;

import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage, Language } from '@/contexts/LanguageContext';

/**
 * LanguageNavigator handles automatic navigation when language changes.
 * Must be placed inside BrowserRouter to access useNavigate().
 */
export const LanguageNavigator = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();
    const previousLanguage = useRef<Language>(language);

    useEffect(() => {
        // Only navigate if language actually changed
        if (previousLanguage.current === language) return;

        previousLanguage.current = language;

        // Build the new path based on the new language
        const currentPath = location.pathname;
        const cleanPath = currentPath.replace(/^\/(ru|en)(\/|$)/, '/');
        const newPath = language === 'he' ? cleanPath : `/${language}${cleanPath === '/' ? '' : cleanPath}`;

        // Navigate using React Router
        if (currentPath !== newPath) {
            navigate(newPath, { replace: true });
        }
    }, [language, location.pathname, navigate]);

    return null; // This component doesn't render anything
};

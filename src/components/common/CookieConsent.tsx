import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CookieConsent() {
  const { language, dir } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already consented
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay showing the popup slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Check if consent has expired (12 months = 365 days)
      const consentDate = new Date(consent);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - consentDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays > 365) {
        localStorage.removeItem('cookie-consent');
        setIsVisible(true);
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', new Date().toISOString());
    setIsVisible(false);
  };

  const content = {
    he: {
      text: "אתר זה משתמש בקובצי Cookie כדי לשפר את חוויית המשתמש, לנתח תנועה ולהתאים תוכן. המשך השימוש באתר מהווה הסכמה לשימוש ב-Cookie.",
      accept: "קבל",
      learnMore: "למד עוד"
    },
    ru: {
      text: "Этот сайт использует файлы cookie для улучшения пользовательского опыта, анализа трафика и настройки контента. Продолжая использовать сайт, вы соглашаетесь с использованием файлов cookie.",
      accept: "Принять",
      learnMore: "Узнать больше"
    },
    en: {
      text: "This site uses cookies to enhance user experience, analyze traffic, and personalize content. By continuing to use the site, you consent to the use of cookies.",
      accept: "Accept",
      learnMore: "Learn More"
    }
  };

  const currentContent = content[language as keyof typeof content] || content.en;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pb-safe pointer-events-none"
          dir={dir}
        >
          <div className="container mx-auto max-w-6xl pointer-events-auto">
            <div className="bg-charcoal text-white rounded-xl shadow-2xl p-4 md:p-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 backdrop-blur-md bg-opacity-95">
              <div className="flex-1 text-sm md:text-base text-white/90 leading-relaxed font-heebo" aria-live="polite">
                {currentContent.text}
              </div>
              <div className="flex flex-row gap-3 w-full md:w-auto shrink-0 justify-end">
                <Link
                  to="/privacy"
                  className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label={currentContent.learnMore}
                >
                  {currentContent.learnMore}
                </Link>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 text-sm font-bold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-charcoal"
                  aria-label={currentContent.accept}
                >
                  {currentContent.accept}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const QuizPage = () => {
    const { language } = useLanguage();

    useEffect(() => {
        // Redirect directly to the standalone quiz page with the correct language
        window.location.href = `/quiz.html?lang=${language}&start=true`;
    }, [language]);

    // Show a brief loading state while redirecting
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5]">
            <div className="animate-pulse text-2xl font-serif text-[#2C2C2C] opacity-60">
                Loading...
            </div>
        </div>
    );
};

export default QuizPage;

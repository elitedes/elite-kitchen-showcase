import { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "./components/layout/ScrollToTop";

// Eagerly load the homepage — it's the critical path
import Index from "./pages/Index";

// Lazy load all other pages for code splitting
const About = lazy(() => import("./pages/About"));
const Kitchens = lazy(() => import("./pages/Kitchens"));
const KitchenCategory = lazy(() => import("./pages/KitchenCategory"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Promotions = lazy(() => import("./pages/Promotions"));
const Installation = lazy(() => import("./pages/Installation"));
const Magazine = lazy(() => import("./pages/Magazine"));
const Closets = lazy(() => import("./pages/Closets"));
const Calculator = lazy(() => import("./pages/Calculator"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const QuizPage = lazy(() => import("./pages/QuizPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Minimal loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-3 border-accent/30 border-t-accent rounded-full animate-spin" />
      <p className="text-charcoal/40 text-sm font-heebo">Loading...</p>
    </div>
  </div>
);

// Extracted so it can be used with StaticRouter for SSG
export const AppRoutes = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/kitchens" element={<Kitchens />} />
              <Route path="/kitchens/:category" element={<KitchenCategory />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/installation" element={<Installation />} />
              <Route path="/magazine" element={<Magazine />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/closets" element={<Closets />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/quiz-selection" element={<QuizPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;

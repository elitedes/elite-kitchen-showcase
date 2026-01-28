import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Kitchens from "./pages/Kitchens";
import KitchenCategory from "./pages/KitchenCategory";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Showroom from "./pages/Showroom";
import Promotions from "./pages/Promotions";
import Installation from "./pages/Installation";
import Magazine from "./pages/Magazine";
import Closets from "./pages/Closets";
import Calculator from "./pages/Calculator";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/layout/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/kitchens" element={<Kitchens />} />
            <Route path="/kitchens/:category" element={<KitchenCategory />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/showroom" element={<Showroom />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/magazine" element={<Magazine />} />
            <Route path="/closets" element={<Closets />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

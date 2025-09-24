import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import Index from "./pages/Index";
import WhyUs from "./pages/WhyUs";
import CaseStudies from "./pages/CaseStudies";
import Book from "./pages/Book";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AppointmentEngine from "./pages/AppointmentEngine";
import CustomerSupport from "./pages/CustomerSupport";
import LeadGenerationAndOutreach from "./pages/LeadGenerationAndOutreach";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/utils/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/appointment-engine" element={<AppointmentEngine />} />
            <Route path="/customer-support" element={<CustomerSupport />} />
            <Route path="/lead-generation-outreach" element={<LeadGenerationAndOutreach />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/book" element={<Book />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
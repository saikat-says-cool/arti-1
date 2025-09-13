import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FeaturesPage from "./pages/Features";
import WhoWeHelpPage from "./pages/WhoWeHelp";
import HowItWorksPage from "./pages/HowItWorks";
import WhatYouGetPage from "./pages/WhatYouGet";
import WhatWeBuiltPage from "./pages/WhatWeBuilt";
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
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/who-we-help" element={<WhoWeHelpPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/what-you-get" element={<WhatYouGetPage />} />
          <Route path="/what-we-built" element={<WhatWeBuiltPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
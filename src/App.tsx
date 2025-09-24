"use client";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import Index from '@/pages/Index';
import WhyUs from '@/pages/WhyUs';
import OfferPage from '@/pages/OfferPage';
import { offers } from './data/offers';
import { AnimatePresence } from 'framer-motion';
import AnimatedPage from '@/components/AnimatedPage';
import ScrollToTop from '@/components/utils/ScrollToTop';
import CaseStudies from '@/pages/CaseStudies';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Book from '@/pages/Book';
import NotFound from '@/pages/NotFound';

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Index /></AnimatedPage>} />
        <Route path="/why-us" element={<AnimatedPage><WhyUs /></AnimatedPage>} />
        <Route path="/case-studies" element={<AnimatedPage><CaseStudies /></AnimatedPage>} />
        <Route path="/blog" element={<AnimatedPage><Blog /></AnimatedPage>} />
        <Route path="/blog/:slug" element={<AnimatedPage><BlogPost /></AnimatedPage>} />
        <Route path="/book" element={<AnimatedPage><Book /></AnimatedPage>} />
        {offers.map((offer) => (
          <Route 
            key={offer.slug} 
            path={`/offer/${offer.slug}`} 
            element={<AnimatedPage><OfferPage offer={offer} /></AnimatedPage>} 
          />
        ))}
        <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
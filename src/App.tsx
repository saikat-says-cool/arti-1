"use client";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import Index from '@/pages/Index';
import WhyUs from '@/pages/WhyUs';
import OfferPage from '@/pages/OfferPage';
import { offers } from './data/offers';
import { AnimatePresence } from 'framer-motion';
import AnimatedPage from '@/components/AnimatedPage';

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Index /></AnimatedPage>} />
        <Route path="/why-us" element={<AnimatedPage><WhyUs /></AnimatedPage>} />
        {offers.map((offer) => (
          <Route 
            key={offer.slug} 
            path={`/offer/${offer.slug}`} 
            element={<AnimatedPage><OfferPage offer={offer} /></AnimatedPage>} 
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
"use client";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from '@/pages/Index';
import OutreachEngine from '@/pages/OutreachEngine';
import AppointmentSetter from '@/pages/AppointmentSetter';
import CustomerSupportSalesAssistant from '@/pages/CustomerSupportSalesAssistant';
import OurProducts from '@/pages/OurProducts'; // Import the new OurProducts page
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/outreach-engine" element={<OutreachEngine />} />
        <Route path="/appointment-setter" element={<AppointmentSetter />} />
        <Route path="/customer-support-sales-assistant" element={<CustomerSupportSalesAssistant />} />
        <Route path="/our-products" element={<OurProducts />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;
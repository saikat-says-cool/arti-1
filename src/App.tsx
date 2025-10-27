"use client";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from '@/pages/Index';
import OutreachEngine from '@/pages/OutreachEngine';
import AppointmentSetter from '@/pages/AppointmentSetter';
import CustomerSupportSalesAssistant from '@/pages/CustomerSupportSalesAssistant';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/outreach-engine" element={<OutreachEngine />} />
        <Route path="/appointment-setter" element={<AppointmentSetter />} />
        <Route path="/customer-support-sales-assistant" element={<CustomerSupportSalesAssistant />} />
      </Routes>
    </Router>
  );
}

export default App;
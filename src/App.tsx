"use client";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from '@/pages/Index';
import { DynamicColorProvider } from '@/context/DynamicColorContext';

function App() {
  return (
    <DynamicColorProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </DynamicColorProvider>
  );
}

export default App;
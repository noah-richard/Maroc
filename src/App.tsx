import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DestinationPage } from './pages/DestinationPage';
import { ScrollToTop } from './components/common/ScrollToTop';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations/:slug" element={<DestinationPage />} />
        <Route path="/destination/:slug" element={<Navigate to="/destinations/:slug" replace />} />
        <Route path="*" element={<DestinationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

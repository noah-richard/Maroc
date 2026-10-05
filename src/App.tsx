import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DestinationPage } from './pages/DestinationPage';
import { ClubPage } from './pages/ClubPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { CustomPageView } from './pages/CustomPageView';
import { ScrollToTop } from './components/common/ScrollToTop';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/club" element={<ClubPage />} />
        <Route path="/destinations/:slug" element={<DestinationPage />} />
        <Route path="/destination/:slug" element={<Navigate to="/destinations/:slug" replace />} />
        <Route path="/p/:slug" element={<CustomPageView />} />
        <Route path="/page/:slug" element={<CustomPageView />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin/:tab" element={<AdminDashboardPage />} />
        <Route path="*" element={<DestinationPage />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;


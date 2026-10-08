import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DestinationPage } from './pages/DestinationPage';
import { ClubPage } from './pages/ClubPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { CustomPageView } from './pages/CustomPageView';
import { PartnerLandingPage } from './pages/PartnerLandingPage';
import { PartnerDashboardPage } from './pages/PartnerDashboardPage';
import { PartnerProvider } from './context/PartnerContext';
import { ScrollToTop } from './components/common/ScrollToTop';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PartnerProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/club" element={<ClubPage />} />
          <Route path="/destinations/:slug" element={<DestinationPage />} />
          <Route path="/destination/:slug" element={<Navigate to="/destinations/:slug" replace />} />
          <Route path="/devenir-partenaire" element={<PartnerLandingPage />} />
          <Route path="/partner/dashboard" element={<PartnerDashboardPage />} />
          <Route path="/espace-partenaire" element={<Navigate to="/partner/dashboard" replace />} />
          <Route path="/p/:slug" element={<CustomPageView />} />
          <Route path="/page/:slug" element={<CustomPageView />} />
          <Route path="/a-propos" element={<CustomPageView fixedSlug="a-propos" />} />
          <Route path="/mentions-legales" element={<CustomPageView fixedSlug="mentions-legales" />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/admin/:tab" element={<AdminDashboardPage />} />
          <Route path="*" element={<DestinationPage />} />
        </Routes>
      </PartnerProvider>
    </BrowserRouter>
  );
};


export default App;


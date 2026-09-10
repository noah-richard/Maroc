import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar/Navbar';
import { Hero } from '../components/hero/Hero';
import { PopularDestinations } from '../components/destinations/PopularDestinations';
import { ServicesSection } from '../components/services/ServicesSection';
import { ExperienceSection } from '../components/experience/ExperienceSection';
import { Footer } from '../components/layout/Footer/Footer';
import { AuthModal } from '../components/common/AuthModal/AuthModal';
import type { Destination } from '../types/destination';
import type { ServiceOffering } from '../types/service';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleSelectDestination = (destination: Destination | string) => {
    if (typeof destination === 'string') {
      const slug = destination
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      navigate(`/destinations/${slug}`);
    } else if (destination && destination.slug) {
      navigate(`/destinations/${destination.slug}`);
    }
  };

  const handleSelectService = (_service: ServiceOffering) => {
    const searchEngine = document.getElementById('moteur-recherche');
    if (searchEngine) {
      searchEngine.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleStartAdventure = () => {
    const searchEngine = document.getElementById('moteur-recherche');
    if (searchEngine) {
      searchEngine.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="home-page">
      {/* 01. NAVIGATION HEADER */}
      <Navbar onOpenAuth={handleOpenAuth} />

      {/* 02. MAIN LANDING CONTENT */}
      <main id="main-content">
        {/* HERO WITH MER / MONTAGNE SPLIT & SEARCH ENGINE */}
        <Hero onSelectDestination={handleSelectDestination} />

        {/* POPULAR DESTINATIONS SECTION */}
        <PopularDestinations
          onSelectDestination={handleSelectDestination}
          onViewAll={() => {
            const el = document.getElementById('destinations');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* SERVICES SECTION */}
        <ServicesSection
          onSelectService={handleSelectService}
          onViewAll={() => {
            const el = document.getElementById('services');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* EXPERIENCE & REASSURANCE SECTION */}
        <ExperienceSection onStartAdventure={handleStartAdventure} />
      </main>

      {/* 03. FOOTER */}
      <Footer />

      {/* 04. AUTHENTICATION DIALOG MODAL */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  );
};

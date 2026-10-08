import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar/Navbar';
import { MoroccoHero } from '../components/hero/MoroccoHero';
import { ClubSection } from '../components/club/ClubSection';
import { PartnersSection } from '../components/partners/PartnersSection';
import { Footer } from '../components/layout/Footer/Footer';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectDestination = (slug: string) => {
    if (slug) {
      const cleanSlug = slug
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      navigate(`/destinations/${cleanSlug}`);
    }
  };

  return (
    <div className="home-page home-page--editorial">
      {/* 01. MINIMAL IMMERSIVE HEADER */}
      <Navbar variant="minimal" />

      {/* 02. MAIN EDITORIAL CONTENT */}
      <main id="main-content">
        {/* CINEMATIC HERO: OCÉAN VS ATLAS WITH DIAGONAL SPLIT */}
        <MoroccoHero onSelectDestination={handleSelectDestination} />

        {/* LE CLUB DÉCOUVRELEMAROC SECTION */}
        <ClubSection />

        {/* REFINED PARTNERS SECTION ON IVORY BACKGROUND */}
        <div id="partenaires">
          <PartnersSection />
        </div>
      </main>

      {/* 03. FOOTER */}
      <Footer />
    </div>
  );
};

export default HomePage;


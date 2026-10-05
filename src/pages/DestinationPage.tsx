import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDestinationBySlug } from '../data/cityDestinations.data';
import { Navbar } from '../components/layout/Navbar/Navbar';
import { DestinationHero } from '../components/destination/DestinationHero/DestinationHero';
import { GalleryModal } from '../components/destination/GalleryModal/GalleryModal';
import { DestinationServices } from '../components/destination/DestinationServices/DestinationServices';
import { AdvertisingZone } from '../components/destination/AdvertisingZone/AdvertisingZone';
import { BestOptionsSection } from '../components/destination/BestOptions/BestOptionsSection';
import { CityFeaturedSection } from '../components/destination/FeaturedSection/CityFeaturedSection';
import { CityTrustSection } from '../components/destination/TrustSection/CityTrustSection';
import { DestinationNotFound } from '../components/destination/States/DestinationNotFound';
import { Footer } from '../components/layout/Footer/Footer';
import { AuthModal } from '../components/common/AuthModal/AuthModal';

export const DestinationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const destination = slug ? getDestinationBySlug(slug) : undefined;

  // Modals state
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Dynamic document title and meta tag updates
  useEffect(() => {
    if (destination) {
      document.title = `${destination.name} — Guide de voyage & Bonnes adresses | DécouvreLeMaroc`;

      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute(
        'content',
        destination.seoDescription ||
          `Découvre ${destination.name} : hébergements, restaurants, incontournables et expériences uniques avec DecouvreLeMaroc.`
      );
    } else {
      document.title = 'Destination introuvable | DecouvreLeMaroc';
    }
  }, [destination]);

  // Auth Modal handlers
  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  // Scroll to services / categories
  const handleSelectCategory = (category: 'hotels' | 'restaurants' | 'sites' | 'cars' | 'apartments') => {
    setActiveCategory(category);
    const target = document.getElementById('best-options-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactClick = () => {
    const target = document.getElementById('destination-support-card');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Fallback 404 state if slug does not match any city
  if (!destination) {
    return (
      <div className="destination-page-not-found-layout">
        <Navbar onOpenAuth={handleOpenAuth} />
        <DestinationNotFound slug={slug} />
        <Footer />
        <AuthModal
          isOpen={authModalOpen}
          initialMode={authMode}
          onClose={() => setAuthModalOpen(false)}
        />
      </div>
    );
  }

  return (
    <div className="destination-page-wrapper">
      {/* 01. NAVIGATION HEADER */}
      <Navbar onOpenAuth={handleOpenAuth} />

      {/* 02. DESTINATION HERO WITH INTEGRATED BREADCRUMB & WEATHER CARD */}
      <DestinationHero
        destination={destination}
        onOpenGallery={() => {
          setGalleryIndex(0);
          setGalleryOpen(true);
        }}
      />

      {/* 04. LIGHTBOX GALLERY MODAL */}
      <GalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={destination.galleryImages || destination.gallery}
        currentIndex={galleryIndex}
        onSelectIndex={setGalleryIndex}
        cityName={destination.name}
      />

      {/* 05. DESTINATION SERVICES NAVIGATION BAR */}
      <DestinationServices
        services={destination.services}
        cityName={destination.name}
        onSelectCategory={handleSelectCategory}
        onContactClick={handleContactClick}
      />

      {/* 06. ADVERTISING ZONE: 5S ROTATING CAROUSEL & STATIC ADS */}
      <AdvertisingZone
        featuredAds={destination.featuredAds}
        staticAds={destination.staticAds}
        cityName={destination.name}
      />

      {/* 07. BEST OPTIONS SECTION WITH DYNAMIC TABS & ADVISOR CARD */}
      <BestOptionsSection
        recommendations={
          Array.isArray(destination.recommendations)
            ? destination.recommendations
            : Object.values(destination.recommendations).flat()
        }
        supportContact={destination.supportContact || destination.support}
        cityName={destination.name}
        selectedCategory={activeCategory}
      />

      {/* 08. FEATURED EXPERIENCES SECTION */}
      <CityFeaturedSection
        features={destination.featuredExperiences}
        cityName={destination.name}
      />

      {/* 09. TRUST & REASSURANCE PILLARS */}
      <CityTrustSection trustPoints={destination.trustPoints} />

      {/* 10. GLOBAL FOOTER */}
      <Footer />

      {/* 11. AUTH MODAL */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  );
};

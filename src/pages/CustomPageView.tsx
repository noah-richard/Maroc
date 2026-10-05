import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar/Navbar';
import { Footer } from '../components/layout/Footer/Footer';
import { INITIAL_PAGES } from '../admin/data/mockCmsData';
import type { CustomPage } from '../admin/types/admin';
import {
  Calendar,
  Eye,
  CheckCircle2,
  ArrowRight,
  MapPin,
  ChevronRight,
  Compass,
  Sparkles
} from 'lucide-react';

import './CustomPageView.css';

export const CustomPageView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Fetch page from localStorage or fallback
  const getPage = (): CustomPage | undefined => {
    try {
      const raw = localStorage.getItem('dlm_admin_pages_v2');
      const pages: CustomPage[] = raw ? JSON.parse(raw) : INITIAL_PAGES;
      return pages.find(p => p.slug === slug);
    } catch {
      return INITIAL_PAGES.find(p => p.slug === slug);
    }
  };

  const page = getPage();

  useEffect(() => {
    if (page) {
      document.title = `${page.title} — DécouvreLeMaroc`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', page.seoDescription || page.subtitle);
    } else {
      document.title = 'Page introuvable | DécouvreLeMaroc';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  if (!page) {
    return (
      <div className="custom-page-container">
        <Navbar variant="minimal" />
        <main className="custom-page-404">
          <div className="custom-page-404__box">
            <Compass size={48} className="text-primary mb-3" />
            <h1 className="font-serif text-3xl font-bold">Page Introuvable</h1>
            <p className="text-sm text-slate-400 mt-2 max-w-md">
              La page demandée n'existe pas ou a été déplacée.
            </p>
            <div className="flex gap-3 mt-6">
              <Link to="/" className="custom-page-cta-btn">
                Retour à l'accueil
              </Link>
            </div>

          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Split content by paragraphs
  const paragraphs = page.content.split('\n\n').filter(Boolean);

  return (
    <div className="custom-page-container">
      <Navbar variant="minimal" />

      <main className="custom-page-main">
        {/* Breadcrumb */}
        <div className="custom-page-breadcrumb-wrap">
          <div className="custom-page-breadcrumb">
            <Link to="/">Accueil</Link>
            <ChevronRight size={14} />
            <span>Guides & Articles</span>
            <ChevronRight size={14} />
            <span className="text-white">{page.title}</span>
          </div>
        </div>

        {/* Hero Header */}
        <header className="custom-page-hero">
          <div
            className="custom-page-hero__bg"
            style={{ backgroundImage: `url(${page.coverImage})` }}
          >
            <div className="custom-page-hero__overlay" />
          </div>

          <div className="custom-page-hero__content">
            <div className="custom-page-hero__badge-row">
              <span className="custom-page-hero__badge">
                <Sparkles size={13} className="text-amber-400" />
                <span>{page.category.toUpperCase()}</span>
              </span>
              <span className="custom-page-hero__date">
                <Calendar size={13} /> {page.updatedAt || page.createdAt}
              </span>
              <span className="custom-page-hero__views">
                <Eye size={13} /> {page.views.toLocaleString('fr-FR')} lectures
              </span>
            </div>

            <h1 className="custom-page-hero__title font-serif">
              {page.title}
            </h1>

            <p className="custom-page-hero__subtitle">
              {page.subtitle}
            </p>

            <div className="custom-page-hero__author">
              <span>Rédigé par</span>
              <strong>{page.author}</strong>
            </div>
          </div>
        </header>

        {/* Content Body Layout */}
        <div className="custom-page-body-container">
          <article className="custom-page-article">
            {/* Highlights Box */}
            {page.highlights && page.highlights.length > 0 && (
              <div className="custom-page-highlights">
                <h3 className="custom-page-highlights__title">
                  Ce qu'il faut retenir :
                </h3>
                <ul className="custom-page-highlights__list">
                  {page.highlights.map((h, i) => (
                    <li key={i} className="custom-page-highlights__item">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Paragraphs */}
            <div className="custom-page-paragraphs">
              {paragraphs.map((p, idx) => {
                if (p.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="custom-page-h3 font-serif">
                      {p.replace('### ', '')}
                    </h3>
                  );
                }
                return (
                  <p key={idx} className="custom-page-p">
                    {p}
                  </p>
                );
              })}
            </div>

            {/* Call to Action Box */}
            {page.ctaText && (
              <div className="custom-page-cta-box">
                <div>
                  <h4 className="font-serif text-xl font-bold text-white">
                    Envie de vivre cette expérience au Maroc ?
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Découvrez nos adresses de charme et privilèges exclusifs réservés aux membres du Club.
                  </p>
                </div>
                <Link
                  to={page.ctaLink || '/club'}
                  className="custom-page-cta-btn"
                >
                  <span>{page.ctaText}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </article>

          {/* Sidebar Widgets */}
          <aside className="custom-page-aside">
            <div className="custom-page-card-widget">
              <h4 className="custom-page-widget-title">Explorer le Maroc</h4>
              <p className="text-xs text-slate-400 mb-3">
                Sélectionnez une ville impériale ou côtière pour voir les riads et restaurants vérifiés :
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'Marrakech', slug: 'marrakech', region: 'Sud & Palmeraie' },
                  { name: 'Fès', slug: 'fes', region: 'Médina Millénaire' },
                  { name: 'Tanger', slug: 'tanger', region: 'Détroit & Mer' },
                  { name: 'Ouarzazate', slug: 'ouarzazate', region: 'Porte du Désert' },
                  { name: 'Casablanca', slug: 'casablanca', region: 'Métropole Océane' }
                ].map(city => (
                  <Link
                    key={city.slug}
                    to={`/destinations/${city.slug}`}
                    className="custom-page-city-link"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-primary" />
                      <span className="font-bold text-xs text-white">{city.name}</span>
                    </div>
                    <span className="text-[11px] text-slate-400">{city.region}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="custom-page-card-widget custom-page-card-widget--vip">
              <span className="text-[10px] font-bold uppercase text-amber-400 tracking-wider">
                Le Club DécouvreLeMaroc
              </span>
              <h4 className="font-serif text-base font-bold text-white mt-1">
                Jusqu'à -15% et attentions offertes
              </h4>
              <p className="text-xs text-slate-300 mt-1 mb-4">
                Rejoignez gratuitement notre cercle de voyageurs pour accéder aux tarifs préférentiels.
              </p>
              <Link to="/club" className="admin-btn-primary w-full text-center">
                Découvrir Le Club
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CustomPageView;

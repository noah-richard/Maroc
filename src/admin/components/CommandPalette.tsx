import React, { useState, useEffect, useRef } from 'react';
import { useAdmin } from '../context/AdminContext';
import type { AdminTab } from '../context/AdminContext';
import {
  Search,
  Users,
  Shield,
  MapPin,
  Briefcase,
  FileText,
  UserPlus,
  Download,
  Sun,
  Moon,
  ExternalLink,
  ArrowRight,
  X,
  Sliders,
  Compass,
  Megaphone
} from 'lucide-react';

import './CommandPalette.css';

export const CommandPalette: React.FC<{ onOpenInviteModal: () => void }> = ({ onOpenInviteModal }) => {
  const {
    isCommandPaletteOpen,
    setIsCommandPaletteOpen,
    setActiveTab,
    admins,
    setCurrentAdminId,
    theme,
    toggleTheme,
    exportAdminsCSV,
    exportAuditCSV
  } = useAdmin();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
      if (e.key === 'Escape' && isCommandPaletteOpen) {
        setIsCommandPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, setIsCommandPaletteOpen]);

  useEffect(() => {
    if (isCommandPaletteOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
    }
  }, [isCommandPaletteOpen]);

  if (!isCommandPaletteOpen) return null;

  const navigateToTab = (tab: AdminTab) => {
    setActiveTab(tab);
    setIsCommandPaletteOpen(false);
  };

  // Filtered lists
  const filteredAdmins = admins.filter(
    a =>
      a.name.toLowerCase().includes(query.toLowerCase()) ||
      a.email.toLowerCase().includes(query.toLowerCase()) ||
      a.department.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="command-palette-backdrop" onClick={() => setIsCommandPaletteOpen(false)}>
      <div className="command-palette-modal" onClick={e => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="command-palette__search">
          <Search size={18} className="command-palette__search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="command-palette__input"
            placeholder="Rechercher une action, un administrateur, une ville..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button
            type="button"
            className="command-palette__close"
            onClick={() => setIsCommandPaletteOpen(false)}
            aria-label="Fermer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results Body */}
        <div className="command-palette__body">
          {/* Quick Actions Group */}
          <div className="command-palette__group">
            <span className="command-palette__group-title">Gestion de Contenu (CMS)</span>
            <button
              type="button"
              className="command-palette__item"
              onClick={() => navigateToTab('destinations')}
            >
              <div className="command-palette__item-icon command-palette__item-icon--primary">
                <MapPin size={16} />
              </div>
              <span className="command-palette__item-label">Villes & Destinations (Créer ou modifier une ville)</span>
            </button>

            <button
              type="button"
              className="command-palette__item"
              onClick={() => navigateToTab('pages')}
            >
              <div className="command-palette__item-icon">
                <FileText size={16} />
              </div>
              <span className="command-palette__item-label">Pages du Site & Articles (Créer une nouvelle page)</span>
            </button>

            <button
              type="button"
              className="command-palette__item"
              onClick={() => navigateToTab('platform')}
            >
              <div className="command-palette__item-icon">
                <Sliders size={16} />
              </div>
              <span className="command-palette__item-label">Modifier les Textes de la Plateforme (Hero, Slogans, Alertes)</span>
            </button>

            <button
              type="button"
              className="command-palette__item"
              onClick={() => navigateToTab('recommendations')}
            >
              <div className="command-palette__item-icon command-palette__item-icon--amber">
                <Compass size={16} />
              </div>
              <span className="command-palette__item-label">Bonnes Adresses (Riads, Restaurants, Excursions)</span>
            </button>

            <button
              type="button"
              className="command-palette__item"
              onClick={() => navigateToTab('ads')}
            >
              <div className="command-palette__item-icon">
                <Megaphone size={16} />
              </div>
              <span className="command-palette__item-label">Bannières Pub & Campagnes Sponsorisées</span>
            </button>
          </div>

          <div className="command-palette__group">
            <span className="command-palette__group-title">Administration & Système</span>
            <button
              type="button"
              className="command-palette__item"
              onClick={() => navigateToTab('overview')}
            >
              <div className="command-palette__item-icon">
                <FileText size={16} />
              </div>
              <span className="command-palette__item-label">Tableau de bord (Vue d'ensemble)</span>
              <span className="command-palette__item-hint">Alt+1</span>
            </button>

            <button
              type="button"
              className="command-palette__item"
              onClick={() => navigateToTab('admins')}
            >
              <div className="command-palette__item-icon command-palette__item-icon--terracotta">
                <Users size={16} />
              </div>
              <span className="command-palette__item-label">Gestion des Administrateurs & Rôles</span>
              <span className="command-palette__item-badge">{admins.length}</span>
            </button>

            <button
              type="button"
              className="command-palette__item"
              onClick={() => navigateToTab('partners')}
            >
              <div className="command-palette__item-icon command-palette__item-icon--amber">
                <Briefcase size={16} />
              </div>
              <span className="command-palette__item-label">Partenaires & Riads en attente</span>
            </button>

            <button
              type="button"
              className="command-palette__item"
              onClick={() => navigateToTab('security')}
            >
              <div className="command-palette__item-icon command-palette__item-icon--emerald">
                <Shield size={16} />
              </div>
              <span className="command-palette__item-label">Sécurité, 2FA & Sessions Actives</span>
            </button>
          </div>


          {/* Direct Actions */}
          <div className="command-palette__group">
            <span className="command-palette__group-title">Actions Rapides</span>
            <button
              type="button"
              className="command-palette__item"
              onClick={() => {
                setIsCommandPaletteOpen(false);
                onOpenInviteModal();
              }}
            >
              <div className="command-palette__item-icon command-palette__item-icon--primary">
                <UserPlus size={16} />
              </div>
              <span className="command-palette__item-label">Inviter un nouvel administrateur</span>
            </button>

            <button
              type="button"
              className="command-palette__item"
              onClick={() => {
                exportAdminsCSV();
                setIsCommandPaletteOpen(false);
              }}
            >
              <div className="command-palette__item-icon">
                <Download size={16} />
              </div>
              <span className="command-palette__item-label">Exporter l'annuaire admin (CSV)</span>
            </button>

            <button
              type="button"
              className="command-palette__item"
              onClick={() => {
                exportAuditCSV();
                setIsCommandPaletteOpen(false);
              }}
            >
              <div className="command-palette__item-icon">
                <Download size={16} />
              </div>
              <span className="command-palette__item-label">Exporter le journal d'audit (CSV)</span>
            </button>

            <button
              type="button"
              className="command-palette__item"
              onClick={() => {
                toggleTheme();
                setIsCommandPaletteOpen(false);
              }}
            >
              <div className="command-palette__item-icon">
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </div>
              <span className="command-palette__item-label">
                Passer en mode {theme === 'dark' ? 'clair' : 'sombre'}
              </span>
            </button>

            <a
              href="/"
              className="command-palette__item"
              onClick={() => setIsCommandPaletteOpen(false)}
            >
              <div className="command-palette__item-icon">
                <ExternalLink size={16} />
              </div>
              <span className="command-palette__item-label">Retourner au site public DécouvreLeMaroc</span>
              <ArrowRight size={14} className="command-palette__item-arrow" />
            </a>
          </div>

          {/* Admins Search Match */}
          {query.trim().length > 0 && (
            <div className="command-palette__group">
              <span className="command-palette__group-title">
                Administrateurs correspondants ({filteredAdmins.length})
              </span>
              {filteredAdmins.length === 0 ? (
                <div className="command-palette__empty">Aucun administrateur trouvé pour "{query}"</div>
              ) : (
                filteredAdmins.map(admin => (
                  <button
                    key={admin.id}
                    type="button"
                    className="command-palette__item"
                    onClick={() => {
                      setCurrentAdminId(admin.id);
                      setActiveTab('admins');
                      setIsCommandPaletteOpen(false);
                    }}
                  >
                    <img src={admin.avatar} alt={admin.name} className="command-palette__admin-avatar" />
                    <div className="command-palette__admin-info">
                      <span className="command-palette__admin-name">{admin.name}</span>
                      <span className="command-palette__admin-email">{admin.email} — {admin.department}</span>
                    </div>
                    <span className="command-palette__admin-badge">{admin.role.replace('_', ' ')}</span>
                  </button>
                ))
              )}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="command-palette__footer">
          <span><kbd className="command-kbd">↑</kbd> <kbd className="command-kbd">↓</kbd> pour naviguer</span>
          <span><kbd className="command-kbd">Entrée</kbd> pour valider</span>
          <span><kbd className="command-kbd">Échap</kbd> pour fermer</span>
        </div>
      </div>
    </div>
  );
};

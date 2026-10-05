import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { ROLE_LABELS } from '../data/mockAdminData';
import {
  Menu,
  Search,
  Bell,
  Sun,
  Moon,
  UserPlus,
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Sparkles
} from 'lucide-react';
import './AdminHeader.css';

interface AdminHeaderProps {
  onOpenInviteModal: () => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ onOpenInviteModal }) => {
  const {
    activeTab,
    setIsMobileSidebarOpen,
    setIsCommandPaletteOpen,
    theme,
    toggleTheme,
    currentAdmin,
    auditLogs,
    partners,
    admins,
    setCurrentAdminId
  } = useAdmin();

  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const getBreadcrumbTitle = () => {
    switch (activeTab) {
      case 'overview':
        return 'Vue d\'ensemble & Analyses';
      case 'admins':
        return 'Gestion des Administrateurs & Rôles';
      case 'destinations':
        return 'Destinations & Contenus Touristiques';
      case 'partners':
        return 'Validation des Partenaires & Établissements';
      case 'bookings':
        return 'Réservations & Membres Club VIP';
      case 'audit':
        return 'Journal d\'Audit & Traçabilité Sécurité';
      case 'security':
        return 'Sécurité, 2FA & Sessions Actives';
      case 'settings':
        return 'Paramètres Globaux du Système';
      default:
        return 'Administration';
    }
  };

  const pendingPartnersCount = partners.filter(p => p.status === 'pending').length;
  const recentAlerts = auditLogs.slice(0, 4);

  return (
    <header className="admin-header">
      {/* Left: Mobile Menu + Breadcrumbs */}
      <div className="admin-header__left">
        <button
          type="button"
          className="admin-header__mobile-menu-btn"
          onClick={() => setIsMobileSidebarOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <Menu size={20} />
        </button>

        <div className="admin-header__breadcrumbs">
          <span className="admin-header__crumb-root">Portail DLM</span>
          <span className="admin-header__crumb-sep">/</span>
          <span className="admin-header__crumb-current">{getBreadcrumbTitle()}</span>
        </div>
      </div>

      {/* Right: Actions, Search, Notifications, Profile */}
      <div className="admin-header__right">
        {/* Command Search Trigger */}
        <button
          type="button"
          className="admin-header__search-btn"
          onClick={() => setIsCommandPaletteOpen(true)}
        >
          <Search size={15} />
          <span className="admin-header__search-text">Rechercher...</span>
          <kbd className="admin-header__search-kbd">Ctrl K</kbd>
        </button>

        {/* Quick Invite Button */}
        <button
          type="button"
          className="admin-header__invite-btn"
          onClick={onOpenInviteModal}
        >
          <UserPlus size={15} />
          <span className="hidden-mobile">Nouvel Admin</span>
        </button>

        {/* Theme Toggle */}
        <button
          type="button"
          className="admin-header__icon-btn"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Activer mode clair' : 'Activer mode sombre'}
          title={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Notifications Popover */}
        <div className="admin-header__notif-wrapper">
          <button
            type="button"
            className="admin-header__icon-btn"
            onClick={() => {
              setIsNotifOpen(prev => !prev);
              setIsUserMenuOpen(false);
            }}
            aria-label="Notifications"
          >
            <Bell size={18} />
            {pendingPartnersCount > 0 && (
              <span className="admin-header__notif-badge">{pendingPartnersCount}</span>
            )}
          </button>

          {isNotifOpen && (
            <div className="admin-header__dropdown admin-header__dropdown--notif">
              <div className="admin-header__dropdown-header">
                <div className="flex items-center gap-2">
                  <Bell size={15} className="text-amber-500" />
                  <span className="font-semibold text-sm">Centre de Notifications</span>
                </div>
                <span className="text-xs text-slate-400">Temps réel</span>
              </div>

              <div className="admin-header__notif-list">
                {pendingPartnersCount > 0 && (
                  <div className="admin-header__notif-item admin-header__notif-item--highlight">
                    <AlertTriangle size={16} className="text-amber-500 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold">
                        {pendingPartnersCount} demande{pendingPartnersCount > 1 ? 's' : ''} partenaire en attente
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Vérification requise pour les riads et agences d'excursions.
                      </div>
                    </div>
                  </div>
                )}

                {recentAlerts.map(log => (
                  <div key={log.id} className="admin-header__notif-item">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold">{log.action}</div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock size={10} /> {log.timestamp} par {log.adminName}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Current Admin Profile Menu */}
        <div className="admin-header__user-wrapper">
          <button
            type="button"
            className="admin-header__user-btn"
            onClick={() => {
              setIsUserMenuOpen(prev => !prev);
              setIsNotifOpen(false);
            }}
          >
            <img
              src={currentAdmin.avatar}
              alt={currentAdmin.name}
              className="admin-header__user-avatar"
            />
            <div className="admin-header__user-info hidden-mobile">
              <span className="admin-header__user-name">{currentAdmin.name}</span>
              <span className="admin-header__user-dept">{currentAdmin.department}</span>
            </div>
            <ChevronDown size={14} className="text-slate-400" />
          </button>

          {isUserMenuOpen && (
            <div className="admin-header__dropdown admin-header__dropdown--user">
              <div className="admin-header__user-card">
                <img
                  src={currentAdmin.avatar}
                  alt={currentAdmin.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-sm">{currentAdmin.name}</div>
                  <div className="text-xs text-slate-400">{currentAdmin.email}</div>
                  <div
                    className="inline-block mt-1 text-[11px] font-semibold px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${ROLE_LABELS[currentAdmin.role].badgeColor}22`,
                      color: ROLE_LABELS[currentAdmin.role].badgeColor
                    }}
                  >
                    {ROLE_LABELS[currentAdmin.role].label}
                  </div>
                </div>
              </div>

              <div className="admin-header__user-section-title">
                <Sparkles size={12} className="text-amber-500" />
                <span>Changer de Persona (Démo)</span>
              </div>

              <div className="admin-header__persona-list">
                {admins.map(a => (
                  <button
                    key={a.id}
                    type="button"
                    className={`admin-header__persona-option ${a.id === currentAdmin.id ? 'admin-header__persona-option--active' : ''}`}
                    onClick={() => {
                      setCurrentAdminId(a.id);
                      setIsUserMenuOpen(false);
                    }}
                  >
                    <img src={a.avatar} alt={a.name} className="w-6 h-6 rounded-full object-cover" />
                    <div className="text-left flex-1 min-w-0">
                      <div className="text-xs font-semibold truncate">{a.name}</div>
                      <div className="text-[10px] text-slate-400">{ROLE_LABELS[a.role].label}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

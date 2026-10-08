import React from 'react';
import { useAdmin } from '../context/AdminContext';
import type { AdminTab } from '../context/AdminContext';
import { ROLE_LABELS } from '../data/mockAdminData';
import {
  LayoutDashboard,
  Users,
  MapPin,
  Briefcase,
  CalendarCheck,
  FileText,
  ShieldCheck,
  Settings,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Lock,
  Sliders,
  Compass,
  Megaphone,
  History,
  X
} from 'lucide-react';
import './AdminSidebar.css';

interface NavItem {
  tab: AdminTab;
  label: string;
  icon: React.ReactNode;
  badge?: string | number;
  badgeColor?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export const AdminSidebar: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    isSidebarCollapsed,
    setIsSidebarCollapsed,
    isMobileSidebarOpen,
    setIsMobileSidebarOpen,
    admins,
    partners,
    destinations,
    pages,
    recommendations,
    adBanners,
    currentAdmin,
    setCurrentAdminId
  } = useAdmin();

  const pendingPartnersCount = partners.filter(p => p.status === 'pending').length;
  const currentRoleInfo = ROLE_LABELS[currentAdmin.role];

  const sections: NavSection[] = [
    {
      title: 'Édition & Contenu (CMS)',
      items: [
        {
          tab: 'destinations',
          label: 'Villes & Destinations',
          icon: <MapPin size={18} />,
          badge: destinations.length,
          badgeColor: '#C8503D'
        },
        {
          tab: 'pages',
          label: 'Pages du Site',
          icon: <FileText size={18} />,
          badge: pages.length
        },
        {
          tab: 'platform',
          label: 'Contenu Plateforme',
          icon: <Sliders size={18} />
        },
        {
          tab: 'recommendations',
          label: 'Bonnes Adresses',
          icon: <Compass size={18} />,
          badge: recommendations.length
        },
        {
          tab: 'ads',
          label: 'Bannières & Publicités',
          icon: <Megaphone size={18} />,
          badge: adBanners.length
        }
      ]
    },
    {
      title: 'Opérations & Club',
      items: [
        {
          tab: 'overview',
          label: 'Vue d\'ensemble',
          icon: <LayoutDashboard size={18} />
        },
        {
          tab: 'partners',
          label: 'Partenaires & Riads',
          icon: <Briefcase size={18} />,
          badge: pendingPartnersCount > 0 ? `${pendingPartnersCount} att.` : undefined,
          badgeColor: '#D97706'
        },
        {
          tab: 'bookings',
          label: 'Réservations & VIP',
          icon: <CalendarCheck size={18} />
        }
      ]
    },
    {
      title: 'Administration Système',
      items: [
        {
          tab: 'admins',
          label: 'Équipe & Accès Admins',
          icon: <Users size={18} />,
          badge: admins.length,
          badgeColor: '#64748B'
        },
        {
          tab: 'audit',
          label: 'Journal d\'Audit',
          icon: <History size={18} />
        },
        {
          tab: 'security',
          label: 'Sécurité & 2FA',
          icon: <ShieldCheck size={18} />
        },
        {
          tab: 'settings',
          label: 'Paramètres',
          icon: <Settings size={18} />
        }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileSidebarOpen && (
        <div
          className="admin-sidebar-mobile-backdrop"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      <aside
        className={`admin-sidebar ${isSidebarCollapsed ? 'admin-sidebar--collapsed' : ''} ${
          isMobileSidebarOpen ? 'admin-sidebar--mobile-open' : ''
        }`}
      >
        {/* Brand Area */}
        <div className="admin-sidebar__brand">
          <div className="admin-sidebar__logo-wrap">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="admin-sidebar__svg">
              <path d="M18 3L3 31H33L18 3Z" fill="#C8503D" />
              <path d="M18 11L9 31H27L18 11Z" fill="#FAFAF8" />
              <path d="M18 18C15.8 18 14 21 14 25.5C14 29 15.8 31 18 31C20.2 31 22 29 22 25.5C22 21 20.2 18 18 18Z" fill="#0F2937" />
              <path d="M18 5L28.5 31H33L18 3L3 31H7.5L18 5Z" fill="#D4A373" />
            </svg>
            {!isSidebarCollapsed && (
              <div className="admin-sidebar__brand-text">
                <span className="admin-sidebar__brand-title">DécouvreLeMaroc</span>
                <span className="admin-sidebar__brand-badge">ADMIN & CMS PORTAL</span>
              </div>
            )}
          </div>

          <button
            type="button"
            className="admin-sidebar__collapse-toggle"
            onClick={() => setIsSidebarCollapsed(prev => !prev)}
            aria-label={isSidebarCollapsed ? 'Déplier le menu' : 'Replier le menu'}
          >
            {isSidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>

          <button
            type="button"
            className="admin-sidebar__mobile-close-btn"
            onClick={() => setIsMobileSidebarOpen(false)}
            aria-label="Fermer le menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Current Admin Compact Badge */}
        {!isSidebarCollapsed && (
          <div className="admin-sidebar__admin-card">
            <div className="admin-sidebar__avatar-wrap">
              <img src={currentAdmin.avatar} alt={currentAdmin.name} className="admin-sidebar__avatar" />
              <span className="admin-sidebar__online-ping" />
            </div>
            <div className="admin-sidebar__admin-details">
              <div className="admin-sidebar__admin-name">{currentAdmin.name}</div>
              <div
                className="admin-sidebar__admin-role"
                style={{ color: currentRoleInfo.badgeColor }}
              >
                <Lock size={11} /> {currentRoleInfo.label}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Items with Categorized Sections */}
        <nav className="admin-sidebar__nav" aria-label="Menu d'administration">
          {sections.map((section, sIdx) => (
            <div key={sIdx} className="mb-2">
              {!isSidebarCollapsed && (
                <div className="admin-sidebar__section-title">
                  {section.title}
                </div>
              )}
              <ul className="admin-sidebar__nav-list">
                {section.items.map(item => {
                  const isActive = activeTab === item.tab;
                  return (
                    <li key={item.tab}>
                      <button
                        type="button"
                        className={`admin-sidebar__nav-link ${isActive ? 'admin-sidebar__nav-link--active' : ''}`}
                        onClick={() => {
                          setActiveTab(item.tab);
                          setIsMobileSidebarOpen(false);
                        }}
                        title={isSidebarCollapsed ? item.label : undefined}
                      >
                        <span className="admin-sidebar__nav-icon">{item.icon}</span>
                        {!isSidebarCollapsed && (
                          <span className="admin-sidebar__nav-text">{item.label}</span>
                        )}
                        {!isSidebarCollapsed && item.badge !== undefined && (
                          <span
                            className="admin-sidebar__nav-badge"
                            style={{
                              backgroundColor: item.badgeColor ? `${item.badgeColor}25` : undefined,
                              color: item.badgeColor || undefined
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>


        {/* Bottom Section */}
        <div className="admin-sidebar__footer">
          {/* Persona Demo Switcher */}
          {!isSidebarCollapsed && (
            <div className="admin-sidebar__persona-box">
              <div className="admin-sidebar__persona-label">
                <Sparkles size={13} className="text-amber-400" />
                <span>Simuler un Rôle Admin</span>
              </div>
              <select
                className="admin-sidebar__persona-select"
                value={currentAdmin.id}
                onChange={e => setCurrentAdminId(e.target.value)}
              >
                {admins.map(a => (
                  <option key={a.id} value={a.id}>
                    {a.name} ({ROLE_LABELS[a.role].label})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Return to Public Website */}
          <a
            href="/"
            className="admin-sidebar__public-link"
            title="Revenir sur le site public DécouvreLeMaroc"
          >
            <ExternalLink size={16} />
            {!isSidebarCollapsed && <span>Retour au site public</span>}
          </a>
        </div>
      </aside>
    </>
  );
};

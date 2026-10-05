import React from 'react';
import { useAdmin } from '../context/AdminContext';
import { StatCard } from '../components/StatCard';
import { ROLE_LABELS } from '../data/mockAdminData';
import {
  DollarSign,
  Users,
  Compass,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  UserPlus,
  Sparkles,
  CalendarCheck
} from 'lucide-react';
import './AdminOverviewPage.css';

interface AdminOverviewPageProps {
  onOpenInviteModal: () => void;
}

export const AdminOverviewPage: React.FC<AdminOverviewPageProps> = ({ onOpenInviteModal }) => {
  const {
    stats,
    partners,
    destinations,
    admins,
    auditLogs,
    setActiveTab
  } = useAdmin();

  const pendingPartners = partners.filter(p => p.status === 'pending');
  const onlineAdmins = admins.filter(a => a.isOnline);
  const recentLogs = auditLogs.slice(0, 5);

  return (
    <div className="admin-overview-page">
      {/* Top Welcome Banner */}
      <div className="admin-welcome-banner">
        <div className="admin-welcome-banner__content">
          <div className="admin-welcome-banner__badge">
            <Sparkles size={14} className="text-amber-400" />
            <span>Tourisme & Hospitalité du Maroc — Supervision</span>
          </div>
          <h1 className="admin-welcome-banner__title">
            Tableau de Bord Administratif & Performances
          </h1>
          <p className="admin-welcome-banner__desc">
            Surveillez en direct l'activité de la plateforme DécouvreLeMaroc, les équipes administratives, la conformité 2FA et la validation des partenaires d'exception.
          </p>
        </div>

        <div className="admin-welcome-banner__actions">
          <button
            type="button"
            className="admin-btn-primary"
            onClick={onOpenInviteModal}
          >
            <UserPlus size={16} />
            <span>Inviter un Admin</span>
          </button>
          <button
            type="button"
            className="admin-btn-secondary"
            onClick={() => setActiveTab('admins')}
          >
            <Users size={16} />
            <span>Gérer l'équipe ({admins.length})</span>
          </button>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="admin-stats-grid">
        <StatCard
          title="Revenus & Commissions DLM"
          value={`${stats.totalRevenueMAD.toLocaleString('fr-FR')} MAD`}
          delta={stats.revenueGrowth}
          icon={<DollarSign size={20} />}
          accentColor="#C8503D"
          badge="MAD"
        />

        <StatCard
          title="Visiteurs Actifs & Touristes"
          value={stats.uniqueVisitors.toLocaleString('fr-FR')}
          delta={stats.visitorsGrowth}
          icon={<Compass size={20} />}
          accentColor="#06B6D4"
        />

        <StatCard
          title="Réservations d'Expériences"
          value={stats.monthlyBookings.toLocaleString('fr-FR')}
          delta={stats.bookingsGrowth}
          icon={<CalendarCheck size={20} />}
          accentColor="#10B981"
        />

        <StatCard
          title="Admins & Sécurité 2FA"
          value={`${stats.activeAdminsCount}/${stats.totalAdminsCount} Actifs`}
          delta={stats.twoFactorRate}
          deltaLabel="taux de 2FA actif"
          icon={<ShieldCheck size={20} />}
          accentColor="#8B5CF6"
          badge={`${stats.twoFactorRate}% 2FA`}
        />
      </div>

      {/* Action Center & Alerts Bar */}
      {pendingPartners.length > 0 && (
        <div className="admin-action-alert-box">
          <div className="admin-action-alert-box__lead">
            <div className="admin-action-alert-icon">
              <AlertTriangle size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-amber-950">
                {pendingPartners.length} demande{pendingPartners.length > 1 ? 's' : ''} de partenariat en attente d'approbation
              </h4>
              <p className="text-xs text-amber-900/80">
                Riads de prestige et guides certifiés attendent leur accréditation pour être référencés.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="admin-alert-cta-btn"
            onClick={() => setActiveTab('partners')}
          >
            <span>Examiner les dossiers</span>
            <ArrowRight size={14} />
          </button>
        </div>
      )}

      {/* Charts & Analytics Two-Column Section */}
      <div className="admin-analytics-grid">
        {/* Left: Top Destinations Traffic Bar Chart */}
        <div className="admin-card">
          <div className="admin-card__header">
            <div>
              <h3 className="admin-card__title">Trafic par Destination Marocaine</h3>
              <p className="admin-card__subtitle">Consultations et popularité ce mois</p>
            </div>
            <button
              type="button"
              className="admin-card__action-link"
              onClick={() => setActiveTab('destinations')}
            >
              Voir tout ({destinations.length})
            </button>
          </div>

          <div className="admin-destinations-chart-list">
            {destinations.slice(0, 6).map(dest => {
              const maxViews = 50000;
              const percent = Math.min(100, Math.round((dest.viewsThisMonth / maxViews) * 100));

              return (
                <div key={dest.id} className="admin-dest-chart-row">
                  <div className="admin-dest-chart-info">
                    <span className="admin-dest-chart-name">{dest.name}</span>
                    <span className="admin-dest-chart-rating">★ {dest.rating}</span>
                  </div>
                  <div className="admin-dest-chart-bar-bg">
                    <div
                      className="admin-dest-chart-bar-fill"
                      style={{
                        width: `${percent}%`,
                        background:
                          dest.region === 'inland'
                            ? 'linear-gradient(90deg, #C8503D, #D4A373)'
                            : 'linear-gradient(90deg, #0284C7, #38BDF8)'
                      }}
                    />
                  </div>
                  <span className="admin-dest-chart-views">
                    {dest.viewsThisMonth.toLocaleString('fr-FR')} vues
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Revenue & Bookings Trend */}
        <div className="admin-card">
          <div className="admin-card__header">
            <div>
              <h3 className="admin-card__title">Croissance des Réservations & Revenus</h3>
              <p className="admin-card__subtitle">Volume mensuel en K-MAD</p>
            </div>
            <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              +18.4% ce mois
            </span>
          </div>

          {/* Elegant SVG Area Chart */}
          <div className="admin-chart-svg-wrap">
            <svg viewBox="0 0 500 180" className="admin-chart-svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C8503D" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#C8503D" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              <line x1="0" y1="40" x2="500" y2="40" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="0" y1="90" x2="500" y2="90" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="0" y1="140" x2="500" y2="140" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

              {/* Area path */}
              <path
                d="M0,150 C80,140 140,110 200,95 C260,80 320,65 380,45 C440,30 480,20 500,15 L500,180 L0,180 Z"
                fill="url(#revenueGradient)"
              />
              {/* Curve Stroke */}
              <path
                d="M0,150 C80,140 140,110 200,95 C260,80 320,65 380,45 C440,30 480,20 500,15"
                fill="none"
                stroke="#C8503D"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Data points */}
              <circle cx="200" cy="95" r="5" fill="#D4A373" stroke="#0B111A" strokeWidth="2" />
              <circle cx="380" cy="45" r="5" fill="#D4A373" stroke="#0B111A" strokeWidth="2" />
              <circle cx="500" cy="15" r="6" fill="#C8503D" stroke="#FAFAF8" strokeWidth="2" />
            </svg>

            {/* Months labels */}
            <div className="admin-chart-labels">
              <span>Mai</span>
              <span>Juin</span>
              <span>Juil</span>
              <span>Août</span>
              <span>Sept</span>
              <span>Oct (Courant)</span>
            </div>
          </div>

          <div className="admin-revenue-metrics">
            <div className="admin-metric-pill">
              <span className="text-xs text-slate-400">Panier Moyen</span>
              <span className="text-sm font-bold">14 250 MAD</span>
            </div>
            <div className="admin-metric-pill">
              <span className="text-xs text-slate-400">Commissions Établissements</span>
              <span className="text-sm font-bold text-amber-400">12.5% moy.</span>
            </div>
            <div className="admin-metric-pill">
              <span className="text-xs text-slate-400">Taux de Rétention VIP</span>
              <span className="text-sm font-bold text-emerald-400">89.2%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Two Columns: Team Admins Quick Oversight & Recent Audit Trail */}
      <div className="admin-analytics-grid">
        {/* Left: Active Admins Oversight */}
        <div className="admin-card">
          <div className="admin-card__header">
            <div>
              <h3 className="admin-card__title">Équipe d'Administration DLM</h3>
              <p className="admin-card__subtitle">{onlineAdmins.length} administrateurs connectés</p>
            </div>
            <button
              type="button"
              className="admin-card__action-link"
              onClick={() => setActiveTab('admins')}
            >
              Gérer ({admins.length})
            </button>
          </div>

          <div className="admin-team-mini-list">
            {admins.slice(0, 5).map(admin => {
              const roleInfo = ROLE_LABELS[admin.role];
              return (
                <div key={admin.id} className="admin-team-mini-item">
                  <div className="relative">
                    <img src={admin.avatar} alt={admin.name} className="w-10 h-10 rounded-xl object-cover" />
                    <span
                      className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white shadow-sm ${
                        admin.isOnline ? 'bg-emerald-500' : 'bg-slate-400'
                      }`}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-xs truncate text-slate-800">{admin.name}</div>
                    <div className="text-[11px] text-slate-500">{admin.department}</div>
                  </div>

                  <span
                    className="text-[11px] font-semibold px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${roleInfo.badgeColor}18`,
                      color: roleInfo.badgeColor
                    }}
                  >
                    {roleInfo.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Recent Audit Logs Stream */}
        <div className="admin-card">
          <div className="admin-card__header">
            <div>
              <h3 className="admin-card__title">Journal de Sécurité & Audit Récent</h3>
              <p className="admin-card__subtitle">Traçabilité des opérations sensibles</p>
            </div>
            <button
              type="button"
              className="admin-card__action-link"
              onClick={() => setActiveTab('audit')}
            >
              Historique complet
            </button>
          </div>

          <div className="admin-audit-mini-list">
            {recentLogs.map(log => (
              <div key={log.id} className="admin-audit-mini-item">
                <div
                  className={`admin-audit-mini-dot ${
                    log.severity === 'critical'
                      ? 'bg-red-500'
                      : log.severity === 'warning'
                      ? 'bg-amber-500'
                      : 'bg-emerald-500'
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-slate-800">{log.action}</div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                    <span>{log.adminName}</span>
                    <span>•</span>
                    <span>{log.timestamp}</span>
                    <span>•</span>
                    <code className="bg-slate-100 px-1 py-0.5 rounded text-[10px] text-slate-600">{log.ip}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

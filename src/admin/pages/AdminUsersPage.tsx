import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import type { AdminUser, AdminRole } from '../types/admin';
import { ROLE_LABELS } from '../data/mockAdminData';
import {
  Users,
  UserPlus,
  Search,
  Download,
  ShieldCheck,
  ShieldAlert,
  MoreVertical,
  Edit,
  KeyRound,
  RefreshCw,
  UserX,
  UserCheck,
  Trash2,
  LayoutGrid,
  List,
  Eye,
  Clock
} from 'lucide-react';
import { EditAdminModal } from '../components/EditAdminModal';
import { PermissionsModal } from '../components/PermissionsModal';
import { AdminDetailsDrawer } from '../components/AdminDetailsDrawer';
import './AdminUsersPage.css';

interface AdminUsersPageProps {
  onOpenInviteModal: () => void;
}

export const AdminUsersPage: React.FC<AdminUsersPageProps> = ({ onOpenInviteModal }) => {
  const {
    admins,
    currentAdmin,
    deleteAdmin,
    toggleAdminStatus,
    reset2FA,
    exportAdminsCSV,
    stats,
    setActiveTab
  } = useAdmin();

  // Filters & View State
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [twoFactorFilter, setTwoFactorFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  // Modals & Drawer State
  const [selectedAdminForEdit, setSelectedAdminForEdit] = useState<AdminUser | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedAdminForPerms, setSelectedAdminForPerms] = useState<AdminUser | null>(null);
  const [isPermsModalOpen, setIsPermsModalOpen] = useState(false);
  const [selectedAdminForDrawer, setSelectedAdminForDrawer] = useState<AdminUser | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Active Dropdown Action
  const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);

  // Filter logic
  const filteredAdmins = admins.filter(admin => {
    const matchesSearch =
      admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole = roleFilter === 'all' || admin.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || admin.status === statusFilter;
    const matches2FA =
      twoFactorFilter === 'all' ||
      (twoFactorFilter === 'enabled' && admin.twoFactorEnabled) ||
      (twoFactorFilter === 'disabled' && !admin.twoFactorEnabled);

    return matchesSearch && matchesRole && matchesStatus && matches2FA;
  });

  const onlineAdminsCount = admins.filter(a => a.isOnline).length;
  const superAdminsCount = admins.filter(a => a.role === 'super_admin').length;

  return (
    <div className="admin-users-page">
      {/* Page Header */}
      <div className="admin-page-header">
        <div className="admin-page-header__left">
          <div className="flex items-center gap-3">
            <div className="admin-page-icon">
              <Users size={22} />
            </div>
            <div>
              <h1 className="admin-page-title">Gestion des Administrateurs</h1>
              <p className="admin-page-subtitle">
                Annuaire des comptes privilégiés, matrice des rôles et contrôle de sécurité 2FA.
              </p>
            </div>
          </div>
        </div>

        <div className="admin-page-header__actions">
          <button
            type="button"
            className="admin-btn-secondary"
            onClick={exportAdminsCSV}
            title="Exporter l'annuaire au format CSV"
          >
            <Download size={15} />
            <span>Exporter CSV</span>
          </button>

          <button
            type="button"
            className="admin-btn-primary"
            onClick={onOpenInviteModal}
          >
            <UserPlus size={16} />
            <span>Inviter un Administrateur</span>
          </button>
        </div>
      </div>

      {/* KPI Stats Summary Ribbon */}
      <div className="admin-users-kpi-ribbon">
        <div className="admin-kpi-item">
          <span className="admin-kpi-label">Total Administrateurs</span>
          <div className="admin-kpi-value">{admins.length}</div>
          <span className="admin-kpi-sub">{onlineAdminsCount} actuellement en ligne</span>
        </div>

        <div className="admin-kpi-item">
          <span className="admin-kpi-label">Super Administrateurs</span>
          <div className="admin-kpi-value text-terracotta">{superAdminsCount}</div>
          <span className="admin-kpi-sub">Accès système complet</span>
        </div>

        <div className="admin-kpi-item">
          <span className="admin-kpi-label">Conformité 2FA</span>
          <div className="admin-kpi-value text-emerald">{stats.twoFactorRate}%</div>
          <span className="admin-kpi-sub">
            {admins.filter(a => a.twoFactorEnabled).length}/{admins.length} protégés par 2FA
          </span>
        </div>

        <div className="admin-kpi-item">
          <span className="admin-kpi-label">Journal d'Audit Récent</span>
          <div className="admin-kpi-action-link" onClick={() => setActiveTab('audit')}>
            <span>Consulter les logs</span>
            <Clock size={14} />
          </div>
          <span className="admin-kpi-sub">Traçabilité complète des actions</span>
        </div>
      </div>

      {/* Search & Filters Bar */}
      <div className="admin-filter-bar">
        <div className="admin-filter-search">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            className="admin-filter-input"
            placeholder="Rechercher par nom, email, département ou ville..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="text-xs text-slate-400 hover:text-white"
              onClick={() => setSearchQuery('')}
            >
              Effacer
            </button>
          )}
        </div>

        <div className="admin-filter-selectors">
          {/* Role Filter */}
          <select
            className="admin-select"
            value={roleFilter}
            onChange={e => setRoleFilter(e.target.value)}
          >
            <option value="all">Tous les rôles ({admins.length})</option>
            {(Object.keys(ROLE_LABELS) as AdminRole[]).map(r => (
              <option key={r} value={r}>
                {ROLE_LABELS[r].label}
              </option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            className="admin-select"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
          >
            <option value="all">Tous les statuts</option>
            <option value="active">Actif</option>
            <option value="suspended">Suspendu</option>
            <option value="pending">Invitation en attente</option>
          </select>

          {/* 2FA Filter */}
          <select
            className="admin-select"
            value={twoFactorFilter}
            onChange={e => setTwoFactorFilter(e.target.value)}
          >
            <option value="all">Sécurité 2FA (Tous)</option>
            <option value="enabled">2FA Activé (Sécurisé)</option>
            <option value="disabled">2FA Manquant (Alerte)</option>
          </select>

          {/* View Mode Toggle */}
          <div className="admin-view-toggle">
            <button
              type="button"
              className={`admin-view-toggle-btn ${viewMode === 'table' ? 'admin-view-toggle-btn--active' : ''}`}
              onClick={() => setViewMode('table')}
              title="Affichage en tableau"
            >
              <List size={16} />
            </button>
            <button
              type="button"
              className={`admin-view-toggle-btn ${viewMode === 'cards' ? 'admin-view-toggle-btn--active' : ''}`}
              onClick={() => setViewMode('cards')}
              title="Affichage en cartes"
            >
              <LayoutGrid size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content: Table or Cards */}
      {filteredAdmins.length === 0 ? (
        <div className="admin-empty-state">
          <Users size={48} className="text-slate-600 mb-3" />
          <h3 className="text-base font-bold text-slate-300">Aucun administrateur trouvé</h3>
          <p className="text-xs text-slate-500 max-w-sm mb-4">
            Modifiez vos critères de recherche ou réinitialisez les filtres pour afficher les comptes.
          </p>
          <button
            type="button"
            className="admin-btn-secondary"
            onClick={() => {
              setSearchQuery('');
              setRoleFilter('all');
              setStatusFilter('all');
              setTwoFactorFilter('all');
            }}
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : viewMode === 'table' ? (
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Administrateur</th>
                <th>Rôle Attribué</th>
                <th>Département & Ville</th>
                <th>Permissions</th>
                <th>Protection 2FA</th>
                <th>Statut</th>
                <th>Dernière Activité</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAdmins.map(admin => {
                const roleInfo = ROLE_LABELS[admin.role];
                const isCurrent = admin.id === currentAdmin.id;
                const isDropdownOpen = activeDropdownId === admin.id;

                return (
                  <tr key={admin.id} className={isCurrent ? 'admin-tr--current' : ''}>
                    {/* User profile */}
                    <td>
                      <div className="admin-user-cell">
                        <div className="admin-avatar-wrap">
                          <img src={admin.avatar} alt={admin.name} className="admin-avatar-img" />
                          <span
                            className={`admin-avatar-online ${
                              admin.isOnline ? 'admin-avatar-online--active' : ''
                            }`}
                          />
                        </div>
                        <div className="admin-user-meta">
                          <div className="admin-user-name">
                            {admin.name}
                            {isCurrent && <span className="admin-current-badge">Vous</span>}
                          </div>
                          <div className="admin-user-email">{admin.email}</div>
                        </div>
                      </div>
                    </td>

                    {/* Role */}
                    <td>
                      <span
                        className="admin-role-badge"
                        style={{
                          backgroundColor: `${roleInfo.badgeColor}18`,
                          color: roleInfo.badgeColor,
                          borderColor: `${roleInfo.badgeColor}33`
                        }}
                      >
                        {roleInfo.label}
                      </span>
                    </td>

                    {/* Department & Location */}
                    <td>
                      <div className="text-xs font-semibold">{admin.department}</div>
                      <div className="text-[11px] text-slate-400">{admin.location}</div>
                    </td>

                    {/* Permissions summary */}
                    <td>
                      <button
                        type="button"
                        className="admin-perms-pill-btn"
                        onClick={() => {
                          setSelectedAdminForPerms(admin);
                          setIsPermsModalOpen(true);
                        }}
                        title="Consulter et modifier la matrice de permissions"
                      >
                        <KeyRound size={12} />
                        <span>{admin.permissions.length} actives</span>
                      </button>
                    </td>

                    {/* 2FA */}
                    <td>
                      {admin.twoFactorEnabled ? (
                        <div className="admin-2fa-badge admin-2fa-badge--enabled">
                          <ShieldCheck size={14} />
                          <span>2FA Activé ({admin.twoFactorMethod ? admin.twoFactorMethod.toUpperCase() : 'APP'})</span>
                        </div>
                      ) : (
                        <div className="admin-2fa-badge admin-2fa-badge--disabled">
                          <ShieldAlert size={14} />
                          <span>2FA Manquant</span>
                        </div>
                      )}
                    </td>

                    {/* Status */}
                    <td>
                      <span className={`admin-status-pill admin-status-pill--${admin.status}`}>
                        {admin.status === 'active'
                          ? 'Actif'
                          : admin.status === 'suspended'
                          ? 'Suspendu'
                          : 'Invitation'}
                      </span>
                    </td>

                    {/* Last login & IP */}
                    <td>
                      <div className="text-xs text-slate-700 font-medium">{admin.lastLogin}</div>
                      <code className="text-[11px] text-slate-500">{admin.lastIp}</code>
                    </td>

                    {/* Actions */}
                    <td className="text-right">
                      <div className="admin-actions-cell">
                        <button
                          type="button"
                          className="admin-action-icon-btn"
                          onClick={() => {
                            setSelectedAdminForDrawer(admin);
                            setIsDrawerOpen(true);
                          }}
                          title="Voir le profil complet"
                        >
                          <Eye size={16} />
                        </button>

                        <button
                          type="button"
                          className="admin-action-icon-btn"
                          onClick={() => {
                            setSelectedAdminForEdit(admin);
                            setIsEditModalOpen(true);
                          }}
                          title="Modifier le compte"
                        >
                          <Edit size={16} />
                        </button>

                        {/* More Menu Dropdown */}
                        <div className="relative inline-block text-left">
                          <button
                            type="button"
                            className="admin-action-icon-btn"
                            onClick={() =>
                              setActiveDropdownId(isDropdownOpen ? null : admin.id)
                            }
                            aria-label="Options supplémentaires"
                          >
                            <MoreVertical size={16} />
                          </button>

                          {isDropdownOpen && (
                            <div
                              className="admin-row-dropdown"
                              onClick={e => e.stopPropagation()}
                            >
                              <button
                                type="button"
                                className="admin-row-dropdown-item"
                                onClick={() => {
                                  setActiveDropdownId(null);
                                  setSelectedAdminForPerms(admin);
                                  setIsPermsModalOpen(true);
                                }}
                              >
                                <KeyRound size={14} />
                                <span>Gérer les permissions</span>
                              </button>

                              <button
                                type="button"
                                className="admin-row-dropdown-item"
                                onClick={() => {
                                  setActiveDropdownId(null);
                                  reset2FA(admin.id);
                                }}
                              >
                                <RefreshCw size={14} />
                                <span>Réinitialiser la clé 2FA</span>
                              </button>

                              {!isCurrent && (
                                <button
                                  type="button"
                                  className="admin-row-dropdown-item text-amber-500"
                                  onClick={() => {
                                    setActiveDropdownId(null);
                                    toggleAdminStatus(admin.id);
                                  }}
                                >
                                  {admin.status === 'active' ? (
                                    <>
                                      <UserX size={14} />
                                      <span>Suspendre l'administrateur</span>
                                    </>
                                  ) : (
                                    <>
                                      <UserCheck size={14} />
                                      <span>Réactiver l'administrateur</span>
                                    </>
                                  )}
                                </button>
                              )}

                              {!isCurrent && (
                                <button
                                  type="button"
                                  className="admin-row-dropdown-item text-red-500"
                                  onClick={() => {
                                    setActiveDropdownId(null);
                                    if (
                                      window.confirm(
                                        `Supprimer définitivement le compte administrateur de ${admin.name} ?`
                                      )
                                    ) {
                                      deleteAdmin(admin.id);
                                    }
                                  }}
                                >
                                  <Trash2 size={14} />
                                  <span>Supprimer le compte</span>
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        /* Cards Grid View */
        <div className="admin-cards-grid">
          {filteredAdmins.map(admin => {
            const roleInfo = ROLE_LABELS[admin.role];
            const isCurrent = admin.id === currentAdmin.id;

            return (
              <div
                key={admin.id}
                className={`admin-user-card ${isCurrent ? 'admin-user-card--current' : ''}`}
              >
                <div className="admin-user-card__header">
                  <div className="admin-avatar-wrap">
                    <img src={admin.avatar} alt={admin.name} className="admin-avatar-img" />
                    <span
                      className={`admin-avatar-online ${
                        admin.isOnline ? 'admin-avatar-online--active' : ''
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="admin-user-card__name">
                      {admin.name}
                      {isCurrent && <span className="admin-current-badge">Vous</span>}
                    </div>
                    <div className="admin-user-card__email">{admin.email}</div>
                  </div>
                  <span className={`admin-status-pill admin-status-pill--${admin.status}`}>
                    {admin.status === 'active' ? 'Actif' : 'Suspendu'}
                  </span>
                </div>

                <div className="admin-user-card__body">
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className="admin-role-badge"
                      style={{
                        backgroundColor: `${roleInfo.badgeColor}18`,
                        color: roleInfo.badgeColor,
                        borderColor: `${roleInfo.badgeColor}33`
                      }}
                    >
                      {roleInfo.label}
                    </span>
                    <span className="text-[11px] text-slate-400">{admin.location}</span>
                  </div>

                  <div className="text-xs text-slate-700 font-medium mb-3">
                    {admin.department}
                  </div>

                  <div className="admin-user-card__security">
                    {admin.twoFactorEnabled ? (
                      <span className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                        <ShieldCheck size={14} /> 2FA Protégé
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs text-amber-700 font-medium">
                        <ShieldAlert size={14} /> 2FA Manquant
                      </span>
                    )}
                    <span className="text-xs text-slate-500">{admin.lastLogin}</span>
                  </div>
                </div>

                <div className="admin-user-card__footer">
                  <button
                    type="button"
                    className="admin-user-card__btn"
                    onClick={() => {
                      setSelectedAdminForDrawer(admin);
                      setIsDrawerOpen(true);
                    }}
                  >
                    <Eye size={14} />
                    <span>Détails</span>
                  </button>

                  <button
                    type="button"
                    className="admin-user-card__btn"
                    onClick={() => {
                      setSelectedAdminForPerms(admin);
                      setIsPermsModalOpen(true);
                    }}
                  >
                    <KeyRound size={14} />
                    <span>Permissions</span>
                  </button>

                  <button
                    type="button"
                    className="admin-user-card__btn"
                    onClick={() => {
                      setSelectedAdminForEdit(admin);
                      setIsEditModalOpen(true);
                    }}
                  >
                    <Edit size={14} />
                    <span>Modifier</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Edit Admin Modal */}
      <EditAdminModal
        admin={selectedAdminForEdit}
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedAdminForEdit(null);
        }}
      />

      {/* Permissions Matrix Modal */}
      <PermissionsModal
        admin={selectedAdminForPerms}
        isOpen={isPermsModalOpen}
        onClose={() => {
          setIsPermsModalOpen(false);
          setSelectedAdminForPerms(null);
        }}
      />

      {/* Admin Details Drawer */}
      <AdminDetailsDrawer
        admin={selectedAdminForDrawer}
        isOpen={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
          setSelectedAdminForDrawer(null);
        }}
        onEdit={adm => {
          setIsDrawerOpen(false);
          setSelectedAdminForEdit(adm);
          setIsEditModalOpen(true);
        }}
        onManagePermissions={adm => {
          setIsDrawerOpen(false);
          setSelectedAdminForPerms(adm);
          setIsPermsModalOpen(true);
        }}
      />
    </div>
  );
};

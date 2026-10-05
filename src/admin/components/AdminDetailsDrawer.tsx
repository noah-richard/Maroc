import React from 'react';
import { useAdmin } from '../context/AdminContext';
import type { AdminUser } from '../types/admin';
import { ROLE_LABELS, PERMISSION_DESCRIPTIONS } from '../data/mockAdminData';
import {
  X,
  ShieldCheck,
  ShieldAlert,
  MapPin,
  Mail,
  Phone,
  Clock,
  Laptop,
  KeyRound,
  UserX,
  UserCheck,
  RefreshCw,
  Edit,
  Trash2,
  Calendar
} from 'lucide-react';
import './AdminDetailsDrawer.css';

interface AdminDetailsDrawerProps {
  admin: AdminUser | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (admin: AdminUser) => void;
  onManagePermissions: (admin: AdminUser) => void;
}

export const AdminDetailsDrawer: React.FC<AdminDetailsDrawerProps> = ({
  admin,
  isOpen,
  onClose,
  onEdit,
  onManagePermissions
}) => {
  const {
    currentAdmin,
    toggleAdminStatus,
    reset2FA,
    deleteAdmin,
    auditLogs
  } = useAdmin();

  if (!isOpen || !admin) return null;

  const roleInfo = ROLE_LABELS[admin.role];
  const adminLogs = auditLogs.filter(l => l.adminId === admin.id).slice(0, 5);

  return (
    <div className="admin-drawer-backdrop" onClick={onClose}>
      <div className="admin-drawer" onClick={e => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="admin-drawer__header">
          <div className="admin-drawer__profile-summary">
            <div className="admin-drawer__avatar-wrapper">
              <img src={admin.avatar} alt={admin.name} className="admin-drawer__avatar" />
              <span className={`admin-drawer__status-dot ${admin.isOnline ? 'admin-drawer__status-dot--online' : ''}`} />
            </div>
            <div>
              <h3 className="admin-drawer__name">{admin.name}</h3>
              <p className="admin-drawer__email">{admin.email}</p>
              <div className="admin-drawer__tags">
                <span
                  className="admin-drawer__role-badge"
                  style={{ backgroundColor: `${roleInfo.badgeColor}22`, color: roleInfo.badgeColor }}
                >
                  {roleInfo.label}
                </span>
                <span className={`admin-drawer__state-pill admin-drawer__state-pill--${admin.status}`}>
                  {admin.status === 'active' ? 'Compte Actif' : admin.status === 'suspended' ? 'Suspendu' : 'En attente'}
                </span>
              </div>
            </div>
          </div>
          <button type="button" className="admin-drawer__close" onClick={onClose} aria-label="Fermer">
            <X size={20} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="admin-drawer__content">
          {/* Action Quickbar */}
          <div className="admin-drawer__quick-actions">
            <button
              type="button"
              className="admin-drawer__btn-action"
              onClick={() => onEdit(admin)}
            >
              <Edit size={15} />
              <span>Modifier</span>
            </button>

            <button
              type="button"
              className="admin-drawer__btn-action"
              onClick={() => onManagePermissions(admin)}
            >
              <KeyRound size={15} />
              <span>Permissions</span>
            </button>

            <button
              type="button"
              className="admin-drawer__btn-action"
              onClick={() => reset2FA(admin.id)}
            >
              <RefreshCw size={15} />
              <span>Reset 2FA</span>
            </button>

            {admin.id !== currentAdmin.id && (
              <button
                type="button"
                className={`admin-drawer__btn-action ${admin.status === 'active' ? 'admin-drawer__btn-action--warning' : 'admin-drawer__btn-action--success'}`}
                onClick={() => toggleAdminStatus(admin.id)}
              >
                {admin.status === 'active' ? <UserX size={15} /> : <UserCheck size={15} />}
                <span>{admin.status === 'active' ? 'Suspendre' : 'Réactiver'}</span>
              </button>
            )}
          </div>

          {/* Section: Profile Info */}
          <div className="admin-drawer__section">
            <h4 className="admin-drawer__section-title">Informations Générales</h4>
            <div className="admin-drawer__info-list">
              <div className="admin-drawer__info-item">
                <span className="admin-drawer__info-label">
                  <MapPin size={15} /> Ville & Bureau
                </span>
                <span className="admin-drawer__info-value">{admin.location}</span>
              </div>

              <div className="admin-drawer__info-item">
                <span className="admin-drawer__info-label">
                  <Mail size={15} /> Département
                </span>
                <span className="admin-drawer__info-value">{admin.department}</span>
              </div>

              <div className="admin-drawer__info-item">
                <span className="admin-drawer__info-label">
                  <Phone size={15} /> Téléphone
                </span>
                <span className="admin-drawer__info-value">{admin.phone || 'Non renseigné'}</span>
              </div>

              <div className="admin-drawer__info-item">
                <span className="admin-drawer__info-label">
                  <Calendar size={15} /> Membre depuis
                </span>
                <span className="admin-drawer__info-value">{admin.createdAt}</span>
              </div>
            </div>
          </div>

          {/* Section: Security Details */}
          <div className="admin-drawer__section">
            <h4 className="admin-drawer__section-title">Sécurité & Connexions</h4>
            <div className="admin-drawer__security-card">
              <div className="admin-drawer__security-row">
                <div className="admin-drawer__security-lead">
                  {admin.twoFactorEnabled ? (
                    <ShieldCheck size={20} className="text-emerald-500" />
                  ) : (
                    <ShieldAlert size={20} className="text-amber-500" />
                  )}
                  <div>
                    <div className="font-semibold">
                      Double Authentification (2FA): {admin.twoFactorEnabled ? 'Activée' : 'Non activée'}
                    </div>
                    <div className="text-xs text-slate-400">
                      Méthode: {admin.twoFactorMethod ? admin.twoFactorMethod.toUpperCase() : 'Aucune'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="admin-drawer__info-list mt-3">
                <div className="admin-drawer__info-item">
                  <span className="admin-drawer__info-label">
                    <Clock size={15} /> Dernière connexion
                  </span>
                  <span className="admin-drawer__info-value">{admin.lastLogin}</span>
                </div>

                <div className="admin-drawer__info-item">
                  <span className="admin-drawer__info-label">
                    <Laptop size={15} /> Dernière adresse IP
                  </span>
                  <code className="admin-drawer__info-code">{admin.lastIp}</code>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Permissions Summary */}
          <div className="admin-drawer__section">
            <div className="flex justify-between items-center mb-2">
              <h4 className="admin-drawer__section-title">Permissions ({admin.permissions.length})</h4>
              <button
                type="button"
                className="text-xs text-primary font-medium hover:underline"
                onClick={() => onManagePermissions(admin)}
              >
                Gérer
              </button>
            </div>
            <div className="admin-drawer__perms-tags">
              {admin.permissions.slice(0, 8).map(perm => (
                <span key={perm} className="admin-drawer__perm-tag" title={PERMISSION_DESCRIPTIONS[perm]?.label}>
                  {PERMISSION_DESCRIPTIONS[perm]?.label || perm}
                </span>
              ))}
              {admin.permissions.length > 8 && (
                <span className="admin-drawer__perm-tag admin-drawer__perm-tag--more">
                  +{admin.permissions.length - 8} autres
                </span>
              )}
            </div>
          </div>

          {/* Section: Recent Activity by Admin */}
          <div className="admin-drawer__section">
            <h4 className="admin-drawer__section-title">Dernières Actions Récentes</h4>
            {adminLogs.length === 0 ? (
              <div className="text-sm text-slate-500 py-3">Aucune action enregistrée pour cet administrateur.</div>
            ) : (
              <div className="admin-drawer__activity-stream">
                {adminLogs.map(log => (
                  <div key={log.id} className="admin-drawer__activity-item">
                    <div className="admin-drawer__activity-dot" />
                    <div className="admin-drawer__activity-info">
                      <div className="admin-drawer__activity-action">{log.action}</div>
                      <div className="admin-drawer__activity-meta">
                        <span>{log.timestamp}</span> • <code>{log.ip}</code>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Danger Zone */}
          {admin.id !== currentAdmin.id && (
            <div className="admin-drawer__danger-zone">
              <h4 className="admin-drawer__danger-title">Zone de Danger</h4>
              <p className="admin-drawer__danger-desc">
                La suppression révoque immédiatement tous les accès à l'administration de DécouvreLeMaroc.
              </p>
              <button
                type="button"
                className="admin-drawer__btn-danger"
                onClick={() => {
                  if (window.confirm(`Confirmez-vous la suppression définitive du compte de ${admin.name} ?`)) {
                    deleteAdmin(admin.id);
                    onClose();
                  }
                }}
              >
                <Trash2 size={15} />
                <span>Supprimer définitivement l'administrateur</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
import type { AdminUser, AdminPermission } from '../types/admin';
import { PERMISSION_DESCRIPTIONS, ROLE_DEFAULT_PERMISSIONS } from '../data/mockAdminData';
import { X, KeyRound, ShieldAlert } from 'lucide-react';
import './InviteAdminModal.css';

interface PermissionsModalProps {
  admin: AdminUser | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PermissionsModal: React.FC<PermissionsModalProps> = ({ admin, isOpen, onClose }) => {
  const { updatePermissions } = useAdmin();
  const [permissions, setPermissions] = useState<AdminPermission[]>([]);

  useEffect(() => {
    if (admin) {
      setPermissions(admin.permissions || []);
    }
  }, [admin]);

  if (!isOpen || !admin) return null;

  const togglePermission = (perm: AdminPermission) => {
    setPermissions(prev =>
      prev.includes(perm) ? prev.filter(p => p !== perm) : [...prev, perm]
    );
  };

  const resetToDefault = () => {
    setPermissions(ROLE_DEFAULT_PERMISSIONS[admin.role]);
  };

  const handleSave = () => {
    updatePermissions(admin.id, permissions);
    onClose();
  };

  // Group permissions by category
  const categories = Array.from(
    new Set(Object.values(PERMISSION_DESCRIPTIONS).map(d => d.category))
  );

  return (
    <div className="admin-modal-backdrop" onClick={onClose}>
      <div className="admin-modal" onClick={e => e.stopPropagation()}>
        <div className="admin-modal__header">
          <div className="admin-modal__title-box">
            <div className="admin-modal__icon">
              <KeyRound size={22} />
            </div>
            <div>
              <h3 className="admin-modal__title">Matrice des Permissions</h3>
              <p className="admin-modal__subtitle">
                Autorisations granulaires pour <strong>{admin.name}</strong> ({admin.role})
              </p>
            </div>
          </div>
          <button type="button" className="admin-modal__close" onClick={onClose} aria-label="Fermer">
            <X size={18} />
          </button>
        </div>

        <div className="admin-modal__form">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
              {permissions.length} sur {Object.keys(PERMISSION_DESCRIPTIONS).length} permissions accordées
            </span>
            <button
              type="button"
              className="admin-btn-link"
              onClick={resetToDefault}
            >
              Rétablir les permissions standard du rôle
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {categories.map(cat => {
              const permsInCat = (Object.keys(PERMISSION_DESCRIPTIONS) as AdminPermission[]).filter(
                p => PERMISSION_DESCRIPTIONS[p].category === cat
              );

              return (
                <div key={cat} style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '10px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#D4A373', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {cat}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px' }}>
                    {permsInCat.map(perm => {
                      const isChecked = permissions.includes(perm);
                      const desc = PERMISSION_DESCRIPTIONS[perm];

                      return (
                        <label
                          key={perm}
                          className="admin-perm-item"
                          style={{
                            background: isChecked ? 'rgba(200, 80, 61, 0.08)' : 'transparent',
                            borderRadius: '6px'
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => togglePermission(perm)}
                            className="admin-perm-checkbox"
                          />
                          <div className="admin-perm-text">
                            <span className="admin-perm-name" style={{ color: isChecked ? '#FFF' : '#94A3B8' }}>
                              {desc.label}
                            </span>
                            <code style={{ fontSize: '0.65rem', color: '#64748B' }}>{perm}</code>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {admin.role === 'super_admin' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '8px', fontSize: '0.8rem', color: '#F59E0B' }}>
              <ShieldAlert size={18} style={{ flexShrink: 0 }} />
              <span>
                Attention: En tant que Super Admin, ce compte dispose par nature de tous les privilèges système.
              </span>
            </div>
          )}

          <div className="admin-modal__footer">
            <button type="button" className="admin-btn-secondary" onClick={onClose}>
              Annuler
            </button>
            <button type="button" className="admin-btn-primary" onClick={handleSave}>
              Appliquer les permissions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

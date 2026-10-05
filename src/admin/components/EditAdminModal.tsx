import React, { useState, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
import type { AdminUser, AdminRole } from '../types/admin';
import { ROLE_LABELS } from '../data/mockAdminData';
import { X, UserCheck } from 'lucide-react';
import './InviteAdminModal.css';

interface EditAdminModalProps {
  admin: AdminUser | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EditAdminModal: React.FC<EditAdminModalProps> = ({ admin, isOpen, onClose }) => {
  const { updateAdmin, changeRole } = useAdmin();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<AdminRole>('content_manager');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'active' | 'suspended' | 'pending'>('active');

  useEffect(() => {
    if (admin) {
      setName(admin.name);
      setEmail(admin.email);
      setRole(admin.role);
      setDepartment(admin.department);
      setLocation(admin.location);
      setPhone(admin.phone || '');
      setStatus(admin.status);
    }
  }, [admin]);

  if (!isOpen || !admin) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role !== admin.role) {
      changeRole(admin.id, role);
    }
    updateAdmin(admin.id, {
      name,
      email,
      department,
      location,
      phone,
      status
    });
    onClose();
  };

  return (
    <div className="admin-modal-backdrop" onClick={onClose}>
      <div className="admin-modal" onClick={e => e.stopPropagation()}>
        <div className="admin-modal__header">
          <div className="admin-modal__title-box">
            <div className="admin-modal__icon">
              <UserCheck size={22} />
            </div>
            <div>
              <h3 className="admin-modal__title">Modifier l'Administrateur</h3>
              <p className="admin-modal__subtitle">Mise à jour du profil de {admin.name}</p>
            </div>
          </div>
          <button type="button" className="admin-modal__close" onClick={onClose} aria-label="Fermer">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="admin-modal__form">
          <div className="admin-form-grid">
            <div className="admin-form-group">
              <label className="admin-form-label">Nom complet</label>
              <input
                type="text"
                className="admin-form-input"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Email professionnel</label>
              <input
                type="email"
                className="admin-form-input"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="admin-form-grid">
            <div className="admin-form-group">
              <label className="admin-form-label">Rôle</label>
              <select
                className="admin-form-select"
                value={role}
                onChange={e => setRole(e.target.value as AdminRole)}
              >
                {(Object.keys(ROLE_LABELS) as AdminRole[]).map(r => (
                  <option key={r} value={r}>
                    {ROLE_LABELS[r].label}
                  </option>
                ))}
              </select>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Statut du compte</label>
              <select
                className="admin-form-select"
                value={status}
                onChange={e => setStatus(e.target.value as 'active' | 'suspended' | 'pending')}
              >
                <option value="active">Actif (Accès autorisé)</option>
                <option value="suspended">Suspendu (Accès bloqué)</option>
                <option value="pending">Invitation en attente</option>
              </select>
            </div>
          </div>

          <div className="admin-form-grid">
            <div className="admin-form-group">
              <label className="admin-form-label">Département</label>
              <input
                type="text"
                className="admin-form-input"
                value={department}
                onChange={e => setDepartment(e.target.value)}
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Ville de rattachement</label>
              <input
                type="text"
                className="admin-form-input"
                value={location}
                onChange={e => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label">Téléphone de contact</label>
            <input
              type="text"
              className="admin-form-input"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          <div className="admin-modal__footer">
            <button type="button" className="admin-btn-secondary" onClick={onClose}>
              Annuler
            </button>
            <button type="submit" className="admin-btn-primary">
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

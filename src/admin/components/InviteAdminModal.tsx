import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import type { AdminRole, AdminPermission } from '../types/admin';
import {
  ROLE_LABELS,
  ROLE_DEFAULT_PERMISSIONS,
  PERMISSION_DESCRIPTIONS
} from '../data/mockAdminData';
import { X, ShieldCheck, Key, Copy, Check, Sparkles } from 'lucide-react';
import './InviteAdminModal.css';

interface InviteAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InviteAdminModal: React.FC<InviteAdminModalProps> = ({ isOpen, onClose }) => {
  const { addAdmin } = useAdmin();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<AdminRole>('content_manager');
  const [department, setDepartment] = useState('Pôle Culture & Patrimoine');
  const [location, setLocation] = useState('Casablanca, Maroc');
  const [phone, setPhone] = useState('+212 6');
  const [selectedPermissions, setSelectedPermissions] = useState<AdminPermission[]>(
    ROLE_DEFAULT_PERMISSIONS['content_manager']
  );
  const [twoFactorEnforced, setTwoFactorEnforced] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('MarocSecure-2025!@#');
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleRoleChange = (newRole: AdminRole) => {
    setRole(newRole);
    setSelectedPermissions(ROLE_DEFAULT_PERMISSIONS[newRole]);
    if (newRole === 'super_admin') {
      setDepartment('Direction Générale');
    } else if (newRole === 'partner_manager') {
      setDepartment('Hospitalité & Riads');
    } else if (newRole === 'moderator') {
      setDepartment('Expérience Club & Support');
    } else if (newRole === 'security_officer') {
      setDepartment('Sécurité & Infrastructure IT');
    }
  };

  const togglePermission = (perm: AdminPermission) => {
    setSelectedPermissions(prev =>
      prev.includes(perm) ? prev.filter(p => p !== perm) : [...prev, perm]
    );
  };

  const generateNewPassword = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%&*';
    let pass = 'Morocco_';
    for (let i = 0; i < 10; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedPassword(pass);
    setIsCopied(false);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(generatedPassword);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Veuillez renseigner le nom complet et l\'adresse email.');
      return;
    }
    if (!email.includes('@')) {
      setError('Veuillez renseigner une adresse email valide.');
      return;
    }

    addAdmin({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      role,
      department,
      location,
      phone,
      permissions: selectedPermissions,
      twoFactorEnforced
    });

    onClose();
  };

  return (
    <div className="admin-modal-backdrop" onClick={onClose}>
      <div className="admin-modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="admin-modal__header">
          <div className="admin-modal__title-box">
            <div className="admin-modal__icon">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h3 className="admin-modal__title">Inviter un Nouvel Administrateur</h3>
              <p className="admin-modal__subtitle">
                Configurez le profil, les permissions d'accès et la politique de sécurité.
              </p>
            </div>
          </div>
          <button type="button" className="admin-modal__close" onClick={onClose} aria-label="Fermer">
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="admin-modal__form">
          {error && <div className="admin-modal__error">{error}</div>}

          {/* Row 1: Name & Email */}
          <div className="admin-form-grid">
            <div className="admin-form-group">
              <label className="admin-form-label">Nom complet *</label>
              <input
                type="text"
                className="admin-form-input"
                placeholder="ex. Reda Benkirane"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                  setError('');
                }}
                required
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Email professionnel *</label>
              <input
                type="email"
                className="admin-form-input"
                placeholder="ex. reda.b@decouvrelemaroc.com"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  setError('');
                }}
                required
              />
            </div>
          </div>

          {/* Row 2: Department & Location */}
          <div className="admin-form-grid">
            <div className="admin-form-group">
              <label className="admin-form-label">Département / Équipe</label>
              <input
                type="text"
                className="admin-form-input"
                value={department}
                onChange={e => setDepartment(e.target.value)}
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Ville de rattachement</label>
              <select
                className="admin-form-select"
                value={location}
                onChange={e => setLocation(e.target.value)}
              >
                <option value="Casablanca, Maroc">Casablanca (Siège DLM)</option>
                <option value="Rabat, Maroc">Rabat (Pôle Institutionnel)</option>
                <option value="Marrakech, Maroc">Marrakech (Bureau Régional Sud)</option>
                <option value="Tanger, Maroc">Tanger (Bureau Régional Nord)</option>
                <option value="Fès, Maroc">Fès (Patrimoine & Médinas)</option>
                <option value="Télétravail">Télétravail / Nomad</option>
              </select>
            </div>
          </div>

          {/* Row 2.5: Phone */}
          <div className="admin-form-group">
            <label className="admin-form-label">Téléphone professionnel (Optionnel)</label>
            <input
              type="text"
              className="admin-form-input"
              placeholder="+212 6 00 00 00 00"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          {/* Role Selection with visual cards */}
          <div className="admin-form-group">
            <label className="admin-form-label">Rôle administratif attribué</label>
            <div className="admin-role-selector-grid">
              {(Object.keys(ROLE_LABELS) as AdminRole[]).map(r => {
                const isSelected = role === r;
                const info = ROLE_LABELS[r];
                return (
                  <div
                    key={r}
                    className={`admin-role-card ${isSelected ? 'admin-role-card--selected' : ''}`}
                    onClick={() => handleRoleChange(r)}
                  >
                    <div className="admin-role-card__header">
                      <span
                        className="admin-role-card__dot"
                        style={{ backgroundColor: info.badgeColor }}
                      />
                      <span className="admin-role-card__title">{info.label}</span>
                    </div>
                    <p className="admin-role-card__desc">{info.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Granular Permissions Section */}
          <div className="admin-form-group">
            <div className="admin-form-group__header">
              <label className="admin-form-label">
                Permissions détaillées ({selectedPermissions.length} actives)
              </label>
              <button
                type="button"
                className="admin-btn-link"
                onClick={() => setSelectedPermissions(ROLE_DEFAULT_PERMISSIONS[role])}
              >
                Réinitialiser selon le rôle
              </button>
            </div>

            <div className="admin-perms-matrix">
              {(Object.keys(PERMISSION_DESCRIPTIONS) as AdminPermission[]).map(perm => {
                const isChecked = selectedPermissions.includes(perm);
                const desc = PERMISSION_DESCRIPTIONS[perm];
                return (
                  <label key={perm} className="admin-perm-item">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => togglePermission(perm)}
                      className="admin-perm-checkbox"
                    />
                    <div className="admin-perm-text">
                      <span className="admin-perm-name">{desc.label}</span>
                      <span className="admin-perm-cat">{desc.category}</span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Security & Password Generator */}
          <div className="admin-security-box">
            <div className="admin-security-box__header">
              <Key size={18} className="admin-security-icon" />
              <div>
                <h4 className="admin-security-title">Identifiants Provisoires & Sécurité</h4>
                <p className="admin-security-subtitle">
                  Ce mot de passe temporaire devra être modifié à la première connexion.
                </p>
              </div>
            </div>

            <div className="admin-password-bar">
              <code className="admin-password-code">{generatedPassword}</code>
              <div className="admin-password-actions">
                <button
                  type="button"
                  className="admin-btn-subtle"
                  onClick={generateNewPassword}
                  title="Générer un autre mot de passe"
                >
                  <Sparkles size={14} />
                  Générer
                </button>
                <button
                  type="button"
                  className={`admin-btn-copy ${isCopied ? 'admin-btn-copy--done' : ''}`}
                  onClick={copyPassword}
                >
                  {isCopied ? <Check size={14} /> : <Copy size={14} />}
                  {isCopied ? 'Copié !' : 'Copier'}
                </button>
              </div>
            </div>

            <label className="admin-toggle-label">
              <input
                type="checkbox"
                checked={twoFactorEnforced}
                onChange={e => setTwoFactorEnforced(e.target.checked)}
                className="admin-toggle-input"
              />
              <span className="admin-toggle-slider" />
              <span className="admin-toggle-text">
                <strong>Exiger l'authentification à double facteur (2FA)</strong>
                <small>Obligatoire avant le premier accès aux données sensibles.</small>
              </span>
            </label>
          </div>

          {/* Footer Actions */}
          <div className="admin-modal__footer">
            <button type="button" className="admin-btn-secondary" onClick={onClose}>
              Annuler
            </button>
            <button type="submit" className="admin-btn-primary">
              Envoyer l'invitation administrateur
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

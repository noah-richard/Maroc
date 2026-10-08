import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import {
  Settings,
  Save,
  Download
} from 'lucide-react';

export const AdminSettingsPage: React.FC = () => {
  const { addToast } = useAdmin();
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [currency, setCurrency] = useState('MAD');
  const [emailAlerts, setEmailAlerts] = useState(true);

  const handleSave = () => {
    addToast({
      type: 'success',
      title: 'Paramètres enregistrés',
      message: 'La configuration globale du système a été mise à jour avec succès.'
    });
  };

  return (
    <div className="admin-users-page">
      <div className="admin-page-header">
        <div className="flex items-center gap-3">
          <div className="admin-page-icon">
            <Settings size={22} />
          </div>
          <div>
            <h1 className="admin-page-title">Paramètres Globaux du Système</h1>
            <p className="admin-page-subtitle">
              Configuration de la plateforme DécouvreLeMaroc, devise par défaut et sauvegardes.
            </p>
          </div>
        </div>

        <div className="admin-page-header__actions">
          <button type="button" className="admin-btn-primary" onClick={handleSave}>
            <Save size={16} />
            <span>Enregistrer la configuration</span>
          </button>
        </div>
      </div>

      {/* Info Callout */}
      <div className="admin-cms-callout mb-6">
        <div className="flex items-center gap-3">
          <Settings size={22} className="text-primary shrink-0" />
          <div className="text-xs">
            <strong className="font-bold">Configuration Globale DLM :</strong> Paramétrez ici les devises de conversion, le mode maintenance et effectuez des sauvegardes instantanées des données de la plateforme.
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="admin-chip admin-chip--emerald">
            Système opérationnel
          </span>
          <span className="admin-chip">
            Devise active : {currency}
          </span>
        </div>
      </div>

      <div className="admin-analytics-grid">
        {/* Platform Settings */}
        <div className="admin-card">
          <h3 className="admin-card__title">Général & Localisation</h3>

          <div className="admin-form-group">
            <label className="admin-form-label">Devise principale d'affichage</label>
            <select
              className="admin-form-select"
              value={currency}
              onChange={e => setCurrency(e.target.value)}
            >
              <option value="MAD">Dirham Marocain (MAD - د.م.)</option>
              <option value="EUR">Euro (€ EUR)</option>
              <option value="USD">Dollar Américain ($ USD)</option>
            </select>
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label">Langue par défaut du portail</label>
            <select className="admin-form-select" defaultValue="fr">
              <option value="fr">Français (Officiel)</option>
              <option value="ar">Arabe (العربية)</option>
              <option value="en">Anglais (International)</option>
            </select>
          </div>

          <div className="admin-security-box">
            <label className="admin-toggle-label">
              <input
                type="checkbox"
                checked={maintenanceMode}
                onChange={e => setMaintenanceMode(e.target.checked)}
                className="admin-toggle-input"
              />
              <span className="admin-toggle-slider" />
              <span className="admin-toggle-text">
                <strong>Mode Maintenance du Site Public</strong>
                <small>Affiche un écran d'attente aux visiteurs pendant les mises à jour.</small>
              </span>
            </label>
          </div>
        </div>

        {/* Notifications & Backups */}
        <div className="admin-card">
          <h3 className="admin-card__title">Notifications & Données</h3>

          <div className="admin-security-box">
            <label className="admin-toggle-label">
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={e => setEmailAlerts(e.target.checked)}
                className="admin-toggle-input"
              />
              <span className="admin-toggle-slider" />
              <span className="admin-toggle-text">
                <strong>Alertes Email pour les Nouveaux Partenaires</strong>
                <small>Notifier immédiatement l'équipe hospitalité lors d'une nouvelle demande de riad.</small>
              </span>
            </label>
          </div>

          <div className="admin-security-box">
            <div className="flex items-center justify-between">
              <div>
                <strong className="text-xs text-[#0F2937]">Sauvegarde Complète (Snapshot SQL/JSON)</strong>
                <p className="text-[11px] text-[#64748B] m-0">
                  Export chiffré de toutes les tables : Admins, Réservations, Partenaires.
                </p>
              </div>
              <button
                type="button"
                className="admin-btn-secondary"
                onClick={() => {
                  addToast({
                    type: 'info',
                    title: 'Sauvegarde initiée',
                    message: 'L\'archive complète des données a été compilée avec succès.'
                  });
                }}
              >
                <Download size={14} />
                <span>Créer Backup</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

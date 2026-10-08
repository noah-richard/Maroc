import React from 'react';
import { useAdmin } from '../context/AdminContext';
import {
  ShieldCheck,
  Laptop
} from 'lucide-react';

export const AdminSecurityPage: React.FC = () => {
  const {
    activeSessions,
    terminateSession,
    stats,
    addToast
  } = useAdmin();

  return (
    <div className="admin-users-page">
      <div className="admin-page-header">
        <div className="flex items-center gap-3">
          <div className="admin-page-icon">
            <ShieldCheck size={22} />
          </div>
          <div>
            <h1 className="admin-page-title">Sécurité, 2FA & Sessions Actives</h1>
            <p className="admin-page-subtitle">
              Gestion de la politique d'accès, surveillance des postes connectés et durcissement des comptes.
            </p>
          </div>
        </div>
      </div>

      {/* Security Health Score Banner */}
      <div className="admin-welcome-banner mb-6">
        <div>
          <div className="admin-welcome-banner__badge">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span className="text-emerald-700 font-bold">Score Global de Sécurité : 96/100 (Excellence)</span>
          </div>
          <h2 className="admin-welcome-banner__title">
            Politique de Double Authentification Stricte
          </h2>
          <p className="admin-welcome-banner__desc">
            {stats.twoFactorRate}% des comptes administrateurs sont actuellement protégés par un facteur d'authentification matériel ou applicatif (Google Authenticator, YubiKey).
          </p>
        </div>

        <div className="admin-welcome-banner__actions">
          <button
            type="button"
            className="admin-btn-primary"
            onClick={() => {
              addToast({
                type: 'success',
                title: 'Rapport de sécurité généré',
                message: 'Le rapport d\'audit de sécurité a été transmis aux administrateurs.'
              });
            }}
          >
            Auditer les clés API
          </button>
        </div>
      </div>

      {/* Active Sessions Table */}
      <div className="admin-card">
        <div className="admin-card__header">
          <div>
            <h3 className="admin-card__title">Sessions Administrateurs Actives ({activeSessions.length})</h3>
            <p className="admin-card__subtitle">Appareils et navigateurs actuellement autorisés</p>
          </div>
        </div>

        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Appareil & Système</th>
                <th>Administrateur</th>
                <th>Navigateur</th>
                <th>Localisation</th>
                <th>Adresse IP</th>
                <th>Début de Session</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {activeSessions.map(sess => (
                <tr key={sess.id}>
                  <td>
                    <div className="flex items-center gap-2.5 font-bold text-xs text-[#0F2937]">
                      <Laptop size={16} className="text-primary" />
                      <span>{sess.device}</span>
                      {sess.isCurrent && (
                        <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded font-bold">
                          Cette session
                        </span>
                      )}
                    </div>
                  </td>

                  <td>
                    <span className="text-xs font-semibold text-[#1E293B]">{sess.adminName}</span>
                  </td>

                  <td>
                    <span className="text-xs text-slate-500">{sess.browser}</span>
                  </td>

                  <td>
                    <span className="text-xs text-slate-600">{sess.location}</span>
                  </td>

                  <td>
                    <code className="text-xs text-amber-800 font-mono bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">{sess.ip}</code>
                  </td>

                  <td>
                    <span className="text-xs text-slate-500">{sess.startedAt}</span>
                  </td>

                  <td className="text-right">
                    {!sess.isCurrent ? (
                      <button
                        type="button"
                        className="text-xs font-semibold px-2.5 py-1 rounded bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 transition-all"
                        onClick={() => terminateSession(sess.id)}
                      >
                        Révoquer
                      </button>
                    ) : (
                      <span className="text-xs text-slate-500 font-medium">Session courante</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

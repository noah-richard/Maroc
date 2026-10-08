import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import {
  FileText,
  Search,
  Download,
  ShieldCheck,
  AlertTriangle,
  AlertCircle,
  Clock
} from 'lucide-react';

export const AdminAuditPage: React.FC = () => {
  const { auditLogs, exportAuditCSV, admins } = useAdmin();
  const [search, setSearch] = useState('');
  const [severityFilter, setSeverityFilter] = useState<'all' | 'info' | 'warning' | 'critical'>('all');
  const [adminFilter, setAdminFilter] = useState<string>('all');

  const filteredLogs = auditLogs.filter(log => {
    const matchesSearch =
      log.action.toLowerCase().includes(search.toLowerCase()) ||
      log.adminName.toLowerCase().includes(search.toLowerCase()) ||
      log.details.toLowerCase().includes(search.toLowerCase()) ||
      log.ip.includes(search);
    const matchesSeverity = severityFilter === 'all' || log.severity === severityFilter;
    const matchesAdmin = adminFilter === 'all' || log.adminId === adminFilter;
    return matchesSearch && matchesSeverity && matchesAdmin;
  });

  return (
    <div className="admin-users-page">
      <div className="admin-page-header">
        <div className="flex items-center gap-3">
          <div className="admin-page-icon">
            <FileText size={22} />
          </div>
          <div>
            <h1 className="admin-page-title">Journal d'Audit & Sécurité IT</h1>
            <p className="admin-page-subtitle">
              Traçabilité immuable de toutes les actions administratives, validations et accès aux données.
            </p>
          </div>
        </div>

        <div className="admin-page-header__actions">
          <button
            type="button"
            className="admin-btn-secondary"
            onClick={exportAuditCSV}
          >
            <Download size={15} />
            <span>Exporter l'Audit (CSV)</span>
          </button>
        </div>
      </div>

      {/* Info Callout */}
      <div className="admin-cms-callout mb-6">
        <div className="flex items-center gap-3">
          <ShieldCheck size={22} className="text-primary shrink-0" />
          <div className="text-xs">
            <strong className="font-bold">Journal d'Audit Immuable :</strong> Chaque connexion, modification tarifaire ou publication de contenu est horodatée avec adresse IP et identifiant pour garantir l'intégrité de la plateforme.
          </div>
        </div>
        <div className="flex items-center gap-2">
          {auditLogs.filter(l => l.severity === 'critical').length > 0 && (
            <span className="admin-chip admin-chip--terracotta">
              {auditLogs.filter(l => l.severity === 'critical').length} critiques
            </span>
          )}
          <span className="admin-chip admin-chip--emerald">
            {auditLogs.filter(l => l.severity === 'info').length} normaux
          </span>
          <span className="admin-chip">
            {auditLogs.length} événements
          </span>
        </div>
      </div>

      <div className="admin-filter-bar">
        <div className="admin-filter-search">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            className="admin-filter-input"
            placeholder="Filtrer par action, admin, IP ou détail technique..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="admin-filter-selectors">
          <select
            className="admin-select"
            value={severityFilter}
            onChange={e => setSeverityFilter(e.target.value as any)}
          >
            <option value="all">Toutes les gravités ({auditLogs.length})</option>
            <option value="info">Information (Standard)</option>
            <option value="warning">Avertissement (Modifications)</option>
            <option value="critical">Critique / Sécurité</option>
          </select>

          <select
            className="admin-select"
            value={adminFilter}
            onChange={e => setAdminFilter(e.target.value)}
          >
            <option value="all">Tous les collaborateurs</option>
            {admins.map(a => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Gravité</th>
              <th>Horodatage</th>
              <th>Administrateur</th>
              <th>Action Effectuée</th>
              <th>Détails de l'Opération</th>
              <th>Adresse IP</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-12 text-slate-400">
                  <ShieldCheck size={32} className="mx-auto mb-2 text-slate-400" />
                  <p className="font-semibold text-sm">Aucun événement d'audit ne correspond aux critères.</p>
                  <p className="text-xs mt-1">Modifiez vos critères de recherche ou de filtre de gravité.</p>
                </td>
              </tr>
            ) : (
              filteredLogs.map(log => (
                <tr key={log.id}>
                <td>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${
                      log.severity === 'critical'
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : log.severity === 'warning'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}
                  >
                    {log.severity === 'critical' ? (
                      <AlertCircle size={12} />
                    ) : log.severity === 'warning' ? (
                      <AlertTriangle size={12} />
                    ) : (
                      <ShieldCheck size={12} />
                    )}
                    <span className="capitalize">{log.severity}</span>
                  </span>
                </td>

                <td>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <Clock size={12} className="text-slate-400" />
                    <span>{log.timestamp}</span>
                  </div>
                </td>

                <td>
                  <div className="flex items-center gap-2">
                    <img src={log.adminAvatar} alt={log.adminName} className="w-6 h-6 rounded-full object-cover" />
                    <span className="font-semibold text-xs text-[#1E293B]">{log.adminName}</span>
                  </div>
                </td>

                <td>
                  <div className="font-bold text-xs text-[#0F2937]">{log.action}</div>
                  <span className="text-[10px] text-slate-500 uppercase">{log.category}</span>
                </td>

                <td>
                  <div className="text-xs text-slate-600 max-w-md">{log.details}</div>
                </td>

                <td>
                  <code className="text-xs text-amber-800 font-mono bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                    {log.ip}
                  </code>
                </td>
              </tr>
            ))
          )}
        </tbody>
        </table>
      </div>
    </div>
  );
};

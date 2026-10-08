import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import {
  Briefcase,
  Search,
  CheckCircle2,
  XCircle,
  Star,
  MapPin,
  Mail,
  Phone,
  ShieldCheck
} from 'lucide-react';

export const AdminPartnersPage: React.FC = () => {
  const { partners, approvePartner, rejectPartner } = useAdmin();
  const [tabFilter, setTabFilter] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [search, setSearch] = useState('');

  const filtered = partners.filter(p => {
    const matchesTab = p.status === tabFilter;
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const pendingCount = partners.filter(p => p.status === 'pending').length;
  const approvedCount = partners.filter(p => p.status === 'approved').length;
  const rejectedCount = partners.filter(p => p.status === 'rejected').length;

  return (
    <div className="admin-users-page">
      <div className="admin-page-header">
        <div className="flex items-center gap-3">
          <div className="admin-page-icon">
            <Briefcase size={22} />
          </div>
          <div>
            <h1 className="admin-page-title">Validation des Partenaires & Établissements</h1>
            <p className="admin-page-subtitle">
              Accréditation des riads de charme, guides certifiés, transporteurs 4x4 et tables d'exception.
            </p>
          </div>
        </div>
      </div>

      {/* Info Callout */}
      <div className="admin-cms-callout mb-6">
        <div className="flex items-center gap-3">
          <ShieldCheck size={22} className="text-primary shrink-0" />
          <div className="text-xs">
            <strong className="font-bold">Charte Hospitalité DLM :</strong> Chaque établissement partenaire fait l'objet d'un audit de conformité juridique (RC, patente touristique) et applique une commission contractuelle directe sur les réservations.
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="admin-chip admin-chip--amber">
            {pendingCount} à traiter
          </span>
          <span className="admin-chip admin-chip--emerald">
            {approvedCount} certifiés
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="admin-filter-bar">
        <div className="admin-filter-search">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            className="admin-filter-input"
            placeholder="Rechercher par nom de riad, ville ou catégorie..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Subnav Tabs */}
      <div className="admin-subnav-tabs">
        <button
          type="button"
          className={`admin-subnav-btn ${tabFilter === 'pending' ? 'admin-subnav-btn--active-primary' : ''}`}
          onClick={() => setTabFilter('pending')}
        >
          <span>Dossiers en attente</span>
          <span className="admin-subnav-badge">{pendingCount}</span>
        </button>

        <button
          type="button"
          className={`admin-subnav-btn ${tabFilter === 'approved' ? 'admin-subnav-btn--active-emerald' : ''}`}
          onClick={() => setTabFilter('approved')}
        >
          <span>Établissements Certifiés</span>
          <span className="admin-subnav-badge">{approvedCount}</span>
        </button>

        <button
          type="button"
          className={`admin-subnav-btn ${tabFilter === 'rejected' ? 'admin-subnav-btn--active-rose' : ''}`}
          onClick={() => setTabFilter('rejected')}
        >
          <span>Candidatures Refusées</span>
          <span className="admin-subnav-badge">{rejectedCount}</span>
        </button>
      </div>

      {/* Partners List */}
      {filtered.length === 0 ? (
        <div className="admin-empty-state">
          <Briefcase size={40} className="text-slate-400 mb-3" />
          <h3 className="font-bold text-base text-[#0F2937]">Aucun dossier de partenaire dans cet onglet</h3>
          <p className="text-xs text-slate-500 mt-1">Tous les dossiers sont à jour ou aucun résultat ne correspond aux filtres.</p>
        </div>
      ) : (
        <div className="admin-cards-grid">
          {filtered.map(partner => (
          <div key={partner.id} className="admin-user-card">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                  {partner.category}
                </span>
                <h3 className="font-bold text-base text-[#0F2937] mt-1">{partner.name}</h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                  <MapPin size={13} className="text-primary" />
                  <span>{partner.city}, Maroc</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-1 rounded-md">
                <Star size={12} fill="#F59E0B" />
                <span>{partner.rating}</span>
              </div>
            </div>

            <div className="admin-user-card__body">
              <div className="text-xs text-slate-600 flex flex-col gap-1 mb-2">
                <div className="font-semibold text-[#1E293B]">Contact: {partner.contactName}</div>
                <div className="text-slate-500 flex items-center gap-2">
                  <Mail size={12} /> {partner.email}
                </div>
                <div className="text-slate-500 flex items-center gap-2">
                  <Phone size={12} /> {partner.phone}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-[#F1EBE4]">
                <span className="text-slate-500">Commission DLM convenue:</span>
                <span className="font-bold text-primary">{partner.commissionRate}%</span>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-500">Dossier juridique & RC:</span>
                <span
                  className={`font-semibold ${
                    partner.documentsVerified ? 'text-emerald-700' : 'text-amber-700'
                  }`}
                >
                  {partner.documentsVerified ? 'Conforme & Validé' : 'En cours de vérification'}
                </span>
              </div>
            </div>

            <div className="pt-2">
              {partner.status === 'pending' ? (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all shadow-sm"
                    onClick={() => approvePartner(partner.id)}
                  >
                    <CheckCircle2 size={14} />
                    <span>Approuver & Publier</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg text-xs font-bold transition-all"
                    onClick={() => rejectPartner(partner.id)}
                  >
                    <XCircle size={14} />
                    <span>Refuser le dossier</span>
                  </button>
                </div>
              ) : partner.status === 'approved' ? (
                <div className="flex items-center justify-between text-xs text-emerald-800 font-semibold bg-emerald-50 border border-emerald-200 py-2 px-3 rounded-lg">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={14} /> Établissement Certifié Actif
                  </span>
                  <button
                    type="button"
                    className="text-xs text-slate-500 hover:text-red-600 underline"
                    onClick={() => rejectPartner(partner.id)}
                  >
                    Suspendre
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between text-xs text-red-800 font-semibold bg-red-50 border border-red-200 py-2 px-3 rounded-lg">
                  <span>Candidature archivée</span>
                  <button
                    type="button"
                    className="text-xs text-emerald-700 hover:underline"
                    onClick={() => approvePartner(partner.id)}
                  >
                    Réhabiliter
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        </div>
      )}
    </div>
  );
};

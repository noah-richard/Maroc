import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import {
  CalendarCheck,
  Search,
  Crown,
  MapPin
} from 'lucide-react';

export const AdminBookingsPage: React.FC = () => {
  const { bookings, updateBookingStatus } = useAdmin();
  const [search, setSearch] = useState('');
  const [tierFilter, setTierFilter] = useState<string>('all');

  const filtered = bookings.filter(b => {
    const matchesSearch =
      b.clientName.toLowerCase().includes(search.toLowerCase()) ||
      b.bookingRef.toLowerCase().includes(search.toLowerCase()) ||
      b.destination.toLowerCase().includes(search.toLowerCase());
    const matchesTier = tierFilter === 'all' || b.clubTier === tierFilter;
    return matchesSearch && matchesTier;
  });

  const totalMAD = bookings.reduce((sum, b) => sum + b.amountMAD, 0);
  const pendingCount = bookings.filter(b => b.status === 'pending').length;
  const vipCount = bookings.filter(b => b.clubTier === 'VIP Platinum' || b.clubTier === 'Gold').length;

  return (
    <div className="admin-users-page">
      <div className="admin-page-header">
        <div className="flex items-center gap-3">
          <div className="admin-page-icon">
            <CalendarCheck size={22} />
          </div>
          <div>
            <h1 className="admin-page-title">Réservations & Membres Club VIP</h1>
            <p className="admin-page-subtitle">
              Gestion des séjours réservés, expériences sur mesure et statuts de fidélité du Club DécouvreLeMaroc.
            </p>
          </div>
        </div>
      </div>

      {/* Info Callout */}
      <div className="admin-cms-callout mb-6">
        <div className="flex items-center gap-3">
          <Crown size={22} className="text-primary shrink-0" />
          <div className="text-xs">
            <strong className="font-bold">Conciergerie & Club Privé :</strong> Suivi en temps réel des séjours haut de gamme. Volume total généré : <span className="font-bold text-emerald-700">{totalMAD.toLocaleString('fr-FR')} MAD</span>.
          </div>
        </div>
        <div className="flex items-center gap-2">
          {pendingCount > 0 && (
            <span className="admin-chip admin-chip--amber">
              {pendingCount} en attente
            </span>
          )}
          <span className="admin-chip admin-chip--emerald">
            {vipCount} Membres VIP
          </span>
          <span className="admin-chip">
            {bookings.length} réservations
          </span>
        </div>
      </div>

      <div className="admin-filter-bar">
        <div className="admin-filter-search">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            className="admin-filter-input"
            placeholder="Rechercher par référence, voyageur ou destination..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="admin-filter-selectors">
          <select
            className="admin-select"
            value={tierFilter}
            onChange={e => setTierFilter(e.target.value)}
          >
            <option value="all">Tous les statuts Club ({bookings.length})</option>
            <option value="VIP Platinum">VIP Platinum</option>
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
          </select>
        </div>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Réf. Réservation</th>
              <th>Client / Voyageur</th>
              <th>Destination & Expérience</th>
              <th>Dates du Séjour</th>
              <th>Montant Total</th>
              <th>Statut Club</th>
              <th>Statut Réservation</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-12 text-slate-400">
                  <CalendarCheck size={32} className="mx-auto mb-2 text-slate-400" />
                  <p className="font-semibold text-sm">Aucune réservation ne correspond à votre recherche.</p>
                  <p className="text-xs mt-1">Modifiez vos critères de recherche ou de filtre statut Club.</p>
                </td>
              </tr>
            ) : (
              filtered.map(b => (
                <tr key={b.id}>
                  <td>
                    <code className="text-xs text-primary font-bold">{b.bookingRef}</code>
                    <div className="text-[10px] text-slate-500">{b.createdAt}</div>
                  </td>

                <td>
                  <div className="font-bold text-sm text-[#0F2937]">{b.clientName}</div>
                  <div className="text-[11px] text-slate-500">{b.clientEmail}</div>
                </td>

                <td>
                  <div className="font-semibold text-xs text-[#1E293B] flex items-center gap-1.5">
                    <MapPin size={12} className="text-amber-500" />
                    <span>{b.destination}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 truncate max-w-xs">
                    {b.experienceTitle} ({b.guestsCount} pers.)
                  </div>
                </td>

                <td>
                  <div className="text-xs text-slate-700 font-medium">
                    {b.startDate} → {b.endDate}
                  </div>
                </td>

                <td>
                  <div className="font-bold text-sm text-emerald-700">
                    {b.amountMAD.toLocaleString('fr-FR')} MAD
                  </div>
                </td>

                <td>
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      b.clubTier === 'VIP Platinum'
                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                        : b.clubTier === 'Gold'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    <Crown size={11} /> {b.clubTier}
                  </span>
                </td>

                <td>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      b.status === 'confirmed'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : b.status === 'pending'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    {b.status === 'confirmed' ? 'Confirmée' : b.status === 'pending' ? 'En attente' : 'Terminée'}
                  </span>
                </td>

                <td className="text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    {b.status === 'pending' && (
                      <button
                        type="button"
                        className="px-2.5 py-1 rounded bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500"
                        onClick={() => updateBookingStatus(b.id, 'confirmed')}
                      >
                        Valider
                      </button>
                    )}
                  </div>
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

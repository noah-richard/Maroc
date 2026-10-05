import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { CityEditorModal } from '../components/CityEditorModal';
import type { DestinationAdminItem } from '../types/admin';
import {
  MapPin,
  Search,
  Star,
  ExternalLink,
  Sparkles,
  Plus,
  Edit2,
  Trash2,
  Compass,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminDestinationsPage: React.FC = () => {
  const {
    destinations,
    toggleDestinationPublish,
    toggleDestinationFeatured,
    deleteCityDestination
  } = useAdmin();

  const [search, setSearch] = useState('');
  const [regionFilter, setRegionFilter] = useState<'all' | 'coastal' | 'inland'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cityToEdit, setCityToEdit] = useState<DestinationAdminItem | null>(null);

  const handleOpenCreate = () => {
    setCityToEdit(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (dest: DestinationAdminItem) => {
    setCityToEdit(dest);
    setIsModalOpen(true);
  };

  const handleDelete = (dest: DestinationAdminItem) => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer la destination "${dest.name}" (/destinations/${dest.slug}) ? Cette action masquera la page publique.`)) {
      deleteCityDestination(dest.id);
    }
  };

  const filtered = destinations.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.slug.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = regionFilter === 'all' || d.region === regionFilter;
    const matchesStatus = statusFilter === 'all' || d.status === statusFilter;
    return matchesSearch && matchesRegion && matchesStatus;
  });

  return (
    <div className="admin-users-page">
      <div className="admin-page-header">
        <div className="flex items-center gap-3">
          <div className="admin-page-icon">
            <MapPin size={22} />
          </div>
          <div>
            <h1 className="admin-page-title">Destinations & Villes du Maroc</h1>
            <p className="admin-page-subtitle">
              Créez de nouvelles villes, modifiez leurs descriptions, météo et photos. Chaque ville génère instantanément sa page publique dédiée.
            </p>
          </div>
        </div>

        <div className="admin-page-header__actions">
          <button
            type="button"
            className="admin-btn-primary"
            onClick={handleOpenCreate}
            id="btn-add-destination"
          >
            <Plus size={16} />
            <span>Ajouter une Nouvelle Ville</span>
          </button>
        </div>
      </div>

      {/* Info Callout */}
      <div className="admin-cms-callout mb-6">
        <div className="flex items-center gap-3">
          <Compass size={24} className="text-primary shrink-0" />
          <div className="text-xs">
            <strong className="font-bold">Système CMS Villes Actif :</strong> Toute nouvelle ville enregistrée ici est immédiatement consultable en public via le lien <code className="text-primary font-mono font-bold">/destinations/[slug]</code> avec son univers complet (météo, hébergements vérifiés, conciergerie locale).
          </div>
        </div>
        <div className="text-xs font-bold text-primary shrink-0 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          {destinations.length} villes répertoriées
        </div>
      </div>

      {/* Filter bar */}
      <div className="admin-filter-bar">
        <div className="admin-filter-search">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            className="admin-filter-input"
            placeholder="Rechercher une ville marocaine (ex. Marrakech, Dakhla, Tanger, Essaouira)..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="admin-filter-selectors">
          <select
            className="admin-select"
            value={regionFilter}
            onChange={e => setRegionFilter(e.target.value as any)}
          >
            <option value="all">Toutes les régions ({destinations.length})</option>
            <option value="inland">Villes Impériales & Intérieur</option>
            <option value="coastal">Façade Maritime & Côtière</option>
          </select>

          <select
            className="admin-select"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as any)}
          >
            <option value="all">Tous les statuts</option>
            <option value="published">Publiée en ligne</option>
            <option value="draft">Brouillon interne</option>
          </select>
        </div>
      </div>

      {/* Destinations Table */}
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Ville & Destination</th>
              <th>Région</th>
              <th>Fréquentation</th>
              <th>Note & Météo</th>
              <th>En Vedette</th>
              <th>Statut</th>
              <th className="text-right">Actions Directes</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-12 text-slate-400">
                  <AlertCircle size={32} className="mx-auto mb-2 text-slate-400" />
                  <p className="font-semibold">Aucune ville ne correspond à votre recherche.</p>
                  <button
                    type="button"
                    className="admin-btn-secondary mt-3"
                    onClick={handleOpenCreate}
                  >
                    Ajouter cette ville maintenant
                  </button>
                </td>
              </tr>
            ) : (
              filtered.map(dest => (
                <tr key={dest.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        {dest.heroImageUrl ? (
                          <img
                            src={dest.heroImageUrl}
                            alt={dest.name}
                            className="w-12 h-12 rounded-xl object-cover border border-[#E8E2D9] shadow-sm shrink-0"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-primary shrink-0">
                            <MapPin size={22} />
                          </div>
                        )}
                        <div>
                          <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                            <span className="text-base text-[#0F2937] font-bold">{dest.name}</span>
                            {dest.heroBadge && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFF1EE] text-[#C8503D] border border-[#F8B4A8] font-bold">
                                {dest.heroBadge}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-0.5">
                            <Link
                              to={`/destinations/${dest.slug}`}
                              target="_blank"
                              className="text-[11px] text-[#C8503D] hover:underline font-mono font-semibold flex items-center gap-1"
                            >
                              <span>/destinations/{dest.slug}</span>
                              <ExternalLink size={10} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="admin-chip">
                        {dest.region === 'inland' ? 'Intérieur / Impériale' : 'Côtière / Atlantique'}
                      </span>
                    </td>

                    <td>
                      <div className="text-xs font-bold text-[#0F2937]">
                        {dest.viewsThisMonth.toLocaleString('fr-FR')} visites
                      </div>
                      <div className="text-[10px] text-emerald-600 font-semibold">+18% ce mois</div>
                    </td>

                    <td>
                      <div className="flex items-center gap-1 text-xs font-bold text-amber-600">
                        <Star size={13} fill="#F59E0B" />
                        <span>{dest.rating}</span>
                        {dest.temperature && (
                          <span className="text-slate-500 font-normal text-[11px] ml-1.5">
                            • {dest.temperature}°C
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate max-w-[140px] mt-0.5">
                        {dest.weatherCondition || 'Ensoleillé'}
                      </div>
                    </td>

                    <td>
                      <button
                        type="button"
                        className={`text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1 transition-all ${
                          dest.isFeatured
                            ? 'bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A] hover:bg-[#FEF3C7]'
                            : 'bg-[#F1F5F9] text-[#475569] border border-[#CBD5E1] hover:bg-[#E2E8F0]'
                        }`}
                        onClick={() => toggleDestinationFeatured(dest.id)}
                        title="Cliquer pour activer/désactiver la mise en avant"
                      >
                        <Sparkles size={11} />
                        <span>{dest.isFeatured ? 'Prestige VIP' : 'Standard'}</span>
                      </button>
                    </td>

                    <td>
                      <button
                        type="button"
                        className={`text-xs px-3 py-1 rounded-full font-bold transition-all ${
                          dest.status === 'published'
                            ? 'bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0] hover:bg-[#D1FAE5]'
                            : 'bg-[#F1F5F9] text-[#475569] border border-[#CBD5E1] hover:bg-[#E2E8F0]'
                        }`}
                        onClick={() => toggleDestinationPublish(dest.id)}
                        title="Cliquer pour changer le statut public"
                      >
                        {dest.status === 'published' ? (
                          <span className="flex items-center gap-1">
                            <CheckCircle2 size={11} />
                            En ligne
                          </span>
                        ) : (
                          'Brouillon'
                        )}
                      </button>
                    </td>

                    <td className="text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          className="admin-action-icon-btn hover:text-[#C8503D] hover:border-[#C8503D]"
                          title="Modifier les informations de la ville"
                          onClick={() => handleOpenEdit(dest)}
                        >
                          <Edit2 size={15} />
                        </button>

                        <Link
                          to={`/destinations/${dest.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="admin-action-icon-btn hover:text-[#0284C7] hover:border-[#0284C7]"
                          title="Ouvrir la page publique en direct"
                        >
                          <ExternalLink size={15} />
                        </Link>

                        <button
                          type="button"
                          className="admin-action-icon-btn text-rose-500 hover:bg-rose-50 hover:border-rose-300"
                          title="Supprimer la destination"
                          onClick={() => handleDelete(dest)}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>

      {/* City Editor Modal */}
      <CityEditorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cityToEdit={cityToEdit}
      />
    </div>
  );
};


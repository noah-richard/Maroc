import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import type { PlatformRecommendation } from '../types/admin';
import {
  Compass,
  Plus,
  Search,
  Star,
  Trash2,
  Edit2,
  MapPin,
  X,
  Building,
  Utensils,
  Car,
  Palmtree
} from 'lucide-react';


const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  hotels: <Building size={14} />,
  restaurants: <Utensils size={14} />,
  attractions: <Palmtree size={14} />,
  cars: <Car size={14} />,
  apartments: <Building size={14} />
};

const CATEGORY_LABELS: Record<string, string> = {
  hotels: 'Hôtels & Riads',
  restaurants: 'Restaurants & Gastronomie',
  attractions: 'Excursions & Activités',
  cars: 'Location de Voitures',
  apartments: 'Suites & Résidences'
};

export const AdminRecommendationsPage: React.FC = () => {
  const {
    recommendations,
    addRecommendation,
    updateRecommendation,
    deleteRecommendation,
    destinations
  } = useAdmin();

  const [search, setSearch] = useState('');
  const [cityFilter, setCityFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<PlatformRecommendation | null>(null);

  // Form fields
  const [name, setName] = useState('');
  const [citySlug, setCitySlug] = useState('marrakech');
  const [category, setCategory] = useState<PlatformRecommendation['category']>('hotels');
  const [imageUrl, setImageUrl] = useState('');
  const [rating, setRating] = useState(4.8);
  const [location, setLocation] = useState('');
  const [badge, setBadge] = useState('');
  const [priceStartingFrom, setPriceStartingFrom] = useState(850);
  const [tags, setTags] = useState('Piscine, Spa, Vue Atlas');
  const [isPublished, setIsPublished] = useState(true);

  const openCreateModal = () => {
    setEditingItem(null);
    setName('');
    setCitySlug(destinations[0]?.slug || 'marrakech');
    setCategory('hotels');
    setImageUrl('https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=80');
    setRating(4.9);
    setLocation('Médina Historique');
    setBadge('Coup de Cœur');
    setPriceStartingFrom(1200);
    setTags('Authentique, Petit-déjeuner inclus, Terrasse');
    setIsPublished(true);
    setIsModalOpen(true);
  };

  const openEditModal = (rec: PlatformRecommendation) => {
    setEditingItem(rec);
    setName(rec.name);
    setCitySlug(rec.citySlug);
    setCategory(rec.category);
    setImageUrl(rec.imageUrl);
    setRating(rec.rating);
    setLocation(rec.location);
    setBadge(rec.badge || '');
    setPriceStartingFrom(rec.priceStartingFrom || 800);
    setTags(rec.tags.join(', '));
    setIsPublished(rec.isPublished);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tagList = tags.split(',').map(t => t.trim()).filter(Boolean);

    if (editingItem) {
      updateRecommendation(editingItem.id, {
        name,
        citySlug,
        category,
        imageUrl,
        rating,
        location,
        badge: badge.trim() || undefined,
        priceStartingFrom,
        tags: tagList,
        isPublished
      });
    } else {
      addRecommendation({
        name,
        citySlug,
        category,
        imageUrl,
        rating,
        reviewsCount: Math.floor(Math.random() * 80) + 20,
        location,
        badge: badge.trim() || undefined,
        tags: tagList,
        priceStartingFrom,
        currency: 'MAD',
        pricePeriod: category === 'hotels' ? '/nuit' : '/pers',
        isPublished
      });
    }
    setIsModalOpen(false);
  };

  const filtered = recommendations.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase()) || r.location.toLowerCase().includes(search.toLowerCase());
    const matchesCity = cityFilter === 'all' || r.citySlug === cityFilter;
    const matchesCat = categoryFilter === 'all' || r.category === categoryFilter;
    return matchesSearch && matchesCity && matchesCat;
  });

  return (
    <div className="admin-users-page">
      {/* Header */}
      <div className="admin-page-header">
        <div className="flex items-center gap-3">
          <div className="admin-page-icon">
            <Compass size={22} />
          </div>
          <div>
            <h1 className="admin-page-title">Bonnes Adresses & Recommandations</h1>
            <p className="admin-page-subtitle">
              Référencez les riads, restaurants, excursions et activités incontournables pour chaque ville marocaine.
            </p>
          </div>
        </div>

        <div className="admin-page-header__actions">
          <button
            type="button"
            className="admin-btn-primary"
            onClick={openCreateModal}
          >
            <Plus size={16} />
            <span>Ajouter une Bonne Adresse</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="admin-filter-bar">
        <div className="admin-filter-search">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            className="admin-filter-input"
            placeholder="Rechercher une adresse, un riad ou une activité..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="admin-filter-selectors">
          <select
            className="admin-select"
            value={cityFilter}
            onChange={e => setCityFilter(e.target.value)}
          >
            <option value="all">Toutes les villes</option>
            {destinations.map(d => (
              <option key={d.slug} value={d.slug}>{d.name}</option>
            ))}
          </select>

          <select
            className="admin-select"
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
          >
            <option value="all">Toutes les catégories</option>
            <option value="hotels">Hôtels & Riads</option>
            <option value="restaurants">Restaurants</option>
            <option value="attractions">Excursions</option>
            <option value="cars">Location Voitures</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Établissement & Adresse</th>
              <th>Ville</th>
              <th>Catégorie</th>
              <th>Tarif Indicatif</th>
              <th>Note Clients</th>
              <th>Statut</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(rec => (
              <tr key={rec.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <img
                      src={rec.imageUrl}
                      alt={rec.name}
                      className="w-12 h-10 rounded-lg object-cover border border-slate-200 shrink-0"
                    />
                    <div>
                      <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                        <span>{rec.name}</span>
                        {rec.badge && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-bold">
                            {rec.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-1">
                        <MapPin size={11} className="text-primary" />
                        <span>{rec.location}</span>
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <span className="admin-chip capitalize">
                    {rec.citySlug}
                  </span>
                </td>

                <td>
                  <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                    <span className="text-primary">{CATEGORY_ICONS[rec.category]}</span>
                    <span>{CATEGORY_LABELS[rec.category]}</span>
                  </div>
                </td>

                <td>
                  {rec.priceStartingFrom ? (
                    <div className="text-xs font-bold text-slate-900">
                      dès {rec.priceStartingFrom} {rec.currency || 'MAD'}
                      <span className="text-[10px] text-slate-500 font-normal"> {rec.pricePeriod}</span>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400">—</span>
                  )}
                </td>

                <td>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-700">
                    <Star size={13} fill="#F59E0B" />
                    <span>{rec.rating}</span>
                    <span className="text-slate-500 text-[10px]">({rec.reviewsCount})</span>
                  </div>
                </td>

                <td>
                  <button
                    type="button"
                    className={`text-xs px-2.5 py-1 rounded-full font-bold transition-all ${
                      rec.isPublished
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                    onClick={() => updateRecommendation(rec.id, { isPublished: !rec.isPublished })}
                  >
                    {rec.isPublished ? 'En ligne' : 'Masquée'}
                  </button>
                </td>

                <td className="text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      type="button"
                      className="admin-action-icon-btn"
                      onClick={() => openEditModal(rec)}
                      title="Modifier"
                    >
                      <Edit2 size={15} />
                    </button>
                    <button
                      type="button"
                      className="admin-action-icon-btn text-rose-500 hover:bg-rose-50 hover:text-rose-600"
                      onClick={() => {
                        if (window.confirm(`Supprimer l'adresse "${rec.name}" ?`)) {
                          deleteRecommendation(rec.id);
                        }
                      }}
                      title="Supprimer"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Editor Modal */}
      {isModalOpen && (
        <div className="admin-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="city-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal__header">
              <div className="admin-modal__title-box">
                <div className="admin-modal__icon">
                  <Compass size={22} />
                </div>
                <div>
                  <h3 className="admin-modal__title">
                    {editingItem ? `Modifier "${editingItem.name}"` : 'Ajouter une Recommandation'}
                  </h3>
                  <p className="admin-modal__subtitle">
                    Cette adresse apparaîtra dans les sélections recommandées de la ville.
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="admin-modal__close"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="admin-form-grid">
                <div className="admin-form-group">
                  <label className="admin-form-label">Nom de l'Établissement *</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="ex. Riad Dar Maya"
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Ville de Rattachement *</label>
                  <select
                    className="admin-form-select"
                    value={citySlug}
                    onChange={e => setCitySlug(e.target.value)}
                  >
                    {destinations.map(d => (
                      <option key={d.slug} value={d.slug}>{d.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="admin-form-grid">
                <div className="admin-form-group">
                  <label className="admin-form-label">Catégorie</label>
                  <select
                    className="admin-form-select"
                    value={category}
                    onChange={e => setCategory(e.target.value as any)}
                  >
                    <option value="hotels">Hôtels & Riads</option>
                    <option value="restaurants">Restaurants</option>
                    <option value="attractions">Excursions & Activités</option>
                    <option value="cars">Location de Voitures</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Emplacement / Quartier</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    placeholder="ex. Médina, Guéliz, Corniche..."
                  />
                </div>
              </div>

              <div className="admin-form-grid">
                <div className="admin-form-group">
                  <label className="admin-form-label">Tarif de Départ (MAD)</label>
                  <input
                    type="number"
                    className="admin-form-input"
                    value={priceStartingFrom}
                    onChange={e => setPriceStartingFrom(parseInt(e.target.value, 10) || 0)}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Badge Spécial (Facultatif)</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={badge}
                    onChange={e => setBadge(e.target.value)}
                    placeholder="ex. Coup de Cœur, Vue Panoramique"
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Image d'Illustration (URL)</label>
                <input
                  type="url"
                  className="admin-form-input"
                  value={imageUrl}
                  onChange={e => setImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  required
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Tags et Prestations (séparés par des virgules)</label>
                <input
                  type="text"
                  className="admin-form-input"
                  value={tags}
                  onChange={e => setTags(e.target.value)}
                  placeholder="ex. Piscine, Spa, Vue mer, Climatisation"
                />
              </div>

              <div className="admin-modal__footer">
                <button
                  type="button"
                  className="admin-btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="admin-btn-primary"
                >
                  {editingItem ? 'Enregistrer' : 'Créer l\'Adresse'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

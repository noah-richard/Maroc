import React, { useState, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
import type { DestinationAdminItem } from '../types/admin';
import {
  X,
  MapPin,
  Sun,
  Eye,
  Compass
} from 'lucide-react';

import './CityEditorModal.css';

interface CityEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  cityToEdit?: DestinationAdminItem | null;
}

const PRESET_MOROCCAN_IMAGES = [
  { label: 'Dakhla Lagune', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80' },
  { label: 'Chefchaouen Bleue', url: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80' },
  { label: 'Sahara & Dunes', url: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?w=1200&auto=format&fit=crop&q=80' },
  { label: 'Médina & Riads', url: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&auto=format&fit=crop&q=80' },
  { label: 'Côte Atlantique', url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&auto=format&fit=crop&q=80' }
];

export const CityEditorModal: React.FC<CityEditorModalProps> = ({
  isOpen,
  onClose,
  cityToEdit
}) => {
  const { addCityDestination, updateCityDestination } = useAdmin();

  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [region, setRegion] = useState<'coastal' | 'inland'>('inland');
  const [heroBadge, setHeroBadge] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const [heroImageUrl, setHeroImageUrl] = useState('');
  const [temperature, setTemperature] = useState(26);
  const [weatherCondition, setWeatherCondition] = useState('Ensoleillé et ciel dégagé');
  const [isFeatured, setIsFeatured] = useState(false);
  const [status, setStatus] = useState<'published' | 'draft'>('published');
  const [error, setError] = useState('');

  useEffect(() => {
    if (cityToEdit) {
      setName(cityToEdit.name);
      setSlug(cityToEdit.slug);
      setRegion(cityToEdit.region);
      setHeroBadge(cityToEdit.heroBadge || '');
      setHeroDescription(cityToEdit.heroDescription || '');
      setHeroImageUrl(cityToEdit.heroImageUrl || '');
      setTemperature(cityToEdit.temperature || 26);
      setWeatherCondition(cityToEdit.weatherCondition || 'Ensoleillé');
      setIsFeatured(cityToEdit.isFeatured);
      setStatus(cityToEdit.status === 'archived' ? 'draft' : cityToEdit.status);
    } else {
      setName('');
      setSlug('');
      setRegion('inland');
      setHeroBadge('Joyau du Maroc');
      setHeroDescription('Une terre d’histoire et d’émotions avec ses riads authentiques, sa gastronomie parfumée et son artisanat d’exception.');
      setHeroImageUrl(PRESET_MOROCCAN_IMAGES[0].url);
      setTemperature(26);
      setWeatherCondition('Ensoleillé et ciel dégagé');
      setIsFeatured(true);
      setStatus('published');
    }
  }, [cityToEdit, isOpen]);

  if (!isOpen) return null;

  const handleNameChange = (val: string) => {
    setName(val);
    if (!cityToEdit) {
      // Auto generate slug
      const generatedSlug = val
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setSlug(generatedSlug);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Veuillez renseigner le nom de la ville.');
      return;
    }
    if (!slug.trim()) {
      setError('Veuillez renseigner un slug URL pour la destination.');
      return;
    }

    if (cityToEdit) {
      updateCityDestination(cityToEdit.id, {
        name: name.trim(),
        slug: slug.trim().toLowerCase(),
        region,
        heroBadge: heroBadge.trim(),
        heroDescription: heroDescription.trim(),
        heroImageUrl: heroImageUrl.trim(),
        temperature,
        weatherCondition,
        isFeatured,
        status
      });
    } else {
      addCityDestination({
        name: name.trim(),
        slug: slug.trim().toLowerCase(),
        region,
        heroBadge: heroBadge.trim() || 'Joyau du Maroc',
        heroDescription: heroDescription.trim(),
        heroImageUrl: heroImageUrl.trim() || PRESET_MOROCCAN_IMAGES[0].url,
        temperature,
        weatherCondition,
        isFeatured,
        status
      });
    }

    onClose();
  };

  return (
    <div className="admin-modal-backdrop" onClick={onClose}>
      <div className="city-modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="admin-modal__header">
          <div className="admin-modal__title-box">
            <div className="admin-modal__icon">
              <MapPin size={22} />
            </div>
            <div>
              <h3 className="admin-modal__title">
                {cityToEdit ? `Modifier la Destination "${cityToEdit.name}"` : 'Ajouter une Nouvelle Ville au Maroc'}
              </h3>
              <p className="admin-modal__subtitle">
                Générez instantanément la page publique complète avec météo, riads et expériences.
              </p>
            </div>
          </div>
          <button type="button" className="admin-modal__close" onClick={onClose} aria-label="Fermer">
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="city-modal__form">
          {error && <div className="admin-modal__error">{error}</div>}

          <div className="city-modal__grid">
            {/* Left Inputs Column */}
            <div className="city-modal__inputs-col">
              {/* Row 1: Name and Slug */}
              <div className="admin-form-grid">
                <div className="admin-form-group">
                  <label className="admin-form-label">Nom de la Ville *</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    placeholder="ex. Dakhla, Chefchaouen, Ifrane..."
                    value={name}
                    onChange={e => handleNameChange(e.target.value)}
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Slug URL (Lien public) *</label>
                  <div className="city-slug-input-wrap">
                    <span className="city-slug-prefix">/destinations/</span>
                    <input
                      type="text"
                      className="city-slug-field"
                      placeholder="dakhla"
                      value={slug}
                      onChange={e => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Region & Badge */}
              <div className="admin-form-grid">
                <div className="admin-form-group">
                  <label className="admin-form-label">Région Marocaine</label>
                  <select
                    className="admin-form-select"
                    value={region}
                    onChange={e => setRegion(e.target.value as 'coastal' | 'inland')}
                  >
                    <option value="inland">Villes Impériales & Intérieur (Atlas, Oasis, Sud)</option>
                    <option value="coastal">Façade Maritime & Côtière (Atlantique & Méditerranée)</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Slogan / Badge Hero</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    placeholder="ex. La Lagune Sauvage & Kitesurf"
                    value={heroBadge}
                    onChange={e => setHeroBadge(e.target.value)}
                  />
                </div>
              </div>

              {/* Row 3: Hero Description */}
              <div className="admin-form-group">
                <label className="admin-form-label">Description d'introduction (Hero)</label>
                <textarea
                  className="admin-form-input city-textarea"
                  rows={3}
                  placeholder="Décrivez l'atmosphère de la ville, son authenticité, ses paysages et ce qui fait sa renommée..."
                  value={heroDescription}
                  onChange={e => setHeroDescription(e.target.value)}
                />
              </div>

              {/* Row 4: Weather & Climat */}
              <div className="admin-form-grid">
                <div className="admin-form-group">
                  <label className="admin-form-label">Température Moyenne (°C)</label>
                  <input
                    type="number"
                    className="admin-form-input"
                    value={temperature}
                    onChange={e => setTemperature(parseInt(e.target.value, 10) || 20)}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Condition Météorologique</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    placeholder="ex. Ciel dégagé & brise marine"
                    value={weatherCondition}
                    onChange={e => setWeatherCondition(e.target.value)}
                  />
                </div>
              </div>

              {/* Row 5: Hero Image URL with Moroccan presets */}
              <div className="admin-form-group">
                <label className="admin-form-label">Image Principale (URL)</label>
                <input
                  type="url"
                  className="admin-form-input"
                  placeholder="https://images.unsplash.com/..."
                  value={heroImageUrl}
                  onChange={e => setHeroImageUrl(e.target.value)}
                />
                
                <div className="city-preset-images">
                  <span className="text-xs text-slate-400">Photos de référence :</span>
                  {PRESET_MOROCCAN_IMAGES.map(img => (
                    <button
                      key={img.label}
                      type="button"
                      className="city-preset-btn"
                      onClick={() => setHeroImageUrl(img.url)}
                    >
                      {img.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 6: Status & Featured */}
              <div className="admin-form-grid">
                <div className="admin-form-group">
                  <label className="admin-form-label">Statut de Publication</label>
                  <select
                    className="admin-form-select"
                    value={status}
                    onChange={e => setStatus(e.target.value as 'published' | 'draft')}
                  >
                    <option value="published">Publiée (En ligne sur le site)</option>
                    <option value="draft">Brouillon (Masquée du public)</option>
                  </select>
                </div>

                <div className="admin-form-group justify-end">
                  <label className="admin-toggle-label mt-2">
                    <input
                      type="checkbox"
                      checked={isFeatured}
                      onChange={e => setIsFeatured(e.target.checked)}
                      className="admin-toggle-input"
                    />
                    <span className="admin-toggle-slider" />
                    <span className="admin-toggle-text">
                      <strong>Mettre en Vedette Prestige</strong>
                      <small>Afficher sur la page d'accueil</small>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Live Preview Card */}
            <div className="city-modal__preview-col">
              <div className="city-preview-label">
                <Eye size={14} className="text-amber-400" />
                <span>Aperçu de la Carte Destination</span>
              </div>

              <div className="city-preview-card">
                <div
                  className="city-preview-card__img"
                  style={{
                    backgroundImage: `url(${heroImageUrl || PRESET_MOROCCAN_IMAGES[0].url})`
                  }}
                >
                  <span className="city-preview-card__badge">
                    {heroBadge || 'Destination Maroc'}
                  </span>
                  <span className="city-preview-card__weather">
                    <Sun size={12} /> {temperature}°C
                  </span>
                </div>

                <div className="city-preview-card__content">
                  <h4 className="city-preview-card__title">
                    {name || 'Nom de la Ville'}
                  </h4>
                  <p className="city-preview-card__desc">
                    {heroDescription || 'Description de la destination...'}
                  </p>
                  <div className="city-preview-card__footer">
                    <span className="text-xs text-primary font-bold">
                      /destinations/{slug || 'ville'}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {status === 'published' ? 'En ligne' : 'Brouillon'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="city-preview-tip">
                <Compass size={16} className="text-primary shrink-0" />
                <span>
                  Dès l'enregistrement, la page <strong>/destinations/{slug || 'ville'}</strong> sera immédiatement accessible avec l'univers complet (météo, hébergements, restaurants, et conciergerie locale).
                </span>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="admin-modal__footer">
            <button type="button" className="admin-btn-secondary" onClick={onClose}>
              Annuler
            </button>
            <button type="submit" className="admin-btn-primary">
              {cityToEdit ? 'Enregistrer les Modifications' : 'Créer & Publier la Destination'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

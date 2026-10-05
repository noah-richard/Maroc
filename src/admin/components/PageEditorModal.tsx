import React, { useState, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
import type { CustomPage, PageCategory } from '../types/admin';
import {
  X,
  FileText,
  Eye,
  Link as LinkIcon
} from 'lucide-react';

import './CityEditorModal.css';

interface PageEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  pageToEdit?: CustomPage | null;
}

export const PageEditorModal: React.FC<PageEditorModalProps> = ({
  isOpen,
  onClose,
  pageToEdit
}) => {
  const { addCustomPage, updateCustomPage } = useAdmin();

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState<PageCategory>('guide');
  const [coverImage, setCoverImage] = useState('');
  const [content, setContent] = useState('');
  const [highlightsInput, setHighlightsInput] = useState('');
  const [ctaText, setCtaText] = useState('');
  const [ctaLink, setCtaLink] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [status, setStatus] = useState<'published' | 'draft'>('published');
  const [error, setError] = useState('');

  useEffect(() => {
    if (pageToEdit) {
      setTitle(pageToEdit.title);
      setSlug(pageToEdit.slug);
      setSubtitle(pageToEdit.subtitle);
      setCategory(pageToEdit.category);
      setCoverImage(pageToEdit.coverImage);
      setContent(pageToEdit.content);
      setHighlightsInput(pageToEdit.highlights.join('\n'));
      setCtaText(pageToEdit.ctaText || '');
      setCtaLink(pageToEdit.ctaLink || '');
      setSeoTitle(pageToEdit.seoTitle || '');
      setSeoDescription(pageToEdit.seoDescription || '');
      setStatus(pageToEdit.status);
    } else {
      setTitle('');
      setSlug('');
      setSubtitle('');
      setCategory('guide');
      setCoverImage('https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80');
      setContent('Rédigez ici le contenu détaillé de votre page...\n\n### Première partie : Immersion\nDécouvrez les charmes inattendus de cette expérience marocaine.\n\n### Deuxième partie : Conseils pratiques\nRetrouvez nos recommandations locales et les meilleures saisons pour en profiter.');
      setHighlightsInput('Expérience authentique au Maroc\nAccompagnement par des guides certifiés\nRéservations sans frais cachés');
      setCtaText('Découvrir nos hébergements');
      setCtaLink('/destinations/marrakech');
      setSeoTitle('');
      setSeoDescription('');
      setStatus('published');
    }
  }, [pageToEdit, isOpen]);

  if (!isOpen) return null;

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!pageToEdit) {
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
    if (!title.trim()) {
      setError('Veuillez renseigner le titre de la page.');
      return;
    }
    if (!slug.trim()) {
      setError('Veuillez renseigner un slug URL pour la page.');
      return;
    }

    const highlights = highlightsInput
      .split('\n')
      .map(h => h.trim())
      .filter(Boolean);

    if (pageToEdit) {
      updateCustomPage(pageToEdit.id, {
        title: title.trim(),
        slug: slug.trim().toLowerCase(),
        subtitle: subtitle.trim(),
        category,
        coverImage: coverImage.trim(),
        content: content.trim(),
        highlights,
        ctaText: ctaText.trim() || undefined,
        ctaLink: ctaLink.trim() || undefined,
        seoTitle: seoTitle.trim() || undefined,
        seoDescription: seoDescription.trim() || undefined,
        status
      });
    } else {
      addCustomPage({
        title: title.trim(),
        slug: slug.trim().toLowerCase(),
        subtitle: subtitle.trim(),
        category,
        coverImage: coverImage.trim() || 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80',
        content: content.trim(),
        highlights,
        ctaText: ctaText.trim() || undefined,
        ctaLink: ctaLink.trim() || undefined,
        seoTitle: seoTitle.trim() || `${title.trim()} | DécouvreLeMaroc`,
        seoDescription: seoDescription.trim() || subtitle.trim(),
        author: 'Équipe Éditoriale DécouvreLeMaroc',
        status
      });
    }

    onClose();
  };

  return (
    <div className="admin-modal-backdrop" onClick={onClose}>
      <div className="city-modal" onClick={e => e.stopPropagation()}>
        <div className="admin-modal__header">
          <div className="admin-modal__title-box">
            <div className="admin-modal__icon">
              <FileText size={22} />
            </div>
            <div>
              <h3 className="admin-modal__title">
                {pageToEdit ? `Modifier la Page "${pageToEdit.title}"` : 'Créer une Nouvelle Page sur la Plateforme'}
              </h3>
              <p className="admin-modal__subtitle">
                Publiez un guide de voyage, un article culturel ou une page pratique accessible par lien.
              </p>
            </div>
          </div>
          <button type="button" className="admin-modal__close" onClick={onClose} aria-label="Fermer">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="city-modal__form">
          {error && <div className="admin-modal__error">{error}</div>}

          <div className="city-modal__grid">
            <div className="city-modal__inputs-col">
              {/* Title & Slug */}
              <div className="admin-form-grid">
                <div className="admin-form-group">
                  <label className="admin-form-label">Titre de la Page *</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    placeholder="ex. Guide des Plus Beaux Souks du Maroc"
                    value={title}
                    onChange={e => handleTitleChange(e.target.value)}
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Lien / URL Publique *</label>
                  <div className="city-slug-input-wrap">
                    <span className="city-slug-prefix">/p/</span>
                    <input
                      type="text"
                      className="city-slug-field"
                      placeholder="souks-maroc"
                      value={slug}
                      onChange={e => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Category & Cover Image */}
              <div className="admin-form-grid">
                <div className="admin-form-group">
                  <label className="admin-form-label">Catégorie de Page</label>
                  <select
                    className="admin-form-select"
                    value={category}
                    onChange={e => setCategory(e.target.value as PageCategory)}
                  >
                    <option value="guide">Guide Voyage & Découverte</option>
                    <option value="article">Article & Patrimoine Marocain</option>
                    <option value="info">Page Pratique & Conseils (FAQ, Formalités)</option>
                    <option value="promo">Offre Spéciale & Événement</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Image de Couverture (URL)</label>
                  <input
                    type="url"
                    className="admin-form-input"
                    placeholder="https://images.unsplash.com/..."
                    value={coverImage}
                    onChange={e => setCoverImage(e.target.value)}
                  />
                </div>
              </div>

              {/* Subtitle */}
              <div className="admin-form-group">
                <label className="admin-form-label">Sous-titre / Chapô d'introduction</label>
                <input
                  type="text"
                  className="admin-form-input"
                  placeholder="Une courte introduction pour capter l'attention des voyageurs..."
                  value={subtitle}
                  onChange={e => setSubtitle(e.target.value)}
                />
              </div>

              {/* Content Body */}
              <div className="admin-form-group">
                <label className="admin-form-label">Contenu Textuel de la Page</label>
                <textarea
                  className="admin-form-input city-textarea"
                  rows={6}
                  placeholder="Rédigez le texte de votre page..."
                  value={content}
                  onChange={e => setContent(e.target.value)}
                  required
                />
              </div>

              {/* Highlights (One per line) */}
              <div className="admin-form-group">
                <label className="admin-form-label">Points Clés & Incontournables (1 par ligne)</label>
                <textarea
                  className="admin-form-input"
                  rows={3}
                  placeholder="Entrez un point fort par ligne..."
                  value={highlightsInput}
                  onChange={e => setHighlightsInput(e.target.value)}
                />
              </div>

              {/* Call to action */}
              <div className="admin-form-grid">
                <div className="admin-form-group">
                  <label className="admin-form-label">Bouton d'Action (Texte)</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    placeholder="ex. Réserver une excursion"
                    value={ctaText}
                    onChange={e => setCtaText(e.target.value)}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Lien du Bouton</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    placeholder="ex. /destinations/marrakech ou https://..."
                    value={ctaLink}
                    onChange={e => setCtaLink(e.target.value)}
                  />
                </div>
              </div>

              {/* Status */}
              <div className="admin-form-group">
                <label className="admin-form-label">Statut de Publication</label>
                <select
                  className="admin-form-select"
                  value={status}
                  onChange={e => setStatus(e.target.value as 'published' | 'draft')}
                >
                  <option value="published">Publiée en ligne (Visible par tous)</option>
                  <option value="draft">Brouillon (Masquée du public)</option>
                </select>
              </div>
            </div>

            {/* Right Preview */}
            <div className="city-modal__preview-col">
              <div className="city-preview-label">
                <Eye size={14} className="text-amber-400" />
                <span>Aperçu de la Carte Page</span>
              </div>

              <div className="city-preview-card">
                <div
                  className="city-preview-card__img"
                  style={{
                    backgroundImage: `url(${coverImage || 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80'})`
                  }}
                >
                  <span className="city-preview-card__badge">
                    {category.toUpperCase()}
                  </span>
                </div>

                <div className="city-preview-card__content">
                  <h4 className="city-preview-card__title">
                    {title || 'Titre de la Page'}
                  </h4>
                  <p className="city-preview-card__desc">
                    {subtitle || 'Sous-titre et introduction de la page...'}
                  </p>
                  <div className="city-preview-card__footer">
                    <span className="text-xs text-primary font-bold">
                      /p/{slug || 'page'}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {status === 'published' ? 'Publiée' : 'Brouillon'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="city-preview-tip">
                <LinkIcon size={16} className="text-primary shrink-0" />
                <span>
                  Cette page sera immédiatement accessible à l'adresse <strong>/p/{slug || 'page'}</strong> avec l'en-tête immersif, le contenu riche, les points clés et le bouton d'appel à l'action.
                </span>
              </div>
            </div>
          </div>

          <div className="admin-modal__footer">
            <button type="button" className="admin-btn-secondary" onClick={onClose}>
              Annuler
            </button>
            <button type="submit" className="admin-btn-primary">
              {pageToEdit ? 'Enregistrer les Modifications' : 'Créer & Mettre en Ligne'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

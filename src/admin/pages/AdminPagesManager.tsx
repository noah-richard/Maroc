import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import type { CustomPage } from '../types/admin';
import { PageEditorModal } from '../components/PageEditorModal';
import {
  FileText,
  Plus,
  Search,
  ExternalLink,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';

import { Link } from 'react-router-dom';

export const AdminPagesManager: React.FC = () => {
  const { pages, deleteCustomPage, togglePagePublish } = useAdmin();

  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [selectedPageForEdit, setSelectedPageForEdit] = useState<CustomPage | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const filteredPages = pages.filter(p => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.slug.toLowerCase().includes(search.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="admin-users-page">
      {/* Page Header */}
      <div className="admin-page-header">
        <div className="flex items-center gap-3">
          <div className="admin-page-icon">
            <FileText size={22} />
          </div>
          <div>
            <h1 className="admin-page-title">Gestion des Pages du Site</h1>
            <p className="admin-page-subtitle">
              Créez et publiez de nouveaux guides touristiques, articles de blog et pages informatives accessibles par lien.
            </p>
          </div>
        </div>

        <div className="admin-page-header__actions">
          <button
            type="button"
            className="admin-btn-primary"
            onClick={() => {
              setSelectedPageForEdit(null);
              setIsEditorOpen(true);
            }}
          >
            <Plus size={16} />
            <span>Créer une Nouvelle Page</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="admin-filter-bar">
        <div className="admin-filter-search">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            className="admin-filter-input"
            placeholder="Rechercher par titre de page ou slug URL..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="admin-filter-selectors">
          <select
            className="admin-select"
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
          >
            <option value="all">Toutes les catégories ({pages.length})</option>
            <option value="guide">Guides de Voyage</option>
            <option value="article">Articles & Culture</option>
            <option value="info">Pages Pratiques & FAQ</option>
            <option value="promo">Offres Spéciales</option>
          </select>
        </div>
      </div>

      {/* Pages Table */}
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Page & Titre</th>
              <th>Lien URL (Slug)</th>
              <th>Catégorie</th>
              <th>Auteur</th>
              <th>Lectures</th>
              <th>Statut</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPages.map(page => (
              <tr key={page.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <img
                      src={page.coverImage}
                      alt={page.title}
                      className="w-12 h-9 rounded-lg object-cover border border-amber-900/10 shadow-sm"
                    />
                    <div>
                      <div className="font-bold text-sm" style={{ color: 'var(--admin-text-heading)' }}>
                        {page.title}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 max-w-sm mt-0.5">
                        {page.subtitle}
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <Link
                    to={`/p/${page.slug}`}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline"
                  >
                    <span>/p/{page.slug}</span>
                    <ExternalLink size={12} />
                  </Link>
                </td>

                <td>
                  <span className="admin-chip capitalize">
                    {page.category}
                  </span>
                </td>

                <td>
                  <span className="text-xs font-medium text-slate-600">{page.author}</span>
                </td>

                <td>
                  <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: 'var(--admin-text-heading)' }}>
                    <Eye size={12} className="text-slate-400" />
                    <span>{page.views.toLocaleString('fr-FR')}</span>
                  </div>
                </td>

                <td>
                  <button
                    type="button"
                    className={`text-xs px-2.5 py-1 rounded-full font-bold transition-all ${
                      page.status === 'published'
                        ? 'bg-emerald-500/15 text-emerald-700 border border-emerald-500/30'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                    onClick={() => togglePagePublish(page.id)}
                  >
                    {page.status === 'published' ? 'Publiée' : 'Brouillon'}
                  </button>
                </td>


                <td className="text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <Link
                      to={`/p/${page.slug}`}
                      target="_blank"
                      className="admin-action-icon-btn"
                      title="Consulter la page publique"
                    >
                      <ExternalLink size={15} />
                    </Link>

                    <button
                      type="button"
                      className="admin-action-icon-btn"
                      onClick={() => {
                        setSelectedPageForEdit(page);
                        setIsEditorOpen(true);
                      }}
                      title="Modifier la page"
                    >
                      <Edit size={15} />
                    </button>

                    <button
                      type="button"
                      className="admin-action-icon-btn text-red-400 hover:text-red-300"
                      onClick={() => {
                        if (window.confirm(`Supprimer définitivement la page "${page.title}" ?`)) {
                          deleteCustomPage(page.id);
                        }
                      }}
                      title="Supprimer la page"
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

      {/* Page Editor Modal */}
      <PageEditorModal
        isOpen={isEditorOpen}
        onClose={() => {
          setIsEditorOpen(false);
          setSelectedPageForEdit(null);
        }}
        pageToEdit={selectedPageForEdit}
      />
    </div>
  );
};

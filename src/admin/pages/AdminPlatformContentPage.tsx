import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import {
  Sliders,
  Sparkles,
  Save,
  MessageCircle,
  Phone,
  Mail,
  Award,
  Bell,
  Eye,
  CheckCircle2,
  Globe
} from 'lucide-react';

export const AdminPlatformContentPage: React.FC = () => {
  const { platformConfig, updatePlatformConfig } = useAdmin();

  // Local form state initialized from context
  const [formData, setFormData] = useState({ ...platformConfig });
  const [activeTab, setActiveTab] = useState<'hero' | 'announcement' | 'club' | 'contact'>('hero');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setSaveSuccess(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updatePlatformConfig(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3500);
  };

  return (
    <div className="admin-users-page">
      {/* Page Header */}
      <div className="admin-page-header">
        <div className="flex items-center gap-3">
          <div className="admin-page-icon">
            <Sliders size={22} />
          </div>
          <div>
            <h1 className="admin-page-title">Contenu & Textes de la Plateforme</h1>
            <p className="admin-page-subtitle">
              Personnalisez les messages d'accueil, le bandeau d'alerte, les privilèges du Club et les coordonnées de la conciergerie.
            </p>
          </div>
        </div>

        <div className="admin-page-header__actions">
          <button
            type="button"
            className="admin-btn-primary"
            onClick={handleSave}
            id="btn-save-platform-content"
          >
            <Save size={16} />
            <span>Enregistrer les Modifications</span>
          </button>
        </div>
      </div>

      {saveSuccess && (
        <div className="p-4 mb-6 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center gap-3 text-emerald-800">
          <CheckCircle2 size={20} className="shrink-0 text-emerald-600" />
          <span className="text-sm font-semibold">
            Les textes et paramètres de la plateforme ont été mis à jour avec succès et sont appliqués en temps réel !
          </span>
        </div>
      )}

      {/* Internal Tabs */}
      <div className="flex border-b border-amber-900/10 mb-6 gap-2">
        <button
          type="button"
          className={`px-4 py-2.5 text-xs font-bold rounded-t-lg transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'hero'
              ? 'border-primary text-primary bg-primary/10'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
          onClick={() => setActiveTab('hero')}
        >
          <Sparkles size={14} />
          <span>Page d'Accueil & Hero</span>
        </button>

        <button
          type="button"
          className={`px-4 py-2.5 text-xs font-bold rounded-t-lg transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'announcement'
              ? 'border-primary text-primary bg-primary/10'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
          onClick={() => setActiveTab('announcement')}
        >
          <Bell size={14} />
          <span>Bandeau d'Annonce & Alertes</span>
        </button>

        <button
          type="button"
          className={`px-4 py-2.5 text-xs font-bold rounded-t-lg transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'club'
              ? 'border-primary text-primary bg-primary/10'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
          onClick={() => setActiveTab('club')}
        >
          <Award size={14} />
          <span>Le Club DécouvreLeMaroc</span>
        </button>

        <button
          type="button"
          className={`px-4 py-2.5 text-xs font-bold rounded-t-lg transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'contact'
              ? 'border-primary text-primary bg-primary/10'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
          onClick={() => setActiveTab('contact')}
        >
          <MessageCircle size={14} />
          <span>Conciergerie & Contacts</span>
        </button>
      </div>

      {/* Tab 1: Hero & Accueil */}
      {activeTab === 'hero' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="admin-cms-card p-6 space-y-5">
              <h3 className="text-sm font-bold flex items-center gap-2" style={{ color: 'var(--admin-text-heading)' }}>
                <Globe size={16} className="text-primary" />
                <span>Textes du Hero Principal (Haut de page d'accueil)</span>
              </h3>

              <div className="admin-form-group">
                <label className="admin-form-label">Titre d'Accroche Principal (Hero Title)</label>
                <input
                  type="text"
                  className="admin-form-input"
                  value={formData.heroTitle}
                  onChange={e => handleChange('heroTitle', e.target.value)}
                />
                <span className="text-[11px] text-slate-500 mt-1">
                  Ce titre accueille les visiteurs dès leur arrivée sur la plateforme.
                </span>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Sous-titre explicatif (Hero Subtitle)</label>
                <textarea
                  rows={2}
                  className="admin-form-input"
                  value={formData.heroSubtitle}
                  onChange={e => handleChange('heroSubtitle', e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="admin-form-group">
                  <label className="admin-form-label">Citation Océane (Atlantique)</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.heroOceanQuote}
                    onChange={e => handleChange('heroOceanQuote', e.target.value)}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Citation Montagne (Haut-Atlas)</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.heroAtlasQuote}
                    onChange={e => handleChange('heroAtlasQuote', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="admin-form-group">
                  <label className="admin-form-label">Signature Institutionnelle</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.heroSignature}
                    onChange={e => handleChange('heroSignature', e.target.value)}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Compteur de Visiteurs en Ligne (Temps Réel)</label>
                  <input
                    type="number"
                    className="admin-form-input"
                    value={formData.liveVisitorsCount}
                    onChange={e => handleChange('liveVisitorsCount', parseInt(e.target.value, 10) || 100)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Live Preview Box */}
          <div className="space-y-4">
            <div className="admin-cms-card p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 mb-4">
                <Eye size={15} />
                <span>Aperçu en Direct du Hero</span>
              </div>

              <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-center space-y-3 shadow-inner">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10">
                  {formData.heroMicroSignature}
                </span>

                <h4 className="font-serif text-xl font-bold leading-tight" style={{ color: 'var(--admin-text-heading)' }}>
                  {formData.heroTitle}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {formData.heroSubtitle}
                </p>

                <div className="pt-3 border-t border-amber-900/10 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                    {formData.liveVisitorsCount} voyageurs en direct
                  </span>
                  <span className="italic">{formData.heroSignature}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Bandeau d'Annonce */}
      {activeTab === 'announcement' && (
        <div className="max-w-3xl space-y-4">
          <div className="admin-cms-card p-6 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-amber-900/10">
              <div>
                <h3 className="text-sm font-bold flex items-center gap-2" style={{ color: 'var(--admin-text-heading)' }}>
                  <Bell size={16} className="text-amber-500" />
                  <span>Bandeau d'Information Général (Top Header)</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Affichez un message d'alerte, une promotion saisonnière ou une nouvelle importante tout en haut du site.
                </p>
              </div>

              <label className="admin-toggle-label">
                <input
                  type="checkbox"
                  checked={formData.announcementActive}
                  onChange={e => handleChange('announcementActive', e.target.checked)}
                  className="admin-toggle-input"
                />
                <span className="admin-toggle-slider" />
                <span className="admin-toggle-text">
                  <strong>{formData.announcementActive ? 'Actif' : 'Désactivé'}</strong>
                </span>
              </label>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Texte de l'Annonce</label>
              <input
                type="text"
                className="admin-form-input"
                value={formData.announcementText}
                onChange={e => handleChange('announcementText', e.target.value)}
                placeholder="ex. Saison Riad 2026 : -15% sur les séjours à Marrakech et Fès..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="admin-form-group">
                <label className="admin-form-label">Libellé du Bouton (CTA)</label>
                <input
                  type="text"
                  className="admin-form-input"
                  value={formData.announcementCtaText}
                  onChange={e => handleChange('announcementCtaText', e.target.value)}
                  placeholder="ex. En profiter"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Lien Cible (URL ou page interne)</label>
                <input
                  type="text"
                  className="admin-form-input"
                  value={formData.announcementCtaLink}
                  onChange={e => handleChange('announcementCtaLink', e.target.value)}
                  placeholder="ex. /club ou /p/guide-desert-maroc"
                />
              </div>
            </div>

            {/* Live Preview */}
            <div className="mt-4 pt-4 border-t border-amber-900/10">
              <div className="text-xs font-bold text-slate-500 mb-2">Aperçu du bandeau sur le site :</div>
              <div
                className={`p-3.5 rounded-xl flex items-center justify-between text-xs transition-all ${
                  formData.announcementActive
                    ? 'bg-gradient-to-r from-amber-600/15 via-primary/10 to-amber-700/15 border border-amber-500/30 text-amber-900 font-medium'
                    : 'bg-slate-100 border border-slate-200 text-slate-400 opacity-60'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-amber-600 shrink-0" />
                  <span>{formData.announcementText}</span>
                </div>
                {formData.announcementCtaText && (
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-800 font-bold text-[11px]">
                    {formData.announcementCtaText} →
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Le Club DécouvreLeMaroc */}
      {activeTab === 'club' && (
        <div className="max-w-3xl space-y-4">
          <div className="admin-cms-card p-6 space-y-5">
            <h3 className="text-sm font-bold flex items-center gap-2" style={{ color: 'var(--admin-text-heading)' }}>
              <Award size={16} className="text-amber-500" />
              <span>Programme Fidélité & Privilèges "Le Club"</span>
            </h3>

            <div className="admin-form-group">
              <label className="admin-form-label">Titre de la Section Club</label>
              <input
                type="text"
                className="admin-form-input"
                value={formData.clubTitle}
                onChange={e => handleChange('clubTitle', e.target.value)}
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Sous-titre et Proposition de Valeur</label>
              <textarea
                rows={2}
                className="admin-form-input"
                value={formData.clubSubtitle}
                onChange={e => handleChange('clubSubtitle', e.target.value)}
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Pourcentage de Remise Membre Club (%)</label>
              <input
                type="number"
                className="admin-form-input max-w-xs"
                value={formData.clubDiscountPercent}
                onChange={e => handleChange('clubDiscountPercent', parseInt(e.target.value, 10) || 15)}
              />
            </div>

            <div className="space-y-3 pt-3 border-t border-amber-900/10">
              <div className="text-xs font-bold text-slate-700">Avantages Actifs du Club :</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {formData.clubPerks.map((perk, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-900/10">
                    <span className="text-[10px] font-bold text-primary px-2 py-0.5 rounded-full bg-primary/10">
                      {perk.tag}
                    </span>
                    <h5 className="font-bold text-xs mt-2" style={{ color: 'var(--admin-text-heading)' }}>{perk.title}</h5>
                    <p className="text-[11px] text-slate-500 mt-1">{perk.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Conciergerie & Contacts */}
      {activeTab === 'contact' && (
        <div className="max-w-3xl space-y-4">
          <div className="admin-cms-card p-6 space-y-5">
            <h3 className="text-sm font-bold flex items-center gap-2" style={{ color: 'var(--admin-text-heading)' }}>
              <MessageCircle size={16} className="text-emerald-600" />
              <span>Coordonnées Conciergerie & Support VIP</span>
            </h3>
            <p className="text-xs text-slate-500">
              Ces informations sont affichées sur les fiches des villes, le widget d'aide et le pied de page.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="admin-form-group">
                <label className="admin-form-label flex items-center gap-1.5">
                  <MessageCircle size={13} className="text-emerald-600" />
                  <span>Numéro WhatsApp Officiel</span>
                </label>
                <input
                  type="text"
                  className="admin-form-input"
                  value={formData.supportWhatsapp}
                  onChange={e => handleChange('supportWhatsapp', e.target.value)}
                  placeholder="+212 600 00 00 00"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label flex items-center gap-1.5">
                  <Phone size={13} className="text-primary" />
                  <span>Téléphone Ligne Directe</span>
                </label>
                <input
                  type="text"
                  className="admin-form-input"
                  value={formData.supportPhone}
                  onChange={e => handleChange('supportPhone', e.target.value)}
                  placeholder="+212 522 00 00 00"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="admin-form-group">
                <label className="admin-form-label flex items-center gap-1.5">
                  <Mail size={13} className="text-amber-600" />
                  <span>Adresse Email Support</span>
                </label>
                <input
                  type="email"
                  className="admin-form-input"
                  value={formData.supportEmail}
                  onChange={e => handleChange('supportEmail', e.target.value)}
                  placeholder="concierge@decouvrelemaroc.com"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Conseiller Attitré (Signature)</label>
                <input
                  type="text"
                  className="admin-form-input"
                  value={formData.supportAdvisorName}
                  onChange={e => handleChange('supportAdvisorName', e.target.value)}
                  placeholder="Mehdi Alaoui"
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Plage Horaire d'Assistance</label>
              <input
                type="text"
                className="admin-form-input"
                value={formData.supportHours}
                onChange={e => handleChange('supportHours', e.target.value)}
                placeholder="7j/7 de 8h00 à 22h00 (Heure de Casablanca)"
              />
            </div>
          </div>
        </div>
      )}

      {/* Floating Save Bar */}
      <div className="mt-8 admin-cms-card p-4 flex items-center justify-between">
        <div className="text-xs text-slate-500">
          Les modifications apportées prennent effet immédiatement sur l'ensemble de la plateforme.
        </div>
        <button
          type="button"
          className="admin-btn-primary"
          onClick={handleSave}
        >
          <Save size={16} />
          <span>Enregistrer les Textes</span>
        </button>
      </div>
    </div>
  );
};

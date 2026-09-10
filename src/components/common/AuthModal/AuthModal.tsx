import React, { useState } from 'react';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';
import './AuthModal.css';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'login' | 'register';
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode = 'login',
  onClose
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="auth-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="auth-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
      >
        <button
          type="button"
          className="auth-modal__close"
          onClick={onClose}
          aria-label="Fermer la fenêtre"
        >
          <Icon name="x" size={20} />
        </button>

        <div className="auth-modal__header">
          <div className="auth-modal__logo-badge">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 3L3 31H33L18 3Z" fill="#C8503D" />
              <path d="M18 11L9 31H27L18 11Z" fill="#FAFAF8" />
              <path d="M18 18C15.8 18 14 21 14 25.5C14 29 15.8 31 18 31C20.2 31 22 29 22 25.5C22 21 20.2 18 18 18Z" fill="#0F2937" />
            </svg>
          </div>
          <h3 id="auth-modal-title" className="auth-modal__title">
            {mode === 'login' ? 'Bon retour parmi nous' : 'Rejoignez DecouvreLeMaroc'}
          </h3>
          <p className="auth-modal__subtitle">
            {mode === 'login'
              ? 'Connectez-vous pour retrouver vos réservations et favoris.'
              : 'Créez votre compte en quelques secondes pour organiser votre voyage.'}
          </p>
        </div>

        {submitted ? (
          <div className="auth-modal__success" role="status">
            <Icon name="check" size={40} />
            <p className="auth-modal__success-msg">
              {mode === 'login' ? 'Connexion réussie ! Redirection...' : 'Compte créé avec succès ! Bienvenue au Maroc.'}
            </p>
          </div>
        ) : (
          <form className="auth-modal__form" onSubmit={handleSubmit}>
            {mode === 'register' && (
              <div className="auth-modal__field">
                <label className="auth-modal__label">Nom complet</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Yasmine Benali"
                  className="auth-modal__input"
                />
              </div>
            )}

            <div className="auth-modal__field">
              <label className="auth-modal__label">Adresse email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre.email@exemple.com"
                className="auth-modal__input"
              />
            </div>

            <div className="auth-modal__field">
              <label className="auth-modal__label">Mot de passe</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="auth-modal__input"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="auth-modal__submit"
            >
              {mode === 'login' ? 'Se connecter' : 'Créer mon compte'}
            </Button>

            <div className="auth-modal__switch">
              {mode === 'login' ? (
                <p>
                  Pas encore de compte ?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('register')}
                    className="auth-modal__switch-btn"
                  >
                    S'inscrire gratuitement
                  </button>
                </p>
              ) : (
                <p>
                  Déjà un compte ?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className="auth-modal__switch-btn"
                  >
                    Se connecter
                  </button>
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

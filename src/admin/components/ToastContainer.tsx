import React from 'react';
import { useAdmin } from '../context/AdminContext';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react';
import './ToastContainer.css';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useAdmin();

  if (toasts.length === 0) return null;

  return (
    <div className="admin-toast-container" aria-live="polite">
      {toasts.map(toast => {
        const getIcon = () => {
          switch (toast.type) {
            case 'success':
              return <CheckCircle2 className="toast-icon toast-icon--success" size={20} />;
            case 'warning':
              return <AlertTriangle className="toast-icon toast-icon--warning" size={20} />;
            case 'error':
              return <AlertCircle className="toast-icon toast-icon--error" size={20} />;
            default:
              return <Info className="toast-icon toast-icon--info" size={20} />;
          }
        };

        return (
          <div key={toast.id} className={`admin-toast admin-toast--${toast.type}`}>
            <div className="admin-toast__icon-wrapper">{getIcon()}</div>
            <div className="admin-toast__content">
              <h5 className="admin-toast__title">{toast.title}</h5>
              <p className="admin-toast__message">{toast.message}</p>
            </div>
            <button
              type="button"
              className="admin-toast__close"
              onClick={() => removeToast(toast.id)}
              aria-label="Fermer la notification"
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

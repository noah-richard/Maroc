import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../common/Icon/Icon';
import './Breadcrumb.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav className={`breadcrumb ${className}`} aria-label="Fil d'Ariane">
      <ol className="breadcrumb__list">
        <li className="breadcrumb__item">
          <Link to="/" className="breadcrumb__link breadcrumb__link--home" aria-label="Accueil DecouvreLeMaroc">
            <Icon name="home" size={14} />
            <span>Accueil</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li className="breadcrumb__separator" aria-hidden="true">
                <Icon name="chevron-right" size={12} />
              </li>
              <li className="breadcrumb__item" aria-current={item.isCurrent || isLast ? 'page' : undefined}>
                {item.href && !isLast ? (
                  <Link to={item.href} className="breadcrumb__link">
                    {item.label}
                  </Link>
                ) : (
                  <span className="breadcrumb__current">{item.label}</span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

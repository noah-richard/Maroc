import React from 'react';
import { Icon } from '../Icon/Icon';
import './SectionHeader.css';

interface SectionHeaderProps {
  label?: string;
  title: string;
  linkText?: string;
  linkHref?: string;
  onLinkClick?: () => void;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  linkText,
  linkHref = '#',
  onLinkClick,
  className = ''
}) => {
  return (
    <div className={`section-header ${className}`}>
      <div className="section-header__content">
        {label && <span className="section-header__label">{label}</span>}
        <h2 className="section-header__title">{title}</h2>
      </div>
      {linkText && (
        <a
          href={linkHref}
          onClick={onLinkClick}
          className="section-header__link"
          aria-label={`${linkText} - ${title}`}
        >
          <span>{linkText}</span>
          <Icon name="arrow-right" size={16} />
        </a>
      )}
    </div>
  );
};

import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './StatCard.css';

interface StatCardProps {
  title: string;
  value: string | number;
  delta?: number;
  deltaLabel?: string;
  icon: React.ReactNode;
  accentColor?: string;
  badge?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  delta,
  deltaLabel = 'vs mois précédent',
  icon,
  accentColor = '#C8503D',
  badge
}) => {
  const isPositive = delta !== undefined && delta >= 0;

  return (
    <div className="admin-stat-card" style={{ '--card-accent': accentColor } as React.CSSProperties}>
      <div className="admin-stat-card__top">
        <span className="admin-stat-card__title">{title}</span>
        <div className="admin-stat-card__icon" style={{ backgroundColor: `${accentColor}18`, color: accentColor }}>
          {icon}
        </div>
      </div>

      <div className="admin-stat-card__value-box">
        <span className="admin-stat-card__value">{value}</span>
        {badge && <span className="admin-stat-card__pill">{badge}</span>}
      </div>

      {delta !== undefined && (
        <div className="admin-stat-card__footer">
          <span
            className={`admin-stat-card__delta ${
              isPositive ? 'admin-stat-card__delta--positive' : 'admin-stat-card__delta--negative'
            }`}
          >
            {isPositive ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
            <span>{isPositive ? `+${delta}%` : `${delta}%`}</span>
          </span>
          <span className="admin-stat-card__delta-label">{deltaLabel}</span>
        </div>
      )}
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Icon } from '../common/Icon/Icon';
import type { IconName } from '../common/Icon/Icon';
import './ExperienceSection.css';

interface StatCounterProps {
  icon: IconName;
  value: string;
  label: string;
  targetNumber?: number;
  prefix?: string;
  isInView?: boolean;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  icon,
  value,
  label,
  targetNumber,
  prefix = '',
  isInView = false
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || targetNumber === undefined) return;

    const duration = 1600; // ms
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeProgress * targetNumber);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(targetNumber);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, targetNumber]);

  const formattedValue = targetNumber !== undefined
    ? `${prefix}${count.toLocaleString('fr-FR')}`
    : value;

  return (
    <div className="stat-counter">
      <div className="stat-counter__icon" aria-hidden="true">
        <Icon name={icon} size={24} />
      </div>
      <div className="stat-counter__data">
        <span className="stat-counter__value">{formattedValue}</span>
        <span className="stat-counter__label">{label}</span>
      </div>
    </div>
  );
};

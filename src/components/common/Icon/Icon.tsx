import React from 'react';
import {
  MapPin,
  Calendar,
  Users,
  Search,
  Home,
  Car,
  Utensils,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Globe,
  User,
  Menu,
  X,
  Star,
  CheckCircle2,
  AlertCircle,
  Sun,
  Image as ImageIcon,
  Sparkles,
  ShieldCheck,
  Phone,
  Heart
} from 'lucide-react';

export type IconName =
  | 'map-pin'
  | 'calendar'
  | 'users'
  | 'search'
  | 'home'
  | 'car'
  | 'utensils'
  | 'arrow-right'
  | 'chevron-down'
  | 'chevron-right'
  | 'globe'
  | 'user'
  | 'menu'
  | 'x'
  | 'star'
  | 'check'
  | 'alert'
  | 'sun'
  | 'image'
  | 'sparkles'
  | 'shield-check'
  | 'phone'
  | 'heart';

interface IconProps {
  name: IconName;
  size?: number | string;
  color?: string;
  className?: string;
  'aria-hidden'?: boolean;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 20,
  color = 'currentColor',
  className = '',
  'aria-hidden': ariaHidden = true
}) => {
  const iconProps = {
    size,
    color,
    className: `app-icon ${className}`.trim(),
    'aria-hidden': ariaHidden,
    style: { display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }
  };

  switch (name) {
    case 'map-pin':
      return <MapPin {...iconProps} />;
    case 'calendar':
      return <Calendar {...iconProps} />;
    case 'users':
      return <Users {...iconProps} />;
    case 'search':
      return <Search {...iconProps} />;
    case 'home':
      return <Home {...iconProps} />;
    case 'car':
      return <Car {...iconProps} />;
    case 'utensils':
      return <Utensils {...iconProps} />;
    case 'arrow-right':
      return <ArrowRight {...iconProps} />;
    case 'chevron-down':
      return <ChevronDown {...iconProps} />;
    case 'chevron-right':
      return <ChevronRight {...iconProps} />;
    case 'globe':
      return <Globe {...iconProps} />;
    case 'user':
      return <User {...iconProps} />;
    case 'menu':
      return <Menu {...iconProps} />;
    case 'x':
      return <X {...iconProps} />;
    case 'star':
      return <Star {...iconProps} />;
    case 'check':
      return <CheckCircle2 {...iconProps} />;
    case 'alert':
      return <AlertCircle {...iconProps} />;
    case 'sun':
      return <Sun {...iconProps} />;
    case 'image':
      return <ImageIcon {...iconProps} />;
    case 'sparkles':
      return <Sparkles {...iconProps} />;
    case 'shield-check':
      return <ShieldCheck {...iconProps} />;
    case 'phone':
      return <Phone {...iconProps} />;
    case 'heart':
      return <Heart {...iconProps} />;
    default:
      return null;
  }
};

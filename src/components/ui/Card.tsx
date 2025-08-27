import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'rustic' | 'elevated';
  hover?: boolean;
  animated?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  hover = true,
  animated = false,
}) => {
  const baseClasses = 'rounded-xl overflow-hidden transition-all duration-300';
  
  const variants = {
    default: 'bg-white shadow-lg border border-stone-200',
    rustic: 'bg-gradient-to-br from-stone-50 to-stone-100 shadow-lg border-2 border-stone-300 bg-wood-texture',
    elevated: 'bg-white shadow-xl border border-stone-200',
  };
  
  const hoverClasses = hover ? 'hover-lift card-interactive' : '';
  const animatedClasses = animated ? 'scroll-reveal' : '';
  
  return (
    <div
      className={cn(
        baseClasses,
        variants[variant],
        hoverClasses,
        animatedClasses,
        'touch-friendly',
        className
      )}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {children}
    </div>
  );
};

export default Card;
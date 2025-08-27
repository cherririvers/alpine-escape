import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { cn } from '../../utils/cn';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'rustic' | 'elevated';
  hover?: boolean;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in';
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  variant = 'default',
  hover = true,
  animation = 'fade-up',
  delay = 0,
}) => {
  const { ref, isVisible } = useScrollAnimation();

  const baseClasses = 'rounded-xl overflow-hidden transition-all duration-300';
  
  const variants = {
    default: 'bg-white shadow-lg border border-stone-200',
    rustic: 'bg-gradient-to-br from-stone-50 to-stone-100 shadow-lg border-2 border-stone-300 bg-wood-texture',
    elevated: 'bg-white shadow-xl border border-stone-200',
  };
  
  const hoverClasses = hover ? 'hover-lift card-interactive' : '';
  
  const animationClasses = {
    'fade-up': 'scroll-reveal',
    'fade-left': 'scroll-reveal-left',
    'fade-right': 'scroll-reveal-right',
    'scale-in': 'scroll-reveal',
  };

  return (
    <div
      ref={ref}
      className={cn(
        baseClasses,
        variants[variant],
        hoverClasses,
        animationClasses[animation],
        isVisible && 'revealed',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
import React from 'react';
import { cn } from '../../utils/cn';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  loading = false,
  icon,
  disabled,
  ariaLabel,
  ariaDescribedBy,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed btn-interactive focus-ring';
  
  const variants = {
    primary: 'bg-forest-700 hover:bg-forest-800 text-white shadow-md hover:shadow-lg focus:ring-forest-500',
    secondary: 'bg-amber-500 hover:bg-amber-600 text-white shadow-md hover:shadow-lg focus:ring-amber-500',
    outline: 'border-2 border-forest-700 text-forest-700 hover:bg-forest-700 hover:text-white focus:ring-forest-500',
    ghost: 'text-forest-700 hover:bg-forest-50 focus:ring-forest-500',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm min-h-[36px]',
    md: 'px-6 py-3 text-base min-h-[44px]',
    lg: 'px-8 py-4 text-lg min-h-[48px]',
  };
  
  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        loading && 'cursor-wait',
        'touch-target',
        className
      )}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-busy={loading}
      style={{ WebkitTapHighlightColor: 'transparent' }}
      {...props}
    >
      {loading ? (
        <>
          <div className="loading-spinner w-4 h-4 mr-2" aria-hidden="true" />
          <span className="loading-dots">Loading</span>
          <span className="sr-only">Loading, please wait</span>
        </>
      ) : (
        <>
          {icon && <span className="mr-2 interactive-icon" aria-hidden="true">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default AccessibleButton;
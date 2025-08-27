import React from 'react';
import { cn } from '../../utils/cn';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  icon?: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  loading = false,
  icon,
  disabled,
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
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        loading && 'cursor-wait',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <div className="loading-spinner w-4 h-4 mr-2" />
          <span className="loading-dots">Loading</span>
        </>
      ) : (
        <>
          {icon && <span className="mr-2 interactive-icon">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default AnimatedButton;
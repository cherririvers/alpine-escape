import React, { useEffect, useState } from 'react';
import { cn } from '../../utils/cn';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  animated?: boolean;
  showValue?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  className,
  animated = true,
  showValue = false,
  color = 'primary'
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const percentage = Math.min((value / max) * 100, 100);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(percentage);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayValue(percentage);
    }
  }, [percentage, animated]);

  const colors = {
    primary: 'bg-gradient-to-r from-forest-700 to-forest-600',
    secondary: 'bg-gradient-to-r from-amber-500 to-amber-400',
    success: 'bg-gradient-to-r from-green-600 to-green-500',
    warning: 'bg-gradient-to-r from-yellow-500 to-yellow-400',
    error: 'bg-gradient-to-r from-red-600 to-red-500'
  };

  return (
    <div className={cn('progress-bar h-3', className)}>
      <div
        className={cn('progress-fill h-full transition-all duration-1000 ease-out', colors[color])}
        style={{ width: `${displayValue}%` }}
      />
      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
          {Math.round(displayValue)}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
import React from 'react';

const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-forest-700 text-white px-4 py-2 rounded-lg z-50 focus:ring-2 focus:ring-amber-500"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
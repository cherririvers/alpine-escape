import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { measurePerformance, lazyLoadImages, preloadCriticalResources } from './utils/seo';
import { optimizeImages, addResourceHints } from './utils/performance';

// Initialize performance monitoring
measurePerformance();
preloadCriticalResources();
addResourceHints();

// Initialize optimizations after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  lazyLoadImages();
  optimizeImages();
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

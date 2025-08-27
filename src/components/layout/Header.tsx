import React, { useState, useEffect } from 'react';
import { Mountain, Menu, X, Phone, Mail } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms & Suites', href: '#rooms' },
    { name: 'Activities', href: '#activities' },
    { name: 'Dining', href: '#dining' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-forest-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="container-max flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>stay@alpineescape.in</span>
            </div>
          </div>
          <div className="text-amber-300">
            Best Rates Guaranteed | Free Cancellation
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
        style={{ marginTop: isScrolled ? '0' : '40px' }}
        role="banner"
      >
        <nav className="container-max px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3" role="img" aria-label="Alpine Escape Logo">
              <Mountain className={`w-8 h-8 lg:w-10 lg:h-10 ${
                isScrolled ? 'text-forest-700' : 'text-white'
              }`} />
              <div>
                <h1 className={`text-xl lg:text-2xl font-serif font-bold ${
                  isScrolled ? 'text-forest-900' : 'text-white'
                }`}>
                  Alpine Escape
                </h1>
                <p className={`text-xs lg:text-sm ${
                  isScrolled ? 'text-stone-600' : 'text-stone-200'
                }`}>
                  Mountain Adventure Lodge
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`font-medium transition-colors duration-300 hover:text-amber-500 ${
                    isScrolled ? 'text-stone-700' : 'text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Button
                variant="secondary"
                size="md"
                onClick={() => handleNavClick('#booking')}
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-3 rounded-md transition-colors duration-300 touch-target ${
                isScrolled ? 'text-stone-700 hover:bg-stone-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label={isMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden bg-white border-t border-stone-200 shadow-lg mobile-nav-content"
            role="menu"
            aria-labelledby="mobile-menu-button"
          >
            <div className="px-4 py-6 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left py-3 px-4 text-stone-700 hover:text-amber-600 hover:bg-stone-50 font-medium transition-colors duration-300 rounded-lg touch-target"
                  role="menuitem"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-6 border-t border-stone-200">
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full btn-mobile"
                  onClick={() => handleNavClick('#booking')}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Mobile menu backdrop */}
        {isMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </header>
    </>
  );
};

export default Header;
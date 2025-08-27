import React from 'react';
import { Mountain, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-forest-900 text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <Mountain className="w-8 h-8 text-amber-400" />
                <div>
                  <h3 className="text-xl font-serif font-bold">Alpine Escape</h3>
                  <p className="text-sm text-stone-300">Mountain Adventure Lodge</p>
                </div>
              </div>
              <p className="text-stone-300 mb-6 leading-relaxed">
                Experience the ultimate mountain adventure at our rustic lodge nestled in the heart of India's most beautiful peaks. Where adventure meets comfort.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-amber-400">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'Rooms & Suites', href: '#rooms' },
                  { name: 'Activities', href: '#activities' },
                  { name: 'Dining', href: '#dining' },
                  { name: 'Gallery', href: '#gallery' },
                  { name: 'About Us', href: '#about' },
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-stone-300 hover:text-amber-400 transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-amber-400">Our Services</h4>
              <ul className="space-y-3 text-stone-300">
                <li>Mountain Trekking</li>
                <li>Skiing & Snowboarding</li>
                <li>Adventure Packages</li>
                <li>Guided Tours</li>
                <li>Equipment Rental</li>
                <li>Photography Workshops</li>
                <li>Campfire Experiences</li>
                <li>Corporate Retreats</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-amber-400">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div className="text-stone-300">
                    <p>Alpine Escape Lodge</p>
                    <p>Manali-Leh Highway</p>
                    <p>Himachal Pradesh 175131</p>
                    <p>India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <div className="text-stone-300">
                    <p>+91 98765 43210</p>
                    <p>+91 98765 43211</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <div className="text-stone-300">
                    <p>stay@alpineescape.in</p>
                    <p>info@alpineescape.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-forest-800">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-stone-400 text-sm">
              © 2025 Alpine Escape Lodge. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors duration-300">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
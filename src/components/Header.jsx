import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const header = {
    logo: '/images/larson-law-logo.png',
    text: 'Larson Law',
    phone: '(801) 601-8323'
  };

  const navigationLinks = [
    { text: 'Home', href: '/' },
    { text: 'Team', href: '/team' },
    { text: 'Practice Areas', href: '/practice-areas' },
    { text: 'Resources', href: '/resources' },
    { text: 'Events', href: '/events' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-brand-2 text-white sticky top-0 z-50 w-full shadow-lg">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Firm Name */}
          <div className="flex items-center">
            {header.logo && (
              <Link to="/" className="mr-4">
                <img src={header.logo} alt="Larson Law Logo" className="h-10" />
              </Link>
            )}
            <Link to="/" className="text-2xl font-bold font-heading hover:text-gray-200 transition-colors">
              {header.text}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 lg:space-x-8">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-200 hover:text-white font-medium transition-colors duration-300 relative group"
                  >
                    {link.text}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Phone Number and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={`tel:${header.phone.replace(/\D/g, '')}`}
              className="text-gray-200 hover:text-white font-medium transition-colors"
            >
              {header.phone}
            </a>
            <Link
              to="/contact"
              className="bg-brand-1 hover:bg-brand-3 text-white px-4 py-2 rounded-md font-medium transition-colors duration-300"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-brand-1 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-brand-1 pt-4 animate-in slide-in-from-top">
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="block text-gray-200 hover:text-white font-medium py-2 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a 
                  href={`tel:${header.phone.replace(/\D/g, '')}`}
                  className="block text-gray-200 hover:text-white font-medium py-2"
                >
                  {header.phone}
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block bg-brand-1 hover:bg-brand-3 text-white px-4 py-2 rounded-md font-medium transition-colors duration-300 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Free Consultation
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
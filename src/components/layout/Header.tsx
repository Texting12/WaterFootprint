import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Droplet, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <Droplet size={28} className="text-blue-500" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            WaterWise
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-base font-medium transition-colors hover:text-blue-500 ${
                isActive ? 'text-blue-500' : 'text-gray-700'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-base font-medium transition-colors hover:text-blue-500 ${
                isActive ? 'text-blue-500' : 'text-gray-700'
              }`
            }
          >
            About Water Footprint
          </NavLink>
          <NavLink
            to="/calculator"
            className={({ isActive }) =>
              `text-base font-medium transition-colors hover:text-blue-500 ${
                isActive ? 'text-blue-500' : 'text-gray-700'
              }`
            }
          >
            Calculator
          </NavLink>
          <NavLink
            to="/reduce"
            className={({ isActive }) =>
              `text-base font-medium transition-colors hover:text-blue-500 ${
                isActive ? 'text-blue-500' : 'text-gray-700'
              }`
            }
          >
            Reduce Your Impact
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `text-base font-medium transition-colors hover:text-blue-500 ${
                isActive ? 'text-blue-500' : 'text-gray-700'
              }`
            }
          >
            Resources
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base font-medium transition-colors hover:text-blue-500 ${
                  isActive ? 'text-blue-500' : 'text-gray-700'
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-base font-medium transition-colors hover:text-blue-500 ${
                  isActive ? 'text-blue-500' : 'text-gray-700'
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Water Footprint
            </NavLink>
            <NavLink
              to="/calculator"
              className={({ isActive }) =>
                `text-base font-medium transition-colors hover:text-blue-500 ${
                  isActive ? 'text-blue-500' : 'text-gray-700'
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Calculator
            </NavLink>
            <NavLink
              to="/reduce"
              className={({ isActive }) =>
                `text-base font-medium transition-colors hover:text-blue-500 ${
                  isActive ? 'text-blue-500' : 'text-gray-700'
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reduce Your Impact
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `text-base font-medium transition-colors hover:text-blue-500 ${
                  isActive ? 'text-blue-500' : 'text-gray-700'
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
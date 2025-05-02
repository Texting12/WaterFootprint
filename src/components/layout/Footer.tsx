import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Heart, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-teal-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Droplet size={24} className="text-blue-300" />
              <span className="text-xl font-bold">WaterWise</span>
            </div>
            <p className="text-blue-100 max-w-xs">
              Educating and empowering individuals and businesses to understand and reduce their water footprint.
            </p>
            <div className="flex items-center gap-1">
              <Heart size={16} className="text-red-300" />
              <span className="text-sm">Made with care for our planet</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Water Footprint
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-blue-100 hover:text-white transition-colors">
                  Calculator
                </Link>
              </li>
              <li>
                <Link to="/reduce" className="text-blue-100 hover:text-white transition-colors">
                  Reduce Your Impact
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-blue-100 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://waterfootprint.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-1"
                >
                  Water Footprint Network
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.unwater.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-1"
                >
                  UN Water
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.epa.gov/watersense" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-1"
                >
                  EPA WaterSense
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-blue-100 flex items-center gap-2 mb-2">
              <Mail size={16} />
              <a href="mailto:info@waterwise.org" className="hover:text-white transition-colors">
                info@waterwise.org
              </a>
            </p>
            <p className="text-sm text-blue-200 mt-6">
              © {new Date().getFullYear()} WaterWise. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
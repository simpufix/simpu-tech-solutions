
import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">SimpuFix Solution</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering businesses through innovative IT solutions. Your trusted partner for 
              enterprise-grade technology infrastructure and support.
            </p>
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white mb-2">Our Tagline:</p>
              <p>"Empowering Businesses Through Innovative IT Solutions"</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('clients')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Internet Provisioning</li>
              <li className="text-gray-400">Network Installation</li>
              <li className="text-gray-400">IPTV Services</li>
              <li className="text-gray-400">Software Development</li>
              <li className="text-gray-400">Automation Solutions</li>
              <li className="text-gray-400">Maintenance & Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white">+234 (0) 123 456 7890</p>
                  <p className="text-gray-400 text-sm">Business Hours</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-white">+234 (0) 987 654 3210</p>
                  <p className="text-gray-400 text-sm">24/7 Emergency</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-white">info@simpufixsolution.com</p>
                  <p className="text-gray-400 text-sm">General Inquiries</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-white">Lagos, Nigeria</p>
                  <p className="text-gray-400 text-sm">Head Office</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2024 SimpuFix Solution. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Transforming businesses through innovative IT solutions.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow our journey:</span>
              <button 
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

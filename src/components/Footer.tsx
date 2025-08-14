import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold">
                Raghu <span className="text-cyan-400">Digital Marketing</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming businesses through strategic digital marketing solutions. 
              Your growth is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors duration-200">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">SEO Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Social Media Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Google Ads</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Content Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Email Marketing</a></li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Contact Info</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-cyan-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-cyan-400" />
                <span className="text-gray-400">raghu@digitalmarketing.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-cyan-400" />
                <span className="text-gray-400">New York, NY 10001</span>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:border-cyan-400 text-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-500 text-white rounded-r-md hover:bg-cyan-600 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Raghu Digital Marketing Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
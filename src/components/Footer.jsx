import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        {/* Brand & Tagline */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">PYQ Center 🎓</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering students with organized and solved previous year papers to make exam preparation easier and more effective.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition">🏠 Home</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">📬 Contact</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">ℹ️ About</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" /> pyqcenter@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-400" /> +91 7558417655
            </li>
            
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PYQ Center. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

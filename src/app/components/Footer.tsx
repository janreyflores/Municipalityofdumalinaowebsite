import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Dumalinao</h3>
                <p className="text-sm text-gray-400">Zamboanga del Sur</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A progressive municipality committed to sustainable development, 
              community welfare, and preserving our rich cultural heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Government Services
                </Link>
              </li>
              <li>
                <Link to="/tourism" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Tourism
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Municipal Hall, Dumalinao, Zamboanga del Sur
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={18} className="text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">(062) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={18} className="text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">info@dumalinao.gov.ph</span>
              </li>
            </ul>
          </div>

          {/* Office Hours & Social */}
          <div>
            <h3 className="font-bold mb-4">Office Hours</h3>
            <p className="text-gray-300 text-sm mb-4">
              Monday - Friday<br />
              8:00 AM - 5:00 PM
            </p>
            <h3 className="font-bold mb-3">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Municipality of Dumalinao. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

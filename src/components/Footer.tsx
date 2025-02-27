
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-decor-light pt-16 pb-8">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold text-decor-primary font-serif tracking-tight">
                Decor<span className="text-decor-accent">Mind</span>
              </h2>
            </Link>
            <p className="text-decor-secondary text-sm leading-relaxed">
              AI-powered interior design platform that helps you create beautiful spaces tailored to your style and budget.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-decor-secondary hover:text-decor-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-decor-secondary hover:text-decor-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-decor-secondary hover:text-decor-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-decor-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-decor-secondary hover:text-decor-accent text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-decor-secondary hover:text-decor-accent text-sm transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-decor-secondary hover:text-decor-accent text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decor-secondary hover:text-decor-accent text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-decor-secondary hover:text-decor-accent text-sm transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-decor-primary mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-decor-secondary hover:text-decor-accent text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-decor-secondary hover:text-decor-accent text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-decor-secondary hover:text-decor-accent text-sm transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-decor-primary mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-decor-accent mr-2 mt-0.5" />
                <span className="text-decor-secondary text-sm">
                  123 Design Street, Creative City, 45678
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-decor-accent mr-2" />
                <a href="tel:+11234567890" className="text-decor-secondary hover:text-decor-accent text-sm transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-decor-accent mr-2" />
                <a href="mailto:info@decormind.com" className="text-decor-secondary hover:text-decor-accent text-sm transition-colors">
                  info@decormind.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-decor-gray-med mt-12 pt-8 text-center">
          <p className="text-decor-secondary text-sm">
            &copy; {new Date().getFullYear()} DecorMind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

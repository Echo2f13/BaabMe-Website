import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Design & Creations',
    'Print & Publishing',
    'Packaging & Labelling',
    'Branding & Promotions',
  ];

  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-yellow/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/">
              <h3 className="text-3xl font-bold text-primary-yellow mb-4">BAAB</h3>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              A new generation design agency specializing in brand identity, visual identity, and
              holistic brand experiences.
            </p>
            <div className="flex gap-4">
              {['L', 'I', 'F', 'B'].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-primary-yellow rounded-full flex items-center justify-center font-bold text-sm transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-primary-yellow transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-white/70 hover:text-primary-yellow transition-colors duration-300 inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="mailto:info@baabadvertising.com"
                className="flex items-start gap-3 text-white/70 hover:text-primary-yellow transition-colors duration-300"
              >
                <Mail size={20} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">info@baabadvertising.com</span>
              </a>
              <a
                href="tel:+97142278894"
                className="flex items-start gap-3 text-white/70 hover:text-primary-yellow transition-colors duration-300"
              >
                <Phone size={20} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">+971 (0) 4 227 8894</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Offices 2013, Building A5-D<br />
                  Dubai Digital Park, DSO<br />
                  Dubai - UAE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Baab Advertising. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <Link to="#" className="hover:text-primary-yellow transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-primary-yellow transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-yellow text-black rounded-full flex items-center justify-center shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
}

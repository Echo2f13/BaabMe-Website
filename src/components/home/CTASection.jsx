import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  const floatingShapes = [
    { size: 60, top: '10%', left: '5%', delay: 0 },
    { size: 80, top: '70%', right: '10%', delay: 0.3 },
    { size: 50, bottom: '15%', left: '15%', delay: 0.6 },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-primary-yellow overflow-hidden">
      {/* Floating Background Shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        >
          <div className="w-full h-full bg-black rounded-full" />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Elevate Your Brand?
            </motion.h2>
            <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch and let's discuss your
              next project.
            </p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <motion.button
                  className="bg-black text-white px-12 py-5 rounded-full text-lg font-semibold flex items-center gap-3 shadow-xl"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.button>
              </Link>

              <a href="tel:+97142278894">
                <motion.button
                  className="bg-white text-black px-12 py-5 rounded-full text-lg font-semibold flex items-center gap-3 shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: '#000',
                    color: '#fff',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={20} />
                  Call Us Now
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Email */}
            <motion.a
              href="mailto:info@baabadvertising.com"
              className="bg-black/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 group"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Mail size={32} className="mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-1">Email Us</h3>
              <p className="text-sm opacity-80">info@baabadvertising.com</p>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+97142278894"
              className="bg-black/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 group"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Phone size={32} className="mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-1">Call Us</h3>
              <p className="text-sm opacity-80">+971 (0) 4 227 8894</p>
            </motion.a>

            {/* Location */}
            <motion.div
              className="bg-black/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <MapPin size={32} className="mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-1">Visit Us</h3>
              <p className="text-sm opacity-80">Dubai Digital Park, DSO</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

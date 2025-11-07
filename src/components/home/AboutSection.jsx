import { motion } from 'framer-motion';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import { Sparkles, Target, Users, Zap } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: <Sparkles size={32} />,
      title: 'Creative Excellence',
      description: 'Award-winning designs that make your brand stand out in the market',
    },
    {
      icon: <Target size={32} />,
      title: 'Strategic Approach',
      description: 'Data-driven solutions tailored to achieve your business goals',
    },
    {
      icon: <Users size={32} />,
      title: 'Client-Focused',
      description: 'Collaborative process ensuring your vision comes to life',
    },
    {
      icon: <Zap size={32} />,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising on quality',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <FadeInWhenVisible>
            <div>
              <motion.span
                className="text-primary-yellow text-sm font-bold uppercase tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                About Baab Advertising
              </motion.span>

              <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
                A New Generation Design Agency
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Design is our passion – and our design work will portray your products or
                services in a memorable way. We specialize in brand identity, visual identity,
                holistic brand experiences and print implementation.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                High calibre graphic design solutions that enhance your corporate image and
                increase the impact of your marketing campaigns. Based in Dubai Digital Park,
                we serve clients across the UAE and beyond.
              </p>

              <motion.div
                className="flex gap-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="border-l-4 border-primary-yellow pl-4">
                  <p className="text-3xl font-bold text-black">15+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="border-l-4 border-primary-yellow pl-4">
                  <p className="text-3xl font-bold text-black">500+</p>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div className="border-l-4 border-primary-yellow pl-4">
                  <p className="text-3xl font-bold text-black">1000+</p>
                  <p className="text-gray-600">Projects Done</p>
                </div>
              </motion.div>
            </div>
          </FadeInWhenVisible>

          {/* Right: Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-gray-50 p-6 rounded-2xl hover:bg-primary-yellow transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-black mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

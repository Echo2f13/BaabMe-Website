import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Palette,
  Printer,
  Package,
  Award,
  TrendingUp,
  Gift,
  Frame,
  Home
} from 'lucide-react';

export default function ServicesGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 1,
      title: 'Design & Creations',
      color: '#E63946',
      icon: Palette,
      description: 'Logo creation, graphic design solutions, 3D visuals, corporate image enhancement',
    },
    {
      id: 2,
      title: 'Print & Publishing',
      color: '#FF8C42',
      icon: Printer,
      description: 'Marketing brochures, flyers, printed marketing materials',
    },
    {
      id: 3,
      title: 'Packaging & Labelling',
      color: '#FFD60A',
      icon: Package,
      description: 'Product packaging design, label design',
    },
    {
      id: 4,
      title: 'Branding & Promotions',
      color: '#4ECDC4',
      icon: Award,
      description: 'Brand identity, visual identity, holistic brand experiences, marketing campaigns',
    },
    {
      id: 5,
      title: 'Advertising & Signage',
      color: '#8B5CF6',
      icon: TrendingUp,
      description: 'Adverts, signage solutions',
    },
    {
      id: 6,
      title: 'Gifts & Premium',
      color: '#1D9BF0',
      icon: Gift,
      description: 'Premium gift items, corporate gifts',
    },
    {
      id: 7,
      title: 'Framing & Canvas',
      color: '#10B981',
      icon: Frame,
      description: 'Art framing, canvas printing',
    },
    {
      id: 8,
      title: 'Carpet & Curtains',
      color: '#14B8A6',
      icon: Home,
      description: 'Interior textiles, carpet design, curtain solutions',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-primary-yellow text-sm font-bold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            What We Do Best
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive design and marketing solutions tailored to elevate your brand
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl p-8 bg-white cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Colored Background on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: service.color }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-4"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent
                      size={48}
                      className="text-black group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-black group-hover:text-white mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div
                    className="mt-4 text-black group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="text-sm font-semibold">Learn More →</span>
                  </motion.div>
                </div>

                {/* Decorative Corner Element */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at top right, ${service.color}, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

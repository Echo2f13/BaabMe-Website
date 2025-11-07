import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ClientsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Placeholder client logos (will be replaced with actual logos)
  const clients = [
    { id: 1, name: 'Client 1' },
    { id: 2, name: 'Client 2' },
    { id: 3, name: 'Client 3' },
    { id: 4, name: 'Client 4' },
    { id: 5, name: 'Client 5' },
    { id: 6, name: 'Client 6' },
    { id: 7, name: 'Client 7' },
    { id: 8, name: 'Client 8' },
  ];

  // Duplicate for infinite scroll effect
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-20 md:py-32 bg-gray-50 overflow-hidden">
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
            Trusted By
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Our Amazing Clients
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We're proud to work with leading brands across various industries
          </p>
        </motion.div>

        {/* Infinite Carousel */}
        <div ref={ref} className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Scrolling Container */}
          <motion.div
            className="flex gap-12"
            animate={{
              x: inView ? ['0%', '-50%'] : '0%',
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-white rounded-xl flex items-center justify-center p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {/* Placeholder for logo */}
                <div className="text-center">
                  <div className="w-24 h-16 bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-400">
                      {client.name.charAt(client.name.length - 1)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">{client.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '1000+', label: 'Projects Completed' },
            { number: '15+', label: 'Years Experience' },
            { number: '50+', label: 'Awards Won' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.h3
                className="text-4xl md:text-5xl font-bold text-black mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

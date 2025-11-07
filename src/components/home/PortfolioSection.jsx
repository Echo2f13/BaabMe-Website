import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PortfolioSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Placeholder portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: 'Brand Identity for Tech Startup',
      category: 'Branding',
      color: '#E63946',
      image: null, // Will be replaced with actual images
    },
    {
      id: 2,
      title: 'Product Packaging Design',
      category: 'Packaging',
      color: '#FFD60A',
      image: null,
    },
    {
      id: 3,
      title: 'Marketing Campaign Materials',
      category: 'Print Design',
      color: '#4ECDC4',
      image: null,
    },
    {
      id: 4,
      title: 'Corporate Signage Solutions',
      category: 'Signage',
      color: '#8B5CF6',
      image: null,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-primary-yellow text-sm font-bold uppercase tracking-wider">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-4">
              Featured Projects
            </h2>
          </div>
          <Link to="/work">
            <motion.button
              className="mt-6 md:mt-0 bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2"
              whileHover={{ scale: 1.05, gap: '12px' }}
              whileTap={{ scale: 0.95 }}
            >
              View All Work
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10 }}
              style={{ height: index < 2 ? '400px' : '350px' }}
            >
              {/* Placeholder Background with Gradient */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${item.color}40, ${item.color}80)`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl font-bold mt-2 mb-4">
                    {item.title}
                  </h3>
                  <motion.div
                    className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ gap: '12px' }}
                  >
                    <span className="font-semibold">View Project</span>
                    <ExternalLink size={18} />
                  </motion.div>
                </motion.div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-6 right-6 w-16 h-16 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Text */}
        <motion.p
          className="text-center text-gray-600 mt-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          Want to see more? Check out our complete{' '}
          <Link to="/work" className="text-black font-semibold hover:text-primary-yellow transition-colors">
            portfolio →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}

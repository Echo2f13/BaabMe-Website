import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Branding', 'Print Design', 'Packaging', 'Advertising', 'Digital'];

  const projects = [
    {
      id: 1,
      title: 'Tech Startup Brand Identity',
      category: 'Branding',
      color: '#E63946',
      description: 'Complete brand identity including logo, colors, and guidelines',
    },
    {
      id: 2,
      title: 'Product Packaging Design',
      category: 'Packaging',
      color: '#FFD60A',
      description: 'Premium packaging for luxury consumer goods',
    },
    {
      id: 3,
      title: 'Corporate Brochure',
      category: 'Print Design',
      color: '#FF8C42',
      description: 'Multi-page marketing brochure for corporate services',
    },
    {
      id: 4,
      title: 'Outdoor Advertising Campaign',
      category: 'Advertising',
      color: '#8B5CF6',
      description: 'Billboard and signage campaign for retail brand',
    },
    {
      id: 5,
      title: 'Restaurant Branding',
      category: 'Branding',
      color: '#4ECDC4',
      description: 'Full restaurant brand identity and menu design',
    },
    {
      id: 6,
      title: 'Social Media Campaign',
      category: 'Digital',
      color: '#1D9BF0',
      description: 'Digital marketing materials for social platforms',
    },
    {
      id: 7,
      title: 'Annual Report Design',
      category: 'Print Design',
      color: '#10B981',
      description: 'Corporate annual report with infographics',
    },
    {
      id: 8,
      title: 'Product Label System',
      category: 'Packaging',
      color: '#14B8A6',
      description: 'Complete labeling system for product line',
    },
    {
      id: 9,
      title: 'E-commerce Brand',
      category: 'Digital',
      color: '#E63946',
      description: 'Online store branding and digital assets',
    },
    {
      id: 10,
      title: 'Trade Show Display',
      category: 'Advertising',
      color: '#FF8C42',
      description: 'Exhibition booth design and graphics',
    },
    {
      id: 11,
      title: 'Fashion Brand Identity',
      category: 'Branding',
      color: '#8B5CF6',
      description: 'Luxury fashion brand identity and lookbook',
    },
    {
      id: 12,
      title: 'Magazine Layout Design',
      category: 'Print Design',
      color: '#4ECDC4',
      description: 'Editorial design for lifestyle magazine',
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <FadeInWhenVisible>
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-primary-yellow text-sm font-bold uppercase tracking-wider">
                Our Portfolio
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
                Our Best Work
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Explore our portfolio of creative projects that showcase our expertise across
                various industries and design disciplines.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-gray-50 sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-6">
          <FadeInWhenVisible>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-primary-yellow text-black shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative overflow-hidden rounded-3xl cursor-pointer bg-gray-100"
                  style={{ minHeight: '400px' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Gradient Background */}
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}40, ${project.color}80)`,
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-white text-2xl font-bold mt-2 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-white/90 text-sm mb-4">{project.description}</p>
                      <motion.div
                        className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ gap: '12px' }}
                      >
                        <span className="font-semibold">View Project</span>
                        <ExternalLink size={18} />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Decorative Circle */}
                  <div className="absolute top-8 right-8 w-16 h-16 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Number Badge */}
                  <div
                    className="absolute top-8 left-8 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.id}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No projects found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1000+', label: 'Projects Completed' },
              { number: '500+', label: 'Happy Clients' },
              { number: '50+', label: 'Awards Won' },
              { number: '15+', label: 'Years Experience' },
            ].map((stat, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                  <h3 className="text-5xl font-bold text-primary-yellow mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-700">{stat.label}</p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-yellow">
        <div className="container mx-auto px-6 text-center">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can bring your vision to
              life.
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-black text-white px-12 py-5 rounded-full text-lg font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
}

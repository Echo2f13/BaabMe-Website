import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Palette,
  Printer,
  Package,
  Award,
  TrendingUp,
  Gift,
  Frame,
  Home,
  ArrowRight,
  Check
} from 'lucide-react';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Design & Creations',
      color: '#E63946',
      icon: Palette,
      description: 'Transform your brand with stunning visual designs that capture attention and communicate your message effectively.',
      features: [
        'Logo Design & Brand Identity',
        'Corporate Identity Packages',
        '3D Visualization & Rendering',
        'Graphic Design Solutions',
        'Marketing Collateral Design',
        'Digital & Print Graphics',
      ],
    },
    {
      id: 2,
      title: 'Print & Publishing',
      color: '#FF8C42',
      icon: Printer,
      description: 'High-quality printing services that bring your designs to life with precision and professional finishing.',
      features: [
        'Marketing Brochures',
        'Business Cards & Stationery',
        'Flyers & Posters',
        'Catalogs & Magazines',
        'Annual Reports',
        'Large Format Printing',
      ],
    },
    {
      id: 3,
      title: 'Packaging & Labelling',
      color: '#FFD60A',
      icon: Package,
      description: 'Eye-catching packaging designs that make your products stand out on shelves and create lasting impressions.',
      features: [
        'Product Packaging Design',
        'Label Design & Printing',
        'Box & Container Design',
        'Flexible Packaging Solutions',
        'Specialty Packaging',
        'Sustainable Packaging Options',
      ],
    },
    {
      id: 4,
      title: 'Branding & Promotions',
      color: '#4ECDC4',
      icon: Award,
      description: 'Comprehensive branding strategies that build strong, memorable brand identities and drive engagement.',
      features: [
        'Brand Strategy Development',
        'Visual Identity Systems',
        'Brand Guidelines',
        'Marketing Campaign Design',
        'Promotional Materials',
        'Brand Refresh & Repositioning',
      ],
    },
    {
      id: 5,
      title: 'Advertising & Signage',
      color: '#8B5CF6',
      icon: TrendingUp,
      description: 'Impactful advertising and signage solutions that increase visibility and attract your target audience.',
      features: [
        'Outdoor Advertising',
        'Indoor Signage Systems',
        'Vehicle Wraps & Graphics',
        'LED & Digital Signage',
        'Wayfinding Solutions',
        'Trade Show Displays',
      ],
    },
    {
      id: 6,
      title: 'Gifts & Premium',
      color: '#1D9BF0',
      icon: Gift,
      description: 'Customized corporate gifts and premium items that leave lasting impressions on clients and employees.',
      features: [
        'Corporate Gift Items',
        'Promotional Products',
        'Custom Merchandise',
        'Employee Recognition Gifts',
        'Event Giveaways',
        'Luxury Premium Items',
      ],
    },
    {
      id: 7,
      title: 'Framing & Canvas',
      color: '#10B981',
      icon: Frame,
      description: 'Professional framing and canvas printing services to showcase your art and photography beautifully.',
      features: [
        'Custom Picture Framing',
        'Canvas Printing & Stretching',
        'Art Reproduction',
        'Photo Mounting',
        'Gallery-Quality Framing',
        'Corporate Art Solutions',
      ],
    },
    {
      id: 8,
      title: 'Carpet & Curtains',
      color: '#14B8A6',
      icon: Home,
      description: 'Premium carpet and curtain solutions that enhance interior spaces with style and functionality.',
      features: [
        'Custom Carpet Design',
        'Commercial Carpeting',
        'Curtain & Drapery Solutions',
        'Window Treatment Design',
        'Upholstery Services',
        'Interior Textile Consultation',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary-yellow">
        <div className="container mx-auto px-6">
          <FadeInWhenVisible>
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-black/70 text-sm font-bold uppercase tracking-wider">
                Our Services
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-black mt-4 mb-6">
                Comprehensive Design Solutions
              </h1>
              <p className="text-xl text-black/80 leading-relaxed">
                From concept to completion, we offer a full spectrum of design and marketing
                services tailored to elevate your brand and drive results.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;

              return (
                <FadeInWhenVisible key={service.id} delay={0}>
                  <motion.div
                    className={`flex flex-col ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } gap-12 items-center`}
                  >
                    {/* Icon & Title Side */}
                    <div className="flex-1">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                      >
                        {/* Large Background Icon */}
                        <div
                          className="w-full aspect-square rounded-3xl flex items-center justify-center relative overflow-hidden"
                          style={{ backgroundColor: `${service.color}20` }}
                        >
                          <IconComponent
                            size={200}
                            className="opacity-20"
                            style={{ color: service.color }}
                            strokeWidth={1}
                          />
                          <div
                            className="absolute inset-0"
                            style={{
                              background: `radial-gradient(circle at center, ${service.color}30, transparent)`,
                            }}
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <IconComponent
                            size={40}
                            style={{ color: service.color }}
                            strokeWidth={2}
                          />
                          <h2 className="text-3xl md:text-4xl font-bold text-black">
                            {service.title}
                          </h2>
                        </div>

                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-center gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <Check
                                size={20}
                                style={{ color: service.color }}
                                strokeWidth={3}
                              />
                              <span className="text-gray-700">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <Link to="/contact">
                          <motion.button
                            className="px-8 py-4 rounded-full font-semibold flex items-center gap-2 text-white transition-all duration-300"
                            style={{ backgroundColor: service.color }}
                            whileHover={{ scale: 1.05, gap: '12px' }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Get Started
                            <ArrowRight size={20} />
                          </motion.button>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </FadeInWhenVisible>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let's discuss how our services can help elevate your brand and achieve your
              business goals.
            </p>
            <Link to="/contact">
              <motion.button
                className="bg-primary-yellow text-black px-12 py-5 rounded-full text-lg font-semibold inline-flex items-center gap-3"
                whileHover={{ scale: 1.1, gap: '16px' }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
}

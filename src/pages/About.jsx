import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Target, Users, Zap, TrendingUp, Heart } from 'lucide-react';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

export default function About() {
  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <Award size={40} />,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards.',
    },
    {
      icon: <Target size={40} />,
      title: 'Innovation',
      description: 'Pushing boundaries with creative solutions that set trends in the industry.',
    },
    {
      icon: <Users size={40} />,
      title: 'Collaboration',
      description: 'Working closely with clients to bring their vision to life through partnership.',
    },
    {
      icon: <Zap size={40} />,
      title: 'Efficiency',
      description: 'Delivering projects on time without compromising on quality or creativity.',
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Growth',
      description: 'Helping businesses grow through strategic design and marketing solutions.',
    },
    {
      icon: <Heart size={40} />,
      title: 'Passion',
      description: 'Design is not just our work—it\'s our passion and our commitment to you.',
    },
  ];

  const timeline = [
    {
      year: '2008',
      title: 'Foundation',
      description: 'Baab Advertising was established with a vision to revolutionize graphic design in Dubai.',
    },
    {
      year: '2012',
      title: 'Major Expansion',
      description: 'Expanded our services to include 3D visualization and comprehensive branding solutions.',
    },
    {
      year: '2015',
      title: 'Industry Recognition',
      description: 'Received multiple awards for excellence in design and client satisfaction.',
    },
    {
      year: '2018',
      title: 'Digital Transformation',
      description: 'Integrated cutting-edge digital solutions and marketing strategies.',
    },
    {
      year: '2020',
      title: 'Dubai Digital Park',
      description: 'Moved to our state-of-the-art facility in Dubai Digital Park, DSO.',
    },
    {
      year: '2024',
      title: 'New Era',
      description: 'Continuing to innovate and lead the design industry with 500+ satisfied clients.',
    },
  ];

  const team = [
    {
      name: 'Creative Director',
      role: 'Leading Design Vision',
      description: 'Guiding creative excellence',
    },
    {
      name: 'Brand Strategist',
      role: 'Strategic Planning',
      description: 'Crafting brand identities',
    },
    {
      name: 'Design Team',
      role: 'Creative Execution',
      description: 'Bringing ideas to life',
    },
    {
      name: 'Client Services',
      role: 'Customer Success',
      description: 'Ensuring satisfaction',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary-yellow">
        <div className="container mx-auto px-6">
          <FadeInWhenVisible>
            <motion.div className="max-w-4xl mx-auto text-center">
              <span className="text-black/70 text-sm font-bold uppercase tracking-wider">
                About Us
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-black mt-4 mb-6">
                A New Generation Design Agency
              </h1>
              <p className="text-xl text-black/80 leading-relaxed">
                Design is our passion – and our design work will portray your products or
                services in a memorable way. We specialize in brand identity, visual identity,
                holistic brand experiences and print implementation.
              </p>
            </motion.div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeInWhenVisible>
              <motion.div
                className="bg-gray-50 p-10 rounded-3xl"
                whileHover={{ scale: 1.02 }}
              >
                <h2 className="text-3xl font-bold text-black mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To deliver high calibre graphic design solutions that enhance corporate
                  images and increase the impact of marketing campaigns. We are committed to
                  excellence, innovation, and building lasting relationships with our clients.
                </p>
              </motion.div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <motion.div
                className="bg-primary-yellow p-10 rounded-3xl"
                whileHover={{ scale: 1.02 }}
              >
                <h2 className="text-3xl font-bold text-black mb-4">Our Vision</h2>
                <p className="text-lg text-black/80 leading-relaxed">
                  To be the leading design agency in the Middle East, recognized for
                  transforming brands through exceptional creativity and strategic thinking.
                  We envision a world where great design elevates every business.
                </p>
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <span className="text-primary-yellow text-sm font-bold uppercase tracking-wider">
                Our Values
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mt-4">
                What Drives Us
              </h2>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  <div className="text-primary-yellow mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-black mb-3">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <span className="text-primary-yellow text-sm font-bold uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mt-4">
                15+ Years of Excellence
              </h2>
            </div>
          </FadeInWhenVisible>

          <div ref={timelineRef} className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-12 border-l-2 border-primary-yellow last:pb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary-yellow rounded-full" />

                {/* Content */}
                <div className="bg-gray-50 p-6 rounded-2xl hover:bg-primary-yellow transition-colors duration-300 group">
                  <span className="text-2xl font-bold text-black">{item.year}</span>
                  <h3 className="text-xl font-bold text-black mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 group-hover:text-black/80">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <span className="text-primary-yellow text-sm font-bold uppercase tracking-wider">
                Our Team
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mt-4">
                Meet The Experts
              </h2>
              <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
                A dedicated team of creative professionals committed to your success
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white p-8 rounded-2xl text-center group hover:bg-primary-yellow transition-all duration-300"
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  {/* Placeholder for team member image */}
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users size={48} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                  <p className="text-gray-600 font-semibold mb-2 group-hover:text-black">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500 group-hover:text-black/70">
                    {member.description}
                  </p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '500+', label: 'Happy Clients' },
              { number: '1000+', label: 'Projects Completed' },
              { number: '50+', label: 'Awards Won' },
            ].map((stat, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <h3 className="text-5xl font-bold text-primary-yellow mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-white/80">{stat.label}</p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

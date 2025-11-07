import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const headlineText = "Elevate Your Brand with Exceptional Design";
  const subtextText = "High calibre graphic design solutions that enhance your corporate image and increase the impact of your marketing campaigns";

  // Character animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Floating shapes data
  const floatingShapes = [
    { type: 'circle', size: 80, top: '15%', left: '10%', delay: 0 },
    { type: 'square', size: 60, top: '60%', left: '85%', delay: 0.2 },
    { type: 'triangle', size: 70, top: '70%', left: '15%', delay: 0.4 },
    { type: 'circle', size: 50, top: '25%', left: '80%', delay: 0.6 },
    { type: 'square', size: 90, top: '80%', left: '75%', delay: 0.8 },
  ];

  return (
    <section className="relative min-h-screen bg-primary-yellow overflow-hidden flex items-center justify-center">
      {/* Floating Background Shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute opacity-20`}
          style={{
            top: shape.top,
            left: shape.left,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        >
          {shape.type === 'circle' && (
            <div className="w-full h-full bg-black rounded-full" />
          )}
          {shape.type === 'square' && (
            <div className="w-full h-full bg-black rounded-lg rotate-45" />
          )}
          {shape.type === 'triangle' && (
            <div className="w-0 h-0 border-l-[45px] border-l-transparent border-r-[45px] border-r-transparent border-b-[80px] border-b-black" />
          )}
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Animated Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.03 }}
        >
          {headlineText.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              transition={{ duration: 0.4 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl text-black/80 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {subtextText}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <Link to="/contact">
            <motion.button
              className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold flex items-center gap-3 shadow-lg"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </Link>

          <Link to="/work">
            <motion.button
              className="bg-transparent border-2 border-black text-black px-10 py-4 rounded-full text-lg font-semibold"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(0,0,0,0.1)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown size={40} className="text-black opacity-60" />
      </motion.div>
    </section>
  );
}

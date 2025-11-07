import { motion, useScroll } from 'framer-motion';

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary-yellow origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

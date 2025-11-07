import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  icon,
  ...props
}) {
  const baseStyles = 'font-semibold rounded-full flex items-center gap-3 transition-all duration-300';

  const variants = {
    primary: 'bg-black text-white hover:bg-gray-900',
    secondary: 'bg-primary-yellow text-black hover:bg-yellow-400',
    outline: 'bg-transparent border-2 border-black text-black hover:bg-black hover:text-white',
  };

  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-10 py-4 text-base',
    lg: 'px-12 py-5 text-lg',
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {children}
      {icon && <span>{icon}</span>}
    </motion.button>
  );
}

# PHASE 1: BAAB ADVERTISING WEBSITE - FOUNDATION & SETUP

## 🎯 PROJECT OVERVIEW

You are building a **stunning, highly animated website** for **Baab Advertising**, a Dubai-based design agency. This will be a modern, React-based website inspired by the animations and interactivity of **evolvion.io**, featuring smooth scroll effects, magnetic interactions, and eye-catching transitions.

---

## 🎨 BRAND & DESIGN SPECIFICATIONS

### Company Information
- **Company Name**: Baab Advertising
- **Tagline**: "A new generation design agency specializing in brand identity, visual identity, holistic brand experiences and print implementation"
- **Location**: Dubai Digital Park, Dubai Silicon Oasis, UAE
- **Core Message**: "Design is our passion – and our design work will portray your products or services in a memorable way"

### Color Palette - PRIMARY THEME: YELLOW

**Main Brand Colors:**
```css
--primary-yellow: #F4F754;      /* Main brand yellow - USE EVERYWHERE */
--bright-yellow: #FFD700;       /* Accent yellow */
--pure-black: #000000;          /* Text, headers */
--pure-white: #FFFFFF;          /* Backgrounds, cards */
--dark-charcoal: #2D2D2D;       /* Footer, dark sections */
--light-gray: #F5F5F5;          /* Subtle backgrounds */
--medium-gray: #E0E0E0;         /* Borders, dividers */
```

**Service Card Rainbow Colors (8 vibrant colors):**
```css
--service-red: #E63946;         /* Design & Creations */
--service-orange: #FF8C42;      /* Print & Publishing */
--service-yellow: #FFD60A;      /* Packaging & Labelling */
--service-cyan: #4ECDC4;        /* Branding & Promotions */
--service-purple: #8B5CF6;      /* Advertising & Signage */
--service-blue: #1D9BF0;        /* Gifts & Premium */
--service-green: #10B981;       /* Framing & Canvas */
--service-teal: #14B8A6;        /* Carpet & Curtains */
```

### Typography
```css
Font Family: 'Inter' or 'Poppins' (Google Fonts)

Font Sizes:
- Hero Headline: 64-72px (mobile: 36-42px)
- H1: 48px (mobile: 32px)
- H2: 36px (mobile: 28px)
- H3: 28px (mobile: 24px)
- Body Large: 18px
- Body Regular: 16px
- Small Text: 14px

Font Weights:
- Headers: 700 (Bold)
- Subheaders: 600 (Semi-bold)
- Body: 400 (Regular)
- Light Text: 300
```

---

## 📋 PHASE 1 OBJECTIVES

In this phase, you will:
1. ✅ Set up the React project with Vite
2. ✅ Install all required dependencies
3. ✅ Create the project folder structure
4. ✅ Build the animated navigation bar
5. ✅ Create the hero section with animations
6. ✅ Set up routing structure
7. ✅ Create reusable components
8. ✅ Implement global styles and theme

---

## 🛠️ TECHNICAL SETUP

### 1. Initialize React + Vite Project

```bash
npm create vite@latest baab-advertising -- --template react
cd baab-advertising
```

### 2. Install Required Dependencies

```bash
# Core dependencies
npm install react-router-dom

# Animation libraries
npm install framer-motion
npm install gsap
npm install react-spring

# UI & Utilities
npm install react-intersection-observer
npm install react-scroll
npm install react-icons
npm install lucide-react

# Styling
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Optional but recommended
npm install react-hook-form
npm install swiper
```

### 3. Configure Tailwind CSS

Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: '#F4F754',
          bright: '#FFD700',
        },
        service: {
          red: '#E63946',
          orange: '#FF8C42',
          yellow: '#FFD60A',
          cyan: '#4ECDC4',
          purple: '#8B5CF6',
          blue: '#1D9BF0',
          green: '#10B981',
          teal: '#14B8A6',
        },
        dark: {
          DEFAULT: '#2D2D2D',
          light: '#3D3D3D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

---

## 📁 PROJECT FOLDER STRUCTURE

Create this exact structure:

```
baab-advertising/
├── public/
│   └── (images, logos will go here)
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── ScrollIndicator.jsx
│   │   │   └── PageTransition.jsx
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ServicesGrid.jsx
│   │   │   ├── PortfolioSection.jsx
│   │   │   ├── ClientsSection.jsx
│   │   │   └── CTASection.jsx
│   │   └── animations/
│   │       ├── FadeInWhenVisible.jsx
│   │       ├── StaggerChildren.jsx
│   │       └── ParallaxSection.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Work.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   ├── useScrollPosition.js
│   │   └── useMousePosition.js
│   ├── utils/
│   │   └── animations.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

---

## 🎨 COMPONENT 1: ANIMATED NAVIGATION BAR

### Requirements:
1. **Transparent initially**, becomes **solid white with backdrop blur** on scroll (>50px)
2. Logo on the left, nav links on the right
3. Smooth transitions between states
4. Mobile hamburger menu with full-screen overlay
5. Active link highlighting with yellow underline
6. Hover effects on all links

### Navigation Links:
- Home
- About
- Services
- Work
- Contact

### Design Specs:
```
Desktop Navbar:
- Height: 80px (initial), 70px (scrolled)
- Padding: 0 5%
- Background: transparent → white (opacity: 0.95)
- Backdrop filter: blur(10px) when scrolled
- Shadow: none → subtle shadow when scrolled
- Logo: "BAAB" text or logo image
- Font size: 16px
- Font weight: 500
- Link spacing: 40px apart

Mobile Navbar:
- Height: 70px
- Hamburger icon: 3 lines, animates to X
- Full-screen menu overlay
- Yellow background (#F4F754)
- Links stagger-fade-in when opening
- Each link: 32px font size, centered
```

### Navbar Component Code Structure:

```jsx
// src/components/common/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-md py-4'
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-black">BAAB</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span
                  className={`text-base font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-black font-semibold'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {link.name}
                </span>
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary-yellow"
                  initial={{ width: 0 }}
                  animate={{
                    width: location.pathname === link.path ? '100%' : '0%',
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? (
                <X size={28} className="text-black" />
              ) : (
                <Menu size={28} className="text-black" />
              )}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-primary-yellow z-40 md:hidden flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <motion.div
              className="flex flex-col items-center space-y-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-bold text-black hover:scale-110 transition-transform duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

---

## 🎨 COMPONENT 2: HERO SECTION

### Requirements:
1. Full viewport height
2. Yellow background (#F4F754)
3. Animated text reveal (character by character)
4. CTA button with hover effects
5. Floating geometric shapes in background
6. Scroll indicator at bottom
7. Parallax effect on scroll

### Content:
```
Headline: "Elevate Your Brand with Exceptional Design"
Subtext: "High calibre graphic design solutions that enhance your corporate image and increase the impact of your marketing campaigns"
CTA Button: "Get Started" (links to /contact)
Secondary Button: "View Our Work" (links to /work)
```

### Design Specs:
```
- Background: #F4F754
- Text color: Black
- Headline: 72px, bold, center-aligned
- Subtext: 20px, regular, center-aligned, max-width: 800px
- Button: 
  - Primary: Black background, white text, 18px
  - Hover: Scale 1.1, shadow increase
  - Size: 180px x 55px
  - Border radius: 50px
- Floating shapes: 5-8 abstract shapes (circles, squares, triangles)
  - Random positions
  - Subtle float animation
  - Semi-transparent
```

### Hero Section Code:

```jsx
// src/components/home/HeroSection.jsx
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
```

---

## 🎨 COMPONENT 3: REUSABLE BUTTON COMPONENT

```jsx
// src/components/common/Button.jsx
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
```

---

## 🎨 COMPONENT 4: SCROLL INDICATOR

```jsx
// src/components/common/ScrollIndicator.jsx
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
```

---

## 🔧 ROUTING SETUP

```jsx
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollIndicator from './components/common/ScrollIndicator';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollIndicator />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

```jsx
// src/pages/Home.jsx
import HeroSection from '../components/home/HeroSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* More sections will be added in Phase 2 */}
    </div>
  );
}
```

---

## 🎨 GLOBAL STYLES

```css
/* src/styles/global.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  background-color: #ffffff;
  color: #000000;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #F4F754;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #e5e744;
}

/* Selection Color */
::selection {
  background-color: #F4F754;
  color: #000000;
}

/* Smooth transitions for all elements */
* {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1, h2, h3, h4, h5, h6 {
    @apply font-bold;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## 🎯 PHASE 1 DELIVERABLES CHECKLIST

By the end of Phase 1, you should have:

- [ ] ✅ React + Vite project initialized
- [ ] ✅ All dependencies installed
- [ ] ✅ Tailwind CSS configured with custom theme
- [ ] ✅ Folder structure created
- [ ] ✅ Fully functional animated Navbar
  - [ ] Desktop navigation with hover effects
  - [ ] Mobile hamburger menu
  - [ ] Scroll-triggered background change
  - [ ] Active link highlighting
- [ ] ✅ Hero section with:
  - [ ] Character-by-character text animation
  - [ ] Floating background shapes
  - [ ] CTA buttons with hover effects
  - [ ] Scroll indicator
- [ ] ✅ Reusable Button component
- [ ] ✅ Scroll progress indicator
- [ ] ✅ Page routing setup
- [ ] ✅ Global styles implemented
- [ ] ✅ Responsive design (mobile, tablet, desktop)

---

## 🚀 TESTING CHECKLIST

After building, verify:

1. **Navbar**
   - [ ] Transparent on page load
   - [ ] Becomes solid white with blur after scrolling 50px
   - [ ] Mobile menu opens/closes smoothly
   - [ ] All links navigate correctly
   - [ ] Active link shows yellow underline

2. **Hero Section**
   - [ ] Text animates character by character
   - [ ] Background shapes float smoothly
   - [ ] CTA buttons have hover effects
   - [ ] Scroll indicator bounces
   - [ ] Responsive on all screen sizes

3. **General**
   - [ ] No console errors
   - [ ] Smooth 60fps animations
   - [ ] Works on Chrome, Firefox, Safari
   - [ ] Mobile responsive

---

## 💡 PHASE 1 TIPS

1. **Use Framer Motion extensively** - it's perfect for smooth React animations
2. **Test on mobile** as you build - don't wait until the end
3. **Keep animations smooth** - 60fps is the goal
4. **Use transform and opacity** for animations (GPU accelerated)
5. **Add loading states** for better UX
6. **Comment your code** for easier debugging

---

## 🎬 WHAT'S NEXT?

After completing Phase 1, we'll move to:

**Phase 2**: 
- Services grid with hover effects
- About section with scroll animations
- Portfolio/Work section
- Clients section with logo carousel
- CTA section

**Phase 3**:
- About, Services, Work, Contact pages
- Advanced animations
- Form functionality
- Final polish

---

## 📞 CONTACT INFORMATION TO INCLUDE

```javascript
// Use this data structure in your components
const contactInfo = {
  address: {
    office: 'Offices 2013, Building A5-D',
    area: 'Dubai Digital Park, DSO',
    pobox: 'POBox 341887',
    city: 'Dubai - UAE',
  },
  phone: [
    '+971 (0) 4 227 8894',
    '+971 (0) 52 644 8594',
  ],
  email: 'info@baabadvertising.com',
  social: {
    linkedin: '#',
    behance: '#',
    instagram: '#',
    facebook: '#',
  },
};
```

---

## 🎨 SERVICES DATA

```javascript
const services = [
  {
    id: 1,
    title: 'Design & Creations',
    color: '#E63946',
    icon: 'Palette',
    description: 'Logo creation, graphic design solutions, 3D visuals, corporate image enhancement',
  },
  {
    id: 2,
    title: 'Print & Publishing',
    color: '#FF8C42',
    icon: 'Printer',
    description: 'Marketing brochures, flyers, printed marketing materials',
  },
  {
    id: 3,
    title: 'Packaging & Labelling',
    color: '#FFD60A',
    icon: 'Package',
    description: 'Product packaging design, label design',
  },
  {
    id: 4,
    title: 'Branding & Promotions',
    color: '#4ECDC4',
    icon: 'Award',
    description: 'Brand identity, visual identity, holistic brand experiences, marketing campaigns',
  },
  {
    id: 5,
    title: 'Advertising & Signage',
    color: '#8B5CF6',
    icon: 'TrendingUp',
    description: 'Adverts, signage solutions',
  },
  {
    id: 6,
    title: 'Gifts & Premium',
    color: '#1D9BF0',
    icon: 'Gift',
    description: 'Premium gift items, corporate gifts',
  },
  {
    id: 7,
    title: 'Framing & Canvas',
    color: '#10B981',
    icon: 'Frame',
    description: 'Art framing, canvas printing',
  },
  {
    id: 8,
    title: 'Carpet & Curtains',
    color: '#14B8A6',
    icon: 'Home',
    description: 'Interior textiles, carpet design, curtain solutions',
  },
];
```

---

## ✨ CREATIVE FREEDOM

Feel free to:
- Add extra micro-animations
- Experiment with different transition timings
- Add particle effects or gradient animations
- Include hover sound effects (optional)
- Create custom cursor effects
- Add Easter eggs for fun

**GO WILD WITH CREATIVITY!** 🎨🚀

The goal is to make this website **stunning, memorable, and fun to interact with** - just like evolvion.io but with the vibrant yellow theme and Baab's unique personality.

---

## 🏁 READY? START BUILDING!

Execute this entire Phase 1 setup and create the foundation of an amazing, animated website for Baab Advertising. Make it smooth, make it beautiful, make it UNFORGETTABLE! 🚀✨
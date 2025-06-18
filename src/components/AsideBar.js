import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { to: '/', icon: '🏠', label: 'Home' },
  { to: '/about', icon: '👤', label: 'About' },
  { to: '/services', icon: '💼', label: 'Services' },
  { to: '/projects', icon: '📁', label: 'Projects' },
  { to: '/resume', icon: '📄', label: 'Resume' },
  { to: '/contact', icon: '✉️', label: 'Contact' },
];

const asideTooltipVariants = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.22, type: 'spring', stiffness: 300 } },
  exit: { opacity: 0, x: 10, transition: { duration: 0.15 } },
};

const AsideBar = () => {
  const [hovered, setHovered] = React.useState(null);
  const [hoveredBottom, setHoveredBottom] = React.useState(null);

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-24 z-40 glass-card backdrop-blur-glass bg-mercedes-black/60 border-r border-mercedes-silver/10 shadow-lg"
    >
      <nav className="flex flex-col items-center mt-24 space-y-8">
        {navItems.map((item) => (
          <div
            key={item.to}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHovered(item.to)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link to={item.to} className="nav-link text-xl">
              {item.icon}
            </Link>
            <AnimatePresence>
              {hovered === item.to && (
                <motion.span
                  className="absolute left-12 top-1/2 -translate-y-1/2 bg-mercedes-black text-mercedes-teal px-3 py-1 rounded shadow-lg text-xs whitespace-nowrap pointer-events-none z-50"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={asideTooltipVariants}
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>
      <div className="mt-auto mb-8 flex flex-col items-center space-y-4">
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => setHoveredBottom('email')}
          onMouseLeave={() => setHoveredBottom(null)}
        >
          <a href="mailto:sharmadavid2004@gmail.com" className="nav-link text-lg">📧</a>
          <AnimatePresence>
            {hoveredBottom === 'email' && (
              <motion.span
                className="absolute left-12 top-1/2 -translate-y-1/2 bg-mercedes-black text-mercedes-teal px-3 py-1 rounded shadow-lg text-xs whitespace-nowrap pointer-events-none z-50"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={asideTooltipVariants}
              >
                Email
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => setHoveredBottom('phone')}
          onMouseLeave={() => setHoveredBottom(null)}
        >
          <a href="tel:9540491777" className="nav-link text-lg">📱</a>
          <AnimatePresence>
            {hoveredBottom === 'phone' && (
              <motion.span
                className="absolute left-12 top-1/2 -translate-y-1/2 bg-mercedes-black text-mercedes-teal px-3 py-1 rounded shadow-lg text-xs whitespace-nowrap pointer-events-none z-50"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={asideTooltipVariants}
              >
                Phone
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.aside>
  );
};

export default AsideBar; 
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AsideBar = () => {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-24 z-40 glass-card backdrop-blur-glass bg-f1-black/60 border-r border-f1-white/10 shadow-lg"
    >
      <nav className="flex flex-col items-center mt-24 space-y-8">
        <Link to="/" className="nav-link text-xl">🏠</Link>
        <Link to="/about" className="nav-link text-xl">👤</Link>
        <Link to="/services" className="nav-link text-xl">💼</Link>
        <Link to="/projects" className="nav-link text-xl">📁</Link>
        <Link to="/resume" className="nav-link text-xl">📄</Link>
        <Link to="/contact" className="nav-link text-xl">✉️</Link>
      </nav>
      <div className="mt-auto mb-8 flex flex-col items-center space-y-4">
        <a href="mailto:sharmadavid2004@gmail.com" className="nav-link text-lg">📧</a>
        <a href="tel:9540491777" className="nav-link text-lg">📱</a>
      </div>
    </motion.aside>
  );
};

export default AsideBar; 
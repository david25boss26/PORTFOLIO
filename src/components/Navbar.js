import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHireMe = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-mercedes-black/80 backdrop-blur-glass' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="text-xl lg:text-2xl font-bold text-mercedes-white whitespace-nowrap">
            David's Portfolio
          </NavLink>
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <NavLink to="/" className={({ isActive }) => `nav-link text-sm xl:text-base whitespace-nowrap${isActive ? ' text-mercedes-teal font-bold' : ''}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link text-sm xl:text-base whitespace-nowrap${isActive ? ' text-mercedes-teal font-bold' : ''}`}>About</NavLink>
            <NavLink to="/services" className={({ isActive }) => `nav-link text-sm xl:text-base whitespace-nowrap${isActive ? ' text-mercedes-teal font-bold' : ''}`}>Services</NavLink>
            <NavLink to="/projects" className={({ isActive }) => `nav-link text-sm xl:text-base whitespace-nowrap${isActive ? ' text-mercedes-teal font-bold' : ''}`}>Projects</NavLink>
            <NavLink to="/experience" className={({ isActive }) => `nav-link text-sm xl:text-base whitespace-nowrap${isActive ? ' text-mercedes-teal font-bold' : ''}`}>Experience</NavLink>
            <NavLink to="/resume" className={({ isActive }) => `nav-link text-sm xl:text-base whitespace-nowrap${isActive ? ' text-mercedes-teal font-bold' : ''}`}>Resume</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link text-sm xl:text-base whitespace-nowrap${isActive ? ' text-mercedes-teal font-bold' : ''}`}>Contact</NavLink>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <button className="btn-primary glass-card text-xs lg:text-sm px-3 lg:px-4 py-2 hidden md:block" onClick={() => navigate('/projects')}>Portfolio</button>
            <button className="btn-secondary glass-card text-xs lg:text-sm px-3 lg:px-4 py-2 hidden md:block" onClick={handleHireMe}>Hire me</button>
            <button 
              className="lg:hidden text-mercedes-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-mercedes-black/95 backdrop-blur-glass border-t border-mercedes-silver/10"
            >
            <div className="px-4 py-4 space-y-4">
              <NavLink to="/" className={({ isActive }) => `block nav-link py-2${isActive ? ' text-mercedes-teal font-bold' : ''}`} onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => `block nav-link py-2${isActive ? ' text-mercedes-teal font-bold' : ''}`} onClick={() => setMobileMenuOpen(false)}>About</NavLink>
              <NavLink to="/services" className={({ isActive }) => `block nav-link py-2${isActive ? ' text-mercedes-teal font-bold' : ''}`} onClick={() => setMobileMenuOpen(false)}>Services</NavLink>
              <NavLink to="/projects" className={({ isActive }) => `block nav-link py-2${isActive ? ' text-mercedes-teal font-bold' : ''}`} onClick={() => setMobileMenuOpen(false)}>Projects</NavLink>
              <NavLink to="/experience" className={({ isActive }) => `block nav-link py-2${isActive ? ' text-mercedes-teal font-bold' : ''}`} onClick={() => setMobileMenuOpen(false)}>Experience</NavLink>
              <NavLink to="/resume" className={({ isActive }) => `block nav-link py-2${isActive ? ' text-mercedes-teal font-bold' : ''}`} onClick={() => setMobileMenuOpen(false)}>Resume</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `block nav-link py-2${isActive ? ' text-mercedes-teal font-bold' : ''}`} onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
              <div className="flex space-x-4 pt-4 border-t border-mercedes-silver/10">
                <button className="btn-primary glass-card text-sm px-4 py-2 flex-1" onClick={() => { navigate('/projects'); setMobileMenuOpen(false); }}>Portfolio</button>
                <button className="btn-secondary glass-card text-sm px-4 py-2 flex-1" onClick={() => { handleHireMe(); setMobileMenuOpen(false); }}>Hire me</button>
              </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 
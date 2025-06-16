import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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
        scrolled ? 'bg-f1-black/80 backdrop-blur-glass' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="text-2xl font-bold text-f1-white">
            David's Portfolio
          </NavLink>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' text-f1-red font-bold' : ''}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' text-f1-red font-bold' : ''}`}>About</NavLink>
            <NavLink to="/services" className={({ isActive }) => `nav-link${isActive ? ' text-f1-red font-bold' : ''}`}>Services</NavLink>
            <NavLink to="/projects" className={({ isActive }) => `nav-link${isActive ? ' text-f1-red font-bold' : ''}`}>Projects</NavLink>
            <NavLink to="/resume" className={({ isActive }) => `nav-link${isActive ? ' text-f1-red font-bold' : ''}`}>Resume</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' text-f1-red font-bold' : ''}`}>Contact</NavLink>
          </div>
          <div className="flex items-center space-x-4">
            <button className="btn-primary glass-card" onClick={() => navigate('/projects')}>Portfolio</button>
            <button className="btn-secondary glass-card" onClick={handleHireMe}>Hire me</button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 
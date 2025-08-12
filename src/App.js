import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import AsideBar from './components/AsideBar';
import ProjectsPage from './pages/ProjectsPage';
import RightSocialBar from './components/RightSocialBar';
import ButtonAnimeEffect from './components/ButtonAnimeEffect';
import Timeline from './components/Timeline';
import SkillsVisualization from './components/SkillsVisualization';
import Experience from './components/Experience';
import anime from 'animejs';

function AnimatedRoutes() {
  const location = useLocation();
  const mainRef = React.useRef(null);

  React.useEffect(() => {
    if (mainRef.current) {
      anime({
        targets: mainRef.current,
        opacity: [0, 1],
        translateY: [32, 0],
        duration: 700,
        easing: 'easeOutQuad',
      });
    }
  }, [location.pathname]);

  return (
    <div ref={mainRef} key={location.pathname} style={{ opacity: 0 }}>
      <main className="container max-w-screen-xl w-full mx-auto px-2 sm:px-4 lg:pl-32 pt-24">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Projects />
              <Timeline />
              <SkillsVisualization />
              <Experience />
              <About />
              <Contact />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gradient-to-br from-mercedes-black via-mercedes-dark-gray to-mercedes-teal/80 animate-gradient-move relative overflow-x-hidden">
        <CustomCursor />
        <ButtonAnimeEffect />
        <Navbar />
        <AsideBar />
        <RightSocialBar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App; 
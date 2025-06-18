import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import anime from 'animejs';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  const navigate = useNavigate();
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const projectsBtnRef = useRef(null);
  const contactBtnRef = useRef(null);

  const handleProjects = () => {
    navigate('/projects');
  };

  const handleContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  useEffect(() => {
    // Reset initial states
    anime.set([leftRef.current, rightRef.current], {
      opacity: 0,
      translateY: 30
    });

    // Left side animation
    anime({
      targets: leftRef.current,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 200
    });

    // Right side animation
    anime({
      targets: rightRef.current,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 400
    });
  }, []);

  // Button hover effect
  useEffect(() => {
    const animateBtn = (ref) => {
      if (!ref.current) return;
      ref.current.addEventListener('mouseenter', () => {
        anime({
          targets: ref.current,
          scale: 1.08,
          boxShadow: '0 0 16px 2px #00A19BAA',
          duration: 200,
          easing: 'easeOutQuad',
        });
      });
      ref.current.addEventListener('mouseleave', () => {
        anime({
          targets: ref.current,
          scale: 1,
          boxShadow: '0 0 0 0 #00A19B00',
          duration: 200,
          easing: 'easeOutQuad',
        });
      });
    };
    animateBtn(projectsBtnRef);
    animateBtn(contactBtnRef);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={leftRef} className="opacity-0 translate-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-mercedes-teal">David Sharma</span>
            </h1>
            <p className="text-lg text-mercedes-silver mb-8">
              Welcome to my portfolio. Explore my projects, skills, and experience in software development and engineering.
            </p>
            <div className="flex space-x-4">
              <button ref={projectsBtnRef} className="btn-primary glass-card btn-animated" onClick={handleProjects}>View Projects</button>
              <button ref={contactBtnRef} className="btn-secondary glass-card btn-animated" onClick={handleContact}>Contact Me</button>
            </div>
            <div className="mt-12 glass-card p-6 inline-block">
              <p className="text-4xl font-bold text-mercedes-teal">Final Year</p>
              <p className="text-mercedes-silver">Computer Science Student</p>
            </div>
          </div>
          
          <div ref={rightRef} className="relative opacity-0 translate-y-8">
            <div className="glass-card p-4">
              <img
                src={process.env.PUBLIC_URL + '/david-sharma.jpg'}
                alt="David Sharma"
                className="w-full h-auto rounded-lg object-cover"
                style={{ maxHeight: 480 }}
                onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x480?text=No+Image'; }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
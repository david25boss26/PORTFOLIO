import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// import anime from 'animejs'; // Uncomment when anime.js is installed

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      // anime({
      //   targets: cursorRef.current,
      //   translateX: e.clientX - 16,
      //   translateY: e.clientY - 16,
      //   duration: 120,
      //   easing: 'easeOutQuad',
      // });
      // anime({
      //   targets: cursorInnerRef.current,
      //   translateX: e.clientX - 4,
      //   translateY: e.clientY - 4,
      //   duration: 120,
      //   easing: 'easeOutQuad',
      // });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="custom-cursor"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.1,
        }}
      />
      <motion.div
        ref={cursorInnerRef}
        className="custom-cursor"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.1,
        }}
      />
    </>
  );
};

export default CustomCursor; 
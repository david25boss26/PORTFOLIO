import { useEffect } from 'react';
import anime from 'animejs';

const ButtonAnimeEffect = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll('.btn-animated');
    buttons.forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        anime({
          targets: btn,
          scale: 1.08,
          boxShadow: '0 0 16px 2px #00A19BAA',
          duration: 200,
          easing: 'easeOutQuad',
        });
      });
      btn.addEventListener('mouseleave', () => {
        anime({
          targets: btn,
          scale: 1,
          boxShadow: '0 0 0 0 #00A19B00',
          duration: 200,
          easing: 'easeOutQuad',
        });
      });
    });
    return () => {
      buttons.forEach((btn) => {
        btn.replaceWith(btn.cloneNode(true)); // Remove all listeners
      });
    };
  }, []);
  return null;
};

export default ButtonAnimeEffect; 
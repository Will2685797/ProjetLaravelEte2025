import { useEffect } from 'react';

export default function BackgroundGradientEffect() {
  useEffect(() => {
  const overlay = document.querySelector('.background-overlay');

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const maxScroll = 300; // ajuste ici si tu veux que ça disparaisse + tôt ou + tard
    const scrollPercent = Math.min(scrollTop / maxScroll, 1);
    overlay.style.opacity = scrollPercent.toString();
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // appel initial

  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return null; 
}

import React, { useState, useEffect, useRef, useCallback } from 'react';
import GameCard from './GameCard';

// Liste des jeux affichés dans le carrousel
const games = [
  { id: 1, title: 'Addition Magique', type: 'math', description: 'Un jeu amusant pour apprendre l’addition.', image_url: '/images/LogoAcceuil.png' },
  { id: 2, title: 'Les Émotions', type: 'emotion', description: 'Apprends à reconnaître les émotions En tamusant.', image_url: '/images/imageAcceuil2.png' },
  { id: 3, title: 'Programmation Fun', type: 'coding', description: 'Découvre les bases de la programmation.', image_url: '/images/imageJeux1.png' },
  { id: 4, title: 'Jeu des Formes', type: 'math', description: 'Apprends à reconnaître les formes géométriques.', image_url: '/images/imageAcceuil4.png' },
  { id: 5, title: 'Jeu 5', type: 'fun', description: 'Description du jeu 5.', image_url: '/images/imageAcceuil5.png' },
];

export default function GameCarousel() {
  const visibleCount = 3;
  const totalGames = games.length;

   // Clone des cartes (...) = Spread Operator [3][4][5] [1][2][3][4][5] [1][2][3]
  const extendedGames = [
    ...games.slice(totalGames - visibleCount, totalGames),
    ...games,
    ...games.slice(0, visibleCount),
  ];

  // États du carousel  / useState retourne un tableau de deux éléments
  const [currentIndex, setCurrentIndex] = useState(visibleCount);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);
  const gap = 10; // Espace entre les cartes

  // Refs utilisées pour le calcul et la détection des gestes / crée un objet avec une propriété .current (réserve espace mémoire)
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const lastClientX = useRef(0);
  const velocity = useRef(0);
  const dragDistance = useRef(0);
  const clickDelay = useRef(false); // ← Empêche les clics trop rapides sur les flèches

  // Mesure la largeur réelle d'une carte après rendu DOM
  useEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.getBoundingClientRect().width;
      setCardWidth(width + gap);
    }
  }, [gap]);

  // Navigation droite/gauche avec délai anti-spam de clics
  const next = useCallback(() => {
    if (isAnimating || !transitionEnabled || clickDelay.current) return;
    clickDelay.current = true;
    setTimeout(() => (clickDelay.current = false), 250); // ← Délai de 250ms entre clics sur les flèches
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, [isAnimating, transitionEnabled]);

  const prev = useCallback(() => {
    if (isAnimating || !transitionEnabled || clickDelay.current) return;
    clickDelay.current = true;
    setTimeout(() => (clickDelay.current = false), 250); // ← Délai de 250ms entre clics sur les flèches
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }, [isAnimating, transitionEnabled]);

  // Gère le repositionnement du carousel après avoir atteint les extrémités sans transition pour effet infini
  useEffect(() => {
    if (!transitionEnabled) return;
    if (currentIndex === totalGames + visibleCount) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(visibleCount);
      }, 300);
    }
    if (currentIndex === 0) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(totalGames);
      }, 300);
    }
  }, [currentIndex, transitionEnabled, totalGames, visibleCount]);

  // Réactive la transition après téléportation
  useEffect(() => {
    if (!transitionEnabled) {
      setTimeout(() => setTransitionEnabled(true), 50);
    }
  }, [transitionEnabled]);

  // Vérifie après une transition si on doit replacer le carrousel sans animation
  useEffect(() => {
    if (!isAnimating && (currentIndex === totalGames + visibleCount || currentIndex === 0)) {
      setTransitionEnabled(false);
      setCurrentIndex((c) => (c === 0 ? totalGames : visibleCount));
    }
  }, [isAnimating, currentIndex, totalGames, visibleCount]);

  // GESTION DU SWIPE
  useEffect(() => {
    const handleMove = (e) => {
      if (!isDragging.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = clientX - startX.current;
      dragDistance.current = Math.abs(delta);
      velocity.current = clientX - lastClientX.current;
      lastClientX.current = clientX;
      setDragOffset(delta);
    };

    const handleUp = (e) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      setTransitionEnabled(true);

      const threshold = cardWidth / 4;
      if (dragOffset > threshold) {
        prev();
      } else if (dragOffset < -threshold) {
        next();
      }
      setDragOffset(0);

      setHasDragged(dragDistance.current > 5);
      dragDistance.current = 0;

      if (dragDistance.current > 5 && e.target.closest('a')) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleUp);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, [cardWidth, dragOffset, next, prev]);

  // Début du swipe (drag)
  const handlePointerDown = (e) => {
    if (e.target.closest('a')) e.preventDefault();
    isDragging.current = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    startX.current = clientX;
    lastClientX.current = clientX;
    dragDistance.current = 0;
    setTransitionEnabled(false);
    setHasDragged(false);
  };

  // Rendu du carrousel visuel
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        padding: '20px 10px 0 10px',
        boxSizing: 'border-box',
      }}
    >
      <div
        ref={containerRef}
        onMouseDown={handlePointerDown}
        onTouchStart={handlePointerDown}
        style={{
          display: 'flex',
          gap: `${gap}px`,
          transition: transitionEnabled ? 'transform 0.1s linear' : 'none',
          transform: `translateX(-${cardWidth * currentIndex - dragOffset}px)`,
          cursor: isDragging.current ? 'grabbing' : 'grab',
        }}
        onTransitionEnd={() => setIsAnimating(false)}
      >
        {extendedGames.map((game, index) => (
          <div
            key={`${game.id}-${index}`}
            style={{ flex: `0 0 calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})` }}
            ref={index === visibleCount ? cardRef : null} // Référence utilisée pour calculer la largeur réelle d'une carte
          >
            <GameCard game={game} isDragging={hasDragged} />
          </div>
        ))}
      </div>

      {/* Boutons de navigation */}
      <button onClick={prev} style={buttonStyle} aria-label="Précédent">‹</button>
      <button onClick={next} style={{ ...buttonStyle, right: '0', left: 'auto' }} aria-label="Suivant">›</button>

      {/* Indicateurs de pagination */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', gap: '8px' }}>
        {games.map((_, i) => {
          const realIndex = currentIndex - visibleCount;
          const active = (realIndex + totalGames) % totalGames === i;
          return (
            <div
              key={i}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: active ? '#00bfff' : 'transparent',
                border: '2px solid #00bfff',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

// Style partagé des boutons gauche/droite
const buttonStyle = {
  position: 'absolute',
  top: '50%',
  left: '0',
  transform: 'translateY(-50%)',
  background: 'rgba(255,255,255,0.7)',
  border: 'none',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  cursor: 'pointer',
  fontSize: '24px',
  userSelect: 'none',
};

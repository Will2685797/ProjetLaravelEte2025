import React from 'react';
import { Link } from 'react-router-dom';

export default function GameCard({ game, isDragging }) {
  const handleClick = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <Link to={`/games/${game.id}`} onClick={handleClick} style={{ textDecoration: 'none' }}>
      <div style={{ padding: '10px' }}>
        <div
          style={{
            backgroundColor: '#4B0082',
            borderRadius: '5px',
            overflow: 'hidden',
            boxShadow: '0 0 6px rgba(0, 0, 0, 0.12)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.03)';
            e.currentTarget.style.boxShadow = '0 0 10px red';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 6px rgba(0, 0, 0, 0.12)';
          }}
        >
          <img
            src={game.image_url}
            alt={game.title}
            style={{ width: '100%', height: '270px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </Link>
  );
}

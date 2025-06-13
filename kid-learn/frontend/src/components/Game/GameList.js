import React from 'react';
import GameCard from './GameCard'; // ✅ Import de GameCard

const games = [
  {
    id: 1,
    title: 'Addition Magique',
    type: 'math',
    description: 'Un jeu amusant pour apprendre l’addition.',
    image_url: '/images/LogoAcceuil.png',
  },
  {
    id: 2,
    title: 'Les Émotions',
    type: 'emotion',
    description: 'Apprends à reconnaître les émotions En tamusant.',
    image_url: '/images/imageAcceuil2.png',
  },
  // Tu peux ajouter d’autres jeux ici...
];

export default function GameList() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '30px',
        padding: '0 40px',
      }}
    >
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

import React from 'react';
import GameCard from './GameCard';

// ✅ Ceci est la base de données centrale des jeux
const games = [
  {
    id: 1,
    title: 'Addition Magique',
    type: 'math',
    description: 'Un jeu amusant pour apprendre l’addition.',
    image_url: '/images/additionMagique.png',
  },
  {
    id: 2,
    title: 'Les Émotions',
    type: 'emotion',
    description: 'Apprends à reconnaître les émotions en t’amusant.',
    image_url: '/images/imageAcceuil2.png',
  },
  {
    id: 3,
    title: 'Programmation Fun',
    type: 'coding',
    description: 'Découvre les bases de la programmation.',
    image_url: '/images/imageJeux1.png',
  },
  {
    id: 4,
    title: 'Jeu des Formes',
    type: 'logic',
    description: 'Apprends à reconnaître les formes géométriques.',
    image_url: '/images/imageAcceuil4.png',
  },
];

// ✅ Permet à d'autres fichiers d'accéder à cette liste
export function getAllGames() {
  return games;
}

// ✅ Ce composant accepte une liste de jeux en props
export default function GameList({ games }) {
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

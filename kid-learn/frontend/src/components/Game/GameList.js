// src/components/GameList.js
import React from 'react';
import GameCard from './GameCard';


// ✅ Liste centrale des jeux (avec les bonnes images)
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
    image_url: '/images/JeuxEmotion.png',
  },
  {
    id: 3,
    title: 'Programmation Fun',
    type: 'coding',
    description: 'Découvre les bases de la programmation.',
    image_url: '/images/progMagique.png',
  },
  {
    id: 4,
    title: 'Jeu des Formes',
    type: 'math',
    description: 'Apprends à reconnaître les formes géométriques.',
    image_url: '/images/JeuxForme.png',
  },
  {
    id: 5,
    title: 'Jeu 5',
    type: 'fun',
    description: 'Description du jeu 5.',
    image_url: '/images/imageAcceuil5.png',
  },
];

// ✅ Fonction pour récupérer tous les jeux
export function getAllGames() {
  return games;
}

// ✅ Composant visuel (affiche une grille de GameCard)
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

import React from 'react';
import { useParams } from 'react-router-dom';
import GameList from '../components/Game/GameList';
import { games } from '../data/games'; // tu peux centraliser ta liste ici


export default function CategoryPage() {

  console.log("➡️ CategoryPage chargé avec catégorie :", category);
  const { category } = useParams();

  // Filtrer les jeux selon le type
  const filteredGames = games.filter((game) => game.type === category);

  return (
    <div style={{ padding: '40px 20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>
        Jeux : {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>

      {filteredGames.length > 0 ? (
        <GameList games={filteredGames} />
      ) : (
        <p style={{ textAlign: 'center' }}>Aucun jeu trouvé pour cette catégorie.</p>
      )}
    </div>
  );
}

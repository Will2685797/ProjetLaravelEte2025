import React from 'react';
import { useParams } from 'react-router-dom';
import GameList, { getAllGames } from '../components/Game/GameList';
import Navbar from '../components/Navigation/Navbar';

export default function CategoryPage() {

  const { category } = useParams();
  const allGames = getAllGames(); // ✅ On récupère tous les jeux
  const filteredGames = allGames.filter((game) => game.type === category);

  return (
    <>
     <Navbar />
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
    </>

  );
}

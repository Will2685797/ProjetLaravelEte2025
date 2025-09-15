import React from 'react';
import { useParams } from 'react-router-dom';
import GameList, { getAllGames } from '../components/Game/GameList';
import Navbar from '../components/Navigation/Navbar';
import GameCarousel from '../components/Game/GameCarousel'; 

export default function CategoryPage() {

  const { category } = useParams();
  const allGames = getAllGames(); // ✅ On récupère tous les jeux
  const filteredGames = allGames.filter((game) => game.type === category);

  return (
    <>
      <Navbar />

      {/* Image test en absolute */}
      <div 
        style={{
          position: "absolute",       // ✅ corrigé
          top: "200px",               // ajuste pour descendre sous la navbar
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",             // largeur de l'image
          height: "300px",            // hauteur de l'image
          backgroundImage: 'url("/images/imageFinaleLabo8.png")',
          backgroundSize: "contain",  // garde les proportions
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: -1,                 // passe derrière le contenu
        }}
      />

      <GameCarousel />

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

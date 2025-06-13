/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navigation/Navbar';
import GameList from '../components/Game/GameList';
import GameCarousel from '../components/Game/GameCarousel'; 

export default function Index() {
  return (
    <>
      {/* Fond fixe */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundImage: `url("/images/imageFinal.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Contenu principal : jeux */}
      <div
        style={{
          zIndex: 1,
          position: 'relative',
          marginTop: '460px', // 👈 Contrôle ici l’espace entre le nav et les jeux
          paddingBottom: '40px',
        }}
      >
        <h1 style={{ textAlign: 'center', color: 'black', marginBottom: '30px' }}>
          Découvre nos jeux magiques ✨
        </h1>

        {/* <GameList /> */}
        <GameCarousel />
      </div>
    </>
  );
}

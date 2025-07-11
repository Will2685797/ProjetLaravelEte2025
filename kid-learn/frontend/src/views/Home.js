/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navigation/Navbar';
import GameList from '../components/Game/GameList';
import GameCarousel from '../components/Game/GameCarousel'; 

export default function Home() {
  return (
    <>
      {/* Couleur de fond (en dessous de tout) */}
      <div className="background-color-layer"></div>

      {/* Fond fixe */}
      <div className="background-image"></div>

      {/* Navbar */}
      <Navbar />

      {/* Contenu principal : jeux */}

        <div className="main-content">

          <h1 style={{ textAlign: 'center', color: 'black', marginBottom: '30px' }}>
            Découvre nos jeux magiques ✨
          </h1>

          {/* <GameList /> */}
          <GameCarousel />

        </div>

    </>
  );
}

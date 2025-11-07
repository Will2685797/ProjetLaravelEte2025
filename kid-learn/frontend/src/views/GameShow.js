import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footers/FooterWL";
import { getAllGames } from "../components/Game/GameList";
import "../assets/styles/show.css";

const games = getAllGames();

export default function GameShow() {
  const { id } = useParams();
  const game = games.find((g) => g.id === parseInt(id));

  if (!game) {
    return (
      <>
        <Navbar />
        <div style={{ textAlign: "center", padding: "80px" }}>
          <h2>Jeu introuvable 😢</h2>
          <Link to="/" className="link-back">Retour à l'accueil</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

        <div className="background-color-layer"></div>

        <div className="show-image-container">

        <img src={game.image_url} alt={game.title} className="show-image" />

        </div>

        <h2  className="magic-title">

        {game.title}

        </h2>

    
      <Footer />
    </>
  );
}

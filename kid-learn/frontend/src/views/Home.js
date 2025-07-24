/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navigation/Navbar';
import GameCarousel from '../components/Game/GameCarousel'; 
import CategoryGrid from '../components/Game/CategoryGrid';
import BackgroundGradientEffect from '../effects/BackgroundGradientEffect';
import Footer from "../components/Footers/FooterWL";



export default function Home() {
  return (
    <>
    
    
      {/* Couleur de fond (en dessous de tout) */}
      <div className="background-color-layer"></div>
      {/* Fond fixe */}
      <div className="background-image"></div>
      
      <div className="background-overlay"></div>

      <BackgroundGradientEffect />
        

      {/* Navbar */}
      <Navbar />

      {/* Contenu principal : jeux */}

        <div className="main-content">

          <h1 style={{ textAlign: 'center', color: 'black', marginBottom: '30px' }}>
            Découvre nos jeux magiques ✨
          </h1>

          {/* <GameList /> */}
          <GameCarousel />
          

          <div style={{ marginTop: '50px' }}>
           

            <CategoryGrid />
            
          
          </div>
          
        </div>
       <Footer />
    </>
  );
}

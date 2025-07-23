import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#4B0082', color: 'white' }}>
      {/* Ligne 1 : Logo */}
        <div
            style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            borderBottom: '1px solid black',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img 
                    src="/images/LogoAtelier.png"
                    alt="Logo"
                    style={{ height: '80px', marginRight: '10px' }}
                />
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>L’atelier Magique</span>
            </div>



            {/* Colonne de droite : Connexion + Recherche */}
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: '100%', 
            }}
            >
             <div style={{ display: 'flex', gap: '15px', padding: '10px 50px', fontSize: '18px' }}>


                <Link to="/profil"  style={{ ...linkStyle, whiteSpace: 'nowrap' }}>

                    Se connecter

                </Link>

                </div>

                <input
                    type="text"
                    placeholder="Recherche..."
                    className="search-bar"
                />
                
            </div>
      </div>


      {/* Ligne 2 : Liens */}
      <div
            style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            flexWrap: 'wrap', // utile pour responsive
            }}
        >
            {/* Liens */}
            <div style={{ display: 'flex', gap: '40px' , fontSize: '18px'}}>

                <Link to="/" style={linkStyle}>Accueil</Link>
                <Link to="/activites" style={linkStyle}>Activités</Link>
                <Link to="/contact" style={linkStyle}>Contact</Link>
                <Link to="/profil" style={linkStyle}>Ma liste</Link>

            </div>

       
      </div>
    </nav>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '500',
};

export default Navbar;

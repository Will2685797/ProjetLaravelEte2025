import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import CategoryPage from './components/Game/CategoryPage';

function About() {
  return <h2>À propos de ce projet</h2>;
}

function App() {
  return (
    <Router> 
      <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
        <Link to="/" style={{ marginRight: 10 }}>Jeu d'émotions</Link>
        <Link to="/about">À propos</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activites/:category" element={<CategoryPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmotionGame from './components/EmotionGame';

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
        <Route path="/" element={<EmotionGame />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
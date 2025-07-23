import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './CategoryGrid.css'; // pour les classes fade-in

const categories = [
  {
    title: "Les Émotions",
    type: "emotion",
    color: "#FFD1DC",
    emoji: "😊",
    description: "Apprends à reconnaître ce que tu ressens",
  },
  {
    title: "Mathématiques",
    type: "math",
    color: "#D1F1FF",
    emoji: "🧮",
    description: "Additionne, soustrais et résous des énigmes",
  },
  {
    title: "Programmation",
    type: "coding",
    color: "#E0FFD1",
    emoji: "💻",
    description: "Découvre le monde magique du code",
  },
  {
    title: "Formes & Logique",
    type: "logic",
    color: "#FFF4D1",
    emoji: "🔷",
    description: "Identifie des formes et développe ta logique",
  },
];

export default function CategoryGrid() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleClick = (type) => {
    navigate(`/activites/${type}`);
  };

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? "visible" : ""}`}
      style={styles.grid}
    >
      {categories.map((cat) => (
        <div
          key={cat.type}
          style={{ ...styles.card, backgroundColor: cat.color }}
          onClick={() => handleClick(cat.type)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
          }}
        >
          <div style={styles.emoji}>{cat.emoji}</div>
          <h3>{cat.title}</h3>
          <p>{cat.description}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "40px 20px",
    maxWidth: "1300px",
    margin: "0 auto",
  },
  card: {
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  emoji: {
    fontSize: "40px",
    marginBottom: "10px",
  },
};

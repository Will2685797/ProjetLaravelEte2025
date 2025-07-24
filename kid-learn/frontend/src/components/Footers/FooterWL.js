export default function FooterWL() {

    const linkStyle = {
        color: "#e0c3ff",
        margin: "0 8px",
        textDecoration: "none",
        fontWeight: "400",
        transition: "color 0.3s ease-in-out"
    };

  return (
    <footer
      style={{
        backgroundColor: "#2B004B",
        color: "white",
        padding: "30px 20px",
        textAlign: "center",
        fontSize: "14px",
        marginTop: "60px",
        boxShadow: "0 -4px 12px rgba(255, 255, 255, 0.1)", // profondeur douce
        position: "relative",
      }}
    >
         {/* LIGNE MAGIQUE */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "2px",
      background: "linear-gradient(90deg, #ffccff, #cc99ff, #ffccff)",
      boxShadow: "0 0 8px #cc99ff",
      animation: "glow 3s ease-in-out infinite",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      opacity: 0.7,
    }}
  />

   <div style={{ marginBottom: "10px" }}>

        <a
            href="/"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#e0c3ff")}
        >
        Accueil
        </a>

        {" | "}

        <a
            href="/contact"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#e0c3ff")}
        >
        Contact
        </a>

        {" | "}

        <a
            href="/faq"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#e0c3ff")}
        >
        FAQ
        </a>

  </div>
      <p style={{ margin: 0 }}>© 2025 Mon Atelier Magique ✨ — Tous droits réservés</p>
      <p style={{ margin: "5px 0 0 0", fontSize: "12px", opacity: 0.6 }}>
        Fait avec ❤️ par WL CODE
      </p>
    </footer>
  );
}
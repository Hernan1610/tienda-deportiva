import { Link } from "react-router-dom";
import { productos } from "../data/productos";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>

      {/* 🔥 HERO */}
      <section style={heroStyle}>
        <h1 style={titleStyle}>
          Vestite para sentirte bien ✨
        </h1>

        <p style={subtitleStyle}>
          Ropa deportiva cómoda, femenina y pensada para tu día a día
        </p>

        <Link to="/productos">
          <button style={ctaStyle}>
            Ver colección
          </button>
        </Link>
      </section>

      {/* 🔥 DIVISOR */}
      <div style={divider} />

      {/* 👕 CATEGORÍAS */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Explorá BALANCE</h2>

        <div style={gridStyle}>
          {["Todo", "Ropa", "Toallas", "Medias"].map((cat) => (
            <Link
              key={cat}
              to="/productos"
              style={cardStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "none")
              }
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* 💖 EMOCIONAL */}
      <section style={emotionSection}>
        <h2 style={emotionTitle}>
          Más que ropa deportiva
        </h2>

        <p style={emotionText}>
          BALANCE es sentirte cómoda, segura y linda mientras entrenás o en tu día a día.
        </p>
      </section>

      {/* ⭐ DESTACADOS */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Lo más elegido</h2>

        <div style={gridProducts}>
          {productos.slice(0, 4).map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>
      </section>

      {/* 💬 CTA FINAL */}
      <section style={ctaSection}>
        <h2 style={ctaTitle}>
          Elegí tu conjunto ideal 💖
        </h2>

        <p style={ctaText}>
          Te asesoramos por WhatsApp en minutos ✨
        </p>

        <a
          href="https://wa.me/5492634391870"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={ctaStyle}>
            Comprar por WhatsApp
          </button>
        </a>
      </section>
    </div>
  );
};

/* 🎨 ESTILOS */

const heroStyle = {
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "20px",
  gap: "10px", // 🔥 clave
  background: "linear-gradient(180deg, #fdf7fb 0%, #ffffff 100%)"
};

const titleStyle = {
  fontSize: "clamp(28px, 7vw, 44px)", // 🔥 responsive real
  marginBottom: "10px",
  fontWeight: "700",
  letterSpacing: "-1px",
  color: "#1a1a1a",
  lineHeight: "1.2",
  maxWidth: "300px"
};

const subtitleStyle = {
  color: "#666",
  marginBottom: "20px",
  maxWidth: "280px",
  fontSize: "14px"
};

const ctaStyle = {
  padding: "12px 26px",
  borderRadius: "25px",
  border: "none",
  background: "linear-gradient(135deg, #d4a5ff, #b57bff)",
  color: "#fff",
  fontWeight: "600",
  cursor: "pointer",
  fontSize: "14px"
};

const divider = {
  height: "1px",
  width: "80%",
  margin: "0 auto",
  background: "linear-gradient(to right, transparent, #eee, transparent)"
};

const sectionStyle = {
  padding: "50px 20px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const sectionTitle = {
  textAlign: "center",
  marginBottom: "25px",
  fontWeight: "600",
  fontSize: "20px"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
  gap: "12px"
};

const gridProducts = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "15px"
};

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "15px",
  textAlign: "center",
  textDecoration: "none",
  color: "#333",
  fontWeight: "500",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  transition: "0.3s"
};

const emotionSection = {
  textAlign: "center",
  padding: "50px 20px"
};

const emotionTitle = {
  fontSize: "20px",
  marginBottom: "10px"
};

const emotionText = {
  color: "#666",
  maxWidth: "300px",
  margin: "0 auto",
  fontSize: "14px"
};

const ctaSection = {
  textAlign: "center",
  padding: "60px 20px"
};

const ctaTitle = {
  marginBottom: "10px",
  fontSize: "20px"
};

const ctaText = {
  color: "#666",
  marginBottom: "20px",
  fontSize: "14px"
};

export default Home;
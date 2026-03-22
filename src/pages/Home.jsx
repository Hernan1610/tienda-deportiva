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

      {/* 🔥 DIVISOR PRO */}
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

      {/* 💖 SECCIÓN EMOCIONAL */}
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
  minHeight: "85vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "40px 20px",
  background: "linear-gradient(180deg, #fdf7fb 0%, #ffffff 100%)"
};

const titleStyle = {
  fontSize: "clamp(36px, 6vw, 60px)",
  marginBottom: "12px",
  fontWeight: "700",
  letterSpacing: "-1px",
  color: "#1a1a1a"
};

const subtitleStyle = {
  color: "#666",
  marginBottom: "30px",
  maxWidth: "400px"
};

const ctaStyle = {
  padding: "14px 34px",
  borderRadius: "30px",
  border: "none",
  background: "linear-gradient(135deg, #d4a5ff, #b57bff)",
  color: "#fff",
  fontWeight: "600",
  cursor: "pointer",
  boxShadow: "0 10px 30px rgba(180,120,255,0.35)"
};

const divider = {
  height: "1px",
  width: "80%",
  margin: "0 auto",
  background: "linear-gradient(to right, transparent, #eee, transparent)"
};

const sectionStyle = {
  padding: "60px 20px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const sectionTitle = {
  textAlign: "center",
  marginBottom: "30px",
  fontWeight: "600",
  fontSize: "22px"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
  gap: "15px"
};

const gridProducts = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px"
};

const cardStyle = {
  background: "#fff",
  padding: "25px",
  borderRadius: "18px",
  textAlign: "center",
  textDecoration: "none",
  color: "#333",
  fontWeight: "500",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  transition: "0.3s"
};

const emotionSection = {
  textAlign: "center",
  padding: "60px 20px"
};

const emotionTitle = {
  fontSize: "24px",
  marginBottom: "10px"
};

const emotionText = {
  color: "#666",
  maxWidth: "500px",
  margin: "0 auto"
};

const ctaSection = {
  textAlign: "center",
  padding: "80px 20px"
};

const ctaTitle = {
  marginBottom: "10px",
  fontSize: "24px"
};

const ctaText = {
  color: "#666",
  marginBottom: "20px"
};

export default Home;
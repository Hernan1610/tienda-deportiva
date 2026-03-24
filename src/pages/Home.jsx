import { Link } from "react-router-dom";
import { productos } from "../data/productos";
import ProductCard from "../components/ProductCard";
import heroImg from "../assets/heroo.png";

const Home = () => {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>

      {/* 🔥 HERO PRO */}
      <section style={heroStyle}>
        <div style={overlay} />
        <img src={heroImg} alt="Balance" style={heroImage} />

        <div style={heroContent}>
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
        </div>
      </section>

      {/* DIVISOR */}
      <div style={divider} />

      {/* CATEGORÍAS */}
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

      {/* EMOCIONAL */}
      <section style={emotionSection}>
        <h2 style={emotionTitle}>
          Más que ropa deportiva
        </h2>

        <p style={emotionText}>
          BALANCE es sentirte cómoda, segura y linda mientras entrenás o en tu día a día.
        </p>
      </section>

      {/* DESTACADOS */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Lo más elegido</h2>

        <div style={gridProducts}>
          {productos.slice(0, 4).map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
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

/* HERO */
const heroStyle = {
  position: "relative",
  height: "90vh",
  width: "100%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const heroImage = {
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  top: 0,
  left: 0,
  animation: "zoomHero 20s ease-in-out infinite alternate"
};

const overlay = {
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
  zIndex: 1
};

const heroContent = {
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  color: "#fff",
  padding: "20px",
  maxWidth: "90%"
};

const titleStyle = {
  fontSize: "clamp(30px, 6vw, 60px)",
  marginBottom: "10px",
  fontWeight: "700",
  letterSpacing: "-1px",
  lineHeight: "1.1",
  textShadow: "0 5px 20px rgba(0,0,0,0.4)"
};

const subtitleStyle = {
  color: "rgba(255,255,255,0.85)",
  marginBottom: "25px",
  fontSize: "15px"
};

const ctaStyle = {
  padding: "14px 30px",
  borderRadius: "30px",
  border: "none",
  background: "linear-gradient(135deg, #d4a5ff, #b57bff)",
  color: "#fff",
  fontWeight: "600",
  cursor: "pointer",
  boxShadow: "0 10px 30px rgba(180,120,255,0.4)"
};

/* RESTO */
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
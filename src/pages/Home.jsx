import { Link } from "react-router-dom";
import { productos } from "../data/productos";
import ProductCard from "../components/ProductCard";
import heroImg from "../assets/heroo.png";

const Home = () => {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>

      {/* HERO */}
      <section style={heroStyle}>
        <div style={heroBox}>

          <img
            src={heroImg}
            alt="Balance"
            style={heroImage}
          />

          <div style={heroContent}>
            <h1 style={titleStyle}>
              Vestite para sentirte bien ✨
            </h1>

            <p style={subtitleStyle}>
              Ropa deportiva cómoda, femenina y pensada para tu día a día
            </p>

            <Link to="/productos">
              <button
                style={ctaStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(180,120,255,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(180,120,255,0.4)";
                }}
              >
                Ver colección
              </button>
            </Link>
          </div>

        </div>
      </section>

      <div style={divider} />

      {/* CATEGORÍAS */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Explorá BALANCE</h2>

        <div style={gridStyle}>
          {["Todo", "Ropa", "Toallas", "Medias"].map((cat) => (
            <Link key={cat} to="/productos" style={cardStyle}>
              {cat}
            </Link>
          ))}
        </div>
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

      {/* CTA */}
      <section style={ctaSection}>
        <h2 style={ctaTitle}>Elegí tu conjunto ideal 💖</h2>
        <p style={ctaText}>Te asesoramos por WhatsApp en minutos ✨</p>

        <a href="https://wa.me/5492634391870" target="_blank">
          <button style={ctaStyle}>Comprar por WhatsApp</button>
        </a>
      </section>

    </div>
  );
};

/* HERO */

const heroStyle = {
  padding: "20px",
  display: "flex",
  justifyContent: "center"
};

const heroBox = {
  width: "100%",
  maxWidth: "1000px",
  borderRadius: "20px",
  overflow: "hidden",
  position: "relative",
  boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
};

const heroImage = {
  width: "100%",
  height: "auto",
  display: "block",
  objectFit: "cover"
};

const heroContent = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  padding: "20px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(6px)",
  border: "1px solid rgba(255,255,255,0.2)"
};

const titleStyle = {
  color: "#fff",
  fontSize: "clamp(28px,5vw,42px)",
  fontWeight: "700"
};

const subtitleStyle = {
  color: "#eee",
  fontSize: "14px",
  marginBottom: "15px"
};

const ctaStyle = {
  padding: "12px 26px",
  borderRadius: "25px",
  border: "none",
  background: "linear-gradient(135deg,#d4a5ff,#b57bff)",
  color: "#fff",
  fontWeight: "600",
  cursor: "pointer",
  transition: "0.3s",
  boxShadow: "0 10px 25px rgba(180,120,255,0.4)"
};

/* RESTO */

const divider = {
  height: "1px",
  margin: "20px auto",
  width: "80%",
  background: "#eee"
};

const sectionStyle = {
  padding: "40px 20px"
};

const sectionTitle = {
  textAlign: "center",
  marginBottom: "20px"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))",
  gap: "12px"
};

const gridProducts = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: "15px"
};

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
};

const ctaSection = {
  textAlign: "center",
  padding: "50px 20px"
};

const ctaTitle = {
  marginBottom: "10px"
};

const ctaText = {
  marginBottom: "15px"
};

export default Home;
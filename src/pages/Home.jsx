import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ color: "#fff" }}>

      {/* 🔥 HERO */}
      <section style={heroStyle}>
        <h1 style={titleStyle}>
          Entrená con estilo
        </h1>

        <p style={subtitleStyle}>
          Ropa deportiva y accesorios para tu día a día
        </p>

        <Link to="/productos">
          <button style={ctaStyle}>
            Ver productos
          </button>
        </Link>
      </section>

      {/* 🔥 CATEGORÍAS */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Categorías</h2>

        <div style={gridStyle}>
          <Link to="/productos" style={cardStyle}>Todo</Link>
          <Link to="/productos" style={cardStyle}>Ropa</Link>
          <Link to="/productos" style={cardStyle}>Toallas</Link>
          <Link to="/productos" style={cardStyle}>Medias</Link>
        </div>
      </section>

      {/* 🔥 BENEFICIOS */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>¿Por qué elegir BALANCE?</h2>

        <div style={gridStyle}>
  <div style={benefitCard}>🔥 Calidad premium</div>
  <div style={benefitCard}>📍 Coordinamos entrega rápida</div>
  <div style={benefitCard}>💬 Atención directa por WhatsApp</div>
</div>
      </section>

    </div>
  );
};

/* 🎨 ESTILOS */

const heroStyle = {
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "20px"
};

const titleStyle = {
  fontSize: "3rem",
  marginBottom: "10px"
};

const subtitleStyle = {
  opacity: 0.7,
  marginBottom: "20px"
};

const ctaStyle = {
  padding: "12px 30px",
  borderRadius: "25px",
  border: "none",
  background: "#25D366",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer"
};

const sectionStyle = {
  padding: "40px 20px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const sectionTitle = {
  textAlign: "center",
  marginBottom: "20px"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "20px"
};

const cardStyle = {
  background: "#111",
  padding: "30px",
  borderRadius: "15px",
  textAlign: "center",
  textDecoration: "none",
  color: "#fff",
  fontWeight: "bold",
  transition: "0.3s"
};

const benefitCard = {
  background: "#111",
  padding: "20px",
  borderRadius: "15px",
  textAlign: "center"
};

export default Home;
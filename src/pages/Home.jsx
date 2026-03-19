import { Link } from "react-router-dom";
import { productos } from "../data/productos";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>

      {/* HERO */}

      <section style={{
        height: "80vh",
        backgroundImage: "url('https://picsum.photos/1200/600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{
          textAlign: "center",
          background: "rgba(0,0,0,0.6)",
          padding: "30px",
          borderRadius: "10px"
        }}>
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
            Equipate como un profesional
          </h1>

          <p style={{ marginBottom: "20px" }}>
            Ropa deportiva, toallas y accesorios
          </p>

          <Link to="/productos">
            <button
  style={{
    padding: "12px 25px",
    background: "white",
    color: "black",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "0.3s"
  }}
  onMouseEnter={(e) => (e.target.style.background = "#ddd")}
  onMouseLeave={(e) => (e.target.style.background = "white")}
>
  Ver productos
</button>
          </Link>
        </div>
      </section>
       <section style={{ padding: "60px 40px" }}>
  <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
    Productos destacados
  </h2>

  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px"
  }}>
    {productos.slice(0, 3).map((p) => (
      <ProductCard key={p.id} producto={p} />
    ))}
  </div>
</section>
      {/* SECCIÓN EXTRA */}
      <section style={{
        padding: "50px",
        textAlign: "center"
      }}>
        <h2>Calidad y rendimiento</h2>
        <p>
          Productos diseñados para acompañarte en cada entrenamiento
        </p>
      </section>

    </div>
  );
};

export default Home;
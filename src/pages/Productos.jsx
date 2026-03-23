import { productos } from "../data/productos";
import ProductCard from "../components/ProductCard";
import { useParams, useNavigate } from "react-router-dom";

const Productos = () => {
  const { categoria } = useParams();
  const navigate = useNavigate();

  const productosFiltrados = categoria
    ? productos.filter((p) => p.categoria === categoria)
    : productos;

  const getButtonStyle = (cat) => ({
    padding: "10px 18px",
    borderRadius: "20px",
    border: "1px solid #eee",
    cursor: "pointer",
    fontWeight: "500",
    transition: "0.25s",
    background: categoria === cat ? "var(--accent-soft)" : "#fff",
    color: categoria === cat ? "var(--accent)" : "#333",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
  });

  const cambiarCategoria = (cat) => {
    if (cat === "todos") {
      navigate("/productos");
    } else {
      navigate(`/productos/${cat}`);
    }
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        background: "var(--bg)",
        minHeight: "100vh"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "var(--text)"
        }}
      >
        Productos
      </h1>

      {/* 🔥 GRID REAL RESPONSIVE */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "15px"
        }}
      >
        {productosFiltrados.map((p) => (
          <ProductCard key={p.id} producto={p} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
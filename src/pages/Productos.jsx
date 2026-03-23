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
    padding: "10px 20px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
    background: categoria === cat ? "#fff" : "#222",
    color: categoria === cat ? "#000" : "#fff",
  });

  const cambiarCategoria = (cat) => {
    if (cat === "todos") {
      navigate("/productos");
    } else {
      navigate(`/productos/${cat}`);
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Productos
      </h1>

      {/* BOTONES */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          margin: "20px 0",
        }}
      >
        <button
          style={getButtonStyle(undefined)}
          onClick={() => cambiarCategoria("todos")}
        >
          Todos
        </button>

        <button
          style={getButtonStyle("ropa")}
          onClick={() => cambiarCategoria("ropa")}
        >
          Ropa
        </button>

        <button
          style={getButtonStyle("toallas")}
          onClick={() => cambiarCategoria("toallas")}
        >
          Toallas
        </button>

        <button
          style={getButtonStyle("medias")}
          onClick={() => cambiarCategoria("medias")}
        >
          Medias
        </button>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: window.innerWidth < 600 ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
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
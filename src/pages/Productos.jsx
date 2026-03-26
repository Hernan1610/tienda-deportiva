import { productos } from "../data/productos";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

const Productos = () => {
  const [filtro, setFiltro] = useState("todos");

  const productosFiltrados =
    filtro === "todos"
      ? productos
      : productos.filter((p) => p.subcategoria === filtro);

  const btnStyle = (activo) => ({
    padding: "10px 18px",
    borderRadius: "20px",
    border: "1px solid #eee",
    cursor: "pointer",
    fontWeight: "500",
    background: activo ? "var(--accent-soft)" : "#fff",
    color: activo ? "var(--accent)" : "#333",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  });

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Productos
      </h1>

      {/* 🔥 MENU TIPO TIENDA */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "25px",
        }}
      >
        <button style={btnStyle(filtro === "todos")} onClick={() => setFiltro("todos")}>
          Ver todo
        </button>

        <button style={btnStyle(filtro === "toallones")} onClick={() => setFiltro("toallones")}>
          Toallones
        </button>

        <button style={btnStyle(filtro === "toallas")} onClick={() => setFiltro("toallas")}>
          Toallas
        </button>
      </div>

      {/* 🔥 GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "15px",
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
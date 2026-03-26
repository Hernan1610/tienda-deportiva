import { productos } from "../data/productos";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";

const Productos = () => {
  const { categoria, subcategoria } = useParams();

  const productosFiltrados = productos.filter((p) => {
    // 👉 VER TODO
    if (!categoria) return true;

    // 👉 SOLO CATEGORIA
    if (categoria && !subcategoria) {
      return p.categoria === categoria;
    }

    // 👉 CATEGORIA + SUBCATEGORIA
    return (
      p.categoria === categoria &&
      p.subcategoria === subcategoria
    );
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Productos
      </h1>

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
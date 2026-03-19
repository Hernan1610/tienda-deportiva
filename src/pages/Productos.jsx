import { productos } from "../data/productos";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";

const Productos = () => {
  const { categoria } = useParams();

  const filtrados = categoria
    ? productos.filter((p) => p.categoria === categoria)
    : productos;

  return (
    <div>
     <h1 style={{ textAlign: "center", marginTop: "20px" }}>
  Productos
</h1>

      <div style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  padding: "20px"
}}>
    
        {filtrados.map((p) => (
          <ProductCard key={p.id} producto={p} />
        ))}
      </div>
      
    </div>
  );
};

export default Productos;
import { useState, useContext } from "react";
import CartContext from "../context/CartContext";

const ProductCard = ({ producto }) => {
  const [hover, setHover] = useState(false);
  const { agregarAlCarrito } = useContext(CartContext);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#111",
        borderRadius: "20px",
        overflow: "hidden",
        transition: "0.3s",
        transform: hover ? "translateY(-8px)" : "none",
        boxShadow: hover
          ? "0 15px 40px rgba(0,0,0,0.6)"
          : "0 5px 15px rgba(0,0,0,0.3)"
      }}
    >
      {/* 📸 IMAGEN */}
      <div style={{ overflow: "hidden" }}>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            transition: "0.4s",
            transform: hover ? "scale(1.08)" : "scale(1)"
          }}
        />
      </div>

      {/* 📦 INFO */}
      <div style={{ padding: "15px" }}>
        <h3 style={{
          fontSize: "1rem",
          marginBottom: "5px"
        }}>
          {producto.nombre}
        </h3>

        <p style={{
          fontWeight: "bold",
          marginBottom: "10px"
        }}>
          ${producto.precio}
        </p>

        {/* 🛒 BOTÓN */}
        <button
          onClick={() => agregarAlCarrito(producto)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "12px",
            border: "none",
            background: "#25D366",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s"
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
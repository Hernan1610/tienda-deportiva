import { useState, useContext } from "react";
import CartContext from "../context/CartContext";

const ProductCard = ({ producto }) => {
  const [hover, setHover] = useState(false);
  const { agregarAlCarrito } = useContext(CartContext);
  const [talleSeleccionado, setTalleSeleccionado] = useState("");

  // 🔥 MODO ADMIN
  const esAdmin = localStorage.getItem("admin") === "true";

  // 🔥 STOCK DINÁMICO
  const stockGuardado =
    JSON.parse(localStorage.getItem("stock")) || {};

  const stockActual =
    stockGuardado[producto.id] ?? producto.stock;

  const sinStock = stockActual === 0;

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
            objectFit: "contain",
            background: "#fff",
            transition: "0.4s",
            transform: hover ? "scale(1.05)" : "scale(1)"
          }}
        />
      </div>

      {/* 📦 INFO */}
      <div style={{ padding: "15px" }}>
        <h3 style={{ fontSize: "1rem", marginBottom: "5px" }}>
          {producto.nombre}
        </h3>

        <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
          ${producto.precio}
        </p>

        {/* 👕 TALLES */}
        <div style={{ marginBottom: "10px" }}>
          {producto.talles.map((talle) => (
            <button
              key={talle}
              onClick={() => setTalleSeleccionado(talle)}
              style={{
                margin: "5px",
                padding: "5px 10px",
                borderRadius: "10px",
                border: "1px solid #fff",
                background:
                  talleSeleccionado === talle ? "#25D366" : "transparent",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              {talle}
            </button>
          ))}
        </div>

        {/* 🔥 STOCK */}
        <p style={{ fontSize: "12px", opacity: 0.7 }}>
          {sinStock ? "Sin stock" : `Stock: ${stockActual}`}
        </p>

        {/* 🛒 BOTÓN */}
        <button
          disabled={sinStock}
          onClick={() => {
            if (!talleSeleccionado) {
              alert("Seleccioná un talle");
              return;
            }

            agregarAlCarrito({
              ...producto,
              talle: talleSeleccionado
            });
          }}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "12px",
            border: "none",
            background: sinStock ? "#555" : "#25D366",
            color: "#fff",
            fontWeight: "bold",
            cursor: sinStock ? "not-allowed" : "pointer",
            marginTop: "10px"
          }}
        >
          {sinStock ? "Sin stock" : "Agregar al carrito"}
        </button>

        {/* 🔥 EDITAR STOCK SOLO ADMIN */}
        {esAdmin && (
          <input
            type="number"
            placeholder="Editar stock"
            defaultValue={stockActual}
            onChange={(e) => {
              const nuevoStock = Number(e.target.value);

              const stockGuardado =
                JSON.parse(localStorage.getItem("stock")) || {};

              stockGuardado[producto.id] = nuevoStock;

              localStorage.setItem(
                "stock",
                JSON.stringify(stockGuardado)
              );
            }}
            style={{
              marginTop: "10px",
              width: "100%",
              padding: "5px",
              borderRadius: "8px",
              border: "none"
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
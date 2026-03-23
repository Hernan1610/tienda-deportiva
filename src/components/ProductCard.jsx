import { useState, useContext } from "react";
import CartContext from "../context/CartContext";

const ProductCard = ({ producto }) => {
  const [hover, setHover] = useState(false);
  const { agregarAlCarrito } = useContext(CartContext);
  const [talleSeleccionado, setTalleSeleccionado] = useState("");

  const esAdmin = localStorage.getItem("admin") === "true";

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
        position: "relative",
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "0.25s",
        transform: hover ? "translateY(-4px)" : "none",
        boxShadow: hover
          ? "0 15px 35px rgba(0,0,0,0.1)"
          : "0 5px 15px rgba(0,0,0,0.05)",
        border: "1px solid #eee"
      }}
    >

      {/* 🔥 BADGE */}
      {producto.badge && (
        <span
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            background: "linear-gradient(135deg, #d4a5ff, #b57bff)",
            color: "#fff",
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "10px",
            fontWeight: "600",
            zIndex: 2
          }}
        >
          {producto.badge}
        </span>
      )}

      {/* 📸 IMAGEN */}
      <div style={{ overflow: "hidden", background: "#fafafa" }}>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          style={{
            width: "100%",
            height: "160px", // 🔥 MOBILE PRO
            objectFit: "contain",
            transition: "0.3s",
            transform: hover ? "scale(1.05)" : "scale(1)"
          }}
        />
      </div>

      {/* 📦 INFO */}
      <div style={{ padding: "12px" }}>
        
        {/* 🏷 NOMBRE */}
        <h3
          style={{
            fontSize: "13px",
            marginBottom: "4px",
            color: "#1a1a1a",
            fontWeight: "500"
          }}
        >
          {producto.nombre}
        </h3>

        {/* 💰 PRECIO */}
        <p
          style={{
            fontWeight: "600",
            marginBottom: "8px",
            color: "#b57bff",
            fontSize: "14px"
          }}
        >
          ${producto.precio.toLocaleString()}
        </p>

        {/* 👕 TALLES */}
        <div style={{ marginBottom: "8px" }}>
          {producto.talles.map((talle) => (
            <button
              key={talle}
              onClick={() => setTalleSeleccionado(talle)}
              style={{
                margin: "3px",
                padding: "4px 8px",
                borderRadius: "15px",
                border: "1px solid #ddd",
                background:
                  talleSeleccionado === talle
                    ? "var(--accent)"
                    : "#fff",
                color:
                  talleSeleccionado === talle
                    ? "#fff"
                    : "#333",
                cursor: "pointer",
                fontSize: "11px"
              }}
            >
              {talle}
            </button>
          ))}
        </div>

        {/* 🔥 STOCK (opcional, más limpio en mobile) */}
        <p
          style={{
            fontSize: "11px",
            color: "#999",
            marginBottom: "5px"
          }}
        >
          {sinStock ? "Sin stock" : `Stock: ${stockActual}`}
        </p>

        {/* 🛒 BOTÓN PRO */}
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
            borderRadius: "20px",
            border: "none",
            background: sinStock
              ? "#ccc"
              : "linear-gradient(135deg, #d4a5ff, #b57bff)",
            color: "#fff",
            fontWeight: "600",
            fontSize: "12px",
            cursor: sinStock ? "not-allowed" : "pointer",
            marginTop: "6px"
          }}
        >
          {sinStock ? "Sin stock" : "Agregar 🛍️"}
        </button>

        {/* 🔧 ADMIN */}
        {esAdmin && (
          <input
            type="number"
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
              marginTop: "8px",
              width: "100%",
              padding: "5px",
              borderRadius: "6px",
              border: "1px solid #ddd"
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
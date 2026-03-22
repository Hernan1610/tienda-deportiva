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
        position: "relative", // 🔥 IMPORTANTE (para badge)
        background: "#fff",
        borderRadius: "20px",
        overflow: "hidden",
        transition: "0.3s",
        transform: hover ? "translateY(-6px)" : "none",
        boxShadow: hover
          ? "0 20px 50px rgba(0,0,0,0.12)"
          : "0 8px 25px rgba(0,0,0,0.05)",
        border: "1px solid #eee"
      }}
    >
      {/* 🔥 BADGE */}
      {producto.badge && (
        <span
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            background:
              "linear-gradient(135deg, #d4a5ff, #b57bff)",
            color: "#fff",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "11px",
            fontWeight: "600",
            zIndex: 2,
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }}
        >
          {producto.badge}
        </span>
      )}

      {/* 📸 IMAGEN */}
      <div style={{ overflow: "hidden", background: "#f8f8f8" }}>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "contain",
            transition: "0.4s",
            transform: hover ? "scale(1.05)" : "scale(1)"
          }}
        />
      </div>

      {/* 📦 INFO */}
      <div style={{ padding: "18px" }}>
        <h3
          style={{
            fontSize: "1rem",
            marginBottom: "6px",
            color: "#1a1a1a",
            fontWeight: "500"
          }}
        >
          {producto.nombre}
        </h3>

        {/* 💰 PRECIO PRO */}
        <p
          style={{
            fontWeight: "600",
            marginBottom: "12px",
            color: "#b57bff",
            fontSize: "15px"
          }}
        >
          ${producto.precio.toLocaleString()}
        </p>

        {/* 👕 TALLES */}
        <div style={{ marginBottom: "12px" }}>
          {producto.talles.map((talle) => (
            <button
              key={talle}
              onClick={() => setTalleSeleccionado(talle)}
              style={{
                margin: "4px",
                padding: "6px 12px",
                borderRadius: "20px",
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
                fontSize: "12px"
              }}
            >
              {talle}
            </button>
          ))}
        </div>

        {/* 🔥 STOCK */}
        <p
          style={{
            fontSize: "12px",
            color: "#888"
          }}
        >
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
            padding: "12px",
            borderRadius: "25px",
            border: "none",
            background: sinStock
              ? "#ccc"
              : "linear-gradient(135deg, #d4a5ff, #b57bff)",
            color: "#fff",
            fontWeight: "600",
            cursor: sinStock ? "not-allowed" : "pointer",
            marginTop: "12px",
            boxShadow:
              "0 10px 25px rgba(180,120,255,0.3)"
          }}
        >
          {sinStock ? "Sin stock" : "Agregar al carrito"}
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
              marginTop: "10px",
              width: "100%",
              padding: "6px",
              borderRadius: "8px",
              border: "1px solid #ddd"
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
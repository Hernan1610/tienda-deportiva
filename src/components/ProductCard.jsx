import { useState, useContext } from "react";
import CartContext from "../context/CartContext";

const ProductCard = ({ producto }) => {
  const [hover, setHover] = useState(false);
  const [mostrarImagen, setMostrarImagen] = useState(false); // 🔥 modal
  const { agregarAlCarrito } = useContext(CartContext);
  const [talleSeleccionado, setTalleSeleccionado] = useState("");

  const stockGuardado =
    JSON.parse(localStorage.getItem("stock")) || {};

  const stockActual =
    stockGuardado[producto.id] ?? producto.stock;

  const sinStock = stockActual === 0;

  return (
    <>
      {/* 🔥 CARD */}
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

        {/* 📸 IMAGEN (CLICKABLE) */}
        <div
          style={{ overflow: "hidden", background: "#fafafa", cursor: "pointer" }}
          onClick={() => setMostrarImagen(true)}
        >
          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{
              width: "100%",
              height: "160px",
              objectFit: "contain",
              transition: "0.3s",
              transform: hover ? "scale(1.05)" : "scale(1)"
            }}
          />
        </div>

        {/* 📦 INFO */}
        <div style={{ padding: "12px" }}>
          <h3 style={{ fontSize: "13px", marginBottom: "4px" }}>
            {producto.nombre}
          </h3>

          <p style={{ color: "var(--accent)", fontWeight: "600" }}>
            ${producto.precio.toLocaleString()}
          </p>

          {/* TALLES */}
          <div style={{ margin: "8px 0" }}>
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
                  fontSize: "11px"
                }}
              >
                {talle}
              </button>
            ))}
          </div>

          {/* BOTÓN */}
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
              marginTop: "6px"
            }}
          >
            {sinStock ? "Sin stock" : "Agregar 🛍️"}
          </button>
        </div>
      </div>

      {/* 🔥 MODAL IMAGEN */}
      {mostrarImagen && (
        <div
          onClick={() => setMostrarImagen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
          }}
        >
          <img
            src={producto.imagen}
            alt="zoom"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "20px",
              background: "#fff",
              padding: "10px"
            }}
          />
        </div>
      )}
    </>
  );
};

export default ProductCard;
import { useState, useContext } from "react";
import CartContext from "../context/CartContext";

const ProductCard = ({ producto }) => {
  const [hover, setHover] = useState(false);
  const [mostrarImagen, setMostrarImagen] = useState(false);
  const { agregarAlCarrito } = useContext(CartContext);
  const [talleSeleccionado, setTalleSeleccionado] = useState("");

  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          background: "#fff",
          borderRadius: "18px",
          overflow: "hidden",
          transition: "0.3s",
          cursor: "pointer",
          transform: hover ? "translateY(-6px)" : "none",
          boxShadow: hover
            ? "0 20px 45px rgba(0,0,0,0.12)"
            : "0 8px 20px rgba(0,0,0,0.05)"
        }}
      >

        {/* IMAGEN */}
        <div onClick={() => setMostrarImagen(true)}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "contain",
              transition: "0.3s",
              transform: hover ? "scale(1.05)" : "scale(1)"
            }}
          />
        </div>

        {/* INFO */}
        <div style={{ padding: "12px" }}>
          <h3 style={{ fontSize: "14px", letterSpacing: "0.3px" }}>
            {producto.nombre}
          </h3>

          <p style={{ color: "var(--accent)", fontWeight: "600", letterSpacing: "0.5px" }}>
            ${producto.precio.toLocaleString()}
          </p>

          {/* TALLES */}
          <div>
            {producto.talles.map((t) => (
              <button
                key={t}
                onClick={() => setTalleSeleccionado(t)}
                style={{
                  margin: "3px",
                  padding: "4px 8px",
                  borderRadius: "12px",
                  border: "1px solid #ddd",
                  background: talleSeleccionado === t ? "var(--accent)" : "#fff",
                  color: talleSeleccionado === t ? "#fff" : "#333",
                  fontSize: "11px"
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* BOTÓN */}
          <button
            onClick={() => {
              if (!talleSeleccionado) return alert("Seleccioná un talle");
              agregarAlCarrito({ ...producto, talle: talleSeleccionado });
            }}
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "10px",
              borderRadius: "20px",
              border: "none",
              background: "linear-gradient(135deg,#d4a5ff,#b57bff)",
              color: "#fff",
              fontWeight: "600"
            }}
          >
            Agregar 🛍️
          </button>
        </div>
      </div>

      {/* MODAL */}
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
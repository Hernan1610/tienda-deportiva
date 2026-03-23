import { useContext } from "react";
import CartContext from "../context/CartContext";

const Carrito = () => {
  const {
    carrito,
    agregarAlCarrito,
    restarCantidad,
    eliminarDelCarrito,
    vaciarCarrito,
  } = useContext(CartContext);

  const total = carrito.reduce(
    (acc, p) => acc + p.precio * (p.cantidad || 1),
    0
  );

  const handleWhatsApp = () => {
    const telefono = "5492634391870";

    const items = carrito
      .map(
        (p) =>
          `🛍️ ${p.nombre} (Talle: ${p.talle})\nCantidad: ${p.cantidad}\nSubtotal: $${p.precio * (p.cantidad || 1)}`
      )
      .join("\n\n");

    const texto = `Hola! 👋\n\nQuiero hacer el siguiente pedido:\n\n${items}\n\n💰 Total: $${total}\n\nGracias!`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "30px auto",
        padding: "15px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "25px",
          fontSize: "28px",
          color: "var(--text)",
        }}
      >
        🛒 Tu carrito
      </h1>

      {carrito.length === 0 ? (
        <p style={{ textAlign: "center", color: "var(--subtext)" }}>
          No hay productos todavía
        </p>
      ) : (
        <>
          {carrito.map((p) => (
            <div
              key={p.id}
              style={{
                background: "#fff",
                padding: "15px",
                borderRadius: "16px",
                marginBottom: "20px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
                border: "1px solid #eee",
              }}
            >
              <img
                src={p.imagen}
                alt={p.nombre}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "contain",
                  borderRadius: "12px",
                  marginBottom: "10px",
                }}
              />

              <h3 style={{ color: "#222" }}>{p.nombre}</h3>

              <p style={{ color: "var(--subtext)" }}>
                Talle: {p.talle}
              </p>

              <p style={{ color: "var(--subtext)" }}>
                ${p.precio}
              </p>

              <p style={{ fontWeight: "600" }}>
                Subtotal: ${p.precio * (p.cantidad || 1)}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <button style={btnCantidad} onClick={() => restarCantidad(p.id)}>
                    -
                  </button>

                  <span>{p.cantidad}</span>

                  <button style={btnCantidad} onClick={() => agregarAlCarrito(p)}>
                    +
                  </button>
                </div>

                <button onClick={() => eliminarDelCarrito(p.id)} style={btnEliminar}>
                  ❌
                </button>
              </div>
            </div>
          ))}

          {/* RESUMEN */}
          <div style={resumenBox}>
            <h2>Total: ${total}</h2>

            <button style={btnComprar} onClick={handleWhatsApp}>
              Comprar por WhatsApp
            </button>

            <button onClick={vaciarCarrito} style={btnVaciar}>
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const btnCantidad = {
  padding: "8px 14px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  background: "#fff",
  cursor: "pointer",
};

const btnEliminar = {
  background: "transparent",
  border: "none",
  color: "#ff4d6d",
  fontSize: "18px",
  cursor: "pointer",
};

const btnComprar = {
  width: "100%",
  padding: "14px",
  borderRadius: "30px",
  border: "none",
  background: "linear-gradient(135deg, #d4a5ff, #b57bff)",
  color: "#fff",
  fontWeight: "600",
  marginTop: "15px",
  cursor: "pointer",
};

const btnVaciar = {
  marginTop: "10px",
  padding: "10px",
  borderRadius: "20px",
  border: "1px solid #ddd",
  background: "#fff",
  cursor: "pointer",
};

const resumenBox = {
  marginTop: "20px",
  padding: "20px",
  background: "#fff",
  borderRadius: "16px",
  textAlign: "center",
  boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
};

export default Carrito;
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
        `🛍 ${p.nombre}\nCantidad: ${p.cantidad}\nSubtotal: $${p.precio * (p.cantidad || 1)}`
    )
    .join("\n\n");

  const texto = `Hola! 👋\n\nQuiero hacer el siguiente pedido:\n\n${items}\n\n💰 Total: $${total}\n\n📍 Zona de entrega:\n💳 Forma de pago:\n\nGracias!`;

  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
};

  return (
    <div
      style={{
        maxWidth: "600px", // 🔥 mejor para celular
        margin: "20px auto",
        padding: "15px",
        color: "#fff",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "2rem",
        }}
      >
        🛒 Tu carrito
      </h1>

      {carrito.length === 0 ? (
        <p style={{ textAlign: "center", opacity: 0.7 }}>
          No hay productos todavía
        </p>
      ) : (
        <>
          {carrito.map((p) => (
            <div
              key={p.id}
              style={{
                display: "flex",
                flexDirection: "column", // 🔥 mobile
                gap: "15px",
                background: "#111",
                padding: "15px",
                borderRadius: "15px",
                marginBottom: "20px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.4)",
              }}
            >
              {/* imagen */}
              <img
                src={p.imagen}
                alt={p.nombre}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />

              {/* info */}
              <div>
                <h3>{p.nombre}</h3>
                <p style={{ opacity: 0.7 }}>${p.precio}</p>
                <p style={{ fontWeight: "bold" }}>
                  Subtotal: ${p.precio * (p.cantidad || 1)}
                </p>
              </div>

              {/* controles */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    style={btnCantidad}
                    onClick={() => restarCantidad(p.id)}
                  >
                    -
                  </button>

                  <span style={{ fontSize: "1.2rem" }}>{p.cantidad}</span>

                  <button
                    style={btnCantidad}
                    onClick={() => agregarAlCarrito(p)}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => eliminarDelCarrito(p.id)}
                  style={btnEliminar}
                >
                  ❌
                </button>
              </div>
            </div>
          ))}

          {/* resumen */}
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              background: "#111",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <h2 style={{ marginBottom: "15px" }}>
              Total: ${total}
            </h2>

            {/* 🔥 BOTÓN GRANDE WHATSAPP */}
            <button
              style={btnComprar}
              onClick={handleWhatsApp}
            >
              📲 Comprar por WhatsApp
            </button>

            <br />
            <br />

            <button onClick={vaciarCarrito} style={btnVaciar}>
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// 🎨 estilos optimizados mobile

const btnCantidad = {
  padding: "10px 15px",
  borderRadius: "10px",
  border: "none",
  background: "#222",
  color: "#fff",
  cursor: "pointer",
  fontSize: "18px",
};

const btnEliminar = {
  background: "transparent",
  border: "none",
  color: "red",
  fontSize: "20px",
  cursor: "pointer",
};

const btnComprar = {
  width: "100%",
  padding: "15px",
  borderRadius: "30px",
  border: "none",
  background: "#25D366",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
};

const btnVaciar = {
  padding: "10px 20px",
  borderRadius: "20px",
  border: "none",
  background: "#444",
  color: "#fff",
  cursor: "pointer",
};

export default Carrito;
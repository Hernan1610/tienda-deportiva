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
          borderRadius: 0,
          overflow: "hidden",
          transition: "box-shadow 0.22s cubic-bezier(.4,2,.6,1), transform 0.22s cubic-bezier(.4,2,.6,1)",
          cursor: "pointer",
          boxShadow: hover ? "0 8px 32px -8px #e91e63b3, 0 1.5px 0 #fff3" : "none",
          border: "1px solid #eee",
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* IMAGEN FLUSH */}
        <div onClick={() => setMostrarImagen(true)} style={{ cursor: "zoom-in" }}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            loading="lazy"
            style={{
              width: "100%",
              height: "180px",
              objectFit: "contain",
              background: "#fff",
              borderRadius: 0,
              transition: "0.3s",
              transform: hover ? "scale(1.05)" : "scale(1)"
            }}
          />
        </div>

        {/* INFO */}
        <div style={{
          padding: "18px 12px 16px 12px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}>
          <div style={{
            fontWeight: 700,
            fontSize: "1.05rem",
            marginBottom: 10,
            color: "#111",
            letterSpacing: "0.2px",
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            gap: 8
          }}>
            {producto.precioAnterior && (
              <span style={{
                color: "#e91e63",
                textDecoration: "line-through",
                fontWeight: 500,
                fontSize: "0.98em",
                marginRight: 6
              }}>
                ${producto.precioAnterior.toLocaleString()}
              </span>
            )}
            <span>${producto.precio.toLocaleString()}</span>
          </div>
          <div style={{
            fontSize: "1.08rem",
            color: "#222",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            fontWeight: 400,
            marginBottom: 2,
            textAlign: "left"
          }}>
            {producto.nombre}
          </div>

          {/* TALLES solo si NO es botellas, toallones o toallas */}
          {producto.categoria !== "botellas" && producto.subcategoria !== "toallones" && producto.subcategoria !== "toallas" && (
            <div>
              {producto.talles
                .filter(t => !producto.stockPorTalle || producto.stockPorTalle[t] > 0)
                .map((t) => (
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
          )}

          {/* BOTÓN */}
          <div style={{ marginTop: "auto", width: "100%" }}>
            <button
              aria-label={
                producto.categoria === "botellas" ||
                producto.subcategoria === "toallones" ||
                producto.subcategoria === "toallas"
                  ? `Agregar ${producto.nombre} al carrito`
                  : talleSeleccionado
                    ? `Agregar ${producto.nombre} talle ${talleSeleccionado} al carrito`
                    : `Agregar ${producto.nombre} al carrito`
              }
              tabIndex={0}
              onClick={() => {
                if (
                  producto.categoria !== "botellas" &&
                  producto.subcategoria !== "toallones" &&
                  producto.subcategoria !== "toallas" &&
                  !talleSeleccionado
                ) {
                  return alert("Seleccioná un talle");
                }
                agregarAlCarrito({
                  ...producto,
                  talle:
                    producto.categoria === "botellas" ||
                    producto.subcategoria === "toallones" ||
                    producto.subcategoria === "toallas"
                      ? "Único"
                      : talleSeleccionado
                });
              }}
              style={{
                width: "100%",
                marginTop: "12px",
                padding: "10px 0",
                borderRadius: 0,
                border: "2px solid #111",
                background: "transparent",
                color: "#111",
                fontWeight: 600,
                fontSize: "0.78rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                boxShadow: "0 1px 4px rgba(25, 118, 210, 0.04)",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
                minHeight: 44,
                outline: "none"
              }}
              onFocus={e => {
                e.currentTarget.style.boxShadow = '0 0 0 3px #f8bbd0';
              }}
              onBlur={e => {
                e.currentTarget.style.boxShadow = '0 1px 4px rgba(25, 118, 210, 0.04)';
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = '#f8bbd0';
                e.currentTarget.style.color = '#111';
                e.currentTarget.style.boxShadow = '0 4px 16px #e91e63b3';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#111';
                e.currentTarget.style.boxShadow = '0 1px 4px rgba(25, 118, 210, 0.04)';
              }}
            >
              Agregar al carrito
            </button>
          </div>
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
            alt={producto.nombre}
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
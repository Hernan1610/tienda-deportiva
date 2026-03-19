const ProductCard = ({ producto }) => {
  const numero = "549XXXXXXXXXX";

  const mensaje = `Hola! Quiero comprar: ${producto.nombre} - Precio: $${producto.precio}`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  return (
    <div
  style={{
    background: "#111",
    borderRadius: "15px",
    overflow: "hidden",
    transition: "0.3s",
    cursor: "pointer"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />

      <div style={{ padding: "15px" }}>
        <h3 style={{ margin: "10px 0" }}>{producto.nombre}</h3>
        <p style={{ color: "#aaa" }}>${producto.precio}</p>

        <a href={url} target="_blank">
          <button style={{
            width: "100%",
            padding: "10px",
            background: "white",
            color: "black",
            border: "none",
            borderRadius: "8px"
          }}>
            Comprar
          </button>
        </a>
      </div>
      
    </div>
  );
};

export default ProductCard;
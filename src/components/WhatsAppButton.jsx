const WhatsAppButton = () => {
  const telefono = "5492634391870"; // 🔴 TU NÚMERO

  const mensaje = "Hola! 👋 Estoy viendo tu tienda y quiero más info sobre la ropa 👕";

  const handleClick = () => {
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <a
  href="https://wa.me/5492634391870"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 5px 20px rgba(0,0,0,0.4)"
  }}
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
    alt="WhatsApp"
    style={{ width: "30px", height: "30px" }}
  />
</a>
  );
};

export default WhatsAppButton;
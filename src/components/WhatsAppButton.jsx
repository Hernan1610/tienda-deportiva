const WhatsAppButton = () => {
  const telefono = "5492634391870";

  const mensaje =
    "Hola! 👋 Estoy viendo BALANCE y quiero info sobre los productos 👕";

  return (
    <a
      href={`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        style={{ width: "28px", height: "28px" }}
      />
    </a>
  );
};

const buttonStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  background: "var(--accent)",
  width: "58px",
  height: "58px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
  zIndex: 999,
  transition: "0.3s"
};

export default WhatsAppButton;
const WhatsAppButton = () => {
  const telefono = "5492634391870"; // 🔴 TU NÚMERO

  const mensaje = "Hola! Quiero consultar por productos 👕";

  const handleClick = () => {
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#25D366",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        fontSize: "28px",
        cursor: "pointer",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        zIndex: 9999,
      }}
    >
      💬
    </button>
  );
};

export default WhatsAppButton;
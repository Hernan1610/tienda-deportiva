const WhatsAppButton = () => {
  const telefono = "5492634391870";

  return (
    <a
      href={`https://wa.me/${telefono}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        style={{
          width: "50px",
          height: "50px"
        }}
      />
    </a>
  );
};

export default WhatsAppButton;
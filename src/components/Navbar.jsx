import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { carrito } = useContext(CartContext);

  return (
    <nav style={navStyle}>
      
      {/* 🔥 LOGO */}
      <Link to="/">
        <img
          src={logo}
          alt="BALANCE"
          style={logoStyle}
        />
      </Link>

      {/* 🔗 LINKS */}
      <div style={linksContainer}>
        <Link style={linkStyle} to="/">Inicio</Link>
        <Link style={linkStyle} to="/productos">Productos</Link>

        {/* 🛒 CARRITO */}
        <Link to="/carrito" style={{ textDecoration: "none" }}>
          <span style={cartStyle}>
            🛒 {carrito.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

/* 🎨 ESTILOS */

const navStyle = {
  position: "sticky",
  top: 0,
  zIndex: 1000,
  background: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(12px)",
  padding: "10px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid rgba(0,0,0,0.05)"
};

const logoStyle = {
  height: "60px",
  objectFit: "contain"
};

const linksContainer = {
  display: "flex",
  gap: "20px",
  alignItems: "center"
};

const linkStyle = {
  textDecoration: "none",
  color: "var(--text)",
  fontWeight: "500",
  fontSize: "14px",
  opacity: 0.8,
  transition: "0.2s"
};

const cartStyle = {
  background: "linear-gradient(135deg, #d4a5ff, #b57bff)",
  padding: "6px 14px",
  borderRadius: "20px",
  color: "#fff",
  fontWeight: "600",
  fontSize: "13px",
  boxShadow: "0 4px 12px rgba(180,120,255,0.3)"
};

export default Navbar;
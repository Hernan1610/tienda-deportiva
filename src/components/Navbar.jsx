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
  background: "#0a0a0a",
  padding: "5px 20px", // 🔥 menos padding vertical
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #222"
};

const logoStyle = {
  height: "70px",
  objectFit: "contain"
};

const linksContainer = {
  display: "flex",
  gap: "15px",
  alignItems: "center",
  flexWrap: "wrap"
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
  fontWeight: "500",
  fontSize: "14px"
};

const cartStyle = {
  background: "#25D366",
  padding: "6px 12px",
  borderRadius: "12px",
  color: "#fff",
  fontWeight: "bold"
};

export default Navbar;
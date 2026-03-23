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
        <img src={logo} alt="BALANCE" style={logoStyle} />
      </Link>

      {/* 🔗 LINKS */}
      <div style={linksContainer}>
        <Link style={linkStyle} to="/">Inicio</Link>
        <Link style={linkStyle} to="/productos">Productos</Link>

        {/* 🛒 CARRITO */}
        <Link to="/carrito" style={{ textDecoration: "none" }}>
          <span style={cartStyle}>
  🛒
  <span style={{
    fontSize: "12px",
    opacity: 0.6
  }}>
    ({carrito.length})
  </span>
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
  background: "#fff",
  padding: "8px 12px", // 🔥 más compacto
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #eee"
};

const logoStyle = {
  height: "40px", // 🔥 más chico para mobile
  objectFit: "contain"
};

const linksContainer = {
  display: "flex",
  gap: "8px", // 🔥 menos espacio
  alignItems: "center"
};

const linkStyle = {
  textDecoration: "none",
  color: "#333", // 🔥 SIEMPRE visible
  fontWeight: "500",
  fontSize: "12px", // 🔥 más chico para que entre
};

const cartStyle = {
  display: "flex",
  alignItems: "center",
  gap: "5px",
  fontSize: "14px",
  color: "#333",
  fontWeight: "500"
};

export default Navbar;
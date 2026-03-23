import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { carrito } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={navStyle}>
        
        {/* ☰ MENU */}
        <button
          onClick={() => setMenuOpen(true)}
          style={menuBtn}
        >
          ☰
        </button>

        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="BALANCE" style={logoStyle} />
        </Link>

        {/* 🛒 CARRITO */}
        <Link to="/carrito" style={{ textDecoration: "none" }}>
          <span style={cartStyle}>🛒 {carrito.length}</span>
        </Link>
      </nav>

      {/* 🔥 MENU LATERAL */}
      {menuOpen && (
        <div style={overlay} onClick={() => setMenuOpen(false)}>
          <div style={menu} onClick={(e) => e.stopPropagation()}>
            
            <h3 style={{ marginBottom: "20px" }}>Categorías</h3>

            <Link to="/productos" onClick={() => setMenuOpen(false)} style={item}>
              Todos
            </Link>

            <Link to="/productos/ropa" onClick={() => setMenuOpen(false)} style={item}>
              Ropa
            </Link>

            <Link to="/productos/accesorios" onClick={() => setMenuOpen(false)} style={item}>
              Accesorios
            </Link>

          </div>
        </div>
      )}
    </>
  );
};

/* 🎨 ESTILOS */

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 15px",
  background: "#fff",
  borderBottom: "1px solid #eee"
};

const menuBtn = {
  fontSize: "22px",
  background: "transparent",
  border: "none",
  cursor: "pointer"
};

const logoStyle = {
  height: "40px"
};

const cartStyle = {
  fontSize: "20px"
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.3)",
  zIndex: 1000
};

const menu = {
  width: "250px",
  height: "100%",
  background: "#fff",
  padding: "20px",
  boxShadow: "0 0 20px rgba(0,0,0,0.1)"
};

const item = {
  display: "block",
  marginBottom: "15px",
  textDecoration: "none",
  color: "#333",
  fontWeight: "500"
};

export default Navbar;
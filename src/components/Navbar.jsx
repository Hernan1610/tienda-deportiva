import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { carrito } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productosOpen, setProductosOpen] = useState(false);
  const [mediasOpen, setMediasOpen] = useState(false);

  return (
    <>
      <nav style={navStyle}>
        {/* ☰ */}
        <button onClick={() => setMenuOpen(true)} style={menuBtn}>
          ☰
        </button>

        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="BALANCE" style={logoStyle} />
        </Link>

        {/* CARRITO */}
        <Link to="/carrito">
          <span style={cartStyle}>🛒</span>
        </Link>
      </nav>

      {/* MENU */}
      {menuOpen && (
        <div style={overlay} onClick={() => setMenuOpen(false)}>
          <div style={menu} onClick={(e) => e.stopPropagation()}>

            {/* PRODUCTOS */}
            <div>
              <div
                style={menuTitle}
                onClick={() => setProductosOpen(!productosOpen)}
              >
                Productos ▾
              </div>

              {productosOpen && (
                <div style={submenu}>

                  {/* MEDIAS */}
                  <div>
                    <div
                      style={menuTitle}
                      onClick={() => setMediasOpen(!mediasOpen)}
                    >
                      Medias ▾
                    </div>

                    {mediasOpen && (
                      <div style={submenu}>
                        <Link
                          to="/productos/medias/antideslizantes"
                          style={item}
                          onClick={() => setMenuOpen(false)}
                        >
                          Antideslizantes
                        </Link>

                        <Link
                          to="/productos/medias/amanecer"
                          style={item}
                          onClick={() => setMenuOpen(false)}
                        >
                          Amanecer
                        </Link>
                      </div>
                    )}
                  </div>

                </div>
              )}
            </div>

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
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.3)",
  top: 0,
  left: 0,
  zIndex: 1000
};

const menu = {
  width: "260px",
  height: "100%",
  background: "#fff",
  padding: "20px",
  overflowY: "auto"
};

const menuTitle = {
  fontWeight: "600",
  marginBottom: "10px",
  cursor: "pointer"
};

const submenu = {
  marginLeft: "10px"
};

const item = {
  display: "block",
  padding: "8px 0",
  textDecoration: "none",
  color: "#333",
  fontSize: "14px"
};

export default Navbar;
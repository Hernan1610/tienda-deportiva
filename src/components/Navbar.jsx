import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { carrito } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productosOpen, setProductosOpen] = useState(false);

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

      {/* OVERLAY */}
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
                  
                  <Link to="/productos" onClick={() => setMenuOpen(false)} style={item}>
                    Ver todos
                  </Link>

                  <Link to="/productos/toallones" style={item}>Toallones y toallas</Link>
                  <Link to="/productos/medias-antideslizantes" style={item}>Medias antideslizantes</Link>
                  <Link to="/productos/medias-soquetes" style={item}>Medias soquetes</Link>
                  <Link to="/productos/botellas" style={item}>Botellas</Link>

                  <Link to="/productos/tops" style={item}>Tops</Link>
                  <Link to="/productos/musculosas" style={item}>Musculosas</Link>
                  <Link to="/productos/remeras" style={item}>Remeras M/cortas</Link>

                  <Link to="/productos/buzo-plush" style={item}>Buzos plush</Link>
                  <Link to="/productos/buzo-crop" style={item}>Buzos crops</Link>
                  <Link to="/productos/buzo-polar" style={item}>Buzo polar</Link>
                  <Link to="/productos/maxi-buzo" style={item}>Maxi buzo</Link>
                  <Link to="/productos/buzo-cierre" style={item}>Buzo con cierre</Link>

                  <Link to="/productos/calza-biker" style={item}>Calzas biker</Link>
                  <Link to="/productos/calza-capri" style={item}>Calzas capri</Link>
                  <Link to="/productos/calza-larga" style={item}>Calzas largas</Link>

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
  border: "none"
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
            <div style={{
              textAlign: "center",
              marginBottom: 12,
              fontSize: 18,
              color: "#1976d2",
              fontWeight: 500,
              fontFamily: 'Segoe UI, Arial, sans-serif',
              letterSpacing: 0.2,
              opacity: 0.92
            }}>
              ¡Bienvenid@ a Balance!
              <div style={{ fontSize: 13, color: '#555', fontWeight: 400, marginTop: 2 }}>
                Descubrí productos para tu estilo.
              </div>
            </div>
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import CartContext from "../context/CartContext";
import logo from "../assets/logo.png";

const Navbar = () => {
    // Helper para saber si un link está activo
    const isActive = (to) => location.pathname === to;
  const { carrito } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productosOpen, setProductosOpen] = useState(false);
  const [mediasOpen, setMediasOpen] = useState(false);
  const location = useLocation();

  // Detecta si está en cualquier ruta de productos
  const isProductosActive = location.pathname.startsWith("/productos");

  return (
    <>
      <nav style={navStyle}>
        <button style={menuBtn} onClick={() => setMenuOpen(true)} aria-label="Abrir menú">
          <span role="img" aria-label="Menú">☰</span>
        </button>
        <Link to="/" className="nav-logo-link" style={{ display: "flex", alignItems: "center", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Logo Balance" style={logoStyle} className="nav-logo-img" />
        </Link>
        <Link to="/carrito" className="nav-cart-link" style={{ color: "#1976d2", textDecoration: "none", position: "relative" }} onClick={() => setMenuOpen(false)}>
          <span style={cartStyle} role="img" aria-label="Carrito" className="nav-cart-icon">🛒</span>
          {carrito.length > 0 && (
            <span style={{
              position: "absolute",
              top: -6,
              right: -10,
              background: "#ff4081",
              color: "#fff",
              borderRadius: "50%",
              fontSize: 11,
              padding: "2px 6px",
              fontWeight: 600
            }}>{carrito.length}</span>
          )}
        </Link>
      </nav>
      {/* Overlay y menú hamburguesa */}
      {menuOpen && (
        <div style={overlay} onClick={() => setMenuOpen(false)}>
          <div style={menu} onClick={e => e.stopPropagation()}>
            <div style={{
              textAlign: "center",
              marginBottom: 12,
              fontSize: 18,
              color: "#1976d2",
              fontWeight: 500,
              fontFamily: 'Segoe UI, Arial, sans-serif',
              letterSpacing: 0.2,
              opacity: 0.92
            }}>
              ¡Bienvenid@ a Balance!
              <div style={{ fontSize: 13, color: '#555', fontWeight: 400, marginTop: 2 }}>
                Descubrí productos para tu estilo.
              </div>
            </div>
            <div style={{
              textAlign: "center",
              marginBottom: 12,
              fontSize: 18,
              color: "#1976d2",
              fontWeight: 500,
              fontFamily: 'Segoe UI, Arial, sans-serif',
              letterSpacing: 0.2,
              opacity: 0.92
            }}>
              ¡Bienvenid@ a Balance!
              <div style={{ fontSize: 13, color: '#555', fontWeight: 400, marginTop: 2 }}>
                Descubrí productos para tu estilo.
              </div>
            </div>
            {/* Línea divisoria superior */}
            <div style={{
              borderBottom: '1px solid #e3e3e3',
              margin: '0 0 18px 0',
              width: '100%'
            }} />
            {/* PRODUCTOS */}
            <div>
              <div
                style={{
                  ...menuTitle,
                  fontWeight: isProductosActive ? "bold" : "normal",
                  color: isProductosActive ? "#1976d2" : "#333",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer"
                }}
                onClick={() => setProductosOpen(!productosOpen)}
              >
                <span>Productos</span>
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: 6,
                    transition: "transform 0.22s cubic-bezier(.4,2,.6,1)",
                    transform: productosOpen ? "rotate(90deg)" : "rotate(0deg)"
                  }}
                >
                  ▶
                </span>
              </div>
              {productosOpen && (
                <div style={submenu}>
                  <Link
                    to="/productos"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      ...item,
                      background: isActive("/productos") ? "#e3f0fa" : "transparent",
                      borderRadius: isActive("/productos") ? "6px" : undefined,
                      fontWeight: isActive("/productos") ? "bold" : undefined,
                      borderLeft: isActive("/productos") ? "4px solid #1976d2" : "4px solid transparent",
                      paddingLeft: isActive("/productos") ? 12 : 16
                    }}
                    className="menu-item-link"
                  >
                    Ver todos
                  </Link>
                  <Link
                    to="/productos/productos/toallones"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      ...item,
                      background: isActive("/productos/productos/toallones") ? "#e3f0fa" : "transparent",
                      borderRadius: isActive("/productos/productos/toallones") ? "6px" : undefined,
                      fontWeight: isActive("/productos/productos/toallones") ? "bold" : undefined,
                      borderLeft: isActive("/productos/productos/toallones") ? "4px solid #1976d2" : "4px solid transparent",
                      paddingLeft: isActive("/productos/productos/toallones") ? 12 : 16
                    }}
                    className="menu-item-link"
                  >
                    Toallones y toallas
                  </Link>
                  {/* 🧦 MEDIAS AGRUPADAS */}
                  <div>
                    <a
                      style={{
                        ...item,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 0",
                        fontSize: "14px",
                        marginBottom: "0px",
                        background: mediasOpen ? "#e3f0fa" : "transparent",
                        borderRadius: mediasOpen ? "6px" : undefined,
                        fontWeight: mediasOpen ? "bold" : undefined,
                        borderLeft: mediasOpen ? "4px solid #1976d2" : "4px solid transparent",
                        paddingLeft: mediasOpen ? 12 : 16,
                        color: mediasOpen ? "#1976d2" : "#333",
                        transition: "background 0.18s, color 0.18s, border-left 0.18s, padding 0.18s"
                      }}
                      className="menu-item-link"
                      tabIndex={0}
                      onClick={() => setMediasOpen(!mediasOpen)}
                      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setMediasOpen(!mediasOpen); }}
                    >
                      <span>Medias</span>
                      <span
                        style={{
                          display: "inline-block",
                          marginLeft: 6,
                          transition: "transform 0.22s cubic-bezier(.4,2,.6,1)",
                          transform: mediasOpen ? "rotate(90deg)" : "rotate(0deg)"
                        }}
                      >
                        ▶
                      </span>
                    </a>
                    {mediasOpen && (
                      <div style={submenu}>
                        <Link
                          to="/productos/medias/antideslizantes"
                          onClick={() => setMenuOpen(false)}
                          style={{
                            ...item,
                            background: isActive("/productos/medias/antideslizantes") ? "#e3f0fa" : "transparent",
                            borderRadius: isActive("/productos/medias/antideslizantes") ? "6px" : undefined,
                            fontWeight: isActive("/productos/medias/antideslizantes") ? "bold" : undefined,
                            borderLeft: isActive("/productos/medias/antideslizantes") ? "4px solid #1976d2" : "4px solid transparent",
                            paddingLeft: isActive("/productos/medias/antideslizantes") ? 12 : 16
                          }}
                          className="menu-item-link"
                        >
                          Antideslizantes
                        </Link>
                        <Link
                          to="/productos/medias/amanecer"
                          onClick={() => setMenuOpen(false)}
                          style={{
                            ...item,
                            background: isActive("/productos/medias/amanecer") ? "#e3f0fa" : "transparent",
                            borderRadius: isActive("/productos/medias/amanecer") ? "6px" : undefined,
                            fontWeight: isActive("/productos/medias/amanecer") ? "bold" : undefined,
                            borderLeft: isActive("/productos/medias/amanecer") ? "4px solid #1976d2" : "4px solid transparent",
                            paddingLeft: isActive("/productos/medias/amanecer") ? 12 : 16
                          }}
                          className="menu-item-link"
                        >
                          Amanecer
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* OTRAS CATEGORÍAS */}
                  <Link to="/productos/botellas" style={{
                    ...item,
                    background: isActive("/productos/botellas") ? "#e3f0fa" : "transparent",
                    fontWeight: isActive("/productos/botellas") ? "bold" : undefined,
                    borderLeft: isActive("/productos/botellas") ? "4px solid #1976d2" : "4px solid transparent",
                    paddingLeft: isActive("/productos/botellas") ? 12 : 16
                  }} className="menu-item-link" onClick={() => setMenuOpen(false)}>Botellas</Link>
                  <Link to="/productos/tops" style={{
                    ...item,
                    background: isActive("/productos/tops") ? "#e3f0fa" : "transparent",
                    fontWeight: isActive("/productos/tops") ? "bold" : undefined,
                    borderLeft: isActive("/productos/tops") ? "4px solid #1976d2" : "4px solid transparent",
                    paddingLeft: isActive("/productos/tops") ? 12 : 16
                  }} className="menu-item-link" onClick={() => setMenuOpen(false)}>Tops</Link>
                  <Link to="/productos/musculosas" style={{
                    ...item,
                    background: isActive("/productos/musculosas") ? "#e3f0fa" : "transparent",
                    fontWeight: isActive("/productos/musculosas") ? "bold" : undefined,
                    borderLeft: isActive("/productos/musculosas") ? "4px solid #1976d2" : "4px solid transparent",
                    paddingLeft: isActive("/productos/musculosas") ? 12 : 16
                  }} className="menu-item-link" onClick={() => setMenuOpen(false)}>Musculosas</Link>
                  <Link to="/productos/remeras" style={{
                    ...item,
                    background: isActive("/productos/remeras") ? "#e3f0fa" : "transparent",
                    fontWeight: isActive("/productos/remeras") ? "bold" : undefined,
                    borderLeft: isActive("/productos/remeras") ? "4px solid #1976d2" : "4px solid transparent",
                    paddingLeft: isActive("/productos/remeras") ? 12 : 16
                  }} className="menu-item-link" onClick={() => setMenuOpen(false)}>Remeras M/cortas</Link>
                  <Link to="/productos/buzo-plush" style={{
                    ...item,
                    background: isActive("/productos/buzo-plush") ? "#e3f0fa" : "transparent",
                    fontWeight: isActive("/productos/buzo-plush") ? "bold" : undefined,
                    borderLeft: isActive("/productos/buzo-plush") ? "4px solid #1976d2" : "4px solid transparent",
                    paddingLeft: isActive("/productos/buzo-plush") ? 12 : 16
                  }} className="menu-item-link" onClick={() => setMenuOpen(false)}>Buzos plush</Link>
                  <Link to="/productos/buzo-crop" style={{
                    ...item,
                    background: isActive("/productos/buzo-crop") ? "#e3f0fa" : "transparent",
                    fontWeight: isActive("/productos/buzo-crop") ? "bold" : undefined,
                    borderLeft: isActive("/productos/buzo-crop") ? "4px solid #1976d2" : "4px solid transparent",
                    paddingLeft: isActive("/productos/buzo-crop") ? 12 : 16
                  }} className="menu-item-link" onClick={() => setMenuOpen(false)}>Buzos crops</Link>
                  <Link to="/productos/buzo-polar" style={{
                    ...item,
                    background: isActive("/productos/buzo-polar") ? "#e3f0fa" : "transparent",
                    fontWeight: isActive("/productos/buzo-polar") ? "bold" : undefined,
                    borderLeft: isActive("/productos/buzo-polar") ? "4px solid #1976d2" : "4px solid transparent",
                    paddingLeft: isActive("/productos/buzo-polar") ? 12 : 16
                  }} className="menu-item-link" onClick={() => setMenuOpen(false)}>Buzo polar</Link>
                  <Link to="/productos/maxi-buzo" style={{
                    ...item,
                    background: isActive("/productos/maxi-buzo") ? "#e3f0fa" : "transparent",
                    fontWeight: isActive("/productos/maxi-buzo") ? "bold" : undefined,
                    borderLeft: isActive("/productos/maxi-buzo") ? "4px solid #1976d2" : "4px solid transparent",
                    paddingLeft: isActive("/productos/maxi-buzo") ? 12 : 16
                  }} className="menu-item-link" onClick={() => setMenuOpen(false)}>Maxi buzo</Link>
                  <Link to="/productos/buzo-cierre" style={{
                    ...item,
                    background: isActive("/productos/buzo-cierre") ? "#e3f0fa" : "transparent",
                    fontWeight: isActive("/productos/buzo-cierre") ? "bold" : undefined,
                    borderLeft: isActive("/productos/buzo-cierre") ? "4px solid #1976d2" : "4px solid transparent",
                    paddingLeft: isActive("/productos/buzo-cierre") ? 12 : 16
                  }} className="menu-item-link" onClick={() => setMenuOpen(false)}>Buzo con cierre</Link>
                  <Link to="/productos/calza-biker" style={{
                    ...item,
                    background: isActive("/productos/calza-biker") ? "#e3f0fa" : "transparent",
                    fontWeight: isActive("/productos/calza-biker") ? "bold" : undefined,
                    borderLeft: isActive("/productos/calza-biker") ? "4px solid #1976d2" : "4px solid transparent",
                    paddingLeft: isActive("/productos/calza-biker") ? 12 : 16
                  }} className="menu-item-link" onClick={() => setMenuOpen(false)}>Calzas biker</Link>
                  <Link to="/productos/calza-capri" style={{
                    ...item,
                    background: isActive("/productos/calza-capri") ? "#e3f0fa" : "transparent",
                    fontWeight: isActive("/productos/calza-capri") ? "bold" : undefined,
                    borderLeft: isActive("/productos/calza-capri") ? "4px solid #1976d2" : "4px solid transparent",
                    paddingLeft: isActive("/productos/calza-capri") ? 12 : 16
                  }} className="menu-item-link" onClick={() => setMenuOpen(false)}>Calzas capri</Link>
                  <Link to="/productos/calza-larga" style={{
                    ...item,
                    background: isActive("/productos/calza-larga") ? "#e3f0fa" : "transparent",
                    fontWeight: isActive("/productos/calza-larga") ? "bold" : undefined,
                    borderLeft: isActive("/productos/calza-larga") ? "4px solid #1976d2" : "4px solid transparent",
                    paddingLeft: isActive("/productos/calza-larga") ? 12 : 16
                  }} className="menu-item-link" onClick={() => setMenuOpen(false)}>Calzas largas</Link>
                </div>
              )}
            </div>
            <div style={{ flex: 1 }} />
            <div style={{
              textAlign: 'center',
              color: '#b0b0b0',
              fontSize: 13,
              marginTop: 24,
              marginBottom: 4
            }}>
              © {new Date().getFullYear()} Balance
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
  background: "rgba(255,255,255,0.97)",
  borderBottom: "1px solid #eee",
  position: "sticky",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1201,
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  boxShadow: "0 4px 18px -6px #e91e63a8, 0 1.5px 0 #fff3",
  transition: "background 0.25s, box-shadow 0.25s"
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
  zIndex: 1000,
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
  boxShadow: "0 0 32px 0 rgba(0,0,0,0.18)"
};

const menu = {
  width: "300px",
  height: "100%",
  background: "linear-gradient(135deg, #fff0f6 0%, #fce4ec 100%)",
  padding: "20px",
  overflowY: "auto",
  boxShadow: "2px 0 16px 0 rgba(0,0,0,0.18)",
  borderTopRightRadius: "22px"
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
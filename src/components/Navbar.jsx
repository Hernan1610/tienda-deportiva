// ...existing code...
import React from "react";
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
  const [botellasOpen, setBotellasOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Detecta si está en cualquier ruta de productos
  const isProductosActive = location.pathname.startsWith("/productos");

  // Efecto para sombra al hacer scroll
  // Se agrega/remueve sombra según scrollY
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Estilo dinámico para el nav
  const navDynamicStyle = {
    ...navStyle,
    boxShadow: scrolled ? "0 4px 18px -6px #e91e63a8, 0 1.5px 0 #fff3" : "none",
    background: "#fff",
    zIndex: 2001,
    transition: "background 0.25s, box-shadow 0.25s"
  };

  return (
    <>
      <nav style={navDynamicStyle}>
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
      {menuOpen && (
        <div style={overlay} onClick={() => setMenuOpen(false)} role="presentation">
          <nav style={{
            width: 320,
            height: '100vh',
            background: '#f4f4f4',
            boxShadow: '2px 0 32px 0 rgba(0,0,0,0.10)',
            border: 'none',
            padding: 0,
            paddingTop: 48,
            display: 'block',
            position: 'relative',
            overflowY: 'auto'
          }} onClick={e => e.stopPropagation()} aria-label="Menú principal de navegación" role="navigation">
            <button onClick={() => setMenuOpen(false)} aria-label="Cerrar menú" style={{
              position: 'absolute',
              top: 18,
              right: 18,
              background: 'none',
              border: 'none',
              fontSize: 32,
              color: '#222',
              cursor: 'pointer',
              zIndex: 10
            }}>×</button>
            <div style={{ height: 48 }} />
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              style={{
                ...item,
                fontWeight: 700,
                color: location.pathname === '/' ? '#181818' : '#181818',
                background: location.pathname === '/' ? '#ececec' : 'transparent',
                borderRadius: 8,
                borderLeft: 'none',
                padding: '18px 28px',
                fontSize: 18,
                borderBottom: '1px solid #e0e0e0',
                letterSpacing: 0.1,
                textAlign: 'left',
                transition: 'background 0.18s, color 0.18s',
                boxShadow: location.pathname === '/' ? '0 1px 6px 0 #e0e0e0' : 'none'
              }}
              className="menu-item-link"
            >
              Inicio
            </Link>
            <div
              style={{
                ...item,
                fontWeight: 700,
                color: location.pathname.startsWith('/productos') ? '#181818' : '#181818',
                background: location.pathname.startsWith('/productos') ? '#ececec' : 'transparent',
                borderRadius: 8,
                borderLeft: 'none',
                padding: '18px 28px',
                fontSize: 18,
                borderBottom: '1px solid #e0e0e0',
                letterSpacing: 0.1,
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                transition: 'background 0.18s, color 0.18s',
                userSelect: 'none',
                boxShadow: location.pathname.startsWith('/productos') ? '0 1px 6px 0 #e0e0e0' : 'none'
              }}
              onClick={() => setProductosOpen(!productosOpen)}
            >
              <span style={{ flex: 1 }}>Productos</span>
              <span style={{ fontSize: 22, marginLeft: 8, transition: 'transform 0.2s', transform: productosOpen ? 'rotate(90deg)' : 'none', fontWeight: 400, fontFamily: 'inherit', lineHeight: 1 }}>
                {/* Flecha fina y delicada */}
                ❯
              </span>
            </div>
            {productosOpen && (
              <div style={{ background: '#ededed', padding: '0 0 0 18px' }}>
                <Link to="/productos" onClick={() => setMenuOpen(false)}
                  style={{
                    ...item,
                    fontWeight: 500,
                    color: location.pathname === '/productos' ? '#181818' : '#222',
                    background: location.pathname === '/productos' ? '#e0e0e0' : 'transparent',
                    borderRadius: 6,
                    padding: '16px 28px',
                    fontSize: 17,
                    borderBottom: '1px solid #e0e0e0',
                    boxShadow: location.pathname === '/productos' ? '0 1px 6px 0 #e0e0e0' : 'none',
                    transition: 'background 0.18s, color 0.18s'
                  }}
                >Ver todos</Link>
                <Link to="/productos/productos/toallones" onClick={() => setMenuOpen(false)}
                  style={{
                    ...item,
                    fontWeight: 500,
                    color: location.pathname === '/productos/productos/toallones' ? '#181818' : '#222',
                    background: location.pathname === '/productos/productos/toallones' ? '#e0e0e0' : 'transparent',
                    borderRadius: 6,
                    padding: '16px 28px',
                    fontSize: 17,
                    borderBottom: '1px solid #e0e0e0',
                    boxShadow: location.pathname === '/productos/productos/toallones' ? '0 1px 6px 0 #e0e0e0' : 'none',
                    transition: 'background 0.18s, color 0.18s'
                  }}
                >Toallones y toallas</Link>
                <Link to="/productos/medias/antideslizantes" onClick={() => setMenuOpen(false)}
                  style={{
                    ...item,
                    fontWeight: 500,
                    color: location.pathname === '/productos/medias/antideslizantes' ? '#181818' : '#222',
                    background: location.pathname === '/productos/medias/antideslizantes' ? '#e0e0e0' : 'transparent',
                    borderRadius: 6,
                    padding: '16px 28px',
                    fontSize: 17,
                    borderBottom: '1px solid #e0e0e0',
                    boxShadow: location.pathname === '/productos/medias/antideslizantes' ? '0 1px 6px 0 #e0e0e0' : 'none',
                    transition: 'background 0.18s, color 0.18s'
                  }}
                >Medias antideslizantes</Link>
                <Link to="/productos/medias/amanecer" onClick={() => setMenuOpen(false)}
                  style={{
                    ...item,
                    fontWeight: 500,
                    color: location.pathname === '/productos/medias/amanecer' ? '#181818' : '#222',
                    background: location.pathname === '/productos/medias/amanecer' ? '#e0e0e0' : 'transparent',
                    borderRadius: 6,
                    padding: '16px 28px',
                    fontSize: 17,
                    borderBottom: '1px solid #e0e0e0',
                    boxShadow: location.pathname === '/productos/medias/amanecer' ? '0 1px 6px 0 #e0e0e0' : 'none',
                    transition: 'background 0.18s, color 0.18s'
                  }}
                >Medias amanecer</Link>
                <Link to="/productos/botellas" onClick={() => setMenuOpen(false)}
                  style={{
                    ...item,
                    fontWeight: 500,
                    color: location.pathname === '/productos/botellas' ? '#181818' : '#222',
                    background: location.pathname === '/productos/botellas' ? '#e0e0e0' : 'transparent',
                    borderRadius: 6,
                    padding: '16px 28px',
                    fontSize: 17,
                    borderBottom: '1px solid #e0e0e0',
                    boxShadow: location.pathname === '/productos/botellas' ? '0 1px 6px 0 #e0e0e0' : 'none',
                    transition: 'background 0.18s, color 0.18s'
                  }}
                >Botellas</Link>
                <Link to="/productos/tops" onClick={() => setMenuOpen(false)}
                  style={{
                    ...item,
                    fontWeight: 500,
                    color: location.pathname === '/productos/tops' ? '#181818' : '#222',
                    background: location.pathname === '/productos/tops' ? '#e0e0e0' : 'transparent',
                    borderRadius: 6,
                    padding: '16px 28px',
                    fontSize: 17,
                    borderBottom: '1px solid #e0e0e0',
                    boxShadow: location.pathname === '/productos/tops' ? '0 1px 6px 0 #e0e0e0' : 'none',
                    transition: 'background 0.18s, color 0.18s'
                  }}
                >Tops</Link>
                <Link to="/productos/musculosas" onClick={() => setMenuOpen(false)}
                  style={{
                    ...item,
                    fontWeight: 500,
                    color: location.pathname === '/productos/musculosas' ? '#181818' : '#222',
                    background: location.pathname === '/productos/musculosas' ? '#e0e0e0' : 'transparent',
                    borderRadius: 6,
                    padding: '16px 28px',
                    fontSize: 17,
                    borderBottom: '1px solid #e0e0e0',
                    boxShadow: location.pathname === '/productos/musculosas' ? '0 1px 6px 0 #e0e0e0' : 'none',
                    transition: 'background 0.18s, color 0.18s'
                  }}
                >Musculosas</Link>
                <Link to="/productos/remeras" onClick={() => setMenuOpen(false)}
                  style={{
                    ...item,
                    fontWeight: 500,
                    color: location.pathname === '/productos/remeras' ? '#181818' : '#222',
                    background: location.pathname === '/productos/remeras' ? '#e0e0e0' : 'transparent',
                    borderRadius: 6,
                    padding: '16px 28px',
                    fontSize: 17,
                    borderBottom: '1px solid #e0e0e0',
                    boxShadow: location.pathname === '/productos/remeras' ? '0 1px 6px 0 #e0e0e0' : 'none',
                    transition: 'background 0.18s, color 0.18s'
                  }}
                >Remeras M/cortas</Link>
                <Link to="/productos/buzo-plush" onClick={() => setMenuOpen(false)}
                  style={{
                    ...item,
                    fontWeight: 500,
                    color: location.pathname === '/productos/buzo-plush' ? '#181818' : '#222',
                    background: location.pathname === '/productos/buzo-plush' ? '#e0e0e0' : 'transparent',
                    borderRadius: 6,
                    padding: '16px 28px',
                    fontSize: 17,
                    borderBottom: '1px solid #e0e0e0',
                    boxShadow: location.pathname === '/productos/buzo-plush' ? '0 1px 6px 0 #e0e0e0' : 'none',
                    transition: 'background 0.18s, color 0.18s'
                  }}
                >Buzos plush</Link>
                <Link to="/productos/buzo-crop" onClick={() => setMenuOpen(false)}
                  style={{
                    ...item,
                    fontWeight: 500,
                    color: location.pathname === '/productos/buzo-crop' ? '#181818' : '#222',
                    background: location.pathname === '/productos/buzo-crop' ? '#e0e0e0' : 'transparent',
                    borderRadius: 6,
                    padding: '16px 28px',
                    fontSize: 17,
                    borderBottom: '1px solid #e0e0e0',
                    boxShadow: location.pathname === '/productos/buzo-crop' ? '0 1px 6px 0 #e0e0e0' : 'none',
                    transition: 'background 0.18s, color 0.18s'
                  }}
                >Buzos crops</Link>
                <Link to="/productos/buzo-polar" onClick={() => setMenuOpen(false)}
                  style={{
                    ...item,
                    fontWeight: 500,
                    color: location.pathname === '/productos/buzo-polar' ? '#181818' : '#222',
                    background: location.pathname === '/productos/buzo-polar' ? '#e0e0e0' : 'transparent',
                    borderRadius: 6,
                    padding: '16px 28px',
                    fontSize: 17,
                    borderBottom: '1px solid #e0e0e0',
                    boxShadow: location.pathname === '/productos/buzo-polar' ? '0 1px 6px 0 #e0e0e0' : 'none',
                    transition: 'background 0.18s, color 0.18s'
                  }}
                >Buzo polar</Link>
                <Link to="/productos/maxi-buzo" onClick={() => setMenuOpen(false)}
                  style={{
                    ...item,
                    fontWeight: 500,
                    color: location.pathname === '/productos/maxi-buzo' ? '#181818' : '#222',
                    background: location.pathname === '/productos/maxi-buzo' ? '#e0e0e0' : 'transparent',
                    borderRadius: 6,
                    padding: '16px 28px',
                    fontSize: 17,
                    borderBottom: '1px solid #e0e0e0',
                    boxShadow: location.pathname === '/productos/maxi-buzo' ? '0 1px 6px 0 #e0e0e0' : 'none',
                    transition: 'background 0.18s, color 0.18s'
                  }}
                >Maxi buzo</Link>
                <Link to="/productos/buzo-cierre" onClick={() => setMenuOpen(false)}
                  style={{
                    ...item,
                    fontWeight: 500,
                    color: location.pathname === '/productos/buzo-cierre' ? '#181818' : '#222',
                    background: location.pathname === '/productos/buzo-cierre' ? '#e0e0e0' : 'transparent',
                    borderRadius: 6,
                    padding: '16px 28px',
                    fontSize: 17,
                    borderBottom: '1px solid #e0e0e0',
                    boxShadow: location.pathname === '/productos/buzo-cierre' ? '0 1px 6px 0 #e0e0e0' : 'none',
                    transition: 'background 0.18s, color 0.18s'
                  }}
                >Buzo con cierre</Link>
                <Link to="/productos/productos/calza-biker" onClick={() => setMenuOpen(false)}
                  style={{
                    ...item,
                    fontWeight: 500,
                    color: location.pathname === '/productos/productos/calza-biker' ? '#181818' : '#222',
                    background: location.pathname === '/productos/productos/calza-biker' ? '#e0e0e0' : 'transparent',
                    borderRadius: 6,
                    padding: '16px 28px',
                    fontSize: 17,
                    borderBottom: '1px solid #e0e0e0',
                    boxShadow: location.pathname === '/productos/productos/calza-biker' ? '0 1px 6px 0 #e0e0e0' : 'none',
                    transition: 'background 0.18s, color 0.18s'
                  }}
                >Calzas biker</Link>
                <Link to="/productos/productos/calza-capri" onClick={() => setMenuOpen(false)}
                  style={{
                    ...item,
                    fontWeight: 500,
                    color: location.pathname === '/productos/productos/calza-capri' ? '#181818' : '#222',
                    background: location.pathname === '/productos/productos/calza-capri' ? '#e0e0e0' : 'transparent',
                    borderRadius: 6,
                    padding: '16px 28px',
                    fontSize: 17,
                    borderBottom: '1px solid #e0e0e0',
                    boxShadow: location.pathname === '/productos/productos/calza-capri' ? '0 1px 6px 0 #e0e0e0' : 'none',
                    transition: 'background 0.18s, color 0.18s'
                  }}
                >Calzas capri</Link>
                <Link to="/productos/productos/calza-larga" onClick={() => setMenuOpen(false)}
                  style={{
                    ...item,
                    fontWeight: 500,
                    color: location.pathname === '/productos/productos/calza-larga' ? '#181818' : '#222',
                    background: location.pathname === '/productos/productos/calza-larga' ? '#e0e0e0' : 'transparent',
                    borderRadius: 6,
                    padding: '16px 28px',
                    fontSize: 17,
                    borderBottom: '1px solid #e0e0e0',
                    boxShadow: location.pathname === '/productos/productos/calza-larga' ? '0 1px 6px 0 #e0e0e0' : 'none',
                    transition: 'background 0.18s, color 0.18s'
                  }}
                >Calzas largas</Link>
              </div>
            )}
            <Link
              to="/productos/ofertas"
              onClick={() => setMenuOpen(false)}
              style={{
                ...item,
                fontWeight: 700,
                color: location.pathname === '/productos/ofertas' ? '#181818' : '#181818',
                background: location.pathname === '/productos/ofertas' ? '#ececec' : 'transparent',
                borderRadius: 8,
                borderLeft: 'none',
                padding: '18px 28px',
                fontSize: 18,
                borderBottom: '1px solid #e0e0e0',
                letterSpacing: 0.1,
                textAlign: 'left',
                transition: 'background 0.18s, color 0.18s',
                boxShadow: location.pathname === '/productos/ofertas' ? '0 1px 6px 0 #e0e0e0' : 'none'
              }}
              className="menu-item-link"
            >
              Ofertas
            </Link>
            <Link
              to="/quienes-somos"
              onClick={() => setMenuOpen(false)}
              style={{
                ...item,
                fontWeight: 700,
                color: location.pathname === '/quienes-somos' ? '#181818' : '#181818',
                background: location.pathname === '/quienes-somos' ? '#ececec' : 'transparent',
                borderRadius: 8,
                borderLeft: 'none',
                padding: '18px 28px',
                fontSize: 18,
                borderBottom: '1px solid #e0e0e0',
                letterSpacing: 0.1,
                textAlign: 'left',
                transition: 'background 0.18s, color 0.18s',
                boxShadow: location.pathname === '/quienes-somos' ? '0 1px 6px 0 #e0e0e0' : 'none'
              }}
              className="menu-item-link"
            >
              Quiénes somos
            </Link>
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
          </nav>
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
  padding: "8px 20px 20px 20px",
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
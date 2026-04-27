import React from "react";
import logo from "../assets/logo.png";

const QuienesSomos = () => (
  <div style={{
    minHeight: 'calc(100vh - 120px)',
    background: '#fff',
    fontFamily: 'Segoe UI, Arial, Helvetica, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 16px'
  }}>
    <section style={{
      maxWidth: 600,
      width: '100%',
      background: '#fff',
      borderRadius: 22,
      boxShadow: '0 8px 32px -8px #0002',
      padding: '48px 36px 40px 36px',
      border: '1.5px solid #f3f3f3',
      textAlign: 'center',
      margin: '40px 0'
    }}>
      <img src={logo} alt="Logo Balance" style={{ width: 90, marginBottom: 18, filter: 'grayscale(0.2) contrast(1.1)' }} />
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 900,
        letterSpacing: '-1px',
        color: '#181818',
        marginBottom: 10,
        textTransform: 'uppercase',
        lineHeight: 1.1
      }}>
        Quiénes somos
      </h1>
      <div style={{
        height: 3,
        width: 56,
        background: 'linear-gradient(90deg, #181818 60%, #e91e63 100%)',
        borderRadius: 2,
        margin: '0 auto 32px auto'
      }} />
      <p style={{ fontSize: 18, color: '#222', marginBottom: 22, fontWeight: 400, lineHeight: 1.6 }}>
        <span style={{ color: '#181818', fontWeight: 700 }}>Balance</span> es una tienda de ropa deportiva y centro de pilates fundada en 2024 en San Martín, Mendoza. Inspiramos bienestar y movimiento con productos premium para que te sientas cómodo y seguro al entrenar.
      </p>
      <p style={{ fontSize: 18, color: '#222', marginBottom: 22, fontWeight: 400, lineHeight: 1.6 }}>
        Creemos que la actividad física es para todos. Seleccionamos ropa deportiva de alto rendimiento, materiales de primera y diseños actuales para acompañarte en cada desafío.
      </p>
      <div style={{
        background: '#f8f8fa',
        borderRadius: 12,
        padding: '18px 20px',
        margin: '28px 0 32px 0',
        borderLeft: '4px solid #e91e63',
        color: '#181818',
        fontWeight: 500,
        fontSize: 17
      }}>
        <span style={{ color: '#e91e63', fontWeight: 700 }}>Venta 100% online.</span> Visitá nuestro centro de pilates en <b>Pueyrredón 79, San Martín</b> para asesoramiento, pero la ropa se adquiere exclusivamente online.
      </div>
      <p style={{ fontSize: 18, color: '#222', marginBottom: 22, fontWeight: 400, lineHeight: 1.6 }}>
        Somos <span style={{ color: '#181818', fontWeight: 700 }}>Hernán y Melisa</span>, apasionados del pilates y el movimiento. Nos motiva acompañar a nuestra comunidad en cada paso de su camino saludable.
      </p>
      <a href="https://instagram.com/balance.pilates.sm" target="_blank" rel="noopener noreferrer" style={{
        display: 'inline-block',
        color: '#fff',
        background: 'linear-gradient(90deg, #e91e63 40%, #181818 100%)',
        padding: '10px 32px',
        borderRadius: 24,
        fontWeight: 700,
        fontSize: 17,
        textDecoration: 'none',
        letterSpacing: 0.2,
        margin: '18px 0 28px 0',
        boxShadow: '0 2px 12px -2px #e91e634'
      }}>
        Síguenos en Instagram
      </a>
      <div style={{
        color: '#181818',
        fontSize: 18,
        fontWeight: 600,
        marginTop: 18,
        textAlign: 'center',
        letterSpacing: 0.1
      }}>
        Gracias por elegir Balance. Cada prenda y cada clase están pensadas para que disfrutes moverte y formes parte de una comunidad que te apoya.
      </div>
    </section>
  </div>
);

export default QuienesSomos;

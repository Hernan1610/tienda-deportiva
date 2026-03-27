import { CartProvider } from "./context/CartProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./pages/Productos";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Carrito from "./pages/Carrito";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        {/* 🔥 CONTENEDOR GLOBAL (ESTO TE ARREGLA TODO EL FONDO) */}
        <div
          style={{
            background: "var(--bg)",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Navbar />

          {/* 🔥 CONTENIDO */}
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/productos/:categoria" element={<Productos />} />
              <Route path="/productos/:categoria/:subcategoria" element={<Productos />} />
              <Route path="/carrito" element={<Carrito />} />
            </Routes>
          </div>

          <Footer />

          {/* 🔥 BOTÓN WHATSAPP */}
          <WhatsAppButton />
        </div>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
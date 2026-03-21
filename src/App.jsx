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
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:categoria" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>

        <Footer />

        {/* 🔥 BOTÓN GLOBAL */}
        <WhatsAppButton />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
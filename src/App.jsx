import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./pages/Productos";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/categoria/:categoria" element={<Productos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
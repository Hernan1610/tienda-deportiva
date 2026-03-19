import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      borderBottom: "1px solid #333"
    }}>
      <h2>Tienda Deportiva</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Inicio</Link>
        <Link to="/categoria/ropa">Ropa</Link>
        <Link to="/categoria/toallas">Toallas</Link>
        <Link to="/categoria/medias">Medias</Link>
      </div>
    </nav>
  );
};

export default Navbar;
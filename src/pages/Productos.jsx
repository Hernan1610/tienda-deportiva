
import { productos } from "../data/productos";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Productos = () => {
  const { categoria, subcategoria } = useParams();
  const [loading, setLoading] = useState(true);

  // Mostrar soquete por defecto al entrar a 'medias'
  const [filtroMedias, setFiltroMedias] = useState(() => {
    return categoria === "medias" ? "soquete" : null;
  });

  // Si cambia la categoría, resetear filtro
  useEffect(() => {
    if (categoria === "medias") {
      setFiltroMedias("soquete");
    } else {
      setFiltroMedias(null);
    }
  }, [categoria]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [categoria, subcategoria, filtroMedias]);

  let productosFiltrados = productos.filter((p) => {
    // 👉 OFERTAS
    if (categoria === "ofertas") {
      return !!p.precioAnterior;
    }
    // 👉 VER TODO
    if (!categoria) return true;

    // 👉 SOLO CATEGORIA
    if (categoria && !subcategoria) {
      return p.categoria === categoria;
    }

    // 👉 TOALLONES Y TOALLAS JUNTOS
    if (categoria === "productos" && subcategoria === "toallones") {
      return (
        p.categoria === "productos" &&
        (p.subcategoria === "toallones" || p.subcategoria === "toallas")
      );
    }

    // 👉 CATEGORIA + SUBCATEGORIA
    return (
      p.categoria === categoria &&
      p.subcategoria === subcategoria
    );
  });

  // Filtro especial para medias
  if (categoria === "medias" && filtroMedias) {
    if (filtroMedias === "soquete") {
      productosFiltrados = productosFiltrados.filter((p) => p.imagen.endsWith("soquete.png"));
    } else if (filtroMedias === "media-cana") {
      productosFiltrados = productosFiltrados.filter((p) =>
        p.imagen.toLowerCase().includes("m-caña")
      );
    }
  }

  // Determinar título según categoría
  let titulo = "Productos";
  if (categoria === "botellas") {
    titulo = "Botellas";
  } else if (categoria === "medias") {
    titulo = "Medias";
  } else if (categoria === "productos" && subcategoria === "toallones") {
    titulo = "Toallones y toallas";
  } else if (categoria === "productos" && subcategoria) {
    titulo = subcategoria.charAt(0).toUpperCase() + subcategoria.slice(1);
  } else if (categoria) {
    titulo = categoria.charAt(0).toUpperCase() + categoria.slice(1);
  }



  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          margin: "22px 0 18px 0",
          fontSize: "2.5rem",
          color: "#111",
          fontWeight: 700,
          fontFamily: "Oswald, Arial Narrow, Arial, sans-serif",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          position: "relative",
          paddingBottom: "6px"
        }}
      >
        {titulo.toUpperCase()}
      </h1>

      {/* Botones de subcategoría para medias */}

      {categoria === "medias" && (
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 32 }}>
          <button
            onClick={() => setFiltroMedias("soquete")}
            style={{
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: 0,
              padding: "12px 38px 10px 38px",
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: 1,
              cursor: "pointer",
              outline: "none",
              position: "relative",
              marginRight: 8,
              transition: "color 0.18s, background 0.18s"
            }}
          >
            <span style={{
              borderBottom: filtroMedias === "soquete" ? "3px solid #fff" : "3px solid transparent",
              paddingBottom: 3,
              transition: "border-bottom 0.22s cubic-bezier(.4,2,.6,1)"
            }}>Soquete</span>
          </button>
          <button
            onClick={() => setFiltroMedias("media-cana")}
            style={{
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: 0,
              padding: "12px 38px 10px 38px",
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: 1,
              cursor: "pointer",
              outline: "none",
              position: "relative",
              transition: "color 0.18s, background 0.18s"
            }}
          >
            <span style={{
              borderBottom: filtroMedias === "media-cana" ? "3px solid #fff" : "3px solid transparent",
              paddingBottom: 3,
              transition: "border-bottom 0.22s cubic-bezier(.4,2,.6,1)"
            }}>Media caña</span>
          </button>
        </div>
      )}

      {loading ? (
        <Loader />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "15px",
            alignItems: "stretch",
            minHeight: 400
          }}
        >
          {productosFiltrados.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Productos;
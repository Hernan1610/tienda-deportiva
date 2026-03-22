import { useState, useEffect } from "react";
import CartContext from "./CartContext";

export const CartProvider = ({ children }) => {

  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem("carrito");
    return guardado ? JSON.parse(guardado) : [];
  });

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find(
  (p) => p.id === producto.id && p.talle === producto.talle
);

      if (existe) {
        return prev.map((p) =>
          p.id === producto.id
            ? { ...p, cantidad: (p.cantidad || 1) + 1 } // 🔥 FIX
            : p
        );
      }

      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const restarCantidad = (id) => {
    setCarrito((prev) =>
      prev
        .map((p) =>
          p.id === id
            ? { ...p, cantidad: (p.cantidad || 1) - 1 } // 🔥 FIX
            : p
        )
        .filter((p) => p.cantidad > 0)
    );
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  const vaciarCarrito = () => {
  setCarrito([]);
};

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        restarCantidad,
        eliminarDelCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
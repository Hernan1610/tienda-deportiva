export const productos = [
  {
    id: 1001,
    nombre: "Buzo Boxy Lila",
    precio: 22000,
    imagen: "/buzo-boxy-lila.png",
    categoria: "buzo-crop",
    subcategoria: "boxy",
    talles: ["Único"],
    stock: 1
  },
  {
    id: 1002,
    nombre: "Buzo Boxy Naranja",
    precio: 22000,
    imagen: "/buzo-boxy-naranja.png",
    categoria: "buzo-crop",
    subcategoria: "boxy",
    talles: ["Único"],
    stock: 1
  },
  {
    id: 1003,
    nombre: "Buzo Boxy Verde Limón",
    precio: 22000,
    imagen: "/buzo-boxy-verde-limon.png",
    categoria: "buzo-crop",
    subcategoria: "boxy",
    talles: ["Único"],
    stock: 1
  },
  {
    id: 300,
    nombre: "Musculosa Rayada Azul",
    precio: 10000,
    precioAnterior: 18000,
    imagen: "/musculosa-rayada-azul.png",
    categoria: "musculosas",
    subcategoria: "rayada",
    talles: ["L", "XL"],
    stock: 2,
    stockPorTalle: { L: 1, XL: 1 }
  },
  {
    id: 301,
    nombre: "Musculosa Rayada Beige",
    precio: 10000,
    precioAnterior: 18000,
    imagen: "/musculosa-rayada-beige.png",
    categoria: "musculosas",
    subcategoria: "rayada",
    talles: ["XL"],
    stock: 1,
    stockPorTalle: { XL: 1 }
  },
  {
    id: 302,
    nombre: "Musculosa Rayada Gris",
    precio: 10000,
    precioAnterior: 18000,
    imagen: "/musculosa-rayada-gris.png",
    categoria: "musculosas",
    subcategoria: "rayada",
    talles: ["M", "L", "XXL"],
    stock: 3,
    stockPorTalle: { M: 1, L: 1, XXL: 1 }
  },
  {
    id: 303,
    nombre: "Musculosa Rayada Naranja",
    precio: 10000,
    precioAnterior: 18000,
    imagen: "/musculosa-rayada-naranja.png",
    categoria: "musculosas",
    subcategoria: "rayada",
    talles: ["M", "XL", "XXL"],
    stock: 3,
    stockPorTalle: { M: 1, XL: 1, XXL: 1 }
  },
  {
    id: 304,
    nombre: "Musculosa Rayada Rosa",
    precio: 10000,
    precioAnterior: 18000,
    imagen: "/musculosa-rayada-rosa.png",
    categoria: "musculosas",
    subcategoria: "rayada",
    talles: ["XXL"],
    stock: 1,
    stockPorTalle: { XXL: 1 }
  },
  {
    id: 305,
    nombre: "Musculosa Rayada Verde",
    precio: 10000,
    precioAnterior: 18000,
    imagen: "/musculosa-rayada-verde.png",
    categoria: "musculosas",
    subcategoria: "rayada",
    talles: ["M", "L", "XL", "XXL"],
    stock: 4,
    stockPorTalle: { M: 1, L: 1, XL: 1, XXL: 1 }
  },
  {
    id: 306,
    nombre: "Musculosa Lisa Lila",
    precio: 10000,
    precioAnterior: 16000,
    imagen: "/musculosa-lisa-lila.png",
    categoria: "musculosas",
    subcategoria: "lisa",
    talles: ["M"],
    stock: 1,
    stockPorTalle: { M: 1 }
  },
  {
    id: 307,
    nombre: "Musculosa Lisa Gris",
    precio: 10000,
    precioAnterior: 16000,
    imagen: "/musculosa-lisa-gris.png",
    categoria: "musculosas",
    subcategoria: "lisa",
    talles: ["XL"],
    stock: 1,
    stockPorTalle: { XL: 1 }
  },

  {
    id: 216,
    nombre: "Remera Manga Corta Gris",
    precio: 8000,
    imagen: "/remera-mangas-corta-gris.png",
    categoria: "remeras",
    subcategoria: "remeras",
    talles: ["L"],
    stock: 1,
    stockPorTalle: { L: 1 }
  },
  {
    id: 217,
    nombre: "Remera Manga Corta Beige",
    precio: 8000,
    imagen: "/remera-mangas-cortas-beige.png",
    categoria: "remeras",
    subcategoria: "remeras",
    talles: ["XL"],
    stock: 1,
    stockPorTalle: { XL: 1 }
  },
  {
    id: 218,
    nombre: "Remera Manga Corta Blanca",
    precio: 8000,
    imagen: "/remera-mangas-cortas-blanca.png",
    categoria: "remeras",
    subcategoria: "remeras",
    talles: ["L"],
    stock: 1,
    stockPorTalle: { L: 1 }
  },
  {
    id: 219,
    nombre: "Remera Manga Corta Celeste",
    precio: 8000,
    imagen: "/remera-mangas-cortas-celeste.png",
    categoria: "remeras",
    subcategoria: "remeras",
    talles: ["M", "L"],
    stock: 2,
    stockPorTalle: { M: 1, L: 1 }
  },
  {
    id: 220,
    nombre: "Remera Manga Corta Fucsia",
    precio: 8000,
    imagen: "/remera-mangas-cortas-fucsia.png",
    categoria: "remeras",
    subcategoria: "remeras",
    talles: ["XL"],
    stock: 1,
    stockPorTalle: { XL: 1 }
  },
  {
    id: 221,
    nombre: "Remera Manga Corta Rosa Nude",
    precio: 8000,
    imagen: "/remera-mangas-cortas-rosa-nude.png",
    categoria: "remeras",
    subcategoria: "remeras",
    talles: ["M"],
    stock: 1,
    stockPorTalle: { M: 1 }
  },
  {
    id: 222,
    nombre: "Remera Manga Corta Rosa",
    precio: 8000,
    imagen: "/remera-mangas-cortas-rosa.png",
    categoria: "remeras",
    subcategoria: "remeras",
    talles: ["L"],
    stock: 1,
    stockPorTalle: { L: 1 }
  },
  {
    id: 223,
    nombre: "Remera Manga Corta Verde Menta",
    precio: 8000,
    imagen: "/remera-mangas-cortas-verde-menta.png",
    categoria: "remeras",
    subcategoria: "remeras",
    talles: ["M", "L"],
    stock: 2,
    stockPorTalle: { M: 1, L: 1 }
  },
  {
    id: 224,
    nombre: "Remera Manga Corta Azul Pastel",
    precio: 8000,
    imagen: "/remera-mangas.cortas-azul-pastel.png",
    categoria: "remeras",
    subcategoria: "remeras",
    talles: ["M", "L"],
    stock: 2,
    stockPorTalle: { M: 1, L: 1 }
  },
  {
    id: 210,
    nombre: "Top Azul",
    precio: 12000,
    imagen: "/top-azul.png",
    categoria: "tops",
    subcategoria: "tops",
    talles: ["L"],
    stock: 1,
    stockPorTalle: { L: 1 }
  },
  {
    id: 211,
    nombre: "Top Lila",
    precio: 12000,
    imagen: "/top-lila.png",
    categoria: "tops",
    subcategoria: "tops",
    talles: ["M"],
    stock: 1,
    stockPorTalle: { M: 1 }
  },
  {
    id: 212,
    nombre: "Top Morado",
      precio: 12000,
    imagen: "/top-morado.png",
    categoria: "tops",
    subcategoria: "tops",
    talles: ["M"],
    stock: 1,
    stockPorTalle: { M: 1 }
  },
  {
    id: 213,
    nombre: "Top Mármol",
      precio: 12000,
    imagen: "/top-estampa-marmol.png",
    categoria: "tops",
    subcategoria: "tops",
    talles: ["M"],
    stock: 1,
    stockPorTalle: { M: 1 }
  },
  {
    id: 214,
    nombre: "Top Verde Oliva",
      precio: 12000,
    imagen: "/top-verde-oliva.png",
    categoria: "tops",
    subcategoria: "tops",
    talles: ["L"],
    stock: 1,
    stockPorTalle: { L: 1 }
  },
  {
    id: 215,
    nombre: "Top Leopardo",
      precio: 12000,
    imagen: "/top-estampa-leopardo.png",
    categoria: "tops",
    subcategoria: "tops",
    talles: ["XL"],
    stock: 1,
    stockPorTalle: { XL: 1 }
  },
  {
    id: 207,
    nombre: "Calza Capri Estampada Abstracta",
    precio: 9000,
    imagen: "/calza-capri-estampada-abstracta.png",
    categoria: "productos",
    subcategoria: "calza-capri",
    talles: ["L"],
    stock: 1,
    stockPorTalle: { L: 1 }
  },
  {
    id: 208,
    nombre: "Calza Capri Estampada Camuflaje",
    precio: 9000,
    imagen: "/calza-capri-estampada-camuflaje.png",
    categoria: "productos",
    subcategoria: "calza-capri",
    talles: ["M", "L"],
    stock: 2,
    stockPorTalle: { M: 1, L: 1 }
  },
  {
    id: 209,
    nombre: "Calza Capri Estampada Animal Print",
    precio: 9000,
    imagen: "/calza-capri-estampada-animal-print.png",
    categoria: "productos",
    subcategoria: "calza-capri",
    talles: ["L"],
    stock: 1,
    stockPorTalle: { L: 1 }
  },

  // 🧺 TOALLONES ($12.000)

  {
    id: 1,
    nombre: "Toallón Deportivo Azul",
    precio: 12000,
    imagen: "/toallon-azul.png",
    categoria: "productos",
    subcategoria: "toallones",
    talles: ["Único"],
    stock: 6
  },
  {
    id: 2,
    nombre: "Toallón Azul Oscuro",
    precio: 12000,
    imagen: "/toallon-azul-oscuro.png",
    categoria: "productos",
    subcategoria: "toallones",
    talles: ["Único"],
    stock: 10
  },
  {
    id: 3,
    nombre: "Toallón Beige",
    precio: 12000,
    imagen: "/toallon-beige.png",
    categoria: "productos",
    subcategoria: "toallones",
    talles: ["Único"],
    stock: 10
  },
  {
    id: 4,
    nombre: "Toallón Gris Claro",
    precio: 12000,
    imagen: "/toallon-gris-claro.png",
    categoria: "productos",
    subcategoria: "toallones",
    talles: ["Único"],
    stock: 10
  },
  {
    id: 5,
    nombre: "Toallón Gris Oscuro",
    precio: 12000,
    imagen: "/toallon-gris-oscuro.png",
    categoria: "productos",
    subcategoria: "toallones",
    talles: ["Único"],
    stock: 10
  },
  {
    id: 6,
    nombre: "Toallón Morado",
    precio: 12000,
    imagen: "/toallon-morado.png",
    categoria: "productos",
    subcategoria: "toallones",
    talles: ["Único"],
    stock: 10
  },
  {
    id: 7,
    nombre: "Toallón Negro",
    precio: 12000,
    imagen: "/toallon-negro.png",
    categoria: "productos",
    subcategoria: "toallones",
    talles: ["Único"],
    stock: 10
  },
  {
    id: 8,
    nombre: "Toallón Rojo",
    precio: 12000,
    imagen: "/toallon-rojo.png",
    categoria: "productos",
    subcategoria: "toallones",
    talles: ["Único"],
    stock: 10
  },


  // 🧻 TOALLAS ($6.000)

  {
    id: 9,
    nombre: "Toalla Azul",
    precio: 6000,
    imagen: "/toalla-azul.png",
    categoria: "productos",
    subcategoria: "toallas",
    talles: ["Único"],
    stock: 15
  },
  {
    id: 10,
    nombre: "Toalla Azul Oscuro",
    precio: 6000,
    imagen: "/toalla-azul-oscuro.png",
    categoria: "productos",
    subcategoria: "toallas",
    talles: ["Único"],
    stock: 15
  },
  {
    id: 11,
    nombre: "Toalla Beige",
    precio: 6000,
    imagen: "/toalla-beige.png",
    categoria: "productos",
    subcategoria: "toallas",
    talles: ["Único"],
    stock: 15
  },
  {
    id: 12,
    nombre: "Toalla Gris",
    precio: 6000,
    imagen: "/toalla-gris.png",
    categoria: "productos",
    subcategoria: "toallas",
    talles: ["Único"],
    stock: 15
  },
  {
    id: 13,
    nombre: "Toalla Gris Oscuro",
    precio: 6000,
    imagen: "/toalla-gris-oscuro.png",
    categoria: "productos",
    subcategoria: "toallas",
    talles: ["Único"],
    stock: 15
  },
  {
    id: 14,
    nombre: "Toalla Lila",
    precio: 6000,
    imagen: "/toalla-lila.png",
    categoria: "productos",
    subcategoria: "toallas",
    talles: ["Único"],
    stock: 15
  },
  {
    id: 15,
    nombre: "Toalla Roja",
    precio: 6000,
    imagen: "/toalla-roja.png",
    categoria: "productos",
    subcategoria: "toallas",
    talles: ["Único"],
    stock: 15
  },
  {
    id: 16,
    nombre: "Toalla Rosa",
    precio: 6000,
    imagen: "/toalla-rosa.png",
    categoria: "productos",
    subcategoria: "toallas",
    talles: ["Único"],
    stock: 15
  },
  {
    id: 17,
    nombre: "Toalla Verde",
    precio: 6000,
    imagen: "/toalla-verde.png",
    categoria: "productos",
    subcategoria: "toallas",
    talles: ["Único"],
    stock: 15
  },
  {
    id: 18,
    nombre: "Medias Antideslizantes Gris Negra",
      precio: 6000,
    imagen: "/medias-gris-negra-M-caña.png",
    categoria: "medias",
    subcategoria: "antideslizantes",
    talles: [],
    stock: 10
  },
  {
    id: 19,
    nombre: "Medias Antideslizantes Gris Rosa",
      precio: 6000,
    imagen: "/medias-gris-rosa-M-caña.png",
    categoria: "medias",
    subcategoria: "antideslizantes",
    talles: [],
    stock: 10
  },
  {
    id: 20,
    nombre: "Medias Antideslizantes Lila Celeste",
      precio: 6000,
    imagen: "/medias-lila-celeste-soquete.png",
    categoria: "medias",
    subcategoria: "antideslizantes",
    talles: [],
    stock: 10
  },
  {
    id: 21,
    nombre: "Medias Antideslizantes Naranja Lila",
      precio: 6000,
    imagen: "/medias-naranja-lila-soquete.png",
    categoria: "medias",
    subcategoria: "antideslizantes",
    talles: [],
    stock: 10
  },
  {
    id: 22,
    nombre: "Medias Antideslizantes Rojo Negro",
      precio: 6000,
    imagen: "/medias-rojo-negro-M-caña.png",
    categoria: "medias",
    subcategoria: "antideslizantes",
    talles: [],
    stock: 10
  },
  {
    id: 23,
    nombre: "Medias Antideslizantes Rosa Negras",
      precio: 6000,
    imagen: "/medias-rosa-negras-M-caña.png",
    categoria: "medias",
    subcategoria: "antideslizantes",
    talles: [],
    stock: 10
  },

  // 🥤 BOTELLAS
  {
    id: 100,
    nombre: "Botella Celeste",
    precio: 8500,
    imagen: "/botella-celeste.png",
    categoria: "botellas",
    subcategoria: "botellas",
    descripcion: "Botella deportiva color celeste, 750ml.",
    talles: ["Único"],
    stock: 8
  },
  {
    id: 101,
    nombre: "Botella Coral 1L",
    precio: 9500,
    imagen: "/botella-coral-1ltr.png",
    categoria: "botellas",
    subcategoria: "botellas",
    descripcion: "Botella deportiva color coral, 1 litro.",
    talles: ["Único"],
    stock: 5
  },
  {
    id: 102,
    nombre: "Botella Rosa",
    precio: 8500,
    imagen: "/botella-rosa.png",
    categoria: "botellas",
    subcategoria: "botellas",
    descripcion: "Botella deportiva color rosa, 750ml.",
    talles: ["Único"],
    stock: 7
  },
  // 🚴‍♀️ CALZAS BIKER NUEVAS
  {
    id: 200,
    nombre: "Calza Biker Lila",
    precio: 8500,
    imagen: "/calza-biker-lila.png",
    categoria: "productos",
    subcategoria: "calza-biker",
    talles: ["M", "L", "XL"],
    stock: 1,
    stockPorTalle: { L: 1 }
  },
  {
    id: 201,
    nombre: "Calza Biker Estampada Abstracta",
    precio: 8500,
    imagen: "/calza-biker-estampada-abstracta.png",
    categoria: "productos",
    subcategoria: "calza-biker",
    talles: ["M", "L", "XL"],
    stock: 1,
    stockPorTalle: { L: 1 }
  },
  {
    id: 203,
    nombre: "Calza Larga Combinada",
    precio: 9500,
    imagen: "/calza-larga-combinada.png",
    categoria: "productos",
    subcategoria: "calza-larga",
    talles: ["M"],
    stock: 1,
    stockPorTalle: { M: 1 }
  },
  {
    id: 204,
    nombre: "Calza Larga Rayada",
    precio: 9500,
    imagen: "/calza-larga-rayada.png",
    categoria: "productos",
    subcategoria: "calza-larga",
    talles: ["M"],
    stock: 1,
    stockPorTalle: { M: 1 }
  },
  {
    id: 205,
    nombre: "Calza Larga Rosa",
    precio: 9500,
    imagen: "/calza-larga-rosa.png",
    categoria: "productos",
    subcategoria: "calza-larga",
    talles: ["L"],
    stock: 1,
    stockPorTalle: { L: 1 }
  },
  {
    id: 206,
    nombre: "Calza Larga Tropical",
    precio: 9500,
    imagen: "/Calza-larga-tropical.png",
    categoria: "productos",
    subcategoria: "calza-larga",
    talles: ["M"],
    stock: 1,
    stockPorTalle: { M: 1 }
  }
];
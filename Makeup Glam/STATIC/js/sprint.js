<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Maquillaje Glam</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      background-color: #fff4f7;
      color: #333;
    }

    header {
      background-color: #e91e63;
      color: white;
      padding: 20px 0;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .section {
      padding: 30px 20px;
      max-width: 900px;
      margin: auto;
    }

    .section h2 {
      color: #c2185b;
      margin-bottom: 20px;
    }

    .products {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .card {
      background-color: white;
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      width: 220px;
      overflow: hidden;
      transition: transform 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }

    .card-body {
      padding: 12px;
    }

    .card-body h3 {
      margin: 0;
      color: #d81b60;
    }

    .formulario {
      background-color: #ffe6f0;
      padding: 20px;
      border-radius: 10px;
      margin-top: 30px;
    }

    input[type="text"], input[type="url"] {
      padding: 10px;
      width: calc(100% - 22px);
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 6px;
    }

    button {
      background-color: #ec407a;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;
    }

    button:hover {
      background-color: #c2185b;
    }
  </style>
</head>
<body>
  <header>
    <h1>💄 Maquillaje Glam 💄</h1>
    <p>Agrega tus productos favoritos fácilmente ✨</p>
  </header>

  <section class="section" id="productos">
    <h2>Productos</h2>
    <div class="products" id="product-container">
      <!-- Aquí se insertarán las tarjetas de productos -->
    </div>
  </section>

  <section class="section">
    <h2>Agregar Nuevo Producto</h2>
    <div class="formulario">
      <input type="text" id="nombre" placeholder="Nombre del producto" required />
      <input type="text" id="descripcion" placeholder="Descripción del producto" required />
      <input type="url" id="imagen" placeholder="URL de imagen (https://...)" required />
      <button onclick="agregarProducto()">Agregar producto</button>
    </div>
  </section>

  <script>
    const productos = [
      {
        nombre: "Base líquida",
        descripcion: "Acabado natural y cobertura total.",
        imagen: "https://i.imgur.com/HlD2sEd.jpg"
      },
      {
        nombre: "Paleta de sombras",
        descripc

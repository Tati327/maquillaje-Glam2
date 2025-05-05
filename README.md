<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>💄 Maquillaje Glam</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(to bottom, #ffe6f0, #fff0f5);
      color: #333;
      margin: 0;
      padding: 20px;
    }

    header {
      text-align: center;
      padding: 20px;
      background-color: #e83e8c;
      color: white;
      border-radius: 10px;
    }

    h1, h2 {
      margin-bottom: 10px;
    }

    #productos {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      margin: 20px 0;
    }

    .producto {
      background-color: #fff;
      border: 2px solid #e83e8c;
      border-radius: 10px;
      padding: 10px;
      width: 220px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .producto img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }

    form {
      margin: 30px auto;
      max-width: 400px;
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      border: 2px solid #e83e8c;
    }

    form input {
      width: 100%;
      padding: 10px;
      margin: 8px 0;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    form button {
      background-color: #e83e8c;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      width: 100%;
    }

    section {
      margin: 40px 0;
      text-align: center;
    }

    audio {
      margin-top: 10px;
    }

    iframe {
      margin-top: 20px;
      border: none;
      border-radius: 10px;
    }

    footer {
      text-align: center;
      font-size: 14px;
      margin-top: 40px;
      color: #777;
    }
  </style>
</head>
<body>

  <header>
    <h1>✨ Maquillaje Glam 💄</h1>
    <p>Descubre tus productos favoritos, escucha música y diviértete 🎶🎮</p>
  </header>

  <section id="catalogo">
    <h2>🌸 Productos</h2>
    <div id="productos"></div>
  </section>

  <section id="formulario-seccion">
    <h2>➕ Agrega un producto</h2>
    <form id="formulario">
      <input type="text" id="nombre" placeholder="Nombre del producto" required>
      <input type="text" id="descripcion" placeholder="Descripción" required>
      <input type="text" id="precio" placeholder="Precio" required>
      <input type="text" id="imagen" placeholder="URL de la imagen" required>
      <button type="submit">Agregar</button>
    </form>
  </section>

  <section id="musica">
    <h2>🎵 Tu música favorita</h2>
    <p>Pon tu canción favorita mientras navegas:</p>
    <audio controls>
      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg">
      Tu navegador no soporta el reproductor de audio.
    </audio>
  </section>

  <section id="juego">
    <h2>🎮 ¡Juega Mario Bros!</h2>
    <iframe src="https://www.retrogames.cc/embed/20472-super-mario-bros.html" width="640" height="480" allowfullscreen></iframe>
  </section>

  <footer>
    💖 Hecho con amor para ti 💋 | Disfruta tu mundo de belleza y diversión ✨
  </footer>

  <script>
    const productos = [
      {
        nombre: "Labial Mate",
        descripcion: "Tonos naturales perfectos para todo el día.",
        precio: "$250",
        imagen: "https://png.pngtree.com/png-clipart/20230430/original/pngtree-lipstick-cosmetics-lipstick-png-image_9124059.png"
      },
      {
        nombre: "Máscara de pestañas Volumen",
        descripcion: "Pestañas largas y con volumen todo el día.",
        precio: "$130",
        imagen: "https://e7.pngegg.com/pngimages/371/869/png-clipart-mascara-lip-balm-eyelash-cosmetics-brush-volume-booster-cosmetics-artificial-hair-integrations.png"
      },
      {
        nombre: "Base Líquida Cobertura Alta",
        descripcion: "Acabado mate y duradero para tu piel.",
        precio: "$280",
        imagen: "https://ettos.co/cdn/shop/files/06_5_bb0fb750-fc3e-4caa-acd3-12dff136223c.png?v=1738094198"
      },
      {
        nombre: "Barra de lapiz labios",
        descripcion: "Tonos naturales perfectos para todo el día.",
        precio: "$150",
        imagen: "https://isabellastorebga.oficinapro.co/images/000172/large/132_0.png"
      },
      {
        nombre: "sombras para ojos",
        descripcion: "Pestañas largas y con volumen todo el día.",
        precio: "$330",
        imagen: "https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-a-box-of-eyeshadow-palette-png-image_2449753.jpg"
      },
      {
        nombre: "delineador de varios colores",
        descripcion: "Acabado mate y duradero para tu piel.",
        precio: "$290",
        imagen: "https://miiscosmetics.com/wp-content/uploads/2024/08/DEL-01-PORTADA.png"
      } 
    ];

    function mostrarProductos() {
      const contenedor = document.getElementById("productos");
      contenedor.innerHTML = "";
      productos.forEach(p => {
        contenedor.innerHTML += `
          <div class="producto">
            <img src="${p.imagen}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p>${p.descripcion}</p>
            <strong>${p.precio}</strong>
          </div>
        `;
      });
    }

    document.getElementById("formulario").addEventListener("submit", function(e) {
      e.preventDefault();
      const nuevo = {
        nombre: document.getElementById("nombre").value,
        descripcion: document.getElementById("descripcion").value,
        precio: document.getElementById("precio").value,
        imagen: document.getElementById("imagen").value
      };
      productos.push(nuevo);
      mostrarProductos();
      this.reset();
    });

    mostrarProductos();
  </script>

</body>
</html>

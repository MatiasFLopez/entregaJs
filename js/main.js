// PRODUCTOS
const productos = [
    // Gabinetes
    {
        id: "gabinete-01",
        titulo: "Masterbox Mb511",
        imagen: "./img/gabinete/gabinete1.jpg",
        categoria: {
            nombre: "Gabinetes",
            id: "gabinetes"
        },
        precio: 40000
    },
    {
        id: "gabinete-02",
        titulo: "Thermaltake 20rs",
        imagen: "./img/gabinete/gabinete2.jpg",
        categoria: {
            nombre: "Gabinetes",
            id: "gabinetes"
        },
        precio: 38000
    },
    {
        id: "gabinete-03",
        titulo: "Thermaltake H200",
        imagen: "./img/gabinete/gabinete3.jpg",
        categoria: {
            nombre: "Gabinetes",
            id: "gabinetes"
        },
        precio: 35000
    },
    {
        id: "gabinete-04",
        titulo: "Masterbox Td300",
        imagen: "./img/gabinete/gabinete4.jpg",
        categoria: {
            nombre: "Gabinetes",
            id: "gabinetes"
        },
        precio: 28200
    },
    {
        id: "gabinete-05",
        titulo: "MasterBox Mb311L",
        imagen: "./img/gabinete/gabinete5.jpg",
        categoria: {
            nombre: "Gabinetes",
            id: "gabinetes"
        },
        precio: 24000
    },
    // Graficas
    {
        id: "grafica-01",
        titulo: "GTX 1650",
        imagen: "./img/grafica/grafica1.jpg",
        categoria: {
            nombre: "Gráficas",
            id: "graficas"
        },
        precio: 100000
    },
    {
        id: "grafica-02",
        titulo: "GTX 1660Ti",
        imagen: "./img/grafica/grafica2.jpg",
        categoria: {
            nombre: "Gráficas",
            id: "graficas"
        },
        precio: 180000
    },
    {
        id: "grafica-03",
        titulo: "RTX 3060Ti",
        imagen: "./img/grafica/grafica3.jpg",
        categoria: {
            nombre: "Gráficas",
            id: "graficas"
        },
        precio: 230000
    },
    {
        id: "grafica-04",
        titulo: "RTX 3080Ti",
        imagen: "./img/grafica/grafica4.jpg",
        categoria: {
            nombre: "Gráficas",
            id: "graficas"
        },
        precio: 300000
    },
    {
        id: "grafica-05",
        titulo: "RTX 3090",
        imagen: "./img/grafica/grafica5.jpg",
        categoria: {
            nombre: "Gráficas",
            id: "graficas"
        },
        precio: 430000
    },
    // Procesadores
    {
        id: "procesador-01",
        titulo: "Core I5 12400",
        imagen: "./img/procesador/pro1.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 83000
    },
    {
        id: "procesador-02",
        titulo: "Core i5-12600K",
        imagen: "./img/procesador/pro2.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 120000
    },
    {
        id: "procesador-03",
        titulo: "Core I7-12700K",
        imagen: "./img/procesador/pro3.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 178000
    },
    {
        id: "procesador-04",
        titulo: "Ryzen 5 5600X",
        imagen: "./img/procesador/pro4.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 103000
    },
    {
        id: "procesador-05",
        titulo: "Ryzen 7 5700X",
        imagen: "./img/procesador/pro5.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 127000
    },
    // Motherboards
    {
        id: "mother-01",
        titulo: "Gigabyte Z690 UD",
        imagen: "./img/mother/mother1.jpg",
        categoria: {
            nombre: "Motherboards",
            id: "motherboards"
        },
        precio: 69999
    },
    {
        id: "mother-02",
        titulo: "Gigabyte B660m Ds3h",
        imagen: "./img/mother/mother2.jpg",
        categoria: {
            nombre: "Motherboards",
            id: "motherboards"
        },
        precio: 70000
    },
    {
        id: "mother-03",
        titulo: "Asus Prime X570 Pro",
        imagen: "./img/mother/mother3.jpg",
        categoria: {
            nombre: "Motherboards",
            id: "motherboards"
        },
        precio: 102000
    },
    {
        id: "mother-04",
        titulo: "Asus Prime H610m-e",
        imagen: "./img/mother/mother4.jpg",
        categoria: {
            nombre: "Motherboards",
            id: "motherboards"
        },
        precio: 41999
    },
    {
        id: "mother-05",
        titulo: "Gigabyte H510m",
        imagen: "./img/mother/mother5.jpg",
        categoria: {
            nombre: "Motherboards",
            id: "motherboards"
        },
        precio: 30590
    },
    // Almacenamiento
    {
        id: "almacenamieto-01",
        titulo: "Kingston Snv2s 1tb",
        imagen: "./img/unidad/ssd1.jpg",
        categoria: {
            nombre: "Almacenamiento",
            id: "almacenamiento"
        },
        precio: 23200
    },
    {
        id: "almacenamieto-02",
        titulo: "WD Blue Sn570 1tb",
        imagen: "./img/unidad/ssd2.jpg",
        categoria: {
            nombre: "Almacenamiento",
            id: "almacenamiento"
        },
        precio: 36500
    },
    {
        id: "almacenamieto-03",
        titulo: "XPG GAMMIX S11Pro 1tb",
        imagen: "./img/unidad/ssd3.jpg",
        categoria: {
            nombre: "Almacenamiento",
            id: "almacenamiento"
        },
        precio: 52999
    },
    {
        id: "almacenamieto-04",
        titulo: "WD Black SN770 2tb",
        imagen: "./img/unidad/ssd4.jpg",
        categoria: {
            nombre: "Almacenamiento",
            id: "almacenamiento"
        },
        precio: 110000
    },
    {
        id: "almacenamieto-05",
        titulo: "Samsung 970 EVOPlus 2tb",
        imagen: "./img/unidad/ssd5.jpg",
        categoria: {
            nombre: "Almacenamiento",
            id: "almacenamiento"
        },
        precio: 94000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(poductosElegidos) {

    contenedorProductos.innerHTML = "";

    poductosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton)

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
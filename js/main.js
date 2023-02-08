// PRODUCTOS
const productos = [
    // Gabinetes
    {
        id: "gabinete-01",
        titulo: "Gabinete 01",
        imagen: "./img/gabinete/gabinete1.jpg",
        categoria: {
            nombre: "Gabinetes",
            id: "gabinetes"
        },
        precio: 1000
    },
    {
        id: "gabinete-02",
        titulo: "Gabinete 02",
        imagen: "./img/gabinete/gabinete2.jpg",
        categoria: {
            nombre: "Gabinetes",
            id: "gabinetes"
        },
        precio: 1000
    },
    {
        id: "gabinete-03",
        titulo: "Gabinete 03",
        imagen: "./img/gabinete/gabinete3.jpg",
        categoria: {
            nombre: "Gabinetes",
            id: "gabinetes"
        },
        precio: 1000
    },
    {
        id: "gabinete-04",
        titulo: "Gabinete 04",
        imagen: "./img/gabinete/gabinete4.jpg",
        categoria: {
            nombre: "Gabinetes",
            id: "gabinetes"
        },
        precio: 1000
    },
    {
        id: "gabinete-05",
        titulo: "Gabinete 05",
        imagen: "./img/gabinete/gabinete5.jpg",
        categoria: {
            nombre: "Gabinetes",
            id: "gabinetes"
        },
        precio: 1000
    },
    // Graficas
    {
        id: "grafica-01",
        titulo: "Gráfica 01",
        imagen: "./img/grafica/grafica1.jpg",
        categoria: {
            nombre: "Gráficas",
            id: "graficas"
        },
        precio: 1000
    },
    {
        id: "grafica-02",
        titulo: "Gráfica 02",
        imagen: "./img/grafica/grafica2.jpg",
        categoria: {
            nombre: "Gráficas",
            id: "graficas"
        },
        precio: 1000
    },
    {
        id: "grafica-03",
        titulo: "Gráfica 03",
        imagen: "./img/grafica/grafica3.jpg",
        categoria: {
            nombre: "Gráficas",
            id: "graficas"
        },
        precio: 1000
    },
    {
        id: "grafica-04",
        titulo: "Gráfica 04",
        imagen: "./img/grafica/grafica4.jpg",
        categoria: {
            nombre: "Gráficas",
            id: "graficas"
        },
        precio: 1000
    },
    {
        id: "grafica-05",
        titulo: "Gráfica 05",
        imagen: "./img/grafica/grafica5.jpg",
        categoria: {
            nombre: "Gráficas",
            id: "graficas"
        },
        precio: 1000
    },
    // Procesadores
    {
        id: "procesador-01",
        titulo: "Procesador 01",
        imagen: "./img/procesador/pro1.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 1000
    },
    {
        id: "procesador-02",
        titulo: "Procesador 02",
        imagen: "./img/procesador/pro2.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 1000
    },
    {
        id: "procesador-03",
        titulo: "Procesador 03",
        imagen: "./img/procesador/pro3.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 1000
    },
    {
        id: "procesador-04",
        titulo: "Procesador 04",
        imagen: "./img/procesador/pro4.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 1000
    },
    {
        id: "procesador-05",
        titulo: "Procesador 05",
        imagen: "./img/procesador/pro5.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 1000
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
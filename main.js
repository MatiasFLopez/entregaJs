// const productos = [
//     { nombre: 'procesador', precio: 70000 },
//     { nombre: 'mother', precio: 30000 },
//     { nombre: 'grafica', precio: 120000 },
//     { nombre: 'ram', precio: 25000 },
//     { nombre: 'gabinete', precio: 20000 }
// ];

// let carrito = []

// let seleccion = prompt('¡Hola!.¿Desea comprar algún producto?')

// while (seleccion != 'si' && seleccion != 'no') {
//     alert('Por favor, responda: si o no')
//     seleccion = prompt('¿Desea comprar algún producto?')
// }

// if (seleccion === "si") {
//     alert('A continuación nuestra lista de productos...')
//     let todosLosProductos = productos.map((producto) => producto.nombre + ' ' + producto.precio + '$');
//     alert(todosLosProductos.join(' - '))
// } else if (seleccion === 'no') {
//     alert('¡Gracias por venir, hasta pronto!')
// }

// while (seleccion != 'no') {
//     let producto = prompt('Agregar producto al carrito')
//     let precio = 0

//     if (producto == 'procesador' || producto == 'mother' || producto == 'grafica' || producto == 'ram' || producto == 'gabinete') {
//         switch (producto) {
//             case 'procesador':
//                 precio = 70000
//                 break;
//             case 'mother':
//                 precio = 30000
//                 break;
//             case 'grafica':
//                 precio = 120000
//                 break;
//             case 'ram':
//                 precio = 25000
//                 break;
//             case 'gabinete':
//                 precio = 20000
//                 break;
//             default:
//                 break;
//         }
//         let unidades = Number(prompt('¿Cuantas unidades quieres llevar?'))

//         carrito.push({producto, unidades, precio})
//         console.log(carrito)
//     }else {
//         alert('No tenemos ese producto')
//     }

//     seleccion = prompt ('¿Desea seguir comprando?')

//     while (seleccion === 'no') {
//         alert('¡Gracias por la compra, vuelva pronto!')
//         carrito.forEach((carritoFinal) => {
//             console.log(`producto: ${carritoFinal.producto}, unidades:${carritoFinal.unidades}, total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
//         })
//         break;
//     }
// }

// const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
// console.log (`El total a pagar por su compra es ${total}`)
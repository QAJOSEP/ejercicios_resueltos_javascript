/**
 * [8] En esta ventana podemos ver
el listado de gastos. Imaginemos
que tales gastos se encuentran 
almacenados en una matriz donde
se almacena el concepto, la fecha y
la cantidad del gasto.
¿Qué bucle usarías para recorrer
toda esa información y mostrarla?
 */

const gastos =[
    ["Disposición de efectivo", 60],
    ["Pago con tarjeta en Gasolinera", 56],
    ["Recibo de fundación y ONG", 25],
    ["Pago con tarjeta Dr Simi", 45.31],
    ["Pago con tarjeta en Gasolinera", 60],
]

// Opción (1) con un bucle for
for (let i = 0; i < gastos.length; i++) {
     console.log(gastos[i]);
}

console.log("segunda opción");
// Opción (2) con un bucle forEach
gastos.forEach(element => {
    console.log(element);
});
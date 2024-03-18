// //  Aplícale a ese producto una oferta de descuento del 15%. 
// Puedes hacerlo de muchas maneras, por ejemplo:
// primero multiplicando el precio base por 85 y después diviendo entre 100,
// o también multiplicando el precio base por 0.85.
// No importa si escoges alguno de estos procedimientos u otros cálculos matemáticos. 
// Pero hazlo con operadores acumulativos.

let precio = 4.56;
const impuesto = 0.7;
const descuento = 0.85
precio *= impuesto;
precio *= descuento;

console.log(precio);
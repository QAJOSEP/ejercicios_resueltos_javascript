/*
[7]- Este caso es más complejo. El usuario quiere 
enviar dinero, pero usando una moneda diferente.

1. Por lo tanto primero hay que aplicar un valor
al tipo de cambio que se empleará en la cantidad.

2. Imagina que el usuario quiere enviar 200 dólares.

3. ¿Qué variables y operaciones usarías para 
calcular el saldo final después de pulsar el botón
“Envía dinero”?
*/

const tipoCambio = 13.1503
let usd = 200
usd *= tipoCambio

console.log(usd);